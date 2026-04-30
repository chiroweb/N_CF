"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { gsap } from "@/lib/gsap";
import { IMAGES } from "@/lib/images";
import Image from "next/image";
import Link from "next/link";

type Lang = "ko" | "en";

const SLIDES = [
  {
    stickerLine1: "NBPKOREA",
    stickerLine2: "AFTERBURNER",
    leftImage: IMAGES.missionLeft,
    rightImage: IMAGES.missionAfterburnerThumb,
    rightAspect: "aspect-[3/4]",
    rightFit: "object-cover",
    title: "NBPKOREA AFTERBURNER",
    lead: "SMOKE-FREE ROASTING, ENGINEERED IN KOREA",
    bodyKo:
      "로스팅 중 생기는 연기와 냄새를 배기 라인 안에서 처리하는 애프터버너입니다. 현장 배기 구조와 로스터 용량에 맞춰 모델을 고르고, 설치 후에도 온도와 배출 상태를 함께 확인합니다.",
    bodyEn:
      "An afterburner built to handle roasting smoke and odor inside the exhaust line. We match the model to your roaster capacity and duct layout, then check temperature and exhaust performance after installation.",
    shopHref: "/contact",
    learnHref: "/afterburner",
  },
  {
    stickerLine1: "KUBAN",
    stickerLine2: "ROASTER",
    leftImage: IMAGES.factory,
    rightImage: IMAGES.missionRoasterThumb,
    rightAspect: "aspect-square",
    rightFit: "object-cover",
    title: "KUBAN COFFEE ROASTERS",
    lead: "TURKISH DRUM CRAFT · KOREA EXCLUSIVE",
    bodyKo:
      "NBPKOREA가 한국에 공식 공급하는 KUBAN 드럼 로스터입니다. 작은 매장용 5kg 모델부터 생산용 대형 모델까지, 로스팅량과 설치 공간에 맞춰 선택할 수 있습니다.",
    bodyEn:
      "KUBAN drum roasters, officially supplied in Korea by NBPKOREA. From compact 5kg shop models to larger production drums, each setup is selected around batch volume and available floor space.",
    shopHref: "/contact",
    learnHref: "/roasters",
  },
  {
    stickerLine1: "PEANUT",
    stickerLine2: "BUTTER",
    leftImage: IMAGES.missionNutbutterLeft,
    rightImage: IMAGES.missionNutbutterThumb,
    rightAspect: "aspect-square",
    rightFit: "object-cover scale-110",
    title: "PEANUT BUTTER MACHINE",
    lead: "FROM WHOLE NUTS TO SOFT BUTTER TEXTURE",
    bodyKo:
      "볶은 견과를 넣고 원하는 질감으로 바로 갈아 담는 상업용 넛버터 머신입니다. 카페, 베이커리, 식품 제조 현장에서 메뉴와 판매 방식에 맞춰 사용할 수 있습니다.",
    bodyEn:
      "A commercial nut butter machine that grinds roasted nuts into the texture you want, ready to jar while warm. Built for cafés, bakeries, and specialty food makers shaping a fresh nut butter menu.",
    shopHref: "/contact",
    learnHref: "/the-lab",
  },
];

export default function Mission({ lang = "ko" }: { lang?: Lang }) {
  const isEn = lang === "en";
  const hrefPrefix = isEn ? "/en" : "";
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
            <span className="caption-style text-ink/90 mr-2">
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
              <Image
                key={slide.leftImage}
                src={slide.leftImage}
                alt={slide.title}
                fill
                sizes="(min-width: 1024px) 60vw, 100vw"
                className="slide-content object-cover object-center"
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
              className={`relative overflow-hidden rounded-lg bg-bone ${slide.rightAspect}`}
            >
              <div className="parallax-inner absolute inset-0 -top-[10%] -bottom-[10%]">
                <Image
                  key={slide.rightImage}
                  src={slide.rightImage}
                  alt={slide.title}
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className={`slide-content ${slide.rightFit} object-center`}
                />
              </div>
            </div>

            {/* Text panel */}
            <div className="flex-1 bg-paper px-6 lg:px-10 py-8 lg:py-10 flex flex-col justify-start">
              <span className="slide-content caption-style text-ink/75 block mb-4">
                {slide.lead}
              </span>

              <h3 className="slide-content font-display font-bold text-[clamp(1.8rem,3vw,2.8rem)] text-ink leading-[1.08] tracking-[-0.02em] mb-5">
                {slide.title}
              </h3>

              <p className={`slide-content text-ink/85 leading-[1.8] mb-8 ${isEn ? "text-[clamp(0.95rem,1.1vw,1.05rem)]" : "text-body-kr font-korean"}`}>
                {isEn ? slide.bodyEn : slide.bodyKo}
              </p>

              <div className="slide-content flex flex-wrap items-center gap-2">
                <Link
                  href={`${hrefPrefix}${slide.shopHref}`}
                  className="inline-block bg-ink text-paper px-5 py-2.5 text-xs font-bold tracking-[0.06em] uppercase hover:bg-paper hover:text-ink border-[2px] border-ink transition-all duration-200 rounded-lg"
                >
                  SHOP
                </Link>
                <Link
                  href={`${hrefPrefix}${slide.learnHref}`}
                  className="inline-block bg-ink text-paper px-5 py-2.5 text-xs font-bold tracking-[0.06em] uppercase hover:bg-paper hover:text-ink border-[2px] border-ink transition-all duration-200 rounded-lg"
                >
                  LEARN MORE
                </Link>
                <button
                  onClick={() => goTo(-1)}
                  className="ml-0 sm:ml-2 flex h-10 w-10 items-center justify-center rounded-full border-[2px] border-ink/20 text-ink hover:border-ink transition-colors"
                  aria-label="Previous"
                >
                  <span className="text-sm">&larr;</span>
                </button>
                <span className="caption-style text-ink/90 mx-1">
                  {String(current + 1).padStart(2, "0")} / {String(SLIDES.length).padStart(2, "0")}
                </span>
                <button
                  onClick={() => goTo(1)}
                  className="flex h-10 w-10 items-center justify-center rounded-full border-[2px] border-ink/20 text-ink hover:border-ink transition-colors"
                  aria-label="Next"
                >
                  <span className="text-sm">&rarr;</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
