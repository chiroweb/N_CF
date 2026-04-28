"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { gsap } from "@/lib/gsap";
import {
  AFTERBURNER_MODELS,
  AFTERBURNER_COMMON_SPECS,
  COMPATIBLE_ROASTERS,
  HERO_IMAGES,
} from "@/lib/products";
import FloatingSectionNav, { type NavSection } from "@/components/layout/FloatingSectionNav";
import Image from "next/image";
import Link from "next/link";

const SECTIONS: NavSection[] = [
  { id: "overview", label: "개요" },
  { id: "guide", label: "모델 가이드" },
  { id: "models", label: "모델" },
  { id: "details", label: "상세" },
  { id: "compatible", label: "호환" },
  { id: "contact", label: "문의" },
];

const MODEL_GUIDE = [
  { range: "하루 10kg 이하", recommend: "NKJC-5K", index: 0 },
  { range: "하루 10–20kg", recommend: "NKJC-10K", index: 1 },
  { range: "하루 20–40kg", recommend: "NKJC-30K", index: 3 },
  { range: "하루 40kg 이상", recommend: "NKJC-60K", index: 4 },
];

export default function AfterburnerPage() {
  const pageRef = useRef<HTMLDivElement>(null);
  const heroImgRef = useRef<HTMLDivElement>(null);
  const [selectedModel, setSelectedModel] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);

  const model = AFTERBURNER_MODELS[selectedModel];

  const switchModel = useCallback(
    (index: number) => {
      if (isTransitioning || index === selectedModel) return;
      setIsTransitioning(true);

      const content = pageRef.current?.querySelectorAll(".model-content");
      if (content) {
        gsap.to(content, {
          opacity: 0,
          y: -10,
          duration: 0.25,
          ease: "power2.in",
          onComplete: () => {
            setSelectedModel(index);
            setGalleryIndex(0);
          },
        });
      }
    },
    [isTransitioning, selectedModel]
  );

  useEffect(() => {
    if (!isTransitioning) return;
    const content = pageRef.current?.querySelectorAll(".model-content");
    if (content) {
      gsap.fromTo(
        content,
        { opacity: 0, y: 10 },
        {
          opacity: 1,
          y: 0,
          duration: 0.35,
          ease: "power2.out",
          stagger: 0.04,
          onComplete: () => setIsTransitioning(false),
        }
      );
    }
  }, [selectedModel, isTransitioning]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero fade-in
      const heroEls = pageRef.current?.querySelectorAll(".hero-fade");
      if (heroEls) {
        gsap.fromTo(
          heroEls,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.12, ease: "power3.out" }
        );
      }

      // Hero image parallax
      if (heroImgRef.current) {
        gsap.fromTo(heroImgRef.current, {
          yPercent: -4,
        }, {
          yPercent: 4,
          ease: "none",
          scrollTrigger: {
            trigger: heroImgRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.5,
          },
        });
      }

      // Scroll fade-in
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
                start: "top 85%",
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

      {/* ── Hero ── */}
      <div id="overview" className="container-content pt-24 lg:pt-32 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
          {/* Left — text */}
          <div>
            <span className="hero-fade caption-style text-ink/90 block mb-6 opacity-0">
              커피 로스팅 애프터버너
            </span>
            <h1 className="hero-fade font-display font-bold text-[clamp(3rem,8vw,7rem)] text-ink leading-[0.88] tracking-[-0.04em] opacity-0 font-korean">
              직접화염
              <br />
              애프터
              <br />
              버너
            </h1>
            <p className="hero-fade text-body-kr font-korean text-ink/85 leading-[1.75] mt-8 max-w-md opacity-0">
              연기 99.2% 제거. 직접화염 방식. 교체할 필터 없음. 조용히
              로스팅할 수 있게 해주는 기계입니다.
            </p>
            <div className="hero-fade mt-8 opacity-0">
              <Link
                href="/contact"
                className="inline-block bg-ink text-paper px-6 py-3 text-sm font-bold tracking-[0.04em] hover:bg-paper hover:text-ink border-2 border-ink transition-all duration-200 rounded-lg font-korean"
              >
                견적 문의 <span className="ml-2">&rarr;</span>
              </Link>
            </div>
          </div>

          {/* Right — hero product image with parallax */}
          <div className="hero-fade relative aspect-[3/4] rounded-lg overflow-hidden bg-bone opacity-0">
            <div
              ref={heroImgRef}
              className="absolute inset-0 scale-[1.12]"
            >
              <Image
                src={HERO_IMAGES.afterburner}
                alt="Afterburner hero"
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ── One-line manifesto ── */}
      <div className="bg-ink py-16 lg:py-20">
        <div className="container-content">
          <p className="scroll-fade font-heading font-semibold text-[clamp(1.4rem,2.8vw,2.4rem)] text-paper leading-[1.35] text-center opacity-0">
            200°C에서 1,000°C. 직화로 태운다. 완전히.
            <br />
            남는 게 없다. 그것이 우리 방식이다.
          </p>
        </div>
      </div>

      {/* ── Model Recommendation Guide ── */}
      <div id="guide" className="container-content py-16 lg:py-20">
        <div className="scroll-fade opacity-0">
          <span className="caption-style text-ink/90 block mb-4 font-korean">
            어떤 모델이 필요하신가요
          </span>
          <p className="text-body-kr font-korean text-ink/75 mb-8">
            하루 로스팅량을 기준으로 적합한 모델을 추천합니다.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
            {MODEL_GUIDE.map((guide) => (
              <button
                key={guide.range}
                onClick={() => {
                  switchModel(guide.index);
                  const modelSection = document.getElementById("models");
                  modelSection?.scrollIntoView({ behavior: "smooth" });
                }}
                className="group p-5 border-2 border-bone rounded-lg hover:border-ink transition-all duration-300 text-left"
              >
                <span className="text-sm font-medium text-ink block mb-1">
                  {guide.range}
                </span>
                <span className="font-display font-bold text-lg text-ink/90 group-hover:text-ink transition-colors">
                  {guide.recommend}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Model Selector + Specs ── */}
      <div id="models" className="container-content py-24 lg:py-32">
        <div className="scroll-fade opacity-0">
          <span className="caption-style text-ink/90 block mb-4 font-korean">
            모델 선택
          </span>
          <h2 className="font-display font-bold text-[clamp(2rem,4vw,3.5rem)] text-ink leading-[0.95] tracking-[-0.03em] mb-12 font-korean">
            {AFTERBURNER_MODELS.length}종 모델,
            <br />
            한 가지 집착.
          </h2>
        </div>

        {/* Model tabs */}
        <div className="scroll-fade flex flex-wrap gap-2 mb-16 opacity-0">
          {AFTERBURNER_MODELS.map((m, i) => (
            <button
              key={m.id}
              onClick={() => switchModel(i)}
              className={`px-5 py-2.5 text-sm font-bold tracking-[0.04em] uppercase rounded-lg border-2 transition-all duration-200 ${
                i === selectedModel
                  ? "bg-ink text-paper border-ink"
                  : "bg-transparent text-ink/85 border-bone hover:border-ink hover:text-ink"
              }`}
            >
              {m.capacity}
            </button>
          ))}
        </div>

        {/* Model detail — image + specs */}
        <div className="grid grid-cols-1 lg:grid-cols-[5fr_4fr] gap-8 lg:gap-16">
          {/* Left — product image */}
          <div className="model-content">
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden bg-bone">
              <Image
                key={model.gallery[galleryIndex]}
                src={model.gallery[galleryIndex]}
                alt={`${model.name} · ${galleryIndex + 1}`}
                fill
                sizes="(min-width: 1024px) 45vw, 90vw"
                className="object-contain object-center"
              />
            </div>
            {model.gallery.length > 1 && (
              <div className="flex gap-2 mt-3">
                {model.gallery.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setGalleryIndex(i)}
                    className={`relative w-16 h-16 rounded-lg overflow-hidden border-2 transition-colors ${
                      i === galleryIndex ? "border-ink" : "border-bone"
                    }`}
                  >
                    <Image
                      src={img}
                      alt=""
                      fill
                      sizes="64px"
                      className="object-cover object-center"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right — specs */}
          <div className="model-content flex flex-col justify-center">
            <h3 className="font-display font-bold text-[clamp(2rem,3.5vw,3rem)] text-ink leading-[0.95] tracking-[-0.03em] mb-2">
              {model.name}
            </h3>
            <p className="caption-style text-ink/90 mb-8">
              {model.target} / {model.targetKr}
            </p>

            <div className="space-y-0 border-t-2 border-ink">
              <SpecRow label="용량" value={model.capacity} />
              <SpecRow label="치수" value={model.size} />
              <SpecRow label="버너" value={model.burnerKr} />
              <SpecRow label="컨트롤러" value={model.controller} />
              <SpecRow label="연료" value={AFTERBURNER_COMMON_SPECS.heatSource} />
              <SpecRow label="연소 온도" value={AFTERBURNER_COMMON_SPECS.combustionTemp} />
              <SpecRow label="연기 제거율" value={AFTERBURNER_COMMON_SPECS.removalRate} />
              <SpecRow label="가스 절감" value={AFTERBURNER_COMMON_SPECS.gasSaving} />
              <SpecRow label="비례 제어" value={AFTERBURNER_COMMON_SPECS.proportionalRatio} />
              <SpecRow label="열효율" value={AFTERBURNER_COMMON_SPECS.thermalEfficiency} />
              <SpecRow label="전원" value={AFTERBURNER_COMMON_SPECS.power} />
              <SpecRow label="무상 A/S" value="1년" />
            </div>

            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-block bg-ink text-paper px-6 py-3 text-sm font-bold tracking-[0.04em] hover:bg-paper hover:text-ink border-2 border-ink transition-all duration-200 rounded-lg font-korean"
              >
                {model.name} 견적 문의
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── Product Details — tilt cards ── */}
      <div id="details" className="container-content pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <TiltCard
            number="01"
            title="민원 대응"
            body="로스팅 중 발생하는 연기와 냄새를 줄여 매장 주변 환경 부담을 낮춥니다."
            image="https://chiro-web.s3.ap-northeast-2.amazonaws.com/fa/AFTERBUNNER/products/ab-ductburner-2.png"
          />
          <TiltCard
            number="02"
            title="가스비 절감"
            body="직접화염 연소 구조와 최적화된 제어로 경쟁 제품 대비 가스 사용량을 줄입니다."
            image="https://chiro-web.s3.ap-northeast-2.amazonaws.com/fa/AFTERBUNNER/products/afterburner-white.png"
          />
          <TiltCard
            number="03"
            title="브랜드별 호환"
            body="PROBAT, GIESEN, LORING, KUBAN 등 주요 드럼 로스터와 결합 설치가 가능합니다."
            image="https://chiro-web.s3.ap-northeast-2.amazonaws.com/fa/AFTERBUNNER/products/afterburner-black.png"
          />
          <TiltCard
            number="04"
            title="설치 후 관리"
            body="현장 실측부터 제작, 설치, 시운전, A/S까지 한 번에 대응합니다."
            image="https://chiro-web.s3.ap-northeast-2.amazonaws.com/fa/AFTERBUNNER/products/afterburner-white.png"
          />
        </div>
      </div>

      {/* ── Compatible Roasters ── */}
      <div id="compatible" className="border-t-2 border-bone">
        <div className="container-content py-16 lg:py-20">
          <div className="scroll-fade opacity-0">
            <span className="caption-style text-ink/90 block mb-6 font-korean">
              호환 로스터기
            </span>
            <div className="relative overflow-hidden py-2">
              <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-paper to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-paper to-transparent" />
              <div className="flex w-max animate-marquee whitespace-nowrap motion-reduce:animate-none">
                {[...COMPATIBLE_ROASTERS, ...COMPATIBLE_ROASTERS].map((brand, index) => (
                  <span
                    key={`${brand}-${index}`}
                    aria-hidden={index >= COMPATIBLE_ROASTERS.length}
                    className="font-display font-bold text-[clamp(1.2rem,2vw,1.8rem)] text-ink/70 transition-colors duration-300 hover:text-ink px-5 sm:px-7"
                  >
                    {brand}
                  </span>
                ))}
              </div>
            </div>
            <p className="text-body-kr font-korean text-ink/60 mt-4 text-sm">
              현장 실측 후 로스터기의 브랜드·용량·덕트 구조에 맞춰 결합 설계합니다.
            </p>
          </div>
        </div>
      </div>

      {/* ── CTA ── */}
      <div id="contact" className="bg-ink py-24 lg:py-32">
        <div className="container-content text-center">
          <h2 className="scroll-fade font-display font-bold text-[clamp(2rem,5vw,4rem)] text-paper leading-[0.95] tracking-[-0.03em] opacity-0 font-korean">
            당신의 로스터리,
            <br />
            우리의 애프터버너.
          </h2>
          <p className="scroll-fade text-body-kr font-korean text-paper/75 mt-6 opacity-0">
            당신의 현장에 맞는 애프터버너를 찾아드립니다.
          </p>
          <div className="scroll-fade mt-10 opacity-0">
            <Link
              href="/contact"
              className="btn-pill bg-paper text-ink hover:bg-ink hover:text-paper border-2 border-paper transition-all duration-200 rounded-lg font-korean"
            >
              견적 문의 <span className="ml-2">&rarr;</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function SpecRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between items-center py-4 border-b border-bone">
      <span className="caption-style text-ink/90">{label}</span>
      <span className="text-sm font-medium text-ink text-right">{value}</span>
    </div>
  );
}

function TiltCard({
  number,
  title,
  body,
  image,
}: {
  number: string;
  title: string;
  body: string;
  image: string;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    cardRef.current.style.transform = `perspective(800px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = "perspective(800px) rotateY(0deg) rotateX(0deg)";
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="scroll-fade group rounded-lg border border-bone overflow-hidden opacity-0 transition-transform duration-200 ease-out will-change-transform"
    >
      <div className="relative aspect-[4/3] bg-bone overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(min-width: 768px) 33vw, 100vw"
          className="object-contain object-center transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/5 transition-colors duration-500" />
      </div>
      <div className="p-6 bg-paper group-hover:bg-bone/30 transition-colors duration-500">
        <span className="caption-style text-ink/80 block mb-2">
          {number}
        </span>
        <h4 className="font-display font-bold text-base text-ink mb-3 font-korean">
          {title}
        </h4>
        <p className="text-xs font-korean text-ink/85 leading-[1.65]">{body}</p>
      </div>
    </div>
  );
}
