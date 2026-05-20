"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { COMPANY } from "@/lib/company";
import FloatingSectionNav, { type NavSection } from "@/components/layout/FloatingSectionNav";
import Link from "next/link";

const SECTIONS: NavSection[] = [
  { id: "intro", label: "소개" },
  { id: "channels", label: "연락 채널" },
  { id: "brief", label: "알려주세요" },
  { id: "hours", label: "운영 · 주소" },
];

const CHANNELS = [
  {
    label: "엔지니어 직통",
    value: COMPANY.phonePrimary,
    sub: "엔지니어와 바로 통화할 수 있습니다",
    href: `tel:${COMPANY.phonePrimary.replace(/-/g, "")}`,
  },
  {
    label: "이메일",
    value: COMPANY.email,
    sub: "평일 24시간 이내 회신",
    href: `mailto:${COMPANY.email}`,
  },
  {
    label: "공장 방문",
    value: COMPANY.addressShort,
    sub: "사전 예약 시 현장 견학 가능",
    href: `https://maps.google.com/?q=${encodeURIComponent(COMPANY.address)}`,
  },
];

const ASKS = [
  "하루 로스팅량 (예: 하루 15Kg · 주 5일)",
  "현재 사용 중인 로스터기 브랜드와 용량",
  "설치 예정 장소 (도심 카페 · 지하 매장 · 공장 등)",
  "가스·전기 환경 (도시가스 / LPG / 단상 / 3상)",
  "희망 설치 시점",
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
        <span className="hero-fade caption-style text-ink/90 block mb-6 opacity-0 font-korean">
          견적 · 설치 상담 · A/S
        </span>
        <h1 className="hero-fade font-display font-bold text-[clamp(3rem,9vw,8rem)] text-ink leading-[0.88] tracking-[-0.04em] opacity-0 font-korean">
          엔지니어와
          <br />
          직접 이야기하세요.
        </h1>
        <p className="hero-fade text-body-kr font-korean text-ink/85 leading-[1.75] mt-8 max-w-xl opacity-0">
          모든 애프터버너는 현장의 로스터기, 덕트 구조, 용량에 맞춰 사이즈와
          튜닝이 결정됩니다. 카탈로그가 아니라 대화에서 시작합니다. 추측
          없이, 현장 조건 그대로.
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
              <span className="caption-style text-ink/90 font-korean">{ch.label}</span>
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

        {/* Inquiry form CTA */}
        <div className="scroll-fade mt-8 flex justify-center opacity-0">
          <Link
            href="https://www.nbpkorea.co.kr/support"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-ink text-paper px-7 py-3.5 rounded-lg border-2 border-ink hover:bg-paper hover:text-ink transition-all duration-200"
          >
            <span className="text-sm font-medium tracking-tight font-korean">
              홈페이지에서 문의 폼 작성하기
            </span>
            <span className="text-base transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
          </Link>
        </div>

        {/* Sub contact line */}
        <p className="caption-style text-ink/90 mt-6 text-center font-korean">
          사무실 {COMPANY.phoneSecondary} &nbsp;·&nbsp; 팩스 {COMPANY.fax}
        </p>
      </div>

      {/* ── What to tell us ── */}
      <div id="brief" className="bg-ink py-24 lg:py-32">
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-20">
            <div>
              <span className="scroll-fade caption-style text-paper/75 block mb-4 opacity-0 font-korean">
                이것만 알려주세요
              </span>
              <h2 className="scroll-fade font-display font-bold text-[clamp(2rem,4vw,3.5rem)] text-paper leading-[0.95] tracking-[-0.03em] opacity-0 font-korean">
                다섯 줄.
                <br />
                그거면
                <br />
                충분합니다.
              </h2>
              <p className="scroll-fade text-body-kr font-korean text-paper/85 leading-[1.75] mt-8 max-w-sm opacity-0">
                다섯 줄이면 시작할 수 있습니다. 나머지는 저희가 설계합니다.
              </p>
            </div>

            <ol className="scroll-fade space-y-6 opacity-0">
              {ASKS.map((item, i) => (
                <li key={item} className="flex gap-6 border-b border-paper/15 pb-5">
                  <span className="caption-style text-paper/80 w-8 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-body-kr font-korean text-paper/90 leading-[1.6]">
                    {item}
                  </span>
                </li>
              ))}
            </ol>
          </div>

          {/* Email CTA */}
          <div className="mt-20 flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-10 border-t border-paper/15">
            <p className="caption-style text-paper/90 font-korean">바로 이메일 보내기 —</p>
            <Link
              href={`mailto:${COMPANY.email}?subject=%EC%95%A0%ED%94%84%ED%84%B0%EB%B2%84%EB%84%88%20%EB%AC%B8%EC%9D%98`}
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
            <span className="caption-style text-ink/90 block mb-4 font-korean">
              운영시간
            </span>
            <p className="font-display font-bold text-[clamp(1.5rem,2.5vw,2rem)] text-ink leading-[1.25] tracking-[-0.01em] font-korean">
              평일 09:00 – 18:00
            </p>
            <p className="text-body-kr font-korean text-ink/75 mt-2">
              주말·공휴일은 휴무이며, 긴급 문의는 이메일로 접수해 주세요.
            </p>
          </div>

          <div className="scroll-fade opacity-0">
            <span className="caption-style text-ink/90 block mb-4 font-korean">
              본사·공장 주소
            </span>
            <p className="font-display font-bold text-[clamp(1.5rem,2.5vw,2rem)] text-ink leading-[1.25] tracking-[-0.01em] font-korean">
              {COMPANY.address}
            </p>
            <p className="caption-style text-ink/85 mt-3">
              {COMPANY.coordinates}
            </p>
          </div>
        </div>

        {/* Legal strip */}
        <div className="mt-20 pt-8 border-t border-bone grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <span className="caption-style text-ink/85 block mb-1 font-korean">회사명</span>
            <p className="text-sm text-ink/90 font-korean">{COMPANY.nameKr}</p>
          </div>
          <div>
            <span className="caption-style text-ink/85 block mb-1 font-korean">대표</span>
            <p className="text-sm text-ink/90 font-korean">{COMPANY.ceo}</p>
          </div>
          <div>
            <span className="caption-style text-ink/85 block mb-1 font-korean">사업자번호</span>
            <p className="text-sm text-ink/90">{COMPANY.businessNumber}</p>
          </div>
          <div>
            <span className="caption-style text-ink/85 block mb-1 font-korean">창립</span>
            <p className="text-sm text-ink/90">{COMPANY.established}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
