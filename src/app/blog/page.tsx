import Link from "next/link";

import { blogPosts } from "@/lib/blog";

export const metadata = { title: "Blog" };

export default function BlogPage() {
  return (
    <div className="container section">
      <h1 className="text-3xl font-semibold">Blog</h1>
      <div className="mt-6 space-y-3">
        {blogPosts.map((post) => (
          <article key={post.slug} className="card p-5">
            <h2 className="text-lg font-semibold">{post.title}</h2>
            <p className="mt-1 text-sm text-slate-500">{new Date(post.publishedAt).toLocaleDateString()}</p>
            <p className="mt-2 text-sm text-slate-700">{post.excerpt}</p>
            <Link href={`/blog/${post.slug}`} className="mt-3 inline-block text-sm font-medium text-blue-700">
              Read article →
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
