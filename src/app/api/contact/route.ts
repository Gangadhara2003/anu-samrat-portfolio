import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_PASS;

    if (!emailUser || !emailPass) {
      console.error("Missing EMAIL_USER or EMAIL_PASS environment variables");
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${emailUser}>`,
      to: emailUser,
      replyTo: email,
      subject: `Portfolio Inquiry from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #d97706, #f59e0b); padding: 24px; border-radius: 12px 12px 0 0;">
            <h2 style="color: white; margin: 0;">New Portfolio Inquiry ✍️</h2>
          </div>
          <div style="background: #1a1a1a; padding: 24px; color: #e5e5e5; border-radius: 0 0 12px 12px;">
            <p style="margin: 0 0 16px;"><strong style="color: #fbbf24;">Name:</strong> ${name}</p>
            <p style="margin: 0 0 16px;"><strong style="color: #fbbf24;">Email:</strong> <a href="mailto:${email}" style="color: #60a5fa;">${email}</a></p>
            <p style="margin: 0 0 8px;"><strong style="color: #fbbf24;">Message:</strong></p>
            <div style="background: #262626; padding: 16px; border-radius: 8px; border-left: 3px solid #d97706;">
              <p style="margin: 0; white-space: pre-wrap; line-height: 1.6;">${message}</p>
            </div>
            <hr style="border: none; border-top: 1px solid #333; margin: 24px 0;" />
            <p style="color: #888; font-size: 12px; margin: 0;">Sent from Anusamrat M's Portfolio Website</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to send email");
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
