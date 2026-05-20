"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { gsap } from "@/lib/gsap";
import {
  AFTERBURNER_MODELS,
  AFTERBURNER_COMMON_SPECS,
  COMPATIBLE_ROASTERS,
  HERO_IMAGES,
} from "@/lib/products";
import FloatingSectionNav, { type NavSection } from "@/components/layout/FloatingSectionNav";
import Image from "next/image";
import Link from "next/link";

const SECTIONS: NavSection[] = [
  { id: "overview", label: "OVERVIEW" },
  { id: "guide", label: "MODEL GUIDE" },
  { id: "models", label: "MODELS" },
  { id: "details", label: "DETAILS" },
  { id: "compatible", label: "COMPATIBLE" },
  { id: "contact", label: "CONTACT" },
];

const MODEL_GUIDE = [
  { range: "≤ 10kg / day", recommend: "NK-5K", index: 0 },
  { range: "10 – 20kg / day", recommend: "NK-10K", index: 1 },
  { range: "20 – 40kg / day", recommend: "NK-30K", index: 3 },
  { range: "≥ 40kg / day", recommend: "NK-60K", index: 4 },
];

export default function AfterburnerEnPage() {
  const pageRef = useRef<HTMLDivElement>(null);
  const heroImgRef = useRef<HTMLDivElement>(null);
  const [selectedModel, setSelectedModel] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);

  const model = AFTERBURNER_MODELS[selectedModel];

  const switchModel = useCallback(
    (index: number) => {
      if (isTransitioning || index === selectedModel) return;
      setIsTransitioning(true);

      const content = pageRef.current?.querySelectorAll(".model-content");
      if (content) {
        gsap.to(content, {
          opacity: 0,
          y: -10,
          duration: 0.25,
          ease: "power2.in",
          onComplete: () => {
            setSelectedModel(index);
            setGalleryIndex(0);
          },
        });
      }
    },
    [isTransitioning, selectedModel]
  );

  useEffect(() => {
    if (!isTransitioning) return;
    const content = pageRef.current?.querySelectorAll(".model-content");
    if (content) {
      gsap.fromTo(
        content,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.35, ease: "power2.out", stagger: 0.04, onComplete: () => setIsTransitioning(false) }
      );
    }
  }, [selectedModel, isTransitioning]);

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
      if (heroImgRef.current) {
        gsap.to(heroImgRef.current, {
          yPercent: 15,
          ease: "none",
          scrollTrigger: { trigger: heroImgRef.current, start: "top bottom", end: "bottom top", scrub: 0.5 },
        });
      }
      const fadeEls = pageRef.current?.querySelectorAll(".scroll-fade");
      if (fadeEls) {
        fadeEls.forEach((el) => {
          gsap.fromTo(
            el,
            { opacity: 0, y: 25 },
            { opacity: 1, y: 0, duration: 0.7, ease: "power2.out", scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play none none none" } }
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
      <div id="overview" className="container-content pt-24 lg:pt-32 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
          <div>
            <span className="hero-fade caption-style text-ink/90 block mb-6 opacity-0">
              COFFEE ROASTING AFTERBURNER
            </span>
            <h1 className="hero-fade font-display font-bold text-[clamp(3rem,8vw,7rem)] text-ink leading-[0.88] tracking-[-0.04em] opacity-0">
              THE
              <br />
              AFTER
              <br />
              BURNER
            </h1>
            <p className="hero-fade text-[clamp(1rem,1.3vw,1.15rem)] text-ink/85 leading-[1.6] mt-8 max-w-md opacity-0">
              99.2% smoke removal. Direct flame combustion. No filters
              to replace, no activated carbon, no water. The machine
              that lets your roastery work in silence.
            </p>
            <div className="hero-fade mt-8 opacity-0">
              <Link
                href="/en/contact"
                className="inline-block bg-ink text-paper px-6 py-3 text-sm font-bold tracking-[0.06em] uppercase hover:bg-paper hover:text-ink border-2 border-ink transition-all duration-200 rounded-lg"
              >
                REQUEST A QUOTE <span className="ml-2">&rarr;</span>
              </Link>
            </div>
          </div>

          <div className="hero-fade relative aspect-[3/4] rounded-lg overflow-hidden bg-bone opacity-0">
            <div ref={heroImgRef} className="absolute inset-0 -top-[15%] -bottom-[15%]">
              <Image src={HERO_IMAGES.afterburner} alt="NBPKOREA NK afterburner" fill priority sizes="(min-width: 1024px) 50vw, 100vw" className="object-contain object-center" />
            </div>
          </div>
        </div>
      </div>

      {/* ── Manifesto ── */}
      <div className="bg-ink py-16 lg:py-20">
        <div className="container-content">
          <p className="scroll-fade font-heading font-semibold text-[clamp(1.4rem,2.8vw,2.4rem)] text-paper leading-[1.35] text-center opacity-0">
            From 200°C to 1,000°C. We burn it with direct flame. Completely.
            <br />
            Nothing is left behind. That is how we do it.
          </p>
        </div>
      </div>

      {/* ── Model Recommendation Guide ── */}
      <div id="guide" className="container-content py-16 lg:py-20">
        <div className="scroll-fade opacity-0">
          <span className="caption-style text-ink/90 block mb-4">
            WHICH MODEL IS RIGHT FOR YOU?
          </span>
          <p className="text-[clamp(1rem,1.3vw,1.15rem)] text-ink/75 mb-8">
            Pick the match by daily roasting volume.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
            {MODEL_GUIDE.map((guide) => (
              <button
                key={guide.range}
                onClick={() => {
                  switchModel(guide.index);
                  document.getElementById("models")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="group p-5 border-2 border-bone rounded-lg hover:border-ink transition-all duration-300 text-left"
              >
                <span className="text-sm font-medium text-ink block mb-1">
                  {guide.range}
                </span>
                <span className="font-display font-bold text-lg text-ink/90 group-hover:text-ink transition-colors">
                  {guide.recommend}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Model Selector + Specs ── */}
      <div id="models" className="container-content py-24 lg:py-32">
        <div className="scroll-fade opacity-0">
          <span className="caption-style text-ink/90 block mb-4">SELECT YOUR MODEL</span>
          <h2 className="font-display font-bold text-[clamp(2rem,4vw,3.5rem)] text-ink leading-[0.95] tracking-[-0.03em] mb-12">
            {AFTERBURNER_MODELS.length} MODELS.
            <br />
            ONE OBSESSION.
          </h2>
        </div>

        <div className="scroll-fade flex flex-wrap gap-2 mb-16 opacity-0">
          {AFTERBURNER_MODELS.map((m, i) => (
            <button
              key={m.id}
              onClick={() => switchModel(i)}
              className={`px-5 py-2.5 text-sm font-bold tracking-[0.04em] uppercase rounded-lg border-2 transition-all duration-200 ${
                i === selectedModel ? "bg-ink text-paper border-ink" : "bg-transparent text-ink/85 border-bone hover:border-ink hover:text-ink"
              }`}
            >
              {m.capacity}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[5fr_4fr] gap-8 lg:gap-16">
          <div className="model-content">
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden bg-bone">
              <div
                className="absolute inset-0 flex items-center justify-center transition-transform duration-500 ease-out"
                style={{ transform: `scale(${0.62 + selectedModel * 0.076})` }}
              >
                <Image
                  key={model.gallery[galleryIndex]}
                  src={model.gallery[galleryIndex]}
                  alt={`${model.name} · ${galleryIndex + 1}`}
                  fill
                  sizes="(min-width: 1024px) 45vw, 90vw"
                  className="object-contain object-center"
                />
              </div>
              <span className="absolute right-3 bottom-3 z-10 inline-flex items-center gap-1.5 rounded-full bg-paper/90 backdrop-blur px-3 py-1.5 text-[0.65rem] font-bold tracking-[0.06em] text-ink/80 border border-ink/15">
                <span className="inline-flex h-2 w-2 rounded-full bg-ink/80" />
                CUSTOM COLOR AVAILABLE
              </span>
            </div>
            <p className="caption-style text-ink/70 mt-3">
              White and black are illustrative defaults — finish can be specified by RAL color code on every model.
            </p>
            {model.gallery.length > 1 && (
              <div className="flex gap-2 mt-3">
                {model.gallery.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setGalleryIndex(i)}
                    className={`relative w-16 h-16 rounded-lg overflow-hidden border-2 transition-colors ${i === galleryIndex ? "border-ink" : "border-bone"}`}
                  >
                    <Image src={img} alt="" fill sizes="64px" className="object-cover object-center" />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="model-content flex flex-col justify-center">
            <h3 className="font-display font-bold text-[clamp(2rem,3.5vw,3rem)] text-ink leading-[0.95] tracking-[-0.03em] mb-2">
              {model.name}
            </h3>
            <p className="caption-style text-ink/90 mb-8">{model.target}</p>

            <div className="space-y-0 border-t-2 border-ink">
              <SpecRow label="CAPACITY" value={model.capacity} />
              <SpecRow label="DIMENSIONS" value={model.size} />
              <SpecRow label="BURNER" value={model.burner} />
              <SpecRow label="CONTROLLER" value={model.controller} />
              <SpecRow label="FUEL" value={AFTERBURNER_COMMON_SPECS.heatSource} />
              <SpecRow label="COMBUSTION TEMP" value={AFTERBURNER_COMMON_SPECS.combustionTemp} />
              <SpecRow label="SMOKE REMOVAL" value={AFTERBURNER_COMMON_SPECS.removalRate} />
              <SpecRow label="GAS SAVING" value={`${AFTERBURNER_COMMON_SPECS.gasSaving}+ vs filter systems`} />
              <SpecRow label="PROPORTIONAL CONTROL" value={AFTERBURNER_COMMON_SPECS.proportionalRatio} />
              <SpecRow label="THERMAL EFFICIENCY" value={AFTERBURNER_COMMON_SPECS.thermalEfficiency} />
              <SpecRow label="POWER" value={AFTERBURNER_COMMON_SPECS.power} />
              <SpecRow label="WARRANTY" value={AFTERBURNER_COMMON_SPECS.warranty} />
            </div>

            <div className="mt-10">
              <Link
                href="/en/contact"
                className="inline-block bg-ink text-paper px-6 py-3 text-sm font-bold tracking-[0.06em] uppercase hover:bg-paper hover:text-ink border-2 border-ink transition-all duration-200 rounded-lg"
              >
                GET A QUOTE FOR {model.name}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── Details — tilt cards ── */}
      <div id="details" className="container-content pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <TiltCard
            number="01"
            title="DIRECT FLAME"
            body="No filters, no water, no activated carbon. We burn the smoke. Completely."
            image="https://chiro-web.s3.ap-northeast-2.amazonaws.com/fa/AFTERBUNNER/products/ab-ductburner-2.png"
          />
          <TiltCard
            number="02"
            title="PATENTED MIXING GUIDE"
            body="A reheating regenerative ceramic guide finishes what the flame starts. Gas Safety Corporation certified. 98% thermal efficiency."
            image="https://chiro-web.s3.ap-northeast-2.amazonaws.com/fa/AFTERBUNNER/products/afterburner-white.png"
          />
          <TiltCard
            number="03"
            title="EVERY ROASTER"
            body="PROBAT, GIESEN, LORING, FUJI ROYAL — whatever you roast with, we&apos;ve paired with it on-site."
            image="https://chiro-web.s3.ap-northeast-2.amazonaws.com/fa/AFTERBUNNER/products/afterburner-black.png"
          />
        </div>
      </div>

      {/* ── Compatible Roasters ── */}
      <div id="compatible" className="border-t-2 border-bone">
        <div className="container-content py-16 lg:py-20">
          <div className="scroll-fade opacity-0">
            <span className="caption-style text-ink/90 block mb-6">COMPATIBLE WITH</span>
            <div className="flex flex-wrap gap-x-8 gap-y-4">
              {COMPATIBLE_ROASTERS.map((brand) => (
                <span key={brand} className="font-display font-bold text-[clamp(1.2rem,2vw,1.8rem)] text-ink/70 hover:text-ink transition-colors duration-300">
                  {brand}
                </span>
              ))}
            </div>
            <p className="text-[clamp(0.95rem,1.15vw,1.1rem)] text-ink/60 mt-4">
              We survey on-site and build each afterburner to match the roaster brand, capacity, and duct layout you already have.
            </p>
          </div>
        </div>
      </div>

      {/* ── CTA ── */}
      <div id="contact" className="bg-ink py-24 lg:py-32">
        <div className="container-content text-center">
          <h2 className="scroll-fade font-display font-bold text-[clamp(2rem,5vw,4rem)] text-paper leading-[0.95] tracking-[-0.03em] opacity-0">
            YOUR ROASTERY.
            <br />
            OUR AFTERBURNER.
          </h2>
          <p className="scroll-fade text-[clamp(1rem,1.25vw,1.2rem)] text-paper/75 mt-6 opacity-0">
            We&apos;ll size and tune one for the site you already have.
          </p>
          <div className="scroll-fade mt-10 opacity-0">
            <Link
              href="/en/contact"
              className="btn-pill bg-paper text-ink hover:bg-ink hover:text-paper border-2 border-paper transition-all duration-200 rounded-lg"
            >
              REQUEST A QUOTE <span className="ml-2">&rarr;</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function SpecRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between items-center py-4 border-b border-bone">
      <span className="caption-style text-ink/90">{label}</span>
      <span className="text-sm font-medium text-ink text-right">{value}</span>
    </div>
  );
}

function TiltCard({ number, title, body, image }: { number: string; title: string; body: string; image: string }) {
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={cardRef}
      onMouseMove={(e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        cardRef.current.style.transform = `perspective(800px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg)`;
      }}
      onMouseLeave={() => {
        if (cardRef.current) cardRef.current.style.transform = "perspective(800px) rotateY(0deg) rotateX(0deg)";
      }}
      className="scroll-fade group rounded-lg border border-bone overflow-hidden opacity-0 transition-transform duration-200 ease-out will-change-transform"
    >
      <div className="relative aspect-[4/3] bg-bone overflow-hidden">
        <Image src={image} alt={title} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-contain object-center transition-transform duration-700 group-hover:scale-110" />
      </div>
      <div className="p-6 bg-paper group-hover:bg-bone/30 transition-colors duration-500">
        <span className="caption-style text-ink/80 block mb-2">{number}</span>
        <h4 className="font-display font-bold text-base text-ink mb-3">{title}</h4>
        <p className="text-xs text-ink/85 leading-[1.65]">{body}</p>
      </div>
    </div>
  );
}
