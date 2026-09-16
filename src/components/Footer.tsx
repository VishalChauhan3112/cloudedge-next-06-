import Link from "next/link";

import NewsletterForm from "@/components/NewsletterForm";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="container grid gap-6 py-10 md:grid-cols-2">
        <div>
          <h2 className="text-lg font-semibold">CloudEdge Tech Services</h2>
          <p className="mt-2 text-sm text-slate-600">Managed IT, cloud, and cybersecurity services for modern teams.</p>
          <div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-700">
            <Link href="/status">Status</Link>
            <Link href="/admin">Admin</Link>
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold">Newsletter</h3>
          <p className="mb-3 mt-2 text-sm text-slate-600">Get practical IT and security insights.</p>
          <NewsletterForm />
        </div>
      </div>
    </footer>
  );
}
