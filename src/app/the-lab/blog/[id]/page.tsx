import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { LAB_POSTS, type LabBlock } from "@/lib/nutbutter";

type Props = { params: { id: string } };

const SITE_URL = "https://www.nbpcafe.com";

export function generateStaticParams() {
  return LAB_POSTS.map((p) => ({ id: p.id }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = LAB_POSTS.find((p) => p.id === params.id);
  if (!post) return {};
  const url = `${SITE_URL}/the-lab/blog/${post.id}`;
  const imageUrl = post.thumb.startsWith("http") ? post.thumb : `${SITE_URL}${post.thumb}`;
  return {
    title: `${post.title} | 넛츠스타 더 랩`,
    description: post.excerpt,
    keywords: post.keywords,
    alternates: { canonical: `/the-lab/blog/${post.id}` },
    openGraph: {
      type: "article",
      locale: "ko_KR",
      url,
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date.replace(/\./g, "-"),
      authors: ["엔비피코리아 NBPKOREA"],
      images: [{ url: imageUrl, alt: post.title }],
    },
  };
}

export default function LabBlogDetailPage({ params }: Props) {
  const post = LAB_POSTS.find((p) => p.id === params.id);
  if (!post) notFound();

  const others = LAB_POSTS.filter((p) => p.id !== post.id).slice(0, 2);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${SITE_URL}/the-lab/blog/${post.id}`,
    mainEntityOfPage: `${SITE_URL}/the-lab/blog/${post.id}`,
    headline: post.title,
    description: post.excerpt,
    articleSection: post.category,
    keywords: post.keywords.join(", "),
    image: {
      "@type": "ImageObject",
      url: post.thumb.startsWith("http") ? post.thumb : `${SITE_URL}${post.thumb}`,
    },
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
      { "@type": "ListItem", position: 2, name: "The Lab", item: `${SITE_URL}/the-lab` },
      { "@type": "ListItem", position: 3, name: "기록", item: `${SITE_URL}/the-lab/blog` },
      { "@type": "ListItem", position: 4, name: post.title, item: `${SITE_URL}/the-lab/blog/${post.id}` },
    ],
  };

  return (
    <div className="bg-paper min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <article className="container-content pt-24 lg:pt-32 pb-24 max-w-3xl">
        <Link
          href="/the-lab/blog"
          className="caption-style text-ink/90 hover:text-ink transition-colors inline-block mb-12 font-korean"
        >
          &larr; 더 랩 / 기록 목록으로
        </Link>

        <div className="flex items-center gap-3 mb-8 flex-wrap">
          <span className="caption-style text-ink/85 font-korean">{post.category}</span>
          <span className="caption-style text-ink/60">·</span>
          <span className="caption-style text-ink/85">{post.date}</span>
          <span className="caption-style text-ink/60">·</span>
          <span className="caption-style text-ink/85 font-korean">{post.readMinutes}분 분량</span>
        </div>

        <h1 className="font-display font-bold text-[clamp(2rem,6vw,4rem)] text-ink leading-[0.98] tracking-[-0.03em] font-korean">
          {post.title}
        </h1>

        <p className="text-body-kr font-korean text-ink/85 leading-[1.75] mt-8">
          {post.excerpt}
        </p>

        <div className="relative aspect-[16/9] rounded-lg overflow-hidden bg-bone mt-12 mb-12 border-2 border-ink">
          <Image
            src={post.thumb}
            alt={post.title}
            fill
            priority
            sizes="(min-width: 768px) 720px, 100vw"
            className="object-cover object-center"
          />
        </div>

        <div>
          {post.body.map((block, i) => (
            <LabBlockView key={i} block={block} />
          ))}
        </div>

        {/* 본문 내 전환 링크 — 레시피로 자연 연결 */}
        <p className="text-body-kr font-korean text-ink/85 leading-[1.75] mt-10">
          메뉴를 바로 만들어 보고 싶다면{" "}
          <Link href="/the-lab/recipes" className="underline underline-offset-4 decoration-2 hover:text-ink">
            수제 땅콩버터·카페 스프레드 레시피
          </Link>
          에서 재료와 단계를 확인하세요.
        </p>
      </article>

      {/* 다른 기록 */}
      {others.length > 0 && (
        <section className="container-content pb-20 max-w-5xl">
          <div className="border-t-2 border-ink pt-6 mb-8">
            <span className="caption-style text-ink/80 font-korean">다른 기록</span>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            {others.map((p) => (
              <li key={p.id}>
                <Link href={`/the-lab/blog/${p.id}`} className="group block">
                  <div className="relative aspect-[16/10] rounded-md overflow-hidden bg-bone mb-4">
                    <Image
                      src={p.thumb}
                      alt={p.title}
                      fill
                      sizes="(min-width: 640px) 50vw, 100vw"
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <span className="caption-style text-ink/75 font-korean">{p.category}</span>
                  <h3 className="font-display font-bold text-[clamp(1.05rem,1.6vw,1.35rem)] text-ink leading-[1.25] tracking-[-0.02em] mt-2 group-hover:underline underline-offset-4 decoration-2 font-korean line-clamp-2">
                    {p.title}
                  </h3>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* 전환 CTA */}
      <section className="bg-ink py-20 lg:py-24">
        <div className="container-content flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="max-w-2xl">
            <p className="font-heading font-semibold text-[clamp(1.4rem,2.6vw,2.25rem)] text-paper leading-[1.25] tracking-[-0.01em] font-korean">
              우리 매장에 더해 볼까요.
            </p>
            <p className="caption-style text-paper/75 mt-3 font-korean">
              갓 간 땅콩버터로 카페 시그니처 메뉴와 추가 매출을. 넛버터머신 넛츠스타 도입·견적 상담을 받아보세요.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <Link
              href="/contact"
              className="btn-pill bg-paper text-ink hover:bg-bone border-2 border-paper transition-all duration-200 rounded-lg font-korean"
            >
              도입 · 견적 문의 &rarr;
            </Link>
            <Link
              href="/the-lab"
              className="btn-pill bg-transparent text-paper hover:bg-paper hover:text-ink border-2 border-paper transition-all duration-200 rounded-lg font-korean"
            >
              머신 보기
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function LabBlockView({ block }: { block: LabBlock }) {
  switch (block.type) {
    case "h2":
      return (
        <h2 className="font-display font-bold text-[clamp(1.4rem,2.6vw,2rem)] text-ink leading-[1.15] tracking-[-0.02em] mt-14 mb-5 font-korean">
          {block.text}
        </h2>
      );
    case "quote":
      return (
        <blockquote className="my-12 pl-6 border-l-2 border-ink">
          <p className="font-display text-[clamp(1.2rem,2vw,1.6rem)] text-ink italic leading-[1.4] tracking-[-0.01em] font-korean">
            &ldquo;{block.text}&rdquo;
          </p>
        </blockquote>
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
