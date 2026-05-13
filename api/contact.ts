import { createServerFn } from "@tanstack/react-start";
import { Resend } from "resend";

export const sendContactEmail = createServerFn({ method: "POST" }).handler(
  async (ctx) => {
    const { name, company, email, message } = (ctx.data as unknown) as {
      name: string;
      company: string;
      email: string;
      message: string;
    };

    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    if (!RESEND_API_KEY) throw new Error("RESEND_API_KEY is not set");

    const resend = new Resend(RESEND_API_KEY);

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

    return { success: true };
  }
);