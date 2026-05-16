import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { Hero } from "@/components/Hero";
import { JsonLd } from "@/components/JsonLd";
import { ProcessSection } from "@/components/ProcessSection";
import { Section } from "@/components/Section";
import { ServiceCard } from "@/components/ServiceCard";
import { processSteps } from "@/data/marketingPages";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "DFY Process",
  description:
    "See how Done For You works through audit, strategy, launch, and compound phases to improve lead quality and paid acquisition performance.",
  path: "/company/process",
});

export default function CompanyProcessPage() {
  return (
    <>
      <JsonLd data={webPageSchema("/company/process", "DFY Process", "Process page for Done For You.")} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Company", path: "/company" },
          { name: "Process", path: "/company/process" },
        ])}
      />
      <Hero
        eyebrow="Our Process"
        title="Audit, strategy, launch, and compound."
        subtitle="A practical process for finding acquisition leaks, building the right system, launching cleanly, and improving from sales feedback."
        primaryCta={{ label: "Start With an Audit", href: "/#free-audit-form" }}
        secondaryCta={{ label: "About DFY", href: "/company/about" }}
      />

      <ProcessSection />

      <Section tone="white" eyebrow="Process details" title="What each phase is designed to clarify.">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {processSteps.map((step, index) => (
            <ServiceCard key={step.title} title={`${step.number} ${step.title}`} description={step.description} index={index} />
          ))}
        </div>
      </Section>

      <CTASection
        title="Ready to start with a proper audit?"
        text="We will review the system from ad click to follow-up and show you what should be fixed first."
        buttonLabel="Request Your Free Audit"
        buttonHref="/#free-audit-form"
      />
    </>
  );
}
