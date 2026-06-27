import type { Metadata } from "next";
import Link from "next/link";
import { ArticleByline } from "@/components/ArticleByline";
import { Cite, PullQuote, SourceList } from "@/components/Citations";
import { CTASection } from "@/components/CTASection";
import { FAQ } from "@/components/FAQ";
import { JsonLd } from "@/components/JsonLd";
import { Section } from "@/components/Section";
import { breadcrumbSchema, faqSchema, webPageSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/site";

const path = "/resources/blog/how-to-measure-marketing-agency-performance";
const title = "How to Measure Marketing Agency Performance";
const description =
  "Learn how to measure marketing agency performance: the KPIs that map to revenue, the right review cadence, 30/60/90-day expectations, and reporting red flags.";

export const metadata: Metadata = pageMetadata({ title, description, path });

const faqs = [
  {
    question: "How do I know if my marketing agency is doing a good job?",
    answer:
      "Judge the agency on metrics that map to money, not on impressions or clicks. Ask for qualified leads, cost per qualified lead, pipeline created, and how many leads turned into customers. If the agency cannot tie its work to your sales numbers, you do not have enough to judge it on.",
  },
  {
    question: "What KPIs should a marketing agency report?",
    answer:
      "A good report shows leading indicators (qualified leads, cost per qualified lead, lead quality) and lagging indicators (pipeline created, customers won, CAC, ROI). Spend and impressions can stay in the report, but they should never be the headline. The headline should always be what happened to your revenue.",
  },
  {
    question: "How long before a marketing agency shows results?",
    answer:
      "The first 30 days are setup and learning. By 60 days you should see lead volume and cost per lead stabilising. By 90 days you should be able to judge lead quality and early pipeline. Expecting profit in week two is the fastest way to kill a campaign that needs data to learn.",
  },
  {
    question: "What are vanity metrics?",
    answer:
      "Vanity metrics look good on a slide but do not inform any decision: impressions, reach, raw clicks, likes, and follower counts. They rise when spend rises, so they always look like progress. The test is simple. If the number changing would not change what you do next, it is a vanity metric.",
  },
  {
    question: "How often should my agency send reports?",
    answer:
      "Weekly during the first 90 days, because that is when decisions are being made fast and you need to catch problems early. After the account stabilises, a monthly deep review plus a short weekly pulse works well. Daily dashboards are useful, but a daily report usually means noise, not signal.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Measure Your Marketing Agency's Performance",
  description,
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
};

export default function MeasureMarketingAgencyPerformanceArticle() {
  return (
    <>
      <JsonLd data={webPageSchema(path, title, description)} />
      <JsonLd data={articleSchema} />
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Resources", path: "/resources" },
          { name: "Blog", path: "/resources/blog" },
          { name: title, path },
        ])}
      />

      <article>
        <Section tone="white" eyebrow="Agency management" title="How to Measure Your Marketing Agency's Performance">
          <div className="max-w-3xl space-y-5 text-lg leading-8 text-[#465163]">
            <ArticleByline published="2026-06-27" />
            <p>
              Hiring an agency is the easy part. The hard part starts a month later, when a slide
              deck lands in your inbox full of impressions and reach, and you still cannot answer
              the only question that matters: is this working? I have sat on both sides of that
              report, and I want to give you a way to judge an agency that does not rely on trust.
            </p>
            <p>
              This is the companion to choosing an agency. Once you have picked one, you need a
              method to check up on it. The good news is that the method is not complicated. You
              separate the numbers that look like progress from the numbers that are progress, and
              you hold the agency to the second list.
            </p>
            <p>
              If you have not picked an agency yet, start with{" "}
              <Link
                href="/resources/blog/how-to-choose-b2b-meta-ads-agency-india"
                className="font-medium text-[#164E50] underline decoration-[#CDEECD] underline-offset-4 transition hover:text-[#103D3F]"
              >
                how to choose a B2B Meta ads agency in India
              </Link>
              . If you already have one, read on.
            </p>
          </div>
        </Section>

        <Section tone="white" title="Why do most agency reports mislead you?">
          <div className="max-w-3xl space-y-5 text-lg leading-8 text-[#465163]">
            <p>
              Most reports are built to make the agency look busy, not to help you make a decision.
              They lead with impressions, reach, and clicks because those numbers always go up when
              spend goes up. A report can show a beautiful upward chart while your bank balance does
              the opposite.
            </p>
            <p>
              The honest definition of a vanity metric is a number that does not inform any action.
              If reach doubling would not change a single thing you do next week, reach is a vanity
              metric for you. Impressions, raw clicks, likes, and follower counts almost always
              fall into that bucket for a business owner trying to grow revenue.
            </p>
            <p>
              This matters more in B2B than people think. Your buyers spend most of their journey
              researching on their own before they ever talk to your sales team, so surface activity
              tells you very little about whether real buyers are moving toward you. You need metrics
              that follow the lead all the way to the sale.
            </p>
          </div>
        </Section>

        <Section tone="white" title="Which metrics actually matter, leading versus lagging?">
          <div className="max-w-3xl space-y-5 text-lg leading-8 text-[#465163]">
            <p>
              Split the metrics into two groups. Leading indicators tell you what is happening now
              and let you steer early. Lagging indicators tell you whether the steering worked, and
              they are the ones that map to money.
            </p>
            <p>
              Leading indicators worth tracking: qualified leads (not raw leads), cost per qualified
              lead, and lead quality as judged by your sales team. Raw cost per lead is a trap on its
              own. A cheap lead that never buys costs you more than an expensive lead that closes.
              I wrote about that distinction in detail in{" "}
              <Link
                href="/resources/blog/qualified-leads-vs-cost-per-lead-b2b"
                className="font-medium text-[#164E50] underline decoration-[#CDEECD] underline-offset-4 transition hover:text-[#103D3F]"
              >
                qualified leads versus cost per lead
              </Link>
              .
            </p>
            <p>
              Lagging indicators worth tracking: pipeline created, customers won, lead-to-customer
              rate, customer acquisition cost (CAC), and return on investment. These are slower to
              move, but they are the truth. An agency that only ever reports leading indicators is
              avoiding the scoreboard that counts.
            </p>
            <p>
              For a sense of what healthy numbers look like in your market, our{" "}
              <Link
                href="/resources/blog/b2b-lead-generation-benchmarks-india"
                className="font-medium text-[#164E50] underline decoration-[#CDEECD] underline-offset-4 transition hover:text-[#103D3F]"
              >
                B2B lead generation benchmarks for India
              </Link>{" "}
              give you reference points so you are not judging in a vacuum.
            </p>
          </div>
        </Section>

        <Section tone="white" title="How do you tie agency work to revenue?">
          <div className="max-w-3xl space-y-5 text-lg leading-8 text-[#465163]">
            <p>
              The link between an ad and a sale lives in your CRM, not in the ad platform. Without a
              feedback loop, the agency optimises toward whatever the platform counts as a
              conversion, which is usually a form fill. That is how you end up with thousands of
              cheap leads and an empty sales pipeline.
            </p>
            <p>
              The fix is to send sales outcomes back into your reporting. When the agency knows which
              leads became qualified and which became customers, it can optimise toward buyers
              instead of form fills. This closed loop is also where the returns sit. We build this
              for clients through our{" "}
              <Link
                href="/services/crm-tracking-nurture"
                className="font-medium text-[#164E50] underline decoration-[#CDEECD] underline-offset-4 transition hover:text-[#103D3F]"
              >
                CRM tracking and nurture service
              </Link>
              , and the mechanics are covered in{" "}
              <Link
                href="/resources/blog/crm-based-optimization-meta-ads-b2b"
                className="font-medium text-[#164E50] underline decoration-[#CDEECD] underline-offset-4 transition hover:text-[#103D3F]"
              >
                CRM-based optimization for B2B Meta ads
              </Link>
              .
            </p>
            <p>
              If your agency tells you closed-loop tracking is not possible or not worth it, treat
              that as a warning. It is the single highest-leverage thing you can set up, because it
              turns every future report from an opinion into a measurement.
            </p>
          </div>
        </Section>

        <Section tone="white" title="What is the right review cadence?">
          <div className="max-w-3xl space-y-5 text-lg leading-8 text-[#465163]">
            <p>
              In the first 90 days, review weekly. This is when the account is learning and when most
              of the meaningful decisions get made, so you want to catch a wrong turn within days,
              not weeks. The weekly review should look at spend pacing, lead volume, cost per
              qualified lead, and any creative that is clearly winning or losing.
            </p>
            <p>
              After the account stabilises, shift to a monthly deep review with a short weekly pulse.
              The monthly review is where you examine the lagging indicators: pipeline created,
              customers won, CAC, and ROI against the target you agreed at the start. The weekly
              pulse just confirms nothing has broken.
            </p>
            <p>
              Whatever the cadence, the structure should stay the same. What did we spend, what did
              we get that maps to revenue, what are we changing next, and why. If a review never
              produces a decision, it is a status update, not a review.
            </p>
          </div>
        </Section>

        <Section tone="white" title="What should you expect at 30, 60, and 90 days?">
          <div className="max-w-3xl space-y-5 text-lg leading-8 text-[#465163]">
            <p>
              Set expectations by phase, because a campaign that is punished for not being profitable
              in week two never gets the data it needs to become profitable. Days 1 to 30 are setup
              and learning: tracking goes live, creative gets tested, and the platform gathers signal.
              Lead cost will be volatile and that is normal.
            </p>
            <p>
              Days 31 to 60 are where lead volume and cost per lead should start to settle into a
              range. You are not judging profit yet, but you should see the account finding its feet
              and the obviously weak creative getting cut.
            </p>
            <p>
              Days 61 to 90 are your first real checkpoint. By now you should be able to judge lead
              quality with input from sales, see early pipeline forming, and have a defensible read
              on cost per qualified lead. Early results, not miracles. If 90 days produce no
              qualified pipeline and no clear plan to improve it, that is a real conversation to have.
            </p>
          </div>
        </Section>

        <Section tone="white" title="What are the reporting red flags?">
          <div className="max-w-3xl space-y-5 text-lg leading-8 text-[#465163]">
            <p>
              A few patterns reliably signal an agency hiding behind vanity numbers. The report leads
              with impressions and reach. Spend goes up every month but qualified leads do not. The
              agency cannot or will not tell you which leads became customers. Reports arrive late or
              only after you ask.
            </p>
            <p>
              Other warning signs: every metric is framed as a win even when revenue is flat, the
              account has no clear testing plan, and questions about cost per qualified lead get
              answered with cost per click. For a fuller list specific to ad agencies, see{" "}
              <Link
                href="/resources/blog/meta-ads-agency-red-flags"
                className="font-medium text-[#164E50] underline decoration-[#CDEECD] underline-offset-4 transition hover:text-[#103D3F]"
              >
                Meta ads agency red flags
              </Link>
              .
            </p>
            <p>
              None of these alone is proof of a bad agency. Several together, three months in, is
              your signal to ask harder questions or get an outside read on the account.
            </p>
          </div>
        </Section>

        <Section tone="white" eyebrow="Evidence" title="What the data says about measurement and revenue">
          <div className="max-w-3xl space-y-5 text-lg leading-8 text-[#465163]">
            <p>
              The case for a CRM feedback loop is not just intuition. Nucleus Research found that CRM
              returns an average of{" "}
              <Cite href="https://nucleusresearch.com/research/single/crm-returns-3-10-per-dollar-spent/">
                3.10 US dollars for every dollar spent, based on case studies analysed over a decade,
                though it notes that return has declined from 4.90 dollars as systems grew more complex
              </Cite>
              . That return only shows up when the loop is actually closed and used.
            </p>
            <p>
              Better attribution moves the needle too. Google reports that advertisers who switch to
              data-driven attribution from another model typically see a{" "}
              <Cite href="https://blog.google/products/ads-commerce/turning-data-into-results-with-data-driven-attribution/">
                6 percent average increase in conversions
              </Cite>
              , simply by counting the right touchpoints.
            </p>
            <p>
              And the reason surface metrics mislead in B2B is structural. Gartner finds that B2B
              buyers spend only about{" "}
              <Cite href="https://www.gartner.com/en/sales/insights/b2b-buying-journey">
                17 percent of their entire purchase journey meeting with all potential suppliers
                combined
              </Cite>
              , and far less with any single one. Most of the buying happens out of your sight, which
              is exactly why you have to measure outcomes, not activity. These are US and global
              figures, but the direction holds in India too.
            </p>
            <PullQuote
              quote="Judge an agency on the numbers that change what you do next. Everything else is decoration."
              attribution="Radhesh Agrawal, Founder, Done For You"
            />
            <p>
              You can see how we report against these standards on our{" "}
              <Link
                href="/results"
                className="font-medium text-[#164E50] underline decoration-[#CDEECD] underline-offset-4 transition hover:text-[#103D3F]"
              >
                results page
              </Link>
              .
            </p>
          </div>
        </Section>

        <Section tone="white" title="A checklist you can use this week">
          <div className="max-w-3xl space-y-5 text-lg leading-8 text-[#465163]">
            <p>
              You do not need a new tool to start. Pull your last agency report and run it through
              five questions. Does it lead with a revenue or pipeline number rather than impressions?
              Does it show qualified leads and cost per qualified lead, not just raw leads? Can the
              agency tell you how many leads became customers?
            </p>
            <p>
              Then two more. Is there a clear decision coming out of the report about what changes
              next? And is closed-loop tracking from your CRM actually in place? If you answer no to
              three or more of these, you have found your next conversation with the agency.
            </p>
            <p>
              If you want a second opinion on what your numbers are really saying, that is exactly
              what our{" "}
              <Link
                href="/free-audit"
                className="font-medium text-[#164E50] underline decoration-[#CDEECD] underline-offset-4 transition hover:text-[#103D3F]"
              >
                free audit
              </Link>{" "}
              is for.
            </p>
          </div>
        </Section>

        <Section tone="white" eyebrow="FAQ" title="Common questions about measuring agency performance">
          <FAQ faqs={faqs} />
        </Section>

        <Section tone="white" eyebrow="Sources" title="Sources">
          <SourceList
            sources={[
              {
                label: "Nucleus Research, CRM returns $3.10 per dollar spent (2023) [US/global]",
                href: "https://nucleusresearch.com/research/single/crm-returns-3-10-per-dollar-spent/",
              },
              {
                label: "Google, Turning data into results with data-driven attribution [global]",
                href: "https://blog.google/products/ads-commerce/turning-data-into-results-with-data-driven-attribution/",
              },
              {
                label: "Gartner, The B2B Buying Journey [global]",
                href: "https://www.gartner.com/en/sales/insights/b2b-buying-journey",
              },
            ]}
          />
        </Section>
      </article>

      <CTASection
        title="Not sure your agency is actually working?"
        text="Send us your last report and your numbers. We will tell you, plainly, what they say about whether your spend is turning into revenue, and where it is leaking."
        buttonLabel="Book a Call"
        buttonHref="/#free-audit-form"
      />
    </>
  );
}
