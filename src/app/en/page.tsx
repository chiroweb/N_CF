"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "@/lib/gsap";
import { IMAGES } from "@/lib/images";

const PRODUCTS = [
  {
    tag: "THE AFTERBURNER",
    details: [
      ["TYPE", "Direct Flame"],
      ["METHOD", "Full Combustion"],
      ["RESULT", "Zero Smoke"],
    ],
    href: "/en/afterburner",
  },
  {
    tag: "KUBAN",
    details: [
      ["TYPE", "Drum Roaster"],
      ["ORIGIN", "Türkiye"],
      ["DEALER", "Exclusive KR"],
    ],
    href: "/en/roasters",
  },
  {
    tag: "BUTTER MACHINE",
    details: [
      ["TYPE", "Nut Butter"],
      ["USE", "Commercial"],
      ["PROCESS", "Smooth Texture"],
    ],
    href: "/en/the-lab",
  },
];

export default function EnHome() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
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

      const lines = sectionRef.current?.querySelectorAll(".hero-line");
      if (lines) {
        gsap.fromTo(
          lines,
          { opacity: 0, y: 60 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.12, ease: "power3.out" }
        );
      }

      const fadeEls = sectionRef.current?.querySelectorAll(".scroll-fade");
      if (fadeEls) {
        fadeEls.forEach((el) => {
          gsap.fromTo(
            el,
            { opacity: 0, y: 25 },
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
    <section ref={sectionRef} className="relative z-[1] bg-ink">
      {/* Fixed parallax background */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <div ref={bgRef} className="absolute inset-0 -top-[30%] -bottom-[30%]">
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

      {/* Scrolling content layer */}
      <div className="relative z-[2]">
        {/* ── Hero ── */}
        <div className="relative">
          <h1 className="pl-[var(--edge-margin)] pt-[35vh] m-0 font-display font-bold text-[clamp(5rem,14vw,15rem)] text-white leading-[0.85] tracking-[-0.04em]">
            <span className="hero-line block opacity-0">NO ONE</span>
            <span className="hero-line block opacity-0">KNEW</span>
            <span className="hero-line block opacity-0">WE WERE</span>
            <span className="hero-line block opacity-0">ROASTING</span>
          </h1>

          <div className="flex items-start justify-end gap-8 pr-[var(--edge-margin)] pl-[var(--edge-margin)] mt-40">
            <div className="max-w-md ml-auto">
              <p className="text-white/90 text-[clamp(0.85rem,1.15vw,1.05rem)] leading-[1.65] font-medium">
                Surrender to silence with every roast. No smoke, no
                complaints, no trace — just craft. That is the point.
                We build afterburners that erase the evidence of
                roasting so your neighbors never notice you&apos;re
                working.
              </p>
            </div>
          </div>

          <div className="sticky bottom-6 z-20 flex justify-end pr-[var(--edge-margin)] mt-10 pb-10">
            <Link
              href="/en/afterburner"
              className="btn-pill bg-ink text-paper hover:bg-paper hover:text-ink border-2 border-white hover:border-ink transition-all duration-200 shadow-[0_0_0_1px_rgba(255,255,255,0.6)]"
            >
              EXPLORE THE MACHINE
              <span className="ml-2">&rarr;</span>
            </Link>
          </div>

          {/* Bento grid — product lineup */}
          <div className="px-[var(--edge-margin)] mt-24 pb-16">
            <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr_1fr_1fr] md:grid-rows-[auto_auto] border-[3px] border-white/40 rounded-lg overflow-hidden">
              <div className="md:row-span-2 border-b-[3px] md:border-b-0 md:border-r-[3px] border-white/40 p-8 lg:p-10 flex items-end">
                <h3 className="font-display font-bold text-[clamp(1.6rem,2.8vw,2.6rem)] text-white leading-[1.1] tracking-[-0.02em]">
                  AN ANSAN
                  <br />
                  AFTERBURNER
                  <br />
                  COMPANY
                </h3>
              </div>

              {PRODUCTS.map((product) => (
                <Link
                  key={product.tag}
                  href={product.href}
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
                    {product.details.map(([label, value]) => (
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

              <div className="md:col-span-3 flex items-center py-3 px-6 overflow-hidden">
                <div className="flex-1 overflow-hidden">
                  <div className="flex animate-marquee whitespace-nowrap">
                    {Array.from({ length: 6 }).map((_, i) => (
                      <span
                        key={i}
                        className="text-sm tracking-[0.08em] uppercase text-white/85 mx-4 font-medium"
                      >
                        SINGLE PRODUCT &nbsp;*&nbsp; SINCE 2006 &nbsp;*&nbsp; DIRECT FLAME &nbsp;*&nbsp;
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Mission — one thing, fourteen years ── */}
        <div className="relative z-[3] bg-paper py-24 lg:py-32">
          <div className="container-content">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-20 items-start">
              <div className="scroll-fade opacity-0">
                <span className="caption-style text-ink/90 block mb-4">
                  ONE THING, FOURTEEN YEARS
                </span>
                <h2 className="font-display font-bold text-[clamp(2rem,5vw,4rem)] text-ink leading-[0.92] tracking-[-0.03em]">
                  WE ONLY
                  <br />
                  MAKE AFTER-
                  <br />
                  BURNERS.
                </h2>
              </div>

              <div className="scroll-fade opacity-0 text-ink/90 leading-[1.7] text-[clamp(1rem,1.3vw,1.2rem)] space-y-5 max-w-2xl">
                <p>
                  We&apos;re often told we live a one-track life. Our
                  answer to that — thank you. Only when you obsess
                  over one thing does much else follow. The one thing
                  NBPKOREA has held onto for fourteen years has always
                  been the Afterburner.
                </p>
                <p>
                  In the craft of clearing smoke and soot, no hands
                  are more blackened than ours. Every unit that leaves
                  Ansan is tuned in person to the roaster, duct, and
                  volume it&apos;s about to work with — no generic
                  solutions, no guesswork.
                </p>
                <Link
                  href="/en/afterburner"
                  className="inline-block mt-4 bg-ink text-paper px-5 py-2.5 text-xs font-bold tracking-[0.08em] uppercase hover:bg-paper hover:text-ink border-2 border-ink transition-all duration-200 rounded-lg"
                >
                  LEARN MORE
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* ── Evidence strip — numbers ── */}
        <div className="relative z-[3] bg-bone py-20 lg:py-28">
          <div className="container-content">
            <div className="scroll-fade opacity-0 mb-10">
              <span className="caption-style text-ink/90">
                EVIDENCE · 2024 — 2025
              </span>
            </div>
            <div className="scroll-fade grid grid-cols-2 md:grid-cols-4 gap-8 border-t-2 border-ink pt-10 opacity-0">
              <Stat label="AFTERBURNERS SHIPPED" value="379" />
              <Stat label="ROASTER BRANDS PAIRED" value="18" />
              <Stat label="KOREAN REGIONS" value="16" />
              <Stat label="OVERSEAS COUNTRIES" value="07" />
            </div>
            <p className="scroll-fade caption-style text-ink/75 mt-10 opacity-0">
              China · Taiwan · Japan · Thailand · Hong Kong · Kuwait · Qatar
            </p>
          </div>
        </div>

        {/* ── Install flow ── */}
        <div className="relative z-[3] bg-paper py-24 lg:py-32">
          <div className="container-content">
            <div className="scroll-fade opacity-0 mb-16">
              <span className="caption-style text-ink/90 block mb-4">
                FROM SURVEY TO INSTALL · UNDER 2 WEEKS
              </span>
              <h2 className="font-display font-bold text-[clamp(2rem,5vw,4rem)] text-ink leading-[0.92] tracking-[-0.03em]">
                NEVER
                <br />
                WORRY.
              </h2>
            </div>
            <ol className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              {[
                ["01", "WE SURVEY YOUR SPACE", "Ceiling height, duct geometry, neighbors on the block — we measure before we quote."],
                ["02", "CUSTOM-BUILD YOUR UNIT", "Every NKJC afterburner is sized and tuned in Ansan for the exact roaster and duct you already have."],
                ["03", "SIT BACK AND ROAST", "From first survey to a running unit, usually inside two weeks. One year parts & labor warranty."],
              ].map(([no, title, body]) => (
                <li key={no} className="scroll-fade opacity-0 border-t-2 border-ink pt-6">
                  <span className="font-display font-bold text-[clamp(3rem,6vw,5rem)] text-ink leading-none block mb-6">
                    {no}
                  </span>
                  <h3 className="font-display font-bold text-[clamp(1.1rem,1.8vw,1.5rem)] text-ink mb-4 tracking-tight">
                    {title}
                  </h3>
                  <p className="text-sm text-ink/85 leading-[1.7]">{body}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* ── Closing ── */}
        <div className="relative z-[3] bg-ink py-24 lg:py-32">
          <div className="container-content text-center">
            <span className="scroll-fade caption-style text-paper/75 block mb-6 opacity-0">
              AND YOUR ROASTERY?
            </span>
            <h2 className="scroll-fade font-display font-bold text-[clamp(2rem,5vw,4rem)] text-paper leading-[0.95] tracking-[-0.03em] opacity-0">
              HOW DOES IT
              <br />
              BREATHE?
            </h2>
            <div className="scroll-fade mt-10 opacity-0">
              <Link
                href="/en/contact"
                className="btn-pill bg-paper text-ink hover:bg-ink hover:text-paper border-2 border-paper transition-all duration-200 rounded-lg"
              >
                REQUEST A QUOTE <span className="ml-2">&rarr;</span>
              </Link>
            </div>
            <p className="scroll-fade caption-style text-paper/75 mt-10 opacity-0">
              or talk to an engineer — +82-31-434-6566
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <span className="font-display font-bold text-[clamp(2rem,4.5vw,4rem)] text-ink tracking-tight leading-[1] block">
        {value}
      </span>
      <span className="caption-style text-ink/80 block mt-3">{label}</span>
    </div>
  );
}
