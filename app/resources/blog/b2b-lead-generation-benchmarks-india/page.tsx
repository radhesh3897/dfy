import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { FAQ } from "@/components/FAQ";
import { JsonLd } from "@/components/JsonLd";
import { Section } from "@/components/Section";
import { breadcrumbSchema, faqSchema, webPageSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/site";

const path = "/resources/blog/b2b-lead-generation-benchmarks-india";
const description =
  "Real B2B lead generation benchmarks for India in 2026. CPL ranges by sector, conversion rates, and what good performance actually looks like on Meta Ads and Google Ads.";

export const metadata: Metadata = pageMetadata({
  title: "B2B Lead Generation Benchmarks India 2026 — CPL, Conversion Rates, and Ad Spend by Sector",
  description,
  path,
});

const faqs = [
  {
    question: "Are these CPL benchmarks for India accurate in 2026?",
    answer:
      "These are practical 2026 planning ranges for Indian B2B service campaigns, not guarantees. Your actual CPL can move 30 to 50 percent based on offer strength, city, sales cycle, and follow-up speed.",
  },
  {
    question: "Why is my CPL higher than these benchmarks?",
    answer:
      "CPL is often higher when the audience is too narrow, the landing page converts below 3 percent, keyword intent is expensive, or the offer needs more trust before a prospect enquires.",
  },
  {
    question: "Should I optimise for CPL or lead quality?",
    answer:
      "Optimise for qualified lead cost and lead-to-call rate first. A ₹1,500 qualified lead can outperform a ₹300 form fill if the cheaper lead never answers or cannot buy.",
  },
  {
    question: "How do I calculate cost per qualified lead?",
    answer:
      "Divide total ad spend by leads that meet your qualification rules. If ₹100,000 produces 200 leads but only 50 are qualified, your cost per qualified lead is ₹2,000.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "B2B Lead Generation Benchmarks India 2026",
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
  datePublished: "2026-06-13",
  description,
};

export default function B2BLeadGenerationBenchmarksIndiaArticle() {
  return (
    <>
      <JsonLd data={webPageSchema(path, "B2B Lead Generation Benchmarks India 2026", description)} />
      <JsonLd data={articleSchema} />
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Resources", path: "/resources" },
          { name: "Blog", path: "/resources/blog" },
          { name: "B2B Lead Generation Benchmarks India 2026", path },
        ])}
      />

      <article>
        <Section tone="white" eyebrow="Benchmarks" title="B2B Lead Generation Benchmarks India 2026">
          <div className="max-w-3xl space-y-6 text-lg leading-8 text-[#465163]">
            <p>
              For B2B service businesses in India, a qualified lead from paid ads costs ₹600 to ₹2,500 depending on sector, sales cycle length, and campaign maturity. This page covers CPL benchmarks, conversion rate benchmarks, and what separates average performance from strong performance across Meta Ads and Google Ads.
            </p>
          </div>
        </Section>

        <Section tone="white" title="What is a good CPL for B2B lead generation in India?">
          <div className="max-w-3xl space-y-5 text-lg leading-8 text-[#465163]">
            <p>
              A good CPL for B2B lead generation in India is usually ₹600 to ₹2,500 for qualified leads, depending on search intent, city, deal size, and sales cycle. Raw form-fill CPL can be lower, but qualified lead cost is the more useful benchmark.
            </p>
            <p>
              For offers with deal sizes above ₹1 lakh, a ₹1,500 to ₹3,000 qualified lead can still be economical if 10 to 20 percent of qualified leads become sales conversations.
            </p>
          </div>
        </Section>

        <Section tone="white" title="Meta Ads CPL benchmarks by sector in India">
          <div className="max-w-4xl space-y-5 text-lg leading-8 text-[#465163]">
            <p>
              Meta Ads CPL benchmarks in India vary by sector because user intent is created through targeting and creative, not search demand. Most B2B and service campaigns should review lead quality after 100 to 200 leads, not after the first 10 leads.
            </p>
            <div className="overflow-x-auto rounded-sm border border-[#CDEECD]">
              <table className="w-full min-w-[640px] border-collapse bg-white text-left text-base">
                <thead className="bg-[#EEF8EE] text-[#164E50]">
                  <tr>
                    <th className="border-b border-[#CDEECD] px-4 py-3">Sector</th>
                    <th className="border-b border-[#CDEECD] px-4 py-3">Typical CPL Range</th>
                    <th className="border-b border-[#CDEECD] px-4 py-3">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Real estate", "₹300–₹800", "Residential projects"],
                    ["Education", "₹200–₹600", "Ed-tech and coaching"],
                    ["Legal and consulting", "₹500–₹1,500", "High-intent keywords"],
                    ["B2B SaaS", "₹800–₹2,000", "Longer sales cycle"],
                    ["Healthcare services", "₹400–₹1,000", "Clinic and hospital"],
                  ].map(([sector, range, notes]) => (
                    <tr key={sector}>
                      <td className="border-b border-[#CDEECD] px-4 py-3 font-medium text-[#050505]">{sector}</td>
                      <td className="border-b border-[#CDEECD] px-4 py-3">{range}</td>
                      <td className="border-b border-[#CDEECD] px-4 py-3">{notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Section>

        <Section tone="white" title="Google Ads CPL benchmarks for B2B service businesses India">
          <div className="max-w-3xl space-y-5 text-lg leading-8 text-[#465163]">
            <p>
              Google Ads CPL benchmarks for B2B service businesses in India usually range from ₹600 to ₹2,000 for high-intent keywords. Competitive legal, SaaS, and finance searches can exceed ₹2,500 when the market is crowded or the landing page converts below 4 percent.
            </p>
            <p>
              Search campaigns should separate brand, non-brand, competitor, and high-intent service keywords. This lets you judge whether expensive clicks are producing qualified enquiries within 30 to 60 days.
            </p>
          </div>
        </Section>

        <Section tone="white" title="What conversion rate should a B2B landing page achieve?">
          <div className="max-w-3xl space-y-5 text-lg leading-8 text-[#465163]">
            <p>
              A B2B landing page should usually convert 3 to 8 percent of paid traffic into qualified enquiries, depending on offer complexity. Lead magnet pages can convert 10 to 25 percent, but their sales readiness is usually lower.
            </p>
            <p>
              If the page converts below 2 percent after 500 sessions, review offer clarity, proof, form friction, page speed, and message match before increasing ad spend.
            </p>
          </div>
        </Section>

        <Section tone="white" title="How much ad spend does a B2B service business need to generate consistent leads?">
          <div className="max-w-3xl space-y-5 text-lg leading-8 text-[#465163]">
            <p>
              A B2B service business usually needs at least ₹75,000 to ₹2,00,000 per month in paid media to generate enough data for consistent lead decisions. Lower budgets can work, but optimization is slower because each test takes longer to reach 30 to 50 leads.
            </p>
            <p>
              For a new account, plan a 90-day testing window. Month 1 validates offer and tracking, month 2 improves lead quality, and month 3 decides what can scale.
            </p>
          </div>
        </Section>

        <Section tone="white" title="What is a good lead-to-call rate for B2B paid ads?">
          <div className="max-w-3xl space-y-5 text-lg leading-8 text-[#465163]">
            <p>
              A good lead-to-call rate for B2B paid ads is typically 20 to 40 percent when the lead source, form, and follow-up process are working. Below 15 percent usually means lead quality, response time, or qualification criteria need review.
            </p>
            <p>
              Follow-up speed matters. Contacting leads within 5 to 15 minutes can materially improve connection rates compared with calling after several hours.
            </p>
          </div>
        </Section>

        <Section tone="white" eyebrow="FAQ" title="What benchmark questions should B2B teams ask before scaling?">
          <FAQ faqs={faqs} />
        </Section>
      </article>

      <CTASection
        title="Want DFY to benchmark your current paid ads?"
        text="Request a free audit and we will review CPL, lead quality, conversion rate, and sales feedback visibility."
        buttonLabel="Get a Free Audit"
        buttonHref="/#free-audit-form"
      />
    </>
  );
}
