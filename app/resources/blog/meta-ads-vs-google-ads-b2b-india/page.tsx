import type { Metadata } from "next";
import { ArticleByline } from "@/components/ArticleByline";
import { Cite, PullQuote, SourceList } from "@/components/Citations";
import { CTASection } from "@/components/CTASection";
import { FAQ } from "@/components/FAQ";
import { JsonLd } from "@/components/JsonLd";
import { Section } from "@/components/Section";
import { breadcrumbSchema, faqSchema, webPageSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/site";

const path = "/resources/blog/meta-ads-vs-google-ads-b2b-india";
const description =
  "Meta Ads and Google Ads work differently for B2B lead generation in India. Here is how to decide which channel to use first and how to use both together.";

export const metadata: Metadata = pageMetadata({
  title: "Meta Ads vs Google Ads for B2B in India",
  description,
  path,
});

const faqs = [
  {
    question: "Is Meta Ads or Google Ads cheaper for B2B leads in India?",
    answer:
      "Meta Ads is often cheaper on raw CPL, with many service campaigns ranging from ₹300 to ₹2,000. Google Ads can cost ₹600 to ₹2,500, but it often brings higher search intent.",
  },
  {
    question: "Can a B2B business run both Meta Ads and Google Ads simultaneously?",
    answer:
      "Yes. Many B2B businesses run both channels once tracking is clean. A practical sequence is 30 to 60 days on Google Ads first, then Meta Ads for retargeting and volume expansion.",
  },
  {
    question: "What budget should I split between Meta Ads and Google Ads?",
    answer:
      "If search demand exists, start with 60 to 70 percent on Google Ads and 30 to 40 percent on Meta Ads. Shift budget after 45 to 60 days based on qualified lead cost.",
  },
  {
    question: "Which platform works better for real estate lead generation in India?",
    answer:
      "Meta Ads often produces lower CPL for real estate, commonly ₹300 to ₹800, while Google Ads captures higher-intent buyers searching by location, project type, or developer name.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Meta Ads vs Google Ads for B2B Lead Generation India",
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
  dateModified: "2026-06-20",
  description,
};

export default function MetaAdsVsGoogleAdsB2BIndiaArticle() {
  return (
    <>
      <JsonLd data={webPageSchema(path, "Meta Ads vs Google Ads for B2B Lead Generation India", description)} />
      <JsonLd data={articleSchema} />
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Resources", path: "/resources" },
          { name: "Blog", path: "/resources/blog" },
          { name: "Meta Ads vs Google Ads for B2B India", path },
        ])}
      />

      <article>
        <Section tone="white" eyebrow="Channel comparison" title="Meta Ads vs Google Ads for B2B Lead Generation India">
          <div className="max-w-3xl space-y-6 text-lg leading-8 text-[#465163]">
            <ArticleByline published="2026-06-13" updated="2026-06-20" />
            <p>
              Meta Ads and Google Ads are not interchangeable for B2B lead generation. Google Ads captures buyers who are actively searching for what you offer. Meta Ads reaches buyers who match your ideal profile but are not searching yet. Most B2B service businesses in India should start with Google Ads if search volume exists, and add Meta Ads to scale volume once Google is profitable.
            </p>
          </div>
        </Section>

        <Section tone="white" title="How does Google Ads work for B2B lead generation?">
          <div className="max-w-3xl space-y-5 text-lg leading-8 text-[#465163]">
            <p>
              Google Ads works for B2B lead generation by capturing people already searching for a service, solution, vendor, or comparison. In India, high-intent B2B search CPL commonly ranges from ₹600 to ₹2,500 depending on competition and keyword intent.
            </p>
            <p>
              It is strongest when prospects already know the problem and are comparing options. Review search term quality every 7 days during launch so broad terms do not waste budget.
            </p>
          </div>
        </Section>

        <Section tone="white" title="How does Meta Ads work for B2B lead generation?">
          <div className="max-w-3xl space-y-5 text-lg leading-8 text-[#465163]">
            <p>
              Meta Ads works for B2B lead generation by reaching people who fit your buyer profile before they actively search. In India, service-business Meta CPL can range from ₹300 to ₹2,000, but qualification must be built into the creative, page, form, and CRM flow.
            </p>
            <p>
              Meta is useful for demand creation, retargeting, webinars, lead magnets, and offer education. Give each audience and creative test at least 14 to 21 days before judging quality.
            </p>
          </div>
        </Section>

        <Section tone="white" title="When should a B2B business use Google Ads first?">
          <div className="max-w-3xl space-y-5 text-lg leading-8 text-[#465163]">
            <p>
              A B2B business should use Google Ads first when buyers are already searching for the category, service, or competitor alternatives. If there are at least 300 to 1,000 relevant monthly searches, Google can validate demand faster than social campaigns.
            </p>
            <p>
              Start with exact and phrase match groups around bottom-of-funnel keywords. Use the first 30 days to identify which terms produce qualified enquiries, not just cheaper clicks.
            </p>
          </div>
        </Section>

        <Section tone="white" title="When does Meta Ads outperform Google Ads for B2B?">
          <div className="max-w-3xl space-y-5 text-lg leading-8 text-[#465163]">
            <p>
              Meta Ads outperforms Google Ads when the market has low search volume, the offer needs education, or the buyer is not actively searching yet. This is common in new categories, coaching, EdTech, high-ticket services, and niche B2B SaaS.
            </p>
            <p>
              Meta can also outperform when Google CPC is too high. If search clicks cost ₹150 to ₹500 and the landing page converts below 4 percent, Meta may create cheaper qualified conversations after a 45 to 60 day learning period.
            </p>
          </div>
        </Section>

        <Section tone="white" title="How do you run Meta Ads and Google Ads together for B2B leads?">
          <div className="max-w-3xl space-y-5 text-lg leading-8 text-[#465163]">
            <p>
              Run Meta Ads and Google Ads together by assigning each channel a different role in the funnel. Google captures high-intent searches, while Meta builds demand, retargets visitors, and educates prospects who need 2 to 5 touches before enquiring.
            </p>
            <p>
              Use shared CRM fields for source, campaign, lead quality, call status, and deal outcome. Review combined channel performance every week for the first 90 days.
            </p>
          </div>
        </Section>

        <Section tone="white" title="Which platform gives better lead quality for B2B service businesses in India?">
          <div className="max-w-3xl space-y-5 text-lg leading-8 text-[#465163]">
            <p>
              Google Ads usually gives better immediate lead intent, while Meta Ads can give better scale once qualification and feedback loops are in place. For many Indian B2B service businesses, Google wins on first-call readiness and Meta wins on volume after 60 to 90 days.
            </p>
            <p>
              The best platform is the one with lower cost per qualified conversation, not lower CPL. Compare both channels using lead-to-call rate, qualified lead cost, and customer acquisition cost.
            </p>
          </div>
        </Section>

        <Section tone="white" eyebrow="Evidence" title="What the data says about each channel">
          <div className="max-w-3xl space-y-5 text-lg leading-8 text-[#465163]">
            <p>
              Measurement shapes the comparison. After Apple introduced App Tracking Transparency, Meta browser signals became less reliable and Meta estimated a{" "}
              <Cite href="https://www.cnbc.com/2022/02/02/facebook-says-apple-ios-privacy-change-will-cost-10-billion-this-year.html">10 billion dollar</Cite> impact in 2022, which is why Meta now depends on server-side CRM data to optimise well. Google, measuring intent on its own search results, was less exposed.
            </p>
            <p>
              On the Google side, advertisers who move to data-driven attribution typically see a{" "}
              <Cite href="https://blog.google/products/ads-commerce/turning-data-into-results-with-data-driven-attribution/">6 percent average increase in conversions</Cite> (Google). Both channels reward better measurement, not just bigger budgets.
            </p>
            <PullQuote
              quote="It is rarely Meta versus Google. Search captures demand that already exists. Meta creates demand that search cannot reach. The mistake is treating them as substitutes instead of stages."
              attribution="Radhesh Agrawal, Founder, Done For You"
            />
          </div>
        </Section>

        <Section tone="white" eyebrow="FAQ" title="What should you know before choosing Meta Ads or Google Ads?">
          <FAQ faqs={faqs} />
        </Section>
        <Section tone="white" eyebrow="Sources" title="Sources">
          <SourceList
            sources={[
              { label: "Meta says Apple iOS privacy change will cost $10 billion this year — CNBC (2022)", href: "https://www.cnbc.com/2022/02/02/facebook-says-apple-ios-privacy-change-will-cost-10-billion-this-year.html" },
              { label: "Turning data into results with data-driven attribution — Google (2022)", href: "https://blog.google/products/ads-commerce/turning-data-into-results-with-data-driven-attribution/" },
            ]}
          />
        </Section>
      </article>

      <CTASection
        title="Want DFY to review which channel should come first?"
        text="Request a free audit and we will review search demand, Meta audience fit, funnel readiness, and tracking gaps."
        buttonLabel="Get a Free Audit"
        buttonHref="/#free-audit-form"
      />
    </>
  );
}
