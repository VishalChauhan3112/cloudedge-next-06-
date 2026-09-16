export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <div className="container section space-y-6">
      <h1 className="text-3xl font-semibold">About CloudEdge</h1>
      <p className="text-slate-600">
        CloudEdge helps organizations modernize IT operations with practical cloud, support, and security programs.
      </p>
      <div className="grid gap-4 md:grid-cols-3">
        <article className="card p-5">
          <h2 className="font-semibold">Mission</h2>
          <p className="mt-2 text-sm text-slate-600">Enable resilient, secure, and scalable technology foundations for growing businesses.</p>
        </article>
        <article className="card p-5">
          <h2 className="font-semibold">Global Footprint</h2>
          <p className="mt-2 text-sm text-slate-600">Delivery teams support clients across India, APAC, and North America.</p>
        </article>
        <article className="card p-5">
          <h2 className="font-semibold">Values</h2>
          <p className="mt-2 text-sm text-slate-600">Ownership, transparency, and measurable outcomes over vague promises.</p>
        </article>
      </div>
    </div>
  );
}
