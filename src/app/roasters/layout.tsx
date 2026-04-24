import type { Metadata } from "next";

const SITE_URL = "https://nbpkorea.co.kr";

export const metadata: Metadata = {
  title: "KUBAN 로스터 — 터키 드럼 로스터 한국 공식 딜러",
  description:
    "터키 이스탄불에서 설계·제작된 KUBAN 드럼 커피 로스터의 한국 독점 딜러, 엔비피코리아. 1Kg 샘플 로스터부터 상업용 대용량까지 전 라인업 유통·설치·A/S를 경기도 안산 본사에서 일괄 대응합니다.",
  alternates: { canonical: "/roasters" },
  openGraph: {
    title: "KUBAN 로스터 — 터키 드럼 로스터 한국 공식 딜러 | 엔비피코리아",
    description:
      "이스탄불에서 만든 KUBAN 드럼 로스터, 국내에서는 엔비피코리아가 유통·설치·A/S. 1Kg 샘플부터 상업용 대용량까지.",
    url: `${SITE_URL}/roasters`,
    type: "website",
    locale: "ko_KR",
  },
};

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "KUBAN Drum Coffee Roaster",
  category: "Coffee Roasting Equipment",
  description:
    "터키 KUBAN의 드럼 커피 로스터. 엔비피코리아가 한국 내 독점 딜러로 유통·설치·A/S를 담당합니다.",
  brand: { "@type": "Brand", name: "KUBAN" },
  countryOfOrigin: "TR",
  offers: {
    "@type": "AggregateOffer",
    availability: "https://schema.org/InStock",
    priceCurrency: "KRW",
    seller: { "@id": `${SITE_URL}/#organization` },
    areaServed: { "@type": "Country", name: "South Korea" },
  },
};

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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      {children}
    </>
  );
}
