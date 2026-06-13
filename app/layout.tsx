import type { Metadata, Viewport } from "next";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { AuditFormAnchorScroll } from "@/components/AuditFormAnchorScroll";
import { JsonLd } from "@/components/JsonLd";
import { founderPersonSchema, homepageFaqSchema, organizationSchema, webSiteSchema } from "@/lib/schema";
import { absoluteUrl, indexableRobots, site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Done For You | B2B Lead Generation and Performance Marketing",
    template: "%s | Done For You",
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "B2B lead generation agency",
    "lead quality improvement",
    "performance marketing agency",
    "paid acquisition systems",
    "landing page CRO",
    "CRM lead nurture",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  category: "business",
  alternates: {
    canonical: absoluteUrl("/"),
  },
  icons: {
    icon: [{ url: "/favicon.png", sizes: "64x64", type: "image/png" }],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  robots: indexableRobots,
  openGraph: {
    title: "Done For You | B2B Lead Generation and Performance Marketing",
    description: site.description,
    url: absoluteUrl("/"),
    siteName: site.name,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: absoluteUrl("/og/dfy-og-card.svg"),
        width: 1200,
        height: 630,
        alt: "Done For You lead quality system overview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Done For You | B2B Lead Generation and Performance Marketing",
    description: site.description,
    images: [absoluteUrl("/og/dfy-og-card.svg")],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <JsonLd data={organizationSchema()} />
        <JsonLd data={webSiteSchema()} />
        <JsonLd data={founderPersonSchema()} />
        <JsonLd data={homepageFaqSchema()} />
        <AuditFormAnchorScroll />
        <SiteHeader />
        <main className="pt-[86px] sm:pt-[104px]">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
