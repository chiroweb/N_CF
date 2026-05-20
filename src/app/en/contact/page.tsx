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
    value: `+82-${COMPANY.phonePrimary.slice(1)}`,
    sub: "Speak to an engineer directly.",
    href: `tel:+82${COMPANY.phonePrimary.replace(/-/g, "").slice(1)}`,
  },
  {
    label: "EMAIL",
    value: COMPANY.email,
    sub: "Weekday reply within 24 hours.",
    href: `mailto:${COMPANY.email}`,
  },
  {
    label: "FACTORY VISIT",
    value: `${COMPANY.cityEn}, Gyeonggi-do`,
    sub: "On-site visits by appointment.",
    href: `https://maps.google.com/?q=${encodeURIComponent(COMPANY.address)}`,
  },
];

const ASKS = [
  "Daily roasting volume (e.g. 15Kg/day, 5 days/week)",
  "Current roaster brand and capacity",
  "Installation site (city basement · rooftop · factory floor)",
  "Fuel & power setup (city gas / LPG, single-phase / three-phase)",
  "Preferred installation timeline",
];

export default function ContactEnPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const heroEls = pageRef.current?.querySelectorAll(".hero-fade");
      if (heroEls) {
        gsap.fromTo(heroEls, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.12, ease: "power3.out" });
      }
      const fadeEls = pageRef.current?.querySelectorAll(".scroll-fade");
      if (fadeEls) {
        fadeEls.forEach((el) => {
          gsap.fromTo(el, { opacity: 0, y: 25 }, {
            opacity: 1, y: 0, duration: 0.7, ease: "power2.out",
            scrollTrigger: { trigger: el, start: "top 88%", toggleActions: "play none none none" },
          });
        });
      }
    }, pageRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef} className="bg-paper min-h-screen">
      <FloatingSectionNav sections={SECTIONS} />

      <div id="intro" className="container-content pt-24 lg:pt-32 pb-16">
        <span className="hero-fade caption-style text-ink/90 block mb-6 opacity-0">
          REQUEST A QUOTE
        </span>
        <h1 className="hero-fade font-display font-bold text-[clamp(3rem,9vw,8rem)] text-ink leading-[0.88] tracking-[-0.04em] opacity-0">
          TALK TO
          <br />
          AN ENGINEER.
        </h1>
        <p className="hero-fade text-[clamp(1rem,1.3vw,1.2rem)] text-ink/85 leading-[1.65] mt-8 max-w-xl opacity-0">
          Every afterburner is sized and tuned for the exact roaster,
          duct layout, and volume it will work with. We start from a
          conversation — not a catalogue. Overseas inquiries welcome;
          we&apos;ve shipped to 7 countries so far.
        </p>
      </div>

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
              <span className="caption-style text-ink/90">{ch.label}</span>
              <div className="mt-auto">
                <p className="font-display font-bold text-[clamp(1.1rem,1.6vw,1.4rem)] text-ink tracking-tight mb-2 group-hover:underline underline-offset-4">
                  {ch.value}
                </p>
                <p className="text-sm text-ink/75">{ch.sub}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="scroll-fade mt-8 flex justify-center opacity-0">
          <Link
            href="https://www.nbpkorea.co.kr/support"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-ink text-paper px-7 py-3.5 rounded-lg border-2 border-ink hover:bg-paper hover:text-ink transition-all duration-200"
          >
            <span className="text-sm font-medium tracking-tight">
              SUBMIT INQUIRY FORM
            </span>
            <span className="text-base transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
          </Link>
        </div>

        <p className="caption-style text-ink/90 mt-6 text-center">
          SUB · +82-{COMPANY.phoneSecondary.slice(1)} &nbsp;·&nbsp; FAX +82-{COMPANY.fax.slice(1)}
        </p>
      </div>

      <div id="brief" className="bg-ink py-24 lg:py-32">
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-20">
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
              <p className="scroll-fade text-[clamp(0.95rem,1.15vw,1.1rem)] text-paper/85 leading-[1.7] mt-8 max-w-sm opacity-0">
                Five lines is enough to begin. We&apos;ll take it from there.
              </p>
            </div>

            <ol className="scroll-fade space-y-6 opacity-0">
              {ASKS.map((item, i) => (
                <li key={item} className="flex gap-6 border-b border-paper/15 pb-5">
                  <span className="caption-style text-paper/80 w-8 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[clamp(0.95rem,1.1vw,1.1rem)] text-paper/90 leading-[1.6]">
                    {item}
                  </span>
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-20 flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-10 border-t border-paper/15">
            <p className="caption-style text-paper/90">SEND IT STRAIGHT —</p>
            <Link
              href={`mailto:${COMPANY.email}?subject=Afterburner%20Inquiry`}
              className="btn-pill bg-paper text-ink hover:bg-ink hover:text-paper border-2 border-paper transition-all duration-200 rounded-lg"
            >
              {COMPANY.email} <span className="ml-2">&rarr;</span>
            </Link>
          </div>
        </div>
      </div>

      <div id="hours" className="container-content py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          <div className="scroll-fade opacity-0">
            <span className="caption-style text-ink/90 block mb-4">HOURS</span>
            <p className="font-display font-bold text-[clamp(1.5rem,2.5vw,2rem)] text-ink leading-[1.25] tracking-[-0.01em]">
              {COMPANY.hoursEn}
            </p>
            <p className="text-[clamp(0.95rem,1.15vw,1.1rem)] text-ink/75 mt-2">
              Closed weekends & national holidays. For urgent overseas matters, please email.
            </p>
          </div>

          <div className="scroll-fade opacity-0">
            <span className="caption-style text-ink/90 block mb-4">FACTORY</span>
            <p className="font-display font-bold text-[clamp(1.3rem,2.1vw,1.7rem)] text-ink leading-[1.3] tracking-[-0.01em]">
              40 MTV-ro 8-gil, Danwon-gu,
              <br />
              Ansan-si, Gyeonggi-do, South Korea
            </p>
            <p className="caption-style text-ink/85 mt-3">
              {COMPANY.coordinates}
            </p>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-bone grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <span className="caption-style text-ink/85 block mb-1">COMPANY</span>
            <p className="text-sm text-ink/90">{COMPANY.name}</p>
          </div>
          <div>
            <span className="caption-style text-ink/85 block mb-1">CEO</span>
            <p className="text-sm text-ink/90">Choi Hyeok-soon</p>
          </div>
          <div>
            <span className="caption-style text-ink/85 block mb-1">BIZ NO.</span>
            <p className="text-sm text-ink/90">{COMPANY.businessNumber}</p>
          </div>
          <div>
            <span className="caption-style text-ink/85 block mb-1">FOUNDED</span>
            <p className="text-sm text-ink/90">{COMPANY.established}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
