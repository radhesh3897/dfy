import { ButtonLink } from "@/components/ButtonLink";

export function HomepageCTASection({
  headline,
  subheadline,
  cta,
  tone = "light",
}: {
  headline: string;
  subheadline: string;
  cta: string;
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";

  return (
    <section className={dark ? "bg-[#164E50] py-16 text-white sm:py-20" : "bg-white py-14 text-[#050505] sm:py-18"}>
      <div
        className={`container-wide flex flex-col items-start justify-between gap-8 rounded-[18px] border p-7 shadow-[0_22px_70px_rgba(15,23,42,0.06)] md:flex-row md:items-center md:p-9 ${
          dark
            ? "border-white/12 bg-[#103D3F]"
            : "border-[#dfe6df] bg-[#fbfbf8]"
        }`}
      >
        <div className="max-w-[780px]">
          <h2 className="text-[clamp(2.1rem,6vw,3.7rem)] font-medium leading-[1.02] tracking-[-0.055em]">
            {headline}
          </h2>
          <p className={`mt-5 text-lg leading-8 ${dark ? "text-white/72" : "text-[#465163]"}`}>
            {subheadline}
          </p>
        </div>
        <ButtonLink
          href="/#free-audit-form"
          variant={dark ? "light" : "primary"}
          className="min-h-[58px] shrink-0 rounded-md px-8 text-base sm:text-lg"
        >
          {cta}
        </ButtonLink>
      </div>
    </section>
  );
}
