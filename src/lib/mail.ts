import "server-only";

import nodemailer from "nodemailer";
import { contactReasonLabels } from "@/lib/contact-options";
import type { ContactInput } from "@/lib/contact-schema";

function getMailConfig() {
  const host = process.env.CONTACT_SMTP_HOST ?? "smtp.gmail.com";
  const port = Number(process.env.CONTACT_SMTP_PORT ?? "465");
  const secure = process.env.CONTACT_SMTP_SECURE !== "false";
  const user = process.env.CONTACT_SMTP_USER;
  const pass = process.env.CONTACT_SMTP_PASS;
  const to = process.env.CONTACT_TO_EMAIL ?? user;

  if (!user || !pass || !to) {
    throw new Error(
      "Contact email configuration is incomplete. Set CONTACT_SMTP_USER, CONTACT_SMTP_PASS, and optionally CONTACT_TO_EMAIL.",
    );
  }

  if (!Number.isInteger(port) || port <= 0 || port > 65535) {
    throw new Error("CONTACT_SMTP_PORT must be a valid TCP port.");
  }

  return {
    host,
    port,
    secure,
    user,
    pass,
    to,
  };
}

export async function sendContactMessage(input: ContactInput) {
  const config = getMailConfig();

  const transporter = nodemailer.createTransport({
    host: config.host,
    port: config.port,
    secure: config.secure,
    auth: {
      user: config.user,
      pass: config.pass,
    },
  });

  const reason = contactReasonLabels[input.reason];

  await transporter.sendMail({
    from: `"Portfolio Contact" <${config.user}>`,
    to: config.to,
    replyTo: input.email,
    subject: `[Portfolio] ${reason} — ${input.name}`,
    text: [
      `Name: ${input.name}`,
      `Email: ${input.email}`,
      `Reason: ${reason}`,
      "",
      input.message,
    ].join("\n"),
  });
}
