import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, message, company, phone, subject, userType } = await request.json();

    // Configuration du transporteur d'email
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Template HTML de l'email
    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              color: #333;
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
            }
            .header {
              background: linear-gradient(135deg, #0ea5e9, #6366f1);
              color: white;
              padding: 30px;
              text-align: center;
              border-radius: 10px 10px 0 0;
            }
            .content {
              background: #ffffff;
              padding: 30px;
              border: 1px solid #e5e7eb;
              border-radius: 0 0 10px 10px;
            }
            .info-block {
              background: #f8fafc;
              padding: 15px;
              border-radius: 8px;
              margin-bottom: 15px;
            }
            .label {
              color: #64748b;
              font-size: 0.9em;
              margin-bottom: 5px;
            }
            .value {
              color: #1e293b;
              font-weight: 500;
              margin-bottom: 15px;
            }
            .message-block {
              background: #f1f5f9;
              padding: 20px;
              border-radius: 8px;
              margin-top: 20px;
            }
            .footer {
              text-align: center;
              margin-top: 30px;
              padding-top: 20px;
              border-top: 1px solid #e5e7eb;
              color: #64748b;
              font-size: 0.9em;
            }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>Nouveau message de contact</h1>
            <p>E-confident - Protection contre le cyberharcèlement</p>
          </div>
          
          <div class="content">
            <div class="info-block">
              <div class="label">Type de contact</div>
              <div class="value">${userType === 'professional' ? 'Professionnel' : 'Particulier'}</div>
              
              <div class="label">Nom</div>
              <div class="value">${name}</div>
              
              <div class="label">Email</div>
              <div class="value">${email}</div>
              
              ${company ? `
                <div class="label">Entreprise</div>
                <div class="value">${company}</div>
              ` : ''}
              
              ${phone ? `
                <div class="label">Téléphone</div>
                <div class="value">${phone}</div>
              ` : ''}
              
              <div class="label">Sujet</div>
              <div class="value">${subject}</div>
            </div>

            <div class="message-block">
              <div class="label">Message</div>
              <div class="value">${message.replace(/\n/g, '<br>')}</div>
            </div>
          </div>

          <div class="footer">
            <p>Ce message a été envoyé depuis le formulaire de contact de E-confident</p>
            <p>© ${new Date().getFullYear()} E-confident. Tous droits réservés.</p>
          </div>
        </body>
      </html>
    `;

    // Configuration de l'email
    const mailOptions = {
      from: {
        name: `${name} via E-confident`,
        address: process.env.EMAIL_USER as string
      },
      replyTo: email,
      to: process.env.EMAIL_USER,
      subject: `Nouveau message de contact de ${name} - ${subject}`,
      text: `
        Type de contact: ${userType === 'professional' ? 'Professionnel' : 'Particulier'}
        Nom: ${name}
        Email: ${email}
        ${company ? `Entreprise: ${company}` : ''}
        ${phone ? `Téléphone: ${phone}` : ''}
        Sujet: ${subject}
        Message: ${message}
      `,
      html: emailHtml,
    };

    // Envoi de l'email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email envoyé avec succès' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
    return NextResponse.json(
      { error: 'Erreur lors de l\'envoi de l\'email' },
      { status: 500 }
    );
  }
} 