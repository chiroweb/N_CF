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
  {
    id: 1,
    title: "GRAFFITI EDITION",
    subtitle: "2024 Exhibition",
    description: "Street art meets industrial engineering. One machine, wrapped in color, shipped to a gallery.",
    descriptionKr: "스트릿 아트와 산업 엔지니어링의 만남. 한 대의 기계에 색을 입혀 갤러리로 보냈다.",
    image: IMAGES.missionLeft,
    size: "large",
  },
  {
    id: 2,
    title: "THE WORKSHOP",
    subtitle: "Where it begins",
    description: "Every unit starts here. Hands, fire, steel.",
    descriptionKr: "모든 유닛은 여기서 시작된다. 손, 불, 강철.",
    image: IMAGES.obs02,
    size: "small",
  },
  {
    id: 3,
    title: "GOLDEN HOUR",
    subtitle: "Roastery mornings",
    description: "The light hits different when you know nobody can smell you roasting.",
    descriptionKr: "아무도 로스팅 냄새를 못 맡는다는 걸 알 때, 빛은 다르게 느껴진다.",
    image: IMAGES.missionRight,
    size: "medium",
  },
  {
    id: 4,
    title: "THE NEIGHBORHOOD",
    subtitle: "Seoul, dusk",
    description: "A roastery in a residential block. The child on the bicycle never complained.",
    descriptionKr: "주거 단지 안의 로스터리. 자전거 탄 아이는 한 번도 항의하지 않았다.",
    image: IMAGES.installationPhoto,
    size: "large",
  },
  {
    id: 5,
    title: "CRAFT & BEANS",
    subtitle: "The raw material",
    description: "Before the machine, there's the hand. Before the hand, there's the bean.",
    descriptionKr: "기계 이전에 손이 있다. 손 이전에 원두가 있다.",
    image: IMAGES.obs01,
    size: "small",
  },
  {
    id: 6,
    title: "AFTERBURNER UNIT",
    subtitle: "Studio portrait",
    description: "14 years of refinement in one frame.",
    descriptionKr: "14년의 개선을 한 프레임에.",
    image: IMAGES.heroBg,
    size: "medium",
  },
];

export default function BrandHallPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero text animation
      const heroLines = pageRef.current?.querySelectorAll(".hero-line");
      if (heroLines) {
        gsap.fromTo(
          heroLines,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "power3.out" }
        );
      }

      // Gallery items stagger
      const items = pageRef.current?.querySelectorAll(".gallery-item");
      if (items) {
        items.forEach((item) => {
          gsap.fromTo(
            item,
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
              ease: "power2.out",
              scrollTrigger: {
                trigger: item,
                start: "top 85%",
                toggleActions: "play none none none",
              },
            }
          );
        });
      }

      // Parallax on gallery images
      const parallaxImgs = pageRef.current?.querySelectorAll(".gallery-parallax");
      if (parallaxImgs) {
        parallaxImgs.forEach((img) => {
          gsap.to(img, {
            yPercent: -10,
            ease: "none",
            scrollTrigger: {
              trigger: img.parentElement,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.5,
            },
          });
        });
      }
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef} className="bg-ink min-h-screen">
      <FloatingSectionNav sections={SECTIONS} />

      {/* ── Hero ── */}
      <div id="overview" className="relative h-[80vh] flex flex-col justify-end container-content pb-16">
        <span className="hero-line caption-style text-white/90 block mb-6 opacity-0">
          BRAND HALL / 브랜드 전시
        </span>
        <h1 className="hero-line font-display font-bold text-[clamp(3rem,10vw,9rem)] text-paper leading-[0.85] tracking-[-0.04em] opacity-0">
          THE OTHER
        </h1>
        <h1 className="hero-line font-display font-bold text-[clamp(3rem,10vw,9rem)] text-paper leading-[0.85] tracking-[-0.04em] opacity-0">
          SIDE
        </h1>
        <p className="hero-line text-body-kr font-korean text-white/90 mt-8 max-w-md opacity-0">
          우리는 기계를 만든다. 하지만 가끔, 기계가 예술이 되는 순간이 있다.
          이곳은 그 순간들을 모아둔 공간이다.
        </p>
      </div>

      {/* ── Gallery Grid — asymmetric editorial ── */}
      <div id="gallery" className="container-content pb-32">
        {/* Row 1: large left + small right */}
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-4 mb-4">
          <GalleryCard item={GALLERY_ITEMS[0]} />
          <GalleryCard item={GALLERY_ITEMS[1]} />
        </div>

        {/* Row 2: small left + large right */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-4 mb-4">
          <GalleryCard item={GALLERY_ITEMS[2]} />
          <GalleryCard item={GALLERY_ITEMS[3]} />
        </div>

        {/* ── Video Section ── */}
        <div id="film" className="my-24">
          <div className="relative aspect-video rounded-lg overflow-hidden bg-ink/50">
            {/* Replace src with actual video URL */}
            <video
              className="absolute inset-0 w-full h-full object-cover"
              poster={IMAGES.heroBg}
              controls={false}
              muted
              loop
              playsInline
              autoPlay
            >
              {/* <source src="VIDEO_URL_HERE" type="video/mp4" /> */}
            </video>
            {/* Play button overlay — shown when no video source */}
            <div className="absolute inset-0 flex items-center justify-center bg-ink/40">
              <button className="w-20 h-20 rounded-full bg-paper/90 flex items-center justify-center hover:bg-paper transition-colors group">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="ml-1">
                  <path d="M8 5.14v13.72a1 1 0 001.5.86l11.04-6.86a1 1 0 000-1.72L9.5 4.28a1 1 0 00-1.5.86z" fill="currentColor" className="text-ink" />
                </svg>
              </button>
            </div>
            {/* Video caption */}
            <div className="absolute bottom-6 left-8">
              <span className="caption-style text-white/85">
                NBPKOREA BRAND FILM / 2024
              </span>
            </div>
          </div>
        </div>

        {/* ── Manifesto — Why we did this ── */}
        <div id="manifesto" className="my-24 grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20">
          {/* Left — title */}
          <div>
            <span className="caption-style text-white/90 block mb-4">
              WHY WE DID THIS
            </span>
            <h2 className="font-display font-bold text-[clamp(2rem,4vw,3.5rem)] text-paper leading-[0.95] tracking-[-0.03em]">
              BECAUSE
              <br />
              MACHINES
              <br />
              DESERVE
              <br />
              MORE
            </h2>
          </div>

          {/* Right — body text */}
          <div className="flex flex-col justify-center">
            <p className="text-[clamp(1rem,1.3vw,1.2rem)] text-white/90 leading-[1.7] mb-6">
              For 14 years, we built machines that disappeared into basements
              and rooftops. Invisible by design. That was the point — no one
              should know you&apos;re roasting. But one day we asked ourselves:
              does a machine that solves this many problems deserve to be hidden?
            </p>
            <p className="text-[clamp(1rem,1.3vw,1.2rem)] text-white/90 leading-[1.7] mb-8">
              So we wrapped one in graffiti. Shipped it to a gallery.
              And everyone who saw it understood something
              they hadn&apos;t before — that industrial engineering can be beautiful.
              That obsession has a face. That the thing we hide in your basement
              is worth putting on a pedestal.
            </p>
            <p className="text-body-kr font-korean text-white/90 leading-[1.75] mb-8">
              14년간 우리는 지하실과 옥상에서 사라지는 기계를 만들어왔다.
              보이지 않는 것이 목적이었다. 하지만 어느 날 스스로에게 물었다 —
              이 많은 문제를 해결하는 기계가 숨겨져야만 하는가?
              <br /><br />
              그래서 한 대에 그래피티를 입혀 갤러리로 보냈다.
              그리고 본 사람들은 모두 이해했다 —
              산업 엔지니어링도 아름다울 수 있다는 것을.
              집착에는 얼굴이 있다는 것을.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-paper text-ink px-5 py-2.5 text-xs font-bold tracking-[0.06em] uppercase hover:bg-ink hover:text-paper border-2 border-paper transition-all duration-200 rounded-lg self-start"
            >
              TALK TO US
            </Link>
          </div>
        </div>

        {/* Row 3: two equal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
          <GalleryCard item={GALLERY_ITEMS[4]} />
          <GalleryCard item={GALLERY_ITEMS[5]} />
        </div>

        {/* Event CTA */}
        <div id="event" className="mt-24 text-center">
          <p className="font-heading font-semibold text-[clamp(1.5rem,3vw,2.5rem)] text-white/85 leading-[1.3] mb-4">
            Want to see the next exhibition?
          </p>
          <p className="text-body-kr font-korean text-white/80 mb-10">
            다음 전시를 보고 싶다면
          </p>
          <Link
            href="/contact"
            className="btn-pill bg-paper text-ink hover:bg-ink hover:text-paper border-2 border-paper transition-all duration-200 rounded-lg"
          >
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
      {/* Image with parallax */}
      <div className="gallery-parallax absolute inset-0 -top-[10%] -bottom-[10%]">
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes={isLarge ? "(min-width: 1024px) 66vw, 100vw" : "(min-width: 1024px) 33vw, 100vw"}
          className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      {/* Dark overlay — stronger on hover */}
      <div className="absolute inset-0 bg-ink/30 group-hover:bg-ink/60 transition-colors duration-500" />

      {/* Content — appears more on hover */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-8">
        <span className="caption-style text-white/80 mb-2">
          {item.subtitle}
        </span>
        <h3 className="font-display font-bold text-[clamp(1.2rem,2.5vw,2rem)] text-paper leading-[1.05] tracking-[-0.02em] mb-3">
          {item.title}
        </h3>
        <p className="text-sm text-white/90 leading-relaxed max-w-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          {item.description}
        </p>
        <p className="text-xs font-korean text-white/90 mt-2 max-w-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          {item.descriptionKr}
        </p>
      </div>
    </div>
  );
}
