import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { sendContactEmail } from "@/lib/mailer";
import { contactFormSchema } from "@/lib/validators";

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = contactFormSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  }

  await prisma.contactMessage.create({
    data: parsed.data,
  });

  await sendContactEmail(parsed.data);

  return NextResponse.json({ ok: true });
}
