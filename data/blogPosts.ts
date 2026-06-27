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
    title: "How to Choose a B2B Meta Ads Agency in India",
    description:
      "The 6 questions to ask before you hire a B2B Meta Ads agency in India, what a strong answer looks like, and what agencies charge.",
    href: "/resources/blog/how-to-choose-b2b-meta-ads-agency-india",
    category: "Agency selection",
    date: "2026-06-27",
  },
  {
    title: "Real Estate Lead Generation in India: Qualified Buyer Leads",
    description:
      "How to get qualified real estate buyer leads from Meta and Google Ads in India, qualify them early, and book more site visits.",
    href: "/resources/blog/real-estate-lead-generation-india",
    category: "Real estate",
    date: "2026-06-27",
  },
  {
    title: "B2B SaaS Lead Generation in India: Demos That Close",
    description:
      "How to run B2B SaaS lead generation in India that produces demos that close and connects ad spend to real pipeline.",
    href: "/resources/blog/b2b-saas-lead-generation-india",
    category: "B2B SaaS",
    date: "2026-06-27",
  },
  {
    title: "Interior Design Lead Generation in India: Better Project Leads",
    description:
      "How to attract higher-value interior design project enquiries in India, qualify on budget, and win more consultations.",
    href: "/resources/blog/interior-design-lead-generation-india",
    category: "Interior design",
    date: "2026-06-27",
  },
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
