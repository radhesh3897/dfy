import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { Hero } from "@/components/Hero";
import { JsonLd } from "@/components/JsonLd";
import { Section } from "@/components/Section";
import { resourceCards } from "@/data/marketingPages";
import { blogPosts, formatPostDate } from "@/data/blogPosts";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Resources for Better Lead Quality",
  description:
    "Explore DFY resources on lead quality, Meta Ads, Google Ads, B2B funnels, landing pages, CRM feedback, and paid acquisition systems.",
  path: "/resources",
});

const latestArticles = blogPosts.slice(0, 3);
const guides = resourceCards.filter((item) =>
  ["Lead Quality Checklist", "Meta Ads Guide", "Google Ads Guide"].includes(item.title),
);

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
        subtitle="Explore DFY articles, guides, and checklists for improving lead quality, tracking, CRM feedback, and sales-ready conversations."
        primaryCta={{ label: "Book a Call", href: "/#free-audit-form" }}
        secondaryCta={{ label: "Read the Blog", href: "/resources/blog" }}
      >
        <ResourceHeroCard />
      </Hero>

      <Section tone="white" eyebrow="Latest articles" title="Recent guides and playbooks." className="scroll-mt-28">
        <div id="latest" className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {latestArticles.map((post) => (
            <Link
              key={post.href}
              href={post.href}
              className="group flex flex-col rounded-sm border border-[#050505]/12 bg-white p-6 shadow-[0_18px_45px_rgba(5,5,5,0.06)] transition hover:-translate-y-1 hover:border-[#164E50] hover:shadow-[0_24px_60px_rgba(22,78,80,0.1)]"
            >
              <div className="flex items-center gap-3 text-sm font-medium text-[#164E50]">
                <span className="rounded-full bg-[#EEF8EE] px-3 py-1">{post.category}</span>
                <span className="text-[#5f6877]">{formatPostDate(post.date)}</span>
              </div>
              <h2 className="mt-5 text-2xl font-black leading-tight tracking-[-0.02em]">{post.title}</h2>
              <p className="mt-4 text-base leading-7 text-[#4b4b4b]">{post.description}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#164E50] transition group-hover:gap-3">
                Read article
                <span aria-hidden="true">-&gt;</span>
              </span>
            </Link>
          ))}
        </div>
        <div className="mt-8">
          <Link href="/resources/blog" className="inline-flex items-center gap-2 text-sm font-black text-[#164E50] transition hover:text-[#050505]">
            View all articles
            <span aria-hidden="true">-&gt;</span>
          </Link>
        </div>
      </Section>

      <ResourceSection
        id="guides"
        eyebrow="Guides and checklists"
        title="Start with the most useful checks."
        items={guides}
        tone="light"
      />

      <CTASection
        title="Want us to review your funnel instead?"
        text="Book a call and we will show you what is leaking lead quality across ads, landing pages, tracking, CRM, and follow-up."
        buttonLabel="Book a Call"
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
  const items = [
    { label: "Performance Marketing Blog", href: "/resources/blog" },
    { label: "Lead Quality Checklist", href: "/resources/lead-quality-checklist" },
    { label: "Meta Ads Guide", href: "/resources/meta-ads-for-service-businesses" },
    { label: "Google Ads Guide", href: "/resources/google-ads-for-service-businesses" },
  ];
  return (
    <div className="rounded-[18px] border border-[#dfe6df] bg-[#fbfbf8] p-6 shadow-[0_22px_70px_rgba(15,23,42,0.06)]">
      <p className="text-sm font-medium uppercase tracking-[0.16em] text-[#164E50]">Knowledge hub</p>
      <div className="mt-6 grid gap-3">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="rounded-sm border border-[#050505]/12 bg-white px-4 py-3 text-sm font-semibold text-[#465163] transition hover:border-[#164E50] hover:text-[#164E50]"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
