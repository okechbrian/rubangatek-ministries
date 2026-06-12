type EmailPayload = {
  to: string;
  subject: string;
  text: string;
  html?: string;
  replyTo?: string;
};

export async function sendEmail(payload: EmailPayload): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY;

  if (apiKey) {
    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: process.env.EMAIL_FROM || "noreply@rubangatekministries.org",
          to: [payload.to],
          subject: payload.subject,
          text: payload.text,
          html: payload.html,
          reply_to: payload.replyTo,
        }),
      });

      if (!res.ok) {
        const err = await res.text();
        console.error("Resend API error:", err);
        return false;
      }
      return true;
    } catch (err) {
      console.error("Failed to send email via Resend:", err);
      return false;
    }
  }

  console.log("--- EMAIL (dev mode — set RESEND_API_KEY for production) ---");
  console.log("To:", payload.to);
  console.log("Subject:", payload.subject);
  console.log("Reply-To:", payload.replyTo);
  console.log("Body:", payload.text);
  console.log("--- END ---");
  return true;
}
