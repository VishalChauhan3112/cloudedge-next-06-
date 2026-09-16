import Link from "next/link";

import { resources } from "@/lib/resources";

export const metadata = { title: "Resources" };

export default function ResourcesPage() {
  return (
    <div className="container section">
      <h1 className="text-3xl font-semibold">Resources</h1>
      <p className="mt-2 text-slate-600">Download practical guides and checklists.</p>
      <div className="mt-6 space-y-3">
        {resources.map((resource) => (
          <article key={resource.slug} className="card p-5">
            <h2 className="text-lg font-semibold">{resource.title}</h2>
            <p className="mt-2 text-sm text-slate-700">{resource.description}</p>
            <Link href={resource.href} className="mt-3 inline-block text-sm font-medium text-blue-700">
              Download PDF →
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
