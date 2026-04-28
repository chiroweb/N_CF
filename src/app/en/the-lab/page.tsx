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
  { id: "object", label: "MACHINE" },
  { id: "features", label: "FEATURES" },
  { id: "method", label: "METHOD" },
  { id: "contact", label: "CONTACT" },
];

const PROCESS = [
  {
    no: "01",
    title: "LOAD",
    body: "Peanuts, almonds, cashews, walnuts — any roasted nut. One machine handles them all.",
  },
  {
    no: "02",
    title: "GRIND",
    body: "A 1.7kW inverter grinds at the right pace for each nut. One press selects from smooth butter to crunchy texture.",
  },
  {
    no: "03",
    title: "JAR",
    body: "50kg per hour, poured warm into the jar. STS304 stainless housing, KC certified, drama-free operation.",
  },
];

const SPEC_LABEL_EN: Record<string, string> = {
  모델: "MODEL",
  처리량: "THROUGHPUT",
  전원: "POWER",
  구동: "DRIVE",
  치수: "DIMENSIONS",
  무게: "WEIGHT",
  하우징: "HOUSING",
  안전장치: "SAFETY",
  인증: "CERTIFICATION",
};

const SPEC_VALUE_EN: Record<string, string> = {
  "NUTS-STAR · 넛츠스타": "NUTS-STAR",
  "시간당 50Kg": "50kg per hour",
  "220V · 50/60Hz": "220V · 50/60Hz",
  "1.7kW 인버터 제어": "1.7kW inverter-controlled",
  "254 × 600 × 680 mm (W×L×H)": "254 × 600 × 680 mm (W×L×H)",
  "35kg": "35kg",
  "STS304 스테인리스 스틸": "STS304 Stainless Steel",
  "비상정지 · 과부하 · 접지 · 절연": "E-stop · Overload · Ground · Insulation",
  "KC 전기용품 안전인증": "KC Electrical Safety Certification",
};

const FEATURES_EN = [
  "Compatible with multiple nuts (peanut, almond, cashew, walnut and more)",
  "Patented Korean engineering (KC certified, built in Korea)",
  "Easy texture control (SMOOTH → CRUNCHY)",
  "Single-touch operation (integrated ON/OFF button)",
  "High-performance inverter control (1.5kW efficient motor)",
  "Hygienic stainless steel (STS304 housing)",
  "Standard 220V wall power",
  "Compact countertop footprint",
];

const APPLICATIONS_EN = ["Café", "Bakery", "Hotel", "Restaurant", "Nut Shop", "Mill House"];

export default function TheLabEnPage() {
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
        <div className="absolute top-24 right-[var(--edge-margin)] hidden lg:block">
          <p className="caption-style text-ink/90 text-right leading-relaxed">
            ISSUE 03 · 2026
            <br />
            THE LAB — NUTS-STAR
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-end min-h-[75vh]">
          <div>
            <span className="hero-fade caption-style text-ink/90 block mb-6 opacity-0">
              THE LAB / NUT BUTTER MACHINE · 0001
            </span>
            <h1 className="hero-fade font-display font-bold text-[clamp(3rem,10vw,9rem)] text-ink leading-[0.85] tracking-[-0.04em] opacity-0">
              FROM NUT
              <br />
              TO SMOOTH
              <br />
              BUTTER.
            </h1>
            <p className="hero-fade text-ink/85 leading-[1.7] mt-8 max-w-md opacity-0 text-[clamp(0.95rem,1.1vw,1.05rem)]">
              Experience just-made freshness. A commercial nut butter machine
              that grinds right on the counter — drop in nuts, choose smooth
              or crunchy, pour warm into the jar. 50kg per hour, on standard
              220V, with a single button.
            </p>
          </div>

          <div className="hero-fade relative aspect-[3/4] rounded-lg overflow-hidden bg-bone opacity-0">
            <div ref={mastheadImgRef} className="absolute inset-0 -top-[12%] -bottom-[12%]">
              <Image
                src={NUTBUTTER_PRODUCT.heroImage}
                alt="NUTS-STAR machine"
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>

        <div className="mt-16 lg:mt-24 pt-4 border-t border-ink/20 flex justify-between items-center">
          <span className="caption-style text-ink/90">NBPKOREA — THE LAB COLLECTION</span>
          <span className="caption-style text-ink/90">NUT BUTTER MACHINE FIELD NOTES</span>
        </div>
      </section>

      {/* ── 02 · Chapter I — Opening narrative ── */}
      <section id="story" className="container-content py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-24">
          <div className="scroll-fade opacity-0">
            <span className="caption-style text-ink/90 block mb-4">CHAPTER I</span>
            <h2 className="font-display font-bold text-[clamp(2rem,5vw,4rem)] text-ink leading-[0.92] tracking-[-0.03em]">
              NUT,
              <br />
              TEXTURE,
              <br />
              JAR.
            </h2>
          </div>

          <div className="scroll-fade opacity-0 flex flex-col justify-center">
            <p className="text-ink/90 leading-[1.7] mb-6 text-[clamp(0.95rem,1.1vw,1.05rem)] first-letter:font-display first-letter:font-bold first-letter:text-[clamp(3rem,6vw,5rem)] first-letter:float-left first-letter:mr-3 first-letter:leading-[0.85] first-letter:mt-1">
              For fourteen years we burned smoke. One morning, a pastry chef
              walked into our shop and asked whether we could build a machine
              small enough for a counter, durable enough to run all day, and
              honest enough that nuts still tasted like nuts.
            </p>
            <p className="text-ink/85 leading-[1.7] text-[clamp(0.95rem,1.1vw,1.05rem)]">
              We said yes before we knew how. Then we built it — stainless
              steel, inverter-driven, KC certified, made in Korea. Every
              NUTS-STAR that leaves Ansan is the machine that pastry chef first
              asked us for.
            </p>
          </div>
        </div>
      </section>

      {/* ── 03 · Plate · full-bleed editorial photo ── */}
      <section className="relative overflow-hidden">
        <div className="relative aspect-[16/9] lg:aspect-[2/1] overflow-hidden bg-bone">
          <div ref={plateImgRef} className="absolute inset-0 -top-[10%] -bottom-[10%]">
            <Image
              src={IMAGES.obs01}
              alt="Ansan workshop"
              fill
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>
          <div className="absolute inset-0 bg-ink/20" />
          <div className="absolute bottom-6 left-[var(--edge-margin)] right-[var(--edge-margin)] flex items-end justify-between gap-6">
            <span className="caption-style text-white/85">PLATE 01 — WORKSHOP, ANSAN</span>
            <span className="caption-style text-white/85 text-right">PHOTOGRAPHY · NBPKOREA</span>
          </div>
        </div>
      </section>

      {/* ── 04 · Pull quote ── */}
      <section className="bg-ink py-24 lg:py-32">
        <div className="container-content">
          <span className="scroll-fade caption-style text-paper/80 block mb-10 opacity-0">— QUOTE · 01</span>
          <p className="scroll-fade font-heading font-semibold text-[clamp(1.75rem,4vw,3.75rem)] text-paper leading-[1.3] tracking-[-0.015em] max-w-5xl opacity-0">
            &ldquo;The machine doesn&apos;t make the butter. It just lets the
            butter be made properly — slowly, warm, whole, honest. Even at the
            moment a nut stops being a nut, everything that ought to remain a
            nut still does.&rdquo;
          </p>
          <p className="scroll-fade caption-style text-paper/90 mt-10 opacity-0">
            — Park Han-jin · Senior Engineer, NBPKOREA
          </p>
        </div>
      </section>

      {/* ── 05 · Chapter II — The machine ── */}
      <section id="object" className="container-content py-24 lg:py-32">
        <div className="scroll-fade opacity-0 mb-16 lg:mb-24">
          <span className="caption-style text-ink/90 block mb-4">CHAPTER II · THE MACHINE</span>
          <h2 className="font-display font-bold text-[clamp(2rem,5vw,4rem)] text-ink leading-[0.92] tracking-[-0.03em]">
            ONE MODEL.
            <br />
            NO VARIANTS.
            <br />
            BUILT IN KOREA.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[5fr_4fr] gap-10 lg:gap-20 items-start">
          <div className="scroll-fade opacity-0">
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden bg-bone">
              <Image
                src={NUTBUTTER_PRODUCT.image}
                alt="NUTS-STAR assembled"
                fill
                sizes="(min-width: 1024px) 45vw, 90vw"
                className="object-cover object-center"
              />
            </div>
            <p className="caption-style text-ink/90 mt-3">FIGURE 01 — NUTS-STAR, COUNTER-GRADE BUILD</p>
          </div>

          <div className="scroll-fade opacity-0 flex flex-col">
            <span className="caption-style text-ink/90 mb-6">SPECIFICATION · PLATE 002</span>

            <div className="space-y-0 border-t-2 border-ink">
              {NUTBUTTER_PRODUCT.specs.map(({ label, value }) => (
                <div
                  key={label}
                  className="flex justify-between items-start py-4 border-b border-bone gap-6"
                >
                  <span className="caption-style text-ink/90 shrink-0 pt-0.5">
                    {SPEC_LABEL_EN[label] ?? label}
                  </span>
                  <span className="text-sm font-medium text-ink text-right leading-[1.5]">
                    {SPEC_VALUE_EN[value] ?? value}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-ink/75 leading-[1.7] mt-8 text-[clamp(0.9rem,1vw,1rem)]">
              These are representative specs. Power supply, counter layout,
              and workflow get tuned in the field. A conversation comes before
              every unit ships.
            </p>

            <div className="mt-10">
              <Link
                href="/en/contact"
                className="inline-block bg-ink text-paper px-6 py-3 text-sm font-bold tracking-[0.04em] hover:bg-paper hover:text-ink border-2 border-ink transition-all duration-200 rounded-lg"
              >
                INQUIRE NUTS-STAR <span className="ml-2">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 06 · Features — why this one ── */}
      <section id="features" className="border-t-2 border-ink">
        <div className="container-content py-24 lg:py-32">
          <div className="scroll-fade opacity-0 mb-16">
            <span className="caption-style text-ink/90 block mb-4">FEATURES · WHY THIS MACHINE</span>
            <h2 className="font-display font-bold text-[clamp(2rem,4.5vw,3.5rem)] text-ink leading-[0.95] tracking-[-0.03em]">
              EIGHT REASONS,
              <br />
              ALL TRUE.
            </h2>
          </div>

          <ol className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-0">
            {FEATURES_EN.map((f, i) => (
              <li
                key={f}
                className="scroll-fade opacity-0 flex items-start gap-6 py-5 border-b border-bone"
              >
                <span className="caption-style text-ink/90 w-8 shrink-0 pt-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-ink/90 leading-[1.55] text-[clamp(0.9rem,1vw,1rem)]">{f}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── 07 · Chapter III — Process ── */}
      <section id="method" className="border-t-2 border-ink">
        <div className="container-content py-24 lg:py-32">
          <div className="scroll-fade opacity-0 mb-16 lg:mb-20">
            <span className="caption-style text-ink/90 block mb-4">CHAPTER III · METHOD</span>
            <h2 className="font-display font-bold text-[clamp(2rem,5vw,4rem)] text-ink leading-[0.92] tracking-[-0.03em]">
              THREE STEPS,
              <br />
              NOTHING MORE.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {PROCESS.map((step) => (
              <div key={step.no} className="scroll-fade opacity-0 border-t-2 border-ink pt-6">
                <span className="font-display font-bold text-[clamp(3rem,6vw,5rem)] text-ink leading-none block mb-6">
                  {step.no}
                </span>
                <h3 className="font-display font-bold text-[clamp(1.1rem,1.8vw,1.5rem)] text-ink mb-4 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-ink/85 leading-[1.7] text-[clamp(0.9rem,1vw,1rem)]">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 08 · Built For ── */}
      <section className="border-t border-bone">
        <div className="container-content py-20 lg:py-28">
          <div className="scroll-fade opacity-0">
            <span className="caption-style text-ink/90 block mb-8">BUILT FOR</span>
            <div className="flex flex-wrap gap-x-10 gap-y-4">
              {APPLICATIONS_EN.map((app) => (
                <span
                  key={app}
                  className="font-display font-bold text-[clamp(1.3rem,2.3vw,2rem)] text-ink/75 hover:text-ink transition-colors duration-300"
                >
                  {app}
                </span>
              ))}
            </div>
            <p className="text-ink/75 leading-[1.7] mt-6 text-[clamp(0.9rem,1vw,1rem)]">
              {APPLICATIONS_EN.join(" · ")}
            </p>
          </div>
        </div>
      </section>

      {/* ── 09 · Closing ── */}
      <section id="contact" className="bg-ink py-24 lg:py-32">
        <div className="container-content text-center">
          <span className="scroll-fade caption-style text-paper/80 block mb-10 opacity-0">END OF ISSUE 03</span>
          <h2 className="scroll-fade font-display font-bold text-[clamp(2rem,5vw,4rem)] text-paper leading-[0.95] tracking-[-0.03em] opacity-0">
            BRING THE
            <br />
            HEALTH OF NUTS
            <br />
            INTO YOUR CAFÉ.
          </h2>
          <p className="scroll-fade text-paper/85 mt-6 opacity-0 text-[clamp(0.95rem,1.1vw,1.05rem)]">
            One machine on the counter is the start.
          </p>
          <div className="scroll-fade mt-10 opacity-0">
            <Link
              href="/en/contact"
              className="btn-pill bg-paper text-ink hover:bg-ink hover:text-paper border-2 border-paper transition-all duration-200 rounded-lg"
            >
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
