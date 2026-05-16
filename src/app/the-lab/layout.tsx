import type { Metadata } from "next";

const SITE_URL = "https://www.nbpcafe.com";

export const metadata: Metadata = {
  title: "넛츠스타 NUTS-STAR — 피넛버터머신·땅콩버터머신·넛버터머신",
  description:
    "엔비피코리아가 자체 설계·제작한 50kg급 상업용 피넛버터머신·땅콩버터머신·넛버터머신 넛츠스타 NUTS-STAR. 땅콩·아몬드·캐슈넛·피스타치오를 연속 분쇄해 견과류 버터, 땅콩버터, 정과, 베이커리 토핑·필링으로 가공합니다. 카페, 베이커리, 방앗간, 견과류 제조·가공 현장에서 2025–2026년 11개 거래처 24대 납품.",
  keywords: [
    "피넛버터머신",
    "땅콩버터머신",
    "땅콩버터 머신",
    "넛버터머신",
    "넛버터 머신",
    "견과버터머신",
    "상업용 땅콩버터 제조기",
    "카페 땅콩버터",
    "NUTS-STAR",
    "넛츠스타",
  ],
  alternates: { canonical: "/the-lab" },
  openGraph: {
    title: "넛츠스타 NUTS-STAR — 피넛버터머신·땅콩버터머신·넛버터머신 | 엔비피코리아",
    description:
      "자체 설계 50kg급 피넛버터머신·땅콩버터머신. 땅콩·아몬드·캐슈넛·피스타치오 연속 분쇄. 2025–2026 11개 거래처 24대 납품.",
    url: `${SITE_URL}/the-lab`,
    type: "website",
    locale: "ko_KR",
  },
};

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  "@id": `${SITE_URL}/the-lab#product`,
  name: "넛츠스타 NUTS-STAR Nut Butter Machine",
  alternateName: ["NUTS-STAR", "Nut Butter Machine", "넛버터머신", "피넛버터머신", "땅콩버터머신", "땅콩버터 머신", "견과버터머신", "Peanut Butter Machine"],
  category: "Commercial Food Processing Equipment",
  description:
    "엔비피코리아가 설계·제작하는 50kg급 상업용 피넛버터머신·땅콩버터머신·넛버터머신. 견과류를 연속 분쇄해 땅콩버터·견과버터·정과·토핑·필링으로 가공하는 라인. 즉석 시연과 대량 생산 모두 대응.",
  brand: { "@type": "Brand", name: "NUTSTAR" },
  manufacturer: { "@id": `${SITE_URL}/#organization` },
  countryOfOrigin: "KR",
  additionalProperty: [
    { "@type": "PropertyValue", name: "Capacity", value: "50 kg" },
    { "@type": "PropertyValue", name: "Operating Mode", value: "Continuous Grinding" },
    { "@type": "PropertyValue", name: "Applicable Material", value: "Peanut, Almond, Cashew, Pistachio" },
    { "@type": "PropertyValue", name: "Installations", value: "24 units across 11 customers (2025–2026)" },
  ],
  offers: {
    "@type": "AggregateOffer",
    availability: "https://schema.org/InStock",
    priceCurrency: "KRW",
    seller: { "@id": `${SITE_URL}/#organization` },
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "The Lab — Nut Butter Machine", item: `${SITE_URL}/the-lab` },
  ],
};

export default function TheLabLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      {children}
    </>
  );
}
