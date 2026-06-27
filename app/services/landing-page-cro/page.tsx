import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { Section } from "@/components/Section";
import { breadcrumbSchema, faqSchema, serviceSchema, webPageSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/site";
import { CaseStudyHighlight } from "@/components/CaseStudyHighlight";

export const metadata: Metadata = pageMetadata({
  title: "Landing Page CRO Agency for Service Businesses India",
  description:
    "Done For You audits and optimizes landing pages for service businesses so more of the right visitors convert into qualified leads and booked calls.",
  path: "/services/landing-page-cro",
  keywords: [
    "landing page CRO agency India",
    "conversion rate optimization for lead gen",
    "landing page optimization service businesses",
    "landing page audit India",
    "improve landing page conversion",
    "CRO for paid ads India",
  ],
});

const faqs = [
  {
    question: "What is a good conversion rate for a service business landing page?",
    answer:
      "For warm traffic from Google Search Ads targeting high-intent keywords, a well-built service business landing page should convert at 8 to 15 percent. For cold Meta Ads traffic, 3 to 7 percent is typical. Below these benchmarks, the page is usually losing leads that the ad budget already paid to bring in.",
  },
  {
    question: "How does landing page CRO improve lead quality, not just volume?",
    answer:
      "A well-structured landing page qualifies visitors before they submit. Specific messaging about who the service is for, what it costs, and what happens next naturally filters out unqualified enquiries. The result is fewer total leads but a higher percentage that are serious buyers.",
  },
  {
    question: "Do you build new landing pages or improve existing ones?",
    answer:
      "Done For You does both. For new accounts we build dedicated landing pages aligned to specific ad campaigns. For existing accounts we audit current pages and implement structured improvements based on what is leaking conversions and lead quality.",
  },
  {
    question: "Should I send paid traffic to my homepage or a dedicated landing page?",
    answer:
      "Almost always a dedicated landing page. Homepages are designed for multiple audiences with multiple goals. A landing page is built for one audience, one offer, and one action. For paid traffic, dedicated pages consistently outperform homepages on both conversion rate and lead quality.",
  },
  {
    question: "How long does landing page improvement take to show results?",
    answer:
      "Initial improvements to offer clarity, headline, and form structure typically show measurable conversion rate changes within 1 to 2 weeks at normal traffic volumes. More complex split tests need 3 to 4 weeks to accumulate enough data to make confident decisions.",
  },
];

const croFaqSchema = {
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
    title: "Ads work, page does not convert",
    text: "You are paying for clicks but visitors leave without filling the form. The ad campaign looks fine in the platform but revenue is not moving.",
  },
  {
    title: "Generic page attracts wrong leads",
    text: "A vague offer and broad messaging attracts everyone equally. The right buyers are not convinced. The wrong buyers fill the form anyway.",
  },
  {
    title: "Page was built for looks, not conversions",
    text: "Animated headers, stock photos, and agency copy look polished but do not address the specific problem your buyer is trying to solve.",
  },
  {
    title: "Mobile experience breaks conversion",
    text: "Most ad traffic arrives on mobile. Forms that are hard to fill, pages that load slowly, or layouts that break on smaller screens silently kill your CPL.",
  },
  {
    title: "No clear offer or next step",
    text: "Visitors land on the page and cannot immediately understand what they get, who this is for, and what happens after they fill the form.",
  },
  {
    title: "No social proof where it matters",
    text: "Generic testimonials buried at the bottom of the page do not build enough trust to overcome buyer hesitation at the form.",
  },
];

const steps = [
  {
    number: "01",
    title: "Page Audit",
    text: "We review your current page for offer clarity, message-to-market match, page speed, form friction, trust signals, and mobile experience.",
  },
  {
    number: "02",
    title: "Rebuild and Sharpen",
    text: "We rewrite the headline, clarify the offer, restructure the proof, improve the form, and align the page with what your ad traffic expects to see.",
  },
  {
    number: "03",
    title: "Track and Test",
    text: "We instrument the page with proper conversion tracking and run structured tests on the highest-impact elements: headline, CTA, form length, and offer framing.",
  },
  {
    number: "04",
    title: "Improve with Lead Quality Data",
    text: "We use CRM lead quality notes and sales feedback to keep improving the page. Higher conversion rate is only useful if the quality of those conversions also improves.",
  },
];

const fixItems = [
  { title: "Headline and offer clarity", text: "Rewrite the first 5 seconds of the page so the right visitor immediately understands who this is for and why it is worth their attention." },
  { title: "Message-to-ad alignment", text: "Match the page headline and offer to the exact ad that sent the click so there is no cognitive gap when the visitor lands." },
  { title: "Form and CTA optimization", text: "Shorten forms to the minimum needed for qualification, move the CTA above the fold, and test button copy that signals low commitment." },
  { title: "Trust and social proof", text: "Add client sectors, results snapshots, team proof, and trust markers near the form where buyer hesitation is highest." },
  { title: "Page speed and mobile", text: "Optimize images, remove render-blocking code, and ensure the full page works correctly on mobile devices at 3G speeds." },
  { title: "Lead qualification copy", text: "Use the page headline, body, and form to pre-qualify visitors. Unqualified people should self-select out before submitting." },
];

export default function LandingPageCroPage() {
  return (
    <>
      <JsonLd
        data={webPageSchema(
          "/services/landing-page-cro",
          "Landing Page CRO for Service Businesses",
          "Done For You landing page audit and conversion optimization for B2B and service businesses running paid ads in India.",
        )}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/b2b-lead-generation-agency" },
          { name: "Landing Page CRO", path: "/services/landing-page-cro" },
        ])}
      />
      <JsonLd
        data={serviceSchema({
          name: "Landing Page Conversion Optimization for Service Businesses",
          description:
            "Landing page audit, rebuild, and CRO testing for service businesses running paid ads on Meta and Google in India.",
          path: "/services/landing-page-cro",
          serviceType: "Landing page CRO",
          areaServed: "India",
        })}
      />
      <JsonLd data={croFaqSchema} />

      <HeroSection />
      <CaseStudyHighlight slug="tranzission" />

      <section className="bg-[#08111F] py-16 text-white sm:py-20 lg:py-24">
        <div className="container-wide">
          <header className="mx-auto max-w-[920px] text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#88DE7B]">The problem</p>
            <span className="mx-auto mt-5 block h-1 w-16 rounded-full bg-[#88DE7B]" />
            <h2 className="mt-7 text-[clamp(2.3rem,6.5vw,4.4rem)] font-medium leading-[1.02] tracking-[-0.055em]">
              Why most landing pages fail{" "}
              <span className="text-[#88DE7B]">service businesses.</span>
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/72 sm:text-xl">
              The ad spend is working. The landing page is the silent leak.
            </p>
          </header>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {problems.map((problem) => (
              <article
                key={problem.title}
                className="rounded-[14px] border border-white/14 bg-white/[0.03] p-7 shadow-[0_22px_60px_rgba(0,0,0,0.16)]"
              >
                <span className="grid size-12 place-items-center rounded-full border border-[#88DE7B]/40 text-[#88DE7B]">
                  <PageIcon />
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
              How Done For You improves your landing page conversion.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#465163] sm:text-xl">
              Four steps to turn a leaking page into a lead-qualifying machine that improves the quality of every form submission.
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

      <Section tone="light" eyebrow="What we fix" title="What goes into a DFY landing page improvement.">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {fixItems.map((item) => (
            <article
              key={item.title}
              className="rounded-[14px] border border-[#dfe9dc] bg-white p-5 shadow-[0_18px_45px_rgba(5,5,5,0.05)]"
            >
              <span className="grid size-10 place-items-center rounded-full bg-[#EEF8EE] text-[#164E50]">
                <CheckIcon />
              </span>
              <h3 className="mt-5 text-xl font-medium tracking-[-0.03em]">{item.title}</h3>
              <p className="mt-3 text-base leading-7 text-[#465163]">{item.text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="white" eyebrow="FAQs" title="Common questions about landing page CRO.">
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
        title="Your landing page is costing you leads you already paid for."
        text="Book a call. We will review your page and show you exactly what is leaking conversion and how to fix it."
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
            <PageIcon />
            Landing Page Optimization
          </p>
          <h1 className="mt-7 text-[clamp(2.65rem,7vw,5rem)] font-medium leading-[0.98] tracking-[-0.06em]">
            Landing Page Conversion Optimization for Service Businesses.
          </h1>
          <p className="mt-7 max-w-[720px] text-lg leading-8 tracking-[-0.01em] text-[#465163] sm:text-xl sm:leading-9">
            You are paying for every click that reaches your landing page. A page that converts at 3 percent instead of 10 percent is wasting 70 percent of your ad budget before a single lead arrives.
          </p>
          <p className="mt-5 max-w-[720px] text-lg leading-8 text-[#465163] sm:text-xl sm:leading-9">
            Done For You audits, rebuilds, and tests landing pages for B2B and service businesses so more of the right visitors convert into qualified leads, not just more form fills from unqualified prospects.
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
            { metric: "Page-ad alignment", sub: "Every landing page is built to match the exact ad that sent the click" },
            { metric: "Qualified lead focus", sub: "Page copy and form structure pre-qualify visitors before they submit" },
            { metric: "CRO that learns", sub: "Sales feedback informs what the page optimises toward over time" },
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

function PageIcon() {
  return (
    <svg aria-hidden="true" className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="5" width="16" height="14" rx="2" />
      <path d="M8 9h8M8 13h5" />
    </svg>
  );
}
