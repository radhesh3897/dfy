import type { ReactNode } from "react";
import { ButtonLink } from "@/components/ButtonLink";

const audienceCards = ["EdTech", "Gyms", "Clinics", "Travel Agencies", "B2B Services", "Local Services"];

const roleRows = [
  {
    title: "Performance Marketing Lead",
    text: "Owns strategy, testing and results",
    icon: "target",
  },
  {
    title: "Lead Strategist",
    text: "Defines offers, ICP and funnel flow",
    icon: "users",
  },
  {
    title: "Creative Strategist",
    text: "Concepts, hooks and creative testing",
    icon: "idea",
  },
  {
    title: "Copywriter",
    text: "Messaging, ads and pages that convert",
    icon: "pen",
  },
  {
    title: "Tracking Specialist",
    text: "Tracking, reporting and attribution",
    icon: "chart",
  },
];

const checklist = [
  "Messaging and positioning",
  "Funnel improvement",
  "Qualified lead focus",
];

const benefits = [
  {
    title: "Structured systems & delivery.",
    text: "Clear processes, weekly reviews, and visibility into what is being tested and improved.",
    icon: "system",
  },
  {
    title: "Creative built for better leads.",
    text: "Hooks, angles, and messaging are created around buyer intent, not just attention.",
    icon: "creative",
  },
  {
    title: "Conversions that actually matter.",
    text: "We optimize for qualified leads, sales-ready conversations, and real CAC visibility.",
    icon: "growth",
  },
];

export function WhyChooseDoneForYouSection() {
  return (
    <section className="bg-white pt-16 pb-4 text-[#050505] sm:pt-20 sm:pb-6 lg:pt-24 lg:pb-8">
      <div className="container-wide">
        <header className="max-w-[760px]">
          <h2 className="text-[clamp(2.45rem,7vw,4.6rem)] font-medium leading-[0.98] tracking-[-0.055em]">
            Why service businesses choose Done For You.
          </h2>
          <p className="mt-6 max-w-[720px] text-lg leading-8 tracking-[-0.01em] text-[#465163] sm:text-xl sm:leading-9">
            We&apos;re not a generic lead gen agency. We build client acquisition systems
            for businesses that sell something worth selling.
          </p>
          <span className="mt-6 block h-1 w-16 rounded-full bg-[#88DE7B]" aria-hidden="true" />
        </header>

        <div className="mt-12 space-y-10 lg:mt-14 lg:space-y-8">
          <FeatureRow
            icon="audience"
            title="Built for service businesses with real sales conversations."
            copy="We work with EdTech companies, gyms, clinics, travel agencies, and service businesses that need qualified buyers, booked calls, and revenue clarity, not just more form fills."
          >
            <AudienceVisual />
          </FeatureRow>

          <FeatureRow
            icon="shield"
            title="Your client acquisition system is in safe hands."
            copy="Your account is handled with strategy, creative testing, funnel execution, tracking, and weekly improvement loops tied back to sales outcomes."
          >
            <WorkflowVisual />
          </FeatureRow>
        </div>

        <div className="mt-14 grid gap-8 border-y border-[#e4e8e5] py-10 md:grid-cols-3 md:gap-0 md:divide-x md:divide-[#e4e8e5] lg:mt-16">
          {benefits.map((benefit) => (
            <article key={benefit.title} className="flex gap-5 md:px-8 md:first:pl-0 md:last:pr-0">
              <IconBadge icon={benefit.icon} className="mt-1 size-16 shrink-0" />
              <div>
                <h3 className="max-w-[260px] text-[1.45rem] font-medium leading-[1.12] tracking-[-0.04em]">
                  {benefit.title}
                </h3>
                <p className="mt-5 text-base leading-7 text-[#465163]">{benefit.text}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <ButtonLink
            href="/#free-audit-form"
            variant="primary"
            className="min-h-[58px] rounded-md px-10 text-lg"
          >
            Book a Call
            <span className="ml-4" aria-hidden="true">
              -&gt;
            </span>
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}

function FeatureRow({
  icon,
  title,
  copy,
  children,
}: {
  icon: string;
  title: string;
  copy: string;
  children: ReactNode;
}) {
  return (
    <div className="grid min-w-0 items-center gap-8 lg:grid-cols-[0.82fr_1.55fr] lg:gap-16">
      <div className="max-w-[390px]">
        <IconBadge icon={icon} className="size-16" />
        <h3 className="mt-7 text-[clamp(2rem,6vw,3.05rem)] font-medium leading-[1.04] tracking-[-0.055em]">
          {title}
        </h3>
        <p className="mt-6 text-lg leading-8 text-[#465163]">{copy}</p>
      </div>
      <div className="min-w-0 max-w-full">{children}</div>
    </div>
  );
}

function AudienceVisual() {
  return (
    <div className="max-w-full overflow-hidden rounded-[16px] border border-[#dfe6df] bg-white p-4 shadow-[0_22px_70px_rgba(22,78,80,0.08)] sm:p-6">
      <div className="flex gap-2 px-2 pb-5">
        <span className="size-2.5 rounded-full bg-[#164E50]" />
        <span className="size-2.5 rounded-full bg-[#88DE7B]" />
        <span className="size-2.5 rounded-full bg-[#a7adb5]" />
      </div>
      <div className="rounded-[12px] bg-[#f8fbf8] p-5 sm:p-9">
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {audienceCards.map((item, index) => (
            <article
              key={item}
              className={`relative min-h-[122px] rounded-[14px] border p-5 shadow-[0_14px_35px_rgba(15,23,42,0.07)] ${
                index === 2
                  ? "border-[#164E50] bg-[#164E50] text-white"
                  : "border-[#dfe6df] bg-white text-[#111827]"
              }`}
            >
              {index === 2 ? (
                <span className="absolute -right-3 -top-3 grid size-9 place-items-center rounded-full border-4 border-white bg-[#88DE7B] text-[#164E50]">
                  <CheckIcon />
                </span>
              ) : null}
              <VisualIcon name={item} active={index === 2} />
              <p className="mt-4 text-lg font-medium tracking-[-0.02em]">{item}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

function WorkflowVisual() {
  return (
    <div className="relative max-w-full overflow-hidden rounded-[16px] border border-[#dfe6df] bg-white p-4 shadow-[0_22px_70px_rgba(22,78,80,0.08)] sm:p-7">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_32%,rgba(136,222,123,0.13),transparent_28%),radial-gradient(#CDEECD_1px,transparent_1px)] bg-[size:auto,18px_18px] opacity-80" />
      <div className="relative grid gap-6 lg:grid-cols-[1fr_250px] lg:items-center">
        <div className="space-y-3">
          {roleRows.map((role, index) => (
            <article
              key={role.title}
              className="flex items-center gap-4 rounded-[12px] border border-[#dfe6df] bg-white/92 p-3 shadow-[0_12px_30px_rgba(15,23,42,0.05)]"
            >
              <span className="grid size-12 shrink-0 place-items-center rounded-full bg-[#EEF8EE] text-sm font-medium text-[#164E50]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="min-w-0 flex-1">
                <h4 className="truncate text-base font-medium tracking-[-0.02em] text-[#111827]">
                  {role.title}
                </h4>
                <p className="mt-1 truncate text-sm text-[#667085]">{role.text}</p>
              </div>
              <span className="grid size-11 shrink-0 place-items-center rounded-[10px] bg-[#EEF8EE] text-[#164E50]">
                <MiniIcon icon={role.icon} />
              </span>
            </article>
          ))}
        </div>

        <div className="rounded-[14px] border border-[#dfe6df] bg-white p-5 shadow-[0_20px_50px_rgba(15,23,42,0.1)]">
          <ul className="space-y-5">
            {checklist.map((item) => (
              <li key={item} className="flex gap-3 text-sm font-medium leading-6 text-[#465163]">
                <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full border border-[#88DE7B] text-[#164E50]">
                  <CheckIcon />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function IconBadge({ icon, className = "" }: { icon: string; className?: string }) {
  return (
    <span className={`grid place-items-center rounded-[14px] bg-[#EEF8EE] text-[#164E50] ${className}`}>
      <MiniIcon icon={icon} />
    </span>
  );
}

function VisualIcon({ name, active }: { name: string; active: boolean }) {
  return (
    <span className={active ? "text-white" : "text-[#164E50]"}>
      <svg aria-hidden="true" className="size-9" viewBox="0 0 32 32" fill="none">
        {name === "EdTech" ? (
          <path d="M5 11 16 6l11 5-11 5-11-5Zm5 4v5c2 2 10 2 12 0v-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        ) : name === "SaaS" ? (
          <path d="M10 22h12a5 5 0 0 0 0-10 7 7 0 0 0-13.5 2A4 4 0 0 0 10 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        ) : name === "Coaching" ? (
          <path d="M12 14a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm-7 12c1-5 4-8 7-8 2 0 4 .8 5.2 2.2M23 14l1.4 3 3.2.4-2.3 2.2.6 3.2-2.9-1.6-2.9 1.6.6-3.2-2.3-2.2 3.2-.4L23 14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        ) : name === "Finance" ? (
          <path d="M6 13h20M8 13v10m6-10v10m6-10v10m6 0H6m10-18 11 6H5l11-6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        ) : name === "B2B Services" ? (
          <path d="M9 12V8h14v4m-17 2h20v12H6V14Zm7 0v-2h6v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        ) : (
          <path d="M6 7h20v15H6V7Zm5 20h10m-5-5v5m-3-12 2 2 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        )}
      </svg>
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
    <svg aria-hidden="true" className="size-7" viewBox="0 0 32 32" fill="none">
      {icon === "audience" ? (
        <>
          <path d="M12 16a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm-8 9c1-5 4-7 8-7s7 2 8 7" {...common} />
          <path d="M23 15a4 4 0 1 0-1.5-7.7M22 19c3 .4 5.2 2.3 6 6" {...common} />
        </>
      ) : icon === "shield" ? (
        <path d="M16 4 26 8v7c0 6-4 10-10 13C10 25 6 21 6 15V8l10-4Zm-4 12 3 3 6-7" {...common} />
      ) : icon === "target" ? (
        <path d="M16 27a11 11 0 1 0-11-11 11 11 0 0 0 11 11Zm0-5a6 6 0 1 0-6-6 6 6 0 0 0 6 6Zm0-5a1 1 0 1 0-1-1 1 1 0 0 0 1 1Z" {...common} />
      ) : icon === "users" ? (
        <path d="M12 16a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm-8 9c1-5 4-7 8-7s7 2 8 7m3-10a4 4 0 1 0-1.5-7.7M22 19c3 .4 5.2 2.3 6 6" {...common} />
      ) : icon === "idea" ? (
        <path d="M11 19c-2-1.8-3-4-3-6a8 8 0 1 1 16 0c0 2-1 4.2-3 6l-1.5 2.5h-7L11 19Zm2 7h6m-5-4h4" {...common} />
      ) : icon === "pen" || icon === "creative" ? (
        <path d="M6 24 8 17 21 4l7 7-13 13-7 2Zm15-20 7 7M8 17l7 7" {...common} />
      ) : icon === "chart" || icon === "growth" ? (
        <path d="M6 24h20M8 20l5-5 4 4 8-10m0 0v6m0-6h-6" {...common} />
      ) : (
        <path d="M8 10h11m-11 6h16m-16 6h8m9-12 2 2-8 8-3 1 1-3 8-8Z" {...common} />
      )}
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg aria-hidden="true" className="size-4" viewBox="0 0 16 16" fill="none">
      <path d="m3 8 3 3 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
