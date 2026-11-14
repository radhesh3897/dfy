"use client";

import { sendGAEvent } from "@next/third-parties/google";
import { useRef, useState } from "react";
import { normalizePhone } from "@/lib/audit-submission";

type CitySourcePath = "/locations/bangalore" | "/locations/chennai";
type Status = "idle" | "loading" | "success" | "error";

export function CityHeroLeadForm({ city, sourcePath }: { city: string; sourcePath: CitySourcePath }) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const submitting = useRef(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting.current) return;
    const data = Object.fromEntries(new FormData(event.currentTarget)) as Record<string, string>;
    const phone = normalizePhone(data.phoneNumber || "");
    if (!phone) {
      setError("Enter a valid phone number. Include the country code if you are outside India.");
      setStatus("error");
      return;
    }

    submitting.current = true;
    setStatus("loading");
    setError("");
    try {
      const response = await fetch("/api/audit-submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, phoneNumber: phone, sourcePath }),
      });
      if (!response.ok) throw new Error("Submission failed");

    } catch {
      submitting.current = false;
      setError("We could not send your request. Please try again.");
      setStatus("error");
      return;
    }

    setStatus("success");
    try {
      sendGAEvent("event", "generate_lead", {
        form_location: "city_hero",
        source_path: sourcePath,
      });
    } catch (analyticsError) {
      console.error("City lead analytics failed", analyticsError);
    }
  }

  return (
    <aside id="city-lead-form" className="scroll-mt-28 rounded-[18px] border border-[#CDEECD] bg-white p-6 shadow-[0_22px_70px_rgba(22,78,80,0.08)] sm:p-7">
      {status === "success" ? (
        <div role="status" className="py-4">
          <h2 className="text-2xl font-black tracking-[-0.03em] text-[#164E50]">Thanks, we have your details.</h2>
          <p className="mt-3 text-sm leading-6 text-[#465163]">Our team will contact you about your lead-generation needs in {city}.</p>
        </div>
      ) : (
        <>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#164E50]">Talk to Done For You</p>
          <h2 className="mt-3 text-2xl font-black tracking-[-0.03em] text-[#164E50]">Request a call</h2>
          <p className="mt-2 text-sm leading-6 text-[#465163]">Tell us about your business. We&apos;ll contact you to discuss lead quality in {city}.</p>
          <form className="mt-5 grid gap-4" onSubmit={handleSubmit}>
            <label className="grid gap-1.5 text-sm font-semibold text-[#111827]">
              Full name
              <input name="fullName" type="text" autoComplete="name" required maxLength={254} className="min-h-12 rounded-md border border-[#cfd6e2] px-3 text-base font-normal outline-none focus:border-[#164E50] focus:ring-2 focus:ring-[#164E50]/15" />
            </label>
            <label className="grid gap-1.5 text-sm font-semibold text-[#111827]">
              Business name
              <input name="businessName" type="text" autoComplete="organization" required maxLength={254} className="min-h-12 rounded-md border border-[#cfd6e2] px-3 text-base font-normal outline-none focus:border-[#164E50] focus:ring-2 focus:ring-[#164E50]/15" />
            </label>
            <label className="grid gap-1.5 text-sm font-semibold text-[#111827]">
              Work email
              <input name="email" type="email" autoComplete="email" required maxLength={254} className="min-h-12 rounded-md border border-[#cfd6e2] px-3 text-base font-normal outline-none focus:border-[#164E50] focus:ring-2 focus:ring-[#164E50]/15" />
            </label>
            <label className="grid gap-1.5 text-sm font-semibold text-[#111827]">
              Phone number
              <input name="phoneNumber" type="tel" autoComplete="tel" inputMode="tel" placeholder="98765 43210" required maxLength={24} aria-describedby="city-phone-hint" className="min-h-12 rounded-md border border-[#cfd6e2] px-3 text-base font-normal outline-none focus:border-[#164E50] focus:ring-2 focus:ring-[#164E50]/15" />
              <span id="city-phone-hint" className="text-xs font-normal text-[#667085]">Outside India? Include your country code.</span>
            </label>
            {status === "error" && <p role="alert" className="text-sm text-red-700">{error}</p>}
            <button type="submit" disabled={status === "loading"} className="min-h-12 rounded-md bg-[#164E50] px-5 text-base font-semibold text-white transition hover:bg-[#103D3F] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#164E50] disabled:opacity-60">
              {status === "loading" ? "Sending…" : "Request a call"}
            </button>
          </form>
        </>
      )}
    </aside>
  );
}
