const tiers = [
  { name: "Starter", price: "₹39,000/mo", note: "Foundational support for small teams" },
  { name: "Growth", price: "₹79,000/mo", note: "Managed IT + cloud operations" },
  { name: "Scale", price: "Custom", note: "Complex multi-site and security-intensive needs" },
];

export default function Pricing() {
  return (
    <section className="section bg-white">
      <div className="container">
        <h2 className="text-3xl font-semibold">Pricing</h2>
        <p className="mt-2 text-sm text-slate-600">Illustrative tiers. Final scope and pricing are tailored to your requirements.</p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {tiers.map((tier) => (
            <article key={tier.name} className="card p-5">
              <h3 className="text-lg font-semibold">{tier.name}</h3>
              <p className="mt-2 text-2xl font-semibold text-blue-700">{tier.price}</p>
              <p className="mt-2 text-sm text-slate-600">{tier.note}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
