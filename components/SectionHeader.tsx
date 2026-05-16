type SectionHeaderProps = {
  eyebrow?: string;
  title?: string;
  intro?: string;
  tone?: "light" | "dark" | "white";
  align?: "left" | "center";
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  intro,
  tone = "light",
  align = "left",
  className = "",
}: SectionHeaderProps) {
  const centered = align === "center";
  const introTone = tone === "dark" ? "text-white/72" : "text-[#4b4b4b]";
  const eyebrowTone = tone === "dark" ? "eyebrow-accent" : "eyebrow-default";

  return (
    <div className={`${centered ? "mx-auto text-center" : ""} max-w-4xl ${className}`}>
      {eyebrow && <p className={`eyebrow ${eyebrowTone}`}>{eyebrow}</p>}
      {title && (
        <h2 className="mt-4 text-4xl font-black leading-[0.98] tracking-normal sm:text-5xl lg:text-6xl">
          {title}
        </h2>
      )}
      {intro && (
        <p className={`mt-6 max-w-3xl text-lg leading-8 sm:text-xl ${centered ? "mx-auto" : ""} ${introTone}`}>
          {intro}
        </p>
      )}
    </div>
  );
}
