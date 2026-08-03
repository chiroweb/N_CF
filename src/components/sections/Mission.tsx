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
      "도심에서 로스팅하면 가장 먼저 부딪히는 게 연기와 냄새 민원입니다. 애프터버너는 그 연기를 배기 라인 안에서 태워 없앱니다. 로스터 용량과 덕트 구조를 실측해 모델을 정하고, 설치 뒤 배출 상태까지 직접 확인합니다.",
    bodyEn:
      "In the city, smoke and odor complaints are the first wall a roaster runs into. The afterburner burns that smoke off inside the exhaust line. We size the model to your roaster and duct layout, then verify the exhaust after install.",
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
      "원두를 직접 볶으면 맛도 마진도 매장이 쥐게 됩니다. KUBAN 드럼 로스터는 매장용 5kg부터 생산용 대형까지, 로스팅량과 설치 공간에 맞춰 고릅니다. 한국 공식 딜러로 상담·설치·A/S를 직접 잇습니다.",
    bodyEn:
      "Roast your own beans and the flavor — and the margin — stay in your shop. KUBAN drum roasters run from a 5kg shop model to larger production drums, chosen around your batch volume and floor space. As the official Korea dealer, we handle the consult, install, and service ourselves.",
    shopHref: "/contact",
    learnHref: "/roasters",
  },
  {
    stickerLine1: "NUT",
    stickerLine2: "PASTE",
    leftImage: IMAGES.missionNutbutterLeft,
    rightImage: IMAGES.missionNutbutterThumb,
    rightAspect: "aspect-square",
    rightFit: "object-cover scale-110",
    title: "NUT BUTTER & PASTE MACHINE",
    lead: "PEANUT · ALMOND · PISTACHIO — MADE IN YOUR SHOP",
    bodyKo:
      "땅콩·아몬드·피스타치오를 직접 갈아 젤라또 페이스트, 땅콩빵·베이커리 필링, 카페 메뉴와 병입 상품을 만듭니다. 시간당 50kg급 상업용 견과 페이스트 제조기로, 220V 전원에서 운용합니다.",
    bodyEn:
      "Turn roasted peanut, almond, and pistachio into gelato paste, bakery filling, café menus, and jarred products. NUTS-STAR is a 50kg-class commercial nut paste machine that runs on standard 220V power.",
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
        <div className="flex items-end justify-between gap-6 mb-8">
          <div className="max-w-xl">
            <h2 className="font-heading font-semibold text-[clamp(1.5rem,2.5vw,2rem)] text-ink">
              Collections
            </h2>
            {isEn ? (
              <p className="text-ink/75 leading-[1.7] mt-3 text-[clamp(0.95rem,1.1vw,1.05rem)]">
                Smoke complaints, in-house roasting, a fresh menu made at the
                counter — the everyday problems of cafés and roasteries, solved
                with the right machine.
              </p>
            ) : (
              <p className="text-body-kr font-korean text-ink/75 leading-[1.7] mt-3">
                연기 민원부터 직접 볶는 원두, 카운터에서 만드는 새 메뉴까지.
                카페·로스터리 현장에서 자주 부딪히는 고민을 매장에 맞는 장비로 풉니다.
              </p>
            )}
          </div>
          <div className="flex items-center gap-3 shrink-0">
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
