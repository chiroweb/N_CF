// Nut butter machine delivery ledger — source: 넛츠스타_넛버터머신 납품실적_260120.pptx.
// Slide 1 summary table is authoritative; where detail slides (2–10) show a
// different month (No.04, No.06, No.08) the table value is kept.
// No.10 (착한습관 13대), No.11 (흥국산업 1대) are 2026.05 scheduled and have
// no detail slide.

export type NutstarBusinessType =
  | "견과류 제조·가공"
  | "백화점 팝업"
  | "방앗간"
  | "카페"
  | "베이커리 카페";

export type NutstarStatus = "delivered" | "pending";

export type NutstarDelivery = {
  id: string;
  customer: string;
  businessType: NutstarBusinessType;
  capacityKg: 50;
  qty: number;
  deliveryDate: string;
  status: NutstarStatus;
  region: string;
  district?: string;
  neighborhood?: string;
  applications?: string[];
  operatingMode?: string;
  applicableMaterial?: string;
};

export const NUTSTAR_DELIVERIES: NutstarDelivery[] = [
  {
    id: "01",
    customer: "동우농산(주)",
    businessType: "견과류 제조·가공",
    capacityKg: 50,
    qty: 1,
    deliveryDate: "2025.04",
    status: "delivered",
    region: "경기도",
    district: "광주시",
    applications: [
      "견과류 버터 제조 (땅콩/아몬드/캐슈넛/피스타치오 등)",
      "견과류 정과 생산",
      "대량 생산 대응",
    ],
    operatingMode: "연속 분쇄",
    applicableMaterial: "볶은 땅콩(탈피) / 견과류 원물",
  },
  {
    id: "02",
    customer: "현대백화점 판교점",
    businessType: "백화점 팝업",
    capacityKg: 50,
    qty: 1,
    deliveryDate: "2025.04",
    status: "delivered",
    region: "경기도",
    district: "성남시",
    neighborhood: "판교",
    applications: [
      "견과류 버터 (땅콩/아몬드/캐슈넛/피스타치오 등)",
      "견과류 정과",
    ],
    operatingMode: "즉석 연속 분쇄 (시연)",
    applicableMaterial: "볶은 땅콩(탈피) / 견과류 원물",
  },
  {
    id: "03",
    customer: "현대백화점 판교점",
    businessType: "백화점 팝업",
    capacityKg: 50,
    qty: 1,
    deliveryDate: "2025.04",
    status: "delivered",
    region: "경기도",
    district: "성남시",
    neighborhood: "판교",
    applications: [
      "견과류 버터 (땅콩/아몬드/캐슈넛/피스타치오 등)",
      "견과류 정과",
    ],
    operatingMode: "즉석 연속 분쇄 (시연)",
    applicableMaterial: "볶은 땅콩(탈피) / 견과류 원물",
  },
  {
    id: "04",
    customer: "AK플라자 분당점",
    businessType: "백화점 팝업",
    capacityKg: 50,
    qty: 1,
    deliveryDate: "2025.05",
    status: "delivered",
    region: "경기도",
    district: "성남시",
    neighborhood: "분당",
    applications: ["매장 내 땅콩버터 즉석 제조 및 판매", "고객 대상 제품 시연"],
    operatingMode: "소형 즉석 제조용",
    applicableMaterial: "볶은 땅콩(탈피) / 견과류 원물",
  },
  {
    id: "05",
    customer: "고래방앗간",
    businessType: "방앗간",
    capacityKg: 50,
    qty: 1,
    deliveryDate: "2025.04",
    status: "delivered",
    region: "서울특별시",
    applications: [
      "매장 내 땅콩버터 즉석 제조 및 판매",
      "100% 땅콩버터 제조",
    ],
    operatingMode: "연속분쇄",
    applicableMaterial: "볶은 땅콩(탈피)",
  },
  {
    id: "06",
    customer: "AK플라자 분당점",
    businessType: "백화점 팝업",
    capacityKg: 50,
    qty: 1,
    deliveryDate: "2025.08",
    status: "delivered",
    region: "경기도",
    district: "성남시",
    neighborhood: "분당",
    applications: ["매장 내 땅콩버터 즉석 제조 및 판매", "고객 대상 제품 시연"],
    operatingMode: "소형 즉석 제조용",
    applicableMaterial: "볶은 땅콩(탈피) / 견과류 원물",
  },
  {
    id: "07",
    customer: "넥스트 커피 랩",
    businessType: "카페",
    capacityKg: 50,
    qty: 2,
    deliveryDate: "2025.03",
    status: "delivered",
    region: "경기도",
    district: "안산시",
    applications: ["매장 내 땅콩버터 제조", "메뉴용/디저트용 소량 생산"],
    operatingMode: "연속분쇄",
    applicableMaterial: "볶은 땅콩(탈피), 구운 아몬드",
  },
  {
    id: "08",
    customer: "메종드크루아상",
    businessType: "베이커리 카페",
    capacityKg: 50,
    qty: 1,
    deliveryDate: "2025.11",
    status: "delivered",
    region: "인천광역시",
    applications: [
      "매장 내 땅콩버터 제조 및 판매",
      "베이커리 메뉴 활용 (토핑/필링 등)",
    ],
    operatingMode: "연속분쇄",
    applicableMaterial: "볶은 땅콩(탈피), 구운 아몬드",
  },
  {
    id: "09",
    customer: "트레페베이커리",
    businessType: "베이커리 카페",
    capacityKg: 50,
    qty: 1,
    deliveryDate: "2026.01",
    status: "delivered",
    region: "인천광역시",
    applications: [
      "매장 내 땅콩버터 제조 및 판매",
      "베이커리 메뉴 활용 (토핑/필링 등)",
    ],
    operatingMode: "연속분쇄",
    applicableMaterial: "볶은 땅콩(탈피), 구운 아몬드",
  },
  {
    id: "10",
    customer: "착한습관",
    businessType: "견과류 제조·가공",
    capacityKg: 50,
    qty: 13,
    deliveryDate: "2026.05 예정",
    status: "pending",
    region: "경기도",
    district: "광주시",
  },
  {
    id: "11",
    customer: "흥국산업",
    businessType: "견과류 제조·가공",
    capacityKg: 50,
    qty: 1,
    deliveryDate: "2026.05 예정",
    status: "pending",
    region: "경기도",
    district: "하남시",
  },
];

const sum = (xs: number[]): number => xs.reduce((a, b) => a + b, 0);

export const NUTSTAR_SUMMARY = {
  totalUnits: sum(NUTSTAR_DELIVERIES.map((d) => d.qty)),
  totalCustomers: NUTSTAR_DELIVERIES.length,
  deliveredUnits: sum(
    NUTSTAR_DELIVERIES.filter((d) => d.status === "delivered").map((d) => d.qty)
  ),
  pendingUnits: sum(
    NUTSTAR_DELIVERIES.filter((d) => d.status === "pending").map((d) => d.qty)
  ),
  businessTypeCount: new Set(NUTSTAR_DELIVERIES.map((d) => d.businessType)).size,
  regionCount: new Set(NUTSTAR_DELIVERIES.map((d) => d.region)).size,
  earliest: "2025.03",
  latest: "2026.05 예정",
};

export const NUTSTAR_BUSINESS_TYPES: NutstarBusinessType[] = [
  "견과류 제조·가공",
  "백화점 팝업",
  "방앗간",
  "카페",
  "베이커리 카페",
];
