"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import FloatingSectionNav, { type NavSection } from "@/components/layout/FloatingSectionNav";
import Image from "next/image";
import Link from "next/link";
import { POSTS } from "@/lib/posts";

const SECTIONS: NavSection[] = [
  { id: "overview", label: "개요" },
  { id: "featured", label: "추천 글" },
  { id: "entries", label: "전체 글" },
  { id: "subscribe", label: "구독" },
];

export default function BlogPage() {
  const pageRef = useRef<HTMLDivElement>(null);
  const featured = POSTS.find((p) => p.featured);
  const rest = POSTS.filter((p) => !p.featured);

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

      {/* ── Masthead ── */}
      <section id="overview" className="container-content pt-24 lg:pt-32 pb-16 lg:pb-20">
        <div className="flex items-end justify-between gap-6 mb-10 lg:mb-16">
          <div>
            <span className="hero-fade caption-style text-ink/90 block mb-6 opacity-0 font-korean">
              필드 노트 · 현장 기록
            </span>
            <h1 className="hero-fade font-display font-bold text-[clamp(3rem,9vw,8rem)] text-ink leading-[0.88] tracking-[-0.04em] opacity-0 font-korean">
              현장에서
              <br />
              쓴 글.
            </h1>
          </div>
          <p className="hero-fade hidden md:block caption-style text-ink/90 text-right leading-relaxed max-w-[22ch] opacity-0 font-korean">
            제연기, 로스터리 장비,
            <br />
            카페 창업과
            <br />
            현장 설치 이야기.
          </p>
        </div>
        <p className="hero-fade text-body-kr font-korean text-ink/80 leading-[1.75] max-w-2xl opacity-0">
          직화식 애프터버너, 커피 로스터 제연기, 로스터리 장비, 카페 창업
          단계의 배기 설계, 그리고 피넛버터머신 운영까지. 현장에서 자주
          받는 질문을 검색과 상담에 도움이 되도록 정리했습니다.
        </p>
      </section>

      {/* ── Featured post ── */}
      {featured && (
        <section id="featured" className="container-content pb-16 lg:pb-24">
          <Link
            href={`/blog/${featured.id}`}
            className="scroll-fade group grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-8 lg:gap-12 border-t-2 border-ink pt-6 opacity-0"
          >
            <div className="relative aspect-[16/10] rounded-lg overflow-hidden bg-bone">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                priority
                sizes="(min-width: 1024px) 60vw, 100vw"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-4">
                <span className="caption-style text-ink/80 font-korean">
                  추천 · {featured.category}
                </span>
                <span className="caption-style text-ink/80">
                  {featured.date}
                </span>
              </div>
              <h2 className="font-display font-bold text-[clamp(1.75rem,3.4vw,2.75rem)] text-ink leading-[1.1] tracking-[-0.02em] mb-5 group-hover:underline underline-offset-4 decoration-2 font-korean">
                {featured.title}
              </h2>
              <p className="text-body-kr font-korean text-ink/85 leading-[1.75]">
                {featured.excerpt}
              </p>
              <span className="caption-style text-ink mt-8 group-hover:underline underline-offset-4 font-korean">
                글 읽기 &rarr;
              </span>
            </div>
          </Link>
        </section>
      )}

      {/* ── Rest of posts ── */}
      <section id="entries" className="container-content pb-32">
        <div className="flex items-baseline justify-between border-t-2 border-ink pt-6 mb-10">
          <span className="caption-style text-ink/80 font-korean">전체 글</span>
          <span className="caption-style text-ink/80 font-korean">
            총 {String(POSTS.length).padStart(2, "0")}편
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
          {rest.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.id}`}
              className="scroll-fade group flex flex-col opacity-0"
            >
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-bone mb-6">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(min-width: 768px) 40vw, 90vw"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="flex items-center gap-4 mb-3">
                <span className="caption-style text-ink/80">
                  {post.category}
                </span>
                <span className="caption-style text-ink/80">{post.date}</span>
              </div>

              <h3 className="font-display font-bold text-[clamp(1.25rem,2.2vw,1.9rem)] text-ink leading-[1.15] tracking-[-0.02em] mb-3 group-hover:underline underline-offset-4 decoration-2">
                {post.title}
              </h3>

              <p className="text-body-kr font-korean text-ink/80 leading-[1.7]">
                {post.excerpt}
              </p>

              <span className="caption-style text-ink mt-6 group-hover:underline underline-offset-4 font-korean">
                읽기 &rarr;
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Closing strip ── */}
      <section id="subscribe" className="bg-ink py-20 lg:py-24">
        <div className="container-content flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <p className="font-heading font-semibold text-[clamp(1.4rem,2.6vw,2.25rem)] text-paper leading-[1.3] tracking-[-0.01em] font-korean">
              새 글을 받아보고 싶다면.
            </p>
            <p className="caption-style text-paper/75 mt-3 font-korean">
              가끔씩 새로 쓴 현장 노트를 보내드립니다.
            </p>
          </div>
          <Link
            href="/contact"
            className="btn-pill bg-paper text-ink hover:bg-ink hover:text-paper border-2 border-paper transition-all duration-200 rounded-lg shrink-0 font-korean"
          >
            구독 신청 &rarr;
          </Link>
        </div>
      </section>
    </div>
  );
}
