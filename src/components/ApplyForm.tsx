"use client";

import { FormEvent, useState } from "react";

export default function ApplyForm({ jobSlug, jobTitle }: { jobSlug: string; jobTitle: string }) {
  const [status, setStatus] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("Submitting...");

    const formData = new FormData(event.currentTarget);
    const payload = {
      jobSlug,
      jobTitle,
      name: String(formData.get("name") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      experience: String(formData.get("experience") || "").trim(),
      linkedin: String(formData.get("linkedin") || "").trim(),
      message: String(formData.get("message") || "").trim(),
    };

    const res = await fetch("/api/careers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      event.currentTarget.reset();
      setStatus("Application submitted.");
    } else {
      setStatus("Unable to submit application right now.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="card mt-6 grid gap-3 p-6 md:grid-cols-2">
      <input required name="name" placeholder="Name" className="rounded-lg border border-slate-300 px-3 py-2 text-sm" />
      <input required type="email" name="email" placeholder="Email" className="rounded-lg border border-slate-300 px-3 py-2 text-sm" />
      <input name="experience" placeholder="Experience (years)" className="rounded-lg border border-slate-300 px-3 py-2 text-sm" />
      <input name="linkedin" placeholder="LinkedIn URL" className="rounded-lg border border-slate-300 px-3 py-2 text-sm" />
      <textarea name="message" placeholder="Tell us about your fit" className="min-h-24 rounded-lg border border-slate-300 px-3 py-2 text-sm md:col-span-2" />
      <button type="submit" className="w-fit rounded-lg bg-blue-700 px-4 py-2 text-sm font-medium text-white">
        Submit application
      </button>
      <p className="text-sm text-slate-600 md:col-span-2">{status}</p>
    </form>
  );
}
