import { blogPosts } from "@/lib/blog";
import { caseStudies } from "@/lib/case-studies";
import { jobs } from "@/lib/jobs";
import { resources } from "@/lib/resources";
import { services } from "@/lib/services";

export type SearchItem = {
  title: string;
  href: string;
  type: "service" | "blog" | "case-study" | "career" | "resource";
  text: string;
};

export const searchableContent: SearchItem[] = [
  ...services.map((service) => ({
    title: service.title,
    href: `/services/${service.slug}`,
    type: "service" as const,
    text: `${service.title} ${service.summary} ${service.description}`,
  })),
  ...blogPosts.map((post) => ({
    title: post.title,
    href: `/blog/${post.slug}`,
    type: "blog" as const,
    text: `${post.title} ${post.excerpt} ${post.content.join(" ")}`,
  })),
  ...caseStudies.map((item) => ({
    title: item.title,
    href: `/case-studies/${item.slug}`,
    type: "case-study" as const,
    text: `${item.title} ${item.challenge} ${item.solution} ${item.outcome}`,
  })),
  ...jobs.map((job) => ({
    title: job.title,
    href: `/careers/${job.slug}`,
    type: "career" as const,
    text: `${job.title} ${job.summary} ${job.responsibilities.join(" ")}`,
  })),
  ...resources.map((resource) => ({
    title: resource.title,
    href: resource.href,
    type: "resource" as const,
    text: `${resource.title} ${resource.description}`,
  })),
];
