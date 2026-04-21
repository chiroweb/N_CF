"use client";

import { useEffect, useState } from "react";

export type NavSection = { id: string; label: string };

/**
 * Vertical floating section nav shown on large desktops (xl+).
 * Auto-highlights the currently visible section via IntersectionObserver
 * and scrolls on click. Uses mix-blend-difference so labels stay legible
 * across paper and ink sections.
 */
export default function FloatingSectionNav({ sections }: { sections: NavSection[] }) {
  const [active, setActive] = useState<string>(sections[0]?.id ?? "");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
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

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 72;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <nav
      aria-label="Page sections"
      className="fixed right-[calc(var(--edge-margin)+12px)] top-1/2 -translate-y-1/2 z-30 hidden xl:flex flex-col gap-3 pointer-events-auto mix-blend-difference"
    >
      {sections.map((s) => {
        const isActive = active === s.id;
        return (
          <button
            key={s.id}
            type="button"
            onClick={() => scrollTo(s.id)}
            aria-label={`Jump to ${s.label}`}
            className="group flex items-center justify-end gap-3"
          >
            <span
              className={`caption-style transition-all duration-300 text-paper whitespace-nowrap ${
                isActive
                  ? "opacity-100"
                  : "opacity-0 group-hover:opacity-80"
              }`}
            >
              {s.label}
            </span>
            <span
              className={`block h-px bg-paper transition-all duration-300 ${
                isActive
                  ? "w-12 opacity-100"
                  : "w-4 opacity-40 group-hover:w-8 group-hover:opacity-80"
              }`}
            />
          </button>
        );
      })}
    </nav>
  );
}
