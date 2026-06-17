import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { LAB_POSTS } from "@/lib/nutbutter";

const SITE_URL = "https://www.nbpcafe.com";

export const metadata: Metadata = {
  title: "카페 메뉴·매출 기록 — 넛버터머신 넛츠스타 더 랩",
  description:
    "갓 간 땅콩버터로 카페 추가매출을 만드는 메뉴 노트와 도입 운영 기록. 토스트·라떼·소분 판매 구성, 도입 두 달의 변화, 넛버터머신 사양 해설까지 카페 사장에게 필요한 인사이트를 모았습니다.",
  keywords: [
    "카페 추가매출",
    "카페 신메뉴",
    "땅콩버터 메뉴",
    "수제 땅콩버터",
    "카페 시그니처 메뉴",
    "넛버터머신",
    "땅콩버터머신",
    "카페 창업 아이템",
  ],
  alternates: { canonical: "/the-lab/blog" },
  openGraph: {
    title: "카페 메뉴·매출 기록 — 넛버터머신 넛츠스타 더 랩",
    description:
      "갓 간 땅콩버터로 카페 추가매출을 만드는 메뉴 노트와 도입 운영 기록.",
    url: `${SITE_URL}/the-lab/blog`,
    type: "website",
    locale: "ko_KR",
  },
};

const blogJsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "@id": `${SITE_URL}/the-lab/blog#blog`,
  url: `${SITE_URL}/the-lab/blog`,
  name: "넛츠스타 더 랩 — 카페 메뉴·매출 기록",
  description:
    "갓 간 땅콩버터로 카페 추가매출을 만드는 메뉴 노트·도입 운영 기록·사양 해설.",
  inLanguage: "ko-KR",
  publisher: { "@id": `${SITE_URL}/#organization` },
  blogPost: LAB_POSTS.map((p) => ({
    "@type": "BlogPosting",
    "@id": `${SITE_URL}/the-lab/blog/${p.id}`,
    headline: p.title,
    description: p.excerpt,
    datePublished: p.date.replace(/\./g, "-"),
    author: { "@id": `${SITE_URL}/#organization` },
    url: `${SITE_URL}/the-lab/blog/${p.id}`,
    image: p.thumb.startsWith("http") ? p.thumb : `${SITE_URL}${p.thumb}`,
  })),
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "The Lab", item: `${SITE_URL}/the-lab` },
    { "@type": "ListItem", position: 3, name: "기록", item: `${SITE_URL}/the-lab/blog` },
  ],
};

export default function BlogIndexPage() {
  return (
    <div className="bg-paper min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <section className="container-content pt-24 lg:pt-32 pb-16">
        <span className="caption-style text-ink/90 block mb-6 font-korean">
          더 랩 / 기록 색인
        </span>
        <h1 className="font-display font-bold text-[clamp(3rem,9vw,7rem)] text-ink leading-[0.88] tracking-[-0.04em] font-korean">
          기록.
        </h1>
        <p className="text-body-kr font-korean text-ink/75 leading-[1.75] mt-7 max-w-xl">
          갓 간 땅콩버터로 카페 추가매출을 만드는 메뉴 노트와 도입 운영 기록.
          토스트·라떼·소분 판매 구성부터 사양 해설까지.
        </p>
      </section>

      <section className="container-content pb-24">
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12">
          {LAB_POSTS.map((p) => (
            <li key={p.id}>
              <Link href={`/the-lab/blog/${p.id}`} className="group block">
                <div className="relative aspect-[16/10] rounded-lg overflow-hidden bg-bone mb-5">
                  <Image
                    src={p.thumb}
                    alt={p.title}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute left-4 bottom-3 caption-style text-paper/90 font-korean drop-shadow">
                    {p.chapter}
                  </span>
                </div>
                <div className="flex items-center gap-3 mb-3 flex-wrap">
                  <span className="caption-style text-ink/80 font-korean">
                    {p.category}
                  </span>
                  <span className="caption-style text-ink/60">·</span>
                  <span className="caption-style text-ink/70 font-korean">
                    {p.date}
                  </span>
                </div>
                <h2 className="font-display font-bold text-[clamp(1.15rem,1.8vw,1.45rem)] text-ink leading-[1.25] tracking-[-0.02em] group-hover:underline underline-offset-4 decoration-2 font-korean">
                  {p.title}
                </h2>
                <p className="text-body-kr font-korean text-ink/80 leading-[1.65] mt-3">
                  {p.excerpt}
                </p>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-16 flex flex-wrap gap-6">
          <Link
            href="/the-lab"
            className="caption-style text-ink hover:underline underline-offset-4 font-korean"
          >
            &larr; 더 랩 03호로 돌아가기
          </Link>
          <Link
            href="/contact"
            className="caption-style text-ink hover:underline underline-offset-4 font-korean"
          >
            도입 · 견적 문의 &rarr;
          </Link>
        </div>
      </section>
    </div>
  );
}
