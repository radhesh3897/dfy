import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { Section } from "@/components/Section";
import { breadcrumbSchema, serviceSchema, webPageSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Gym Lead Generation Agency in India: Fill Classes",
  description:
    "Done For You builds Meta Ads and Google Ads systems for gyms and fitness studios in India that generate qualified membership leads and reduce cost per member acquisition.",
  path: "/services/gym-lead-generation",
  keywords: [
    "gym lead generation agency India",
    "fitness studio lead generation",
    "Meta Ads for gyms India",
    "gym membership marketing agency",
    "lead generation for fitness businesses",
    "CrossFit studio lead generation India",
    "personal training leads India",
  ],
});

const gymFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What Meta Ads CPL should a gym or fitness studio expect in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Gyms and fitness studios in India typically see Meta Ads CPL between ₹150 and ₹500 per lead depending on whether you are offering a free trial, a discounted membership, or a premium fitness program. Boutique gyms and specialized fitness concepts like CrossFit and functional training tend to see higher CPL with significantly better lead quality.",
      },
    },
    {
      "@type": "Question",
      name: "Should gyms use Meta Lead Ads or send traffic to a landing page?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "For free trial offers with simple qualification, Meta Lead Ads generate high volume quickly. For premium memberships or specialized programs above ₹5,000 per month, a dedicated landing page with photos of the gym, trainer credibility, and a specific offer converts better-quality leads. Done For You tests both formats for new gym accounts.",
      },
    },
    {
      "@type": "Question",
      name: "How do you prevent tire-kickers from filling gym membership forms?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "We use qualification questions in forms asking about fitness goals, current activity level, and membership budget. The landing page copy and ad creative also pre-qualify by being specific about who the gym is for. Vague ads attract vague leads. Specific positioning attracts people who are actually ready to join.",
      },
    },
    {
      "@type": "Question",
      name: "How important is local targeting for gym ads?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Critical. Members almost always live or work within 3 to 5 kilometres of the gym. Done For You sets geographic radius targeting tightly around the gym location and uses location-specific messaging. Broad city targeting wastes budget on people who will never commute to your location.",
      },
    },
    {
      "@type": "Question",
      name: "Can you help with gym membership retention campaigns, not just new member acquisition?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Yes. Retargeting campaigns aimed at current and lapsed members, re-engagement nurture sequences for members who enquired but did not join, and referral campaigns to existing members are all part of the system Done For You builds for gyms.",
      },
    },
  ],
};

const problems = [
  {
    title: "Leads from a 30km radius who never visit",
    text: "Broad targeting fills forms with people too far away to become members. Local radius targeting is often set too loosely or not at all.",
  },
  {
    title: "Free trial leads that ghost after joining",
    text: "Free trial campaigns generate volume but most free trial members do not convert to paid memberships. The offer attracts the wrong intent level.",
  },
  {
    title: "Seasonal campaign gaps",
    text: "New Year and monsoon season drive very different demand patterns. Running the same campaign all year wastes budget in low-intent periods.",
  },
  {
    title: "No WhatsApp or SMS follow-up system",
    text: "Most gym enquiries need 3 to 5 follow-ups to convert to a visit. Without automated WhatsApp reminders, the sales team cannot follow up consistently.",
  },
  {
    title: "Generic creative with no local feel",
    text: "Ads showing generic stock fitness photos do not build trust for a local gym. Members want to see the actual space, trainers, and community.",
  },
  {
    title: "No Google Ads for high-intent search",
    text: "Searches like \"gym near me\" and \"personal trainer [city]\" are high-intent and highly convertible. Most gyms only run Meta Ads and miss this channel entirely.",
  },
];

const approach = [
  { title: "Tight local radius targeting", text: "Geographic targeting set to 3 to 5km from the gym with location-specific ad copy and landing page messaging." },
  { title: "Offer-first campaign structure", text: "Separate campaigns for free trials, membership offers, and premium programs so each audience sees the most relevant offer." },
  { title: "Real gym creative", text: "Ads featuring the actual gym space, trainers, and members outperform stock photos. We brief and structure the creative shoot to match ad angles." },
  { title: "WhatsApp nurture sequences", text: "Automated follow-up via WhatsApp from enquiry to first visit to membership conversion with qualification questions built in." },
  { title: "Google Ads for near-me searches", text: "Search campaigns targeting high-intent local queries like gym near me, personal trainer, and fitness studio with location-matched landing pages." },
  { title: "Seasonal campaign calendar", text: "Budget and creative strategy adjusted for New Year, monsoon, and festive season demand patterns so you capitalize on intent spikes." },
];

const processSteps = [
  { title: "Audit", text: "Review current campaigns, local targeting, offer structure, follow-up system, and CPM cost vs. lead quality to find the leaks." },
  { title: "Strategy", text: "Define the audience segments, offer hierarchy, creative brief, and geographic targeting radius for the next 90 days." },
  { title: "Launch", text: "Build and launch Meta Ads, Google Ads, landing pages, and WhatsApp nurture sequences aligned to your membership process." },
  { title: "Improve", text: "Use visit-to-join conversion data to optimize targeting, creative, and offer every two weeks." },
];

export default function GymLeadGenerationPage() {
  return (
    <>
      <JsonLd
        data={webPageSchema(
          "/services/gym-lead-generation",
          "Gym Lead Generation Agency India",
          "Done For You builds paid acquisition systems for gyms and fitness studios in India.",
        )}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/b2b-lead-generation-agency" },
          { name: "Gym Lead Generation", path: "/services/gym-lead-generation" },
        ])}
      />
      <JsonLd
        data={serviceSchema({
          name: "Gym Lead Generation Agency India",
          description:
            "Meta Ads, Google Ads, and membership funnel systems for gyms and fitness studios in India.",
          path: "/services/gym-lead-generation",
          serviceType: "Gym and fitness studio lead generation",
          areaServed: "India",
        })}
      />
      <JsonLd data={gymFaqSchema} />

      <section className="bg-[#fbfbf8] py-16 text-[#050505] sm:py-24">
        <div className="container-wide grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-start">
          <div>
            <p className="eyebrow text-[#164E50]">Gym and fitness lead generation</p>
            <h1 className="mt-5 text-[clamp(2.65rem,7vw,5.25rem)] font-medium leading-[0.96] tracking-[-0.055em]">
              Lead Generation Agency for Gyms and Fitness Studios in India.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#465163] sm:text-xl sm:leading-9">
              Done For You builds local lead generation systems for gyms, fitness studios, and personal training businesses using Meta Ads, Google Ads, tightly targeted local campaigns, and WhatsApp nurture to turn enquiries into paid members.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/free-audit" variant="primary">Book a Call</ButtonLink>
              <ButtonLink href="/services/meta-ads" variant="secondary">Meta Ads Service</ButtonLink>
            </div>
          </div>
          <aside className="rounded-[18px] border border-[#CDEECD] bg-white p-6 shadow-[0_22px_70px_rgba(22,78,80,0.08)]">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#164E50]">Fitness focus</p>
            <p className="mt-4 text-xl font-medium leading-tight tracking-[-0.03em] text-[#164E50]">
              More members. Lower cost per join. Better leads from your local area.
            </p>
            <ul className="mt-5 space-y-3">
              {["Local radius targeting", "Free trial and membership funnels", "WhatsApp follow-up automation", "Google Ads for near-me searches", "Seasonal campaign planning"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-[#465163]">
                  <span className="grid size-5 shrink-0 place-items-center rounded-full bg-[#EEF8EE] text-[#164E50]">
                    <svg className="size-3" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2 6l2.5 2.5 5.5-5" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <Section tone="white" eyebrow="Why gym ads underperform" title="The problems most gyms face with paid ad lead generation.">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {problems.map((problem, index) => (
            <article key={problem.title} className="rounded-[14px] border border-[#dfe9dc] bg-white p-5 shadow-[0_18px_45px_rgba(5,5,5,0.05)]">
              <p className="text-sm font-medium text-[#164E50]">{String(index + 1).padStart(2, "0")}</p>
              <h3 className="mt-4 text-lg font-medium tracking-[-0.02em]">{problem.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#4b4b4b]">{problem.text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="light" eyebrow="DFY approach" title="How Done For You builds gym membership lead generation systems.">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {approach.map((item) => (
            <article key={item.title} className="rounded-[14px] border border-[#dfe9dc] bg-white p-5 shadow-[0_18px_45px_rgba(5,5,5,0.05)]">
              <h3 className="text-lg font-medium tracking-[-0.02em] text-[#164E50]">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#4b4b4b]">{item.text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="white" eyebrow="Process" title="How we launch and scale your gym's lead generation.">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {processSteps.map((step, index) => (
            <article key={step.title} className="rounded-[14px] border border-[#dfe9dc] bg-white p-5 shadow-[0_18px_45px_rgba(5,5,5,0.05)]">
              <p className="text-sm font-medium text-[#164E50]">{String(index + 1).padStart(2, "0")}</p>
              <h3 className="mt-4 text-xl font-medium tracking-[-0.02em]">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#4b4b4b]">{step.text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="light" eyebrow="FAQs" title="Common questions about gym lead generation.">
        <div className="mx-auto max-w-4xl divide-y divide-[#dfe9dc] rounded-[16px] border border-[#dfe9dc] bg-white">
          {gymFaqSchema.mainEntity.map((item) => (
            <article key={item.name} className="p-6">
              <h3 className="text-lg font-medium tracking-[-0.02em] text-[#164E50]">{item.name}</h3>
              <p className="mt-3 text-base leading-7 text-[#465163]">{item.acceptedAnswer.text}</p>
            </article>
          ))}
        </div>
      </Section>

      <CTASection
        title="Ready to fill your gym with the right members?"
        text="Book a call about your current gym ads, targeting, and follow-up system. We will show you where new member acquisition is leaking."
        buttonLabel="Book a Call"
        buttonHref="/free-audit"
      />
    </>
  );
}
