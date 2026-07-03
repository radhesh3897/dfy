"use client";

import { sendGAEvent } from "@next/third-parties/google";
import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export function AuditStartCard() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const data = Object.fromEntries(new FormData(e.currentTarget));
    try {
      const res = await fetch("/api/audit-submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        // GA4 lead-conversion event. Mark "generate_lead" as a Key Event in
        // GA4 Admin so form submissions show up as conversions.
        sendGAEvent("event", "generate_lead", {
          form_location: "audit_start_card",
          monthly_ad_spend: typeof data.monthlyAdSpend === "string" ? data.monthlyAdSpend : "",
          vertical: typeof data.vertical === "string" ? data.vertical : "",
        });
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <aside id="free-audit-form" className="mx-auto w-full max-w-[480px] scroll-mt-28 rounded-[20px] border border-[#dce1e9] bg-white p-6 shadow-[0_24px_70px_rgba(15,23,42,0.08)] sm:rounded-[22px] sm:p-8 lg:ml-auto">
      {status === "success" ? (
        <div className="py-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#164E50]/10">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M5 13l4 4L19 7" stroke="#164E50" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h2 className="mt-5 text-2xl font-medium tracking-[-0.03em] text-[#111827] sm:text-3xl">
            Thanks, we have your details.
          </h2>
          <p className="mt-4 text-base leading-7 text-[#5f6877]">
            An expert from our team will call you shortly, usually within a few hours.
          </p>
        </div>
      ) : (
        <>
          <span className="inline-flex rounded-[10px] bg-[#164E50] px-4 py-2.5 text-sm font-medium text-white shadow-[0_10px_22px_rgba(22,78,80,0.24)] sm:px-5 sm:py-3 sm:text-base">
            Step 1 of 2
          </span>
          <h2 className="mt-7 text-2xl font-medium tracking-[-0.03em] text-[#111827] sm:mt-8 sm:text-3xl">
            Book a Call
          </h2>
          <form className="mt-7 grid gap-5 sm:mt-8 sm:gap-6" onSubmit={handleSubmit}>
            <label className="grid gap-3 text-base font-medium text-[#111827]">
              Business Name
              <input
                name="businessName"
                type="text"
                required
                placeholder="Your business name"
                className="min-h-[56px] rounded-md border border-[#cfd6e2] bg-white px-4 text-base font-normal text-[#111827] outline-none transition placeholder:text-[#7b8494] focus:border-[#164E50] focus:ring-4 focus:ring-[#164E50]/10 sm:min-h-[62px] sm:px-5 sm:text-lg"
              />
            </label>
            <label className="grid gap-3 text-base font-medium text-[#111827]">
              Monthly Ad Spend
              <select
                name="monthlyAdSpend"
                required
                defaultValue=""
                className="min-h-[56px] rounded-md border border-[#cfd6e2] bg-white px-4 text-base font-normal text-[#111827] outline-none transition focus:border-[#164E50] focus:ring-4 focus:ring-[#164E50]/10 sm:min-h-[62px] sm:px-5 sm:text-lg"
              >
                <option value="" disabled>Select monthly spend</option>
                <option value="Below INR 1L">Below INR 1L</option>
                <option value="INR 1L - INR 5L">INR 1L - INR 5L</option>
                <option value="INR 5L - INR 15L">INR 5L - INR 15L</option>
                <option value="INR 15L+">INR 15L+</option>
              </select>
            </label>
            <label className="grid gap-3 text-base font-medium text-[#111827]">
              Your Vertical
              <select
                name="vertical"
                required
                defaultValue=""
                className="min-h-[56px] rounded-md border border-[#cfd6e2] bg-white px-4 text-base font-normal text-[#111827] outline-none transition focus:border-[#164E50] focus:ring-4 focus:ring-[#164E50]/10 sm:min-h-[62px] sm:px-5 sm:text-lg"
              >
                <option value="" disabled>Select vertical</option>
                <option value="EdTech">EdTech</option>
                <option value="Gym / Fitness">Gym / Fitness</option>
                <option value="Clinic / Healthcare">Clinic / Healthcare</option>
                <option value="Travel Agency">Travel Agency</option>
                <option value="Service Business">Service Business</option>
              </select>
            </label>
            <label className="grid gap-3 text-base font-medium text-[#111827]">
              Phone Number
              <input
                name="phoneNumber"
                type="tel"
                required
                placeholder="+91 98765 43210"
                className="min-h-[56px] rounded-md border border-[#cfd6e2] bg-white px-4 text-base font-normal text-[#111827] outline-none transition placeholder:text-[#7b8494] focus:border-[#164E50] focus:ring-4 focus:ring-[#164E50]/10 sm:min-h-[62px] sm:px-5 sm:text-lg"
              />
            </label>
            {status === "error" && (
              <p className="text-sm text-red-600">Something went wrong. Please try again or WhatsApp us directly.</p>
            )}
            <button
              type="submit"
              disabled={status === "loading"}
              className="mt-2 inline-flex min-h-[58px] items-center justify-center gap-4 rounded-md bg-[#164E50] px-5 text-lg font-medium text-white shadow-[0_18px_36px_rgba(136,222,123,0.28)] transition hover:bg-[#103D3F] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#164E50] disabled:opacity-60 sm:min-h-[66px] sm:px-6 sm:text-xl"
            >
              {status === "loading" ? "Sending…" : "Book a Call"}
              {status !== "loading" && <span aria-hidden="true">-&gt;</span>}
            </button>
          </form>
          <p className="mt-5 text-sm leading-6 text-[#5f6877]">
            No commitment. We&apos;ll tell you exactly what&apos;s leaking in your current campaigns.
          </p>
        </>
      )}
    </aside>
  );
}
