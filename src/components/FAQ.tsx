const faqs = [
  {
    q: "Do you work with small businesses?",
    a: "Yes. We support startups, growing SMBs, and distributed teams that need practical managed services.",
  },
  {
    q: "Do you offer one-time consulting?",
    a: "Yes. We provide both recurring managed services and scoped consulting engagements.",
  },
  {
    q: "How quickly can onboarding start?",
    a: "Most engagements begin within 1–2 weeks after discovery and scope alignment.",
  },
];

export default function FAQ() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="text-3xl font-semibold">FAQ</h2>
        <div className="mt-6 space-y-3">
          {faqs.map((faq) => (
            <article key={faq.q} className="card p-5">
              <h3 className="font-semibold">{faq.q}</h3>
              <p className="mt-2 text-sm text-slate-600">{faq.a}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
