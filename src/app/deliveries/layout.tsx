import type { Metadata } from "next";

const SITE_URL = "https://nbpkorea.co.kr";

export const metadata: Metadata = {
  title: "납품 실적 — 애프터버너 379건, 넛버터머신 24대",
  description:
    "엔비피코리아가 2024–2026년 사이 납품·출하 예정된 애프터버너와 넛버터머신 전체 기록을 한 페이지에 모은 원장입니다. 애프터버너 379건(국내 16개 광역·해외 7개국·18개 로스팅기 브랜드와 결합), 넛버터머신 24대(11개 거래처). 지역·로스팅기 브랜드·용량으로 다축 필터링이 가능합니다.",
  alternates: { canonical: "/deliveries" },
  openGraph: {
    title: "납품 실적 — 애프터버너 379건·넛버터머신 24대 | 엔비피코리아",
    description:
      "2024–2026 납품 기록. 국내 16개 광역 · 해외 7개국 · 18개 로스팅기 브랜드.",
    url: `${SITE_URL}/deliveries`,
    type: "website",
    locale: "ko_KR",
  },
};

const datasetJsonLd = {
  "@context": "https://schema.org",
  "@type": "Dataset",
  name: "NBPKOREA Afterburner & Nut Butter Machine Delivery Ledger (2024–2026)",
  description:
    "엔비피코리아가 2024년부터 2026년 5월까지 납품·예정한 애프터버너 및 넛버터머신의 전 현장 기록. 상호·지역·용량·브랜드 결합 정보를 포함.",
  creator: { "@id": `${SITE_URL}/#organization` },
  keywords: [
    "afterburner installations",
    "coffee roaster deliveries",
    "nut butter machine",
    "애프터버너 납품 실적",
    "NBPKOREA",
  ],
  spatialCoverage: {
    "@type": "Place",
    geo: { "@type": "GeoShape", name: "Korea, China, Thailand, Taiwan, Japan, Kuwait, Qatar, Hong Kong" },
  },
  temporalCoverage: "2024-01-01/2026-05-31",
  variableMeasured: [
    "Customer name",
    "Region & district",
    "Roaster brand",
    "Afterburner capacity (Kg)",
    "Nut butter machine quantity",
    "Delivery date",
  ],
  isAccessibleForFree: true,
  url: `${SITE_URL}/deliveries`,
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Deliveries", item: `${SITE_URL}/deliveries` },
  ],
};

export default function DeliveriesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(datasetJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      {children}
    </>
  );
}
