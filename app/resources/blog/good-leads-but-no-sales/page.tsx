import type { Metadata } from "next";
import Link from "next/link";
import { BlogArticle, BlogSection } from "@/components/BlogArticle";
import { BlogComparisonTable } from "@/components/BlogComparisonTable";
import { Cite, SourceList } from "@/components/Citations";
import { FAQ } from "@/components/FAQ";
import { pageMetadata } from "@/lib/site";

const path = "/resources/blog/good-leads-but-no-sales";
const title = "Getting Good Leads but No Sales? How to Find the Conversion Problem";
const description = "Find where qualified enquiries stop becoming customers. Check contact, meetings, proposals, lost reasons and CRM data before changing your ad budget.";
const published = "2026-10-19";
const updated = published;
export const metadata: Metadata = pageMetadata({ title, description, path });
const contents = [{"id": "qualified-definition", "label": "What makes a lead genuinely qualified?"}, {"id": "funnel-diagnosis", "label": "Where are qualified leads dropping out of the sales funnel?"}, {"id": "contact-and-response", "label": "Are leads receiving a useful response?"}, {"id": "meetings-and-offer", "label": "What if leads respond but still do not buy?"}, {"id": "worked-funnel", "label": "How do you calculate the rates without hiding the problem?"}, {"id": "crm-fields", "label": "What should the CRM record for every enquiry?"}, {"id": "first-fix", "label": "What should you fix first when good leads produce no sales?"}, {"id": "faqs", "label": "Frequently asked questions"}, {"id": "sources", "label": "Sources and further reading"}];
const faqs = [{"question": "Why am I getting good leads but no sales?", "answer": "The leads may not meet a consistent qualification rule, or the problem may be in contact, scheduling, discovery, the offer or closing. Track one cohort through those stages, review conversations and allow for the sales cycle before identifying the cause."}, {"question": "Should I change my ads if leads are not converting?", "answer": "Change the ads when there is evidence of unsuitable traffic, an inaccurate promise or poor qualification. If suitable prospects are getting stuck after contact, address the observed sales or follow-up stage as well. A low CPL or a salesperson’s impression alone is not enough to decide."}, {"question": "What is a good qualified-lead-to-sale rate?", "answer": "There is no universal rate for every offer and sales process. Define qualified leads, use a consistent observation window and compare mature cohorts with similar deal sizes, channels and qualification criteria."}, {"question": "How do I calculate close rate?", "answer": "Name the denominator. Proposal win rate is won customers divided by proposals; qualified-lead-to-customer rate is won customers divided by qualified leads. Use the same cohort and time window, and report pending cases so recent opportunities are not mistaken for losses."}, {"question": "Can WhatsApp automation solve a sales problem?", "answer": "Automation can acknowledge enquiries, support agreed follow-up and help with scheduling. It cannot establish offer fit or resolve every buying objection. Obtain appropriate permission, respect opt-outs and measure conversations, bookings and customer outcomes."}];
const sources = [{"label": "HubSpot Knowledge Base: Contact and company lifecycle stages", "href": "https://knowledge.hubspot.com/records/use-lifecycle-stages"}, {"label": "Google Ads Help: Qualified leads and converted leads", "href": "https://support.google.com/google-ads/answer/11459091?hl=en"}, {"label": "WhatsApp Business Messaging Policy", "href": "https://business.whatsapp.com/policy"}];
const articleLink = "font-medium text-[#164E50] underline decoration-[#CDEECD] underline-offset-4 transition hover:text-[#103D3F]";

export default function ArticlePage() {
  return (
    <BlogArticle path={path} title={title} description={description} category={"Lead quality"} published={published} updated={updated}
      summary={"When apparently good leads produce no sales, verify qualification first, then follow one lead cohort through contact, meetings, proposals and closing. Look for the stage where progress stops, record the reason and give a named owner a specific fix. Allow for the buying cycle before judging recent leads."} contents={contents} faqs={faqs}
      ctaTitle={"Find where your leads stop moving towards a sale"} ctaText={"Bring a campaign report and a sample of anonymised CRM stages and lost reasons. DFY can help connect lead quality, follow-up and sales outcomes so your next change addresses the observed problem."}>
      <BlogSection id="qualified-definition" title={"What makes a lead genuinely qualified?"}>
        <p>A valid phone number and an interested reply do not establish that a prospect is ready to buy. Write a qualification rule that marketing and sales can apply to the same enquiry. A useful rule covers customer fit, a problem the offer can solve, a plausible buying process and a clear next step.</p>
        <ul className="list-disc space-y-3 pl-6"><li>Fit: industry, location, business size or service requirements match what you can deliver.</li><li>Need: the person can explain the problem or outcome they want help with.</li><li>Commercial context: budget, decision involvement and timing are understood to the extent needed for this stage.</li><li>Evidence: the CRM records why the person qualifies, what is still unknown and what happens next.</li></ul>
        <ul className="list-disc space-y-3 pl-6 marker:text-[#164E50]">
          <li>Use separate statuses for “not contacted”, “not ready yet” and “not a fit”.</li>
          <li>Require evidence for qualification. A contact the team has never reached has not yet passed a meaningful sales qualification check.</li>
          <li><Cite href={sources[0].href}>HubSpot’s lifecycle stages distinguish leads, qualified leads, opportunities and customers</Cite>. Adapt those stages to your process and define what each means.</li>
        </ul>
        <p>If the definition is inconsistent, start with <Link className={articleLink} href="/resources/blog/qualified-leads-vs-cost-per-lead-b2b">CPL versus cost per qualified lead</Link>. That is a measurement problem to fix before deciding that sales or advertising has failed.</p>
      </BlogSection>
      <BlogSection id="funnel-diagnosis" title={"Where are qualified leads dropping out of the sales funnel?"}>
        <ul className="list-disc space-y-3 pl-6 marker:text-[#164E50]">
          <li>Start with leads created in one acquisition period and observe them for an appropriate follow-up window.</li>
          <li>Keep recent leads separate from customers acquired through a much older campaign.</li>
          <li>Count unique leads and record stage dates so stalled cases are visible.</li>
        </ul>
        <BlogComparisonTable caption={"Lead-to-sale diagnosis: use the symptom to choose the next check"} headers={["Observed symptom", "Check first", "Who needs to act"]} rows={[["Few genuine conversations", "Delivery, contact details, consent, ownership and response process", "Marketing operations and sales"], ["Conversations but few suitable prospects", "Qualification evidence, ad promise and customer fit", "Marketing and sales together"], ["Qualified prospects but few meetings", "Next-step clarity, scheduling and perceived value of the meeting", "Sales"], ["Meetings booked but not attended", "Confirmation, reminders, timing and rescheduling", "Sales or appointment team"], ["Meetings happen but few proposals", "Discovery, actual need, decision process and offer fit", "Sales and the service owner"], ["Proposals go out but few decisions", "Scope, price, proof, procurement, competition and timing", "Sales and business leadership"]]} />
        <p>The table is a diagnostic framework, not proof of a cause. Read the relevant conversations and deal notes before changing the process. A low meeting rate might reflect a weak next step, or it might reveal that the qualification label was too generous.</p>
      </BlogSection>
      <BlogSection id="contact-and-response" title={"Are leads receiving a useful response?"}>
        <ul className="list-disc space-y-3 pl-6 marker:text-[#164E50]">
          <li>Confirm that every enquiry reaches the right person and the CRM records its source.</li>
          <li>Check that the reply acknowledges the requested service; a fast but generic message can lose context.</li>
          <li>Look for failed integrations, duplicate records and unassigned leads before blaming the campaign.</li>
        </ul>
        <h3>Audit delivery and ownership</h3>
        <ul className="list-disc space-y-3 pl-6 marker:text-[#164E50]">
          <li>Trace a sample from the original form submission or phone enquiry into the CRM.</li>
          <li>Record arrival time, lead owner and the first meaningful contact attempt.</li>
          <li>Separate an automated acknowledgement from an actual conversation.</li>
        </ul>
        <h3>Agree the next contact step</h3>
        <ul className="list-disc space-y-3 pl-6 marker:text-[#164E50]">
          <li>Set response expectations the team can meet during staffed hours.</li>
          <li>Assign an owner to missed calls and unanswered enquiries.</li>
          <li>Use agreed contact channels, respect opt-outs and change the sequence when the person replies or books.</li>
        </ul>
        <p>For WhatsApp, <Cite href={sources[2].href}>the Business Messaging Policy requires permission and respect for opt-outs, with template and customer-service-window rules for the Platform</Cite>. The <Link className={articleLink} href="/resources/blog/whatsapp-lead-nurture-service-businesses">WhatsApp nurture guide</Link> explains how follow-up can fit the conversation. More messages alone do not establish better sales.</p>
      </BlogSection>
      <BlogSection id="meetings-and-offer" title={"What if leads respond but still do not buy?"}>
        <h3>Before the meeting: make its purpose worth attending</h3>
        <ul className="list-disc space-y-3 pl-6 marker:text-[#164E50]">
          <li>Explain who the meeting is for, what it covers and how long it should take.</li>
          <li>Tell the buyer whether someone else should join and give them a clear way to reschedule.</li>
          <li>Check commitment: a calendar booking can be weak when the lead does not understand the next step.</li>
        </ul>
        <h3>During discovery: test the buying problem</h3>
        <ul className="list-disc space-y-3 pl-6 marker:text-[#164E50]">
          <li>Ask what prompted the enquiry, what the prospect has tried and what needs to change.</li>
          <li>Understand how the proposal will be evaluated and who needs to make the decision.</li>
          <li>Clarify the scope before sending a detailed quote.</li>
        </ul>
        <h3>After the proposal: record why the decision stalled</h3>
        <ul className="list-disc space-y-3 pl-6 marker:text-[#164E50]">
          <li>Record specific reasons: scope mismatch, budget not approved, timing moved, a competing option selected or no decision made.</li>
          <li>Keep “reason unknown” when evidence is missing.</li>
          <li>Do not assume silence proves that the price was too high.</li>
        </ul>
        <ul className="list-disc space-y-3 pl-6 marker:text-[#164E50]">
          <li><strong>Repeated rejection of the promise, scope or price:</strong> review the offer against what suitable prospects actually need.</li>
          <li><strong>Suitable prospects without a current buying timeline:</strong> treat them as nurture opportunities rather than assuming near-term sales.</li>
          <li><strong>Marketing and sales action:</strong> agree which of these patterns the evidence supports before changing the campaign or follow-up.</li>
        </ul>
      </BlogSection>
      <BlogSection id="worked-funnel" title={"How do you calculate the rates without hiding the problem?"}>
        <p>The following is a hypothetical cohort of 100 unique enquiries observed over an agreed sales window. The stages are nested, and no stages remain pending in this simplified example. These are arithmetic examples, not DFY results or recommended conversion benchmarks.</p>
        <BlogComparisonTable caption={"Illustrative funnel: keep each denominator explicit"} headers={["Stage", "Count", "Relevant conversion rate"]} rows={[["Unique enquiries", "100", "Starting cohort"], ["Reached in a two-way conversation", "70", "70 ÷ 100 = 70% contact rate"], ["Sales-qualified after contact", "40", "40 ÷ 70 = 57.1% of reached leads; 40% of all enquiries"], ["Meetings booked", "20", "20 ÷ 40 = 50% of qualified leads"], ["Meetings attended", "12", "12 ÷ 20 = 60% attendance rate"], ["Proposals sent", "8", "8 ÷ 12 = 66.7% of attended meetings"], ["Customers won", "2", "2 ÷ 8 = 25% proposal win rate; 2 ÷ 40 = 5% qualified-to-customer rate"]]} />
        <ul className="list-disc space-y-3 pl-6 marker:text-[#164E50]">
          <li>Assume a hypothetical ₹40,000 in media spend for the 100-enquiry cohort.</li>
          <li>Media CPL = ₹40,000 ÷ 100 enquiries = ₹400.</li>
          <li>Media CPQL = ₹40,000 ÷ 40 qualified leads = ₹1,000.</li>
          <li>Media spend per won customer = ₹40,000 ÷ 2 customers = ₹20,000.</li>
          <li>These calculations exclude agency fees, creative, tools and sales costs. The final figure is not fully loaded CAC.</li>
        </ul>
        <ul className="list-disc space-y-3 pl-6 marker:text-[#164E50]">
          <li>With zero customers, report the ₹40,000 spend, zero wins and remaining pipeline.</li>
          <li>Do not show a finite cost per customer when the customer count is zero.</li>
          <li>Show pending cases and allow for conversion lag before comparing a live cohort with a mature one.</li>
        </ul>
      </BlogSection>
      <BlogSection id="crm-fields" title={"What should the CRM record for every enquiry?"}>
        <p>Use a small set of fields that lets the team explain what happened. A large CRM with empty stages is less useful than a consistent process with reliable records.</p>
        <ul className="list-disc space-y-3 pl-6"><li>Source, campaign and acquisition date, with a deduplicated lead identifier.</li><li>Owner, first response attempt, successful contact date and next action date.</li><li>Qualification status, the reason and what remains unknown.</li><li>Meeting booked and attended dates, where those stages apply.</li><li>Proposal date, value, scope and expected decision date.</li><li>Won, lost or pending status, with an evidence-based reason and outcome date.</li></ul>
        <ul className="list-disc space-y-3 pl-6 marker:text-[#164E50]">
          <li>Keep stage definitions stable across campaign comparisons.</li>
          <li><Cite href={sources[1].href}>Google Ads supports qualified-lead and converted-lead goals using offline outcomes</Cite>.</li>
          <li>Send only permitted data through an appropriate integration, and validate matching, duplicates and coverage before using it to guide bidding.</li>
        </ul>
        <p>The <Link className={articleLink} href="/resources/blog/crm-tracking-setup-for-service-businesses">CRM tracking setup guide</Link> covers the recording process. For deeper advertising feedback, see <Link className={articleLink} href="/resources/blog/crm-based-optimization-meta-ads-b2b">CRM-based Meta Ads optimisation</Link>.</p>
      </BlogSection>
      <BlogSection id="first-fix" title={"What should you fix first when good leads produce no sales?"}>
        <ol className="list-decimal space-y-3 pl-6"><li>Agree what counts as qualified and review a sample together. Reclassify records when evidence is missing.</li><li>Find the earliest stage with a meaningful drop or delay. Check actual conversations and delivery records.</li><li>Give one owner a specific change, such as correcting routing or clarifying the appointment invitation.</li><li>Track the next comparable cohort with the same stage definitions and enough time to progress.</li><li>Review later customer outcomes before treating a higher contact or booking rate as the final success.</li></ol>
        <p>Do not scale spend simply because the CPL is low while the funnel remains unexplained. Equally, do not stop a campaign solely because recent enquiries have not yet completed a long buying process. Use the same evidence to review the <Link className={articleLink} href="/services/crm-tracking-nurture">CRM and follow-up system</Link> and the <Link className={articleLink} href="/lead-quality-improvement">lead-quality process</Link>.</p>
      </BlogSection>
      <BlogSection id="faqs" title="Frequently asked questions"><FAQ faqs={faqs} /></BlogSection>
      <BlogSection id="sources" title="Sources and further reading"><p>The references support platform rules and measurement concepts. The decision frameworks are editorial guidance; any worked numbers are explicitly hypothetical.</p><SourceList sources={sources} /></BlogSection>
    </BlogArticle>
  );
}
