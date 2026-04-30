"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { IMAGES } from "@/lib/images";
import Image from "next/image";

type Lang = "ko" | "en";

const OBSESSIONS = [
  { id: 1, title: "THE DUCT FLANGE", bodyKo: "이중 실링 구조로 배기 연결부를 더 안정적으로 잡아줍니다.", bodyEn: "A double-sealed flange keeps the exhaust connection more stable.", span: "col-span-1", img: IMAGES.obsessionSilling },
  { id: 2, title: "THE COVER", bodyKo: "매장 분위기에 맞춰 컬러와 마감을 조정할 수 있습니다.", bodyEn: "Color and finish can be adjusted to suit the atmosphere of your space.", span: "col-span-1", img: IMAGES.obsessionCostom },
  { id: 3, title: "THE SERVICE DOOR", bodyKo: "정비 도어가 넓게 열려 내부 점검과 청소가 수월합니다.", bodyEn: "The wide service door makes inspection and cleaning easier.", span: "col-span-1 md:col-span-2", img: IMAGES.obsessionEasyfix },
  { id: 4, title: "THE NOISE", bodyKo: "대부분의 로스터보다 조용합니다. 직접 측정했습니다.", bodyEn: "Quieter than most roasters. We measured it ourselves.", span: "col-span-1", img: IMAGES.obsessionSilence },
  { id: 5, title: "THE FIRE", bodyKo: "직화 연소 방식으로 필터 교체 없이 연기와 냄새를 처리합니다.", bodyEn: "Direct-flame combustion handles smoke and odor without filter replacement.", span: "col-span-1", img: IMAGES.obsessionDeirect },
  { id: 6, title: "THE CABLE GLAND", bodyKo: "케이블 진입부 방수 처리. 지하 매장도 있으니까요.", bodyEn: "Cable entries are sealed. Some shops are below grade.", span: "col-span-1", img: IMAGES.obsessionElec },
  { id: 7, title: "THE LOGO STENCIL", bodyKo: "손으로 직접 컷. 1,200대 이상에 스텐실링 했습니다.", bodyEn: "Hand-cut by us. Stenciled onto more than 1,200 units.", span: "col-span-1 md:col-span-2", img: IMAGES.obsessionHandmade },
  { id: 8, title: "THE POWER SPIKE", bodyKo: "전압 변동이 있는 현장에서도 안정적으로 운전하도록 설계했습니다.", bodyEn: "Designed for stable operation even where voltage fluctuation is present.", span: "col-span-1", img: IMAGES.obsessionStan },
  { id: 9, title: "THE EXHAUST TEMP", bodyKo: "배출구 온도 80°C 이하. 상시 측정합니다.", bodyEn: "Outlet temperature below 80°C. Continuously monitored.", span: "col-span-1", img: IMAGES.obsessionMintemp },
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
          {isEn ? "DETAIL STACK" : "DETAIL STACK / 디테일 체크리스트"}
        </span>

        {/* Asymmetric masonry grid — 4 columns, ~3 rows */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {OBSESSIONS.map((obs) => (
            <div
              key={obs.id}
              className={`obs-item ${obs.span} border border-bone p-4 md:p-5 rounded-lg opacity-0`}
            >
              {/* Detail photo */}
              <div className="relative w-full aspect-[4/3] bg-bone/50 mb-4 overflow-hidden rounded-lg">
                <Image
                  src={obs.img}
                  alt={obs.title}
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="scale-[1.04] object-cover object-center"
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
