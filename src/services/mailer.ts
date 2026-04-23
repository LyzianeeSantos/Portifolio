import nodemailer from "nodemailer";
import type { ContactFormValues } from "@/schemas/forms";

function getTransporter() {
  const host = process.env.SMTP_HOST;
  const port = process.env.SMTP_PORT;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASSWORD;

  if (!host || !port || !user || !pass) {
    return null;
  }

  return nodemailer.createTransport({
    host,
    port: Number(port),
    secure: Number(port) === 465,
    auth: {
      user,
      pass,
    },
  });
}

export async function sendContactEmail(payload: ContactFormValues) {
  const transporter = getTransporter();
  const recipient = process.env.CONTACT_RECEIVER_EMAIL;

  if (!transporter || !recipient) {
    return false;
  }

  await transporter.sendMail({
    from: process.env.SMTP_FROM ?? process.env.SMTP_USER,
    to: recipient,
    replyTo: payload.email,
    subject: `[Portfolio] ${payload.subject}`,
    text: `${payload.name} <${payload.email}>\n\n${payload.message}`,
  });

  return true;
}
