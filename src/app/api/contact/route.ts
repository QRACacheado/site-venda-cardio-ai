import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // Validação básica
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Todos os campos são obrigatórios' },
        { status: 400 }
      );
    }

    // Enviar email usando Resend
    try {
      await resend.emails.send({
        from: 'Cardio-AI <onboarding@resend.dev>', // Email verificado no Resend
        to: 'cardioai.contact@gmail.com',
        replyTo: email,
        subject: `Nova mensagem de contato - ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #e11d48;">Nova Mensagem de Contato</h2>
            <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p><strong>Nome:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Mensagem:</strong></p>
              <p style="white-space: pre-wrap;">${message}</p>
            </div>
            <p style="color: #6b7280; font-size: 12px;">
              Enviado em: ${new Date().toLocaleString('pt-BR')}
            </p>
          </div>
        `,
      });

      return NextResponse.json(
        { success: true, message: 'Mensagem enviada com sucesso!' },
        { status: 200 }
      );
    } catch (emailError) {
      console.error('Erro ao enviar email:', emailError);
      return NextResponse.json(
        { error: 'Erro ao enviar email. Verifique a configuração do Resend.' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Erro ao processar mensagem de contato:', error);
    return NextResponse.json(
      { error: 'Erro ao enviar mensagem' },
      { status: 500 }
    );
  }
}
