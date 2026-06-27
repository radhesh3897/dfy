import type { MetadataRoute } from "next";
import { locationPages } from "@/data/locationPages";
import { absoluteUrl } from "@/lib/site";

// Stable content-update date. Bump when meaningful content changes ship.
// Using a fixed date (not `new Date()`) so lastmod stays a real freshness
// signal instead of resetting to "now" on every deploy.
const LAST_UPDATED = "2026-06-19";

type Route = {
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
  lastModified?: string;
};

const routes: Route[] = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/b2b-lead-generation-agency", changeFrequency: "monthly", priority: 0.85 },
  { path: "/services/meta-ads", changeFrequency: "monthly", priority: 0.85 },
  { path: "/services/google-ads", changeFrequency: "monthly", priority: 0.85 },
  { path: "/services/b2b-meta-ads-agency", changeFrequency: "monthly", priority: 0.84 },
  { path: "/services/crm-tracking-nurture", changeFrequency: "monthly", priority: 0.82 },
  { path: "/services/landing-page-cro", changeFrequency: "monthly", priority: 0.82 },
  { path: "/services/edtech-lead-generation", changeFrequency: "monthly", priority: 0.8 },
  { path: "/services/gym-lead-generation", changeFrequency: "monthly", priority: 0.8 },
  { path: "/services/clinic-lead-generation", changeFrequency: "monthly", priority: 0.8 },
  { path: "/lead-quality-improvement", changeFrequency: "monthly", priority: 0.82 },
  { path: "/results", changeFrequency: "monthly", priority: 0.78 },
  { path: "/results/hobfit", changeFrequency: "monthly", priority: 0.75, lastModified: "2026-06-27" },
  { path: "/results/tranzission", changeFrequency: "monthly", priority: 0.74, lastModified: "2026-06-27" },
  { path: "/results/talentz", changeFrequency: "monthly", priority: 0.74, lastModified: "2026-06-27" },
  { path: "/results/reliance-animation", changeFrequency: "monthly", priority: 0.74, lastModified: "2026-06-27" },
  { path: "/resources", changeFrequency: "monthly", priority: 0.76 },
  { path: "/resources/blog", changeFrequency: "monthly", priority: 0.6 },
  // Blog articles previously missing from the sitemap.
  {
    path: "/resources/blog/how-to-improve-lead-quality-meta-ads",
    changeFrequency: "monthly",
    priority: 0.65,
    lastModified: "2026-06-13",
  },
  {
    path: "/resources/blog/b2b-lead-generation-benchmarks-india",
    changeFrequency: "monthly",
    priority: 0.65,
    lastModified: "2026-06-13",
  },
  {
    path: "/resources/blog/meta-ads-vs-google-ads-b2b-india",
    changeFrequency: "monthly",
    priority: 0.65,
    lastModified: "2026-06-13",
  },
  {
    path: "/resources/blog/crm-tracking-setup-for-service-businesses",
    changeFrequency: "monthly",
    priority: 0.65,
    lastModified: "2026-06-20",
  },
  {
    path: "/resources/blog/landing-page-conversion-rate-service-businesses",
    changeFrequency: "monthly",
    priority: 0.65,
    lastModified: "2026-06-20",
  },
  {
    path: "/resources/blog/whatsapp-lead-nurture-service-businesses",
    changeFrequency: "monthly",
    priority: 0.65,
    lastModified: "2026-06-20",
  },
  {
    path: "/resources/blog/real-estate-lead-generation-india",
    changeFrequency: "monthly",
    priority: 0.65,
    lastModified: "2026-06-27",
  },
  {
    path: "/resources/blog/b2b-saas-lead-generation-india",
    changeFrequency: "monthly",
    priority: 0.65,
    lastModified: "2026-06-27",
  },
  {
    path: "/resources/blog/interior-design-lead-generation-india",
    changeFrequency: "monthly",
    priority: 0.65,
    lastModified: "2026-06-27",
  },
  {
    path: "/resources/blog/how-to-choose-b2b-meta-ads-agency-india",
    changeFrequency: "monthly",
    priority: 0.68,
    lastModified: "2026-06-27",
  },
  {
    path: "/resources/blog/b2b-meta-ads-agency-cost-india",
    changeFrequency: "monthly",
    priority: 0.67,
    lastModified: "2026-06-27",
  },
  {
    path: "/resources/blog/qualified-leads-vs-cost-per-lead-b2b",
    changeFrequency: "monthly",
    priority: 0.67,
    lastModified: "2026-06-27",
  },
  {
    path: "/resources/blog/how-to-measure-marketing-agency-performance",
    changeFrequency: "monthly",
    priority: 0.66,
    lastModified: "2026-06-27",
  },
  {
    path: "/resources/blog/meta-ads-agency-red-flags",
    changeFrequency: "monthly",
    priority: 0.66,
    lastModified: "2026-06-27",
  },
  {
    path: "/resources/blog/does-your-b2b-ads-agency-need-industry-experience",
    changeFrequency: "monthly",
    priority: 0.65,
    lastModified: "2026-06-27",
  },
  {
    path: "/resources/blog/crm-based-optimization-meta-ads-b2b",
    changeFrequency: "monthly",
    priority: 0.66,
    lastModified: "2026-06-27",
  },
  { path: "/resources/lead-quality-checklist", changeFrequency: "monthly", priority: 0.7 },
  { path: "/resources/meta-ads-for-service-businesses", changeFrequency: "monthly", priority: 0.68 },
  { path: "/resources/google-ads-for-service-businesses", changeFrequency: "monthly", priority: 0.68 },
  { path: "/company", changeFrequency: "monthly", priority: 0.58 },
  { path: "/company/about", changeFrequency: "monthly", priority: 0.56 },
  { path: "/company/process", changeFrequency: "monthly", priority: 0.6 },
  { path: "/company/careers", changeFrequency: "monthly", priority: 0.45 },
  { path: "/free-audit", changeFrequency: "monthly", priority: 0.8 },
  { path: "/locations", changeFrequency: "monthly", priority: 0.78 },
  ...locationPages.map((location): Route => ({
    path: `/locations/${location.slug}`,
    changeFrequency: "monthly",
    priority: 0.72,
  })),
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: absoluteUrl(route.path),
    lastModified: route.lastModified ?? LAST_UPDATED,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
