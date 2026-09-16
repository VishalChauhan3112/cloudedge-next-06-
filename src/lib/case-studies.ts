export type CaseStudy = {
  slug: string;
  title: string;
  client: string;
  challenge: string;
  solution: string;
  outcome: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "retail-chain-modernization",
    title: "Retail Chain IT Modernization",
    client: "National Retail Group",
    challenge: "Frequent branch outages were disrupting billing and customer experience.",
    solution: "CloudEdge redesigned network topology and implemented centralized monitoring.",
    outcome: "Downtime reduced by 42% and support escalations dropped significantly.",
  },
  {
    slug: "healthcare-security-hardening",
    title: "Healthcare Security Hardening",
    client: "Regional Health Provider",
    challenge: "Growing compliance pressure and legacy endpoint security controls.",
    solution: "Rolled out endpoint controls, MFA, and incident response workflows.",
    outcome: "Audit findings were resolved and phishing click-through rates declined.",
  },
];

export function getCaseStudyBySlug(slug: string) {
  return caseStudies.find((item) => item.slug === slug);
}
