import type { Metadata } from "next";

export const site = {
  name: "Done For You",
  shortName: "DFY",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.doneforyou.in",
  description:
    "Done For You helps B2B and service businesses improve lead quality with paid ads, landing pages, tracking, CRM, nurture, and sales feedback loops.",
  email: "radhesh@doneforyou.in",
};

export function absoluteUrl(path = "/") {
  return new URL(path, site.url).toString();
}

type MetadataInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
};

export const defaultKeywords = [
  "B2B lead generation agency",
  "lead quality improvement",
  "performance marketing agency",
  "paid acquisition systems",
  "B2B paid ads",
  "landing page CRO",
  "CRM lead nurture",
  "sales feedback loop",
];

export const indexableRobots: NonNullable<Metadata["robots"]> = {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
};

export function pageMetadata({
  title,
  description,
  path,
  keywords = defaultKeywords,
}: MetadataInput): Metadata {
  const url = absoluteUrl(path);

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: url,
    },
    robots: indexableRobots,
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      type: "website",
      locale: "en_US",
      images: [
        {
          url: absoluteUrl("/og/dfy-og-card.png"),
          width: 1200,
          height: 630,
          alt: "Done For You lead quality system overview",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteUrl("/og/dfy-og-card.png")],
    },
  };
}
