"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";

const caseStudies = [
  {
    id: "nmims",
    brand: "NMIMS",
    logo: "N",
    logoSrc: "/logos/processed/narsee-monjee-institute-of-management-studies-logo-dfy-gray-web-256.png",
    eyebrow: "RESULTS",
    title: "Ad creative for NMIMS online MBA enquiries.",
    description:
      "The ads focused on career progression and admissions, giving prospective students a clear next step.",
    metric1Value: "Improved",
    metric1Label: "lead quality",
    metric2Value: "Reduced",
    metric2Label: "wasted spend",
    supportLine: "Client feedback also reported a clearer view of the campaign’s revenue impact.",
    ctaLabel: "Read full case study",
    href: "/results/nmims",
    tags: ["Online MBA", "Lead Quality", "Ad Creative"],
    image: "nmims",
  },
  {
    id: "crm-feedback",
    brand: "CRM review",
    logo: "C",
    eyebrow: "UP NEXT",
    title: "Connecting marketing performance to sales feedback and CRM stages.",
    description:
      "Placeholder breakdown for a future project showing how lead source, qualification, follow-up, and sales feedback can be reviewed in one system.",
    metric1Value: "TBD",
    metric1Label: "lead source clarity",
    metric2Value: "TBD",
    metric2Label: "sales feedback signal",
    supportLine: "Verified project story will be added after client approval.",
    ctaLabel: "View placeholder",
    tags: ["CRM", "Tracking", "Sales Feedback"],
    image: "crm-loop",
  },
  {
    id: "creative-testing",
    brand: "Creative test",
    logo: "A",
    eyebrow: "UP NEXT",
    title: "Sharper ad angles and landing page messaging for higher-intent enquiries.",
    description:
      "Placeholder breakdown for a future project focused on message testing, stronger buyer intent, better form quality, and conversion learning.",
    metric1Value: "TBD",
    metric1Label: "angle testing learnings",
    metric2Value: "TBD",
    metric2Label: "landing page insights",
    supportLine: "Verified project story will be added after client approval.",
    ctaLabel: "View placeholder",
    tags: ["Creative", "Landing Page", "Buyer Intent"],
    image: "creative-testing",
  },
];

export function ResultsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeCase = caseStudies[activeIndex];

  return (
    <section id="results" className="bg-[#fbfbf8] py-14 text-[#050505] sm:py-18 lg:py-20">
      <div className="container-wide">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-start">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-[#164E50]">
              Results
            </p>
            <h2 className="mt-5 max-w-[980px] text-[clamp(2.25rem,5.7vw,4.55rem)] font-medium leading-[0.98] tracking-[-0.06em]">
              Ad creative for NMIMS online MBA enquiries.
            </h2>
          </div>
          <ButtonLink
            href="#results"
            variant="secondary"
            className="w-fit rounded-md border-[#164E50] px-7 py-1 text-base text-[#164E50] lg:mt-12"
          >
            Explore all results
          </ButtonLink>
        </div>

        <div className="mt-9 grid gap-5 xl:grid-cols-[minmax(0,1fr)_320px] xl:items-stretch">
          <ActiveCaseStudyCard key={activeCase.id} caseStudy={activeCase} />

          <div className="grid gap-4 sm:grid-cols-3 xl:grid-cols-3" aria-label="Case study selectors">
            {caseStudies.map((item, index) => (
              <button
                key={item.id}
                type="button"
                aria-label={`Show ${item.brand} results`}
                aria-pressed={activeIndex === index}
                onClick={() => setActiveIndex(index)}
                className={`group flex min-h-[140px] flex-col justify-between rounded-[14px] border bg-white p-4 text-left transition duration-200 sm:min-h-[210px] xl:min-h-[365px] ${
                  activeIndex === index
                    ? "border-[#164E50] shadow-[0_18px_50px_rgba(22,78,80,0.12)]"
                    : "border-[#dfe4de] shadow-[0_14px_36px_rgba(15,23,42,0.04)] hover:border-[#CDEECD]"
                }`}
              >
                {item.logoSrc ? (
                  <span className="flex h-16 w-full items-start justify-center" aria-hidden="true">
                    <Image
                      src={item.logoSrc}
                      alt={`${item.brand} logo`}
                      width={96}
                      height={56}
                      className="h-14 w-auto max-w-[96px] object-contain opacity-85"
                    />
                  </span>
                ) : (
                  <span
                    className={`grid size-11 place-items-center rounded-[10px] text-lg font-medium ${
                      activeIndex === index
                        ? "bg-[#164E50] text-white"
                        : "bg-[#EEF8EE] text-[#164E50]"
                    }`}
                  >
                    {item.logo}
                  </span>
                )}
                <span className="mt-5 block text-sm font-medium leading-5 text-[#164E50] [writing-mode:vertical-rl] sm:text-base xl:mt-7">
                  {item.brand}
                </span>
                <span
                  className={`mt-auto text-4xl font-light leading-none transition ${
                    activeIndex === index ? "text-[#164E50]" : "text-[#a5abb3] group-hover:text-[#164E50]"
                  }`}
                  aria-hidden="true"
                >
                  +
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ActiveCaseStudyCard({ caseStudy }: { caseStudy: (typeof caseStudies)[number] }) {
  return (
    <article className="tab-panel-enter overflow-hidden rounded-[18px] border border-[#dfe4de] bg-white p-5 shadow-[0_22px_70px_rgba(15,23,42,0.06)] sm:p-7 lg:p-8">
      <div className="grid gap-7 lg:grid-cols-[0.92fr_1fr] lg:items-stretch">
        <div className="flex flex-col">
          <div className="flex items-center gap-4">
            <span className="grid size-12 place-items-center rounded-[10px] bg-[#EEF8EE] text-lg font-medium text-[#164E50]">
              {caseStudy.logoSrc ? (
                <Image
                  src={caseStudy.logoSrc}
                  alt={`${caseStudy.brand} logo`}
                  width={48}
                  height={48}
                  className="h-9 w-9 object-contain"
                />
              ) : (
                caseStudy.logo
              )}
            </span>
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#164E50]">{caseStudy.eyebrow}</p>
              <p className="mt-1 text-xl font-medium tracking-[-0.03em]">{caseStudy.brand}</p>
            </div>
          </div>

          <h3 className="mt-7 max-w-[540px] text-[clamp(1.85rem,4.6vw,2.9rem)] font-medium leading-[1.04] tracking-[-0.055em]">
            {caseStudy.title}
          </h3>
          <p className="mt-5 max-w-[560px] text-base leading-7 text-[#465163] sm:text-[1.05rem]">
            {caseStudy.description}
          </p>

          <div className="mt-7 grid max-w-[520px] gap-5 sm:grid-cols-2">
            <Metric value={caseStudy.metric1Value} label={caseStudy.metric1Label} />
            <Metric value={caseStudy.metric2Value} label={caseStudy.metric2Label} />
          </div>

          <p className="mt-5 max-w-[520px] text-sm leading-6 text-[#667085]">{caseStudy.supportLine}</p>

          <div className="mt-5 flex flex-wrap gap-2">
            {caseStudy.tags.map((tag) => (
              <span key={tag} className="rounded-full bg-[#EEF8EE] px-3 py-1.5 text-xs font-medium text-[#164E50]">
                {tag}
              </span>
            ))}
          </div>

          <Link
            href={caseStudy.href ?? "#results"}
            className="mt-7 inline-flex w-fit items-center gap-2 text-base font-medium text-[#164E50] transition hover:text-[#103D3F]"
          >
            {caseStudy.ctaLabel}
            <span aria-hidden="true">-&gt;</span>
          </Link>
        </div>

        <ResultsVisual variant={caseStudy.image} />
      </div>
    </article>
  );
}

function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="text-[clamp(2.35rem,7vw,3.6rem)] font-medium leading-none tracking-[-0.06em] text-[#164E50]">
        {value}
      </p>
      <p className="mt-2 text-base leading-6 text-[#465163]">{label}</p>
    </div>
  );
}

function ResultsVisual({ variant }: { variant: string }) {
  const cards =
    variant === "crm-loop"
      ? ["Lead source", "CRM stages", "Follow-up", "Sales feedback", "Pipeline view", "Audit notes"]
      : variant === "creative-testing"
        ? ["Hook test", "Offer angle", "Static ad", "Landing copy", "Form filter", "Buyer intent"]
        : ["Offer page", "Proof block", "Lead form", "Nurture card", "CAC view", "Quality notes"];

  if (variant === "nmims") {
    return (
      <Image
        src="/creative/in-house-creative-04.png"
        alt="NMIMS Online MBA ad creative"
        width={1080}
        height={1080}
        className="mx-auto h-auto w-full max-w-[480px] rounded-[14px]"
      />
    );
  }

  return (
    <div className="min-h-[320px] overflow-hidden rounded-[14px] bg-[#f5f7f3] p-4 sm:min-h-[365px] sm:p-5">
      <div className="grid h-full rotate-[-7deg] grid-cols-2 gap-3 sm:grid-cols-3">
        {cards.map((card, index) => (
          <div
            key={card}
            className={`flex min-h-[108px] flex-col justify-between rounded-[12px] border p-3 shadow-[0_14px_34px_rgba(15,23,42,0.08)] ${
              index % 3 === 1
                ? "bg-[#164E50] text-white"
                : "border-[#e0e6df] bg-white text-[#111827]"
            }`}
          >
            <p className="text-sm font-medium leading-5">{card}</p>
            <div>
              <span
                className={`inline-flex rounded-full px-2.5 py-1 text-[0.7rem] font-medium ${
                  index % 3 === 1 ? "bg-[#88DE7B] text-[#164E50]" : "bg-[#EEF8EE] text-[#164E50]"
                }`}
              >
                Placeholder
              </span>
              <div className="mt-3 h-10 rounded-md bg-[linear-gradient(135deg,rgba(136,222,123,0.36),rgba(22,78,80,0.12))]" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
