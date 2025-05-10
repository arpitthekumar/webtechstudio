import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, mobile } = await req.json();

    if (!name || !mobile) {
      return new Response(
        JSON.stringify({ error: "Name and mobile are required." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_RECEIVER || process.env.EMAIL_USER,
      subject: "New Promo Discount Submission",
      html: `
        <h3>Promo Discount Request</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Mobile:</strong> ${mobile}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ success: true, message: "Email sent successfully!" }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Email send error:", error);
    return new Response(
      JSON.stringify({ error: "Failed to send email." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
