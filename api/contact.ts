import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") return res.status(405).end();

  const { name, company, email, message } = req.body;

  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  if (!RESEND_API_KEY) return res.status(500).json({ error: "RESEND_API_KEY is not set" });

  const resend = new Resend(RESEND_API_KEY);

  try {
    await resend.emails.send({
      from: "contact@updates.prepeak.ai",
      to: "musab@prepeak.ai",
      subject: `New Contact Form Submission from ${name}`,
      replyTo: email,
      html: `
        <div style="font-family:sans-serif">
          <h2>New Contact Request</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Company:</strong> ${company || "—"}</p>
          <p><strong>Email:</strong> ${email}</p>
          <hr />
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        </div>
      `,
    });
    return res.status(200).json({ success: true });
  } catch (err) {
    const message = err instanceof Error ? err.message : "An unknown error occurred";
    return res.status(500).json({ error: message });
  }
}
