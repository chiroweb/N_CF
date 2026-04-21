"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import Link from "next/link";

export default function BrandHallGateway() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (imageRef.current) {
        gsap.fromTo(
          imageRef.current,
          { opacity: 0, scale: 1.05 },
          {
            opacity: 1,
            scale: 1,
            duration: 1.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: imageRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      if (copyRef.current) {
        gsap.fromTo(
          copyRef.current,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: 0.3,
            ease: "power2.out",
            scrollTrigger: {
              trigger: copyRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-paper section-spacing"
    >
      <div className="container-content">
        <div className="grid-layout items-start">
          {/* Image — 60% width centered */}
          <div className="col-span-12 lg:col-start-3 lg:col-end-11">
            <Link href="/brand-hall" className="block group">
              <div
                ref={imageRef}
                className="relative w-full aspect-[4/3] bg-bone overflow-hidden opacity-0 group-hover:brightness-[1.03] transition-[filter] duration-300"
              >
                {/* Chapter label */}
                <span className="absolute top-6 left-6 caption-style text-ink/80 z-10">
                  CHAPTER 02
                </span>

                {/* Placeholder */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="caption-style text-ink/40">
                    GRAFFITI AFTERBURNER — Teal version, raw warehouse
                  </span>
                </div>
              </div>
            </Link>

            {/* Copy alongside image */}
            <div
              ref={copyRef}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8 opacity-0"
            >
              <div>
                <h3 className="font-display font-bold text-heading-md text-ink mb-4">
                  THE OTHER SIDE
                </h3>
                <p className="text-body-en text-ink leading-relaxed">
                  In 2024, we wrapped one of our machines
                  in street art and shipped it to an exhibition.
                  No one bought it. We still don&apos;t regret it.
                </p>
                <p className="text-body-kr font-korean text-ink/70 mt-3 leading-[1.75]">
                  2024년, 우리는 애프터버너 한 대에 그래피티를 입혀
                  전시장으로 보냈다. 아무도 사지 않았다.
                  그래도 후회하지 않는다.
                </p>
              </div>
              <div className="flex items-end lg:justify-end">
                <Link
                  href="/brand-hall"
                  className="btn-pill btn-pill-primary text-xs"
                >
                  SEE THE BRAND HALL <span>&rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
