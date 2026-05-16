import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { Hero } from "@/components/Hero";
import { JsonLd } from "@/components/JsonLd";
import { Section } from "@/components/Section";
import { ServiceCard } from "@/components/ServiceCard";
import { articleSchema, breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/site";

const description =
  "Learn how service businesses can use Google Ads to capture high-intent demand while protecting lead quality, landing page intent, and sales feedback visibility.";

export const metadata: Metadata = pageMetadata({
  title: "Google Ads for Service Businesses",
  description,
  path: "/resources/google-ads-for-service-businesses",
});

const sections = [
  {
    title: "Search intent is different",
    description: "Google Ads can capture people already looking for a solution, but campaign structure must separate research from buying intent.",
  },
  {
    title: "Keywords need qualification",
    description: "The account should filter for useful demand, protect budget from broad waste, and map search terms to business value.",
  },
  {
    title: "Landing pages must match intent",
    description: "The page should answer the specific query, frame the offer, handle objections, and make the next step clear.",
  },
  {
    title: "Sales feedback completes the loop",
    description: "CRM stages, call quality, and lead notes help decide what is worth scaling beyond surface-level CPL.",
  },
];

export default function GoogleAdsGuidePage() {
  return (
    <>
      <JsonLd data={webPageSchema("/resources/google-ads-for-service-businesses", "Google Ads for Service Businesses", description)} />
      <JsonLd data={articleSchema({ headline: "Google Ads for Service Businesses", description, path: "/resources/google-ads-for-service-businesses" })} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Resources", path: "/resources" },
          { name: "Google Ads Guide", path: "/resources/google-ads-for-service-businesses" },
        ])}
      />
      <Hero
        eyebrow="Guide"
        title="Google Ads for service businesses: capture intent without wasting follow-up."
        subtitle={description}
        primaryCta={{ label: "Audit My Google Ads", href: "/#free-audit-form" }}
        secondaryCta={{ label: "Google Ads Service", href: "/services/google-ads" }}
      />

      <Section tone="white" eyebrow="Guide sections" title="Build search campaigns around buyer readiness.">
        <div className="grid gap-5 md:grid-cols-2">
          {sections.map((section, index) => (
            <ServiceCard key={section.title} {...section} index={index} />
          ))}
        </div>
      </Section>

      <CTASection
        title="Want to see which search leads are worth paying for?"
        text="Request a free audit and we will review campaigns, landing pages, tracking, CRM flow, and follow-up quality."
        buttonLabel="Request Your Free Audit"
        buttonHref="/#free-audit-form"
      />
    </>
  );
}
