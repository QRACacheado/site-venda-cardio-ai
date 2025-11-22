import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { createClient } from '@supabase/supabase-js';

const resend = new Resend(process.env.RESEND_API_KEY);

// Cliente Supabase com SERVICE_ROLE_KEY para operações de backend
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(request: Request) {
  try {
    const { name, rating, comment } = await request.json();

    // Validação básica
    if (!name || !rating || !comment) {
      return NextResponse.json(
        { error: 'Todos os campos são obrigatórios' },
        { status: 400 }
      );
    }

    if (rating < 1 || rating > 5) {
      return NextResponse.json(
        { error: 'Avaliação deve ser entre 1 e 5 estrelas' },
        { status: 400 }
      );
    }

    // Salvar review na tabela 'reviews' do Supabase
    const { data: reviewData, error: dbError } = await supabase
      .from('reviews')
      .insert({
        name,
        rating,
        comment,
      })
      .select()
      .single();

    if (dbError) {
      console.error('Erro ao salvar review no Supabase:', dbError);
      return NextResponse.json(
        { error: 'Erro ao salvar avaliação no banco de dados' },
        { status: 500 }
      );
    }

    // Enviar notificação de nova avaliação por email
    try {
      await resend.emails.send({
        from: 'Cardio-AI <onboarding@resend.dev>',
        to: 'cardioai.contact@gmail.com',
        subject: `Nova Avaliação - ${rating} estrelas de ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #e11d48;">Nova Avaliação Recebida! ⭐</h2>
            <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p><strong>Nome:</strong> ${name}</p>
              <p><strong>Avaliação:</strong> ${'⭐'.repeat(rating)} (${rating}/5)</p>
              <p><strong>Comentário:</strong></p>
              <p style="white-space: pre-wrap; background: white; padding: 15px; border-radius: 6px;">${comment}</p>
            </div>
            <p style="color: #6b7280; font-size: 12px;">
              Enviado em: ${new Date().toLocaleString('pt-BR')}
            </p>
          </div>
        `,
      });
    } catch (emailError) {
      console.error('Erro ao enviar email de avaliação:', emailError);
      // Continua mesmo se o email falhar, pois o review já foi salvo
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Avaliação enviada com sucesso!',
        data: reviewData 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Erro ao processar avaliação:', error);
    return NextResponse.json(
      { error: 'Erro ao enviar avaliação' },
      { status: 500 }
    );
  }
}
