import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { Section } from "@/components/Section";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/site";
import { locationPages, serviceLinks } from "@/data/locationPages";

export const metadata: Metadata = pageMetadata({
  title: "Lead Generation Company for Service Businesses in India",
  description:
    "Done For You helps service businesses across India generate better-quality leads through Google Ads, Meta Ads, landing pages, tracking, CRM setup, and creative strategy.",
  path: "/locations",
  keywords: [
    "lead generation agency India",
    "performance marketing agency India",
    "Google Ads agency India",
    "Meta Ads agency India",
    "B2B lead generation agency India",
    "landing page CRO agency India",
  ],
});

export default function LocationsPage() {
  return (
    <>
      <JsonLd
        data={webPageSchema(
          "/locations",
          "Lead generation services for businesses across India",
          "Location hub for Done For You lead generation services across India.",
        )}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Locations", path: "/locations" },
        ])}
      />

      <section className="bg-[#fbfbf8] py-16 text-[#050505] sm:py-24">
        <div className="container-wide">
          <div className="max-w-4xl">
            <p className="eyebrow text-[#164E50]">Locations</p>
            <h1 className="mt-5 text-[clamp(2.8rem,7vw,5.4rem)] font-black leading-[0.96] tracking-[-0.055em]">
              Lead generation services for businesses across India
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#465163] sm:text-xl sm:leading-9">
              Done For You helps service businesses across India generate better-quality leads through paid ads,
              landing pages, CRM tracking, nurture systems, creative strategy, and sales feedback loops.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/free-audit" variant="primary">Book a Call</ButtonLink>
              <ButtonLink href="/results" variant="secondary">See Results</ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <Section
        tone="white"
        eyebrow="City hubs"
        title="Choose the city market you care about."
        intro="Each location page explains the local service categories, lead-quality problems, and DFY system for that market."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {locationPages.map((location) => (
            <Link
              key={location.slug}
              href={`/locations/${location.slug}`}
              className="group rounded-[14px] border border-[#dfe9dc] bg-white p-5 shadow-[0_18px_45px_rgba(5,5,5,0.05)] transition hover:-translate-y-0.5 hover:border-[#88DE7B] hover:shadow-[0_22px_55px_rgba(22,78,80,0.1)]"
            >
              <h2 className="text-2xl font-black tracking-[-0.02em] text-[#164E50]">{location.city}</h2>
              <p className="mt-3 text-sm leading-6 text-[#5f6673]">{location.uniqueAngle}</p>
              <span className="mt-5 inline-flex text-sm font-semibold text-[#164E50]">
                View {location.city} -&gt;
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <Section
        tone="light"
        eyebrow="Services"
        title="Core growth services across locations."
        intro="Use the city pages for local context and the service pages for the deeper DFY delivery model."
      >
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
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
        eyebrow="Proof system"
        title="Lead quality should be measurable."
        intro="DFY connects ad performance with CRM and sales feedback so teams can see which leads are worth following up."
      >
        <div className="grid gap-5 md:grid-cols-2">
          <SnapshotCard
            title="Meta Ads Snapshot"
            label="Meta Ads + CRM Review"
            imageSrc="/proof/meta-ads-account-snapshot.png"
            imageAlt="Tranzission Meta Ads dashboard snapshot showing lead and qualification data"
            metrics={["47% qualified leads", "159 qualified leads", "333 total leads"]}
          />
          <SnapshotCard
            title="Google Ads Snapshot"
            label="Google Ads + Search Intent Review"
            metrics={["Lower CPL", "Higher-intent enquiries", "Better campaign visibility"]}
          />
        </div>
      </Section>

      <CTASection
        title="Want to see where your lead quality is leaking?"
        text="Book a call about your current ads, landing page, tracking, and follow-up system."
        buttonLabel="Book a Call"
        buttonHref="/free-audit"
      />
    </>
  );
}

function SnapshotCard({
  title,
  label,
  metrics,
  imageSrc,
  imageAlt,
}: {
  title: string;
  label: string;
  metrics: string[];
  imageSrc?: string;
  imageAlt?: string;
}) {
  return (
    <article className="rounded-[16px] border border-[#dfe9dc] bg-white p-5 shadow-[0_18px_45px_rgba(5,5,5,0.05)]">
      <div className="rounded-[12px] border border-dashed border-[#CDEECD] bg-[#fbfbf8] p-5">
        <p className="text-xs font-black uppercase tracking-[0.16em] text-[#164E50]">{label}</p>
        <div className="mt-5 grid min-h-[120px] place-items-center overflow-hidden rounded-[10px] bg-white text-center">
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt={imageAlt ?? title}
              width={760}
              height={360}
              className="h-auto max-h-[180px] w-full object-contain"
            />
          ) : (
            <p className="text-sm font-semibold text-[#667085]">{title} screenshot placeholder</p>
          )}
        </div>
      </div>
      <div className="mt-5 grid gap-2 sm:grid-cols-3">
        {metrics.map((metric) => (
          <p key={metric} className="rounded-[10px] bg-[#EEF8EE] px-3 py-2 text-center text-sm font-semibold text-[#164E50]">
            {metric}
          </p>
        ))}
      </div>
    </article>
  );
}
