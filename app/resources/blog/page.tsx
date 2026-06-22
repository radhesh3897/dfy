import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { Hero } from "@/components/Hero";
import { JsonLd } from "@/components/JsonLd";
import { Section } from "@/components/Section";
import { absoluteUrl } from "@/lib/site";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Performance Marketing Blog",
  description:
    "Practical, data-backed guides on lead quality, Meta and Google Ads, landing page CRO, CRM tracking, and WhatsApp nurture for B2B and service businesses in India.",
  path: "/resources/blog",
});

type Post = {
  title: string;
  description: string;
  href: string;
  category: string;
  date: string;
};

// Newest first.
const posts: Post[] = [
  {
    title: "WhatsApp Lead Nurture for Service Businesses",
    description:
      "Build a WhatsApp nurture sequence that converts paid ad enquiries into booked calls for service businesses in India.",
    href: "/resources/blog/whatsapp-lead-nurture-service-businesses",
    category: "Lead nurture",
    date: "2026-06-20",
  },
  {
    title: "Landing Page Conversion Rate Benchmarks India",
    description:
      "Landing page conversion rate benchmarks by traffic source for service businesses in India, plus the highest-impact CRO fixes.",
    href: "/resources/blog/landing-page-conversion-rate-service-businesses",
    category: "Landing page CRO",
    date: "2026-06-20",
  },
  {
    title: "CRM Tracking Setup for Service Businesses Running Paid Ads",
    description:
      "Set up a CRM feedback loop so paid ad campaigns learn from qualified leads and real sales outcomes, not just form fills.",
    href: "/resources/blog/crm-tracking-setup-for-service-businesses",
    category: "CRM & tracking",
    date: "2026-06-20",
  },
  {
    title: "How to Improve Lead Quality from Meta Ads",
    description:
      "Five specific changes that improve lead quality from Meta Ads for B2B service businesses in India.",
    href: "/resources/blog/how-to-improve-lead-quality-meta-ads",
    category: "Meta Ads",
    date: "2026-06-13",
  },
  {
    title: "B2B Lead Generation Benchmarks India 2026",
    description:
      "CPL, conversion rate, and ad spend benchmarks for B2B service businesses running paid ads in India.",
    href: "/resources/blog/b2b-lead-generation-benchmarks-india",
    category: "Benchmarks",
    date: "2026-06-13",
  },
  {
    title: "Meta Ads vs Google Ads for B2B India",
    description:
      "When to use Meta Ads versus Google Ads for B2B lead generation in India, and how to run them together.",
    href: "/resources/blog/meta-ads-vs-google-ads-b2b-india",
    category: "Channel comparison",
    date: "2026-06-13",
  },
];

function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  });
}

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
        primaryCta={{ label: "Get a Free Audit", href: "/#free-audit-form" }}
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
        buttonLabel="Request Your Free Audit"
        buttonHref="/#free-audit-form"
      />
    </>
  );
}
