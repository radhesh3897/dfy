# dfy-article-writer

## Purpose

Research and write a complete, SEO-optimized article for the DFY (Done For You) website and return the full content of a Next.js `page.tsx` file ready to be placed at `app/resources/blog/<slug>/page.tsx`.

This skill is called by `blog-writer`. Do not output markdown — output valid TypeScript TSX only.

---

## Brand identity (pre-configured for DFY)

- **Brand name:** Done For You
- **Website:** https://www.doneforyou.in
- **Author:** Radhesh Agrawal
- **Author role:** Founder, Done For You
- **Author URL:** https://www.doneforyou.in/company/about
- **Positioning:** B2B performance marketing agency in India — paid ads, lead quality improvement, CRM tracking, landing pages
- **Tone:** First-person founder voice. Peer-to-peer, practical, no fluff. Write like Radhesh is explaining this to a fellow business owner over a call.
- **Writing rules:**
  - No em dashes
  - No buzzwords: "robust", "leverage", "seamless", "comprehensive", "game-changer", "holistic"
  - No hollow openers ("In today's world...", "In this article...")
  - No passive voice where active is possible
  - Short paragraphs, 2–4 sentences max per `<p>` tag
  - Every claim needs to be true and researchable

---

## Phase 1: Research

Before writing, do live web research:

1. Search for the focus keyword and read 3–5 top-ranking pages to understand what they cover and what gaps exist
2. Find real data points, statistics, or benchmarks from credible sources (government reports, industry surveys, platform data)
3. Look for India-specific data wherever possible (Indian market CPL ranges, Indian B2B buyer behaviour, etc.)
4. Note 3–5 specific claims that will make this article more credible than generic content
5. Identify what angle none of the ranking pages take — that becomes the unique positioning

---

## Phase 2: Article structure planning

Plan the article sections:

- 1 intro section (below the H1, first person hook, 2–3 paragraphs)
- 5–8 body sections (each is an H2 answering a specific question)
- 1 FAQ section (minimum 4 questions, maximum 6)
- Each body section: 2–4 paragraphs of 2–4 sentences each

FAQ questions must be phrased as actual search queries people type. Answers must be direct and 2–4 sentences.

---

## Phase 3: Generate the page.tsx

Output a complete, copy-paste-ready `page.tsx` file. Follow this exact structure and component pattern. Do not deviate from imports, component names, or prop names.

```tsx
import type { Metadata } from "next";
import { ArticleByline } from "@/components/ArticleByline";
import { CTASection } from "@/components/CTASection";
import { FAQ } from "@/components/FAQ";
import { JsonLd } from "@/components/JsonLd";
import { Section } from "@/components/Section";
import { breadcrumbSchema, faqSchema, webPageSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/site";

const path = "/resources/blog/<SLUG>";
const description =
  "<SEO meta description — 140–155 chars, includes focus keyword, no quotes>";

export const metadata: Metadata = pageMetadata({
  title: "<SEO title — 50–60 chars, includes focus keyword>",
  description,
  path,
});

const faqs = [
  {
    question: "<Question 1 — phrased as a real search query>",
    answer:
      "<Direct answer, 2–4 sentences, no hollow openers, India-specific where relevant>",
  },
  // ... 3–5 more FAQ entries
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "<Full article headline>",
  author: {
    "@type": "Person",
    name: "Radhesh Agrawal",
    url: "https://www.doneforyou.in/company/about",
  },
  publisher: {
    "@type": "Organization",
    name: "Done For You",
    url: "https://www.doneforyou.in",
  },
  datePublished: "<YYYY-MM-DD — today's date>",
  dateModified: "<YYYY-MM-DD — today's date>",
  description,
};

export default function <ComponentName>Article() {
  return (
    <>
      <JsonLd data={webPageSchema(path, "<Page title>", description)} />
      <JsonLd data={articleSchema} />
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Resources", path: "/resources" },
          { name: "Blog", path: "/resources/blog" },
          { name: "<Short breadcrumb label>", path },
        ])}
      />

      <article>
        <Section tone="white" eyebrow="<Category label — 2–3 words>" title="<H1 — full article title, 60–80 chars>">
          <div className="max-w-3xl space-y-6 text-lg leading-8 text-[#465163]">
            <ArticleByline published="<YYYY-MM-DD>" />
            <p>
              <Hook paragraph — first-person, gets directly to the point of the article. No hollow opener.>
            </p>
            <p>
              <Second paragraph — context or what the article covers.>
            </p>
          </div>
        </Section>

        <Section tone="white" title="<H2 — specific question this section answers>">
          <div className="max-w-3xl space-y-5 text-lg leading-8 text-[#465163]">
            <p><Paragraph 1></p>
            <p><Paragraph 2></p>
            // add more <p> tags as needed, max 4 per section
          </div>
        </Section>

        // ... repeat Section blocks for each body section

        <Section tone="white" eyebrow="FAQ" title="<FAQ section heading — a question itself>">
          <FAQ faqs={faqs} />
        </Section>
      </article>

      <CTASection
        title="<CTA headline — specific to the article topic>"
        text="<1–2 sentence CTA body — what DFY does and why they should enquire>"
        buttonLabel="Get a Free Audit"
        buttonHref="/#free-audit-form"
      />
    </>
  );
}
```

---

## Phase 4: QC checklist

Before returning the output, verify:

- [ ] All `<` and `>` placeholders replaced with real content
- [ ] Component name is PascalCase, derived from the slug (e.g., slug `meta-ads-agency-india` → `MetaAdsAgencyIndia`)
- [ ] `path` const matches the slug exactly
- [ ] `datePublished` and `dateModified` use today's date
- [ ] No em dashes anywhere in the content
- [ ] No buzzwords
- [ ] FAQs have at least 4 entries
- [ ] Every factual claim in the body is something you actually researched (not hallucinated)
- [ ] `eyebrow` props are 2–3 words max
- [ ] Section `title` on body sections is a specific question or claim, not a generic label
- [ ] The intro section uses `eyebrow` + `title` (the H1); all other sections use `title` only
- [ ] No `{/* comments */}` or placeholder text left in the output
- [ ] Valid TypeScript — no missing commas, unclosed tags, or broken JSX

---

## Phase 5: Output

Return only the complete `page.tsx` file content. No markdown fences, no explanation before or after — just the raw TypeScript file content starting with `import type { Metadata }`.
