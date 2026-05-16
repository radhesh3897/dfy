"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const auditFormHash = "#free-audit-form";
const headerOffset = 112;

function scrollToAuditForm(behavior: ScrollBehavior = "smooth") {
  const target = document.getElementById("free-audit-form");
  if (!target) return;

  const top = target.getBoundingClientRect().top + window.scrollY - headerOffset;

  window.scrollTo({
    top: Math.max(0, top),
    behavior,
  });
}

function settleAuditFormScroll() {
  scrollToAuditForm();
  window.requestAnimationFrame(() => scrollToAuditForm());
  window.setTimeout(() => scrollToAuditForm("auto"), 260);
  window.setTimeout(() => scrollToAuditForm("auto"), 620);
}

export function AuditFormAnchorScroll() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.location.pathname === "/" && window.location.hash === auditFormHash) {
      window.requestAnimationFrame(() => scrollToAuditForm("auto"));
    }
  }, [pathname]);

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const link = target.closest<HTMLAnchorElement>("a[href]");
      if (!link) return;

      const url = new URL(link.href);
      const isAuditFormLink =
        url.origin === window.location.origin &&
        url.pathname === "/" &&
        url.hash === auditFormHash;

      if (!isAuditFormLink || window.location.pathname !== "/") return;

      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();

      if (window.location.hash !== auditFormHash) {
        window.history.pushState(null, "", auditFormHash);
      }

      settleAuditFormScroll();
    }

    function handleHashChange() {
      if (window.location.pathname === "/" && window.location.hash === auditFormHash) {
        scrollToAuditForm();
      }
    }

    document.addEventListener("click", handleClick, true);
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      document.removeEventListener("click", handleClick, true);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return null;
}
