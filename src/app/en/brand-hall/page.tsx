"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { IMAGES } from "@/lib/images";
import FloatingSectionNav, { type NavSection } from "@/components/layout/FloatingSectionNav";
import Image from "next/image";
import Link from "next/link";

const SECTIONS: NavSection[] = [
  { id: "overview", label: "OVERVIEW" },
  { id: "gallery", label: "GALLERY" },
  { id: "film", label: "FILM" },
  { id: "manifesto", label: "MANIFESTO" },
  { id: "event", label: "NEXT EVENT" },
];

const GALLERY_ITEMS = [
  { id: 1, title: "GRAFFITI EDITION", subtitle: "2024 Exhibition", description: "Street art meets industrial engineering. One machine wrapped in color, shipped to a gallery.", image: IMAGES.missionLeft, size: "large" },
  { id: 2, title: "THE WORKSHOP", subtitle: "Where it begins", description: "Every unit starts here. Hands, fire, steel.", image: IMAGES.obs02, size: "small" },
  { id: 3, title: "GOLDEN HOUR", subtitle: "Roastery mornings", description: "The light hits different when you know nobody can smell you roasting.", image: IMAGES.missionRight, size: "medium" },
  { id: 4, title: "THE NEIGHBORHOOD", subtitle: "Seoul, dusk", description: "A roastery in a residential block. The child on the bicycle never complained.", image: IMAGES.installationPhoto, size: "large" },
  { id: 5, title: "CRAFT & BEANS", subtitle: "The raw material", description: "Before the machine, the hand. Before the hand, the bean.", image: IMAGES.obs01, size: "small" },
  { id: 6, title: "AFTERBURNER UNIT", subtitle: "Studio portrait", description: "14 years of refinement in one frame.", image: IMAGES.heroBg, size: "medium" },
];

export default function BrandHallEnPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const heroLines = pageRef.current?.querySelectorAll(".hero-line");
      if (heroLines) gsap.fromTo(heroLines, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "power3.out" });
      const items = pageRef.current?.querySelectorAll(".gallery-item");
      if (items) items.forEach((item) => gsap.fromTo(item, { opacity: 0, y: 40 }, {
        opacity: 1, y: 0, duration: 0.7, ease: "power2.out",
        scrollTrigger: { trigger: item, start: "top 85%", toggleActions: "play none none none" },
      }));
      const parallaxImgs = pageRef.current?.querySelectorAll(".gallery-parallax");
      if (parallaxImgs) parallaxImgs.forEach((img) => gsap.to(img, {
        yPercent: -10, ease: "none",
        scrollTrigger: { trigger: img.parentElement, start: "top bottom", end: "bottom top", scrub: 0.5 },
      }));
    }, pageRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef} className="bg-ink min-h-screen">
      <FloatingSectionNav sections={SECTIONS} />

      <div id="overview" className="relative h-[80vh] flex flex-col justify-end container-content pb-16">
        <span className="hero-line caption-style text-white/90 block mb-6 opacity-0">BRAND HALL</span>
        <h1 className="m-0 font-display font-bold text-[clamp(3rem,10vw,9rem)] text-paper leading-[0.85] tracking-[-0.04em]">
          <span className="hero-line block opacity-0">THE OTHER</span>
          <span className="hero-line block opacity-0">SIDE.</span>
        </h1>
        <p className="hero-line text-[clamp(1rem,1.25vw,1.2rem)] text-white/90 leading-[1.6] mt-8 max-w-md opacity-0">
          We build machines. But sometimes, a machine becomes art.
          This is the room where those moments live.
        </p>
      </div>

      <div id="gallery" className="container-content pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-4 mb-4">
          <GalleryCard item={GALLERY_ITEMS[0]} />
          <GalleryCard item={GALLERY_ITEMS[1]} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-4 mb-4">
          <GalleryCard item={GALLERY_ITEMS[2]} />
          <GalleryCard item={GALLERY_ITEMS[3]} />
        </div>

        <div id="film" className="my-24">
          <div className="relative aspect-video rounded-lg overflow-hidden bg-ink/50">
            <video className="absolute inset-0 w-full h-full object-cover" poster={IMAGES.heroBg} controls={false} muted loop playsInline autoPlay />
            <div className="absolute inset-0 flex items-center justify-center bg-ink/40">
              <button className="w-20 h-20 rounded-full bg-paper/90 flex items-center justify-center hover:bg-paper transition-colors group" aria-label="Play brand film">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="ml-1">
                  <path d="M8 5.14v13.72a1 1 0 001.5.86l11.04-6.86a1 1 0 000-1.72L9.5 4.28a1 1 0 00-1.5.86z" fill="currentColor" className="text-ink" />
                </svg>
              </button>
            </div>
            <div className="absolute bottom-6 left-8">
              <span className="caption-style text-white/85">NBPKOREA BRAND FILM · 2024</span>
            </div>
          </div>
        </div>

        <div id="manifesto" className="my-24 grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20">
          <div>
            <span className="caption-style text-white/90 block mb-4">WHY WE DID THIS</span>
            <h2 className="font-display font-bold text-[clamp(2rem,4vw,3.5rem)] text-paper leading-[0.95] tracking-[-0.03em]">
              BECAUSE
              <br />
              MACHINES
              <br />
              DESERVE
              <br />
              MORE.
            </h2>
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-[clamp(1rem,1.3vw,1.2rem)] text-white/90 leading-[1.7] mb-6">
              For 14 years we built machines that disappeared into
              basements and rooftops. Invisible by design — that was
              the point. But one day we asked ourselves: does a
              machine that solves this many problems really deserve to
              stay hidden?
            </p>
            <p className="text-[clamp(1rem,1.3vw,1.2rem)] text-white/90 leading-[1.7] mb-8">
              So we wrapped one in graffiti. Shipped it to a gallery.
              And everyone who saw it understood something they
              hadn&apos;t before — that industrial engineering can be
              beautiful, that obsession has a face, that the thing we
              hide in your basement is worth putting on a pedestal.
            </p>
            <Link href="/en/contact" className="inline-block bg-paper text-ink px-5 py-2.5 text-xs font-bold tracking-[0.06em] uppercase hover:bg-ink hover:text-paper border-2 border-paper transition-all duration-200 rounded-lg self-start">
              TALK TO US
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
          <GalleryCard item={GALLERY_ITEMS[4]} />
          <GalleryCard item={GALLERY_ITEMS[5]} />
        </div>

        <div id="event" className="mt-24 text-center">
          <p className="font-heading font-semibold text-[clamp(1.5rem,3vw,2.5rem)] text-white/85 leading-[1.3] mb-4">
            Want to see the next exhibition?
          </p>
          <p className="text-[clamp(0.95rem,1.15vw,1.1rem)] text-white/80 mb-10">
            Drop us a line and we&apos;ll tell you when the next one opens.
          </p>
          <Link href="/en/contact" className="btn-pill bg-paper text-ink hover:bg-ink hover:text-paper border-2 border-paper transition-all duration-200 rounded-lg">
            GET NOTIFIED <span className="ml-2">&rarr;</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

function GalleryCard({ item }: { item: (typeof GALLERY_ITEMS)[number] }) {
  const isLarge = item.size === "large";
  return (
    <div className={`gallery-item group relative overflow-hidden rounded-lg opacity-0 ${isLarge ? "aspect-[16/10]" : "aspect-[4/5]"}`}>
      <div className="gallery-parallax absolute inset-0 -top-[10%] -bottom-[10%]">
        <Image src={item.image} alt={item.title} fill sizes={isLarge ? "(min-width: 1024px) 66vw, 100vw" : "(min-width: 1024px) 33vw, 100vw"} className="object-cover object-center transition-transform duration-700 group-hover:scale-105" />
      </div>
      <div className="absolute inset-0 bg-ink/30 group-hover:bg-ink/60 transition-colors duration-500" />
      <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-8">
        <span className="caption-style text-white/80 mb-2">{item.subtitle}</span>
        <h3 className="font-display font-bold text-[clamp(1.2rem,2.5vw,2rem)] text-paper leading-[1.1] tracking-[-0.02em] mb-3">
          {item.title}
        </h3>
        <p className="text-sm text-white/90 leading-[1.6] max-w-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          {item.description}
        </p>
      </div>
    </div>
  );
}
