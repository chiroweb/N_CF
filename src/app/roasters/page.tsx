"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { gsap } from "@/lib/gsap";
import {
  AFTERBURNER_SERVICE_CARE_IMAGE,
  ROASTER_BASE_MODELS,
  ROASTER_SUPREME_MODELS,
  ROASTER_SITE_MATCHING_IMAGE,
  ROASTER_CONSISTENCY_IMAGE,
  HERO_IMAGES,
} from "@/lib/products";
import FloatingSectionNav, { type NavSection } from "@/components/layout/FloatingSectionNav";
import Image from "next/image";
import Link from "next/link";

const SECTIONS: NavSection[] = [
  { id: "overview", label: "개요" },
  { id: "why", label: "직접 로스팅" },
  { id: "guide", label: "모델 가이드" },
  { id: "models", label: "모델" },
  { id: "details", label: "상세" },
  { id: "lineup", label: "라인업" },
  { id: "faq", label: "FAQ" },
  { id: "contact", label: "문의" },
];

const WHY_ROAST = [
  {
    no: "01",
    title: "맛의 기준을 매장이 쥔다",
    body: "납품 원두는 어느 집이나 비슷한 맛입니다. 직접 볶으면 산미·바디·배전도를 우리 매장 기준으로 정할 수 있습니다. 메뉴의 기준점이 외부가 아니라 매장 안에 생깁니다.",
  },
  {
    no: "02",
    title: "잔당 원가가 내려간다",
    body: "생두를 볶는 원가는 완제품 원두를 사 오는 것보다 낮습니다. 같은 한 잔을 더 낮은 원가로 내리고, 볶은 원두를 봉지로 파는 판매 라인까지 더할 수 있습니다.",
  },
  {
    no: "03",
    title: "‘직접 볶는 집’이 된다",
    body: "‘매장에서 직접 볶습니다’ 한 줄은 그 자체로 신뢰가 됩니다. 원두 소매·구독·선물 세트처럼 좌석 회전과 무관하게 카페 밖으로 나가는 매출로 이어집니다.",
  },
];

const FAQS = [
  {
    question: "카페에서 원두를 직접 볶으면 무엇이 좋아지나요?",
    answer:
      "납품받는 원두는 어느 매장이나 비슷한 맛이지만, 직접 로스팅하면 우리 매장만의 프로파일을 정할 수 있습니다. 생두를 볶는 원가는 완제품 원두보다 낮아 잔당 원가가 내려가고, 매장에서 볶은 원두를 봉지·구독으로 파는 소매 매출 라인까지 만들 수 있습니다.",
  },
  {
    question: "로스팅 경험이 없어도 시작할 수 있나요?",
    answer:
      "처음 시작하는 매장이 많습니다. 설치 시 기본 운용 셋업과 첫 시운전을 함께 진행하고, 컨트롤러로 화력·시간을 재현할 수 있어 같은 배치를 반복하기 쉬운 BASE 라인부터 권장합니다. 설치 이후 운용 문의에도 한국 공식 딜러가 직접 대응합니다.",
  },
  {
    question: "매장 안에 로스터를 두면 연기와 냄새는 어떻게 처리하나요?",
    answer:
      "로스팅에는 배기와 제연이 반드시 따라옵니다. 엔비피코리아는 KUBAN 로스터 공식 딜러이자 직화식 애프터버너 제조사라, 로스터와 제연 장비를 한 곳에서 함께 설계할 수 있습니다. 도심 매장이라면 로스터를 고르는 단계에서 배기 경로와 제연기까지 같이 검토하는 편이 안전합니다.",
  },
  {
    question: "카페 규모에는 몇 kg 로스터가 맞나요?",
    answer:
      "매장 자가소비 위주의 소형 카페는 5Kg, 원두 판매나 납품을 함께 보는 매장은 10~15Kg, 생산 비중이 큰 곳은 20Kg 이상을 권장합니다. 하루 로스팅량과 설치 공간, 납품 계획을 알려주시면 적합한 모델부터 좁혀 드립니다.",
  },
  {
    question: "수입 장비인데 설치와 A/S는 어떻게 되나요?",
    answer:
      "KUBAN은 터키 이스탄불에서 제작되지만, 국내에서는 엔비피코리아가 한국 공식 딜러로 유통·설치·A/S를 직접 책임집니다. 수입 장비에서 가장 중요한 부품 수급과 점검을 경기도 안산 본사에서 일괄 대응합니다.",
  },
];

const MODEL_GUIDE = [
  { range: "로스터리 카페", recommend: "BASE 5", index: 0 },
  { range: "중형 로스터리", recommend: "BASE 10", index: 1 },
  { range: "대형 로스터리", recommend: "BASE 15", index: 2 },
  { range: "공장 / 대량 생산", recommend: "BASE 20", index: 3 },
];

const TRUST_STATS = [
  { value: "공식", unit: "딜러", label: "KUBAN 한국 독점" },
  { value: "9", unit: "종", label: "BASE 4 · SUPREME 5" },
  { value: "국내", unit: "직접", label: "설치 · A/S 대응" },
  { value: "2006", unit: "", label: "엔비피코리아 설립" },
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
              매장용 5Kg부터 생산용 20Kg까지. KUBAN 드럼 로스터는
              로스팅실의 동선, 배기, 반복 생산까지 함께 봐야 하는 장비입니다.
              엔비피코리아가 한국 공식 딜러로 상담·설치·A/S를 직접 이어갑니다.
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
            좋은 로스터는 멋진 외관보다 먼저,
            <br />
            매일 같은 배치를 안정적으로 만들어 줍니다.
          </p>
        </div>
      </div>

      {/* ── Trust strip ── */}
      <div className="container-content py-16 lg:py-20">
        <div className="scroll-fade opacity-0">
          <span className="caption-style text-ink/90 block mb-8 font-korean">
            왜 엔비피코리아인가
          </span>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-bone border-2 border-ink">
            {TRUST_STATS.map((s) => (
              <div key={s.label} className="bg-paper p-6 lg:p-8">
                <p className="font-display font-bold text-[clamp(1.6rem,3.4vw,2.8rem)] text-ink leading-none tracking-[-0.03em] font-korean">
                  {s.value}
                  {s.unit && (
                    <span className="text-[0.5em] align-top ml-1">{s.unit}</span>
                  )}
                </p>
                <p className="caption-style text-ink/75 mt-3 font-korean">{s.label}</p>
              </div>
            ))}
          </div>
          <p className="text-sm font-korean text-ink/70 mt-5 leading-[1.7] max-w-3xl">
            KUBAN 드럼 로스터를 한국에 공식 공급하는 독점 딜러로, 수입 장비에서 가장 중요한 설치·부품·A/S를 경기도 안산 본사에서 직접 책임집니다.
          </p>
        </div>
      </div>

      {/* ── Why roast in-house — business case ── */}
      <div id="why" className="container-content py-16 lg:py-20">
        <div className="scroll-fade opacity-0">
          <span className="caption-style text-ink/90 block mb-4 font-korean">
            왜 직접 로스팅인가
          </span>
          <h2 className="font-display font-bold text-[clamp(2rem,4vw,3.5rem)] text-ink leading-[0.95] tracking-[-0.03em] mb-4 font-korean">
            원두를 사 오던 매장이,
            <br />
            원두를 만드는 매장이 됩니다.
          </h2>
          <p className="text-body-kr font-korean text-ink/75 mb-10 max-w-2xl">
            로스터를 들이는 건 장비 하나를 더하는 일이 아니라, 맛과 마진의 기준을
            매장 안으로 가져오는 일입니다. 카페 사장들이 직접 로스팅을 택하는
            이유는 대개 이 세 가지입니다.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {WHY_ROAST.map((item) => (
            <div
              key={item.no}
              className="scroll-fade opacity-0 border-2 border-bone rounded-lg p-7 lg:p-8"
            >
              <span className="caption-style text-ink/75 block mb-5">
                {item.no}
              </span>
              <h3 className="font-display font-bold text-[clamp(1.2rem,1.8vw,1.6rem)] text-ink leading-[1.1] mb-3 font-korean">
                {item.title}
              </h3>
              <p className="text-sm font-korean text-ink/75 leading-[1.8]">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Model Recommendation Guide ── */}
      <div id="guide" className="container-content py-16 lg:py-20">
        <div className="scroll-fade opacity-0">
          <span className="caption-style text-ink/90 block mb-4 font-korean">
            어떤 모델이 필요하신가요
          </span>
            <p className="text-body-kr font-korean text-ink/75 mb-8">
            카페 운영량, 납품 계획, 설치 공간에 맞춰 먼저 좁혀드립니다.
            카페 창업 단계라면 로스터기뿐 아니라 배기, 제연기, 냄새 민원
            가능성까지 함께 확인하는 것이 좋습니다.
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
            title="매장 규모에 맞는 선택"
            body="카페 한쪽에 놓을 5Kg부터 납품용 생산을 보는 20Kg까지, 운영량에 맞춰 비교합니다."
            image={ROASTER_SITE_MATCHING_IMAGE}
            className="lg:min-h-[330px]"
          />
          <BentoFeatureCard
            number="02"
            title="반복 배치의 안정감"
            body="드럼 구조와 기류 설계를 바탕으로 첫 배치와 마지막 배치의 차이를 줄이는 데 집중합니다."
            image={ROASTER_CONSISTENCY_IMAGE}
            className="lg:min-h-[330px]"
          />
          <BentoFeatureCard
            number="03"
            title="설치 후에도 이어지는 대응"
            body="수입 장비에서 가장 중요한 부품, 점검, A/S까지 한국 공식 딜러가 직접 연결합니다."
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

      {/* ── FAQ ── */}
      <div id="faq" className="border-t-2 border-bone">
        <div className="container-content py-20 lg:py-28">
          <div className="scroll-fade opacity-0 mb-12">
            <span className="caption-style text-ink/90 block mb-4 font-korean">
              자주 묻는 질문
            </span>
            <h2 className="font-display font-bold text-[clamp(2rem,4.5vw,3.5rem)] text-ink leading-[0.95] tracking-[-0.03em] font-korean">
              로스터 도입 전,
              <br />
              카페 사장이 묻는 것.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 border-t-2 border-ink">
            {FAQS.map((item) => (
              <div key={item.question} className="scroll-fade opacity-0 py-7 border-b border-bone">
                <h3 className="text-body-kr font-korean font-semibold text-ink leading-[1.55] mb-3">
                  {item.question}
                </h3>
                <p className="text-sm font-korean text-ink/75 leading-[1.8]">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>

          {/* Cross-sell — roasting always needs smoke handling */}
          <div className="scroll-fade opacity-0 mt-10">
            <Link
              href="/afterburner"
              className="inline-flex items-center gap-2 text-sm font-korean font-medium text-ink border-b-2 border-ink/20 hover:border-ink pb-1 transition-colors"
            >
              로스팅 연기·냄새 제연이 함께 필요하신가요 — 애프터버너 보기
              <span>&rarr;</span>
            </Link>
          </div>
        </div>
      </div>

      {/* ── CTA ── */}
      <div id="contact" className="bg-ink py-24 lg:py-32">
        <div className="container-content text-center">
          <h2 className="scroll-fade font-display font-bold text-[clamp(2rem,5vw,4rem)] text-paper leading-[0.95] tracking-[-0.03em] opacity-0 font-korean">
            매장에 맞는
            <br />
            로스터부터.
          </h2>
          <p className="scroll-fade text-body-kr font-korean text-paper/75 mt-6 opacity-0">
            로스팅량, 설치 공간, 배기 조건을 알려주시면 적합한 모델부터 정리해드립니다.
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
      <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/36 to-ink/5" />
      <div className="absolute inset-x-0 bottom-0 p-6 lg:p-8">
        <span
          className="caption-style text-paper/85 block mb-2"
          style={{
            WebkitTextStroke: "0.5px rgba(15, 15, 15, 0.72)",
            textShadow: "0 1px 6px rgba(0, 0, 0, 0.42)",
          }}
        >
          {number}
        </span>
        <h4
          className="font-display font-bold text-[clamp(1.35rem,2vw,2rem)] text-paper leading-[1.05] mb-3 font-korean"
          style={{
            WebkitTextStroke: "0.5px rgba(15, 15, 15, 0.78)",
            textShadow: "0 2px 10px rgba(0, 0, 0, 0.5)",
          }}
        >
          {title}
        </h4>
        <p
          className="max-w-lg text-sm font-korean text-paper/90 leading-[1.65]"
          style={{
            WebkitTextStroke: "0.35px rgba(15, 15, 15, 0.62)",
            textShadow: "0 1px 8px rgba(0, 0, 0, 0.5)",
          }}
        >
          {body}
        </p>
      </div>
    </div>
  );
}
