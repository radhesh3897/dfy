import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { Hero } from "@/components/Hero";
import { JsonLd } from "@/components/JsonLd";
import { Section } from "@/components/Section";
import { ServiceCard } from "@/components/ServiceCard";
import { articleSchema, breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/site";

const description =
  "Use DFY's lead quality checklist to review whether paid leads are worth following up and where your funnel may be leaking quality.";

export const metadata: Metadata = pageMetadata({
  title: "Lead Quality Checklist for Paid Ads",
  description,
  path: "/resources/lead-quality-checklist",
});

const checks = [
  { title: "Buyer fit", description: "Does the lead match the industry, role, location, business type, and offer fit you actually want?" },
  { title: "Need", description: "Did the lead show a specific pain, trigger, problem, or use case that makes follow-up worthwhile?" },
  { title: "Budget", description: "Can the lead realistically afford the service, program, or solution being offered?" },
  { title: "Urgency", description: "Is there a clear reason to act now, or is this only casual interest?" },
  { title: "Source quality", description: "Can your CRM show which campaign, ad, page, and form produced the lead?" },
  { title: "Follow-up readiness", description: "Does sales have enough context to respond quickly and route the lead properly?" },
];

export default function LeadQualityChecklistPage() {
  return (
    <>
      <JsonLd data={webPageSchema("/resources/lead-quality-checklist", "Lead Quality Checklist", "DFY checklist page for reviewing paid ad lead quality.")} />
      <JsonLd data={articleSchema({ headline: "Lead Quality Checklist for Paid Ads", description, path: "/resources/lead-quality-checklist" })} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Resources", path: "/resources" },
          { name: "Lead Quality Checklist", path: "/resources/lead-quality-checklist" },
        ])}
      />
      <Hero
        eyebrow="Checklist"
        title="Check if your paid leads are actually worth following up."
        subtitle="Use this practical checklist to review buyer fit, need, budget, urgency, source quality, and follow-up readiness."
        primaryCta={{ label: "Get a Free Audit", href: "/#free-audit-form" }}
        secondaryCta={{ label: "Lead Quality Service", href: "/lead-quality-improvement" }}
      />

      <Section tone="white" eyebrow="Checklist" title="Six checks before you call a lead qualified.">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {checks.map((check, index) => (
            <ServiceCard key={check.title} {...check} index={index} />
          ))}
        </div>
      </Section>

      <CTASection
        title="Want DFY to review these gaps for you?"
        text="Book a free audit and we will review the paid acquisition path from first click to follow-up."
        buttonLabel="Request Your Free Audit"
        buttonHref="/#free-audit-form"
      />
    </>
  );
}
