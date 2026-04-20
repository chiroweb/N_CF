"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import Link from "next/link";

const S3_STOCK = "https://chiro-web.s3.ap-northeast-2.amazonaws.com/fa/AFTERBUNNER/products";

type Post = {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  featured?: boolean;
};

const POSTS: Post[] = [
  {
    id: 1,
    title: "로스팅 프로파일의 과학: 첫 번째 크랙 이후의 선택",
    excerpt:
      "첫 번째 크랙 이후 로스팅 시간과 온도 변화가 커피 향미에 미치는 영향을 데이터로 분석합니다. NBP 로스터의 실시간 모니터링 시스템을 활용한 실험 결과를 공유합니다.",
    date: "2025.12.18",
    category: "기술 노트",
    image: `${S3_STOCK}/stock-roasting-1.jpg`,
    featured: true,
  },
  {
    id: 2,
    title: "도심 카페의 연기 문제, 촉매 산화로 해결하다",
    excerpt:
      "서울 도심 상권에서 로스터리 카페를 운영할 때 가장 큰 장벽인 연기 문제. NBP 애프터버너의 2단 연소 및 축열식 재연소 기술을 소개합니다.",
    date: "2025.11.04",
    category: "제품 리뷰",
    image: `${S3_STOCK}/stock-roasting-2.jpg`,
  },
  {
    id: 3,
    title: "견과류 메뉴가 카페 매출에 미치는 영향",
    excerpt:
      "NUTS-STAR 넛버터 머신을 도입한 10개 매장의 6개월 매출 데이터를 분석했습니다. 메뉴 확장이 객단가와 재방문율에 미친 실제 영향.",
    date: "2025.10.22",
    category: "인사이트",
    image: `${S3_STOCK}/stock-roasting-3.jpg`,
  },
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
      {/* ── Masthead ── */}
      <section className="container-content pt-24 lg:pt-32 pb-16 lg:pb-20">
        <div className="flex items-end justify-between gap-6 mb-10 lg:mb-16">
          <div>
            <span className="hero-fade caption-style text-ink/70 block mb-6 opacity-0">
              THE BLOG / 기록
            </span>
            <h1 className="hero-fade font-display font-bold text-[clamp(3rem,9vw,8rem)] text-ink leading-[0.88] tracking-[-0.04em] opacity-0">
              FIELD
              <br />
              NOTES.
            </h1>
          </div>
          <p className="hero-fade hidden md:block caption-style text-ink/70 text-right leading-relaxed max-w-[22ch] opacity-0">
            ENGINEERING, ROASTING,
            <br />
            AND THE STORIES BEHIND
            <br />
            EVERY MACHINE WE BUILD.
          </p>
        </div>
        <p className="hero-fade text-body-kr font-korean text-ink/80 leading-[1.75] max-w-2xl opacity-0">
          우리가 만드는 기계, 그 기계가 만나는 현장, 그리고 그 사이에서
          쌓이는 기록들. 로스팅과 엔지니어링의 경계에서 쓴 글들을 모았습니다.
        </p>
      </section>

      {/* ── Featured post ── */}
      {featured && (
        <section className="container-content pb-16 lg:pb-24">
          <Link
            href={`/blog/${featured.id}`}
            className="scroll-fade group grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-8 lg:gap-12 border-t-2 border-ink pt-6 opacity-0"
          >
            <div className="relative aspect-[16/10] rounded-lg overflow-hidden bg-bone">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${featured.image})` }}
              />
            </div>

            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-4">
                <span className="caption-style text-ink/80">
                  FEATURED · {featured.category}
                </span>
                <span className="caption-style text-ink/60">
                  {featured.date}
                </span>
              </div>
              <h2 className="font-display font-bold text-[clamp(1.75rem,3.4vw,2.75rem)] text-ink leading-[1.1] tracking-[-0.02em] mb-5 group-hover:underline underline-offset-4 decoration-2">
                {featured.title}
              </h2>
              <p className="text-body-kr font-korean text-ink/85 leading-[1.75]">
                {featured.excerpt}
              </p>
              <span className="caption-style text-ink mt-8 group-hover:underline underline-offset-4">
                READ THE PIECE &rarr;
              </span>
            </div>
          </Link>
        </section>
      )}

      {/* ── Rest of posts ── */}
      <section className="container-content pb-32">
        <div className="flex items-baseline justify-between border-t-2 border-ink pt-6 mb-10">
          <span className="caption-style text-ink/80">ALL ENTRIES</span>
          <span className="caption-style text-ink/60">
            {String(POSTS.length).padStart(2, "0")} POSTS
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
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${post.image})` }}
                />
              </div>

              <div className="flex items-center gap-4 mb-3">
                <span className="caption-style text-ink/80">
                  {post.category}
                </span>
                <span className="caption-style text-ink/60">{post.date}</span>
              </div>

              <h3 className="font-display font-bold text-[clamp(1.25rem,2.2vw,1.9rem)] text-ink leading-[1.15] tracking-[-0.02em] mb-3 group-hover:underline underline-offset-4 decoration-2">
                {post.title}
              </h3>

              <p className="text-body-kr font-korean text-ink/80 leading-[1.7]">
                {post.excerpt}
              </p>

              <span className="caption-style text-ink mt-6 group-hover:underline underline-offset-4">
                READ &rarr;
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Closing strip ── */}
      <section className="bg-ink py-20 lg:py-24">
        <div className="container-content flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <p className="font-heading font-semibold text-[clamp(1.4rem,2.6vw,2.25rem)] text-paper leading-[1.25] tracking-[-0.01em]">
              새 글을 받아보고 싶다면.
            </p>
            <p className="caption-style text-paper/75 mt-3">
              ENGINEERING NOTES DELIVERED OCCASIONALLY.
            </p>
          </div>
          <Link
            href="/contact"
            className="btn-pill bg-paper text-ink hover:bg-ink hover:text-paper border-2 border-paper transition-all duration-200 rounded-lg shrink-0"
          >
            SUBSCRIBE &rarr;
          </Link>
        </div>
      </section>
    </div>
  );
}
