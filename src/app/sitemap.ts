import type { MetadataRoute } from "next";

import { blogPosts } from "@/lib/blog";
import { caseStudies } from "@/lib/case-studies";
import { jobs } from "@/lib/jobs";
import { services } from "@/lib/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.SITE_URL || "http://localhost:3000";
  const staticRoutes = ["", "/about", "/schedule", "/careers", "/case-studies", "/blog", "/resources", "/roi-calculator", "/status", "/search"];

  const routes = [
    ...staticRoutes.map((route) => ({ url: `${base}${route}`, lastModified: new Date() })),
    ...services.map((item) => ({ url: `${base}/services/${item.slug}`, lastModified: new Date() })),
    ...jobs.map((item) => ({ url: `${base}/careers/${item.slug}`, lastModified: new Date() })),
    ...caseStudies.map((item) => ({ url: `${base}/case-studies/${item.slug}`, lastModified: new Date() })),
    ...blogPosts.map((item) => ({ url: `${base}/blog/${item.slug}`, lastModified: new Date(item.publishedAt) })),
  ];

  return routes;
}
