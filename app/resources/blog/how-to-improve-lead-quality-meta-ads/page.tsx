import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { FAQ } from "@/components/FAQ";
import { JsonLd } from "@/components/JsonLd";
import { Section } from "@/components/Section";
import { breadcrumbSchema, faqSchema, webPageSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/site";

const path = "/resources/blog/how-to-improve-lead-quality-meta-ads";
const description =
  "Poor lead quality from Meta Ads is almost always fixable. Here are the five specific changes that improve lead quality for B2B service businesses in India.";

export const metadata: Metadata = pageMetadata({
  title: "How to Improve Lead Quality from Meta Ads",
  description,
  path,
});

const faqs = [
  {
    question: "How long does it take to improve lead quality after changing Meta Ads targeting?",
    answer:
      "Most B2B service businesses see clearer lead quality signals within 14 to 21 days, but stable improvement usually takes 45 to 60 days because Meta needs enough qualified conversion data to learn from.",
  },
  {
    question: "What CPL should I expect after fixing lead quality on Meta Ads?",
    answer:
      "For B2B service businesses in India, a qualified Meta Ads lead often costs ₹800 to ₹2,500 after filters are added. The CPL may rise, but cost per useful sales conversation should fall.",
  },
  {
    question: "Should I use Lead Ads or website conversion campaigns for B2B leads?",
    answer:
      "Use Lead Ads when speed and mobile completion matter, and use website conversion campaigns when the landing page can qualify intent better. Many B2B accounts test both for 30 days before deciding.",
  },
  {
    question: "How do I tell Meta which leads converted in my CRM?",
    answer:
      "You can send qualified lead, booked call, or customer events back to Meta using CAPI, offline conversions, or CRM integrations. The key is sending the event within 24 to 72 hours when possible.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Improve Lead Quality from Meta Ads",
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
  description: "How to fix poor lead quality from Meta Ads for B2B service businesses in India.",
};

export default function ImproveLeadQualityMetaAdsArticle() {
  return (
    <>
      <JsonLd data={webPageSchema(path, "How to Improve Lead Quality from Meta Ads", description)} />
      <JsonLd data={articleSchema} />
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Resources", path: "/resources" },
          { name: "Blog", path: "/resources/blog" },
          { name: "How to Improve Lead Quality from Meta Ads", path },
        ])}
      />

      <article>
        <Section tone="white" eyebrow="Meta Ads guide" title="How to Improve Lead Quality from Meta Ads">
          <div className="max-w-3xl space-y-6 text-lg leading-8 text-[#465163]">
            <p>
              Poor lead quality from Meta Ads is caused by three fixable problems: audience targeting that is too broad, landing pages that do not qualify the visitor, and no feedback loop between your CRM and your ad account. This guide covers each one with specific actions you can take this week.
            </p>
          </div>
        </Section>

        <Section tone="white" title="Why does Meta Ads attract low-quality leads for service businesses?">
          <div className="max-w-3xl space-y-5 text-lg leading-8 text-[#465163]">
            <p>
              Meta Ads attracts low-quality leads when the campaign optimizes for the easiest form fill instead of a qualified buyer action. In most B2B service accounts, this happens within the first 7 to 14 days if the ad set has broad targeting, weak exclusions, and no downstream conversion signal.
            </p>
            <p>
              A campaign can produce 50 leads in a week and still fail if only 5 to 10 percent become useful conversations. The fix starts by defining what a qualified lead means before changing budgets.
            </p>
          </div>
        </Section>

        <Section tone="white" title="How does audience targeting affect lead quality on Meta Ads?">
          <div className="max-w-3xl space-y-5 text-lg leading-8 text-[#465163]">
            <p>
              Audience targeting affects lead quality because Meta needs enough buyer context to separate serious prospects from casual browsers. For B2B service businesses, start with 2 to 4 audience hypotheses and test each for at least 10,000 impressions before making a decision.
            </p>
            <p>
              Use exclusions for students, job seekers, and irrelevant locations when they distort lead quality. Review age, city, device, placement, and form completion patterns every 7 days during the first month.
            </p>
          </div>
        </Section>

        <Section tone="white" title="What should a lead qualification landing page include?">
          <div className="max-w-3xl space-y-5 text-lg leading-8 text-[#465163]">
            <p>
              A lead qualification landing page should explain who the offer is for, who it is not for, and what happens after the enquiry. For B2B services, the page should include 3 to 5 qualifying signals such as budget range, company size, location, timeline, and service need.
            </p>
            <p>
              The form should not ask 12 questions on the first step, but it should ask enough to prevent poor-fit submissions. A practical target is a 10 to 25 percent landing page conversion rate with better lead-to-call quality.
            </p>
          </div>
        </Section>

        <Section tone="white" title="How does CRM feedback improve Meta Ads lead quality over time?">
          <div className="max-w-3xl space-y-5 text-lg leading-8 text-[#465163]">
            <p>
              CRM feedback improves Meta Ads lead quality by telling the ad account which form fills became qualified conversations, booked calls, or customers. Without this loop, Meta may optimize toward the cheapest 20 percent of leads instead of the best 20 percent.
            </p>
            <p>
              Tag every lead with source, campaign, ad, qualification status, and sales outcome. Review the pattern weekly for the first 90 days so creative, targeting, and budget changes are based on sales reality.
            </p>
          </div>
        </Section>

        <Section tone="white" title="What is Meta CAPI and why does it matter for lead quality?">
          <div className="max-w-3xl space-y-5 text-lg leading-8 text-[#465163]">
            <p>
              Meta CAPI is a server-side way to send conversion events from your website or CRM back to Meta with more reliable tracking than browser pixels alone. It matters because iOS privacy changes and cookie loss can hide 15 to 40 percent of useful conversion signals.
            </p>
            <p>
              For lead quality, send events such as qualified lead, booked call, attended call, and customer. These signals usually need 30 to 60 days of clean volume before they meaningfully guide optimization.
            </p>
          </div>
        </Section>

        <Section tone="white" eyebrow="FAQ" title="What should you know before fixing Meta Ads lead quality?">
          <FAQ faqs={faqs} />
        </Section>
      </article>

      <CTASection
        title="Want DFY to review your Meta Ads lead quality?"
        text="Request a free audit and we will review your targeting, landing page, CRM feedback loop, and CAPI setup."
        buttonLabel="Get a Free Audit"
        buttonHref="/#free-audit-form"
      />
    </>
  );
}
