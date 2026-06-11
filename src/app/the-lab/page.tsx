"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import {
  NUTBUTTER_PRODUCT,
  HEADLINE,
  PROCESS,
  HUB_CARDS,
  LIBRARY,
  TRUST_STATS,
  TRUST_BLURB,
  PARTNER_TYPES,
  INSTALL_SHOTS,
  ASSURANCE,
  PACKAGE_INCLUDES,
  BUYING_STEPS,
  TESTIMONIALS,
  RATING_AVG,
  FAQ_CATEGORIES,
} from "@/lib/nutbutter";
import FloatingSectionNav, { type NavSection } from "@/components/layout/FloatingSectionNav";
import MobileSectionNav from "@/components/the-lab/MobileSectionNav";
import FaqAccordion from "@/components/the-lab/FaqAccordion";
import EditorialCard from "@/components/the-lab/EditorialCard";
import Image from "next/image";
import Link from "next/link";

const SECTIONS: NavSection[] = [
  { id: "overview", label: "개요" },
  { id: "trust", label: "실적" },
  { id: "process", label: "사용" },
  { id: "showcase", label: "현장" },
  { id: "spec", label: "사양" },
  { id: "buying", label: "구성·도입" },
  { id: "catalog", label: "자료" },
  { id: "reviews", label: "후기" },
  { id: "faq", label: "FAQ" },
  { id: "contact", label: "문의" },
];

export default function TheLabPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const heroEls = pageRef.current?.querySelectorAll(".hero-fade");
      if (heroEls) {
        gsap.fromTo(
          heroEls,
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: "power2.out" }
        );
      }

      const fadeEls = pageRef.current?.querySelectorAll(".scroll-fade");
      if (fadeEls) {
        fadeEls.forEach((el) => {
          gsap.fromTo(
            el,
            { opacity: 0, y: 18 },
            {
              opacity: 1,
              y: 0,
              duration: 0.5,
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
      <MobileSectionNav sections={SECTIONS} />

      {/* ── Overview · 컴팩트 히어로 ── */}
      <section id="overview" className="container-content pt-16 lg:pt-32 pb-16 lg:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-16 items-center">
          <div>
            <span className="hero-fade caption-style text-ink/90 block mb-5 opacity-0 font-korean">
              더 랩 / 넛버터머신 · 땅콩버터머신 · 피넛버터머신
            </span>
            <h1 className="hero-fade font-display font-bold text-[clamp(2.5rem,7vw,6rem)] text-ink leading-[0.9] tracking-[-0.03em] opacity-0 font-korean">
              넣고, 갈고, 담고.
              <br />
              한 대로 끝.
            </h1>
            <p className="hero-fade text-body-kr font-korean text-ink/85 leading-[1.75] mt-7 max-w-xl opacity-0">
              카운터 위에서 직접 가는 상업용 땅콩버터·견과버터머신, 넛츠스타.
              견과를 넣으면 부드러운 버터부터 크런치한 식감까지 원터치로,
              따뜻할 때 그대로 병에 담깁니다. 갓 간 땅콩버터를 카페 시그니처
              신메뉴로 — 추가 매출까지 한 대로. 시간당 50kg · 220V 가정용 전원.
            </p>

            {/* 핵심 사양 칩 */}
            <dl className="hero-fade mt-8 grid grid-cols-2 sm:grid-cols-4 gap-px bg-ink/15 border-2 border-ink opacity-0">
              {HEADLINE.map((s) => (
                <div key={s.k} className="bg-paper p-4">
                  <dt className="caption-style text-ink/70 font-korean">{s.k}</dt>
                  <dd className="font-display font-bold text-[clamp(1rem,1.6vw,1.4rem)] text-ink leading-tight mt-1 tracking-tight">
                    {s.v}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="hero-fade mt-9 flex flex-wrap gap-3 opacity-0">
              <Link
                href="/contact"
                className="inline-block bg-ink text-paper px-6 py-3 text-sm font-bold tracking-[0.04em] border-2 border-ink rounded-lg hover:bg-paper hover:text-ink transition-all duration-200 font-korean"
              >
                견적 · 무상 시연 문의 <span className="ml-2">&rarr;</span>
              </Link>
              <a
                href="#catalog"
                className="inline-block bg-paper text-ink px-6 py-3 text-sm font-bold tracking-[0.04em] border-2 border-ink rounded-lg hover:bg-ink hover:text-paper transition-all duration-200 font-korean"
              >
                사용 · 관리 · 레시피
              </a>
            </div>
          </div>

          <div className="hero-fade relative aspect-[4/5] rounded-lg overflow-hidden bg-bone opacity-0">
            <Image
              src={NUTBUTTER_PRODUCT.heroImage}
              alt="넛츠스타 NUTS-STAR 넛버터머신"
              fill
              priority
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* ── Trust · 현장 실적 (전용 신뢰 섹션) ── */}
      <section id="trust" className="border-t-2 border-ink bg-ink">
        <div className="container-content py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16 items-end">
            <div className="scroll-fade opacity-0">
              <span className="caption-style text-paper/70 block mb-4 font-korean">
                현장 실적
              </span>
              <h2 className="font-display font-bold text-[clamp(1.75rem,3.5vw,3rem)] text-paper leading-[1.05] tracking-[-0.02em] font-korean">
                이미 매장에서
                <br />
                매일 돌아갑니다.
              </h2>
              <p className="text-body-kr font-korean text-paper/80 leading-[1.75] mt-6 max-w-lg">
                {TRUST_BLURB}
              </p>
              <ul className="flex flex-wrap gap-2 mt-7">
                {PARTNER_TYPES.map((t) => (
                  <li
                    key={t}
                    className="border border-paper/30 rounded-full px-3.5 py-1.5 caption-style text-paper/80 font-korean"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            <dl className="scroll-fade opacity-0 grid grid-cols-2 gap-px bg-paper/20 border-2 border-paper">
              {TRUST_STATS.map((s) => (
                <div key={s.label} className="bg-ink p-6 lg:p-8">
                  <dd className="font-display font-bold text-[clamp(2rem,4vw,3.5rem)] text-paper leading-none tracking-[-0.02em]">
                    {s.value}
                    {s.unit && (
                      <span className="text-[0.5em] font-bold ml-1 align-baseline">
                        {s.unit}
                      </span>
                    )}
                  </dd>
                  <dt className="caption-style text-paper/70 mt-3 font-korean">
                    {s.label}
                  </dt>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ── Process · 사용 3단계 (이미지 서사: 재료 → 분쇄 → 결과물) ── */}
      <section id="process" className="border-t-2 border-ink">
        <div className="container-content py-20 lg:py-28">
          <div className="scroll-fade opacity-0 mb-12">
            <span className="caption-style text-ink/90 block mb-4 font-korean">
              사용
            </span>
            <h2 className="font-display font-bold text-[clamp(1.75rem,3.5vw,3rem)] text-ink leading-[1.05] tracking-[-0.02em] font-korean">
              세 단계, 그 이상은 없습니다.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {PROCESS.map((step) => (
              <div
                key={step.no}
                className="scroll-fade opacity-0 border-2 border-ink bg-paper overflow-hidden"
              >
                <div className="relative aspect-[4/3] bg-bone border-b-2 border-ink">
                  <Image
                    src={step.thumb}
                    alt={step.title}
                    fill
                    sizes="(min-width: 768px) 30vw, 100vw"
                    className="object-cover object-center"
                  />
                  <span className="absolute top-3 left-3 font-display font-bold text-[clamp(1.5rem,3vw,2.25rem)] text-paper leading-none mix-blend-difference">
                    {step.no}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-display font-bold text-[clamp(1.1rem,1.8vw,1.5rem)] text-ink mb-3 tracking-tight font-korean">
                    {step.title}
                  </h3>
                  <p className="text-body-kr font-korean text-ink/85 leading-[1.7]">
                    {step.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Showcase · 설치 현장 (소셜 프루프) ── */}
      <section id="showcase" className="border-t-2 border-ink bg-bone">
        <div className="container-content py-20 lg:py-28">
          <div className="scroll-fade opacity-0 mb-12 flex flex-wrap items-end justify-between gap-6">
            <div>
              <span className="caption-style text-ink/90 block mb-4 font-korean">
                설치 현장
              </span>
              <h2 className="font-display font-bold text-[clamp(1.75rem,3.5vw,3rem)] text-ink leading-[1.05] tracking-[-0.02em] font-korean">
                카운터 위, 진짜 매장에서.
              </h2>
            </div>
            <p className="text-body-kr font-korean text-ink/70 max-w-sm leading-[1.7]">
              카페 · 베이커리 · 견과 전문점. 형태가 달라도 같은 한 대로 돌아갑니다.
            </p>
          </div>

          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {INSTALL_SHOTS.map((shot) => (
              <li
                key={shot.id}
                className="scroll-fade opacity-0 border-2 border-ink bg-paper overflow-hidden"
              >
                <div className="relative aspect-[4/3] bg-bone border-b-2 border-ink">
                  <Image
                    src={shot.thumb}
                    alt={`${shot.region} ${shot.type} 설치 현장`}
                    fill
                    sizes="(min-width: 1024px) 23vw, (min-width: 640px) 45vw, 100vw"
                    className="object-cover object-center"
                  />
                </div>
                <div className="p-5">
                  <span className="caption-style text-ink/70 block mb-2 font-korean">
                    {shot.region} · {shot.type}
                  </span>
                  <p className="text-body-kr font-korean text-ink/85 leading-[1.6]">
                    {shot.caption}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Spec · 사양 + 쓰이는 곳 ── */}
      <section id="spec" className="border-t-2 border-ink">
        <div className="container-content py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-20">
            <div className="scroll-fade opacity-0">
              <span className="caption-style text-ink/90 block mb-4 font-korean">
                사양
              </span>
              <h2 className="font-display font-bold text-[clamp(1.75rem,3.5vw,3rem)] text-ink leading-[1.05] tracking-[-0.02em] font-korean">
                국내에서 만들고,
                <br />
                국내에서 고칩니다.
              </h2>
              <p className="text-body-kr font-korean text-ink/75 leading-[1.75] mt-6">
                설계·제작·A/S를 직접 합니다. 아래 수치는 대표 사양이며, 매장
                전원과 카운터 배치, 작업 흐름은 도입 전에 함께 점검합니다.
              </p>

              {/* 쓰이는 곳 — 태그 행 */}
              <div className="mt-10">
                <span className="caption-style text-ink/60 block mb-3 font-korean">
                  쓰이는 곳
                </span>
                <ul className="flex flex-wrap gap-2">
                  {NUTBUTTER_PRODUCT.applications.map((app) => (
                    <li
                      key={app}
                      className="border border-ink/25 rounded-full px-3.5 py-1.5 caption-style text-ink/80 font-korean"
                    >
                      {app}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 사양표 — 에디토리얼 스펙 시트 */}
            <div className="scroll-fade opacity-0">
              <dl className="border-t-2 border-ink">
                {NUTBUTTER_PRODUCT.specs.map(({ label, value }) => (
                  <div
                    key={label}
                    className="grid grid-cols-[80px_1fr] md:grid-cols-[120px_1fr] gap-x-6 py-4 border-b border-bone"
                  >
                    <dt className="caption-style text-ink/60 pt-1.5 font-korean">
                      {label}
                    </dt>
                    <dd className="font-display font-bold text-[clamp(0.95rem,1.4vw,1.2rem)] text-ink leading-snug tracking-tight">
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          {/* 특징 — 두 열 아래 전체 폭 4열 (오른쪽 쏠림 방지) */}
          <div className="scroll-fade opacity-0 mt-16 lg:mt-20 border-t-2 border-ink pt-10">
            <span className="caption-style text-ink/90 block mb-7 font-korean">
              특징
            </span>
            <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10">
              {NUTBUTTER_PRODUCT.features.map((f, i) => (
                <li
                  key={f}
                  className="flex items-start gap-4 py-3 border-b border-bone"
                >
                  <span className="caption-style text-ink/80 w-6 shrink-0 pt-0.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-body-kr font-korean text-ink/85 leading-[1.55]">
                    {f}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ── Buying · 구성 · 보증 · 도입 (고가 장비 구매 안심) ── */}
      <section id="buying" className="border-t-2 border-ink bg-ink">
        <div className="container-content py-20 lg:py-28">
          <div className="scroll-fade opacity-0 mb-12 max-w-2xl">
            <span className="caption-style text-paper/70 block mb-4 font-korean">
              구성 · 도입
            </span>
            <h2 className="font-display font-bold text-[clamp(1.75rem,3.5vw,3rem)] text-paper leading-[1.05] tracking-[-0.02em] font-korean">
              사기 전에, 다 보고 결정하세요.
            </h2>
            <p className="text-body-kr font-korean text-paper/80 leading-[1.75] mt-5">
              고가 장비인 만큼 시연부터 설치·보증·A/S까지 투명하게 안내합니다.
              가격은 매장 구성과 물량에 맞춰 견적드립니다.
            </p>
          </div>

          {/* 안심 4종 */}
          <div className="scroll-fade opacity-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-paper/20 border-2 border-paper mb-12">
            {ASSURANCE.map((a) => (
              <div key={a.title} className="bg-ink p-6 lg:p-7">
                <h3 className="font-display font-bold text-[clamp(1.1rem,1.8vw,1.4rem)] text-paper tracking-tight mb-3 font-korean">
                  {a.title}
                </h3>
                <p className="text-body-kr font-korean text-paper/75 leading-[1.65]">
                  {a.body}
                </p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* 기본 구성 */}
            <div className="scroll-fade opacity-0">
              <span className="caption-style text-paper/60 block mb-4 font-korean">
                기본 구성
              </span>
              <dl className="border-t border-paper/30">
                {PACKAGE_INCLUDES.map((p) => (
                  <div
                    key={p.label}
                    className="grid grid-cols-[88px_1fr] gap-x-5 py-4 border-b border-paper/15"
                  >
                    <dt className="font-display font-bold text-paper text-[clamp(0.95rem,1.3vw,1.1rem)] tracking-tight font-korean">
                      {p.label}
                    </dt>
                    <dd className="text-body-kr font-korean text-paper/75 leading-[1.6]">
                      {p.desc}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* 도입 절차 */}
            <div className="scroll-fade opacity-0">
              <span className="caption-style text-paper/60 block mb-4 font-korean">
                도입 절차
              </span>
              <ol className="border-t border-paper/30">
                {BUYING_STEPS.map((s) => (
                  <li
                    key={s.no}
                    className="grid grid-cols-[40px_70px_1fr] gap-x-4 py-4 border-b border-paper/15 items-baseline"
                  >
                    <span className="font-display font-bold text-paper/40 text-[clamp(1rem,1.6vw,1.4rem)]">
                      {s.no}
                    </span>
                    <span className="font-display font-bold text-paper text-[clamp(0.95rem,1.3vw,1.1rem)] font-korean">
                      {s.title}
                    </span>
                    <span className="text-body-kr font-korean text-paper/75 leading-[1.6]">
                      {s.body}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* 중간 CTA */}
          <div className="scroll-fade opacity-0 mt-12 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="inline-block bg-paper text-ink px-6 py-3 text-sm font-bold tracking-[0.04em] border-2 border-paper rounded-lg hover:bg-ink hover:text-paper transition-all duration-200 font-korean"
            >
              무상 시연 · 견적 문의 <span className="ml-2">&rarr;</span>
            </Link>
            <span className="caption-style text-paper/70 font-korean">
              부담 없이 결과물부터 확인하세요.
            </span>
          </div>
        </div>
      </section>

      {/* ── Catalog · 사용 · 청소 · 레시피 카드 허브 ── */}
      <section id="catalog" className="border-t-2 border-ink bg-bone">
        <div className="container-content py-20 lg:py-28">
          <div className="scroll-fade opacity-0 mb-12 max-w-2xl">
            <span className="caption-style text-ink/90 block mb-4 font-korean">
              사용 · 관리 · 레시피
            </span>
            <h2 className="font-display font-bold text-[clamp(1.75rem,3.5vw,3rem)] text-ink leading-[1.05] tracking-[-0.02em] font-korean">
              필요한 건 전부 여기에.
            </h2>
            <p className="text-body-kr font-korean text-ink/75 leading-[1.75] mt-5">
              처음 켜는 날부터 매일의 청소, 갓 만든 땅콩버터 레시피까지.
              카드를 눌러 단계별로 확인하세요. 영상과 사진은 순차적으로 더해집니다.
            </p>
          </div>

          <div className="space-y-14">
            {HUB_CARDS.map((group) => (
              <div key={group.group} className="scroll-fade opacity-0">
                <div className="flex items-baseline justify-between gap-4 mb-6 border-b-2 border-ink pb-3">
                  <h3 className="font-display font-bold text-[clamp(1.25rem,2.2vw,1.8rem)] text-ink tracking-[-0.02em] font-korean">
                    {group.group}
                  </h3>
                  <Link
                    href={group.href}
                    className="caption-style text-ink/70 hover:underline underline-offset-4 font-korean whitespace-nowrap"
                  >
                    전체 {group.cards.length}개 &rarr;
                  </Link>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
                  {group.cards.map((c) => (
                    <EditorialCard
                      key={c.href}
                      href={c.href}
                      thumb={c.thumb}
                      eyebrow={c.eyebrow}
                      title={c.title}
                      video={group.variant === "video"}
                      badge={
                        group.variant === "video"
                          ? c.meta.replace("영상 · ", "")
                          : undefined
                      }
                      meta={group.variant === "video" ? undefined : c.meta}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Reviews · 거래처 후기 (소셜 프루프) ── */}
      <section id="reviews" className="border-t-2 border-ink">
        <div className="container-content py-20 lg:py-28">
          <div className="scroll-fade opacity-0 mb-12 flex flex-wrap items-end justify-between gap-6">
            <div>
              <span className="caption-style text-ink/90 block mb-4 font-korean">
                거래처 후기
              </span>
              <h2 className="font-display font-bold text-[clamp(1.75rem,3.5vw,3rem)] text-ink leading-[1.05] tracking-[-0.02em] font-korean">
                써 본 사장님들의 말.
              </h2>
            </div>
            <div className="text-right">
              <span className="font-display font-bold text-[clamp(2rem,4vw,3rem)] text-ink leading-none tracking-tight">
                {RATING_AVG.toFixed(1)}
              </span>
              <span className="caption-style text-ink/60 block mt-2 font-korean">
                거래처 {TESTIMONIALS.length}곳 평균
              </span>
            </div>
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <li
                key={t.id}
                className="scroll-fade opacity-0 border-2 border-ink bg-paper p-7 flex flex-col"
              >
                <span className="font-display text-ink text-lg tracking-[0.15em]" aria-hidden>
                  {"★".repeat(t.rating)}
                </span>
                <p className="text-body-kr font-korean text-ink/90 leading-[1.7] mt-5 flex-1">
                  “{t.quote}”
                </p>
                <div className="mt-6 pt-5 border-t border-ink/15">
                  <p className="font-display font-bold text-ink text-[clamp(0.95rem,1.3vw,1.1rem)] font-korean">
                    {t.author}
                  </p>
                  <span className="caption-style text-ink/60 font-korean">
                    {t.role}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── FAQ · 구매 판단용 ── */}
      <section id="faq" className="border-t-2 border-ink bg-bone">
        <div className="container-content py-20 lg:py-28">
          <div className="scroll-fade opacity-0 mb-12 flex items-end justify-between gap-6">
            <div>
              <span className="caption-style text-ink/90 block mb-4 font-korean">
                자주 묻는 질문
              </span>
              <h2 className="font-display font-bold text-[clamp(1.75rem,3.5vw,3rem)] text-ink leading-[1.05] tracking-[-0.02em] font-korean">
                먼저 묻고, 먼저 답합니다.
              </h2>
            </div>
            <Link
              href="/the-lab/faq"
              className="caption-style text-ink/90 hover:underline underline-offset-4 hidden md:inline font-korean shrink-0 pb-2"
            >
              전체 FAQ &rarr;
            </Link>
          </div>

          {/* 랜딩엔 구매 판단용 '도입 전'만 미리보기. 전체는 /the-lab/faq */}
          <FaqAccordion categories={FAQ_CATEGORIES.slice(0, 1)} animated />

          <div className="scroll-fade opacity-0 mt-10">
            <Link
              href="/the-lab/faq"
              className="caption-style text-ink hover:underline underline-offset-4 font-korean"
            >
              사용 중 · A/S 등 전체 FAQ 보기 &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ── Library · 전체 자료 디렉토리 ── */}
      <section id="library" className="border-t-2 border-ink">
        <div className="container-content py-20 lg:py-28">
          <div className="scroll-fade opacity-0 mb-12">
            <span className="caption-style text-ink/90 block mb-4 font-korean">
              전체 자료
            </span>
            <h2 className="font-display font-bold text-[clamp(1.75rem,3.5vw,3rem)] text-ink leading-[1.05] tracking-[-0.02em] font-korean">
              사용 · 관리 · 기록을 한곳에.
            </h2>
          </div>

          <ul className="border-t-2 border-ink">
            {LIBRARY.map((item) => {
              const primary = item.tier === "primary";
              return (
                <li
                  key={item.label}
                  className="scroll-fade opacity-0 border-b border-ink/15"
                >
                  <Link
                    href={item.href}
                    className={`group grid grid-cols-[1fr_auto] md:grid-cols-[260px_1fr_auto] gap-x-6 md:gap-x-10 gap-y-1 items-baseline ${
                      primary ? "py-8 md:py-11" : "py-6 md:py-7"
                    }`}
                  >
                    <h3
                      className={`font-display font-bold text-ink leading-[1.15] tracking-[-0.02em] group-hover:underline underline-offset-4 decoration-2 font-korean ${
                        primary
                          ? "text-[clamp(1.7rem,3vw,2.5rem)]"
                          : "text-[clamp(1.2rem,2vw,1.7rem)]"
                      }`}
                    >
                      {item.label}
                    </h3>
                    <p
                      className={`col-span-2 md:col-span-1 font-korean text-ink/75 leading-[1.6] ${
                        primary ? "text-body-kr md:pt-1" : "text-body-kr"
                      }`}
                    >
                      {item.desc}
                    </p>
                    <span className="caption-style text-ink/70 font-korean justify-self-end whitespace-nowrap">
                      {item.meta} <span className="ml-1">&rarr;</span>
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* ── Contact ── */}
      <section id="contact" className="bg-ink py-20 lg:py-28 border-t-2 border-ink">
        <div className="container-content text-center">
          <h2 className="scroll-fade font-display font-bold text-[clamp(1.75rem,4vw,3.25rem)] text-paper leading-[1.05] tracking-[-0.02em] opacity-0 font-korean">
            카운터 위에서 바로 만드는 넛버터.
          </h2>
          <p className="scroll-fade text-body-kr font-korean text-paper/85 mt-5 opacity-0">
            매장 동선과 메뉴 구성에 맞춰 도입 방법을 함께 정리해드립니다.
            먼저 무상 시연으로 결과물부터 확인하세요.
          </p>
          <div className="scroll-fade mt-9 opacity-0">
            <Link
              href="/contact"
              className="btn-pill bg-paper text-ink hover:bg-ink hover:text-paper border-2 border-paper transition-all duration-200 rounded-lg font-korean"
            >
              견적 · 시연 문의 <span className="ml-2">&rarr;</span>
            </Link>
          </div>
          <p className="scroll-fade caption-style text-paper/80 mt-8 opacity-0 font-korean">
            또는 이메일 — nbpkorea@nbpkorea.co.kr
          </p>
        </div>
      </section>
    </div>
  );
}
