import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, message } = await request.json();

    // Create a transporter using Gmail (you can change this to other providers)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Your email
        pass: process.env.EMAIL_PASS, // Your app password
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'contacto@corredoresnf.cl', // Recipient email
      subject: 'Nueva consulta desde sitio web - NF Corredores',
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
            <p>Este mensaje fue enviado desde el formulario de contacto de corredoresnf.cl</p>
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
        
        Este mensaje fue enviado desde el formulario de contacto de corredoresnf.cl
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
