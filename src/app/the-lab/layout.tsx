import type { Metadata } from "next";
import { FAQ_CATEGORIES, PROCESS } from "@/lib/nutbutter";

const SITE_URL = "https://www.nbpcafe.com";

export const metadata: Metadata = {
  title: "땅콩버터머신 넛츠스타 NUTS-STAR — 카페 추가매출·신메뉴 피넛버터·견과버터머신",
  description:
    "카운터 위에서 갓 가는 상업용 땅콩버터·피넛버터·견과버터머신 넛츠스타 NUTS-STAR. 갓 간 땅콩버터를 토스트·라떼 등 카페 시그니처 신메뉴로 만들어 추가 매출을 올리세요. 시간당 50kg·220V·KC인증, 별도 공사 없이 카운터 설치. 2025–26년 11개 거래처 24대 납품.",
  keywords: [
    "땅콩버터머신",
    "피넛버터머신",
    "견과버터머신",
    "넛버터머신",
    "상업용 땅콩버터 제조기",
    "카페 땅콩버터 기계",
    "카페 추가매출",
    "카페 매출 증대",
    "카페 신메뉴",
    "카페 시그니처 메뉴",
    "카페 창업 아이템",
    "카페 부가수익",
    "디저트 카페 메뉴",
    "수제 땅콩버터 만들기",
    "즉석 견과버터",
    "NUTS-STAR",
    "넛츠스타",
  ],
  alternates: { canonical: "/the-lab" },
  openGraph: {
    title: "땅콩버터머신 넛츠스타 — 카페 추가매출·신메뉴 견과버터머신 | 엔비피코리아",
    description:
      "카운터 위에서 갓 가는 상업용 땅콩버터·피넛버터머신. 갓 간 땅콩버터를 카페 시그니처 신메뉴로, 추가 매출까지. 시간당 50kg·220V. 2025–26 11개 거래처 24대 납품.",
    url: `${SITE_URL}/the-lab`,
    type: "website",
    locale: "ko_KR",
  },
};

// NOTE: Product/Offer/Review 스키마는 의도적으로 내보내지 않는다.
// 공개 가격(offers.lowPrice)도 검증 가능한 실제 후기도 없는 B2B 견적 제품이라
// 구글 Product 리치결과 요건을 충족할 수 없고, 마크업해 봐야 GSC 오류만 쌓인다.
// 제품 정보는 본문 HTML + 루트의 Organization 스키마로 전달한다.

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "The Lab — Nut Butter Machine", item: `${SITE_URL}/the-lab` },
  ],
};

// FAQPage — 네이버/구글 질문박스(AEO) 노출용. FAQ 데이터에서 생성.
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${SITE_URL}/the-lab#faq`,
  mainEntity: FAQ_CATEGORIES.flatMap((cat) =>
    cat.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    }))
  ),
};

// HowTo — 사용 3단계(투입→분쇄→담기)를 단계 카드 리치결과로 노출.
const howToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "@id": `${SITE_URL}/the-lab#howto`,
  name: "넛츠스타 넛버터머신으로 땅콩버터 만들기",
  description:
    "상업용 넛버터머신 넛츠스타로 견과를 투입해 분쇄하고 병에 담는 3단계 사용법.",
  tool: [{ "@type": "HowToTool", name: "넛츠스타 NUTS-STAR 넛버터머신" }],
  step: PROCESS.map((s, i) => ({
    "@type": "HowToStep",
    position: i + 1,
    name: s.title,
    text: s.body,
    url: `${SITE_URL}/the-lab#process`,
  })),
};

export default function TheLabLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }} />
      {children}
    </>
  );
}
