import { createServerFn } from "@tanstack/react-start";
import { getRequest } from "@tanstack/react-start/server";
export const sendContactEmail = createServerFn({ method: "POST" }).handler(
  async (ctx) => {
    const { name, company, email, message } = (ctx.data as unknown) as {
      name: string;
      company: string;
      email: string;
      message: string;
    };

const request = getRequest();
    const env = (request as any)?.cloudflare?.env ?? process.env;
    const RESEND_API_KEY = env.RESEND_API_KEY;

    if (!RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY is not set");
    }

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "contact@updates.prepeak.ai",
        to: "musab@prepeak.ai",
        subject: `New Contact Form Submission from ${name}`,
        reply_to: email,
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
      }),
    });

    if (!res.ok) {
      const error = await res.text();
      throw new Error(`Resend API error: ${error}`);
    }

    return { success: true };
  }
);