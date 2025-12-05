import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const form = await req.formData();

    const name = form.get("name")?.toString() || "";
    const contact = form.get("contact")?.toString() || "";
    const email = form.get("email")?.toString() || "";
    const distributor = form.get("distributor") === "on";
    const trader = form.get("trader") === "on";
    const exporter = form.get("exporter") === "on";
    const others = form.get("others")?.toString() || "";
    const business = form.get("business")?.toString() || "";
    const origin = form.get("origin")?.toString() || "";
    const profile = form.get("profile")?.toString() || "";

    // ===== FIXED FILE PROCESSING =====
    const files: Array<{ filename: string; content: Buffer }> = [];

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    for (const [key, value] of form.entries()) {
      if (value instanceof File) {
        const arrayBuffer = await value.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);

        files.push({
          filename: value.name,
          content: buffer,
        });
      }
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"${name}" <${email}>`,
      replyTo: email,
      to: process.env.EXPORT_EMAIL_RECEIVER || process.env.EMAIL_USER,
      subject: `New Export Query from ${name}`,
      text: `
Export Query Details:

Name: ${name}
Email: ${email}
Contact: ${contact}

Business Types:
- Distributor: ${distributor ? "Yes" : "No"}
- Trader: ${trader ? "Yes" : "No"}
- Exporter/Importer: ${exporter ? "Yes" : "No"}
- Other: ${others}

Business Name & Address:
${business}

Country/Origin: ${origin}
Business Profile: ${profile}
      `,
      attachments: files,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Export query sent successfully!" });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error("Export Query Error:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
