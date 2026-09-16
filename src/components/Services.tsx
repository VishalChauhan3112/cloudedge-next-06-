import Link from "next/link";

import { services } from "@/lib/services";

export default function Services() {
  return (
    <section className="section bg-white">
      <div className="container">
        <h2 className="text-3xl font-semibold">Services</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {services.map((service, index) => (
            <article key={service.slug} className="card p-5">
              <p className="text-xs font-semibold text-blue-700">{String(index + 1).padStart(2, "0")}</p>
              <h3 className="mt-2 text-lg font-semibold">{service.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{service.summary}</p>
              <Link href={`/services/${service.slug}`} className="mt-4 inline-block text-sm font-medium text-blue-700">
                View details →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
