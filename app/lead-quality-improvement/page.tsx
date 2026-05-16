import type { Metadata } from "next";
import { ComparisonBlock } from "@/components/ComparisonBlock";
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
  title: "Lead Quality Improvement for Paid Ad Funnels",
  description:
    "Improve lead quality by fixing ad angles, targeting, landing page intent, form questions, CRM qualification, and sales feedback loops.",
  path: "/lead-quality-improvement",
});

const causes = [
  { title: "Broad targeting", description: "Campaigns reach too many people who can enquire but are unlikely to buy." },
  { title: "Weak creative angles", description: "Creative attracts clicks without setting the right expectation or filtering intent." },
  { title: "No lead filters", description: "Forms collect volume but miss the questions sales needs to judge fit." },
  { title: "Poor landing page intent", description: "Pages explain the service too broadly and fail to separate serious buyers from casual interest." },
  { title: "CRM gaps", description: "Leads enter a flat pipeline with no clear stage, score, or source quality context." },
  { title: "No sales feedback loop", description: "Marketing optimizes campaigns without knowing which leads became useful conversations." },
];

const improvements = [
  "ICP refinement",
  "Offer testing",
  "Ad angle testing",
  "Form qualification",
  "Landing page clarity",
  "CRM scoring",
  "Feedback loop",
];

const faqs = [
  {
    question: "Can lead quality improve without increasing CPL?",
    answer:
      "Sometimes. In other cases, CPL may rise while the cost per qualified opportunity improves. The goal is to understand the economics beyond the cheapest form fill.",
  },
  {
    question: "Where do lead quality problems usually start?",
    answer:
      "Common causes include broad targeting, weak creative angles, no lead filters, vague landing pages, CRM gaps, and no feedback from the sales team.",
  },
  {
    question: "Do you need CRM access to diagnose quality?",
    answer:
      "CRM visibility helps because it connects campaign source to sales outcome. If access is not available, we can still start with available lead and sales feedback data.",
  },
  {
    question: "Is this only for paid ad funnels?",
    answer:
      "This page is focused on paid acquisition funnels. The audit is most useful when you are already spending on ads and seeing a quality gap.",
  },
  {
    question: "Will DFY rebuild the whole funnel?",
    answer:
      "Not by default. The first step is diagnosing what is broken. Some systems need a rebuild, while others need sharper targeting, qualification, tracking, or follow-up changes.",
  },
];

export default function LeadQualityImprovementPage() {
  return (
    <>
      <JsonLd
        data={webPageSchema(
          "/lead-quality-improvement",
          "Lead Quality Improvement",
          "Problem-based lead quality improvement page for Done For You.",
        )}
      />
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Lead Quality Improvement", path: "/lead-quality-improvement" },
        ])}
      />
      <JsonLd
        data={serviceSchema({
          name: "Lead Quality Improvement",
          description:
            "Lead quality improvement for paid ad funnels through targeting, creative, landing pages, forms, CRM qualification, and sales feedback.",
          path: "/lead-quality-improvement",
          serviceType: "Lead quality improvement",
        })}
      />
      <Hero
        eyebrow="Lead quality improvement"
        title="Your CPL may be low. Your lead quality may be lower."
        subtitle="We help businesses fix the system behind poor lead quality, from targeting and ad angles to landing pages, CRM stages, and sales feedback."
        primaryCta={{
          label: "Get a Free Lead Quality Audit",
          href: "/#free-audit-form",
        }}
        secondaryCta={{
          label: "B2B Lead Generation",
          href: "/b2b-lead-generation-agency",
        }}
      >
        <HeroProofCards />
      </Hero>

      <Section
        tone="white"
        eyebrow="Why lead quality breaks"
        title="Poor lead quality is usually a system problem."
        intro="The issue rarely lives in one channel. It is usually the combination of targeting, message, offer, page intent, qualification, CRM, and sales feedback."
      >
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {causes.map((cause, index) => (
            <ServiceCard key={cause.title} {...cause} index={index} />
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Comparison"
        title="Cheap leads vs qualified leads."
        intro="A low CPL can look efficient until the sales team pays for it with wasted follow-up."
      >
        <ComparisonBlock
          leftTitle="Cheap leads"
          rightTitle="Qualified leads"
          leftItems={[
            "Low intent and unclear buyer fit",
            "High follow-up waste for sales",
            "Campaign decisions based on CPL alone",
            "Weak source and CRM visibility",
          ]}
          rightItems={[
            "Clearer need, fit, and decision context",
            "Sales conversations with better starting points",
            "Optimization tied to opportunity quality",
            "Feedback loop from sales back to marketing",
          ]}
        />
      </Section>

      <Section
        tone="white"
        eyebrow="How DFY improves quality"
        title="Improve the inputs before scaling the spend."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {improvements.map((item, index) => (
            <article key={item} className="rounded-sm border border-[#050505]/12 bg-[#f6f5f1] p-6">
              <p className="text-sm font-black text-[#164E50]">{String(index + 1).padStart(2, "0")}</p>
              <h3 className="mt-10 text-2xl font-black leading-tight">{item}</h3>
            </article>
          ))}
        </div>
      </Section>

      <CTASection
        title="Find the gaps behind poor lead quality."
        text="The audit reviews the full path from ad angle to CRM flow so you can see what needs fixing first."
        buttonLabel="Get a Free Lead Quality Audit"
        buttonHref="/#free-audit-form"
      />

      <Section tone="white" eyebrow="FAQ" title="Lead quality questions, answered plainly.">
        <FAQ faqs={faqs} />
      </Section>
    </>
  );
}
