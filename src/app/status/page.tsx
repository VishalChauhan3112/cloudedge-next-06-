const systems = [
  ["Core Platform", "Operational"],
  ["Helpdesk", "Operational"],
  ["Monitoring", "Operational"],
  ["Email Notifications", "Operational"],
] as const;

export const metadata = { title: "Status" };

export default function StatusPage() {
  return (
    <div className="container section">
      <h1 className="text-3xl font-semibold">System Status</h1>
      <p className="mt-2 text-slate-600">Template status page. Connect this to your real monitoring source before production use.</p>
      <div className="mt-6 space-y-3">
        {systems.map(([name, state]) => (
          <div key={name} className="card flex items-center justify-between p-4">
            <span className="font-medium">{name}</span>
            <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-800">{state}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
