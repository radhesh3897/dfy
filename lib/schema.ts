import { absoluteUrl, site } from "@/lib/site";

export type Faq = {
  question: string;
  answer: string;
};

type BreadcrumbItem = {
  name: string;
  path: string;
};

type ServiceSchemaInput = {
  name: string;
  description: string;
  path: string;
  serviceType: string;
  areaServed?: string;
};

type ArticleSchemaInput = {
  headline: string;
  description: string;
  path: string;
};

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    email: site.email,
    description: site.description,
    sameAs: [
      "https://www.instagram.com/doneforyou.in",
      "https://www.linkedin.com/company/done-for-you-in",
    ],
    founder: {
      "@type": "Person",
      name: "Radhesh Agrawal",
    },
    serviceArea: {
      "@type": "Place",
      name: "India",
    },
    knowsAbout: [
      "B2B lead generation",
      "Performance marketing",
      "Paid advertising",
      "Landing page conversion optimization",
      "CRM setup",
      "Lead nurture",
      "Marketing analytics",
    ],
    review: [
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Kritika Gupta" },
        publisher: { "@type": "Organization", name: "Talent Z" },
        reviewBody:
          "DFY helped us improve lead quality, not just lead volume. We started getting more relevant enquiries, stronger sales conversations, and a much clearer path to revenue. Their process is structured, reliable, and built for real growth.",
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Manish Agrawal" },
        publisher: { "@type": "Organization", name: "NMIMS" },
        reviewBody:
          "What stood out most was the quality of the system DFY built for us. Lead quality improved, wasted spend reduced, and the revenue impact became much more visible. Their processes and execution are phenomenal.",
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Raja Sharma" },
        publisher: { "@type": "Organization", name: "CaseEase" },
        reviewBody:
          "DFY brought real structure to our acquisition process. We started seeing better-quality leads, more serious prospects, and stronger revenue outcomes. The team is process-driven, sharp, and excellent at what they do.",
      },
    ],
  };
}

export function founderPersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://www.doneforyou.in/company/about#radhesh",
    name: "Radhesh Agrawal",
    jobTitle: "Founder",
    email: "radhesh@doneforyou.in",
    worksFor: {
      "@type": "Organization",
      name: "Done For You",
      url: "https://www.doneforyou.in",
    },
    knowsAbout: [
      "Meta Ads",
      "Google Ads",
      "B2B lead generation",
      "Performance marketing",
      "Lead quality improvement",
      "Meta CAPI",
      "Campaign attribution",
    ],
    url: "https://www.doneforyou.in/company/about",
  };
}

export function webSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    alternateName: site.shortName,
    url: site.url,
    description: site.description,
    publisher: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
    },
    inLanguage: "en",
  };
}

export function homepageFaqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much does B2B lead generation cost in India with paid ads?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "For B2B service businesses in India, Meta Ads CPL typically ranges from ₹800 to ₹2,500 for qualified leads depending on sector and sales cycle length. Google Ads CPL runs ₹600 to ₹2,000 for high-intent search keywords. Done For You benchmarks success on lead-to-conversation rate, not raw CPL alone.",
        },
      },
      {
        "@type": "Question",
        name: "How long does it take for Meta Ads to generate quality leads for a B2B business?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Meta Ads for B2B service businesses typically exit the learning phase in 2 to 3 weeks. Lead quality stabilises in 45 to 60 days as the algorithm accumulates enough conversion signals. Done For You runs a structured 90-day ramp-up for all new accounts.",
        },
      },
      {
        "@type": "Question",
        name: "Why is my lead quality low from Meta Ads?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "The three most common causes are broad audience targeting attracting low-intent users, landing page messaging that does not qualify the visitor before they submit, and no CRM feedback loop telling Meta which leads actually converted downstream. Done For You diagnoses and fixes all three as part of its standard account setup.",
        },
      },
      {
        "@type": "Question",
        name: "What is the difference between lead quantity and lead quality in paid advertising?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Lead quantity is how many form fills or inbound calls you receive. Lead quality is the percentage of those leads that match your buyer profile and convert to revenue. Most agencies optimise for quantity because it is easier to report. Done For You optimises for quality: fewer leads that are more likely to close.",
        },
      },
      {
        "@type": "Question",
        name: "Does Done For You work with businesses outside Delhi NCR?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. Done For You works with B2B service businesses across India including Mumbai, Bangalore, Pune, Hyderabad, Chennai, and Gurgaon, and also works remotely with clients in GCC markets.",
        },
      },
    ],
  };
}

export function faqSchema(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function serviceSchema({
  name,
  description,
  path,
  serviceType,
  areaServed = "Global",
}: ServiceSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    serviceType,
    url: absoluteUrl(path),
    areaServed: {
      "@type": "Place",
      name: areaServed,
    },
    provider: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
    },
  };
}

export function webPageSchema(path: string, name: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    description,
    url: absoluteUrl(path),
    isPartOf: {
      "@type": "WebSite",
      name: site.name,
      url: site.url,
    },
  };
}

export function articleSchema({ headline, description, path }: ArticleSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    url: absoluteUrl(path),
    author: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
    },
    publisher: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
    },
    inLanguage: "en",
  };
}
