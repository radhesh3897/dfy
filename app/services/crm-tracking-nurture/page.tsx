import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { Section } from "@/components/Section";
import { breadcrumbSchema, faqSchema, serviceSchema, webPageSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/site";
import { CaseStudyHighlight } from "@/components/CaseStudyHighlight";

export const metadata: Metadata = pageMetadata({
  title: "CRM Setup and Lead Tracking for Service Businesses",
  description:
    "Done For You sets up CRM tracking, lead attribution, and nurture sequences so your paid ads learn from real sales outcomes, not just form fills.",
  path: "/services/crm-tracking-nurture",
  keywords: [
    "CRM setup for service businesses",
    "lead tracking agency India",
    "lead nurture automation",
    "B2B CRM integration",
    "ad attribution setup",
    "CRM feedback loop Meta Ads",
    "lead quality tracking India",
  ],
});

const faqs = [
  {
    question: "What CRM platforms does Done For You work with?",
    answer:
      "Done For You works with most CRM platforms used by service businesses in India including HubSpot, Zoho, LeadSquared, Freshsales, and custom Google Sheets setups. We configure whichever system fits your sales process rather than selling you a new platform.",
  },
  {
    question: "How does CRM tracking improve ad performance?",
    answer:
      "When CRM data is connected to your ad platforms via CAPI or offline conversions, Meta and Google learn which types of leads actually convert to customers rather than optimising only for form fills. This shifts the algorithm toward higher-quality audiences over time.",
  },
  {
    question: "What is a lead nurture sequence and do I need one?",
    answer:
      "A lead nurture sequence is an automated series of follow-up messages sent after a lead submits a form. For most service businesses with a 2 to 7 day sales cycle, a 5 to 10 touch nurture sequence via email and WhatsApp significantly improves show-up rates and conversion from enquiry to booked call.",
  },
  {
    question: "How long does CRM and tracking setup take?",
    answer:
      "Basic CRM configuration, tracking setup, and a starter nurture flow typically takes 2 to 3 weeks. More complex multi-source attribution or custom integrations take 4 to 6 weeks. Done For You runs both alongside the ad account so there is no delay to launch.",
  },
  {
    question: "Can you connect Meta Ads with our CRM?",
    answer:
      "Yes. Done For You sets up Meta Conversions API (CAPI) integrations to send lead quality signals and downstream conversion events back to Meta. This reduces reliance on browser cookies and improves the algorithm's ability to optimise for real buyers.",
  },
];

const crmFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

const problems = [
  {
    title: "Leads go cold",
    text: "Without an automated follow-up system, high-intent leads that do not convert immediately get forgotten and fall out of your pipeline permanently.",
  },
  {
    title: "No attribution visibility",
    text: "You cannot see which campaigns, ad sets, or creatives generated leads that actually closed. Spend decisions become guesswork.",
  },
  {
    title: "Ad algorithms optimise for the wrong signal",
    text: "Meta and Google optimise toward whatever event you track. If you track form fills, they find form fillers. Without CRM feedback, they never learn your real buyer.",
  },
  {
    title: "Manual follow-up breaks at scale",
    text: "Your sales team manually chases every lead by phone and WhatsApp. As volume grows, follow-up gets slower and lead quality scores drop.",
  },
  {
    title: "No pipeline stage visibility",
    text: "Leads sit in a spreadsheet with no stage, source, or quality tag. You cannot tell what converted, what went cold, or why.",
  },
  {
    title: "Hidden cost per customer",
    text: "Without connecting ad spend to CRM outcomes, you cannot calculate your true cost per customer acquisition or justify budget increases.",
  },
];

const steps = [
  {
    number: "01",
    title: "Tracking Audit",
    text: "We review your current tracking setup, CRM configuration, follow-up process, and attribution gaps to identify where data is breaking.",
  },
  {
    number: "02",
    title: "CRM Configuration",
    text: "We set up or fix your CRM with lead stages, source tagging, quality fields, and routing rules so every lead is tracked from first touch.",
  },
  {
    number: "03",
    title: "Nurture Build",
    text: "We build automated follow-up sequences via email and WhatsApp based on your sales cycle so leads stay warm until they are ready to convert.",
  },
  {
    number: "04",
    title: "Close the Loop",
    text: "We connect CRM conversion events back to Meta and Google via CAPI and offline conversions so the algorithms learn from real sales outcomes.",
  },
];

const deliverables = [
  { title: "CRM setup and configuration", text: "Stage mapping, lead routing, source tracking, and quality scoring fields." },
  { title: "Conversion tracking", text: "Meta CAPI, Google tag, and offline conversion event setup tied to CRM stages." },
  { title: "Lead nurture sequences", text: "5 to 10 touch automated flows via email or WhatsApp built around your sales process." },
  { title: "Attribution reporting", text: "Weekly view showing which campaigns and ad sets generate qualified leads and pipeline." },
  { title: "Sales feedback integration", text: "Process to capture lead quality notes from your sales team and feed them back into campaign decisions." },
  { title: "Lead quality scoring", text: "Simple scoring framework so your team and your CRM can classify lead quality at each pipeline stage." },
];

export default function CrmTrackingNurturePage() {
  return (
    <>
      <JsonLd
        data={webPageSchema(
          "/services/crm-tracking-nurture",
          "CRM Setup and Lead Tracking for Service Businesses",
          "Done For You CRM tracking, attribution, and lead nurture service for B2B and service businesses running paid ads in India.",
        )}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/b2b-lead-generation-agency" },
          { name: "CRM and Tracking", path: "/services/crm-tracking-nurture" },
        ])}
      />
      <JsonLd
        data={serviceSchema({
          name: "CRM Setup and Lead Tracking for Service Businesses",
          description:
            "CRM configuration, conversion tracking, lead nurture automation, and attribution reporting for service businesses running paid ads.",
          path: "/services/crm-tracking-nurture",
          serviceType: "CRM and lead tracking setup",
          areaServed: "India",
        })}
      />
      <JsonLd data={crmFaqSchema} />

      <HeroSection />

      <CaseStudyHighlight slug="hobfit" />

      <section className="bg-[#08111F] py-16 text-white sm:py-20 lg:py-24">
        <div className="container-wide">
          <header className="mx-auto max-w-[920px] text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#88DE7B]">The problem</p>
            <span className="mx-auto mt-5 block h-1 w-16 rounded-full bg-[#88DE7B]" />
            <h2 className="mt-7 text-[clamp(2.3rem,6.5vw,4.4rem)] font-medium leading-[1.02] tracking-[-0.055em]">
              What breaks when your ads have{" "}
              <span className="text-[#88DE7B]">no CRM feedback loop.</span>
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/72 sm:text-xl">
              Most service businesses run paid ads without connecting the outcome. The algorithm never learns what a real customer looks like.
            </p>
          </header>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {problems.map((problem) => (
              <article
                key={problem.title}
                className="rounded-[14px] border border-white/14 bg-white/[0.03] p-7 shadow-[0_22px_60px_rgba(0,0,0,0.16)]"
              >
                <span className="grid size-12 place-items-center rounded-full border border-[#88DE7B]/40 text-[#88DE7B]">
                  <CheckCircleIcon />
                </span>
                <h3 className="mt-7 text-xl font-medium tracking-[-0.03em]">{problem.title}</h3>
                <p className="mt-3 text-base leading-7 text-white/65">{problem.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 text-[#050505] sm:py-20 lg:py-24">
        <div className="container-wide">
          <header className="max-w-[820px]">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#164E50]">The DFY method</p>
            <span className="mt-5 block h-1 w-16 rounded-full bg-[#88DE7B]" />
            <h2 className="mt-7 text-[clamp(2.3rem,6.5vw,4.4rem)] font-medium leading-[1.02] tracking-[-0.055em]">
              How Done For You builds your CRM and tracking system.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#465163] sm:text-xl">
              Four steps to connect your ads to real sales outcomes so every campaign decision is grounded in what actually converted.
            </p>
          </header>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <article
                key={step.number}
                className="rounded-[14px] border border-[#dfe6df] bg-white p-6 shadow-[0_18px_55px_rgba(22,78,80,0.06)]"
              >
                <span className="inline-flex size-12 items-center justify-center rounded-full bg-[#164E50] text-base font-medium text-white">
                  {step.number}
                </span>
                <h3 className="mt-6 text-xl font-medium tracking-[-0.03em]">{step.title}</h3>
                <p className="mt-3 text-base leading-7 text-[#465163]">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Section tone="light" eyebrow="What we build" title="What your CRM and tracking system includes.">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {deliverables.map((d) => (
            <article
              key={d.title}
              className="rounded-[14px] border border-[#dfe9dc] bg-white p-5 shadow-[0_18px_45px_rgba(5,5,5,0.05)]"
            >
              <span className="grid size-10 place-items-center rounded-full bg-[#EEF8EE] text-[#164E50]">
                <CheckIcon />
              </span>
              <h3 className="mt-5 text-xl font-medium tracking-[-0.03em]">{d.title}</h3>
              <p className="mt-3 text-base leading-7 text-[#465163]">{d.text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="white" eyebrow="FAQs" title="Common questions about CRM and lead tracking.">
        <div className="mx-auto max-w-4xl divide-y divide-[#dfe9dc] rounded-[16px] border border-[#dfe9dc] bg-white">
          {faqs.map((faq) => (
            <article key={faq.question} className="p-6">
              <h3 className="text-lg font-medium tracking-[-0.02em] text-[#164E50]">{faq.question}</h3>
              <p className="mt-3 text-base leading-7 text-[#465163]">{faq.answer}</p>
            </article>
          ))}
        </div>
      </Section>

      <CTASection
        title="Ready to close the loop between your ads and your revenue?"
        text="Book a call. We will review your current tracking, CRM setup, and follow-up system and show you where lead quality is leaking."
        buttonLabel="Book a Call"
        buttonHref="/free-audit"
      />
    </>
  );
}

function HeroSection() {
  return (
    <section className="bg-white py-12 text-[#050505] sm:py-16 lg:py-20">
      <div className="container-wide">
        <div className="max-w-[880px]">
          <p className="inline-flex items-center gap-2 rounded-md border border-[#CDEECD] bg-[#EEF8EE] px-4 py-2 text-sm font-medium text-[#164E50]">
            <DatabaseIcon />
            CRM, Tracking and Nurture
          </p>
          <h1 className="mt-7 text-[clamp(2.65rem,7vw,5rem)] font-medium leading-[0.98] tracking-[-0.06em]">
            CRM Setup, Lead Tracking, and Nurture for Service Businesses.
          </h1>
          <p className="mt-7 max-w-[720px] text-lg leading-8 tracking-[-0.01em] text-[#465163] sm:text-xl sm:leading-9">
            Your paid ads generate leads. But if those leads are not tracked in a CRM, nurtured with automated follow-up, and fed back to your ad platforms as conversion signals, the algorithm never learns what a real customer looks like.
          </p>
          <p className="mt-5 max-w-[720px] text-lg leading-8 text-[#465163] sm:text-xl sm:leading-9">
            Done For You builds the full feedback loop: CRM configuration, conversion tracking, lead nurture automation, and attribution reporting, all connected so your campaigns improve with every lead.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/free-audit" className="min-h-[58px] rounded-md px-7 text-base sm:text-lg">
              Book a Call
              <span className="ml-3" aria-hidden="true">-&gt;</span>
            </ButtonLink>
            <ButtonLink
              href="/services/meta-ads"
              variant="secondary"
              className="min-h-[58px] rounded-md border-[#164E50] px-7 text-base text-[#164E50] sm:text-lg"
            >
              Meta Ads Service
              <span className="ml-3" aria-hidden="true">-&gt;</span>
            </ButtonLink>
          </div>
        </div>

        <div className="mt-14 grid gap-6 border-t border-[#e4e8e5] pt-10 md:grid-cols-3">
          {[
            { metric: "Faster lead follow-up", sub: "Automated nurture activates within minutes of form submit" },
            { metric: "Real conversion signal", sub: "CRM outcomes sent back to Meta and Google via CAPI" },
            { metric: "Pipeline visibility", sub: "Weekly attribution report from ad click to customer won" },
          ].map((item) => (
            <div key={item.metric} className="flex gap-4">
              <span className="mt-1 grid size-10 shrink-0 place-items-center rounded-full bg-[#EEF8EE] text-[#164E50]">
                <CheckIcon />
              </span>
              <div>
                <p className="text-lg font-medium tracking-[-0.02em]">{item.metric}</p>
                <p className="mt-1 text-sm leading-6 text-[#667085]">{item.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg aria-hidden="true" className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function CheckCircleIcon() {
  return (
    <svg aria-hidden="true" className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="m8 12 3 3 5-5" />
    </svg>
  );
}

function DatabaseIcon() {
  return (
    <svg aria-hidden="true" className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="6" rx="7" ry="3" />
      <path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6M5 12v5c0 1.7 3.1 3 7 3s7-1.3 7-3v-5" />
    </svg>
  );
}
