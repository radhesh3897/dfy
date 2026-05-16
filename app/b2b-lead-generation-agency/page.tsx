import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { FAQ } from "@/components/FAQ";
import { Hero } from "@/components/Hero";
import { HeroProofCards } from "@/components/HeroProofCards";
import { JsonLd } from "@/components/JsonLd";
import { Section } from "@/components/Section";
import { ServiceCard } from "@/components/ServiceCard";
import { breadcrumbSchema, faqSchema, serviceSchema, webPageSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "B2B Lead Generation Agency for Sales-Ready Conversations",
  description:
    "A B2B lead generation agency building paid ad campaigns, landing pages, lead qualification, CRM setup, nurture flows, and sales feedback loops.",
  path: "/b2b-lead-generation-agency",
});

const buildItems = [
  {
    title: "Paid ad campaigns",
    description: "Meta, Google, and LinkedIn campaigns structured around buyer intent, ICP fit, and CRM visibility.",
  },
  {
    title: "Landing pages",
    description: "Focused pages that explain the offer clearly, build intent, handle objections, and guide qualified enquiries forward.",
  },
  {
    title: "Lead qualification",
    description: "Form questions, filters, and routing logic that reduce poor-fit conversations before they reach sales.",
  },
  {
    title: "CRM setup",
    description: "Lead stages, source context, and quality fields that show which campaigns create useful opportunities.",
  },
  {
    title: "Nurture flows",
    description: "WhatsApp, email, and SMS follow-up paths designed around buyer readiness and sales response windows.",
  },
  {
    title: "Sales feedback loop",
    description: "A recurring way to turn sales notes into campaign, creative, landing page, and qualification improvements.",
  },
];

const audiences = [
  "EdTech",
  "SaaS",
  "Coaching businesses",
  "B2B services",
  "Training institutes",
  "Finance/service businesses",
];

const process = [
  {
    title: "Diagnose",
    description:
      "Audit the buyer path from ad click to CRM stage, then identify where quality, tracking, or follow-up is breaking.",
  },
  {
    title: "Build",
    description:
      "Create the campaign structure, landing page flow, qualification logic, and CRM fields needed for a cleaner system.",
  },
  {
    title: "Launch",
    description:
      "Run campaigns with sharper angles, source tracking, and a conversion path matched to the offer and sales process.",
  },
  {
    title: "Improve",
    description:
      "Use sales feedback and funnel data to improve targeting, creative, qualification, follow-up, and budget allocation.",
  },
];

const faqs = [
  {
    question: "What does a B2B lead generation agency actually do?",
    answer:
      "A strong B2B lead generation agency builds the system that creates, qualifies, tracks, and improves demand. For DFY, that includes paid ads, landing pages, CRM setup, nurture flows, and sales feedback loops.",
  },
  {
    question: "Do you only work with B2B companies?",
    answer:
      "DFY is focused on B2B and service-based businesses where enquiry quality, sales readiness, and follow-up matter. This includes EdTech, SaaS, coaching, training, finance, and B2B services.",
  },
  {
    question: "Can you improve existing campaigns?",
    answer:
      "Yes. We can review live or recent campaigns, diagnose where lead quality is breaking down, and improve the pieces that matter before rebuilding anything unnecessary.",
  },
  {
    question: "Which ad channels do you manage?",
    answer:
      "DFY can work across Meta Ads, Google Ads, and LinkedIn Ads. Channel choice depends on buyer intent, offer, budget, market maturity, and follow-up capacity.",
  },
  {
    question: "Do you guarantee leads or sales?",
    answer:
      "No. DFY does not promise guaranteed results. The work is focused on building a better acquisition system and improving decisions with cleaner data and lead quality feedback.",
  },
];

export default function B2BLeadGenerationAgencyPage() {
  return (
    <>
      <JsonLd
        data={webPageSchema(
          "/b2b-lead-generation-agency",
          "B2B Lead Generation Agency",
          "B2B lead generation page for Done For You.",
        )}
      />
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "B2B Lead Generation Agency", path: "/b2b-lead-generation-agency" },
        ])}
      />
      <JsonLd
        data={serviceSchema({
          name: "B2B Lead Generation Agency",
          description:
            "Paid acquisition, landing pages, CRM setup, nurture, and sales feedback loops for B2B and service businesses.",
          path: "/b2b-lead-generation-agency",
          serviceType: "B2B lead generation",
        })}
      />
      <Hero
        eyebrow="B2B lead generation agency"
        title="B2B lead generation built for sales-ready conversations."
        subtitle="We help B2B and service businesses build acquisition systems that attract, qualify, nurture, and track leads from first click to sales conversation."
        primaryCta={{ label: "Book a Strategy Call", href: "/#free-audit-form" }}
        secondaryCta={{ label: "Get a Free Audit", href: "/#free-audit-form" }}
      >
        <HeroProofCards />
      </Hero>

      <Section
        tone="white"
        eyebrow="The problem"
        title="More leads is not always better."
        intro="Bad lead quality wastes sales time. Ads, landing pages, CRM, and follow-up need to work together so marketing can see what is actually creating qualified opportunities."
      >
        <div className="grid gap-5 md:grid-cols-3">
          {[
            "Volume rises, but sales conversations stay weak.",
            "Landing pages collect interest without qualifying intent.",
            "CRM data is too thin to guide campaign decisions.",
          ].map((item, index) => (
            <ServiceCard
              key={item}
              title={item}
              description="A common symptom when paid acquisition is optimized around the cheapest conversion instead of the right buyer."
              index={index}
            />
          ))}
        </div>
      </Section>

      <Section
        eyebrow="What we build"
        title="The pieces of a sales-aligned acquisition system."
      >
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {buildItems.map((item, index) => (
            <ServiceCard key={item.title} {...item} index={index} />
          ))}
        </div>
      </Section>

      <Section
        tone="white"
        eyebrow="Who this is for"
        title="Best fit for teams where lead quality changes the economics."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {audiences.map((audience, index) => (
            <article key={audience} className="rounded-sm border border-[#050505]/12 bg-[#f6f5f1] p-6">
              <p className="text-sm font-black text-[#164E50]">{String(index + 1).padStart(2, "0")}</p>
              <h3 className="mt-10 text-2xl font-black">{audience}</h3>
            </article>
          ))}
        </div>
      </Section>

      <Section
        tone="dark"
        eyebrow="Process"
        title="Diagnose, build, launch, then improve from sales feedback."
      >
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {process.map((item, index) => (
            <ServiceCard key={item.title} {...item} index={index} dark />
          ))}
        </div>
      </Section>

      <Section tone="white" eyebrow="FAQ" title="Common questions about working with DFY.">
        <FAQ faqs={faqs} />
      </Section>

      <CTASection
        title="Ready to inspect your lead generation system?"
        text="Start with a practical review of the current funnel before deciding what needs to change."
        buttonLabel="Get a Free Lead Quality Audit"
        buttonHref="/#free-audit-form"
      />
    </>
  );
}
