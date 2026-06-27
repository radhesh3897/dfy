import type { Metadata } from "next";
import { ArticleByline } from "@/components/ArticleByline";
import { ButtonLink } from "@/components/ButtonLink";
import { Cite, PullQuote, SourceList } from "@/components/Citations";
import { CTASection } from "@/components/CTASection";
import { FAQ } from "@/components/FAQ";
import { JsonLd } from "@/components/JsonLd";
import { Section } from "@/components/Section";
import { breadcrumbSchema, faqSchema, webPageSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/site";

const path = "/resources/blog/how-to-choose-b2b-meta-ads-agency-india";
const description =
  "Choosing a B2B Meta Ads agency in India? Here are the 6 questions to ask before you hire, what a strong answer looks like, and what agencies charge.";

export const metadata: Metadata = pageMetadata({
  title: "How to Choose a B2B Meta Ads Agency in India",
  description,
  path,
  keywords: [
    "how to choose a meta ads agency",
    "b2b meta ads agency india",
    "questions to ask a marketing agency",
    "best b2b lead generation agency india",
    "meta ads agency delhi",
  ],
});

const faqs = [
  {
    question: "What questions should I ask a B2B Meta Ads agency before hiring?",
    answer:
      "Ask six things: have you worked with B2B companies in my industry, can you show qualified lead metrics instead of just CPL, do you optimize on CRM data and SQLs, who creates the creative, what monthly ad spend you manage, and how often you review campaigns. The answers separate agencies that chase cheap leads from ones that build qualified pipeline.",
  },
  {
    question: "How much does a B2B Meta Ads agency cost in India?",
    answer:
      "Management fees are typically around ₹30,000 to ₹60,000 per month for smaller accounts and ₹75,000 to ₹2,00,000 or more for experienced performance agencies. Most agencies also recommend a minimum ad budget of about ₹1,00,000 per month. The fee and the ad budget are separate.",
  },
  {
    question: "What is a red flag when choosing a Meta Ads agency for B2B?",
    answer:
      "The biggest red flag is an agency that only talks about cost per lead and reach. For B2B that optimizes for cheap form fills, not buyers. Other red flags are no CRM feedback loop, outsourced creative with no testing process, and reporting that never mentions qualified leads or sales outcomes.",
  },
  {
    question: "Should a B2B business hire a Meta Ads specialist or a full-service agency?",
    answer:
      "For most B2B businesses a full-service partner is better than a pure Meta specialist, because lead quality depends on the whole system: targeting, landing page, tracking, CRM feedback, and follow-up. A specialist who only touches the ad account cannot fix leaks happening on the page or in the CRM.",
  },
  {
    question: "Should the agency or my business own the Meta ad account?",
    answer:
      "Your business should own the Meta Business Suite and ad account, with the agency added as a partner. If an agency insists on owning your ad account, treat it as a red flag, because you can lose your campaign history, audiences, and pixel data if you ever part ways.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Choose a B2B Meta Ads Agency in India: 6 Questions to Ask",
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

export default function HowToChooseB2bMetaAdsAgencyIndiaArticle() {
  return (
    <>
      <JsonLd data={webPageSchema(path, "How to Choose a B2B Meta Ads Agency in India: 6 Questions to Ask", description)} />
      <JsonLd data={articleSchema} />
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Resources", path: "/resources" },
          { name: "Blog", path: "/resources/blog" },
          { name: "How to Choose a B2B Meta Ads Agency in India", path },
        ])}
      />

      <article>
        <Section tone="white" eyebrow="Agency selection" title="How to Choose a B2B Meta Ads Agency in India: 6 Questions to Ask">
          <div className="max-w-3xl space-y-6 text-lg leading-8 text-[#465163]">
            <ArticleByline published="2026-06-27" />
            <p>
              Most B2B businesses pick a Meta Ads agency on price and a nice portfolio, then wonder six months later why the leads do not convert. The problem is rarely the budget. It is that the agency optimized for cheap form fills instead of qualified pipeline.
            </p>
            <p>
              Running Meta Ads for B2B is different from ecommerce. You are not chasing a same-day purchase, you are building a qualified conversation that may close weeks later. These six questions separate an agency that understands that from one that does not.
            </p>
          </div>
        </Section>

        <Section tone="white" title="1. Have you worked with B2B companies in my industry?">
          <div className="max-w-3xl space-y-5 text-lg leading-8 text-[#465163]">
            <p>
              Industry context shapes targeting, creative angles, and what a qualified lead even looks like. An agency that has run B2B campaigns in or near your sector will ramp faster and waste less budget learning your buyer.
            </p>
            <p>
              A strong answer is specific: the sectors they have worked in, the kind of buyer they targeted, and what they learned. A weak answer is a generic claim that they work with everyone.
            </p>
          </div>
        </Section>

        <Section tone="white" title="2. Can you show qualified lead metrics, not just CPL?">
          <div className="max-w-3xl space-y-5 text-lg leading-8 text-[#465163]">
            <p>
              Cost per lead is the easiest number to report and the easiest to game. A low CPL means nothing if the leads never become sales conversations. The agency should report on qualified leads and cost per real conversation, not just raw form fills.
            </p>
            <p>
              Ask how they define a qualified lead and how they measure it. If the only metric they offer is CPL and reach, they are optimizing for volume, not buyers.
            </p>
          </div>
        </Section>

        <Section tone="white" title="3. Do you optimize based on CRM data and SQLs, not only Meta leads?">
          <div className="max-w-3xl space-y-5 text-lg leading-8 text-[#465163]">
            <p>
              This is the question that matters most for B2B. When an agency sends only form-fill data to Meta, the algorithm learns to find more form fillers. When it sends qualified leads and opportunities back from your CRM, the algorithm learns to find buyers.
            </p>
            <p>
              A good agency connects your CRM to Meta and Google so sales-qualified leads and opportunities flow back as conversion events. Without that loop, you are paying the platform to optimize for the wrong outcome.
            </p>
          </div>
        </Section>

        <Section tone="white" title="4. Who creates the creative, and do you have an in-house design team?">
          <div className="max-w-3xl space-y-5 text-lg leading-8 text-[#465163]">
            <p>
              Creative is the biggest lever in Meta Ads. The hook and angle decide who clicks, which decides lead quality before targeting even matters. An agency that outsources creative and does not test it is leaving the most important variable to chance.
            </p>
            <p>
              Look for an in-house creative process with a steady stream of new hooks, statics, and video concepts, plus a testing rhythm. One polished ad is not a strategy.
            </p>
          </div>
        </Section>

        <Section tone="white" title="5. What is your average monthly ad spend under management?">
          <div className="max-w-3xl space-y-5 text-lg leading-8 text-[#465163]">
            <p>
              This tells you whether the agency is used to accounts at your stage. An agency that runs ₹50,000 per month accounts and one that runs ₹10,00,000 per month accounts work very differently. Neither is wrong, but you want a fit.
            </p>
            <p>
              It also surfaces how they think about budget. A good answer connects spend to the data needed to optimize, not just to a bigger retainer.
            </p>
          </div>
        </Section>

        <Section tone="white" title="6. How often will you review campaigns?">
          <div className="max-w-3xl space-y-5 text-lg leading-8 text-[#465163]">
            <p>
              Early campaign decisions compound, so review cadence matters most in the first 90 days. Weekly reviews against lead quality and sales feedback catch problems while they are cheap to fix.
            </p>
            <p>
              Ask what they review, not just how often. The right answer ties each review to qualified lead cost and sales outcomes, not just impressions and clicks.
            </p>
          </div>
        </Section>

        <Section tone="white" title="What B2B Meta Ads agencies charge in India">
          <div className="max-w-3xl space-y-5 text-lg leading-8 text-[#465163]">
            <p>
              Pricing has two separate parts: the agency management fee and the ad budget you spend on Meta. You pay the ad budget directly to the platform.
            </p>
            <p>
              Management fees in India typically run about ₹30,000 to ₹60,000 per month for smaller accounts and ₹75,000 to ₹2,00,000 or more per month for experienced performance agencies. Most agencies recommend a minimum ad budget of around ₹1,00,000 per month so the algorithm gets enough data to optimize.
            </p>
          </div>
        </Section>

        <Section tone="white" eyebrow="Evidence" title="Why these questions matter, in the data">
          <div className="max-w-3xl space-y-5 text-lg leading-8 text-[#465163]">
            <p>
              The CRM question is not optional. Closed-loop CRM tracking returns{" "}
              <Cite href="https://nucleusresearch.com/research/single/crm-returns-3-10-per-dollar-spent/">3.10 dollars for every dollar spent</Cite> (Nucleus Research), and advertisers who move to data-driven attribution see a{" "}
              <Cite href="https://blog.google/products/ads-commerce/turning-data-into-results-with-data-driven-attribution/">6 percent average lift in conversions</Cite> (Google). An agency that ignores CRM data leaves that on the table.
            </p>
            <p>
              The creative and content questions matter because buyers decide before they ever talk to you. Gartner found B2B buyers spend just{" "}
              <Cite href="https://www.gartner.com/en/sales/insights/b2b-buying-journey">17 percent of the buying journey meeting with suppliers</Cite>. The ad and the page do most of the selling, so they have to be built and tested seriously.
            </p>
            <PullQuote
              quote="If an agency only wants to talk about cost per lead, that is your answer. For B2B, the cheap-lead number is the easiest thing to win and the least likely to make you money. Ask about CRM data and qualified pipeline, and watch who has a real answer."
              attribution="Radhesh Agrawal, Founder, Done For You"
            />
          </div>
        </Section>

        <Section tone="white" eyebrow="FAQ" title="Common questions about choosing a B2B Meta Ads agency">
          <FAQ faqs={faqs} />
        </Section>

        <Section tone="white" eyebrow="Sources" title="Sources">
          <SourceList
            sources={[
              { label: "CRM returns $3.10 per dollar spent — Nucleus Research (2023)", href: "https://nucleusresearch.com/research/single/crm-returns-3-10-per-dollar-spent/" },
              { label: "Turning data into results with data-driven attribution — Google (2022)", href: "https://blog.google/products/ads-commerce/turning-data-into-results-with-data-driven-attribution/" },
              { label: "The B2B Buying Journey — Gartner", href: "https://www.gartner.com/en/sales/insights/b2b-buying-journey" },
            ]}
          />
        </Section>
      </article>

      <section className="bg-white py-16">
        <div className="container-wide flex flex-col items-start justify-between gap-8 rounded-sm border border-[#050505]/12 bg-[#f6f5f1] p-7 md:flex-row md:items-center">
          <div>
            <p className="eyebrow eyebrow-default">Ready to shortlist?</p>
            <h2 className="mt-4 max-w-3xl text-3xl font-black leading-none sm:text-4xl">
              See how Done For You answers all six questions.
            </h2>
          </div>
          <ButtonLink href="/services/b2b-meta-ads-agency" variant="dark">
            View our B2B Meta Ads agency
          </ButtonLink>
        </div>
      </section>

      <CTASection
        title="Looking for a B2B Meta Ads agency that passes all six?"
        text="Done For You optimizes for qualified pipeline using CRM feedback, in-house creative, and weekly reviews. Book a call and see where your current funnel is leaking."
        buttonLabel="Book a Call"
        buttonHref="/#free-audit-form"
      />
    </>
  );
}
