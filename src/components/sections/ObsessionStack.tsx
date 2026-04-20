"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { IMAGES } from "@/lib/images";

const OBSESSIONS = [
  { id: 1, title: "THE DUCT FLANGE", en: "Sealed twice. We don't trust a single gasket.", span: "col-span-1", img: IMAGES.obs01 },
  { id: 2, title: "THE COVER", en: "Customizable. Your machine doesn't have to look like everyone else's.", span: "col-span-1", img: IMAGES.obs02 },
  { id: 3, title: "THE SERVICE DOOR", en: "Opens wide. Because the day it needs service is not the day for tight spaces.", span: "col-span-1 md:col-span-2", img: IMAGES.obs03 },
  { id: 4, title: "THE NOISE", en: "Quieter than most roasters. We measured.", span: "col-span-1", img: IMAGES.obs01 },
  { id: 5, title: "THE FIRE", en: "Direct flame. No shortcuts. No filters to replace.", span: "col-span-1", img: IMAGES.obs02 },
  { id: 6, title: "THE CABLE GLAND", en: "Waterproof at the cable entry. Because basements exist.", span: "col-span-1", img: IMAGES.obs03 },
  { id: 7, title: "THE LOGO STENCIL", en: "Hand-cut. We've stenciled 1,200+ machines.", span: "col-span-1 md:col-span-2", img: IMAGES.obs01 },
  { id: 8, title: "THE POWER SPIKE", en: "Handles grid fluctuations your UPS can't.", span: "col-span-1", img: IMAGES.obs02 },
  { id: 9, title: "THE EXHAUST TEMP", en: "Below 80°C at outlet. Measured continuously.", span: "col-span-1", img: IMAGES.obs03 },
];

export default function ObsessionStack() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = sectionRef.current?.querySelectorAll(".obs-item");
      if (items) {
        items.forEach((item, i) => {
          gsap.fromTo(
            item,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              delay: i * 0.08,
              ease: "power2.out",
              scrollTrigger: {
                trigger: item,
                start: "top 90%",
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
    <section ref={sectionRef} className="bg-paper section-spacing">
      <div className="container-content">
        <span className="caption-style text-ink/70 block mb-20">
          OBSESSION STACK / 집착의 목록
        </span>

        {/* Asymmetric masonry grid — 4 columns, ~3 rows */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {OBSESSIONS.map((obs) => (
            <div
              key={obs.id}
              className={`obs-item ${obs.span} border border-bone p-6 rounded-lg opacity-0`}
            >
              {/* Detail photo */}
              <div className="w-full aspect-[4/3] bg-bone/50 mb-4 overflow-hidden rounded-lg">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${obs.img})` }}
                />
              </div>

              {/* Caption number */}
              <span className="caption-style text-ink/60 block mb-2">
                OBS / {String(obs.id).padStart(2, "0")} / 09
              </span>

              {/* Title */}
              <h4 className="font-body font-medium text-sm text-ink mb-2">
                {obs.title}
              </h4>

              {/* Description */}
              <p className="text-xs text-ink/90 leading-relaxed">{obs.en}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
