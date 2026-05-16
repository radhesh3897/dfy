import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";

const creativeCards = [
  {
    id: "nmims-career",
    title: "Career progression ad creative",
    src: "/creative/in-house-creative-01.png",
  },
  {
    id: "caseease-decode",
    title: "Legal intelligence demo ad creative",
    src: "/creative/in-house-creative-02.png",
  },
  {
    id: "caseease-clarity",
    title: "Strategic reasoning ad creative",
    src: "/creative/in-house-creative-03.png",
  },
  {
    id: "nmims-reporting",
    title: "Online MBA lead ad creative",
    src: "/creative/in-house-creative-04.png",
  },
  {
    id: "caseease-faster",
    title: "Case analysis product ad creative",
    src: "/creative/in-house-creative-05.png",
  },
  {
    id: "nmims-admissions",
    title: "Admissions open ad creative",
    src: "/creative/in-house-creative-06.png",
  },
  {
    id: "caseease-begins",
    title: "IBC case research ad creative",
    src: "/creative/in-house-creative-07.png",
  },
  {
    id: "recent-edtech-square",
    title: "Recent education ad creative",
    src: "/creative/in-house-creative-08.webp",
  },
  {
    id: "leadership-static",
    title: "Leadership transition ad creative",
    src: "/creative/in-house-creative-09.webp",
  },
  {
    id: "execution-leadership",
    title: "Execution to leadership ad creative",
    src: "/creative/in-house-creative-10.webp",
  },
  {
    id: "career-path-01",
    title: "Career path ad creative",
    src: "/creative/in-house-creative-11.webp",
  },
  {
    id: "career-path-02",
    title: "MBA career ad creative",
    src: "/creative/in-house-creative-12.webp",
  },
  {
    id: "career-path-03",
    title: "Professional growth ad creative",
    src: "/creative/in-house-creative-13.webp",
  },
  {
    id: "career-path-04",
    title: "Admissions funnel ad creative",
    src: "/creative/in-house-creative-14.webp",
  },
];

const mobileCreativeRows = [
  [creativeCards[0], creativeCards[1], creativeCards[2], creativeCards[3], creativeCards[4]],
  [creativeCards[5], creativeCards[6], creativeCards[7], creativeCards[8], creativeCards[9]],
];

export function InHouseCreativeSection() {
  const marqueeCards = [...creativeCards, ...creativeCards];

  return (
    <section className="overflow-x-clip bg-[#fbfbf8] py-16 text-[#050505] sm:py-20 lg:py-24">
      <div className="container-wide text-center">
        <p className="text-sm font-medium uppercase tracking-[0.22em] text-[#164E50]">
          In-House Creative
        </p>
        <h2 className="mx-auto mt-6 max-w-[980px] text-[clamp(2.5rem,7vw,5rem)] font-medium leading-[0.98] tracking-[-0.06em]">
          Ads built for real buyers, not award shows.
        </h2>
        <p className="mx-auto mt-6 max-w-[840px] text-lg leading-8 tracking-[-0.01em] text-[#465163] sm:text-xl sm:leading-9">
          Every creative we run calls out a specific person: an EdTech founder, a gym owner,
          a clinic head. That&apos;s not a style choice. It&apos;s how we tell Meta&apos;s algorithm
          exactly who to find.
        </p>
      </div>

      <div className="relative mt-10 sm:mt-14">
        <div className="space-y-4 sm:hidden">
          {mobileCreativeRows.map((row, rowIndex) => (
            <div key={`mobile-row-${rowIndex}`} className="relative overflow-hidden">
              <div className="creative-marquee-fade pointer-events-none absolute inset-y-0 left-0 z-10 w-12" />
              <div className="creative-marquee-fade pointer-events-none absolute inset-y-0 right-0 z-10 w-12 rotate-180" />
              <div
                className={`flex w-max gap-4 px-5 ${
                  rowIndex === 0
                    ? "creative-marquee-track-mobile-right"
                    : "creative-marquee-track-mobile"
                }`}
              >
                {[...row, ...row].map((card, index) => (
                  <CreativeCard key={`${card.id}-mobile-${rowIndex}-${index}`} card={card} size="mobile" />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="relative hidden overflow-hidden sm:block">
          <div className="creative-marquee-fade pointer-events-none absolute inset-y-0 left-0 z-10 w-28 lg:w-40" />
          <div className="creative-marquee-fade pointer-events-none absolute inset-y-0 right-0 z-10 w-28 rotate-180 lg:w-40" />

          <div className="creative-marquee-track flex w-max gap-7 px-7 lg:gap-8">
            {marqueeCards.map((card, index) => (
              <CreativeCard key={`${card.id}-${index}`} card={card} size="desktop" />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-12 flex justify-center sm:mt-14">
        <ButtonLink
          href="#results"
          variant="primary"
          className="min-h-[58px] rounded-md px-9 text-base sm:px-10 sm:text-lg"
        >
          See how we build creatives -&gt;
        </ButtonLink>
      </div>
    </section>
  );
}

function CreativeCard({
  card,
  size,
}: {
  card: (typeof creativeCards)[number];
  size: "mobile" | "desktop";
}) {
  return (
    <article
      className={`group relative aspect-square shrink-0 overflow-hidden border border-[#dfe6df] bg-white shadow-[0_18px_52px_rgba(15,23,42,0.08)] ${
        size === "mobile"
          ? "w-[42vw] min-w-[148px] max-w-[168px] rounded-[14px]"
          : "w-[310px] rounded-[18px] lg:w-[360px]"
      }`}
    >
      <Image
        src={card.src}
        alt={card.title}
        fill
        sizes={size === "mobile" ? "42vw" : "(max-width: 1024px) 310px, 360px"}
        className="object-cover transition duration-500 group-hover:scale-[1.02]"
      />
      <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/20" />
    </article>
  );
}
