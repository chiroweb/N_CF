"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { NUTBUTTER_PRODUCT } from "@/lib/products";
import { IMAGES } from "@/lib/images";
import FloatingSectionNav, { type NavSection } from "@/components/layout/FloatingSectionNav";
import Link from "next/link";

const SECTIONS: NavSection[] = [
  { id: "overview", label: "OVERVIEW" },
  { id: "story", label: "STORY" },
  { id: "object", label: "THE OBJECT" },
  { id: "features", label: "FEATURES" },
  { id: "method", label: "METHOD" },
  { id: "contact", label: "CONTACT" },
];

const PROCESS = [
  {
    no: "01",
    title: "LOAD",
    en: "Whole peanuts, almonds, cashews — anything roasted whole. The same machine, every nut.",
    kr: "땅콩·아몬드·캐슈·호두 — 로스팅된 견과라면 무엇이든. 기계 한 대, 견과 전부.",
  },
  {
    no: "02",
    title: "GRIND",
    en: "A 1.7 kW inverter drives the mill at the speed that suits the bean. One touch picks SMOOTH or CRUNCHY.",
    kr: "1.7kW 인버터가 견과에 맞는 속도로 밀을 돌린다. 원터치로 SMOOTH / CRUNCHY 선택.",
  },
  {
    no: "03",
    title: "JAR",
    en: "50 kilograms an hour, poured warm. STS304 housing, KC certified, built for service without drama.",
    kr: "시간당 50kg, 따뜻할 때 병에 붓는다. STS304 스테인리스 하우징, KC 인증, 드라마 없는 운영.",
  },
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
      <FloatingSectionNav sections={SECTIONS} />

      {/* ── 01 · Masthead ── */}
      <section id="overview" className="relative container-content pt-24 lg:pt-32 pb-16 lg:pb-24">
        {/* Issue marker — top right */}
        <div className="absolute top-24 right-[var(--edge-margin)] hidden lg:block">
          <p className="caption-style text-ink/90 text-right leading-relaxed">
            ISSUE 03 / 2026
            <br />
            THE LAB — NUTS-STAR
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-end min-h-[75vh]">
          <div>
            <span className="hero-fade caption-style text-ink/90 block mb-6 opacity-0">
              THE LAB / 넛버터 머신 · 0001
            </span>
            <h1 className="hero-fade font-display font-bold text-[clamp(3rem,10vw,9rem)] text-ink leading-[0.85] tracking-[-0.04em] opacity-0">
              FRESH
              <br />
              FROM THE
              <br />
              STONE.
            </h1>
            <p className="hero-fade text-[clamp(1rem,1.3vw,1.2rem)] text-ink/85 leading-[1.6] mt-8 max-w-md opacity-0">
              A single commercial-grade nut butter machine built for the
              counter. Load the peanuts, choose smooth or crunchy, pour
              it warm into the jar — 50 kilograms an hour, 220 volts,
              one button.
            </p>
            <p className="hero-fade text-body-kr font-korean text-ink/75 leading-[1.75] mt-4 max-w-md opacity-0">
              {NUTBUTTER_PRODUCT.tagline}. 매장 카운터 위에서 직접 가는
              상업용 넛버터 머신. 시간당 50kg, 220V 가정용 전원, 버튼 하나.
            </p>
          </div>

          <div className="hero-fade relative aspect-[3/4] rounded-lg overflow-hidden bg-bone opacity-0">
            <div
              ref={mastheadImgRef}
              className="absolute inset-0 -top-[12%] -bottom-[12%] bg-contain bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${NUTBUTTER_PRODUCT.heroImage})` }}
            />
          </div>
        </div>

        {/* Folio bar */}
        <div className="mt-16 lg:mt-24 pt-4 border-t border-ink/20 flex justify-between items-center">
          <span className="caption-style text-ink/90">
            NBPKOREA — THE LAB COLLECTION
          </span>
          <span className="caption-style text-ink/90">
            FIELD NOTES ON A NUT BUTTER MILL
          </span>
        </div>
      </section>

      {/* ── 02 · Chapter I — Opening narrative ── */}
      <section id="story" className="container-content py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-24">
          <div className="scroll-fade opacity-0">
            <span className="caption-style text-ink/90 block mb-4">
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
              build her a nut butter machine small enough to sit on the
              counter, strong enough to run all day, honest enough to let
              the nut still taste like a nut.
            </p>
            <p className="text-[clamp(1rem,1.4vw,1.25rem)] text-ink/85 leading-[1.7] mb-6">
              We said yes before we knew how. Then we made it —
              stainless, inverter-driven, KC-certified, proudly built in
              Korea. Every NUTS-STAR that leaves Ansan is the same
              machine she asked for.
            </p>
            <p className="text-body-kr font-korean text-ink/80 leading-[1.75]">
              14년간 연기를 태웠다. 그러던 어느 아침, 한 파티셰가
              들어와 물었다. 카운터에 올릴 만큼 작고, 종일 돌릴 만큼
              튼튼하며, 견과가 여전히 견과의 맛을 유지하는 기계를 만들 수
              있느냐고.
              <br />
              <br />
              우리는 방법을 알기 전에 그러겠다고 답했다. 그리고
              만들었다 — 스테인리스, 인버터 제어, KC 인증, 국내 자체
              생산. 안산 공장을 떠나는 모든 NUTS-STAR는 그 파티셰가 처음
              부탁한 바로 그 기계다.
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
              PLATE 01 — Workshop, Ansan
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
          <span className="scroll-fade caption-style text-paper/80 block mb-10 opacity-0">
            — QUOTE · 01
          </span>
          <p className="scroll-fade font-heading font-semibold text-[clamp(1.75rem,4vw,3.75rem)] text-paper leading-[1.25] tracking-[-0.015em] max-w-5xl opacity-0">
            &ldquo;The machine doesn&apos;t make the butter. It makes it
            possible to make butter the right way — slow, warm, whole,
            honest. Everything a nut should still be when it stops being
            a nut.&rdquo;
          </p>
          <p className="scroll-fade caption-style text-paper/90 mt-10 opacity-0">
            — PARK HAN-JIN · HEAD ENGINEER, NBPKOREA
          </p>
        </div>
      </section>

      {/* ── 05 · Chapter II — The machine ── */}
      <section id="object" className="container-content py-24 lg:py-32">
        <div className="scroll-fade opacity-0 mb-16 lg:mb-24">
          <span className="caption-style text-ink/90 block mb-4">
            CHAPTER II · THE OBJECT
          </span>
          <h2 className="font-display font-bold text-[clamp(2rem,5vw,4rem)] text-ink leading-[0.92] tracking-[-0.03em]">
            ONE MACHINE.
            <br />
            NO VARIANTS.
            <br />
            BUILT IN KOREA.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[5fr_4fr] gap-10 lg:gap-20 items-start">
          <div className="scroll-fade opacity-0">
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden bg-bone">
              <div
                className="absolute inset-0 bg-contain bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${NUTBUTTER_PRODUCT.image})` }}
              />
            </div>
            <p className="caption-style text-ink/90 mt-3">
              FIG. 01 — NUTS-STAR, counter-grade assembly.
            </p>
          </div>

          <div className="scroll-fade opacity-0 flex flex-col">
            <span className="caption-style text-ink/90 mb-6">
              SPECIFICATION · PLATE 002
            </span>

            <div className="space-y-0 border-t-2 border-ink">
              {NUTBUTTER_PRODUCT.specs.map(({ label, value }) => (
                <div
                  key={label}
                  className="flex justify-between items-start py-4 border-b border-bone gap-6"
                >
                  <span className="caption-style text-ink/90 shrink-0 pt-0.5">
                    {label}
                  </span>
                  <span className="text-sm font-medium text-ink text-right leading-[1.5]">
                    {value}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-body-kr font-korean text-ink/75 leading-[1.75] mt-8">
              수치는 대표 사양이며, 매장 전원·카운터 배치·작업 흐름에 따라
              현장에서 조정됩니다. 한 대가 배송되기 전, 반드시 대화가 먼저.
            </p>

            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-block bg-ink text-paper px-6 py-3 text-sm font-bold tracking-[0.06em] uppercase hover:bg-paper hover:text-ink border-2 border-ink transition-all duration-200 rounded-lg"
              >
                INQUIRE ABOUT NUTS-STAR <span className="ml-2">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 06 · Features — why this one ── */}
      <section id="features" className="border-t-2 border-ink">
        <div className="container-content py-24 lg:py-32">
          <div className="scroll-fade opacity-0 mb-16">
            <span className="caption-style text-ink/90 block mb-4">
              FEATURES · 왜 이 기계인가
            </span>
            <h2 className="font-display font-bold text-[clamp(2rem,4.5vw,3.5rem)] text-ink leading-[0.95] tracking-[-0.03em]">
              EIGHT REASONS.
              <br />
              ALL OF THEM TRUE.
            </h2>
          </div>

          <ol className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-0">
            {NUTBUTTER_PRODUCT.features.map((f, i) => (
              <li
                key={f}
                className="scroll-fade opacity-0 flex items-start gap-6 py-5 border-b border-bone"
              >
                <span className="caption-style text-ink/90 w-8 shrink-0 pt-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-body-kr font-korean text-ink/90 leading-[1.6]">
                  {f}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── 07 · Chapter III — Process ── */}
      <section id="method" className="border-t-2 border-ink">
        <div className="container-content py-24 lg:py-32">
          <div className="scroll-fade opacity-0 mb-16 lg:mb-20">
            <span className="caption-style text-ink/90 block mb-4">
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

      {/* ── 08 · Built For ── */}
      <section className="border-t border-bone">
        <div className="container-content py-20 lg:py-28">
          <div className="scroll-fade opacity-0">
            <span className="caption-style text-ink/90 block mb-8">
              BUILT FOR · 쓰이는 곳
            </span>
            <div className="flex flex-wrap gap-x-10 gap-y-4">
              {NUTBUTTER_PRODUCT.applications.map((app) => (
                <span
                  key={app}
                  className="font-display font-bold text-[clamp(1.3rem,2.3vw,2rem)] text-ink/75 hover:text-ink transition-colors duration-300"
                >
                  {app}
                </span>
              ))}
            </div>
            <p className="text-body-kr font-korean text-ink/75 leading-[1.75] mt-6">
              {NUTBUTTER_PRODUCT.applicationsKr}
            </p>
          </div>
        </div>
      </section>

      {/* ── 09 · Closing ── */}
      <section id="contact" className="bg-ink py-24 lg:py-32">
        <div className="container-content text-center">
          <span className="scroll-fade caption-style text-paper/80 block mb-10 opacity-0">
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
          <p className="scroll-fade caption-style text-paper/80 mt-10 opacity-0">
            or email — nbpkorea@nbpkorea.co.kr
          </p>
        </div>
      </section>
    </div>
  );
}
