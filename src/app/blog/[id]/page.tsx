import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getPost, listPostIds, POSTS, type Block } from "@/lib/posts";
import { listPostIdsEn } from "@/lib/posts-en";

const SITE_URL = "https://www.nbpcafe.com";
const EN_POST_IDS = new Set(listPostIdsEn());

export function generateStaticParams() {
  return listPostIds().map((id) => ({ id }));
}

export function generateMetadata({ params }: { params: { id: string } }): Metadata {
  const post = getPost(params.id);
  if (!post) return { title: "Not Found" };
  const url = `${SITE_URL}/blog/${post.id}`;
  const imageUrl = post.image.startsWith("http") ? post.image : `${SITE_URL}${post.image}`;
  const hasEn = EN_POST_IDS.has(String(post.id));
  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${post.id}`,
      languages: hasEn
        ? {
            "ko-KR": `/blog/${post.id}`,
            en: `/en/blog/${post.id}`,
            "x-default": `/blog/${post.id}`,
          }
        : { "ko-KR": `/blog/${post.id}`, "x-default": `/blog/${post.id}` },
    },
    openGraph: {
      type: "article",
      locale: "ko_KR",
      url,
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date.replace(/\./g, "-"),
      authors: ["엔비피코리아 NBPKOREA"],
      images: [{ url: imageUrl, alt: post.imageAlt ?? post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [imageUrl],
    },
  };
}

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const post = getPost(params.id);
  if (!post) notFound();

  const idx = POSTS.findIndex((p) => p.id === post.id);
  const prev = idx > 0 ? POSTS[idx - 1] : null;
  const next = idx < POSTS.length - 1 ? POSTS[idx + 1] : null;

  // 관련 글 — 같은 카테고리 우선, 부족하면 인접 글로 채워 항상 3편 확보.
  // 모든 글이 서로 내부링크로 연결되어 크롤링·색인과 체류시간을 끌어올린다.
  const related = (() => {
    const pool = POSTS.filter((p) => p.id !== post.id && p.category === post.category);
    if (pool.length < 3) {
      for (const p of POSTS) {
        if (p.id !== post.id && !pool.some((x) => x.id === p.id)) pool.push(p);
        if (pool.length >= 3) break;
      }
    }
    return pool.slice(0, 3);
  })();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${SITE_URL}/blog/${post.id}`,
    mainEntityOfPage: `${SITE_URL}/blog/${post.id}`,
    headline: post.title,
    description: post.excerpt,
    articleSection: post.category,
    image: { "@type": "ImageObject", url: post.image.startsWith("http") ? post.image : `${SITE_URL}${post.image}` },
    datePublished: post.date.replace(/\./g, "-"),
    dateModified: post.date.replace(/\./g, "-"),
    author: { "@id": `${SITE_URL}/#organization` },
    publisher: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "ko-KR",
    timeRequired: `PT${post.readMinutes}M`,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Field Notes", item: `${SITE_URL}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: `${SITE_URL}/blog/${post.id}` },
    ],
  };

  return (
    <article className="bg-paper min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      {/* Top strip */}
      <div className="container-content pt-24 lg:pt-32 pb-8">
        <Link
          href="/blog"
          className="caption-style text-ink/90 hover:text-ink transition-colors inline-block mb-12"
        >
          &larr; 필드 노트 목록으로
        </Link>

        <div className="flex items-center gap-4 mb-8 flex-wrap">
          <span className="caption-style text-ink/85">{post.category}</span>
          <span className="caption-style text-ink/70">·</span>
          <span className="caption-style text-ink/85">{post.date}</span>
          <span className="caption-style text-ink/70">·</span>
          <span className="caption-style text-ink/85">
            {post.readMinutes}분 분량
          </span>
        </div>

        <h1 className="font-display font-bold text-[clamp(2.25rem,6vw,5rem)] text-ink leading-[0.95] tracking-[-0.03em] max-w-4xl">
          {post.title}
        </h1>

        <p className="text-body-kr font-korean text-ink/85 leading-[1.75] mt-8 max-w-2xl">
          {post.excerpt}
        </p>
      </div>

      {/* Cover */}
      <div className="container-content pb-14 lg:pb-20">
        <div className="relative aspect-[16/9] rounded-lg overflow-hidden bg-bone">
          <Image
            src={post.image}
            alt={post.imageAlt ?? post.title}
            fill
            priority
            sizes="(min-width: 1280px) 1200px, 100vw"
            className="object-cover object-center"
          />
        </div>
      </div>

      {/* Body */}
      <div className="container-content pb-24">
        <div className="max-w-[42rem] mx-auto">
          {post.body.map((block, i) => (
            <BodyBlock key={i} block={block} />
          ))}
        </div>
      </div>

      {/* Related posts */}
      {related.length > 0 && (
        <section className="container-content pb-20">
          <div className="border-t-2 border-ink pt-6 mb-8">
            <span className="caption-style text-ink/80 font-korean">관련 글</span>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {related.map((r) => (
              <li key={r.id}>
                <Link href={`/blog/${r.id}`} className="group block">
                  <div className="relative aspect-[16/10] rounded-md overflow-hidden bg-bone mb-4">
                    <Image
                      src={r.image}
                      alt={r.imageAlt ?? r.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <span className="caption-style text-ink/75 font-korean">{r.category}</span>
                  <h3 className="font-display font-bold text-[clamp(1.05rem,1.6vw,1.35rem)] text-ink leading-[1.25] tracking-[-0.02em] mt-2 group-hover:underline underline-offset-4 decoration-2 font-korean line-clamp-2">
                    {r.title}
                  </h3>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Related products — 두 제품군으로 유입을 분산해 문의 전환·교차 발견을 만든다 */}
      <section className="container-content pb-20">
        <div className="border-t-2 border-ink pt-6 mb-8">
          <span className="caption-style text-ink/80 font-korean">관련 제품</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-ink/15 border-2 border-ink">
          <Link href="/afterburner" className="group bg-paper p-7 lg:p-9 block">
            <span className="caption-style text-ink/70 font-korean">제연기 · 후연 제거</span>
            <p className="font-display font-bold text-[clamp(1.25rem,2.2vw,1.7rem)] text-ink leading-[1.2] tracking-[-0.02em] mt-2 group-hover:underline underline-offset-4 decoration-2 font-korean">
              직화식 애프터버너 NK 시리즈 &rarr;
            </p>
            <p className="text-body-kr font-korean text-ink/75 leading-[1.6] mt-3">
              로스팅 연기·냄새 99.2% 제거. 도심 로스터리 민원 대응.
            </p>
          </Link>
          <Link href="/the-lab" className="group bg-paper p-7 lg:p-9 block">
            <span className="caption-style text-ink/70 font-korean">땅콩버터머신 · 카페 신메뉴</span>
            <p className="font-display font-bold text-[clamp(1.25rem,2.2vw,1.7rem)] text-ink leading-[1.2] tracking-[-0.02em] mt-2 group-hover:underline underline-offset-4 decoration-2 font-korean">
              넛버터머신 넛츠스타 &rarr;
            </p>
            <p className="text-body-kr font-korean text-ink/75 leading-[1.6] mt-3">
              갓 간 땅콩버터로 카페 시그니처 메뉴와 추가 매출.
            </p>
          </Link>
        </div>
      </section>

      {/* Between-post nav */}
      <div className="bg-bone border-t border-ink/15">
        <div className="container-content py-14 grid grid-cols-1 md:grid-cols-2 gap-10">
          {prev ? (
            <Link
              href={`/blog/${prev.id}`}
              className="group block"
              aria-label={`Previous post: ${prev.title}`}
            >
              <span className="caption-style text-ink/80 block mb-3">
                &larr; 이전 글
              </span>
              <p className="font-display font-bold text-[clamp(1.2rem,2vw,1.6rem)] text-ink leading-[1.2] tracking-[-0.02em] group-hover:underline underline-offset-4 decoration-2">
                {prev.title}
              </p>
            </Link>
          ) : (
            <div aria-hidden />
          )}
          {next ? (
            <Link
              href={`/blog/${next.id}`}
              className="group block md:text-right"
              aria-label={`Next post: ${next.title}`}
            >
              <span className="caption-style text-ink/80 block mb-3">
                다음 글 &rarr;
              </span>
              <p className="font-display font-bold text-[clamp(1.2rem,2vw,1.6rem)] text-ink leading-[1.2] tracking-[-0.02em] group-hover:underline underline-offset-4 decoration-2">
                {next.title}
              </p>
            </Link>
          ) : (
            <div aria-hidden />
          )}
        </div>
      </div>

      {/* Closing CTA */}
      <section className="bg-ink py-20 lg:py-24">
        <div className="container-content flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <p className="font-heading font-semibold text-[clamp(1.4rem,2.6vw,2.25rem)] text-paper leading-[1.25] tracking-[-0.01em]">
              이 글이 도움이 되었다면.
            </p>
            <p className="caption-style text-paper/75 mt-3">
당신의 로스터리에 대해 들려주세요.
            </p>
          </div>
          <Link
            href="/contact"
            className="btn-pill bg-paper text-ink hover:bg-ink hover:text-paper border-2 border-paper transition-all duration-200 rounded-lg shrink-0"
          >
문의하기 &rarr;
          </Link>
        </div>
      </section>
    </article>
  );
}

function BodyBlock({ block }: { block: Block }) {
  switch (block.type) {
    case "h2":
      return (
        <h2 className="font-display font-bold text-[clamp(1.5rem,2.6vw,2rem)] text-ink leading-[1.15] tracking-[-0.02em] mt-14 mb-5">
          {block.text}
        </h2>
      );
    case "quote":
      return (
        <blockquote className="my-12 pl-6 border-l-2 border-ink">
          <p className="font-display text-[clamp(1.2rem,2vw,1.6rem)] text-ink italic leading-[1.4] tracking-[-0.01em]">
            &ldquo;{block.text}&rdquo;
          </p>
        </blockquote>
      );
    case "caption":
      return (
        <p className="caption-style text-ink/75 my-4">{block.text}</p>
      );
    case "p":
    default:
      return (
        <p className="text-body-kr font-korean text-ink/90 leading-[1.85] mb-6">
          {block.text}
        </p>
      );
  }
}
