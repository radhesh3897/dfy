const proofItems = [
  {
    label: "Lead quality",
    title: "Qualified conversations",
    text: "Optimize for fit, urgency, and sales readiness.",
  },
  {
    label: "Feedback loop",
    title: "Sales notes to media decisions",
    text: "Turn call outcomes into campaign and page improvements.",
  },
  {
    label: "Measurement",
    title: "Real CAC visibility",
    text: "Connect source quality with CRM movement.",
  },
];

export function HeroProofCards() {
  return (
    <div
      role="img"
      aria-label="Done For You proof cards showing lead quality, sales feedback, and acquisition measurement"
      className="grid gap-4 self-end"
    >
      <div className="rounded-sm bg-[#164E50] p-7 text-white shadow-[0_30px_70px_rgba(22,78,80,0.22)]">
        <p className="eyebrow eyebrow-accent">System outcome</p>
        <h2 className="mt-4 text-4xl font-black leading-none">Leads worth following up.</h2>
        <p className="mt-5 text-base leading-7 text-white/72">
          A tighter path from ad click to CRM context, nurture, and sales feedback.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
        {proofItems.map((item) => (
          <article key={item.title} className="rounded-sm border border-[#050505]/12 bg-white p-5 shadow-[0_18px_45px_rgba(5,5,5,0.06)]">
            <p className="text-xs font-black uppercase tracking-[0.14em] text-[#164E50]">{item.label}</p>
            <h3 className="mt-5 text-xl font-black">{item.title}</h3>
            <p className="mt-3 text-sm leading-6 text-[#4b4b4b]">{item.text}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
