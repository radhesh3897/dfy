import type { Metadata } from "next";
import { AuditForm } from "@/components/AuditForm";
import { ButtonLink } from "@/components/ButtonLink";
import { CTASection } from "@/components/CTASection";
import { Hero } from "@/components/Hero";
import { HeroProofCards } from "@/components/HeroProofCards";
import { JsonLd } from "@/components/JsonLd";
import { Section } from "@/components/Section";
import { ServiceCard } from "@/components/ServiceCard";
import { breadcrumbSchema, serviceSchema, webPageSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Get a Free Lead Quality Audit",
  description:
    "Request a free review of your ads, landing page, tracking, CRM flow, follow-up process, and lead quality gaps.",
  path: "/free-audit",
});

const reviewItems = [
  { title: "Ad angles", description: "Whether your creative attracts the right buyers or just cheaper clicks." },
  { title: "Lead source quality", description: "Which channels and campaigns appear to create useful sales conversations." },
  { title: "Landing page structure", description: "How clearly the page frames the offer, intent, proof, objections, and next step." },
  { title: "Form questions", description: "Whether your form captures enough information to qualify and route leads." },
  { title: "CRM stages", description: "How leads move after submission and whether quality signals are visible." },
  { title: "Follow-up process", description: "Where WhatsApp, email, SMS, or sales response timing may be leaking opportunities." },
  { title: "Tracking gaps", description: "Where measurement may be hiding real CAC, source quality, or funnel drop-off." },
];

const applyItems = [
  { title: "You are spending on ads", description: "The audit is most useful when there is live or recent campaign data to inspect." },
  { title: "Leads are coming in, but quality is poor", description: "You have volume, but the conversations are not matching the business goal." },
  { title: "Sales says leads are not qualified", description: "There is a visible gap between what marketing reports and what sales experiences." },
  { title: "You do not know your real CAC", description: "Tracking or CRM gaps make it hard to see which leads are worth paying for." },
];

export default function GetFreeLeadQualityAuditPage() {
  return (
    <>
      <JsonLd
        data={webPageSchema(
          "/free-audit",
          "Get a Free Lead Quality Audit",
          "Conversion page for requesting a Done For You lead quality audit.",
        )}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Free Lead Quality Audit", path: "/free-audit" },
        ])}
      />
      <JsonLd
        data={serviceSchema({
          name: "Free Lead Quality Audit",
          description:
            "A practical review of ads, landing pages, tracking, CRM flow, follow-up, and lead quality gaps.",
          path: "/free-audit",
          serviceType: "Lead quality audit",
        })}
      />
      <Hero
        eyebrow="Free lead quality audit"
        title="Get a free lead quality audit for your current ad funnel."
        subtitle="We will review your ads, landing page, tracking, CRM flow, and lead quality gaps."
        primaryCta={{ label: "Request My Free Audit", href: "#audit-form" }}
        secondaryCta={{ label: "See What We Review", href: "#what-we-review" }}
      >
        <HeroProofCards />
      </Hero>

      <Section
        tone="white"
        eyebrow="What we review"
        title="A practical look at the parts of your funnel that shape lead quality."
        className="scroll-mt-24"
      >
        <div id="what-we-review" className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {reviewItems.map((item, index) => (
            <ServiceCard key={item.title} {...item} index={index} />
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Who should apply"
        title="Best fit for teams already feeling the cost of poor-fit enquiries."
      >
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {applyItems.map((item, index) => (
            <ServiceCard key={item.title} {...item} index={index} />
          ))}
        </div>
      </Section>

      <section id="audit-form" className="scroll-mt-24 bg-white py-20 sm:py-28">
        <div className="container-wide grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div className="sticky top-28 rounded-sm border border-[#050505]/12 bg-[#f6f5f1] p-7">
            <p className="eyebrow eyebrow-default">Request the audit</p>
            <h2 className="mt-4 text-4xl font-black leading-none sm:text-5xl">
              Tell us what you are seeing in the funnel.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#4b4b4b]">
              The form is intentionally simple. The goal is to understand the current gap before recommending what to fix.
            </p>
            <div className="mt-8 border-t border-[#050505]/12 pt-6">
              <h3 className="text-2xl font-black">No fake promises.</h3>
              <p className="mt-3 text-base leading-7 text-[#4b4b4b]">
                We will tell you what is broken and what needs fixing. If the current system needs better qualification, tracking, creative, landing page work, or CRM feedback, the audit will make that visible.
              </p>
            </div>
          </div>
          <AuditForm />
        </div>
      </section>

      <section className="bg-[#f6f5f1] py-16">
        <div className="container-wide flex flex-col items-start justify-between gap-8 rounded-sm border border-[#050505]/12 bg-white p-7 md:flex-row md:items-center">
          <div>
            <p className="eyebrow eyebrow-default">Before the call</p>
            <h2 className="mt-4 max-w-3xl text-4xl font-black leading-none">
              We review the system, then discuss the highest-impact fixes first.
            </h2>
          </div>
          <ButtonLink href="/b2b-lead-generation-agency" variant="dark">
            Explore DFY Services
          </ButtonLink>
        </div>
      </section>

      <CTASection
        title="Ready to fix what is leaking lead quality?"
        text="Submit the audit request and we will review the acquisition path from first click to follow-up."
        buttonLabel="Request My Free Audit"
        buttonHref="#audit-form"
      />
    </>
  );
}
