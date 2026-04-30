"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import Link from "next/link";

type Lang = "ko" | "en";

export default function ClosingQuestion({ lang = "ko" }: { lang?: Lang }) {
  const isEn = lang === "en";
  const hrefPrefix = isEn ? "/en" : "";
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const lines = sectionRef.current?.querySelectorAll(".closing-line");
      if (lines) {
        lines.forEach((line, i) => {
          gsap.fromTo(
            line,
            { opacity: 0 },
            {
              opacity: 1,
              duration: 0.8,
              delay: i * 0.5,
              ease: "power2.out",
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 60%",
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
    <section
      ref={sectionRef}
      className="bg-ink min-h-[80vh] flex items-center justify-center"
    >
      <div className="container-content text-center py-32">
        {/* Main question */}
        <h2 className="closing-line font-display font-bold text-display-lg text-paper leading-[0.95] tracking-[-0.02em] opacity-0">
          READY FOR
        </h2>
        <h2 className="closing-line font-display font-bold text-display-lg text-paper leading-[0.95] tracking-[-0.02em] mt-2 opacity-0">
          YOUR NEXT SETUP?
        </h2>

        {/* Korean sub-question (KR only) */}
        {!isEn && (
          <p className="closing-line text-body-kr font-korean text-bone mt-10 opacity-0">
            매장 조건에 맞는 장비를 찾고 계신가요?
          </p>
        )}

        {/* CTA */}
        <div className="closing-line mt-14 opacity-0">
          <Link href={`${hrefPrefix}/contact`} className="btn-pill btn-pill-inverted">
            REQUEST A QUOTE <span className="ml-1">&rarr;</span>
          </Link>
          {!isEn && (
            <p className="text-body-kr font-korean text-bone/80 text-xs mt-3">
              견적 문의
            </p>
          )}
        </div>

        {/* Engineer contact */}
        <p className="closing-line caption-style text-paper/90 mt-10 opacity-0">
          {isEn ? "or talk to an engineer — +82-31-434-6566" : "or talk to an engineer — 031-434-6566"}
        </p>
        {!isEn && (
          <p className="text-xs font-korean text-paper/80 mt-1">
            또는 엔지니어와 직접 대화
          </p>
        )}
      </div>
    </section>
  );
}
