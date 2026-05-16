import type { Metadata } from "next";
import { POSTS } from "@/lib/posts";

const SITE_URL = "https://www.nbpcafe.com";

export const metadata: Metadata = {
  title: "필드 노트 — 로스터리 장비·제연기·카페 창업 기술 기록",
  description:
    "엔비피코리아가 현장에서 쌓아온 로스터리 장비 기술 기록. 직화식 애프터버너, 커피 로스터 제연기, 로스팅 냄새 민원, 카페 창업 장비, 피넛버터머신 운영 노하우를 담은 공개 연구 노트입니다.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "필드 노트 | 엔비피코리아",
    description:
      "직화식 애프터버너, 커피 로스터 제연기, 카페 창업 장비, 피넛버터머신 운영 노트.",
    url: `${SITE_URL}/blog`,
    type: "website",
    locale: "ko_KR",
  },
};

const blogJsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "@id": `${SITE_URL}/blog#blog`,
  url: `${SITE_URL}/blog`,
  name: "NBPKOREA Field Notes",
  description:
    "로스팅과 애프터버너 기술에 대한 엔비피코리아의 공개 기술 노트.",
  inLanguage: "ko-KR",
  publisher: { "@id": `${SITE_URL}/#organization` },
  blogPost: POSTS.map((p) => ({
    "@type": "BlogPosting",
    "@id": `${SITE_URL}/blog/${p.id}`,
    headline: p.title,
    description: p.excerpt,
    datePublished: p.date.replace(/\./g, "-"),
    author: { "@id": `${SITE_URL}/#organization` },
    url: `${SITE_URL}/blog/${p.id}`,
    image: p.image,
  })),
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Field Notes", item: `${SITE_URL}/blog` },
  ],
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      {children}
    </>
  );
}
