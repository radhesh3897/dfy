import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, serviceSchema, webPageSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Meta Ads Agency for Service Businesses",
  description:
    "Done For You builds Meta Ads systems for service businesses with lead quality tracking, creative testing, CRM feedback, and funnel improvement.",
  path: "/services/meta-ads",
  keywords: [
    "Meta Ads agency",
    "Facebook Ads for service businesses",
    "Meta lead generation agency",
    "service business paid ads",
    "lead quality tracking",
    "Done For You Meta Ads",
  ],
});

const proofSlots = [
  "Service business slot",
  "Clinic funnel slot",
  "EdTech funnel slot",
  "Local services slot",
  "B2B services slot",
  "Training funnel slot",
];

const problemCards = [
  {
    title: "Low lead quality",
    text: "Broad or lazy targeting attracts people who fill forms but never become serious conversations.",
    icon: "filter",
  },
  {
    title: "Poor targeting",
    text: "Campaigns reach the wrong audience because the ad system is not learning from actual sales outcomes.",
    icon: "target",
  },
  {
    title: "Creative-message mismatch",
    text: "The ad looks polished, but the message does not speak to the buyer you really want.",
    icon: "message",
  },
  {
    title: "No CRM feedback loop",
    text: "Without tracked outcomes, Meta optimizes for form fills instead of qualified sales opportunities.",
    icon: "database",
  },
  {
    title: "Landing page leakage",
    text: "Slow pages, weak offers, unclear proof, or friction can kill conversions quietly.",
    icon: "window",
  },
  {
    title: "Unclear CAC visibility",
    text: "If you cannot see your real cost per customer, scaling spend becomes guesswork.",
    icon: "bars",
  },
];

const methodSteps = [
  {
    number: "01",
    title: "Discover & Strategy",
    text: "We align on your offer, audience, positioning, funnel math, and sales qualification signals.",
    icon: "target",
  },
  {
    number: "02",
    title: "Build & Launch",
    text: "We build campaigns, landing pages, creative tests, tracking, and the right lead capture flow.",
    icon: "pen",
  },
  {
    number: "03",
    title: "Track & Learn",
    text: "We connect campaign performance to CRM stages, lead quality notes, and sales feedback.",
    icon: "database",
  },
  {
    number: "04",
    title: "Optimize & Scale",
    text: "We double down on stronger signals and reduce waste before increasing spend.",
    icon: "growth",
  },
];

const methodPillars = [
  {
    title: "Strategy & Positioning",
    text: "Define the ICP, sharpen the offer, and build a Meta Ads plan around qualified demand.",
    icon: "target",
  },
  {
    title: "Creative That Converts",
    text: "Create hooks, angles, and proof-led messaging that attracts the right buyer, not just attention.",
    icon: "video",
  },
  {
    title: "Tracking & CRM Feedback",
    text: "Connect lead source, CRM stages, and sales notes so campaign decisions are based on real data.",
    icon: "database",
  },
  {
    title: "Optimize & Scale Profitably",
    text: "Cut waste, improve conversion quality, and scale only what is backed by stronger signals.",
    icon: "growth",
  },
];

const adFormats = [
  {
    title: "Image Ads",
    text: "High-impact static ads for clear offers, sharp hooks, and direct response testing.",
    icon: "image",
  },
  {
    title: "Video Ads",
    text: "Short-form video concepts that explain the problem, offer, and reason to act.",
    icon: "play",
  },
  {
    title: "Lead Ads",
    text: "Native form campaigns with better questions, filters, and follow-up routing.",
    icon: "form",
  },
  {
    title: "Carousel Ads",
    text: "Multi-card stories for services, pain points, proof, and offer education.",
    icon: "grid",
  },
  {
    title: "Collection Ads",
    text: "Structured campaign formats for service packages, programs, and lead magnets.",
    icon: "bag",
  },
  {
    title: "Retargeting Ads",
    text: "Warm-audience ads that rebuild intent, answer objections, and move prospects closer.",
    icon: "refresh",
  },
];

const funnelColumns = [
  {
    number: "1",
    title: "Prospecting Engine",
    text: "Find and reach cold audiences with targeted campaigns that spark interest and capture higher-quality new leads.",
    color: "teal",
    nodes: [
      ["Cold Audience", "Identify ideal prospects at scale.", "users"],
      ["Prospecting Campaigns", "Run focused ads that get attention.", "megaphone"],
      ["New Leads", "Capture and qualify leads into your pipeline.", "user"],
    ],
  },
  {
    number: "2",
    title: "Retarget & Nurture",
    text: "Re-engage interested visitors with relevant messaging that builds trust and moves them closer to buying.",
    color: "green",
    nodes: [
      ["Website Visitors", "Capture attention from engaged visitors.", "screen"],
      ["Retargeting Campaigns", "Show the right message to the right people.", "target"],
      ["Warm Leads", "Nurture interest and increase intent.", "users"],
    ],
  },
  {
    number: "3",
    title: "Scale What Works",
    text: "Double down on proven winners, scale spend efficiently, and turn results into predictable booked revenue.",
    color: "teal",
    nodes: [
      ["Winning Ad Sets", "Identify creatives and audiences that convert.", "growth"],
      ["Budget Scaling", "Increase spend strategically to maximize performance.", "database"],
      ["Booked Revenue", "Turn scalable results into clearer growth.", "money"],
    ],
  },
];

const creativeCards = [
  {
    id: "roofing",
    title: "Stronger roof. Safer home.",
    label: "Inspection offer",
    bullets: ["Clear problem", "Local proof", "Simple CTA"],
    image: "/creative/in-house-creative-01.png",
  },
  {
    id: "comfort",
    title: "Comfort you can count on.",
    label: "HVAC angle",
    bullets: ["Fast service", "Upfront pricing", "Qualified intent"],
    image: "/creative/in-house-creative-02.png",
  },
  {
    id: "plumbing",
    title: "Plumbing problems? We fix fast.",
    label: "Urgency angle",
    bullets: ["Emergency need", "Trust markers", "Call CTA"],
    image: "/creative/in-house-creative-03.png",
  },
  {
    id: "clinic",
    title: "Safe care. Clear next step.",
    label: "Clinic lead ad",
    bullets: ["Buyer pain", "Lead filter", "Follow-up"],
    image: "/creative/in-house-creative-04.png",
  },
  {
    id: "cleaning",
    title: "A cleaner space, a better day.",
    label: "Service proof",
    bullets: ["Vetted team", "Easy booking", "Trust signal"],
    image: "/creative/in-house-creative-05.png",
  },
  {
    id: "solar",
    title: "Lower bills. Cleaner future.",
    label: "Offer test",
    bullets: ["Savings hook", "Home value", "Estimate CTA"],
    image: "/creative/in-house-creative-06.png",
  },
  {
    id: "build",
    title: "Built right. Built to last.",
    label: "Project funnel",
    bullets: ["Service scope", "Intent check", "Quote CTA"],
    image: "/creative/in-house-creative-07.png",
  },
  {
    id: "commercial",
    title: "Protect your business investment.",
    label: "B2B service",
    bullets: ["Commercial fit", "Maintenance", "Fast response"],
    image: "/creative/in-house-creative-01.png",
  },
];

const logoRows = [
  ["HVAC slot", "Roofing slot", "Clinic slot", "Coaching slot", "EdTech slot", "Legal slot", "Solar slot", "Gym slot"],
  ["Plumbing slot", "Dental slot", "Finance slot", "Travel slot", "Training slot", "B2B service slot", "SaaS slot", "Local slot"],
  ["Healthcare slot", "Consulting slot", "Real estate slot", "Insurance slot", "Education slot", "Repair slot", "Wellness slot", "Events slot"],
  ["Accounting slot", "Construction slot", "Painting slot", "Automotive slot", "Remodeling slot", "Agency slot", "Mortgage slot", "Storage slot"],
];

const resultCards = [
  {
    title: "Meta Ads lead quality project",
    text: "Verified project story will be added after audit or project review. No fake metrics are being used.",
    tag: "Lead quality",
  },
  {
    title: "Landing page conversion project",
    text: "Breakdown placeholder for offer, page structure, form questions, and follow-up improvements.",
    tag: "CRO",
  },
  {
    title: "CRM feedback loop project",
    text: "Project placeholder for connecting ad spend to lead quality, sales stages, and customer outcomes.",
    tag: "Tracking",
  },
];

const whyItems = [
  {
    title: "Built for service businesses",
    text: "Your Meta Ads system is shaped around real sales conversations, high-value jobs, and practical follow-up.",
    icon: "check",
  },
  {
    title: "CRM-driven optimization",
    text: "We help connect ads, lead sources, nurture, and sales feedback in one improvement loop.",
    icon: "check",
  },
  {
    title: "Full-service partnership",
    text: "Strategy, creative, ads, landing pages, tracking, and reporting are managed as one system.",
    icon: "check",
  },
];

export default function MetaAdsPage() {
  return (
    <>
      <JsonLd
        data={webPageSchema(
          "/services/meta-ads",
          "Meta Ads Agency for Service Businesses",
          "Done For You Meta Ads service page for service businesses that need better lead quality and clearer sales feedback.",
        )}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "B2B Lead Generation Agency", path: "/b2b-lead-generation-agency" },
          { name: "Meta Ads", path: "/services/meta-ads" },
        ])}
      />
      <JsonLd
        data={serviceSchema({
          name: "Meta Ads for Service Businesses",
          description:
            "Meta Ads campaign strategy, creative testing, tracking, CRM feedback, and lead quality optimization for service businesses.",
          path: "/services/meta-ads",
          serviceType: "Meta Ads management",
        })}
      />
      <HeroSection />
      <ProblemSection />
      <MethodSection />
      <AdFormatsSection />
      <FunnelSection />
      <CreativeShowcaseSection />
      <LogoCloudCtaSection />
      <ResultsProofSection />
      <WhyChooseSection />
    </>
  );
}

function HeroSection() {
  return (
    <section className="bg-white py-12 text-[#050505] sm:py-14 lg:py-16">
      <div className="container-wide">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="inline-flex items-center gap-2 rounded-md border border-[#CDEECD] bg-[#EEF8EE] px-4 py-2 text-sm font-medium text-[#164E50]">
              <MiniIcon icon="growth" />
              Meta Ads for service businesses
            </p>
            <h1 className="mt-7 max-w-[690px] text-[clamp(2.65rem,7vw,5.25rem)] font-medium leading-[0.98] tracking-[-0.06em]">
              Turn Meta Ads into qualified leads, not just cheap form fills.
            </h1>
            <p className="mt-7 max-w-[650px] text-lg leading-8 tracking-[-0.01em] text-[#465163] sm:text-xl sm:leading-9">
              We build paid acquisition systems for service businesses that use CRM feedback and lead quality signals to attract, qualify, and convert the right leads consistently.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/#free-audit-form" className="min-h-[58px] rounded-md px-7 text-base sm:text-lg">
                Get Free Audit
                <span className="ml-3" aria-hidden="true">-&gt;</span>
              </ButtonLink>
              <ButtonLink href="#meta-method" variant="secondary" className="min-h-[58px] rounded-md border-[#164E50] px-7 text-base text-[#164E50] sm:text-lg">
                View Services
                <span className="ml-3" aria-hidden="true">-&gt;</span>
              </ButtonLink>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-[1fr_0.52fr]">
            <CampaignPerformanceCard />
            <AdPreviewCard />
          </div>
        </div>

        <div className="mt-11 grid gap-5 border-y border-[#e4e8e5] py-7 sm:grid-cols-2 lg:grid-cols-6">
          {proofSlots.map((slot) => (
            <div key={slot} className="flex items-center gap-3 text-[#818a95]">
              <IconMark />
              <span className="text-base font-medium uppercase leading-5 tracking-[0.05em]">{slot}</span>
            </div>
          ))}
        </div>

        <article className="mt-8 rounded-[18px] border border-[#CDEECD] bg-white p-5 shadow-[0_22px_70px_rgba(22,78,80,0.08)] lg:p-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="inline-flex rounded-md bg-[#EEF8EE] px-4 py-2 text-sm font-medium uppercase tracking-[0.1em] text-[#164E50]">
                Featured project placeholder
              </p>
              <h2 className="mt-6 max-w-[620px] text-[clamp(1.9rem,5vw,3.3rem)] font-medium leading-[1.04] tracking-[-0.055em]">
                Verified Meta Ads project story will be added after audit/project review.
              </h2>
              <p className="mt-5 max-w-[600px] text-lg leading-8 text-[#465163]">
                This card is reserved for a real, approved breakdown. No fake logos, fake client names, or fake before/after values are being used.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <PlaceholderMetric label="More qualified leads" />
                <PlaceholderMetric label="Lower cost per customer" />
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {creativeCards.slice(0, 3).map((card) => (
                <CreativeTile key={card.id} card={card} compact />
              ))}
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

function CampaignPerformanceCard() {
  return (
    <article className="rounded-[18px] border border-[#dfe6df] bg-white p-5 shadow-[0_22px_70px_rgba(22,78,80,0.08)] sm:p-7">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="grid size-12 place-items-center rounded-full bg-[#EEF8EE] text-[#164E50]">
            <MiniIcon icon="meta" />
          </span>
          <div>
            <p className="text-lg font-medium">Campaign performance</p>
            <p className="mt-1 text-sm text-[#667085]">Placeholder view</p>
          </div>
        </div>
        <span className="inline-flex items-center gap-2 text-sm font-medium text-[#164E50]">
          <span className="size-2 rounded-full bg-[#88DE7B]" />
          Active
        </span>
      </div>
      <div className="mt-7 rounded-[12px] border border-[#e4e8e5] bg-[#fbfbf8] p-4">
        <svg viewBox="0 0 520 230" className="h-56 w-full" role="img" aria-label="Placeholder campaign performance line chart">
          <defs>
            <linearGradient id="metaChartFill" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#88DE7B" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#88DE7B" stopOpacity="0.04" />
            </linearGradient>
          </defs>
          {[40, 88, 136, 184].map((y) => (
            <line key={y} x1="18" x2="500" y1={y} y2={y} stroke="#dfe6df" />
          ))}
          <path d="M24 176 L74 150 L120 160 L168 126 L214 138 L260 96 L306 122 L352 82 L398 100 L446 68 L496 42 L496 205 L24 205 Z" fill="url(#metaChartFill)" />
          <path d="M24 176 L74 150 L120 160 L168 126 L214 138 L260 96 L306 122 L352 82 L398 100 L446 68 L496 42" fill="none" stroke="#164E50" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="496" cy="42" r="6" fill="#164E50" />
        </svg>
      </div>
      <div className="mt-4 grid gap-3 sm:grid-cols-4">
        {["Leads", "Qualified", "Cost/customer", "Booked calls"].map((metric) => (
          <div key={metric} className="rounded-[12px] border border-[#e4e8e5] bg-white p-3">
            <p className="text-xs font-medium text-[#667085]">{metric}</p>
            <p className="mt-2 text-2xl font-medium tracking-[-0.04em] text-[#164E50]">TBD</p>
          </div>
        ))}
      </div>
    </article>
  );
}

function AdPreviewCard() {
  return (
    <article className="rounded-[18px] border border-[#dfe6df] bg-white p-5 shadow-[0_22px_70px_rgba(22,78,80,0.08)]">
      <div className="flex items-center gap-3">
        <span className="grid size-11 place-items-center rounded-full bg-[#164E50] text-sm font-medium text-white">DFY</span>
        <div>
          <p className="text-base font-medium">DFY service campaign</p>
          <p className="text-sm text-[#667085]">Ad preview placeholder</p>
        </div>
      </div>
      <p className="mt-5 text-lg font-medium leading-7 tracking-[-0.02em]">
        Stop chasing low-quality leads. Build a system that learns from real buyers.
      </p>
      <div className="mt-5 aspect-[4/3] overflow-hidden rounded-[12px] bg-[#EEF8EE]">
        <CreativePattern />
      </div>
      <div className="mt-4 flex items-center justify-between gap-3 rounded-md bg-[#fbfbf8] p-3">
        <p className="text-sm text-[#465163]">Lead quality first</p>
        <span className="rounded-md bg-[#164E50] px-3 py-2 text-sm font-medium text-white">Learn more</span>
      </div>
    </article>
  );
}

function ProblemSection() {
  return (
    <section className="bg-[#08111F] py-16 text-white sm:py-20 lg:py-24">
      <div className="container-wide">
        <header className="mx-auto max-w-[950px] text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#88DE7B]">The problem</p>
          <span className="mx-auto mt-5 block h-1 w-16 rounded-full bg-[#88DE7B]" />
          <h2 className="mt-7 text-[clamp(2.3rem,6.5vw,4.6rem)] font-medium leading-[1.02] tracking-[-0.055em]">
            Why most Meta Ads campaigns for service businesses <span className="text-[#88DE7B]">underperform.</span>
          </h2>
          <p className="mt-6 text-lg leading-8 text-white/72 sm:text-xl">
            It is rarely the budget. It is the gaps most agencies overlook.
          </p>
        </header>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {problemCards.map((card) => (
            <article key={card.title} className="rounded-[14px] border border-white/14 bg-white/[0.03] p-7 shadow-[0_22px_60px_rgba(0,0,0,0.16)]">
              <span className="grid size-20 place-items-center rounded-full border border-white/18 text-[#CDEECD]">
                <MiniIcon icon={card.icon} />
              </span>
              <h3 className="mt-8 text-2xl font-medium tracking-[-0.04em]">{card.title}</h3>
              <p className="mt-4 text-lg leading-8 text-white/65">{card.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function MethodSection() {
  return (
    <section id="meta-method" className="bg-white py-16 text-[#050505] sm:py-20 lg:py-24">
      <div className="container-wide grid gap-8 xl:grid-cols-[310px_1fr_310px]">
        <aside className="rounded-[16px] border border-[#dfe6df] bg-white p-6 shadow-[0_18px_55px_rgba(22,78,80,0.06)]">
          <p className="text-center text-sm font-medium uppercase tracking-[0.16em] text-[#164E50]">The DFY Meta Ads System</p>
          <div className="mt-8 space-y-7">
            {methodSteps.map((step) => (
              <div key={step.number} className="grid grid-cols-[52px_1fr] gap-4">
                <span className="grid size-11 place-items-center rounded-full bg-[#164E50] text-base font-medium text-white">{step.number}</span>
                <div>
                  <span className="grid size-12 place-items-center rounded-[12px] bg-[#EEF8EE] text-[#164E50]">
                    <MiniIcon icon={step.icon} />
                  </span>
                  <h3 className="mt-3 text-lg font-medium">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#5f6877]">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </aside>

        <div className="xl:px-8">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#164E50]">Proven. Repeatable. Results.</p>
          <span className="mt-6 block h-1 w-16 rounded-full bg-[#164E50]" />
          <h2 className="mt-8 text-[clamp(2.4rem,6vw,4.5rem)] font-medium leading-[1] tracking-[-0.06em]">
            The DFY Meta Ads Method.
          </h2>
          <p className="mt-5 text-xl leading-8 text-[#465163]">A repeatable system built for qualified pipeline.</p>

          <div className="mt-10 divide-y divide-dashed divide-[#dce5dc]">
            {methodPillars.map((pillar) => (
              <article key={pillar.title} className="grid gap-5 py-8 first:pt-0 sm:grid-cols-[76px_1fr]">
                <span className="grid size-16 place-items-center rounded-full border border-[#CDEECD] bg-[#EEF8EE] text-[#164E50]">
                  <MiniIcon icon={pillar.icon} />
                </span>
                <div>
                  <h3 className="text-2xl font-medium tracking-[-0.04em]">{pillar.title}</h3>
                  <p className="mt-3 max-w-[700px] text-lg leading-8 text-[#465163]">{pillar.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <aside className="rounded-[16px] border border-[#CDEECD] bg-[#fbfdf9] p-7 text-center shadow-[0_18px_55px_rgba(22,78,80,0.06)]">
          <span className="mx-auto grid size-20 place-items-center rounded-full border border-[#88DE7B] text-[#164E50]">
            <MiniIcon icon="growth" />
          </span>
          <p className="mt-8 text-sm font-medium uppercase tracking-[0.16em] text-[#164E50]">Proof slot</p>
          <span className="mx-auto mt-6 block h-1 w-14 rounded-full bg-[#88DE7B]" />
          <div className="mt-10 space-y-9">
            <PlaceholderMetric label="Qualified pipeline lift" centered />
            <PlaceholderMetric label="Cost per customer visibility" centered />
            <div className="border-t border-[#dfe6df] pt-8">
              <p className="text-lg font-medium text-[#164E50]">Built for verified results</p>
              <p className="mt-3 text-base leading-7 text-[#5f6877]">Approved metrics will be added only after project review.</p>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}

function AdFormatsSection() {
  return (
    <section className="bg-[#fbfbf8] py-16 text-[#050505] sm:py-20 lg:py-24">
      <div className="container-wide">
        <header className="mx-auto max-w-[920px] text-center">
          <p className="mx-auto inline-flex items-center gap-2 rounded-full border border-[#CDEECD] bg-white px-4 py-2 text-sm font-medium uppercase tracking-[0.12em] text-[#164E50]">
            <MiniIcon icon="meta" />
            Ad formats
          </p>
          <h2 className="mt-7 text-[clamp(2.25rem,6.5vw,4.4rem)] font-medium leading-[1.02] tracking-[-0.055em]">
            Every Meta ad format that matters, managed under one system.
          </h2>
          <p className="mx-auto mt-5 max-w-[720px] text-lg leading-8 text-[#465163] sm:text-xl">
            Launch, manage, and optimize the major Meta ad formats with one performance view.
          </p>
        </header>
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {adFormats.map((format, index) => (
            <article key={format.title} className="rounded-[16px] border border-[#dfe6df] bg-white p-5 shadow-[0_18px_55px_rgba(22,78,80,0.06)]">
              <AdMockup index={index} />
              <div className="mt-5 flex gap-4">
                <span className="grid size-12 shrink-0 place-items-center rounded-[12px] border border-[#CDEECD] bg-[#EEF8EE] text-[#164E50]">
                  <MiniIcon icon={format.icon} />
                </span>
                <div>
                  <h3 className="text-2xl font-medium tracking-[-0.04em]">{format.title}</h3>
                  <p className="mt-2 text-base leading-7 text-[#465163]">{format.text}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FunnelSection() {
  return (
    <section className="bg-white py-16 text-[#050505] sm:py-20 lg:py-24">
      <div className="container-wide">
        <header className="mx-auto max-w-[950px] text-center">
          <h2 className="text-[clamp(2.35rem,6.5vw,4.55rem)] font-medium leading-[1.02] tracking-[-0.055em]">
            Prospecting, retargeting, and scaling: the complete funnel.
          </h2>
          <span className="mx-auto mt-8 block h-1 w-20 rounded-full bg-[#164E50]" />
        </header>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {funnelColumns.map((column) => (
            <article key={column.title} className="rounded-[16px] border border-[#dfe6df] bg-white p-7 shadow-[0_18px_55px_rgba(22,78,80,0.06)]">
              <div className="flex items-center gap-5">
                <span className="grid size-14 place-items-center rounded-full bg-[#164E50] text-2xl font-medium text-white">{column.number}</span>
                <h3 className="text-[clamp(1.6rem,4vw,2.2rem)] font-medium tracking-[-0.045em]">{column.title}</h3>
              </div>
              <p className="mt-7 text-lg leading-8 text-[#465163]">{column.text}</p>
              <div className="mt-9 space-y-5">
                {column.nodes.map(([title, text, icon], index) => (
                  <div key={title}>
                    <FunnelNode title={title} text={text} icon={icon} tint={column.color} />
                    {index < column.nodes.length - 1 ? (
                      <div className="flex justify-center py-3 text-[#164E50]" aria-hidden="true">
                        <svg width="24" height="34" viewBox="0 0 24 34" fill="none">
                          <path d="M12 2v28m0 0 8-8m-8 8-8-8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    ) : null}
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CreativeShowcaseSection() {
  return (
    <section className="overflow-x-clip bg-[#EEF8EE] py-16 text-[#050505] sm:py-20 lg:py-24">
      <div className="container-wide text-center">
        <h2 className="mx-auto max-w-[850px] text-[clamp(2.25rem,6.5vw,4.1rem)] font-medium leading-[1.02] tracking-[-0.055em]">
          Ads built for <span className="text-[#164E50]">real buyers</span>, not vanity metrics.
        </h2>
        <p className="mx-auto mt-5 max-w-[680px] text-lg leading-8 text-[#465163]">
          Scroll-stopping creative and clear offers that bring in the right calls, not just clicks.
        </p>
      </div>
      <div className="container-wide mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {creativeCards.map((card) => (
          <CreativeTile key={card.id} card={card} />
        ))}
      </div>
    </section>
  );
}

function LogoCloudCtaSection() {
  return (
    <section className="overflow-hidden bg-[#EEF8EE] py-16 text-[#050505] sm:py-20 lg:py-24">
      <div className="relative mx-auto max-w-[1500px]">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#EEF8EE] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#EEF8EE] to-transparent" />
        <div className="space-y-6">
          {logoRows.map((row, index) => (
            <div key={`logo-row-${index}`} className="overflow-hidden">
              <div className={`logo-marquee-track ${index % 2 === 0 ? "logo-marquee-left-slow" : "logo-marquee-right-slow"}`}>
                <LogoGroup logos={row} />
                <LogoGroup logos={row} ariaHidden />
              </div>
            </div>
          ))}
        </div>
        <div className="relative z-20 mx-auto mt-10 max-w-[470px] rounded-[18px] border border-white/12 bg-[#164E50] p-8 text-center text-white shadow-[0_26px_80px_rgba(22,78,80,0.22)] sm:p-10 lg:-mt-72">
          <h2 className="text-[clamp(2rem,6vw,3rem)] font-medium leading-[1.08] tracking-[-0.05em]">
            Ready to make paid ads a predictable growth lever?
          </h2>
          <p className="mt-5 text-lg leading-8 text-white/72">
            Get a free audit of your account and a clear plan to scale more profitably with Meta Ads.
          </p>
          <ButtonLink href="/#free-audit-form" variant="light" className="mt-8 min-h-[58px] rounded-md px-8 text-base sm:text-lg">
            Get Free Audit
            <span className="ml-3" aria-hidden="true">-&gt;</span>
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}

function ResultsProofSection() {
  return (
    <section className="bg-[#fbfbf8] py-16 text-[#050505] sm:py-20 lg:py-24">
      <div className="container-wide">
        <header className="mx-auto max-w-[850px] text-center">
          <p className="mx-auto w-fit rounded-full border border-[#164E50] px-5 py-2 text-sm font-medium uppercase tracking-[0.12em] text-[#164E50]">
            Proof placeholders
          </p>
          <h2 className="mt-7 text-[clamp(2.35rem,6.5vw,4.5rem)] font-medium leading-[1.02] tracking-[-0.055em]">
            The proof will live in the pipeline.
          </h2>
          <p className="mx-auto mt-5 max-w-[760px] text-lg leading-8 text-[#465163] sm:text-xl">
            Real project stories will be added only after approval. Until then, this section shows the structure for future Meta Ads breakdowns.
          </p>
        </header>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_360px]">
          <article className="rounded-[18px] border border-[#dfe6df] bg-white p-6 shadow-[0_22px_70px_rgba(22,78,80,0.07)] lg:p-8">
            <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.14em] text-[#164E50]">Meta Ads case study slot</p>
                <h3 className="mt-6 text-[clamp(2rem,5vw,3.2rem)] font-medium leading-[1.08] tracking-[-0.055em]">
                  Verified performance story will be added after audit/project review.
                </h3>
                <p className="mt-5 text-lg leading-8 text-[#465163]">
                  This space is reserved for approved results, project context, and customer-safe details. No fake results are being shown.
                </p>
                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  {["Qualified leads", "Cost/customer", "Revenue signal"].map((item) => (
                    <div key={item} className="rounded-[12px] border border-[#CDEECD] bg-[#fbfdf9] p-4">
                      <p className="text-3xl font-medium tracking-[-0.05em] text-[#164E50]">TBD</p>
                      <p className="mt-2 text-sm leading-5 text-[#465163]">{item}</p>
                    </div>
                  ))}
                </div>
                <ButtonLink href="/#free-audit-form" className="mt-8 min-h-[56px] rounded-md px-7 text-base">
                  Request audit
                  <span className="ml-3" aria-hidden="true">-&gt;</span>
                </ButtonLink>
              </div>
              <div className="relative min-h-[420px] overflow-hidden rounded-[14px] bg-[#EEF8EE] p-5">
                <CreativePattern />
                <div className="absolute bottom-6 left-6 right-6 rounded-[12px] border border-[#CDEECD] bg-white p-5 shadow-[0_18px_45px_rgba(22,78,80,0.14)]">
                  <p className="text-sm font-medium text-[#465163]">Lead quality score</p>
                  <p className="mt-2 text-5xl font-medium tracking-[-0.06em] text-[#164E50]">TBD</p>
                  <div className="mt-4 h-3 rounded-full bg-[#EEF8EE]">
                    <div className="h-full w-2/3 rounded-full bg-[#88DE7B]" />
                  </div>
                </div>
              </div>
            </div>
          </article>

          <div className="space-y-5">
            {resultCards.map((card) => (
              <article key={card.title} className="rounded-[16px] border border-[#dfe6df] bg-white p-5 shadow-[0_18px_55px_rgba(22,78,80,0.06)]">
                <p className="text-sm font-medium uppercase tracking-[0.14em] text-[#164E50]">{card.tag}</p>
                <div className="mt-4 aspect-[16/9] overflow-hidden rounded-[12px] bg-[#EEF8EE]">
                  <CreativePattern />
                </div>
                <h3 className="mt-5 text-xl font-medium tracking-[-0.035em]">{card.title}</h3>
                <p className="mt-3 text-base leading-7 text-[#465163]">{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyChooseSection() {
  return (
    <section className="bg-white py-16 text-[#050505] sm:py-20 lg:py-24">
      <div className="container-wide">
        <header className="mx-auto max-w-[920px] text-center">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#164E50]">Why service businesses choose Done For You</p>
          <h2 className="mt-6 text-[clamp(2.4rem,6.5vw,4.6rem)] font-medium leading-[1.02] tracking-[-0.055em]">
            Why service businesses choose Done For You.
          </h2>
          <p className="mx-auto mt-5 max-w-[720px] text-lg leading-8 text-[#465163] sm:text-xl">
            We become your growth partner, handling strategy, ads, CRM, and optimization so you can focus on serving your clients.
          </p>
        </header>

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div className="space-y-8">
            {whyItems.map((item) => (
              <article key={item.title} className="grid gap-5 border-b border-[#e4e8e5] pb-8 last:border-b-0 lg:grid-cols-[72px_1fr]">
                <span className="grid size-16 place-items-center rounded-full border border-[#dfe6df] bg-[#fbfbf8] text-[#164E50]">
                  <MiniIcon icon={item.icon} />
                </span>
                <div>
                  <h3 className="text-2xl font-medium tracking-[-0.04em]">{item.title}</h3>
                  <p className="mt-3 text-lg leading-8 text-[#465163]">{item.text}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="grid gap-5 xl:grid-cols-[0.75fr_1.25fr]">
            <LeadQualityFeed />
            <div className="space-y-5">
              <CampaignOverview />
              <TeamCard />
            </div>
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <ButtonLink href="/#free-audit-form" className="min-h-[58px] rounded-md px-10 text-lg">
            Book a call
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}

function PlaceholderMetric({ label, centered = false }: { label: string; centered?: boolean }) {
  return (
    <div className={centered ? "text-center" : ""}>
      <p className="text-[clamp(2.5rem,6vw,4rem)] font-medium leading-none tracking-[-0.06em] text-[#164E50]">TBD</p>
      <p className="mt-2 text-base leading-6 text-[#465163]">{label}</p>
    </div>
  );
}

function AdMockup({ index }: { index: number }) {
  const dark = index === 1 || index === 5;
  return (
    <div className={`rounded-[12px] border p-3 ${dark ? "border-[#164E50] bg-[#164E50] text-white" : "border-[#dfe6df] bg-[#fbfbf8] text-[#050505]"}`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className={`grid size-8 place-items-center rounded-full text-xs font-medium ${dark ? "bg-white text-[#164E50]" : "bg-[#EEF8EE] text-[#164E50]"}`}>DFY</span>
          <div>
            <p className="text-sm font-medium">Service ad</p>
            <p className={`text-xs ${dark ? "text-white/60" : "text-[#667085]"}`}>Sponsored</p>
          </div>
        </div>
        <span className={dark ? "text-white/60" : "text-[#667085]"}>...</span>
      </div>
      <div className={`mt-3 grid min-h-[140px] place-items-center rounded-[10px] ${dark ? "bg-white/8" : "bg-white"}`}>
        <CreativePattern />
      </div>
    </div>
  );
}

function FunnelNode({ title, text, icon, tint }: { title: string; text: string; icon: string; tint: string }) {
  return (
    <div className={`flex gap-4 rounded-[12px] border p-5 ${tint === "green" ? "border-[#CDEECD] bg-[#f5fbf2]" : "border-[#CDEECD] bg-[#f3fbfb]"}`}>
      <span className={`grid size-14 shrink-0 place-items-center rounded-[12px] text-white ${tint === "green" ? "bg-[#5ea944]" : "bg-[#164E50]"}`}>
        <MiniIcon icon={icon} />
      </span>
      <div>
        <h4 className="text-lg font-medium tracking-[-0.03em]">{title}</h4>
        <p className="mt-1 text-base leading-6 text-[#465163]">{text}</p>
      </div>
    </div>
  );
}

function CreativeTile({ card, compact = false }: { card: (typeof creativeCards)[number]; compact?: boolean }) {
  return (
    <article className={`group relative aspect-square overflow-hidden rounded-[14px] border border-[#dfe6df] bg-white shadow-[0_18px_55px_rgba(22,78,80,0.08)] ${compact ? "min-h-[210px]" : ""}`}>
      <Image src={card.image} alt={`${card.title} creative placeholder`} fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover opacity-72 transition duration-500 group-hover:scale-[1.02]" />
      <div className="absolute inset-0 bg-gradient-to-br from-[#164E50]/92 via-[#164E50]/70 to-transparent" />
      <div className="absolute inset-0 flex flex-col justify-between p-5 text-white">
        <div>
          <h3 className="max-w-[230px] text-[clamp(1.35rem,3vw,2rem)] font-medium leading-[1.08] tracking-[-0.04em]">{card.title}</h3>
          <span className="mt-5 block h-1 w-10 rounded-full bg-[#88DE7B]" />
        </div>
        <div>
          <ul className="space-y-2">
            {card.bullets.map((bullet) => (
              <li key={bullet} className="flex items-center gap-2 text-sm font-medium">
                <span className="size-1.5 rounded-full bg-[#88DE7B]" />
                {bullet}
              </li>
            ))}
          </ul>
          <p className="mt-4 inline-flex rounded-md bg-[#88DE7B] px-3 py-2 text-xs font-medium uppercase tracking-[0.08em] text-[#164E50]">{card.label}</p>
        </div>
      </div>
    </article>
  );
}

function LogoGroup({ logos, ariaHidden = false }: { logos: string[]; ariaHidden?: boolean }) {
  return (
    <div className="flex min-w-max shrink-0 items-center gap-12 px-6">
      {logos.map((logo, index) => (
        <div key={`${logo}-${index}`} aria-hidden={ariaHidden} className="flex min-w-[160px] items-center gap-3 text-[#7a838f] opacity-65">
          <IconMark />
          <span className="text-base font-medium uppercase tracking-[0.08em]">{logo}</span>
        </div>
      ))}
    </div>
  );
}

function LeadQualityFeed() {
  const leads = ["Roofing services", "HVAC installation", "Clinic enquiry", "Training program"];
  return (
    <article className="rounded-[16px] border border-[#dfe6df] bg-white p-5 shadow-[0_18px_55px_rgba(22,78,80,0.06)]">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium">Lead Quality Feed</h3>
        <span className="inline-flex items-center gap-2 text-sm text-[#164E50]"><span className="size-2 rounded-full bg-[#88DE7B]" /> Live</span>
      </div>
      <div className="mt-5 space-y-3">
        {leads.map((lead, index) => (
          <div key={lead} className="flex items-center gap-3 rounded-[12px] border border-[#e4e8e5] p-3">
            <span className="grid size-11 place-items-center rounded-[10px] bg-[#EEF8EE] text-[#164E50]">
              <MiniIcon icon={index === 0 ? "home" : index === 1 ? "water" : index === 2 ? "plus" : "education"} />
            </span>
            <div className="min-w-0">
              <p className="truncate text-sm font-medium">High-intent lead</p>
              <p className="truncate text-xs text-[#667085]">{lead}</p>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}

function CampaignOverview() {
  return (
    <article className="rounded-[16px] border border-[#dfe6df] bg-white p-5 shadow-[0_18px_55px_rgba(22,78,80,0.06)]">
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-lg font-medium">Campaign overview</h3>
        <span className="rounded-md border border-[#dfe6df] px-3 py-2 text-xs text-[#465163]">Last 30 days</span>
      </div>
      <div className="mt-5 grid gap-3 sm:grid-cols-4">
        {["New leads", "Cost/lead", "Booked jobs", "Revenue"].map((item) => (
          <div key={item} className="rounded-[10px] border border-[#e4e8e5] p-3">
            <p className="text-xs text-[#667085]">{item}</p>
            <p className="mt-2 text-xl font-medium text-[#164E50]">TBD</p>
          </div>
        ))}
      </div>
      <div className="mt-5 h-44 rounded-[12px] bg-[#fbfbf8] p-4">
        <svg viewBox="0 0 520 160" className="h-full w-full" aria-hidden="true">
          {[30, 70, 110].map((y) => <line key={y} x1="10" x2="510" y1={y} y2={y} stroke="#dfe6df" />)}
          <path d="M14 130 C70 88 110 110 158 75 C210 35 246 88 300 54 C352 18 396 62 452 30 C482 14 498 18 510 10" fill="none" stroke="#164E50" strokeWidth="4" strokeLinecap="round" />
          <path d="M14 146 C84 124 132 130 190 104 C244 78 292 98 346 70 C410 42 468 64 510 40" fill="none" stroke="#88DE7B" strokeWidth="4" strokeDasharray="8 10" strokeLinecap="round" />
        </svg>
      </div>
    </article>
  );
}

function TeamCard() {
  const team = ["Account strategist", "CRM manager", "Ad specialist", "Creative strategist"];
  return (
    <article className="rounded-[16px] border border-[#dfe6df] bg-white p-5 shadow-[0_18px_55px_rgba(22,78,80,0.06)]">
      <h3 className="text-lg font-medium">Your DFY team</h3>
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        {team.map((role, index) => (
          <div key={role} className="flex items-center gap-3">
            <span className="grid size-11 place-items-center rounded-full bg-[#EEF8EE] text-sm font-medium text-[#164E50]">{index + 1}</span>
            <div>
              <p className="text-sm font-medium">{role}</p>
              <p className="text-xs text-[#667085]">Placeholder role</p>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}

function CreativePattern() {
  return (
    <div className="relative h-full min-h-[120px] w-full overflow-hidden bg-[radial-gradient(circle_at_70%_25%,rgba(136,222,123,0.36),transparent_24%),linear-gradient(135deg,#EEF8EE,#ffffff)]">
      <div className="absolute left-6 top-6 h-16 w-28 rounded-[10px] bg-white/80 shadow-[0_12px_30px_rgba(22,78,80,0.1)]" />
      <div className="absolute bottom-7 right-7 h-28 w-28 rounded-full border border-[#CDEECD] bg-[#164E50]/10" />
      <div className="absolute bottom-6 left-6 h-3 w-32 rounded-full bg-[#164E50]/28" />
      <div className="absolute bottom-12 left-6 h-3 w-20 rounded-full bg-[#88DE7B]/65" />
    </div>
  );
}

function IconMark() {
  return (
    <span className="grid size-8 shrink-0 place-items-center rounded-full bg-[#EEF8EE] text-[#164E50]" aria-hidden="true">
      <MiniIcon icon="spark" />
    </span>
  );
}

function MiniIcon({ icon }: { icon: string }) {
  const common = {
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  return (
    <svg aria-hidden="true" className="size-5" viewBox="0 0 24 24" fill="none">
      {icon === "meta" ? (
        <path d="M4 14c1.4-5 3.3-7 5.5-7 2 0 3.1 1.6 4.5 4 1.4-2.4 2.6-4 4.4-4 2.1 0 3.6 2.2 3.6 5.2 0 3.3-1.4 4.8-3.2 4.8-1.6 0-2.9-1.1-4.8-4.6-1.8 3.5-3.2 4.6-4.9 4.6C6.9 17 5.5 15.8 4 14Z" {...common} />
      ) : icon === "target" ? (
        <><circle cx="12" cy="12" r="8" {...common} /><circle cx="12" cy="12" r="3" {...common} /><path d="M15 9l4-4m0 0h-3m3 0v3" {...common} /></>
      ) : icon === "filter" ? (
        <path d="M4 5h16l-6 7v5l-4 2v-7L4 5Z" {...common} />
      ) : icon === "message" ? (
        <><path d="M4 5h11a4 4 0 0 1 4 4v3a4 4 0 0 1-4 4H9l-5 3V5Z" {...common} /><path d="m10 9 4 4m0-4-4 4" {...common} /></>
      ) : icon === "database" ? (
        <><ellipse cx="12" cy="6" rx="7" ry="3" {...common} /><path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6M5 12v5c0 1.7 3.1 3 7 3s7-1.3 7-3v-5" {...common} /></>
      ) : icon === "window" || icon === "screen" ? (
        <><rect x="4" y="5" width="16" height="12" rx="2" {...common} /><path d="M8 21h8m-4-4v4" {...common} /></>
      ) : icon === "bars" || icon === "growth" ? (
        <><path d="M4 19h16M7 16v-5m5 5V7m5 9v-8" {...common} /><path d="m14 6 3-3 3 3" {...common} /></>
      ) : icon === "pen" ? (
        <path d="M4 20h4L19 9l-4-4L4 16v4Zm11-15 4 4" {...common} />
      ) : icon === "video" || icon === "play" ? (
        <><rect x="4" y="5" width="16" height="14" rx="2" {...common} /><path d="m10 9 5 3-5 3V9Z" {...common} /></>
      ) : icon === "image" ? (
        <><rect x="4" y="5" width="16" height="14" rx="2" {...common} /><path d="m7 16 4-4 3 3 2-2 3 3" {...common} /></>
      ) : icon === "form" ? (
        <><rect x="6" y="3" width="12" height="18" rx="2" {...common} /><path d="M9 8h6M9 12h6M9 16h3" {...common} /></>
      ) : icon === "grid" ? (
        <><rect x="4" y="4" width="6" height="6" rx="1" {...common} /><rect x="14" y="4" width="6" height="6" rx="1" {...common} /><rect x="4" y="14" width="6" height="6" rx="1" {...common} /><rect x="14" y="14" width="6" height="6" rx="1" {...common} /></>
      ) : icon === "bag" ? (
        <><path d="M6 8h12l-1 12H7L6 8Z" {...common} /><path d="M9 8a3 3 0 0 1 6 0" {...common} /></>
      ) : icon === "refresh" ? (
        <><path d="M20 7v5h-5M4 17v-5h5" {...common} /><path d="M18 12a6 6 0 0 0-10-4L4 12m16 0-4 4a6 6 0 0 1-10-4" {...common} /></>
      ) : icon === "users" ? (
        <><circle cx="9" cy="9" r="3" {...common} /><circle cx="16" cy="10" r="2.5" {...common} /><path d="M3 20c.8-4 3-6 6-6s5.2 2 6 6m2-5c2 .7 3.3 2.3 4 5" {...common} /></>
      ) : icon === "megaphone" ? (
        <><path d="M4 13h3l10 4V7L7 11H4v2Z" {...common} /><path d="M7 13v5" {...common} /></>
      ) : icon === "user" ? (
        <><circle cx="12" cy="8" r="4" {...common} /><path d="M5 21a7 7 0 0 1 14 0" {...common} /></>
      ) : icon === "money" ? (
        <><circle cx="12" cy="12" r="8" {...common} /><path d="M12 8v8m-2-2.5c.5.8 1.4 1.2 2.5 1.1 1.2 0 2-.6 2-1.6s-.8-1.4-2.4-1.8C10.7 10.9 10 10.3 10 9.4s.8-1.6 2-1.7c1-.1 1.8.2 2.4.9" {...common} /></>
      ) : icon === "home" ? (
        <path d="M4 11 12 4l8 7v9H6v-9Zm6 9v-6h4v6" {...common} />
      ) : icon === "water" ? (
        <path d="M12 3s6 6.2 6 11a6 6 0 0 1-12 0c0-4.8 6-11 6-11Z" {...common} />
      ) : icon === "plus" ? (
        <path d="M12 5v14M5 12h14" {...common} />
      ) : icon === "education" ? (
        <><path d="M4 9 12 5l8 4-8 4-8-4Z" {...common} /><path d="M7 11v5c2.2 1.7 7.8 1.7 10 0v-5" {...common} /></>
      ) : icon === "check" ? (
        <path d="M20 6 9 17l-5-5" {...common} />
      ) : (
        <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z" {...common} />
      )}
    </svg>
  );
}
