import { NextResponse } from "next/server";

import { notifyOwner } from "@/lib/resend";
import { saveSubmission } from "@/lib/submissions";

type NewsletterPayload = {
  email?: string;
};

function isEmail(email: string) {
  return /.+@.+\..+/.test(email);
}

export async function POST(request: Request) {
  const body = (await request.json()) as NewsletterPayload;
  const email = body.email?.trim() || "";

  if (!email || !isEmail(email)) {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  await saveSubmission("newsletter", { email });
  await notifyOwner({
    subject: "New newsletter signup",
    html: `<p><strong>Email:</strong> ${email}</p>`,
  });

  return NextResponse.json({ ok: true });
}
