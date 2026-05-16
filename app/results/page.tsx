import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { CTASection } from "@/components/CTASection";
import { Hero } from "@/components/Hero";
import { JsonLd } from "@/components/JsonLd";
import { Section } from "@/components/Section";
import { ServiceCard } from "@/components/ServiceCard";
import { resultStories } from "@/data/marketingPages";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Results and Case Studies",
  description:
    "View DFY project story placeholders for lead quality, funnel improvement, CRM feedback, and paid acquisition results. Verified proof is added only after approval.",
  path: "/results",
});

export default function ResultsPage() {
  return (
    <>
      <JsonLd
        data={webPageSchema(
          "/results",
          "Results and Case Studies",
          "DFY results overview with honest case-study placeholders pending approval.",
        )}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Results", path: "/results" },
        ])}
      />
      <Hero
        eyebrow="Results"
        title="Real project stories, added only when verified."
        subtitle="This is where DFY will publish approved case studies across lead quality, funnel improvement, tracking, CRM feedback, and paid acquisition performance."
        primaryCta={{ label: "Request Your Audit", href: "/#free-audit-form" }}
        secondaryCta={{ label: "Explore Services", href: "/b2b-lead-generation-agency" }}
      >
        <ResultsHeroCard />
      </Hero>

      <Section
        tone="white"
        eyebrow="Featured results"
        title="Reserved case-study slots for approved DFY project stories."
        intro="We do not publish fake client names, fake metrics, or unverified claims. These pages are structured so approved proof can be added cleanly later."
      >
        <div className="grid gap-5 lg:grid-cols-3">
          {resultStories.map((story, index) => (
            <Link
              key={story.slug}
              href={story.href}
              className="group flex min-h-[360px] flex-col rounded-sm border border-[#050505]/12 bg-white p-6 shadow-[0_18px_45px_rgba(5,5,5,0.06)] transition hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(5,5,5,0.09)]"
            >
              <p className="text-sm font-black text-[#164E50]">{String(index + 1).padStart(2, "0")}</p>
              <p className="mt-8 text-xs font-black uppercase tracking-[0.16em] text-[#164E50]">
                {story.eyebrow}
              </p>
              <h2 className="mt-4 text-3xl font-black leading-none tracking-normal">{story.title}</h2>
              <p className="mt-5 text-base leading-7 text-[#4b4b4b]">{story.summary}</p>
              <span className="mt-auto inline-flex pt-8 text-sm font-black text-[#164E50] transition group-hover:text-[#050505]">
                Read placeholder story
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="How proof will be added"
        title="Every result story needs approval before it becomes a claim."
      >
        <div className="grid gap-5 md:grid-cols-3">
          {[
            {
              title: "Client approval",
              description: "Names, screenshots, and story details are added only after the client approves them for public use.",
            },
            {
              title: "Verified metrics",
              description: "Performance numbers are published only when they are clear, attributable, and safe to share.",
            },
            {
              title: "Useful context",
              description: "Each story will explain the challenge, what changed, and what the proof actually means.",
            },
          ].map((item, index) => (
            <ServiceCard key={item.title} {...item} index={index} />
          ))}
        </div>
      </Section>

      <CTASection
        title="Want to find the leaks in your own acquisition system?"
        text="Start with a free audit. We will review your ads, landing page, tracking, CRM flow, and follow-up process."
        buttonLabel="Request Your Free Audit"
        buttonHref="/#free-audit-form"
      />
    </>
  );
}

function ResultsHeroCard() {
  return (
    <div className="rounded-[18px] border border-[#dfe6df] bg-[#fbfbf8] p-6 shadow-[0_22px_70px_rgba(15,23,42,0.06)]">
      <p className="text-sm font-medium uppercase tracking-[0.16em] text-[#164E50]">Proof standard</p>
      <h2 className="mt-6 text-3xl font-medium leading-tight tracking-[-0.035em]">
        Verified project story will be added after client approval.
      </h2>
      <p className="mt-5 text-base leading-7 text-[#465163]">
        Until then, these pages stay honest: no invented logos, testimonials, awards, or performance numbers.
      </p>
      <ButtonLink href="/results/case-study-1" variant="secondary" className="mt-7 rounded-md">
        View first story slot
      </ButtonLink>
    </div>
  );
}
