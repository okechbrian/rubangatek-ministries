import { NextRequest, NextResponse } from "next/server";
import { sendEmail } from "@/lib/email";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    const errors: string[] = [];
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      errors.push("Name is required (min 2 characters)");
    }
    if (!email || typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.push("A valid email address is required");
    }
    if (!message || typeof message !== "string" || message.trim().length < 10) {
      errors.push("Message is required (min 10 characters)");
    }

    if (errors.length > 0) {
      return NextResponse.json({ success: false, errors }, { status: 400 });
    }

    const to = process.env.CONTACT_EMAIL || "info@rubangatekministries.org";

    await sendEmail({
      to,
      subject: `New message from ${name} — Rubangatek Ministries website`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <hr />
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br />")}</p>
      `,
      replyTo: email,
    });

    return NextResponse.json({
      success: true,
      message: "Thank you for your message. We will get back to you soon.",
    });
  } catch {
    return NextResponse.json(
      { success: false, errors: ["Something went wrong. Please try again."] },
      { status: 500 }
    );
  }
}
