// /the-lab (NUTS-STAR 넛버터머신) 단일 데이터 소스.
// 스펙은 products.ts(NUTBUTTER_PRODUCT)가 정본이고, 이 파일이 the-lab 전용 콘텐츠와
// 파생 데이터(HEADLINE/PROCESS/LIBRARY)를 모은다. 가이드·FAQ·공지·포스트는 placeholder.
// 실제 S3 / CMS 자산으로 교체 예정.

import { NUTBUTTER_PRODUCT } from "@/lib/products";

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
  installCafe: "/images/brand-brick-cafe-install.png",
  installPhoto: "/images/installation-photo.png",
} as const;

// ── 설치 현장 갤러리 (소셜 프루프) ──────────────────────
// placeholder. 실제 거래처 설치 사진으로 교체한다(촬영 동의 후).
export type InstallShot = {
  id: string;
  thumb: string;
  region: string; // "인천"
  type: string; // "소형 카페"
  caption: string;
};

export const INSTALL_SHOTS: InstallShot[] = [
  {
    id: "incheon-cafe",
    thumb: THUMB.installCafe,
    region: "인천",
    type: "소형 카페",
    caption: "테이크아웃 중심 매장. 카운터 위 즉석 분쇄로 시그니처 스프레드 운용.",
  },
  {
    id: "seoul-bakery",
    thumb: THUMB.installPhoto,
    region: "서울",
    type: "베이커리",
    caption: "당일 분쇄 견과버터를 필링·토핑에 활용. 매대 옆 상시 가동.",
  },
  {
    id: "nut-shop",
    thumb: THUMB.material,
    region: "경기",
    type: "견과 전문점",
    caption: "원물 그대로 즉석 가공 판매. 고객 앞 시연이 곧 판매로.",
  },
  {
    id: "roastery",
    thumb: THUMB.butter,
    region: "부산",
    type: "로스터리 카페",
    caption: "원두와 함께 견과버터 라인 추가. 객단가·체류시간 상승.",
  },
];

// ── 거래처 후기 (소셜 프루프) ───────────────────────────
// ⚠ placeholder. 리뷰 스키마(AggregateRating)는 반드시 실제 후기·평점으로
// 교체한 뒤 배포할 것 — 허위 평점 마크업은 검색 패널티 대상.
export type Testimonial = {
  id: string;
  quote: string;
  author: string; // "김OO 대표"
  role: string; // "인천 · 소형 카페"
  rating: number; // 1–5
};

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    quote:
      "도입 두 달 만에 시그니처 토스트가 매장 베스트가 됐어요. ‘직접 간다’는 게 손님한테 그대로 전달됩니다.",
    author: "김OO 대표",
    role: "인천 · 소형 카페",
    rating: 5,
  },
  {
    id: "t2",
    quote:
      "기름 함량 다른 견과를 한 대로 다 돌립니다. 청소 동선이 단순해서 마감 부담이 거의 없어요.",
    author: "이OO 대표",
    role: "서울 · 베이커리",
    rating: 5,
  },
  {
    id: "t3",
    quote:
      "고객 앞에서 바로 갈아 판매하니 신뢰가 다릅니다. 시연이 곧 매출이에요.",
    author: "박OO 대표",
    role: "경기 · 견과 전문점",
    rating: 5,
  },
];

export const RATING_AVG =
  Math.round(
    (TESTIMONIALS.reduce((s, t) => s + t.rating, 0) / TESTIMONIALS.length) * 10
  ) / 10;

// ── 거래처 유형 (소셜 프루프 한 줄) ─────────────────────
export const PARTNER_TYPES = [
  "카페",
  "베이커리",
  "견과 전문점",
  "로스터리",
  "호텔",
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
  { value: "24", unit: "대", label: "현장 운용 중" },
  { value: "11", unit: "곳", label: "거래처" },
  { value: "2025–26", unit: "", label: "공급 기간" },
  { value: "100", unit: "%", label: "국내 설계·제작" },
];

export const TRUST_BLURB =
  "2025–2026년, 카페·베이커리·견과 전문점 11개 거래처에 24대를 공급해 매일 매장에서 돌아가고 있습니다. 설계부터 제작·A/S까지 국내에서 직접 책임집니다.";

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
    body: "로스팅된 땅콩·아몬드·캐슈넛·호두를 그대로 투입. 견과를 가리지 않고 한 대로 처리합니다.",
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
    body: "시간당 50kg, 따뜻할 때 병에 붓습니다. STS304 하우징, 단순한 마감 동선.",
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

// ── FAQ ─────────────────────────────────────────────────
export type LabFaqItem = { q: string; a: string };
export type LabFaqCategory = { id: string; label: string; items: LabFaqItem[] };

export const FAQ_CATEGORIES: LabFaqCategory[] = [
  {
    id: "value",
    label: "도입 효과 · 매출",
    items: [
      {
        q: "카페 추가 매출에 정말 도움이 되나요?",
        a: "갓 간 땅콩버터·견과버터는 토스트·베이글·라떼·디저트 토핑 같은 객단가 높은 시그니처 메뉴로 바로 연결됩니다. ‘매장에서 직접 간다’는 신선함이 차별화 포인트가 되어 재방문율과 객단가 상승, 카페 추가 매출로 이어집니다.",
      },
      {
        q: "어떤 카페 신메뉴를 추가로 만들 수 있나요?",
        a: "기본 땅콩버터·아몬드버터부터 크런치 스프레드, 피넛버터 라떼·쉐이크, 베이커리 필링·토핑, 정과·견과 디저트까지. 견과 하나로 카페·베이커리 시그니처 신메뉴를 폭넓게 확장할 수 있습니다.",
      },
      {
        q: "기존 카페에 더하기 좋은 창업·부가 수익 아이템인가요?",
        a: "카운터 위에 올라가는 컴팩트한 크기(254×600×680mm)에 220V 가정용 전원이라 별도 공사 없이 기존 매장에 바로 더할 수 있습니다. 즉석 분쇄 판매·소분 판매로 부가 수익 라인을 만들기에 적합한 카페 창업 아이템입니다.",
      },
      {
        q: "투자 비용은 어느 정도에 회수되나요?",
        a: "시간당 50kg 처리량으로 시그니처 메뉴와 소분 판매를 함께 운용하면 회전이 빠릅니다. 정확한 회수 기간은 매장 객수·메뉴 구성에 따라 다르므로, 도입 상담 시 매출 시나리오를 함께 설계해 드립니다.",
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
export type LabPost = {
  id: string;
  chapter: string; // "07.01"
  date: string;
  category: string;
  title: string;
  excerpt: string;
};

export const LAB_POSTS: LabPost[] = [
  {
    id: "menu-three-ways",
    chapter: "07.01",
    date: "2026.05.30",
    category: "메뉴 노트",
    title: "한 대로 만드는 세 가지 메뉴 — 카페 운용 시나리오",
    excerpt: "땅콩·아몬드·캐슈넛으로 짜는 시즌 메뉴. 원가, 보관, 회전율 관점에서.",
  },
  {
    id: "field-cafe-incheon",
    chapter: "07.02",
    date: "2026.05.11",
    category: "현장",
    title: "인천 소형 카페 — 도입 두 달의 변화",
    excerpt: "테이크아웃 비중과 객단가 변화. 사장님이 직접 적은 운영 일지.",
  },
  {
    id: "spec-explained",
    chapter: "07.03",
    date: "2026.04.21",
    category: "엔지니어 노트",
    title: "왜 1.7kW 인버터인가 — 사양표 뒤의 결정",
    excerpt: "정격 출력보다 더 중요한 것. 견과 부하 곡선에서 본 모터 선택.",
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
    label: "매거진 기록",
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
