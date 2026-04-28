import type { Metadata } from "next";
import {
  AFTERBURNER_MODELS,
  AFTERBURNER_COMMON_SPECS,
  AFTERBURNER_CERTIFICATIONS,
  COMPATIBLE_ROASTERS,
} from "@/lib/products";

const SITE_URL = "https://nbpkorea.co.kr";

export const metadata: Metadata = {
  title: "애프터버너 — 직화식 후연 제거장치 NKJC 시리즈",
  description:
    "엔비피코리아가 2006년부터 만들어온 직화식 애프터버너 NKJC 시리즈. 커피 로스팅 과정에서 발생하는 연기·체프·유해물질을 200℃–1,000℃ 고온으로 완전 연소해 99.2% 제거합니다. 공개 라인업은 5Kg 소형 로스터부터 60Kg 대형 시설까지이며, 120Kg 산업용은 현장 상담 후 커스텀 제작합니다. 열효율 98%, 40:1 비례제어로 경쟁 제품 대비 가스를 30% 이상 절감. 한국가스안전공사 검사 합격, 경기도 미세먼지 저감 6대 신기술 선정, 산업통상자원부 강관상 수상 제품.",
  alternates: { canonical: "/afterburner" },
  openGraph: {
    title: "애프터버너 — 직화식 후연 제거장치 NKJC 시리즈 | 엔비피코리아",
    description:
      "NKJC 시리즈 공개 라인업(5Kg–60Kg). 120Kg은 현장 상담 후 커스텀 제작. 200–1000℃ 직화식 연소, 연기 99.2% 제거, 가스 30% 절감.",
    url: `${SITE_URL}/afterburner`,
    type: "website",
    locale: "ko_KR",
  },
};

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  "@id": `${SITE_URL}/afterburner#product`,
  name: "NKJC Direct Flame Afterburner",
  alternateName: ["애프터버너", "Coffee Roaster Afterburner", "커피 로스터 후연 제거장치"],
  category: "Industrial Air Pollution Control Equipment",
  description:
    "커피 로스터에서 발생하는 연기·체프·VOC를 직화식으로 완전 연소해 무연·무취 배출을 실현하는 후연 제거장치. 200–1000°C 고온 연소, 98% 열효율, 40:1 비례제어, 30% 가스 절감.",
  brand: { "@type": "Brand", name: "NBPKOREA" },
  manufacturer: { "@id": `${SITE_URL}/#organization` },
  countryOfOrigin: "KR",
  image: `${SITE_URL}/og-default.png`,
  additionalProperty: [
    { "@type": "PropertyValue", name: "Combustion Principle", value: "Direct Flame (2-stage / Surface Panel)" },
    { "@type": "PropertyValue", name: "Combustion Temperature", value: AFTERBURNER_COMMON_SPECS.combustionTemp },
    { "@type": "PropertyValue", name: "Smoke Removal Rate", value: AFTERBURNER_COMMON_SPECS.removalRate },
    { "@type": "PropertyValue", name: "Gas Saving", value: `${AFTERBURNER_COMMON_SPECS.gasSaving}+ vs competitors` },
    { "@type": "PropertyValue", name: "Thermal Efficiency", value: AFTERBURNER_COMMON_SPECS.thermalEfficiency },
    { "@type": "PropertyValue", name: "Proportional Control Ratio", value: AFTERBURNER_COMMON_SPECS.proportionalRatio },
    { "@type": "PropertyValue", name: "Power Supply", value: AFTERBURNER_COMMON_SPECS.power },
    { "@type": "PropertyValue", name: "Heat Source", value: AFTERBURNER_COMMON_SPECS.heatSource },
    { "@type": "PropertyValue", name: "Warranty", value: AFTERBURNER_COMMON_SPECS.warranty },
    { "@type": "PropertyValue", name: "Capacity Range", value: "5Kg — 60Kg public lineup; 120Kg custom by consultation" },
    { "@type": "PropertyValue", name: "Compatible Roaster Brands", value: COMPATIBLE_ROASTERS.join(", ") },
  ],
  hasVariant: AFTERBURNER_MODELS.map((m) => ({
    "@type": "Product",
    name: m.name,
    sku: m.name,
    description: `${m.targetKr} (${m.target}) — ${m.burnerKr}.`,
    additionalProperty: [
      { "@type": "PropertyValue", name: "Capacity", value: m.capacity },
      { "@type": "PropertyValue", name: "Dimensions (W×D×H)", value: m.size },
      { "@type": "PropertyValue", name: "Burner", value: m.burner },
      { "@type": "PropertyValue", name: "Controller", value: m.controller },
      { "@type": "PropertyValue", name: "Fuel", value: m.connector },
    ],
  })),
  award: AFTERBURNER_CERTIFICATIONS.map((c) => `${c.titleEn} · ${c.title}`),
  offers: {
    "@type": "AggregateOffer",
    availability: "https://schema.org/InStock",
    priceCurrency: "KRW",
    seller: { "@id": `${SITE_URL}/#organization` },
    areaServed: [
      { "@type": "Country", name: "South Korea" },
      { "@type": "Country", name: "China" },
      { "@type": "Country", name: "Taiwan" },
      { "@type": "Country", name: "Japan" },
      { "@type": "Country", name: "Thailand" },
      { "@type": "Country", name: "Hong Kong" },
      { "@type": "Country", name: "Kuwait" },
      { "@type": "Country", name: "Qatar" },
    ],
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "애프터버너(Afterburner)는 무엇인가요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "커피 로스팅 과정에서 발생하는 연기·체프·휘발성 유기화합물(VOC)을 고온의 직화식으로 완전 연소시켜 무연·무취 상태로 배출하는 후연 제거장치입니다. 엔비피코리아의 NKJC 시리즈는 200°C에서 1,000°C의 직화식 연소와 특허 촉매식 재연소 가이드를 결합해 연기를 99.2% 제거합니다.",
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
        text: "로스터 드럼 용량 기준으로 매칭합니다. 하루 10Kg 이하 소형 카페는 NKJC-5K, 10–20Kg 중형은 NKJC-10K, 20–40Kg 구간은 NKJC-30K, 40Kg 이상 상업용은 NKJC-60K 이상을 권장합니다. 현장 실측 후 덕트 배치와 입출력 방향을 포함해 설계합니다.",
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      {children}
    </>
  );
}
