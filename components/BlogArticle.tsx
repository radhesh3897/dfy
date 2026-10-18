import type { ReactNode } from "react";
import Link from "next/link";
import { ArticleByline } from "@/components/ArticleByline";
import { ButtonLink } from "@/components/ButtonLink";
import { JsonLd } from "@/components/JsonLd";
import { blogPosts } from "@/data/blogPosts";
import { breadcrumbSchema, faqSchema, webPageSchema, type Faq } from "@/lib/schema";
import { absoluteUrl } from "@/lib/site";

export type BlogContentsItem = { id: string; label: string };

type BlogArticleProps = {
  path: string;
  title: string;
  description: string;
  category: string;
  published: string;
  updated: string;
  summary: ReactNode;
  contents: BlogContentsItem[];
  faqs: Faq[];
  children: ReactNode;
  ctaTitle?: string;
  ctaText?: string;
  ctaLabel?: string;
};

export function BlogSection({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="scroll-mt-36 border-b border-[#dfe6df] py-9 first:pt-0 sm:py-12">
      <h2 id={`${id}-heading`} className="text-[1.75rem] font-medium leading-[1.15] tracking-[-0.035em] text-[#111827] sm:text-[2.1rem]">{title}</h2>
      <div className="mt-5 space-y-5 text-[17px] leading-8 text-[#465163] sm:text-lg [&_h3]:text-xl [&_h3]:font-medium [&_h3]:leading-7 [&_h3]:text-[#111827] [&_table]:text-base [&_th]:font-medium">{children}</div>
    </section>
  );
}

export function BlogArticle({
  path, title, description, category, published, updated, summary, contents, faqs, children,
  ctaTitle = "Ready to connect your advertising to better leads?",
  ctaText = "Book a call with DFY to review your ads, landing pages, CRM stages, and follow-up. Bring your current reports so we can discuss what needs attention first.",
  ctaLabel = "Book a Call",
}: BlogArticleProps) {
  const currentIndex = blogPosts.findIndex(post => post.href === path);
  const previous = currentIndex > 0 ? blogPosts[currentIndex - 1] : undefined;
  const next = currentIndex >= 0 ? blogPosts[currentIndex + 1] : undefined;
  const categoryMatches = blogPosts.filter(post => post.href !== path && post.category === (blogPosts[currentIndex]?.category ?? category));
  const related = [...categoryMatches, ...blogPosts.filter(post => post.href !== path && !categoryMatches.includes(post))].slice(0, 3);
  const articleSchema = {
    "@context": "https://schema.org", "@type": "Article",
    headline: title, description, mainEntityOfPage: absoluteUrl(path),
    author: { "@type": "Person", name: "Radhesh Agrawal", url: absoluteUrl("/company/about") },
    publisher: { "@type": "Organization", "@id": absoluteUrl("/#organization"), name: "Done For You", url: absoluteUrl("/") },
    datePublished: published, dateModified: updated, inLanguage: "en",
  };

  return (
    <>
      <JsonLd data={webPageSchema(path, title, description)} />
      <JsonLd data={articleSchema} />
      {faqs.length > 0 && <JsonLd data={faqSchema(faqs)} />}
      <JsonLd data={breadcrumbSchema([
        { name: "Home", path: "/" }, { name: "Resources", path: "/resources" },
        { name: "Blog", path: "/resources/blog" }, { name: title, path },
      ])} />
      <article className="bg-white px-5 pb-16 pt-8 sm:pb-24 sm:pt-12" aria-labelledby="article-title">
        <header className="mx-auto max-w-[1040px]">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-sm text-[#5f6877]">
              <Link href="/resources/blog" className="transition hover:text-[#164E50]">DFY Journal</Link><span aria-hidden="true">/</span><span>{category}</span>
            </nav>
            {next && <Link href={next.href} aria-label={`Next article: ${next.title}`} className="inline-flex min-h-10 items-center gap-2 text-sm font-medium text-[#164E50]">Next article <span aria-hidden="true">→</span></Link>}
          </div>
          <p className="mt-10 text-xs font-medium uppercase tracking-[0.16em] text-[#164E50] sm:mt-12">{category} · DFY Journal</p>
          <h1 id="article-title" className="mt-4 max-w-[1000px] text-[clamp(2.35rem,5.3vw,4.25rem)] font-medium leading-[1.06] tracking-[-0.045em] text-[#111827]">{title}</h1>
          <p className="mt-6 max-w-[760px] text-lg leading-8 text-[#5f6877] sm:text-xl">{description}</p>
          <div className="mt-7"><ArticleByline published={published} updated={updated} /></div>
          <section aria-labelledby="quick-answer-heading" className="mt-8 rounded-[18px] border border-[#CDEECD] bg-[#EEF8EE] p-6 sm:p-8">
            <p id="quick-answer-heading" className="text-xs font-medium uppercase tracking-[0.16em] text-[#164E50]">The quick answer</p>
            <p className="mt-3 max-w-[880px] text-lg leading-8 text-[#164E50] sm:text-xl sm:leading-9">{summary}</p>
            {contents[0] && <a href={`#${contents[0].id}`} className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-[#164E50] underline underline-offset-4">Explore the guide <span aria-hidden="true">↓</span></a>}
          </section>
        </header>
        <div className="mx-auto mt-10 grid max-w-[1040px] gap-10 lg:mt-14 lg:grid-cols-[224px_minmax(0,1fr)] lg:gap-14">
          <aside className="min-w-0">
            <nav aria-label="On this page" className="rounded-[14px] border border-[#dfe6df] bg-[#fbfbf8] p-5 lg:sticky lg:top-36 lg:max-h-[calc(100dvh-164px)] lg:overflow-y-auto">
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#164E50]">On this page</p>
              <ol className="mt-4 grid gap-1">
                {contents.map((item, index) => <li key={item.id}><a href={`#${item.id}`} className="flex min-h-10 items-start gap-3 rounded-md py-2 text-sm leading-5 text-[#465163] transition hover:text-[#164E50] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#164E50]"><span aria-hidden="true" className="w-4 shrink-0 text-xs leading-5 text-[#5f6877]">{String(index + 1).padStart(2, "0")}</span>{item.label}</a></li>)}
              </ol>
            </nav>
          </aside>
          <div className="min-w-0">
            {children}
            <section aria-labelledby="related-heading" className="pt-9 sm:pt-12">
              <h2 id="related-heading" className="text-2xl font-medium tracking-[-0.03em] text-[#111827]">Continue reading</h2>
              <div className="mt-5 grid gap-3">{related.map(post => <Link key={post.href} href={post.href} className="rounded-xl border border-[#dfe6df] p-5 transition hover:border-[#164E50] hover:bg-[#fbfbf8]"><h3 className="flex items-start justify-between gap-4 text-lg font-medium leading-7 text-[#164E50]">{post.title}<span aria-hidden="true">↗</span></h3><p className="mt-2 text-sm leading-6 text-[#5f6877]">{post.description}</p></Link>)}</div>
            </section>
          </div>
        </div>
        <section aria-labelledby="review-heading" className="mx-auto mt-14 max-w-[1040px] rounded-[18px] bg-[#164E50] p-7 text-white sm:mt-16 sm:p-10">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-[#88DE7B]">Talk to Done For You</p>
          <h2 id="review-heading" className="mt-4 max-w-[680px] text-3xl font-medium leading-[1.12] tracking-[-0.035em] sm:text-4xl">{ctaTitle}</h2>
          <p className="mt-4 max-w-[680px] text-base leading-7 text-white/80 sm:text-lg sm:leading-8">{ctaText}</p>
          <ButtonLink href="/#free-audit-form" variant="light" className="mt-7 gap-2">{ctaLabel}<span aria-hidden="true">↗</span></ButtonLink>
        </section>
        <nav aria-label="Article navigation" className="mx-auto mt-8 grid max-w-[1040px] gap-4 border-t border-[#dfe6df] pt-6 sm:grid-cols-2">
          {previous ? <Link href={previous.href} className="rounded-lg border border-[#dfe6df] p-5 text-[#164E50]"><span className="block text-xs uppercase tracking-widest text-[#5f6877]">← Previous article</span><span className="mt-2 block text-base leading-7">{previous.title}</span></Link> : <Link href="/resources/blog" className="rounded-lg border border-[#dfe6df] p-5 text-[#164E50]">Browse all articles</Link>}
          {next ? <Link href={next.href} className="rounded-lg border border-[#dfe6df] p-5 text-[#164E50]"><span className="block text-xs uppercase tracking-widest text-[#5f6877]">Next article →</span><span className="mt-2 block text-base leading-7">{next.title}</span></Link> : <Link href="/resources/blog" className="rounded-lg border border-[#dfe6df] p-5 text-[#164E50]">Back to all articles</Link>}
        </nav>
      </article>
    </>
  );
}
