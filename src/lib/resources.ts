export type Resource = {
  slug: string;
  title: string;
  description: string;
  href: string;
};

export const resources: Resource[] = [
  {
    slug: "it-security-checklist",
    title: "IT Security Checklist for Small Businesses",
    description: "A practical checklist covering baseline hardening and response readiness.",
    href: "/resources/it-security-checklist.pdf",
  },
  {
    slug: "cloud-migration-readiness",
    title: "Cloud Migration Readiness Checklist",
    description: "A pre-migration readiness worksheet for infrastructure and governance decisions.",
    href: "/resources/cloud-migration-readiness-checklist.pdf",
  },
];
