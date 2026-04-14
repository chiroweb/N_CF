"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
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
      className="relative overflow-hidden"
      style={{ height: "250vh" }}
    >
      {/* ── Single giant background photo ── */}
      <div
        ref={bgRef}
        className="absolute inset-0 -top-[15%] -bottom-[15%]"
      >
        <div className="absolute inset-0 bg-[url('/images/evidence-bg.jpg')] bg-cover bg-center" />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-haze/85" />
      </div>

      {/* ── Content layer — scrolls at normal speed ── */}
      <div className="relative z-10 h-full flex flex-col">

        {/* ── Top portion: Manifesto text ── */}
        <div className="container-content pt-24 lg:pt-32 pb-16">
          {/* Section label */}
          <span className="caption-style text-white/50 block mb-8">
            OUR
            <br />
            MISSION
          </span>

          {/* Manifesto — large body text */}
          <p className="fade-in font-heading font-semibold text-[clamp(1.3rem,2.6vw,2.2rem)] text-white leading-[1.5] tracking-[-0.01em] max-w-[85%] opacity-0">
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
          {/* Center group: left text + floating photo + right text */}
          <div className="flex items-center gap-8 lg:gap-14">
            {/* Left side text */}
            <div className="hidden md:block">
              <p className="caption-style text-white/45 leading-[1.6]">
                NBPKOREA
                <br />
                IS ALWAYS POSSIBLE
              </p>
            </div>

            {/* Floating photo — parallaxes at different speed */}
            <div
              ref={floatingRef}
              className="relative z-10 w-[50vw] max-w-[714px]"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-bone rounded-lg">
                <div className="absolute inset-0 bg-[url('/images/evidence-float.jpg')] bg-cover bg-center" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="caption-style text-ink/15">
                    FLOATING PHOTO
                  </span>
                </div>
              </div>
            </div>

            {/* Right side text */}
            <div className="hidden md:block text-right">
              <p className="caption-style text-white/45 leading-[1.6]">
                JUST BREATHE CLEAN
                <br />
                AND ROAST RIGHT IN.
              </p>
            </div>
          </div>
        </div>

        {/* ── Bottom portion: just background passing, coordinates ── */}
        <div className="container-content pb-16 flex items-end justify-center">
          <p className="caption-style text-white/30">
            37.3430° N — 126.7395° E
          </p>
        </div>
      </div>
    </section>
  );
}
