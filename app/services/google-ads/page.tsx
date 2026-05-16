import type { Metadata } from "next";
import { GoogleAdsServicePage } from "@/components/GoogleAdsServicePage";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, faqSchema, serviceSchema, webPageSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/site";

const faqs = [
  {
    question: "What types of businesses do you work with for Google Ads?",
    answer:
      "DFY works with B2B and service businesses where lead quality, follow-up speed, and sales outcomes matter. The page is built for businesses that want qualified enquiries, not just more clicks.",
  },
  {
    question: "Do you only handle Google Ads?",
    answer:
      "No. DFY can connect Google Ads with landing pages, CRM tracking, nurture flows, reporting, and sales feedback so the full acquisition system improves together.",
  },
  {
    question: "What budget do we need?",
    answer:
      "Budget depends on the market, service value, search volume, and sales process. The audit reviews whether your current or planned budget can produce useful learning before scaling.",
  },
  {
    question: "How do you measure success?",
    answer:
      "We look beyond clicks and form fills. Useful measures include qualified leads, booked calls, pipeline signal, customer acquisition cost visibility, and sales feedback quality.",
  },
  {
    question: "Do you help with landing pages?",
    answer:
      "Yes. Search intent and landing page message match are part of the Google Ads system. If the page leaks intent, we recommend and implement conversion improvements.",
  },
  {
    question: "How long before we see results?",
    answer:
      "Early signal usually appears once tracking, campaign structure, and landing pages are clean enough to learn from. DFY does not promise guaranteed timelines or outcomes.",
  },
  {
    question: "Do you work on lead quality, not just lead volume?",
    answer:
      "Yes. Lead quality is central to the DFY approach. We use qualification, CRM feedback, tracking, and sales notes to improve what the campaigns optimize toward.",
  },
  {
    question: "What happens during onboarding?",
    answer:
      "Onboarding starts with an account and funnel review, conversion tracking check, sales process review, keyword and search term analysis, and an agreed testing roadmap.",
  },
];

export const metadata: Metadata = pageMetadata({
  title: "Google Ads Agency for High-Intent Service Leads",
  description:
    "DFY builds Google Ads systems that capture high-intent buyers, align landing pages with search intent, and connect campaign data to real sales outcomes.",
  path: "/services/google-ads",
  keywords: [
    "Google Ads agency",
    "Google Ads for service businesses",
    "PPC agency",
    "search ads agency",
    "high intent lead generation",
    "Google Ads lead quality",
  ],
});

export default function GoogleAdsPage() {
  return (
    <>
      <JsonLd
        data={webPageSchema(
          "/services/google-ads",
          "Google Ads Agency for High-Intent Service Leads",
          "Done For You Google Ads service page for service businesses that need qualified search demand and clearer revenue measurement.",
        )}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "B2B Lead Generation Agency", path: "/b2b-lead-generation-agency" },
          { name: "Google Ads", path: "/services/google-ads" },
        ])}
      />
      <JsonLd
        data={serviceSchema({
          name: "Google Ads Management for Service Businesses",
          description:
            "Google Ads strategy, campaign structure, landing page alignment, tracking, and lead quality optimization for service businesses.",
          path: "/services/google-ads",
          serviceType: "Google Ads management",
        })}
      />
      <JsonLd data={faqSchema(faqs)} />
      <GoogleAdsServicePage faqs={faqs} />
    </>
  );
}
