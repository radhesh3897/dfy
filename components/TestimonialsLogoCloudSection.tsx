"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

const testimonials = [
  {
    id: "kritika-gupta",
    quote:
      "DFY helped us improve lead quality, not just lead volume. We started getting more relevant enquiries, stronger sales conversations, and a much clearer path to revenue. Their process is structured, reliable, and built for real growth.",
    name: "Kritika Gupta",
    role: "Talent Z",
    avatar: "/avatars/kritika-gupta.jpg",
    logo: {
      name: "Talent Z",
      src: "/logos/processed/talentz-logo-web-256.png",
      className: "max-h-16 sm:max-h-16",
    },
  },
  {
    id: "manish-agrawal",
    quote:
      "What stood out most was the quality of the system DFY built for us. Lead quality improved, wasted spend reduced, and the revenue impact became much more visible. Their processes and execution are phenomenal.",
    name: "Manish Agrawal",
    role: "Owner, NMIMS",
    avatar: "/avatars/manish-agrawal.jpg",
    logo: {
      name: "NMIMS",
      src: "/logos/processed/narsee-monjee-institute-of-management-studies-logo-dfy-gray-web-256.png",
      className: "max-h-[72px] sm:max-h-[74px]",
    },
  },
  {
    id: "raja-sharma",
    quote:
      "DFY brought real structure to our acquisition process. We started seeing better-quality leads, more serious prospects, and stronger revenue outcomes. The team is process-driven, sharp, and excellent at what they do.",
    name: "Raja Sharma",
    role: "Owner, CaseEase",
    avatar: "/avatars/raja-sharma.jpg",
    logo: {
      name: "CaseEase",
      src: "/logos/processed/caseease-logo-dfy-gray-web-256.png",
      className: "max-h-[72px] sm:max-h-[74px]",
    },
  },
];

const logos = [
  {
    name: "Client logo 01",
    src: "/logos/processed/326783019-703457867948060-239923304616414274-n-dfy-gray-web-256.png",
  },
  {
    name: "Client logo 02",
    src: "/logos/processed/image-1-dfy-gray-web-256.png",
  },
  {
    name: "NMIMS",
    src: "/logos/processed/narsee-monjee-institute-of-management-studies-logo-dfy-gray-web-256.png",
  },
  {
    name: "Reliance Animation Academy",
    src: "/logos/processed/reliance-animation-logo-dfy-gray-web-256.png",
  },
  {
    name: "Client logo 03",
    src: "/logos/processed/untitled-design-1-dfy-gray-web-256.png",
  },
  {
    name: "Hobfit",
    src: "/logos/processed/hobfit-logo-web-256.png",
  },
  {
    name: "Muffynn",
    src: "/logos/processed/muffynn-logo-web-256.png",
  },
  {
    name: "Stock Ladder",
    src: "/logos/processed/stock-ladder-logo-web-256.png",
  },
  {
    name: "Talent Z",
    src: "/logos/processed/talentz-logo-web-256.png",
  },
];

type CloudLogo = (typeof logos)[number];

const logoRows = [
  { id: "row-1", direction: "left", speed: "normal", offset: 0 },
  { id: "row-2", direction: "right", speed: "normal", offset: 10 },
  { id: "row-3", direction: "left", speed: "slow", offset: 20 },
  { id: "row-4", direction: "right", speed: "slow", offset: 30 },
  { id: "row-5", direction: "left", speed: "slower", offset: 38 },
];

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function getRotatedLogos(offset: number) {
  const normalizedOffset = offset % logos.length;
  return [...logos.slice(normalizedOffset), ...logos.slice(0, normalizedOffset)];
}

export function TestimonialsLogoCloudSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});
  const activeTestimonial = testimonials[activeIndex];

  const rows = useMemo(
    () =>
      logoRows.map((row) => ({
        ...row,
        logos: getRotatedLogos(row.offset),
      })),
    [],
  );

  function markImageFailed(key: string) {
    setFailedImages((current) => ({ ...current, [key]: true }));
  }

  return (
    <section id="testimonials-logo-cloud" className="scroll-mt-28 overflow-x-clip bg-[#EEF8EE] py-14 sm:py-20 lg:py-24">
      <div className="container-wide">
        <h2 className="mx-auto max-w-[800px] text-center text-[clamp(2.1rem,7vw,3.85rem)] font-medium leading-[1.05] tracking-[-0.045em] text-[#164E50]">
          What business owners say about working with DFY.
        </h2>

        <div className="mx-auto mt-8 w-full max-w-[900px] overflow-hidden rounded-[16px] border border-[#CDEECD] bg-white shadow-[0_22px_70px_rgba(22,78,80,0.08)] sm:mt-10">
          <div
            key={activeTestimonial.id}
            id="testimonial-panel"
            role="tabpanel"
            aria-labelledby={`tab-${activeTestimonial.id}`}
            tabIndex={0}
            className="tab-panel-enter px-5 py-9 text-center outline-none sm:px-10 sm:py-12 lg:px-16 lg:py-14"
          >
            <blockquote className="mx-auto max-w-[730px] text-[clamp(1.35rem,5vw,2rem)] font-normal leading-[1.32] tracking-[-0.035em] text-[#164E50]">
              &quot;{activeTestimonial.quote}&quot;
            </blockquote>

            <div className="mt-8 flex flex-col items-center">
              <div className="grid size-16 place-items-center overflow-hidden rounded-full border border-[#CDEECD] bg-[#EEF8EE] text-sm font-medium text-[#164E50] shadow-[0_10px_22px_rgba(22,78,80,0.12)] sm:size-[72px]">
                {!failedImages[`avatar-${activeTestimonial.id}`] ? (
                  <Image
                    src={activeTestimonial.avatar}
                    alt={`${activeTestimonial.name} profile photo`}
                    width={72}
                    height={72}
                    className="h-full w-full object-cover"
                    onError={() => markImageFailed(`avatar-${activeTestimonial.id}`)}
                  />
                ) : (
                  initials(activeTestimonial.name)
                )}
              </div>
              <p className="mt-4 text-base font-medium text-[#164E50] sm:text-lg">
                {activeTestimonial.name}
              </p>
              <p className="mt-1 text-sm leading-6 text-[#667085] sm:text-base">
                {activeTestimonial.role}
              </p>
            </div>
          </div>

          <div
            className="grid grid-cols-3 border-t border-[#CDEECD]"
            role="tablist"
            aria-label="Testimonial brands"
          >
            {testimonials.map((testimonial, index) => {
              const isActive = activeIndex === index;

              return (
                <button
                  key={testimonial.id}
                  id={`tab-${testimonial.id}`}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls="testimonial-panel"
                  aria-label={`Show testimonial from ${testimonial.name}`}
                  onClick={() => setActiveIndex(index)}
                  className={`min-w-0 border-r border-[#CDEECD] px-1 py-3 transition last:border-r-0 sm:px-5 sm:py-5 ${
                    isActive
                      ? "bg-white text-[#164E50] shadow-[inset_0_2px_0_#164E50]"
                      : "bg-[#fbfdff] text-[#8a92a3] hover:bg-white hover:text-[#164E50]"
                  }`}
                >
                  <span className="mx-auto flex min-w-0 items-center justify-center">
                    <span className="flex h-14 w-full items-center justify-center sm:h-16" aria-hidden="true">
                      {!failedImages[`logo-${testimonial.id}`] ? (
                        <Image
                          src={testimonial.logo.src}
                          alt=""
                          width={344}
                          height={120}
                          className={`h-auto w-[min(96%,260px)] object-contain transition sm:w-[min(88%,240px)] ${testimonial.logo.className} ${
                            isActive ? "opacity-90" : "opacity-62"
                          }`}
                          onError={() => markImageFailed(`logo-${testimonial.id}`)}
                        />
                      ) : null}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="relative mt-4 overflow-visible bg-white/30 py-6 pb-14 sm:mt-8 md:h-[520px] md:overflow-hidden md:py-0 lg:mt-10 lg:h-[560px]">
        <div className="logo-cloud-fade pointer-events-none absolute inset-0 z-10" />
        <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-24 bg-gradient-to-b from-[#EEF8EE] to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-24 bg-gradient-to-t from-[#EEF8EE] to-transparent" />

        <div className="relative z-0 space-y-2 sm:space-y-3 md:absolute md:inset-x-0 md:top-0 md:space-y-4">
          {rows.map((row, rowIndex) => (
            <LogoMarqueeRow
              key={row.id}
              logos={row.logos}
              direction={row.direction}
              speed={row.speed}
              className={rowIndex > 2 ? "hidden md:block" : ""}
            />
          ))}
        </div>

        <div className="relative z-20 mt-8 flex w-full items-start justify-center px-5 md:absolute md:inset-0 md:mt-0 md:pt-[112px] lg:pt-[128px]">
          <article className="w-full max-w-[450px] rounded-[12px] border border-white/10 bg-[#164E50] p-7 text-white shadow-[0_26px_80px_rgba(7,19,41,0.3)] sm:p-9">
            <h3 className="text-[clamp(1.9rem,8vw,2.65rem)] font-medium leading-[1.05] tracking-[-0.04em]">
              Ready to make paid ads actually work for your business?
            </h3>
            <p className="mt-5 text-base leading-7 text-white/72 sm:text-lg sm:leading-8">
              Book a free 30-minute audit. We&apos;ll show you exactly where your ad spend is leaking and what it would take to fix it.
            </p>
            <Link
              href="/#free-audit-form"
              className="brand-gradient mt-7 inline-flex w-full items-center justify-center gap-3 rounded-[7px] px-6 py-4 text-base font-medium text-white shadow-[0_18px_36px_rgba(136,222,123,0.26)] transition hover:translate-y-[-1px] sm:w-auto"
            >
              Book a Call
              <span aria-hidden="true">-&gt;</span>
            </Link>
            <a
              href="/b2b-lead-generation-agency"
              className="mt-7 inline-block border-b border-[#88DE7B] pb-1 text-sm font-medium text-[#CDEECD] transition hover:text-white"
            >
              See how Done For You can help.
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}

function LogoMarqueeRow({
  logos: rowLogos,
  direction,
  speed,
  className = "",
}: {
  logos: CloudLogo[];
  direction: string;
  speed: string;
  className?: string;
}) {
  const animationClass =
    direction === "right"
      ? speed === "slow"
        ? "logo-marquee-right-slow"
        : "logo-marquee-right"
      : speed === "slower"
        ? "logo-marquee-left-slower"
        : speed === "slow"
          ? "logo-marquee-left-slow"
          : "logo-marquee-left";

  return (
    <div className={`w-full overflow-hidden ${className}`}>
      <div className={`logo-marquee-track ${animationClass}`}>
        <LogoGroup logos={rowLogos} />
        <LogoGroup logos={rowLogos} ariaHidden />
      </div>
    </div>
  );
}

function LogoGroup({
  logos: groupLogos,
  ariaHidden = false,
}: {
  logos: CloudLogo[];
  ariaHidden?: boolean;
}) {
  return (
    <div className="flex min-w-max shrink-0 items-center gap-3 px-2 sm:gap-5 sm:px-3 lg:gap-6">
      {groupLogos.map((logo, index) => (
        <div
          key={`${logo.name}-${index}`}
          aria-hidden={ariaHidden}
          className="flex h-16 w-32 shrink-0 items-center justify-center opacity-70 sm:h-20 sm:w-40 lg:h-20 lg:w-44"
        >
          <Image
            src={logo.src}
            alt={`${logo.name} logo`}
            width={160}
            height={80}
            className="max-h-16 w-auto max-w-full object-contain sm:max-h-20"
          />
        </div>
      ))}
    </div>
  );
}
