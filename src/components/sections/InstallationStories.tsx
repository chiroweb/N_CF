"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { IMAGES } from "@/lib/images";
import Image from "next/image";
import Link from "next/link";

export default function InstallationStories() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const fadeEls = sectionRef.current?.querySelectorAll(".fade-in");
      if (fadeEls) {
        fadeEls.forEach((el, i) => {
          gsap.fromTo(
            el,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
              delay: i * 0.1,
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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="installation-stories"
      className="bg-paper section-spacing overflow-hidden"
    >
      <div className="container-content">
        {/* ── Editorial asymmetric layout ── */}

        {/* Row 1: "NEVER" left + "WORRY" right (offset) */}
        <div className="flex items-start justify-between mb-6 lg:mb-0 overflow-hidden">
          <h2 className="fade-in font-display font-bold text-[clamp(3.5rem,10vw,10rem)] text-ink leading-[0.85] tracking-[-0.04em] opacity-0 shrink-0">
            NEVER
          </h2>
          <h2 className="fade-in font-display font-bold text-[clamp(3.5rem,10vw,10rem)] text-ink leading-[0.85] tracking-[-0.04em] mt-[6vh] opacity-0 shrink-0">
            WORRY
          </h2>
        </div>

        {/* Row 2: Steps (left) + Photo (center) + Body text (right) */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1.5fr_1.5fr] gap-8 lg:gap-6 items-start -mt-8 lg:-mt-20">
          {/* Left — numbered steps */}
          <div className="fade-in pt-8 lg:pt-16 opacity-0">
            <div className="space-y-3">
              <div className="flex gap-4">
                <span className="caption-style text-ink/75 w-6">01</span>
                <span className="caption-style text-ink/90">WE SURVEY YOUR SPACE</span>
              </div>
              <div className="flex gap-4">
                <span className="caption-style text-ink/75 w-6">02</span>
                <span className="caption-style text-ink/90">CUSTOM-BUILD YOUR UNIT</span>
              </div>
              <div className="flex gap-4">
                <span className="caption-style text-ink/75 w-6">03</span>
                <span className="caption-style text-ink/90">SIT BACK AND ROAST</span>
              </div>
            </div>
          </div>

          {/* Center — editorial photo */}
          <div className="fade-in opacity-0">
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-bone">
              <Image
                src={IMAGES.installationPhoto}
                alt="Installation photograph"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="caption-style text-ink/30">
                  INSTALLATION PHOTO
                </span>
              </div>
            </div>
          </div>

          {/* Right — body text + CTA */}
          <div className="fade-in flex flex-col justify-end pt-8 lg:pt-32 opacity-0">
            <p className="text-[clamp(0.85rem,1.1vw,1rem)] text-ink font-medium leading-[1.6] uppercase tracking-[0.02em] mb-6">
              From survey to installation in under
              two weeks. Every unit is custom-tuned
              to your roastery&apos;s altitude, duct layout,
              and roasting volume. No generic solutions.
              No guesswork.
            </p>

            <p className="text-body-kr font-korean text-ink/75 leading-[1.75] mb-8">
              현장 조사부터 설치까지 2주 이내.
              로스터리의 고도, 덕트 구조, 로스팅 용량에 맞춰
              개별 튜닝. 범용 솔루션 없음. 추측 없음.
            </p>

            <Link
              href="/contact"
              className="inline-block bg-ink text-paper px-5 py-2.5 text-xs font-bold tracking-[0.06em] uppercase hover:bg-paper hover:text-ink border-[2px] border-ink transition-all duration-200 rounded-lg self-start"
            >
              REQUEST A QUOTE
            </Link>
          </div>
        </div>

        {/* Row 3: "AGAIN" — giant, bottom, full width */}
        <div className="mt-6 lg:-mt-10 overflow-hidden">
          <h2 className="fade-in font-display font-bold text-[clamp(3.5rem,10vw,10rem)] text-ink leading-[0.85] tracking-[-0.04em] opacity-0">
            AGAIN
          </h2>
        </div>
      </div>
    </section>
  );
}
