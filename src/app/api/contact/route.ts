import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const brevo = require('@getbrevo/brevo');
  const apiInstance = new brevo.TransactionalEmailsApi();
  const apiKey = process.env.BREVO_API_KEY;

  if (!apiKey) {
    return NextResponse.json({ error: 'Clé API manquante' }, { status: 500 });
  }

  apiInstance.setApiKey(brevo.TransactionalEmailsApiApiKeys.apiKey, apiKey);

  const body = await req.json();
  const { name, email, company, message } = body;

  const sendSmtpEmail = new brevo.SendSmtpEmail();
  sendSmtpEmail.subject = `Nouveau message de contact Holydais`;
  sendSmtpEmail.htmlContent = `
    <h2>Nouveau message de contact</h2>
    <p><b>Nom :</b> ${name}</p>
    <p><b>Email :</b> ${email}</p>
    <p><b>Entreprise :</b> ${company}</p>
    <p><b>Message :</b><br/>${message}</p>
  `;
  sendSmtpEmail.sender = { name: 'Lucas Holydais', email: 'lucas@holydais.com' };
  sendSmtpEmail.to = [ { email: 'lucas@holydais.com', name: 'Lucas Holydais' } ];
  sendSmtpEmail.replyTo = { email, name };

  try {
    const data = await apiInstance.sendTransacEmail(sendSmtpEmail);
    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Erreur lors de l\'envoi' }, { status: 500 });
  }
} 