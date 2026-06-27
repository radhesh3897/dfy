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
    title: "B2B Meta Ads Agency (India / Delhi NCR)",
    path: "/services/b2b-meta-ads-agency",
    description:
      "B2B Meta Ads agency in India and Delhi NCR that optimizes for qualified pipeline using CRM feedback, in-house creative, and weekly reviews. Done For You manages accounts from about INR 50,000 to INR 5,00,000 per month.",
  },
  {
    title: "CRM Tracking and Lead Nurture",
    path: "/services/crm-tracking-nurture",
    description:
      "Service page for CRM setup, lead attribution, source tagging, and nurture sequences that connect ad spend to real sales outcomes.",
  },
  {
    title: "Landing Page CRO",
    path: "/services/landing-page-cro",
    description:
      "Service page for landing page conversion rate optimization: offer clarity, form friction, ad-to-page alignment, and mobile speed.",
  },
  {
    title: "EdTech Lead Generation",
    path: "/services/edtech-lead-generation",
    description:
      "Industry page for EdTech lead generation in India using Meta Ads and Google Ads with enrolment-focused tracking and nurture.",
  },
  {
    title: "Gym Lead Generation",
    path: "/services/gym-lead-generation",
    description:
      "Industry page for gym and fitness studio lead generation in India using Meta Ads and Google Ads with membership-focused funnels.",
  },
  {
    title: "Clinic Lead Generation",
    path: "/services/clinic-lead-generation",
    description:
      "Industry page for clinic and healthcare lead generation in India using Meta Ads and Google Ads with appointment-focused funnels.",
  },
  {
    title: "Book a Call",
    path: "/free-audit",
    description:
      "Book a free strategy call: a practical review of ads, landing pages, tracking, CRM flow, and follow-up gaps, after which an expert from the team calls you.",
  },
  {
    title: "Results and Case Studies",
    path: "/results",
    description:
      "Real Done For You client results: Hobfit (Shark Tank India fitness brand) at 3.8x ROAS and ₹28L+ profit, Tranzission revenue doubled (+152%) in a month, TalentZ qualified leads 23% to 63%, and Reliance Animation at 14x ROAS on enrolment leads.",
  },
  {
    title: "Hobfit Case Study (Shark Tank India)",
    path: "/results/hobfit",
    description:
      "Fitness brand featured on Shark Tank India reached 3.8x ROAS, ₹28L+ profit, and ₹15L+ managed ad spend with Meta Ads optimized for real member sign-ups.",
  },
  {
    title: "Tranzission Case Study",
    path: "/results/tranzission",
    description:
      "Monthly net sales doubled (+152%, ₹1.45L to ₹2.88L) as Google Ads conversion rate rose from 3.76% to 9.24% and qualified leads passed 60%.",
  },
  {
    title: "TalentZ Case Study",
    path: "/results/talentz",
    description:
      "Overseas recruitment lead generation: qualified leads rose from 23% to 63% at 4.8x ROI, turning ₹1.34L ad spend into ₹6.45L revenue.",
  },
  {
    title: "Reliance Animation Case Study",
    path: "/results/reliance-animation",
    description:
      "EdTech enrolment lead generation: ₹1L of ad spend returned ₹14.5L revenue (about 14x ROAS) with 100+ enrolment leads from Meta and Google Ads.",
  },
  {
    title: "Resources",
    path: "/resources",
    description:
      "Resource hub for DFY articles, guides, checklists, and playbooks on better paid acquisition systems.",
  },
  {
    title: "How to Improve Lead Quality from Meta Ads",
    path: "/resources/blog/how-to-improve-lead-quality-meta-ads",
    description:
      "Step-by-step guide to fixing poor lead quality from Meta Ads for B2B service businesses in India.",
  },
  {
    title: "B2B Lead Generation Benchmarks India 2026",
    path: "/resources/blog/b2b-lead-generation-benchmarks-india",
    description:
      "CPL benchmarks, conversion rate benchmarks, and ad spend guidance for B2B service businesses running paid ads in India.",
  },
  {
    title: "Meta Ads vs Google Ads for B2B India",
    path: "/resources/blog/meta-ads-vs-google-ads-b2b-india",
    description:
      "Comparison of Meta Ads and Google Ads for B2B lead generation in India: when to use each and how to run them together.",
  },
  {
    title: "CRM Tracking Setup for Service Businesses Running Paid Ads",
    path: "/resources/blog/crm-tracking-setup-for-service-businesses",
    description:
      "How to set up a CRM feedback loop so paid ad campaigns learn from qualified leads and real sales outcomes, not just form fills.",
  },
  {
    title: "Landing Page Conversion Rate Benchmarks India",
    path: "/resources/blog/landing-page-conversion-rate-service-businesses",
    description:
      "Landing page conversion rate benchmarks by traffic source for service businesses in India, plus the highest-impact CRO fixes.",
  },
  {
    title: "WhatsApp Lead Nurture for Service Businesses",
    path: "/resources/blog/whatsapp-lead-nurture-service-businesses",
    description:
      "How to build a WhatsApp nurture sequence that converts paid ad enquiries into booked calls for service businesses in India.",
  },
  {
    title: "Real Estate Lead Generation in India",
    path: "/resources/blog/real-estate-lead-generation-india",
    description:
      "How to get qualified real estate buyer leads from Meta and Google Ads in India, qualify them early, and book more site visits.",
  },
  {
    title: "B2B SaaS Lead Generation in India",
    path: "/resources/blog/b2b-saas-lead-generation-india",
    description:
      "How to run B2B SaaS lead generation in India that produces demos that close and connects ad spend to real pipeline.",
  },
  {
    title: "Interior Design Lead Generation in India",
    path: "/resources/blog/interior-design-lead-generation-india",
    description:
      "How to attract higher-value interior design project enquiries in India, qualify on budget, and win more consultations.",
  },
  {
    title: "How to Choose a B2B Meta Ads Agency in India",
    path: "/resources/blog/how-to-choose-b2b-meta-ads-agency-india",
    description:
      "The 6 questions to ask before hiring a B2B Meta Ads agency in India, what good answers look like, and what agencies charge.",
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
    title: "CRM Tracking and Lead Nurture",
    path: "/services/crm-tracking-nurture",
    description:
      "CRM setup, lead attribution, source tagging, and nurture sequences that connect ad spend to real sales outcomes.",
  },
  {
    title: "Landing Page CRO",
    path: "/services/landing-page-cro",
    description:
      "Landing page conversion rate optimization covering offer clarity, form friction, ad-to-page alignment, and mobile speed.",
  },
  {
    title: "Book a Call",
    path: "/free-audit",
    description:
      "Free strategy call for businesses spending on ads that want to understand what is reducing lead quality.",
  },
];

function llmsText() {
  return `# ${site.name}

> ${site.description}

Done For You helps B2B and service-based businesses generate better-quality leads through paid ads, landing pages, tracking, CRM setup, nurture systems, creative strategy, and sales feedback loops. DFY does not publish fake testimonials, fake client logos, or unverified performance metrics.

Founder: Radhesh Agrawal (radhesh@doneforyou.in)

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
- B2B lead generation India
- Lead quality improvement
- Performance marketing
- Performance marketing agency India
- Meta Ads agency India
- Google Ads agency India
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
