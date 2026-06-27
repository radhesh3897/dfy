import type { Metadata } from "next";
import { ArticleByline } from "@/components/ArticleByline";
import { Cite, PullQuote, SourceList } from "@/components/Citations";
import { CTASection } from "@/components/CTASection";
import { FAQ } from "@/components/FAQ";
import { JsonLd } from "@/components/JsonLd";
import { Section } from "@/components/Section";
import { breadcrumbSchema, faqSchema, webPageSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/site";

const path = "/resources/blog/real-estate-lead-generation-india";
const description =
  "Real estate lead generation in India done right: how to get qualified buyer leads from Meta and Google Ads, qualify them early, and book more site visits.";

export const metadata: Metadata = pageMetadata({
  title: "Real Estate Lead Generation in India: Qualified Buyer Leads",
  description,
  path,
  keywords: [
    "real estate lead generation india",
    "real estate leads meta ads",
    "property lead generation",
    "real estate google ads india",
    "qualified real estate leads",
  ],
});

const faqs = [
  {
    question: "What is the average cost per lead for real estate in India?",
    answer:
      "For residential real estate in India, Meta Ads form-fill CPL commonly runs ₹300 to ₹800, while Google Search leads cost more because intent is higher. The number that matters is cost per site visit, not cost per form fill. A ₹600 lead that books a visit beats a ₹150 lead that never answers the phone.",
  },
  {
    question: "Is Meta Ads or Google Ads better for real estate leads in India?",
    answer:
      "Use both, but for different jobs. Google Search captures buyers already looking for a location, project, or builder, so it brings higher intent. Meta Ads reaches buyers earlier and produces cheaper volume, which works well for new launches and demand creation. Most developers start with Google for ready demand and add Meta to scale.",
  },
  {
    question: "How do you qualify real estate leads?",
    answer:
      "Qualify on budget, location preference, purchase timeline, and whether they want to live in the property or invest. Ask two or three of these on the form, then confirm the rest on the first call. The goal is to separate serious buyers from casual browsers before your sales team spends time on site visits.",
  },
  {
    question: "How fast should you follow up with a real estate lead?",
    answer:
      "Within five minutes if possible. Real estate buyers fill several forms in one sitting, so the first developer to respond usually controls the conversation. A WhatsApp message within two minutes plus a call within the hour materially improves the chance of booking a site visit.",
  },
  {
    question: "How much should a real estate developer spend on ads per month in India?",
    answer:
      "Enough to generate a stable sample of qualified leads, which usually means at least ₹75,000 to ₹2,00,000 per month per project. Lower budgets work but learn slowly because each test takes longer to reach enough leads to judge quality.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Real Estate Lead Generation in India: How to Get Qualified Buyer Leads",
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
  datePublished: "2026-06-27",
  dateModified: "2026-06-27",
  description,
};

export default function RealEstateLeadGenerationIndiaArticle() {
  return (
    <>
      <JsonLd data={webPageSchema(path, "Real Estate Lead Generation in India: How to Get Qualified Buyer Leads", description)} />
      <JsonLd data={articleSchema} />
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Resources", path: "/resources" },
          { name: "Blog", path: "/resources/blog" },
          { name: "Real Estate Lead Generation in India", path },
        ])}
      />

      <article>
        <Section tone="white" eyebrow="Real estate lead gen" title="Real Estate Lead Generation in India: How to Get Qualified Buyer Leads">
          <div className="max-w-3xl space-y-6 text-lg leading-8 text-[#465163]">
            <ArticleByline published="2026-06-27" />
            <p>
              Real estate is one of the easiest categories to get leads for and one of the hardest to get good leads for. A single buyer fills five or six forms across portals and ads in one sitting, so raw volume is rarely the problem.
            </p>
            <p>
              The problem is that most of those enquiries go cold before anyone has a real conversation. This guide covers how to run real estate lead generation in India that produces site visits, not just form fills: which channel to start with, how to qualify buyers early, and how to follow up fast enough to win the deal.
            </p>
          </div>
        </Section>

        <Section tone="white" title="Why real estate is such a competitive paid-ads category in India">
          <div className="max-w-3xl space-y-5 text-lg leading-8 text-[#465163]">
            <p>
              Indian real estate is on track to become a US$1.5 trillion sector by 2034, up from about US$482 billion in 2023, according to{" "}
              <Cite href="https://www.cii.in/PressreleasesDetail.aspx?id=79638">Knight Frank and CII</Cite>. A separate KPMG and NAREDCO projection puts the sector at{" "}
              <Cite href="https://www.ibef.org/news/india-real-estate-industry-to-hit-us-970-billion-by-2030-report">US$970 billion by 2030</Cite>.
            </p>
            <p>
              Demand at that scale means competition for the same buyer is intense. Most developers and brokers bid for attention on the same portals and the same Meta and Google placements. The advantage goes to whoever qualifies and follows up better, not whoever spends the most.
            </p>
          </div>
        </Section>

        <Section tone="white" title="Which channel should you start with: Meta Ads or Google Ads?">
          <div className="max-w-3xl space-y-5 text-lg leading-8 text-[#465163]">
            <p>
              Google Search captures buyers already looking for a city, locality, project name, or builder. Intent is high, so these leads are usually closer to a decision. Start here when there is real search demand for your location or project type.
            </p>
            <p>
              Meta Ads reaches buyers earlier, before they search, and produces cheaper volume. It works well for new launches, demand creation, and retargeting people who visited the project page but did not enquire. Most developers run Google for ready demand and layer Meta on top to scale once tracking is clean.
            </p>
          </div>
        </Section>

        <Section tone="white" title="How to qualify real estate leads before sales wastes time on them">
          <div className="max-w-3xl space-y-5 text-lg leading-8 text-[#465163]">
            <p>
              A real estate lead is only useful if you know four things: budget, location preference, purchase timeline, and whether the buyer wants to live in the property or invest. Ask two or three of these on the form and confirm the rest on the first call.
            </p>
            <p>
              Do not ask twelve questions on the form. Ask just enough to filter out the obviously poor-fit enquiries, then let the sales conversation do the deeper qualification. The goal is a smaller list of serious buyers, not a longer list of form fills.
            </p>
          </div>
        </Section>

        <Section tone="white" title="Why follow-up speed decides who wins the site visit">
          <div className="max-w-3xl space-y-5 text-lg leading-8 text-[#465163]">
            <p>
              Because buyers enquire with several developers at once, the first one to respond usually controls the conversation. A WhatsApp message within two minutes followed by a call within the hour gives you the best chance of booking a site visit before a competitor does.
            </p>
            <p>
              This is where most real estate ad budgets leak. The ads work, the leads arrive, and then no one calls for four hours. Fixing the follow-up process is often cheaper and faster than spending more on ads.
            </p>
          </div>
        </Section>

        <Section tone="white" eyebrow="Evidence" title="What the data says about real estate lead generation in India">
          <div className="max-w-3xl space-y-5 text-lg leading-8 text-[#465163]">
            <p>
              Buyers research online long before they call. As far back as 2014, a study by{" "}
              <Cite href="http://www.smetimes.in/smetimes/news/industry/2014/Jun/19/internet-influences-over-50-pc-real-estate-buying-decisions.html">Google India and Zinnov</Cite> found that over 50 percent of real estate buying decisions were influenced by internet research. That share has only grown since.
            </p>
            <p>
              For paid search, the global real estate Google Ads benchmark is a{" "}
              <Cite href="https://www.wordstream.com/blog/2026-google-ads-benchmarks">3.70 percent conversion rate</Cite> (WordStream, 2026 data). Treat that as a directional target for your landing page, not an India cost figure, since the dollar costs in that report are US data.
            </p>
            <PullQuote
              quote="In real estate, the lead is almost never the problem. The follow-up is. A buyer fills five forms in ten minutes, so the developer who calls first, qualifies budget and location early, and keeps the conversation on WhatsApp wins the site visit."
              attribution="Radhesh Agrawal, Founder, Done For You"
            />
          </div>
        </Section>

        <Section tone="white" eyebrow="FAQ" title="Common questions about real estate lead generation in India">
          <FAQ faqs={faqs} />
        </Section>

        <Section tone="white" eyebrow="Sources" title="Sources">
          <SourceList
            sources={[
              { label: "Indian Real Estate: A Decade from Now — Knight Frank + CII (2024)", href: "https://www.cii.in/PressreleasesDetail.aspx?id=79638" },
              { label: "India real estate to hit US$970 billion by 2030 — KPMG/NAREDCO via IBEF", href: "https://www.ibef.org/news/india-real-estate-industry-to-hit-us-970-billion-by-2030-report" },
              { label: "Internet influences over 50% of real estate buying decisions — Google India + Zinnov (2014)", href: "http://www.smetimes.in/smetimes/news/industry/2014/Jun/19/internet-influences-over-50-pc-real-estate-buying-decisions.html" },
              { label: "2026 Google Ads Benchmarks (Real Estate) — WordStream", href: "https://www.wordstream.com/blog/2026-google-ads-benchmarks" },
            ]}
          />
        </Section>
      </article>

      <CTASection
        title="Want DFY to build your real estate lead system?"
        text="Request a free audit and we will review your targeting, landing page, qualification questions, and follow-up speed to find where site visits are leaking."
        buttonLabel="Get a Free Audit"
        buttonHref="/#free-audit-form"
      />
    </>
  );
}
