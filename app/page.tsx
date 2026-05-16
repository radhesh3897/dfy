import type { Metadata } from "next";
import { AuditStartCard } from "@/components/AuditStartCard";
import { CaseStudyPlaceholder } from "@/components/CaseStudyPlaceholder";
import { Hero } from "@/components/Hero";
import { HomepageCTASection } from "@/components/HomepageCTASection";
import { InHouseCreativeSection } from "@/components/InHouseCreativeSection";
import { JsonLd } from "@/components/JsonLd";
import { PaidAdsSystemSection } from "@/components/PaidAdsSystemSection";
import { ProcessSection } from "@/components/ProcessSection";
import { ProofStrip } from "@/components/ProofStrip";
import { ResultsSection } from "@/components/ResultsSection";
import { TestimonialsLogoCloudSection } from "@/components/TestimonialsLogoCloudSection";
import { WhyChooseDoneForYouSection } from "@/components/WhyChooseDoneForYouSection";
import { webPageSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Performance Marketing for Better-Quality Leads",
  description:
    "Done For You builds paid acquisition systems for B2B and service businesses using ads, landing pages, tracking, CRM, nurture, and sales feedback loops.",
  path: "/",
});

export default function Home() {
  return (
    <>
      <JsonLd
        data={webPageSchema(
          "/",
          "Done For You B2B Lead Generation and Performance Marketing",
          "Main sales page for Done For You.",
        )}
      />
      <Hero
        eyebrow="B2B Lead Generation Agency"
        title="Consistent, High-Quality Leads in 30 Days"
        subtitle="Most agencies hand you a spreadsheet of leads and disappear. DFY builds a closed-loop ad system that learns from your actual sales data so every month, your cost per customer drops."
        primaryCta={{
          label: "Get Your Free Audit",
          href: "/#free-audit-form",
        }}
        secondaryCta={{
          label: "View Services",
          href: "/b2b-lead-generation-agency",
        }}
      >
        <AuditStartCard />
      </Hero>
      <ProofStrip />
      <CaseStudyPlaceholder />
      <InHouseCreativeSection />
      <PaidAdsSystemSection />
      <TestimonialsLogoCloudSection />
      <HomepageCTASection
        headline="Ready to make paid ads actually work for your business?"
        subheadline="Book a free 30-minute audit. We'll show you exactly where your ad spend is leaking and what it would take to fix it."
        cta="Book Your Free Audit"
      />
      <WhyChooseDoneForYouSection />
      <ResultsSection />
      <ProcessSection />
      <HomepageCTASection
        headline="Stop paying for leads that don't convert."
        subheadline="Book a free audit and we'll show you exactly what's leaking."
        cta="Book a Free Audit ->"
        tone="dark"
      />
    </>
  );
}
