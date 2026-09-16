import Link from "next/link";
import { redirect } from "next/navigation";

import { isAdminAuthenticated } from "@/lib/admin-auth";
import { getAllSubmissions } from "@/lib/submissions";

export const metadata = { title: "Admin" };

export default async function AdminPage() {
  const authenticated = await isAdminAuthenticated();
  if (!authenticated) redirect("/admin/login");

  const data = await getAllSubmissions();

  return (
    <div className="container section">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-3xl font-semibold">Admin Dashboard</h1>
        <form action="/api/admin/logout" method="post">
          <button type="submit" className="rounded-lg border border-slate-300 px-3 py-2 text-sm">
            Log out
          </button>
        </form>
      </div>

      <div className="space-y-6">
        {(Object.entries(data) as [keyof typeof data, Array<Record<string, unknown>>][]).map(([type, items]) => (
          <section key={type} className="card p-5">
            <h2 className="text-xl font-semibold capitalize">{type} submissions ({items.length})</h2>
            {items.length === 0 ? <p className="mt-3 text-sm text-slate-600">No submissions yet.</p> : null}
            <div className="mt-3 space-y-3">
              {items.map((item) => (
                <pre key={String(item.id)} className="overflow-x-auto rounded-lg bg-slate-950 p-3 text-xs text-slate-100">
                  {JSON.stringify(item, null, 2)}
                </pre>
              ))}
            </div>
          </section>
        ))}
      </div>

      <p className="mt-6 text-sm text-slate-600">
        Looking for the public site? <Link href="/" className="text-blue-700">Go home</Link>
      </p>
    </div>
  );
}
