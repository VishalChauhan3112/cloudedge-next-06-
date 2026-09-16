import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container section text-center">
      <h1 className="text-4xl font-semibold">404</h1>
      <p className="mt-2 text-slate-600">The page you are looking for does not exist.</p>
      <Link href="/" className="mt-4 inline-block rounded-lg bg-blue-700 px-4 py-2 text-sm font-medium text-white">
        Back to home
      </Link>
    </div>
  );
}
