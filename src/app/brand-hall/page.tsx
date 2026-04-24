"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { IMAGES } from "@/lib/images";
import FloatingSectionNav, { type NavSection } from "@/components/layout/FloatingSectionNav";
import Image from "next/image";
import Link from "next/link";

const SECTIONS: NavSection[] = [
  { id: "overview", label: "개요" },
  { id: "gallery", label: "갤러리" },
  { id: "film", label: "브랜드 필름" },
  { id: "manifesto", label: "선언문" },
  { id: "event", label: "다음 전시" },
];

const GALLERY_ITEMS = [
  {
    id: 1,
    title: "그래피티 에디션",
    subtitle: "2024 전시",
    description: "스트릿 아트와 산업 엔지니어링의 만남. 한 대의 기계에 색을 입혀 갤러리로 보냈습니다.",
    image: IMAGES.missionLeft,
    size: "large",
  },
  {
    id: 2,
    title: "작업장",
    subtitle: "모든 것의 시작",
    description: "모든 유닛은 여기서 시작됩니다. 손, 불, 강철.",
    image: IMAGES.obs02,
    size: "small",
  },
  {
    id: 3,
    title: "골든 아워",
    subtitle: "로스터리의 아침",
    description: "아무도 로스팅 냄새를 맡지 못한다는 걸 알 때, 빛은 다르게 느껴집니다.",
    image: IMAGES.missionRight,
    size: "medium",
  },
  {
    id: 4,
    title: "동네 한복판",
    subtitle: "서울의 저녁",
    description: "주거 단지 안의 로스터리. 자전거 탄 아이는 한 번도 항의하지 않았습니다.",
    image: IMAGES.installationPhoto,
    size: "large",
  },
  {
    id: 5,
    title: "크래프트와 원두",
    subtitle: "가장 처음의 재료",
    description: "기계 이전에 손이 있습니다. 손 이전에 원두가 있습니다.",
    image: IMAGES.obs01,
    size: "small",
  },
  {
    id: 6,
    title: "애프터버너 유닛",
    subtitle: "스튜디오 포트레이트",
    description: "14년의 개선을 한 프레임에.",
    image: IMAGES.heroBg,
    size: "medium",
  },
];

export default function BrandHallPage() {
  const pageRef = useRef<HTMLDivElement>(null);

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

      const items = pageRef.current?.querySelectorAll(".gallery-item");
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

      {/* ── Hero ── */}
      <div id="overview" className="relative h-[80vh] flex flex-col justify-end container-content pb-16">
        <span className="hero-line caption-style text-white/90 block mb-6 opacity-0 font-korean">
          브랜드 홀 · 전시 아카이브
        </span>
        <h1 className="m-0 font-display font-bold text-[clamp(3rem,10vw,9rem)] text-paper leading-[0.85] tracking-[-0.04em] font-korean">
          <span className="hero-line block opacity-0">기계 너머,</span>
          <span className="hero-line block opacity-0">예술의 자리.</span>
          <span className="sr-only">
            . 엔비피코리아 브랜드 홀 — 애프터버너, KUBAN 로스터, 넛츠스타 넛버터머신 세 제품군의 계보.
          </span>
        </h1>
        <p className="hero-line text-body-kr font-korean text-white/90 mt-8 max-w-md opacity-0">
          우리는 기계를 만듭니다. 하지만 가끔, 기계가 예술이 되는 순간이
          있습니다. 이곳은 그 순간들을 모아둔 공간입니다.
        </p>
      </div>

      {/* ── Gallery Grid — asymmetric editorial ── */}
      <div id="gallery" className="container-content pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-4 mb-4">
          <GalleryCard item={GALLERY_ITEMS[0]} />
          <GalleryCard item={GALLERY_ITEMS[1]} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-4 mb-4">
          <GalleryCard item={GALLERY_ITEMS[2]} />
          <GalleryCard item={GALLERY_ITEMS[3]} />
        </div>

        {/* ── Video Section ── */}
        <div id="film" className="my-24">
          <div className="relative aspect-video rounded-lg overflow-hidden bg-ink/50">
            <video
              className="absolute inset-0 w-full h-full object-cover"
              poster={IMAGES.heroBg}
              controls={false}
              muted
              loop
              playsInline
              autoPlay
            />
            <div className="absolute inset-0 flex items-center justify-center bg-ink/40">
              <button className="w-20 h-20 rounded-full bg-paper/90 flex items-center justify-center hover:bg-paper transition-colors group" aria-label="브랜드 필름 재생">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="ml-1">
                  <path d="M8 5.14v13.72a1 1 0 001.5.86l11.04-6.86a1 1 0 000-1.72L9.5 4.28a1 1 0 00-1.5.86z" fill="currentColor" className="text-ink" />
                </svg>
              </button>
            </div>
            <div className="absolute bottom-6 left-8">
              <span className="caption-style text-white/85 font-korean">
                엔비피코리아 브랜드 필름 · 2024
              </span>
            </div>
          </div>
        </div>

        {/* ── Manifesto — Why we did this ── */}
        <div id="manifesto" className="my-24 grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20">
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

        {/* Row 3: two equal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
          <GalleryCard item={GALLERY_ITEMS[4]} />
          <GalleryCard item={GALLERY_ITEMS[5]} />
        </div>

        {/* Event CTA */}
        <div id="event" className="mt-24 text-center">
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
      </div>
    </div>
  );
}

function GalleryCard({ item }: { item: (typeof GALLERY_ITEMS)[number] }) {
  const isLarge = item.size === "large";

  return (
    <div className={`gallery-item group relative overflow-hidden rounded-lg opacity-0 ${isLarge ? "aspect-[16/10]" : "aspect-[4/5]"}`}>
      <div className="gallery-parallax absolute inset-0 -top-[10%] -bottom-[10%]">
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes={isLarge ? "(min-width: 1024px) 66vw, 100vw" : "(min-width: 1024px) 33vw, 100vw"}
          className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      <div className="absolute inset-0 bg-ink/30 group-hover:bg-ink/60 transition-colors duration-500" />

      <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-8">
        <span className="caption-style text-white/80 mb-2 font-korean">
          {item.subtitle}
        </span>
        <h3 className="font-display font-bold text-[clamp(1.2rem,2.5vw,2rem)] text-paper leading-[1.1] tracking-[-0.02em] mb-3 font-korean">
          {item.title}
        </h3>
        <p className="text-sm font-korean text-white/90 leading-[1.6] max-w-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          {item.description}
        </p>
      </div>
    </div>
  );
}
