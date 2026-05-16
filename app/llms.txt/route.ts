import { absoluteUrl, site } from "@/lib/site";

export const dynamic = "force-static";

const pages = [
  {
    title: "Home",
    path: "/",
    description:
      "Overview of Done For You's B2B lead generation and performance marketing system for improving lead quality.",
  },
  {
    title: "B2B Lead Generation Agency",
    path: "/b2b-lead-generation-agency",
    description:
      "Dedicated service page for B2B and service businesses that need sales-ready conversations from paid acquisition.",
  },
  {
    title: "Lead Quality Improvement",
    path: "/lead-quality-improvement",
    description:
      "Problem-led page explaining why lead quality breaks and how DFY improves the funnel behind poor-fit enquiries.",
  },
  {
    title: "Meta Ads for Service Businesses",
    path: "/services/meta-ads",
    description:
      "Service page for Meta Ads strategy, creative testing, tracking, CRM feedback, and lead quality optimization.",
  },
  {
    title: "Google Ads for Service Businesses",
    path: "/services/google-ads",
    description:
      "Service page for Google Ads strategy, search intent, landing page alignment, tracking, and lead quality optimization.",
  },
  {
    title: "Free Lead Quality Audit",
    path: "/free-audit",
    description:
      "Conversion page for requesting a practical review of ads, landing pages, tracking, CRM flow, and follow-up gaps.",
  },
  {
    title: "Results",
    path: "/results",
    description:
      "Results hub with honest case-study placeholders that will be populated only after client approval.",
  },
  {
    title: "Resources",
    path: "/resources",
    description:
      "Resource hub for DFY articles, guides, checklists, and playbooks on better paid acquisition systems.",
  },
  {
    title: "Company",
    path: "/company",
    description:
      "Company overview covering DFY mission, beliefs, process, team placeholder, and careers.",
  },
  {
    title: "About Done For You",
    path: "/company/about",
    description:
      "About page explaining how DFY connects performance marketing with sales feedback and lead quality.",
  },
  {
    title: "DFY Process",
    path: "/company/process",
    description:
      "Process page covering audit, strategy, launch, and compound phases.",
  },
];

const services = [
  {
    title: "B2B Lead Generation",
    path: "/b2b-lead-generation-agency",
    description:
      "Paid acquisition systems built around buyer fit, qualification, CRM visibility, nurture, and sales feedback.",
  },
  {
    title: "Lead Quality Improvement",
    path: "/lead-quality-improvement",
    description:
      "Improvements across targeting, creative angles, landing page intent, forms, CRM scoring, and sales feedback loops.",
  },
  {
    title: "Meta Ads Management",
    path: "/services/meta-ads",
    description:
      "Meta Ads systems for service businesses that need qualified leads, cleaner attribution, and stronger sales feedback.",
  },
  {
    title: "Google Ads Management",
    path: "/services/google-ads",
    description:
      "Google Ads systems for service businesses that need high-intent search leads and clearer pipeline reporting.",
  },
  {
    title: "Lead Quality Audit",
    path: "/free-audit",
    description:
      "Free audit for businesses spending on ads that want to understand what is reducing lead quality.",
  },
];

function llmsText() {
  return `# ${site.name}

> ${site.description}

Done For You helps B2B and service-based businesses generate better-quality leads through paid ads, landing pages, tracking, CRM setup, nurture systems, creative strategy, and sales feedback loops. DFY does not publish fake testimonials, fake client logos, or unverified performance metrics.

## Main Pages
${pages
  .map((page) => `- [${page.title}](${absoluteUrl(page.path)}): ${page.description}`)
  .join("\n")}

## Services
${services
  .map((service) => `- [${service.title}](${absoluteUrl(service.path)}): ${service.description}`)
  .join("\n")}

## Key Topics
- B2B lead generation
- Lead quality improvement
- Performance marketing
- Paid ad funnel diagnosis
- Landing page conversion optimization
- CRM lead qualification and nurture
- Sales feedback loops

## Contact
- Email: ${site.email}
- Website: ${site.url}
`;
}

export function GET() {
  return new Response(llmsText(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
