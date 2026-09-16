"use client";

import { FormEvent, useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("Submitting...");

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: String(formData.get("name") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      company: String(formData.get("company") || "").trim(),
      message: String(formData.get("message") || "").trim(),
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      event.currentTarget.reset();
      setStatus("Thanks, we will reach out shortly.");
    } else {
      setStatus("Unable to submit right now.");
    }
  }

  return (
    <section className="section">
      <div className="container card p-6">
        <h2 className="text-2xl font-semibold">Contact us</h2>
        <form onSubmit={onSubmit} className="mt-4 grid gap-3 md:grid-cols-2">
          <input required name="name" placeholder="Name" className="rounded-lg border border-slate-300 px-3 py-2 text-sm" />
          <input required type="email" name="email" placeholder="Email" className="rounded-lg border border-slate-300 px-3 py-2 text-sm" />
          <input name="company" placeholder="Company" className="rounded-lg border border-slate-300 px-3 py-2 text-sm md:col-span-2" />
          <textarea
            required
            name="message"
            placeholder="How can we help?"
            className="min-h-28 rounded-lg border border-slate-300 px-3 py-2 text-sm md:col-span-2"
          />
          <button type="submit" className="rounded-lg bg-blue-700 px-4 py-2 text-sm font-medium text-white md:w-fit">
            Send message
          </button>
        </form>
        <p className="mt-3 text-sm text-slate-600">{status}</p>
      </div>
    </section>
  );
}
