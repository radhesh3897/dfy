import Image from "next/image";
import Link from "next/link";

const accountSnapshot = {
  label: "DFY Account Snapshot",
  badge: "Meta Ads + CRM Review",
  headline: "47% of Meta Ads leads qualified.",
  description:
    "DFY helped this account move beyond basic CPL reporting by connecting Meta Ads performance with lead quality and CRM feedback. Instead of tracking only lead volume, the account could see which leads were actually worth following up.",
  screenshot: {
    src: "/proof/meta-ads-account-snapshot.png",
    alt: "Meta Ads campaign table showing lead quality and cost per lead metrics",
  },
  clientLogo: {
    src: "/logos/processed/image-1-dfy-gray-original-size.png",
    alt: "Tranzission logo",
  },
  results: [
    {
      value: "45%",
      label: "lower CPL",
      note: "reduction in cost per lead",
      icon: "trend",
    },
    {
      value: "159",
      label: "qualified leads",
      note: "qualified leads recorded",
      icon: "person",
    },
    {
      value: "333",
      label: "total leads",
      note: "total leads generated",
      icon: "group",
    },
  ],
};

export function CaseStudyPlaceholder() {
  return (
    <section className="bg-white py-8 sm:py-14">
      <div className="container-wide rounded-[18px] border border-[#dfe4ec] bg-white p-4 shadow-[0_18px_60px_rgba(15,23,42,0.05)] sm:p-8 lg:p-10">
        <div className="grid min-w-0 gap-6 lg:grid-cols-[1fr_0.9fr_0.5fr] lg:items-center lg:gap-10">
          <SnapshotCopy />
          <ResultsRail />
          <SnapshotVisual />
          <MobileCta />
        </div>
      </div>
    </section>
  );
}

function SnapshotCopy() {
  return (
    <article className="contents min-w-0 lg:order-2 lg:block">
      <div className="order-1 flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:gap-3">
        <p className="text-lg font-medium tracking-[-0.03em] text-[#164E50] sm:text-xl">
          {accountSnapshot.label}
        </p>
        <span className="rounded-full bg-[#EEF8EE] px-4 py-2 text-sm font-medium text-[#164E50]">
          {accountSnapshot.badge}
        </span>
      </div>

      <h2 className="order-3 mt-0 max-w-2xl break-words text-[clamp(2rem,8vw,4rem)] font-medium leading-[1.04] tracking-[-0.045em] text-[#0B0B0B] lg:mt-7">
        {accountSnapshot.headline}
      </h2>

      <p className="order-4 mt-0 max-w-2xl break-words text-base leading-7 tracking-[-0.01em] text-[#465163] sm:text-lg sm:leading-8 lg:mt-5">
        {accountSnapshot.description}
      </p>

      <AuditCta className="mt-7 hidden lg:inline-flex" />
    </article>
  );
}

function SnapshotVisual() {
  return (
    <div className="order-2 min-w-0 rounded-[16px] border border-[#dfe4ec] bg-white p-3 shadow-[0_20px_55px_rgba(15,23,42,0.07)] sm:p-4 lg:order-1">
      <div className="mb-4 flex items-center gap-3 px-1 sm:mb-5">
        <div className="relative h-10 w-36 shrink-0">
          <Image
            src={accountSnapshot.clientLogo.src}
            alt={accountSnapshot.clientLogo.alt}
            fill
            sizes="144px"
            className="object-contain object-left"
          />
        </div>
        <div>
          <p className="text-base font-medium tracking-[-0.02em] text-[#111827]">Account reviewed</p>
          <p className="mt-0.5 text-sm text-[#5f6877]">Meta Ads + CRM</p>
        </div>
      </div>

      <div className="overflow-hidden rounded-[12px] border border-[#dfe4ec] bg-[#f8fafc]">
        <div className="relative aspect-[975/526] bg-white">
          <Image
            src={accountSnapshot.screenshot.src}
            alt={accountSnapshot.screenshot.alt}
            fill
            sizes="(max-width: 1024px) 92vw, 36vw"
            priority
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}

function ResultsRail() {
  return (
    <aside className="order-5 min-w-0 lg:order-3 lg:border-l lg:border-[#dfe4ec] lg:pl-8">
      <p className="text-base font-medium tracking-[-0.02em] text-[#111827] sm:text-lg">Results at a glance</p>
      <div className="mt-4 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 lg:gap-4">
        {accountSnapshot.results.map((result) => (
          <div
            key={result.label}
            className="rounded-[12px] border border-[#dfe4ec] bg-[#fbfdfb] p-4 shadow-[0_10px_28px_rgba(15,23,42,0.04)] lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none"
          >
            <div className="flex items-center gap-3 lg:items-start lg:gap-4">
              <div className="grid size-10 shrink-0 place-items-center rounded-full bg-[#EEF8EE] text-[#164E50] lg:size-12">
                <Icon type={result.icon} />
              </div>
              <div className="min-w-0">
                <p className="text-[2.45rem] font-medium leading-none tracking-[-0.055em] text-[#164E50] lg:text-[3.65rem]">
                  {result.value}
                </p>
                <p className="mt-1 text-lg font-medium leading-tight tracking-[-0.03em] text-[#164E50] lg:text-xl">
                  {result.label}
                </p>
                <p className="mt-1 text-xs leading-5 text-[#465163] lg:text-sm">{result.note}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}

function MobileCta() {
  return (
    <div className="order-6 lg:hidden">
      <AuditCta className="w-full" />
    </div>
  );
}

function AuditCta({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/#free-audit-form"
      className={`inline-flex min-h-[52px] items-center justify-center rounded-md bg-[#164E50] px-6 text-base font-medium text-white shadow-[0_18px_36px_rgba(136,222,123,0.26)] transition hover:bg-[#103D3F] ${className}`}
    >
      Book a Call <span aria-hidden="true" className="ml-2">&rarr;</span>
    </Link>
  );
}

function Icon({ type }: { type: string }) {
  if (type === "trend") {
    return (
      <svg viewBox="0 0 24 24" className="size-6" aria-hidden="true">
        <path d="M4 7l6 6 4-4 6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20 10v5h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (type === "person") {
    return (
      <svg viewBox="0 0 24 24" className="size-6" aria-hidden="true">
        <path d="M12 12a4 4 0 100-8 4 4 0 000 8z" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M4 21a8 8 0 0116 0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className="size-6" aria-hidden="true">
      <path d="M8 11a3 3 0 100-6 3 3 0 000 6zM16 11a3 3 0 100-6 3 3 0 000 6z" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M3 21a5 5 0 0110 0M11 21a5 5 0 0110 0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
