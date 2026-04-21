"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { COMPANY } from "@/lib/company";
import FloatingSectionNav, { type NavSection } from "@/components/layout/FloatingSectionNav";
import Link from "next/link";

const SECTIONS: NavSection[] = [
  { id: "intro", label: "INTRO" },
  { id: "channels", label: "CHANNELS" },
  { id: "brief", label: "WHAT TO TELL" },
  { id: "hours", label: "HOURS · ADDRESS" },
];

const CHANNELS = [
  {
    label: "ENGINEER DIRECT",
    value: COMPANY.phonePrimary,
    sub: "엔지니어와 직접 통화",
    href: `tel:${COMPANY.phonePrimary.replace(/-/g, "")}`,
  },
  {
    label: "EMAIL",
    value: COMPANY.email,
    sub: "평일 24시간 이내 회신",
    href: `mailto:${COMPANY.email}`,
  },
  {
    label: "FACTORY VISIT",
    value: COMPANY.addressShort,
    sub: "사전 예약 시 현장 방문 가능",
    href: `https://maps.google.com/?q=${encodeURIComponent(COMPANY.address)}`,
  },
];

const ASKS = [
  "하루 로스팅량 / Daily roasting volume",
  "현재 사용 중인 로스터 / Current roaster brand",
  "설치 장소 / Installation site",
  "가스 또는 전기 환경 / Fuel & power setup",
  "희망 설치 시점 / Preferred timeline",
];

export default function ContactPage() {
  const pageRef = useRef<HTMLDivElement>(null);

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

      {/* ── Hero ── */}
      <div id="intro" className="container-content pt-24 lg:pt-32 pb-16">
        <span className="hero-fade caption-style text-ink/70 block mb-6 opacity-0">
          REQUEST A QUOTE / 견적 문의
        </span>
        <h1 className="hero-fade font-display font-bold text-[clamp(3rem,9vw,8rem)] text-ink leading-[0.88] tracking-[-0.04em] opacity-0">
          TALK TO
          <br />
          AN ENGINEER.
        </h1>
        <p className="hero-fade text-[clamp(1rem,1.3vw,1.2rem)] text-ink/85 leading-[1.6] mt-8 max-w-xl opacity-0">
          Every afterburner is sized and tuned for the exact roaster,
          duct layout, and volume it will work with. No guesswork —
          so we start with a conversation, not a catalog.
        </p>
        <p className="hero-fade text-body-kr font-korean text-ink/75 leading-[1.75] mt-4 max-w-xl opacity-0">
          모든 애프터버너는 현장의 로스터, 덕트 구조, 용량에 맞춰 사이즈와
          튜닝이 결정됩니다. 추측 없이, 대화에서부터 시작합니다.
        </p>
      </div>

      {/* ── Channels ── */}
      <div id="channels" className="container-content pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {CHANNELS.map((ch) => (
            <Link
              key={ch.label}
              href={ch.href}
              target={ch.href.startsWith("http") ? "_blank" : undefined}
              rel={ch.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="scroll-fade group border-2 border-bone rounded-lg p-8 hover:border-ink transition-colors duration-300 opacity-0 flex flex-col justify-between min-h-[180px]"
            >
              <span className="caption-style text-ink/70">{ch.label}</span>
              <div className="mt-auto">
                <p className="font-display font-bold text-[clamp(1.1rem,1.6vw,1.4rem)] text-ink tracking-tight mb-2 group-hover:underline underline-offset-4">
                  {ch.value}
                </p>
                <p className="text-body-kr font-korean text-ink/75 text-sm">
                  {ch.sub}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Sub contact line */}
        <p className="caption-style text-ink/70 mt-6 text-center">
          SUB · {COMPANY.phoneSecondary} &nbsp;·&nbsp; FAX {COMPANY.fax}
        </p>
      </div>

      {/* ── What to tell us ── */}
      <div id="brief" className="bg-ink py-24 lg:py-32">
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-20">
            {/* Left — heading */}
            <div>
              <span className="scroll-fade caption-style text-paper/75 block mb-4 opacity-0">
                WHAT TO TELL US
              </span>
              <h2 className="scroll-fade font-display font-bold text-[clamp(2rem,4vw,3.5rem)] text-paper leading-[0.95] tracking-[-0.03em] opacity-0">
                FIVE LINES.
                <br />
                THAT&apos;S ENOUGH
                <br />
                TO START.
              </h2>
              <p className="scroll-fade text-body-kr font-korean text-paper/85 leading-[1.75] mt-8 max-w-sm opacity-0">
                다섯 줄이면 됩니다. 나머지는 저희가 설계합니다.
              </p>
            </div>

            {/* Right — list */}
            <ol className="scroll-fade space-y-6 opacity-0">
              {ASKS.map((item, i) => (
                <li key={item} className="flex gap-6 border-b border-paper/15 pb-5">
                  <span className="caption-style text-paper/60 w-8 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[clamp(0.95rem,1.1vw,1.1rem)] text-paper/90 leading-[1.55]">
                    {item}
                  </span>
                </li>
              ))}
            </ol>
          </div>

          {/* Email CTA */}
          <div className="mt-20 flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-10 border-t border-paper/15">
            <p className="caption-style text-paper/70">SEND IT STRAIGHT —</p>
            <Link
              href={`mailto:${COMPANY.email}?subject=Afterburner%20Inquiry`}
              className="btn-pill bg-paper text-ink hover:bg-ink hover:text-paper border-2 border-paper transition-all duration-200 rounded-lg"
            >
              {COMPANY.email} <span className="ml-2">&rarr;</span>
            </Link>
          </div>
        </div>
      </div>

      {/* ── Hours + Address ── */}
      <div id="hours" className="container-content py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          <div className="scroll-fade opacity-0">
            <span className="caption-style text-ink/70 block mb-4">
              HOURS / 운영시간
            </span>
            <p className="font-display font-bold text-[clamp(1.5rem,2.5vw,2rem)] text-ink leading-[1.2] tracking-[-0.01em]">
              {COMPANY.hoursEn}
            </p>
            <p className="text-body-kr font-korean text-ink/75 mt-2">
              주말·공휴일 휴무. 긴급 문의는 이메일로.
            </p>
          </div>

          <div className="scroll-fade opacity-0">
            <span className="caption-style text-ink/70 block mb-4">
              FACTORY / 공장
            </span>
            <p className="font-display font-bold text-[clamp(1.5rem,2.5vw,2rem)] text-ink leading-[1.2] tracking-[-0.01em]">
              {COMPANY.address}
            </p>
            <p className="caption-style text-ink/65 mt-3">
              {COMPANY.coordinates}
            </p>
          </div>
        </div>

        {/* Legal strip */}
        <div className="mt-20 pt-8 border-t border-bone grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <span className="caption-style text-ink/65 block mb-1">COMPANY</span>
            <p className="text-sm text-ink/90">{COMPANY.nameKr}</p>
          </div>
          <div>
            <span className="caption-style text-ink/65 block mb-1">CEO</span>
            <p className="text-sm text-ink/90">{COMPANY.ceo}</p>
          </div>
          <div>
            <span className="caption-style text-ink/65 block mb-1">BIZ NO.</span>
            <p className="text-sm text-ink/90">{COMPANY.businessNumber}</p>
          </div>
          <div>
            <span className="caption-style text-ink/65 block mb-1">SINCE</span>
            <p className="text-sm text-ink/90">{COMPANY.established}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
