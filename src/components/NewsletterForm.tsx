"use client";

import { FormEvent, useState } from "react";

export default function NewsletterForm() {
  const [status, setStatus] = useState<string>("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("Submitting...");

    const formData = new FormData(event.currentTarget);
    const email = String(formData.get("email") || "").trim();

    const res = await fetch("/api/newsletter", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    if (res.ok) {
      event.currentTarget.reset();
      setStatus("Thanks for subscribing.");
    } else {
      setStatus("Unable to subscribe right now.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-3 sm:flex-row">
      <input
        required
        type="email"
        name="email"
        placeholder="Email address"
        className="rounded-lg border border-slate-300 px-3 py-2 text-sm"
      />
      <button className="rounded-lg bg-blue-700 px-4 py-2 text-sm font-medium text-white" type="submit">
        Subscribe
      </button>
      <p className="text-xs text-slate-600">{status}</p>
    </form>
  );
}
