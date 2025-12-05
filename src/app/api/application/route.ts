import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const form = await req.formData();

    const firstName = form.get("firstName")?.toString() || "";
    const lastName = form.get("lastName")?.toString() || "";
    const email = form.get("email")?.toString() || "";
    const phone = form.get("phone")?.toString() || "";
    const position = form.get("position")?.toString() || "";
    const startDate = form.get("startDate")?.toString() || "";
    const coverLetter = form.get("coverLetter")?.toString() || "";

    // ----- Resume File -----
    const resumeFile = form.get("resume") as unknown as File | null;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const attachments: any[] = [];

    if (resumeFile) {
      const arrayBuffer = await resumeFile.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);

      attachments.push({
        filename: resumeFile.name,
        content: buffer,
      });
    }

    // ---- Email Transporter ----
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.CAREER_EMAIL_USER,
        pass: process.env.CAREER_EMAIL_PASS,
      },
    });

    // ---- Email Body (HTML) ----
    const htmlBody = `
      <h2>New Career Application</h2>

      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Applied Position:</strong> ${position}</p>
      <p><strong>Start Date:</strong> ${startDate}</p>
      <p><strong>Cover Letter:</strong></p>
      <p>${coverLetter.replace(/\n/g, "<br>")}</p>
    `;

    const mailOptions = {
      from: `"${firstName} ${lastName}" <${email}>`,
      replyTo: email,
      to: process.env.CAREER_EMAIL_RECEIVER || process.env.CAREER_EMAIL_USER,
      subject: `New Job Application - ${firstName} ${lastName}`,
      html: htmlBody,
      attachments,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      success: true,
      message: "Application submitted successfully!",
    });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error("Career Application Error:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
