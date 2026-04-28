"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { gsap } from "@/lib/gsap";
import {
  AFTERBURNER_SERVICE_CARE_IMAGE,
  ROASTER_BASE_MODELS,
  ROASTER_SUPREME_MODELS,
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
  { id: "lineup", label: "라인업" },
  { id: "contact", label: "문의" },
];

const MODEL_GUIDE = [
  { range: "로스터리 카페", recommend: "BASE 5", index: 0 },
  { range: "중형 로스터리", recommend: "BASE 10", index: 1 },
  { range: "대형 로스터리", recommend: "BASE 15", index: 2 },
  { range: "공장 / 대량 생산", recommend: "BASE 20", index: 3 },
];

export default function RoastersPage() {
  const pageRef = useRef<HTMLDivElement>(null);
  const heroImgRef = useRef<HTMLDivElement>(null);
  const [selectedModel, setSelectedModel] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [showSupreme, setShowSupreme] = useState(false);
  const [selectedSupremeModel, setSelectedSupremeModel] = useState(0);
  const [supremeGalleryIndex, setSupremeGalleryIndex] = useState(0);

  const model = ROASTER_BASE_MODELS[selectedModel];
  const supremeModel = ROASTER_SUPREME_MODELS[selectedSupremeModel];
  const lineupModels = [
    ...ROASTER_BASE_MODELS.map((item) => ({ ...item, category: "BASE" })),
    ...ROASTER_SUPREME_MODELS.map((item) => ({ ...item, category: "SUPREME" })),
  ];

  const switchModel = useCallback(
    (index: number) => {
      if (isTransitioning || (index === selectedModel && !showSupreme)) return;
      setIsTransitioning(true);
      setShowSupreme(false);

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
    [isTransitioning, selectedModel, showSupreme]
  );

  const switchToSupreme = useCallback((index = selectedSupremeModel) => {
    if (isTransitioning || (showSupreme && index === selectedSupremeModel)) return;
    setIsTransitioning(true);

    const content = pageRef.current?.querySelectorAll(".model-content");
    if (content) {
      gsap.to(content, {
        opacity: 0,
        y: -10,
        duration: 0.25,
        ease: "power2.in",
        onComplete: () => {
          setShowSupreme(true);
          setSelectedSupremeModel(index);
          setSupremeGalleryIndex(0);
        },
      });
    }
  }, [isTransitioning, selectedSupremeModel, showSupreme]);

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
  }, [selectedModel, selectedSupremeModel, showSupreme, isTransitioning]);

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

      if (heroImgRef.current) {
        gsap.fromTo(
          heroImgRef.current,
          { yPercent: -4 },
          {
            yPercent: 4,
            ease: "none",
            scrollTrigger: {
              trigger: heroImgRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.5,
            },
          }
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
          <div>
            <span className="hero-fade caption-style text-ink/90 block mb-6 opacity-0 font-korean">
              커피 로스팅 머신
            </span>
            <h1 className="hero-fade font-display font-bold text-[clamp(3rem,8vw,7rem)] text-ink leading-[0.88] tracking-[-0.04em] opacity-0 font-korean">
              드럼
              <br />
              로스터,
              <br />
              KUBAN.
            </h1>
            <p className="hero-fade text-body-kr font-korean text-ink/85 leading-[1.75] mt-8 max-w-md opacity-0">
              5Kg부터 20Kg 양산까지. 정밀함과 일관성, 그리고 장인 정신을
              위해 만들어진 터키 KUBAN 드럼 로스터입니다. 엔비피코리아가 한국
              내 독점 딜러로 유통·설치·A/S까지 일괄 대응합니다.
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

          <div className="hero-fade relative aspect-[16/10] rounded-lg overflow-hidden bg-bone opacity-0">
            <div
              ref={heroImgRef}
              className="absolute inset-x-0 -top-[10%] -bottom-[10%]"
            >
              <Image
                src={HERO_IMAGES.roaster}
                alt="KUBAN 드럼 로스터"
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover object-center scale-[1.04]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ── One-line manifesto ── */}
      <div className="bg-ink py-16 lg:py-20">
        <div className="container-content">
          <p className="scroll-fade font-heading font-semibold text-[clamp(1.4rem,2.8vw,2.4rem)] text-paper leading-[1.35] text-center opacity-0 font-korean">
            반복이 만든 정밀함. 불이 만든 맛.
            <br />
            드럼 위에서 원두가 완성됩니다.
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
            용도와 규모에 맞는 로스터를 추천합니다.
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
                <span className="text-sm font-medium text-ink block mb-1 font-korean">
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
            BASE 4종
            <br />
            SUPREME 5종.
          </h2>
        </div>

        {/* Category tabs */}
        <div className="scroll-fade flex flex-wrap gap-2 mb-4 opacity-0">
          <button
            onClick={() => switchModel(selectedModel)}
            className={`px-6 py-3 text-sm font-bold tracking-[0.04em] uppercase rounded-lg border-2 transition-all duration-200 ${
              !showSupreme
                ? "bg-ink text-paper border-ink"
                : "bg-transparent text-ink/85 border-bone hover:border-ink hover:text-ink"
            }`}
          >
            BASE
          </button>
          <button
            onClick={() => switchToSupreme(selectedSupremeModel)}
            className={`px-6 py-3 text-sm font-bold tracking-[0.04em] uppercase rounded-lg border-2 transition-all duration-200 ${
              showSupreme
                ? "bg-ink text-paper border-ink"
                : "bg-transparent text-ink/85 border-bone hover:border-ink hover:text-ink"
            }`}
          >
            SUPREME
          </button>
        </div>

        {/* Model tabs */}
        <div className="scroll-fade flex flex-wrap gap-2 mb-16 opacity-0">
          {!showSupreme ? ROASTER_BASE_MODELS.map((m, i) => (
            <button
              key={m.id}
              onClick={() => switchModel(i)}
              className={`px-5 py-2.5 text-sm font-bold tracking-[0.04em] uppercase rounded-lg border-2 transition-all duration-200 ${
                i === selectedModel && !showSupreme
                  ? "bg-ink text-paper border-ink"
                  : "bg-transparent text-ink/85 border-bone hover:border-ink hover:text-ink"
              }`}
            >
              {m.capacity}
            </button>
          )) : ROASTER_SUPREME_MODELS.map((m, i) => (
            <button
              key={m.id}
              onClick={() => switchToSupreme(i)}
              className={`px-5 py-2.5 text-sm font-bold tracking-[0.04em] uppercase rounded-lg border-2 transition-all duration-200 ${
                i === selectedSupremeModel
                  ? "bg-ink text-paper border-ink"
                  : "bg-transparent text-ink/85 border-bone hover:border-ink hover:text-ink"
              }`}
            >
              {m.capacity}
            </button>
          ))}
        </div>

        {/* Model detail — image + specs */}
        {!showSupreme ? (
          <div className="grid grid-cols-1 lg:grid-cols-[5fr_4fr] gap-8 lg:gap-16">
            <div className="model-content">
              <div className="relative aspect-[4/5] rounded-lg overflow-hidden bg-white">
                <Image
                  key={model.gallery[galleryIndex]}
                  src={model.gallery[galleryIndex]}
                  alt={`${model.name} · ${galleryIndex + 1}`}
                  fill
                  sizes="(min-width: 1024px) 45vw, 90vw"
                  className="object-contain object-center scale-[1.08]"
                />
              </div>
              {model.gallery.length > 1 && (
                <div className="flex gap-2 mt-3">
                  {model.gallery.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setGalleryIndex(i)}
                      className={`relative h-20 w-20 rounded-lg overflow-hidden border-2 bg-white transition-colors ${
                        i === galleryIndex ? "border-ink" : "border-bone"
                      }`}
                    >
                      <Image
                        src={img}
                        alt=""
                        fill
                        sizes="80px"
                        className="object-cover object-center"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="model-content flex flex-col justify-center">
              <h3 className="font-display font-bold text-[clamp(2rem,3.5vw,3rem)] text-ink leading-[0.95] tracking-[-0.03em] mb-2">
                {model.name}
              </h3>
              <p className="caption-style text-ink/90 mb-8 font-korean">
                {model.targetKr}
              </p>

              <div className="space-y-0 border-t-2 border-ink">
                <SpecRow label="용량" value={model.capacity} />
                <SpecRow label="치수" value={model.size} />
                <SpecRow label="무게" value={model.weight} />
                <SpecRow label="전원" value={model.power} />
                <SpecRow label="버너" value={model.burner} />
                <SpecRow label="컨트롤러" value={model.controller} />
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
        ) : (
          /* ── Supreme Model ── */
          <div className="grid grid-cols-1 lg:grid-cols-[5fr_4fr] gap-8 lg:gap-16">
            <div className="model-content">
              <div className="relative aspect-[4/5] rounded-lg overflow-hidden bg-white">
                <Image
                  key={supremeModel.gallery[supremeGalleryIndex]}
                  src={supremeModel.gallery[supremeGalleryIndex]}
                  alt={`${supremeModel.name} · ${supremeGalleryIndex + 1}`}
                  fill
                  sizes="(min-width: 1024px) 45vw, 90vw"
                  className="object-contain object-center scale-[1.08]"
                />
              </div>
              {supremeModel.gallery.length > 1 && (
                <div className="flex gap-2 mt-3">
                  {supremeModel.gallery.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setSupremeGalleryIndex(i)}
                      className={`relative h-20 w-20 rounded-lg overflow-hidden border-2 bg-white transition-colors ${
                        i === supremeGalleryIndex ? "border-ink" : "border-bone"
                      }`}
                    >
                      <Image
                        src={img}
                        alt=""
                        fill
                        sizes="80px"
                        className="object-cover object-center"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="model-content flex flex-col justify-center">
              <h3 className="font-display font-bold text-[clamp(2rem,3.5vw,3rem)] text-ink leading-[0.95] tracking-[-0.03em] mb-2">
                {supremeModel.name}
              </h3>
              <p className="caption-style text-ink/90 mb-8 font-korean">
                {supremeModel.targetKr}
              </p>

              <p className="text-body-kr font-korean text-ink/85 leading-[1.75] mb-8">
                BASE와 별도 설계의 프리미엄 라인입니다. 더 정제된 마감과
                고급 컨트롤 구성으로, 소형 3kg부터 대형 생산형 24kg까지
                로스팅 규모에 맞춰 선택할 수 있습니다.
              </p>

              <div className="space-y-0 border-t-2 border-ink">
                <SpecRow label="용량" value={supremeModel.capacity} />
                <SpecRow label="치수" value={supremeModel.size} />
                <SpecRow label="무게" value={supremeModel.weight} />
                <SpecRow label="전원" value={supremeModel.power} />
                <SpecRow label="버너" value={supremeModel.burner} />
                <SpecRow label="컨트롤러" value={supremeModel.controller} />
              </div>

              <div className="mt-10">
                <Link
                  href="/contact"
                  className="inline-block bg-ink text-paper px-6 py-3 text-sm font-bold tracking-[0.04em] hover:bg-paper hover:text-ink border-2 border-ink transition-all duration-200 rounded-lg font-korean"
                >
                  {supremeModel.name} 문의
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ── Product Details — bento cards ── */}
      <div id="details" className="container-content pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1.35fr_0.85fr] gap-4 lg:auto-rows-fr">
          <BentoFeatureCard
            number="01"
            title="현장 규모 매칭"
            body="5Kg 로스터리 카페부터 20Kg 생산 현장까지 운영량에 맞는 모델을 제안합니다."
            image={ROASTER_BASE_MODELS[0].gallery[0]}
            className="lg:min-h-[330px]"
          />
          <BentoFeatureCard
            number="02"
            title="로스팅 일관성"
            body="드럼 구조와 기류 설계를 기반으로 배치마다 안정적인 열 전달과 재현성을 확보합니다."
            image={ROASTER_BASE_MODELS[1].gallery[0]}
            className="lg:min-h-[330px]"
          />
          <BentoFeatureCard
            number="03"
            title="부품·A/S 관리"
            body="한국 독점 딜러로서 상담부터 설치 이후 유지관리까지 엔비피코리아가 직접 연결합니다."
            image={AFTERBURNER_SERVICE_CARE_IMAGE}
            className="lg:col-start-2 lg:row-start-1 lg:row-span-2 lg:min-h-[680px]"
          />
        </div>
      </div>

      {/* ── Full Lineup Overview ── */}
      <div id="lineup" className="border-t-2 border-bone">
        <div className="container-content py-16 lg:py-20">
          <div className="scroll-fade opacity-0">
            <span className="caption-style text-ink/90 block mb-6 font-korean">
              전체 라인업
            </span>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b-2 border-ink">
                    <th className="caption-style text-ink/90 py-3 pr-4 font-korean">카테고리</th>
                    <th className="caption-style text-ink/90 py-3 pr-4 font-korean">모델</th>
                    <th className="caption-style text-ink/90 py-3 pr-4 font-korean">용량</th>
                    <th className="caption-style text-ink/90 py-3 pr-4 font-korean">무게</th>
                    <th className="caption-style text-ink/90 py-3 pr-4 font-korean">버너</th>
                    <th className="caption-style text-ink/90 py-3 font-korean">컨트롤러</th>
                  </tr>
                </thead>
                <tbody>
                  {lineupModels.map((m) => (
                    <tr key={m.id} className="border-b border-bone">
                      <td className="py-4 pr-4 text-ink/75 font-bold">{m.category}</td>
                      <td className="py-4 pr-4 font-display font-bold text-ink">{m.name}</td>
                      <td className="py-4 pr-4 text-ink/90">{m.capacity}</td>
                      <td className="py-4 pr-4 text-ink/90">{m.weight}</td>
                      <td className="py-4 pr-4 text-ink/90">{m.burner}</td>
                      <td className="py-4 text-ink/90">{m.controller}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* ── CTA ── */}
      <div id="contact" className="bg-ink py-24 lg:py-32">
        <div className="container-content text-center">
          <h2 className="scroll-fade font-display font-bold text-[clamp(2rem,5vw,4rem)] text-paper leading-[0.95] tracking-[-0.03em] opacity-0 font-korean">
            당신의 원두,
            <br />
            우리의 로스터.
          </h2>
          <p className="scroll-fade text-body-kr font-korean text-paper/75 mt-6 opacity-0">
            당신의 원두와 공간에 맞는 로스터를 찾아드립니다.
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
      <span className="caption-style text-ink/90 font-korean">{label}</span>
      <span className="text-sm font-medium text-ink text-right">{value}</span>
    </div>
  );
}

function BentoFeatureCard({
  number,
  title,
  body,
  image,
  className = "",
}: {
  number: string;
  title: string;
  body: string;
  image: string;
  className?: string;
}) {
  return (
    <div
      className={`scroll-fade group relative min-h-[360px] overflow-hidden rounded-lg border border-ink/10 bg-ink opacity-0 ${className}`}
    >
      <Image
        src={image}
        alt={title}
        fill
        sizes="(min-width: 1024px) 60vw, 100vw"
        className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.04]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/82 via-ink/18 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-6 lg:p-8">
        <span className="caption-style text-paper/75 block mb-2">
          {number}
        </span>
        <h4 className="font-display font-bold text-[clamp(1.35rem,2vw,2rem)] text-paper leading-[1.05] mb-3 font-korean">
          {title}
        </h4>
        <p className="max-w-lg text-sm font-korean text-paper/82 leading-[1.65]">{body}</p>
      </div>
    </div>
  );
}
