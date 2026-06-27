import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { Hero } from "@/components/Hero";
import { JsonLd } from "@/components/JsonLd";
import { Section } from "@/components/Section";
import { blogPosts as posts, formatPostDate as formatDate } from "@/data/blogPosts";
import { absoluteUrl } from "@/lib/site";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Performance Marketing Blog",
  description:
    "Practical, data-backed guides on lead quality, Meta and Google Ads, landing page CRO, CRM tracking, and WhatsApp nurture for B2B and service businesses in India.",
  path: "/resources/blog",
});

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Done For You Performance Marketing Blog",
  url: absoluteUrl("/resources/blog"),
  blogPost: posts.map((post) => ({
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    url: absoluteUrl(post.href),
    datePublished: post.date,
    author: { "@type": "Person", name: "Radhesh Agrawal" },
  })),
};

export default function BlogPage() {
  return (
    <>
      <JsonLd data={webPageSchema("/resources/blog", "Performance Marketing Blog", "Data-backed DFY guides on lead quality, paid ads, landing page CRO, CRM tracking, and nurture.")} />
      <JsonLd data={blogSchema} />
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
        subtitle="Practical, data-backed guides on paid acquisition, funnel diagnosis, tracking, nurture, and sales feedback for B2B and service businesses in India."
        primaryCta={{ label: "Book a Call", href: "/#free-audit-form" }}
        secondaryCta={{ label: "Resources Hub", href: "/resources" }}
      />

      <Section tone="white" eyebrow="Latest articles" title="Guides and playbooks.">
        <div className="grid gap-5 md:grid-cols-2">
          {posts.map((post) => (
            <Link
              key={post.href}
              href={post.href}
              className="group flex flex-col rounded-sm border border-[#050505]/12 bg-white p-6 shadow-[0_18px_45px_rgba(5,5,5,0.06)] transition hover:border-[#164E50] hover:shadow-[0_22px_60px_rgba(22,78,80,0.12)]"
            >
              <div className="flex items-center gap-3 text-sm font-medium text-[#164E50]">
                <span className="rounded-full bg-[#EEF8EE] px-3 py-1">{post.category}</span>
                <span className="text-[#5f6877]">{formatDate(post.date)}</span>
              </div>
              <h2 className="mt-5 text-2xl font-black leading-tight tracking-[-0.02em] sm:text-3xl">
                {post.title}
              </h2>
              <p className="mt-4 text-base leading-7 text-[#4b4b4b]">{post.description}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#164E50] transition group-hover:gap-3">
                Read article
                <span aria-hidden="true">-&gt;</span>
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <CTASection
        title="Need answers from your own ad account?"
        text="Request an audit and DFY will review the acquisition system behind your lead quality."
        buttonLabel="Book a Call"
        buttonHref="/#free-audit-form"
      />
    </>
  );
}
