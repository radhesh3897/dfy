const fields = [
  { label: "Name", name: "name", type: "text" },
  { label: "Business email", name: "email", type: "email" },
  { label: "Company name", name: "company", type: "text" },
  { label: "Website", name: "website", type: "url" },
  { label: "Monthly ad spend", name: "adSpend", type: "text" },
];

export function AuditForm() {
  return (
    <form className="rounded-sm border border-[#050505]/12 bg-white p-6 shadow-[0_18px_45px_rgba(5,5,5,0.06)] sm:p-8">
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
      <button
        type="submit"
        className="mt-7 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[#164E50] px-5 text-sm font-black text-white shadow-[0_16px_32px_rgba(136,222,123,0.24)] transition hover:bg-[#103D3F] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#164E50] sm:w-auto"
      >
        Request My Free Audit
      </button>
    </form>
  );
}
