"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

const fields = [
  { label: "Name", name: "name", type: "text" },
  { label: "Business email", name: "email", type: "email" },
  { label: "Company name", name: "company", type: "text" },
  { label: "Website", name: "website", type: "url" },
  { label: "Monthly ad spend", name: "adSpend", type: "text" },
];

export function AuditForm() {
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
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-sm border border-[#050505]/12 bg-white p-8 shadow-[0_18px_45px_rgba(5,5,5,0.06)] sm:p-10">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#164E50]/10">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M5 13l4 4L19 7" stroke="#164E50" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h2 className="mt-6 text-3xl font-black leading-none">Thanks, we have your details.</h2>
        <p className="mt-4 text-lg leading-8 text-[#4b4b4b]">
          An expert from our team will call you shortly, usually within a few hours.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-sm border border-[#050505]/12 bg-white p-6 shadow-[0_18px_45px_rgba(5,5,5,0.06)] sm:p-8"
    >
      <div className="grid gap-5 md:grid-cols-2">
        {fields.map((field) => (
          <label key={field.name} className="grid gap-2 text-sm font-bold text-[#050505]">
            {field.label}
            <input
              name={field.name}
              type={field.type}
              required
              className="min-h-13 rounded-sm border border-[#050505]/16 bg-[#f6f5f1] px-4 text-base outline-none transition focus:border-[#164E50] focus:bg-white"
            />
          </label>
        ))}
        <label className="grid gap-2 text-sm font-bold text-[#050505] md:col-span-2">
          Main problem
          <textarea
            name="mainProblem"
            required
            rows={5}
            className="rounded-sm border border-[#050505]/16 bg-[#f6f5f1] px-4 py-3 text-base outline-none transition focus:border-[#164E50] focus:bg-white"
          />
        </label>
      </div>
      {status === "error" && (
        <p className="mt-4 text-sm text-red-600">Something went wrong. Please try again.</p>
      )}
      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-7 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[#164E50] px-5 text-sm font-black text-white shadow-[0_16px_32px_rgba(136,222,123,0.24)] transition hover:bg-[#103D3F] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#164E50] disabled:opacity-60 sm:w-auto"
      >
        {status === "loading" ? "Sending…" : "Book a Call"}
      </button>
    </form>
  );
}
