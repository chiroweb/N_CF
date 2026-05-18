"use client";

import { useEffect, useMemo, useRef, useState } from "react";
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

const PAGE_SIZE = 10;

export default function BlogPage() {
  const pageRef = useRef<HTMLDivElement>(null);
  const entriesRef = useRef<HTMLDivElement>(null);
  const featured = useMemo(() => POSTS.find((p) => p.featured), []);
  const rest = useMemo(() => POSTS.filter((p) => !p.featured), []);

  const [page, setPage] = useState(1);
  const totalPages = Math.max(1, Math.ceil(rest.length / PAGE_SIZE));
  const pageItems = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return rest.slice(start, start + PAGE_SIZE);
  }, [rest, page]);

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

  useEffect(() => {
    const cards = entriesRef.current?.querySelectorAll<HTMLAnchorElement>(".entry-card");
    if (!cards || cards.length === 0) return;
    gsap.fromTo(
      cards,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: "power2.out" }
    );
  }, [page]);

  const goToPage = (n: number) => {
    if (n < 1 || n > totalPages) return;
    setPage(n);
    requestAnimationFrame(() => {
      entriesRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  return (
    <div ref={pageRef} className="bg-paper min-h-screen">
      <FloatingSectionNav sections={SECTIONS} />

      {/* ── Masthead ── */}
      <section id="overview" className="container-content pt-24 lg:pt-32 pb-16 lg:pb-20">
        <div className="flex items-end justify-between gap-6 mb-10 lg:mb-16">
          <div>
            <span className="hero-fade caption-style text-ink/90 block mb-6 opacity-0 font-korean">
              엔비피코리아 · 로스팅 노트
            </span>
            <h1 className="hero-fade font-display font-bold text-[clamp(3rem,9vw,8rem)] text-ink leading-[0.88] tracking-[-0.04em] opacity-0 font-korean">
              로스팅
              <br />
              노트.
            </h1>
          </div>
          <p className="hero-fade hidden md:block caption-style text-ink/90 text-right leading-relaxed max-w-[22ch] opacity-0 font-korean">
            로스팅 노하우, 직화식 제연기,
            <br />
            애프터버너, 덕트 시공,
            <br />
            로스팅 민원 대처법까지.
          </p>
        </div>
        <p className="hero-fade text-body-kr font-korean text-ink/80 leading-[1.75] max-w-2xl opacity-0">
          엔비피코리아가 현장에서 쌓은 로스팅 노하우 — 기본 운용부터 취향별 프로파일,
          직화식 제연기와 애프터버너 도입, 로스팅 민원 대응과 덕트 시공 주의사항까지.
          실제 로스터에게 도움이 되는 한 단계 더 깊은 인사이트를 모았습니다.
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
                alt={featured.imageAlt ?? featured.title}
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

      {/* ── Rest of posts (paginated) ── */}
      <section id="entries" ref={entriesRef} className="container-content pb-32 scroll-mt-24">
        <div className="flex items-baseline justify-between border-t-2 border-ink pt-6 mb-10">
          <span className="caption-style text-ink/80 font-korean">전체 글</span>
          <span className="caption-style text-ink/80 font-korean">
            총 {String(rest.length).padStart(2, "0")}편 · {page}/{totalPages} 페이지
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
          {pageItems.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.id}`}
              className="entry-card group flex flex-col opacity-0"
            >
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-bone mb-6">
                <Image
                  src={post.image}
                  alt={post.imageAlt ?? post.title}
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

              <h3 className="font-display font-bold text-[clamp(1.25rem,2.2vw,1.9rem)] text-ink leading-[1.15] tracking-[-0.02em] mb-3 group-hover:underline underline-offset-4 decoration-2 font-korean">
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

        {totalPages > 1 && (
          <nav
            className="mt-16 flex items-center justify-between border-t border-ink/20 pt-8"
            aria-label="페이지 이동"
          >
            <button
              type="button"
              onClick={() => goToPage(page - 1)}
              disabled={page === 1}
              className="caption-style text-ink font-korean disabled:opacity-30 disabled:cursor-not-allowed hover:underline underline-offset-4"
            >
              &larr; 이전 페이지
            </button>

            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                <button
                  key={n}
                  type="button"
                  onClick={() => goToPage(n)}
                  aria-current={page === n ? "page" : undefined}
                  className={
                    "w-9 h-9 rounded-full caption-style transition-colors " +
                    (page === n
                      ? "bg-ink text-paper"
                      : "border border-ink/30 text-ink hover:bg-ink hover:text-paper")
                  }
                >
                  {n}
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={() => goToPage(page + 1)}
              disabled={page === totalPages}
              className="caption-style text-ink font-korean disabled:opacity-30 disabled:cursor-not-allowed hover:underline underline-offset-4"
            >
              다음 페이지 &rarr;
            </button>
          </nav>
        )}
      </section>

      {/* ── Closing strip ── */}
      <section id="subscribe" className="bg-ink py-20 lg:py-24">
        <div className="container-content flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <p className="font-heading font-semibold text-[clamp(1.4rem,2.6vw,2.25rem)] text-paper leading-[1.3] tracking-[-0.01em] font-korean">
              새 로스팅 노트를 받아보고 싶다면.
            </p>
            <p className="caption-style text-paper/75 mt-3 font-korean">
              로스팅 노하우와 제연기 현장 기록을 가끔 보내드립니다.
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
