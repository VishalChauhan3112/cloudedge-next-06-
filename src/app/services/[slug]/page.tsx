import { notFound } from "next/navigation";

import { getServiceBySlug, services } from "@/lib/services";

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) notFound();

  return (
    <div className="container section">
      <p className="text-sm font-medium text-blue-700">Service</p>
      <h1 className="mt-1 text-3xl font-semibold">{service.title}</h1>
      <p className="mt-3 text-slate-600">{service.description}</p>
      <h2 className="mt-8 text-xl font-semibold">Deliverables</h2>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
        {service.deliverables.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
