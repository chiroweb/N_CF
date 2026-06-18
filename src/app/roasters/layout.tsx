import type { Metadata } from "next";

const SITE_URL = "https://www.nbpcafe.com";

export const metadata: Metadata = {
  title: "KUBAN 로스터 — 카페 직접 로스팅용 터키 드럼 로스터 한국 공식 딜러",
  description:
    "원두를 직접 볶으면 맛도 마진도 매장이 쥡니다. 카페·로스터리 창업과 자가 로스팅을 위한 KUBAN 드럼 커피 로스터의 한국 독점 딜러, 엔비피코리아. 매장용 5Kg부터 생산용 대용량까지 라인업을 운영량·설치 공간에 맞춰 고르고, 유통·설치·A/S를 경기도 안산 본사에서 일괄 대응합니다. 로스팅에 따라오는 연기·냄새 제연(애프터버너)까지 한 곳에서 설계할 수 있습니다.",
  keywords: [
    "커피 로스터기",
    "드럼 로스터",
    "카페 로스터기",
    "로스터리 창업",
    "카페 직접 로스팅",
    "자가 로스팅 장비",
    "상업용 커피 로스터",
    "KUBAN 로스터",
    "쿠반 로스터",
    "터키 드럼 로스터",
    "5kg 로스터기",
    "로스터기 추천",
  ],
  alternates: { canonical: "/roasters" },
  openGraph: {
    title: "KUBAN 로스터 — 카페 직접 로스팅용 드럼 로스터 한국 공식 딜러 | 엔비피코리아",
    description:
      "원두를 직접 볶으면 맛도 마진도 매장이 쥡니다. 카페·로스터리용 KUBAN 드럼 로스터, 국내 유통·설치·A/S는 엔비피코리아. 매장용 5Kg부터 생산용 대용량까지.",
    url: `${SITE_URL}/roasters`,
    type: "website",
    locale: "ko_KR",
  },
};

// NOTE: Product/Offer 스키마는 의도적으로 내보내지 않는다.
// 공개 가격이 없는 딜러 유통 제품이라 offers.lowPrice를 채울 수 없어
// 구글 Product 리치결과 요건을 못 맞추고 GSC 오류만 남긴다.
// 제품 정보는 본문 HTML + 루트 Organization 스키마로 전달한다.
// FAQ는 본문 FAQS와 동일한 Q/A를 FAQPage 스키마로도 노출한다(AEO).

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "카페에서 원두를 직접 볶으면 무엇이 좋아지나요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "납품받는 원두는 어느 매장이나 비슷한 맛이지만, 직접 로스팅하면 우리 매장만의 프로파일을 정할 수 있습니다. 또한 생두를 볶는 원가는 완제품 원두를 사 오는 것보다 낮아 잔당 원가가 내려가고, 매장에서 볶은 원두를 봉지·구독으로 파는 소매 매출 라인까지 만들 수 있습니다. '직접 볶는 집'이라는 점은 그 자체로 카페의 차별화와 신뢰가 됩니다.",
      },
    },
    {
      "@type": "Question",
      name: "로스팅 경험이 없어도 시작할 수 있나요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "처음 시작하는 매장이 많습니다. 설치 시 기본 운용 셋업과 첫 시운전을 함께 진행하고, 컨트롤러로 화력·시간을 재현할 수 있어 같은 배치를 반복하기 쉬운 BASE 라인부터 권장합니다. 한국 공식 딜러로서 설치 이후 운용 문의에도 직접 대응합니다.",
      },
    },
    {
      "@type": "Question",
      name: "매장 안에 로스터를 두면 연기와 냄새는 어떻게 처리하나요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "로스팅에는 배기와 제연이 반드시 따라옵니다. 엔비피코리아는 KUBAN 로스터 공식 딜러이자 직화식 애프터버너(커피 로스터 제연기) 제조사이기도 해서, 로스터와 제연 장비를 한 곳에서 함께 설계할 수 있습니다. 도심 매장이라면 로스터를 고르는 단계에서 배기 경로와 제연기까지 같이 검토하는 편이 안전합니다.",
      },
    },
    {
      "@type": "Question",
      name: "카페 규모에는 몇 kg 로스터가 맞나요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "매장 자가소비 위주의 소형 카페는 5Kg, 원두 판매나 납품을 함께 보는 매장은 10~15Kg, 생산 비중이 큰 곳은 20Kg 이상을 권장합니다. 하루 로스팅량과 설치 공간, 납품 계획을 알려주시면 적합한 모델부터 좁혀 드립니다.",
      },
    },
    {
      "@type": "Question",
      name: "수입 장비인데 설치와 A/S는 어떻게 되나요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "KUBAN은 터키 이스탄불에서 제작되지만, 국내에서는 엔비피코리아가 한국 공식 딜러로 유통·설치·A/S를 직접 책임집니다. 수입 장비에서 가장 중요한 부품 수급과 점검을 경기도 안산 본사에서 일괄 대응합니다.",
      },
    },
  ],
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      {children}
    </>
  );
}
