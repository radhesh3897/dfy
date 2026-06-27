"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type PointerEvent, type WheelEvent } from "react";
import { ButtonLink } from "@/components/ButtonLink";
import { FAQ } from "@/components/FAQ";
import type { Faq } from "@/lib/schema";

type GoogleAdsServicePageProps = {
  faqs: Faq[];
};

const problemCards = [
  {
    title: "Broad match is burning the budget",
    text: "Budgets disappear on broad terms, competitor noise, and searches that were never close to buying.",
    icon: "money",
  },
  {
    title: "Conversion tracking stops at the form fill",
    text: "The account reports leads, but the business still cannot see which searches became useful conversations.",
    icon: "track",
    quote: "We know which keyword got the lead. We do not know if that lead was worth calling.",
  },
  {
    title: "Your campaigns launched. Then nothing.",
    text: "No structured testing, no search term review rhythm, and no clear roadmap after the first build.",
    icon: "launch",
  },
  {
    title: "Your campaign structure is working against you",
    text: "Budget, intent, brand demand, and service categories are mixed together, so the account cannot learn cleanly.",
    icon: "structure",
    quote: "The account spends every day, but no one can explain what is being learned.",
  },
  {
    title: "You do not know where to start with Google Ads",
    text: "Search, Performance Max, brand, competitor, YouTube, and remarketing all sound useful, but not all belong in phase one.",
    icon: "search",
  },
  {
    title: "We have seen this pattern before",
    text: "DFY rebuilds the system around search intent, landing page match, tracking, and sales feedback before scaling spend.",
    icon: "check",
    support: true,
  },
];

const methodPhases = [
  {
    title: "Audit & Foundation",
    summary:
      "We inspect the account, funnel, tracking, and search demand before making campaign decisions.",
    includes: [
      "Account and conversion audit",
      "Search term and match type review",
      "Bid strategy and budget checks",
      "Competitor and intent review",
    ],
    finding: "Where spend is leaking",
    action: "Clean tracking and intent map",
    note: "Foundation before scale",
    icon: "search",
  },
  {
    title: "Strategy & Architecture",
    summary:
      "We structure the account around intent, service categories, budget control, and buyer readiness.",
    includes: [
      "Branded vs non-branded separation",
      "Campaign grouping logic",
      "Budget allocation model",
      "Keyword and negative keyword plan",
    ],
    finding: "Which demand to capture first",
    action: "Account architecture",
    note: "Cleaner learning loops",
    icon: "structure",
  },
  {
    title: "Creative & Landing Pages",
    summary:
      "Search ads need message match. We align ad copy, offers, landing pages, forms, and trust signals.",
    includes: [
      "Ad copy framework",
      "Landing page message match",
      "Offer and CTA clarity",
      "Asset and creative planning",
    ],
    finding: "Where intent drops off",
    action: "Page and ad alignment",
    note: "Clicks need context",
    icon: "page",
  },
  {
    title: "Launch & Structured Testing",
    summary:
      "Campaigns launch with a clear testing roadmap, early signal checks, and controlled changes.",
    includes: [
      "Launch QA",
      "Experiment tracking",
      "Early query monitoring",
      "Bid and budget guardrails",
    ],
    finding: "Early signal quality",
    action: "Testing roadmap",
    note: "Controlled learning",
    icon: "launch",
  },
  {
    title: "Optimization & Revenue Reporting",
    summary:
      "We connect campaign data to lead quality, pipeline contribution, and sales feedback.",
    includes: [
      "Qualified lead reporting",
      "CRM and offline signal review",
      "Scaling based on quality",
      "Weekly optimization loop",
    ],
    finding: "What is worth scaling",
    action: "Revenue reporting loop",
    note: "Optimize for outcomes",
    icon: "chart",
  },
];

const campaignTypes = [
  {
    title: "Google Search Ads",
    text: "Capture active buyers searching for your service with keyword and intent-led campaigns.",
    bestFor: "High intent",
    useCase: "Bottom-of-funnel demand",
    icon: "search",
  },
  {
    title: "Performance Max",
    text: "Use Google inventory carefully when tracking and creative inputs are ready.",
    bestFor: "Scaled coverage",
    useCase: "Qualified conversion volume",
    icon: "chart",
  },
  {
    title: "Google Display Network",
    text: "Stay visible with audiences that need more education before they convert.",
    bestFor: "Awareness support",
    useCase: "Warm audience building",
    icon: "display",
  },
  {
    title: "YouTube Ads",
    text: "Explain offers and objections with video before buyers compare options.",
    bestFor: "Education",
    useCase: "Trust and demand creation",
    icon: "play",
  },
  {
    title: "Remarketing",
    text: "Bring back visitors with relevant proof, service reminders, and stronger next steps.",
    bestFor: "Warm demand",
    useCase: "Intent recovery",
    icon: "refresh",
  },
  {
    title: "Brand Search",
    text: "Protect your brand demand and route high-intent branded searches to the right page.",
    bestFor: "Brand protection",
    useCase: "Direct demand capture",
    icon: "shield",
  },
  {
    title: "Competitor Search",
    text: "Test competitor-adjacent demand carefully with clear positioning and budget controls.",
    bestFor: "Comparison intent",
    useCase: "Market capture",
    icon: "target",
  },
  {
    title: "Demand Gen",
    text: "Support future search demand with visual placements when the funnel is ready.",
    bestFor: "Demand creation",
    useCase: "Top-of-funnel learning",
    icon: "spark",
  },
];

const results = [
  {
    brand: "Project A",
    headline: "Google Ads project placeholder for qualified search demand.",
    text: "Verified project story will be added after audit or project review. No fake metrics or client names are being used.",
    metrics: [
      ["TBD", "qualified lead improvement"],
      ["TBD", "cost per customer clarity"],
      ["TBD", "pipeline visibility"],
    ],
    icon: "A",
  },
  {
    brand: "Project B",
    headline: "Landing page and search intent alignment placeholder.",
    text: "This slot will hold an approved breakdown of how search intent, page copy, and lead qualification improved together.",
    metrics: [
      ["TBD", "message match"],
      ["TBD", "conversion quality"],
      ["TBD", "sales feedback signal"],
    ],
    icon: "B",
  },
  {
    brand: "Project C",
    headline: "Tracking and revenue reporting placeholder.",
    text: "This slot is reserved for a verified story connecting Google Ads spend to CRM stages and real sales outcomes.",
    metrics: [
      ["TBD", "CRM visibility"],
      ["TBD", "offline signal quality"],
      ["TBD", "scaling confidence"],
    ],
    icon: "C",
  },
];

const whyCards = [
  {
    title: "Built for service businesses and B2B buying behavior",
    text: "Campaigns are structured around how your customers search, compare, enquire, and convert.",
    icon: "target",
  },
  {
    title: "Leads that turn into revenue",
    text: "We optimize toward qualified leads, booked conversations, and clearer acquisition economics.",
    icon: "chart",
  },
  {
    title: "Transparent and performance-first",
    text: "Clear reporting, open communication, and decisions backed by search and sales data.",
    icon: "track",
  },
];

const industries = [
  "Home Services",
  "Legal Services",
  "Medical & Dental",
  "Real Estate",
  "Coaching",
  "Financial Services",
];

const benefits = [
  {
    title: "Proven process",
    text: "A repeatable system for audit, architecture, launch, testing, and optimization.",
    icon: "badge",
  },
  {
    title: "Dedicated experts",
    text: "Specialists who understand Google Ads, search intent, landing pages, and reporting.",
    icon: "shield",
  },
  {
    title: "Scalable results",
    text: "Campaign decisions are made from quality signals before spend is scaled.",
    icon: "rocket",
  },
];

const testimonials = [
  {
    brand: "Placeholder A",
    quote:
      "Approved Google Ads testimonial placeholder. Real customer quote will be added after review.",
    name: "Placeholder Name",
    role: "Business Owner",
  },
  {
    brand: "Placeholder B",
    quote:
      "This space is reserved for a verified quote about lead quality, reporting, and sales-ready enquiries.",
    name: "Placeholder Name",
    role: "Growth Lead",
  },
  {
    brand: "Placeholder C",
    quote:
      "No fake testimonials are being used. Approved customer proof can replace this module later.",
    name: "Placeholder Name",
    role: "Founder",
  },
];

const fitItems = {
  strong: [
    "You already spend on Google Ads or plan to start soon",
    "You need better quality leads, not just more form fills",
    "You want clearer measurement from click to pipeline",
    "You need a structured testing and optimization system",
  ],
  weak: [
    "You want instant miracles without funnel improvements",
    "You have no capacity to follow up leads quickly",
    "You only care about the cheapest clicks",
    "You are not ready to improve the full sales path",
  ],
};

export function GoogleAdsServicePage({ faqs }: GoogleAdsServicePageProps) {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <MethodSection />
      <CampaignMixSection />
      <ResultsSection />
      <WhyChooseSection />
      <TestimonialsSection />
      <FitSection />
      <FaqSection faqs={faqs} />
      <FinalCtaSection />
    </>
  );
}

function HeroSection() {
  return (
    <section className="bg-white py-12 text-[#050505] sm:py-14 lg:py-16">
      <div className="container-wide">
        <div className="grid gap-10 lg:grid-cols-[0.94fr_1.06fr] lg:items-center">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-[#CDEECD] bg-white px-4 py-2 text-sm font-medium uppercase tracking-[0.12em] text-[#164E50]">
              <span className="size-2 rounded-full bg-[#88DE7B]" />
              Google Ads
            </p>
            <h1 className="mt-7 max-w-[760px] text-[clamp(2.75rem,8vw,5.25rem)] font-medium leading-[0.98] tracking-[-0.06em] text-[#164E50]">
              The Google Ads agency that turns search into pipeline.
            </h1>
            <p className="mt-7 max-w-[690px] text-lg leading-8 tracking-[-0.01em] text-[#465163] sm:text-xl sm:leading-9">
              We build, manage, and optimize Google Ads campaigns for service businesses and B2B teams, engineered to generate qualified leads and measurable growth.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/#free-audit-form" className="min-h-[58px] rounded-md px-7 text-base sm:text-lg">
                Book a strategy call
                <span className="ml-3" aria-hidden="true">-&gt;</span>
              </ButtonLink>
              <ButtonLink href="#google-ads-method" variant="secondary" className="min-h-[58px] rounded-md border-[#164E50] px-7 text-base text-[#164E50] sm:text-lg">
                See how it works
                <span className="ml-3" aria-hidden="true">-&gt;</span>
              </ButtonLink>
            </div>
          </div>
          <GoogleAdsHeroVisual />
        </div>
        <div className="mt-10 grid gap-4 border-y border-[#e4e8e5] py-6 sm:grid-cols-2 lg:grid-cols-4">
          {["Google Partner placeholder", "Google Ads certification placeholder", "Tracking and CRM review", "Lead quality reporting"].map((item) => (
            <div key={item} className="flex items-center gap-3 text-[#7a838f]">
              <IconBadge icon="check" small />
              <span className="text-sm font-medium uppercase tracking-[0.08em]">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function GoogleAdsHeroVisual() {
  return (
    <div className="rounded-[18px] border border-[#dfe6df] bg-white p-4 shadow-[0_22px_70px_rgba(22,78,80,0.08)] sm:p-6">
      <div className="grid gap-4 md:grid-cols-[1fr_220px]">
        <div className="rounded-[16px] border border-[#e4e8e5] bg-[#fbfbf8] p-5">
          <div className="flex items-center gap-3 rounded-full border border-[#dfe6df] bg-white px-4 py-3">
            <span className="grid size-9 place-items-center rounded-full bg-[#EEF8EE] text-lg font-medium text-[#164E50]">G</span>
            <span className="text-base text-[#111827]">plumber near me</span>
            <span className="ml-auto text-[#667085]">
              <MiniIcon icon="mic" />
            </span>
          </div>
          <div className="mt-5 rounded-[14px] border border-[#dfe6df] bg-white p-5">
            <p className="text-sm font-medium text-[#111827]">Sponsored</p>
            <h2 className="mt-4 text-2xl font-medium leading-tight tracking-[-0.04em] text-[#164E50]">
              24/7 licensed service near you
            </h2>
            <p className="mt-3 text-base leading-7 text-[#465163]">
              Fast response. Clear pricing. Built for high-intent enquiries.
            </p>
          </div>
          <div className="mt-5 space-y-3">
            {[72, 46, 84].map((width, index) => (
              <div key={width} className="flex items-center gap-4">
                <span className="size-9 rounded-md bg-[#EEF8EE]" />
                <span className="h-3 rounded-full bg-[#dfe6df]" style={{ width: `${width}%` }} />
                {index === 1 ? <span className="h-3 w-24 rounded-full bg-[#CDEECD]" /> : null}
              </div>
            ))}
          </div>
        </div>
        <div className="grid gap-3">
          {[
            ["Clicks", "TBD", "Search demand"],
            ["Conversions", "TBD", "Lead actions"],
            ["Cost / conv.", "TBD", "Efficiency"],
            ["Qualified leads", "TBD", "CRM signal"],
          ].map(([label, value, sub], index) => (
            <article key={label} className={index === 3 ? "rounded-[14px] bg-[#164E50] p-4 text-white" : "rounded-[14px] border border-[#e4e8e5] bg-white p-4"}>
              <p className={index === 3 ? "text-sm text-white/70" : "text-sm text-[#667085]"}>{label}</p>
              <p className="mt-2 text-3xl font-medium tracking-[-0.05em]">{value}</p>
              <p className={index === 3 ? "mt-1 text-sm text-[#CDEECD]" : "mt-1 text-sm text-[#164E50]"}>{sub}</p>
              <MiniSparkline light={index === 3} />
            </article>
          ))}
        </div>
      </div>
      <div className="mt-4 flex flex-wrap items-center gap-3 rounded-[12px] border border-[#CDEECD] bg-[#EEF8EE] p-4 text-sm font-medium text-[#164E50]">
        <span className="grid size-8 place-items-center rounded-full bg-white">G</span>
        Google Ads system placeholder
        <span className="rounded-full bg-white px-3 py-1 text-xs">Optimized for quality</span>
      </div>
    </div>
  );
}

function ProblemSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % problemCards.length);
    }, 3400);

    return () => window.clearInterval(id);
  }, [paused]);

  return (
    <section className="bg-[#08111F] py-16 text-white sm:py-20 lg:py-24">
      <div className="container-wide">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_0.38fr] lg:items-start">
          <header>
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-[#88DE7B]">The problem</p>
            <h2 className="mt-6 max-w-[880px] text-[clamp(2.5rem,7vw,5.1rem)] font-medium leading-[1.02] tracking-[-0.055em]">
              Most B2B Google Ads do not fail because of budget. <span className="text-[#88DE7B]">They fail because of how the account is built.</span>
            </h2>
            <p className="mt-6 max-w-[760px] text-lg leading-8 text-white/72 sm:text-xl">
              It is not about spending more. It is about having the right system in place to attract high-intent buyers and turn clicks into revenue.
            </p>
          </header>
          <div className="hidden min-h-[260px] place-items-center rounded-full border border-[#CDEECD]/20 bg-[#164E50]/20 text-[#88DE7B] lg:grid">
            <MiniIcon icon="warning" className="size-20" />
          </div>
        </div>

        <div
          className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {problemCards.map((card, index) => {
            const active = activeIndex === index;
            return (
              <button
                key={card.title}
                type="button"
                onClick={() => {
                  setActiveIndex(index);
                  setPaused(true);
                }}
                className={`group min-h-[260px] rounded-[14px] border p-7 text-left transition duration-300 ${
                  active
                    ? card.support
                      ? "border-[#88DE7B] bg-[#164E50] shadow-[0_24px_70px_rgba(0,0,0,0.3)]"
                      : "border-[#88DE7B]/70 bg-white text-[#08111F] shadow-[0_24px_70px_rgba(0,0,0,0.26)]"
                    : "border-white/14 bg-white/[0.03] text-white hover:border-[#88DE7B]/50"
                }`}
              >
                <div className="tab-panel-enter flex h-full flex-col">
                  <span className={`grid size-16 place-items-center rounded-full border ${active ? "border-[#88DE7B] bg-[#EEF8EE] text-[#164E50]" : "border-white/18 text-[#88DE7B]"}`}>
                    <MiniIcon icon={card.icon} />
                  </span>
                  <h3 className="mt-8 text-2xl font-medium tracking-[-0.04em]">{card.title}</h3>
                  {active && card.quote ? (
                    <blockquote className="mt-5 rounded-[12px] border border-[#CDEECD] bg-[#EEF8EE] p-5 text-lg leading-8 text-[#164E50]">
                      &quot;{card.quote}&quot;
                    </blockquote>
                  ) : (
                    <p className={`mt-4 text-lg leading-8 ${active ? card.support ? "text-white/78" : "text-[#465163]" : "text-white/65"}`}>
                      {card.text}
                    </p>
                  )}
                  <span className={`mt-auto self-end text-3xl font-light ${active ? "text-[#88DE7B]" : "text-[#88DE7B]"}`}>+</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function MethodSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = methodPhases[activeIndex];

  return (
    <section id="google-ads-method" className="bg-white py-16 text-[#050505] sm:py-20 lg:py-24">
      <div className="container-wide rounded-[18px] border border-[#dfe6df] bg-white p-5 shadow-[0_22px_70px_rgba(22,78,80,0.06)] sm:p-8">
        <header className="mx-auto max-w-[960px] text-center">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-[#164E50]">Our method</p>
          <h2 className="mt-6 text-[clamp(2.35rem,6.5vw,4.5rem)] font-medium leading-[1.02] tracking-[-0.055em]">
            The DFY Google Ads Method: how we run search for <span className="text-[#88DE7B]">service businesses.</span>
          </h2>
          <p className="mt-5 text-lg leading-8 text-[#465163] sm:text-xl">
            A five-phase system for turning search demand into qualified pipeline.
          </p>
        </header>

        <div className="mt-12 grid gap-6 xl:grid-cols-[340px_1fr_320px]">
          <div className="flex gap-3 overflow-x-auto pb-2 xl:block xl:space-y-3 xl:overflow-visible xl:pb-0">
            {methodPhases.map((phase, index) => (
              <button
                key={phase.title}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`relative min-h-[116px] w-[270px] min-w-[270px] shrink-0 overflow-hidden rounded-[14px] border p-4 text-left transition duration-200 xl:w-full xl:min-w-0 ${
                  activeIndex === index
                    ? "border-[#CDEECD] bg-white text-[#050505] shadow-[0_18px_50px_rgba(22,78,80,0.14)] ring-1 ring-[#88DE7B]"
                    : "border-[#dfe6df] bg-[#fbfbf8] text-[#050505] hover:border-[#CDEECD] hover:bg-white hover:shadow-[0_14px_36px_rgba(22,78,80,0.1)]"
                }`}
              >
                {activeIndex === index ? (
                  <span aria-hidden="true" className="absolute inset-y-4 left-0 w-1 rounded-r-full bg-[#88DE7B]" />
                ) : null}
                <span className={`grid size-10 place-items-center rounded-full text-sm font-medium ${activeIndex === index ? "bg-[#88DE7B] text-[#164E50]" : "bg-[#EEF8EE] text-[#164E50]"}`}>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="mt-4 text-lg font-medium tracking-[-0.03em]">{phase.title}</p>
              </button>
            ))}
          </div>

          <article key={active.title} className="tab-panel-enter rounded-[16px] border border-[#dfe6df] bg-[#fbfbf8] p-6 sm:p-8">
            <div className="flex items-start gap-5">
              <IconBadge icon={active.icon} />
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.16em] text-[#164E50]">Phase {activeIndex + 1}</p>
                <h3 className="mt-3 text-[clamp(2rem,5vw,3.2rem)] font-medium leading-[1.05] tracking-[-0.055em]">
                  {active.title}
                </h3>
                <p className="mt-5 max-w-[720px] text-lg leading-8 text-[#465163]">{active.summary}</p>
              </div>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {active.includes.map((item) => (
                <div key={item} className="flex gap-3 rounded-[12px] border border-[#dfe6df] bg-white p-4">
                  <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-[#EEF8EE] text-[#164E50]">
                    <MiniIcon icon="check" className="size-4" />
                  </span>
                  <p className="text-base leading-6 text-[#20242b]">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                ["Findings", active.finding],
                ["Actions", active.action],
                ["Note", active.note],
              ].map(([label, value]) => (
                <div key={label} className="rounded-[12px] border border-[#CDEECD] bg-white p-5">
                  <p className="text-sm font-medium uppercase tracking-[0.14em] text-[#164E50]">{label}</p>
                  <p className="mt-3 text-xl font-medium tracking-[-0.035em]">{value}</p>
                </div>
              ))}
            </div>
          </article>

          <aside className="rounded-[16px] border border-[#CDEECD] bg-[#164E50] p-6 text-white shadow-[0_22px_60px_rgba(22,78,80,0.16)]">
            <IconBadge icon="chart" />
            <h3 className="mt-6 text-2xl font-medium tracking-[-0.04em]">Proof belongs in the pipeline.</h3>
            <p className="mt-4 text-base leading-7 text-white/72">
              The reporting layer is designed to show which searches, pages, and follow-up paths create qualified opportunities.
            </p>
            <div className="mt-7 space-y-4">
              {["Qualified leads", "Pipeline signal", "Sales feedback"].map((item) => (
                <div key={item} className="rounded-[12px] border border-white/12 bg-white/8 p-4">
                  <p className="text-sm text-white/60">{item}</p>
                  <p className="mt-1 text-2xl font-medium text-[#88DE7B]">TBD</p>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function CampaignMixSection() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const isDraggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragStartScrollRef = useRef(0);

  function handleWheel(event: WheelEvent<HTMLDivElement>) {
    const element = scrollRef.current;
    if (!element || Math.abs(event.deltaX) > Math.abs(event.deltaY)) return;

    event.preventDefault();
    element.scrollLeft += event.deltaY;
  }

  function handlePointerDown(event: PointerEvent<HTMLDivElement>) {
    const element = scrollRef.current;
    if (!element) return;

    isDraggingRef.current = true;
    dragStartXRef.current = event.clientX;
    dragStartScrollRef.current = element.scrollLeft;
    element.setPointerCapture(event.pointerId);
  }

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    const element = scrollRef.current;
    if (!element || !isDraggingRef.current) return;

    event.preventDefault();
    element.scrollLeft = dragStartScrollRef.current - (event.clientX - dragStartXRef.current);
  }

  function stopDragging(event: PointerEvent<HTMLDivElement>) {
    const element = scrollRef.current;
    isDraggingRef.current = false;

    if (element?.hasPointerCapture(event.pointerId)) {
      element.releasePointerCapture(event.pointerId);
    }
  }

  return (
    <section className="overflow-x-clip bg-[#164E50] py-16 text-white sm:py-20 lg:py-24">
      <div className="container-wide">
        <header className="mx-auto max-w-[1000px] text-center">
          <p className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium uppercase tracking-[0.12em] text-[#88DE7B]">
            <MiniIcon icon="check" />
            Full-service DFY
          </p>
          <h2 className="mt-7 text-[clamp(2.3rem,6.5vw,4.4rem)] font-medium leading-[1.02] tracking-[-0.055em]">
            Every Google Ads campaign type that matters, managed as one system.
          </h2>
          <p className="mx-auto mt-5 max-w-[820px] text-lg leading-8 text-white/78 sm:text-xl">
            Not every account should run every format from day one. We plan the campaign mix around search intent, tracking quality, budget, and funnel readiness.
          </p>
        </header>
        <div
          ref={scrollRef}
          className="dfy-horizontal-scroll mt-10 flex snap-x gap-5 overflow-x-auto overscroll-x-contain pb-6 scroll-smooth [scrollbar-gutter:stable]"
          onWheel={handleWheel}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={stopDragging}
          onPointerCancel={stopDragging}
          onPointerLeave={stopDragging}
        >
          {campaignTypes.map((campaign, index) => (
            <article key={campaign.title} className="w-[300px] shrink-0 snap-start rounded-[16px] border border-[#dfe6df] bg-white p-5 shadow-[0_18px_55px_rgba(22,78,80,0.06)] lg:w-[340px]">
              <CampaignMockup icon={campaign.icon} index={index} />
              <div className="mt-5 flex items-start gap-4">
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-[#164E50] text-sm font-medium text-white">
                  {index + 1}
                </span>
                <div>
                  <h3 className="text-2xl font-medium tracking-[-0.04em]">{campaign.title}</h3>
                  <p className="mt-3 text-base leading-7 text-[#465163]">{campaign.text}</p>
                  <p className="mt-5 inline-flex rounded-full bg-[#EEF8EE] px-4 py-2 text-sm font-medium text-[#164E50]">
                    Best for: {campaign.bestFor}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-[#667085]">{campaign.useCase}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ResultsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = results[activeIndex];

  return (
    <section className="bg-white py-16 text-[#050505] sm:py-20 lg:py-24">
      <div className="container-wide">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#164E50]">Results that matter</p>
            <h2 className="mt-6 text-[clamp(2.4rem,6.5vw,4.8rem)] font-medium leading-[1.02] tracking-[-0.055em]">
              The proof is in the pipeline.
            </h2>
          </div>
          <ButtonLink href="/results" variant="secondary" className="w-fit rounded-md border-[#164E50] px-7 text-base text-[#164E50]">
            Explore all results
          </ButtonLink>
        </div>
        <div className="mt-10 grid gap-5 lg:grid-cols-[1fr_270px]">
          <article key={active.brand} className="tab-panel-enter rounded-[18px] border border-[#dfe6df] bg-white p-6 shadow-[0_22px_70px_rgba(22,78,80,0.06)] lg:p-8">
            <div className="grid gap-8 lg:grid-cols-[0.75fr_1fr] lg:items-center">
              <div>
                <div className="flex items-center gap-4">
                  <span className="grid size-14 place-items-center rounded-full bg-[#164E50] text-2xl font-medium text-white">{active.icon}</span>
                  <p className="text-xl font-medium uppercase tracking-[0.05em]">{active.brand}</p>
                </div>
                <h3 className="mt-10 text-[clamp(2rem,5vw,3.35rem)] font-medium leading-[1.06] tracking-[-0.055em]">{active.headline}</h3>
                <p className="mt-6 text-lg leading-8 text-[#465163]">{active.text}</p>
                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  {active.metrics.map(([value, label]) => (
                    <div key={label} className="rounded-[12px] border border-[#CDEECD] bg-[#fbfdf9] p-4">
                      <p className="text-3xl font-medium tracking-[-0.05em] text-[#164E50]">{value}</p>
                      <p className="mt-2 text-sm leading-5 text-[#465163]">{label}</p>
                    </div>
                  ))}
                </div>
                <Link href="/results" className="mt-8 inline-flex items-center gap-3 text-lg font-medium text-[#164E50]">
                  View all results
                  <span aria-hidden="true">-&gt;</span>
                </Link>
              </div>
              <DashboardVisual />
            </div>
          </article>
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {results.map((result, index) => (
              <button
                key={result.brand}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`flex min-h-[150px] flex-col items-center justify-between rounded-[16px] border bg-white p-5 transition ${
                  activeIndex === index
                    ? "border-[#88DE7B] shadow-[0_18px_50px_rgba(22,78,80,0.12)]"
                    : "border-[#dfe6df] hover:border-[#CDEECD]"
                }`}
              >
                <span className="grid size-14 place-items-center rounded-full bg-[#164E50] text-2xl font-medium text-white">{result.icon}</span>
                <span className="text-base font-medium uppercase tracking-[0.08em]">{result.brand}</span>
                <span className={activeIndex === index ? "size-3 rounded-full bg-[#88DE7B]" : "size-3 rounded-full bg-[#b8bec7]"} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyChooseSection() {
  return (
    <section className="bg-[#fbfbf8] py-16 text-[#050505] sm:py-20 lg:py-24">
      <div className="container-wide">
        <div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr]">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#164E50]">Why businesses choose DFY</p>
            <span className="mt-4 inline-block h-1 w-16 rounded-full bg-[#88DE7B]" />
            <h2 className="mt-7 text-[clamp(2.35rem,6.5vw,4.4rem)] font-medium leading-[1.02] tracking-[-0.055em]">
              Why service businesses choose us for Google Ads.
            </h2>
            <p className="mt-6 max-w-[680px] text-lg leading-8 text-[#465163]">
              We run Google Ads that bring in the right leads, lower wasted spend, and improve your visibility from search to sales outcome.
            </p>
            <div className="mt-8 space-y-3">
              {whyCards.map((card) => (
                <article key={card.title} className="flex gap-5 rounded-[14px] border border-[#dfe6df] bg-white p-5">
                  <IconBadge icon={card.icon} />
                  <div>
                    <h3 className="text-xl font-medium tracking-[-0.035em]">{card.title}</h3>
                    <p className="mt-2 text-base leading-7 text-[#465163]">{card.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div className="space-y-5">
            <article className="rounded-[18px] border border-[#dfe6df] bg-white p-6 shadow-[0_18px_55px_rgba(22,78,80,0.06)]">
              <h3 className="text-2xl font-medium tracking-[-0.04em]">Industries we serve</h3>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {industries.map((industry) => (
                  <div key={industry} className="rounded-[12px] border border-[#dfe6df] bg-[#fbfbf8] p-4 text-center">
                    <IconBadge icon="building" small className="mx-auto" />
                    <p className="mt-3 text-sm font-medium">{industry}</p>
                  </div>
                ))}
              </div>
            </article>
            <TeamEngineCard />
          </div>
        </div>
        <div className="mt-10 grid gap-5 border-y border-[#dfe6df] py-8 md:grid-cols-3">
          {benefits.map((benefit) => (
            <article key={benefit.title} className="flex gap-5">
              <IconBadge icon={benefit.icon} />
              <div>
                <h3 className="text-2xl font-medium tracking-[-0.04em]">{benefit.title}</h3>
                <p className="mt-2 text-base leading-7 text-[#465163]">{benefit.text}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-9 flex justify-center">
          <ButtonLink href="/#free-audit-form" className="min-h-[58px] rounded-md px-10 text-lg">
            Book a strategy call
            <span className="ml-4" aria-hidden="true">-&gt;</span>
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = testimonials[activeIndex];

  return (
    <section className="bg-[#EEF8EE] py-16 text-[#050505] sm:py-20 lg:py-24">
      <div className="container-wide">
        <h2 className="mx-auto max-w-[820px] text-center text-[clamp(2.2rem,6vw,3.8rem)] font-medium leading-[1.05] tracking-[-0.045em]">
          What marketing leaders say about working with us.
        </h2>
        <div className="mx-auto mt-9 max-w-[900px] overflow-hidden rounded-[18px] border border-[#CDEECD] bg-white shadow-[0_22px_70px_rgba(22,78,80,0.08)]">
          <div key={active.brand} className="tab-panel-enter px-6 py-10 text-center sm:px-12">
            <blockquote className="mx-auto max-w-[760px] text-[clamp(1.35rem,4vw,2rem)] leading-[1.35] tracking-[-0.035em] text-[#164E50]">
              &quot;{active.quote}&quot;
            </blockquote>
            <div className="mt-8">
              <span className="mx-auto grid size-16 place-items-center rounded-full bg-[#EEF8EE] text-lg font-medium text-[#164E50]">
                {active.name.slice(0, 1)}
              </span>
              <p className="mt-4 text-lg font-medium">{active.name}</p>
              <p className="mt-1 text-base text-[#667085]">{active.role}</p>
            </div>
          </div>
          <div className="grid grid-cols-3 border-t border-[#CDEECD]" role="tablist" aria-label="Testimonial placeholders">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.brand}
                type="button"
                role="tab"
                aria-selected={activeIndex === index}
                onClick={() => setActiveIndex(index)}
                className={`px-3 py-5 text-sm font-medium transition sm:text-lg ${
                  activeIndex === index
                    ? "bg-white text-[#164E50] shadow-[inset_0_2px_0_#164E50]"
                    : "bg-[#fbfbf8] text-[#8a92a3] hover:text-[#164E50]"
                }`}
              >
                {testimonial.brand}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FitSection() {
  return (
    <section className="bg-white py-16 text-[#050505] sm:py-20 lg:py-24">
      <div className="container-wide">
        <header className="mx-auto max-w-[820px] text-center">
          <h2 className="text-[clamp(2.35rem,6vw,4rem)] font-medium leading-[1.05] tracking-[-0.055em]">
            If any of these hit you, let us talk.
          </h2>
          <p className="mt-5 text-lg leading-8 text-[#465163]">
            The best Google Ads work happens when the campaign, landing page, tracking, and sales team are pointed at the same outcome.
          </p>
        </header>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <FitCard title="We are a strong fit if..." items={fitItems.strong} positive />
          <FitCard title="Probably not a fit if..." items={fitItems.weak} />
        </div>
      </div>
    </section>
  );
}

function FaqSection({ faqs }: { faqs: Faq[] }) {
  return (
    <section className="bg-[#fbfbf8] py-16 text-[#050505] sm:py-20 lg:py-24">
      <div className="container-wide">
        <header className="max-w-[820px]">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#164E50]">FAQ</p>
          <h2 className="mt-6 text-[clamp(2.3rem,6vw,4rem)] font-medium leading-[1.05] tracking-[-0.055em]">
            Google Ads questions, answered plainly.
          </h2>
        </header>
        <div className="mt-10">
          <FAQ faqs={faqs} />
        </div>
      </div>
    </section>
  );
}

function FinalCtaSection() {
  return (
    <section className="bg-white py-14 text-[#050505] sm:py-20">
      <div className="container-wide flex flex-col items-start justify-between gap-8 rounded-[18px] border border-[#dfe6df] bg-[#fbfbf8] p-7 shadow-[0_22px_70px_rgba(15,23,42,0.06)] md:flex-row md:items-center md:p-9">
        <div className="max-w-[760px]">
          <h2 className="text-[clamp(2.1rem,6vw,3.7rem)] font-medium leading-[1.02] tracking-[-0.055em]">
            Ready to turn Google Ads into a predictable growth channel?
          </h2>
          <p className="mt-5 text-lg leading-8 text-[#465163]">
            Book a strategy call and we will look at where your search spend, landing pages, tracking, and lead quality can improve.
          </p>
        </div>
        <ButtonLink href="/#free-audit-form" className="min-h-[58px] shrink-0 rounded-md px-8 text-base sm:text-lg">
          Book a Call
        </ButtonLink>
      </div>
    </section>
  );
}

function CampaignMockup({ icon, index }: { icon: string; index: number }) {
  return (
    <div className="rounded-[12px] border border-[#dfe6df] bg-[#fbfbf8] p-4">
      <div className="flex items-center gap-2">
        <span className="text-lg font-medium text-[#164E50]">Google</span>
        <span className="ml-auto text-[#667085]">...</span>
      </div>
      <div className="mt-4 grid min-h-[190px] place-items-center rounded-[10px] bg-white">
        <div className={`grid size-20 place-items-center rounded-[18px] ${index % 2 === 0 ? "bg-[#EEF8EE] text-[#164E50]" : "bg-[#164E50] text-white"}`}>
          <MiniIcon icon={icon} className="size-10" />
        </div>
      </div>
      <div className="mt-4 space-y-2">
        <span className="block h-3 w-3/4 rounded-full bg-[#dfe6df]" />
        <span className="block h-3 w-1/2 rounded-full bg-[#CDEECD]" />
      </div>
    </div>
  );
}

function DashboardVisual() {
  return (
    <div className="relative min-h-[420px] overflow-hidden rounded-[16px] bg-[#EEF8EE] p-5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(136,222,123,0.36),transparent_26%)]" />
      <div className="relative mx-auto mt-12 max-w-[420px] rounded-[14px] border border-[#CDEECD] bg-white p-5 shadow-[0_20px_60px_rgba(22,78,80,0.12)]">
        <p className="text-sm font-medium text-[#465163]">Google Ads performance overview</p>
        <div className="mt-5 h-44 rounded-[12px] bg-[#164E50] p-5">
          <div className="flex h-full items-end gap-3">
            {[30, 46, 60, 82, 104, 122].map((height) => (
              <span key={height} className="w-full rounded-t-md bg-[#88DE7B]" style={{ height }} />
            ))}
          </div>
        </div>
      </div>
      <div className="relative mt-5 grid gap-3 sm:grid-cols-2">
        {["Conversions", "Cost / conv.", "Qualified leads", "Pipeline signal"].map((item) => (
          <div key={item} className="rounded-[12px] border border-[#CDEECD] bg-white/90 p-4">
            <p className="text-sm text-[#667085]">{item}</p>
            <p className="mt-2 text-2xl font-medium text-[#164E50]">TBD</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function TeamEngineCard() {
  const team = [
    ["Account strategist", "Builds strategy and roadmap", "Strategy"],
    ["Google Ads specialist", "Builds and optimizes campaigns", "Execution"],
    ["Conversion analyst", "Turns clicks into qualified leads", "Optimization"],
    ["Client success lead", "Reports insights and support", "Support"],
  ];

  return (
    <article className="rounded-[18px] border border-[#dfe6df] bg-white p-6 shadow-[0_18px_55px_rgba(22,78,80,0.06)]">
      <h3 className="text-2xl font-medium tracking-[-0.04em]">Our team, your growth engine</h3>
      <div className="mt-6 space-y-3">
        {team.map(([role, text, tag], index) => (
          <div key={role} className="flex flex-col gap-3 rounded-[12px] border border-[#e4e8e5] p-4 sm:flex-row sm:items-center">
            <span className="grid size-11 place-items-center rounded-full bg-[#EEF8EE] text-sm font-medium text-[#164E50]">{index + 1}</span>
            <div className="flex-1">
              <p className="font-medium">{role}</p>
              <p className="mt-1 text-sm text-[#667085]">{text}</p>
            </div>
            <span className="w-fit rounded-full bg-[#EEF8EE] px-4 py-2 text-sm font-medium text-[#164E50]">{tag}</span>
          </div>
        ))}
      </div>
    </article>
  );
}

function FitCard({ title, items, positive = false }: { title: string; items: string[]; positive?: boolean }) {
  return (
    <article className={`rounded-[18px] border p-6 shadow-[0_18px_55px_rgba(22,78,80,0.06)] ${positive ? "border-[#CDEECD] bg-[#EEF8EE]" : "border-[#dfe6df] bg-white"}`}>
      <h3 className="text-3xl font-medium tracking-[-0.045em]">{title}</h3>
      <ul className="mt-6 space-y-4">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-lg leading-7 text-[#465163]">
            <span className="mt-1 grid size-6 shrink-0 place-items-center rounded-full bg-white text-[#164E50]">
              <MiniIcon icon={positive ? "check" : "minus"} className="size-4" />
            </span>
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}

function IconBadge({ icon, small = false, className = "" }: { icon: string; small?: boolean; className?: string }) {
  return (
    <span className={`grid shrink-0 place-items-center rounded-[14px] bg-[#EEF8EE] text-[#164E50] ${small ? "size-11" : "size-16"} ${className}`}>
      <MiniIcon icon={icon} className={small ? "size-5" : "size-7"} />
    </span>
  );
}

function MiniSparkline({ light = false }: { light?: boolean }) {
  return (
    <svg viewBox="0 0 120 38" className="mt-3 h-9 w-full" aria-hidden="true">
      <path d="M2 30 L22 25 L38 27 L54 18 L72 22 L90 11 L116 17" fill="none" stroke={light ? "#88DE7B" : "#65B85A"} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MiniIcon({ icon, className = "size-5" }: { icon: string; className?: string }) {
  const common = {
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 24 24" fill="none">
      {icon === "search" ? (
        <><circle cx="10.5" cy="10.5" r="6.5" {...common} /><path d="m16 16 4 4" {...common} /></>
      ) : icon === "money" ? (
        <><circle cx="12" cy="12" r="8" {...common} /><path d="M12 7v10m-3-3c.8 1.2 2 1.5 3.5 1.4 1.3-.1 2.5-.7 2.5-2 0-1.2-1.1-1.7-3-2.1-1.7-.4-2.7-.9-2.7-2.2 0-1.2 1-2 2.6-2 1.2 0 2.2.4 2.9 1.2" {...common} /></>
      ) : icon === "track" ? (
        <><rect x="4" y="5" width="16" height="14" rx="2" {...common} /><path d="M8 14h3m2 0h3M8 10h8" {...common} /></>
      ) : icon === "launch" || icon === "rocket" ? (
        <><path d="M13 4c4 1 6 3 7 7l-5 5-7-7 5-5Z" {...common} /><path d="M8 16l-2 4 4-2M15 9h.01" {...common} /></>
      ) : icon === "structure" ? (
        <><path d="M12 5v4m0 6v4M5 12h14" {...common} /><rect x="8" y="9" width="8" height="6" rx="2" {...common} /></>
      ) : icon === "check" ? (
        <path d="M20 6 9 17l-5-5" {...common} />
      ) : icon === "warning" ? (
        <><path d="M12 4 22 20H2L12 4Z" {...common} /><path d="M12 9v5m0 3h.01" {...common} /></>
      ) : icon === "page" || icon === "display" ? (
        <><rect x="4" y="5" width="16" height="12" rx="2" {...common} /><path d="M8 21h8m-4-4v4" {...common} /></>
      ) : icon === "chart" ? (
        <><path d="M4 19h16M7 16v-5m5 5V7m5 9V9" {...common} /><path d="m14 7 3-3 3 3" {...common} /></>
      ) : icon === "play" ? (
        <><rect x="4" y="5" width="16" height="14" rx="2" {...common} /><path d="m10 9 5 3-5 3V9Z" {...common} /></>
      ) : icon === "refresh" ? (
        <><path d="M20 7v5h-5M4 17v-5h5" {...common} /><path d="M18 12a6 6 0 0 0-10-4L4 12m16 0-4 4a6 6 0 0 1-10-4" {...common} /></>
      ) : icon === "shield" ? (
        <path d="M12 3 20 7v6c0 5-3 8-8 10-5-2-8-5-8-10V7l8-4Z" {...common} />
      ) : icon === "target" ? (
        <><circle cx="12" cy="12" r="8" {...common} /><circle cx="12" cy="12" r="3" {...common} /></>
      ) : icon === "spark" ? (
        <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z" {...common} />
      ) : icon === "building" ? (
        <><path d="M5 21V5h10v16M15 9h4v12M3 21h18" {...common} /><path d="M8 9h2M8 13h2M8 17h2" {...common} /></>
      ) : icon === "badge" ? (
        <><circle cx="12" cy="10" r="5" {...common} /><path d="m8 15-1 6 5-3 5 3-1-6" {...common} /></>
      ) : icon === "minus" ? (
        <path d="M5 12h14" {...common} />
      ) : icon === "mic" ? (
        <><rect x="9" y="3" width="6" height="11" rx="3" {...common} /><path d="M5 11a7 7 0 0 0 14 0M12 18v3" {...common} /></>
      ) : (
        <circle cx="12" cy="12" r="8" {...common} />
      )}
    </svg>
  );
}
