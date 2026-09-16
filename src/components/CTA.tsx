import Link from "next/link";

export default function CTA() {
  return (
    <section className="section bg-blue-700 text-white">
      <div className="container flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h2 className="text-2xl font-semibold">Ready to reduce downtime and improve resilience?</h2>
          <p className="mt-1 text-sm text-blue-100">Book a 30-minute consult and get a practical action plan.</p>
        </div>
        <Link href="/schedule" className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-blue-700">
          Book now
        </Link>
      </div>
    </section>
  );
}
