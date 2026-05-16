import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { CTASection } from "@/components/CTASection";
import { Hero } from "@/components/Hero";
import { JsonLd } from "@/components/JsonLd";
import { Section } from "@/components/Section";
import { ServiceCard } from "@/components/ServiceCard";
import { companyBeliefs, processSteps } from "@/data/marketingPages";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Company",
  description:
    "Learn about Done For You, the DFY mission, beliefs, process, team placeholder, and careers information.",
  path: "/company",
});

export default function CompanyPage() {
  return (
    <>
      <JsonLd data={webPageSchema("/company", "Company", "Done For You company overview page.")} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Company", path: "/company" },
        ])}
      />
      <Hero
        eyebrow="Company"
        title="We build acquisition systems that connect marketing with sales."
        subtitle="DFY helps service-based businesses generate better-quality leads through paid ads, landing pages, tracking, CRM setup, nurture systems, creative strategy, and sales feedback loops."
        primaryCta={{ label: "Get a Free Audit", href: "/#free-audit-form" }}
        secondaryCta={{ label: "Our Process", href: "/company/process" }}
      />

      <Section tone="white" eyebrow="Mission" title="Help service businesses stop paying for leads that do not convert.">
        <div className="rounded-[18px] border border-[#dfe6df] bg-[#fbfbf8] p-7 shadow-[0_22px_70px_rgba(15,23,42,0.06)]">
          <p className="max-w-4xl text-xl leading-9 tracking-[-0.02em] text-[#465163]">
            We empower service-based businesses with better-quality lead generation through a practical system that connects acquisition, qualification, tracking, nurture, and sales feedback.
          </p>
        </div>
      </Section>

      <Section eyebrow="What DFY believes" title="The work is bigger than campaign management.">
        <div className="grid gap-5 md:grid-cols-3">
          {companyBeliefs.map((belief, index) => (
            <ServiceCard key={belief.title} {...belief} index={index} />
          ))}
        </div>
      </Section>

      <Section tone="white" eyebrow="How we work" title="Audit, strategy, launch, and compound.">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {processSteps.map((step, index) => (
            <ServiceCard key={step.title} title={`${step.number} ${step.title}`} description={step.description} index={index} />
          ))}
        </div>
      </Section>

      <Section eyebrow="Team placeholder" title="A public team section will be added when profiles are approved.">
        <div className="rounded-sm border border-[#050505]/12 bg-white p-7 shadow-[0_18px_45px_rgba(5,5,5,0.06)]">
          <p className="text-lg leading-8 text-[#4b4b4b]">
            Meet the talented team behind DFY. Individual bios and photos will be added only when they are ready for public use.
          </p>
        </div>
      </Section>

      <Section tone="white" eyebrow="Careers" title="Interested in working with DFY?">
        <div className="flex flex-col items-start justify-between gap-6 rounded-[18px] border border-[#dfe6df] bg-[#fbfbf8] p-7 shadow-[0_22px_70px_rgba(15,23,42,0.06)] md:flex-row md:items-center">
          <p className="max-w-2xl text-lg leading-8 text-[#465163]">
            We are not hiring for public roles right now, but we are always open to strong operators, performance marketers, designers, and growth people.
          </p>
          <ButtonLink href="/company/careers" className="rounded-md">
            Send Your Profile
          </ButtonLink>
        </div>
      </Section>

      <CTASection
        title="Want to see where your own acquisition system is leaking?"
        text="Start with a free audit. DFY will review the path from ad click to follow-up and show what should be fixed first."
        buttonLabel="Request Your Free Audit"
        buttonHref="/#free-audit-form"
      />
    </>
  );
}
