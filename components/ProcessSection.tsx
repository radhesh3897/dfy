const processSteps = [
  {
    number: "01",
    title: "Audit",
    bullets: ["Campaign leak review", "Funnel and tracking check", "Sales feedback alignment"],
    visual: "kickoff",
  },
  {
    number: "02",
    title: "Strategy",
    bullets: ["ICP and offer clarity", "LeakProof roadmap", "Creative angle plan"],
    visual: "strategy",
  },
  {
    number: "03",
    title: "Launch",
    bullets: ["Campaign rebuilds", "Creative testing cycles", "CAPI signal setup"],
    visual: "launch",
  },
  {
    number: "04",
    title: "Compound",
    bullets: ["Weekly sales feedback", "Customer signal optimization", "Lower CAC over time"],
    visual: "management",
  },
];

type ProcessStep = (typeof processSteps)[number];

export function ProcessSection() {
  return (
    <section id="process" className="scroll-mt-28 bg-white py-16 text-[#050505] sm:py-20 lg:py-24">
      <div className="container-wide">
        <header>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#164E50]">
            The Process
          </p>
          <h2 className="mt-7 max-w-[1120px] text-[clamp(2.5rem,6.4vw,5.25rem)] font-medium leading-[0.98] tracking-[-0.06em]">
            What working with Done For You looks like.
          </h2>
          <p className="mt-5 text-xl leading-8 tracking-[-0.02em] text-[#465163] sm:text-2xl">
            Structured, supportive, and built to move fast.
          </p>
        </header>

        <div className="relative mt-12 lg:mt-16">
          <div
            className="absolute left-2 right-2 top-[96px] hidden h-px bg-[#164E50] lg:block"
            aria-hidden="true"
          />

          <div className="grid gap-10 lg:grid-cols-4 lg:gap-10">
            {processSteps.map((step) => (
              <ProcessStepCard key={step.number} step={step} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProcessStepCard({ step }: { step: ProcessStep }) {
  return (
    <article className="relative grid gap-5 sm:grid-cols-[96px_1fr] sm:items-start lg:block">
      <div className="relative">
        <p className="text-[clamp(4rem,14vw,5.7rem)] font-light leading-none tracking-[-0.08em] text-[#164E50] lg:text-[5.4rem]">
          {step.number}
        </p>
        <span
          className="mt-5 hidden size-7 place-items-center rounded-full border border-[#d9e6d8] bg-white shadow-[0_8px_22px_rgba(22,78,80,0.13)] sm:grid lg:mt-6"
          aria-hidden="true"
        >
          <span className="size-3.5 rounded-full bg-[#88DE7B]" />
        </span>
      </div>

      <div>
        <div className="flex items-start gap-4 sm:hidden">
          <span
            className="mt-2 grid size-7 shrink-0 place-items-center rounded-full border border-[#d9e6d8] bg-white shadow-[0_8px_22px_rgba(22,78,80,0.13)]"
            aria-hidden="true"
          >
            <span className="size-3.5 rounded-full bg-[#88DE7B]" />
          </span>
          <div className="h-px flex-1 bg-[#164E50]" />
        </div>

        <ProcessVisual type={step.visual} />

        <div className="mt-8">
          <div className="flex items-center gap-4">
            <StepIcon type={step.visual} />
            <h3 className="text-[1.65rem] font-medium leading-tight tracking-[-0.04em] text-[#050505]">
              {step.title}
            </h3>
          </div>
          <ul className="mt-6 space-y-4">
            {step.bullets.map((bullet) => (
              <li key={bullet} className="flex items-center gap-4 text-lg leading-7 text-[#242a33]">
                <BulletIcon />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}

function ProcessVisual({ type }: { type: string }) {
  return (
    <div className="h-[300px] overflow-hidden rounded-[16px] border border-[#dfe6df] bg-white p-4 shadow-[0_18px_52px_rgba(15,23,42,0.07)] sm:h-[320px] sm:p-5 lg:h-[300px] xl:h-[320px]">
      {type === "kickoff" ? <KickoffVisual /> : null}
      {type === "strategy" ? <StrategyVisual /> : null}
      {type === "launch" ? <LaunchVisual /> : null}
      {type === "management" ? <ManagementVisual /> : null}
    </div>
  );
}

function KickoffVisual() {
  const items = [
    { title: "Onboarding form", icon: "doc" },
    { title: "Funnel audit", icon: "search" },
    { title: "Alignment call", icon: "call" },
  ];

  return (
    <div className="relative h-full">
      <div className="flex items-center gap-3">
        <span className="grid size-9 place-items-center rounded-full bg-[#164E50] text-white">
          <CheckIcon />
        </span>
        <p className="text-sm font-medium text-[#242a33]">Getting started</p>
      </div>

      <div className="absolute left-[17px] top-[52px] h-[164px] w-px bg-[#CDEECD]" aria-hidden="true" />

      <div className="mt-5 space-y-3 pl-12">
        {items.map((item) => (
          <div key={item.title} className="relative rounded-[12px] border border-[#dfe6df] bg-white p-3 shadow-[0_10px_28px_rgba(15,23,42,0.04)]">
            <span className="absolute -left-[40px] top-4 grid size-6 place-items-center rounded-full bg-[#88DE7B] text-[#164E50]">
              <CheckIcon />
            </span>
            <div className="flex items-center gap-4">
              <span className="grid size-10 shrink-0 place-items-center rounded-[10px] bg-[#EEF8EE] text-[#164E50]">
                <SmallIcon type={item.icon} />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-[#111827]">{item.title}</p>
                <div className="mt-3 h-2 max-w-[150px] rounded-full bg-[#e6e8e5]" />
                <div className="mt-2 h-2 max-w-[110px] rounded-full bg-[#e6e8e5]" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function StrategyVisual() {
  const channels = ["M", "G", "in", "T", "+"];
  const bars = [
    { label: "Paid Social", width: "88%" },
    { label: "Google Ads", width: "56%" },
    { label: "LinkedIn Ads", width: "28%" },
  ];

  return (
    <div className="-m-5 overflow-hidden rounded-[16px]">
      <div className="border-b border-[#dfe6df] px-5 py-3">
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-[#111827]">Strategy plan</p>
          <span className="text-[#5f6877]">...</span>
        </div>
      </div>
      <div className="p-5 lg:p-4 xl:p-5">
        <p className="text-xs font-medium text-[#465163]">Channels</p>
        <div className="mt-3 grid grid-cols-5 gap-2">
          {channels.map((channel) => (
            <span key={channel} className="grid h-10 place-items-center rounded-[10px] border border-[#dfe6df] bg-white text-sm font-medium text-[#164E50]">
              {channel}
            </span>
          ))}
        </div>

        <div className="mt-5 space-y-3">
          {bars.map((bar) => (
            <div key={bar.label} className="grid grid-cols-[92px_1fr_34px] items-center gap-3 text-xs text-[#465163]">
              <span>{bar.label}</span>
              <span className="h-3 overflow-hidden rounded-full bg-[#EEF8EE]">
                <span className="block h-full rounded-full bg-[#164E50]" style={{ width: bar.width }} />
              </span>
              <span className="text-right text-[#242a33]">Tracked</span>
            </div>
          ))}
        </div>

        <div className="mt-5 border-t border-[#dfe6df] pt-4">
          <p className="text-xs font-medium text-[#465163]">Roadmap</p>
          <div className="mt-3 grid grid-cols-3 gap-2">
            {["30 Days", "60 Days", "90 Days"].map((item, index) => (
              <span key={item} className={`rounded-[9px] px-3 py-2 text-center text-xs font-medium ${index === 0 ? "bg-[#EEF8EE] text-[#164E50]" : "bg-[#f3f4f2] text-[#465163]"}`}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function LaunchVisual() {
  const campaigns = ["Campaign A", "Campaign B"];

  return (
    <div className="space-y-3">
      {campaigns.map((campaign) => (
        <div key={campaign} className="rounded-[12px] border border-[#dfe6df] bg-white p-4 shadow-[0_10px_28px_rgba(15,23,42,0.04)] lg:p-3 xl:p-4">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="size-3 rounded-full bg-[#88DE7B]" />
              <p className="font-medium text-[#111827]">{campaign}</p>
            </div>
            <span className="rounded-full bg-[#88DE7B] px-3 py-1 text-xs font-medium uppercase text-[#164E50]">
              Live
            </span>
          </div>
          <div className="mt-3 flex items-end justify-between gap-4">
            <p className="text-sm text-[#465163]">{campaign === "Campaign A" ? "Meta Ads" : "Google Ads"}</p>
            <div className="flex h-8 items-end gap-1">
              {[18, 24, 14, 30, 38, 26, 44, 22].map((height, index) => (
                <span key={`${campaign}-${index}`} className="w-2 rounded-t-sm bg-[#CDEECD]" style={{ height }} />
              ))}
            </div>
            <p className="text-sm font-medium text-[#164E50]">Tracked</p>
          </div>
        </div>
      ))}

      <div className="grid grid-cols-3 gap-3">
        {["Spend", "Signals", "Quality"].map((metric) => (
          <div key={metric} className="rounded-[12px] border border-[#dfe6df] bg-white p-4 lg:p-3 xl:p-4">
            <p className="text-xs text-[#667085]">{metric}</p>
            <p className="mt-2 text-lg font-medium text-[#111827]">Tracked</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function ManagementVisual() {
  return (
    <div className="-m-5 overflow-hidden rounded-[16px]">
      <div className="p-5 lg:p-4 xl:p-5">
        <div className="flex gap-4">
          <span className="grid size-14 shrink-0 place-items-center rounded-full bg-[#164E50] text-base font-medium text-white">
            DFY
          </span>
          <div className="min-w-0 flex-1">
            <div className="flex items-center justify-between gap-3">
              <p className="font-medium text-[#111827]">Your Strategist</p>
              <p className="text-xs text-[#5f6877]">9:30 AM</p>
            </div>
            <p className="mt-2 text-sm text-[#242a33]">Here is your weekly update.</p>
            <div className="mt-4 space-y-3">
              <div className="h-2 max-w-[210px] rounded-full bg-[#e6e8e5]" />
              <div className="h-2 max-w-[250px] rounded-full bg-[#e6e8e5]" />
              <div className="h-2 max-w-[170px] rounded-full bg-[#e6e8e5]" />
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-[#dfe6df] p-5 lg:p-4 xl:p-5">
        <p className="font-medium text-[#111827]">Top highlights</p>
        <ul className="mt-4 space-y-3 lg:space-y-2 xl:space-y-3">
          {[
            "Performance review completed",
            "New learning added to roadmap",
            "Next test queued for creative",
          ].map((item) => (
            <li key={item} className="flex items-center gap-3 text-sm text-[#242a33]">
              <span className="grid size-5 place-items-center rounded-full bg-[#88DE7B] text-[#164E50]">
                <CheckIcon />
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function StepIcon({ type }: { type: string }) {
  return (
    <span className="text-[#164E50]">
      <LargeIcon type={type} />
    </span>
  );
}

function BulletIcon() {
  return (
    <span className="text-[#164E50]">
      <svg aria-hidden="true" className="size-7" viewBox="0 0 32 32" fill="none">
        <path d="M9 16h14M16 9v14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </span>
  );
}

function LargeIcon({ type }: { type: string }) {
  const common = {
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  return (
    <svg aria-hidden="true" className="size-8" viewBox="0 0 32 32" fill="none">
      {type === "kickoff" ? (
        <>
          <path d="M12 16a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm-8 9c1-5 4-7 8-7s7 2 8 7" {...common} />
          <path d="M23 15a4 4 0 1 0-1.5-7.7M22 19c3 .4 5.2 2.3 6 6" {...common} />
        </>
      ) : type === "strategy" ? (
        <path d="M16 27a11 11 0 1 0-11-11 11 11 0 0 0 11 11Zm0-5a6 6 0 1 0-6-6 6 6 0 0 0 6 6Zm7-15 4-2-2 4-5 5" {...common} />
      ) : type === "launch" ? (
        <path d="M18 4 9 18l6-1-1 11 9-15-6 1 1-10Z" {...common} />
      ) : (
        <path d="M6 12a8 8 0 0 1 8-8h4a8 8 0 0 1 0 16h-2l-6 6v-7a8 8 0 0 1-4-7Z" {...common} />
      )}
    </svg>
  );
}

function SmallIcon({ type }: { type: string }) {
  const common = {
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  return (
    <svg aria-hidden="true" className="size-6" viewBox="0 0 32 32" fill="none">
      {type === "doc" ? (
        <path d="M10 5h9l5 5v17H10V5Zm9 0v6h5M14 16h6m-6 5h8" {...common} />
      ) : type === "search" ? (
        <path d="M14 22a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm6-2 6 6" {...common} />
      ) : (
        <path d="M11 6 8 9c0 8 7 15 15 15l3-3-5-5-3 3c-2-1-4-3-5-5l3-3-5-5Z" {...common} />
      )}
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg aria-hidden="true" className="size-4" viewBox="0 0 16 16" fill="none">
      <path d="m3 8 3 3 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
