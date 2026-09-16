import Link from "next/link";

export default function Hero() {
  return (
    <section className="section">
      <div className="container grid items-center gap-6 md:grid-cols-2">
        <div>
          <p className="mb-2 text-sm font-medium text-blue-700">CloudEdge — Next.js Redesign</p>
          <h1 className="text-4xl font-semibold tracking-tight">Modern IT services for resilient business operations.</h1>
          <p className="mt-4 text-slate-600">
            We help companies reduce downtime, improve security posture, and scale confidently through managed services.
          </p>
          <div className="mt-6 flex gap-3">
            <Link href="/schedule" className="rounded-full bg-blue-700 px-5 py-2 text-sm font-medium text-white">
              Schedule a call
            </Link>
            <Link href="/services/managed-it-support" className="rounded-full border border-slate-300 px-5 py-2 text-sm">
              Explore services
            </Link>
          </div>
        </div>
        <div className="card p-6">
          <p className="text-sm text-slate-600">Trusted outcomes</p>
          <ul className="mt-4 space-y-3 text-sm">
            <li>• 24/7 service operations</li>
            <li>• Incident response and risk reduction</li>
            <li>• Practical cloud modernization roadmaps</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
