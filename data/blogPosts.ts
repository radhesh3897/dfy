export type BlogPost = {
  title: string;
  description: string;
  href: string;
  category: string;
  date: string;
  updated?: string;
};

// Single source of truth for published blog posts, newest first.
// Used by the blog index (/resources/blog) and the resources hub (/resources).
export const blogPosts: BlogPost[] = [
  {"title": "Clinic Landing Pages: How to Turn Ad Clicks into Booked Consultations", "description": "Build a clinic landing page around service intent, verified doctor information and easy appointment requests. Measure conversion, bookings and attendance together.", "href": "/resources/blog/clinic-landing-page-conversion", "category": "Clinic marketing", "date": "2026-10-19"},
  {"title": "Google Ads Search Terms for Clinics: Find Appointment Intent and Cut Irrelevant Clicks", "description": "Review clinic Google Ads search terms by service, location and appointment intent. Use a dental query worksheet, negative-match examples and booking outcomes.", "href": "/resources/blog/google-ads-search-terms-clinics", "category": "Google Ads", "date": "2026-10-19"},
  {"title": "Broad Match vs Phrase and Exact Match in Google Ads: A Lead Generation Guide", "description": "Compare Google Ads broad, phrase and exact match for lead generation. Learn how intent, Smart Bidding, negatives and qualified conversion tracking affect your test.", "href": "/resources/blog/broad-phrase-exact-match-google-ads", "category": "Google Ads", "date": "2026-10-19"},
  {"title": "10 WhatsApp Business API Tools for Lead Follow-Up in India", "description": "Compare 10 WhatsApp Business API tools for Indian service teams by inbox, automation, CRM fit and cost structure. Includes a practical follow-up pilot checklist.", "href": "/resources/blog/whatsapp-business-api-tools-india", "category": "Lead nurture", "date": "2026-10-19"},
  {"title": "Google Ads vs Meta Ads for Clinics in India: Which Should You Start With?", "description": "Choose a clinic advertising channel using patient intent, search terms, booking-page conversion and attended consultations. Compare Google Search, calls and Meta Ads.", "href": "/resources/blog/google-ads-vs-meta-ads-clinics-india", "category": "Clinic marketing", "date": "2026-10-19"},
  {"title": "Getting Good Leads but No Sales? How to Find the Conversion Problem", "description": "Find where qualified enquiries stop becoming customers. Check contact, meetings, proposals, lost reasons and CRM data before changing your ad budget.", "href": "/resources/blog/good-leads-but-no-sales", "category": "Lead quality", "date": "2026-10-19"},
  {"title": "Freelancer vs Marketing Agency in India: Who Should Manage Your Ads?", "description": "Compare a freelancer and marketing agency by scope, expertise, total cost, accountability and account ownership. Use a practical hiring checklist for your paid ads.", "href": "/resources/blog/freelancer-vs-marketing-agency-india", "category": "Agency selection", "date": "2026-10-19"},
  {"title": "Broad vs Interest Targeting on Meta Ads: How to Choose and Test", "description": "Choose and test Meta audiences using buyer fit, creative, CRM feedback and cost per qualified lead. Learn when interest inputs or broader reach deserve a test.", "href": "/resources/blog/broad-vs-interest-targeting-meta-ads", "category": "Meta Ads", "date": "2026-10-19"},
  {
    title: "How to Choose a B2B Meta Ads Agency in India",
    description:
      "Choosing a B2B Meta Ads agency in India? Here are the 6 questions to ask before you hire, what a strong answer looks like, and what agencies charge.",
    href: "/resources/blog/how-to-choose-b2b-meta-ads-agency-india",
    category: "Agency selection",
    date: "2026-06-27",
    updated: "2026-10-18",
  },
  {
    title: "Meta Ads Agency Cost in India: Fees, Ad Spend & Budget",
    description:
      "Separate agency fees from ad spend, compare pricing models, and build your budget with an itemized rupee example and a quote checklist.",
    href: "/resources/blog/b2b-meta-ads-agency-cost-india",
    category: "Agency selection",
    date: "2026-06-27",
    updated: "2026-10-19",
  },
  {
    title: "Qualified Leads vs Cost Per Lead for B2B",
    description:
      "Understand CPL, cost per qualified lead, and CAC with clear formulas, a worked rupee example, and a practical lead-quality reporting checklist for B2B teams.",
    href: "/resources/blog/qualified-leads-vs-cost-per-lead-b2b",
    category: "Lead quality",
    date: "2026-06-27",
    updated: "2026-10-18",
  },
  {
    title: "How to Measure Marketing Agency Performance",
    description:
      "Learn how to measure marketing agency performance: the KPIs that map to revenue, the right review cadence, 30/60/90-day expectations, and reporting red flags.",
    href: "/resources/blog/how-to-measure-marketing-agency-performance",
    category: "Agency management",
    date: "2026-06-27",
    updated: "2026-10-18",
  },
  {
    title: "Meta Ads Agency Red Flags: 6 Signs to Walk Away",
    description:
      "Meta ads agency red flags every B2B founder should check: CPL-only reporting, ad account ownership grabs, guaranteed leads, no CRM loop, and lock-in contracts.",
    href: "/resources/blog/meta-ads-agency-red-flags",
    category: "Agency selection",
    date: "2026-06-27",
    updated: "2026-10-18",
  },
  {
    title: "Does Your B2B Ads Agency Need Industry Experience?",
    description:
      "An honest take on industry experience marketing agency choices: where sector knowledge helps, where a strong process wins, and how to test an agency yourself.",
    href: "/resources/blog/does-your-b2b-ads-agency-need-industry-experience",
    category: "Agency selection",
    date: "2026-06-27",
    updated: "2026-10-18",
  },
  {
    title: "CRM-Based Optimization: Optimize on SQLs, Not Form Fills",
    description:
      "CRM optimization for Meta ads means feeding sales outcomes back so the algorithm finds buyers, not form fillers. Why it works and how to set it up.",
    href: "/resources/blog/crm-based-optimization-meta-ads-b2b",
    category: "CRM & tracking",
    date: "2026-06-27",
    updated: "2026-10-18",
  },
  {
    title: "How to Evaluate a Marketing Agency's Case Studies",
    description:
      "How to evaluate marketing agency case studies: separate vanity metrics from real business outcomes, the exact questions to ask, and the red flags that hide weak results.",
    href: "/resources/blog/how-to-evaluate-marketing-agency-case-studies",
    category: "Agency selection",
    date: "2026-06-28",
    updated: "2026-10-18",
  },
  {
    title: "What Media Buying Expertise Looks Like in an Agency",
    description:
      "What media buying expertise actually looks like in a B2B ads agency: campaign structure, conversion tracking depth, creative testing, and how to test it in a call.",
    href: "/resources/blog/media-buying-expertise-b2b-ads-agency",
    category: "Agency selection",
    date: "2026-06-28",
    updated: "2026-10-18",
  },
  {
    title: "Full-Service vs Ads-Only Marketing Agency",
    description:
      "Full service vs ads only agency, explained honestly. Lead quality is a system, so an ads-only agency cannot fix leaks on the page or in your CRM.",
    href: "/resources/blog/full-service-vs-ads-only-marketing-agency",
    category: "Agency selection",
    date: "2026-06-28",
    updated: "2026-10-18",
  },
  {
    title: "Deal Size and Sales Cycle: Choosing an Agency",
    description:
      "Your deal size and B2B sales cycle should decide your marketing agency choice. Why high-ticket, long-cycle accounts need pipeline tracking, not same-day ROAS.",
    href: "/resources/blog/deal-size-sales-cycle-choosing-agency",
    category: "Agency selection",
    date: "2026-06-28",
    updated: "2026-10-18",
  },
  {
    title: "Do Meta and Google Partner Badges Matter?",
    description:
      "Meta Business Partner meaning explained honestly: how agencies earn Meta and Google Partner badges, what they signal, what they do not guarantee, and how to use them.",
    href: "/resources/blog/do-meta-google-partner-badges-matter",
    category: "Agency selection",
    date: "2026-06-28",
    updated: "2026-10-18",
  },
  {
    title: "Real Estate Lead Generation in India: Qualified Buyer Leads",
    description:
      "Real estate lead generation in India done right: how to get qualified buyer leads from Meta and Google Ads, qualify them early, and book more site visits.",
    href: "/resources/blog/real-estate-lead-generation-india",
    category: "Real estate",
    date: "2026-06-27",
    updated: "2026-10-18",
  },
  {
    title: "B2B SaaS Lead Generation in India: Demos That Close",
    description:
      "B2B SaaS lead generation in India: how to get demos that actually close, qualify trials before sales chases them, and connect ad spend to pipeline.",
    href: "/resources/blog/b2b-saas-lead-generation-india",
    category: "B2B SaaS",
    date: "2026-06-27",
    updated: "2026-10-18",
  },
  {
    title: "Interior Design Lead Generation in India: Better Project Leads",
    description:
      "Interior design lead generation in India: how to attract higher-value project enquiries from Meta and Google Ads, qualify on budget, and win more consultations.",
    href: "/resources/blog/interior-design-lead-generation-india",
    category: "Interior design",
    date: "2026-06-27",
    updated: "2026-10-18",
  },
  {
    title: "WhatsApp Lead Nurture for Service Businesses",
    description:
      "WhatsApp can support timely follow-up for service businesses in India. Here is how to build a nurture sequence that converts paid ad enquiries into booked calls.",
    href: "/resources/blog/whatsapp-lead-nurture-service-businesses",
    category: "Lead nurture",
    date: "2026-06-20",
    updated: "2026-10-18",
  },
  {
    title: "Landing Page Conversion Rate Benchmarks India",
    description:
      "What conversion rate should your landing page hit? Here are the benchmarks for service businesses running paid ads in India, and how to close the gap if you are below them.",
    href: "/resources/blog/landing-page-conversion-rate-service-businesses",
    category: "Landing page CRO",
    date: "2026-06-20",
    updated: "2026-10-18",
  },
  {
    title: "CRM Tracking Setup for Service Businesses Running Paid Ads",
    description:
      "Most service businesses running paid ads have no CRM feedback loop. Here is how to set one up so your campaigns learn from real sales outcomes, not just form fills.",
    href: "/resources/blog/crm-tracking-setup-for-service-businesses",
    category: "CRM & tracking",
    date: "2026-06-20",
    updated: "2026-10-18",
  },
  {
    title: "How to Improve Lead Quality from Meta Ads",
    description:
      "Poor lead quality from Meta Ads is almost always fixable. Here are the five specific changes that improve lead quality for B2B service businesses in India.",
    href: "/resources/blog/how-to-improve-lead-quality-meta-ads",
    category: "Meta Ads",
    date: "2026-06-13",
    updated: "2026-10-18",
  },
  {
    title: "B2B Lead Generation Benchmarks India 2026",
    description:
      "What is a good CPL and conversion rate for B2B lead generation in India? How to assess costs by sector, compare like-for-like outcomes, and build a defensible account baseline.",
    href: "/resources/blog/b2b-lead-generation-benchmarks-india",
    category: "Benchmarks",
    date: "2026-06-13",
    updated: "2026-10-18",
  },
  {
    title: "Meta Ads vs Google Ads for B2B India",
    description:
      "Meta Ads and Google Ads work differently for B2B lead generation in India. Here is how to decide which channel to use first and how to use both together.",
    href: "/resources/blog/meta-ads-vs-google-ads-b2b-india",
    category: "Channel comparison",
    date: "2026-06-13",
    updated: "2026-10-18",
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

// Curated reading paths connect budgeting, qualification, and follow-up topics.
// These are ordinary server-rendered links, including to less-discovered guides.
export const relatedArticleSlugs: Record<string, string[]> = {
  "clinic-landing-page-conversion": ["google-ads-search-terms-clinics", "google-ads-vs-meta-ads-clinics-india", "landing-page-conversion-rate-service-businesses"],
  "google-ads-search-terms-clinics": ["clinic-landing-page-conversion", "broad-phrase-exact-match-google-ads", "google-ads-vs-meta-ads-clinics-india"],
  "broad-phrase-exact-match-google-ads": ["google-ads-search-terms-clinics", "qualified-leads-vs-cost-per-lead-b2b", "broad-vs-interest-targeting-meta-ads"],
  "whatsapp-business-api-tools-india": ["whatsapp-lead-nurture-service-businesses", "crm-tracking-setup-for-service-businesses", "good-leads-but-no-sales"],
  "google-ads-vs-meta-ads-clinics-india": ["clinic-landing-page-conversion", "google-ads-search-terms-clinics", "meta-ads-vs-google-ads-b2b-india"],
  "good-leads-but-no-sales": ["qualified-leads-vs-cost-per-lead-b2b", "whatsapp-lead-nurture-service-businesses", "crm-tracking-setup-for-service-businesses"],
  "freelancer-vs-marketing-agency-india": ["full-service-vs-ads-only-marketing-agency", "how-to-choose-b2b-meta-ads-agency-india", "b2b-meta-ads-agency-cost-india"],
  "broad-vs-interest-targeting-meta-ads": ["how-to-improve-lead-quality-meta-ads", "crm-based-optimization-meta-ads-b2b", "qualified-leads-vs-cost-per-lead-b2b"],
  "b2b-meta-ads-agency-cost-india": ["meta-ads-vs-google-ads-b2b-india", "landing-page-conversion-rate-service-businesses", "how-to-improve-lead-quality-meta-ads"],
  "qualified-leads-vs-cost-per-lead-b2b": ["how-to-improve-lead-quality-meta-ads", "b2b-saas-lead-generation-india", "whatsapp-lead-nurture-service-businesses"],
  "b2b-lead-generation-benchmarks-india": ["b2b-saas-lead-generation-india", "meta-ads-vs-google-ads-b2b-india", "landing-page-conversion-rate-service-businesses"],
  "crm-based-optimization-meta-ads-b2b": ["whatsapp-lead-nurture-service-businesses", "how-to-improve-lead-quality-meta-ads", "crm-tracking-setup-for-service-businesses"],
  "how-to-choose-b2b-meta-ads-agency-india": ["freelancer-vs-marketing-agency-india", "b2b-meta-ads-agency-cost-india", "b2b-saas-lead-generation-india"],
  "how-to-improve-lead-quality-meta-ads": ["broad-vs-interest-targeting-meta-ads", "good-leads-but-no-sales", "qualified-leads-vs-cost-per-lead-b2b"],
  "b2b-saas-lead-generation-india": ["b2b-lead-generation-benchmarks-india", "meta-ads-vs-google-ads-b2b-india", "crm-based-optimization-meta-ads-b2b"],
  "meta-ads-vs-google-ads-b2b-india": ["broad-phrase-exact-match-google-ads", "google-ads-vs-meta-ads-clinics-india", "b2b-saas-lead-generation-india"],
  "landing-page-conversion-rate-service-businesses": ["clinic-landing-page-conversion", "qualified-leads-vs-cost-per-lead-b2b", "whatsapp-lead-nurture-service-businesses"],
  "whatsapp-lead-nurture-service-businesses": ["whatsapp-business-api-tools-india", "crm-tracking-setup-for-service-businesses", "good-leads-but-no-sales"],
};
