import Link from "next/link";

import { caseStudies } from "@/lib/case-studies";

export const metadata = { title: "Case Studies" };

export default function CaseStudiesPage() {
  return (
    <div className="container section">
      <h1 className="text-3xl font-semibold">Case Studies</h1>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {caseStudies.map((item) => (
          <article key={item.slug} className="card p-5">
            <h2 className="text-lg font-semibold">{item.title}</h2>
            <p className="mt-1 text-sm text-slate-600">{item.client}</p>
            <p className="mt-2 text-sm text-slate-700">{item.challenge}</p>
            <Link href={`/case-studies/${item.slug}`} className="mt-3 inline-block text-sm font-medium text-blue-700">
              Read case study →
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
