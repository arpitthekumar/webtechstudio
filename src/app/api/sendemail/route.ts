import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  const { name, mobile } = await req.json();

  if (!name || !mobile) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'Gmail', // or use 'smtp.ethereal.email' for testing
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Promo Form" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_RECEIVER, // Your email
      subject: 'New Promo Form Submission',
      html: `
        <h3>New Promo Inquiry</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Mobile:</strong> ${mobile}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
