const steps = ["Discover", "Design", "Deliver", "Optimize"];

export default function Process() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="text-3xl font-semibold">Our Process</h2>
        <div className="mt-6 grid gap-3 md:grid-cols-4">
          {steps.map((step, idx) => (
            <div key={step} className="card p-4">
              <p className="text-xs font-semibold text-blue-700">Step {idx + 1}</p>
              <h3 className="mt-1 font-semibold">{step}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
