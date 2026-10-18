import type { Metadata } from "next";
import Link from "next/link";
import { BlogArticle, BlogSection } from "@/components/BlogArticle";
import { BlogComparisonTable } from "@/components/BlogComparisonTable";
import { Cite, SourceList } from "@/components/Citations";
import { FAQ } from "@/components/FAQ";
import { pageMetadata } from "@/lib/site";

const path = "/resources/blog/broad-phrase-exact-match-google-ads";
const title = "Broad Match vs Phrase and Exact Match in Google Ads: A Lead Generation Guide";
const description = "Compare Google Ads broad, phrase and exact match for lead generation. Learn how intent, Smart Bidding, negatives and qualified conversion tracking affect your test.";
const published = "2026-10-19";
const updated = published;
export const metadata: Metadata = pageMetadata({ title, description, path });
const contents = [{"id": "match-type-comparison", "label": "How do broad, phrase and exact match differ?"}, {"id": "intent-example", "label": "What does matching by meaning mean in practice?"}, {"id": "phrase-exact-use", "label": "When are phrase and exact match useful?"}, {"id": "broad-smart-bidding", "label": "When should you test broad match with Smart Bidding?"}, {"id": "negative-match", "label": "Do negative keywords work like positive match types?"}, {"id": "test-design", "label": "How should you compare match types fairly?"}, {"id": "quality-example", "label": "Why can a lower CPL still be the worse result?"}, {"id": "google-vs-meta", "label": "Is Google broad match the same as Meta broad targeting?"}, {"id": "faqs", "label": "Frequently asked questions"}, {"id": "sources", "label": "Sources and further reading"}];
const faqs = [{"question": "Does exact match only show ads for the exact keyword?", "answer": "No. Positive exact match can include searches with the same meaning or intent. It is the narrowest of broad, phrase and exact, but it is not limited to one literal query."}, {"question": "Should every Google Ads account begin with phrase and exact?", "answer": "No. Choose the initial setup using the offer, query coverage, measurement readiness, bidding strategy and affordable test scope. Phrase and exact can be useful, but there is no mandatory progression that every account must follow."}, {"question": "Can broad match produce qualified B2B leads?", "answer": "It can, but that outcome needs measurement. Evaluate broad match with Smart Bidding, accurate conversion goals, relevant pages and negative-keyword review. Judge qualified outcomes and economics rather than lead count alone."}, {"question": "Are positive and negative exact match the same?", "answer": "No. Positive exact match uses meaning or intent. Negative exact excludes the specified query without extra words under its own exclusion rule; negatives do not inherit positive matching’s semantic expansion."}, {"question": "When should I decide a match-type test has worked?", "answer": "Decide after comparable cohorts have enough time to qualify and progress, using the budget and outcome rules agreed before the test. There is no universal number of days or leads that makes every result conclusive."}, {"question": "Is Google broad match the same as Meta broad targeting?", "answer": "No. Google Search match types concern eligible searches for keywords. Meta audience inputs concern whom ads may reach. Both require good measurement, but their settings and experiments are different."}];
const sources = [{"label": "Google Ads Help: About keyword matching options", "href": "https://support.google.com/google-ads/answer/7478529?hl=en"}, {"label": "Google Ads Help: About Smart Bidding", "href": "https://support.google.com/google-ads/answer/6167140?hl=en"}, {"label": "Google Ads Help: About the search terms report", "href": "https://support.google.com/google-ads/answer/2472708?hl=en-GB"}, {"label": "Google Ads Help: About negative keywords", "href": "https://support.google.com/google-ads/answer/2453972?hl=en"}];
const articleLink = "font-medium text-[#164E50] underline decoration-[#CDEECD] underline-offset-4 transition hover:text-[#103D3F]";

export default function ArticlePage() {
  return (
    <BlogArticle path={path} title={title} description={description} category={"Google Ads"} published={published} updated={updated}
      summary={"Google Search broad match covers related searches, phrase match includes the keyword’s meaning, and exact match includes the same meaning or intent. Choose a setup using service fit, search terms, budget and reliable conversion measurement. Broad match should be evaluated with Smart Bidding; no match type guarantees qualified leads or replaces negative-keyword review."} contents={contents} faqs={faqs}
      ctaTitle={"Review keyword coverage and conversion quality together"} ctaText={"DFY can assess your Search campaigns, landing pages and CRM feedback before expanding reach. Bring search-term data and qualification outcomes so the match-type decision reflects business results."}>
      <BlogSection id="match-type-comparison" title={"How do broad, phrase and exact match differ?"}>
        <p><Cite href={sources[0].href}>Google defines the three positive match types by related searches, meaning and intent</Cite>. The table describes eligibility; it does not promise that a particular ad will serve in an auction.</p>
        <BlogComparisonTable caption={"Google Search positive keyword match types"} headers={["Type and syntax", "Coverage principle", "Lead-generation implication"]} rows={[["Broad: crm software", "Related searches, including ones without the keyword’s direct meaning", "Can discover demand beyond a manually specified phrase; needs strong conversion signals and review"], ["Phrase: \"crm software\"", "Searches including the meaning of the keyword, potentially implied or more specific", "Useful when you want a narrower service theme while retaining semantic variation"], ["Exact: [crm software]", "Searches with the same meaning or intent", "Narrowest of these types, but still not a literal-only query list"]]} />
        <ul className="list-disc space-y-3 pl-6 marker:text-[#164E50]">
          <li>Broader positive match types encompass the coverage of narrower ones. Adding the same phrase and exact keyword beside a broad version is not required merely to access those searches.</li>
          <li>Eligibility also depends on other campaign settings, negatives, policy approval, bidding and auction conditions. Match type is one input, not the whole campaign.</li>
          <li>These definitions concern Google Search keywords. They do not describe Meta audience interests or every targeting mechanism in other Google campaign types.</li>
        </ul>
      </BlogSection>
      <BlogSection id="intent-example" title={"What does matching by meaning mean in practice?"}>
        <p>Consider a service business advertising CRM implementation. These are illustrative intent judgements, not a prediction of Google’s matching decisions for a specific account.</p>
        <BlogComparisonTable caption={"Illustrative searches for a CRM implementation service"} headers={["Query", "Business interpretation", "What to review"]} rows={[["CRM setup consultant", "May express the advertised implementation need", "Service fit, destination and qualified enquiry outcomes"], ["CRM software comparison", "May indicate software research rather than implementation hiring", "Whether the offer helps this buyer and whether later outcomes justify the spend"], ["CRM certification course", "May indicate training intent", "Exclude if training is outside the service campaign"], ["Free CRM template", "May indicate a different price point or requirement", "Investigate relevance before applying a broad exclusion"]]} />
        <ul className="list-disc space-y-3 pl-6 marker:text-[#164E50]">
          <li>Do not decide quality from a keyword label alone. Someone searching for a consultant may still be outside your geography or budget.</li>
          <li>Keep the landing page specific enough to explain the service, intended customer and next step. A relevant query sent to an unclear page can fail to convert.</li>
          <li>Read the actual search terms and sales feedback together. <Cite href={sources[2].href}>The search terms report has privacy-related omissions</Cite>, so query-level visibility is not complete.</li>
        </ul>
      </BlogSection>
      <BlogSection id="phrase-exact-use" title={"When are phrase and exact match useful?"}>
        <ul className="list-disc space-y-3 pl-6 marker:text-[#164E50]">
          <li><strong>A tightly defined offer:</strong> use narrower themes when adjacent meanings produce leads the business cannot serve.</li>
          <li><strong>A constrained test:</strong> phrase or exact can help focus coverage while you validate a service page and lead handling. They do not guarantee a cheap or conclusive test.</li>
          <li><strong>Specific intent analysis:</strong> separate important service themes when the distinction changes the ad, destination or business decision. Avoid splitting an account into tiny segments without a reason.</li>
          <li><strong>Limited measurement confidence:</strong> fix conversion tracking before widening coverage. A narrower setup can reduce some exposure, but it cannot correct an event that counts spam as success.</li>
          <li><strong>Ongoing relevance checks:</strong> review queries and negatives even with exact match. The word “exact” should not be interpreted as “only these literal characters”.</li>
        </ul>
        <p>You do not need to follow a mandatory exact → phrase → broad sequence. Start with the setup that matches the service, measurement readiness and affordable test scope.</p>
      </BlogSection>
      <BlogSection id="broad-smart-bidding" title={"When should you test broad match with Smart Bidding?"}>
        <p><Cite href={sources[0].href}>Google describes using Smart Bidding as critical with broad match</Cite>. <Cite href={sources[1].href}>Its Smart Bidding guidance emphasises accurate conversion data</Cite>. For a lead-generation business, the quality of the recorded goal therefore deserves attention before more reach.</p>
        <ul className="list-disc space-y-3 pl-6 marker:text-[#164E50]">
          <li><strong>The business goal is clear:</strong> distinguish an enquiry, a qualified lead, an opportunity and a customer. Decide which event is suitable for optimisation and technically eligible to use.</li>
          <li><strong>The signal is reliable:</strong> eliminate duplicate submissions, incorrect success events and obvious spam. Check that later CRM events can be attributed consistently where permitted.</li>
          <li><strong>The signal is timely enough:</strong> understand the gap between the click, enquiry and qualification. Delayed or sparse outcomes can make interpretation and bidding harder.</li>
          <li><strong>The offer and geography are ready:</strong> broader query coverage should still lead to a service the team can deliver in the locations it serves.</li>
          <li><strong>The test is affordable:</strong> set a budget and review criteria the business can sustain through conversion lag. There is no universal number of leads or days that makes every account ready.</li>
        </ul>
        <p>If tracking needs work, begin with the <Link className={articleLink} href="/resources/blog/crm-tracking-setup-for-service-businesses">CRM tracking setup guide</Link> and <Link className={articleLink} href="/services/crm-tracking-nurture">DFY’s tracking and nurture service</Link>. More observed form fills are not necessarily better training data.</p>
      </BlogSection>
      <BlogSection id="negative-match" title={"Do negative keywords work like positive match types?"}>
        <p>No. <Cite href={sources[3].href}>Google’s negative matching rules differ from the positive keyword rules</Cite>. A Search negative excludes queries; it does not inherit positive matching’s semantic expansion.</p>
        <ul className="list-disc space-y-3 pl-6 marker:text-[#164E50]">
          <li><strong>Negative broad:</strong> all negative terms must occur, in any order, for the exclusion to apply.</li>
          <li><strong>Negative phrase:</strong> the specified phrase must appear in the same order; the query can contain other words.</li>
          <li><strong>Negative exact:</strong> the query must contain those terms in that order without extra words.</li>
          <li><strong>Variants:</strong> negatives do not automatically cover close variants or synonyms. Add relevant alternatives and singular/plural forms as needed. Google’s current guidance accounts for casing and misspellings automatically.</li>
          <li><strong>Scope:</strong> select ad-group, campaign or broader shared exclusions deliberately. Avoid blocking a service that another campaign actually offers.</li>
        </ul>
        <p>For example, a broad negative “CRM jobs” can exclude “jobs using CRM”, while the phrase negative “CRM jobs” would not exclude that reordered query by the phrase rule alone. Use the <Link className={articleLink} href="/resources/blog/google-ads-search-terms-clinics">clinic search-term guide</Link> for a worked negative-match table and review record.</p>
      </BlogSection>
      <BlogSection id="test-design" title={"How should you compare match types fairly?"}>
        <ol className="list-decimal space-y-3 pl-6 marker:text-[#164E50]">
          <li><strong>Write the hypothesis.</strong> For example: broad match with the same suitable Smart Bidding goal may find additional qualified demand at an acceptable media cost per qualified lead.</li>
          <li><strong>Choose an appropriate experiment.</strong> Use an account experiment where supported or a clearly documented comparison. Simply running overlapping campaigns can introduce differences that make the result difficult to interpret.</li>
          <li><strong>Keep major inputs comparable.</strong> Hold the service, geography, destination, conversion definitions and follow-up process consistent. Record unavoidable differences.</li>
          <li><strong>Set decision and budget rules in advance.</strong> Define acceptable qualified-lead cost, operational capacity and stop conditions. Do not invent statistical certainty from a small sample.</li>
          <li><strong>Allow for conversion lag.</strong> Compare enquiry cohorts with similar time to qualify and progress. Do not compare yesterday’s enquiries against last month’s completed sales.</li>
          <li><strong>Inspect the trade-off.</strong> Check qualified volume, query relevance, media CPQL, opportunities and customers. Retain a broader setup only when its incremental outcomes justify the costs and workload.</li>
        </ol>
      </BlogSection>
      <BlogSection id="quality-example" title={"Why can a lower CPL still be the worse result?"}>
        <p>Hypothetical comparison, not a client result or prediction: each setup spends ₹20,000 in media on comparable enquiry cohorts. The qualification rule and follow-up window are identical; agency and software fees are excluded.</p>
        <BlogComparisonTable caption={"Illustrative match-type test economics"} headers={["Metric", "Narrower setup", "Broader setup"]} rows={[["Media spend", "₹20,000", "₹20,000"], ["Valid leads", "40", "80"], ["Qualified leads", "20", "16"], ["CPL: spend ÷ valid leads", "₹500", "₹250"], ["Qualification rate", "50%", "20%"], ["CPQL: spend ÷ qualified leads", "₹1,000", "₹1,250"]]} />
        <ul className="list-disc space-y-3 pl-6 marker:text-[#164E50]">
          <li>The broader setup halves CPL in this example but produces fewer qualified leads at a higher CPQL. The match-type label does not explain why; query mix, page fit and feedback quality still need review.</li>
          <li>The opposite outcome is also possible. The purpose of the test is to measure it rather than assume that broad or exact must win.</li>
          <li>If qualified-lead volume is zero, CPQL is not calculable; report the spend and zero outcomes explicitly.</li>
          <li>CPQL is not fully loaded customer acquisition cost. For the definitions and cost scope, see <Link className={articleLink} href="/resources/blog/qualified-leads-vs-cost-per-lead-b2b">qualified leads vs cost per lead</Link>.</li>
        </ul>
      </BlogSection>
      <BlogSection id="google-vs-meta" title={"Is Google broad match the same as Meta broad targeting?"}>
        <ul className="list-disc space-y-3 pl-6 marker:text-[#164E50]">
          <li><strong>Google Search:</strong> keyword match types help decide which searches can be eligible for an ad.</li>
          <li><strong>Meta:</strong> audience inputs and delivery settings concern whom the system may reach while people use Meta’s platforms.</li>
          <li><strong>Shared measurement discipline:</strong> both need a useful offer, a working conversion path and feedback about lead quality.</li>
          <li><strong>Different test mechanics:</strong> do not transfer a rigid interest-first rule to Search keywords or assume that removing interests equals changing a keyword to broad match.</li>
        </ul>
        <p>Read <Link className={articleLink} href="/resources/blog/broad-vs-interest-targeting-meta-ads">broad vs interest targeting on Meta</Link> for the audience question, or <Link className={articleLink} href="/resources/blog/meta-ads-vs-google-ads-b2b-india">Meta Ads vs Google Ads</Link> for channel choice. <Link className={articleLink} href="/services/google-ads">DFY’s Google Ads work</Link> connects keyword coverage to pages, tracking and sales feedback.</p>
      </BlogSection>
      <BlogSection id="faqs" title="Frequently asked questions"><FAQ faqs={faqs} />
        </BlogSection>
      <BlogSection id="sources" title="Sources and further reading"><p>Official references support the platform rules and product descriptions. Decision frameworks are editorial guidance; worked examples are hypothetical. Features and pricing should be checked again before purchase or launch.</p>
        <SourceList sources={sources} />
        </BlogSection>
    </BlogArticle>
  );
}
