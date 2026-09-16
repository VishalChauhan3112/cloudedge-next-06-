"use client";

import { FormEvent, useMemo, useState } from "react";

const slots = ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00"];

function minDate() {
  return new Date().toISOString().slice(0, 10);
}

export default function ScheduleForm() {
  const [status, setStatus] = useState("");
  const min = useMemo(() => minDate(), []);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("Booking...");

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: String(formData.get("name") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      date: String(formData.get("date") || "").trim(),
      slot: String(formData.get("slot") || "").trim(),
      notes: String(formData.get("notes") || "").trim(),
    };

    const res = await fetch("/api/schedule", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      event.currentTarget.reset();
      setStatus("Booking submitted. We'll confirm shortly.");
    } else {
      setStatus("Unable to schedule right now.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="card grid gap-3 p-6 md:grid-cols-2">
      <input required name="name" placeholder="Name" className="rounded-lg border border-slate-300 px-3 py-2 text-sm" />
      <input required type="email" name="email" placeholder="Email" className="rounded-lg border border-slate-300 px-3 py-2 text-sm" />
      <input required name="date" type="date" min={min} className="rounded-lg border border-slate-300 px-3 py-2 text-sm" />
      <select required name="slot" className="rounded-lg border border-slate-300 px-3 py-2 text-sm">
        <option value="">Select time slot</option>
        {slots.map((slot) => (
          <option key={slot} value={slot}>
            {slot}
          </option>
        ))}
      </select>
      <textarea name="notes" placeholder="Notes" className="min-h-24 rounded-lg border border-slate-300 px-3 py-2 text-sm md:col-span-2" />
      <button type="submit" className="w-fit rounded-lg bg-blue-700 px-4 py-2 text-sm font-medium text-white">
        Confirm request
      </button>
      <p className="text-sm text-slate-600 md:col-span-2">{status}</p>
    </form>
  );
}
