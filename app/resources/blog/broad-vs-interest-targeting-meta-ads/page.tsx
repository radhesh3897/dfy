import type { Metadata } from "next";
import Link from "next/link";
import { BlogArticle, BlogSection } from "@/components/BlogArticle";
import { BlogComparisonTable } from "@/components/BlogComparisonTable";
import { Cite, SourceList } from "@/components/Citations";
import { FAQ } from "@/components/FAQ";
import { pageMetadata } from "@/lib/site";

const path = "/resources/blog/broad-vs-interest-targeting-meta-ads";
const title = "Broad vs Interest Targeting on Meta Ads: How to Choose and Test";
const description = "Choose and test Meta audiences using buyer fit, creative, CRM feedback and cost per qualified lead. Learn when interest inputs or broader reach deserve a test.";
const published = "2026-10-19";
const updated = published;
export const metadata: Metadata = pageMetadata({ title, description, path });
const contents = [{"id": "definitions", "label": "What do broad and interest targeting mean on Meta?"}, {"id": "interest-use", "label": "When are interest inputs worth testing?"}, {"id": "broad-readiness", "label": "Can a new account start with a broad audience?"}, {"id": "experiment", "label": "How should you compare interest inputs with a broader setup?"}, {"id": "worked-comparison", "label": "Which numbers should decide whether broader reach is working?"}, {"id": "expand", "label": "When should you expand from interests to a broader audience?"}, {"id": "poor-quality", "label": "What should you check if broad targeting brings poor leads?"}, {"id": "faqs", "label": "Frequently asked questions"}, {"id": "sources", "label": "Sources and further reading"}];
const faqs = [{"question": "Should I always start Meta Ads with interest targeting?", "answer": "No. Interest inputs are a buyer hypothesis to test, not a required first stage for every account. A broader setup may also deserve a test when the offer, geography, conversion path and measurement are ready."}, {"question": "Does broad targeting mean showing ads to everyone?", "answer": "In this guide, broad means omitting optional interest inputs while keeping the audience controls and eligibility requirements the campaign needs. It does not mean ignoring service geography or category restrictions."}, {"question": "When should I switch from interests to broad targeting?", "answer": "Use a controlled test when qualification, tracking and follow-up are reliable and you can afford to evaluate broader reach. Decide using qualified outcomes, customer economics and capacity rather than a fixed number of leads or days."}, {"question": "Is a lower CPL proof that broad targeting is better?", "answer": "No. Compare qualification rate, CPQL, opportunities and customers using the same lead cohort, cost scope and follow-up window. A setup can generate cheaper enquiries while costing more per suitable buyer."}, {"question": "Do Meta interests work like Google Search broad match?", "answer": "No. Meta audience inputs help express who to reach. Google Search keyword match types help determine which searches can trigger an ad. The platform mechanics and the test design need separate explanations."}];
const sources = [{"label": "Meta Blueprint: Planning for your campaign audience", "href": "https://www.facebookblueprint.com/student/path/253166-advantage-plus-audiences"}, {"label": "Meta Blueprint: Improve lead quality with Conversions API for CRM", "href": "https://www.facebookblueprint.com/student/activity/603002-improve-lead-quality-with-meta-conversions-api-for-crm"}];
const articleLink = "font-medium text-[#164E50] underline decoration-[#CDEECD] underline-offset-4 transition hover:text-[#103D3F]";

export default function ArticlePage() {
  return (
    <BlogArticle path={path} title={title} description={description} category={"Meta Ads"} published={published} updated={updated}
      summary={"Use interest inputs when they express a useful buyer hypothesis, and test a broader audience when the offer, geography and conversion measurement are ready. An account does not have to follow a fixed interest-first sequence. Expand based on qualified leads and customer economics, with a consistent review window and enough evidence to support the decision."} contents={contents} faqs={faqs}
      ctaTitle={"Check whether your audience test is finding suitable buyers"} ctaText={"Bring your current audience settings, creative, spend and CRM qualification results. DFY can review the test design and identify whether targeting, the offer, the form or follow-up needs attention."}>
      <BlogSection id="definitions" title={"What do broad and interest targeting mean on Meta?"}>
        <ul className="list-disc space-y-3 pl-6 marker:text-[#164E50]">
          <li>A broad setup in this guide omits optional interest inputs.</li>
          <li>Keep the audience controls required for the campaign, including realistic service geography and eligibility.</li>
          <li>Apply relevant category restrictions. Broad does not mean serving everyone everywhere.</li>
        </ul>
        <ul className="list-disc space-y-3 pl-6 marker:text-[#164E50]">
          <li>Use available interest inputs to express a hypothesis about who might be interested in the offer.</li>
          <li>Treat an interest as an advertising signal, not evidence of need, budget or buying authority.</li>
          <li>Confirm buyer fit through the enquiry and qualification process.</li>
        </ul>
        <p><Cite href={sources[0].href}>Meta’s audience-planning course covers audience selection, detailed targeting, custom audiences, lookalikes and Advantage+ audience</Cite>. The exact controls available depend on the campaign setup and current product. Record the settings actually used instead of labelling two different configurations simply “broad” and “interest”.</p>
        <BlogComparisonTable caption={"Audience approaches: describe the actual setup"} headers={["Approach", "Hypothesis", "What it does not establish"]} rows={[["Broad without optional interests", "The offer, creative and outcome signal can help delivery find suitable people within required controls", "Every person reached is a relevant buyer"], ["Relevant interest inputs", "Available interests may help express a plausible buyer group", "The group is exclusive, or every person has buying intent"], ["Existing or similar audience inputs", "Permitted first-party or similarity information may be useful", "That the data, audience or campaign is eligible in every category"]]} />
        <p>Google Search broad match is a different concept: it concerns the searches that can match a keyword. Organic content planning is different again. Neither should be treated as the same interest-to-broad switch.</p>
      </BlogSection>
      <BlogSection id="interest-use" title={"When are interest inputs worth testing?"}>
        <ul className="list-disc space-y-3 pl-6 marker:text-[#164E50]">
          <li>Choose an interest input only when you can explain its relationship to the intended buyer and it is available in the current setup.</li>
          <li>For a business-owner service, recognise that business-related interests can also include students, employees and people without purchasing authority.</li>
          <li>Write a qualification rule that checks the actual buyer rather than relying on the audience label.</li>
        </ul>
        <ul className="list-disc space-y-3 pl-6 marker:text-[#164E50]">
          <li>Write down why you expect the audience to respond.</li>
          <li>Define a suitable lead and the evidence that would weaken the audience hypothesis.</li>
          <li>Keep the group interpretable. Adding more interests does not establish greater precision.</li>
        </ul>
        <h3>Check how the interface treats the input</h3>
        <ul className="list-disc space-y-3 pl-6 marker:text-[#164E50]">
          <li>Read the current audience-field labels and expansion settings.</li>
          <li>Distinguish a suggestion from a control; do not treat an input labelled as a suggestion as an exclusive boundary.</li>
          <li>Document what can expand before describing a result as an interest-only test.</li>
        </ul>
        <p>If a manual comparison is unavailable for the selected setup, describe the experiment honestly: it may compare two sets of inputs within automated delivery, rather than a tightly restricted interest audience against unrestricted delivery.</p>
      </BlogSection>
      <BlogSection id="broad-readiness" title={"Can a new account start with a broad audience?"}>
        <p>A new account can evaluate a broader setup where the campaign permits it. There is no useful rule that every business must first collect a fixed number of interest-targeted leads. The real question is whether the account can define the offer, constrain delivery appropriately and measure the resulting enquiries.</p>
        <ul className="list-disc space-y-3 pl-6"><li>The service area is realistic and the offer makes buyer fit clear.</li><li>The creative explains the problem, service and next step without relying on targeting to supply all the context.</li><li>The form or page captures enough information to route and qualify a lead.</li><li>The team can contact leads and record consistent qualification outcomes.</li><li>The budget and review window allow a meaningful test without exceeding what the business can afford.</li></ul>
        <ul className="list-disc space-y-3 pl-6 marker:text-[#164E50]">
          <li>Verify tracking before interpreting a broad-audience test; selecting broad does not repair unreliable measurement.</li>
          <li>Check established accounts too: a changed offer or missing sales feedback can weaken the comparison.</li>
          <li>Improve measurement and the conversion path alongside audience design.</li>
        </ul>
        <p>See <Link className={articleLink} href="/resources/blog/how-to-improve-lead-quality-meta-ads">how to improve Meta Ads lead quality</Link> for the wider diagnosis.</p>
      </BlogSection>
      <BlogSection id="experiment" title={"How should you compare interest inputs with a broader setup?"}>
        <ul className="list-disc space-y-3 pl-6 marker:text-[#164E50]">
          <li>Write the decision before launch: for example, “Does omitting optional interest inputs produce qualified leads at an affordable cost for this offer?”</li>
          <li>Use an appropriate controlled experiment where available.</li>
          <li>Avoid treating a duplicated ad set as a clean test without checking audience overlap and delivery differences.</li>
        </ul>
        <BlogComparisonTable caption={"Meta audience experiment worksheet"} headers={["Record before launch", "Keep or define consistently", "Why it matters"]} rows={[["Offer, location and required controls", "Same service, service area and eligibility", "Avoid confusing a market change with an audience effect"], ["Creative and conversion path", "Same creative set, page/form and qualification questions", "Avoid changing the audience and message simultaneously"], ["Objective and conversion event", "Same goal and event definition", "A form-fill goal and a qualified-lead goal answer different questions"], ["Budget and delivery setup", "Document allocation, schedules and material changes", "Spend differences can affect what the comparison means"], ["Lead cohort and review window", "Same acquisition period and follow-up opportunity", "Recent unreviewed leads should not look like poor-fit leads"], ["Outcome and decision rule", "CPQL, opportunity/customer outcomes and affordable cost", "A cheap enquiry is not the full business result"]]} />
        <ul className="list-disc space-y-3 pl-6 marker:text-[#164E50]">
          <li>Use suitable platform experiment tools where available.</li>
          <li>Record how the comparison allocates traffic or randomises audiences.</li>
          <li>If comparing separate periods, account for seasonality, auction conditions and other changes that may explain the result.</li>
        </ul>
        <ul className="list-disc space-y-3 pl-6 marker:text-[#164E50]">
          <li>Choose a review window that fits expected lead volume and sales lag.</li>
          <li>Do not stop at the first sale or repeatedly change settings during the comparison.</li>
          <li>Keep uncertainty visible when the sample is too small to support a decision.</li>
        </ul>
      </BlogSection>
      <BlogSection id="worked-comparison" title={"Which numbers should decide whether broader reach is working?"}>
        <p>Read cost and quality together. This hypothetical comparison uses equal media spend, one qualification rule and the same follow-up window. It is not a Meta study, DFY client result or performance forecast.</p>
        <BlogComparisonTable caption={"Hypothetical audience results: the cheaper lead is not the cheaper qualified lead"} headers={["Metric", "Interest-input setup", "Broader setup"]} rows={[["Media spend", "₹30,000", "₹30,000"], ["Unique leads", "150", "250"], ["Qualified leads", "45", "40"], ["Qualification rate", "30%", "16%"], ["Media CPL", "₹200", "₹120"], ["Media CPQL", "₹666.67", "₹750"]]} />
        <ul className="list-disc space-y-3 pl-6 marker:text-[#164E50]">
          <li><strong>Lower CPL:</strong> the broader setup generates more leads for the same media spend.</li>
          <li><strong>Higher CPQL:</strong> it still costs more per qualified lead in this example, so inspect quality and team capacity before expanding.</li>
          <li><strong>Scope of the example:</strong> this does not prove interest targeting always wins; another account or offer may produce the opposite outcome.</li>
        </ul>
        <ul className="list-disc space-y-3 pl-6 marker:text-[#164E50]">
          <li>Suppose the interest-input setup later produces 5 customers and the broader setup produces 8 over a suitable observation window.</li>
          <li>Media spend per customer becomes ₹30,000 ÷ 5 = ₹6,000 for the interest-input setup and ₹30,000 ÷ 8 = ₹3,750 for the broader setup.</li>
          <li>These additional hypothetical outcomes change the assessment. Compare customer value and margin as well.</li>
          <li>Treat a handful of sales cautiously before declaring a durable winner.</li>
        </ul>
        <ul className="list-disc space-y-3 pl-6 marker:text-[#164E50]">
          <li>The cost figures exclude management, creative, tools and sales costs.</li>
          <li>With zero qualified leads, report spend and zero qualified leads rather than ₹0 CPQL.</li>
          <li>Keep pending cases separate. Use the <Link className={articleLink} href="/resources/blog/qualified-leads-vs-cost-per-lead-b2b">CPL and CPQL guide</Link> to check denominators.</li>
        </ul>
      </BlogSection>
      <BlogSection id="expand" title={"When should you expand from interests to a broader audience?"}>
        <p>Expand when the current offer generates suitable demand, measurement is reliable and a broader test supports acceptable acquisition economics. Early form fills are a reason to inspect the leads; they do not by themselves establish that expansion is affordable.</p>
        <ul className="list-disc space-y-3 pl-6"><li>Validate the qualification process and lead-to-CRM delivery before changing reach.</li><li>Check whether the team can handle additional contact and appointment volume.</li><li>Test the broader configuration with a stated budget and review point.</li><li>Compare matured qualified outcomes and later sales rather than only the first days of CPL.</li><li>Keep, revise or stop the broader setup according to the agreed evidence and cost limits.</li></ul>
        <p><Cite href={sources[1].href}>Meta’s Conversions API for CRM training covers connecting CRM outcomes and optimising for qualified leads</Cite>. A deeper event needs reliable, permitted data and sufficient usable signal. It does not guarantee an improvement. Read <Link className={articleLink} href="/resources/blog/crm-based-optimization-meta-ads-b2b">the CRM-based optimisation guide</Link> before changing the event your campaign learns from.</p>
      </BlogSection>
      <BlogSection id="poor-quality" title={"What should you check if broad targeting brings poor leads?"}>
        <ul className="list-disc space-y-3 pl-6 marker:text-[#164E50]">
          <li>Trace a sample of weak enquiries before narrowing the audience.</li>
          <li>Check for a vague offer, misleading creative, unsuitable locations, limited form information, duplicate records and inconsistent follow-up.</li>
          <li>Choose the fix based on the observed cause; a targeting adjustment cannot repair every part of that chain.</li>
        </ul>
        <h3>Check the promise and qualification</h3>
        <ul className="list-disc space-y-3 pl-6 marker:text-[#164E50]">
          <li>Make the service and suitable customer clear in the ad and page.</li>
          <li>Ask questions that materially help routing or qualification.</li>
          <li>Evaluate added form friction using the same qualified-lead rule. Lower volume does not automatically establish higher quality.</li>
        </ul>
        <h3>Check downstream capacity and feedback</h3>
        <ul className="list-disc space-y-3 pl-6 marker:text-[#164E50]">
          <li>Check whether additional enquiry volume has overwhelmed the team and lowered the observed contact rate.</li>
          <li>Review the backlog and response records before classifying unanswered enquiries as unsuitable.</li>
          <li>Record qualification and lost reasons so the next campaign decision has evidence.</li>
        </ul>
        <p>For health and other restricted categories, review permitted audiences, claims and data uses for that specific service. Do not create sensitive-interest audiences or send sensitive personal details through tracking. Use <Link className={articleLink} href="/services/meta-ads">DFY’s Meta Ads service</Link> and <Link className={articleLink} href="/services/crm-tracking-nurture">CRM tracking and nurture support</Link> as parts of the same lead-quality review.</p>
      </BlogSection>
      <BlogSection id="faqs" title="Frequently asked questions"><FAQ faqs={faqs} /></BlogSection>
      <BlogSection id="sources" title="Sources and further reading"><p>The references support platform rules and measurement concepts. The decision frameworks are editorial guidance; any worked numbers are explicitly hypothetical.</p><SourceList sources={sources} /></BlogSection>
    </BlogArticle>
  );
}
