import type { ReactNode } from "react";
import { ButtonLink } from "@/components/ButtonLink";

type HeroProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  microProof?: string;
  primaryCta?: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
  children?: ReactNode;
};

export function Hero({
  eyebrow,
  title,
  subtitle,
  microProof,
  primaryCta,
  secondaryCta,
  children,
}: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-white text-[#050505]">
      <div className="container-wide relative grid items-center gap-10 py-12 sm:min-h-[680px] sm:gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:py-14">
        <div className="max-w-[660px]">
          {eyebrow && (
            <p className="mb-6 inline-flex rounded-full bg-[#EEF8EE] px-4 py-2 text-xs font-medium uppercase tracking-[0.16em] text-[#164E50] sm:mb-9 sm:px-5 sm:py-2.5 sm:text-sm">
              {eyebrow}
            </p>
          )}
          <h1 className="text-[clamp(2.65rem,11vw,4.65rem)] font-medium leading-[1.08] tracking-[-0.035em]">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-7 max-w-[620px] text-lg font-normal leading-[1.65] tracking-[-0.01em] text-[#5f6877] sm:mt-9 sm:text-xl sm:leading-[1.75]">
              {subtitle}
            </p>
          )}
          {(primaryCta || secondaryCta) && (
            <div className="mt-8 flex flex-col gap-3 sm:mt-12 sm:flex-row sm:gap-4">
              {primaryCta && <ButtonLink href={primaryCta.href} className="min-h-[58px] rounded-md px-7 text-base sm:min-h-[70px] sm:px-9 sm:text-lg">{primaryCta.label}</ButtonLink>}
              {secondaryCta && (
                <ButtonLink href={secondaryCta.href} variant="secondary" className="min-h-[58px] rounded-md px-7 text-base sm:min-h-[70px] sm:px-9 sm:text-lg">
                  {secondaryCta.label}
                </ButtonLink>
              )}
            </div>
          )}
          {microProof && (
            <p className="mt-8 max-w-2xl text-sm font-semibold leading-6 text-[#5f6877]">
              {microProof}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}
