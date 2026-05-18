import type { Metadata } from "next";
import { POSTS } from "@/lib/posts";

const SITE_URL = "https://www.nbpcafe.com";

export const metadata: Metadata = {
  title: "로스팅 노트 — 엔비피코리아 직화식 제연기·애프터버너·로스팅 민원 가이드",
  description:
    "엔비피코리아의 로스팅 노트. 로스팅 노하우와 기본·심화·취향별 프로파일, 직화식 제연기·애프터버너 도입, 로스팅 민원 대처법, 덕트 시공 주의사항까지 현장에서 도움이 되는 한 단계 더 깊은 인사이트를 정리합니다.",
  keywords: [
    "로스팅 노트",
    "로스팅 노하우",
    "로스팅 민원",
    "엔비피코리아",
    "제연기",
    "직화식 제연기",
    "애프터버너",
    "직화식 애프터버너",
    "커피 로스터 제연기",
    "로스터리 카페 창업",
    "로스팅 덕트 시공",
    "VOC 처리",
    "비례식 가스 제어",
    "전기집진기 비교",
    "워터 집진기 비교",
  ],
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "로스팅 노트 | 엔비피코리아",
    description:
      "로스팅 노하우, 직화식 제연기·애프터버너, 로스팅 민원 대처법, 덕트 시공 주의사항.",
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
  name: "엔비피코리아 로스팅 노트",
  description:
    "로스팅 노하우, 직화식 제연기·애프터버너, 로스팅 민원 대처, 덕트 시공에 대한 엔비피코리아의 공개 기술 노트.",
  inLanguage: "ko-KR",
  publisher: { "@id": `${SITE_URL}/#organization` },
  keywords:
    "엔비피코리아, 제연기, 직화식 제연기, 애프터버너, 로스팅 민원, 로스팅 노하우, 커피 로스터 제연기, 덕트 시공",
  blogPost: POSTS.map((p) => ({
    "@type": "BlogPosting",
    "@id": `${SITE_URL}/blog/${p.id}`,
    headline: p.title,
    description: p.excerpt,
    datePublished: p.date.replace(/\./g, "-"),
    author: { "@id": `${SITE_URL}/#organization` },
    url: `${SITE_URL}/blog/${p.id}`,
    image: p.image.startsWith("http") ? p.image : `${SITE_URL}${p.image}`,
  })),
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "로스팅 노트", item: `${SITE_URL}/blog` },
  ],
};

// AEO/GEO: FAQ schema to help answer-engines surface this page on
// roasting-complaint, afterburner and duct-installation queries.
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "로스팅 냄새 민원이 들어왔을 때 가장 먼저 해야 할 일은 무엇인가요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "사과와 측정 두 가지를 24시간 안에 함께 진행해야 합니다. 매장 사장이 직접 인근 세대를 방문해 인사하고, 동시에 그날의 로스팅 일지·외기·풍향·토출구 방향을 기록합니다. 그 뒤 출퇴근 시간대 로스팅을 피하고, 1–2주 안에 직화식 애프터버너 도입 또는 용량 점검을 검토합니다.",
      },
    },
    {
      "@type": "Question",
      name: "직화식 애프터버너와 필터식 제연기의 차이는 무엇인가요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "필터식 제연기는 입자상 물질은 잡지만 VOC(휘발성 유기화합물)는 잡지 못합니다. 직화식 애프터버너는 배기를 800°C 이상의 연소실로 통과시켜 VOC와 타르를 함께 산화 분해합니다. 도심 로스터리에서 냄새 민원이 우려되는 경우 직화식이 적합합니다.",
      },
    },
    {
      "@type": "Question",
      name: "엔비피코리아 직화식 애프터버너의 핵심 사양은 무엇인가요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "엔비피코리아 직화식 애프터버너는 200℃에서 1,000℃의 2단 연소 구조와 40:1 비례식 가스 제어로 로스팅 연기 제거율 99.2%를 목표로 설계됩니다. 용량별로 0.5–0.8초의 연소실 체류 시간을 확보해 VOC 분해 안정성을 유지하며, 비례식 제어로 가스 사용량을 ON/OFF 방식 대비 절반 이상 절감합니다.",
      },
    },
    {
      "@type": "Question",
      name: "로스터 배기 덕트 시공에서 가장 자주 빠지는 항목은 무엇인가요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "보온과 청소구입니다. 보온이 없으면 덕트 내벽에서 타르가 응축되어 1년 안에 막힘이 발생하고, 청소구가 없으면 분해 청소를 위해 천장을 뜯어야 합니다. 직관 5m마다, 모든 엘보우 직후마다 청소구를 두는 것이 표준입니다.",
      },
    },
  ],
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      {children}
    </>
  );
}
