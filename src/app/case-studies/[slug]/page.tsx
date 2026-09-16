import { notFound } from "next/navigation";

import { caseStudies, getCaseStudyBySlug } from "@/lib/case-studies";

export async function generateStaticParams() {
  return caseStudies.map((item) => ({ slug: item.slug }));
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getCaseStudyBySlug(slug);
  if (!item) notFound();

  return (
    <div className="container section space-y-5">
      <h1 className="text-3xl font-semibold">{item.title}</h1>
      <article className="card p-5">
        <h2 className="font-semibold">Challenge</h2>
        <p className="mt-2 text-sm text-slate-700">{item.challenge}</p>
      </article>
      <article className="card p-5">
        <h2 className="font-semibold">Solution</h2>
        <p className="mt-2 text-sm text-slate-700">{item.solution}</p>
      </article>
      <article className="card p-5">
        <h2 className="font-semibold">Outcome</h2>
        <p className="mt-2 text-sm text-slate-700">{item.outcome}</p>
      </article>
    </div>
  );
}
