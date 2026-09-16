import { NextResponse } from "next/server";

import { saveSubmission } from "@/lib/submissions";

type SchedulePayload = {
  name?: string;
  email?: string;
  date?: string;
  slot?: string;
  notes?: string;
};

function isEmail(email: string) {
  return /.+@.+\..+/.test(email);
}

export async function POST(request: Request) {
  const body = (await request.json()) as SchedulePayload;

  const name = body.name?.trim() || "";
  const email = body.email?.trim() || "";
  const date = body.date?.trim() || "";
  const slot = body.slot?.trim() || "";
  const notes = body.notes?.trim() || "";

  if (!name || !email || !date || !slot || !isEmail(email)) {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  await saveSubmission("schedule", { name, email, date, slot, notes });

  return NextResponse.json({ ok: true });
}
