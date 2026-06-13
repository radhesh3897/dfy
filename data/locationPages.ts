export type LocationPage = {
  city: string;
  slug: string;
  sectors: string[];
  uniqueAngle: string;
  context: string[];
  problems: Array<{ title: string; text: string }>;
  processNotes: string[];
  faqs: Array<{ question: string; answer: string }>;
};

export const serviceLinks = [
  {
    title: "Google Ads",
    href: "/services/google-ads",
    description: "Capture high-intent buyers already searching for your service.",
  },
  {
    title: "Meta Ads",
    href: "/services/meta-ads",
    description: "Generate demand, test creative angles, and improve lead quality through paid social.",
  },
  {
    title: "B2B Lead Generation",
    href: "/services/b2b-lead-generation",
    description: "Build qualified pipeline instead of chasing raw leads.",
  },
  {
    title: "Landing Page CRO",
    href: "/services/landing-page-cro",
    description: "Turn more paid traffic into qualified enquiries.",
  },
  {
    title: "CRM, Tracking & Nurture",
    href: "/services/crm-tracking-nurture",
    description: "Connect ads, leads, CRM stages, and follow-up into one feedback loop.",
  },
  {
    title: "Creative Strategy",
    href: "/services/creative-strategy",
    description: "Build ad creatives around buyer intent, objections, and sales feedback.",
  },
];

export const locationPages: LocationPage[] = [
  {
    city: "Delhi",
    slug: "delhi",
    sectors: ["Education", "Coaching", "Clinics", "Travel", "Professional services"],
    uniqueAngle:
      "Delhi businesses often get lead volume, but qualification and follow-up quality become the bottleneck.",
    context: [
      "Delhi has a large and competitive services market where paid ads can create quick enquiry volume. The challenge is that not every form fill is a serious buyer, especially in education, coaching, clinics, travel, and professional services.",
      "DFY helps businesses serving customers in Delhi tighten the connection between ad message, landing page, form questions, CRM stages, and follow-up so the team can separate genuine demand from casual enquiry traffic.",
    ],
    problems: [
      {
        title: "High enquiry volume, low sales readiness",
        text: "Campaigns can create leads quickly, but many contacts may not have intent, budget, or urgency.",
      },
      {
        title: "Follow-up gaps after form fills",
        text: "If leads are not routed, called, and nurtured quickly, quality drops even when the campaign looks active.",
      },
      {
        title: "Competitive local categories",
        text: "Education, clinics, travel, and professional services need sharper proof and clearer qualification than generic lead forms.",
      },
    ],
    processNotes: [
      "Map Delhi-specific buyer segments, objections, and qualification questions.",
      "Review ad-to-landing-page continuity so the promise matches the sales conversation.",
      "Connect CRM feedback so campaign decisions are based on lead quality, not just CPL.",
    ],
    faqs: [
      {
        question: "Do you provide lead generation services in Delhi?",
        answer:
          "Yes. DFY works with service businesses targeting customers in Delhi through paid ads, landing pages, tracking, CRM setup, and follow-up systems. We do not claim a physical Delhi office.",
      },
      {
        question: "Can DFY run Google Ads for businesses in Delhi?",
        answer:
          "Yes. Our Google Ads work focuses on high-intent searches, stronger landing pages, and conversion tracking for businesses serving Delhi customers.",
      },
      {
        question: "Do you manage Meta Ads and Facebook Ads for Delhi-based businesses?",
        answer:
          "Yes. We use Meta Ads for demand generation, creative testing, and lead quality improvement, especially where education, clinics, travel, and professional services need stronger buyer filtering.",
      },
      {
        question: "How do you improve lead quality for service businesses in Delhi?",
        answer:
          "We tighten targeting, offer clarity, landing page flow, form questions, CRM stages, and sales feedback so campaigns learn from qualified conversations rather than raw lead volume.",
      },
      {
        question: "Do you provide CRM, tracking, and nurture setup for businesses in Delhi?",
        answer:
          "Yes. DFY can connect ads, forms, CRM stages, WhatsApp or email follow-up, and sales feedback so lead quality is easier to measure and improve.",
      },
    ],
  },
  {
    city: "Gurgaon",
    slug: "gurgaon",
    sectors: ["B2B services", "SaaS", "Consulting", "Coaching", "Corporate training"],
    uniqueAngle:
      "Gurgaon businesses need pipeline quality, not just cheap enquiries, because sales cycles and ticket sizes are usually higher.",
    context: [
      "Gurgaon has a high concentration of B2B service providers, SaaS teams, consultants, coaches, and corporate training companies. For these businesses, the cheapest lead is rarely the best lead.",
      "DFY helps Gurgaon-focused businesses build paid acquisition systems around qualification, sales readiness, and pipeline visibility so ad spend can be judged by serious opportunities rather than form-fill count.",
    ],
    problems: [
      {
        title: "Premium offers attract unqualified enquiries",
        text: "High-ticket services need lead filters that identify company fit, budget range, authority, and timeline.",
      },
      {
        title: "Longer sales cycles need better tracking",
        text: "If CRM stages are not connected, campaigns cannot learn which enquiries become real opportunities.",
      },
      {
        title: "Generic B2B messaging blends in",
        text: "Corporate buyers need sharper pain points, proof, and offer framing before they book a call.",
      },
    ],
    processNotes: [
      "Define the qualified pipeline criteria before scaling campaign spend.",
      "Build paid search and paid social flows around account fit, role, need, and urgency.",
      "Use CRM and sales feedback to find the campaigns creating actual opportunities.",
    ],
    faqs: [
      {
        question: "Do you provide lead generation services in Gurgaon?",
        answer:
          "Yes. DFY serves Gurgaon businesses remotely and online, especially B2B services, SaaS, consulting, coaching, and corporate training teams that need better pipeline quality.",
      },
      {
        question: "Can DFY run Google Ads for businesses in Gurgaon?",
        answer:
          "Yes. We build Google Ads systems for Gurgaon-focused services where search intent, landing page clarity, and lead qualification matter.",
      },
      {
        question: "Do you manage Meta Ads and Facebook Ads for Gurgaon-based businesses?",
        answer:
          "Yes. We use Meta Ads to test buyer angles, qualify demand, and support premium service offers with stronger creative and follow-up.",
      },
      {
        question: "How do you improve lead quality for service businesses in Gurgaon?",
        answer:
          "We define what a qualified opportunity looks like, then align ad copy, landing pages, forms, CRM stages, and sales feedback around that definition.",
      },
      {
        question: "Do you provide CRM, tracking, and nurture setup for businesses in Gurgaon?",
        answer:
          "Yes. CRM tracking and nurture are important for Gurgaon businesses with longer sales cycles, higher ticket sizes, and multi-touch sales conversations.",
      },
    ],
  },
  {
    city: "Noida",
    slug: "noida",
    sectors: ["EdTech", "IT services", "Training institutes", "Clinics", "Service businesses"],
    uniqueAngle:
      "Noida businesses often need better tracking between ad campaigns, lead forms, and sales teams.",
    context: [
      "Noida has strong EdTech, IT services, training, clinic, and service-business activity. Many teams can generate leads, but the handoff from campaign to form to sales team is often where quality becomes unclear.",
      "DFY helps Noida-based service businesses improve lead quality by making the acquisition system measurable from first click to CRM feedback and follow-up outcome.",
    ],
    problems: [
      {
        title: "Campaign data and sales data stay separate",
        text: "Marketing may see leads, while the sales team sees missed calls, low intent, or poor-fit contacts.",
      },
      {
        title: "Lead forms collect too little context",
        text: "Training, IT services, and clinics often need smarter questions to identify intent and readiness.",
      },
      {
        title: "Creative does not match the actual offer",
        text: "Weak continuity between ads, landing pages, and calls creates friction and lower conversion quality.",
      },
    ],
    processNotes: [
      "Audit the gap between campaign source, form data, and sales-team feedback.",
      "Improve form and landing page structure so enquiries carry more qualification context.",
      "Build reporting around qualified leads, not just total submissions.",
    ],
    faqs: [
      {
        question: "Do you provide lead generation services in Noida?",
        answer:
          "Yes. DFY works with Noida businesses and companies targeting Noida customers through paid ads, landing pages, tracking, CRM, and nurture systems.",
      },
      {
        question: "Can DFY run Google Ads for businesses in Noida?",
        answer:
          "Yes. We use Google Ads to capture high-intent demand and connect campaign performance with landing page and CRM feedback.",
      },
      {
        question: "Do you manage Meta Ads and Facebook Ads for Noida-based businesses?",
        answer:
          "Yes. Meta Ads can help Noida businesses test demand, creative angles, and buyer intent when campaigns are connected to proper tracking and lead review.",
      },
      {
        question: "How do you improve lead quality for service businesses in Noida?",
        answer:
          "We improve qualification by aligning campaign structure, ad messaging, landing pages, form questions, CRM stages, and sales feedback.",
      },
      {
        question: "Do you provide CRM, tracking, and nurture setup for businesses in Noida?",
        answer:
          "Yes. We can help connect ad leads to CRM stages, lead source reporting, follow-up workflows, and sales feedback loops.",
      },
    ],
  },
  {
    city: "Pune",
    slug: "pune",
    sectors: ["Education", "SaaS", "Coaching", "Fitness", "Clinics", "Local services"],
    uniqueAngle:
      "Pune businesses need paid acquisition systems that separate casual enquiries from serious buyers.",
    context: [
      "Pune has a mix of education, SaaS, coaching, fitness, clinics, and local service businesses. Paid ads can work well here, but growth depends on identifying who is ready to buy and who is only exploring.",
      "DFY helps Pune-focused businesses shape ads, landing pages, and follow-up around stronger qualification so the sales team spends more time with serious prospects.",
    ],
    problems: [
      {
        title: "Casual enquiries dilute campaign performance",
        text: "A good CPL can still hide low buying intent if the funnel does not qualify leads properly.",
      },
      {
        title: "Local services need sharper trust signals",
        text: "Clinics, fitness, coaching, and education offers need proof, clarity, and friction-free next steps.",
      },
      {
        title: "Nurture is often too generic",
        text: "Pune buyers may need WhatsApp, email, or call follow-up that reflects their exact intent and timing.",
      },
    ],
    processNotes: [
      "Separate awareness, consideration, and sales-ready enquiries inside the funnel.",
      "Strengthen landing page proof and form questions for serious buyer signals.",
      "Use CRM notes and follow-up outcomes to improve campaign decisions.",
    ],
    faqs: [
      {
        question: "Do you provide lead generation services in Pune?",
        answer:
          "Yes. DFY helps service businesses in Pune and businesses targeting Pune customers improve lead quality through ads, landing pages, tracking, and nurture.",
      },
      {
        question: "Can DFY run Google Ads for businesses in Pune?",
        answer:
          "Yes. Google Ads can work well for Pune services when search intent, landing page message, and tracking are connected properly.",
      },
      {
        question: "Do you manage Meta Ads and Facebook Ads for Pune-based businesses?",
        answer:
          "Yes. We use Meta Ads to test creative angles, qualify interest, and improve the quality of enquiries generated from paid social.",
      },
      {
        question: "How do you improve lead quality for service businesses in Pune?",
        answer:
          "We filter for intent through better messaging, landing page structure, form design, CRM stages, and sales feedback review.",
      },
      {
        question: "Do you provide CRM, tracking, and nurture setup for businesses in Pune?",
        answer:
          "Yes. DFY can help Pune-focused teams connect lead sources, CRM pipelines, follow-up workflows, and quality reporting.",
      },
    ],
  },
  {
    city: "Bangalore",
    slug: "bangalore",
    sectors: ["SaaS", "B2B services", "Coaching", "Training", "Healthcare", "Digital-first businesses"],
    uniqueAngle:
      "Bangalore businesses usually face high competition and need stronger creative, better landing pages, and sharper lead qualification.",
    context: [
      "Bangalore is crowded with digital-first companies, SaaS teams, B2B services, coaching brands, training companies, and healthcare providers. Buyers compare options quickly, so generic ads and weak landing pages waste budget.",
      "DFY helps Bangalore-focused businesses improve the full acquisition path: message, creative, landing page, tracking, CRM, and follow-up quality.",
    ],
    problems: [
      {
        title: "High competition raises the cost of weak funnels",
        text: "When categories are crowded, unclear positioning and generic landing pages make paid traffic expensive.",
      },
      {
        title: "Sophisticated buyers need better proof",
        text: "B2B, SaaS, healthcare, and training buyers often need stronger context before they become sales-ready.",
      },
      {
        title: "Creative fatigue arrives quickly",
        text: "Campaigns need fresh angles based on buyer objections, intent, and sales feedback.",
      },
    ],
    processNotes: [
      "Clarify offer, ICP, objections, and proof before creative testing.",
      "Improve landing page continuity so the page earns the next action.",
      "Connect CRM feedback to learn which channels and messages create qualified demand.",
    ],
    faqs: [
      {
        question: "Do you provide lead generation services in Bangalore?",
        answer:
          "Yes. DFY serves Bangalore-focused service businesses remotely, especially SaaS, B2B, training, coaching, healthcare, and digital-first companies.",
      },
      {
        question: "Can DFY run Google Ads for businesses in Bangalore?",
        answer:
          "Yes. We build Google Ads systems for Bangalore businesses where high intent, landing page quality, and conversion tracking are critical.",
      },
      {
        question: "Do you manage Meta Ads and Facebook Ads for Bangalore-based businesses?",
        answer:
          "Yes. We use Meta Ads for creative testing, demand generation, and stronger lead qualification for competitive Bangalore markets.",
      },
      {
        question: "How do you improve lead quality for service businesses in Bangalore?",
        answer:
          "We sharpen the offer, creative, landing page, form flow, CRM stages, and reporting so campaigns optimize toward qualified opportunities.",
      },
      {
        question: "Do you provide CRM, tracking, and nurture setup for businesses in Bangalore?",
        answer:
          "Yes. Tracking and CRM feedback are central to our work, especially for Bangalore teams with competitive paid channels and longer sales journeys.",
      },
    ],
  },
  {
    city: "Mumbai",
    slug: "mumbai",
    sectors: ["Finance", "Education", "Clinics", "Travel", "Consulting", "Real estate services", "Premium services"],
    uniqueAngle:
      "Mumbai businesses need lead quality because high ad costs make wasted sales calls expensive.",
    context: [
      "Mumbai service businesses often compete in high-value categories such as finance, education, clinics, travel, consulting, real estate services, and premium services. When ad costs are high, low-quality calls become expensive quickly.",
      "DFY helps Mumbai-focused businesses reduce wasted follow-up by improving targeting, landing page clarity, qualification, and CRM visibility.",
    ],
    problems: [
      {
        title: "High CPL makes poor fit painful",
        text: "When the market is expensive, every unqualified lead costs both media budget and sales time.",
      },
      {
        title: "Premium buyers need stronger positioning",
        text: "Finance, consulting, real estate services, and healthcare need trust signals before prospects engage.",
      },
      {
        title: "Sales teams need better lead context",
        text: "Without source, intent, budget, and timeline data, calls become inefficient and hard to prioritize.",
      },
    ],
    processNotes: [
      "Build qualification around budget, need, authority, and urgency signals.",
      "Improve landing page proof and objections for premium-service categories.",
      "Tie ad source and CRM status together so wasted calls are easier to reduce.",
    ],
    faqs: [
      {
        question: "Do you provide lead generation services in Mumbai?",
        answer:
          "Yes. DFY helps service businesses targeting customers in Mumbai improve lead quality through Google Ads, Meta Ads, landing pages, CRM, and tracking.",
      },
      {
        question: "Can DFY run Google Ads for businesses in Mumbai?",
        answer:
          "Yes. We focus Google Ads around high-intent search demand, stronger qualification, and clearer reporting for Mumbai-focused services.",
      },
      {
        question: "Do you manage Meta Ads and Facebook Ads for Mumbai-based businesses?",
        answer:
          "Yes. Meta Ads can help Mumbai businesses generate and qualify demand when creative, form flow, and follow-up are built carefully.",
      },
      {
        question: "How do you improve lead quality for service businesses in Mumbai?",
        answer:
          "We reduce wasted enquiries by improving ad targeting, offer clarity, landing pages, form questions, CRM tracking, and sales feedback loops.",
      },
      {
        question: "Do you provide CRM, tracking, and nurture setup for businesses in Mumbai?",
        answer:
          "Yes. CRM and nurture setup helps Mumbai teams prioritize serious prospects and understand which campaigns create qualified opportunities.",
      },
    ],
  },
  {
    city: "Hyderabad",
    slug: "hyderabad",
    sectors: ["Tech", "Healthcare", "Education", "Coaching", "Clinics", "B2B service providers"],
    uniqueAngle:
      "Hyderabad businesses need scalable Google/Meta campaigns connected with CRM and sales feedback.",
    context: [
      "Hyderabad has strong activity across tech, healthcare, education, coaching, clinics, and B2B services. Scaling paid ads here works better when campaign data is connected to what happens after the lead is submitted.",
      "DFY helps Hyderabad-focused service businesses connect Google Ads, Meta Ads, landing pages, CRM stages, nurture, and sales feedback into one acquisition system.",
    ],
    problems: [
      {
        title: "Scaling exposes tracking gaps",
        text: "As spend grows, weak CRM and conversion tracking make it harder to know which campaigns deserve budget.",
      },
      {
        title: "Lead quality varies by channel",
        text: "Google and Meta can produce very different buyer intent, so reporting must separate quality from volume.",
      },
      {
        title: "Follow-up needs structure",
        text: "Healthcare, education, coaching, and B2B enquiries need timely routing and nurture to avoid leakage.",
      },
    ],
    processNotes: [
      "Separate search intent, paid social demand, and CRM outcomes in reporting.",
      "Improve landing pages and forms so lead source quality is easier to compare.",
      "Use sales feedback to guide budget shifts and creative testing.",
    ],
    faqs: [
      {
        question: "Do you provide lead generation services in Hyderabad?",
        answer:
          "Yes. DFY works with businesses serving Hyderabad customers through online delivery, paid ads, landing pages, CRM setup, and tracking.",
      },
      {
        question: "Can DFY run Google Ads for businesses in Hyderabad?",
        answer:
          "Yes. We use Google Ads to capture high-intent demand and connect campaign data to CRM and sales feedback.",
      },
      {
        question: "Do you manage Meta Ads and Facebook Ads for Hyderabad-based businesses?",
        answer:
          "Yes. Meta Ads can support demand generation, creative testing, and lead qualification for Hyderabad-focused service businesses.",
      },
      {
        question: "How do you improve lead quality for service businesses in Hyderabad?",
        answer:
          "We connect targeting, landing page flow, CRM stages, qualification questions, and sales feedback so spend is optimized toward better leads.",
      },
      {
        question: "Do you provide CRM, tracking, and nurture setup for businesses in Hyderabad?",
        answer:
          "Yes. DFY can set up tracking, CRM feedback loops, and follow-up workflows for businesses that need clearer lead quality reporting.",
      },
    ],
  },
  {
    city: "Chennai",
    slug: "chennai",
    sectors: ["Healthcare", "Education", "Manufacturing services", "B2B services", "Clinics", "Training businesses"],
    uniqueAngle:
      "Chennai businesses need a structured paid acquisition system that improves conversion quality, not just traffic.",
    context: [
      "Chennai service businesses often operate in categories where trust, clarity, and follow-up discipline matter: healthcare, education, manufacturing services, B2B services, clinics, and training businesses.",
      "DFY helps Chennai-focused businesses turn paid ads into a structured acquisition system where campaigns, landing pages, CRM, and nurture all work toward better conversion quality.",
    ],
    problems: [
      {
        title: "Traffic does not equal buyer intent",
        text: "Clicks and impressions can look healthy while the sales team still receives low-priority enquiries.",
      },
      {
        title: "Complex services need clearer explanation",
        text: "Healthcare, manufacturing services, and B2B offers need landing pages that reduce confusion and build trust.",
      },
      {
        title: "Offline sales conversations need online feedback",
        text: "If call outcomes are not recorded, campaigns cannot learn which enquiries were actually useful.",
      },
    ],
    processNotes: [
      "Clarify offer, proof, qualification, and next step before scaling traffic.",
      "Build landing pages that support complex service decisions without adding friction.",
      "Connect CRM and sales feedback so campaigns optimize toward useful conversations.",
    ],
    faqs: [
      {
        question: "Do you provide lead generation services in Chennai?",
        answer:
          "Yes. DFY helps service businesses targeting Chennai customers improve lead quality through ads, landing pages, CRM, tracking, and nurture.",
      },
      {
        question: "Can DFY run Google Ads for businesses in Chennai?",
        answer:
          "Yes. Google Ads can capture high-intent searches for Chennai service categories when landing pages and tracking are built properly.",
      },
      {
        question: "Do you manage Meta Ads and Facebook Ads for Chennai-based businesses?",
        answer:
          "Yes. We use Meta Ads to test creative angles, educate buyers, and improve lead quality for Chennai-focused businesses.",
      },
      {
        question: "How do you improve lead quality for service businesses in Chennai?",
        answer:
          "We improve lead quality by aligning ad message, landing page content, form questions, CRM stages, and follow-up feedback.",
      },
      {
        question: "Do you provide CRM, tracking, and nurture setup for businesses in Chennai?",
        answer:
          "Yes. CRM, tracking, and nurture help Chennai teams understand which enquiries are worth follow-up and which campaigns are leaking budget.",
      },
    ],
  },
];

export function getLocationPage(slug: string) {
  return locationPages.find((location) => location.slug === slug);
}
