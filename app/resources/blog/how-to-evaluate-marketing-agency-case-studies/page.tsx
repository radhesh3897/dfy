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

const path = "/resources/blog/how-to-evaluate-marketing-agency-case-studies";
const title = "How to Evaluate Marketing Agency Case Studies";
const description =
  "How to evaluate marketing agency case studies: separate vanity metrics from real business outcomes, the exact questions to ask, and the red flags that hide weak results.";

export const metadata: Metadata = pageMetadata({ title, description, path });

const faqs = [
  {
    question: "How do I know if a marketing agency's case studies are real?",
    answer:
      "A real case study names the client or describes them specifically, states a starting baseline, gives a timeframe, and reports an outcome you can tie to money. The strongest test is whether the agency will connect you to that client for a short reference call. If the numbers are impressive but there is no baseline, no timeframe, and no one you can talk to, treat the case study as marketing, not proof.",
  },
  {
    question: "What questions should I ask about a case study?",
    answer:
      "Ask five things. What was the baseline before you started? Over what timeframe? What was the monthly ad spend? Were those qualified leads or just form fills? And can I speak to that client? Honest agencies answer all five without flinching. Vague answers to any of them tell you the result is thinner than the slide suggests.",
  },
  {
    question: "Why does 3x ROAS or 500 leads mean nothing on its own?",
    answer:
      "A number with no context is a decoration, not a result. 3x ROAS on a low-margin offer can still lose money, and it means nothing without knowing the spend, the timeframe, and the tracking behind it. 500 leads is not a win if none of them qualified. Without the baseline, the cost, and whether the leads became customers, these figures cannot tell you the agency will work for you.",
  },
  {
    question: "What are the biggest red flags in agency case studies?",
    answer:
      "No numbers at all, or only clicks and cost per lead. No stated baseline, so you cannot tell what changed. A suspiciously short or cherry-picked time window. No client name and no reference you can call. And results reported purely in platform metrics with no link to pipeline or revenue. Any one is a caution. Several together mean the proof is decoration.",
  },
  {
    question: "How do I check if a case study is relevant to my business?",
    answer:
      "Match it against your reality on three axes. Is the client in a similar industry or selling to a similar buyer? Is the deal size and price point close to yours? And is the sales cycle a similar length? A brilliant result for a low-ticket ecommerce brand tells you very little about whether the agency can generate qualified pipeline for a long B2B sales cycle.",
  },
  {
    question: "Which metrics in a case study actually matter?",
    answer:
      "The ones that map to money: qualified-lead percentage, cost per qualified lead, pipeline created, and revenue or return tied back to spend. These are harder to show than impressions and clicks, which is exactly why they are worth looking for. An agency that reports outcome metrics is telling you it tracks the whole journey, not just the top of it.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Evaluate a Marketing Agency's Case Studies and Results",
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
  datePublished: "2026-06-28",
  dateModified: "2026-06-28",
};

export default function HowToEvaluateMarketingAgencyCaseStudiesArticle() {
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
          { name: "Evaluate Agency Case Studies", path },
        ])}
      />

      <article>
        <Section
          tone="white"
          eyebrow="Agency Selection"
          title="How to Evaluate a Marketing Agency's Case Studies and Results"
        >
          <div className="max-w-3xl space-y-5 text-lg leading-8 text-[#465163]">
            <ArticleByline published="2026-06-28" />
            <p>
              When a founder is comparing agencies, the case studies do a lot of the persuading. They
              are the second-heaviest thing most buyers lean on to rank one agency over another, right
              after price. And they are the easiest thing on the whole website to dress up.
            </p>
            <p>
              I have written our own case studies, and I have read hundreds of other agencies' case
              studies while helping founders make sense of a shortlist. The pattern is almost always
              the same. A big number in bold, a happy logo, and none of the context that would tell
              you whether the result is real or whether it would ever repeat for you.
            </p>
            <p>
              This guide teaches you to read a case study the way a sharp buyer does. You separate the
              numbers that look like results from the numbers that are results, and you ask the few
              questions that make a weak case study fall apart. If you are still building a shortlist,
              pair this with{" "}
              <Link
                href="/resources/blog/how-to-choose-b2b-meta-ads-agency-india"
                className="font-medium text-[#164E50] underline decoration-[#CDEECD] underline-offset-4 transition hover:text-[#103D3F]"
              >
                how to choose a B2B Meta ads agency in India
              </Link>
              .
            </p>
          </div>
        </Section>

        <Section tone="white" title="Why case studies deserve real scrutiny">
          <div className="max-w-3xl space-y-5 text-lg leading-8 text-[#465163]">
            <p>
              Case studies carry weight for a reason. In B2B, buyers trust the experience of another
              customer far more than anything the agency says about itself. Sopro's buyer research
              found that{" "}
              <Cite href="https://sopro.io/resources/blog/b2b-buyer-statistics-and-insights/">
                nearly 7 in 10 B2B marketers consider case studies their most effective form of
                content, and over three-quarters of buyers read user reviews before purchasing
              </Cite>
              . So a case study is not just decoration. It is often the thing that tips a decision.
            </p>
            <p>
              That is exactly why they get polished past the point of honesty. A case study shows you
              the win the agency wants you to see. It rarely shows the starting point, the budget, the
              sales motion behind the leads, or how the result was measured. Those missing pieces are
              where the truth lives.
            </p>
            <p>
              None of this means case studies are worthless. It means you have to read them actively
              instead of being impressed passively. The rest of this piece is the checklist I would
              run in your seat.
            </p>
          </div>
        </Section>

        <Section tone="white" title="Vanity metrics versus outcome metrics inside a case study">
          <div className="max-w-3xl space-y-5 text-lg leading-8 text-[#465163]">
            <p>
              The first thing to check is which kind of number the case study is built on. A vanity
              metric is one that looks impressive but does not inform any decision. Improvado defines
              it as{" "}
              <Cite href="https://improvado.io/blog/what-is-a-vanity-metric">
                a data point that is easily manipulated and appears impressive on a superficial level,
                but fails to provide meaningful insight into business performance or inform future
                strategy
              </Cite>
              . Impressions, reach, clicks, likes, and raw lead counts almost always sit in that
              bucket for a founder trying to grow revenue.
            </p>
            <p>
              Outcome metrics are the opposite. They map to money and they are harder to fake:
              qualified-lead percentage, cost per qualified lead, pipeline created, revenue, and return
              on spend that is actually tracked. A case study that leads with these is telling you the
              agency follows the lead all the way to a sale, not just to a form fill.
            </p>
            <p>
              There is a simple test you can apply to any headline number. If that number doubled, would
              it change a decision you make? Impressions doubling changes nothing. Qualified pipeline
              doubling changes everything. Improvado frames the same test as whether you could{" "}
              <Cite href="https://improvado.io/blog/what-is-a-vanity-metric">
                make a specific decision based on the metric, and whether it directly influences a
                business objective like revenue or retention without multiple logical leaps
              </Cite>
              . I go deeper on this split in{" "}
              <Link
                href="/resources/blog/qualified-leads-vs-cost-per-lead-b2b"
                className="font-medium text-[#164E50] underline decoration-[#CDEECD] underline-offset-4 transition hover:text-[#103D3F]"
              >
                qualified leads versus cost per lead
              </Link>
              .
            </p>
          </div>
        </Section>

        <Section tone="white" title="Why 3x ROAS or 500 leads means nothing without context">
          <div className="max-w-3xl space-y-5 text-lg leading-8 text-[#465163]">
            <p>
              Take the two most common case study headlines. 3x ROAS sounds like a clear win until you
              ask about margin. On a thin-margin offer, 3x can still lose money once you count the cost
              of delivery. And ROAS is only as trustworthy as the tracking behind it, which a case
              study almost never explains.
            </p>
            <p>
              500 leads is worse. A lead count with no qualification behind it tells you the agency was
              good at collecting form fills, nothing more. If none of those 500 turned into sales
              conversations, the number is a cost dressed up as a result. In a long B2B cycle, that gap
              can hide for months before anyone notices the pipeline is empty.
            </p>
            <p>
              The fix is to mentally attach four missing pieces to every headline: the baseline it grew
              from, the timeframe it happened over, the spend behind it, and whether the leads were
              qualified. A number without those four is not a result you can judge. It is a claim you
              are being asked to take on faith.
            </p>
          </div>
        </Section>

        <Section tone="white" title="The five questions that make a case study prove itself">
          <div className="max-w-3xl space-y-5 text-lg leading-8 text-[#465163]">
            <p>
              You do not need to be a marketer to interrogate a case study. You need five questions,
              and you need to watch how comfortably they get answered. The first is the baseline. What
              were the numbers before the agency started? A jump from 10 to 30 leads is a different
              story from a jump from 300 to 320, and a good case study tells you which one it is.
            </p>
            <p>
              The second is timeframe. Over what period did this happen? A result across a clean twelve
              months is real. A result cherry-picked from the one strong month is a highlight reel. The
              third is spend. What was the monthly budget behind the number, so you can judge whether it
              maps to your own budget at all.
            </p>
            <p>
              The fourth is quality. Were these qualified leads that the client's sales team accepted,
              or just raw volume the platform reported? The fifth is the one that settles everything:
              can I speak to that client? A short reference call cuts through every polished slide. An
              agency confident in its work will make the introduction. If that door quietly closes,
              you have your answer.
            </p>
          </div>
        </Section>

        <Section tone="white" title="Relevance: does this result even apply to you?">
          <div className="max-w-3xl space-y-5 text-lg leading-8 text-[#465163]">
            <p>
              A case study can be completely honest and still be useless to you. The question is whether
              the win transfers to your business, and that comes down to three checks. The first is
              industry and buyer. Was the client selling to a buyer like yours, or is this a
              low-consideration consumer product with nothing in common with your sales motion?
            </p>
            <p>
              The second is deal size. A stunning result on a five thousand rupee product tells you very
              little about whether the agency can generate qualified pipeline for a fifteen lakh
              contract. The buying behaviour, the objections, and the sales support required are
              different worlds. The third is sales cycle. A same-day purchase and a six-month B2B
              evaluation need different strategies, and an agency that only has short-cycle wins may
              never have run an account like yours.
            </p>
            <p>
              This is why industry-adjacent proof matters more than a bigger headline from an unrelated
              space. I wrote about how much this actually weighs in{" "}
              <Link
                href="/resources/blog/does-your-b2b-ads-agency-need-industry-experience"
                className="font-medium text-[#164E50] underline decoration-[#CDEECD] underline-offset-4 transition hover:text-[#103D3F]"
              >
                whether your B2B ads agency needs industry experience
              </Link>
              . Judge a case study on how close it sits to your reality, not on how big the number is.
            </p>
          </div>
        </Section>

        <Section tone="white" title="The red flags that tell you a case study is hiding something">
          <div className="max-w-3xl space-y-5 text-lg leading-8 text-[#465163]">
            <p>
              A few patterns reliably mean the proof is thinner than it looks. No numbers at all, just
              adjectives like massive growth and incredible results. Or numbers that stop at clicks and
              cost per lead, never reaching pipeline or revenue. Both are ways of looking busy without
              showing outcomes.
            </p>
            <p>
              Next: no stated baseline, so you cannot tell what actually changed. A time window that is
              suspiciously short or oddly specific, which usually means the rest of the timeline was
              less flattering. And no client name plus no reference you can call, which removes the one
              thing that would let you verify any of it.
            </p>
            <p>
              The deepest red flag is results reported purely in platform metrics, with no link back to
              the client's CRM or sales numbers. That tells you the agency optimised toward what the ad
              platform counts, not toward what the business earns. These overlap with the warning signs
              in{" "}
              <Link
                href="/resources/blog/meta-ads-agency-red-flags"
                className="font-medium text-[#164E50] underline decoration-[#CDEECD] underline-offset-4 transition hover:text-[#103D3F]"
              >
                Meta ads agency red flags
              </Link>
              . One flag is a caution. Several together mean the case study is decoration.
            </p>
          </div>
        </Section>

        <Section tone="white" eyebrow="Evidence" title="What the data says about proof and outcomes">
          <div className="max-w-3xl space-y-5 text-lg leading-8 text-[#465163]">
            <p>
              The reason surface metrics mislead is structural. Gartner finds that B2B buyers spend only
              about{" "}
              <Cite href="https://www.gartner.com/en/sales/insights/b2b-buying-journey">
                17 percent of their entire buying journey meeting with potential suppliers, and when
                comparing several suppliers, just 5 to 6 percent of that time with any one sales rep
              </Cite>
              . Most of the buying happens out of sight, so a case study built on top-of-funnel activity
              tells you almost nothing about whether real buyers moved toward a sale.
            </p>
            <p>
              The metrics that survive scrutiny are the ones tied to money. Trade Press Services argues
              that vanity numbers like impressions, likes, and lead volume{" "}
              <Cite href="https://www.tradepressservices.com/vanity-metrics-are-killing-marketing-roi-what-to-measure-instead/">
                rarely demonstrate how marketing impacts pipeline, revenue, or customer acquisition, and
                should be replaced by conversion rate, cost per acquisition, return on ad spend, and
                lead-to-opportunity conversion
              </Cite>
              . Those are exactly the numbers a strong case study will show, and the ones a weak one
              quietly avoids. These are US and global figures, but the logic holds in India too.
            </p>
            <PullQuote
              quote="A case study is only proof if you can trace the number back to a baseline, a budget, and a client who will pick up the phone."
              attribution="Radhesh Agrawal, Founder, Done For You"
            />
            <p>
              You can see how we present our own numbers, with context rather than bare headlines, on our{" "}
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

        <Section tone="white" title="A quick checklist you can use on any portfolio">
          <div className="max-w-3xl space-y-5 text-lg leading-8 text-[#465163]">
            <p>
              Before your next agency call, run each case study through six questions. Does it show a
              baseline you can see the change from? Does it state a real timeframe and the spend behind
              the result? Does it report qualified leads or pipeline, not just clicks and cost per lead?
            </p>
            <p>
              Then three more. Is the client similar to you in industry, deal size, and sales cycle? Is
              there a name and a reference you could actually call? And does at least one number tie back
              to revenue rather than a platform dashboard? If a case study fails three or more of these,
              it is telling you a smaller story than the headline claims. For the wider view of judging
              an agency once it starts work, read{" "}
              <Link
                href="/resources/blog/how-to-measure-marketing-agency-performance"
                className="font-medium text-[#164E50] underline decoration-[#CDEECD] underline-offset-4 transition hover:text-[#103D3F]"
              >
                how to measure marketing agency performance
              </Link>
              .
            </p>
            <p>
              If you would rather have a second pair of eyes, that is what our{" "}
              <Link
                href="/free-audit"
                className="font-medium text-[#164E50] underline decoration-[#CDEECD] underline-offset-4 transition hover:text-[#103D3F]"
              >
                free audit
              </Link>{" "}
              is for. Send us the case studies you are weighing and we will tell you which numbers are
              real and which are decoration.
            </p>
          </div>
        </Section>

        <Section tone="white" eyebrow="FAQ" title="Common questions about evaluating agency case studies">
          <FAQ faqs={faqs} />
        </Section>

        <Section tone="white" eyebrow="Sources" title="Sources">
          <SourceList
            sources={[
              {
                label: "Gartner, The B2B Buying Journey [global]",
                href: "https://www.gartner.com/en/sales/insights/b2b-buying-journey",
              },
              {
                label: "Improvado, Vanity Metrics: Definition, Examples and What to Track Instead [US/global]",
                href: "https://improvado.io/blog/what-is-a-vanity-metric",
              },
              {
                label:
                  "Trade Press Services, Vanity Metrics Are Killing Marketing ROI: What to Measure Instead [US/global]",
                href: "https://www.tradepressservices.com/vanity-metrics-are-killing-marketing-roi-what-to-measure-instead/",
              },
              {
                label: "Sopro, B2B Buyer Statistics and Insights [US/global]",
                href: "https://sopro.io/resources/blog/b2b-buyer-statistics-and-insights/",
              },
            ]}
          />
        </Section>
      </article>

      <CTASection
        title="Not sure which case studies to believe?"
        text="Send us the agency portfolios you are comparing. We will tell you, plainly, which numbers are real proof and which are decoration, and what to ask before you sign."
        buttonLabel="Book a Call"
        buttonHref="/#free-audit-form"
      />
    </>
  );
}
