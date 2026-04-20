"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { IMAGES } from "@/lib/images";
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
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${IMAGES.evidenceBg})` }} />
      </div>

      {/* ── Content layer — scrolls at normal speed ── */}
      <div className="relative z-10 h-full flex flex-col">

        {/* ── Top portion: Manifesto text directly on photo ── */}
        <div className="container-content pt-20 lg:pt-28 pb-20 lg:pb-28">
            {/* Manifesto — large, bold, directly on background photo */}
            <p className="fade-in font-heading font-semibold text-[clamp(1.8rem,3.8vw,3.4rem)] text-white leading-[1.3] tracking-[-0.01em] opacity-0 drop-shadow-[0_2px_12px_rgba(0,0,0,0.3)]">
              We&apos;ve been accused of having a one-track mind. And to
              those accusations we say — thank you. Because we know it&apos;s by
              focusing on one thing that many things happen. And at NBPKOREA,
              that one thing was always the afterburner. We have gone deeper
              into smoke elimination than anyone, getting our hands dirty and
              soot-dusted at every step.{" "}
              <Link
                href="/"
                className="inline-block bg-white text-haze px-4 py-1.5 text-xs font-bold tracking-[0.06em] uppercase align-middle hover:bg-ink hover:text-paper transition-colors duration-200 ml-1 rounded-lg"
              >
                LEARN MORE
              </Link>
            </p>
        </div>

        {/* ── Middle portion: Floating photo + side text ── */}
        <div className="flex-1 relative flex items-center justify-center">
          {/* Center group — full width with edge padding so wing text never clips */}
          <div className="flex items-center justify-between gap-6 md:gap-8 lg:gap-16 w-full px-[var(--edge-margin)]">
            {/* Left side text */}
            <div className="hidden md:block shrink min-w-0 max-w-[18ch]">
              <p className="text-[clamp(0.95rem,1.3vw,1.6rem)] font-medium text-white/60 leading-[1.35] uppercase tracking-[0.04em]">
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
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${IMAGES.evidenceFloat})` }} />
              </div>
            </div>

            {/* Right side text */}
            <div className="hidden md:block shrink min-w-0 max-w-[18ch] text-right">
              <p className="text-[clamp(0.95rem,1.3vw,1.6rem)] font-medium text-white/60 leading-[1.35] uppercase tracking-[0.04em]">
                JUST BREATHE CLEAN
                <br />
                AND ROAST RIGHT IN.
              </p>
            </div>
          </div>

          {/* Emotional line — absolutely centered below photo area */}
          <div className="absolute bottom-[10%] left-0 right-0 text-center z-20">
            <p className="font-heading font-semibold text-[clamp(2rem,4vw,3.5rem)] text-white/70 leading-[1.4] tracking-[-0.01em]">
              We understand your craft.
              <br />
              We&apos;re ready to carry it with you.
            </p>
            <p className="caption-style text-white/30 mt-6">
              37.3430° N — 126.7395° E
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
