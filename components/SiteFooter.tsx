import Link from "next/link";
import Image from "next/image";
import { locationPages } from "@/data/locationPages";

const links = [
  { label: "Home", href: "/" },
  { label: "Results", href: "/results" },
  { label: "Resources", href: "/resources" },
  { label: "Company", href: "/company" },
  { label: "B2B Lead Generation Agency", href: "/b2b-lead-generation-agency" },
  { label: "Meta Ads for Service Businesses", href: "/services/meta-ads" },
  { label: "Google Ads for Service Businesses", href: "/services/google-ads" },
  { label: "Lead Quality Improvement", href: "/lead-quality-improvement" },
  { label: "Lead Quality Checklist", href: "/resources/lead-quality-checklist" },
  { label: "About Done For You", href: "/company/about" },
  { label: "Our Process", href: "/company/process" },
  { label: "Free Lead Quality Audit", href: "/#free-audit-form" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-[#050505]/10 bg-[#f6f5f1] py-14 text-[#050505]">
      <div className="container-wide grid gap-10 md:grid-cols-[1fr_1.2fr]">
        <div>
          <span className="relative block h-12 w-36 overflow-hidden">
            <Image
              src="/brand/dfy-logo-transparent.svg"
              alt="Done For You logo"
              fill
              sizes="128px"
              className="object-contain"
            />
          </span>
          <p className="mt-4 max-w-md text-sm leading-6 text-neutral-600">
            Paid acquisition systems for B2B and service businesses that care about lead quality,
            sales readiness, and measurable funnel improvement.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-[1fr_0.85fr]">
          <div className="grid gap-3 sm:grid-cols-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-[#050505]/70 transition hover:text-[#050505]"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div>
            <p className="text-sm font-black uppercase tracking-[0.16em] text-[#164E50]">Locations</p>
            <div className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2 sm:grid-cols-4 lg:grid-cols-2">
              {locationPages.map((location) => (
                <Link
                  key={location.slug}
                  href={`/locations/${location.slug}`}
                  className="text-sm font-semibold text-[#050505]/70 transition hover:text-[#050505]"
                >
                  {location.city}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
