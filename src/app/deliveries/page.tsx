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
} from "@/lib/unified-deliveries";
import { INSTALLATIONS_2025_SUMMARY } from "@/lib/installations-2025";
import {
  NUTSTAR_DELIVERIES,
  NUTSTAR_SUMMARY,
  type NutstarDelivery,
} from "@/lib/nutstar-deliveries";
import FloatingSectionNav, {
  type NavSection,
} from "@/components/layout/FloatingSectionNav";

type ProductTab = "afterburner" | "nutstar";
const RECORD_PAGE_SIZE = 20;

const AFTERBURNER_SECTIONS: NavSection[] = [
  { id: "overview", label: "개요" },
  { id: "filter", label: "필터" },
  { id: "records", label: "기록" },
  { id: "overseas", label: "해외" },
  { id: "contact", label: "문의" },
];

const NUTSTAR_SECTIONS: NavSection[] = [
  { id: "overview", label: "개요" },
  { id: "records", label: "기록" },
  { id: "contact", label: "문의" },
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

function nutstarRegionTrail(r: NutstarDelivery): string {
  const parts = [r.region, r.district, r.neighborhood].filter(Boolean);
  return parts.join(" · ");
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
  const [product, setProduct] = useState<ProductTab>("afterburner");
  const [domesticVisible, setDomesticVisible] = useState(RECORD_PAGE_SIZE);
  const [nutstarDeliveredVisible, setNutstarDeliveredVisible] = useState(RECORD_PAGE_SIZE);
  const [nutstarPendingVisible, setNutstarPendingVisible] = useState(RECORD_PAGE_SIZE);

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
    setDomesticVisible(RECORD_PAGE_SIZE);
  }, [selRegions, selBrands, selCaps]);

  useEffect(() => {
    setDomesticVisible(RECORD_PAGE_SIZE);
    setNutstarDeliveredVisible(RECORD_PAGE_SIZE);
    setNutstarPendingVisible(RECORD_PAGE_SIZE);
  }, [product]);

  const nutstarDelivered = useMemo(
    () => NUTSTAR_DELIVERIES.filter((r) => r.status === "delivered"),
    []
  );
  const nutstarPending = useMemo(
    () => NUTSTAR_DELIVERIES.filter((r) => r.status === "pending"),
    []
  );

  const visibleDomestic = filteredDomestic.slice(0, domesticVisible);
  const visibleNutstarDelivered = nutstarDelivered.slice(0, nutstarDeliveredVisible);
  const visibleNutstarPending = nutstarPending.slice(0, nutstarPendingVisible);

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
  }, [product]);

  const sections =
    product === "afterburner" ? AFTERBURNER_SECTIONS : NUTSTAR_SECTIONS;

  return (
    <div ref={pageRef} className="bg-paper min-h-screen">
      <FloatingSectionNav sections={sections} />

      {/* ───────── PRODUCT TABS ───────── */}
      <div className="container-content pt-20 lg:pt-28">
        <div
          role="tablist"
          aria-label="Product line"
          className="flex flex-wrap items-baseline gap-6 md:gap-10 border-b border-ink/25 pb-4"
        >
          <span className="caption-style text-ink/60 mr-auto font-korean">
            제품 라인
          </span>
          <ProductTabButton
            active={product === "afterburner"}
            label="애프터버너"
            sub="로스터기 결합 실적"
            onClick={() => setProduct("afterburner")}
          />
          <ProductTabButton
            active={product === "nutstar"}
            label="넛버터머신"
            sub="넛츠스타 NUTS-STAR"
            onClick={() => setProduct("nutstar")}
          />
        </div>
      </div>

      {product === "afterburner" ? (
        <>
          {/* ───────── OVERVIEW ───────── */}
          <section id="overview" className="container-content pt-16 lg:pt-20 pb-16">
            <div className="mb-16 lg:mb-24">
              <span className="hero-fade caption-style text-ink/90 block mb-6 opacity-0 font-korean">
                납품 원장
              </span>
              <h1 className="m-0 font-display font-bold text-[clamp(3rem,9vw,8rem)] text-ink leading-[0.88] tracking-[-0.04em] font-korean">
                <span className="hero-fade block opacity-0">모든</span>
                <span className="hero-fade block pl-[6vw] opacity-0">로스터기,</span>
                <span className="hero-fade block pl-[18vw] opacity-0">모든 Kg.</span>
                <span className="sr-only">
                  . 엔비피코리아 애프터버너 납품 실적 — 국내 16개 광역과 해외 7개국, 18개 로스팅기 브랜드와 결합된 현장 기록.
                </span>
              </h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-20 items-start">
              <p className="hero-fade text-body-kr font-korean text-ink/90 leading-[1.75] max-w-2xl opacity-0">
                엔비피코리아 애프터버너는 국내 16개 광역과 해외 7개국,
                {UNIFIED_STATS.roasterBrandCount}개 로스터기 브랜드와 결합되어
                {UNIFIED_STATS.total}건의 현장 기록을 남겼습니다. 로스터기 브랜드,
                지역, 용량 기준으로 필요한 사례를 빠르게 확인할 수 있습니다.
              </p>
              <p className="hero-fade caption-style text-ink/80 leading-relaxed max-w-[32ch] opacity-0 lg:text-right font-korean">
                기록 기준 — 상호 · 지역 · 용량
                <br />
                필터 기준 — 지역 · 브랜드 · 용량
                <br />
                정렬 기준 — 용량 순
              </p>
            </div>

            {/* Stats strip */}
            <div className="scroll-fade grid grid-cols-2 md:grid-cols-4 border-t-2 border-b border-ink mt-16 opacity-0">
              <Stat label="누적 납품" value={String(UNIFIED_STATS.total).padStart(3, "0")} />
              <Stat label="로스터기 브랜드" value={String(UNIFIED_STATS.roasterBrandCount).padStart(2, "0")} />
              <Stat label="국내 광역" value="16" />
              <Stat label="해외 국가" value="07" />
            </div>
          </section>

          {/* ───────── FILTER ───────── */}
          <section id="filter" className="container-content pb-16">
            <div className="scroll-fade border-t-2 border-ink pt-6 opacity-0">
              <div className="flex items-baseline justify-between gap-4 mb-6">
                <span className="caption-style text-ink/90 font-korean">
                  필터 · 복수 선택 · AND 조건
                </span>
                {hasFilter ? (
                  <button
                    type="button"
                    onClick={clearAll}
                    className="caption-style text-ink hover:underline font-korean"
                  >
                    전체 초기화
                  </button>
                ) : (
                  <span className="caption-style text-ink/60 font-korean">
                    {UNIFIED_STATS.total}건 기록
                  </span>
                )}
              </div>

              <div className="space-y-5">
                <FilterRow
                  label="지역"
                  values={REGIONS.map((r) => ({ id: r, label: REGION_SHORT[r] || r }))}
                  selected={selRegions}
                  onToggle={(v) => toggle(selRegions, v, setSelRegions)}
                />
                <FilterRow
                  label="브랜드"
                  values={ROASTER_BRANDS.map((b) => ({ id: b, label: b }))}
                  selected={selBrands}
                  onToggle={(v) => toggle(selBrands, v, setSelBrands)}
                />
                <FilterRow
                  label="용량"
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
              <span className="caption-style text-ink/90 font-korean">
                국내 기록 · 용량 순 정렬
              </span>
              <span className="caption-style text-ink/80 font-korean">
                {String(filteredDomestic.length).padStart(3, "0")} / {String(domesticRecords.length).padStart(3, "0")}건
              </span>
            </div>

            {filteredDomestic.length === 0 ? (
              <p className="text-body-kr font-korean text-ink/60 py-20 text-center">
                선택한 조건에 해당하는 기록이 없습니다. 필터를 조정해 주세요.
              </p>
            ) : (
              <>
                <div className="columns-1 md:columns-2 lg:columns-3 gap-x-10 lg:gap-x-14">
                  {visibleDomestic.map((r) => (
                    <RecordCard key={r.id} r={r} />
                  ))}
                </div>
                {visibleDomestic.length < filteredDomestic.length && (
                  <LoadMoreButton
                    label="더보기"
                    count={filteredDomestic.length - visibleDomestic.length}
                    onClick={() => setDomesticVisible((n) => n + RECORD_PAGE_SIZE)}
                  />
                )}
              </>
            )}
          </section>

          {/* ───────── OVERSEAS ───────── */}
          <section id="overseas" className="bg-bone py-24 lg:py-32">
            <div className="container-content">
              <div className="scroll-fade mb-12 opacity-0">
                <span className="caption-style text-ink/90 block mb-6 font-korean">
                  해외 누적 · 36대
                </span>
                <h2 className="font-display font-bold text-[clamp(2.5rem,6vw,5rem)] text-ink leading-[0.92] tracking-[-0.03em] font-korean">
                  아시아 너머,
                  <br />
                  글로벌화 된 애프터버너.
                </h2>
              </div>

              <div className="scroll-fade grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10 border-t border-ink/30 pt-8 opacity-0">
                {INSTALLATIONS_2025_SUMMARY.overseasBreakdown.map((o) => (
                  <div key={o.code}>
                    <span className="caption-style text-ink/90 block mb-2 font-korean">
                      {o.country}
                    </span>
                    <span className="font-display font-bold text-[clamp(1.8rem,3vw,2.8rem)] text-ink leading-[1] tracking-tight block">
                      {String(o.count).padStart(2, "0")}
                    </span>
                    <span className="caption-style text-ink/75 block mt-2 font-korean">
                      해외 대비 {o.sharePct}%
                    </span>
                  </div>
                ))}
              </div>

              {overseasNamed.length > 0 && (
                <div className="mt-20">
                  <div className="scroll-fade flex items-baseline justify-between border-t border-ink/30 pt-6 mb-8 opacity-0">
                    <span className="caption-style text-ink/90 font-korean">
                      해외 거래처
                    </span>
                    <span className="caption-style text-ink/75 font-korean">
                      {overseasNamed.length}건
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
                  <span className="scroll-fade caption-style text-paper/90 block mb-6 opacity-0 font-korean">
                    다음 기록, 당신의 매장.
                  </span>
                  <h2 className="scroll-fade font-display font-bold text-[clamp(2rem,5vw,4rem)] text-paper leading-[0.95] tracking-[-0.03em] opacity-0 font-korean">
                    당신의 로스터는
                    <br />
                    여기에 기록됩니다.
                  </h2>
                  <p className="scroll-fade text-body-kr font-korean text-paper/90 leading-[1.75] mt-6 max-w-md opacity-0">
                    어떤 브랜드의 로스팅기든, 어떤 용량이든 애프터버너는 현장에 맞춰
                    제작됩니다. 다음 기록의 첫 줄이 당신의 매장이길 바랍니다.
                  </p>
                </div>
                <div className="scroll-fade opacity-0">
                  <Link
                    href="/contact"
                    className="btn-pill bg-paper text-ink hover:bg-ink hover:text-paper border-2 border-paper transition-all duration-200 rounded-lg font-korean"
                  >
                    견적 문의 &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </>
      ) : (
        <>
          {/* ───────── NUTSTAR · OVERVIEW ───────── */}
          <section id="overview" className="container-content pt-16 lg:pt-20 pb-16">
            <div className="mb-16 lg:mb-24">
              <span className="hero-fade caption-style text-ink/90 block mb-6 opacity-0 font-korean">
                넛버터머신
              </span>
              <h1 className="m-0 font-display font-bold text-[clamp(3rem,9vw,8rem)] text-ink leading-[0.88] tracking-[-0.04em] font-korean">
                <span className="hero-fade block opacity-0">모든</span>
                <span className="hero-fade block pl-[6vw] opacity-0">견과,</span>
                <span className="hero-fade block pl-[18vw] opacity-0">모든 배치.</span>
                <span className="sr-only">
                  . 엔비피코리아 넛츠스타 NUTS-STAR 넛버터머신 납품 실적 — 9개 거래처에 24대 납품.
                </span>
              </h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-20 items-start">
              <p className="hero-fade text-body-kr font-korean text-ink/90 leading-[1.75] max-w-2xl opacity-0">
                엔비피코리아의 넛버터머신은 견과류 제조·가공, 백화점 팝업,
                방앗간, 카페, 베이커리까지{" "}
                {NUTSTAR_SUMMARY.businessTypeCount}개 업태,{" "}
                {NUTSTAR_SUMMARY.totalCustomers}개 거래처에서 운용되고 있습니다.
                확정된 누적 납품은 총 {NUTSTAR_SUMMARY.totalUnits}대이며, 이 중
                {NUTSTAR_SUMMARY.deliveredUnits}대는 현장 가동 중,{" "}
                {NUTSTAR_SUMMARY.pendingUnits}대는 출하를 앞두고 있습니다.
              </p>
              <p className="hero-fade caption-style text-ink/80 leading-relaxed max-w-[32ch] opacity-0 lg:text-right font-korean">
                모델 — 넛츠스타 NUTS-STAR 넛버터머신
                <br />
                용량 — 50kg · 연속 분쇄
                <br />
                적용 — 땅콩 · 아몬드 · 캐슈넛 · 피스타치오
              </p>
            </div>

            {/* Stats strip */}
            <div className="scroll-fade grid grid-cols-2 md:grid-cols-4 border-t-2 border-b border-ink mt-16 opacity-0">
              <Stat
                label="총 대수"
                value={String(NUTSTAR_SUMMARY.totalUnits).padStart(2, "0")}
              />
              <Stat
                label="거래처"
                value={String(NUTSTAR_SUMMARY.totalCustomers).padStart(2, "0")}
              />
              <Stat
                label="납품 완료"
                value={String(NUTSTAR_SUMMARY.deliveredUnits).padStart(2, "0")}
              />
              <Stat
                label="출하 예정"
                value={String(NUTSTAR_SUMMARY.pendingUnits).padStart(2, "0")}
              />
            </div>
          </section>

          {/* ───────── NUTSTAR · RECORDS ───────── */}
          <section id="records" className="container-content pb-24">
            <div className="scroll-fade flex items-baseline justify-between border-t-2 border-ink pt-6 mb-10 opacity-0">
              <span className="caption-style text-ink/90 font-korean">
                납품 완료 · {nutstarDelivered.length}개 거래처
              </span>
              <span className="caption-style text-ink/80 font-korean">
                {String(
                  nutstarDelivered.reduce((a, r) => a + r.qty, 0)
                ).padStart(2, "0")}
                대 가동 중
              </span>
            </div>

            <div className="columns-1 md:columns-2 lg:columns-3 gap-x-10 lg:gap-x-14">
              {visibleNutstarDelivered.map((r) => (
                <NutstarCard key={r.id} r={r} />
              ))}
            </div>
            {visibleNutstarDelivered.length < nutstarDelivered.length && (
              <LoadMoreButton
                label="더보기"
                count={nutstarDelivered.length - visibleNutstarDelivered.length}
                onClick={() => setNutstarDeliveredVisible((n) => n + RECORD_PAGE_SIZE)}
              />
            )}

            {nutstarPending.length > 0 && (
              <div className="mt-20">
                <div className="scroll-fade flex items-baseline justify-between border-t-2 border-ink pt-6 mb-10 opacity-0">
                  <span className="caption-style text-ink/90 font-korean">
                    출하 예정 · {nutstarPending.length}개 거래처
                  </span>
                  <span className="caption-style text-ink/80 font-korean">
                    {String(
                      nutstarPending.reduce((a, r) => a + r.qty, 0)
                    ).padStart(2, "0")}
                    대 출하 예정
                  </span>
                </div>
                <div className="columns-1 md:columns-2 lg:columns-3 gap-x-10 lg:gap-x-14">
                  {visibleNutstarPending.map((r) => (
                    <NutstarCard key={r.id} r={r} dim />
                  ))}
                </div>
                {visibleNutstarPending.length < nutstarPending.length && (
                  <LoadMoreButton
                    label="더보기"
                    count={nutstarPending.length - visibleNutstarPending.length}
                    onClick={() => setNutstarPendingVisible((n) => n + RECORD_PAGE_SIZE)}
                  />
                )}
              </div>
            )}
          </section>

          {/* ───────── NUTSTAR · CONTACT ───────── */}
          <section id="contact" className="bg-ink py-24 lg:py-32">
            <div className="container-content">
              <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] items-end gap-10">
                <div>
                  <span className="scroll-fade caption-style text-paper/90 block mb-6 opacity-0 font-korean">
                    다음 납품, 당신의 현장.
                  </span>
                  <h2 className="scroll-fade font-display font-bold text-[clamp(2rem,5vw,4rem)] text-paper leading-[0.95] tracking-[-0.03em] opacity-0 font-korean">
                    당신의 버터는
                    <br />
                    여기에 기록됩니다.
                  </h2>
                  <p className="scroll-fade text-body-kr font-korean text-paper/90 leading-[1.75] mt-6 max-w-md opacity-0">
                    견과류 제조부터 백화점 팝업, 방앗간, 베이커리까지. 현장의 분쇄
                    리듬에 맞춰 연속 생산과 즉석 시연을 오가는 50kg 넛버터머신을
                    직접 확인하세요.
                  </p>
                </div>
                <div className="scroll-fade opacity-0">
                  <Link
                    href="/contact"
                    className="btn-pill bg-paper text-ink hover:bg-ink hover:text-paper border-2 border-paper transition-all duration-200 rounded-lg font-korean"
                  >
                    견적 문의 &rarr;
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

// ──────────────────────────────────────────────────────────────────
function ProductTabButton({
  active,
  label,
  sub,
  onClick,
}: {
  active: boolean;
  label: string;
  sub: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={active}
      onClick={onClick}
      className={`group flex flex-col items-start pb-2 -mb-[17px] border-b-2 transition-colors ${
        active
          ? "border-ink text-ink"
          : "border-transparent text-ink/40 hover:text-ink/75"
      }`}
    >
      <span className="font-display font-bold text-[0.95rem] md:text-[1.05rem] tracking-[0.02em] leading-[1.1]">
        {label}
      </span>
      <span
        className={`caption-style mt-1 ${
          active ? "text-ink/75" : "text-ink/35 group-hover:text-ink/60"
        }`}
      >
        {sub}
      </span>
    </button>
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
function LoadMoreButton({
  label,
  count,
  onClick,
}: {
  label: string;
  count: number;
  onClick: () => void;
}) {
  return (
    <div className="mt-10 flex justify-center">
      <button
        type="button"
        onClick={onClick}
        className="rounded-lg border-2 border-ink px-6 py-3 text-xs font-bold tracking-[0.08em] text-ink transition-colors hover:bg-ink hover:text-paper font-korean"
      >
        {label} · {Math.min(RECORD_PAGE_SIZE, count)}개
      </button>
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
      </div>

      <h3
        className={`font-display font-bold ${tone} tracking-tight leading-[1.15] mb-4 ${companySize}`}
      >
        {r.company}
      </h3>

      <div className="flex items-end justify-between gap-3">
        <div className="flex flex-col gap-0.5 min-w-0">
          {r.roasterBrand && (
            <span className="caption-style text-ink/90 font-korean">
              로스터기 · {r.roasterBrand}
            </span>
          )}
          {!r.roasterBrand && r.storeBrand && (
            <span className="caption-style text-ink/75 truncate max-w-[18ch] font-korean">
              브랜드 · {r.storeBrand}
            </span>
          )}
          {r.roastKg && (
            <span className="caption-style text-ink/70 font-korean">
              로스팅 · {r.roastKg}Kg
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
            <span className="caption-style text-ink/70 block mt-1 font-korean">
              애프터버너
            </span>
          </div>
        ) : (
          <span className="caption-style text-ink/55 shrink-0 font-korean">
            규격 미정
          </span>
        )}
      </div>
    </article>
  );
}

// ──────────────────────────────────────────────────────────────────
function NutstarCard({
  r,
  dim = false,
}: {
  r: NutstarDelivery;
  dim?: boolean;
}) {
  const tone = dim ? "text-ink/85" : "text-ink";

  return (
    <article className="break-inside-avoid pt-5 pb-6 border-t border-ink/20 mb-1">
      <div className="flex items-start justify-between gap-3 mb-3">
        <span className="caption-style text-ink/75">
          {nutstarRegionTrail(r)}
        </span>
        <span className="caption-style text-ink/55 shrink-0">
          No.{r.id}
        </span>
      </div>

      <h3
        className={`font-display font-bold ${tone} tracking-tight leading-[1.15] mb-4 text-[clamp(1.15rem,1.6vw,1.5rem)]`}
      >
        {r.customer}
      </h3>

      <div className="flex items-end justify-between gap-3 mb-3">
        <div className="flex flex-col gap-0.5 min-w-0">
          <span className="caption-style text-ink/90 font-korean tracking-normal normal-case text-[0.75rem]">
            {r.businessType}
          </span>
          {r.operatingMode && (
            <span className="caption-style text-ink/70 truncate max-w-[22ch] font-korean tracking-normal normal-case text-[0.72rem]">
              방식 · {r.operatingMode}
            </span>
          )}
        </div>

        <div className="text-right shrink-0">
          <span className="font-display font-bold text-[clamp(1.3rem,2vw,1.75rem)] text-ink leading-[1] tracking-tight">
            {r.capacityKg}
            <span className="text-ink/65 text-[0.55em] ml-0.5 align-baseline">
              Kg
            </span>
          </span>
          <span className="caption-style text-ink/70 block mt-1 font-korean">
            × {r.qty}대
          </span>
        </div>
      </div>

      {r.applications && r.applications.length > 0 && (
        <ul className="space-y-0.5 mt-2 pt-2 border-t border-ink/10">
          {r.applications.map((app, i) => (
            <li
              key={i}
              className="caption-style text-ink/65 leading-[1.5] normal-case tracking-normal font-korean text-[0.72rem]"
            >
              — {app}
            </li>
          ))}
        </ul>
      )}
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
