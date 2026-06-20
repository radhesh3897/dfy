import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CTASection } from "@/components/CTASection";
import { Hero } from "@/components/Hero";
import { JsonLd } from "@/components/JsonLd";
import { Section } from "@/components/Section";
import { ServiceCard } from "@/components/ServiceCard";
import { resultStories } from "@/data/marketingPages";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/site";

type CaseStudyPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return resultStories.map((story) => ({ slug: story.slug }));
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const story = resultStories.find((item) => item.slug === slug);

  if (!story) {
    return {};
  }

  return {
    ...pageMetadata({
      title: `${story.title} Placeholder`,
      description: `${story.summary} Verified project details will be added after client approval.`,
      path: story.href,
    }),
    // Placeholder content — keep out of the index until real, client-approved
    // case studies replace it. Links are still followed.
    robots: { index: false, follow: true },
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const story = resultStories.find((item) => item.slug === slug);

  if (!story) {
    notFound();
  }

  const relatedStories = resultStories.filter((item) => item.slug !== story.slug);

  return (
    <>
      <JsonLd
        data={webPageSchema(
          story.href,
          `${story.title} Placeholder`,
          "DFY case-study placeholder page. Verified proof will be added after client approval.",
        )}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Results", path: "/results" },
          { name: story.title, path: story.href },
        ])}
      />
      <Hero
        eyebrow={story.eyebrow}
        title={`${story.title}: verified story placeholder.`}
        subtitle={story.summary}
        primaryCta={{ label: "Request Your Audit", href: "/#free-audit-form" }}
        secondaryCta={{ label: "Back to Results", href: "/results" }}
      >
        <ProofPlaceholder />
      </Hero>

      <Section tone="white" eyebrow="Project summary" title="What this page will include after approval.">
        <div className="grid gap-5 md:grid-cols-3">
          <ServiceCard title="Challenge" description={story.challenge} index={0} />
          <ServiceCard title="What DFY did" description={story.work} index={1} />
          <ServiceCard title="Results placeholder" description={story.result} index={2} />
        </div>
      </Section>

      <Section
        eyebrow="Proof placeholder"
        title="Screenshots and evidence will be added only when verified."
        intro="This section is intentionally reserved. It can later hold approved ad account screenshots, CRM views, before/after notes, and client-approved context."
      >
        <div className="rounded-[18px] border border-[#dfe6df] bg-white p-6 shadow-[0_18px_45px_rgba(5,5,5,0.06)]">
          <div className="grid gap-4 md:grid-cols-3">
            {["Ad account screenshot", "CRM lead quality view", "Approved result notes"].map((label) => (
              <div key={label} className="grid min-h-[180px] place-items-center rounded-sm border border-[#050505]/12 bg-[#f6f5f1] p-5 text-center">
                <p className="text-sm font-black uppercase tracking-[0.16em] text-[#164E50]">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="white" eyebrow="Related case studies" title="More approved story slots.">
        <div className="grid gap-5 md:grid-cols-2">
          {relatedStories.map((related, index) => (
            <Link
              key={related.slug}
              href={related.href}
              className="rounded-sm border border-[#050505]/12 bg-white p-6 shadow-[0_18px_45px_rgba(5,5,5,0.06)] transition hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(5,5,5,0.09)]"
            >
              <p className="text-sm font-black text-[#164E50]">{String(index + 1).padStart(2, "0")}</p>
              <h2 className="mt-8 text-3xl font-black leading-none">{related.title}</h2>
              <p className="mt-5 text-base leading-7 text-[#4b4b4b]">{related.summary}</p>
              <span className="mt-8 inline-flex text-sm font-black text-[#164E50]">Open related story</span>
            </Link>
          ))}
        </div>
      </Section>

      <CTASection
        title="Want a clear view of your own lead quality?"
        text="Book a free audit and we will show you where your current acquisition system is leaking."
        buttonLabel="Request Your Free Audit"
        buttonHref="/#free-audit-form"
      />
    </>
  );
}

function ProofPlaceholder() {
  return (
    <div className="rounded-[18px] border border-[#dfe6df] bg-[#fbfbf8] p-6 shadow-[0_22px_70px_rgba(15,23,42,0.06)]">
      <p className="text-sm font-medium uppercase tracking-[0.16em] text-[#164E50]">Honest proof slot</p>
      <div className="mt-6 grid gap-3">
        {["Client or project context", "Challenge and diagnosis", "Approved screenshots", "Verified outcome"].map((item) => (
          <div key={item} className="rounded-sm border border-[#050505]/12 bg-white px-4 py-3 text-sm font-semibold text-[#465163]">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
