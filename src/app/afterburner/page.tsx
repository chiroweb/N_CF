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
import Link from "next/link";

const SECTIONS: NavSection[] = [
  { id: "overview", label: "OVERVIEW" },
  { id: "guide", label: "MODEL GUIDE" },
  { id: "models", label: "MODELS" },
  { id: "details", label: "DETAILS" },
  { id: "compatible", label: "COMPATIBLE" },
  { id: "contact", label: "CONTACT" },
];

const MODEL_GUIDE = [
  { range: "하루 10kg 이하", recommend: "NKIC-5K", index: 0 },
  { range: "하루 10–20kg", recommend: "NKIC-10K", index: 1 },
  { range: "하루 20–40kg", recommend: "NKIC-15K ~ 30K", index: 2 },
  { range: "하루 40kg 이상", recommend: "NKIC-60K ~ 120K", index: 4 },
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
        gsap.to(heroImgRef.current, {
          yPercent: 15,
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
            <span className="hero-fade caption-style text-ink/70 block mb-6 opacity-0">
              COFFEE ROASTING AFTERBURNER
            </span>
            <h1 className="hero-fade font-display font-bold text-[clamp(3rem,8vw,7rem)] text-ink leading-[0.88] tracking-[-0.04em] opacity-0">
              THE
              <br />
              AFTER
              <br />
              BURNER
            </h1>
            <p className="hero-fade text-[clamp(1rem,1.3vw,1.15rem)] text-ink/85 leading-[1.6] mt-8 max-w-md opacity-0">
              99.2% smoke removal. Direct flame. No filters to replace.
              The machine that lets you roast in silence.
            </p>
            <p className="hero-fade text-body-kr font-korean text-ink/65 leading-[1.75] mt-4 max-w-md opacity-0">
              99.2% 연기 제거율. 직화 방식. 교체할 필터 없음.
              조용히 로스팅할 수 있게 해주는 기계.
            </p>
            <div className="hero-fade mt-8 opacity-0">
              <Link
                href="/contact"
                className="inline-block bg-ink text-paper px-6 py-3 text-sm font-bold tracking-[0.06em] uppercase hover:bg-paper hover:text-ink border-2 border-ink transition-all duration-200 rounded-lg"
              >
                REQUEST A QUOTE <span className="ml-2">&rarr;</span>
              </Link>
            </div>
          </div>

          {/* Right — hero product image with parallax */}
          <div className="hero-fade relative aspect-[3/4] rounded-lg overflow-hidden bg-bone opacity-0">
            <div
              ref={heroImgRef}
              className="absolute inset-0 -top-[15%] -bottom-[15%] bg-contain bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${HERO_IMAGES.afterburner})` }}
            />
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
          <span className="caption-style text-ink/70 block mb-4">
            WHICH MODEL IS RIGHT FOR YOU?
          </span>
          <p className="text-body-kr font-korean text-ink/75 mb-8">
            하루 로스팅량 기준으로 적합한 모델을 추천합니다.
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
          <span className="caption-style text-ink/70 block mb-4">
            SELECT YOUR MODEL
          </span>
          <h2 className="font-display font-bold text-[clamp(2rem,4vw,3.5rem)] text-ink leading-[0.95] tracking-[-0.03em] mb-12">
            6 MODELS.
            <br />
            ONE OBSESSION.
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
              <div
                className="absolute inset-0 bg-contain bg-center bg-no-repeat transition-none"
                style={{ backgroundImage: `url(${model.gallery[galleryIndex]})` }}
              />
            </div>
            {model.gallery.length > 1 && (
              <div className="flex gap-2 mt-3">
                {model.gallery.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setGalleryIndex(i)}
                    className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-colors ${
                      i === galleryIndex ? "border-ink" : "border-bone"
                    }`}
                  >
                    <div
                      className="w-full h-full bg-cover bg-center"
                      style={{ backgroundImage: `url(${img})` }}
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
            <p className="caption-style text-ink/70 mb-8">
              {model.target} / {model.targetKr}
            </p>

            <div className="space-y-0 border-t-2 border-ink">
              <SpecRow label="CAPACITY" value={model.capacity} />
              <SpecRow label="DIMENSIONS" value={model.size} />
              <SpecRow label="BURNER" value={model.burner} />
              <SpecRow label="CONTROLLER" value={model.controller} />
              <SpecRow label="HEAT SOURCE" value={AFTERBURNER_COMMON_SPECS.heatSource} />
              <SpecRow label="COMBUSTION TEMP" value={AFTERBURNER_COMMON_SPECS.combustionTemp} />
              <SpecRow label="REMOVAL RATE" value={AFTERBURNER_COMMON_SPECS.removalRate} />
              <SpecRow label="GAS SAVING" value={AFTERBURNER_COMMON_SPECS.gasSaving} />
              <SpecRow label="POWER" value={AFTERBURNER_COMMON_SPECS.power} />
            </div>

            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-block bg-ink text-paper px-6 py-3 text-sm font-bold tracking-[0.06em] uppercase hover:bg-paper hover:text-ink border-2 border-ink transition-all duration-200 rounded-lg"
              >
                GET A QUOTE FOR {model.name}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── Product Details — tilt cards ── */}
      <div id="details" className="container-content pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <TiltCard
            number="01"
            title="DIRECT FLAME"
            en="No filters, no water, no activated carbon. We burn the smoke. Completely."
            kr="필터도, 물도, 활성탄도 없다. 연기를 태운다. 완전히."
            image="https://chiro-web.s3.ap-northeast-2.amazonaws.com/fa/AFTERBUNNER/products/ab-ductburner-2.png"
          />
          <TiltCard
            number="02"
            title="PATENTED MIXING GUIDE"
            en="Reheating regenerative mixing guide technology. Gas Safety Corporation certified thermal efficiency."
            kr="재열 축열식 혼합 가이드 기술. 가스안전공사 인증 열효율."
            image="https://chiro-web.s3.ap-northeast-2.amazonaws.com/fa/AFTERBUNNER/products/afterburner-white.png"
          />
          <TiltCard
            number="03"
            title="EVERY ROASTER"
            en="Probat, Giesen, Loring, Fuji Royal — whatever you roast with, we've matched it."
            kr="Probat, Giesen, Loring, Fuji Royal — 어떤 로스터든, 맞춰왔다."
            image="https://chiro-web.s3.ap-northeast-2.amazonaws.com/fa/AFTERBUNNER/products/afterburner-black.png"
          />
        </div>
      </div>

      {/* ── Compatible Roasters ── */}
      <div id="compatible" className="border-t-2 border-bone">
        <div className="container-content py-16 lg:py-20">
          <div className="scroll-fade opacity-0">
            <span className="caption-style text-ink/70 block mb-6">
              COMPATIBLE WITH
            </span>
            <div className="flex flex-wrap gap-x-8 gap-y-4">
              {COMPATIBLE_ROASTERS.map((brand) => (
                <span
                  key={brand}
                  className="font-display font-bold text-[clamp(1.2rem,2vw,1.8rem)] text-ink/50 hover:text-ink transition-colors duration-300"
                >
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── CTA ── */}
      <div id="contact" className="bg-ink py-24 lg:py-32">
        <div className="container-content text-center">
          <h2 className="scroll-fade font-display font-bold text-[clamp(2rem,5vw,4rem)] text-paper leading-[0.95] tracking-[-0.03em] opacity-0">
            YOUR ROASTERY.
            <br />
            OUR AFTERBURNER.
          </h2>
          <p className="scroll-fade text-body-kr font-korean text-paper/75 mt-6 opacity-0">
            당신의 로스터리에 맞는 애프터버너를 찾아드립니다.
          </p>
          <div className="scroll-fade mt-10 opacity-0">
            <Link
              href="/contact"
              className="btn-pill bg-paper text-ink hover:bg-ink hover:text-paper border-2 border-paper transition-all duration-200 rounded-lg"
            >
              REQUEST A QUOTE <span className="ml-2">&rarr;</span>
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
      <span className="caption-style text-ink/70">{label}</span>
      <span className="text-sm font-medium text-ink text-right">{value}</span>
    </div>
  );
}

function TiltCard({
  number,
  title,
  en,
  kr,
  image,
}: {
  number: string;
  title: string;
  en: string;
  kr: string;
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
        <div
          className="absolute inset-0 bg-contain bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-110"
          style={{ backgroundImage: `url(${image})` }}
        />
        <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/5 transition-colors duration-500" />
      </div>
      <div className="p-6 bg-paper group-hover:bg-bone/30 transition-colors duration-500">
        <span className="caption-style text-ink/60 block mb-2">
          {number}
        </span>
        <h4 className="font-display font-bold text-base text-ink mb-3">
          {title}
        </h4>
        <p className="text-xs text-ink/85 leading-relaxed">{en}</p>
        <p className="text-xs font-korean text-ink/65 leading-relaxed mt-2">{kr}</p>
      </div>
    </div>
  );
}
