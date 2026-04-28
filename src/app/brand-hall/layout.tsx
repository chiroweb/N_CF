import type { Metadata } from "next";

const SITE_URL = "https://nbpkorea.co.kr";

export const metadata: Metadata = {
  title: "브랜드 홀 — 엔비피코리아의 세 제품군",
  description:
    "직화식 애프터버너 NKJC 시리즈, 터키 KUBAN 드럼 로스터(한국 독점 딜러), 자체 설계 넛버터머신 NUTS-STAR까지. 엔비피코리아가 제조·유통·운영하는 세 개의 제품군을 한 자리에서 소개합니다.",
  alternates: { canonical: "/brand-hall" },
  openGraph: {
    title: "브랜드 홀 — 엔비피코리아의 세 제품군",
    description:
      "애프터버너 · KUBAN 로스터 · 넛츠스타 넛버터머신, 세 제품군을 한 자리에서.",
    url: `${SITE_URL}/brand-hall`,
    type: "website",
    locale: "ko_KR",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Brand Hall", item: `${SITE_URL}/brand-hall` },
  ],
};

export default function BrandHallLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      {children}
    </>
  );
}
