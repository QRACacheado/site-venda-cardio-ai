import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { createClient } from '@supabase/supabase-js';

const resend = new Resend(process.env.RESEND_API_KEY);

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    // Salvar no Supabase
    const { error: dbError } = await supabase
      .from('contacts')
      .insert([{ name, email, message }]);

    if (dbError) {
      console.error('Erro ao salvar contato no Supabase:', dbError);
    }

    // Enviar email de notificação
    try {
      await resend.emails.send({
        from: 'Cardio-AI <onboarding@resend.dev>',
        to: 'cardioai.contact@gmail.com',
        subject: `Nova Mensagem de Contato - ${name}`,
        html: `
          <h2>Nova Mensagem de Contato</h2>
          <p><strong>Nome:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Mensagem:</strong></p>
          <p>${message}</p>
        `,
      });
    } catch (emailError) {
      console.error('Erro ao enviar email:', emailError);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Erro ao processar contato:', error);
    return NextResponse.json({ error: 'Erro ao processar contato' }, { status: 500 });
  }
}
