import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { Section } from "@/components/Section";
import { breadcrumbSchema, serviceSchema, webPageSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Clinic Lead Generation Agency India | Done For You",
  description:
    "Done For You builds Meta Ads and Google Ads systems for clinics and healthcare businesses in India that generate qualified patient appointment leads and reduce cost per consultation.",
  path: "/services/clinic-lead-generation",
  keywords: [
    "clinic lead generation agency India",
    "healthcare lead generation India",
    "Meta Ads for clinics India",
    "Google Ads for doctors India",
    "patient lead generation India",
    "dental clinic lead generation",
    "dermatology clinic Meta Ads India",
  ],
});

const clinicFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What Meta Ads CPL should a clinic or healthcare business expect in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Clinics in India typically see Meta Ads CPL between ₹250 and ₹800 for appointment enquiries depending on the specialty, location, and consultation fee. High-value specialties like cosmetic dermatology, fertility, and orthopaedics tend to see higher CPL but much higher revenue per patient. General practice and dentistry typically generate lower CPL with higher volume.",
      },
    },
    {
      "@type": "Question",
      name: "Is Google Ads or Meta Ads better for clinics?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "For most clinics, Google Ads generates higher-intent leads because the patient is actively searching for a solution. Meta Ads is better for creating awareness around specific treatments, health conditions, or seasonal campaigns. Done For You typically runs Google Search Ads as the primary lead source and Meta Ads as the secondary channel to retarget and build awareness in the local area.",
      },
    },
    {
      "@type": "Question",
      name: "How do you handle patient data and sensitive health information in ads?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Done For You does not collect or store patient health data. Lead forms capture only name, phone, and appointment preference. We avoid targeting based on health conditions in Meta Ads in compliance with their health and wellness advertising policies. Google Ads for medical keywords follow standard search intent targeting without personal health data.",
      },
    },
    {
      "@type": "Question",
      name: "How do you improve appointment show-up rates for clinics?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Clinic appointment show-up rates improve through three systems: an immediate WhatsApp confirmation message after the enquiry, a reminder at 24 hours and 2 hours before the appointment, and a qualification question on the form asking about the condition or treatment they are seeking. These three steps together typically improve show-up rates from 40 to 65 to 70 to 85 percent.",
      },
    },
    {
      "@type": "Question",
      name: "Can you run ads for specific medical specialties?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Yes. Done For You has built campaigns for dental clinics, dermatology and skin care clinics, physiotherapy centres, fertility clinics, ophthalmology practices, and general multispecialty hospitals. Each specialty needs a different keyword strategy, offer framing, and audience approach which we build from the audit phase.",
      },
    },
  ],
};

const problems = [
  {
    title: "Low appointment show-up rate",
    text: "Patients enquire but do not show up for the consultation. Without automated reminders and confirmation messages, 40 to 60 percent of enquiries go cold between booking and appointment.",
  },
  {
    title: "Irrelevant leads from broad geographic targeting",
    text: "Patients will not travel more than 5 to 10 kilometres for most consultations. Broad city targeting fills your CRM with enquiries from people too far away to visit.",
  },
  {
    title: "No Google Ads for high-intent search",
    text: "Patients actively searching for a specialist or treatment are the highest-intent leads available. Most clinics rely only on Meta Ads and miss this channel entirely.",
  },
  {
    title: "No follow-up after the first missed call",
    text: "The clinic receptionist calls once. If unanswered, the lead is forgotten. Competitors with automated follow-up sequences convert these enquiries instead.",
  },
  {
    title: "Generic ads that do not build trust",
    text: "Stock medical images and generic headlines do not build the trust patients need before booking a consultation with a new clinic. Social proof, doctor credibility, and specific treatment outcomes matter.",
  },
  {
    title: "No pipeline from enquiry to consultation to treatment",
    text: "Without a CRM tracking each patient from ad click to consultation to revenue, the clinic cannot see which campaigns generate actual paying patients.",
  },
];

const approach = [
  { title: "Local targeting with specialty focus", text: "Geographic radius targeting aligned to realistic travel distance for the consultation type, with separate campaigns for each key specialty." },
  { title: "Google Ads for high-intent searches", text: "Search campaigns for specialty and condition keywords like best dermatologist near me and dental clinic in [city] with ad-to-landing-page alignment." },
  { title: "Trust-first creative", text: "Ad creative featuring the doctor, clinic environment, and real patient outcomes with compliance-safe messaging that builds confidence before the consultation." },
  { title: "Appointment confirmation and reminders", text: "Automated WhatsApp confirmation and multi-touch reminders so booked patients show up and the front desk handles fewer no-shows." },
  { title: "CRM from enquiry to revenue", text: "Patient pipeline from first enquiry through appointment, consultation, and treatment so the clinic can see cost per consultation and cost per treatment." },
  { title: "Seasonal and specialty campaigns", text: "Campaign calendar adjusted for seasonal health trends, awareness months, and high-intent periods for specific specialties." },
];

const processSteps = [
  { title: "Audit", text: "Review current campaigns, targeting, landing pages, appointment show-up rate, and follow-up process to find where patient enquiries are leaking." },
  { title: "Strategy", text: "Define the specialty campaign structure, geographic targeting, offer, Google vs. Meta allocation, and patient pipeline stages." },
  { title: "Launch", text: "Build and launch campaigns, landing pages, Google Ads, WhatsApp automations, and CRM pipeline aligned to your consultation booking flow." },
  { title: "Improve", text: "Use appointment show-up and conversion data to optimize targeting, creative, and follow-up sequences every two weeks." },
];

export default function ClinicLeadGenerationPage() {
  return (
    <>
      <JsonLd
        data={webPageSchema(
          "/services/clinic-lead-generation",
          "Clinic Lead Generation Agency India",
          "Done For You builds paid acquisition systems for clinics and healthcare businesses in India.",
        )}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/b2b-lead-generation-agency" },
          { name: "Clinic Lead Generation", path: "/services/clinic-lead-generation" },
        ])}
      />
      <JsonLd
        data={serviceSchema({
          name: "Clinic Lead Generation Agency India",
          description:
            "Meta Ads, Google Ads, and patient acquisition systems for clinics and healthcare businesses in India.",
          path: "/services/clinic-lead-generation",
          serviceType: "Clinic and healthcare lead generation",
          areaServed: "India",
        })}
      />
      <JsonLd data={clinicFaqSchema} />

      <section className="bg-[#fbfbf8] py-16 text-[#050505] sm:py-24">
        <div className="container-wide grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-start">
          <div>
            <p className="eyebrow text-[#164E50]">Clinic and healthcare lead generation</p>
            <h1 className="mt-5 text-[clamp(2.65rem,7vw,5.25rem)] font-medium leading-[0.96] tracking-[-0.055em]">
              Lead Generation Agency for Clinics and Healthcare Businesses in India.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#465163] sm:text-xl sm:leading-9">
              Done For You builds patient acquisition systems for clinics, hospitals, and healthcare practices using Google Ads, Meta Ads, local targeting, and automated appointment follow-up that converts enquiries into confirmed consultations.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/free-audit" variant="primary">Get Free Audit</ButtonLink>
              <ButtonLink href="/services/google-ads" variant="secondary">Google Ads Service</ButtonLink>
            </div>
          </div>
          <aside className="rounded-[18px] border border-[#CDEECD] bg-white p-6 shadow-[0_22px_70px_rgba(22,78,80,0.08)]">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#164E50]">Healthcare focus</p>
            <p className="mt-4 text-xl font-medium leading-tight tracking-[-0.03em] text-[#164E50]">
              More consultations. Higher show-up rate. Lower cost per patient.
            </p>
            <ul className="mt-5 space-y-3">
              {["Google Ads for high-intent searches", "Local radius targeting by specialty", "WhatsApp appointment reminders", "Doctor and clinic trust creative", "Patient pipeline CRM"].map((item) => (
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

      <Section tone="white" eyebrow="Why clinic ads underperform" title="The problems most clinics face with paid ad lead generation.">
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

      <Section tone="light" eyebrow="DFY approach" title="How Done For You builds clinic patient acquisition systems.">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {approach.map((item) => (
            <article key={item.title} className="rounded-[14px] border border-[#dfe9dc] bg-white p-5 shadow-[0_18px_45px_rgba(5,5,5,0.05)]">
              <h3 className="text-lg font-medium tracking-[-0.02em] text-[#164E50]">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#4b4b4b]">{item.text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="white" eyebrow="Process" title="How we launch and improve your clinic's patient acquisition.">
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

      <Section tone="light" eyebrow="FAQs" title="Common questions about clinic lead generation.">
        <div className="mx-auto max-w-4xl divide-y divide-[#dfe9dc] rounded-[16px] border border-[#dfe9dc] bg-white">
          {clinicFaqSchema.mainEntity.map((item) => (
            <article key={item.name} className="p-6">
              <h3 className="text-lg font-medium tracking-[-0.02em] text-[#164E50]">{item.name}</h3>
              <p className="mt-3 text-base leading-7 text-[#465163]">{item.acceptedAnswer.text}</p>
            </article>
          ))}
        </div>
      </Section>

      <CTASection
        title="Ready to bring more qualified patients through your clinic doors?"
        text="Book a free audit of your current healthcare ads, local targeting, and follow-up system. We will show you exactly where patient enquiries are leaking."
        buttonLabel="Get Free Audit"
        buttonHref="/free-audit"
      />
    </>
  );
}
