"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { IMAGES } from "@/lib/images";
import Image from "next/image";
import Link from "next/link";

export default function Evidence() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const floatingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background photo — slow parallax
      if (bgRef.current && sectionRef.current) {
        gsap.to(bgRef.current, {
          yPercent: 15,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.5,
          },
        });
      }

      // Floating photo — different speed (faster than bg, slower than content)
      if (floatingRef.current && sectionRef.current) {
        gsap.to(floatingRef.current, {
          yPercent: -30,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.4,
          },
        });
      }

      // Fade in manifesto
      const fadeEls = sectionRef.current?.querySelectorAll(".fade-in");
      if (fadeEls) {
        fadeEls.forEach((el) => {
          gsap.fromTo(
            el,
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden h-[150vh] md:h-[250vh]"
    >
      {/* ── Single giant background photo ── */}
      <div
        ref={bgRef}
        className="absolute inset-0 -top-[15%] -bottom-[15%]"
      >
        <Image
          src={IMAGES.evidenceBg}
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* ── Content layer — scrolls at normal speed ── */}
      <div className="relative z-10 h-full flex flex-col">

        {/* ── Top portion: Manifesto — English lead, Korean body below at half size ── */}
        <div className="container-content pt-20 lg:pt-28 pb-20 lg:pb-28">
          {/* English manifesto — primary, large, directly on background photo */}
          <p className="fade-in font-heading font-semibold text-[clamp(1.8rem,3.8vw,3.4rem)] text-white leading-[1.3] tracking-[-0.01em] opacity-0 drop-shadow-[0_2px_12px_rgba(0,0,0,0.3)]">
            We&apos;re often told ours is a one-track life. Our answer to that —
            thank you. Only when you hold on to one thing does much else follow.
            The one thing NBPKOREA has held onto for 14 years has always been{" "}
            <span className="font-display">Afterburner</span>. In the craft of
            clearing smoke and soot, no hands are more blackened than ours.
          </p>

          {/* Korean manifesto — half size, beneath the English lead */}
          <p className="fade-in font-korean text-[clamp(0.9rem,1.9vw,1.7rem)] text-white/85 leading-[1.6] tracking-[-0.005em] mt-6 max-w-4xl opacity-0 drop-shadow-[0_1px_8px_rgba(0,0,0,0.3)]">
            우리는 외길 인생이라는 말을 자주 듣습니다. 그 말에 대한 답은 —
            thank you. 한 가지에 깊이 집중할 때 비로소 많은 것이 따라오기
            때문입니다. NBPKOREA가 14년간 붙잡은 한 가지는 언제나
            <span className="font-display"> Afterburner</span>. 연기와 매연을
            제거하는 일에서, 누구보다 손이 새카맣게 더러운 회사입니다.
          </p>

          {/* LEARN MORE — compact, bilingual label */}
          <div className="fade-in mt-8 opacity-0">
            <Link
              href="/"
              className="inline-flex items-baseline gap-2 bg-white/95 text-ink px-4 py-2 hover:bg-ink hover:text-paper transition-colors duration-200 rounded-lg"
            >
              <span className="text-[0.72rem] font-bold tracking-[0.08em] uppercase font-display">
                LEARN MORE
              </span>
              <span className="text-[0.7rem] font-korean text-ink/70 group-hover:text-paper/80">
                더 알아보기
              </span>
            </Link>
          </div>
        </div>

        {/* ── Middle portion: Floating photo + side text ── */}
        <div className="flex-1 relative flex items-center justify-center">
          {/* Center group — full width with edge padding so wing text never clips */}
          <div className="flex items-center justify-between gap-6 md:gap-8 lg:gap-16 w-full px-[var(--edge-margin)]">
            {/* Left side text */}
            <div className="hidden md:block shrink min-w-0 max-w-[18ch]">
              <p className="text-[clamp(0.95rem,1.3vw,1.6rem)] font-medium text-white/90 leading-[1.35] uppercase tracking-[0.04em]">
                NBPKOREA
                <br />
                IS ALWAYS POSSIBLE
              </p>
            </div>

            {/* Floating photo — parallaxes at different speed */}
            <div
              ref={floatingRef}
              className="relative z-10 w-[clamp(260px,42vw,640px)] shrink-0"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-bone rounded-lg">
                <Image
                  src={IMAGES.evidenceFloat}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 40vw, 80vw"
                  className="object-cover object-center"
                />
              </div>
            </div>

            {/* Right side text */}
            <div className="hidden md:block shrink min-w-0 max-w-[18ch] text-right">
              <p className="text-[clamp(0.95rem,1.3vw,1.6rem)] font-medium text-white/90 leading-[1.35] uppercase tracking-[0.04em]">
                JUST BREATHE CLEAN
                <br />
                AND ROAST RIGHT IN.
              </p>
            </div>
          </div>

          {/* Emotional line — absolutely centered below photo area */}
          <div className="absolute bottom-[10%] left-0 right-0 text-center z-20">
            <p className="font-heading font-semibold font-korean text-[clamp(2rem,4vw,3.5rem)] text-white/95 leading-[1.4] tracking-[-0.01em]">
              당신의 일을 이해합니다.
              <br />그 무게를 함께 나르겠습니다.
            </p>
            <p className="caption-style text-white/85 mt-6">
              37.331° N — 126.785° E
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
