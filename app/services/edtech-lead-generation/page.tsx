import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { Section } from "@/components/Section";
import { breadcrumbSchema, faqSchema, serviceSchema, webPageSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "EdTech Lead Generation Agency India: More Enrolments",
  description:
    "Done For You builds Meta Ads and Google Ads systems for EdTech companies in India that generate qualified enrolment leads, reduce CPL, and improve show-up rates.",
  path: "/services/edtech-lead-generation",
  keywords: [
    "EdTech lead generation agency India",
    "lead generation for EdTech companies",
    "Meta Ads for EdTech India",
    "Google Ads for education companies",
    "student lead generation India",
    "enrolment lead generation EdTech",
    "education marketing agency India",
  ],
});

const faqs = [
  {
    question: "What Meta Ads CPL should an EdTech company expect in India?",
    answer:
      "For online courses and training programs in India, Meta Ads CPL typically ranges from ₹200 to ₹600 per lead depending on the course price, target audience age group, and whether you are using lead forms or landing pages. Programs targeting working professionals above ₹30,000 course value typically see higher CPL with stronger lead quality.",
  },
  {
    question: "Should EdTech companies use Meta Lead Ads or website landing pages?",
    answer:
      "For lower-cost courses below ₹10,000, Meta Lead Ads generate higher volume at lower CPL. For higher-ticket programs, a dedicated landing page produces stronger intent signals and better show-up rates. Done For You recommends testing both for new EdTech accounts and scaling the format that generates higher course-to-admission conversion.",
  },
  {
    question: "How do you improve show-up rates for webinars and demo calls?",
    answer:
      "Show-up rates improve through three systems: a multi-touch nurture sequence sent between registration and the session, reminders at 24 hours, 1 hour, and 15 minutes before, and a qualification question on the form that filters out low-intent registrations before they clog your CRM.",
  },
  {
    question: "Can you run ads during peak admission seasons?",
    answer:
      "Yes. Done For You plans campaign budgets and creative calendars around EdTech seasonal cycles including Q1 (January intake), April-May (board results and admission season), and October-November (Q3 cohort starts). Budget allocation and creative themes are adjusted to match demand peaks.",
  },
  {
    question: "Do you work with both recorded course platforms and live cohort programs?",
    answer:
      "Yes. The acquisition strategy differs: recorded course platforms benefit from evergreen campaigns and retargeting funnels, while live cohorts benefit from time-bound urgency campaigns and webinar funnels. Done For You builds the system that matches your delivery model.",
  },
];

const edtechFaqSchema = {
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
    title: "High CPL, low enrolment rate",
    text: "You are generating plenty of form fills but very few convert to actual paid enrolments. The gap lives in targeting, nurture, and the quality of the follow-up system.",
  },
  {
    title: "Low webinar and demo show-up rates",
    text: "Registrations look promising but only 20 to 30 percent show up. Without automated reminders and a strong pre-event nurture sequence, most registrations go cold.",
  },
  {
    title: "Seasonal budget waste",
    text: "EdTech demand peaks sharply at admission season. Running the same budget structure year-round wastes spend in off-peak months and under-invests during high-intent windows.",
  },
  {
    title: "Untargeted broad audience",
    text: "Ads reaching students, parents, and working professionals with the same creative and message convert poorly. Each audience needs a different hook and a different offer framing.",
  },
  {
    title: "No CRM or admission pipeline tracking",
    text: "Leads sit in a spreadsheet without stage visibility. The team cannot see which leads are close to enrolling and which went cold three weeks ago.",
  },
  {
    title: "Competitor-heavy keyword landscape",
    text: "Google Ads for education keywords are expensive and competitive. Without tight match types, negative keywords, and strong landing pages, budget drains fast with low return.",
  },
];

const approach = [
  { title: "Audience segmentation by intent", text: "Separate campaigns for students, working professionals, and career-switchers with tailored creative and landing pages for each segment." },
  { title: "Funnel-matched creative", text: "Top-of-funnel hooks focus on aspiration and outcome. Retargeting creative addresses objections around price, time commitment, and credibility." },
  { title: "Webinar and cohort funnels", text: "Registration pages, confirmation sequences, multi-touch reminders, and post-webinar nurture built specifically for EdTech admission flows." },
  { title: "Seasonal campaign planning", text: "Budget and creative calendars built around EdTech admission peaks so you scale spend when intent is high and preserve budget in off-peak windows." },
  { title: "CRM and admission pipeline", text: "Lead stages from enquiry to enrolled with automated nurture at each stage so no qualified lead goes cold without a follow-up." },
  { title: "Google Ads for high-intent search", text: "Search campaigns targeting course and career keywords with tight ad groups, strong negative keyword lists, and landing pages aligned to search intent." },
];

const processSteps = [
  { title: "Audit", text: "Review current campaigns, CPL, show-up rates, enrolment conversion, and tracking setup to find where leads and budget are leaking." },
  { title: "Strategy", text: "Define the audience segments, funnel stages, campaign structure, creative angles, and admission calendar for the next 90 days." },
  { title: "Launch", text: "Build campaigns, landing pages, webinar funnels, CRM pipeline, and nurture sequences aligned to your enrolment process." },
  { title: "Improve", text: "Use enrolment conversion data and sales feedback to sharpen targeting, creative, and nurture every two weeks." },
];

export default function EdtechLeadGenerationPage() {
  return (
    <>
      <JsonLd
        data={webPageSchema(
          "/services/edtech-lead-generation",
          "EdTech Lead Generation Agency India",
          "Done For You builds paid acquisition systems for EdTech companies in India to generate qualified enrolment leads.",
        )}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/b2b-lead-generation-agency" },
          { name: "EdTech Lead Generation", path: "/services/edtech-lead-generation" },
        ])}
      />
      <JsonLd
        data={serviceSchema({
          name: "EdTech Lead Generation Agency India",
          description:
            "Meta Ads, Google Ads, and enrolment funnel systems for EdTech companies in India.",
          path: "/services/edtech-lead-generation",
          serviceType: "EdTech lead generation",
          areaServed: "India",
        })}
      />
      <JsonLd data={edtechFaqSchema} />

      <section className="bg-[#fbfbf8] py-16 text-[#050505] sm:py-24">
        <div className="container-wide grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-start">
          <div>
            <p className="eyebrow text-[#164E50]">EdTech lead generation</p>
            <h1 className="mt-5 text-[clamp(2.65rem,7vw,5.25rem)] font-medium leading-[0.96] tracking-[-0.055em]">
              Lead Generation Agency for EdTech Companies in India.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#465163] sm:text-xl sm:leading-9">
              Done For You builds paid acquisition systems for EdTech companies using Meta Ads, Google Ads, enrolment funnels, CRM tracking, and nurture sequences designed around your admission process and course calendar.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/free-audit" variant="primary">Book a Call</ButtonLink>
              <ButtonLink href="/services/meta-ads" variant="secondary">Meta Ads Service</ButtonLink>
            </div>
          </div>
          <aside className="rounded-[18px] border border-[#CDEECD] bg-white p-6 shadow-[0_22px_70px_rgba(22,78,80,0.08)]">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#164E50]">EdTech focus</p>
            <p className="mt-4 text-xl font-medium leading-tight tracking-[-0.03em] text-[#164E50]">
              More enrolments. Lower CPL. Fewer leads that ghost after the webinar.
            </p>
            <ul className="mt-5 space-y-3">
              {["Enrolment funnel setup", "Webinar and cohort flows", "Seasonal campaign planning", "Admission pipeline CRM", "Meta Ads and Google Ads"].map((item) => (
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

      <Section tone="white" eyebrow="Why EdTech lead gen fails" title="The problems most EdTech companies face with paid ads.">
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

      <Section tone="light" eyebrow="DFY approach" title="How Done For You builds EdTech lead generation systems.">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {approach.map((item) => (
            <article key={item.title} className="rounded-[14px] border border-[#dfe9dc] bg-white p-5 shadow-[0_18px_45px_rgba(5,5,5,0.05)]">
              <h3 className="text-lg font-medium tracking-[-0.02em] text-[#164E50]">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#4b4b4b]">{item.text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="white" eyebrow="Process" title="How we launch and improve your EdTech campaigns.">
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

      <Section tone="light" eyebrow="FAQs" title="Common questions about EdTech lead generation.">
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
        title="Ready to grow enrolments with paid ads that actually convert?"
        text="Book a call about your current EdTech campaigns, landing pages, and follow-up system. We will show you exactly where enrolments are leaking."
        buttonLabel="Book a Call"
        buttonHref="/free-audit"
      />
    </>
  );
}
