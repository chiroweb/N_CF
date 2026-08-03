import type { Metadata } from "next";

const SITE_URL = "https://www.nbpcafe.com";

export const metadata: Metadata = {
  title: "문의 — 엔비피코리아 본사·공장",
  description:
    "애프터버너·커피 로스터와 업소용 땅콩버터·땅콩·아몬드·피스타치오 페이스트 제조기 넛츠스타의 시연, 견적, 설치, A/S 상담.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "문의 | 엔비피코리아 NBPKOREA",
    description:
      "경기도 안산 본사·공장. 애프터버너·로스터·견과 페이스트 제조기 시연 및 견적 상담.",
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
