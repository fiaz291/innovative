import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    const {
      message,
      firstName,
      lastName,
      address,
      phone,
      email,
      city,
    } = data;

    // --- Configure Nodemailer ---
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // --- Email content ---
    const mailOptions = {
      from: `"${firstName} ${lastName}" <${email}>`,
      replyTo: email,
      to: process.env.EMAIL_RECEIVER || process.env.EMAIL_USER,
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      text: `
        You have received a new message from your website contact form:

        Message:
        ${message}

        Details:
        Name: ${firstName} ${lastName}
        Email: ${email}
        Phone: ${phone}
        Address: ${address}
        City: ${city}
        `,
      };

    // --- Send Email ---
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Email sent successfully!" });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error("Error sending email:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
