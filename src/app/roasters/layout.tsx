import type { Metadata } from "next";

const SITE_URL = "https://www.nbpcafe.com";

export const metadata: Metadata = {
  title: "KUBAN 로스터 — 터키 드럼 로스터 한국 공식 딜러",
  description:
    "터키 이스탄불에서 설계·제작된 KUBAN 드럼 커피 로스터의 한국 독점 딜러, 엔비피코리아. 5Kg부터 상업용 대용량까지 전 라인업 유통·설치·A/S를 경기도 안산 본사에서 일괄 대응합니다.",
  alternates: { canonical: "/roasters" },
  openGraph: {
    title: "KUBAN 로스터 — 터키 드럼 로스터 한국 공식 딜러 | 엔비피코리아",
    description:
      "이스탄불에서 만든 KUBAN 드럼 로스터, 국내에서는 엔비피코리아가 유통·설치·A/S. 5Kg부터 상업용 대용량까지.",
    url: `${SITE_URL}/roasters`,
    type: "website",
    locale: "ko_KR",
  },
};

// NOTE: Product/Offer 스키마는 의도적으로 내보내지 않는다.
// 공개 가격이 없는 딜러 유통 제품이라 offers.lowPrice를 채울 수 없어
// 구글 Product 리치결과 요건을 못 맞추고 GSC 오류만 남긴다.
// 제품 정보는 본문 HTML + 루트 Organization 스키마로 전달한다.

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Roasters", item: `${SITE_URL}/roasters` },
  ],
};

export default function RoastersLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      {children}
    </>
  );
}
