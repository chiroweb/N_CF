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
  { id: "manifesto", label: "선언문" },
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
    body: "받침대 위에 올라간 두 대의 애프터버너. 갤러리 조명 아래에서, 처음으로.",
    colSpan: "lg:col-span-8",
    aspect: "aspect-[3/2]",
    captionScale: "lg" as const,
  },
  {
    image: IMAGES.brandKubanGraffitiPair,
    plate: "PLATE 02 — KUBAN ON DRUM",
    title: "쿠반에도, 같은 손",
    body: "터키 KUBAN 드럼 로스터 위의 그래피티. 로스터와 애프터버너의 합동 사진.",
    colSpan: "lg:col-span-4",
    aspect: "aspect-[3/4]",
    captionScale: "sm" as const,
  },
  {
    image: IMAGES.brandKubanAfterburnerMix,
    plate: "PLATE 03 — FAMILY",
    title: "전체 컬렉션",
    body: "쿠반 로스터와 애프터버너 라인업의 합동 전시. 센터에 그래피티 에디션 한 대.",
    colSpan: "lg:col-span-5",
    aspect: "aspect-square",
    captionScale: "sm" as const,
  },
  {
    image: IMAGES.brandAfterburnerFiveLineup,
    plate: "PLATE 04 — LINEUP",
    title: "다섯 대, 한 가족",
    body: "센터의 그래피티 에디션을 둘러싼 표준형 NKJC 라인업 — 색은 모두 커스텀.",
    colSpan: "lg:col-span-7",
    aspect: "aspect-[7/5]",
    captionScale: "lg" as const,
  },
];

// Detail crops cycled in the "Detail Film" — uses object-position scaling
// to highlight different parts of the same hi-res shots without needing
// pre-cropped assets.
const DETAIL_FRAMES = [
  { image: IMAGES.brandGraffitiGalleryPair, position: "50% 60%", scale: 2.0, label: "텍스처 · 그래피티 표면" },
  { image: IMAGES.brandAfterburnerFiveLineup, position: "50% 50%", scale: 2.2, label: "센터 · 블루/골드 번개" },
  { image: IMAGES.brandKubanGraffitiPair, position: "30% 55%", scale: 2.1, label: "경계 · 스테인리스와 컬러" },
  { image: IMAGES.brandKubanAfterburnerMix, position: "70% 55%", scale: 2.0, label: "디테일 · 받침대와 조명" },
];

const SCENE_CARDS = [
  {
    id: "workshop",
    title: "작업장",
    subtitle: "모든 것의 시작",
    description: "모든 유닛은 여기서 시작됩니다. 손, 불, 강철.",
    image: IMAGES.obs02,
    aspect: "aspect-[4/5]",
  },
  {
    id: "golden",
    title: "골든 아워",
    subtitle: "로스터리의 아침",
    description: "아무도 로스팅 냄새를 맡지 못한다는 걸 알 때, 빛은 다르게 느껴집니다.",
    image: IMAGES.missionRight,
    aspect: "aspect-[4/5]",
  },
  {
    id: "neighborhood",
    title: "동네 한복판",
    subtitle: "서울의 저녁",
    description: "주거 단지 안의 로스터리. 자전거 탄 아이는 한 번도 항의하지 않았습니다.",
    image: IMAGES.installationPhoto,
    aspect: "aspect-[4/5]",
  },
  {
    id: "brick-cafe",
    title: "브릭월 카페",
    subtitle: "현실의 설치 현장",
    description: "로스터, 사이클론, 애프터버너가 카페 벽 한 면을 함께 차지합니다. 운영 중에도 정적합니다.",
    image: IMAGES.brandBrickCafeInstall,
    aspect: "aspect-[4/5]",
  },
];

export default function BrandHallPage() {
  const pageRef = useRef<HTMLDivElement>(null);
  const [detailIdx, setDetailIdx] = useState(0);

  // Cycle the Detail Film crops every 6s
  useEffect(() => {
    const id = setInterval(() => {
      setDetailIdx((i) => (i + 1) % DETAIL_FRAMES.length);
    }, 6000);
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
          브랜드 홀 · 전시 아카이브
        </span>
        <h1 className="m-0 font-display font-bold text-[clamp(3rem,10vw,9rem)] text-paper leading-[0.85] tracking-[-0.04em] font-korean">
          <span className="hero-line block opacity-0">뒷편의 기계</span>
          <span className="hero-line block opacity-0">앞쪽의 오브제로.</span>
          <span className="sr-only">
            . 엔비피코리아 브랜드 홀 — 그래피티 에디션 전시, 디테일 필름, 카페 설치 장면, 그리고 NKJC 라인업.
          </span>
        </h1>
        <p className="hero-line text-body-kr font-korean text-white/90 mt-8 max-w-md opacity-0">
          우리는 기계를 만듭니다. 하지만 가끔, 기계가 예술이 되는 순간이
          있습니다. 이곳은 그 순간들을 모아둔 공간입니다.
        </p>
      </div>

      {/* ── GRAFFITI EDITION — full-wide cinematic banners ── */}
      <section id="edition" className="border-t border-paper/10">
        <div className="container-content pt-16 pb-4">
          <div className="flex items-baseline justify-between gap-6 mb-10">
            <span className="caption-style text-white/85 font-korean">
              그래피티 에디션 · 메인 전시
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
            인터루드 — 작업장의 호흡, 안산의 빛
          </p>
        </div>
      </section>

      {/* ── DETAIL FILM — crossfade detail crops ── */}
      <section id="film" className="border-t border-paper/10">
        <div className="container-content py-20 lg:py-28">
          <div className="flex items-baseline justify-between gap-6 mb-10">
            <span className="caption-style text-white/85 font-korean">
              디테일 필름 · 텍스처 클로즈업
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
                  className="object-cover"
                  style={{
                    objectPosition: f.position,
                    transform: `scale(${f.scale})`,
                    transformOrigin: f.position,
                  }}
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
            6초 간격으로 자동 전환 — 갤러리 표면 텍스처, 컬러 디테일, 받침대와 조명까지.
          </p>
        </div>
      </section>

      {/* ── SCENES — 4 cards including new brick-wall café ── */}
      <section id="scenes" className="border-t border-paper/10">
        <div className="container-content py-20 lg:py-28">
          <div className="flex items-baseline justify-between gap-6 mb-10">
            <span className="caption-style text-white/85 font-korean">
              장면들 · 현장과 일상
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
              라인업 · 우리가 만드는 것들
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
                  표준 라인업, 같은 폼팩터
                </h3>
                <p className="text-sm font-korean text-white/85 mt-2 max-w-md">
                  NKJC 시리즈 — 공개 라인업은 5K부터 60K까지. 색상은 모두 커스텀 제작 가능.
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
              왜 이걸 만들었나
            </span>
            <h2 className="font-display font-bold text-[clamp(2rem,4vw,3.5rem)] text-paper leading-[0.95] tracking-[-0.03em] font-korean">
              기계도,
              <br />
              예술이
              <br />
              될 수
              <br />
              있습니다.
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
              14년간 우리는 지하실과 옥상에서 사라지는 기계를 만들어왔습니다.
              보이지 않는 것이 목적이었습니다. 하지만 어느 날 스스로에게
              물었습니다 — 이 많은 문제를 해결해 주는 기계가, 반드시
              숨겨져 있어야만 하는가?
            </p>
            <p className="text-body-kr font-korean text-white/90 leading-[1.75] mb-8">
              그래서 한 대에 그래피티를 입혀 갤러리로 보냈습니다. 그리고
              본 사람들은 모두 이해했습니다 — 산업 엔지니어링도 아름다울 수
              있다는 것을. 집착에는 얼굴이 있다는 것을. 당신의 지하실에
              숨어 있던 기계도, 때로는 받침대 위에 올라갈 자격이 있다는
              것을.
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
            다음 전시 일정이 잡히면 가장 먼저 알려드립니다.
          </p>
          <Link
            href="/contact"
            className="btn-pill bg-paper text-ink hover:bg-ink hover:text-paper border-2 border-paper transition-all duration-200 rounded-lg font-korean"
          >
            알림 받기 <span className="ml-2">&rarr;</span>
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
