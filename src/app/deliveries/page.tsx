"use client";

import { useEffect, useMemo, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { AFTERBURNER_BRAND_COMBOS } from "@/lib/deliveries";
import FloatingSectionNav, { type NavSection } from "@/components/layout/FloatingSectionNav";
import Link from "next/link";

const SECTIONS: NavSection[] = [
  { id: "overview", label: "OVERVIEW" },
  { id: "filter", label: "CATEGORY" },
  { id: "brands", label: "BY BRAND" },
  { id: "contact", label: "CONTACT" },
];

const FILTERS = [
  { id: "afterburner", label: "AFTERBURNER", active: true },
  { id: "installations-2025", label: "2025 설치현황", active: false },
  { id: "nutbutter", label: "넛츠스타", active: false },
];

export default function DeliveriesPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  const grouped = useMemo(() => {
    const map = new Map<string, typeof AFTERBURNER_BRAND_COMBOS>();
    for (const r of AFTERBURNER_BRAND_COMBOS) {
      if (!map.has(r.brand)) map.set(r.brand, []);
      map.get(r.brand)!.push(r);
    }
    return Array.from(map.entries()).sort((a, b) => b[1].length - a[1].length);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const heroEls = pageRef.current?.querySelectorAll(".hero-fade");
      if (heroEls) {
        gsap.fromTo(
          heroEls,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.12, ease: "power3.out" }
        );
      }

      const fadeEls = pageRef.current?.querySelectorAll(".scroll-fade");
      if (fadeEls) {
        fadeEls.forEach((el) => {
          gsap.fromTo(
            el,
            { opacity: 0, y: 25 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: "power2.out",
              scrollTrigger: {
                trigger: el,
                start: "top 90%",
                toggleActions: "play none none none",
              },
            }
          );
        });
      }
    }, pageRef);

    return () => ctx.revert();
  }, []);

  const totalUnits = AFTERBURNER_BRAND_COMBOS.length;
  const brandCount = grouped.length;

  return (
    <div ref={pageRef} className="bg-paper min-h-screen">
      <FloatingSectionNav sections={SECTIONS} />

      {/* ── Masthead ── */}
      <section id="overview" className="container-content pt-24 lg:pt-32 pb-12">
        <div className="flex items-end justify-between gap-6 mb-10">
          <div>
            <span className="hero-fade caption-style text-ink/90 block mb-6 opacity-0">
              DELIVERY RECORDS / 납품 실적
            </span>
            <h1 className="hero-fade font-display font-bold text-[clamp(3rem,9vw,8rem)] text-ink leading-[0.88] tracking-[-0.04em] opacity-0">
              EVERY
              <br />
              ROASTER.
              <br />
              EVERY BRAND.
            </h1>
          </div>
          <p className="hero-fade hidden md:block caption-style text-ink/90 text-right leading-relaxed max-w-[26ch] opacity-0">
            AFTERBURNER COMBINED WITH
            <br />
            COFFEE ROASTING MACHINES,
            <br />
            EVERY MAJOR BRAND WORLDWIDE.
          </p>
        </div>

        <p className="hero-fade text-body-kr font-korean text-ink/90 leading-[1.75] max-w-2xl opacity-0">
          엔비피코리아 애프터버너는 PROBAT · GIESEN · LORING · FUJI ROYAL ·
          BUHLER · OZTURK · HASGARANTI · DIEDRICH · TOPER · JOPER · EASYSTER ·
          PROASTER · BEANMASTER 등 국내외 주요 로스팅기 브랜드와 결합되어
          운용되고 있습니다. 아래는 2024년 10월 기준 집계된 현장 기록입니다.
        </p>
      </section>

      {/* ── Filter row ── */}
      <section id="filter" className="container-content pb-10">
        <div className="scroll-fade flex items-center gap-3 flex-wrap border-t-2 border-ink pt-6 opacity-0">
          <span className="caption-style text-ink/90 mr-2">CATEGORY</span>
          {FILTERS.map((f) => (
            <button
              key={f.id}
              type="button"
              disabled={!f.active}
              className={`px-5 py-2 text-xs font-bold tracking-[0.08em] uppercase rounded-full border-2 transition-colors ${
                f.active
                  ? "bg-ink text-paper border-ink"
                  : "border-bone text-ink/70 cursor-not-allowed"
              }`}
            >
              {f.label}
              {!f.active && <span className="ml-2 text-ink/60">· SOON</span>}
            </button>
          ))}
        </div>
      </section>

      {/* ── Stats strip ── */}
      <section className="container-content pb-20">
        <div className="scroll-fade grid grid-cols-2 md:grid-cols-4 border-t border-ink/15 border-b border-ink/15 opacity-0">
          <Stat label="COMBINED UNITS" value={String(totalUnits).padStart(3, "0")} />
          <Stat label="ROASTER BRANDS" value={String(brandCount).padStart(2, "0")} />
          <Stat label="COMPILED" value="2024.10" />
          <Stat label="CATEGORY" value="AFTERBURNER" />
        </div>
      </section>

      {/* ── Brand-grouped list ── */}
      <section id="brands" className="container-content pb-24">
        <div className="scroll-fade flex items-baseline justify-between border-t-2 border-ink pt-6 mb-12 opacity-0">
          <span className="caption-style text-ink/90">
            ROASTER × AFTERBURNER · BY BRAND
          </span>
          <span className="caption-style text-ink/80">
            {String(totalUnits).padStart(3, "0")} UNITS · {String(brandCount).padStart(2, "0")} BRANDS
          </span>
        </div>

        <div className="space-y-20 lg:space-y-28">
          {grouped.map(([brand, items]) => (
            <div key={brand} className="scroll-fade opacity-0">
              {/* Brand header */}
              <div className="flex items-end justify-between gap-6 mb-6 pb-4 border-b border-ink/20">
                <div>
                  <span className="caption-style text-ink/90 block mb-2">
                    ROASTER BRAND
                  </span>
                  <h3 className="font-display font-bold text-[clamp(2rem,5vw,4rem)] text-ink leading-[0.92] tracking-[-0.03em]">
                    {brand}
                  </h3>
                </div>
                <span className="caption-style text-ink/90 pb-2 shrink-0">
                  {String(items.length).padStart(2, "0")} UNIT
                  {items.length > 1 ? "S" : ""}
                </span>
              </div>

              {/* Entries table — header */}
              <div className="hidden md:grid grid-cols-[2.2fr_auto_auto_auto] gap-6 py-3 border-b border-ink/10">
                <span className="caption-style text-ink/80">COMPANY</span>
                <span className="caption-style text-ink/80 text-right">ROASTER</span>
                <span className="caption-style text-ink/80 text-right">AFTERBURNER</span>
                <span className="caption-style text-ink/80 text-right">LOCATION</span>
              </div>

              <div className="divide-y divide-ink/10">
                {items.map((r, i) => (
                  <article
                    key={`${brand}-${i}`}
                    className="grid grid-cols-1 md:grid-cols-[2.2fr_auto_auto_auto] gap-2 md:gap-6 py-4"
                  >
                    <p className="font-display font-bold text-[clamp(1rem,1.4vw,1.2rem)] text-ink tracking-tight leading-[1.3]">
                      {r.company}
                    </p>
                    <p className="caption-style text-ink/90 md:text-right">
                      R · {r.roastKg}Kg
                    </p>
                    <p className="caption-style text-ink/90 md:text-right">
                      AB · {r.burnerKg}Kg
                    </p>
                    <p className="caption-style text-ink/85 md:text-right shrink-0">
                      {r.location}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Closing ── */}
      <section id="contact" className="bg-ink py-24 lg:py-32">
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] items-end gap-10">
            <div>
              <span className="scroll-fade caption-style text-paper/90 block mb-6 opacity-0">
                NEXT ON THE LIST · YOURS
              </span>
              <h2 className="scroll-fade font-display font-bold text-[clamp(2rem,5vw,4rem)] text-paper leading-[0.95] tracking-[-0.03em] opacity-0">
                YOUR ROASTER
                <br />
                BELONGS HERE.
              </h2>
              <p className="scroll-fade text-body-kr font-korean text-paper/90 leading-[1.75] mt-6 max-w-md opacity-0">
                어떤 브랜드의 로스팅기든, 어떤 용량이든 애프터버너는 현장에 맞춰
                제작됩니다. 다음 기록의 첫 줄이 당신의 매장이길 바랍니다.
              </p>
            </div>
            <div className="scroll-fade opacity-0">
              <Link
                href="/contact"
                className="btn-pill bg-paper text-ink hover:bg-ink hover:text-paper border-2 border-paper transition-all duration-200 rounded-lg"
              >
                REQUEST A QUOTE &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="px-0 md:px-6 py-6 border-r border-ink/10 last:border-r-0 [&:nth-child(2n)]:md:border-r md:[&:nth-child(2n)]:border-r-ink/10 [&:nth-child(2)]:border-r-0 [&:nth-child(2)]:md:border-r">
      <span className="caption-style text-ink/90 block mb-2">{label}</span>
      <span className="font-display font-bold text-[clamp(1.6rem,2.8vw,2.25rem)] text-ink tracking-tight leading-[1]">
        {value}
      </span>
    </div>
  );
}
