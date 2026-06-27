import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/ButtonLink";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { Section } from "@/components/Section";
import { caseStudies, getCaseStudy } from "@/data/caseStudies";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { absoluteUrl, pageMetadata } from "@/lib/site";

type CaseStudyPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) {
    return {};
  }
  return pageMetadata({
    title: study.metaTitle,
    description: study.metaDescription,
    path: `/results/${study.slug}`,
    keywords: [
      `${study.brand} case study`,
      study.sector,
      "Done For You results",
      "Meta Ads case study India",
    ],
  });
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) {
    notFound();
  }

  const related = caseStudies.filter((item) => item.slug !== study.slug).slice(0, 3);
  const path = `/results/${study.slug}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: study.title,
    description: study.metaDescription,
    url: absoluteUrl(path),
    image: absoluteUrl(study.heroImage.src),
    author: { "@type": "Organization", name: "Done For You", url: "https://www.doneforyou.in" },
    publisher: { "@type": "Organization", name: "Done For You", url: "https://www.doneforyou.in" },
    datePublished: study.datePublished,
    dateModified: study.datePublished,
    about: study.brand,
  };

  const reviewSchema = study.quote
    ? {
        "@context": "https://schema.org",
        "@type": "Review",
        reviewBody: study.quote.text,
        author: { "@type": "Person", name: study.quote.name },
        itemReviewed: { "@type": "Organization", name: "Done For You", url: "https://www.doneforyou.in" },
      }
    : null;

  return (
    <>
      <JsonLd data={webPageSchema(path, study.title, study.metaDescription)} />
      <JsonLd data={articleSchema} />
      {reviewSchema ? <JsonLd data={reviewSchema} /> : null}
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Results", path: "/results" },
          { name: study.brand, path },
        ])}
      />

      <section className="bg-[#fbfbf8] py-16 text-[#050505] sm:py-20">
        <div className="container-wide grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <p className="eyebrow text-[#164E50]">{study.sector}</p>
              {study.badge ? (
                <span className="rounded-full bg-[#164E50] px-3 py-1 text-xs font-semibold text-white">
                  {study.badge}
                </span>
              ) : null}
            </div>
            <h1 className="mt-5 text-[clamp(2.3rem,5.5vw,4rem)] font-black leading-[1.02] tracking-[-0.04em]">
              {study.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#465163]">{study.summary}</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {study.metrics.map((metric) => (
                <div key={metric.label} className="rounded-[12px] border border-[#CDEECD] bg-white p-4">
                  <p className="text-2xl font-black tracking-[-0.03em] text-[#164E50]">{metric.value}</p>
                  <p className="mt-1 text-sm leading-5 text-[#465163]">{metric.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/free-audit" variant="primary">Get Free Audit</ButtonLink>
              <ButtonLink href="/results" variant="secondary">Back to Results</ButtonLink>
            </div>
          </div>
          <div className="overflow-hidden rounded-[18px] border border-[#0d3a3c] bg-[#0e3d3f] p-3 shadow-[0_22px_70px_rgba(22,78,80,0.18)]">
            <Image
              src={study.heroImage.src}
              alt={study.heroImage.alt}
              width={1200}
              height={750}
              className="h-auto w-full rounded-[12px]"
              priority
            />
          </div>
        </div>
      </section>

      <Section tone="white" eyebrow="The challenge" title={`What ${study.brand} was up against`}>
        <div className="max-w-3xl text-lg leading-8 text-[#465163]">
          <p>{study.challenge}</p>
        </div>
      </Section>

      <Section tone="light" eyebrow="What DFY did" title="The approach">
        <div className="grid gap-4 md:grid-cols-2">
          {study.approach.map((step, index) => (
            <article key={step} className="rounded-[14px] border border-[#dfe9dc] bg-white p-5 shadow-[0_18px_45px_rgba(5,5,5,0.05)]">
              <p className="text-sm font-black text-[#164E50]">{String(index + 1).padStart(2, "0")}</p>
              <p className="mt-3 text-base leading-7 text-[#465163]">{step}</p>
            </article>
          ))}
        </div>
      </Section>

      <section className="bg-[#0e3d3f] py-16 text-white sm:py-20">
        <div className="container-wide">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#88DE7B]">The results</p>
          <h2 className="mt-5 max-w-3xl text-[clamp(2rem,5vw,3.2rem)] font-black leading-[1.05] tracking-[-0.04em]">
            {study.result}
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {study.metrics.map((metric) => (
              <div key={metric.label} className="rounded-[14px] border border-white/12 bg-white/[0.04] p-6">
                <p className="text-[clamp(2rem,5vw,3rem)] font-black leading-none tracking-[-0.04em] text-[#88DE7B]">{metric.value}</p>
                <p className="mt-3 text-base leading-6 text-white/75">{metric.label}</p>
              </div>
            ))}
          </div>

          {study.proofImages.length > 0 || study.quote ? (
            <div className="mt-10 grid gap-6 lg:grid-cols-[1.4fr_1fr] lg:items-center">
              {study.proofImages.length > 0 ? (
                <div className="overflow-hidden rounded-[16px] border border-white/10 bg-white/[0.03] p-3">
                  <Image
                    src={study.proofImages[0].src}
                    alt={study.proofImages[0].alt}
                    width={1200}
                    height={700}
                    className="h-auto w-full rounded-[10px]"
                  />
                </div>
              ) : null}
              {study.quote ? (
                <blockquote className="rounded-[16px] border border-white/12 bg-white/[0.04] p-7">
                  <p className="text-xl font-medium leading-8 text-white">&ldquo;{study.quote.text}&rdquo;</p>
                  <footer className="mt-5 text-sm font-medium text-[#88DE7B]">
                    {study.quote.name}
                    <span className="text-white/60"> &middot; {study.quote.role}</span>
                  </footer>
                </blockquote>
              ) : null}
            </div>
          ) : null}
        </div>
      </section>

      <Section tone="white" eyebrow="More results" title="Other DFY case studies">
        <div className="grid gap-5 md:grid-cols-3">
          {related.map((item) => (
            <Link
              key={item.slug}
              href={`/results/${item.slug}`}
              className="group flex flex-col rounded-sm border border-[#050505]/12 bg-white p-6 shadow-[0_18px_45px_rgba(5,5,5,0.06)] transition hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(5,5,5,0.09)]"
            >
              <p className="text-xs font-black uppercase tracking-[0.16em] text-[#164E50]">{item.sector}</p>
              <h3 className="mt-4 text-2xl font-black leading-tight tracking-[-0.02em]">{item.brand}</h3>
              <p className="mt-3 text-sm font-semibold text-[#164E50]">{item.cardMetric}</p>
              <p className="mt-3 text-sm leading-6 text-[#4b4b4b]">{item.summary}</p>
              <span className="mt-auto inline-flex pt-6 text-sm font-black text-[#164E50] transition group-hover:text-[#050505]">
                Read case study
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <CTASection
        title={`Want results like ${study.brand}?`}
        text="Get a free audit and we will review your ads, landing page, tracking, and CRM feedback loop, and show you where qualified pipeline is leaking."
        buttonLabel="Get Free Audit"
        buttonHref="/free-audit"
      />
    </>
  );
}
