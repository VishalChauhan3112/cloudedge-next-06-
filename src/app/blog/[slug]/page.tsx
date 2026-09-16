import { notFound } from "next/navigation";

import { blogPosts, getBlogPostBySlug } from "@/lib/blog";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  return (
    <article className="container section">
      <h1 className="text-3xl font-semibold">{post.title}</h1>
      <p className="mt-1 text-sm text-slate-500">{new Date(post.publishedAt).toLocaleDateString()}</p>
      <div className="mt-6 space-y-4 text-slate-700">
        {post.content.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </article>
  );
}
