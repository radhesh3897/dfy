import type { Metadata } from "next";
import Link from "next/link";
import { BlogArticle, BlogSection } from "@/components/BlogArticle";
import { BlogComparisonTable } from "@/components/BlogComparisonTable";
import { Cite, SourceList } from "@/components/Citations";
import { FAQ } from "@/components/FAQ";
import { pageMetadata } from "@/lib/site";

const path = "/resources/blog/freelancer-vs-marketing-agency-india";
const title = "Freelancer vs Marketing Agency in India: Who Should Manage Your Ads?";
const description = "Compare a freelancer and marketing agency by scope, expertise, total cost, accountability and account ownership. Use a practical hiring checklist for your paid ads.";
const published = "2026-10-19";
const updated = published;
export const metadata: Metadata = pageMetadata({ title, description, path });
const contents = [{"id": "define-the-work", "label": "What work are you actually hiring someone to do?"}, {"id": "freelancer-fit", "label": "When is a freelancer a good fit for paid ads?"}, {"id": "agency-fit", "label": "When does a marketing agency team make sense?"}, {"id": "responsibility-matrix", "label": "Who should own landing pages, creative, tracking and sales feedback?"}, {"id": "cost-comparison", "label": "How should you compare the real cost in India?"}, {"id": "account-ownership", "label": "Who should control the ad accounts, pages and data?"}, {"id": "hiring-questions", "label": "What should you ask a freelancer or agency before hiring?"}, {"id": "trial-and-decision", "label": "What should a useful first engagement include?"}, {"id": "faqs", "label": "Frequently asked questions"}, {"id": "sources", "label": "Sources and further reading"}];
const faqs = [{"question": "Is a freelancer or agency better for a small business?", "answer": "A freelancer can fit a defined specialist scope when the business can cover the remaining work. An agency can fit a programme needing coordinated campaign, creative, landing-page and tracking support. Assess actual capability, capacity, responsibilities and total cost."}, {"question": "Are freelancers always cheaper than agencies?", "answer": "No. Compare the same scope, including separately billed creative, tracking, pages, tools and coordination. A lower management fee can produce a higher total cost when other necessary work is excluded."}, {"question": "Can a freelancer handle landing pages and CRM work?", "answer": "Some can, either directly or with other specialists. Ask for evidence of the work, who delivers it, the implementation process and what support is included. The title alone does not establish the capability."}, {"question": "Should my business keep access to its ad accounts?", "answer": "Your business should retain appropriate administrative access to the assets it owns and agree the provider’s platform access and exit process before work begins. Confirm billing, reporting, creative and data handover in the scope."}, {"question": "How soon should I judge a new advertising provider?", "answer": "Review delivery milestones on agreed dates, and evaluate lead and customer outcomes after enough relevant activity and time for the sales process. Set the review window around your campaign and buying cycle rather than a universal number of days."}];
const sources = [{"label": "Google Ads Help: About access levels in a Google Ads account", "href": "https://support.google.com/google-ads/answer/9978556?hl=en"}, {"label": "Google Ads Help: Unlink accounts from a manager account", "href": "https://support.google.com/google-ads/answer/7456531?hl=en"}];
const articleLink = "font-medium text-[#164E50] underline decoration-[#CDEECD] underline-offset-4 transition hover:text-[#103D3F]";

export default function ArticlePage() {
  return (
    <BlogArticle path={path} title={title} description={description} category={"Agency selection"} published={published} updated={updated}
      summary={"A freelancer can suit a clearly defined scope when your team covers the other work. An agency can suit a programme requiring coordinated campaign, creative, landing-page and CRM expertise. Compare the actual people, responsibilities and total cost. Neither the freelancer label nor the agency label proves competence or results."} contents={contents} faqs={faqs}
      ctaTitle={"Work out which capabilities your advertising needs"} ctaText={"Share your offer, budget, existing assets and the work your team can own. DFY can discuss a scope across campaigns, creative, landing pages, tracking and follow-up, including where outside help is unnecessary."}>
      <BlogSection id="define-the-work" title={"What work are you actually hiring someone to do?"}>
        <ul className="list-disc space-y-3 pl-6 marker:text-[#164E50]">
          <li>List what needs to change before requesting proposals: campaign management, creative, pages, tracking, CRM or follow-up.</li>
          <li>Distinguish an established campaign needing a specialist from a lead-generation system that needs building.</li>
          <li>Assign the necessary work. A low fee can hide unassigned tasks that delay launch.</li>
        </ul>
        <p>Done For You is an agency, so this comparison comes from an agency perspective. The decision should still be fair to both options: a capable freelancer with a clear scope can be a better fit than an agency whose delivery does not match the brief.</p>
        <BlogComparisonTable caption={"Compare the delivery scope before the provider label"} headers={["Workstream", "What to specify", "What evidence to request"]} rows={[["Campaigns", "Platforms, offers, locations, setup and ongoing changes", "A relevant account walkthrough with confidential data protected"], ["Creative", "Formats, concepts, asset supply and revision limits", "Examples and an explanation of the testing process"], ["Landing pages", "Copy, design, development, mobile QA and ownership", "A working page and its conversion measurement"], ["Tracking and CRM", "Lead delivery, events, stage definitions and reporting", "A clear data-flow explanation and validation plan"], ["Follow-up", "Who contacts enquiries and records outcomes", "An owner, response process and feedback cadence"]]} />
        <ul className="list-disc space-y-3 pl-6 marker:text-[#164E50]">
          <li>Decide which work your team can own and which work needs a supplier.</li>
          <li>Give every campaign dependency an owner, even when several suppliers contribute.</li>
          <li>Use the <Link className={articleLink} href="/resources/blog/full-service-vs-ads-only-marketing-agency">full-service versus ads-only comparison</Link> to separate the delivery scope from the hiring model.</li>
        </ul>
      </BlogSection>
      <BlogSection id="freelancer-fit" title={"When is a freelancer a good fit for paid ads?"}>
        <p>Consider a freelancer when you can define a manageable specialist assignment and your business can supply or coordinate the other inputs. For example, an internal marketing lead may already manage the offer, pages and CRM, while an independent media buyer handles a specific channel.</p>
        <ul className="list-disc space-y-3 pl-6"><li>The named specialist has relevant experience and can explain their decisions.</li><li>The campaign scope fits their available capacity and the agreed communication schedule.</li><li>Your team can approve work, supply assets and resolve dependencies.</li><li>There is a plan for absence, urgent account issues and a handover.</li></ul>
        <ul className="list-disc space-y-3 pl-6 marker:text-[#164E50]">
          <li>Check whether the freelancer provides strategy and coordinates other specialists, or delivers a narrower assignment.</li>
          <li>Ask how the work is delivered rather than inferring capability from the title.</li>
          <li>Confirm capacity as well as direct access to the person doing the work.</li>
        </ul>
      </BlogSection>
      <BlogSection id="agency-fit" title={"When does a marketing agency team make sense?"}>
        <ul className="list-disc space-y-3 pl-6 marker:text-[#164E50]">
          <li>Consider an agency when campaign, creative, landing-page and reporting work need coordinated delivery.</li>
          <li>Check whether the business wants to coordinate separate suppliers or assign that responsibility to one team.</li>
          <li>Confirm that the necessary disciplines are actually included in the proposal.</li>
        </ul>
        <ul className="list-disc space-y-3 pl-6 marker:text-[#164E50]">
          <li>Meet the people assigned to campaigns and implementation.</li>
          <li>Identify who owns the overall result and resolves work across team boundaries.</li>
          <li>Assess expertise and delivery capacity directly. Team size and a persuasive sales presentation do not establish either.</li>
        </ul>
        <h3>Check the operating model</h3>
        <ul className="list-disc space-y-3 pl-6 marker:text-[#164E50]">
          <li>Ask whether delivery uses employees, contractors or another partner.</li>
          <li>Check how quality is reviewed and who covers absence.</li>
          <li>Agree the update cadence and escalation route. Apply the same checks to a freelancer.</li>
        </ul>
        <ul className="list-disc space-y-3 pl-6 marker:text-[#164E50]">
          <li>Consider an in-house hire when the workload is steady and you can recruit, manage and support the role.</li>
          <li>Include the supervision and complementary skills the hire will need in the comparison.</li>
          <li>Do not assume one employee can cover a complete marketing department’s responsibilities.</li>
        </ul>
      </BlogSection>
      <BlogSection id="responsibility-matrix" title={"Who should own landing pages, creative, tracking and sales feedback?"}>
        <ul className="list-disc space-y-3 pl-6 marker:text-[#164E50]">
          <li>Name the owner of each workstream before work starts.</li>
          <li>Use specific roles instead of an undefined “marketing team”.</li>
          <li>Assign one person to resolve dependencies when several specialists contribute.</li>
        </ul>
        <BlogComparisonTable caption={"Example responsibility matrix to adapt, not a promised service package"} headers={["Task", "Potential delivery owner", "Business responsibility"]} rows={[["Offer and qualification criteria", "Business owner with marketing and sales input", "Confirm what can be sold, who fits and what claims are accurate"], ["Campaign setup and optimisation", "Freelancer or agency media buyer", "Approve scope, spend and material changes"], ["Creative and landing pages", "Internal team or specifically contracted specialists", "Supply accurate proof and timely approvals"], ["Tracking and lead delivery", "Named implementation specialist", "Confirm access, permitted data and lead ownership"], ["Contact and closing", "Your sales or appointment team unless contracted otherwise", "Record outcomes and return useful feedback"], ["Reporting and review", "Agreed account owner", "Review the pipeline and decide the next action"]]} />
        <p>This is an illustrative division of work. Replace it with the actual proposal. If an agency or freelancer promises qualified leads, establish the qualification rule, who validates it and what happens to duplicates or disputed outcomes.</p>
        <p>Use the <Link className={articleLink} href="/resources/blog/how-to-measure-marketing-agency-performance">agency performance guide</Link> to define reporting that connects activity to outcomes.</p>
      </BlogSection>
      <BlogSection id="cost-comparison" title={"How should you compare the real cost in India?"}>
        <ul className="list-disc space-y-3 pl-6 marker:text-[#164E50]">
          <li>Request itemised quotes in the same currency and billing period.</li>
          <li>Separate media spend, management, creative, landing pages, software, setup and taxes.</li>
          <li>Compare equivalent deliverables and service levels, not only the headline retainer.</li>
        </ul>
        <h3>A hypothetical scope comparison</h3>
        <ul className="list-disc space-y-3 pl-6 marker:text-[#164E50]">
          <li><strong>Hypothetical quote A:</strong> ₹20,000 monthly management + ₹8,000 creative + ₹4,000 tracking support = ₹32,000 recurring service cost before tax.</li>
          <li><strong>Hypothetical quote B:</strong> ₹30,000 for the same bundled deliverables before tax.</li>
          <li><strong>Comparison:</strong> if scope and quality are equivalent, quote B costs less overall despite its higher headline management fee.</li>
        </ul>
        <ul className="list-disc space-y-3 pl-6 marker:text-[#164E50]">
          <li>These amounts are hypothetical examples, not Indian market rates, DFY prices or evidence of typical freelancer or agency fees.</li>
          <li>Add the same separately stated media budget to both quotes.</li>
          <li>Check one-time setup, missing deliverables and supplier-coordination time before choosing.</li>
        </ul>
        <p>Ask about account limits, creative revisions, reporting access and what triggers an extra charge. The <Link className={articleLink} href="/resources/blog/b2b-meta-ads-agency-cost-india">Meta Ads agency cost guide</Link> contains a fuller budget worksheet.</p>
      </BlogSection>
      <BlogSection id="account-ownership" title={"Who should control the ad accounts, pages and data?"}>
        <ul className="list-disc space-y-3 pl-6 marker:text-[#164E50]">
          <li>Agree account ownership and supplier access before launch.</li>
          <li>Retain appropriate administrative access to the assets your business owns and visibility into spend and performance.</li>
          <li>Ask how supplier access will be granted and removed through the platform’s account tools.</li>
        </ul>
        <p><Cite href={sources[0].href}>Google’s access-level documentation describes the permissions available to account users</Cite>. <Cite href={sources[1].href}>Its manager-account guidance explains unlinking a client account from a manager</Cite>. These platform functions are separate from your commercial agreement with the supplier.</p>
        <ul className="list-disc space-y-3 pl-6"><li>Record the relevant ad account, business portfolio, analytics property, domain, CRM and billing arrangements.</li><li>Confirm who owns commissioned pages and creative, and what source files or exports are included.</li><li>Specify which reports and customer records your team can access throughout the engagement.</li><li>Agree an exit checklist covering access, files, documentation and open tasks.</li></ul>
        <ul className="list-disc space-y-3 pl-6 marker:text-[#164E50]">
          <li>Use role-based access appropriate to the assignment.</li>
          <li>Avoid sharing one personal password between several people.</li>
          <li>Keep direct visibility into your advertising accounts; a supplier’s dashboard should not be your only view of spend.</li>
        </ul>
      </BlogSection>
      <BlogSection id="hiring-questions" title={"What should you ask a freelancer or agency before hiring?"}>
        <ol className="list-decimal space-y-3 pl-6"><li>Who will do the work, and can we meet the people responsible for campaigns and implementation?</li><li>Which parts of our current problem are inside the scope, and which require our team or another supplier?</li><li>How will you define and report qualified enquiries, opportunities and customer outcomes?</li><li>Can you explain a relevant example, including the starting position, cost scope and limitations?</li><li>What happens when a lead-delivery integration fails or the assigned specialist is unavailable?</li><li>Which assets and accounts will we control, and what will we receive at handover?</li><li>What are the review dates, additional charges and exit terms?</li></ol>
        <p>Strong answers are specific enough to put into a written scope. For questions about experience and reporting, use <Link className={articleLink} href="/resources/blog/how-to-choose-b2b-meta-ads-agency-india">the B2B Meta Ads agency hiring guide</Link> and <Link className={articleLink} href="/resources/blog/meta-ads-agency-red-flags">the agency red-flag checklist</Link>. Badges or a low CPL screenshot should not replace that assessment.</p>
      </BlogSection>
      <BlogSection id="trial-and-decision" title={"What should a useful first engagement include?"}>
        <ul className="list-disc space-y-3 pl-6 marker:text-[#164E50]">
          <li>Choose an initial scope that can be delivered and evaluated: an audit, setup project or focused campaign period.</li>
          <li>Agree deliverables, access, communication, outcome definitions and a review date before starting.</li>
          <li>Set a review window that fits the sales process and expected data volume.</li>
        </ul>
        <ul className="list-disc space-y-3 pl-6 marker:text-[#164E50]">
          <li><strong>Delivery milestones:</strong> check that agreed pages, campaigns and tracking are complete and working.</li>
          <li><strong>Performance expectations:</strong> allow enough relevant activity and time for leads to progress before judging acquisition outcomes.</li>
          <li><strong>Limits:</strong> neither an agency nor a freelancer can guarantee every market response.</li>
        </ul>
        <p>Choose the provider who can show the capability, capacity and responsibility your scope requires at an affordable total cost. If your team already covers most of the system, a specialist may be sufficient. If several areas need coordinated work, discuss a defined <Link className={articleLink} href="/services/b2b-lead-generation">B2B lead-generation scope</Link> rather than buying an unspecified “full-service” label.</p>
      </BlogSection>
      <BlogSection id="faqs" title="Frequently asked questions"><FAQ faqs={faqs} /></BlogSection>
      <BlogSection id="sources" title="Sources and further reading"><p>Google’s references describe platform permissions and manager access. The hiring framework is editorial guidance, and the cost comparison is hypothetical rather than a market survey.</p><SourceList sources={sources} /></BlogSection>
    </BlogArticle>
  );
}
