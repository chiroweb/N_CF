const S3_PRODUCT = "https://chiro-web.s3.ap-northeast-2.amazonaws.com/fa/AFTERBUNNER/products";
const S3_HOTEL = "https://chiro-web.s3.ap-northeast-2.amazonaws.com/hotel_A";

// ── AFTERBURNER MODELS ─────────────────────────────────────────────
// Model codes and dimensions are sourced from the 2019 NBPKOREA Korean
// afterburner catalogue. The public lineup starts at 5Kg and goes up to
// a custom 120Kg industrial build.
export const AFTERBURNER_MODELS = [
  {
    id: "nkjc-5k",
    name: "NKJC-5K",
    capacity: "5kg",
    target: "Small Roastery",
    targetKr: "중소형 로스터리",
    size: "435 × 545 × 1,310mm",
    burner: "Surface Combustion Panel Burner",
    burnerKr: "표면연소 고효율 패널버너",
    controller: "Digital",
    connector: "도시가스 (13A)",
    image: `${S3_PRODUCT}/ab-1k-1.png`,
    gallery: [`${S3_PRODUCT}/ab-1k-1.png`],
  },
  {
    id: "nkjc-10k",
    name: "NKJC-10K",
    capacity: "10kg",
    target: "Medium Café",
    targetKr: "중형 로스터리 카페",
    size: "545 × 645 × 1,700mm",
    burner: "Dual-Stage Duct Burner",
    burnerKr: "이단연소 고효율 덕트버너",
    controller: "Digital",
    connector: "LPG / 도시가스 (13A)",
    image: `${S3_HOTEL}/afterburner-hero-premium.png`,
    gallery: [
      `${S3_HOTEL}/afterburner-hero-premium.png`,
      `${S3_HOTEL}/mission-afterburner-thumb.png`,
      `${S3_PRODUCT}/afterburner-metal.png`,
    ],
  },
  {
    id: "nkjc-15k",
    name: "NKJC-15K",
    capacity: "15kg",
    target: "Large Roastery",
    targetKr: "대형 로스터리",
    size: "545 × 655 × 1,795mm",
    burner: "Dual-Stage Duct Burner",
    burnerKr: "이단연소 고효율 덕트버너",
    controller: "Touch Screen",
    connector: "LPG / 도시가스 (13A)",
    image: `${S3_HOTEL}/afterburner-black-premium.png`,
    gallery: [
      `${S3_HOTEL}/afterburner-black-premium.png`,
      `${S3_HOTEL}/afterburner-lineup.png`,
      `${S3_PRODUCT}/afterburner-black.png`,
    ],
  },
  {
    id: "nkjc-30k",
    name: "NKJC-30K",
    capacity: "30kg",
    target: "Industrial",
    targetKr: "산업용 대량 로스팅",
    size: "645 × 655 × 1,895mm",
    burner: "Dual-Stage Duct Burner",
    burnerKr: "이단연소 고효율 덕트버너",
    controller: "Proportional",
    connector: "LPG / 도시가스 (13A)",
    image: `${S3_HOTEL}/afterburner-install-system.png`,
    gallery: [
      `${S3_HOTEL}/afterburner-install-system.png`,
      `${S3_PRODUCT}/ab-10k-1.jpg`,
      `${S3_PRODUCT}/ab-10k-2.jpg`,
    ],
  },
  {
    id: "nkjc-60k",
    name: "NKJC-60K",
    capacity: "60kg",
    target: "Large Facility",
    targetKr: "대규모 산업 시설",
    size: "645 × 750 × 2,190mm",
    burner: "Dual-Stage Duct Burner",
    burnerKr: "이단연소 고효율 덕트버너",
    controller: "Proportional",
    connector: "LPG / 도시가스 (13A)",
    image: `${S3_PRODUCT}/ab-30k-1.png`,
    gallery: [`${S3_PRODUCT}/ab-30k-1.png`],
  },
  {
    id: "nkjc-120k",
    name: "NKJC-120K",
    capacity: "120kg",
    target: "Large Industrial",
    targetKr: "대형 산업 플랜트",
    size: "800 × 900 × 2,500mm",
    burner: "Dual-Stage Duct Burner",
    burnerKr: "이단연소 고효율 덕트버너",
    controller: "Proportional",
    connector: "LPG / 도시가스 (13A)",
    image: `${S3_PRODUCT}/afterburner-main.png`,
    gallery: [`${S3_PRODUCT}/afterburner-main.png`],
  },
];

export const AFTERBURNER_COMMON_SPECS = {
  heatSource: "LNG / LPG / 도시가스 (13A)",
  combustionTemp: "200°C ~ 1,000°C",
  removalRate: "99.2%",
  power: "220V single-phase 50/60Hz",
  gasSaving: "30%",
  thermalEfficiency: "98%",
  proportionalRatio: "40:1",
  warranty: "1 year parts & labor",
};

export const COMPATIBLE_ROASTERS = [
  "PROBAT", "GIESEN", "LORING", "FUJI ROYAL", "PROASTER",
  "OZTURK", "DIEDRICH", "TOPER", "BUHLER", "JOPER",
];

// Certifications & awards sourced from the 2019 Korean catalogue. Used
// on /afterburner and as structured data for SEO/AEO.
export const AFTERBURNER_CERTIFICATIONS = [
  {
    id: "gas-safety",
    title: "가스안전공사 검사 합격",
    titleEn: "Korea Gas Safety Corporation Certified",
    note: "모든 버너·컨트롤러는 한국가스안전공사 검사를 통과했습니다.",
  },
  {
    id: "gyeonggi-6",
    title: "경기도 미세먼지 저감 6대 신기술 선정",
    titleEn: "Gyeonggi-do Fine-Dust Abatement — Top-6 New Technology",
    note: "경기도가 선정한 미세먼지 저감 6대 신기술에 선정된 제품입니다.",
  },
  {
    id: "motie-award",
    title: "산업통상자원부 강관상 수상",
    titleEn: "Ministry of Trade, Industry & Energy — Strong Product Award",
    note: "산업통상자원부가 선정하는 강소제품상(강관상)을 수상했습니다.",
  },
  {
    id: "patents",
    title: "기술특허 · 디자인특허 16건 이상 등록",
    titleEn: "16+ Technical & Design Patents Registered",
    note: "촉맥식 재연소 가이드, 2단 덕트버너, 터치스크린 컨트롤러 등.",
  },
];

// The direct-flame afterburner flow. Exhaust from the coffee roaster
// passes through the cyclone, into the IN-LET duct, meets the direct
// flame (1st combustion), then a patented ceramic regenerative mixing
// guide (2nd thermal decomposition) before clean air exits the OUT-LET.
export const AFTERBURNER_FLOW = [
  {
    step: 1,
    title: "CYCLONE",
    titleKr: "사이클론",
    body: "로스팅 배기가 사이클론에서 체프와 굵은 입자를 1차 분리.",
    bodyEn: "Roaster exhaust first passes through a cyclone that removes chaff and coarse particulates.",
  },
  {
    step: 2,
    title: "IN-LET DUCT",
    titleKr: "인렛 덕트",
    body: "분리된 배기가 IN-LET 덕트를 통해 애프터버너 내부로 진입.",
    bodyEn: "The stripped gas stream enters the afterburner through the IN-LET duct.",
  },
  {
    step: 3,
    title: "DIRECT FLAME",
    titleKr: "직접화염 1차 연소",
    body: "직접화염 버너의 200℃–1,000℃ 고온과 직접 접촉하여 연기·냄새를 1차 완전 연소.",
    bodyEn: "Direct-flame burner at 200–1,000°C combusts smoke and odor in the first pass.",
  },
  {
    step: 4,
    title: "MIXING GUIDE",
    titleKr: "촉매식 재연소 가이드",
    body: "엔비피코리아 특허 촉매판을 통과하며 잔여 물질의 2차 열분해.",
    bodyEn: "A patented ceramic regenerative mixing guide breaks down residuals in a second thermal stage.",
  },
  {
    step: 5,
    title: "OUT-LET DUCT",
    titleKr: "아웃렛 덕트",
    body: "완전 정화된 공기만 OUT-LET 덕트를 거쳐 외부로 배출.",
    bodyEn: "Only fully cleaned air exits through the OUT-LET duct.",
  },
];

// ── ROASTER BASE MODELS (public lineup starts at BASE 5) ──
export const ROASTER_BASE_MODELS = [
  {
    id: "base-5",
    name: "BASE 5",
    code: "KBN1000-M-5",
    capacity: "5kg",
    target: "Medium Roastery",
    targetKr: "중형 로스터리",
    size: "90 × 155 × 165cm",
    weight: "330kg",
    power: "1.84kW",
    burner: "35kW",
    controller: "Software & Touchscreen",
    image: `${S3_HOTEL}/mission-roaster-thumb.png`,
    gallery: [
      `${S3_HOTEL}/mission-roaster-thumb.png`,
      `${S3_HOTEL}/roaster-hero-lineup.png`,
      `${S3_PRODUCT}/roaster-5kg-1.jpg`,
      `${S3_PRODUCT}/roaster-5kg-2.jpg`,
      `${S3_PRODUCT}/roaster-5kg-3.png`,
      `${S3_PRODUCT}/roaster-5kg-4.png`,
      `${S3_PRODUCT}/roaster-5kg-5.png`,
    ],
  },
  {
    id: "base-10",
    name: "BASE 10",
    code: "KBN1000-M-10",
    capacity: "10kg",
    target: "Large Roastery",
    targetKr: "대형 로스터리 카페",
    size: "107 × 195 × 190cm",
    weight: "480kg",
    power: "2.24kW",
    burner: "55kW",
    controller: "Full Auto / Touchscreen",
    image: `${S3_PRODUCT}/roaster-10kg-1.jpg`,
    gallery: [
      `${S3_PRODUCT}/roaster-10kg-1.jpg`,
      `${S3_PRODUCT}/roaster-10kg-2.jpg`,
      `${S3_PRODUCT}/roaster-10kg-3.png`,
      `${S3_PRODUCT}/roaster-10kg-4.png`,
    ],
  },
  {
    id: "base-15",
    name: "BASE 15",
    code: "KBN1000-M-15",
    capacity: "15kg",
    target: "Large Factory",
    targetKr: "대형 로스팅 공장",
    size: "107 × 200 × 195cm",
    weight: "530kg",
    power: "2.24kW",
    burner: "55kW",
    controller: "Software & Touchscreen",
    image: `${S3_PRODUCT}/roaster-15kg-1.png`,
    gallery: [
      `${S3_PRODUCT}/roaster-15kg-1.png`,
      `${S3_PRODUCT}/roaster-15kg-2.png`,
      `${S3_PRODUCT}/roaster-15kg-3.png`,
      `${S3_PRODUCT}/roaster-15kg-4.jpg`,
    ],
  },
  {
    id: "base-20",
    name: "BASE 20",
    code: "KBN1000-M-20",
    capacity: "20kg",
    target: "Industrial",
    targetKr: "산업용 로스팅",
    size: "115 × 210 × 205cm",
    weight: "670kg",
    power: "2.24kW",
    burner: "35kW",
    controller: "Software & Touchscreen",
    image: `${S3_PRODUCT}/roaster-20kg-1.jpg`,
    gallery: [
      `${S3_PRODUCT}/roaster-20kg-1.jpg`,
      `${S3_PRODUCT}/roaster-20kg-2.jpg`,
      `${S3_PRODUCT}/roaster-20kg-3.jpg`,
      `${S3_PRODUCT}/roaster-20kg-4.jpg`,
    ],
  },
];

export const ROASTER_SUPREME_IMAGE = `${S3_PRODUCT}/roaster-supreme-1.png`;
export const ROASTER_SUPREME_GALLERY = [
  `${S3_PRODUCT}/roaster-supreme-1.png`,
  `${S3_PRODUCT}/roaster-supreme-2.jpg`,
  `${S3_PRODUCT}/roaster-supreme-3.jpg`,
  `${S3_PRODUCT}/roaster-supreme-4.jpg`,
  `${S3_PRODUCT}/roaster-supreme-5.png`,
];

// ── NUT BUTTER MACHINE · NUTS-STAR (real spec from reference) ──
export const NUTBUTTER_PRODUCT = {
  id: "nuts-star",
  nameEn: "Nut Butter Machine · NUTS-STAR",
  nameKr: "넛버터 머신 · 넛츠스타",
  tagline: "갓 만든 신선함을 경험하세요",
  image: "/images/mission-nutbutter-thumb.png",
  heroImage: "/images/mission-nutbutter-thumb.png",
  gallery: [
    "/images/mission-nutbutter-thumb.png",
  ],
  features: [
    "다양한 견과 호환 (땅콩, 아몬드, 캐슈넛, 호두 등)",
    "국내제조 특허기술 (KC인증, 국내 자체 생산)",
    "손쉬운 질감 조절 (SMOOTH ~ CRUNCHY)",
    "간편한 원터치 조작 (ON/OFF 일체형 버튼)",
    "고성능 인버터 제어 (1.5kW 고효율 모터)",
    "위생적 스테인리스 스틸 (STS304 하우징 적용)",
    "가정용 220V 전원 사용",
    "컴팩트한 소형 크기 (카운터 설치 가능)",
  ],
  specs: [
    { label: "모델", value: "NUTS-STAR · 넛츠스타" },
    { label: "처리량", value: "시간당 50Kg" },
    { label: "전원", value: "220V · 50/60Hz" },
    { label: "구동", value: "1.7kW 인버터 제어" },
    { label: "치수", value: "254 × 600 × 680 mm (W×L×H)" },
    { label: "무게", value: "35kg" },
    { label: "하우징", value: "STS304 스테인리스 스틸" },
    { label: "안전장치", value: "비상정지 · 과부하 · 접지 · 절연" },
    { label: "인증", value: "KC 전기용품 안전인증" },
  ],
  applications: ["카페", "베이커리", "호텔", "레스토랑", "견과 전문점", "방앗간"],
  applicationsKr: "카페 · 베이커리 · 호텔 · 레스토랑 · 견과 전문점 · 방앗간",
};

export const HERO_IMAGES = {
  afterburner: `${S3_HOTEL}/afterburner-hero-premium.png`,
  roaster: `${S3_HOTEL}/roaster-hero-lineup.png`,
  nutbutter: "/images/mission-nutbutter-thumb.png",
};
