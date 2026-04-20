"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { HERO_IMAGES } from "@/lib/products";
import { IMAGES } from "@/lib/images";
import Link from "next/link";

const SPECS = [
  { label: "TYPE", value: "Stone-Ground Nut Butter Mill" },
  { label: "THROUGHPUT", value: "12 – 15 kg / hour" },
  { label: "DRIVE", value: "1.5 kW single-phase" },
  { label: "STONE", value: "Natural Corundum 18″" },
  { label: "HOUSING", value: "Stainless 304, food-grade" },
  { label: "FOOTPRINT", value: "520 × 420 × 780 mm" },
  { label: "WEIGHT", value: "88 kg" },
  { label: "CERTIFICATION", value: "HACCP-Ready" },
];

const PROCESS = [
  {
    no: "01",
    title: "ROAST",
    en: "Whole peanuts roasted to profile. No pre-ground mixes, no shortcuts.",
    kr: "생땅콩을 전용 프로파일로 로스팅. 프리믹스 없음, 지름길 없음.",
  },
  {
    no: "02",
    title: "GRIND",
    en: "A slow stone turns oil and solids into one continuous paste — warm, honest, alive.",
    kr: "느린 돌이 오일과 고형분을 하나의 페이스트로 만든다 — 따뜻하고, 정직하고, 살아 있다.",
  },
  {
    no: "03",
    title: "JAR",
    en: "Poured warm into the jar. No stabilizers. Separation is honesty, not a defect.",
    kr: "따뜻할 때 병에 붓는다. 안정제 없음. 층 분리는 정직함이지, 결함이 아니다.",
  },
];

const APPLICATIONS = [
  "CAFÉ",
  "BAKERY",
  "PASTRY KITCHEN",
  "ICE CREAM BAR",
  "SPECIALTY FOOD",
  "DESSERT HOUSE",
  "RESTAURANT",
  "PRIVATE LABEL",
];

export default function TheLabPage() {
  const pageRef = useRef<HTMLDivElement>(null);
  const mastheadImgRef = useRef<HTMLDivElement>(null);
  const plateImgRef = useRef<HTMLDivElement>(null);

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

      if (mastheadImgRef.current) {
        gsap.to(mastheadImgRef.current, {
          yPercent: 12,
          ease: "none",
          scrollTrigger: {
            trigger: mastheadImgRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.5,
          },
        });
      }

      if (plateImgRef.current) {
        gsap.to(plateImgRef.current, {
          yPercent: -15,
          ease: "none",
          scrollTrigger: {
            trigger: plateImgRef.current,
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
                start: "top 88%",
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
      {/* ── 01 · Masthead ── */}
      <section className="relative container-content pt-24 lg:pt-32 pb-16 lg:pb-24">
        {/* Issue marker — top right */}
        <div className="absolute top-24 right-[var(--edge-margin)] hidden lg:block">
          <p className="caption-style text-ink/70 text-right leading-relaxed">
            ISSUE 03 / 2026
            <br />
            THE LAB — STONE MILL
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-end min-h-[75vh]">
          <div>
            <span className="hero-fade caption-style text-ink/70 block mb-6 opacity-0">
              THE LAB / 땅콩버터 머신 · 0001
            </span>
            <h1 className="hero-fade font-display font-bold text-[clamp(3rem,10vw,9rem)] text-ink leading-[0.85] tracking-[-0.04em] opacity-0">
              A SMALL
              <br />
              CRAFT.
              <br />
              A BIG
              <br />
              MACHINE.
            </h1>
            <p className="hero-fade text-[clamp(1rem,1.3vw,1.2rem)] text-ink/85 leading-[1.6] mt-8 max-w-md opacity-0">
              One machine. One purpose. Commercial stone-ground
              peanut butter, made the way it used to be made —
              before someone decided it had to be smooth.
            </p>
            <p className="hero-fade text-body-kr font-korean text-ink/75 leading-[1.75] mt-4 max-w-md opacity-0">
              기계 한 대. 목적 하나. 매끄러워야 한다고 누군가
              결정하기 전의 방식 그대로, 상업용 스톤그라운드
              땅콩버터를 만든다.
            </p>
          </div>

          <div className="hero-fade relative aspect-[3/4] rounded-lg overflow-hidden bg-bone opacity-0">
            <div
              ref={mastheadImgRef}
              className="absolute inset-0 -top-[12%] -bottom-[12%] bg-contain bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${HERO_IMAGES.nutbutter})` }}
            />
          </div>
        </div>

        {/* Folio bar */}
        <div className="mt-16 lg:mt-24 pt-4 border-t border-ink/20 flex justify-between items-center">
          <span className="caption-style text-ink/70">
            NBPKOREA — THE LAB COLLECTION
          </span>
          <span className="caption-style text-ink/70">
            FIELD NOTES ON A NUT BUTTER MILL
          </span>
        </div>
      </section>

      {/* ── 02 · Chapter I — Opening narrative ── */}
      <section className="container-content py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-24">
          <div className="scroll-fade opacity-0">
            <span className="caption-style text-ink/70 block mb-4">
              CHAPTER I
            </span>
            <h2 className="font-display font-bold text-[clamp(2rem,5vw,4rem)] text-ink leading-[0.92] tracking-[-0.03em]">
              PEANUT,
              <br />
              STONE,
              <br />
              JAR.
            </h2>
          </div>

          <div className="scroll-fade opacity-0 flex flex-col justify-center">
            <p className="text-[clamp(1rem,1.4vw,1.25rem)] text-ink/90 leading-[1.7] mb-6 first-letter:font-display first-letter:font-bold first-letter:text-[clamp(3rem,6vw,5rem)] first-letter:float-left first-letter:mr-3 first-letter:leading-[0.85] first-letter:mt-1">
              We spent fourteen years burning smoke. Then one morning, a
              pastry chef walked into the shop and asked whether we could
              build her a peanut butter machine — the kind where the peanut
              still tasted like a peanut. Where the roast wasn&apos;t
              homogenized out of existence. Where oil and solids met on
              stone, not in a blender.
            </p>
            <p className="text-[clamp(1rem,1.4vw,1.25rem)] text-ink/85 leading-[1.7] mb-6">
              We said yes before we knew how. That&apos;s how every
              machine we&apos;ve ever made has started.
            </p>
            <p className="text-body-kr font-korean text-ink/80 leading-[1.75]">
              14년간 연기를 태웠다. 그러던 어느 아침, 한 파티셰가 들어와
              물었다. 땅콩이 여전히 땅콩의 맛을 유지하는 기계, 로스팅의
              맛이 사라지지 않는 기계, 오일과 고형분이 블렌더가 아닌 돌
              위에서 만나는 기계를 만들 수 있느냐고.
              <br />
              <br />
              우리는 방법을 알기 전에 그러겠다고 답했다. 우리가 만든 모든
              기계는 그렇게 시작됐다.
            </p>
          </div>
        </div>
      </section>

      {/* ── 03 · Plate · full-bleed editorial photo ── */}
      <section className="relative overflow-hidden">
        <div className="relative aspect-[16/9] lg:aspect-[2/1] overflow-hidden bg-bone">
          <div
            ref={plateImgRef}
            className="absolute inset-0 -top-[10%] -bottom-[10%] bg-cover bg-center"
            style={{ backgroundImage: `url(${IMAGES.obs01})` }}
          />
          <div className="absolute inset-0 bg-ink/20" />
          <div className="absolute bottom-6 left-[var(--edge-margin)] right-[var(--edge-margin)] flex items-end justify-between gap-6">
            <span className="caption-style text-white/85">
              PLATE 01 — Workshop, Siheung
            </span>
            <span className="caption-style text-white/85 text-right">
              Photograph · NBPKOREA
            </span>
          </div>
        </div>
      </section>

      {/* ── 04 · Pull quote ── */}
      <section className="bg-ink py-24 lg:py-32">
        <div className="container-content">
          <span className="scroll-fade caption-style text-paper/60 block mb-10 opacity-0">
            — QUOTE · 01
          </span>
          <p className="scroll-fade font-heading font-semibold text-[clamp(1.75rem,4vw,3.75rem)] text-paper leading-[1.25] tracking-[-0.015em] max-w-5xl opacity-0">
            &ldquo;The machine doesn&apos;t make the butter. The machine
            makes it possible to make butter the right way — slow, warm,
            whole, honest. Everything a peanut should still be when it
            stops being a peanut.&rdquo;
          </p>
          <p className="scroll-fade caption-style text-paper/70 mt-10 opacity-0">
            — PARK HAN-JIN · HEAD ENGINEER, NBPKOREA
          </p>
        </div>
      </section>

      {/* ── 05 · Chapter II — The machine ── */}
      <section className="container-content py-24 lg:py-32">
        <div className="scroll-fade opacity-0 mb-16 lg:mb-24">
          <span className="caption-style text-ink/70 block mb-4">
            CHAPTER II · THE OBJECT
          </span>
          <h2 className="font-display font-bold text-[clamp(2rem,5vw,4rem)] text-ink leading-[0.92] tracking-[-0.03em]">
            ONE MACHINE.
            <br />
            NO VARIANTS.
            <br />
            BUILT TO LAST.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[5fr_4fr] gap-10 lg:gap-20 items-start">
          <div className="scroll-fade opacity-0">
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden bg-bone">
              <div
                className="absolute inset-0 bg-contain bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${HERO_IMAGES.nutbutter})` }}
              />
            </div>
            <p className="caption-style text-ink/70 mt-3">
              FIG. 01 — Stone mill assembly, production spec.
            </p>
          </div>

          <div className="scroll-fade opacity-0 flex flex-col">
            <span className="caption-style text-ink/70 mb-6">
              SPECIFICATION · PLATE 002
            </span>

            <div className="space-y-0 border-t-2 border-ink">
              {SPECS.map(({ label, value }) => (
                <div
                  key={label}
                  className="flex justify-between items-center py-4 border-b border-bone gap-4"
                >
                  <span className="caption-style text-ink/70 shrink-0">{label}</span>
                  <span className="text-sm font-medium text-ink text-right">
                    {value}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-body-kr font-korean text-ink/75 leading-[1.75] mt-8">
              수치는 대표 사양이며, 전압·설치 환경·작업 흐름에 따라
              현장에서 조정됩니다. 한 대가 만들어지기 전, 반드시 대화가 먼저.
            </p>

            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-block bg-ink text-paper px-6 py-3 text-sm font-bold tracking-[0.06em] uppercase hover:bg-paper hover:text-ink border-2 border-ink transition-all duration-200 rounded-lg"
              >
                INQUIRE ABOUT THE LAB <span className="ml-2">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 06 · Chapter III — Process ── */}
      <section className="border-t-2 border-ink">
        <div className="container-content py-24 lg:py-32">
          <div className="scroll-fade opacity-0 mb-16 lg:mb-20">
            <span className="caption-style text-ink/70 block mb-4">
              CHAPTER III · THE METHOD
            </span>
            <h2 className="font-display font-bold text-[clamp(2rem,5vw,4rem)] text-ink leading-[0.92] tracking-[-0.03em]">
              THREE STEPS.
              <br />
              NOTHING MORE.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {PROCESS.map((step) => (
              <div
                key={step.no}
                className="scroll-fade opacity-0 border-t-2 border-ink pt-6"
              >
                <span className="font-display font-bold text-[clamp(3rem,6vw,5rem)] text-ink leading-none block mb-6">
                  {step.no}
                </span>
                <h3 className="font-display font-bold text-[clamp(1.1rem,1.8vw,1.5rem)] text-ink mb-4 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-[0.95rem] text-ink/90 leading-[1.6] mb-3">
                  {step.en}
                </p>
                <p className="text-xs font-korean text-ink/75 leading-[1.75]">
                  {step.kr}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 07 · Built For ── */}
      <section className="border-t border-bone">
        <div className="container-content py-20 lg:py-28">
          <div className="scroll-fade opacity-0">
            <span className="caption-style text-ink/70 block mb-8">
              BUILT FOR · 쓰이는 곳
            </span>
            <div className="flex flex-wrap gap-x-10 gap-y-4">
              {APPLICATIONS.map((app) => (
                <span
                  key={app}
                  className="font-display font-bold text-[clamp(1.3rem,2.3vw,2rem)] text-ink/55 hover:text-ink transition-colors duration-300"
                >
                  {app}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 08 · Closing ── */}
      <section className="bg-ink py-24 lg:py-32">
        <div className="container-content text-center">
          <span className="scroll-fade caption-style text-paper/60 block mb-10 opacity-0">
            END OF ISSUE 03
          </span>
          <h2 className="scroll-fade font-display font-bold text-[clamp(2rem,5vw,4rem)] text-paper leading-[0.95] tracking-[-0.03em] opacity-0">
            YOUR JAR.
            <br />
            OUR STONE.
          </h2>
          <p className="scroll-fade text-body-kr font-korean text-paper/85 mt-6 opacity-0">
            당신의 병, 우리의 스톤밀.
          </p>
          <div className="scroll-fade mt-10 opacity-0">
            <Link
              href="/contact"
              className="btn-pill bg-paper text-ink hover:bg-ink hover:text-paper border-2 border-paper transition-all duration-200 rounded-lg"
            >
              REQUEST A QUOTE <span className="ml-2">&rarr;</span>
            </Link>
          </div>
          <p className="scroll-fade caption-style text-paper/60 mt-10 opacity-0">
            or email — info@nbpkorea.com
          </p>
        </div>
      </section>
    </div>
  );
}
