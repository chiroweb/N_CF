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
import {
  NUTSTAR_DELIVERIES,
  NUTSTAR_SUMMARY,
  type NutstarDelivery,
} from "@/lib/nutstar-deliveries";
import FloatingSectionNav, { type NavSection } from "@/components/layout/FloatingSectionNav";

type ProductTab = "afterburner" | "nutstar";

const AFTERBURNER_SECTIONS: NavSection[] = [
  { id: "overview", label: "OVERVIEW" },
  { id: "filter", label: "FILTER" },
  { id: "records", label: "RECORDS" },
  { id: "overseas", label: "OVERSEAS" },
  { id: "contact", label: "CONTACT" },
];

const NUTSTAR_SECTIONS: NavSection[] = [
  { id: "overview", label: "OVERVIEW" },
  { id: "records", label: "RECORDS" },
  { id: "contact", label: "CONTACT" },
];

const REGION_EN: Record<string, string> = {
  서울특별시: "Seoul",
  경기도: "Gyeonggi",
  대구광역시: "Daegu",
  부산광역시: "Busan",
  인천광역시: "Incheon",
  대전광역시: "Daejeon",
  광주광역시: "Gwangju",
  울산광역시: "Ulsan",
  세종특별자치시: "Sejong",
  제주특별자치도: "Jeju",
  충청북도: "Chungbuk",
  충청남도: "Chungnam",
  전라북도: "Jeonbuk",
  전라남도: "Jeonnam",
  경상북도: "Gyeongbuk",
  경상남도: "Gyeongnam",
  해외: "Overseas",
};

function regionLabel(r: string) {
  return REGION_EN[r] ?? r;
}

function regionTrail(r: UnifiedDelivery): string {
  const parts = [regionLabel(r.region), r.district, r.neighborhood].filter(Boolean);
  return parts.join(" · ");
}

function nutstarTrail(r: NutstarDelivery): string {
  const parts = [regionLabel(r.region), r.district, r.neighborhood].filter(Boolean);
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

export default function DeliveriesEnPage() {
  const pageRef = useRef<HTMLDivElement>(null);
  const [product, setProduct] = useState<ProductTab>("afterburner");
  const [selRegions, setSelRegions] = useState<Set<string>>(new Set());
  const [selBrands, setSelBrands] = useState<Set<string>>(new Set());
  const [selCaps, setSelCaps] = useState<Set<string>>(new Set());

  const toggle = (set: Set<string>, v: string, setter: (s: Set<string>) => void) => {
    const next = new Set(set);
    if (next.has(v)) next.delete(v); else next.add(v);
    setter(next);
  };
  const clearAll = () => { setSelRegions(new Set()); setSelBrands(new Set()); setSelCaps(new Set()); };
  const hasFilter = selRegions.size > 0 || selBrands.size > 0 || selCaps.size > 0;

  const domestic = useMemo(() => UNIFIED_DELIVERIES.filter((r) => r.country === "KR"), []);
  const overseas = useMemo(() => UNIFIED_DELIVERIES.filter((r) => r.country !== "KR"), []);
  const filtered = useMemo(() => {
    return domestic.filter((r) => {
      if (selRegions.size && !selRegions.has(r.region)) return false;
      if (selBrands.size && (!r.roasterBrand || !selBrands.has(r.roasterBrand))) return false;
      if (selCaps.size) {
        const b = CAPACITY_BUCKETS.find((x) => x.match(r.burnerKg));
        if (!b || !selCaps.has(b.id)) return false;
      }
      return true;
    });
  }, [domestic, selRegions, selBrands, selCaps]);

  const nutDelivered = useMemo(() => NUTSTAR_DELIVERIES.filter((r) => r.status === "delivered"), []);
  const nutPending = useMemo(() => NUTSTAR_DELIVERIES.filter((r) => r.status === "pending"), []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const heroEls = pageRef.current?.querySelectorAll(".hero-fade");
      if (heroEls) gsap.fromTo(heroEls, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.12, ease: "power3.out" });
      const fadeEls = pageRef.current?.querySelectorAll(".scroll-fade");
      if (fadeEls) fadeEls.forEach((el) => gsap.fromTo(el, { opacity: 0, y: 25 }, {
        opacity: 1, y: 0, duration: 0.6, ease: "power2.out",
        scrollTrigger: { trigger: el, start: "top 90%", toggleActions: "play none none none" },
      }));
    }, pageRef);
    return () => ctx.revert();
  }, [product]);

  const sections = product === "afterburner" ? AFTERBURNER_SECTIONS : NUTSTAR_SECTIONS;

  return (
    <div ref={pageRef} className="bg-paper min-h-screen">
      <FloatingSectionNav sections={sections} />

      <div className="container-content pt-20 lg:pt-28">
        <div role="tablist" aria-label="Product line" className="flex flex-wrap items-baseline gap-6 md:gap-10 border-b border-ink/25 pb-4">
          <span className="caption-style text-ink/60 mr-auto">PRODUCT LINE</span>
          <ProductTabButton active={product === "afterburner"} label="AFTERBURNER" sub="Roaster Ledger · 2024—2025" onClick={() => setProduct("afterburner")} />
          <ProductTabButton active={product === "nutstar"} label="NUT BUTTER MACHINE" sub="NUTSTAR · 2025—2026" onClick={() => setProduct("nutstar")} />
        </div>
      </div>

      {product === "afterburner" ? (
        <>
          <section id="overview" className="container-content pt-16 lg:pt-20 pb-16">
            <div className="mb-16 lg:mb-24">
              <span className="hero-fade caption-style text-ink/90 block mb-6 opacity-0">DELIVERY LEDGER · 2024 — 2025</span>
              <h1 className="m-0 font-display font-bold text-[clamp(3rem,9vw,8rem)] text-ink leading-[0.88] tracking-[-0.04em]">
                <span className="hero-fade block opacity-0">EVERY</span>
                <span className="hero-fade block pl-[6vw] opacity-0">ROASTER.</span>
                <span className="hero-fade block pl-[18vw] opacity-0">EVERY KG.</span>
              </h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-20 items-start">
              <p className="hero-fade text-[clamp(1rem,1.25vw,1.2rem)] text-ink/90 leading-[1.7] max-w-2xl opacity-0">
                Across 2024 and 2025, NBPKOREA afterburners shipped to 16 Korean
                regions and 7 overseas countries, paired with {UNIFIED_STATS.roasterBrandCount}
                {" "}roaster brands. {UNIFIED_STATS.total} field records in all, including
                70 customers that appeared in both years&apos; ledgers.
              </p>
              <p className="hero-fade caption-style text-ink/80 leading-relaxed max-w-[32ch] opacity-0 lg:text-right">
                2024 SOURCE — ROASTER × AFTERBURNER LEDGER
                <br />
                2025 SOURCE — INSTALLATION ATLAS (DISTRICT · NEIGHBORHOOD)
                <br />
                MERGED ON COMPANY + REGION + CAPACITY
              </p>
            </div>

            <div className="scroll-fade grid grid-cols-2 md:grid-cols-4 border-t-2 border-b border-ink mt-16 opacity-0">
              <Stat label="COMBINED UNITS" value={String(UNIFIED_STATS.total).padStart(3, "0")} />
              <Stat label="ROASTER BRANDS" value={String(UNIFIED_STATS.roasterBrandCount).padStart(2, "0")} />
              <Stat label="DOMESTIC REGIONS" value="16" />
              <Stat label="OVERSEAS COUNTRIES" value="07" />
            </div>
          </section>

          <section id="filter" className="container-content pb-16">
            <div className="scroll-fade border-t-2 border-ink pt-6 opacity-0">
              <div className="flex items-baseline justify-between gap-4 mb-6">
                <span className="caption-style text-ink/90">FILTER · MULTI-SELECT · AND</span>
                {hasFilter ? (
                  <button type="button" onClick={clearAll} className="caption-style text-ink hover:underline">CLEAR ALL</button>
                ) : (
                  <span className="caption-style text-ink/60">{UNIFIED_STATS.total} RECORDS</span>
                )}
              </div>

              <div className="space-y-5">
                <FilterRow label="REGION" values={REGIONS.map((r) => ({ id: r, label: regionLabel(r) }))} selected={selRegions} onToggle={(v) => toggle(selRegions, v, setSelRegions)} />
                <FilterRow label="BRAND" values={ROASTER_BRANDS.map((b) => ({ id: b, label: b }))} selected={selBrands} onToggle={(v) => toggle(selBrands, v, setSelBrands)} />
                <FilterRow label="CAPACITY" values={CAPACITY_BUCKETS.map((b) => ({ id: b.id, label: b.label }))} selected={selCaps} onToggle={(v) => toggle(selCaps, v, setSelCaps)} />
              </div>
            </div>
          </section>

          <section id="records" className="container-content pb-24">
            <div className="scroll-fade flex items-baseline justify-between border-t-2 border-ink pt-6 mb-10 opacity-0">
              <span className="caption-style text-ink/90">DOMESTIC · SORTED BY CAPACITY</span>
              <span className="caption-style text-ink/80">
                {String(filtered.length).padStart(3, "0")} OF {String(domestic.length).padStart(3, "0")}
              </span>
            </div>

            {filtered.length === 0 ? (
              <p className="text-[clamp(1rem,1.15vw,1.1rem)] text-ink/60 py-20 text-center">
                No records match these filters. Try adjusting your selection.
              </p>
            ) : (
              <div className="columns-1 md:columns-2 lg:columns-3 gap-x-10 lg:gap-x-14">
                {filtered.map((r) => <RecordCard key={r.id} r={r} />)}
              </div>
            )}
          </section>

          <section id="overseas" className="bg-bone py-24 lg:py-32">
            <div className="container-content">
              <div className="scroll-fade mb-12 opacity-0">
                <span className="caption-style text-ink/90 block mb-6">OVERSEAS · 2025 CUMULATIVE · 36 UNITS</span>
                <h2 className="font-display font-bold text-[clamp(2.5rem,6vw,5rem)] text-ink leading-[0.92] tracking-[-0.03em]">
                  ASIA,
                  <br />
                  AND THE GULF.
                </h2>
              </div>

              <div className="scroll-fade grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10 border-t border-ink/30 pt-8 opacity-0">
                {INSTALLATIONS_2025_SUMMARY.overseasBreakdown.map((o) => (
                  <div key={o.code}>
                    <span className="caption-style text-ink/90 block mb-2">{o.country.toUpperCase()}</span>
                    <span className="font-display font-bold text-[clamp(1.8rem,3vw,2.8rem)] text-ink leading-[1] tracking-tight block">
                      {String(o.count).padStart(2, "0")}
                    </span>
                    <span className="caption-style text-ink/75 block mt-2">{o.sharePct}% OF OVERSEAS</span>
                  </div>
                ))}
              </div>

              {overseas.length > 0 && (
                <div className="mt-20">
                  <div className="scroll-fade flex items-baseline justify-between border-t border-ink/30 pt-6 mb-8 opacity-0">
                    <span className="caption-style text-ink/90">NAMED ACCOUNTS · 2024 LEDGER</span>
                    <span className="caption-style text-ink/75">{overseas.length} RECORDS</span>
                  </div>
                  <div className="columns-1 md:columns-2 gap-x-10">
                    {overseas.map((r) => <RecordCard key={r.id} r={r} dim />)}
                  </div>
                </div>
              )}
            </div>
          </section>

          <section id="contact" className="bg-ink py-24 lg:py-32">
            <div className="container-content">
              <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] items-end gap-10">
                <div>
                  <span className="scroll-fade caption-style text-paper/90 block mb-6 opacity-0">NEXT ON THE LEDGER · YOURS</span>
                  <h2 className="scroll-fade font-display font-bold text-[clamp(2rem,5vw,4rem)] text-paper leading-[0.95] tracking-[-0.03em] opacity-0">
                    YOUR ROASTER
                    <br />
                    BELONGS HERE.
                  </h2>
                  <p className="scroll-fade text-[clamp(1rem,1.2vw,1.15rem)] text-paper/90 leading-[1.7] mt-6 max-w-md opacity-0">
                    Whatever roaster brand, whatever capacity — we size and tune the afterburner to the site. May your store be the first line of the next ledger.
                  </p>
                </div>
                <div className="scroll-fade opacity-0">
                  <Link href="/en/contact" className="btn-pill bg-paper text-ink hover:bg-ink hover:text-paper border-2 border-paper transition-all duration-200 rounded-lg">
                    REQUEST A QUOTE &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </>
      ) : (
        <>
          <section id="overview" className="container-content pt-16 lg:pt-20 pb-16">
            <div className="mb-16 lg:mb-24">
              <span className="hero-fade caption-style text-ink/90 block mb-6 opacity-0">NUT BUTTER MACHINE · 2025 — 2026</span>
              <h1 className="m-0 font-display font-bold text-[clamp(3rem,9vw,8rem)] text-ink leading-[0.88] tracking-[-0.04em]">
                <span className="hero-fade block opacity-0">EVERY</span>
                <span className="hero-fade block pl-[6vw] opacity-0">NUT.</span>
                <span className="hero-fade block pl-[18vw] opacity-0">EVERY BATCH.</span>
              </h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-20 items-start">
              <p className="hero-fade text-[clamp(1rem,1.25vw,1.2rem)] text-ink/90 leading-[1.7] max-w-2xl opacity-0">
                Since the first delivery in March 2025, NBPKOREA&apos;s nut butter
                machine runs across {NUTSTAR_SUMMARY.businessTypeCount} business
                types and {NUTSTAR_SUMMARY.totalCustomers} customers — nut
                processors, department-store pop-ups, mill houses, cafés, and
                bakeries. Cumulative deliveries through May 2026 total {NUTSTAR_SUMMARY.totalUnits} units,
                of which {NUTSTAR_SUMMARY.deliveredUnits} are in operation and{" "}
                {NUTSTAR_SUMMARY.pendingUnits} are scheduled to ship.
              </p>
              <p className="hero-fade caption-style text-ink/80 leading-relaxed max-w-[32ch] opacity-0 lg:text-right">
                MODEL — NUTSTAR NUT BUTTER MACHINE
                <br />
                CAPACITY — 50 KG · CONTINUOUS GRINDING
                <br />
                APPLICATION — PEANUT · ALMOND · CASHEW · PISTACHIO
              </p>
            </div>

            <div className="scroll-fade grid grid-cols-2 md:grid-cols-4 border-t-2 border-b border-ink mt-16 opacity-0">
              <Stat label="TOTAL UNITS" value={String(NUTSTAR_SUMMARY.totalUnits).padStart(2, "0")} />
              <Stat label="CUSTOMERS" value={String(NUTSTAR_SUMMARY.totalCustomers).padStart(2, "0")} />
              <Stat label="DELIVERED" value={String(NUTSTAR_SUMMARY.deliveredUnits).padStart(2, "0")} />
              <Stat label="SCHEDULED" value={String(NUTSTAR_SUMMARY.pendingUnits).padStart(2, "0")} />
            </div>
          </section>

          <section id="records" className="container-content pb-24">
            <div className="scroll-fade flex items-baseline justify-between border-t-2 border-ink pt-6 mb-10 opacity-0">
              <span className="caption-style text-ink/90">DELIVERED · {nutDelivered.length} CUSTOMERS</span>
              <span className="caption-style text-ink/80">
                {String(nutDelivered.reduce((a, r) => a + r.qty, 0)).padStart(2, "0")} UNITS IN OPERATION
              </span>
            </div>

            <div className="columns-1 md:columns-2 lg:columns-3 gap-x-10 lg:gap-x-14">
              {nutDelivered.map((r) => <NutstarCard key={r.id} r={r} />)}
            </div>

            {nutPending.length > 0 && (
              <div className="mt-20">
                <div className="scroll-fade flex items-baseline justify-between border-t-2 border-ink pt-6 mb-10 opacity-0">
                  <span className="caption-style text-ink/90">SCHEDULED · {nutPending.length} CUSTOMERS</span>
                  <span className="caption-style text-ink/80">
                    {String(nutPending.reduce((a, r) => a + r.qty, 0)).padStart(2, "0")} UNITS · BY MAY 2026
                  </span>
                </div>
                <div className="columns-1 md:columns-2 lg:columns-3 gap-x-10 lg:gap-x-14">
                  {nutPending.map((r) => <NutstarCard key={r.id} r={r} dim />)}
                </div>
              </div>
            )}
          </section>

          <section id="contact" className="bg-ink py-24 lg:py-32">
            <div className="container-content">
              <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] items-end gap-10">
                <div>
                  <span className="scroll-fade caption-style text-paper/90 block mb-6 opacity-0">NEXT ON THE LINE · YOURS</span>
                  <h2 className="scroll-fade font-display font-bold text-[clamp(2rem,5vw,4rem)] text-paper leading-[0.95] tracking-[-0.03em] opacity-0">
                    YOUR BUTTER
                    <br />
                    BELONGS HERE.
                  </h2>
                  <p className="scroll-fade text-[clamp(1rem,1.2vw,1.15rem)] text-paper/90 leading-[1.7] mt-6 max-w-md opacity-0">
                    From nut processors to department-store pop-ups, mill houses, cafés, and bakeries — the 50kg NUTS-STAR moves between continuous production and on-site demonstrations at the rhythm of your shop.
                  </p>
                </div>
                <div className="scroll-fade opacity-0">
                  <Link href="/en/contact" className="btn-pill bg-paper text-ink hover:bg-ink hover:text-paper border-2 border-paper transition-all duration-200 rounded-lg">
                    REQUEST A QUOTE &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
}

function ProductTabButton({ active, label, sub, onClick }: { active: boolean; label: string; sub: string; onClick: () => void }) {
  return (
    <button type="button" role="tab" aria-selected={active} onClick={onClick}
      className={`group flex flex-col items-start pb-2 -mb-[17px] border-b-2 transition-colors ${active ? "border-ink text-ink" : "border-transparent text-ink/40 hover:text-ink/75"}`}>
      <span className="font-display font-bold text-[0.95rem] md:text-[1.05rem] tracking-[0.02em] leading-[1.1]">{label}</span>
      <span className={`caption-style mt-1 ${active ? "text-ink/75" : "text-ink/35 group-hover:text-ink/60"}`}>{sub}</span>
    </button>
  );
}

function FilterRow({ label, values, selected, onToggle }: { label: string; values: { id: string; label: string }[]; selected: Set<string>; onToggle: (v: string) => void }) {
  return (
    <div className="flex items-start gap-4 flex-wrap md:flex-nowrap">
      <span className="caption-style text-ink/80 shrink-0 pt-1.5 md:w-[100px]">{label}</span>
      <div className="flex flex-wrap gap-2">
        {values.map((v) => {
          const active = selected.has(v.id);
          return (
            <button key={v.id} type="button" onClick={() => onToggle(v.id)}
              className={`px-3 py-1.5 text-[0.7rem] font-bold tracking-[0.08em] uppercase rounded-full border transition-colors ${active ? "bg-ink text-paper border-ink" : "border-ink/25 text-ink/75 hover:border-ink/60"}`}>
              {v.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function RecordCard({ r, dim = false }: { r: UnifiedDelivery; dim?: boolean }) {
  const tier = capacityTier(r.burnerKg);
  const companySize = tier === "xl" ? "text-[clamp(1.4rem,2.2vw,2rem)]" : tier === "large" ? "text-[clamp(1.15rem,1.6vw,1.5rem)]" : "text-[clamp(1rem,1.3vw,1.2rem)]";
  const hasCapacity = r.burnerKg && r.burnerKg !== "?";
  const tone = dim ? "text-ink/85" : "text-ink";

  return (
    <article className="break-inside-avoid pt-5 pb-6 border-t border-ink/20 mb-1">
      <div className="flex items-start justify-between gap-3 mb-3">
        <span className="caption-style text-ink/75">{regionTrail(r)}</span>
        <span className="caption-style text-ink/55 shrink-0">{sourceLabel(r.sources)}</span>
      </div>

      <h3 className={`font-display font-bold ${tone} tracking-tight leading-[1.15] mb-4 ${companySize}`}>
        {r.company}
      </h3>

      <div className="flex items-end justify-between gap-3">
        <div className="flex flex-col gap-0.5 min-w-0">
          {r.roasterBrand && <span className="caption-style text-ink/90">ROASTER · {r.roasterBrand}</span>}
          {!r.roasterBrand && r.storeBrand && <span className="caption-style text-ink/75 truncate max-w-[18ch]">BRAND · {r.storeBrand}</span>}
          {r.roastKg && <span className="caption-style text-ink/70">ROAST · {r.roastKg}Kg</span>}
        </div>

        {hasCapacity ? (
          <div className="text-right shrink-0">
            <span className="font-display font-bold text-[clamp(1.3rem,2vw,1.75rem)] text-ink leading-[1] tracking-tight">
              {r.burnerKg}<span className="text-ink/65 text-[0.55em] ml-0.5 align-baseline">Kg</span>
            </span>
            <span className="caption-style text-ink/70 block mt-1">AFTERBURNER</span>
          </div>
        ) : (
          <span className="caption-style text-ink/55 shrink-0">SPEC N/A</span>
        )}
      </div>
    </article>
  );
}

function NutstarCard({ r, dim = false }: { r: NutstarDelivery; dim?: boolean }) {
  const tone = dim ? "text-ink/85" : "text-ink";
  const BUSINESS_EN: Record<string, string> = {
    "견과류 제조·가공": "Nut Processor",
    "백화점 팝업": "Department Pop-up",
    "방앗간": "Mill House",
    "카페": "Café",
    "베이커리 카페": "Bakery Café",
  };

  return (
    <article className="break-inside-avoid pt-5 pb-6 border-t border-ink/20 mb-1">
      <div className="flex items-start justify-between gap-3 mb-3">
        <span className="caption-style text-ink/75">{nutstarTrail(r)}</span>
        <span className="caption-style text-ink/55 shrink-0">No.{r.id}</span>
      </div>

      <h3 className={`font-display font-bold ${tone} tracking-tight leading-[1.15] mb-4 text-[clamp(1.15rem,1.6vw,1.5rem)]`}>
        {r.customer}
      </h3>

      <div className="flex items-end justify-between gap-3 mb-3">
        <div className="flex flex-col gap-0.5 min-w-0">
          <span className="caption-style text-ink/90 tracking-normal normal-case text-[0.72rem]">
            {BUSINESS_EN[r.businessType] ?? r.businessType}
          </span>
          {r.operatingMode && <span className="caption-style text-ink/70 truncate max-w-[22ch] tracking-normal normal-case text-[0.72rem]">MODE · {r.operatingMode}</span>}
          <span className="caption-style text-ink/65">DELIVERY · {r.deliveryDate}</span>
        </div>

        <div className="text-right shrink-0">
          <span className="font-display font-bold text-[clamp(1.3rem,2vw,1.75rem)] text-ink leading-[1] tracking-tight">
            {r.capacityKg}<span className="text-ink/65 text-[0.55em] ml-0.5 align-baseline">Kg</span>
          </span>
          <span className="caption-style text-ink/70 block mt-1">× {r.qty} UNIT{r.qty > 1 ? "S" : ""}</span>
        </div>
      </div>
    </article>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="px-0 md:px-6 py-6 border-r border-ink/10 last:border-r-0 [&:nth-child(2n)]:md:border-r md:[&:nth-child(2n)]:border-r-ink/10 [&:nth-child(2)]:border-r-0 [&:nth-child(2)]:md:border-r">
      <span className="caption-style text-ink/90 block mb-2">{label}</span>
      <span className="font-display font-bold text-[clamp(1.6rem,2.8vw,2.25rem)] text-ink tracking-tight leading-[1]">{value}</span>
    </div>
  );
}
