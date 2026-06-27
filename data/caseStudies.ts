export type CaseStudyMetric = { value: string; label: string };
export type CaseStudyImage = { src: string; alt: string };

export type CaseStudy = {
  slug: string;
  brand: string;
  sector: string;
  featured?: boolean;
  badge?: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  summary: string;
  cardMetric: string;
  metrics: CaseStudyMetric[];
  challenge: string;
  approach: string[];
  result: string;
  quote?: { text: string; name: string; role: string };
  heroImage: CaseStudyImage;
  proofImages: CaseStudyImage[];
  datePublished: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "hobfit",
    brand: "Hobfit",
    sector: "Fitness and gym lead generation",
    featured: true,
    badge: "Featured on Shark Tank India",
    title: "Hobfit: 3.8× ROAS and ₹28L+ profit from Meta Ads",
    metaTitle: "Hobfit Case Study: 3.8x ROAS Fitness Lead Generation",
    metaDescription:
      "How Done For You helped Hobfit, a Shark Tank India fitness brand, reach 3.8x ROAS and over ₹28L profit with Meta Ads optimized for members who actually join.",
    summary:
      "A Shark Tank India fitness brand scaled to 3.8x ROAS and over ₹28L profit with Meta Ads optimized for members who actually join, not cheap clicks.",
    cardMetric: "3.8× ROAS · ₹28L+ profit",
    metrics: [
      { value: "3.8×", label: "Constant ROAS" },
      { value: "₹28L+", label: "Profit earned" },
      { value: "₹15L+", label: "Ad spend managed" },
    ],
    challenge:
      "Before working with Done For You, Hobfit was spending on Meta Ads that brought clicks but not members. The traffic looked fine on the dashboard, yet very few of those leads actually joined classes. The ad account was optimizing for the cheapest form fill, not the people most likely to become paying members.",
    approach: [
      "Rebuilt audience targeting around real fitness intent instead of broad, cheap reach.",
      "Created proof-led creative around actual classes and the community, so the ad attracted people ready to join.",
      "Tightened the lead capture so genuine intent was qualified before a lead counted.",
      "Wired member sign-up data back to Meta so the algorithm learned from buyers, not browsers.",
    ],
    result:
      "Across the cycle Hobfit held a constant 3.8x ROAS, earned over ₹28L in profit, and scaled to ₹15L+ in managed ad spend. More importantly, the leads coming through felt ready to join, and the community kept growing week after week.",
    quote: {
      text:
        "Before this, our ads were just burning money on random clicks. Now every lead feels genuinely ready to join our classes, and our community keeps growing week after week.",
      name: "Gaurav Dua",
      role: "Co-Founder, Hobfit",
    },
    heroImage: { src: "/case-studies/hobfit-sharktank.png", alt: "Hobfit founders on the Shark Tank India set" },
    proofImages: [
      { src: "/case-studies/hobfit-account.png", alt: "Hobfit live Meta Ads account showing ₹6.8L+ ad spend managed" },
    ],
    datePublished: "2026-06-27",
  },
  {
    slug: "tranzission",
    brand: "Tranzission",
    sector: "Google and Meta Ads revenue growth",
    title: "Tranzission: revenue doubled (+152%) in one month",
    metaTitle: "Tranzission Case Study: Revenue Doubled in One Month",
    metaDescription:
      "How Done For You doubled Tranzission's monthly net sales by +152%, lifting Google Ads conversion rate from 3.76% to 9.24% and qualified leads past 60%.",
    summary:
      "Higher Google and Meta Ads conversion rates and 60%+ qualified leads doubled monthly net sales from ₹1.45L to ₹2.88L in a single month.",
    cardMetric: "+152% net sales in 30 days",
    metrics: [
      { value: "+152%", label: "Net sales growth" },
      { value: "3.76% → 9.24%", label: "Google Ads conversion rate" },
      { value: "60%+", label: "Qualified leads" },
    ],
    challenge:
      "Tranzission had steady traffic but a low conversion rate and inconsistent lead quality, which capped how much revenue the same ad spend could produce. The account was generating leads, but not enough of them were qualified or converting.",
    approach: [
      "Rebuilt the campaign structure to separate intent and reduce wasted spend.",
      "Improved the landing and conversion path to lift Google Ads conversion rate.",
      "Tightened qualification so a larger share of leads were genuinely sales-ready.",
      "Reviewed performance weekly against net sales, not just lead volume.",
    ],
    result:
      "In one month, monthly net sales went from ₹1.45L to ₹2.88L, a +152% increase. Google Ads conversion rate more than doubled from 3.76% to 9.24%, and over 60% of leads came through qualified.",
    heroImage: {
      src: "/case-studies/tranzission-dashboard.png",
      alt: "Tranzission before and after dashboards showing net sales doubling and conversion rate rising from 3.76% to 9.24%",
    },
    proofImages: [],
    datePublished: "2026-06-27",
  },
  {
    slug: "talentz",
    brand: "TalentZ",
    sector: "Overseas recruitment lead generation",
    title: "TalentZ: qualified leads from 23% to 63% tapping overseas markets",
    metaTitle: "TalentZ Case Study: Qualified Leads 23% to 63%",
    metaDescription:
      "How Done For You helped TalentZ reach overseas markets and lift qualified leads from 23% to 63% at a 4.8x ROI on ₹1.34L of ad spend.",
    summary:
      "Fresh overseas sign-ups dropped straight into the shared tracker as TalentZ lifted qualified leads from 23% to 63% at 4.8x ROI.",
    cardMetric: "Qualified leads 23% → 63%",
    metrics: [
      { value: "23% → 63%", label: "Qualified leads" },
      { value: "4.8×", label: "ROI" },
      { value: "₹6.45L", label: "Revenue on ₹1.34L spend" },
    ],
    challenge:
      "TalentZ wanted to reach overseas markets such as Canada, but only 23% of incoming leads were qualified. The team also lacked a fast, shared way to capture and act on every new sign-up as it landed.",
    approach: [
      "Targeted overseas intent with creative built for that specific audience.",
      "Connected leads to a shared WhatsApp tracker so the team captured every new sign-up the moment it landed.",
      "Tightened qualification to filter out poor-fit enquiries before sales spent time on them.",
      "Reviewed lead quality continuously to keep raising the qualified-lead rate.",
    ],
    result:
      "Qualified leads rose from 23% to 63%, and ₹1.34L of ad spend returned ₹6.45L in revenue, a 4.8x ROI. New conversions from overseas markets were captured in real time in the shared tracker.",
    heroImage: {
      src: "/case-studies/talentz-tracker.png",
      alt: "TalentZ shared WhatsApp tracker capturing new overseas sign-ups in real time",
    },
    proofImages: [
      { src: "/case-studies/talentz-kratika.png", alt: "Kratika, client at TalentZ" },
    ],
    datePublished: "2026-06-27",
  },
  {
    slug: "reliance-animation",
    brand: "Reliance Animation",
    sector: "EdTech enrolment lead generation",
    title: "Reliance Animation: ₹1L in, ₹14.5L out (14× ROAS)",
    metaTitle: "Reliance Animation Case Study: 14x ROAS EdTech Leads",
    metaDescription:
      "How Done For You turned ₹1L of ad spend into ₹14.5L revenue (14x ROAS) for Reliance Animation, driving 100+ enrolment leads from Meta and Google Ads.",
    summary:
      "One month of Google and Meta lead campaigns: 2,645 paid clicks and 100+ enrolment leads, returning close to 14x on ad spend.",
    cardMetric: "₹1L → ₹14.5L (14× ROAS)",
    metrics: [
      { value: "≈14×", label: "Return on ad spend" },
      { value: "₹14.5L", label: "Revenue from ₹1L spend" },
      { value: "100+", label: "Enrolment leads" },
    ],
    challenge:
      "Reliance Animation needed a steady flow of enrolment leads for its animation courses without overspending. The goal was qualified enrolment enquiries, not just cheap clicks.",
    approach: [
      "Ran Meta lead campaigns alongside Google Search to capture both demand and intent.",
      "Targeted prospects with genuine interest in animation courses.",
      "Tracked spend, clicks, and enrolment leads so the budget stayed efficient.",
      "Optimized toward enrolment-quality leads, not raw volume.",
    ],
    result:
      "One month of campaigns produced 2,645 paid clicks and 100+ enrolment leads, turning roughly ₹1L of ad spend into ₹14.5L in revenue, a return of close to 14x on ad spend.",
    heroImage: {
      src: "/case-studies/reliance-proof.png",
      alt: "Reliance Animation Meta and Google Ads dashboards showing ₹1L spend returning ₹14.5L revenue at 14x ROAS",
    },
    proofImages: [],
    datePublished: "2026-06-27",
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}
