"use client";

import { useEffect, useRef, useMemo } from "react";
import { gsap } from "@/lib/gsap";
import Link from "next/link";

const S3 = "https://chiro-web.s3.ap-northeast-2.amazonaws.com/fa/AFTERBUNNER/products";

type Delivery = {
  id: string;
  client: string;
  location: string;
  region: string;
  regionKr: string;
  regionEn: string;
  date: string;
  product: string;
  summary: string;
  featured?: boolean;
  image: string;
  testimonial?: { quote: string; name: string; role: string };
};

// Afterburner deliveries only (roasters / the lab filters come later)
const DELIVERIES: Delivery[] = [
  {
    id: "seoulsoop",
    client: "서울숲 로스터스",
    location: "서울 성동구",
    region: "seoul",
    regionKr: "서울",
    regionEn: "SEOUL",
    date: "2025.12",
    product: "NKIC-30K + BASE 30",
    summary:
      "15kg 로스터에서 30kg으로 업그레이드하며 제연기도 동급으로 증설. 야간 2일 집중 설치로 매장 운영 무중단. 일일 처리량이 45kg에서 150kg으로 증가했습니다.",
    featured: true,
    image: `${S3}/stock-install-1.jpg`,
    testimonial: {
      quote:
        "설치 과정에서 매장 운영에 영향이 전혀 없었습니다. NBP 팀의 사전 현장 조사가 정확했기 때문이라고 생각합니다.",
      name: "김도윤",
      role: "서울숲 로스터스 대표",
    },
  },
  {
    id: "fritz-mapo",
    client: "프릳츠 커피컴퍼니",
    location: "서울 마포구",
    region: "seoul",
    regionKr: "서울",
    regionEn: "SEOUL",
    date: "2025.01",
    product: "NKIC-60K",
    summary:
      "기존 로스터리 시설의 환기 개선 프로젝트. 대용량 애프터버너로 교체하고 덕트 경로를 재설계했습니다.",
    image: `${S3}/stock-install-7.jpg`,
  },
  {
    id: "cafe-ondo",
    client: "카페 온도",
    location: "부산 해운대구",
    region: "busan",
    regionKr: "부산",
    regionEn: "BUSAN",
    date: "2025.11",
    product: "NKIC-10K",
    summary:
      "해운대 주거 밀집 신축 매장. 덕트 경로를 3D로 사전 모델링하고 이단연소를 적용해 배출구 잔여 냄새를 최소화. 오픈 6개월간 민원 0건.",
    image: `${S3}/stock-install-4.jpg`,
    testimonial: {
      quote: "주거 지역이라 걱정이 많았는데, 6개월째 민원이 단 한 건도 없습니다.",
      name: "박서현",
      role: "카페 온도 오너",
    },
  },
  {
    id: "blackwater",
    client: "블랙워터 커피랩",
    location: "대전 유성구",
    region: "daejeon",
    regionKr: "대전",
    regionEn: "DAEJEON",
    date: "2025.09",
    product: "NKIC-15K + BASE 15",
    summary:
      "신축 단계부터 참여한 로스터리 카페. 건축 설계사와 3회 협업해 천장·덕트·가스 인입 위치까지 조율. 시운전과 로스팅 교육 2회 병행.",
    image: `${S3}/stock-install-8.jpg`,
  },
  {
    id: "jeju-olle",
    client: "제주 올레커피",
    location: "제주 서귀포시",
    region: "jeju",
    regionKr: "제주",
    regionEn: "JEJU",
    date: "2025.03",
    product: "NKIC-30K + BASE 30",
    summary:
      "관광객 로스팅 체험 프로그램을 위한 오픈형 설치. 강화유리 안전 가드와 관람/작업 동선을 분리한 ㄷ자 레이아웃. 월 평균 1,200명 체험.",
    image: `${S3}/stock-expo-1.jpg`,
  },
];

const FILTERS = [
  { id: "afterburner", label: "AFTERBURNER", active: true },
  { id: "roasters", label: "ROASTERS", active: false },
  { id: "the-lab", label: "THE LAB", active: false },
];

export default function DeliveriesPage() {
  const pageRef = useRef<HTMLDivElement>(null);
  const featured = DELIVERIES.find((d) => d.featured);
  const grouped = useMemo(() => {
    const map = new Map<string, Delivery[]>();
    for (const d of DELIVERIES) {
      if (!map.has(d.region)) map.set(d.region, []);
      map.get(d.region)!.push(d);
    }
    return Array.from(map.entries());
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
              duration: 0.7,
              ease: "power2.out",
              scrollTrigger: {
                trigger: el,
                start: "top 88%",
                toggleActions: "play none none none",
              },
            }
          );
        });
      }
    }, pageRef);

    return () => ctx.revert();
  }, []);

  const totalCount = DELIVERIES.length;
  const regionCount = grouped.length;

  return (
    <div ref={pageRef} className="bg-paper min-h-screen">
      {/* ── Masthead ── */}
      <section className="container-content pt-24 lg:pt-32 pb-12">
        <div className="flex items-end justify-between gap-6 mb-10">
          <div>
            <span className="hero-fade caption-style text-ink/70 block mb-6 opacity-0">
              DELIVERY RECORDS / 납품 실적
            </span>
            <h1 className="hero-fade font-display font-bold text-[clamp(3rem,9vw,8rem)] text-ink leading-[0.88] tracking-[-0.04em] opacity-0">
              WHERE
              <br />
              WE&apos;VE BEEN.
            </h1>
          </div>
          <p className="hero-fade hidden md:block caption-style text-ink/70 text-right leading-relaxed max-w-[24ch] opacity-0">
            EVERY INSTALLATION IS
            <br />
            TUNED FOR ITS SITE —
            <br />
            DUCT, POWER, VOLUME.
          </p>
        </div>

        <p className="hero-fade text-body-kr font-korean text-ink/80 leading-[1.75] max-w-2xl opacity-0">
          애프터버너는 출고되는 순간 표준이 아니라 설치 현장의 환경을 따라
          조립됩니다. 아래는 그중 일부 기록입니다.
        </p>
      </section>

      {/* ── Filter row ── */}
      <section className="container-content pb-10">
        <div className="scroll-fade flex items-center gap-3 flex-wrap border-t-2 border-ink pt-6 opacity-0">
          <span className="caption-style text-ink/70 mr-2">CATEGORY</span>
          {FILTERS.map((f) => (
            <button
              key={f.id}
              type="button"
              disabled={!f.active}
              className={`px-5 py-2 text-xs font-bold tracking-[0.08em] uppercase rounded-full border-2 transition-colors ${
                f.active
                  ? "bg-ink text-paper border-ink"
                  : "border-bone text-ink/50 cursor-not-allowed"
              }`}
            >
              {f.label}
              {!f.active && <span className="ml-2 text-ink/40">· SOON</span>}
            </button>
          ))}
        </div>
      </section>

      {/* ── Stats strip ── */}
      <section className="container-content pb-20">
        <div className="scroll-fade grid grid-cols-2 md:grid-cols-4 border-t border-ink/15 border-b border-ink/15 opacity-0">
          <Stat label="TOTAL INSTALLATIONS" value={String(totalCount).padStart(2, "0")} />
          <Stat label="REGIONS" value={String(regionCount).padStart(2, "0")} />
          <Stat label="PERIOD" value="2025" />
          <Stat label="CATEGORY" value="AFTERBURNER" />
        </div>
      </section>

      {/* ── Featured case ── */}
      {featured && (
        <section className="container-content pb-20 lg:pb-28">
          <div className="scroll-fade grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-8 lg:gap-16 items-start opacity-0">
            <div className="relative aspect-[16/10] rounded-lg overflow-hidden bg-bone">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${featured.image})` }}
              />
              <div className="absolute top-5 left-5 inline-flex items-center gap-2 bg-paper/95 px-3 py-1.5 rounded-full">
                <span className="caption-style text-ink/80">CASE 01</span>
                <span className="caption-style text-ink/50">· FEATURED</span>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="caption-style text-ink/80">
                  {featured.regionEn} · {featured.location}
                </span>
                <span className="caption-style text-ink/60">
                  {featured.date}
                </span>
              </div>
              <h2 className="font-display font-bold text-[clamp(1.85rem,3.4vw,2.85rem)] text-ink leading-[1.08] tracking-[-0.02em] mb-3">
                {featured.client}
              </h2>
              <p className="caption-style text-ink/75 mb-6">
                UNIT · {featured.product}
              </p>
              <p className="text-body-kr font-korean text-ink/85 leading-[1.75] mb-8">
                {featured.summary}
              </p>

              {featured.testimonial && (
                <blockquote className="border-l-2 border-ink pl-5 py-1">
                  <p className="text-body-kr font-korean text-ink/90 leading-[1.7] italic">
                    &ldquo;{featured.testimonial.quote}&rdquo;
                  </p>
                  <p className="caption-style text-ink/70 mt-3">
                    — {featured.testimonial.name} · {featured.testimonial.role}
                  </p>
                </blockquote>
              )}
            </div>
          </div>
        </section>
      )}

      {/* ── Regional lists ── */}
      <section className="container-content pb-24">
        <div className="scroll-fade flex items-baseline justify-between border-t-2 border-ink pt-6 mb-12 opacity-0">
          <span className="caption-style text-ink/80">ALL RECORDS · BY REGION</span>
          <span className="caption-style text-ink/60">
            {String(totalCount).padStart(2, "0")} UNITS
          </span>
        </div>

        <div className="space-y-20 lg:space-y-28">
          {grouped.map(([region, items]) => {
            const first = items[0];
            return (
              <div key={region} className="scroll-fade opacity-0">
                {/* Region header */}
                <div className="flex items-end justify-between gap-6 mb-8 pb-4 border-b border-ink/20">
                  <div>
                    <span className="caption-style text-ink/70 block mb-2">
                      REGION
                    </span>
                    <h3 className="font-display font-bold text-[clamp(2rem,5vw,4rem)] text-ink leading-[0.92] tracking-[-0.03em]">
                      {first.regionEn}
                      <span className="text-ink/40"> · </span>
                      {first.regionKr}
                    </h3>
                  </div>
                  <span className="caption-style text-ink/70 pb-2 shrink-0">
                    {String(items.length).padStart(2, "0")} UNIT
                    {items.length > 1 ? "S" : ""}
                  </span>
                </div>

                {/* Entries */}
                <div className="divide-y divide-ink/10">
                  {items.map((d) => (
                    <article
                      key={d.id}
                      className="grid grid-cols-1 md:grid-cols-[auto_1fr_auto] gap-4 md:gap-8 items-start py-6"
                    >
                      <span className="caption-style text-ink/70 md:w-20 shrink-0 pt-1">
                        {d.date}
                      </span>
                      <div>
                        <p className="font-display font-bold text-[clamp(1.15rem,1.8vw,1.5rem)] text-ink tracking-tight leading-[1.2]">
                          {d.client}
                        </p>
                        <p className="caption-style text-ink/70 mt-1.5">
                          {d.location} · UNIT {d.product}
                        </p>
                        <p className="text-body-kr font-korean text-ink/80 leading-[1.7] mt-3 max-w-3xl">
                          {d.summary}
                        </p>
                      </div>
                      <span className="caption-style text-ink/60 md:text-right shrink-0 pt-1.5">
                        REC · {String(DELIVERIES.indexOf(d) + 1).padStart(3, "0")}
                      </span>
                    </article>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── Closing ── */}
      <section className="bg-ink py-24 lg:py-32">
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] items-end gap-10">
            <div>
              <span className="scroll-fade caption-style text-paper/70 block mb-6 opacity-0">
                NEXT CASE ·  YOURS
              </span>
              <h2 className="scroll-fade font-display font-bold text-[clamp(2rem,5vw,4rem)] text-paper leading-[0.95] tracking-[-0.03em] opacity-0">
                YOUR ROASTERY
                <br />
                ON THIS PAGE.
              </h2>
              <p className="scroll-fade text-body-kr font-korean text-paper/85 leading-[1.75] mt-6 max-w-md opacity-0">
                다음 기록 01은 당신의 매장이 될 수 있습니다. 현장 조사부터
                시운전까지 한 팀이 끝까지 함께합니다.
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
      <span className="caption-style text-ink/70 block mb-2">{label}</span>
      <span className="font-display font-bold text-[clamp(1.6rem,2.8vw,2.25rem)] text-ink tracking-tight leading-[1]">
        {value}
      </span>
    </div>
  );
}
