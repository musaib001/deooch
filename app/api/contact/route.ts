import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  const { name, email, company, message } = await req.json();

  // ponytail: minimal validation — required fields + basic email shape
  if (!name || !email || !message || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return NextResponse.json({ error: 'Please fill in your name, a valid email, and a message.' }, { status: 400 });
  }

  const user = process.env.ZOHO_USER;
  const pass = process.env.ZOHO_PASS;
  if (!user || !pass) {
    return NextResponse.json({ error: 'Email is not configured yet.' }, { status: 500 });
  }

  const transporter = nodemailer.createTransport({
    host: 'smtp.zoho.com',
    port: 465,
    secure: true,
    auth: { user, pass: pass.trim() }, // ponytail: trim guards against pasted trailing newline/space
  });

  try {
    await transporter.sendMail({
      from: `"Deooch Website" <${user}>`,
      to: 'hello@deooch.com',
      replyTo: email,
      subject: `New inquiry from ${name}${company ? ` (${company})` : ''}`,
      text: `Name: ${name}\nEmail: ${email}\nCompany: ${company || '—'}\n\n${message}`,
    });
  } catch (err) {
    console.error('SMTP send failed:', err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : 'Email send failed.' },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true });
}
