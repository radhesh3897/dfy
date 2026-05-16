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
  title: "Performance Marketing Blog",
  description:
    "DFY blog placeholders for practical insights on lead quality, paid ads, landing pages, CRM tracking, nurture, and sales feedback loops.",
  path: "/resources/blog",
});

const articles = resourceCards.filter((item) => item.type === "Article" || item.type === "Articles");

export default function BlogPage() {
  return (
    <>
      <JsonLd data={webPageSchema("/resources/blog", "Performance Marketing Blog", "DFY blog listing placeholder for future approved articles.")} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Resources", path: "/resources" },
          { name: "Blog", path: "/resources/blog" },
        ])}
      />
      <Hero
        eyebrow="Blog"
        title="Performance marketing insights for better lead quality."
        subtitle="A placeholder home for future DFY articles on paid acquisition, funnel diagnosis, tracking, nurture, and sales feedback."
        primaryCta={{ label: "Get a Free Audit", href: "/#free-audit-form" }}
        secondaryCta={{ label: "Resources Hub", href: "/resources" }}
      />

      <Section tone="white" eyebrow="Latest articles" title="Reserved article slots.">
        <div className="grid gap-5 md:grid-cols-2">
          {articles.map((article, index) => (
            <Link key={article.title} href={article.href} className="rounded-sm border border-[#050505]/12 bg-white p-6 shadow-[0_18px_45px_rgba(5,5,5,0.06)]">
              <p className="text-sm font-black text-[#164E50]">{String(index + 1).padStart(2, "0")}</p>
              <h2 className="mt-8 text-3xl font-black leading-none">{article.title}</h2>
              <p className="mt-5 text-base leading-7 text-[#4b4b4b]">{article.description}</p>
            </Link>
          ))}
        </div>
      </Section>

      <CTASection
        title="Need answers from your own ad account?"
        text="Request an audit and DFY will review the acquisition system behind your lead quality."
        buttonLabel="Request Your Free Audit"
        buttonHref="/#free-audit-form"
      />
    </>
  );
}
