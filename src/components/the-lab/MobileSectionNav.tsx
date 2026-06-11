"use client";

import { useEffect, useRef, useState } from "react";
import type { NavSection } from "@/components/layout/FloatingSectionNav";

// 모바일·태블릿용 가로 스크롤 sticky 섹션 내비 (xl 미만에서만 표시).
// 데스크톱은 FloatingSectionNav(세로)가 담당한다.
export default function MobileSectionNav({ sections }: { sections: NavSection[] }) {
  const [active, setActive] = useState<string>(sections[0]?.id ?? "");
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
    );

    const observed: Element[] = [];
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) {
        observer.observe(el);
        observed.push(el);
      }
    });

    return () => {
      observed.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, [sections]);

  // 활성 칩을 가로 스크롤 뷰 안으로 당겨온다.
  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;
    const el = bar.querySelector<HTMLElement>(`[data-chip="${active}"]`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    }
  }, [active]);

  return (
    <nav className="xl:hidden sticky top-0 z-30 bg-paper/95 backdrop-blur-sm border-b-2 border-ink">
      <div
        ref={barRef}
        className="container-content flex gap-2 overflow-x-auto py-3 no-scrollbar"
      >
        {sections.map((s) => {
          const on = active === s.id;
          return (
            <a
              key={s.id}
              href={`#${s.id}`}
              data-chip={s.id}
              className={`shrink-0 caption-style font-korean px-3.5 py-1.5 border-2 rounded-full transition-colors ${
                on
                  ? "bg-ink text-paper border-ink"
                  : "bg-paper text-ink/70 border-ink/25"
              }`}
            >
              {s.label}
            </a>
          );
        })}
      </div>
    </nav>
  );
}
