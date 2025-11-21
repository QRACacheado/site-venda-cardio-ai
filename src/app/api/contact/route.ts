import { NextResponse } from 'next/server';

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

    // Aqui você pode integrar com um serviço de email como:
    // - Resend
    // - SendGrid
    // - Nodemailer
    // - etc.
    
    // Por enquanto, vamos simular o envio do email
    console.log('Mensagem de contato recebida:', {
      name,
      email,
      message,
      to: 'cardioai.contact@gmail.com',
      timestamp: new Date().toISOString(),
    });

    // Simulação de envio de email bem-sucedido
    // Em produção, você substituiria isso por uma chamada real de API de email
    
    return NextResponse.json(
      { success: true, message: 'Mensagem enviada com sucesso!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Erro ao processar mensagem de contato:', error);
    return NextResponse.json(
      { error: 'Erro ao enviar mensagem' },
      { status: 500 }
    );
  }
}
