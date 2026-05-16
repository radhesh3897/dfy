import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "dark" | "light";
  className?: string;
};

const variants = {
  primary:
    "bg-[#164E50] text-white shadow-[0_16px_34px_rgba(136,222,123,0.26)] hover:bg-[#103D3F] focus-visible:outline-[#164E50]",
  secondary:
    "border border-[#d7dce5] bg-white text-[#465163] hover:border-[#164E50] hover:text-[#164E50] focus-visible:outline-[#164E50]",
  dark:
    "bg-[#164E50] text-white shadow-[0_16px_34px_rgba(136,222,123,0.26)] hover:bg-[#103D3F] focus-visible:outline-[#164E50]",
  light:
    "border border-[#d7dce5] bg-white text-[#164E50] hover:bg-[#F7FCF7] focus-visible:outline-[#164E50]",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={`inline-flex min-h-12 items-center justify-center rounded-full px-5 text-sm font-medium tracking-[-0.01em] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
