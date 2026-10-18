import type { Metadata } from "next";
import Link from "next/link";
import { BlogArticle, BlogSection } from "@/components/BlogArticle";
import { BlogComparisonTable } from "@/components/BlogComparisonTable";
import { Cite, SourceList } from "@/components/Citations";
import { FAQ } from "@/components/FAQ";
import { pageMetadata } from "@/lib/site";

const path = "/resources/blog/clinic-landing-page-conversion";
const title = "Clinic Landing Pages: How to Turn Ad Clicks into Booked Consultations";
const description = "Build a clinic landing page around service intent, verified doctor information and easy appointment requests. Measure conversion, bookings and attendance together.";
const published = "2026-10-19";
const updated = published;
export const metadata: Metadata = pageMetadata({ title, description, path });
const contents = [{"id": "service-match", "label": "Does your clinic landing page match the service and search intent?"}, {"id": "patient-information", "label": "What information helps someone choose a clinic?"}, {"id": "page-wireframe", "label": "What should a clinic appointment page contain?"}, {"id": "booking-options", "label": "How should calls and appointment requests work together?"}, {"id": "appointment-form", "label": "What belongs in a clinic appointment-request form?"}, {"id": "conversion-measurement", "label": "How should you measure conversion and appointment quality?"}, {"id": "test-priorities", "label": "What should you improve or test first?"}, {"id": "faqs", "label": "Frequently asked questions"}, {"id": "sources", "label": "Sources and further reading"}];
const faqs = [{"question": "What is a good clinic landing-page conversion rate?", "answer": "There is no universal rate that proves success. Define valid enquiries and eligible sessions, compare similar traffic, and examine bookings and attendance from the same enquiry cohort. A higher form rate can be unhelpful if fewer suitable appointments result."}, {"question": "Should a clinic landing page have a form or a phone number?", "answer": "It can have both when the clinic can operate both routes. Show staffed call hours, keep the request form short and explain whether reception must confirm the appointment. Track duplicate contacts as one enquiry."}, {"question": "Should symptoms be requested on an advertising landing page?", "answer": "A public appointment-request form should collect only what is needed for contact and scheduling. Handle sensitive clinical information through an appropriate separate intake process, and keep it out of ad-platform tracking."}, {"question": "Can a clinic use Google-hosted lead forms instead of a website page?", "answer": "Google’s hosted lead form asset policy disallows healthcare-related advertisements. A request form on the clinic’s own website is a separate mechanism and still needs appropriate privacy and advertising-policy review."}, {"question": "Should we shorten the page to improve conversion?", "answer": "Remove repetition and friction, but keep the information a prospective patient needs to decide. Service relevance, verified doctor details, fees, location and a clear booking process can matter more than page length."}];
const sources = [{"label": "Google Ads Help: Optimise your ads and landing pages", "href": "https://support.google.com/google-ads/answer/6238826?hl=en-GB"}, {"label": "Google Advertising Policies: Lead form requirements", "href": "https://support.google.com/adspolicy/answer/9472930?hl=en"}, {"label": "Google Ads Help: Transition from call ads to call assets", "href": "https://support.google.com/google-ads/answer/15453681"}, {"label": "Google Advertising Policies: Personalised advertising", "href": "https://support.google.com/adspolicy/answer/143465?hl=en"}];
const articleLink = "font-medium text-[#164E50] underline decoration-[#CDEECD] underline-offset-4 transition hover:text-[#103D3F]";

export default function ArticlePage() {
  return (
    <BlogArticle path={path} title={title} description={description} category={"Clinic marketing"} published={published} updated={updated}
      summary={"A clinic landing page should match the advertised service and location, answer practical appointment questions and make calling or requesting a booking easy on mobile. Improve the page using valid enquiries, confirmed bookings and attended consultations together. More form submissions alone do not establish that the clinic is getting suitable appointments."} contents={contents} faqs={faqs}
      ctaTitle={"Review your clinic’s booking page and enquiry journey"} ctaText={"DFY can review the connection between your ads, search terms, appointment page and reception follow-up. Bring the page and your enquiry-to-attendance numbers so the review starts with the actual bottleneck."}>
      <BlogSection id="service-match" title={"Does your clinic landing page match the service and search intent?"}>
        <ul className="list-disc space-y-3 pl-6 marker:text-[#164E50]">
          <li><strong>Start with one appointment goal.</strong> A dental consultation page should explain that consultation. A general list of every clinic service can leave someone unsure whether they have reached the right place.</li>
          <li><strong>Carry the promise through.</strong> Keep the service, location and next step consistent across the search query, ad and page. Do not advertise a specific doctor if that doctor does not take those appointments.</li>
          <li><strong>Make geography concrete.</strong> Give the real clinic address, locality and directions. Mention parking or public transport only when verified; avoid inventing a branch to match a keyword.</li>
          <li><strong>Choose an honest next step.</strong> “Request an appointment” is appropriate when reception must confirm availability. “Book a confirmed slot” requires a booking system that actually reserves that slot.</li>
        </ul>
        <p><Cite href={sources[0].href}>Google recommends matching the landing page to the ad and keywords, with useful content and easy navigation</Cite>. Our clinic-specific framework applies those principles to the decision a prospective patient needs to make. Start with the <Link className={articleLink} href="/resources/blog/google-ads-vs-meta-ads-clinics-india">clinic Google Ads vs Meta Ads guide</Link> if channel choice is still open.</p>
      </BlogSection>
      <BlogSection id="patient-information" title={"What information helps someone choose a clinic?"}>
        <ul className="list-disc space-y-3 pl-6 marker:text-[#164E50]">
          <li><strong>Who provides the consultation:</strong> the doctor’s correct name, relevant qualifications and registration information where appropriate. Confirm credentials with the clinic before publishing.</li>
          <li><strong>What the clinic provides:</strong> the service being advertised, what an initial consultation covers and any limits on availability. Explain the process without promising a treatment outcome.</li>
          <li><strong>Where and when:</strong> address, opening hours and actual appointment availability. Keep holiday and doctor schedules consistent with what reception can offer.</li>
          <li><strong>What it costs:</strong> verified consultation fees, what is included and when further costs are discussed. Do not imply that a consultation fee is a complete treatment price.</li>
          <li><strong>What supports trust:</strong> genuine clinic photographs, accurate doctor profiles and patient feedback used with the necessary permissions. A stock photograph should not be presented as the treating doctor.</li>
          <li><strong>What happens next:</strong> explain who will contact the person, through which channel and how the appointment is confirmed. Publish a response commitment only if the team can meet it.</li>
        </ul>
        <p>Keep the page focused, but retain useful access to doctor information, contact details and privacy information. Someone checking the clinic should not have to submit a form to find basic appointment facts.</p>
      </BlogSection>
      <BlogSection id="page-wireframe" title={"What should a clinic appointment page contain?"}>
        <p>This is an illustrative page outline, not a measured conversion template or a claim about a particular clinic. Adapt it to the service, booking system and information the clinic can verify.</p>
        <BlogComparisonTable caption={"Illustrative clinic landing-page layout"} headers={["Page area", "What to include", "Question it answers"]} rows={[["First screen", "Service and locality, doctor or clinic identity, request or call button", "Have I reached a clinic that provides this appointment?"], ["Appointment details", "Consultation process, verified fee and availability information", "What am I requesting and what should I expect?"], ["Doctor and clinic proof", "Verified credentials, real clinic photos, relevant patient feedback", "Who will see me and where will I go?"], ["Booking route", "Short request form, staffed call option and confirmation explanation", "How do I arrange the appointment?"], ["Practical FAQs and footer", "Directions, scheduling questions, contact and privacy links", "What do I need to know before I contact the clinic?"]]} />
        <ul className="list-disc space-y-3 pl-6 marker:text-[#164E50]">
          <li>Use a clear action label such as “Request a dental consultation” instead of an unexplained “Submit”.</li>
          <li>Keep phone and booking actions reachable on mobile. A fixed action bar must not cover form fields, consent text or the footer.</li>
          <li>Use readable type, labelled inputs, visible focus states and helpful error messages. Check the page on an actual phone connection as well as a desktop.</li>
          <li>After a successful request, show an acknowledgement that explains the next step. Do not display a confirmed appointment unless one has been reserved.</li>
        </ul>
      </BlogSection>
      <BlogSection id="booking-options" title={"How should calls and appointment requests work together?"}>
        <ul className="list-disc space-y-3 pl-6 marker:text-[#164E50]">
          <li><strong>Offer a call when staff can answer.</strong> Show working hours and a usable mobile phone link. An unanswered phone number is a reception problem as well as a page problem.</li>
          <li><strong>Offer a request form for people who cannot call.</strong> Route it to a named team or queue and retain a record of receipt. Test delivery instead of assuming that a success screen means the team received the enquiry.</li>
          <li><strong>Use a booking calendar only when schedules are reliable.</strong> Confirm the doctor, location, duration and status of the selected slot. Handle rescheduling clearly.</li>
          <li><strong>Avoid duplicate counting.</strong> One person may submit a request and then call. Record one unique enquiry and its later stages rather than counting every interaction as another patient.</li>
          <li><strong>Make urgent-care limitations clear where relevant.</strong> Do not present a routine appointment-request form as an emergency response route. Only advertise emergency availability that the clinic can actually provide.</li>
        </ul>
        <p>For new Google Search plans, <Cite href={sources[2].href}>Google’s transition guidance points to responsive Search ads with call assets</Cite>. A clinic’s website form is different from a Google-hosted lead form asset: <Cite href={sources[1].href}>Google disallows healthcare-related advertisements in its hosted lead form assets</Cite>.</p>
      </BlogSection>
      <BlogSection id="appointment-form" title={"What belongs in a clinic appointment-request form?"}>
        <BlogComparisonTable caption={"Clinic appointment form field decisions"} headers={["Field", "Why it may help", "Design decision"]} rows={[["Name", "Helps reception address the enquiry", "Ask only for the identity needed to arrange contact"], ["Contact number", "Enables a call to arrange the appointment", "Validate format without making legitimate numbers impossible to enter"], ["Preferred location or time", "Helps route and schedule the request", "Include only real options and label preferences as unconfirmed"], ["Permission and privacy information", "Explains the requested contact and data handling", "Make any optional marketing permission clear and separate"], ["Symptoms, reports or medical history", "Belongs to a different clinical intake process", "Keep sensitive clinical details out of a public marketing form"]]} />
        <ul className="list-disc space-y-3 pl-6 marker:text-[#164E50]">
          <li>Do not collect every possible qualification detail just because the form builder supports another field. Add a question only when the answer changes scheduling or routing.</li>
          <li>Keep clinical intake separate from advertising analytics. Do not send symptoms, treatment details or free-text medical information to ad platforms through URLs, event names or form payloads.</li>
          <li>Review permitted measurement for the actual healthcare service. <Cite href={sources[3].href}>Google restricts personalised advertising involving sensitive health interests</Cite>; a clinic interaction does not automatically justify an advertising audience.</li>
          <li>Check form validation, failed submission handling, confirmation messages and reception delivery before buying more traffic.</li>
        </ul>
      </BlogSection>
      <BlogSection id="conversion-measurement" title={"How should you measure conversion and appointment quality?"}>
        <h3>Define each stage before comparing pages</h3>
        <ul className="list-disc space-y-3 pl-6 marker:text-[#164E50]">
          <li><strong>Enquiry conversion rate:</strong> unique valid enquiries attributed to the page ÷ eligible page sessions × 100. State which channels and time period are included and use the same session definition in both versions.</li>
          <li><strong>Booking rate:</strong> confirmed bookings from that enquiry cohort ÷ unique valid enquiries × 100. A request is not a confirmed booking.</li>
          <li><strong>Attendance rate:</strong> attended consultations ÷ confirmed bookings whose appointment date has passed × 100. Exclude future appointments from this denominator.</li>
          <li><strong>Media cost per attended consultation:</strong> attributed ad spend ÷ attended consultations from that cohort. This excludes agency fees, software and clinic operating costs unless you explicitly add them.</li>
        </ul>
        <h3>Read the whole appointment journey</h3>
        <p>Hypothetical example, not a DFY result: a campaign spends ₹30,000 and produces 1,000 eligible page sessions, 50 valid enquiries, 30 confirmed bookings and 24 attended consultations. Assume all 30 appointment dates have passed and the follow-up window is complete.</p>
        <ul className="list-disc space-y-3 pl-6 marker:text-[#164E50]">
          <li>Enquiry conversion is 50 ÷ 1,000 = <strong>5%</strong>.</li>
          <li>Booking rate is 30 ÷ 50 = <strong>60%</strong>.</li>
          <li>Attendance rate is 24 ÷ 30 = <strong>80%</strong>.</li>
          <li>Media cost per attended consultation is ₹30,000 ÷ 24 = <strong>₹1,250</strong>.</li>
          <li>If a denominator is zero, report the metric as not yet calculable. Do not call zero attended consultations a zero acquisition cost.</li>
        </ul>
        <p>Compare similar services, geographies, devices and follow-up windows. Check appointment fit through the clinic’s appropriate process; advertising metrics do not establish clinical suitability. The <Link className={articleLink} href="/resources/blog/landing-page-conversion-rate-service-businesses">general landing-page conversion guide</Link> provides a broader measurement discussion.</p>
      </BlogSection>
      <BlogSection id="test-priorities" title={"What should you improve or test first?"}>
        <ol className="list-decimal space-y-3 pl-6 marker:text-[#164E50]">
          <li><strong>Repair broken actions:</strong> confirm phone links, form delivery and booking availability. A broken contact route takes priority over a headline experiment.</li>
          <li><strong>Correct intent mismatches:</strong> send the advertised service to the matching destination and remove claims the clinic cannot fulfil. Review the <Link className={articleLink} href="/resources/blog/google-ads-search-terms-clinics">clinic search-term worksheet</Link> alongside the page.</li>
          <li><strong>Clarify missing decision information:</strong> add verified fee, location, doctor and confirmation details where they answer real reception questions.</li>
          <li><strong>Reduce unnecessary friction:</strong> test a shorter form or clearer action while checking validity and bookings. Fewer fields are not automatically better for every workflow.</li>
          <li><strong>Evaluate one substantial hypothesis:</strong> hold traffic and measurement as consistent as practical. Allow enough enquiry follow-up and appointment time before judging attendance. With too little data, document uncertainty instead of declaring a winner.</li>
        </ol>
        <p>For implementation support, see <Link className={articleLink} href="/services/clinic-lead-generation">clinic lead generation</Link> and <Link className={articleLink} href="/services/landing-page-cro">landing-page CRO</Link>. Choose the next change from the weakest measured stage, rather than from a universal conversion-rate target.</p>
      </BlogSection>
      <BlogSection id="faqs" title="Frequently asked questions"><FAQ faqs={faqs} />
        </BlogSection>
      <BlogSection id="sources" title="Sources and further reading"><p>Official references support the platform rules and product descriptions. Decision frameworks are editorial guidance; worked examples are hypothetical. Features and pricing should be checked again before purchase or launch.</p>
        <SourceList sources={sources} />
        </BlogSection>
    </BlogArticle>
  );
}
