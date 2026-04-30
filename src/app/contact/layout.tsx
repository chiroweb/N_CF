import type { Metadata } from "next";

const SITE_URL = "https://nbpkorea.co.kr";

export const metadata: Metadata = {
  title: "문의 — 엔비피코리아 본사·공장",
  description:
    "직화식 애프터버너 NKJC 시리즈, 커피 로스터 제연기, 로스터리 장비, 피넛버터머신·땅콩버터머신 NUTS-STAR의 견적, 설치 상담, A/S 문의를 본사에서 직접 받습니다. 카페 창업 예정지의 로스터 용량, 덕트 방향, 배기 조건을 알려주시면 설치 방향부터 안내합니다. 경기도 안산시 단원구 엠티브이8로 22 · TEL 031-434-6566~7 · nbpkorea@nbpkorea.co.kr",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "문의 | 엔비피코리아 NBPKOREA",
    description:
      "경기도 안산 본사·공장. 애프터버너·넛버터머신 견적 및 설치 상담 문의.",
    url: `${SITE_URL}/contact`,
    type: "website",
    locale: "ko_KR",
  },
};

const contactPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  url: `${SITE_URL}/contact`,
  name: "Contact NBPKOREA",
  about: { "@id": `${SITE_URL}/#organization` },
  mainEntity: {
    "@id": `${SITE_URL}/#organization`,
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Contact", item: `${SITE_URL}/contact` },
  ],
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      {children}
    </>
  );
}
