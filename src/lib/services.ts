export type Service = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  deliverables: string[];
};

export const services: Service[] = [
  {
    slug: "managed-it-support",
    title: "Managed IT Support",
    summary: "24/7 managed support, proactive monitoring, and rapid resolution.",
    description:
      "CloudEdge handles day-to-day IT operations so your team can focus on core business outcomes.",
    deliverables: [
      "Helpdesk and endpoint support",
      "Device lifecycle management",
      "Patch and vulnerability management",
    ],
  },
  {
    slug: "cloud-migration",
    title: "Cloud Migration",
    summary: "Structured migration from on-premise to modern cloud platforms.",
    description:
      "We assess workloads, define landing zones, and execute staged migrations with low disruption.",
    deliverables: ["Readiness assessment", "Migration runbooks", "Post-migration optimization"],
  },
  {
    slug: "cybersecurity",
    title: "Cybersecurity",
    summary: "Defense-in-depth with continuous hardening and employee awareness.",
    description:
      "Reduce security risks with practical controls, monitoring, and incident response preparedness.",
    deliverables: ["Security baseline hardening", "Awareness training", "Incident response playbooks"],
  },
  {
    slug: "network-optimization",
    title: "Network Optimization",
    summary: "Faster, resilient network architecture for office and remote teams.",
    description:
      "Modernize network performance with better segmentation, observability, and fault tolerance.",
    deliverables: ["Network assessment", "Performance tuning", "Resilience planning"],
  },
  {
    slug: "backup-disaster-recovery",
    title: "Backup & Disaster Recovery",
    summary: "Business continuity planning with tested backup and restore procedures.",
    description:
      "Protect critical systems and data with recovery objectives tailored to your risk profile.",
    deliverables: ["Backup strategy design", "Recovery drills", "RTO/RPO governance"],
  },
  {
    slug: "digital-workplace",
    title: "Digital Workplace",
    summary: "Collaboration and productivity tooling setup for distributed teams.",
    description:
      "Improve workforce productivity through secure, standardized digital workplace experiences.",
    deliverables: ["Identity and access setup", "Collaboration suite rollout", "Adoption support"],
  },
  {
    slug: "it-consulting",
    title: "IT Consulting",
    summary: "Strategic guidance to align IT investments with growth goals.",
    description:
      "Plan technology roadmaps and governance models that improve outcomes and control spend.",
    deliverables: ["Technology roadmap", "Cost optimization review", "Executive reporting"],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
