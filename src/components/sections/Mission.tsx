"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { gsap } from "@/lib/gsap";
import { IMAGES } from "@/lib/images";
import Link from "next/link";

const SLIDES = [
  {
    stickerLine1: "NBPKOREA",
    stickerLine2: "AFTERBURNER",
    leftImage: IMAGES.missionLeft,
    rightImage: IMAGES.missionRight,
    title: "NBPKOREA AFTERBURNER",
    bodyEn:
      "The highest standard of smoke elimination we build. Direct flame combustion, obsessively tuned per installation. 14 years of single-product focus means every unit carries a decade of refinement. No shortcuts, no filters to replace — just complete combustion.",
    bodyKr:
      "우리가 만드는 가장 높은 수준의 연기 제거. 직화 연소, 설치 현장마다 집요하게 튜닝. 14년간 단일 제품에 집중했기에 모든 유닛에 10년의 개선이 담겨 있다.",
    shopHref: "/contact",
    learnHref: "/afterburner",
  },
  {
    stickerLine1: "KUBAN",
    stickerLine2: "ROASTER",
    leftImage: IMAGES.factory,
    rightImage: IMAGES.obs02,
    title: "KUBAN COFFEE ROASTERS",
    bodyEn:
      "Turkey's finest drum roasters, exclusively distributed in Korea by NBPKOREA. Precision-engineered for consistency, built for roasters who take their craft seriously. From 1kg sample roasters to 60kg production machines.",
    bodyKr:
      "터키 최고의 드럼 로스터, NBPKOREA가 한국 독점 유통. 정밀 엔지니어링의 일관성, 장인 정신을 가진 로스터를 위해 제작. 1kg 샘플 로스터부터 60kg 생산 기계까지.",
    shopHref: "/contact",
    learnHref: "/roasters",
  },
  {
    stickerLine1: "PEANUT",
    stickerLine2: "BUTTER",
    leftImage: IMAGES.obs03,
    rightImage: IMAGES.obs01,
    title: "PEANUT BUTTER MACHINE",
    bodyEn:
      "Commercial stone-ground peanut butter machines for cafés, bakeries, and specialty food producers. Same obsessive engineering, different application. Because we believe everything we touch should be built to last.",
    bodyKr:
      "카페, 베이커리, 스페셜티 식품 생산자를 위한 상업용 스톤그라운드 땅콩버터 머신. 같은 집요한 엔지니어링, 다른 용도. 우리가 손대는 모든 것은 오래가야 한다고 믿으니까.",
    shopHref: "/contact",
    learnHref: "/contact",
  },
];

export default function Mission() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftImgRef = useRef<HTMLDivElement>(null);
  const rightImgRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const slide = SLIDES[current];

  const goTo = useCallback(
    (dir: -1 | 1) => {
      if (isTransitioning) return;
      setIsTransitioning(true);

      // Fade out current content
      const content = sectionRef.current?.querySelectorAll(".slide-content");
      if (content) {
        gsap.to(content, {
          opacity: 0,
          y: dir * -15,
          duration: 0.3,
          ease: "power2.in",
          onComplete: () => {
            setCurrent((prev) => (prev + dir + SLIDES.length) % SLIDES.length);
            // Fade in new content (triggered by state change + useEffect below)
          },
        });
      }
    },
    [isTransitioning]
  );

  // Fade in after slide change
  useEffect(() => {
    if (!isTransitioning) return;
    const content = sectionRef.current?.querySelectorAll(".slide-content");
    if (content) {
      gsap.fromTo(
        content,
        { opacity: 0, y: 15 },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: "power2.out",
          stagger: 0.05,
          onComplete: () => setIsTransitioning(false),
        }
      );
    }
  }, [current, isTransitioning]);

  // Parallax
  useEffect(() => {
    const ctx = gsap.context(() => {
      if (leftImgRef.current) {
        gsap.to(leftImgRef.current.querySelector(".parallax-inner"), {
          yPercent: -10,
          ease: "none",
          scrollTrigger: {
            trigger: leftImgRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.5,
          },
        });
      }
      if (rightImgRef.current) {
        gsap.to(rightImgRef.current.querySelector(".parallax-inner"), {
          yPercent: -8,
          ease: "none",
          scrollTrigger: {
            trigger: rightImgRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.5,
          },
        });
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-paper">
      {/* Section header */}
      <div className="container-content pt-4 lg:pt-6">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-heading font-semibold text-[clamp(1.5rem,2.5vw,2rem)] text-ink">
            Collections
          </h2>
          <div className="flex items-center gap-3">
            <span className="caption-style text-ink/70 mr-2">
              {String(current + 1).padStart(2, "0")} / {String(SLIDES.length).padStart(2, "0")}
            </span>
            <button
              onClick={() => goTo(-1)}
              className="w-11 h-11 rounded-full border-[2px] border-ink/20 hover:border-ink flex items-center justify-center transition-colors"
              aria-label="Previous"
            >
              <span className="text-ink text-base">&larr;</span>
            </button>
            <button
              onClick={() => goTo(1)}
              className="w-11 h-11 rounded-full border-[2px] border-ink/20 hover:border-ink flex items-center justify-center transition-colors"
              aria-label="Next"
            >
              <span className="text-ink text-base">&rarr;</span>
            </button>
          </div>
        </div>
      </div>

      {/* Image layout */}
      <div className="px-4 lg:px-6 pb-16 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-[6fr_4fr] gap-4">
          {/* Left: tall atmospheric photo */}
          <div
            ref={leftImgRef}
            className="relative overflow-hidden rounded-lg"
            style={{ height: "130vh" }}
          >
            <div className="parallax-inner absolute inset-0 -top-[10%] -bottom-[10%] bg-haze">
              <div
                className="slide-content absolute inset-0 bg-cover bg-center transition-none"
                style={{ backgroundImage: `url(${slide.leftImage})` }}
              />
            </div>

            {/* Knockout sticker — white box with image showing through text */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <div className="slide-content relative inline-block rounded-lg overflow-hidden">
                {/* White background */}
                <div className="absolute inset-0 bg-white/95" />
                {/* Text with image clipped through */}
                <div className="relative px-8 py-6 text-center">
                  <span
                    className="font-display font-bold text-[clamp(2.5rem,5.5vw,5rem)] leading-[0.88] tracking-[-0.04em] block"
                    style={{
                      backgroundImage: `url(${slide.leftImage})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {slide.stickerLine1}
                  </span>
                  <span
                    className="font-display font-bold text-[clamp(2.5rem,5.5vw,5rem)] leading-[0.88] tracking-[-0.04em] block"
                    style={{
                      backgroundImage: `url(${slide.leftImage})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {slide.stickerLine2}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-4">
            {/* Product image strip */}
            <div
              ref={rightImgRef}
              className="relative overflow-hidden rounded-lg bg-bone aspect-[4/3]"
            >
              <div className="parallax-inner absolute inset-0 -top-[10%] -bottom-[10%]">
                <div
                  className="slide-content absolute inset-0 bg-cover bg-center transition-none"
                  style={{ backgroundImage: `url(${slide.rightImage})` }}
                />
              </div>
            </div>

            {/* Text panel */}
            <div className="flex-1 bg-paper px-6 lg:px-10 py-8 lg:py-10 flex flex-col justify-start">
              <h3 className="slide-content font-display font-bold text-[clamp(1.8rem,3vw,2.8rem)] text-ink leading-[1.08] tracking-[-0.02em] mb-5">
                {slide.title}
              </h3>

              <p className="slide-content text-[clamp(0.85rem,1vw,0.95rem)] text-ink/85 leading-[1.7] mb-3">
                {slide.bodyEn}
              </p>

              <p className="slide-content text-body-kr font-korean text-ink/75 leading-[1.75] mb-8">
                {slide.bodyKr}
              </p>

              <div className="slide-content flex items-center gap-2">
                <Link
                  href={slide.shopHref}
                  className="inline-block bg-ink text-paper px-5 py-2.5 text-xs font-bold tracking-[0.06em] uppercase hover:bg-paper hover:text-ink border-[2px] border-ink transition-all duration-200 rounded-lg"
                >
                  SHOP
                </Link>
                <Link
                  href={slide.learnHref}
                  className="inline-block bg-ink text-paper px-5 py-2.5 text-xs font-bold tracking-[0.06em] uppercase hover:bg-paper hover:text-ink border-[2px] border-ink transition-all duration-200 rounded-lg"
                >
                  LEARN MORE
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
