"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { IMAGES } from "@/lib/images";
import Image from "next/image";
import Link from "next/link";

type Lang = "ko" | "en";

const PRODUCTS = [
  {
    tag: "THE AFTERBURNER",
    title: "DIRECT FLAME AFTERBURNER",
    detailsKo: [
      ["TYPE", "직화식"],
      ["METHOD", "완전 연소"],
      ["RESULT", "무연 배출"],
    ],
    detailsEn: [
      ["TYPE", "Direct Flame"],
      ["METHOD", "Full Combustion"],
      ["RESULT", "Zero Smoke"],
    ],
    href: "/afterburner",
  },
  {
    tag: "KUBAN",
    title: "COFFEE ROASTERS",
    detailsKo: [
      ["TYPE", "드럼 로스터"],
      ["ORIGIN", "터키"],
      ["DEALER", "한국 독점"],
    ],
    detailsEn: [
      ["TYPE", "Drum Roaster"],
      ["ORIGIN", "Türkiye"],
      ["DEALER", "Exclusive KR"],
    ],
    href: "/roasters",
  },
  {
    tag: "NUTS-STAR",
    title: "NUT PASTE MACHINE",
    detailsKo: [
      ["TYPE", "견과 페이스트 제조기"],
      ["NUT", "땅콩·아몬드·피스타치오"],
      ["USE", "젤라또·베이커리"],
    ],
    detailsEn: [
      ["TYPE", "Nut Paste"],
      ["NUT", "Peanut · Almond · Pistachio"],
      ["USE", "Gelato · Bakery"],
    ],
    href: "/the-lab",
  },
];

export default function Hero({ lang = "ko" }: { lang?: Lang }) {
  const isEn = lang === "en";
  const hrefPrefix = isEn ? "/en" : "";
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax background — moves at ~0.5x scroll speed
      if (bgRef.current && sectionRef.current) {
        gsap.to(bgRef.current, {
          yPercent: 25,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 0.5,
          },
        });
      }

      // Stagger fade-in for typography lines on load
      const lines = sectionRef.current?.querySelectorAll(".hero-line");
      if (lines) {
        gsap.fromTo(
          lines,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.12,
            ease: "power3.out",
          }
        );
      }

      // CTA button fade-in
      const cta = sectionRef.current?.querySelector(".hero-cta");
      if (cta) {
        gsap.fromTo(
          cta,
          { opacity: 0 },
          { opacity: 1, duration: 0.6, delay: 0.7, ease: "power2.out" }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative z-[1] bg-ink">
      {/* ── Fixed parallax background ── */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <div
          ref={bgRef}
          className="absolute inset-0 -top-[30%] -bottom-[30%]"
        >
          <Image
            src={IMAGES.heroBg}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-ink/40" />
        </div>
      </div>

      {/* ── Scrolling content layer ── */}
      <div className="relative z-[2]">
        {/* Sticky button wrapper — encompasses typo + body copy */}
        <div className="relative">
          {/* Giant stacked typography — flush left */}
          <h1 className="pl-[var(--edge-margin)] pt-[35vh] m-0 font-display font-bold text-[clamp(5rem,14vw,15rem)] text-white leading-[0.85] tracking-[-0.04em]">
            <span className="hero-line block opacity-0">WHAT</span>
            <span className="hero-line block opacity-0">WILL</span>
            <span className="hero-line block opacity-0">YOU MAKE</span>
            <span className="hero-line block opacity-0">NEXT</span>
            <span className="sr-only">
              {isEn
                ? ". NBPKOREA supplies direct-flame afterburners, KUBAN coffee roasters, and NUTS-STAR commercial nut butter and nut paste machines."
                : ". 엔비피코리아는 직화식 애프터버너, KUBAN 커피 로스터, 업소용 땅콩버터·땅콩·아몬드·피스타치오 페이스트 제조기 넛츠스타를 공급합니다."}
            </span>
          </h1>

          {/* Body copy + sticky CTA zone */}
          <div className="flex items-start justify-end gap-8 pr-[var(--edge-margin)] pl-[var(--edge-margin)] mt-40">
            {/* Body copy — right side */}
            <div className="max-w-md ml-auto">
              <p className="text-white/90 text-[clamp(0.8rem,1.1vw,1rem)] leading-relaxed uppercase font-medium tracking-[0.04em]">
                Roast cleaner. Grind fresher.
                Build the next product
                inside your own shop.
              </p>
              {isEn ? (
                <p className="text-white/85 mt-3 leading-[1.65] text-sm">
                  Clean air, roasted coffee, fresh nut paste.
                  <br />
                  Now choose what your shop will make next.
                </p>
              ) : (
                <p className="text-white/85 text-body-kr font-korean mt-3 leading-[1.75] text-sm">
                  연기는 줄이고, 원두는 직접 볶고, 견과는 바로 갑니다.
                  <br />
                  다음 제품을 매장 안에서 직접 만드세요.
                </p>
              )}
            </div>
          </div>

          {/* Sticky CTA — follows viewport, docks below body copy */}
          <div className="hero-cta sticky bottom-6 z-20 flex justify-end pr-[var(--edge-margin)] mt-10 pb-10 opacity-0">
            <Link
              href={`${hrefPrefix}/contact`}
              className="btn-pill bg-ink text-paper hover:bg-paper hover:text-ink border-2 border-white hover:border-ink transition-all duration-200 shadow-[0_0_0_1px_rgba(255,255,255,0.6)]"
            >
              {isEn ? "REQUEST A QUOTE" : "견적 문의"}
              <span className="ml-2">&rarr;</span>
            </Link>
          </div>
        </div>

        {/* ── Bento grid — product cards ── */}
        <div className="px-[var(--edge-margin)] mt-24 pb-16">
          {/*
            Bento layout:
            ┌────────────┬────────┬────────┬────────┐
            │            │ PROD 1 │ PROD 2 │ PROD 3 │
            │  BRAND     ├────────┴────────┴────────┤
            │  STATEMENT │  ↑↑ MARQUEE TEXT ↑↑      │
            └────────────┴──────────────────────────┘
          */}
          <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr_1fr_1fr] md:grid-rows-[auto_auto] border-[3px] border-white/40 rounded-lg overflow-hidden">
            {/* Left column — spans 2 rows */}
            <div className="md:row-span-2 border-b-[3px] md:border-b-0 md:border-r-[3px] border-white/40 p-8 lg:p-10 flex items-end">
              <h3 className="font-display font-bold text-[clamp(1.6rem,2.8vw,2.6rem)] text-white leading-[1.05] tracking-[-0.02em]">
                AN ANSAN
                <br />
                CAFE PRODUCTION
                <br />
                EQUIPMENT COMPANY
              </h3>
            </div>

            {/* Top right — 3 product cards */}
            {PRODUCTS.map((product) => (
              <Link
                key={product.tag}
                href={`${hrefPrefix}${product.href}`}
                className="group border-b-[3px] md:border-b-[3px] md:border-r-[3px] last:border-r-0 border-white/40 p-5 lg:p-6 transition-colors duration-300 hover:bg-paper flex flex-col justify-between min-h-[140px]"
              >
                <div className="flex items-start justify-between mb-4">
                  <h4 className="font-display font-bold text-base text-white group-hover:text-ink transition-colors duration-300 tracking-tight">
                    {product.tag}
                  </h4>
                  <span className="text-white/80 group-hover:text-ink/80 transition-colors duration-300 text-xs">
                    &rarr;
                  </span>
                </div>
                <div className="space-y-1.5 mt-auto">
                  {(isEn ? product.detailsEn : product.detailsKo).map(([label, value]) => (
                    <div
                      key={label}
                      className="flex justify-between text-xs tracking-[0.06em] uppercase"
                    >
                      <span className="text-white/85 group-hover:text-ink/85 transition-colors duration-300">
                        {label}
                      </span>
                      <span className="text-white/90 group-hover:text-ink/90 transition-colors duration-300">
                        {value}
                      </span>
                    </div>
                  ))}
                </div>
              </Link>
            ))}

            {/* Bottom right — marquee row spanning 3 columns */}
            <div className="md:col-span-3 flex items-center py-3 px-6 overflow-hidden">
              <div className="flex items-center gap-4 mr-6 shrink-0">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="text-white/80 text-sm">&uarr;</span>
                ))}
              </div>
              <div className="flex-1 overflow-hidden">
                <div className="flex animate-marquee whitespace-nowrap">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <span
                      key={i}
                      className="text-sm tracking-[0.08em] uppercase text-white/85 mx-4 font-medium"
                    >
                      AFTERBURNER &nbsp;*&nbsp; COFFEE ROASTER &nbsp;*&nbsp; NUT PASTE MACHINE &nbsp;*&nbsp;
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-4 ml-6 shrink-0">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="text-white/80 text-sm">&uarr;</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
