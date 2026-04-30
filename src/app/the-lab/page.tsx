"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { NUTBUTTER_PRODUCT } from "@/lib/products";
import FloatingSectionNav, { type NavSection } from "@/components/layout/FloatingSectionNav";
import Image from "next/image";
import Link from "next/link";

const SECTIONS: NavSection[] = [
  { id: "overview", label: "개요" },
  { id: "story", label: "이야기" },
  { id: "object", label: "기계" },
  { id: "features", label: "특징" },
  { id: "method", label: "방법" },
  { id: "contact", label: "문의" },
];

const PROCESS = [
  {
    no: "01",
    title: "투입",
    body: "땅콩·아몬드·캐슈넛·호두 — 로스팅된 견과라면 무엇이든. 기계 한 대로 견과 전부를 다룹니다.",
  },
  {
    no: "02",
    title: "분쇄",
    body: "1.7kW 인버터가 견과에 맞는 속도로 분쇄합니다. 원터치로 부드러운 버터 질감부터 크런치한 식감까지 선택.",
  },
  {
    no: "03",
    title: "담기",
    body: "시간당 50kg, 따뜻할 때 병에 붓습니다. STS304 스테인리스 하우징, KC 인증, 드라마 없는 운영.",
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
          <p className="caption-style text-ink/90 text-right leading-relaxed font-korean">
            03호 · 2026
            <br />
            더 랩 — 넛츠스타
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-end min-h-[75vh]">
          <div>
            <span className="hero-fade caption-style text-ink/90 block mb-6 opacity-0 font-korean">
              더 랩 / 넛버터 머신 · 0001
            </span>
            <h1 className="hero-fade font-display font-bold text-[clamp(3rem,10vw,9rem)] text-ink leading-[0.85] tracking-[-0.04em] opacity-0 font-korean">
              견과에서
              <br />
              부드러운
              <br />
              버터로.
            </h1>
            <p className="hero-fade text-body-kr font-korean text-ink/85 leading-[1.75] mt-8 max-w-md opacity-0">
              {NUTBUTTER_PRODUCT.tagline}. 매장 카운터 위에서 직접 가는
              상업용 넛버터 머신 — 견과를 넣고, 부드러운 버터 질감이나
              크런치한 식감으로 고르고, 병에 따뜻할 때 붓습니다. 시간당 50kg, 220V 가정용 전원,
              버튼 하나.
            </p>
          </div>

          <div className="hero-fade relative aspect-[3/4] rounded-lg overflow-hidden bg-bone opacity-0">
            <div
              ref={mastheadImgRef}
              className="absolute inset-0 -top-[12%] -bottom-[12%]"
            >
              <Image
                src={NUTBUTTER_PRODUCT.heroImage}
                alt="넛츠스타 NUTS-STAR 머신"
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>

        {/* Folio bar */}
        <div className="mt-16 lg:mt-24 pt-4 border-t border-ink/20 flex justify-between items-center">
          <span className="caption-style text-ink/90 font-korean">
            NBPKOREA — 더 랩 컬렉션
          </span>
          <span className="caption-style text-ink/90 font-korean">
            넛버터 머신 현장 노트
          </span>
        </div>
      </section>

      {/* ── 02 · Chapter I — Opening narrative ── */}
      <section id="story" className="container-content py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-24">
          <div className="scroll-fade opacity-0">
            <span className="caption-style text-ink/90 block mb-4 font-korean">
              01장
            </span>
            <h2 className="font-display font-bold text-[clamp(2rem,5vw,4rem)] text-ink leading-[0.92] tracking-[-0.03em] font-korean">
              견과,
              <br />
              질감,
              <br />
              병.
            </h2>
          </div>

          <div className="scroll-fade opacity-0 flex flex-col justify-center">
            <p className="text-body-kr font-korean text-ink/90 leading-[1.75] mb-6 first-letter:font-display first-letter:font-bold first-letter:text-[clamp(3rem,6vw,5rem)] first-letter:float-left first-letter:mr-3 first-letter:leading-[0.85] first-letter:mt-1">
              14년간 연기를 태웠습니다. 그러던 어느 아침, 한 파티셰가
              작업장에 들어와 물었습니다. 카운터에 올릴 만큼 작고, 종일
              돌릴 만큼 튼튼하며, 견과가 여전히 견과의 맛을 유지하는 기계를
              만들 수 있느냐고.
            </p>
            <p className="text-body-kr font-korean text-ink/85 leading-[1.75]">
              우리는 방법을 알기 전에 그러겠다고 답했습니다. 그리고 만들었죠
              — 스테인리스, 인버터 제어, KC 인증, 국내 자체 생산. 안산
              공장을 떠나는 모든 넛츠스타는 그 파티셰가 처음 부탁한 바로
              그 기계입니다.
            </p>
          </div>
        </div>
      </section>

      {/* ── 03 · Plate · full-bleed editorial photo ── */}
      <section className="relative overflow-hidden">
        <div className="relative aspect-[16/9] lg:aspect-[2/1] overflow-hidden bg-bone">
          <div
            ref={plateImgRef}
            className="absolute inset-0 -top-[10%] -bottom-[10%]"
          >
            <Image
              src={NUTBUTTER_PRODUCT.materialImage}
              alt="손에 담긴 로스팅 견과"
              fill
              sizes="100vw"
              className="scale-[1.08] object-cover object-center"
            />
          </div>
          <div className="absolute inset-0 bg-ink/20" />
          <div className="absolute bottom-6 left-[var(--edge-margin)] right-[var(--edge-margin)] flex items-end justify-between gap-6">
            <span className="caption-style text-white/85 font-korean">
              플레이트 01 — 로스팅 견과
            </span>
            <span className="caption-style text-white/85 text-right font-korean">
              원재료 · 땅콩과 견과
            </span>
          </div>
        </div>
      </section>

      {/* ── 04 · Pull quote ── */}
      <section className="bg-ink py-24 lg:py-32">
        <div className="container-content">
          <span className="scroll-fade caption-style text-paper/80 block mb-10 opacity-0 font-korean">
            — 인용 · 01
          </span>
          <p className="scroll-fade font-heading font-semibold text-[clamp(1.75rem,4vw,3.75rem)] text-paper leading-[1.3] tracking-[-0.015em] max-w-5xl opacity-0 font-korean">
            &ldquo;기계가 버터를 만드는 것이 아닙니다. 버터를 제대로 만들 수
            있게 만들어 줄 뿐이죠 — 천천히, 따뜻하게, 통째로, 정직하게.
            견과가 견과이기를 멈추는 순간에도, 견과로 남아 있어야 할 모든
            것을.&rdquo;
          </p>
          <p className="scroll-fade caption-style text-paper/90 mt-10 opacity-0 font-korean">
            — 박한진 · 엔비피코리아 수석 엔지니어
          </p>
        </div>
      </section>

      {/* ── 05 · Chapter II — The machine ── */}
      <section id="object" className="container-content py-24 lg:py-32">
        <div className="scroll-fade opacity-0 mb-16 lg:mb-24">
          <span className="caption-style text-ink/90 block mb-4 font-korean">
            02장 · 기계
          </span>
          <h2 className="font-display font-bold text-[clamp(2rem,5vw,4rem)] text-ink leading-[0.92] tracking-[-0.03em] font-korean">
            시그니처.
            <br />
            소음/고장 스트레스 없는.
            <br />
            국내 제작 모델.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[5fr_4fr] gap-10 lg:gap-20 items-start">
          <div className="scroll-fade opacity-0">
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden bg-bone">
              <Image
                src={NUTBUTTER_PRODUCT.image}
                alt="넛츠스타 NUTS-STAR 조립 완성본"
                fill
                sizes="(min-width: 1024px) 45vw, 90vw"
                className="object-cover object-center"
              />
            </div>
            <p className="caption-style text-ink/90 mt-3 font-korean">
              피겨 01 — 넛츠스타, 카운터 등급 조립
            </p>
          </div>

          <div className="scroll-fade opacity-0 flex flex-col">
            <span className="caption-style text-ink/90 mb-6 font-korean">
              사양 · 플레이트 002
            </span>

            <div className="space-y-0 border-t-2 border-ink">
              {NUTBUTTER_PRODUCT.specs.map(({ label, value }) => (
                <div
                  key={label}
                  className="flex justify-between items-start py-4 border-b border-bone gap-6"
                >
                  <span className="caption-style text-ink/90 shrink-0 pt-0.5 font-korean">
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
              현장에서 조정됩니다. 한 대가 배송되기 전, 반드시 대화가 먼저
              입니다.
            </p>

            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-block bg-ink text-paper px-6 py-3 text-sm font-bold tracking-[0.04em] hover:bg-paper hover:text-ink border-2 border-ink transition-all duration-200 rounded-lg font-korean"
              >
                넛츠스타 문의 <span className="ml-2">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 06 · Features — why this one ── */}
      <section id="features" className="border-t-2 border-ink">
        <div className="container-content py-24 lg:py-32">
          <div className="scroll-fade opacity-0 mb-16">
            <span className="caption-style text-ink/90 block mb-4 font-korean">
              특징 · 왜 이 기계인가
            </span>
            <h2 className="font-display font-bold text-[clamp(2rem,4.5vw,3.5rem)] text-ink leading-[0.95] tracking-[-0.03em] font-korean">
              여덟 가지 이유,
              <br />
              전부 사실입니다.
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
            <span className="caption-style text-ink/90 block mb-4 font-korean">
              03장 · 방법
            </span>
            <h2 className="font-display font-bold text-[clamp(2rem,5vw,4rem)] text-ink leading-[0.92] tracking-[-0.03em] font-korean">
              세 단계,
              <br />
              그 이상은 없습니다.
            </h2>
          </div>

          <div className="scroll-fade relative aspect-[16/9] overflow-hidden rounded-lg bg-bone opacity-0 mb-10 lg:mb-14">
            <Image
              src={NUTBUTTER_PRODUCT.butterImage}
              alt="병에 담기는 갓 만든 넛버터"
              fill
              sizes="(min-width: 1024px) 80vw, 100vw"
              className="object-cover object-center"
            />
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
                <h3 className="font-display font-bold text-[clamp(1.1rem,1.8vw,1.5rem)] text-ink mb-4 tracking-tight font-korean">
                  {step.title}
                </h3>
                <p className="text-body-kr font-korean text-ink/85 leading-[1.75]">
                  {step.body}
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
            <span className="caption-style text-ink/90 block mb-8 font-korean">
              쓰이는 곳
            </span>
            <div className="flex flex-wrap gap-x-10 gap-y-4">
              {NUTBUTTER_PRODUCT.applications.map((app) => (
                <span
                  key={app}
                  className="font-display font-bold text-[clamp(1.3rem,2.3vw,2rem)] text-ink/75 hover:text-ink transition-colors duration-300 font-korean"
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
          <span className="scroll-fade caption-style text-paper/80 block mb-10 opacity-0 font-korean">
            03호 끝
          </span>
          <h2 className="scroll-fade font-display font-bold text-[clamp(2rem,5vw,4rem)] text-paper leading-[0.95] tracking-[-0.03em] opacity-0 font-korean">
            당신의 카페에,
            <br />
            견과의 건강함을.
          </h2>
          <p className="scroll-fade text-body-kr font-korean text-paper/85 mt-6 opacity-0">
            카운터 위의 한 대가 시작점입니다.
          </p>
          <div className="scroll-fade mt-10 opacity-0">
            <Link
              href="/contact"
              className="btn-pill bg-paper text-ink hover:bg-ink hover:text-paper border-2 border-paper transition-all duration-200 rounded-lg font-korean"
            >
              견적 문의 <span className="ml-2">&rarr;</span>
            </Link>
          </div>
          <p className="scroll-fade caption-style text-paper/80 mt-10 opacity-0 font-korean">
            또는 이메일 — nbpkorea@nbpkorea.co.kr
          </p>
        </div>
      </section>
    </div>
  );
}
