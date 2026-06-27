"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ButtonLink } from "@/components/ButtonLink";

type MenuKey = "services" | "results" | "resources" | "company";

type MenuItem = {
  label: string;
  href: string;
  icon: IconName;
  logoSrc?: string;
};

type ResultCard = {
  title: string;
  tag: string;
  text: string;
  href: string;
  icon: IconName;
};

type IconName =
  | "target"
  | "window"
  | "database"
  | "bulb"
  | "meta"
  | "google"
  | "linkedin"
  | "youtube"
  | "education"
  | "plus"
  | "bars"
  | "document"
  | "clipboard"
  | "chart"
  | "book"
  | "building"
  | "gear"
  | "user";

const navItems: Array<{ key: MenuKey; label: string }> = [
  { key: "services", label: "Services" },
  { key: "results", label: "Results" },
  { key: "resources", label: "Resources" },
  { key: "company", label: "Company" },
];

const servicesColumns: Array<{ heading: string; items: MenuItem[] }> = [
  {
    heading: "Services",
    items: [
      { label: "B2B Lead Generation", href: "/b2b-lead-generation-agency", icon: "target" },
      { label: "Landing Page CRO", href: "/services/landing-page-cro", icon: "window" },
      { label: "CRM, Tracking & Nurture", href: "/services/crm-tracking-nurture", icon: "database" },
      { label: "Creative Strategy", href: "/services/meta-ads", icon: "bulb" },
    ],
  },
  {
    heading: "Channels",
    items: [
      { label: "Meta Ads", href: "/services/meta-ads", icon: "meta", logoSrc: "/channel-logos/meta-ads-logo-dropdown-128.png" },
      { label: "Google Ads", href: "/services/google-ads", icon: "google", logoSrc: "/channel-logos/google-ads-logo-dropdown-128.png" },
      { label: "LinkedIn Ads", href: "/#free-audit-form", icon: "linkedin", logoSrc: "/channel-logos/linkedin-ads-logo-dropdown-128.png" },
      { label: "YouTube Ads", href: "/#free-audit-form", icon: "youtube", logoSrc: "/channel-logos/youtube-ads-logo-dropdown-128.png" },
    ],
  },
];

const resultCards: ResultCard[] = [
  {
    title: "Hobfit",
    tag: "Shark Tank India",
    text: "3.8× ROAS and ₹28L+ profit for a fitness brand.",
    href: "/results/hobfit",
    icon: "chart",
  },
  {
    title: "Reliance Animation",
    tag: "14× ROAS",
    text: "₹1L of ad spend returned ₹14.5L and 100+ enrolment leads.",
    href: "/results/reliance-animation",
    icon: "education",
  },
  {
    title: "Tranzission",
    tag: "+152% net sales",
    text: "Monthly revenue doubled as conversion rate climbed.",
    href: "/results/tranzission",
    icon: "bars",
  },
  {
    title: "TalentZ",
    tag: "23% → 63% qualified",
    text: "Overseas recruitment leads at 4.8× ROI.",
    href: "/results/talentz",
    icon: "plus",
  },
];

const resourceItems: MenuItem[] = [
  { label: "Blog", href: "/resources/blog", icon: "document" },
  { label: "Lead Quality Checklist", href: "/resources/lead-quality-checklist", icon: "clipboard" },
  { label: "Meta Ads Guide", href: "/resources/meta-ads-for-service-businesses", icon: "chart" },
  { label: "Google Ads Guide", href: "/resources/google-ads-for-service-businesses", icon: "google" },
  { label: "Case Studies", href: "/results", icon: "book" },
];

const companyItems: MenuItem[] = [
  { label: "About Done For You", href: "/company/about", icon: "building" },
  { label: "Our Process", href: "/company/process", icon: "gear" },
  { label: "Careers", href: "/company/careers", icon: "user" },
];

export function SiteHeader() {
  const [activeMenu, setActiveMenu] = useState<MenuKey | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<MenuKey | null>("services");
  const headerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    function handlePointerDown(event: MouseEvent | TouchEvent) {
      if (!headerRef.current?.contains(event.target as Node)) {
        setActiveMenu(null);
        setMobileOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActiveMenu(null);
        setMobileOpen(false);
      }
    }

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("touchstart", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("touchstart", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className="fixed inset-x-0 top-0 z-[80] border-b border-[#dfe7dd] bg-white/95 text-[#050505] backdrop-blur-xl"
    >
      <nav
        aria-label="Primary navigation"
        className="container-wide flex min-h-[86px] items-center justify-between gap-3 sm:min-h-[104px] sm:gap-6"
      >
        <Link
          href="/"
          className="relative block h-10 w-[132px] shrink-0 sm:h-12 sm:w-[156px]"
          aria-label="Done For You home"
          onClick={() => {
            setActiveMenu(null);
            setMobileOpen(false);
          }}
        >
          <Image
            src="/brand/dfy-logo-transparent.svg"
            alt="Done For You logo"
            fill
            priority
            sizes="156px"
            className="object-contain"
          />
        </Link>

        <div className="relative hidden items-center gap-4 md:flex" onMouseLeave={() => setActiveMenu(null)}>
          {navItems.map((item) => (
            <div key={item.key} className="relative" onMouseEnter={() => setActiveMenu(item.key)}>
              <button
                type="button"
                aria-expanded={activeMenu === item.key}
                aria-controls={`${item.key}-dropdown`}
                onClick={() => setActiveMenu((current) => (current === item.key ? null : item.key))}
                onFocus={() => setActiveMenu(item.key)}
                className={`inline-flex min-h-[48px] items-center gap-2 rounded-[12px] px-5 text-base font-medium transition ${
                  activeMenu === item.key
                    ? "bg-[#EEF8EE] text-[#164E50] shadow-[0_10px_24px_rgba(22,78,80,0.08)]"
                    : "text-[#050505] hover:bg-[#F7FCF7] hover:text-[#164E50]"
                }`}
              >
                {item.label}
                <ChevronIcon open={activeMenu === item.key} />
              </button>

              {activeMenu === item.key ? <DesktopDropdown menu={item.key} /> : null}
            </div>
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <ButtonLink
            href="/#free-audit-form"
            variant="primary"
            className="min-h-[48px] shrink-0 rounded-md px-4 text-sm sm:min-h-[52px] sm:px-7 sm:text-base"
          >
            Book a Call
          </ButtonLink>

          <button
            type="button"
            className="inline-flex size-12 items-center justify-center rounded-md border border-[#CDEECD] bg-white text-[#164E50] shadow-[0_8px_18px_rgba(22,78,80,0.08)] md:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => {
              setMobileOpen((current) => !current);
              setActiveMenu(null);
            }}
          >
            <MenuToggleIcon open={mobileOpen} />
          </button>
        </div>
      </nav>

      {mobileOpen ? (
        <MobileMenu
          activeSection={mobileSection}
          onToggle={(key) => setMobileSection((current) => (current === key ? null : key))}
          onClose={() => setMobileOpen(false)}
        />
      ) : null}
    </header>
  );
}

function DesktopDropdown({ menu }: { menu: MenuKey }) {
  if (menu === "services") {
    return (
      <DropdownShell id="services-dropdown" widthClass="w-[760px]">
        <div className="grid grid-cols-2 gap-8">
          {servicesColumns.map((column, index) => (
            <div key={column.heading} className={index === 1 ? "border-l border-[#dce8d8] pl-9" : ""}>
              <DropdownHeading>{column.heading}</DropdownHeading>
              <div className="mt-6 space-y-5">
                {column.items.map((item) => (
                  <MenuLink key={item.label} item={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </DropdownShell>
    );
  }

  if (menu === "results") {
    return (
      <DropdownShell id="results-dropdown" widthClass="w-[860px]">
        <div className="mb-7 flex items-center justify-between gap-5">
          <DropdownHeading>Results</DropdownHeading>
          <Link
            href="/results"
            className="inline-flex min-h-11 items-center gap-2 rounded-md border border-[#88DE7B] px-5 text-sm font-medium text-[#164E50] transition hover:bg-[#EEF8EE]"
          >
            Results Overview
            <ArrowIcon />
          </Link>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {resultCards.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className="group flex min-h-[280px] flex-col rounded-[14px] border border-[#dfe9dc] bg-white p-5 transition hover:-translate-y-0.5 hover:border-[#88DE7B] hover:shadow-[0_18px_40px_rgba(22,78,80,0.12)]"
            >
              <IconBadge icon={card.icon} />
              <h3 className="mt-5 text-xl font-medium tracking-[-0.02em] text-[#050505]">{card.title}</h3>
              <p className="mt-5 w-fit rounded-md bg-[#EEF8EE] px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-[#164E50]">
                {card.tag}
              </p>
              <p className="mt-5 text-base leading-7 text-[#20242b]">{card.text}</p>
              <span className="mt-auto inline-flex items-center gap-2 pt-5 text-base font-medium text-[#164E50]">
                Read results
                <ArrowIcon />
              </span>
            </Link>
          ))}
        </div>
      </DropdownShell>
    );
  }

  const items = menu === "resources" ? resourceItems : companyItems;

  return (
    <DropdownShell id={`${menu}-dropdown`} widthClass="w-[360px]">
      <DropdownHeading>{menu}</DropdownHeading>
      <div className="mt-6 space-y-5">
        {items.map((item) => (
          <MenuLink key={item.label} item={item} />
        ))}
      </div>
    </DropdownShell>
  );
}

function DropdownShell({
  id,
  widthClass,
  children,
}: {
  id: string;
  widthClass: string;
  children: React.ReactNode;
}) {
  return (
    <div id={id} className={`absolute left-1/2 top-full z-[90] -translate-x-1/2 pt-4 ${widthClass}`}>
      <div className="navbar-dropdown-panel relative rounded-[22px] border border-[#CDEECD] bg-white p-8 shadow-[0_24px_80px_rgba(22,78,80,0.14)]">
        <span
          aria-hidden="true"
          className="absolute left-1/2 top-0 size-4 -translate-x-1/2 -translate-y-1/2 rotate-45 border-l border-t border-[#CDEECD] bg-white"
        />
        {children}
      </div>
    </div>
  );
}

function MobileMenu({
  activeSection,
  onToggle,
  onClose,
}: {
  activeSection: MenuKey | null;
  onToggle: (key: MenuKey) => void;
  onClose: () => void;
}) {
  return (
    <div className="max-h-[calc(100vh-86px)] overflow-y-auto border-t border-[#dfe7dd] bg-white shadow-[0_18px_45px_rgba(22,78,80,0.12)] md:hidden">
      <div className="container-wide py-4">
        <div className="space-y-2">
          {navItems.map((item) => (
            <div key={item.key} className="rounded-[16px] border border-[#dfe9dc] bg-white">
              <button
                type="button"
                className="flex min-h-14 w-full items-center justify-between px-4 text-left text-base font-medium text-[#050505]"
                aria-expanded={activeSection === item.key}
                onClick={() => onToggle(item.key)}
              >
                {item.label}
                <ChevronIcon open={activeSection === item.key} />
              </button>
              {activeSection === item.key ? (
                <div className="border-t border-[#edf3ea] px-4 py-4">
                  <MobileSectionContent menu={item.key} onClose={onClose} />
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function MobileSectionContent({ menu, onClose }: { menu: MenuKey; onClose: () => void }) {
  if (menu === "services") {
    return (
      <div className="space-y-6">
        {servicesColumns.map((column) => (
          <div key={column.heading}>
            <DropdownHeading>{column.heading}</DropdownHeading>
            <div className="mt-4 space-y-3">
              {column.items.map((item) => (
                <MenuLink key={item.label} item={item} onClick={onClose} compact />
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (menu === "results") {
    return (
      <div className="space-y-3">
        {resultCards.map((card) => (
          <Link
            key={card.title}
            href={card.href}
            onClick={onClose}
            className="block rounded-[14px] border border-[#dfe9dc] p-4"
          >
            <div className="flex items-center gap-3">
              <IconBadge icon={card.icon} small />
              <div>
                <p className="text-base font-medium text-[#050505]">{card.title}</p>
                <p className="mt-1 text-xs font-medium uppercase tracking-[0.14em] text-[#164E50]">{card.tag}</p>
              </div>
            </div>
            <p className="mt-3 text-sm leading-6 text-[#4f5865]">{card.text}</p>
          </Link>
        ))}
      </div>
    );
  }

  const items = menu === "resources" ? resourceItems : companyItems;

  return (
    <div className="space-y-3">
      {items.map((item) => (
        <MenuLink key={item.label} item={item} onClick={onClose} compact />
      ))}
    </div>
  );
}

function MenuLink({ item, onClick, compact = false }: { item: MenuItem; onClick?: () => void; compact?: boolean }) {
  return (
    <Link
      href={item.href}
      onClick={onClick}
      className={`group flex items-center gap-4 rounded-[14px] transition hover:bg-[#F7FCF7] ${
        compact ? "p-2" : "p-1"
      }`}
    >
      {item.logoSrc ? (
        <ChannelLogoBadge src={item.logoSrc} label={item.label} fallbackIcon={item.icon} small={compact} />
      ) : (
        <IconBadge icon={item.icon} small={compact} />
      )}
      <span className="text-base font-medium text-[#141414] transition group-hover:text-[#164E50]">{item.label}</span>
    </Link>
  );
}

function DropdownHeading({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#164E50]">
      {children}
    </p>
  );
}

function IconBadge({ icon, small = false }: { icon: IconName; small?: boolean }) {
  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center rounded-[10px] bg-[#EEF8EE] text-[#164E50] ring-1 ring-[#e0eedc] ${
        small ? "size-11" : "size-14"
      }`}
      aria-hidden="true"
    >
      <MenuIcon icon={icon} />
    </span>
  );
}

function ChannelLogoBadge({
  src,
  label,
  fallbackIcon,
  small = false,
}: {
  src: string;
  label: string;
  fallbackIcon: IconName;
  small?: boolean;
}) {
  const [failed, setFailed] = useState(false);

  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center rounded-[10px] bg-[#EEF8EE] text-[#164E50] ring-1 ring-[#e0eedc] ${
        small ? "size-11" : "size-14"
      }`}
    >
      {failed ? (
        <span aria-hidden="true">
          <MenuIcon icon={fallbackIcon} />
        </span>
      ) : (
        <Image
          src={src}
          alt={`${label} logo`}
          width={32}
          height={32}
          className="h-6 w-6 object-contain"
          onError={() => setFailed(true)}
        />
      )}
    </span>
  );
}

function MenuIcon({ icon }: { icon: IconName }) {
  const common = {
    width: 25,
    height: 25,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  if (icon === "google") {
    return <span className="text-2xl font-semibold leading-none">G</span>;
  }

  if (icon === "linkedin") {
    return <span className="text-xl font-semibold leading-none">in</span>;
  }

  if (icon === "meta") {
    return <span className="text-2xl font-semibold leading-none">M</span>;
  }

  switch (icon) {
    case "target":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8" />
          <circle cx="12" cy="12" r="3.5" />
          <path d="M15 9l4-4" />
          <path d="M18 5h3v3" />
        </svg>
      );
    case "window":
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="M3 9h18" />
          <path d="M8 15h5" />
          <path d="M15 13h4v4" />
          <path d="M19 13l-5 5" />
        </svg>
      );
    case "database":
      return (
        <svg {...common}>
          <ellipse cx="12" cy="6" rx="7" ry="3" />
          <path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6" />
          <path d="M5 12v5c0 1.7 3.1 3 7 3 1.3 0 2.5-.1 3.5-.4" />
          <path d="M18 17h3" />
          <path d="M19.5 15.5v3" />
        </svg>
      );
    case "bulb":
      return (
        <svg {...common}>
          <path d="M9 18h6" />
          <path d="M10 21h4" />
          <path d="M8 14a6 6 0 1 1 8 0c-.8.7-1 1.3-1 2H9c0-.7-.2-1.3-1-2Z" />
        </svg>
      );
    case "youtube":
      return (
        <svg {...common}>
          <rect x="3" y="6" width="18" height="12" rx="3" />
          <path d="M10 9.5l5 2.5-5 2.5v-5Z" />
        </svg>
      );
    case "education":
      return (
        <svg {...common}>
          <path d="M4 10l8-4 8 4-8 4-8-4Z" />
          <path d="M7 12v4c2.8 1.7 7.2 1.7 10 0v-4" />
        </svg>
      );
    case "plus":
      return (
        <svg {...common}>
          <path d="M12 5v14" />
          <path d="M5 12h14" />
        </svg>
      );
    case "bars":
      return (
        <svg {...common}>
          <path d="M6 20V11" />
          <path d="M12 20V5" />
          <path d="M18 20v-7" />
        </svg>
      );
    case "document":
      return (
        <svg {...common}>
          <path d="M6 3h9l3 3v15H6V3Z" />
          <path d="M14 3v4h4" />
          <path d="M9 12h6" />
          <path d="M9 16h5" />
        </svg>
      );
    case "clipboard":
      return (
        <svg {...common}>
          <rect x="6" y="5" width="12" height="16" rx="2" />
          <path d="M9 5a3 3 0 0 1 6 0" />
          <path d="M9 12l2 2 4-4" />
          <path d="M9 17h6" />
        </svg>
      );
    case "chart":
      return (
        <svg {...common}>
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <path d="M8 15l3-3 2 2 4-5" />
        </svg>
      );
    case "book":
      return (
        <svg {...common}>
          <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H7a3 3 0 0 0-3 3V5.5Z" />
          <path d="M4 19a3 3 0 0 1 3-3h13" />
          <path d="M9 7h6" />
        </svg>
      );
    case "building":
      return (
        <svg {...common}>
          <path d="M5 21V5h10v16" />
          <path d="M15 9h4v12" />
          <path d="M8 9h2" />
          <path d="M8 13h2" />
          <path d="M8 17h2" />
          <path d="M3 21h18" />
        </svg>
      );
    case "gear":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="3" />
          <path d="M19 12a7 7 0 0 0-.1-1l2-1.5-2-3.4-2.4 1a7 7 0 0 0-1.7-1L14.5 3h-5l-.3 3.1a7 7 0 0 0-1.7 1l-2.4-1-2 3.4L5.1 11a7 7 0 0 0 0 2l-2 1.5 2 3.4 2.4-1a7 7 0 0 0 1.7 1l.3 3.1h5l.3-3.1a7 7 0 0 0 1.7-1l2.4 1 2-3.4-2-1.5c.1-.3.1-.7.1-1Z" />
        </svg>
      );
    case "user":
      return (
        <svg {...common}>
          <circle cx="12" cy="8" r="4" />
          <path d="M5 21a7 7 0 0 1 14 0" />
        </svg>
      );
    default:
      return null;
  }
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className={`transition ${open ? "rotate-180 text-[#164E50]" : "text-[#5f6877]"}`}
      aria-hidden="true"
    >
      <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" aria-hidden="true">
      <path d="M3.5 8.5h9" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M9.5 4.5l4 4-4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MenuToggleIcon({ open }: { open: boolean }) {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      {open ? (
        <>
          <path d="M6 6l10 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M16 6L6 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </>
      ) : (
        <>
          <path d="M4 7h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M4 11h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M4 15h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </>
      )}
    </svg>
  );
}
