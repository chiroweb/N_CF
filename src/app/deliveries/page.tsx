"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { gsap } from "@/lib/gsap";
import {
  UNIFIED_DELIVERIES,
  UNIFIED_STATS,
  ROASTER_BRANDS,
  REGIONS,
  CAPACITY_BUCKETS,
  type UnifiedDelivery,
  type Source,
} from "@/lib/unified-deliveries";
import { INSTALLATIONS_2025_SUMMARY } from "@/lib/installations-2025";
import FloatingSectionNav, {
  type NavSection,
} from "@/components/layout/FloatingSectionNav";

const SECTIONS: NavSection[] = [
  { id: "overview", label: "OVERVIEW" },
  { id: "filter", label: "FILTER" },
  { id: "records", label: "RECORDS" },
  { id: "overseas", label: "OVERSEAS" },
  { id: "contact", label: "CONTACT" },
];

const REGION_SHORT: Record<string, string> = {
  서울특별시: "서울",
  경기도: "경기",
  대구광역시: "대구",
  부산광역시: "부산",
  인천광역시: "인천",
  대전광역시: "대전",
  광주광역시: "광주",
  울산광역시: "울산",
  세종특별자치시: "세종",
  제주특별자치도: "제주",
  충청북도: "충북",
  충청남도: "충남",
  전라북도: "전북",
  전라남도: "전남",
  경상북도: "경북",
  경상남도: "경남",
  해외: "해외",
};

function regionTrail(r: UnifiedDelivery): string {
  const parts = [r.region, r.district, r.neighborhood].filter(Boolean);
  return parts.join(" · ");
}

function sourceLabel(sources: Source[]): string {
  if (sources.length === 2) return "2024 · 2025";
  return sources[0];
}

function capacityTier(raw: string): "xl" | "large" | "mid" | "small" {
  const n = parseFloat(raw);
  if (!Number.isFinite(n)) return "small";
  if (n >= 50) return "xl";
  if (n >= 20) return "large";
  if (n >= 6) return "mid";
  return "small";
}

export default function DeliveriesPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  const [selRegions, setSelRegions] = useState<Set<string>>(new Set());
  const [selBrands, setSelBrands] = useState<Set<string>>(new Set());
  const [selCaps, setSelCaps] = useState<Set<string>>(new Set());

  const toggle = (
    set: Set<string>,
    val: string,
    setter: (s: Set<string>) => void
  ) => {
    const next = new Set(set);
    if (next.has(val)) next.delete(val);
    else next.add(val);
    setter(next);
  };
  const clearAll = () => {
    setSelRegions(new Set());
    setSelBrands(new Set());
    setSelCaps(new Set());
  };
  const hasFilter =
    selRegions.size > 0 || selBrands.size > 0 || selCaps.size > 0;

  const domesticRecords = useMemo(
    () => UNIFIED_DELIVERIES.filter((r) => r.country === "KR"),
    []
  );
  const overseasNamed = useMemo(
    () => UNIFIED_DELIVERIES.filter((r) => r.country !== "KR"),
    []
  );

  const filteredDomestic = useMemo(() => {
    return domesticRecords.filter((r) => {
      if (selRegions.size && !selRegions.has(r.region)) return false;
      if (selBrands.size) {
        if (!r.roasterBrand || !selBrands.has(r.roasterBrand)) return false;
      }
      if (selCaps.size) {
        const bucket = CAPACITY_BUCKETS.find((b) => b.match(r.burnerKg));
        if (!bucket || !selCaps.has(bucket.id)) return false;
      }
      return true;
    });
  }, [domesticRecords, selRegions, selBrands, selCaps]);

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
      const sectionEls = pageRef.current?.querySelectorAll(".scroll-fade");
      if (sectionEls) {
        sectionEls.forEach((el) => {
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

  return (
    <div ref={pageRef} className="bg-paper min-h-screen">
      <FloatingSectionNav sections={SECTIONS} />

      {/* ───────── OVERVIEW ───────── */}
      <section id="overview" className="container-content pt-24 lg:pt-32 pb-16">
        <div className="mb-16 lg:mb-24">
          <span className="hero-fade caption-style text-ink/90 block mb-6 opacity-0">
            DELIVERY LEDGER · 2024 — 2025
          </span>
          <h1 className="hero-fade font-display font-bold text-[clamp(3rem,9vw,8rem)] text-ink leading-[0.88] tracking-[-0.04em] opacity-0">
            EVERY
          </h1>
          <h1 className="hero-fade font-display font-bold text-[clamp(3rem,9vw,8rem)] text-ink leading-[0.88] tracking-[-0.04em] pl-[6vw] opacity-0">
            ROASTER.
          </h1>
          <h1 className="hero-fade font-display font-bold text-[clamp(3rem,9vw,8rem)] text-ink leading-[0.88] tracking-[-0.04em] pl-[18vw] opacity-0">
            EVERY KG.
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-20 items-start">
          <p className="hero-fade text-body-kr font-korean text-ink/90 leading-[1.75] max-w-2xl opacity-0">
            엔비피코리아 애프터버너는 2024년과 2025년에 걸쳐 국내 16개 광역과
            해외 7개국, {UNIFIED_STATS.roasterBrandCount}개 로스터기 브랜드와
            결합되어 {UNIFIED_STATS.total}건의 현장 기록을 남겼습니다. 같은
            상호가 두 해에 걸쳐 등장한 70건은 양쪽 기록을 모두 담습니다.
          </p>
          <p className="hero-fade caption-style text-ink/80 leading-relaxed max-w-[32ch] opacity-0 lg:text-right">
            2024 SOURCE — ROASTER × AFTERBURNER LEDGER
            <br />
            2025 SOURCE — INSTALLATION ATLAS (DISTRICT · NEIGHBORHOOD)
            <br />
            MERGED ON COMPANY + REGION + CAPACITY
          </p>
        </div>

        {/* Stats strip */}
        <div className="scroll-fade grid grid-cols-2 md:grid-cols-4 border-t-2 border-b border-ink mt-16 opacity-0">
          <Stat label="COMBINED UNITS" value={String(UNIFIED_STATS.total).padStart(3, "0")} />
          <Stat label="ROASTER BRANDS" value={String(UNIFIED_STATS.roasterBrandCount).padStart(2, "0")} />
          <Stat label="DOMESTIC REGIONS" value="16" />
          <Stat label="OVERSEAS COUNTRIES" value="07" />
        </div>
      </section>

      {/* ───────── FILTER ───────── */}
      <section id="filter" className="container-content pb-16">
        <div className="scroll-fade border-t-2 border-ink pt-6 opacity-0">
          <div className="flex items-baseline justify-between gap-4 mb-6">
            <span className="caption-style text-ink/90">
              FILTER · MULTI-SELECT · AND
            </span>
            {hasFilter ? (
              <button
                type="button"
                onClick={clearAll}
                className="caption-style text-ink hover:underline"
              >
                CLEAR ALL
              </button>
            ) : (
              <span className="caption-style text-ink/60">
                {UNIFIED_STATS.total} RECORDS
              </span>
            )}
          </div>

          <div className="space-y-5">
            <FilterRow
              label="REGION"
              values={REGIONS.map((r) => ({ id: r, label: REGION_SHORT[r] || r }))}
              selected={selRegions}
              onToggle={(v) => toggle(selRegions, v, setSelRegions)}
            />
            <FilterRow
              label="BRAND"
              values={ROASTER_BRANDS.map((b) => ({ id: b, label: b }))}
              selected={selBrands}
              onToggle={(v) => toggle(selBrands, v, setSelBrands)}
            />
            <FilterRow
              label="CAPACITY"
              values={CAPACITY_BUCKETS.map((b) => ({ id: b.id, label: b.label }))}
              selected={selCaps}
              onToggle={(v) => toggle(selCaps, v, setSelCaps)}
            />
          </div>
        </div>
      </section>

      {/* ───────── RECORDS ───────── */}
      <section id="records" className="container-content pb-24">
        <div className="scroll-fade flex items-baseline justify-between border-t-2 border-ink pt-6 mb-10 opacity-0">
          <span className="caption-style text-ink/90">
            DOMESTIC RECORDS · SORTED BY CAPACITY
          </span>
          <span className="caption-style text-ink/80">
            {String(filteredDomestic.length).padStart(3, "0")} OF{" "}
            {String(domesticRecords.length).padStart(3, "0")}
          </span>
        </div>

        {filteredDomestic.length === 0 ? (
          <p className="text-body-kr font-korean text-ink/60 py-20 text-center">
            선택한 조건에 해당하는 기록이 없습니다. 필터를 조정해 주세요.
          </p>
        ) : (
          <div className="columns-1 md:columns-2 lg:columns-3 gap-x-10 lg:gap-x-14">
            {filteredDomestic.map((r) => (
              <RecordCard key={r.id} r={r} />
            ))}
          </div>
        )}
      </section>

      {/* ───────── OVERSEAS ───────── */}
      <section id="overseas" className="bg-bone py-24 lg:py-32">
        <div className="container-content">
          <div className="scroll-fade mb-12 opacity-0">
            <span className="caption-style text-ink/90 block mb-6">
              OVERSEAS · 2025 CUMULATIVE · 36 UNITS
            </span>
            <h2 className="font-display font-bold text-[clamp(2.5rem,6vw,5rem)] text-ink leading-[0.92] tracking-[-0.03em]">
              ASIA,
              <br />
              AND THE GULF.
            </h2>
          </div>

          <div className="scroll-fade grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10 border-t border-ink/30 pt-8 opacity-0">
            {INSTALLATIONS_2025_SUMMARY.overseasBreakdown.map((o) => (
              <div key={o.code}>
                <span className="caption-style text-ink/90 block mb-2">
                  {o.country.toUpperCase()}
                </span>
                <span className="font-display font-bold text-[clamp(1.8rem,3vw,2.8rem)] text-ink leading-[1] tracking-tight block">
                  {String(o.count).padStart(2, "0")}
                </span>
                <span className="caption-style text-ink/75 block mt-2">
                  {o.sharePct}% OF OVERSEAS
                </span>
              </div>
            ))}
          </div>

          {overseasNamed.length > 0 && (
            <div className="mt-20">
              <div className="scroll-fade flex items-baseline justify-between border-t border-ink/30 pt-6 mb-8 opacity-0">
                <span className="caption-style text-ink/90">
                  NAMED ACCOUNTS · 2024 LEDGER
                </span>
                <span className="caption-style text-ink/75">
                  {overseasNamed.length} RECORDS
                </span>
              </div>
              <div className="columns-1 md:columns-2 gap-x-10">
                {overseasNamed.map((r) => (
                  <RecordCard key={r.id} r={r} dim />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ───────── CONTACT ───────── */}
      <section id="contact" className="bg-ink py-24 lg:py-32">
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] items-end gap-10">
            <div>
              <span className="scroll-fade caption-style text-paper/90 block mb-6 opacity-0">
                NEXT ON THE LEDGER · YOURS
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

// ──────────────────────────────────────────────────────────────────
function FilterRow({
  label,
  values,
  selected,
  onToggle,
}: {
  label: string;
  values: { id: string; label: string }[];
  selected: Set<string>;
  onToggle: (v: string) => void;
}) {
  return (
    <div className="flex items-start gap-4 flex-wrap md:flex-nowrap">
      <span className="caption-style text-ink/80 shrink-0 pt-1.5 md:w-[100px]">
        {label}
      </span>
      <div className="flex flex-wrap gap-2">
        {values.map((v) => {
          const active = selected.has(v.id);
          return (
            <button
              key={v.id}
              type="button"
              onClick={() => onToggle(v.id)}
              className={`px-3 py-1.5 text-[0.7rem] font-bold tracking-[0.08em] uppercase rounded-full border transition-colors ${
                active
                  ? "bg-ink text-paper border-ink"
                  : "border-ink/25 text-ink/75 hover:border-ink/60"
              }`}
            >
              {v.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ──────────────────────────────────────────────────────────────────
function RecordCard({ r, dim = false }: { r: UnifiedDelivery; dim?: boolean }) {
  const tier = capacityTier(r.burnerKg);
  const companySize =
    tier === "xl"
      ? "text-[clamp(1.4rem,2.2vw,2rem)]"
      : tier === "large"
        ? "text-[clamp(1.15rem,1.6vw,1.5rem)]"
        : "text-[clamp(1rem,1.3vw,1.2rem)]";
  const hasCapacity = r.burnerKg && r.burnerKg !== "?";
  const tone = dim ? "text-ink/85" : "text-ink";

  return (
    <article className="break-inside-avoid pt-5 pb-6 border-t border-ink/20 mb-1">
      <div className="flex items-start justify-between gap-3 mb-3">
        <span className="caption-style text-ink/75">{regionTrail(r)}</span>
        <span className="caption-style text-ink/55 shrink-0">
          {sourceLabel(r.sources)}
        </span>
      </div>

      <h3
        className={`font-display font-bold ${tone} tracking-tight leading-[1.15] mb-4 ${companySize}`}
      >
        {r.company}
      </h3>

      <div className="flex items-end justify-between gap-3">
        <div className="flex flex-col gap-0.5 min-w-0">
          {r.roasterBrand && (
            <span className="caption-style text-ink/90">
              ROASTER · {r.roasterBrand}
            </span>
          )}
          {!r.roasterBrand && r.storeBrand && (
            <span className="caption-style text-ink/75 truncate max-w-[18ch]">
              BRAND · {r.storeBrand}
            </span>
          )}
          {r.roastKg && (
            <span className="caption-style text-ink/70">
              R · {r.roastKg}Kg
            </span>
          )}
        </div>

        {hasCapacity ? (
          <div className="text-right shrink-0">
            <span className="font-display font-bold text-[clamp(1.3rem,2vw,1.75rem)] text-ink leading-[1] tracking-tight">
              {r.burnerKg}
              <span className="text-ink/65 text-[0.55em] ml-0.5 align-baseline">
                Kg
              </span>
            </span>
            <span className="caption-style text-ink/70 block mt-1">
              AFTERBURNER
            </span>
          </div>
        ) : (
          <span className="caption-style text-ink/55 shrink-0">
            SPEC N / A
          </span>
        )}
      </div>
    </article>
  );
}

// ──────────────────────────────────────────────────────────────────
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
