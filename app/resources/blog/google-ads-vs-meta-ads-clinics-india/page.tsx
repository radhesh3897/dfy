import type { Metadata } from "next";
import Link from "next/link";
import { BlogArticle, BlogSection } from "@/components/BlogArticle";
import { BlogComparisonTable } from "@/components/BlogComparisonTable";
import { Cite, SourceList } from "@/components/Citations";
import { FAQ } from "@/components/FAQ";
import { pageMetadata } from "@/lib/site";

const path = "/resources/blog/google-ads-vs-meta-ads-clinics-india";
const title = "Google Ads vs Meta Ads for Clinics in India: Which Should You Start With?";
const description = "Choose a clinic advertising channel using patient intent, search terms, booking-page conversion and attended consultations. Compare Google Search, calls and Meta Ads.";
const published = "2026-10-19";
const updated = published;
export const metadata: Metadata = pageMetadata({ title, description, path });
const contents = [{"id": "channel-choice", "label": "Which advertising channel should a clinic assess first?"}, {"id": "patient-intent", "label": "How do Google and Meta differ by patient intent?"}, {"id": "google-lead-forms", "label": "Can clinics start with Google-hosted lead forms?"}, {"id": "calls-and-booking-pages", "label": "How should call assets and clinic booking pages work together?"}, {"id": "search-terms", "label": "Which search terms deserve a clinic’s advertising budget?"}, {"id": "clinic-conversion", "label": "How should you measure landing-page conversion and appointment quality?"}, {"id": "clinic-test", "label": "How should a clinic run its first channel test?"}, {"id": "faqs", "label": "Frequently asked questions"}, {"id": "sources", "label": "Sources and further reading"}];
const faqs = [{"question": "Is Google Ads always better than Meta Ads for clinics?", "answer": "No. Google Search is worth assessing when relevant local appointment demand exists. Meta may help introduce a clinic or explain a service. Compare suitable enquiries, bookings and attended consultations under consistent measurement, rather than choosing a platform by raw lead volume."}, {"question": "Can a clinic use Google lead form assets?", "answer": "Google’s lead-form requirements disallow advertisements for healthcare-related content. A clinic advertising healthcare should not plan around Google-hosted lead form assets. A booking form on the clinic’s own website is a different mechanism and still needs an appropriate data and policy review."}, {"question": "Should a clinic create new call-only ads?", "answer": "Use responsive Search ads with call assets for a new plan. Google’s timetable removed creation of new call-only ads in February 2026 and schedules existing call-only ads to stop receiving impressions in February 2027."}, {"question": "What is a good clinic landing-page conversion rate?", "answer": "There is no single rate that establishes success for every clinic. Define the conversion, compare similar traffic and track suitable enquiries, bookings and attendance. A higher form conversion rate is useful only when the resulting appointments also meet the clinic’s goals."}, {"question": "Should a clinic run Google and Meta at the same time?", "answer": "It can, if the budget, creative, tracking and reception capacity support both. With a limited test budget, a focused service and one channel may make the results easier to interpret. Add another channel when there is a clear reason and a way to evaluate it."}];
const sources = [{"label": "Google Advertising Policies: Lead form requirements", "href": "https://support.google.com/adspolicy/answer/9472930?hl=en"}, {"label": "Google Ads Help: Transition from call ads to call assets", "href": "https://support.google.com/google-ads/answer/15453681"}, {"label": "Google Ads Help: About the search terms report", "href": "https://support.google.com/google-ads/answer/2472708?hl=en-GB"}, {"label": "Google Advertising Policies: Health in personalised advertising", "href": "https://support.google.com/adspolicy/answer/143465?hl=en"}];
const articleLink = "font-medium text-[#164E50] underline decoration-[#CDEECD] underline-offset-4 transition hover:text-[#103D3F]";

export default function ArticlePage() {
  return (
    <BlogArticle path={path} title={title} description={description} category={"Clinic marketing"} published={published} updated={updated}
      summary={"For a clinic with relevant local appointment searches, Google Search is a useful first channel to assess. Meta can help introduce the clinic to people who are not searching yet. Choose using suitable enquiries, attended consultations and acquisition cost. Healthcare ads cannot use Google-hosted lead form assets; consider a clinic booking page and Search ads with call assets instead."} contents={contents} faqs={faqs}
      ctaTitle={"Find the weak link in your clinic’s appointment journey"} ctaText={"Bring your campaign reports, booking page and enquiry-to-appointment numbers. DFY can review channel choice, search intent, page friction and front-desk follow-up with your team."}>
      <BlogSection id="channel-choice" title={"Which advertising channel should a clinic assess first?"}>
        <ul className="list-disc space-y-3 pl-6 marker:text-[#164E50]">
          <li>Choose the appointment or consultation you want the campaign to generate.</li>
          <li>Define the area the clinic can realistically serve.</li>
          <li>Check whether people already search for that service. A local dental practice answering appointment calls needs a different plan from a clinic introducing an unfamiliar service.</li>
        </ul>
        <ul className="list-disc space-y-3 pl-6 marker:text-[#164E50]">
          <li><strong>Google Search:</strong> respond to an expressed service or appointment query.</li>
          <li><strong>Meta:</strong> introduce the clinic or service while people browse.</li>
          <li><strong>Quality check:</strong> either channel can produce unsuitable enquiries when the offer, geography or follow-up is wrong. The advertising platform does not establish clinical suitability for treatment.</li>
        </ul>
        <BlogComparisonTable caption={"Clinic channel decision guide"} headers={["Situation", "Channel to assess", "What must be ready"]} rows={[["Relevant local appointment searches exist", "Google Search", "Service-specific destination, suitable search terms and a working booking or call route"], ["The service needs explanation before someone searches", "Meta awareness or enquiry campaign", "Clear creative, appropriate audience settings and a realistic follow-up process"], ["Calls are the natural next step", "Search ads with call assets", "Staffed hours, call handling and a way to record genuine booking outcomes"], ["The clinic has a limited test budget", "One focused service and channel first", "An affordable test, reliable measurement and a defined review decision"]]} />
        <p>This is a planning framework, not a fixed Google-first rule. Estimate available search demand and costs, assess Meta creative requirements, and choose a test the clinic can fund and operate. For the broader business comparison, read <Link className={articleLink} href="/resources/blog/meta-ads-vs-google-ads-b2b-india">Meta Ads vs Google Ads for B2B</Link>.</p>
      </BlogSection>
      <BlogSection id="patient-intent" title={"How do Google and Meta differ by patient intent?"}>
        <h3>Google Search: respond to a service someone is looking for</h3>
        <ul className="list-disc space-y-3 pl-6 marker:text-[#164E50]">
          <li>Use the service and location in a query such as “dental clinic in Baner” to make the ad and destination relevant.</li>
          <li>Make appointment availability, location and consultation-fee information easy to check.</li>
          <li>Confirm fit after the enquiry: the query alone does not establish that the person can attend, accepts the fee or needs a service the clinic provides.</li>
        </ul>
        <h3>Meta: give someone a reason to consider the clinic</h3>
        <ul className="list-disc space-y-3 pl-6 marker:text-[#164E50]">
          <li>Introduce the doctor, clinic location and appointment process so people can evaluate the practice.</li>
          <li>Use factual claims, genuine credentials and images with the necessary permission.</li>
          <li>Judge an awareness campaign differently from an appointment-enquiry campaign; the intended next step is different.</li>
        </ul>
        <p>Treat health-related targeting and data collection as a design constraint. <Cite href={sources[3].href}>Google places restrictions on personalisation involving sensitive health interests</Cite>. Check the rules for the actual service and platform before choosing audiences or measurement. A previous clinic visit is not a general licence to build health-based advertising audiences.</p>
      </BlogSection>
      <BlogSection id="google-lead-forms" title={"Can clinics start with Google-hosted lead forms?"}>
        <p>No: <Cite href={sources[0].href}>Google’s lead-form requirements disallow advertisements for healthcare-related content</Cite>. We would therefore not use a Google-hosted lead-form-first sequence for a clinic advertising a healthcare service.</p>
        <ul className="list-disc space-y-3 pl-6 marker:text-[#164E50]">
          <li>Use the clinic’s own website form as an appointment-request route alongside service information, subject to applicable advertising and privacy requirements.</li>
          <li>Ask only for the information needed to arrange contact on the public enquiry form.</li>
          <li>Handle clinical intake through an appropriate process. A website form and a Google-hosted lead form are different mechanisms.</li>
        </ul>
        <p>Google-hosted forms for eligible non-healthcare businesses are a separate topic. Their availability should not be used as evidence that the same format is allowed for a clinic.</p>
      </BlogSection>
      <BlogSection id="calls-and-booking-pages" title={"How should call assets and clinic booking pages work together?"}>
        <h3>Make the call route match reception capacity</h3>
        <p><Cite href={sources[1].href}>Google is replacing call-only ads with responsive Search ads that use call assets</Cite>. Its published timetable removed creation of new call-only ads in February 2026; existing call-only ads are scheduled to stop receiving impressions in February 2027. Build a new plan around the current format.</p>
        <ul className="list-disc space-y-3 pl-6 marker:text-[#164E50]">
          <li>Use a phone number that reaches the team handling appointments.</li>
          <li>Show clear contact hours and agree how missed calls are returned.</li>
          <li>Record whether the conversation produced a booking. A tap on a call button does not prove that anyone answered or booked.</li>
        </ul>
        <h3>Give the page enough information to support a booking</h3>
        <ul className="list-disc space-y-3 pl-6"><li>Match the page to the advertised service and location.</li><li>Show verifiable doctor information, clinic address, opening hours and what happens at the appointment.</li><li>Explain the consultation fee where the clinic can publish an accurate amount; avoid unsupported treatment-price promises.</li><li>Make the appointment request and call options usable on a small phone screen.</li><li>Explain whether a submitted request is confirmed automatically or requires a callback.</li></ul>
        <p>Track a successfully submitted request rather than counting each button click as a new lead. The <Link className={articleLink} href="/resources/blog/landing-page-conversion-rate-service-businesses">landing-page conversion guide</Link> explains how to compare page performance with lead quality.</p>
      </BlogSection>
      <BlogSection id="search-terms" title={"Which search terms deserve a clinic’s advertising budget?"}>
        <p>Review the queries that actually triggered ads, not only the keywords selected at setup. <Cite href={sources[2].href}>Google’s search-terms report distinguishes the user’s query from the advertiser’s keyword</Cite> and can help identify irrelevant traffic. Some low-volume queries are omitted for privacy.</p>
        <BlogComparisonTable caption={"Illustrative dental search terms: review against the actual service"} headers={["Query example", "What to investigate", "Possible action"]} rows={[["Dental clinic near me", "Location and appointment availability", "Align the ad and page with the relevant clinic"], ["Dentist jobs Pune", "Recruitment intent", "Exclude from a patient-acquisition campaign where irrelevant"], ["Dental course fees", "Training rather than a consultation", "Exclude if the clinic does not provide training"], ["Dental implant cost Pune", "Cost research that may precede a booking", "Explain the consultation process; assess downstream appointments"], ["Emergency dentist Pune", "Urgent need and availability", "Advertise only if the clinic can actually handle that need"]]} />
        <ul className="list-disc space-y-3 pl-6 marker:text-[#164E50]">
          <li>Review cost and research queries against the clinic’s actual services and resulting enquiries before excluding them.</li>
          <li>Check geographic relevance before expanding the service area simply to generate more leads.</li>
          <li>Keep the searches that contribute suitable appointments; do not use a generic exclusion rule as a substitute for outcome data.</li>
        </ul>
      </BlogSection>
      <BlogSection id="clinic-conversion" title={"How should you measure landing-page conversion and appointment quality?"}>
        <p>Use a consistent visit definition and follow the same enquiries through booking and attendance. Page conversion is important because it shows whether relevant visits turn into an action. Its value depends on what that action becomes.</p>
        <BlogComparisonTable caption={"Hypothetical clinic funnel: arithmetic only, not a benchmark"} headers={["Stage or measure", "Illustrative result", "Definition"]} rows={[["Campaign landing-page sessions", "1,000", "Sessions in one acquisition period"], ["Unique valid appointment enquiries", "80", "Deduplicated enquiries attributed to that cohort"], ["Page enquiry conversion rate", "8%", "80 enquiries ÷ 1,000 sessions"], ["Booked appointments", "40", "40 bookings ÷ 80 enquiries = 50%"], ["Attended consultations", "30", "30 attended ÷ 40 booked = 75%"], ["Media spend per attended consultation", "₹2,000", "₹60,000 campaign spend ÷ 30 attended"]]} />
        <ul className="list-disc space-y-3 pl-6 marker:text-[#164E50]">
          <li>Treat the ₹60,000 spend, enquiry counts and conversion rates as hypothetical arithmetic, not a clinic benchmark.</li>
          <li>The ₹2,000 figure covers media spend per attended consultation. It excludes agency fees, production, software, reception costs and taxes.</li>
          <li>Attendance alone does not establish treatment suitability, treatment acceptance or revenue. This is not fully loaded patient acquisition cost.</li>
        </ul>
        <ul className="list-disc space-y-3 pl-6 marker:text-[#164E50]">
          <li>Deduplicate calls and forms so a person who uses both routes counts as one enquiry.</li>
          <li>Keep pending appointments visible and give each channel the same time for attendance outcomes.</li>
          <li>If no consultations have been attended, report zero attended and the spend. A ₹0 acquisition cost would be misleading.</li>
        </ul>
        <ul className="list-disc space-y-3 pl-6 marker:text-[#164E50]">
          <li>Keep patient records separate from advertising analytics.</li>
          <li>Keep symptoms, diagnoses and other sensitive patient details out of tracking events, URLs and advertising audience lists.</li>
          <li>Check whether proposed conversion sharing is permitted before implementing it.</li>
        </ul>
      </BlogSection>
      <BlogSection id="clinic-test" title={"How should a clinic run its first channel test?"}>
        <ol className="list-decimal space-y-3 pl-6"><li>Choose one service, service area and appointment outcome. Confirm that the service, claims and planned format are eligible.</li><li>Agree who answers calls and processes appointment requests, including the callback process.</li><li>Set a test budget the clinic can afford and verify the booking form, mobile page and measurement before spending.</li><li>Review query relevance, suitable enquiries, bookings and attended consultations together. Keep lead cohorts and cost scope consistent.</li><li>Fix the largest observed problem before adding a second channel. Expand when the evidence and operating capacity support it.</li></ol>
        <ul className="list-disc space-y-3 pl-6 marker:text-[#164E50]">
          <li><strong>Relevant clicks, few enquiries:</strong> inspect the booking-page experience.</li>
          <li><strong>Bookings, poor attendance:</strong> inspect confirmation and reception follow-up.</li>
          <li><strong>Unsuitable search queries:</strong> improve campaign intent before rewriting the whole page.</li>
        </ul>
        <p>DFY’s <Link className={articleLink} href="/services/clinic-lead-generation">clinic lead-generation service</Link> brings campaign, landing-page and follow-up work into the same review. <Link className={articleLink} href="/services/google-ads">Google Ads management</Link> and <Link className={articleLink} href="/services/meta-ads">Meta Ads management</Link> are channel options within that wider appointment journey.</p>
      </BlogSection>
      <BlogSection id="faqs" title="Frequently asked questions"><FAQ faqs={faqs} /></BlogSection>
      <BlogSection id="sources" title="Sources and further reading"><p>The references support platform rules and measurement concepts. The decision frameworks are editorial guidance; any worked numbers are explicitly hypothetical.</p><SourceList sources={sources} /></BlogSection>
    </BlogArticle>
  );
}
