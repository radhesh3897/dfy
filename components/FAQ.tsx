import type { Faq } from "@/lib/schema";

type FAQProps = {
  faqs: Faq[];
};

export function FAQ({ faqs }: FAQProps) {
  return (
    <div className="divide-y divide-[#050505]/12 border-y border-[#050505]/12">
      {faqs.map((faq) => (
        <details key={faq.question} className="group py-6">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-xl font-bold">
            {faq.question}
            <span className="text-3xl font-light text-[#164E50] transition group-open:rotate-45">+</span>
          </summary>
          <p className="mt-4 max-w-3xl text-sm leading-6 text-neutral-650">{faq.answer}</p>
        </details>
      ))}
    </div>
  );
}
