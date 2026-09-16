import Link from "next/link";

import { jobs } from "@/lib/jobs";

export const metadata = { title: "Careers" };

export default function CareersPage() {
  return (
    <div className="container section">
      <h1 className="text-3xl font-semibold">Careers</h1>
      <p className="mt-2 text-slate-600">Explore open roles and apply online.</p>
      <div className="mt-6 space-y-3">
        {jobs.map((job) => (
          <article key={job.slug} className="card p-5">
            <h2 className="text-lg font-semibold">{job.title}</h2>
            <p className="mt-1 text-sm text-slate-600">
              {job.location} · {job.type}
            </p>
            <p className="mt-2 text-sm text-slate-700">{job.summary}</p>
            <Link href={`/careers/${job.slug}`} className="mt-3 inline-block text-sm font-medium text-blue-700">
              View role →
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
