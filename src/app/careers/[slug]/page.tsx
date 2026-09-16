import { notFound } from "next/navigation";

import ApplyForm from "@/components/ApplyForm";
import { getJobBySlug, jobs } from "@/lib/jobs";

export async function generateStaticParams() {
  return jobs.map((job) => ({ slug: job.slug }));
}

export default async function CareerDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const job = getJobBySlug(slug);
  if (!job) notFound();

  return (
    <div className="container section">
      <h1 className="text-3xl font-semibold">{job.title}</h1>
      <p className="mt-1 text-sm text-slate-600">
        {job.location} · {job.type}
      </p>
      <p className="mt-4 text-slate-700">{job.summary}</p>
      <h2 className="mt-8 text-xl font-semibold">Responsibilities</h2>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
        {job.responsibilities.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <ApplyForm jobSlug={job.slug} jobTitle={job.title} />
    </div>
  );
}
