import { redirect } from "next/navigation";

import { isAdminAuthenticated } from "@/lib/admin-auth";

export const metadata = { title: "Admin Login" };

export default async function AdminLoginPage() {
  const authenticated = await isAdminAuthenticated();
  if (authenticated) redirect("/admin");

  return (
    <div className="container section">
      <div className="mx-auto max-w-md card p-6">
        <h1 className="text-2xl font-semibold">Admin Login</h1>
        <p className="mt-2 text-sm text-slate-600">Enter the admin password set in your environment variables.</p>
        <form action="/api/admin/login" method="post" className="mt-4 space-y-3">
          <input
            required
            type="password"
            name="password"
            placeholder="Password"
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
          />
          <button type="submit" className="w-full rounded-lg bg-blue-700 px-4 py-2 text-sm font-medium text-white">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
}
