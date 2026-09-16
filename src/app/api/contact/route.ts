import { NextResponse } from "next/server";

import { notifyOwner } from "@/lib/resend";
import { saveSubmission } from "@/lib/submissions";

type ContactPayload = {
  name?: string;
  email?: string;
  company?: string;
  message?: string;
};

function isEmail(email: string) {
  return /.+@.+\..+/.test(email);
}

export async function POST(request: Request) {
  const body = (await request.json()) as ContactPayload;

  const name = body.name?.trim() || "";
  const email = body.email?.trim() || "";
  const company = body.company?.trim() || "";
  const message = body.message?.trim() || "";

  if (!name || !email || !message || !isEmail(email)) {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  await saveSubmission("contact", { name, email, company, message });
  await notifyOwner({
    subject: `New contact enquiry from ${name}`,
    html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Company:</strong> ${company}</p><p><strong>Message:</strong> ${message}</p>`,
  });

  return NextResponse.json({ ok: true });
}
