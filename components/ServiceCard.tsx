type ServiceCardProps = {
  title: string;
  description: string;
  includes?: string[];
  index?: number;
  dark?: boolean;
};

export function ServiceCard({
  title,
  description,
  includes = [],
  index,
  dark = false,
}: ServiceCardProps) {
  return (
    <article
      className={`rounded-sm border p-6 sm:p-7 ${
        dark
          ? "border-white/14 bg-white/[0.055] text-white"
          : "border-[#050505]/12 bg-white text-[#050505] shadow-[0_18px_45px_rgba(5,5,5,0.06)]"
      }`}
    >
      {index !== undefined && (
        <p className={`text-sm font-black ${dark ? "text-[#88DE7B]" : "text-[#164E50]"}`}>
          {String(index + 1).padStart(2, "0")}
        </p>
      )}
      <h3 className="mt-7 text-2xl font-black tracking-normal">{title}</h3>
      <p className={`mt-4 text-base leading-7 ${dark ? "text-white/72" : "text-[#4b4b4b]"}`}>
        {description}
      </p>
      {includes.length > 0 && (
        <ul className="mt-7 space-y-3">
          {includes.map((item) => (
            <li key={item} className="flex gap-3 text-sm font-semibold">
              <span className={`mt-1.5 size-2 shrink-0 rounded-full ${dark ? "bg-[#88DE7B]" : "bg-[#164E50]"}`} />
              <span className={dark ? "text-white/82" : "text-[#050505]/78"}>{item}</span>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}
