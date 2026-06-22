export type BlogPost = {
  title: string;
  description: string;
  href: string;
  category: string;
  date: string;
};

// Single source of truth for published blog posts, newest first.
// Used by the blog index (/resources/blog) and the resources hub (/resources).
export const blogPosts: BlogPost[] = [
  {
    title: "WhatsApp Lead Nurture for Service Businesses",
    description:
      "Build a WhatsApp nurture sequence that converts paid ad enquiries into booked calls for service businesses in India.",
    href: "/resources/blog/whatsapp-lead-nurture-service-businesses",
    category: "Lead nurture",
    date: "2026-06-20",
  },
  {
    title: "Landing Page Conversion Rate Benchmarks India",
    description:
      "Landing page conversion rate benchmarks by traffic source for service businesses in India, plus the highest-impact CRO fixes.",
    href: "/resources/blog/landing-page-conversion-rate-service-businesses",
    category: "Landing page CRO",
    date: "2026-06-20",
  },
  {
    title: "CRM Tracking Setup for Service Businesses Running Paid Ads",
    description:
      "Set up a CRM feedback loop so paid ad campaigns learn from qualified leads and real sales outcomes, not just form fills.",
    href: "/resources/blog/crm-tracking-setup-for-service-businesses",
    category: "CRM & tracking",
    date: "2026-06-20",
  },
  {
    title: "How to Improve Lead Quality from Meta Ads",
    description:
      "Five specific changes that improve lead quality from Meta Ads for B2B service businesses in India.",
    href: "/resources/blog/how-to-improve-lead-quality-meta-ads",
    category: "Meta Ads",
    date: "2026-06-13",
  },
  {
    title: "B2B Lead Generation Benchmarks India 2026",
    description:
      "CPL, conversion rate, and ad spend benchmarks for B2B service businesses running paid ads in India.",
    href: "/resources/blog/b2b-lead-generation-benchmarks-india",
    category: "Benchmarks",
    date: "2026-06-13",
  },
  {
    title: "Meta Ads vs Google Ads for B2B India",
    description:
      "When to use Meta Ads versus Google Ads for B2B lead generation in India, and how to run them together.",
    href: "/resources/blog/meta-ads-vs-google-ads-b2b-india",
    category: "Channel comparison",
    date: "2026-06-13",
  },
];

export function formatPostDate(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  });
}
