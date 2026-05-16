type ComparisonBlockProps = {
  leftTitle: string;
  rightTitle: string;
  leftItems: string[];
  rightItems: string[];
};

export function ComparisonBlock({
  leftTitle,
  rightTitle,
  leftItems,
  rightItems,
}: ComparisonBlockProps) {
  return (
    <div className="grid overflow-hidden rounded-sm border border-[#050505]/12 bg-white shadow-[0_18px_45px_rgba(5,5,5,0.06)] lg:grid-cols-2">
      <article className="border-b border-[#050505]/12 p-7 lg:border-b-0 lg:border-r">
        <p className="eyebrow eyebrow-default">Cost trap</p>
        <h3 className="mt-4 text-4xl font-black tracking-normal">{leftTitle}</h3>
        <ul className="mt-8 space-y-4">
          {leftItems.map((item) => (
            <li key={item} className="flex gap-3 text-base leading-7 text-[#4b4b4b]">
              <span className="mt-2.5 h-px w-5 shrink-0 bg-[#050505]/35" />
              {item}
            </li>
          ))}
        </ul>
      </article>
      <article className="bg-[#164E50] p-7 text-white">
        <p className="eyebrow eyebrow-accent">Quality signal</p>
        <h3 className="mt-4 text-4xl font-black tracking-normal">{rightTitle}</h3>
        <ul className="mt-8 space-y-4">
          {rightItems.map((item) => (
            <li key={item} className="flex gap-3 text-base leading-7 text-white/78">
              <span className="mt-2 size-2 shrink-0 rounded-full bg-[#88DE7B]" />
              {item}
            </li>
          ))}
        </ul>
      </article>
    </div>
  );
}
