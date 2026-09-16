const testimonials = [
  {
    quote: "CloudEdge improved our support response times and reduced monthly downtime.",
    by: "Operations Lead, Retail Sector",
  },
  {
    quote: "Their security reviews gave our team a practical plan we could actually execute.",
    by: "IT Manager, Healthcare",
  },
];

export default function Testimonials() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="text-3xl font-semibold">Testimonials</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {testimonials.map((item) => (
            <blockquote key={item.by} className="card p-5">
              <p className="text-slate-700">“{item.quote}”</p>
              <footer className="mt-3 text-sm text-slate-500">— {item.by}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
