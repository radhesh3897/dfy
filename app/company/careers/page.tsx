import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { Hero } from "@/components/Hero";
import { JsonLd } from "@/components/JsonLd";
import { Section } from "@/components/Section";
import { ServiceCard } from "@/components/ServiceCard";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Careers at Done For You",
  description:
    "Learn about future career opportunities at Done For You for operators, performance marketers, designers, and growth people.",
  path: "/company/careers",
});

export default function CareersPage() {
  return (
    <>
      <JsonLd data={webPageSchema("/company/careers", "Careers at Done For You", "Careers placeholder page for Done For You.")} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Company", path: "/company" },
          { name: "Careers", path: "/company/careers" },
        ])}
      />
      <Hero
        eyebrow="Careers"
        title="Join a team building better acquisition systems."
        subtitle="We are not hiring for public roles right now, but we are always open to strong operators, performance marketers, designers, and growth people."
        primaryCta={{ label: "Send Your Profile", href: "mailto:radhesh@doneforyou.in?subject=DFY%20Profile" }}
        secondaryCta={{ label: "Company Overview", href: "/company" }}
      />

      <Section tone="white" eyebrow="Who should reach out" title="People who care about quality, systems, and execution.">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {[
            { title: "Operators", description: "People who can turn messy processes into clear systems." },
            { title: "Performance marketers", description: "People who care about lead quality, not just dashboard activity." },
            { title: "Designers", description: "People who can make useful conversion experiences feel polished and clear." },
            { title: "Growth people", description: "People who understand offers, funnels, follow-up, and practical business outcomes." },
          ].map((item, index) => (
            <ServiceCard key={item.title} {...item} index={index} />
          ))}
        </div>
      </Section>

      <CTASection
        title="Think you could help DFY build better growth systems?"
        text="Send your profile with a short note about the kind of work you do best."
        buttonLabel="Send Your Profile"
        buttonHref="mailto:radhesh@doneforyou.in?subject=DFY%20Profile"
      />
    </>
  );
}
