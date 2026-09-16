import Link from "next/link";

export default function JoinUs() {
  return (
    <section className="section bg-white">
      <div className="container card p-6">
        <h2 className="text-2xl font-semibold">Join our team</h2>
        <p className="mt-2 text-sm text-slate-600">Help build secure and resilient IT systems for growing businesses.</p>
        <Link href="/careers" className="mt-4 inline-block rounded-full bg-blue-700 px-5 py-2 text-sm font-medium text-white">
          View open positions
        </Link>
      </div>
    </section>
  );
}
