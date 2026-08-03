import type { Metadata } from "next";
import { FAQ_CATEGORIES } from "@/lib/nutbutter";

const SITE_URL = "https://www.nbpcafe.com";

export const metadata: Metadata = {
  title: { absolute: "업소용 땅콩버터·견과 페이스트 제조기 | 넛츠스타" },
  description:
    "카페·베이커리·젤라또·땅콩빵용 국산 페이스트 제조기. 땅콩·아몬드·피스타치오를 시간당 50kg 가공. 220V·KC 인증, 시연·견적 상담.",
  keywords: [
    "업소용 땅콩버터 제조기",
    "땅콩버터머신",
    "피넛버터머신",
    "넛버터머신",
    "견과버터 제조기",
    "견과 페이스트 제조기",
    "견과류 분쇄기",
    "땅콩페이스트 제조기",
    "아몬드페이스트 제조기",
    "피스타치오페이스트 제조기",
    "젤라또 페이스트 제조기",
    "땅콩빵 기계",
    "땅콩빵 속재료",
    "베이커리 필링 제조",
    "두쫀쿠 피스타치오 페이스트",
    "두바이초콜릿 피스타치오 페이스트",
    "카페 견과 페이스트",
    "NUTS-STAR",
    "넛츠스타",
  ],
  alternates: {
    canonical: "/the-lab",
    languages: { "ko-KR": "/the-lab", en: "/en/the-lab" },
  },
  openGraph: {
    title: "업소용 땅콩버터·견과 페이스트 제조기 | 넛츠스타",
    description:
      "땅콩·아몬드·피스타치오 페이스트를 직접 만드는 국산 상업용 장비. 젤라또·땅콩빵·베이커리·카페용, 시간당 50kg·220V·KC 인증.",
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
    { "@type": "ListItem", position: 2, name: "업소용 땅콩버터·견과 페이스트 제조기 넛츠스타", item: `${SITE_URL}/the-lab` },
  ],
};

// FAQPage — 제품 명칭과 적용 업종을 기계가 읽을 수 있는 문답으로 제공한다.
// 일반 기업 사이트에서는 Google FAQ 리치결과 노출을 기대하지 않는다.
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

export default function TheLabLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      {children}
    </>
  );
}
