export function AuditStartCard() {
  return (
    <aside id="free-audit-form" className="mx-auto w-full max-w-[480px] scroll-mt-28 rounded-[20px] border border-[#dce1e9] bg-white p-6 shadow-[0_24px_70px_rgba(15,23,42,0.08)] sm:rounded-[22px] sm:p-8 lg:ml-auto">
      <span className="inline-flex rounded-[10px] bg-[#164E50] px-4 py-2.5 text-sm font-medium text-white shadow-[0_10px_22px_rgba(22,78,80,0.24)] sm:px-5 sm:py-3 sm:text-base">
        Step 1 of 2
      </span>
      <h2 className="mt-7 text-2xl font-medium tracking-[-0.03em] text-[#111827] sm:mt-8 sm:text-3xl">
        Start Your Free Audit
      </h2>
      <form className="mt-7 grid gap-5 sm:mt-8 sm:gap-6">
        <label className="grid gap-3 text-base font-medium text-[#111827]">
          Business Name
          <input
            name="businessName"
            type="text"
            placeholder="Your business name"
            className="min-h-[56px] rounded-md border border-[#cfd6e2] bg-white px-4 text-base font-normal text-[#111827] outline-none transition placeholder:text-[#7b8494] focus:border-[#164E50] focus:ring-4 focus:ring-[#164E50]/10 sm:min-h-[62px] sm:px-5 sm:text-lg"
          />
        </label>
        <label className="grid gap-3 text-base font-medium text-[#111827]">
          Monthly Ad Spend
          <select
            name="monthlyAdSpend"
            defaultValue=""
            className="min-h-[56px] rounded-md border border-[#cfd6e2] bg-white px-4 text-base font-normal text-[#111827] outline-none transition focus:border-[#164E50] focus:ring-4 focus:ring-[#164E50]/10 sm:min-h-[62px] sm:px-5 sm:text-lg"
          >
            <option value="" disabled>Select monthly spend</option>
            <option value="below-1l">Below INR 1L</option>
            <option value="1l-5l">INR 1L - INR 5L</option>
            <option value="5l-15l">INR 5L - INR 15L</option>
            <option value="15l-plus">INR 15L+</option>
          </select>
        </label>
        <label className="grid gap-3 text-base font-medium text-[#111827]">
          Your Vertical
          <select
            name="vertical"
            defaultValue=""
            className="min-h-[56px] rounded-md border border-[#cfd6e2] bg-white px-4 text-base font-normal text-[#111827] outline-none transition focus:border-[#164E50] focus:ring-4 focus:ring-[#164E50]/10 sm:min-h-[62px] sm:px-5 sm:text-lg"
          >
            <option value="" disabled>Select vertical</option>
            <option value="edtech">EdTech</option>
            <option value="gym">Gym / Fitness</option>
            <option value="clinic">Clinic / Healthcare</option>
            <option value="travel">Travel Agency</option>
            <option value="services">Service Business</option>
          </select>
        </label>
        <label className="grid gap-3 text-base font-medium text-[#111827]">
          Phone Number
          <input
            name="phoneNumber"
            type="tel"
            placeholder="+91 98765 43210"
            className="min-h-[56px] rounded-md border border-[#cfd6e2] bg-white px-4 text-base font-normal text-[#111827] outline-none transition placeholder:text-[#7b8494] focus:border-[#164E50] focus:ring-4 focus:ring-[#164E50]/10 sm:min-h-[62px] sm:px-5 sm:text-lg"
          />
        </label>
        <button
          type="submit"
          className="mt-2 inline-flex min-h-[58px] items-center justify-center gap-4 rounded-md bg-[#164E50] px-5 text-lg font-medium text-white shadow-[0_18px_36px_rgba(136,222,123,0.28)] transition hover:bg-[#103D3F] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#164E50] sm:min-h-[66px] sm:px-6 sm:text-xl"
        >
          Get My Free Audit
          <span aria-hidden="true">-&gt;</span>
        </button>
      </form>
      <p className="mt-5 text-sm leading-6 text-[#5f6877]">
        No commitment. We&apos;ll tell you exactly what&apos;s leaking in your current campaigns.
      </p>
    </aside>
  );
}
