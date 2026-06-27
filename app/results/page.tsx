import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { ProofStrip } from "@/components/ProofStrip";
import { Section } from "@/components/Section";
import { caseStudies } from "@/data/caseStudies";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { absoluteUrl, pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Results and Case Studies",
  description:
    "Real Done For You results: a Shark Tank India fitness brand at 3.8x ROAS, revenue doubled in a month, 14x ROAS on EdTech enrolment leads, and more, with verified ad-account proof.",
  path: "/results",
  keywords: [
    "done for you results",
    "meta ads case study india",
    "lead generation case studies india",
    "google ads roas case study",
    "performance marketing results",
  ],
});

const aggregateStats = [
  { value: "3–4×", label: "Average ROI within months" },
  { value: "30+", label: "Brands scaled" },
  { value: "90%", label: "Clients see consistent returns" },
  { value: "40%", label: "Lower cost per lead" },
];

const featured = caseStudies.find((study) => study.featured);
const rest = caseStudies.filter((study) => !study.featured);

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Done For You case studies",
  itemListElement: caseStudies.map((study, index) => ({
    "@type": "ListItem",
    position: index + 1,
    url: absoluteUrl(`/results/${study.slug}`),
    name: study.title,
  })),
};

export default function ResultsPage() {
  return (
    <>
      <JsonLd data={webPageSchema("/results", "Results and Case Studies", "Real Done For You client results and case studies with verified ad-account proof.")} />
      <JsonLd data={itemListSchema} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Results", path: "/results" },
        ])}
      />

      <section className="bg-[#fbfbf8] py-16 text-[#050505] sm:py-20">
        <div className="container-wide grid gap-10 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-center">
          <div>
            <p className="eyebrow text-[#164E50]">Results</p>
            <h1 className="mt-5 text-[clamp(2.6rem,6.5vw,5rem)] font-black leading-[0.98] tracking-[-0.05em]">
              Real results from real ad campaigns.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#465163] sm:text-xl">
              From a Shark Tank India fitness brand to EdTech and overseas recruitment, Done For You turns ad spend into
              qualified pipeline. Every number below comes from a real client account.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/free-audit" variant="primary">Book a Call</ButtonLink>
              <ButtonLink href="/b2b-lead-generation-agency" variant="secondary">Explore Services</ButtonLink>
            </div>
          </div>
          <aside className="rounded-[18px] border border-[#CDEECD] bg-white p-6 shadow-[0_22px_70px_rgba(22,78,80,0.08)]">
            <p className="text-sm font-black uppercase tracking-[0.16em] text-[#164E50]">By the numbers</p>
            <div className="mt-5 grid grid-cols-2 gap-4">
              {aggregateStats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-black tracking-[-0.04em] text-[#164E50]">{stat.value}</p>
                  <p className="mt-1 text-xs leading-5 text-[#465163]">{stat.label}</p>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      {featured ? (
        <section className="bg-[#0e3d3f] py-16 text-white sm:py-20">
          <div className="container-wide grid gap-10 lg:grid-cols-[1.05fr_1fr] lg:items-center">
            <div>
              <span className="inline-flex rounded-full bg-[#88DE7B] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.12em] text-[#164E50]">
                {featured.badge}
              </span>
              <h2 className="mt-6 text-[clamp(2.1rem,5vw,3.4rem)] font-black leading-[1.04] tracking-[-0.04em]">
                {featured.title}
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-8 text-white/75">{featured.summary}</p>
              <div className="mt-7 grid gap-4 sm:grid-cols-3">
                {featured.metrics.map((metric) => (
                  <div key={metric.label}>
                    <p className="text-3xl font-black tracking-[-0.04em] text-[#88DE7B]">{metric.value}</p>
                    <p className="mt-1 text-sm leading-5 text-white/70">{metric.label}</p>
                  </div>
                ))}
              </div>
              <ButtonLink href={`/results/${featured.slug}`} variant="light" className="mt-8 rounded-md">
                Read the Hobfit story
              </ButtonLink>
            </div>
            <div className="overflow-hidden rounded-[18px] border border-white/10 bg-white/[0.04] p-3">
              <Image
                src={featured.heroImage.src}
                alt={featured.heroImage.alt}
                width={1200}
                height={750}
                className="h-auto w-full rounded-[12px]"
                priority
              />
            </div>
          </div>
        </section>
      ) : null}

      <Section tone="white" eyebrow="Case studies" title="More results across industries">
        <div className="grid gap-5 md:grid-cols-3">
          {rest.map((study) => (
            <Link
              key={study.slug}
              href={`/results/${study.slug}`}
              className="group flex flex-col rounded-sm border border-[#050505]/12 bg-white p-6 shadow-[0_18px_45px_rgba(5,5,5,0.06)] transition hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(5,5,5,0.09)]"
            >
              <p className="text-xs font-black uppercase tracking-[0.16em] text-[#164E50]">{study.sector}</p>
              <h3 className="mt-4 text-2xl font-black leading-tight tracking-[-0.02em]">{study.brand}</h3>
              <p className="mt-3 text-sm font-semibold text-[#164E50]">{study.cardMetric}</p>
              <p className="mt-3 text-sm leading-6 text-[#4b4b4b]">{study.summary}</p>
              <span className="mt-auto inline-flex pt-6 text-sm font-black text-[#164E50] transition group-hover:text-[#050505]">
                Read case study
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <ProofStrip />

      <CTASection
        title="Want results like these for your business?"
        text="Start with a quick call. We will review your ads, landing page, tracking, CRM flow, and follow-up process, and show you where the gaps are."
        buttonLabel="Book a Call"
        buttonHref="/free-audit"
      />
    </>
  );
}
