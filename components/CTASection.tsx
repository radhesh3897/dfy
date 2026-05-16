import { ButtonLink } from "@/components/ButtonLink";

type CTASectionProps = {
  title: string;
  text?: string;
  buttonLabel: string;
  buttonHref: string;
};

export function CTASection({ title, text, buttonLabel, buttonHref }: CTASectionProps) {
  return (
    <section className="bg-[#164E50] py-20 text-white sm:py-24">
      <div className="container-wide flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
        <div className="max-w-3xl">
          <p className="eyebrow eyebrow-accent">Next step</p>
          <h2 className="mt-4 text-4xl font-black leading-[0.98] tracking-normal sm:text-6xl">{title}</h2>
          {text && <p className="mt-5 max-w-2xl text-lg leading-8 text-neutral-300">{text}</p>}
        </div>
        <ButtonLink href={buttonHref} variant="primary">{buttonLabel}</ButtonLink>
      </div>
    </section>
  );
}
