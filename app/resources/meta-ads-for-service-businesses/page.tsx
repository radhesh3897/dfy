import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { Hero } from "@/components/Hero";
import { JsonLd } from "@/components/JsonLd";
import { Section } from "@/components/Section";
import { ServiceCard } from "@/components/ServiceCard";
import { articleSchema, breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/site";

const description =
  "Learn how service businesses can use Meta Ads without falling into cheap lead traps by improving targeting, creative, landing pages, tracking, and follow-up.";

export const metadata: Metadata = pageMetadata({
  title: "Meta Ads for Service Businesses",
  description,
  path: "/resources/meta-ads-for-service-businesses",
});

const sections = [
  {
    title: "Why cheap leads happen on Meta",
    description: "Meta can find people likely to submit forms, but that is not the same as finding people who are qualified to buy.",
  },
  {
    title: "What Meta needs to learn",
    description: "Better signal comes from qualified leads, booked calls, CRM feedback, and sales outcomes, not only clicks and form fills.",
  },
  {
    title: "Creative and offer signals",
    description: "Ads should call out the right buyer, pain, budget fit, and urgency so poor-fit leads self-filter earlier.",
  },
  {
    title: "Landing page and form filters",
    description: "The page and form should make the offer clear while collecting enough context for useful follow-up.",
  },
];

export default function MetaAdsGuidePage() {
  return (
    <>
      <JsonLd data={webPageSchema("/resources/meta-ads-for-service-businesses", "Meta Ads for Service Businesses", description)} />
      <JsonLd data={articleSchema({ headline: "Meta Ads for Service Businesses", description, path: "/resources/meta-ads-for-service-businesses" })} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Resources", path: "/resources" },
          { name: "Meta Ads Guide", path: "/resources/meta-ads-for-service-businesses" },
        ])}
      />
      <Hero
        eyebrow="Guide"
        title="Meta Ads for service businesses: avoid cheap lead traps."
        subtitle={description}
        primaryCta={{ label: "Audit My Meta Ads", href: "/#free-audit-form" }}
        secondaryCta={{ label: "Meta Ads Service", href: "/services/meta-ads" }}
      />

      <Section tone="white" eyebrow="Guide sections" title="Build Meta campaigns around quality, not just volume.">
        <div className="grid gap-5 md:grid-cols-2">
          {sections.map((section, index) => (
            <ServiceCard key={section.title} {...section} index={index} />
          ))}
        </div>
      </Section>

      <CTASection
        title="Want better signal from your Meta campaigns?"
        text="Start with a free audit. We will review the campaign, creative, landing page, tracking, and lead quality loop."
        buttonLabel="Request Your Free Audit"
        buttonHref="/#free-audit-form"
      />
    </>
  );
}
