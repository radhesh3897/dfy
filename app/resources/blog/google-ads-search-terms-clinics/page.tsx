import type { Metadata } from "next";
import Link from "next/link";
import { BlogArticle, BlogSection } from "@/components/BlogArticle";
import { BlogComparisonTable } from "@/components/BlogComparisonTable";
import { Cite, SourceList } from "@/components/Citations";
import { FAQ } from "@/components/FAQ";
import { pageMetadata } from "@/lib/site";

const path = "/resources/blog/google-ads-search-terms-clinics";
const title = "Google Ads Search Terms for Clinics: Find Appointment Intent and Cut Irrelevant Clicks";
const description = "Review clinic Google Ads search terms by service, location and appointment intent. Use a dental query worksheet, negative-match examples and booking outcomes.";
const published = "2026-10-19";
const updated = published;
export const metadata: Metadata = pageMetadata({ title, description, path });
const contents = [{"id": "terms-vs-keywords", "label": "What is the difference between a search term and a keyword?"}, {"id": "appointment-intent", "label": "Which signals suggest appointment intent for a clinic?"}, {"id": "query-worksheet", "label": "How would you review common dental-clinic queries?"}, {"id": "negative-keywords", "label": "How should clinics use negative keywords without blocking useful searches?"}, {"id": "page-and-ad", "label": "What should happen when the query is relevant but leads do not book?"}, {"id": "review-cadence", "label": "How often should you review clinic search terms?"}, {"id": "measurement-worksheet", "label": "What should your search-term review sheet contain?"}, {"id": "faqs", "label": "Frequently asked questions"}, {"id": "sources", "label": "Sources and further reading"}];
const faqs = [{"question": "Are clinic search terms the same as keywords?", "answer": "No. A search term is what a person searched for; a keyword is an advertiser’s targeting input. The search terms report helps reveal whether eligible searches match the clinic’s service, geography and appointment goal."}, {"question": "Should a clinic exclude every query containing cost?", "answer": "No. Cost queries may come from people evaluating a real appointment or treatment. Review service fit, useful page information and later booking outcomes before deciding to exclude them."}, {"question": "Does exact match prevent irrelevant searches?", "answer": "No. Positive exact match can include searches with the same meaning or intent. Review actual search terms, negative keywords, location settings and appointment outcomes even when using exact match."}, {"question": "Why can I not see every search in the report?", "answer": "Google omits some queries that do not meet its activity thresholds to protect privacy. Treat the report as partial query-level evidence and examine aggregate campaign performance alongside the visible terms."}, {"question": "Should a clinic use one shared negative list everywhere?", "answer": "Only when every exclusion is appropriate for every campaign using it. A recruitment or training term may be irrelevant to appointment ads but relevant to a separate service campaign. Check scope and conflicts before applying a shared list."}];
const sources = [{"label": "Google Ads Help: About the search terms report", "href": "https://support.google.com/google-ads/answer/2472708?hl=en-GB"}, {"label": "Google Ads Help: About negative keywords", "href": "https://support.google.com/google-ads/answer/2453972?hl=en"}, {"label": "Google Ads Help: About keyword matching options", "href": "https://support.google.com/google-ads/answer/7478529?hl=en"}];
const articleLink = "font-medium text-[#164E50] underline decoration-[#CDEECD] underline-offset-4 transition hover:text-[#103D3F]";

export default function ArticlePage() {
  return (
    <BlogArticle path={path} title={title} description={description} category={"Google Ads"} published={published} updated={updated}
      summary={"Review clinic search terms by the service requested, location, appointment intent and the destination page. Exclude clearly irrelevant searches, but investigate cost or treatment-research queries before blocking them. Use valid enquiries and confirmed appointments to judge value; a keyword match type or a high click-through rate does not prove patient intent."} contents={contents} faqs={faqs}
      ctaTitle={"Connect your search terms to real appointment outcomes"} ctaText={"DFY can review query relevance, negative keywords, destination pages and enquiry tracking with your clinic. Bring the search terms report and booking outcomes so the recommendations address both traffic and follow-up."}>
      <BlogSection id="terms-vs-keywords" title={"What is the difference between a search term and a keyword?"}>
        <ul className="list-disc space-y-3 pl-6 marker:text-[#164E50]">
          <li><strong>Search term:</strong> the words a person entered into Google. “Dental clinic near Baner” is an illustrative query.</li>
          <li><strong>Keyword:</strong> an advertiser’s input that helps determine eligible searches. A keyword such as “dental clinic Pune” can match searches beyond those literal words, depending on match type and intent.</li>
          <li><strong>Why the distinction matters:</strong> a sensible keyword list can still attract searches that do not fit the clinic. Review what people searched, rather than judging only the advertiser’s chosen wording.</li>
          <li><strong>Report limitation:</strong> <Cite href={sources[0].href}>Google omits some lower-activity queries from the search terms report for privacy</Cite>. The visible rows are useful evidence, not a complete transcript of every search.</li>
        </ul>
        <p>Start in the account’s search terms report, set a meaningful date range and include the available campaign, ad group, matched keyword, cost and conversion columns. Navigation labels can change; the task is to connect the actual query to its destination and outcome.</p>
      </BlogSection>
      <BlogSection id="appointment-intent" title={"Which signals suggest appointment intent for a clinic?"}>
        <ul className="list-disc space-y-3 pl-6 marker:text-[#164E50]">
          <li><strong>Service fit:</strong> does the query describe a consultation or service the clinic actually offers? Do not assume that a related treatment is available.</li>
          <li><strong>Location fit:</strong> is the clinic accessible for the person’s likely requirement? Check geographic settings as well as place names in queries.</li>
          <li><strong>Action intent:</strong> clinic, appointment, consultation, doctor and location terms can suggest a contact decision, but none guarantees that the person will book.</li>
          <li><strong>Timing fit:</strong> a query asking for immediate or emergency availability needs a destination and staffed response that can fulfil that promise.</li>
          <li><strong>Outcome evidence:</strong> compare valid enquiries, confirmed bookings and attendance where attribution is reliable. Use appointment logistics and aggregate outcomes, not sensitive medical notes in advertising reports.</li>
        </ul>
        <p>A cost query may be a serious buyer checking affordability. A research query may need useful information before an appointment request. Classify each against the clinic’s actual service and campaign goal instead of treating every non-booking phrase as waste.</p>
      </BlogSection>
      <BlogSection id="query-worksheet" title={"How would you review common dental-clinic queries?"}>
        <p>Illustrative queries only: these are not taken from a DFY client account and do not represent guaranteed keyword matches. The worksheet shows how to make a decision once a query appears.</p>
        <BlogComparisonTable caption={"Illustrative dental search-term review worksheet"} headers={["Search term", "Initial reading", "Decision to investigate"]} rows={[["dental clinic near me", "Likely local clinic discovery", "Check served geography, destination and booking outcomes"], ["dentist jobs Pune", "Employment intent", "Exclude from an appointment campaign if hiring is out of scope"], ["dental course after 12th", "Education intent", "Exclude if the clinic is not advertising training"], ["dental implant cost Pune", "Service and price research", "Keep for review if implants are offered; provide accurate consultation and pricing context"], ["emergency dentist open now", "Urgent availability", "Advertise only if the clinic can provide the promised response now"], ["dental clinic in another city", "Possible geography mismatch", "Check service area and location settings before deciding"]]} />
        <ul className="list-disc space-y-3 pl-6 marker:text-[#164E50]">
          <li>Add a reason, owner and review date to each decision. A negative keyword without context can quietly block a later service campaign.</li>
          <li>Use lost reasons from reception to distinguish wrong-service enquiries from valid enquiries that received no response.</li>
          <li>Check the destination: an implant-cost query sent to a generic homepage may reveal a page mismatch rather than a worthless query.</li>
          <li>Keep evidence at the appropriate level. Very small query samples cannot reliably establish a conversion rate; aggregate sensible intent groups when useful.</li>
        </ul>
      </BlogSection>
      <BlogSection id="negative-keywords" title={"How should clinics use negative keywords without blocking useful searches?"}>
        <p><Cite href={sources[1].href}>Negative keywords use their own broad, phrase and exact matching rules</Cite>. The examples below assume a Search appointment campaign that does not recruit dentists. They illustrate exclusions, not a recommended account-wide list.</p>
        <BlogComparisonTable caption={"Negative keyword match examples for a clinic Search campaign"} headers={["Negative input", "What it can block", "What it would not block by that rule alone"]} rows={[["Broad negative: dentist jobs", "jobs for dentist in Pune — both terms occur in any order", "dentist vacancy Pune — jobs is absent"], ["Phrase negative: \"dentist jobs\"", "dentist jobs in Pune — the phrase is in the same order", "jobs for dentist in Pune — the phrase is not together"], ["Exact negative: [dentist jobs]", "dentist jobs — the whole query matches", "dentist jobs Pune — extra words are present"]]} />
        <ul className="list-disc space-y-3 pl-6 marker:text-[#164E50]">
          <li><strong>Choose scope deliberately.</strong> Use an ad-group, campaign or shared/account-level exclusion only when that scope is correct. An education exclusion for appointment ads may be wrong for a separate training campaign.</li>
          <li><strong>Handle variants carefully.</strong> Google says negatives do not expand to close variants or related meanings. Add needed synonyms and singular/plural variants; casing and misspellings are automatically accounted for under its current guidance.</li>
          <li><strong>Avoid blunt exclusions.</strong> A broad negative such as “cost” or “price” can remove useful affordability searches. Inspect actual relevance and outcomes first.</li>
          <li><strong>Record the change.</strong> Keep the excluded query, negative wording, match type, scope and reason so another reviewer can understand or reverse it.</li>
          <li><strong>Check conflicts.</strong> Before applying a shared list, confirm it does not exclude the clinic’s own name, advertised services or relevant location searches.</li>
        </ul>
      </BlogSection>
      <BlogSection id="page-and-ad" title={"What should happen when the query is relevant but leads do not book?"}>
        <ol className="list-decimal space-y-3 pl-6 marker:text-[#164E50]">
          <li><strong>Check the ad promise.</strong> Verify the advertised service, doctor, fee statement and available hours. A misleading promise can attract clicks that the clinic cannot convert.</li>
          <li><strong>Check the destination.</strong> Show the requested service and real locality, a clear appointment route and information about confirmation. Use the <Link className={articleLink} href="/resources/blog/clinic-landing-page-conversion">clinic landing-page guide</Link> to review the complete page.</li>
          <li><strong>Check technical delivery.</strong> Submit a controlled test request and verify that the correct reception team receives it. Count success only after the form actually succeeds.</li>
          <li><strong>Check reception follow-up.</strong> Review contact attempts, time to response and whether suitable slots were available. Do not label an unanswered enquiry as an unsuitable patient.</li>
          <li><strong>Check the measurement.</strong> A call click is not necessarily a completed call, and a form request is not an attended consultation. Keep those events separate.</li>
        </ol>
        <p>Use <Link className={articleLink} href="/services/clinic-lead-generation">clinic lead generation</Link> and <Link className={articleLink} href="/services/google-ads">Google Ads management</Link> as parts of the same acquisition journey. Changing keywords cannot repair every booking problem.</p>
      </BlogSection>
      <BlogSection id="review-cadence" title={"How often should you review clinic search terms?"}>
        <ul className="list-disc space-y-3 pl-6 marker:text-[#164E50]">
          <li><strong>During a new launch or major change:</strong> check as spending accumulates, often daily or every few days when the budget makes an irrelevant query costly. This is an operational starting point, not a platform requirement.</li>
          <li><strong>In a stable campaign:</strong> choose a recurring review frequency based on spend, query volume, service changes and conversion lag. Keep immediate alerts for broken forms or sudden spending issues.</li>
          <li><strong>Remove obvious mismatches promptly:</strong> employment or unrelated training queries do not need a long experiment when those services are clearly outside the campaign.</li>
          <li><strong>Give ambiguous queries time:</strong> a relevant cost or consultation query with one click and no booking is inconclusive. Consider grouped evidence and a complete follow-up window.</li>
          <li><strong>Review after exclusions:</strong> monitor lost relevant volume as well as reduced waste. A falling CPL is not a sufficient reason to retain a negative if bookings become less suitable.</li>
        </ul>
      </BlogSection>
      <BlogSection id="measurement-worksheet" title={"What should your search-term review sheet contain?"}>
        <BlogComparisonTable caption={"Search-term review record"} headers={["Record", "Purpose", "Decision it supports"]} rows={[["Query, matched keyword and match type", "Separates the person’s search from targeting inputs", "Understand coverage and mismatches"], ["Campaign, ad group, location and destination", "Shows where the query was handled", "Fix routing or service relevance"], ["Cost, valid enquiries and attributed bookings", "Connects spend with outcomes", "Assess useful acquisition rather than clicks alone"], ["Classification, action and negative scope", "Explains the chosen change", "Review exclusions without losing context"], ["Cohort dates and follow-up window", "Shows how mature the result is", "Avoid comparing fresh enquiries with completed cohorts"]]} />
        <ul className="list-disc space-y-3 pl-6 marker:text-[#164E50]">
          <li>Define a valid enquiry consistently and remove spam and duplicates before comparing costs.</li>
          <li>Calculate media cost per confirmed booking as attributed ad spend ÷ confirmed bookings from the same enquiry cohort. State any attribution gaps and keep agency fees separate unless included explicitly.</li>
          <li>If there are no confirmed bookings yet, report spend and the zero-booking count; the cost per booking is not calculable.</li>
          <li>Read the <Link className={articleLink} href="/resources/blog/broad-phrase-exact-match-google-ads">broad, phrase and exact match guide</Link> before using a match-type change as your next experiment. Search-term review remains useful with every type.</li>
        </ul>
      </BlogSection>
      <BlogSection id="faqs" title="Frequently asked questions"><FAQ faqs={faqs} />
        </BlogSection>
      <BlogSection id="sources" title="Sources and further reading"><p>Official references support the platform rules and product descriptions. Decision frameworks are editorial guidance; worked examples are hypothetical. Features and pricing should be checked again before purchase or launch.</p>
        <SourceList sources={sources} />
        </BlogSection>
    </BlogArticle>
  );
}
