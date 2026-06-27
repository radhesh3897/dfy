import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { Hero } from "@/components/Hero";
import { JsonLd } from "@/components/JsonLd";
import { Section } from "@/components/Section";
import { ServiceCard } from "@/components/ServiceCard";
import { companyBeliefs } from "@/data/marketingPages";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "About Done For You",
  description:
    "Learn how Done For You builds acquisition systems around lead quality, CRM feedback, paid ads, landing pages, tracking, nurture, and sales outcomes.",
  path: "/company/about",
});

export default function AboutPage() {
  return (
    <>
      <JsonLd data={webPageSchema("/company/about", "About Done For You", "About page for Done For You.")} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Company", path: "/company" },
          { name: "About", path: "/company/about" },
        ])}
      />
      <Hero
        eyebrow="About Done For You"
        title="Performance marketing built around sales, not surface-level leads."
        subtitle="DFY exists to help service businesses build acquisition systems that improve from real lead quality and sales feedback."
        primaryCta={{ label: "Book a Call", href: "/#free-audit-form" }}
        secondaryCta={{ label: "Company Overview", href: "/company" }}
      />

      <Section tone="white" eyebrow="Story placeholder" title="The founder and company story will be added when approved.">
        <p className="max-w-4xl text-xl leading-9 tracking-[-0.02em] text-[#465163]">
          This section is reserved for the approved DFY story. For now, the public positioning stays focused on the work: paid acquisition systems, lead quality, CRM visibility, nurture, and sales feedback loops.
        </p>
      </Section>

      <Section eyebrow="Mission" title="Better-quality leads, clearer decisions, cleaner growth systems.">
        <div className="grid gap-5 md:grid-cols-3">
          {companyBeliefs.map((belief, index) => (
            <ServiceCard key={belief.title} {...belief} index={index} />
          ))}
        </div>
      </Section>

      <Section tone="white" eyebrow="What makes DFY different" title="We connect the campaign to the business outcome.">
        <div className="grid gap-5 md:grid-cols-2">
          {[
            {
              title: "Closed-loop thinking",
              description: "Campaign decisions should improve from CRM stages, sales notes, lead quality, and customer-fit signals.",
            },
            {
              title: "Full-funnel ownership",
              description: "Ads, landing pages, tracking, forms, nurture, and reporting are treated as one acquisition system.",
            },
          ].map((item, index) => (
            <ServiceCard key={item.title} {...item} index={index} />
          ))}
        </div>
      </Section>

      <CTASection
        title="Want to see where your acquisition system is leaking?"
        text="Start with a quick call."
        buttonLabel="Book a Call"
        buttonHref="/#free-audit-form"
      />
    </>
  );
}
