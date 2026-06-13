import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/ButtonLink";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { Section } from "@/components/Section";
import { breadcrumbSchema, faqSchema, webPageSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/site";
import { getLocationPage, locationPages, serviceLinks } from "@/data/locationPages";

type LocationPageProps = {
  params: Promise<{ city: string }>;
};

export function generateStaticParams() {
  return locationPages.map((location) => ({ city: location.slug }));
}

export async function generateMetadata({ params }: LocationPageProps): Promise<Metadata> {
  const { city: slug } = await params;
  const location = getLocationPage(slug);

  if (!location) {
    return {};
  }

  return pageMetadata({
    title: `Lead Generation Agency in ${location.city}`,
    description: `Done For You helps service businesses in ${location.city} generate better-quality leads through Google Ads, Meta Ads, landing pages, tracking, CRM setup, and creative strategy.`,
    path: `/locations/${location.slug}`,
    keywords: [
      `lead generation agency in ${location.city}`,
      `Google Ads agency in ${location.city}`,
      `Meta Ads agency in ${location.city}`,
      `Facebook Ads agency in ${location.city}`,
      `performance marketing agency in ${location.city}`,
      `B2B lead generation agency in ${location.city}`,
      `landing page CRO agency in ${location.city}`,
    ],
  });
}

const systemPoints = [
  "Offer and ICP clarity before spend scales.",
  "Campaign structure that separates search intent, paid social demand, and retargeting.",
  "Creative testing around buyer objections, urgency, and sales feedback.",
  "Landing page improvements that reduce friction and qualify enquiries.",
  "Tracking, CRM setup, nurture, and weekly optimization from real lead outcomes.",
];

const processSteps = [
  { title: "Audit", text: "Find the campaign, page, tracking, and follow-up leaks shaping lead quality." },
  { title: "Strategy", text: "Define the buyer, offer, channel plan, qualification rules, and conversion path." },
  { title: "Launch", text: "Build or improve campaigns, creative, landing pages, CRM tracking, and nurture." },
  { title: "Improve", text: "Use sales feedback and CRM outcomes to sharpen lead quality every week." },
];

const defaultIndustries = [
  "EdTech",
  "Coaching businesses",
  "Clinics",
  "Gyms and fitness studios",
  "Travel agencies",
  "SaaS and B2B services",
  "Professional services",
  "Training institutes",
];

export default async function CityLocationPage({ params }: LocationPageProps) {
  const { city: slug } = await params;
  const location = getLocationPage(slug);

  if (!location) {
    notFound();
  }

  const keyword = `lead generation agency in ${location.city}`;
  const cityIndustries = [...new Set([...location.sectors, ...defaultIndustries])].slice(0, 8);
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Done For You",
    description: `B2B lead generation agency serving businesses in ${location.city} through Meta Ads and Google Ads management.`,
    url: `https://www.doneforyou.in/locations/${location.slug}`,
    email: "radhesh@doneforyou.in",
    areaServed: {
      "@type": "City",
      name: location.city,
    },
    serviceType: ["Meta Ads Management", "Google Ads Management", "B2B Lead Generation"],
    parentOrganization: {
      "@type": "Organization",
      name: "Done For You",
      url: "https://www.doneforyou.in",
    },
  };

  return (
    <>
      <JsonLd
        data={webPageSchema(
          `/locations/${location.slug}`,
          `Lead Generation Agency in ${location.city}`,
          `Done For You location hub for service businesses in ${location.city}.`,
        )}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Locations", path: "/locations" },
          { name: location.city, path: `/locations/${location.slug}` },
        ])}
      />
      <JsonLd data={faqSchema(location.faqs)} />
      <JsonLd data={localBusinessSchema} />

      <section className="bg-[#fbfbf8] py-16 text-[#050505] sm:py-24">
        <div className="container-wide grid gap-8 lg:grid-cols-[minmax(0,1fr)_390px] lg:items-center">
          <div>
            <p className="eyebrow text-[#164E50]">Serving businesses in {location.city}</p>
            <h1 className="mt-5 text-[clamp(2.65rem,7vw,5.25rem)] font-black leading-[0.96] tracking-[-0.055em]">
              Lead Generation Agency in {location.city} for Service Businesses
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#465163] sm:text-xl sm:leading-9">
              Done For You helps service businesses in {location.city} generate better-quality leads through Google Ads,
              Meta Ads, landing pages, CRM tracking, nurture systems, creative strategy, and sales feedback loops.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/free-audit" variant="primary">Get Free Audit</ButtonLink>
              <ButtonLink href="/book-a-call" variant="secondary">Book a Call</ButtonLink>
            </div>
          </div>
          <aside className="rounded-[18px] border border-[#CDEECD] bg-white p-6 shadow-[0_22px_70px_rgba(22,78,80,0.08)]">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#164E50]">Local focus</p>
            <p className="mt-4 text-2xl font-black leading-tight tracking-[-0.03em] text-[#164E50]">
              {location.uniqueAngle}
            </p>
            <p className="mt-5 text-sm leading-6 text-[#667085]">
              A {keyword} should help you understand lead quality, not only campaign volume.
            </p>
          </aside>
        </div>
      </section>

      <Section
        tone="white"
        eyebrow="Lead quality"
        title={`Why ${location.city} businesses struggle with lead quality`}
      >
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-[16px] border border-[#dfe9dc] bg-[#fbfbf8] p-6">
            <h2 className="text-3xl font-black tracking-[-0.04em]">Local market context</h2>
            <div className="mt-5 space-y-4 text-base leading-7 text-[#465163]">
              {location.context.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {location.problems.map((problem, index) => (
              <article key={problem.title} className="rounded-[14px] border border-[#dfe9dc] bg-white p-5 shadow-[0_18px_45px_rgba(5,5,5,0.05)]">
                <p className="text-sm font-black text-[#164E50]">{String(index + 1).padStart(2, "0")}</p>
                <h3 className="mt-4 text-xl font-black tracking-[-0.02em]">{problem.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#4b4b4b]">{problem.text}</p>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section
        tone="light"
        eyebrow="Services"
        title={`Growth services for ${location.city} service businesses`}
      >
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {serviceLinks.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="rounded-[14px] border border-[#050505]/10 bg-white p-5 shadow-[0_18px_45px_rgba(5,5,5,0.05)] transition hover:-translate-y-0.5 hover:border-[#88DE7B]"
            >
              <h2 className="text-xl font-black tracking-[-0.02em]">{service.title}</h2>
              <p className="mt-3 text-sm leading-6 text-[#4b4b4b]">{service.description}</p>
            </Link>
          ))}
        </div>
      </Section>

      <Section
        tone="white"
        eyebrow="Measured proof"
        title="Proof that lead quality can be measured."
        intro="DFY connects ad performance with CRM and sales feedback so businesses can see which leads are actually worth following up."
      >
        <div className="grid gap-5 lg:grid-cols-2">
          <SnapshotCard
            title="Meta Ads Snapshot"
            label="Meta Ads + CRM Review"
            placeholder="Meta Ads screenshot placeholder"
            imageSrc="/proof/meta-ads-account-snapshot.png"
            imageAlt="Tranzission Meta Ads dashboard snapshot showing lead and qualification data"
            metrics={["47% qualified leads", "159 qualified leads", "333 total leads"]}
          />
          <SnapshotCard
            title="Google Ads Snapshot"
            label="Google Ads + Search Intent Review"
            placeholder="Google Ads screenshot placeholder"
            metrics={["Lower CPL", "Higher-intent enquiries", "Better campaign visibility"]}
          />
        </div>
      </Section>

      <Section
        tone="light"
        eyebrow="DFY system"
        title={`How DFY improves lead quality in ${location.city}`}
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {systemPoints.map((point) => (
            <article key={point} className="rounded-[14px] border border-[#dfe9dc] bg-white p-5 shadow-[0_18px_45px_rgba(5,5,5,0.05)]">
              <h2 className="text-lg font-black tracking-[-0.01em] text-[#164E50]">{point}</h2>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="white" eyebrow="Industries" title={`Industries we support in ${location.city}`}>
        <div className="flex flex-wrap gap-3">
          {cityIndustries.map((industry) => (
            <span key={industry} className="rounded-full border border-[#CDEECD] bg-[#EEF8EE] px-4 py-2 text-sm font-semibold text-[#164E50]">
              {industry}
            </span>
          ))}
        </div>
      </Section>

      <Section tone="light" eyebrow="Process" title={`Our process for service businesses in ${location.city}`}>
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

      <Section tone="white" eyebrow="FAQs" title={`FAQs about lead generation in ${location.city}`}>
        <div className="mx-auto max-w-4xl divide-y divide-[#dfe9dc] rounded-[16px] border border-[#dfe9dc] bg-white">
          {location.faqs.map((faq) => (
            <article key={faq.question} className="p-6">
              <h2 className="text-xl font-black tracking-[-0.02em] text-[#164E50]">{faq.question}</h2>
              <p className="mt-3 text-base leading-7 text-[#465163]">{faq.answer}</p>
              <FaqLinks question={faq.question} />
            </article>
          ))}
        </div>
      </Section>

      <CTASection
        title={`Want better-quality leads in ${location.city}?`}
        text="Get a free audit of your current ads, landing page, tracking, and follow-up system. We'll show you where the lead quality gaps are and what to fix first."
        buttonLabel="Get Free Audit"
        buttonHref="/free-audit"
      />
    </>
  );
}

function SnapshotCard({
  title,
  label,
  placeholder,
  imageSrc,
  imageAlt,
  metrics,
}: {
  title: string;
  label: string;
  placeholder: string;
  imageSrc?: string;
  imageAlt?: string;
  metrics: string[];
}) {
  return (
    <article className="rounded-[16px] border border-[#dfe9dc] bg-white p-5 shadow-[0_18px_45px_rgba(5,5,5,0.05)]">
      <div className="rounded-[12px] border border-dashed border-[#CDEECD] bg-[#fbfbf8] p-5">
        <p className="text-xs font-black uppercase tracking-[0.16em] text-[#164E50]">{label}</p>
        <div className="mt-5 grid min-h-[132px] place-items-center overflow-hidden rounded-[10px] bg-white text-center">
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt={imageAlt ?? title}
              width={760}
              height={360}
              className="h-auto max-h-[180px] w-full object-contain"
            />
          ) : (
            <p className="text-sm font-semibold text-[#667085]">{placeholder}</p>
          )}
        </div>
      </div>
      <h2 className="mt-5 text-xl font-black tracking-[-0.02em]">{title}</h2>
      <div className="mt-4 grid gap-2 sm:grid-cols-3">
        {metrics.map((metric) => (
          <p key={metric} className="rounded-[10px] bg-[#EEF8EE] px-3 py-2 text-center text-sm font-semibold text-[#164E50]">
            {metric}
          </p>
        ))}
      </div>
    </article>
  );
}

function FaqLinks({ question }: { question: string }) {
  const lowerQuestion = question.toLowerCase();
  const links = lowerQuestion.includes("google")
    ? [{ label: "Google Ads", href: "/services/google-ads" }]
    : lowerQuestion.includes("meta") || lowerQuestion.includes("facebook")
      ? [{ label: "Meta Ads", href: "/services/meta-ads" }]
      : lowerQuestion.includes("crm") || lowerQuestion.includes("tracking") || lowerQuestion.includes("nurture")
        ? [{ label: "CRM, Tracking & Nurture", href: "/services/crm-tracking-nurture" }]
        : [
            { label: "B2B Lead Generation", href: "/services/b2b-lead-generation" },
            { label: "Free Audit", href: "/free-audit" },
          ];

  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="text-sm font-semibold text-[#164E50] underline decoration-[#88DE7B] underline-offset-4"
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}
