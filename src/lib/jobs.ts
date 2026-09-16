export type Job = {
  slug: string;
  title: string;
  location: string;
  type: "Full-time" | "Contract" | "Part-time";
  summary: string;
  responsibilities: string[];
};

export const jobs: Job[] = [
  {
    slug: "cloud-support-engineer",
    title: "Cloud Support Engineer",
    location: "Remote - India",
    type: "Full-time",
    summary: "Own daily support operations and improve customer incident response quality.",
    responsibilities: [
      "Triaging customer tickets",
      "Maintaining SLA metrics",
      "Collaborating with platform and security teams",
    ],
  },
  {
    slug: "security-analyst",
    title: "Security Analyst",
    location: "Hybrid - Bengaluru",
    type: "Full-time",
    summary: "Support vulnerability management and security operations for SMB clients.",
    responsibilities: ["Monitoring detections", "Running hardening reviews", "Assisting response exercises"],
  },
  {
    slug: "solutions-consultant",
    title: "Solutions Consultant",
    location: "Remote",
    type: "Contract",
    summary: "Design practical cloud and IT modernization plans for new and existing accounts.",
    responsibilities: ["Discovery workshops", "Solution proposals", "Technical handover to delivery teams"],
  },
];

export function getJobBySlug(slug: string) {
  return jobs.find((job) => job.slug === slug);
}
