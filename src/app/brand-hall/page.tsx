"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";
import { IMAGES } from "@/lib/images";
import FloatingSectionNav, { type NavSection } from "@/components/layout/FloatingSectionNav";
import Image from "next/image";
import Link from "next/link";

const SECTIONS: NavSection[] = [
  { id: "overview", label: "개요" },
  { id: "edition", label: "그래피티 에디션" },
  { id: "film", label: "디테일 필름" },
  { id: "scenes", label: "장면들" },
  { id: "machines", label: "라인업" },
  { id: "manifesto", label: "브랜드 노트" },
  { id: "event", label: "다음 전시" },
];

// Bento composition — pairs are sized so each row's heights align:
// row 1: col-span-8 aspect-[3/2]  ⟷  col-span-4 aspect-[3/4]   (hero + tall)
// row 2: col-span-5 aspect-square  ⟷  col-span-7 aspect-[7/5]   (square + wide)
const EDITION_BANNERS = [
  {
    image: IMAGES.brandGraffitiGalleryPair,
    plate: "PLATE 01 — GALLERY",
    title: "그래피티 에디션",
    body: "커스텀 컬러와 그래픽을 입힌 애프터버너. 장비의 표면이 브랜드의 첫인상이 됩니다.",
    colSpan: "lg:col-span-8",
    aspect: "aspect-[3/2]",
    captionScale: "lg" as const,
  },
  {
    image: IMAGES.brandKubanGraffitiPair,
    plate: "PLATE 02 — KUBAN ON DRUM",
    title: "로스터와 함께 놓였을 때",
    body: "KUBAN 드럼 로스터와 같은 공간에 놓아도 어색하지 않은 색감과 비례를 확인합니다.",
    colSpan: "lg:col-span-4",
    aspect: "aspect-[3/4]",
    captionScale: "sm" as const,
  },
  {
    image: IMAGES.brandKubanAfterburnerMix,
    plate: "PLATE 03 — FAMILY",
    title: "한 공간의 장비들",
    body: "로스터, 애프터버너, 배기 라인까지. 카페 한쪽을 차지하는 장비의 분위기를 함께 봅니다.",
    colSpan: "lg:col-span-5",
    aspect: "aspect-square",
    captionScale: "sm" as const,
  },
  {
    image: IMAGES.brandAfterburnerFiveLineup,
    plate: "PLATE 04 — LINEUP",
    title: "용량별 라인업",
    body: "5K부터 대형 모델까지 같은 설계 언어로 정리한 NKJC 라인업. 색상은 현장에 맞춰 조정합니다.",
    colSpan: "lg:col-span-7",
    aspect: "aspect-[7/5]",
    captionScale: "lg" as const,
  },
];

// Detail frames cycled in the "Detail Film".
const DETAIL_FRAMES = [
  { image: IMAGES.brandGraffitiGalleryPair, label: "텍스처 · 그래피티 표면" },
  { image: IMAGES.brandAfterburnerFiveLineup, label: "센터 · 블루/골드 번개" },
  { image: IMAGES.brandKubanGraffitiPair, label: "경계 · 스테인리스와 컬러" },
  { image: IMAGES.brandKubanAfterburnerMix, label: "디테일 · 설치 공간과 조명" },
];

const SCENE_CARDS = [
  {
    id: "workshop",
    title: "작업장",
    subtitle: "모든 것의 시작",
    description: "제작, 조립, 점검이 한곳에서 이어집니다. 납품 전 장비의 상태를 마지막까지 확인합니다.",
    image: IMAGES.obs02,
    aspect: "aspect-[4/5]",
  },
  {
    id: "golden",
    title: "골든 아워",
    subtitle: "로스터리의 아침",
    description: "아침 첫 배치가 시작돼도 매장 밖의 공기는 차분해야 합니다. 장비는 그 시간을 위해 일합니다.",
    image: IMAGES.missionRight,
    aspect: "aspect-[4/5]",
  },
  {
    id: "neighborhood",
    title: "동네 한복판",
    subtitle: "서울의 저녁",
    description: "주거지와 가까운 로스터리일수록 배기 설계가 중요합니다. 조용한 저녁도 운영의 일부입니다.",
    image: IMAGES.installationPhoto,
    aspect: "aspect-[4/5]",
  },
  {
    id: "brick-cafe",
    title: "브릭월 카페",
    subtitle: "현실의 설치 현장",
    description: "로스터, 사이클론, 애프터버너가 한 벽면에 들어갑니다. 보기 좋은 배치도 설치 품질입니다.",
    image: IMAGES.brandBrickCafeInstall,
    aspect: "aspect-[4/5]",
  },
];

export default function BrandHallPage() {
  const pageRef = useRef<HTMLDivElement>(null);
  const [detailIdx, setDetailIdx] = useState(0);

  // Cycle the Detail Film every 3s
  useEffect(() => {
    const id = setInterval(() => {
      setDetailIdx((i) => (i + 1) % DETAIL_FRAMES.length);
    }, 3000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const heroLines = pageRef.current?.querySelectorAll(".hero-line");
      if (heroLines) {
        gsap.fromTo(
          heroLines,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "power3.out" }
        );
      }

      const banners = pageRef.current?.querySelectorAll(".banner-fade");
      if (banners) {
        banners.forEach((el) => {
          gsap.fromTo(
            el,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 0.9,
              ease: "power3.out",
              scrollTrigger: {
                trigger: el,
                start: "top 85%",
                toggleActions: "play none none none",
              },
            }
          );
        });
      }

      const items = pageRef.current?.querySelectorAll(".scene-card");
      if (items) {
        items.forEach((item) => {
          gsap.fromTo(
            item,
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
              ease: "power2.out",
              scrollTrigger: {
                trigger: item,
                start: "top 85%",
                toggleActions: "play none none none",
              },
            }
          );
        });
      }

      const parallaxImgs = pageRef.current?.querySelectorAll(".gallery-parallax");
      if (parallaxImgs) {
        parallaxImgs.forEach((img) => {
          gsap.to(img, {
            yPercent: -10,
            ease: "none",
            scrollTrigger: {
              trigger: img.parentElement,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.5,
            },
          });
        });
      }
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef} className="bg-ink min-h-screen">
      <FloatingSectionNav sections={SECTIONS} />

      {/* ── HERO ── */}
      <div id="overview" className="relative h-[80vh] flex flex-col justify-end container-content pb-16">
        <span className="hero-line caption-style text-white/90 block mb-6 opacity-0 font-korean">
          브랜드 홀 · 장비 쇼룸
        </span>
        <h1 className="m-0 font-display font-bold text-[clamp(3rem,10vw,9rem)] text-paper leading-[0.85] tracking-[-0.04em] font-korean">
          <span className="hero-line block opacity-0">카페에 놓이는</span>
          <span className="hero-line block opacity-0">장비의 표정.</span>
          <span className="sr-only">
            . 엔비피코리아 브랜드 홀 — 커스텀 에디션, 디테일 필름, 카페 설치 장면, 그리고 NKJC 라인업.
          </span>
        </h1>
        <p className="hero-line text-body-kr font-korean text-white/90 mt-8 max-w-md opacity-0">
          로스터와 애프터버너는 성능만큼 매장 안에서의 존재감도 중요합니다.
          이 페이지는 엔비피코리아 장비가 실제 공간에서 어떻게 보이는지 모아둔 쇼룸입니다.
        </p>
      </div>

      {/* ── GRAFFITI EDITION — full-wide cinematic banners ── */}
      <section id="edition" className="border-t border-paper/10">
        <div className="container-content pt-16 pb-4">
          <div className="flex items-baseline justify-between gap-6 mb-10">
            <span className="caption-style text-white/85 font-korean">
              커스텀 에디션 · 메인 쇼룸
            </span>
            <span className="caption-style text-white/60">
              {String(EDITION_BANNERS.length).padStart(2, "0")} PLATES
            </span>
          </div>
        </div>

        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 lg:gap-4">
            {EDITION_BANNERS.map((b) => {
              const titleSize =
                b.captionScale === "lg"
                  ? "text-[clamp(1.5rem,2.6vw,2.4rem)]"
                  : "text-[clamp(1.1rem,1.7vw,1.6rem)]";
              const bodySize =
                b.captionScale === "lg" ? "text-sm lg:text-[0.95rem]" : "text-xs lg:text-[0.82rem]";
              const padding = b.captionScale === "lg" ? "p-6 lg:p-8" : "p-5 lg:p-6";
              return (
                <div
                  key={b.image}
                  className={`banner-fade relative col-span-1 ${b.colSpan} overflow-hidden rounded-lg bg-ink/60 opacity-0`}
                >
                  <div className={`relative ${b.aspect} w-full`}>
                    <Image
                      src={b.image}
                      alt={b.title}
                      fill
                      sizes="(min-width: 1024px) 66vw, 100vw"
                      className="object-cover object-center"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-ink/90 via-ink/35 to-transparent pointer-events-none" />
                  </div>

                  <div className={`absolute bottom-0 left-0 right-0 ${padding}`}>
                    <span className="caption-style text-white/85 block mb-2">
                      {b.plate}
                    </span>
                    <h3
                      className={`font-display font-bold ${titleSize} text-paper leading-[1.1] tracking-[-0.02em] mb-2 font-korean`}
                    >
                      {b.title}
                    </h3>
                    <p
                      className={`font-korean text-white/85 leading-[1.6] ${bodySize}`}
                    >
                      {b.body}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── INTERLUDE — quiet mood strip with existing atmospheric stills ── */}
      <section aria-hidden="true" className="border-t border-paper/10 mt-3 lg:mt-4">
        <div className="container-content py-10 lg:py-14">
          <div className="grid grid-cols-3 gap-3 lg:gap-4">
            {[IMAGES.obs01, IMAGES.evidenceFloat, IMAGES.footerMood].map((src, i) => (
              <div
                key={src + i}
                className="banner-fade relative aspect-[4/5] overflow-hidden rounded-lg bg-ink/60 opacity-0"
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 33vw, 33vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-ink/15" />
              </div>
            ))}
          </div>
          <p className="caption-style text-white/55 mt-4 font-korean">
            인터루드 — 작업장, 소재, 설치 전의 장면들
          </p>
        </div>
      </section>

      {/* ── DETAIL FILM — crossfade detail crops ── */}
      <section id="film" className="border-t border-paper/10">
        <div className="container-content py-20 lg:py-28">
          <div className="flex items-baseline justify-between gap-6 mb-10">
            <span className="caption-style text-white/85 font-korean">
              디테일 필름 · 표면과 마감
            </span>
            <span className="caption-style text-white/60">
              {String(detailIdx + 1).padStart(2, "0")} / {String(DETAIL_FRAMES.length).padStart(2, "0")}
            </span>
          </div>

          <div className="relative aspect-[21/9] lg:aspect-[3/1] rounded-lg overflow-hidden bg-ink/60">
            {DETAIL_FRAMES.map((f, i) => (
              <div
                key={f.image + i}
                className="absolute inset-0 transition-opacity duration-[1500ms] ease-in-out"
                style={{ opacity: i === detailIdx ? 1 : 0 }}
              >
                <Image
                  src={f.image}
                  alt={f.label}
                  fill
                  sizes="100vw"
                  className="object-contain object-center"
                />
                <div className="absolute inset-0 bg-ink/15 pointer-events-none" />
              </div>
            ))}

            <div className="absolute bottom-6 left-8 right-8 flex items-end justify-between gap-4">
              <span className="caption-style text-white/90 font-korean">
                {DETAIL_FRAMES[detailIdx].label}
              </span>
              <div className="flex items-center gap-2">
                {DETAIL_FRAMES.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setDetailIdx(i)}
                    aria-label={`Detail ${i + 1}`}
                    className={`h-[2px] transition-all duration-300 ${
                      i === detailIdx ? "w-10 bg-paper" : "w-6 bg-paper/40 hover:bg-paper/70"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          <p className="caption-style text-white/65 mt-4 font-korean">
            3초 간격으로 자동 전환 — 표면 텍스처, 컬러 디테일, 설치 공간의 인상까지.
          </p>
        </div>
      </section>

      {/* ── SCENES — 4 cards including new brick-wall café ── */}
      <section id="scenes" className="border-t border-paper/10">
        <div className="container-content py-20 lg:py-28">
          <div className="flex items-baseline justify-between gap-6 mb-10">
            <span className="caption-style text-white/85 font-korean">
              장면들 · 현장과 운영
            </span>
            <span className="caption-style text-white/60">
              {String(SCENE_CARDS.length).padStart(2, "0")} SCENES
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {SCENE_CARDS.map((s) => (
              <SceneCard key={s.id} item={s} />
            ))}
          </div>
        </div>
      </section>

      {/* ── THE MACHINES — single wide showcase ── */}
      <section id="machines" className="border-t border-paper/10">
        <div className="container-content py-20 lg:py-28">
          <div className="flex items-baseline justify-between gap-6 mb-10">
            <span className="caption-style text-white/85 font-korean">
              라인업 · 현장에 맞춰 고르는 장비
            </span>
            <span className="caption-style text-white/60">NKJC SERIES</span>
          </div>

          <div className="banner-fade relative aspect-[16/9] rounded-lg overflow-hidden bg-ink/60 opacity-0">
            <Image
              src={IMAGES.brandAfterburnerTrio}
              alt="NKJC 애프터버너 라인업"
              fill
              sizes="100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-ink/85 via-ink/30 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 px-[var(--edge-margin)] pb-8 lg:pb-10 flex flex-wrap items-end justify-between gap-x-10 gap-y-3">
              <div>
                <h3 className="font-display font-bold text-[clamp(1.4rem,2.6vw,2.2rem)] text-paper leading-[1.1] tracking-[-0.02em] font-korean">
                  용량은 달라도, 한눈에 보이는 기준
                </h3>
                <p className="text-sm font-korean text-white/85 mt-2 max-w-md">
                  NKJC 시리즈는 5K부터 60K까지 공개 라인업을 갖추고 있습니다. 색상은 현장 분위기에 맞춰 조정할 수 있습니다.
                </p>
              </div>
              <div className="flex items-baseline gap-6 caption-style text-white/80">
                <span>NKJC-5K</span>
                <span>NKJC-15K</span>
                <span>NKJC-30K</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MANIFESTO — Why we did this ── */}
      <section id="manifesto" className="border-t border-paper/10">
        <div className="container-content py-24 lg:py-32 grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20">
          <div>
            <span className="caption-style text-white/90 block mb-4 font-korean">
              브랜드 노트
            </span>
            <h2 className="font-display font-bold text-[clamp(2rem,4vw,3.5rem)] text-paper leading-[0.95] tracking-[-0.03em] font-korean">
              성능은 기본.
              <br />
              공간에
              <br />
              어울려야
              <br />
              합니다.
            </h2>
            <div className="banner-fade relative aspect-[3/4] mt-10 overflow-hidden rounded-lg bg-ink/60 opacity-0 max-w-xs">
              <Image
                src={IMAGES.obs03}
                alt=""
                fill
                sizes="(min-width: 1024px) 25vw, 70vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-ink/20" />
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-body-kr font-korean text-white/90 leading-[1.75] mb-6">
              카페 장비는 더 이상 뒤편에 숨겨두기만 하는 물건이 아닙니다.
              로스터 옆의 애프터버너, 벽면을 따라 올라가는 배기 라인,
              손님 눈에 보이는 금속의 마감까지 모두 매장의 인상을 만듭니다.
            </p>
            <p className="text-body-kr font-korean text-white/90 leading-[1.75] mb-8">
              그래서 우리는 성능표만 보여주지 않고, 장비가 공간 안에서
              어떻게 보이는지도 함께 보여줍니다. 커스텀 컬러, 설치 비례,
              로스터와의 조합까지 확인한 뒤 선택할 수 있어야 좋은 장비입니다.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-paper text-ink px-5 py-2.5 text-xs font-bold tracking-[0.04em] hover:bg-ink hover:text-paper border-2 border-paper transition-all duration-200 rounded-lg self-start font-korean"
            >
              이야기 나누기
            </Link>
          </div>
        </div>
      </section>

      {/* ── INTERLUDE 02 — wide closing mood ── */}
      <section aria-hidden="true" className="border-t border-paper/10">
        <div className="container-content py-12 lg:py-16">
          <div className="banner-fade relative aspect-[21/9] overflow-hidden rounded-lg bg-ink/60 opacity-0">
            <Image
              src={IMAGES.closingMood}
              alt=""
              fill
              sizes="100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-ink/25" />
          </div>
        </div>
      </section>

      {/* ── EVENT CTA ── */}
      <section id="event" className="border-t border-paper/10">
        <div className="container-content py-24 text-center">
          <p className="font-heading font-semibold text-[clamp(1.5rem,3vw,2.5rem)] text-white/85 leading-[1.35] mb-4 font-korean">
            다음 전시가 궁금하신가요?
          </p>
          <p className="text-body-kr font-korean text-white/80 mb-10">
            커스텀 컬러나 쇼룸 상담이 필요하시면 편하게 문의해 주세요.
          </p>
          <Link
            href="/contact"
            className="btn-pill bg-paper text-ink hover:bg-ink hover:text-paper border-2 border-paper transition-all duration-200 rounded-lg font-korean"
          >
            쇼룸 상담하기 <span className="ml-2">&rarr;</span>
          </Link>
        </div>
      </section>
    </div>
  );
}

function SceneCard({ item }: { item: (typeof SCENE_CARDS)[number] }) {
  return (
    <div className={`scene-card group relative overflow-hidden rounded-lg opacity-0 ${item.aspect}`}>
      <div className="gallery-parallax absolute inset-0 -top-[10%] -bottom-[10%]">
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      <div className="absolute inset-0 bg-ink/35 group-hover:bg-ink/60 transition-colors duration-500" />

      <div className="absolute inset-0 flex flex-col justify-end p-6">
        <span className="caption-style text-white/80 mb-2 font-korean">
          {item.subtitle}
        </span>
        <h3 className="font-display font-bold text-[clamp(1.05rem,1.6vw,1.4rem)] text-paper leading-[1.15] tracking-[-0.02em] mb-3 font-korean">
          {item.title}
        </h3>
        <p className="text-xs font-korean text-white/90 leading-[1.6] max-w-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          {item.description}
        </p>
      </div>
    </div>
  );
}
