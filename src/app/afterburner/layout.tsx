import type { Metadata } from "next";

const SITE_URL = "https://www.nbpcafe.com";

export const metadata: Metadata = {
  title: "직화식 애프터버너·커피 로스터 제연기 — NK 시리즈",
  description:
    "엔비피코리아가 2006년부터 만들어온 직화식 애프터버너 NK 시리즈. 카페 창업과 도심 로스터리 운영에 필요한 커피 로스터 제연기·후연 제거장치로, 로스팅 과정에서 발생하는 연기·냄새·체프·유해물질을 200℃–1,000℃ 고온으로 완전 연소해 99.2% 제거합니다. 공개 라인업은 5Kg 소형 로스터부터 60Kg 대형 시설까지이며, 120Kg 산업용은 현장 상담 후 커스텀 제작합니다. 열효율 98%, 40:1 비례제어로 경쟁 제품 대비 가스를 30% 이상 절감.",
  keywords: [
    "직화식 애프터버너",
    "커피 로스터 제연기",
    "로스터리 제연기",
    "로스팅 연기 제거",
    "로스팅 냄새 제거",
    "카페 창업 장비",
    "로스터리 장비",
    "후연 제거장치",
    "로스터기 배기",
    "NK 애프터버너",
  ],
  alternates: { canonical: "/afterburner" },
  openGraph: {
    title: "직화식 애프터버너·커피 로스터 제연기 NK 시리즈 | 엔비피코리아",
    description:
      "카페 창업과 도심 로스터리 운영을 위한 직화식 애프터버너·커피 로스터 제연기. 5Kg–60Kg 라인업, 연기 99.2% 제거, 가스 30% 절감.",
    url: `${SITE_URL}/afterburner`,
    type: "website",
    locale: "ko_KR",
  },
};

// NOTE: Product/Offer/hasVariant 스키마는 의도적으로 내보내지 않는다.
// 공개 가격이 없는 B2B 견적 제품이라 offers.lowPrice를 채울 수 없고,
// 변형 모델(hasVariant)도 가격·후기가 없어 구글이 리치결과 대상에서 제외하며
// GSC에 'offers/review/aggregateRating 지정 필요' 오류만 남긴다.
// 제품 스펙은 본문 HTML로, 회사 정보는 루트 Organization 스키마로 전달한다.

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "애프터버너(Afterburner)는 무엇인가요?",
      acceptedAnswer: {
        "@type": "Answer",
    text: "커피 로스팅 과정에서 발생하는 연기·냄새·체프·휘발성 유기화합물(VOC)을 고온의 직화식으로 완전 연소시켜 무연·무취 상태로 배출하는 커피 로스터 제연기이자 후연 제거장치입니다. 엔비피코리아의 NK 시리즈는 200°C에서 1,000°C의 직화식 연소와 특허 촉매식 재연소 가이드를 결합해 연기를 99.2% 제거합니다.",
      },
    },
    {
      "@type": "Question",
      name: "필터나 활성탄 방식과 무엇이 다른가요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "필터·활성탄 방식은 배기를 걸러내는 방식이라 주기적인 소모품 교체와 2차 폐기물이 발생합니다. 직화식 애프터버너는 연기 자체를 태워 분해하기 때문에 소모품 교체가 필요 없고, 2단 연소·40:1 비례제어로 가스 소비를 경쟁 제품 대비 30% 이상 절감합니다.",
      },
    },
    {
      "@type": "Question",
      name: "어느 로스팅기 브랜드와 호환되나요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "PROBAT, GIESEN, LORING, FUJI ROYAL, PROASTER, OZTURK, DIEDRICH, TOPER, BUHLER, JOPER 등 주요 드럼 로스터 브랜드와 결합 설치한 실적이 있으며, 공개 라인업은 5Kg 소형 로스터부터 60Kg 대형 시설까지 대응합니다. 120Kg 산업용 대형 로스터는 현장 실측 후 커스텀 제작합니다.",
      },
    },
    {
      "@type": "Question",
      name: "설치 규모는 어떻게 고르나요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "로스터 드럼 용량 기준으로 매칭합니다. 하루 10Kg 이하 소형 카페는 NK-5K, 10–20Kg 중형은 NK-10K, 20–40Kg 구간은 NK-30K, 40Kg 이상 상업용은 NK-60K 이상을 권장합니다. 현장 실측 후 덕트 배치와 입출력 방향을 포함해 설계합니다.",
      },
    },
    {
      "@type": "Question",
      name: "배출 인증과 안전 인증은 어떻게 되나요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "한국가스안전공사의 검사에 합격했으며, 경기도가 선정한 미세먼지 저감 6대 신기술 중 하나로 지정되었습니다. 산업통상자원부의 강관상(강소제품상)을 수상했고, 촉매식 재연소 가이드 등 기술·디자인 특허 16건 이상이 등록되어 있습니다.",
      },
    },
    {
      "@type": "Question",
      name: "워런티와 A/S 정책은 어떻게 되나요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "납품 후 1년 무상 A/S를 기본 제공합니다. 본사(경기도 안산시 단원구 엠티브이8로 22)에서 설계·제작하기 때문에 이후 유상 정비나 부품 교체도 모두 자체 대응이 가능합니다. 031-434-6566~7 또는 nbpkorea@nbpkorea.co.kr로 문의.",
      },
    },
    {
      "@type": "Question",
      name: "가스비는 얼마나 절감되나요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "10Kg 이상 모델은 이단 연소 고효율 덕트 버너와 업계 최초 40:1 비례제어 방식 디지털 컨트롤러를 적용해 경쟁 제품 대비 30% 이상 가스 소비를 절감합니다. 열효율은 98%로 생산성 향상과 연료비 절감을 동시에 달성합니다.",
      },
    },
    {
      "@type": "Question",
      name: "도심지 민원이 많은데 해결이 되나요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "NBPKOREA 애프터버너의 핵심 시장이 바로 도심지 로스터리입니다. 2024–2025년 기준 서울·경기 중심으로 국내 16개 광역과 해외 7개국 379건 납품 실적이 있으며, 이디야커피 강남구 논현동 본사 등 민원이 집중되는 도심 현장에서도 연기·냄새 문제를 해결한 레퍼런스가 있습니다.",
      },
    },
    {
      "@type": "Question",
      name: "카페 창업 단계에서 제연기까지 같이 검토해야 하나요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "로스터리 카페 창업이라면 로스터기 용량, 배기 경로, 건물 조건, 민원 가능성을 함께 검토해야 합니다. 제연기와 애프터버너를 뒤늦게 추가하면 덕트 경로와 설치 공간이 제한될 수 있어, 창업 초기 장비 선정 단계에서 함께 설계하는 편이 안전합니다.",
      },
    },
    {
      "@type": "Question",
      name: "로스팅 연기·냄새가 법적으로도 문제가 되나요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "원두 로스팅에서 나오는 연기와 냄새는 인근 민원의 가장 흔한 원인이고, 지자체에 따라 악취방지법·대기환경보전법의 관리 대상이 될 수 있습니다. 민원이 접수되면 개선 권고나 조치로 이어질 수 있어, 도심·주거 인접 매장은 제연 설비를 미리 갖추는 편이 안전합니다. 애프터버너는 연기·냄새를 고온으로 태워 배출해 이 부담을 낮춥니다.",
      },
    },
    {
      "@type": "Question",
      name: "애프터버너는 정가가 없나요? 가격은 어떻게 정해지나요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "애프터버너는 현장의 로스터 용량, 덕트 길이와 경로, 설치 환경에 따라 모델과 시공이 달라져 일률적인 정가를 두지 않습니다. 현장 조건을 알려주시면 그에 맞춘 견적을 빠르게 드립니다. 카탈로그가 아니라 현장 실측에서 가격이 정해집니다.",
      },
    },
  ],
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Afterburner", item: `${SITE_URL}/afterburner` },
  ],
};

export default function AfterburnerLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      {children}
    </>
  );
}
