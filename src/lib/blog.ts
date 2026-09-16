export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  content: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "5-signs-your-it-needs-managed-support",
    title: "5 Signs Your IT Needs Managed Support",
    excerpt: "How to spot hidden downtime and support bottlenecks before they scale.",
    publishedAt: "2026-08-20",
    content: [
      "If recurring incidents keep pulling your internal team off roadmap work, support capacity is likely the bottleneck.",
      "Managed support helps convert unpredictable fire-fighting into measurable service outcomes.",
    ],
  },
  {
    slug: "small-business-cloud-migration-playbook",
    title: "A Small-Business Cloud Migration Playbook",
    excerpt: "A phased approach to moving key workloads without disrupting operations.",
    publishedAt: "2026-07-14",
    content: [
      "Start with readiness assessments and clear business priorities, not with tooling decisions.",
      "Pilot migrations should validate operating model changes as much as technical architecture.",
    ],
  },
  {
    slug: "cyber-hygiene-that-actually-works",
    title: "Cyber Hygiene That Actually Works",
    excerpt: "Practical security controls teams can sustain without burning out.",
    publishedAt: "2026-06-03",
    content: [
      "Strong security posture is the result of repeatable controls, clear ownership, and regular review.",
      "Focus first on identity security, patching discipline, and tested backups.",
    ],
  },
];

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
