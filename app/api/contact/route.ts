import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, message, subject } = await request.json();

    // Validate required environment variables
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('Missing EMAIL_USER or EMAIL_PASS environment variables');
      return NextResponse.json(
        { error: 'Configuración de email incompleta' },
        { status: 500 }
      );
    }

    // Create a transporter using Gmail with better configuration
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER, // Your email
        pass: process.env.EMAIL_PASS, // Your app password (not regular password)
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'cfigueroa@nfcorredores.com, nfernandez@nfcorredores.com', // Multiple recipients
      subject: `${name} - ${subject || 'Nueva consulta desde sitio web - NF Corredores'}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #484060; border-bottom: 2px solid #615A77; padding-bottom: 10px;">
            Nueva consulta desde el sitio web
          </h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Nombre:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Teléfono:</strong> ${phone || 'No proporcionado'}</p>
          </div>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #484060;">Mensaje:</h3>
            <p style="background-color: #f1f3f4; padding: 15px; border-radius: 5px; line-height: 1.6;">
              ${message}
            </p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666;">
            <p>Este mensaje fue enviado desde el formulario de contacto de nfcorredores.cl</p>
          </div>
        </div>
      `,
      text: `
        Nueva consulta desde el sitio web - NF Corredores
        
        Nombre: ${name}
        Email: ${email}
        Teléfono: ${phone || 'No proporcionado'}
        
        Mensaje:
        ${message}
        
        Este mensaje fue enviado desde el formulario de contacto de nfcorredores.cl
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email enviado exitosamente' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Error enviando el email' },
      { status: 500 }
    );
  }
}
