import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// ⚠️ IMPORTANTE: use o domínio verificado do Resend
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, rating, comment } = await request.json();

    // Validação
    if (!name || !rating || !comment) {
      return NextResponse.json(
        { error: 'Todos os campos são obrigatórios.' },
        { status: 400 }
      );
    }

    if (rating < 1 || rating > 5) {
      return NextResponse.json(
        { error: 'Avaliação deve ser entre 1 e 5 estrelas.' },
        { status: 400 }
      );
    }

    // 🔥 Enviar email usando Resend
    try {
      const response = await resend.emails.send({
        from: 'Cardio-AI <noreply@contact.cardio-ai.app>', // DOMÍNIO CORRETO
        to: 'cardioai.contact@gmail.com',
        subject: `Nova Avaliação - ${rating} estrelas de ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #e11d48;">Nova Avaliação Recebida! ⭐</h2>
            <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p><strong>Nome:</strong> ${name}</p>
              <p><strong>Avaliação:</strong> ${'⭐'.repeat(rating)} (${rating}/5)</p>
              <p><strong>Comentário:</strong></p>
              <p style="white-space: pre-wrap; background: #fff; padding: 12px; border-radius: 6px;">
                ${comment}
              </p>
            </div>
            <p style="color: #6b7280; font-size: 12px;">
              Enviado em: ${new Date().toLocaleString('pt-BR')}
            </p>
          </div>
        `,
      });

      console.log("Email de avaliação enviado:", response);

      return NextResponse.json(
        { success: true, message: 'Avaliação enviada com sucesso!' },
        { status: 200 }
      );

    } catch (emailError: any) {
      console.error('Erro ao enviar email de avaliação:', emailError);
      return NextResponse.json(
        { error: 'Erro ao enviar email. Verifique sua configuração do Resend.' },
        { status: 500 }
      );
    }

  } catch (error) {
    console.error('Erro geral no endpoint /reviews:', error);
    return NextResponse.json(
      { error: 'Erro interno ao enviar avaliação.' },
      { status: 500 }
    );
  }
}