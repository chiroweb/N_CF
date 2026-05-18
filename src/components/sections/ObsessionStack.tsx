"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { IMAGES } from "@/lib/images";
import Image from "next/image";

type Lang = "ko" | "en";

const OBSESSIONS = [
  { id: 1, title: "THE DUCT FLANGE", bodyKo: "이중 실링. 가스켓 한 겹으로는 믿지 않습니다.", bodyEn: "Double-sealed. We don't trust a single gasket.", span: "col-span-1", img: IMAGES.obs01 },
  { id: 2, title: "THE COVER", bodyKo: "커스터마이징 가능. 당신의 기계가 남과 같아야 할 이유는 없습니다.", bodyEn: "Customizable. Your machine has no reason to look like anyone else's.", span: "col-span-1", img: IMAGES.obs02 },
  { id: 3, title: "THE SERVICE DOOR", bodyKo: "넓게 열립니다. 정비가 필요한 날이 좁은 공간과 씨름할 날이어서는 안 되니까요.", bodyEn: "Opens wide. Service day shouldn't double as a wrestling match with the cabinet.", span: "col-span-1 md:col-span-2", img: IMAGES.obs03 },
  { id: 4, title: "THE NOISE", bodyKo: "대부분의 로스터보다 조용합니다. 직접 측정했습니다.", bodyEn: "Quieter than most roasters. We measured it ourselves.", span: "col-span-1", img: IMAGES.obs01 },
  { id: 5, title: "THE FIRE", bodyKo: "Direct flame. 지름길 없음, 교체할 필터도 없음.", bodyEn: "Direct flame. No shortcuts, no filters to swap.", span: "col-span-1", img: IMAGES.obs02 },
  { id: 6, title: "THE CABLE GLAND", bodyKo: "올스텐처리 녹슮을 방지합니다.", bodyEn: "Cable entries are sealed. Some shops are below grade.", span: "col-span-1", img: IMAGES.obs03 },
  { id: 7, title: "THE LOGO STENCIL", bodyKo: "손으로 직접 컷. 1,200대 이상에 스텐실링 했습니다.", bodyEn: "Hand-cut by us. Stenciled onto more than 1,200 units.", span: "col-span-1 md:col-span-2", img: IMAGES.obs01 },
  { id: 8, title: "THE POWER SPIKE", bodyKo: "어떤 전압도 소화 가능한 세계적 머신.", bodyEn: "Absorbs voltage swings even a UPS would choke on.", span: "col-span-1", img: IMAGES.obs02 },
  { id: 9, title: "THE EXHAUST TEMP", bodyKo: "제연이 완벽히 되는 최소 온도를. 당신의 로스팅에 맞게", bodyEn: "Outlet temperature below 80°C. Continuously monitored.", span: "col-span-1", img: IMAGES.obs03 },
];

export default function ObsessionStack({ lang = "ko" }: { lang?: Lang }) {
  const isEn = lang === "en";
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
        <span className="caption-style text-ink/90 block mb-20">
          {isEn ? "OBSESSION STACK" : "OBSESSION STACK / 집착의 목록"}
        </span>

        {/* Asymmetric masonry grid — 4 columns, ~3 rows */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {OBSESSIONS.map((obs) => (
            <div
              key={obs.id}
              className={`obs-item ${obs.span} border border-bone p-6 rounded-lg opacity-0`}
            >
              {/* Detail photo */}
              <div className="relative w-full aspect-[4/3] bg-bone/50 mb-4 overflow-hidden rounded-lg">
                <Image
                  src={obs.img}
                  alt={obs.title}
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover object-center"
                />
              </div>

              {/* Caption number */}
              <span className="caption-style text-ink/80 block mb-2">
                OBS / {String(obs.id).padStart(2, "0")} / 09
              </span>

              {/* Title */}
              <h4 className="font-display font-bold text-sm text-ink tracking-tight mb-2">
                {obs.title}
              </h4>

              {/* Description */}
              <p className={`text-ink/85 leading-[1.65] ${isEn ? "text-sm" : "text-body-kr font-korean"}`}>
                {isEn ? obs.bodyEn : obs.bodyKo}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
