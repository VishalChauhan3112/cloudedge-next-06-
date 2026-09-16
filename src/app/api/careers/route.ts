import { NextResponse } from "next/server";

import { notifyOwner } from "@/lib/resend";
import { saveSubmission } from "@/lib/submissions";

type CareersPayload = {
  jobSlug?: string;
  jobTitle?: string;
  name?: string;
  email?: string;
  experience?: string;
  linkedin?: string;
  message?: string;
};

function isEmail(email: string) {
  return /.+@.+\..+/.test(email);
}

export async function POST(request: Request) {
  const body = (await request.json()) as CareersPayload;

  const jobSlug = body.jobSlug?.trim() || "";
  const jobTitle = body.jobTitle?.trim() || "";
  const name = body.name?.trim() || "";
  const email = body.email?.trim() || "";
  const experience = body.experience?.trim() || "";
  const linkedin = body.linkedin?.trim() || "";
  const message = body.message?.trim() || "";

  if (!jobSlug || !jobTitle || !name || !email || !isEmail(email)) {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  await saveSubmission("careers", {
    jobSlug,
    jobTitle,
    name,
    email,
    experience,
    linkedin,
    message,
  });

  await notifyOwner({
    subject: `New job application: ${jobTitle}`,
    html: `<p><strong>Job:</strong> ${jobTitle} (${jobSlug})</p><p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Experience:</strong> ${experience}</p><p><strong>LinkedIn:</strong> ${linkedin}</p><p><strong>Message:</strong> ${message}</p>`,
  });

  return NextResponse.json({ ok: true });
}
