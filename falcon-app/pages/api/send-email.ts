import { Resend } from "resend";
import type { NextApiRequest, NextApiResponse } from "next";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") return res.status(405).end("Method Not Allowed");

  const { to, subject, html } = req.body;

  console.log(req.body);

  try {
    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to,
      subject,
      html,
    });

    res.status(200).json({ success: true, data });
  } catch (error: any) {
    res.status(500).json({ error: error.message || "Failed to send email" });
  }
}
