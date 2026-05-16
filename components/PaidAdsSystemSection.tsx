"use client";

import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";

const painCards = [
  {
    icon: "funnel",
    title: "Poor-fit leads",
    text: "You are getting leads, but not the right buyers. Volume is there. Quality is not.",
  },
  {
    icon: "blocked",
    title: "No conversions",
    text: "Leads come in, but they do not turn into calls, deals, or revenue.",
  },
  {
    icon: "wallet",
    title: "No budget",
    text: "Many leads show interest, but they are not financially qualified to buy.",
  },
  {
    icon: "ghosting",
    title: "They ghost you",
    text: "There is no urgency or burning need, so follow-ups fade and conversations die.",
  },
];
const solutionTabs = [
  {
    id: "strategy",
    label: "Strategy",
    eyebrow: "STRATEGY",
    title: "Map the leaks before scaling spend.",
    body:
      "We audit the funnel before pushing more budget. That means understanding the offer, buyer intent, lead quality gaps, landing page friction, CRM stages, and how sales currently follows up.",
    bullets: [
      "ICP and offer clarity",
      "Campaign and funnel audit",
      "Lead quality definition",
      "Tracking gap review",
    ],
    quoteCard: {
      label: "Why it matters",
      text: "Better lead quality starts before the first ad is launched.",
      source: "DFY system note",
    },
    visual: "strategy",
  },
  {
    id: "execution",
    label: "Execution",
    eyebrow: "EXECUTION",
    title: "Launch the system, not just the campaign.",
    body:
      "We build the full paid acquisition setup: campaigns, landing pages, tracking events, CRM stages, nurture paths, and the reporting structure needed to know what is actually working.",
    bullets: [
      "Meta and Google campaign setup",
      "Landing page and form flow",
      "CAPI / offline event setup",
      "CRM and lead-stage mapping",
    ],
    quoteCard: {
      label: "Execution principle",
      text: "Every campaign needs the system around it, or scaling only amplifies the leaks.",
      source: "DFY system note",
    },
    visual: "execution",
  },
  {
    id: "creative",
    label: "Creative",
    eyebrow: "CREATIVE",
    title: "Build ads around buyer intent, not vanity hooks.",
    body:
      "We create and test angles that call out the right buyer, pain, offer, and objection. The goal is not pretty ads - it is ads that attract people with budget, intent, and urgency.",
    bullets: [
      "Buyer-specific ad angles",
      "Creative testing system",
      "Objection-led messaging",
      "Landing page message match",
    ],
    quoteCard: {
      label: "Creative principle",
      text: "The best creative makes the right buyer feel directly called out.",
      source: "DFY system note",
    },
    visual: "creative",
  },
  {
    id: "reporting",
    label: "Reporting",
    eyebrow: "REPORTING",
    title: "See what drives qualified revenue.",
    body:
      "We connect campaign data with CRM and sales feedback so decisions are based on lead quality, cost per qualified lead, booked calls, and customer outcomes - not just reach, clicks, and CPL.",
    bullets: [
      "Qualified lead reporting",
      "Cost per qualified lead visibility",
      "Sales feedback loop",
      "Weekly optimization roadmap",
    ],
    quoteCard: {
      label: "Reporting principle",
      text: "If the ad system cannot see quality, it will keep optimizing for noise.",
      source: "DFY system note",
    },
    visual: "reporting",
  },
];

const desktopHeaderOffset = 104;
const mobileHeaderOffset = 86;

export function PaidAdsSystemSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const stickyWrapperRef = useRef<HTMLDivElement | null>(null);
  const mobileScrollWrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");

    const syncViewport = () => {
      setIsDesktop(mediaQuery.matches);
    };

    syncViewport();
    mediaQuery.addEventListener("change", syncViewport);

    return () => mediaQuery.removeEventListener("change", syncViewport);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    let frame = 0;

    const updateFromScroll = () => {
      const wrapper = stickyWrapperRef.current;
      if (!wrapper) return;

      const start = wrapper.offsetTop - desktopHeaderOffset;
      const scrollableDistance = wrapper.offsetHeight - window.innerHeight;
      const rawProgress = (window.scrollY - start) / scrollableDistance;
      const progress = Math.min(1, Math.max(0, rawProgress));
      const nextIndex = Math.min(solutionTabs.length - 1, Math.floor(progress * solutionTabs.length));

      setActiveIndex(nextIndex);
    };

    const onScroll = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(updateFromScroll);
    };

    updateFromScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [isDesktop]);

  useEffect(() => {
    if (isDesktop) return;

    let frame = 0;

    const updateFromScroll = () => {
      const wrapper = mobileScrollWrapperRef.current;
      if (!wrapper) return;

      const start = wrapper.offsetTop - mobileHeaderOffset;
      const scrollableDistance = Math.max(1, wrapper.offsetHeight - window.innerHeight);
      const rawProgress = (window.scrollY - start) / scrollableDistance;
      const progress = Math.min(1, Math.max(0, rawProgress));
      const nextIndex = Math.min(
        solutionTabs.length - 1,
        Math.floor(progress * solutionTabs.length),
      );

      setActiveIndex(nextIndex);
    };

    const onScroll = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(updateFromScroll);
    };

    updateFromScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [isDesktop]);

  function selectTab(index: number) {
    setActiveIndex(index);

    if (!isDesktop) {
      const wrapper = mobileScrollWrapperRef.current;
      if (!wrapper) return;

      const start = wrapper.offsetTop - mobileHeaderOffset;
      const scrollableDistance = Math.max(1, wrapper.offsetHeight - window.innerHeight);
      const targetProgress = (index + 0.05) / solutionTabs.length;

      window.scrollTo({
        top: start + scrollableDistance * targetProgress,
        behavior: "smooth",
      });

      return;
    }

    const wrapper = stickyWrapperRef.current;
    if (!wrapper) return;

    const start = wrapper.offsetTop - desktopHeaderOffset;
    const scrollableDistance = wrapper.offsetHeight - window.innerHeight;
    const targetProgress = (index + 0.04) / solutionTabs.length;

    window.scrollTo({
      top: start + scrollableDistance * targetProgress,
      behavior: "smooth",
    });
  }

  return (
    <>
      <ProblemSection />

      <section ref={stickyWrapperRef} className="dfy-sticky-system hidden h-[420vh] bg-white md:block">
        <div className="sticky top-[104px] flex min-h-[calc(100vh-104px)] items-center py-10 lg:py-12">
          <div className="container-wide flex w-full flex-col justify-center">
            <SystemIntro />
            <TabbedSystemCard activeIndex={activeIndex} onSelectTab={selectTab} />
          </div>
        </div>
      </section>

      <section ref={mobileScrollWrapperRef} className="h-[340vh] bg-white md:hidden">
        <div className="sticky top-[86px] flex min-h-[calc(100vh-86px)] items-center py-7">
          <div className="container-wide">
            <SystemIntro />
            <MobileTabbedSystem activeIndex={activeIndex} onSelectTab={selectTab} />
          </div>
        </div>
      </section>
    </>
  );
}

function ProblemSection() {
  return (
    <section className="bg-[#103D3F] py-14 text-white sm:py-24">
      <div className="container-wide">
        <div className="mx-auto max-w-[920px] text-center">
          <h2 className="text-[clamp(2.3rem,10vw,4.35rem)] font-medium leading-[1.08] tracking-[-0.035em]">
            You <span className="font-serif italic text-[#88DE7B] underline decoration-[#88DE7B] underline-offset-4">knew</span>{" "}
            paid ads can work for you. But so far, they just have not.
          </h2>
          <p className="mx-auto mt-6 max-w-[680px] text-lg leading-8 text-white/72 sm:mt-7 sm:text-xl">
            You are spending money on ads, but the real problem is not just traffic.
            It is lead quality, conversion intent, budget fit, and urgency.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-[1180px] gap-4 sm:mt-14 md:grid-cols-2 xl:grid-cols-4">
          {painCards.map((card) => (
            <article
              key={card.title}
              className="flex h-full flex-col rounded-[14px] border border-white/16 bg-white/[0.035] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] sm:p-7"
            >
              <div className="grid size-[52px] place-items-center rounded-xl border border-[rgba(136,222,123,0.22)] bg-[rgba(136,222,123,0.10)] text-[#F7FFF4] sm:size-16">
                <PainPointIcon type={card.icon} />
              </div>
              <h3 className="mt-5 text-xl font-medium leading-tight tracking-[-0.02em] sm:mt-7 sm:text-2xl">
                {card.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-white/66 sm:mt-5">{card.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function PainPointIcon({ type }: { type: string }) {
  const commonProps = {
    className: "size-9 sm:size-11",
    viewBox: "0 0 64 64",
    fill: "none",
    "aria-hidden": true,
  };

  if (type === "funnel") {
    return (
      <svg {...commonProps}>
        <path
          d="M12 15h40L38 31v12l-12 6V31L12 15z"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinejoin="round"
        />
        <path
          d="M44 43l8 8M52 43l-8 8"
          stroke="#88DE7B"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M20 15h24"
          stroke="#88DE7B"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (type === "blocked") {
    return (
      <svg {...commonProps}>
        <path
          d="M12 34h12M40 34h12"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M21 24a9 9 0 100-18 9 9 0 000 18z"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          d="M43 54a11 11 0 100-22 11 11 0 000 22z"
          stroke="#88DE7B"
          strokeWidth="4"
        />
        <path
          d="M38 43h10M43 38v10"
          stroke="#88DE7B"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M28 28l8 12M36 28l-8 12"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (type === "wallet") {
    return (
      <svg {...commonProps}>
        <path
          d="M13 23h34a7 7 0 017 7v17a7 7 0 01-7 7H13a7 7 0 01-7-7V20a6 6 0 016-6h31"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinejoin="round"
        />
        <path
          d="M43 36h11v11H43a6 6 0 010-11z"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinejoin="round"
        />
        <path
          d="M20 50L48 22"
          stroke="#88DE7B"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <path
          d="M17 28h12"
          stroke="#88DE7B"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  return (
    <svg {...commonProps}>
      <path
        d="M13 19h28a8 8 0 018 8v7a8 8 0 01-8 8H29l-10 8v-8h-6a8 8 0 01-8-8v-7a8 8 0 018-8z"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <path
        d="M22 31h.1M32 31h.1"
        stroke="#88DE7B"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path
        d="M48 20h2M53 23h2M49 29h2M56 32h2"
        stroke="#88DE7B"
        strokeWidth="4"
        strokeLinecap="round"
        opacity="0.95"
      />
      <path
        d="M40 44c5-1 9-5 10-10"
        stroke="#88DE7B"
        strokeWidth="4"
        strokeLinecap="round"
        strokeDasharray="2 7"
      />
    </svg>
  );
}

function SystemIntro() {
  return (
    <div className="dfy-system-intro mx-auto max-w-[900px] text-center">
      <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#164E50]">
        THAT&apos;S EXACTLY WHERE WE COME IN.
      </p>
      <h2 className="mt-5 text-[clamp(2rem,8vw,3.2rem)] font-medium leading-[1.12] tracking-[-0.035em] md:mx-auto md:max-w-[900px] md:text-[clamp(2.2rem,4.4vw,3.45rem)] md:leading-[1.08]">
        Turn your ad spend into a clear growth line.
      </h2>
      <p className="mx-auto mt-5 max-w-[720px] text-base leading-7 text-[#5f6877] sm:mt-6 sm:text-lg sm:leading-8 md:text-lg md:leading-8">
        We connect strategy, execution, creative, and reporting into one system so your
        campaigns improve from real sales feedback, not guesswork.
      </p>
    </div>
  );
}

function DesktopTabs({
  activeIndex,
  onSelectTab,
}: {
  activeIndex: number;
  onSelectTab: (index: number) => void;
}) {
  return (
    <div className="dfy-sticky-tabs grid grid-cols-4" role="tablist" aria-label="DFY system pillars">
      {solutionTabs.map((tab, index) => (
        <button
          key={tab.id}
          type="button"
          role="tab"
          aria-selected={activeIndex === index}
          onClick={() => onSelectTab(index)}
          className={`dfy-sticky-tab-button min-h-[42px] border-r border-[#dfe4ec] px-4 text-[0.76rem] font-medium uppercase tracking-[-0.01em] transition last:border-r-0 ${
            activeIndex === index
              ? "bg-[#164E50] text-white shadow-[0_14px_28px_rgba(22,78,80,0.2)]"
              : "bg-white text-[#5f6877] hover:bg-[#F7FCF7] hover:text-[#164E50]"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}

function MobileTabs({
  activeIndex,
  onSelectTab,
}: {
  activeIndex: number;
  onSelectTab: (index: number) => void;
}) {
  const activeColumn = activeIndex % 2;
  const activeRow = Math.floor(activeIndex / 2);

  return (
    <div
      className="relative grid grid-cols-2 gap-1 rounded-[14px] border border-[#dfe4ec] bg-[#F7FCF7] p-1 shadow-[0_16px_34px_rgba(15,23,42,0.06)]"
      role="tablist"
      aria-label="DFY system pillars"
    >
      <span
        aria-hidden="true"
        className="absolute z-0 rounded-[11px] bg-[#164E50] shadow-[0_12px_26px_rgba(22,78,80,0.18)] transition-all duration-300 ease-out"
        style={{
          left: activeColumn === 0 ? "4px" : "calc(50% + 2px)",
          top: activeRow === 0 ? "4px" : "calc(50% + 2px)",
          width: "calc(50% - 6px)",
          height: "calc(50% - 6px)",
        }}
      />
      {solutionTabs.map((tab, index) => (
        <button
          key={tab.id}
          type="button"
          role="tab"
          aria-selected={activeIndex === index}
          aria-controls={`mobile-system-panel-${tab.id}`}
          onClick={() => onSelectTab(index)}
          className={`relative z-10 min-h-[46px] rounded-[11px] px-2 text-sm font-medium transition-colors duration-300 ${
            activeIndex === index
              ? "text-white"
              : "bg-white text-[#5f6877] ring-1 ring-[#dfe4ec]/70 hover:text-[#164E50]"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}

function TabbedSystemCard({
  activeIndex,
  onSelectTab,
}: {
  activeIndex: number;
  onSelectTab: (index: number) => void;
}) {
  const activeTab = solutionTabs[activeIndex];

  return (
    <div className="dfy-sticky-system-card mx-auto mt-11 min-h-[560px] w-full max-w-[1240px] overflow-hidden rounded-[18px] border border-[#dfe4ec] bg-white shadow-[0_18px_60px_rgba(15,23,42,0.08)] xl:min-h-[600px]">
      <DesktopTabs activeIndex={activeIndex} onSelectTab={onSelectTab} />
      <div className="dfy-sticky-card-body p-5 lg:p-7">
        <ActiveTabContent key={activeTab.id} tab={activeTab} />
      </div>
    </div>
  );
}

function MobileTabbedSystem({
  activeIndex,
  onSelectTab,
}: {
  activeIndex: number;
  onSelectTab: (index: number) => void;
}) {
  const activeTab = solutionTabs[activeIndex];

  return (
    <div className="mt-9">
      <MobileTabs activeIndex={activeIndex} onSelectTab={onSelectTab} />
      <div className="mt-5 rounded-[18px] border border-[#dfe4ec] bg-white p-4 shadow-[0_18px_60px_rgba(15,23,42,0.08)]">
        <div id={`mobile-system-panel-${activeTab.id}`} role="tabpanel">
          <MobileActiveTabContent key={activeTab.id} tab={activeTab} />
        </div>
      </div>
    </div>
  );
}

function MobileActiveTabContent({
  tab,
}: {
  tab: (typeof solutionTabs)[number];
}) {
  return (
    <div className="dfy-mobile-tab-panel-enter grid gap-4">
      <CompactSystemVisual tab={tab} />
      <div className="rounded-[12px] border border-[#CDEECD] bg-[#F7FCF7] p-4">
        <div className="flex items-start gap-3">
          <div className="grid size-10 shrink-0 place-items-center rounded-full bg-[#EEF8EE] text-xs font-medium text-[#164E50]">
            DFY
          </div>
          <div className="min-w-0">
            <p className="text-sm font-medium text-[#111827]">{tab.quoteCard.label}</p>
            <p className="mt-1 text-sm leading-6 text-[#5f6877]">{tab.quoteCard.text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function CompactSystemVisual({
  tab,
}: {
  tab: (typeof solutionTabs)[number];
}) {
  const visualRows = tab.bullets.slice(0, 4);

  return (
    <div className="rounded-[14px] bg-[#103D3F] p-3 shadow-[0_18px_42px_rgba(6,27,47,0.16)]">
      <div className="overflow-hidden rounded-[12px] border border-[#2D6668] bg-[radial-gradient(circle_at_20%_10%,rgba(136,222,123,0.18),transparent_34%),linear-gradient(135deg,#103D3F,#164E50)] p-4 text-white">
        <div className="flex items-center justify-between gap-3">
          <p className="text-sm font-medium">{tab.label}</p>
          <span className="rounded-full bg-[#88DE7B]/18 px-3 py-1 text-xs font-medium text-[#DDF4DD]">
            {tab.eyebrow}
          </span>
        </div>
        <div className="mt-4 grid gap-2">
          {visualRows.map((item, index) => (
            <div key={item} className="flex items-center gap-3 rounded-[10px] border border-white/10 bg-white/[0.06] p-3">
              <span className="grid size-7 shrink-0 place-items-center rounded-full bg-[#88DE7B] text-xs font-medium text-[#103D3F]">
                {index + 1}
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium">{item}</p>
                <div className="mt-2 h-1.5 rounded-full bg-white/10">
                  <div className="h-full rounded-full bg-[#88DE7B]" style={{ width: `${58 + index * 9}%` }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ActiveTabContent({
  tab,
  mobile = false,
}: {
  tab: (typeof solutionTabs)[number];
  mobile?: boolean;
}) {
  return (
    <div className={`dfy-sticky-content grid gap-8 md:min-h-[480px] md:grid-cols-[1.04fr_0.96fr] md:items-stretch md:gap-8 xl:gap-10 ${mobile ? "dfy-mobile-tab-panel-enter" : "tab-panel-enter"}`}>
      <SystemVisual type={tab.visual} mobile={mobile} />
      <div className="dfy-sticky-copy flex min-w-0 flex-col justify-center md:py-2 lg:pr-2">
        <p className="text-sm font-medium uppercase tracking-[0.1em] text-[#164E50]">
          {tab.eyebrow}
        </p>
        <h3 className="dfy-sticky-copy-title mt-4 max-w-[560px] text-[clamp(1.85rem,8vw,3.2rem)] font-medium leading-[1.1] tracking-[-0.035em] md:mt-4 md:text-[clamp(2rem,3.3vw,2.75rem)] md:leading-[1.08]">
          {tab.title}
        </h3>
        <p className="dfy-sticky-copy-description mt-5 max-w-[560px] text-base leading-7 text-[#5f6877] md:mt-5 md:text-base md:leading-7">
          {tab.body}
        </p>
        <ul className="dfy-sticky-bullets mt-6 space-y-4 md:mt-6 md:space-y-3">
          {tab.bullets.map((bullet) => (
            <li key={bullet} className="dfy-sticky-bullet flex items-start gap-3 text-base font-normal leading-[1.5] text-[#111827]">
              <span className="mt-[2px] inline-flex w-5 shrink-0 justify-center text-lg font-medium leading-6 text-[#164E50]" aria-hidden="true">+</span>
              <span className="min-w-0">{bullet}</span>
            </li>
          ))}
        </ul>
        <div className="dfy-sticky-quote mt-8 rounded-[12px] border border-[#CDEECD] bg-[#F7FCF7] p-5 md:mt-7 md:p-5">
          <p className="dfy-sticky-quote-text text-base italic leading-7 text-[#5f6877]">
            {tab.quoteCard.text}
          </p>
          <div className="mt-3 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="grid size-11 place-items-center rounded-full bg-[#EEF8EE] text-sm font-medium text-[#164E50]">
                DFY
              </div>
              <div>
                <p className="font-medium text-[#111827]">{tab.quoteCard.label}</p>
                <p className="text-sm text-[#5f6877]">{tab.quoteCard.source}</p>
              </div>
            </div>
            <p className="hidden text-xl font-medium uppercase text-[#8c93a1] sm:block">DFY</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SystemVisual({ type, mobile = false }: { type: string; mobile?: boolean }) {
  if (type === "strategy") return <StrategyVisual mobile={mobile} />;
  if (type === "execution") return <ExecutionVisual mobile={mobile} />;
  if (type === "creative") return <CreativeVisual mobile={mobile} />;
  return <ReportingVisual mobile={mobile} />;
}

function VisualShell({ children, mobile = false }: { children: ReactNode; mobile?: boolean }) {
  return (
    <div className="dfy-visual-shell h-full rounded-[9px] bg-[#103D3F] p-3 shadow-[0_22px_50px_rgba(6,27,47,0.18)] md:p-4">
      <div
        className={`dfy-visual-inner overflow-hidden rounded-[14px] border border-[#2D6668] bg-[#143F41] p-4 text-white md:p-5 ${
          mobile ? "min-h-[320px]" : "h-full min-h-[440px] xl:min-h-[480px]"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

function StrategyVisual({ mobile = false }: { mobile?: boolean }) {
  return (
    <VisualShell mobile={mobile}>
      <div className="dfy-strategy-visual h-full rounded-[12px] bg-[radial-gradient(circle_at_20%_20%,rgba(136,222,123,0.18),transparent_34%),linear-gradient(135deg,#103D3F,#164E50)] p-4">
        <div className="flex items-center justify-between gap-3">
          <p className="text-sm font-medium text-white">Funnel diagnosis</p>
          <span className="rounded-full bg-[#88DE7B]/18 px-3 py-1 text-xs font-medium text-[#DDF4DD]">
            Audit map
          </span>
        </div>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {["Offer", "Buyer intent", "Landing page", "CRM feedback"].map((item, index) => (
            <div key={item} className="rounded-xl border border-white/10 bg-white/[0.06] p-3">
              <div className="flex items-center gap-2">
                <span className="grid size-7 place-items-center rounded-full bg-[#88DE7B] text-xs font-medium text-[#103D3F]">
                  {index + 1}
                </span>
                <p className="text-sm font-medium">{item}</p>
              </div>
              <div className="mt-3 h-2 rounded-full bg-white/10">
                <div className="h-full rounded-full bg-[#88DE7B]" style={{ width: `${50 + index * 12}%` }} />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-xl border border-[#88DE7B]/30 bg-[#0f3638] p-4">
          <p className="text-xs uppercase tracking-[0.14em] text-[#CDEECD]">Sales signal</p>
          <p className="mt-2 text-lg font-medium leading-tight">Define what a qualified buyer looks like before spend scales.</p>
        </div>
      </div>
    </VisualShell>
  );
}

function ExecutionVisual({ mobile = false }: { mobile?: boolean }) {
  return (
    <VisualShell mobile={mobile}>
      <div className="flex items-center justify-between gap-3">
        <p className="text-sm font-medium">Launch board</p>
        <span className="rounded-full bg-[#88DE7B]/18 px-3 py-1 text-xs font-medium text-[#DDF4DD]">
          System build
        </span>
      </div>
      <div className="mt-5 grid gap-3">
        {["Campaigns", "Landing page", "Tracking events", "CRM stages", "Nurture paths"].map((step, index) => (
          <div key={step} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.06] p-3">
            <span className="grid size-8 shrink-0 place-items-center rounded-full bg-[#88DE7B] text-xs font-medium text-[#103D3F]">
              {index + 1}
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium">{step}</p>
              <div className="mt-2 h-1.5 rounded-full bg-white/10">
                <div className="h-full rounded-full bg-[#88DE7B]" style={{ width: `${58 + index * 8}%` }} />
              </div>
            </div>
            <span className="text-xs text-[#CDEECD]">Mapped</span>
          </div>
        ))}
      </div>
    </VisualShell>
  );
}

function CreativeVisual({ mobile = false }: { mobile?: boolean }) {
  return (
    <VisualShell mobile={mobile}>
      <div className="grid h-full gap-3 sm:grid-cols-[1fr_0.9fr]">
        <div className="rounded-xl border border-white/10 bg-white/[0.06] p-4">
          <p className="text-xs uppercase tracking-[0.14em] text-[#CDEECD]">Angle test</p>
          <h4 className="mt-5 text-2xl font-medium leading-tight">Built for buyers with intent.</h4>
          <div className="mt-6 space-y-2 text-sm text-[#DDF4DD]">
            {["Pain callout", "Budget fit", "Urgency trigger"].map((item) => (
              <div key={item} className="rounded-lg bg-[#103D3F] px-3 py-2">
                + {item}
              </div>
            ))}
          </div>
        </div>
        <div className="grid gap-3">
          {["Hook", "Offer", "Objection"].map((item, index) => (
            <div key={item} className="rounded-xl border border-white/10 bg-[#174A4C] p-4">
              <p className="text-xs text-[#CDEECD]">Variant 0{index + 1}</p>
              <p className="mt-2 text-lg font-medium">{item}</p>
              <div className="mt-3 h-2 rounded-full bg-white/10">
                <div className="h-full rounded-full bg-[#88DE7B]" style={{ width: [70, 58, 46][index] + "%" }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </VisualShell>
  );
}

function ReportingVisual({ mobile = false }: { mobile?: boolean }) {
  return (
    <VisualShell mobile={mobile}>
      <div className="grid gap-3 sm:grid-cols-[0.82fr_1.18fr]">
        <div className="rounded-xl border border-white/10 bg-white/[0.06] p-4">
          <p className="text-xs uppercase tracking-[0.14em] text-[#CDEECD]">Quality view</p>
          <div className="mx-auto mt-7 size-28 rounded-full border-[20px] border-[#164E50] border-r-[#88DE7B] border-t-[#88DE7B] sm:size-32 sm:border-[22px]" />
        </div>
        <div className="rounded-xl border border-white/10 bg-[#174A4C] p-4">
          <p className="text-sm font-medium">Lead quality dashboard</p>
          <svg viewBox="0 0 320 120" className="mt-5 h-28 w-full" aria-hidden="true">
            <path d="M0 88 C40 72 62 82 96 64 C135 42 166 58 198 42 C240 20 268 38 320 18" fill="none" stroke="#88DE7B" strokeWidth="5" strokeLinecap="round" />
            <path d="M0 102 C42 96 70 98 106 86 C150 72 180 76 216 62 C252 48 280 44 320 36" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="3" strokeLinecap="round" />
          </svg>
        </div>
      </div>
      <div className="mt-4 rounded-xl border border-white/10 bg-[#174A4C] p-4">
        <p className="text-sm font-medium">Optimization signals</p>
        <div className="mt-4 space-y-3 text-sm text-[#DDF4DD]">
          {["Qualified leads", "Cost per qualified lead", "Sales feedback", "Next optimization"].map((row) => (
            <div key={row} className="grid grid-cols-[1fr_auto] gap-3 border-b border-white/8 pb-2 last:border-b-0 last:pb-0">
              <span>{row}</span>
              <span className="text-[#88DE7B]">Reviewed</span>
            </div>
          ))}
        </div>
      </div>
    </VisualShell>
  );
}

