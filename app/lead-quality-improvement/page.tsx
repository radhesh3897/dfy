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

const leadQualityFaqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Why is my lead quality low from paid ads?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Low lead quality from paid ads almost always traces back to one of three causes: audience targeting that is too broad and attracts low-intent users, a landing page that does not qualify the visitor before they submit, or no feedback loop between your CRM and your ad platform showing which leads actually converted. All three are fixable without increasing ad spend.",
      },
    },
    {
      "@type": "Question",
      name: "How do you measure lead quality from paid ads?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Lead quality is best measured by tracking three ratios: lead-to-call rate (what percentage of leads book a call), call-to-qualified rate (what percentage of calls meet your buyer criteria), and qualified-to-close rate. Most businesses only track volume. Done For You tracks all three and feeds this data back into campaign optimisation.",
      },
    },
    {
      "@type": "Question",
      name: "Can lead quality be improved without reducing lead volume?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Yes, in most cases. Tightening audience targeting and improving landing page qualification typically reduces total lead volume by 20 to 30 percent while improving lead-to-call rate by 50 to 100 percent. The net result is fewer leads that cost less to follow up and convert at a higher rate.",
      },
    },
    {
      "@type": "Question",
      name: "What is a CRM feedback loop and how does it improve lead quality?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "A CRM feedback loop sends data about which leads converted downstream back to your ad platform, either through Meta CAPI, Google Ads offline conversions, or direct CRM integrations. This teaches the algorithm to find more users who behave like your actual buyers rather than optimising for anyone who submits a form.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to improve lead quality after making changes?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Targeting and landing page changes show impact within 2 to 3 weeks as new traffic flows through the updated funnel. CRM feedback loop improvements take 45 to 60 days for the algorithm to accumulate enough signal data to shift audience behaviour meaningfully. Full lead quality improvement across all three levers typically takes one full quarter.",
      },
    },
  ],
};

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
      <JsonLd data={leadQualityFaqPageSchema} />
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
        title="Why do Meta Ads generate poor-quality leads for service businesses?"
        intro="Meta Ads generate poor-quality leads when audience targeting is too broad and the funnel does not qualify visitors before they submit. The issue rarely lives in one channel. It is usually the combination of targeting, message, offer, page intent, qualification, CRM, and sales feedback."
      >
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {causes.map((cause, index) => (
            <ServiceCard key={cause.title} {...cause} index={index} />
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Comparison"
        title="What is the difference between cheap leads and qualified leads?"
        intro="Cheap leads are form fills that lower CPL but create weak sales conversations, while qualified leads match buyer fit, urgency, and intent. A low CPL can look efficient until the sales team pays for it with wasted follow-up."
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
        title="How does Done For You improve lead quality from paid ads?"
        intro="Done For You improves paid ad lead quality by tightening the ICP, offer, creative angle, landing page, form qualification, CRM scoring, and sales feedback loop before scaling spend."
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
        title="How can you find the gaps behind poor lead quality?"
        text="A lead quality audit finds the gaps by reviewing the full path from ad angle to CRM flow so you can see what needs fixing first."
        buttonLabel="Get a Free Lead Quality Audit"
        buttonHref="/#free-audit-form"
      />

      <Section
        tone="white"
        eyebrow="FAQ"
        title="What lead quality questions should you answer before scaling paid ads?"
        intro="Before scaling paid ads, answer whether the leads match your ICP, reach sales, receive follow-up, and convert into qualified conversations."
      >
        <FAQ faqs={faqs} />
      </Section>
    </>
  );
}
