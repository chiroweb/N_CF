"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { gsap } from "@/lib/gsap";
import {
  ROASTER_BASE_MODELS,
  ROASTER_SUPREME_GALLERY,
  HERO_IMAGES,
} from "@/lib/products";
import FloatingSectionNav, { type NavSection } from "@/components/layout/FloatingSectionNav";
import Link from "next/link";

const SECTIONS: NavSection[] = [
  { id: "overview", label: "OVERVIEW" },
  { id: "guide", label: "MODEL GUIDE" },
  { id: "models", label: "MODELS" },
  { id: "details", label: "DETAILS" },
  { id: "lineup", label: "LINEUP" },
  { id: "contact", label: "CONTACT" },
];

const MODEL_GUIDE = [
  { range: "샘플 / 교육용", recommend: "BASE 0.5", index: 0 },
  { range: "소형 카페", recommend: "BASE 1.5 ~ 3", index: 1 },
  { range: "로스터리 카페", recommend: "BASE 5", index: 3 },
  { range: "대형 로스터리 / 공장", recommend: "BASE 10 ~ 20", index: 4 },
];

export default function RoastersPage() {
  const pageRef = useRef<HTMLDivElement>(null);
  const heroImgRef = useRef<HTMLDivElement>(null);
  const [selectedModel, setSelectedModel] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [showSupreme, setShowSupreme] = useState(false);
  const [supremeGalleryIndex, setSupremeGalleryIndex] = useState(0);

  const model = ROASTER_BASE_MODELS[selectedModel];

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

  const switchToSupreme = useCallback(() => {
    if (isTransitioning || showSupreme) return;
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
          setSupremeGalleryIndex(0);
        },
      });
    }
  }, [isTransitioning, showSupreme]);

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
  }, [selectedModel, showSupreme, isTransitioning]);

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
            <span className="hero-fade caption-style text-ink/70 block mb-6 opacity-0">
              COFFEE ROASTING MACHINE
            </span>
            <h1 className="hero-fade font-display font-bold text-[clamp(3rem,8vw,7rem)] text-ink leading-[0.88] tracking-[-0.04em] opacity-0">
              THE
              <br />
              ROAST
              <br />
              ERS
            </h1>
            <p className="hero-fade text-[clamp(1rem,1.3vw,1.15rem)] text-ink/85 leading-[1.6] mt-8 max-w-md opacity-0">
              From 0.5kg samples to 20kg production batches.
              Drum roasters built for precision, consistency, and craft.
            </p>
            <p className="hero-fade text-body-kr font-korean text-ink/65 leading-[1.75] mt-4 max-w-md opacity-0">
              0.5kg 샘플부터 20kg 대량 생산까지.
              정밀함, 일관성, 그리고 장인 정신을 위해 만든 드럼 로스터.
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

          <div className="hero-fade relative aspect-[3/4] rounded-lg overflow-hidden bg-bone opacity-0">
            <div
              ref={heroImgRef}
              className="absolute inset-0 -top-[15%] -bottom-[15%] bg-contain bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${HERO_IMAGES.roaster})` }}
            />
          </div>
        </div>
      </div>

      {/* ── One-line manifesto ── */}
      <div className="bg-ink py-16 lg:py-20">
        <div className="container-content">
          <p className="scroll-fade font-heading font-semibold text-[clamp(1.4rem,2.8vw,2.4rem)] text-paper leading-[1.35] text-center opacity-0">
            반복이 만든 정밀함. 불이 만든 맛.
            <br />
            드럼 위에서 원두가 완성된다.
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
            7 BASE MODELS.
            <br />
            1 SUPREME.
          </h2>
        </div>

        {/* Model tabs */}
        <div className="scroll-fade flex flex-wrap gap-2 mb-16 opacity-0">
          {ROASTER_BASE_MODELS.map((m, i) => (
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
          ))}
          <button
            onClick={switchToSupreme}
            className={`px-5 py-2.5 text-sm font-bold tracking-[0.04em] uppercase rounded-lg border-2 transition-all duration-200 ${
              showSupreme
                ? "bg-ink text-paper border-ink"
                : "bg-transparent text-ink/85 border-bone hover:border-ink hover:text-ink"
            }`}
          >
            SUPREME
          </button>
        </div>

        {/* Model detail — image + specs */}
        {!showSupreme ? (
          <div className="grid grid-cols-1 lg:grid-cols-[5fr_4fr] gap-8 lg:gap-16">
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
                <SpecRow label="WEIGHT" value={model.weight} />
                <SpecRow label="POWER" value={model.power} />
                <SpecRow label="BURNER" value={model.burner} />
                <SpecRow label="CONTROLLER" value={model.controller} />
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
        ) : (
          /* ── Supreme Model ── */
          <div className="grid grid-cols-1 lg:grid-cols-[5fr_4fr] gap-8 lg:gap-16">
            <div className="model-content">
              <div className="relative aspect-[4/5] rounded-lg overflow-hidden bg-bone">
                <div
                  className="absolute inset-0 bg-contain bg-center bg-no-repeat transition-none"
                  style={{ backgroundImage: `url(${ROASTER_SUPREME_GALLERY[supremeGalleryIndex]})` }}
                />
              </div>
              {ROASTER_SUPREME_GALLERY.length > 1 && (
                <div className="flex gap-2 mt-3">
                  {ROASTER_SUPREME_GALLERY.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setSupremeGalleryIndex(i)}
                      className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-colors ${
                        i === supremeGalleryIndex ? "border-ink" : "border-bone"
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

            <div className="model-content flex flex-col justify-center">
              <h3 className="font-display font-bold text-[clamp(2rem,3.5vw,3rem)] text-ink leading-[0.95] tracking-[-0.03em] mb-2">
                SUPREME
              </h3>
              <p className="caption-style text-ink/70 mb-8">
                Premium Line / 프리미엄 라인
              </p>

              <p className="text-[clamp(1rem,1.3vw,1.15rem)] text-ink/85 leading-[1.6] mb-4">
                The flagship. Every detail refined. Supreme is not just a roaster
                — it is the statement that your craft deserves the best machine ever built.
              </p>
              <p className="text-body-kr font-korean text-ink/65 leading-[1.75] mb-8">
                플래그십. 모든 디테일을 정제했다. Supreme은 단순한 로스터가 아니다
                — 당신의 기술이 최고의 기계를 받을 자격이 있다는 선언이다.
              </p>

              <div className="space-y-0 border-t-2 border-ink">
                <SpecRow label="LINE" value="Premium Custom" />
                <SpecRow label="TYPE" value="Drum Roaster" />
                <SpecRow label="FINISH" value="Custom Color & Material" />
                <SpecRow label="CONTROLLER" value="Full Auto / Touchscreen" />
              </div>

              <div className="mt-10">
                <Link
                  href="/contact"
                  className="inline-block bg-ink text-paper px-6 py-3 text-sm font-bold tracking-[0.06em] uppercase hover:bg-paper hover:text-ink border-2 border-ink transition-all duration-200 rounded-lg"
                >
                  INQUIRE ABOUT SUPREME
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ── Product Details — tilt cards ── */}
      <div id="details" className="container-content pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <TiltCard
            number="01"
            title="DRUM PRECISION"
            en="Double-wall drum with optimized airflow. Every bean gets equal heat, every batch stays consistent."
            kr="이중벽 드럼과 최적화된 기류. 모든 원두에 균일한 열, 모든 배치에 일관된 결과."
            image={ROASTER_BASE_MODELS[3].gallery[0]}
          />
          <TiltCard
            number="02"
            title="FULL CONTROL"
            en="PLC & touchscreen controllers with real-time profiling. Repeat your best roast, every single time."
            kr="PLC & 터치스크린 컨트롤러로 실시간 프로파일링. 최고의 로스팅을 매번 재현한다."
            image={ROASTER_BASE_MODELS[4].gallery[0]}
          />
          <TiltCard
            number="03"
            title="EVERY SCALE"
            en="0.5kg samples to 20kg production. One philosophy, seven sizes. Find your fit."
            kr="0.5kg 샘플부터 20kg 양산까지. 하나의 철학, 일곱 가지 사이즈. 당신에게 맞는 것을 찾아라."
            image={ROASTER_BASE_MODELS[6].gallery[0]}
          />
        </div>
      </div>

      {/* ── Full Lineup Overview ── */}
      <div id="lineup" className="border-t-2 border-bone">
        <div className="container-content py-16 lg:py-20">
          <div className="scroll-fade opacity-0">
            <span className="caption-style text-ink/70 block mb-6">
              FULL LINEUP
            </span>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b-2 border-ink">
                    <th className="caption-style text-ink/70 py-3 pr-4">MODEL</th>
                    <th className="caption-style text-ink/70 py-3 pr-4">CAPACITY</th>
                    <th className="caption-style text-ink/70 py-3 pr-4">WEIGHT</th>
                    <th className="caption-style text-ink/70 py-3 pr-4">BURNER</th>
                    <th className="caption-style text-ink/70 py-3">CONTROLLER</th>
                  </tr>
                </thead>
                <tbody>
                  {ROASTER_BASE_MODELS.map((m) => (
                    <tr key={m.id} className="border-b border-bone">
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
          <h2 className="scroll-fade font-display font-bold text-[clamp(2rem,5vw,4rem)] text-paper leading-[0.95] tracking-[-0.03em] opacity-0">
            YOUR BEANS.
            <br />
            OUR ROASTER.
          </h2>
          <p className="scroll-fade text-body-kr font-korean text-paper/75 mt-6 opacity-0">
            당신의 원두에 맞는 로스터를 찾아드립니다.
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
