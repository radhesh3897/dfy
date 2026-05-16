import type { ReactNode } from "react";
import { SectionHeader } from "@/components/SectionHeader";

type SectionProps = {
  eyebrow?: string;
  title?: string;
  intro?: string;
  children: ReactNode;
  tone?: "light" | "dark" | "white";
  className?: string;
};

export function Section({
  eyebrow,
  title,
  intro,
  children,
  tone = "light",
  className = "",
}: SectionProps) {
  const tones = {
    light: "bg-[#f6f5f1] text-[#050505]",
    white: "bg-white text-neutral-950",
    dark: "bg-[#164E50] text-white",
  };

  return (
    <section className={`${tones[tone]} py-20 sm:py-28 ${className}`}>
      <div className="container-wide">
        {(eyebrow || title || intro) && (
          <SectionHeader eyebrow={eyebrow} title={title} intro={intro} tone={tone} />
        )}
        <div className={title || intro ? "mt-10" : ""}>{children}</div>
      </div>
    </section>
  );
}
