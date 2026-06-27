import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { Section } from "@/components/Section";
import { breadcrumbSchema, faqSchema, serviceSchema, webPageSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/site";

const pagePath = "/services/b2b-meta-ads-agency";
const description =
  "Done For You is a B2B Meta Ads agency in India and Delhi NCR that optimizes for qualified pipeline, not cheap leads, using CRM and sales feedback, in-house creative, and weekly reviews.";

export const metadata: Metadata = pageMetadata({
  title: "B2B Meta Ads Agency in India and Delhi NCR",
  description,
  path: pagePath,
  keywords: [
    "b2b meta ads agency india",
    "meta ads agency delhi ncr",
    "b2b facebook ads agency india",
    "b2b lead generation agency delhi",
    "performance marketing agency for b2b",
  ],
});

const differentiators = [
  {
    title: "We optimize for qualified pipeline, not cheap leads",
    text: "Success is measured on qualified leads and sales conversations, not the cheapest cost per form fill.",
  },
  {
    title: "CRM and sales feedback wired into the ad account",
    text: "Qualified leads and opportunities flow back to Meta, so the algorithm learns from buyers, not browsers.",
  },
  {
    title: "In-house creative, tested continuously",
    text: "Hooks, angles, statics, and video are built and tested in-house, because creative is the biggest B2B lever.",
  },
  {
    title: "Built for B2B sales cycles",
    text: "We plan for a qualified conversation that closes over weeks, not a same-day ecommerce purchase.",
  },
  {
    title: "Transparent spend management",
    text: "We manage Meta Ads accounts from about ₹50,000 to ₹5,00,000 per month with clear reporting.",
  },
  {
    title: "Weekly reviews tied to lead quality",
    text: "For the first 90 days we review campaigns weekly against lead quality and sales feedback.",
  },
];

const processSteps = [
  { title: "Audit", text: "Find the campaign, page, tracking, and follow-up leaks shaping your lead quality." },
  { title: "Strategy", text: "Define the buyer, offer, channel plan, qualification rules, and conversion path." },
  { title: "Launch", text: "Build or improve campaigns, creative, landing pages, CRM tracking, and nurture." },
  { title: "Improve", text: "Use sales feedback and CRM outcomes to sharpen lead quality every week." },
];

const industries = [
  "B2B services",
  "SaaS",
  "EdTech",
  "Clinics and healthcare",
  "Real estate",
  "Coaching and consulting",
  "Professional services",
  "Training institutes",
];

const faqs = [
  {
    question: "Which is the best B2B Meta Ads agency in Delhi NCR?",
    answer:
      "The best B2B Meta Ads agency for you is the one that optimizes for qualified pipeline instead of cheap leads. Done For You is a Delhi NCR based agency that ties Meta and Google Ads to CRM data and sales feedback, builds creative in-house, and reviews campaigns weekly. Ask any agency to show qualified lead metrics and CRM-based optimization, not just CPL.",
  },
  {
    question: "How much does a B2B Meta Ads agency cost in India?",
    answer:
      "Typical management fees are around ₹30,000 to ₹60,000 per month for smaller accounts and ₹75,000 to ₹2,00,000 or more for experienced performance agencies. Most agencies also recommend a minimum ad budget of about ₹1,00,000 per month. The management fee and the ad budget are separate.",
  },
  {
    question: "How is B2B Meta Ads different from ecommerce Meta Ads?",
    answer:
      "Ecommerce optimizes for a purchase that happens the same day. B2B optimizes for a qualified conversation that may close weeks later, so the campaign is judged on lead quality and pipeline, not instant ROAS. This is why a general ecommerce agency often underperforms on B2B lead generation.",
  },
  {
    question: "Which areas does Done For You serve in Delhi NCR?",
    answer:
      "We are based in Kalkaji, New Delhi and work with B2B and service businesses across Delhi NCR including Gurgaon, Noida, and the wider region, as well as remotely with clients across India and GCC markets.",
  },
];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Done For You",
  description:
    "B2B Meta Ads agency in Delhi NCR and India, focused on qualified pipeline, CRM feedback, in-house creative, and lead quality.",
  url: "https://www.doneforyou.in/services/b2b-meta-ads-agency",
  email: "radhesh@doneforyou.in",
  telephone: "+917054111631",
  address: {
    "@type": "PostalAddress",
    streetAddress: "TA-2, Jagadamba Road, Tughlakabad Extension, Kalkaji",
    addressLocality: "New Delhi",
    addressRegion: "Delhi",
    postalCode: "110019",
    addressCountry: "IN",
  },
  areaServed: { "@type": "Place", name: "India" },
  serviceType: ["B2B Meta Ads Management", "Meta Ads Management", "B2B Lead Generation"],
  parentOrganization: {
    "@type": "Organization",
    name: "Done For You",
    url: "https://www.doneforyou.in",
  },
};

export default function B2BMetaAdsAgencyPage() {
  return (
    <>
      <JsonLd data={webPageSchema(pagePath, "B2B Meta Ads Agency in India and Delhi NCR", description)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "B2B Lead Generation Agency", path: "/b2b-lead-generation-agency" },
          { name: "B2B Meta Ads Agency", path: pagePath },
        ])}
      />
      <JsonLd
        data={serviceSchema({
          name: "B2B Meta Ads Agency",
          description:
            "B2B Meta Ads management in India and Delhi NCR focused on qualified pipeline, CRM feedback, in-house creative, and lead quality.",
          path: pagePath,
          serviceType: "B2B Meta Ads management",
          areaServed: "India",
        })}
      />
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd data={localBusinessSchema} />

      <section className="bg-[#fbfbf8] py-16 text-[#050505] sm:py-24">
        <div className="container-wide grid gap-8 lg:grid-cols-[minmax(0,1fr)_390px] lg:items-center">
          <div>
            <p className="eyebrow text-[#164E50]">B2B Meta Ads agency &middot; Delhi NCR &amp; India</p>
            <h1 className="mt-5 text-[clamp(2.5rem,6.5vw,4.9rem)] font-black leading-[0.98] tracking-[-0.055em]">
              B2B Meta Ads Agency in India for Qualified Pipeline, Not Cheap Leads
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#465163] sm:text-xl sm:leading-9">
              Done For You is a Delhi NCR based agency that runs Meta Ads for B2B and service businesses, tied to CRM data
              and sales feedback so the spend finds real buyers, not the cheapest form fillers.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/free-audit" variant="primary">Get Free Audit</ButtonLink>
              <ButtonLink href="/book-a-call" variant="secondary">Book a Call</ButtonLink>
            </div>
          </div>
          <aside className="rounded-[18px] border border-[#CDEECD] bg-white p-6 shadow-[0_22px_70px_rgba(22,78,80,0.08)]">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#164E50]">The difference</p>
            <p className="mt-4 text-2xl font-black leading-tight tracking-[-0.03em] text-[#164E50]">
              We tie Meta Ads to CRM and sales feedback, so you scale qualified pipeline, not cheap leads.
            </p>
            <p className="mt-5 text-sm leading-6 text-[#667085]">
              Most agencies optimize for the cheapest form fill. For B2B, that is the easiest number to win and the least
              likely to make you money.
            </p>
          </aside>
        </div>
      </section>

      <Section tone="white" eyebrow="The B2B difference" title="Why B2B Meta Ads needs a different playbook">
        <div className="max-w-3xl space-y-5 text-lg leading-8 text-[#465163]">
          <p>
            Running Meta Ads for B2B is not the same as running them for ecommerce. Ecommerce optimizes for a purchase that
            happens the same day. B2B optimizes for a qualified conversation that may close weeks later.
          </p>
          <p>
            That single difference changes how you target, what you measure, and how you optimize. An agency that judges
            success on cheap leads scales the wrong thing. We judge success on qualified pipeline and cost per real sales
            conversation.
          </p>
        </div>
      </Section>

      <Section tone="light" eyebrow="Why DFY" title="What makes Done For You different">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {differentiators.map((item) => (
            <article key={item.title} className="rounded-[14px] border border-[#dfe9dc] bg-white p-6 shadow-[0_18px_45px_rgba(5,5,5,0.05)]">
              <h2 className="text-xl font-black leading-tight tracking-[-0.02em] text-[#164E50]">{item.title}</h2>
              <p className="mt-3 text-sm leading-6 text-[#4b4b4b]">{item.text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        tone="white"
        eyebrow="Measured proof"
        title="Proof that lead quality can be measured."
        intro="We connect ad performance with CRM and sales feedback so you can see which leads are actually worth following up."
      >
        <article className="mx-auto max-w-3xl rounded-[16px] border border-[#dfe9dc] bg-white p-5 shadow-[0_18px_45px_rgba(5,5,5,0.05)]">
          <div className="rounded-[12px] border border-dashed border-[#CDEECD] bg-[#fbfbf8] p-5">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-[#164E50]">Meta Ads + CRM Review</p>
            <div className="mt-5 grid min-h-[132px] place-items-center overflow-hidden rounded-[10px] bg-white text-center">
              <Image
                src="/proof/meta-ads-account-snapshot.png"
                alt="Meta Ads dashboard snapshot showing lead and qualification data"
                width={760}
                height={360}
                className="h-auto max-h-[200px] w-full object-contain"
              />
            </div>
          </div>
          <div className="mt-4 grid gap-2 sm:grid-cols-3">
            {["47% qualified leads", "159 qualified leads", "333 total leads"].map((metric) => (
              <p key={metric} className="rounded-[10px] bg-[#EEF8EE] px-3 py-2 text-center text-sm font-semibold text-[#164E50]">
                {metric}
              </p>
            ))}
          </div>
        </article>
      </Section>

      <Section tone="light" eyebrow="Who it is for" title="Who we run B2B Meta Ads for">
        <div className="flex flex-wrap gap-3">
          {industries.map((industry) => (
            <span key={industry} className="rounded-full border border-[#CDEECD] bg-[#EEF8EE] px-4 py-2 text-sm font-semibold text-[#164E50]">
              {industry}
            </span>
          ))}
        </div>
      </Section>

      <Section tone="white" eyebrow="Process" title="How we run your B2B Meta Ads">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {processSteps.map((step, index) => (
            <article key={step.title} className="rounded-[14px] border border-[#dfe9dc] bg-white p-5 shadow-[0_18px_45px_rgba(5,5,5,0.05)]">
              <p className="text-sm font-black text-[#164E50]">{String(index + 1).padStart(2, "0")}</p>
              <h2 className="mt-4 text-xl font-black tracking-[-0.02em]">{step.title}</h2>
              <p className="mt-3 text-sm leading-6 text-[#4b4b4b]">{step.text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="light" eyebrow="FAQs" title="B2B Meta Ads agency FAQs">
        <div className="mx-auto max-w-4xl divide-y divide-[#dfe9dc] rounded-[16px] border border-[#dfe9dc] bg-white">
          {faqs.map((faq) => (
            <article key={faq.question} className="p-6">
              <h2 className="text-xl font-black tracking-[-0.02em] text-[#164E50]">{faq.question}</h2>
              <p className="mt-3 text-base leading-7 text-[#465163]">{faq.answer}</p>
            </article>
          ))}
        </div>
      </Section>

      <section className="bg-white py-16">
        <div className="container-wide flex flex-col items-start justify-between gap-8 rounded-sm border border-[#050505]/12 bg-[#f6f5f1] p-7 md:flex-row md:items-center">
          <div>
            <p className="eyebrow eyebrow-default">Still comparing agencies?</p>
            <h2 className="mt-4 max-w-3xl text-3xl font-black leading-none sm:text-4xl">
              Read the 6 questions every B2B business should ask before hiring a Meta Ads agency.
            </h2>
          </div>
          <ButtonLink href="/resources/blog/how-to-choose-b2b-meta-ads-agency-india" variant="dark">
            Read the guide
          </ButtonLink>
        </div>
      </section>

      <CTASection
        title="Want a B2B Meta Ads agency that optimizes for pipeline?"
        text="Get a free audit and we will review your targeting, creative, landing page, tracking, and CRM feedback loop, and show you where qualified pipeline is leaking."
        buttonLabel="Get Free Audit"
        buttonHref="/free-audit"
      />
    </>
  );
}
