import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { Hero } from "@/components/Hero";
import { JsonLd } from "@/components/JsonLd";
import { Section } from "@/components/Section";
import { resourceCards } from "@/data/marketingPages";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Resources for Better Lead Quality",
  description:
    "Explore DFY resources on lead quality, Meta Ads, Google Ads, B2B funnels, landing pages, CRM feedback, and paid acquisition systems.",
  path: "/resources",
});

const latestArticles = resourceCards.filter((item) => ["Blog", "Low CPL vs Lead Quality"].includes(item.title));
const guides = resourceCards.filter((item) => ["Lead Quality Checklist", "Meta Ads Guide", "Google Ads Guide"].includes(item.title));
const playbooks = resourceCards.filter((item) => item.title === "B2B Funnel Playbook");

export default function ResourcesPage() {
  return (
    <>
      <JsonLd
        data={webPageSchema(
          "/resources",
          "Resources for Better Lead Quality",
          "DFY resources hub for practical paid acquisition and lead quality guidance.",
        )}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Resources", path: "/resources" },
        ])}
      />
      <Hero
        eyebrow="Resources"
        title="Practical guidance for better paid acquisition systems."
        subtitle="Explore DFY articles, guides, checklists, and playbooks for improving lead quality, tracking, CRM feedback, and sales-ready conversations."
        primaryCta={{ label: "Get a Free Audit", href: "/#free-audit-form" }}
        secondaryCta={{ label: "Read Meta Ads Guide", href: "/resources/meta-ads-for-service-businesses" }}
      >
        <ResourceHeroCard />
      </Hero>

      <ResourceSection id="latest" eyebrow="Latest articles" title="Short reads for fixing lead quality leaks." items={latestArticles} />
      <ResourceSection id="guides" eyebrow="Guides and checklists" title="Start with the most useful checks." items={guides} tone="light" />
      <ResourceSection id="playbooks" eyebrow="Playbooks" title="Frameworks for building the full acquisition system." items={playbooks} />

      <CTASection
        title="Want us to review your funnel instead?"
        text="Book a free audit and we will show you what is leaking lead quality across ads, landing pages, tracking, CRM, and follow-up."
        buttonLabel="Request Your Free Audit"
        buttonHref="/#free-audit-form"
      />
    </>
  );
}

function ResourceSection({
  id,
  eyebrow,
  title,
  items,
  tone = "white",
}: {
  id: string;
  eyebrow: string;
  title: string;
  items: typeof resourceCards;
  tone?: "white" | "light";
}) {
  return (
    <Section tone={tone} eyebrow={eyebrow} title={title} className="scroll-mt-28">
      <div id={id} className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {items.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className="group rounded-sm border border-[#050505]/12 bg-white p-6 shadow-[0_18px_45px_rgba(5,5,5,0.06)] transition hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(5,5,5,0.09)]"
          >
            <p className="text-xs font-black uppercase tracking-[0.16em] text-[#164E50]">{item.type}</p>
            <h2 className="mt-8 text-3xl font-black leading-none tracking-normal">{item.title}</h2>
            <p className="mt-5 text-base leading-7 text-[#4b4b4b]">{item.description}</p>
            <span className="mt-8 inline-flex text-sm font-black text-[#164E50] transition group-hover:text-[#050505]">
              Open resource
            </span>
          </Link>
        ))}
      </div>
    </Section>
  );
}

function ResourceHeroCard() {
  return (
    <div className="rounded-[18px] border border-[#dfe6df] bg-[#fbfbf8] p-6 shadow-[0_22px_70px_rgba(15,23,42,0.06)]">
      <p className="text-sm font-medium uppercase tracking-[0.16em] text-[#164E50]">Knowledge hub</p>
      <div className="mt-6 grid gap-3">
        {["Lead Quality Checklist", "Meta Ads Guide", "Google Ads Guide", "B2B Funnel Playbook"].map((item) => (
          <div key={item} className="rounded-sm border border-[#050505]/12 bg-white px-4 py-3 text-sm font-semibold text-[#465163]">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
