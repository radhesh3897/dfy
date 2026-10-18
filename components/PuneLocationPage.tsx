import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { CTASection } from "@/components/CTASection";
import { FAQ } from "@/components/FAQ";
import { JsonLd } from "@/components/JsonLd";
import { Section } from "@/components/Section";
import { breadcrumbSchema, faqSchema, serviceSchema, webPageSchema } from "@/lib/schema";

export const punePage = {
  title: "B2B Lead Generation Company in Pune",
  description: "Lead generation for Pune B2B and service businesses. Connect Google Ads, Meta Ads, landing pages and CRM to qualified enquiries. Request a free audit.",
  path: "/locations/pune",
};
const faqs = [
  { question: "Does DFY provide B2B lead generation services in Pune?", answer: "Yes. Done For You supports Pune-based B2B and service businesses with paid ads, landing pages, lead qualification, CRM tracking and follow-up. We agree the buyer profile and target geography before planning campaigns." },
  { question: "Does Done For You have an office in Pune?", answer: "DFY is based in New Delhi and serves Pune businesses remotely. This page describes the market we serve, not a Pune office address." },
  { question: "Can a Pune company use DFY to reach buyers across India?", answer: "Yes. Your office location does not have to define your campaign audience. A Pune-based SaaS or B2B services company can discuss a wider target market; a local service can focus on the areas it actually serves." },
  { question: "Should we use Google Ads or Meta Ads for lead generation?", answer: "The choice depends on buyer demand, your offer and the sales process. Google Search can address people actively searching; Meta can introduce an offer and develop interest. We assess channel fit and tracking before recommending how to allocate the budget." },
  { question: "How much do lead generation services in Pune cost?", answer: "The proposal depends on campaign scope, creative, landing pages, CRM and reporting. Ask for media spend, agency fees, setup and recurring tools to be itemized separately. DFY does not publish a fixed Pune package on this page." },
  { question: "What counts as a qualified B2B lead?", answer: "Agree the definition with your sales team. It can include company fit, role, business need, serviceable location and buying timeline. Report raw enquiries, qualified leads, meetings and opportunities separately so a low cost per form fill does not hide weak fit." },
  { question: "What should I bring to the free audit?", answer: "Bring your offer, target customer, target geography, monthly ad budget and recent campaign or CRM reports if available. We will discuss where targeting, the page, qualification or follow-up needs attention before proposing work." },
];
const services = [
  { title: "Google Ads", text: "Match search intent to a specific offer and landing page, then record the sales outcome.", href: "/services/google-ads" },
  { title: "Meta Ads", text: "Test buyer problems and creative angles with qualification built into the enquiry path.", href: "/services/meta-ads" },
  { title: "B2B lead generation", text: "Define the buyer profile and connect acquisition to qualified conversations and opportunities.", href: "/b2b-lead-generation-agency" },
  { title: "Landing pages", text: "Explain fit, proof and next steps before asking a visitor to enquire.", href: "/services/landing-page-cro" },
  { title: "CRM and follow-up", text: "Record source, qualification, owner and next action so enquiries do not stop at the form.", href: "/services/crm-tracking-nurture" },
  { title: "Creative strategy", text: "Turn buyer objections and sales feedback into messages worth testing.", href: "/services/creative-strategy" },
];
const buyerExamples = [
  { title: "SaaS and B2B services", text: "For a Pune team selling across India, qualify company fit, use case and decision-making role. Track attended demos and opportunities rather than judging every demo form as sales-ready.", href: "/resources/blog/b2b-saas-lead-generation-india", label: "Read the B2B SaaS guide" },
  { title: "Education and training", text: "Separate enquiries by programme, eligibility and intended start date. Track counselling conversations and enrolment outcomes so the team can distinguish research from readiness.", href: "/services/edtech-lead-generation", label: "Explore education lead generation" },
  { title: "Clinics, fitness and local services", text: "Agree your service area within Pune and the locations you can actually serve. Qualify the service needed and appointment intent; measure attended visits as well as enquiries.", href: "/services/clinic-lead-generation", label: "Explore clinic lead generation" },
];
const steps = [
  { title: "Define the buyer", text: "Agree the offer, service area, buyer profile and what makes an enquiry qualified." },
  { title: "Connect the journey", text: "Review the ads, landing page, form and CRM handoff. Set responsibilities for each gap." },
  { title: "Launch the agreed scope", text: "Build the campaign and creative plan, with lead ownership and follow-up in place." },
  { title: "Review sales outcomes", text: "Compare enquiry volume with qualified leads, meetings and opportunities, then decide what to change." },
];
const reading = [
  { title: "Improve Meta Ads lead quality", href: "/resources/blog/how-to-improve-lead-quality-meta-ads" },
  { title: "Meta Ads vs Google Ads for B2B", href: "/resources/blog/meta-ads-vs-google-ads-b2b-india" },
  { title: "WhatsApp lead nurture for service businesses", href: "/resources/blog/whatsapp-lead-nurture-service-businesses" },
];
const linkClass = "font-semibold text-[#164E50] underline decoration-[#CDEECD] underline-offset-4";

export function PuneLocationPage() {
  return <>
    <JsonLd data={webPageSchema(punePage.path, punePage.title, punePage.description)} />
    <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Locations", path: "/locations" }, { name: "Pune", path: punePage.path }])} />
    <JsonLd data={serviceSchema({ name: punePage.title, description: punePage.description, path: punePage.path, serviceType: "B2B lead generation", areaServed: "Pune, India" })} />
    <JsonLd data={faqSchema(faqs)} />
    <section className="bg-[#fbfbf8] py-14 sm:py-20">
      <div className="container-wide">
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-[#465163]"><Link href="/locations" className={linkClass}>Locations</Link><span aria-hidden="true"> / </span>Pune</nav>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-center">
          <div>
            <p className="eyebrow text-[#164E50]">Serving Pune · B2B &amp; service businesses</p>
            <h1 className="mt-5 text-[clamp(2.5rem,6vw,4.5rem)] font-black leading-[1.02] tracking-[-0.045em]">{punePage.title}</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#465163]">Done For You connects Google Ads, Meta Ads, landing pages and CRM follow-up so your sales team can identify qualified enquiries. For Pune businesses, we plan around who you sell to, where you serve them and what happens after the form is filled.</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row"><ButtonLink href="/#free-audit-form" variant="primary">Get a free lead-quality audit</ButtonLink><ButtonLink href="#services" variant="secondary">Explore the services</ButtonLink></div>
            <p className="mt-4 text-sm leading-6 text-[#667085]">New Delhi-based team · Remote delivery for Pune businesses</p>
          </div>
          <aside className="rounded-[18px] border border-[#CDEECD] bg-[#EEF8EE] p-6">
            <h2 className="text-2xl font-bold tracking-[-0.03em] text-[#164E50]">A useful enquiry needs context.</h2>
            <p className="mt-4 leading-7 text-[#465163]">We help you answer three questions before increasing spend:</p>
            <ul className="mt-4 list-disc space-y-3 pl-5 text-[#164E50]"><li>Does the lead fit your customer profile?</li><li>Did sales reach and qualify them?</li><li>Which campaign created the opportunity?</li></ul>
          </aside>
        </div>
        <nav aria-label="On this page" className="mt-9 flex flex-wrap gap-x-6 gap-y-3 border-t border-[#CDEECD] pt-5 text-sm">
          {[['qualification', 'Buyer fit'], ['services', 'Services'], ['budget', 'Scope & budget'], ['pune-faqs', 'FAQs']].map(([id, label]) => <a key={id} href={`#${id}`} className={linkClass}>{label}</a>)}
        </nav>
      </div>
    </section>
    <div id="qualification" className="scroll-mt-28"><Section tone="white" eyebrow="Buyer fit" title="How should a Pune business qualify its leads?" intro="These are planning examples, not claims about client results. The right questions depend on your offer and sales process.">
      <div className="grid gap-5 lg:grid-cols-3">{buyerExamples.map(item => <article key={item.title} className="rounded-[14px] border border-[#dfe9dc] p-6"><h3 className="text-xl font-bold text-[#164E50]">{item.title}</h3><p className="mt-4 leading-7 text-[#465163]">{item.text}</p><Link href={item.href} className={`mt-5 inline-block text-sm ${linkClass}`}>{item.label} →</Link></article>)}</div>
      <p className="mt-6 max-w-3xl leading-7 text-[#465163]">A Pune office does not mean every campaign should target only Pune. We separate your company location from the customer locations you want to reach. For fitness offers, explore our <Link href="/services/gym-lead-generation" className={linkClass}>gym lead-generation service</Link>. Define your own qualification rules using the <Link href="/resources/lead-quality-checklist" className={linkClass}>lead-quality checklist</Link>.</p>
    </Section></div>
    <div id="services" className="scroll-mt-28"><Section tone="light" eyebrow="Services" title="What does DFY handle for your acquisition system?">
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{services.map(service => <Link key={service.href} href={service.href} className="rounded-[14px] border border-[#dfe9dc] bg-white p-6 transition hover:border-[#164E50]"><h3 className="text-xl font-bold text-[#164E50]">{service.title}</h3><p className="mt-3 leading-7 text-[#465163]">{service.text}</p><span className="mt-4 inline-block text-sm font-semibold text-[#164E50]">Explore service →</span></Link>)}</div>
    </Section></div>
    <Section tone="white" eyebrow="Evaluate the evidence" title="Look beyond a low cost per lead." intro="Ask how an agency defines a qualified lead, which costs are included and what happened in the CRM after the enquiry.">
      <div className="grid gap-5 md:grid-cols-2"><article className="rounded-[14px] border border-[#CDEECD] bg-[#fbfbf8] p-6"><h3 className="text-xl font-bold text-[#164E50]">Review the case-study context</h3><p className="mt-3 leading-7 text-[#465163]">Read the offer, funnel and reported outcomes together. A result from another client or market is evidence to examine, not a forecast for your Pune campaign.</p><Link href="/results/tranzission" className={`mt-5 inline-block ${linkClass}`}>Read the Tranzission case study →</Link></article><article className="rounded-[14px] border border-[#CDEECD] p-6"><h3 className="text-xl font-bold text-[#164E50]">Agree what success means</h3><p className="mt-3 leading-7 text-[#465163]">Separate enquiries, qualified leads, attended meetings and sales opportunities. Compare costs against the same stage and reporting window.</p><Link href="/resources/blog/qualified-leads-vs-cost-per-lead-b2b" className={`mt-5 inline-block ${linkClass}`}>Compare CPL and qualified-lead cost →</Link></article></div>
    </Section>
    <Section tone="light" eyebrow="Process" title="From your first audit to sales feedback">
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">{steps.map((step, i) => <article key={step.title} className="rounded-[14px] border border-[#dfe9dc] bg-white p-6"><p className="text-sm font-bold text-[#164E50]">0{i + 1}</p><h3 className="mt-4 text-xl font-bold">{step.title}</h3><p className="mt-3 leading-7 text-[#465163]">{step.text}</p></article>)}</div>
      <Link href="/company/process" className={`mt-6 inline-block ${linkClass}`}>See how DFY works →</Link>
    </Section>
    <div id="budget" className="scroll-mt-28"><Section tone="white" eyebrow="Scope & budget" title="What should you budget for lead generation in Pune?">
      <div className="max-w-3xl space-y-5 text-lg leading-8 text-[#465163]"><p>Ask for a proposal that separates media spend, management, creative, landing pages, tracking setup and recurring tools. Existing assets and the work your team handles will change the scope; this page does not publish a fixed Pune package.</p><p>Our <Link href="/resources/blog/b2b-meta-ads-agency-cost-india" className={linkClass}>Meta Ads agency cost guide</Link> includes an illustrative rupee budget and a checklist for comparing quotes.</p><h3 className="text-xl font-bold text-[#164E50]">Bring these details to the audit</h3><ul className="list-disc space-y-2 pl-6"><li>Your offer, customer profile and serviceable locations.</li><li>Your current total budget and campaign reports, if available.</li><li>Lead counts, qualification notes and sales outcomes from your CRM.</li><li>The creative, page and follow-up work your team can own.</li></ul></div>
    </Section></div>
    <div id="pune-faqs" className="scroll-mt-28"><Section tone="light" eyebrow="FAQs" title="Questions about lead generation services in Pune"><FAQ faqs={faqs} /></Section></div>
    <Section tone="white" eyebrow="Practical next steps" title="Plan the campaign and the follow-up together"><div className="grid gap-4 md:grid-cols-3">{reading.map(item => <Link key={item.href} href={item.href} className="rounded-xl border border-[#CDEECD] p-6 text-[#164E50] transition hover:bg-[#EEF8EE]"><h3 className="text-xl font-semibold">{item.title}</h3><span className="mt-5 inline-block text-sm">Read the guide →</span></Link>)}</div></Section>
    <CTASection title="Find the gaps in your Pune lead-generation funnel" text="Share your offer, audience and current lead outcomes. We’ll discuss where campaigns, landing pages, qualification or follow-up need attention and the scope that fits your team." buttonLabel="Get a free lead-quality audit" buttonHref="/#free-audit-form" />
  </>;
}
