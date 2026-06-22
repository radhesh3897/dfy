import type { ReactNode } from "react";

// Inline citation link to an authoritative source. Dofollow on purpose —
// citing reputable primary sources is a positive trust signal for both
// search and generative engines.
export function Cite({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="font-medium text-[#164E50] underline decoration-[#CDEECD] underline-offset-4 transition hover:text-[#103D3F]"
    >
      {children}
    </a>
  );
}

export function PullQuote({ quote, attribution }: { quote: string; attribution: string }) {
  return (
    <blockquote className="my-2 rounded-r-[12px] border-l-4 border-[#88DE7B] bg-[#EEF8EE] px-6 py-5">
      <p className="text-xl font-medium leading-8 tracking-[-0.01em] text-[#164E50]">
        &ldquo;{quote}&rdquo;
      </p>
      <footer className="mt-3 text-sm font-medium text-[#465163]">— {attribution}</footer>
    </blockquote>
  );
}

type Source = { label: string; href: string };

export function SourceList({ sources }: { sources: Source[] }) {
  return (
    <ol className="max-w-3xl space-y-3 text-base leading-7 text-[#465163]">
      {sources.map((source, index) => (
        <li key={source.href} className="flex gap-3">
          <span className="font-medium text-[#164E50]">{index + 1}.</span>
          <Cite href={source.href}>{source.label}</Cite>
        </li>
      ))}
    </ol>
  );
}
