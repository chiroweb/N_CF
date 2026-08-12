// /the-lab (NUTS-STAR 넛버터머신) 단일 데이터 소스.
// 스펙은 products.ts(NUTBUTTER_PRODUCT)가 정본이고, 이 파일이 the-lab 전용 콘텐츠와
// 파생 데이터(HEADLINE/PROCESS/LIBRARY)를 모은다. 가이드·FAQ·공지·포스트는 placeholder.
// 실제 S3 / CMS 자산으로 교체 예정.

import { NUTBUTTER_PRODUCT } from "@/lib/products";
import { NUTSTAR_SUMMARY } from "@/lib/nutstar-deliveries";

export { NUTBUTTER_PRODUCT };

// ── 카드 썸네일 풀 ──────────────────────────────────────
// placeholder. 실제 청소·레시피·가이드 컷이 들어오면 교체한다.
// 현재는 보유 이미지 3종(기계·재료·결과물) + 로컬 미션 컷을 돌려쓴다.
export const THUMB = {
  machine: NUTBUTTER_PRODUCT.heroImage,
  material: NUTBUTTER_PRODUCT.materialImage,
  butter: NUTBUTTER_PRODUCT.butterImage,
  missionLeft: "/images/mission-nutbutter-left.png",
  missionThumb: "/images/mission-nutbutter-thumb.png",
} as const;

// ── 검색 명칭 · 실제 수요 ───────────────────────────────
// 한 제품을 시장에서 서로 다르게 부르는 검색어를 억지 해시태그가 아니라
// 실제 용도와 연결된 본문 콘텐츠로 설명한다.
export const SEARCH_NAMES: { term: string; context: string }[] = [
  { term: "넛츠스타 · 너츠스타", context: "공식 제품명은 넛츠스타, 고객이 자주 입력하는 표기는 너츠스타" },
  { term: "버터머신", context: "카페·베이커리 사장님이 가장 짧게 찾는 장비명" },
  { term: "땅콩버터머신", context: "가장 널리 쓰이는 제품 검색명" },
  { term: "넛버터머신", context: "여러 견과를 한 대로 가공하는 장비" },
  { term: "피넛버터머신", context: "Peanut butter machine의 국내 검색 표현" },
  { term: "업소용 땅콩버터 제조기", context: "카페·베이커리에서 직접 만드는 땅콩버터" },
  { term: "견과버터머신", context: "매장 제조·병입 판매·식품 가공용" },
  { term: "땅콩페이스트 제조기", context: "땅콩빵 필링·소스·식품 원료용" },
  { term: "피스타치오페이스트 제조기", context: "젤라또·두쫀쿠·디저트 원료용" },
  { term: "아몬드페이스트 제조기", context: "베이커리 필링·스프레드용" },
  { term: "견과 페이스트 기계", context: "땅콩·아몬드·피스타치오 페이스트 생산" },
  { term: "견과류 분쇄기", context: "볶은 견과를 연속 분쇄하는 상업용 장비" },
];

export type DemandSignal = {
  no: string;
  stage: "문의" | "도입" | "시즌 수요";
  segment: string;
  title: string;
  body: string;
};

export const DEMAND_SIGNALS: DemandSignal[] = [
  {
    no: "01",
    stage: "문의",
    segment: "성수동 젤라또 전문점",
    title: "피스타치오·땅콩 페이스트를 매장에서 직접",
    body: "완제품 페이스트 구매 비용을 줄이고, 매장 레시피에 맞는 농도와 배합을 직접 만들려는 젤라또 업종의 문의가 이어지고 있습니다.",
  },
  {
    no: "02",
    stage: "문의",
    segment: "땅콩 특산지 카페",
    title: "지역 땅콩을 메뉴와 병입 상품으로",
    body: "지역 원물을 직접 갈아 땅콩버터·땅콩페이스트로 만들고, 음료·디저트·소분 판매까지 연결하려는 수요입니다.",
  },
  {
    no: "03",
    stage: "도입",
    segment: "서울 근교 베이커리 카페",
    title: "아몬드·땅콩 페이스트를 필링과 토핑으로",
    body: "베이커리 생산 동선 안에서 당일 사용할 견과 페이스트를 직접 만들고, 빵·쿠키·크루아상 메뉴에 적용합니다.",
  },
  {
    no: "04",
    stage: "시즌 수요",
    segment: "피스타치오 디저트 제조",
    title: "두쫀쿠·두바이 스타일 디저트용 페이스트",
    body: "피스타치오 페이스트 수요가 급증한 시즌에는 완제품 수급과 원가 부담을 줄이기 위해 직접 제조하려는 문의와 구매가 집중됐습니다.",
  },
];

// ── 거래처 유형 (소셜 프루프 한 줄) ─────────────────────
export const PARTNER_TYPES = [
  "카페",
  "베이커리",
  "젤라또 전문점",
  "땅콩빵 매장",
  "디저트 제조",
  "견과 전문점",
  "방앗간",
];

// ── 구성·보증·도입 (고가 장비 구매 안심 블록) ───────────
export const PACKAGE_INCLUDES: { label: string; desc: string }[] = [
  { label: "본체", desc: "넛츠스타 NUTS-STAR 1대 (STS304 하우징)" },
  { label: "정비 공구", desc: "분쇄부 분해·정비용 전용 공구 일습" },
  { label: "사용 매뉴얼", desc: "설치·운용·청소·자가진단 가이드" },
  { label: "보증서", desc: "보증 범위·기간이 명시된 정품 보증서" },
];

export type AssuranceItem = { title: string; body: string };
export const ASSURANCE: AssuranceItem[] = [
  {
    title: "무상 시연",
    body: "도입 전 본사 또는 매장에서 실제 견과로 시연합니다. 결과물·소음·동선을 직접 확인한 뒤 결정하세요.",
  },
  {
    title: "설치 · 시운전",
    body: "전국 배송 후 설치와 첫 시운전을 함께 진행합니다. 카운터 배치·전원까지 현장에서 점검합니다.",
  },
  {
    title: "보증 · A/S",
    body: "기본 보증 기간 내 부품·공임 무상. 설계·제작·A/S를 국내에서 직접 책임집니다.",
  },
  {
    title: "도입 상담",
    body: "가격은 매장 구성·물량에 맞춰 견적합니다. 메뉴·회전율·원가까지 함께 설계해 드립니다.",
  },
];

// ── 도입 절차 ───────────────────────────────────────────
export const BUYING_STEPS: { no: string; title: string; body: string }[] = [
  { no: "01", title: "상담", body: "매장 형태·메뉴·물량을 듣고 적합 여부를 함께 봅니다." },
  { no: "02", title: "시연", body: "실제 견과로 결과물·소음·동선을 직접 확인합니다." },
  { no: "03", title: "견적", body: "구성과 도입 방법을 정리해 견적을 드립니다." },
  { no: "04", title: "설치", body: "배송·설치·시운전을 현장에서 함께 마칩니다." },
  { no: "05", title: "A/S", body: "운용 중 점검·정비를 국내에서 직접 지원합니다." },
];

// ── 신뢰 지표 (납품 실적) ───────────────────────────────
// 본문 전용 신뢰 섹션 + Organization/Product 스키마와 동기화하는 정본 수치.
export const TRUST_STATS: { value: string; unit: string; label: string }[] = [
  { value: String(NUTSTAR_SUMMARY.totalUnits), unit: "대", label: "공급 기록" },
  { value: String(NUTSTAR_SUMMARY.totalCustomers), unit: "곳", label: "거래처 기록" },
  { value: "2025–26", unit: "", label: "공급 기간" },
  { value: "국내 직접", unit: "", label: "설계·제작·A/S" },
];

export const TRUST_BLURB =
  `2025–2026년 공급 기록 기준 ${NUTSTAR_SUMMARY.totalCustomers}개 거래처, 총 ${NUTSTAR_SUMMARY.totalUnits}대가 기록되어 있습니다. 카페·베이커리뿐 아니라 견과 가공·방앗간·백화점 팝업까지, 설계부터 제작·A/S를 국내에서 직접 책임집니다.`;

// ── 히어로 핵심 사양 칩 ──────────────────────────────────
// 칩은 짧게 보여주되, 수치(kW·kg)는 specs에서 파생해 한 곳(products.ts)과 동기화한다.
const SPEC_BY_LABEL = Object.fromEntries(
  NUTBUTTER_PRODUCT.specs.map((s) => [s.label, s.value])
);
const firstToken = (label: string) => SPEC_BY_LABEL[label].split(" ")[0];

export const HEADLINE: { k: string; v: string }[] = [
  { k: "처리량", v: SPEC_BY_LABEL["처리량"] },       // "시간당 50kg"
  { k: "구동", v: `${firstToken("구동")} 인버터` },  // "1.7kW 인버터"
  { k: "하우징", v: firstToken("하우징") },          // "STS304"
  { k: "인증", v: "KC 안전인증" },
];

// ── 사용 3단계 (이미지 서사: 재료 → 기계 → 결과물) ──────
export const PROCESS: { no: string; title: string; body: string; thumb: string }[] = [
  {
    no: "01",
    title: "투입",
    body: "로스팅된 땅콩·아몬드·피스타치오·캐슈넛·호두를 투입합니다. 원료별 함수율과 로스팅 상태는 시연으로 먼저 확인합니다.",
    thumb: THUMB.material,
  },
  {
    no: "02",
    title: "분쇄",
    body: "1.7kW 인버터가 견과에 맞는 속도로 분쇄. 원터치로 SMOOTH ↔ CRUNCHY 질감을 고릅니다.",
    thumb: THUMB.machine,
  },
  {
    no: "03",
    title: "담기",
    body: "시간당 50kg, 따뜻할 때 그대로 병에. STS304 하우징, 바로 병에 담아 끝.",
    thumb: THUMB.butter,
  },
];

// ── 가이드 ──────────────────────────────────────────────
export type LabGuide = {
  id: string;
  chapter: string; // ex. "04.01"
  title: string;
  excerpt: string;
  durationLabel: string; // ex. "영상 · 4분 12초"
  thumb: string;
};

export const USE_GUIDES: LabGuide[] = [
  {
    id: "first-run",
    chapter: "04.01",
    title: "처음 켜는 날 — 0번 운용",
    excerpt: "전원·접지 점검부터 첫 분쇄까지. 박스를 여는 순간부터 30분 안의 동선.",
    durationLabel: "영상 · 4분 12초",
    thumb: THUMB.machine,
  },
  {
    id: "texture-control",
    chapter: "04.02",
    title: "질감 다이얼 — SMOOTH ↔ CRUNCHY",
    excerpt: "같은 견과로 두 가지 결을 얻는 법. 분쇄 시간과 휴지 구간의 작은 차이.",
    durationLabel: "영상 · 3분 38초",
    thumb: THUMB.butter,
  },
  {
    id: "jar-pouring",
    chapter: "04.03",
    title: "병에 담기 — 따뜻할 때, 한 번에",
    excerpt: "온도, 점도, 공기. 카운터 위에서 매장 메뉴로 옮겨가는 마지막 단계.",
    durationLabel: "영상 · 2분 50초",
    thumb: THUMB.butter,
  },
  {
    id: "multi-nut",
    chapter: "04.04",
    title: "견과 전환 — 땅콩에서 아몬드로",
    excerpt: "기름지수가 다른 견과를 같은 기계로. 향이 섞이지 않게 비우는 순서.",
    durationLabel: "영상 · 3분 21초",
    thumb: THUMB.material,
  },
];

export const CARE_GUIDES: LabGuide[] = [
  {
    id: "daily-wipe",
    chapter: "05.01",
    title: "일일 마감 — 따뜻할 때 닦는 5분",
    excerpt: "STS304 하우징과 토출구. 매일 같은 자리, 같은 순서로.",
    durationLabel: "영상 · 3분 02초",
    thumb: THUMB.machine,
  },
  {
    id: "weekly-care",
    chapter: "05.02",
    title: "주간 정비 — 분쇄부 분해",
    excerpt: "주 1회 분쇄부를 열고 닦는다. 공구는 동봉된 한 가지면 충분합니다.",
    durationLabel: "영상 · 5분 44초",
    thumb: THUMB.missionLeft,
  },
  {
    id: "part-replace",
    chapter: "05.03",
    title: "부품 교체 — 자주 묻는 두 부분",
    excerpt: "씰과 분쇄부 교체 시점, 교체 방법. 정비 노트 한 장으로 정리.",
    durationLabel: "영상 · 4분 08초",
    thumb: THUMB.missionThumb,
  },
  {
    id: "troubleshoot",
    chapter: "05.04",
    title: "고장 같지 않은 고장 — 점검 순서",
    excerpt: "기계가 멈췄을 때 가장 먼저 확인할 세 가지. 전화 전 자가 진단.",
    durationLabel: "영상 · 3분 19초",
    thumb: THUMB.machine,
  },
];

// ── 레시피 ──────────────────────────────────────────────
// placeholder. GEO/AEO 핵심 자산 — Recipe 스키마로 노출한다.
// steps/ingredients는 schema.org Recipe와 카드 본문 양쪽에서 쓴다.
export type LabRecipe = {
  id: string;
  no: string; // "R.01"
  title: string;
  nut: string; // "땅콩"
  category: string; // "기본 버터" / "응용 메뉴"
  difficulty: "쉬움" | "보통" | "고급";
  timeLabel: string; // "약 10분"
  yieldLabel: string; // "건조 땅콩 1kg → 약 900g"
  excerpt: string;
  ingredients: string[];
  steps: string[];
  thumb: string;
};

export const RECIPES: LabRecipe[] = [
  {
    id: "classic-peanut-butter",
    no: "R.01",
    title: "기본 땅콩버터 — SMOOTH",
    nut: "땅콩",
    category: "기본 버터",
    difficulty: "쉬움",
    timeLabel: "약 10분",
    yieldLabel: "볶은 땅콩 1kg → 약 900g",
    excerpt: "재료는 땅콩 하나. 첨가물 없이 갓 간 신선한 버터를 매장에서 바로.",
    ingredients: ["볶은 땅콩 1kg", "(선택) 소금 한 꼬집", "(선택) 꿀 또는 설탕 소량"],
    steps: [
      "잘 볶은 땅콩을 그대로 호퍼에 투입합니다.",
      "SMOOTH 모드로 분쇄해 부드러운 페이스트로 만듭니다.",
      "따뜻할 때 소독한 병에 담아 식힌 뒤 밀봉합니다.",
    ],
    thumb: THUMB.butter,
  },
  {
    id: "crunchy-peanut-butter",
    no: "R.02",
    title: "크런치 땅콩버터 — CRUNCHY",
    nut: "땅콩",
    category: "기본 버터",
    difficulty: "쉬움",
    timeLabel: "약 12분",
    yieldLabel: "볶은 땅콩 1kg → 약 900g",
    excerpt: "씹는 결을 남기는 운용. 분쇄 시간과 휴지로 알갱이를 조절합니다.",
    ingredients: ["볶은 땅콩 1kg", "(선택) 소금 한 꼬집"],
    steps: [
      "땅콩의 일부(약 10%)를 따로 굵게 빻아 둡니다.",
      "나머지를 SMOOTH로 갈아 페이스트를 만든 뒤, 빻아 둔 땅콩을 섞습니다.",
      "원하는 알갱이 정도가 되면 병에 담습니다.",
    ],
    thumb: THUMB.material,
  },
  {
    id: "almond-butter",
    no: "R.03",
    title: "아몬드버터 — 무첨가",
    nut: "아몬드",
    category: "기본 버터",
    difficulty: "보통",
    timeLabel: "약 15분",
    yieldLabel: "볶은 아몬드 1kg → 약 880g",
    excerpt: "땅콩보다 기름이 적은 아몬드. 휴지 구간을 두며 천천히 갑니다.",
    ingredients: ["볶은 아몬드 1kg", "(선택) 소금 한 꼬집"],
    steps: [
      "잘 볶아 따뜻한 아몬드를 투입합니다.",
      "과열되지 않도록 중간중간 멈춰 식히며 분쇄합니다.",
      "윤기가 돌면 완성 — 병에 담아 보관합니다.",
    ],
    thumb: THUMB.missionThumb,
  },
  {
    id: "cafe-spread-menu",
    no: "R.04",
    title: "카페 스프레드 — 토스트·베이글 메뉴",
    nut: "땅콩·아몬드",
    category: "응용 메뉴",
    difficulty: "쉬움",
    timeLabel: "분쇄 10분 + 구성",
    yieldLabel: "1배치로 약 30잔/접시",
    excerpt: "갓 간 버터를 매장 메뉴로. 원가·회전율 관점의 카페 운용 시나리오.",
    ingredients: ["기본 땅콩버터 또는 아몬드버터", "식빵·베이글", "꿀·바나나 등 토핑"],
    steps: [
      "당일 분쇄한 버터를 베이스로 준비합니다.",
      "토스트·베이글에 발라 토핑을 올려 시그니처 메뉴를 구성합니다.",
      "'매장에서 직접 간다'는 점을 메뉴판에 표기해 차별화합니다.",
    ],
    thumb: THUMB.missionLeft,
  },
];

// ── 돈 되는 메뉴 (매출 경로) ─────────────────────────────
// 레시피를 '메뉴 감상'이 아니라 '이렇게 팔아서 번다'는 매출 경로로 보여주는 카드.
export type MenuPlay = {
  id: string;
  menu: string; // 메뉴 유형 ("시그니처 토스트 · 베이글")
  sell: string; // 무엇을, 어떻게 파나
  revenue: string; // 왜 매출이 되나 (한 줄)
  thumb: string;
};

export const MENU_PLAYS: MenuPlay[] = [
  {
    id: "gelato-paste",
    menu: "젤라또 · 아이스크림 페이스트",
    sell: "피스타치오·땅콩·아몬드 페이스트를 매장 레시피에 맞춰 직접 생산합니다. 원물과 배합을 관리해 원하는 풍미와 농도를 잡습니다.",
    revenue: "완제품 페이스트 구매 비용·수급 부담 절감",
    thumb: THUMB.butter,
  },
  {
    id: "peanut-bread",
    menu: "땅콩빵 · 베이커리 필링",
    sell: "지역 땅콩이나 매장 원물을 바로 갈아 땅콩빵 속재료, 크루아상·쿠키 필링, 케이크 토핑으로 사용합니다.",
    revenue: "대량 필링 원가 절감·자체 레시피 확보",
    thumb: THUMB.material,
  },
  {
    id: "pistachio-dessert",
    menu: "피스타치오 디저트 · 두쫀쿠",
    sell: "두쫀쿠·두바이 스타일 초콜릿 등 피스타치오 페이스트가 많이 들어가는 디저트 원료를 필요한 만큼 직접 만듭니다.",
    revenue: "시즌 원료 가격·납기 변동에 유연하게 대응",
    thumb: THUMB.missionThumb,
  },
  {
    id: "cafe-menu",
    menu: "카페 음료 · 토스트 · 베이글",
    sell: "갓 간 땅콩·아몬드버터를 라떼·쉐이크·토스트에 적용해 ‘매장에서 직접 만든다’는 시그니처 메뉴를 구성합니다.",
    revenue: "음료·디저트 객단가와 메뉴 차별화",
    thumb: THUMB.butter,
  },
  {
    id: "retail-jar",
    menu: "땅콩버터 · 견과 페이스트 병입 판매",
    sell: "당일 분쇄한 페이스트를 병에 담아 판매합니다. 지역 원물, 무첨가, 매장 제조라는 이야기를 상품으로 연결합니다.",
    revenue: "좌석 회전과 무관한 리테일 매출",
    thumb: THUMB.material,
  },
  {
    id: "food-production",
    menu: "견과 가공 · 식품 원료 생산",
    sell: "견과 전문점·방앗간·식품 제조 현장에서 땅콩·아몬드·피스타치오 페이스트를 연속 생산합니다.",
    revenue: "시간당 50kg급 생산성과 원료 전환 유연성",
    thumb: THUMB.machine,
  },
];

// ── FAQ ─────────────────────────────────────────────────
export type LabFaqItem = { q: string; a: string };
export type LabFaqCategory = { id: string; label: string; items: LabFaqItem[] };

export const FAQ_CATEGORIES: LabFaqCategory[] = [
  {
    id: "value",
    label: "제품 명칭 · 활용",
    items: [
      {
        q: "너츠스타와 넛츠스타는 같은 버터머신인가요?",
        a: "네. 공식 한글 제품명은 넛츠스타이고 영문명은 NUTS-STAR입니다. 고객이 자주 검색하는 너츠스타도 같은 제품을 뜻합니다. 엔비피코리아가 국내에서 설계·제작하고 설치와 A/S를 직접 지원하는 상업용 버터머신입니다.",
      },
      {
        q: "땅콩버터머신과 견과 페이스트 제조기는 다른 기계인가요?",
        a: "시장에서는 땅콩버터머신, 피넛버터머신, 넛버터머신, 견과류 분쇄기, 땅콩·아몬드·피스타치오 페이스트 제조기처럼 여러 이름으로 부릅니다. 넛츠스타는 로스팅된 견과를 분쇄해 버터 또는 페이스트 질감으로 만드는 한 대의 상업용 장비입니다.",
      },
      {
        q: "피스타치오페이스트와 아몬드페이스트도 만들 수 있나요?",
        a: "네. 볶은 땅콩뿐 아니라 아몬드·피스타치오·캐슈넛·호두 등 다양한 견과를 가공할 수 있습니다. 다만 견과마다 기름 함량과 함수율이 달라 원하는 농도와 레시피가 있다면 실제 원료로 먼저 무상 시연하는 것을 권장합니다.",
      },
      {
        q: "젤라또·땅콩빵·베이커리에도 사용할 수 있나요?",
        a: "젤라또용 피스타치오·땅콩 페이스트, 땅콩빵 속재료, 크루아상·쿠키 필링, 카페 음료·토스트, 두쫀쿠 같은 피스타치오 디저트 원료까지 활용할 수 있습니다. 매장 레시피에 필요한 질감과 1회 생산량을 상담할 때 알려주세요.",
      },
      {
        q: "완제품 페이스트 구매보다 직접 제조가 유리한가요?",
        a: "사용량이 많거나 원료·배합을 직접 관리해야 하는 매장은 완제품 구매 비용과 수급 변동을 줄일 수 있습니다. 정확한 절감 폭과 회수 기간은 견과 원가, 하루 사용량, 목표 배합에 따라 달라지므로 상담 시 실제 사용량을 기준으로 함께 계산합니다.",
      },
    ],
  },
  {
    id: "before",
    label: "도입 전",
    items: [
      {
        q: "어떤 견과까지 다룰 수 있나요?",
        a: "로스팅된 땅콩, 아몬드, 캐슈넛, 호두 등 일반 견과 대부분을 한 대로 처리합니다. 함수율과 기름 함량이 매우 다른 특수 원료는 도입 전 사전 상담을 권장합니다.",
      },
      {
        q: "전원 공사가 필요한가요?",
        a: "220V 단상 50/60Hz, 가정용 전원이면 충분합니다. 별도 동력 인입 공사 없이 카운터에서 바로 운용할 수 있습니다.",
      },
      {
        q: "카운터에 올릴 수 있는 크기인가요?",
        a: "치수는 254 × 600 × 680 mm, 무게는 35kg입니다. 일반 매장 카운터에 무리 없이 올라가는 사이즈로 설계되었습니다.",
      },
    ],
  },
  {
    id: "use",
    label: "사용 중",
    items: [
      {
        q: "SMOOTH 와 CRUNCHY 는 어떻게 다르게 만드나요?",
        a: "분쇄 시간과 휴지 구간 길이로 결을 조절합니다. 같은 견과를 두 가지 질감으로 나누는 운용 흐름은 04.02 영상에서 보여드립니다.",
      },
      {
        q: "하루 몇 kg까지 무리 없이 돌릴 수 있나요?",
        a: "시간당 처리량 50kg을 기준으로 설계된 모터(1.7kW 인버터 제어)입니다. 매장 영업 시간 안에서 충분히 회전시킬 수 있는 여유 구간을 두고 운용하는 것을 권장합니다.",
      },
      {
        q: "분쇄 도중 멈췄어요. 고장인가요?",
        a: "대부분의 경우 과부하 보호가 작동한 상태입니다. 전원을 끄고 1~2분 식힌 뒤 재가동하면 정상으로 돌아옵니다. 자가 진단 순서는 05.04 영상에서 확인하세요.",
      },
    ],
  },
  {
    id: "service",
    label: "A/S · 보증",
    items: [
      {
        q: "보증 기간은 어떻게 되나요?",
        a: "기본 보증 기간 안에서는 부품·공임을 무상 진행합니다. 보증 범위와 기간은 배송 시 동봉되는 보증서에 정확히 명시됩니다.",
      },
      {
        q: "A/S 신청은 어디로 하나요?",
        a: "/contact 의 견적·문의 폼 또는 nbpkorea@nbpkorea.co.kr 로 모델명·증상·매장 위치를 알려주시면 가장 빠른 일정으로 답변드립니다.",
      },
    ],
  },
];

export const FAQ_COUNT = FAQ_CATEGORIES.reduce((n, c) => n + c.items.length, 0);

// ── 공지 · 노트 ─────────────────────────────────────────
export type LabNotice = {
  id: string;
  date: string; // "2026.05.18"
  category: string; // "공지" / "정비" / "일정"
  title: string;
  excerpt: string;
};

export const NOTICES: LabNotice[] = [
  {
    id: "2026-05-firmware",
    date: "2026.05.18",
    category: "정비",
    title: "분쇄부 펌웨어 미세 업데이트 — 5월 출고분부터 적용",
    excerpt: "구동부 회전 곡선을 미세 조정하여 SMOOTH 모드 일관성을 높였습니다. 기존 사용자 영향 없음.",
  },
  {
    id: "2026-04-summer-schedule",
    date: "2026.04.27",
    category: "일정",
    title: "여름 시즌 A/S 출장 일정 안내",
    excerpt: "6월 ~ 8월 출장 일정과 권역별 우선순위 안내. 사전 접수 권장.",
  },
  {
    id: "2026-03-issue-03",
    date: "2026.03.02",
    category: "공지",
    title: "더 랩 03호 — 넛츠스타 디지털 매거진 공개",
    excerpt: "지면을 다시 짜고, 사용·관리 노트를 부록으로 묶었습니다. 같은 주소, 새 편집.",
  },
];

// ── 매거진 기록 ─────────────────────────────────────────
export type LabBlock = { type: "p" | "h2" | "quote"; text: string };
export type LabPost = {
  id: string;
  chapter: string; // "07.01"
  date: string;
  category: string;
  title: string;
  excerpt: string;
  readMinutes: number;
  keywords: string[];
  thumb: string;
  body: LabBlock[];
};

export const LAB_POSTS: LabPost[] = [
  {
    id: "menu-three-ways",
    chapter: "07.01",
    date: "2026.05.30",
    category: "메뉴 노트",
    title: "넛버터머신 한 대로 만드는 세 가지 매출 — 카페 신메뉴 운용",
    excerpt:
      "갓 간 땅콩버터로 토스트·라떼·소분 판매까지. 카페 추가매출을 만드는 세 가지 메뉴 라인을 원가·보관·회전율 관점에서 정리했습니다.",
    readMinutes: 5,
    keywords: [
      "카페 추가매출",
      "카페 신메뉴",
      "땅콩버터 메뉴",
      "카페 시그니처 메뉴",
      "수제 땅콩버터",
      "넛버터머신",
    ],
    thumb: THUMB.butter,
    body: [
      { type: "p", text: "넛버터머신을 카운터에 올리면 ‘기계 한 대’가 아니라 ‘메뉴 한 줄’이 늘어납니다. 갓 간 땅콩버터·아몬드버터는 그 자체가 시그니처 재료라, 같은 원물로 서로 다른 매출 라인을 동시에 굴릴 수 있습니다. 카페 추가매출 관점에서 가장 흔히 자리 잡는 세 가지를 정리했습니다." },
      { type: "h2", text: "1. 토스트·베이글 — 스프레드로 객단가를 올린다" },
      { type: "p", text: "가장 운영 부담이 적은 출발점입니다. 갓 간 버터를 그 자리에서 발라내는 토스트·베이글은 ‘매장에서 직접 간다’를 메뉴판에 그대로 적을 수 있는 메뉴입니다. 완제품 스프레드를 사다 쓰는 것보다 원물(견과) 원가가 낮아 마진이 크고, 음료에 곁들이는 사이드로 묶으면 객단가가 자연스럽게 올라갑니다." },
      { type: "h2", text: "2. 피넛버터 라떼·쉐이크 — 음료 한 줄을 더 만든다" },
      { type: "p", text: "음료 라인에 견과버터 한 스푼을 더하는 방식입니다. 피넛버터 라떼나 쉐이크처럼 사진이 찍히는 시즌 한정 메뉴로 묶으면, 기존 음료 매출 위에 새로운 라인이 한 줄 더 생깁니다. 견과의 고소함은 우유·바닐라와 잘 맞아 레시피 진입장벽도 낮습니다." },
      { type: "h2", text: "3. 소분 잼통 — 좌석 회전과 무관한 매출" },
      { type: "p", text: "당일 분쇄한 버터를 병에 담아 매대에서 파는 리테일입니다. 테이블 회전과 상관없이 ‘가져가는 매출’이 붙고, 무첨가·당일 제조라는 점이 그대로 셀링 포인트가 됩니다. 토스트를 먹은 손님이 같은 버터를 한 병 사 가는 흐름이 자연스럽게 만들어집니다." },
      { type: "h2", text: "한 대로 세 줄을 동시에" },
      { type: "p", text: "세 라인의 핵심은 ‘같은 원물, 다른 매출’입니다. 견과만 바꾸면 땅콩·아몬드·캐슈넛으로 시즌 메뉴를 돌릴 수 있고, 보관은 소독한 병에 밀봉해 냉장하면 됩니다. 시간당 50kg 처리량이면 영업 중 시그니처 메뉴와 소분 판매를 함께 운용해도 회전에 여유가 있습니다. 어떤 라인부터, 어떤 구성으로 시작할지는 매장 객수와 동선에 따라 달라지므로 도입 상담에서 메뉴 시나리오를 함께 설계하는 편이 빠릅니다." },
    ],
  },
  {
    id: "field-cafe-incheon",
    chapter: "07.02",
    date: "2026.05.11",
    category: "운영 관점",
    title: "넛버터머신 도입 두 달, 매장에서 무엇이 바뀔까",
    excerpt:
      "수제 땅콩버터 메뉴를 더한 소형 카페에서 도입 초기에 흔히 나타나는 변화를 운영 관점에서 정리했습니다. 숫자는 매장마다 다릅니다.",
    readMinutes: 5,
    keywords: [
      "카페 땅콩버터 도입",
      "카페 추가매출",
      "수제 땅콩버터",
      "카페 신메뉴",
      "넛버터머신 후기",
    ],
    thumb: THUMB.missionThumb,
    body: [
      { type: "p", text: "“도입하면 두 달이면 뭐가 달라지나요?” 가장 자주 받는 질문입니다. 매장 규모·객수·메뉴 구성이 다 달라 한 숫자로 답하기는 어렵지만, 소형 카페가 수제 땅콩버터 메뉴를 더했을 때 초기에 공통적으로 나타나는 흐름은 있습니다. 특정 매장의 매출을 약속하는 글이 아니라, 운영 관점에서 무엇이 바뀌는지를 정리한 글입니다." },
      { type: "h2", text: "1주차 — 메뉴판에 ‘직접 간다’가 생긴다" },
      { type: "p", text: "처음 바뀌는 건 매출보다 메뉴판입니다. ‘매장에서 직접 간 땅콩버터’ 한 줄이 토스트·음료 옆에 붙으면, 별다른 홍보 없이도 손님이 먼저 물어봅니다. 첫 주는 분쇄 질감(SMOOTH↔CRUNCHY)과 1회 분쇄량을 매장 회전에 맞추는 적응 기간으로 보면 됩니다." },
      { type: "h2", text: "한 달 — 토스트·스프레드가 자리를 잡는다" },
      { type: "p", text: "한 달쯤 지나면 토스트·베이글 같은 스프레드 메뉴가 고정 주문으로 자리 잡습니다. 완제품을 사다 쓰지 않으니 원가가 내려가고, 사이드로 묶인 메뉴라 음료 객단가도 함께 올라가는 경우가 많습니다." },
      { type: "h2", text: "두 달 — 소분 판매가 붙는다" },
      { type: "p", text: "메뉴가 익으면 손님이 ‘이 버터 사 갈 수 있냐’고 묻기 시작합니다. 이 시점에 당일 분쇄 버터를 병에 담아 매대에 올리면, 좌석 회전과 무관한 리테일 매출이 더해집니다. 매장 안 메뉴와 가져가는 매출이 같은 원물에서 나오는 구조가 만들어집니다." },
      { type: "h2", text: "숫자는 매장마다 다르다" },
      { type: "p", text: "회수 기간과 추가 매출 폭은 객수·메뉴 구성·가격대에 따라 크게 달라집니다. 그래서 일률적인 수치를 내세우기보다, 매장 상황을 놓고 메뉴 구성과 예상 회전을 함께 계산하는 편이 정확합니다. 도입 상담에서 매장에 맞는 매출 시나리오를 같이 설계해 드립니다." },
    ],
  },
  {
    id: "spec-explained",
    chapter: "07.03",
    date: "2026.04.21",
    category: "사양 가이드",
    title: "왜 1.7kW 인버터인가 — 카페 사장이 봐야 할 사양",
    excerpt:
      "정격 출력 숫자보다 중요한 것은 ‘영업 중에 끊김 없이 도는가’입니다. 넛버터머신 넛츠스타의 사양을 카페 운용 관점에서 풀었습니다.",
    readMinutes: 5,
    keywords: [
      "넛버터머신 사양",
      "땅콩버터머신 모터",
      "상업용 땅콩버터 기계",
      "카페 땅콩버터 기계",
      "넛버터머신 전원",
    ],
    thumb: THUMB.machine,
    body: [
      { type: "p", text: "장비 사양표는 숫자만 보면 다 비슷해 보입니다. 하지만 카페에서 중요한 건 ‘정격 출력이 몇 와트냐’보다 ‘영업 시간 안에 끊김 없이 도느냐’입니다. 넛버터머신 넛츠스타의 핵심 사양을 카페 운용 관점에서 풀어봤습니다." },
      { type: "h2", text: "정격 출력보다 제어 — 1.7kW 인버터" },
      { type: "p", text: "견과는 분쇄가 진행되며 부하가 출렁입니다. 처음엔 단단한 알갱이, 뒤로 갈수록 끈적한 페이스트로 바뀌죠. 인버터 제어 모터는 이 부하 변화에 맞춰 속도를 조절해 과열과 멈춤을 줄입니다. 1.7kW는 단순히 ‘힘’이 아니라, 연속 운용에서 안정적으로 회전시키기 위한 제어 여유로 보는 게 맞습니다." },
      { type: "h2", text: "시간당 50kg — 영업 중에도 회전이 된다" },
      { type: "p", text: "처리량 시간당 50kg은 시그니처 메뉴와 소분 판매를 함께 돌려도 견디는 구간입니다. 피크 타임에 토스트용 버터를 갈면서 소분용을 준비해도 줄이 밀리지 않도록, 영업 시간 안에서 여유를 두고 운용하는 것을 권장합니다." },
      { type: "h2", text: "220V 가정용 전원 — 별도 공사 없이 카운터에" },
      { type: "p", text: "220V 단상 50/60Hz, 일반 가정용 전원이면 충분합니다. 별도 동력 인입 공사가 필요 없어 254×600×680mm 크기로 기존 매장 카운터 위에 바로 올릴 수 있습니다. 하우징은 STS304 스테인리스, KC 전기용품 안전인증을 받았습니다." },
      { type: "h2", text: "SMOOTH ↔ CRUNCHY — 원터치 질감" },
      { type: "p", text: "분쇄 질감은 원터치로 SMOOTH와 CRUNCHY 사이에서 고릅니다. 같은 기계로 매장 취향에 맞춰 부드러운 스프레드와 씹는 결이 살아있는 버터를 모두 만들 수 있어, 메뉴 확장이 자유롭습니다." },
    ],
  },
];

// ── 자료 허브 (하위 페이지 디렉토리) ────────────────────
// tier: "primary"는 시각적으로 강조하는 주력 자료, "secondary"는 부가 자료.
export type LibraryEntry = {
  href: string;
  label: string;
  desc: string;
  meta: string;
  tier: "primary" | "secondary";
};

export const LIBRARY: LibraryEntry[] = [
  {
    href: "/the-lab/guides",
    label: "사용 · 관리 가이드",
    desc: "처음 켜는 날부터 견과 전환까지, 일일 마감과 주간 정비·자가 진단 순서를 단계별 영상으로.",
    meta: `${USE_GUIDES.length + CARE_GUIDES.length}편`,
    tier: "primary",
  },
  {
    href: "/the-lab/recipes",
    label: "레시피",
    desc: "기본 땅콩버터·아몬드버터부터 카페 스프레드 메뉴까지. 재료·단계로 정리한 레시피.",
    meta: `${RECIPES.length}개`,
    tier: "primary",
  },
  {
    href: "/the-lab/faq",
    label: "자주 묻는 질문",
    desc: "도입 전 · 사용 중 · A/S까지.",
    meta: `${FAQ_COUNT}개`,
    tier: "secondary",
  },
  {
    href: "/the-lab/notice",
    label: "공지 · 노트",
    desc: "펌웨어 · 출장 일정 등 현장 변화.",
    meta: `${NOTICES.length}건`,
    tier: "secondary",
  },
  {
    href: "/the-lab/blog",
    label: "현장 노트",
    desc: "메뉴 · 현장 · 엔지니어 노트.",
    meta: `${LAB_POSTS.length}편`,
    tier: "secondary",
  },
];

// ── 카드 허브용 묶음 (메인 페이지 '사용·관리·레시피' 카드 그리드) ──
export type LabCard = {
  href: string;
  index: string; // 챕터·번호 (타이포 카드용)
  eyebrow: string; // 카드 상단 캡션 (카테고리·번호)
  title: string;
  meta: string; // 하단 메타 (시간·난이도 등)
  thumb: string;
};

// variant: "video" = 영상 가이드 카드(재생 버튼·시간 배지), "image" = 사진 카드
export const HUB_CARDS: {
  group: string;
  variant: "video" | "image";
  href: string;
  cards: LabCard[];
}[] = [
  {
    group: "사용",
    variant: "video",
    href: "/the-lab/guides",
    cards: USE_GUIDES.map((g) => ({
      href: `/the-lab/guides/${g.id}`,
      index: g.chapter,
      eyebrow: `사용 · ${g.chapter}`,
      title: g.title,
      meta: g.durationLabel,
      thumb: g.thumb,
    })),
  },
  {
    group: "청소 · 관리",
    variant: "video",
    href: "/the-lab/guides",
    cards: CARE_GUIDES.map((g) => ({
      href: `/the-lab/guides/${g.id}`,
      index: g.chapter,
      eyebrow: `관리 · ${g.chapter}`,
      title: g.title,
      meta: g.durationLabel,
      thumb: g.thumb,
    })),
  },
  {
    group: "레시피",
    variant: "image",
    href: "/the-lab/recipes",
    cards: RECIPES.map((r) => ({
      href: `/the-lab/recipes/${r.id}`,
      index: r.no,
      eyebrow: `레시피 · ${r.no}`,
      title: r.title,
      meta: `${r.timeLabel} · ${r.difficulty}`,
      thumb: r.thumb,
    })),
  },
];
