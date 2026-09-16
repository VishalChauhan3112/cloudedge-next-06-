"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import { searchableContent } from "@/lib/search";

export default function SearchClient() {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return searchableContent
      .filter((item) => `${item.title} ${item.text}`.toLowerCase().includes(q))
      .slice(0, 20);
  }, [query]);

  return (
    <div className="container section">
      <h1 className="text-3xl font-semibold">Search</h1>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search services, blogs, case studies, careers, resources..."
        className="mt-4 w-full rounded-lg border border-slate-300 px-3 py-2"
      />

      <div className="mt-6 space-y-3">
        {query && results.length === 0 ? <p className="text-sm text-slate-600">No results found.</p> : null}
        {results.map((item) => (
          <Link key={`${item.type}:${item.href}`} href={item.href} className="card block p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-blue-700">{item.type}</p>
            <h2 className="mt-1 font-semibold">{item.title}</h2>
            <p className="mt-1 text-xs text-slate-500">{item.href}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
