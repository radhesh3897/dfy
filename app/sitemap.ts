import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";

const routes = [
  { path: "/", changeFrequency: "weekly" as const, priority: 1 },
  { path: "/b2b-lead-generation-agency", changeFrequency: "monthly" as const, priority: 0.85 },
  { path: "/services/meta-ads", changeFrequency: "monthly" as const, priority: 0.85 },
  { path: "/services/google-ads", changeFrequency: "monthly" as const, priority: 0.85 },
  { path: "/lead-quality-improvement", changeFrequency: "monthly" as const, priority: 0.82 },
  { path: "/results", changeFrequency: "monthly" as const, priority: 0.78 },
  { path: "/results/case-study-1", changeFrequency: "monthly" as const, priority: 0.62 },
  { path: "/results/case-study-2", changeFrequency: "monthly" as const, priority: 0.62 },
  { path: "/results/case-study-3", changeFrequency: "monthly" as const, priority: 0.62 },
  { path: "/resources", changeFrequency: "monthly" as const, priority: 0.76 },
  { path: "/resources/blog", changeFrequency: "monthly" as const, priority: 0.58 },
  { path: "/resources/lead-quality-checklist", changeFrequency: "monthly" as const, priority: 0.7 },
  { path: "/resources/meta-ads-for-service-businesses", changeFrequency: "monthly" as const, priority: 0.68 },
  { path: "/resources/google-ads-for-service-businesses", changeFrequency: "monthly" as const, priority: 0.68 },
  { path: "/company", changeFrequency: "monthly" as const, priority: 0.58 },
  { path: "/company/about", changeFrequency: "monthly" as const, priority: 0.56 },
  { path: "/company/process", changeFrequency: "monthly" as const, priority: 0.6 },
  { path: "/company/careers", changeFrequency: "monthly" as const, priority: 0.45 },
  { path: "/free-audit", changeFrequency: "monthly" as const, priority: 0.8 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: absoluteUrl(route.path),
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
