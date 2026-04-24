"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { NUTBUTTER_PRODUCT } from "@/lib/products";
import { IMAGES } from "@/lib/images";
import FloatingSectionNav, { type NavSection } from "@/components/layout/FloatingSectionNav";
import Image from "next/image";
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
  { no: "01", title: "LOAD", body: "Whole peanuts, almonds, cashews, walnuts — anything roasted whole. One machine, every nut." },
  { no: "02", title: "GRIND", body: "A 1.7 kW inverter drives the mill at the speed that suits the bean. One touch picks smooth or crunchy." },
  { no: "03", title: "JAR", body: "50 kilograms per hour, poured warm. STS304 housing, KC-certified, built for service without drama." },
];

const FEATURES_EN = [
  "Compatible with every nut (peanut, almond, cashew, walnut, etc.)",
  "Patented in-house build (KC certified, produced in Korea)",
  "Easy texture control (smooth to crunchy)",
  "One-touch operation (single on/off button)",
  "High-performance inverter control (1.5 kW efficient motor)",
  "Hygienic stainless steel (STS304 housing)",
  "Standard 220V residential power",
  "Compact footprint (fits on the counter)",
];

const SPECS_EN: { label: string; value: string }[] = [
  { label: "MODEL", value: "NUTS-STAR" },
  { label: "THROUGHPUT", value: "50 kg / hour" },
  { label: "POWER", value: "220V · 50/60 Hz" },
  { label: "DRIVE", value: "1.7 kW inverter control" },
  { label: "DIMENSIONS", value: "254 × 600 × 680 mm (W×L×H)" },
  { label: "WEIGHT", value: "35 kg" },
  { label: "HOUSING", value: "Stainless Steel · STS304" },
  { label: "SAFETY", value: "E-Stop · Overload · Ground · Insulation" },
  { label: "CERTIFICATION", value: "KC Electrical Safety" },
];

const APPLICATIONS_EN = ["Café", "Bakery", "Hotel", "Restaurant", "Specialty food", "Mill house"];

export default function TheLabEnPage() {
  const pageRef = useRef<HTMLDivElement>(null);
  const mastheadImgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const heroEls = pageRef.current?.querySelectorAll(".hero-fade");
      if (heroEls) gsap.fromTo(heroEls, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.12, ease: "power3.out" });
      if (mastheadImgRef.current) {
        gsap.to(mastheadImgRef.current, {
          yPercent: 12, ease: "none",
          scrollTrigger: { trigger: mastheadImgRef.current, start: "top bottom", end: "bottom top", scrub: 0.5 },
        });
      }
      const fadeEls = pageRef.current?.querySelectorAll(".scroll-fade");
      if (fadeEls) fadeEls.forEach((el) => gsap.fromTo(el, { opacity: 0, y: 25 }, {
        opacity: 1, y: 0, duration: 0.7, ease: "power2.out",
        scrollTrigger: { trigger: el, start: "top 88%", toggleActions: "play none none none" },
      }));
    }, pageRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef} className="bg-paper min-h-screen">
      <FloatingSectionNav sections={SECTIONS} />

      <section id="overview" className="relative container-content pt-24 lg:pt-32 pb-16 lg:pb-24">
        <div className="absolute top-24 right-[var(--edge-margin)] hidden lg:block">
          <p className="caption-style text-ink/90 text-right leading-relaxed">
            ISSUE 03 / 2026<br />THE LAB — NUTS-STAR
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-end min-h-[75vh]">
          <div>
            <span className="hero-fade caption-style text-ink/90 block mb-6 opacity-0">
              THE LAB / NUT BUTTER MACHINE · 0001
            </span>
            <h1 className="hero-fade font-display font-bold text-[clamp(3rem,10vw,9rem)] text-ink leading-[0.85] tracking-[-0.04em] opacity-0">
              FRESH
              <br />
              FROM THE
              <br />
              STONE.
            </h1>
            <p className="hero-fade text-[clamp(1rem,1.3vw,1.2rem)] text-ink/85 leading-[1.65] mt-8 max-w-md opacity-0">
              A single commercial-grade nut butter machine built for the
              counter. Load whole nuts, choose smooth or crunchy, pour
              it warm into the jar — 50 kilograms an hour, 220 volts,
              one button.
            </p>
          </div>

          <div className="hero-fade relative aspect-[3/4] rounded-lg overflow-hidden bg-bone opacity-0">
            <div ref={mastheadImgRef} className="absolute inset-0 -top-[12%] -bottom-[12%]">
              <Image src={NUTBUTTER_PRODUCT.heroImage} alt="NUTS-STAR masthead" fill priority sizes="(min-width: 1024px) 50vw, 100vw" className="object-contain object-center" />
            </div>
          </div>
        </div>

        <div className="mt-16 lg:mt-24 pt-4 border-t border-ink/20 flex justify-between items-center">
          <span className="caption-style text-ink/90">NBPKOREA — THE LAB COLLECTION</span>
          <span className="caption-style text-ink/90">FIELD NOTES ON A NUT BUTTER MILL</span>
        </div>
      </section>

      <section id="story" className="container-content py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-24">
          <div className="scroll-fade opacity-0">
            <span className="caption-style text-ink/90 block mb-4">CHAPTER I</span>
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
            <p className="text-[clamp(1rem,1.4vw,1.25rem)] text-ink/85 leading-[1.7]">
              We said yes before we knew how. Then we made it — stainless,
              inverter-driven, KC-certified, proudly built in Korea. Every
              NUTS-STAR that leaves Ansan is the same machine she asked for.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-ink py-24 lg:py-32">
        <div className="container-content">
          <span className="scroll-fade caption-style text-paper/80 block mb-10 opacity-0">— QUOTE · 01</span>
          <p className="scroll-fade font-heading font-semibold text-[clamp(1.75rem,4vw,3.75rem)] text-paper leading-[1.3] tracking-[-0.015em] max-w-5xl opacity-0">
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

      <section id="object" className="container-content py-24 lg:py-32">
        <div className="scroll-fade opacity-0 mb-16 lg:mb-24">
          <span className="caption-style text-ink/90 block mb-4">CHAPTER II · THE OBJECT</span>
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
              <Image src={NUTBUTTER_PRODUCT.image} alt="NUTS-STAR assembly" fill sizes="(min-width: 1024px) 45vw, 90vw" className="object-contain object-center" />
            </div>
            <p className="caption-style text-ink/90 mt-3">FIG. 01 — NUTS-STAR, counter-grade assembly.</p>
          </div>

          <div className="scroll-fade opacity-0 flex flex-col">
            <span className="caption-style text-ink/90 mb-6">SPECIFICATION · PLATE 002</span>

            <div className="space-y-0 border-t-2 border-ink">
              {SPECS_EN.map(({ label, value }) => (
                <div key={label} className="flex justify-between items-start py-4 border-b border-bone gap-6">
                  <span className="caption-style text-ink/90 shrink-0 pt-0.5">{label}</span>
                  <span className="text-sm font-medium text-ink text-right leading-[1.5]">{value}</span>
                </div>
              ))}
            </div>

            <p className="text-[clamp(0.95rem,1.15vw,1.1rem)] text-ink/75 leading-[1.7] mt-8">
              The numbers above are representative. Final sizing adjusts
              to shop power, counter geometry, and production flow. We
              talk first; we ship second.
            </p>

            <div className="mt-10">
              <Link href="/en/contact" className="inline-block bg-ink text-paper px-6 py-3 text-sm font-bold tracking-[0.06em] uppercase hover:bg-paper hover:text-ink border-2 border-ink transition-all duration-200 rounded-lg">
                INQUIRE ABOUT NUTS-STAR <span className="ml-2">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="border-t-2 border-ink">
        <div className="container-content py-24 lg:py-32">
          <div className="scroll-fade opacity-0 mb-16">
            <span className="caption-style text-ink/90 block mb-4">FEATURES · WHY THIS ONE</span>
            <h2 className="font-display font-bold text-[clamp(2rem,4.5vw,3.5rem)] text-ink leading-[0.95] tracking-[-0.03em]">
              EIGHT REASONS.
              <br />
              ALL OF THEM TRUE.
            </h2>
          </div>

          <ol className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-0">
            {FEATURES_EN.map((f, i) => (
              <li key={f} className="scroll-fade opacity-0 flex items-start gap-6 py-5 border-b border-bone">
                <span className="caption-style text-ink/90 w-8 shrink-0 pt-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[clamp(0.95rem,1.15vw,1.1rem)] text-ink/90 leading-[1.6]">{f}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="method" className="border-t-2 border-ink">
        <div className="container-content py-24 lg:py-32">
          <div className="scroll-fade opacity-0 mb-16 lg:mb-20">
            <span className="caption-style text-ink/90 block mb-4">CHAPTER III · THE METHOD</span>
            <h2 className="font-display font-bold text-[clamp(2rem,5vw,4rem)] text-ink leading-[0.92] tracking-[-0.03em]">
              THREE STEPS.
              <br />
              NOTHING MORE.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {PROCESS.map((step) => (
              <div key={step.no} className="scroll-fade opacity-0 border-t-2 border-ink pt-6">
                <span className="font-display font-bold text-[clamp(3rem,6vw,5rem)] text-ink leading-none block mb-6">{step.no}</span>
                <h3 className="font-display font-bold text-[clamp(1.1rem,1.8vw,1.5rem)] text-ink mb-4 tracking-tight">{step.title}</h3>
                <p className="text-[0.95rem] text-ink/85 leading-[1.7]">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-bone">
        <div className="container-content py-20 lg:py-28">
          <div className="scroll-fade opacity-0">
            <span className="caption-style text-ink/90 block mb-8">BUILT FOR</span>
            <div className="flex flex-wrap gap-x-10 gap-y-4">
              {APPLICATIONS_EN.map((app) => (
                <span key={app} className="font-display font-bold text-[clamp(1.3rem,2.3vw,2rem)] text-ink/75 hover:text-ink transition-colors duration-300">
                  {app}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-ink py-24 lg:py-32">
        <div className="container-content text-center">
          <span className="scroll-fade caption-style text-paper/80 block mb-10 opacity-0">END OF ISSUE 03</span>
          <h2 className="scroll-fade font-display font-bold text-[clamp(2rem,5vw,4rem)] text-paper leading-[0.95] tracking-[-0.03em] opacity-0">
            YOUR JAR.
            <br />
            OUR STONE.
          </h2>
          <div className="scroll-fade mt-10 opacity-0">
            <Link href="/en/contact" className="btn-pill bg-paper text-ink hover:bg-ink hover:text-paper border-2 border-paper transition-all duration-200 rounded-lg">
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
