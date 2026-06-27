import Image from "next/image";
import Link from "next/link";
import { getCaseStudy } from "@/data/caseStudies";

// Compact proof band: drop into a service page (as the second section) to show
// one real client result with metrics + a screenshot + a link to the full case
// study. Internal link + crawlable metrics help SEO/AEO; the full case study
// page carries the Article/Review schema.
export function CaseStudyHighlight({ slug }: { slug: string }) {
  const study = getCaseStudy(slug);
  if (!study) return null;

  return (
    <section className="bg-white py-14 sm:py-16">
      <div className="container-wide">
        <p className="eyebrow text-[#164E50]">Proof — a real client result</p>
        <div className="mt-5 grid items-center gap-8 rounded-[18px] border border-[#dfe9dc] bg-[#fbfbf8] p-6 sm:p-8 lg:grid-cols-2">
          <div>
            {study.badge ? (
              <span className="inline-flex rounded-full bg-[#164E50] px-3 py-1 text-xs font-semibold text-white">
                {study.badge}
              </span>
            ) : null}
            <h2 className="mt-4 text-2xl font-black leading-tight tracking-[-0.025em] sm:text-3xl">
              {study.title}
            </h2>
            <p className="mt-3 text-base leading-7 text-[#465163]">{study.summary}</p>
            <div className="mt-6 grid grid-cols-3 gap-3">
              {study.metrics.map((metric) => (
                <div key={metric.label}>
                  <p className="text-xl font-black tracking-[-0.03em] text-[#164E50] sm:text-2xl">{metric.value}</p>
                  <p className="mt-1 text-xs leading-4 text-[#465163]">{metric.label}</p>
                </div>
              ))}
            </div>
            <Link
              href={`/results/${study.slug}`}
              className="mt-6 inline-flex items-center gap-2 text-sm font-black text-[#164E50] transition hover:gap-3"
            >
              Read the {study.brand} case study
              <span aria-hidden="true">-&gt;</span>
            </Link>
          </div>
          <div className="overflow-hidden rounded-[14px]">
            <Image
              src={study.heroImage.src}
              alt={study.heroImage.alt}
              width={1200}
              height={700}
              className="block h-auto w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
