import type { LabFaqCategory } from "@/lib/nutbutter";

// /the-lab 본문과 /the-lab/faq에서 공유하는 FAQ 아코디언.
// animated=true면 GSAP scroll-fade 훅(.scroll-fade + opacity-0)을 붙인다.
// GSAP이 없는 정적 페이지(/the-lab/faq)에서는 false로 둬야 항목이 보인다.
export default function FaqAccordion({
  categories,
  animated = false,
}: {
  categories: LabFaqCategory[];
  animated?: boolean;
}) {
  return (
    <div className="space-y-12">
      {categories.map((cat) => (
        <div key={cat.id} className={animated ? "scroll-fade opacity-0" : undefined}>
          <h3 className="caption-style text-ink/90 mb-4 font-korean">
            {cat.label}
          </h3>
          <ul className="border-t border-ink">
            {cat.items.map((item, i) => (
              <li key={i} className="border-b border-ink/15">
                <details className="group">
                  <summary className="flex items-start justify-between gap-6 py-5 cursor-pointer list-none">
                    <span className="text-body-kr font-korean text-ink leading-[1.6]">
                      {item.q}
                    </span>
                    <span className="font-display font-bold text-ink shrink-0 mt-1 transition-transform duration-200 group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="text-body-kr font-korean text-ink/80 leading-[1.75] pb-6 pr-12">
                    {item.a}
                  </p>
                </details>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
