// Generated from '2025 애프터버너 설치현황(국내·외)_251014.pdf' — do not edit by hand.
// Source: NBPKOREA 2025.10 compilation · 345 domestic + 36 overseas = 381 units.

export type InstallationRecord = {
  brand?: string;
  company: string;
  district: string;
  neighborhood?: string;
  capacity: string;
  region: string;
  country: "KR" | "CN" | "TH" | "TW" | "JP" | "KW" | "QA" | "HK";
};

export const INSTALLATIONS_2025_SUMMARY = {
  compiledAt: "2025.10",
  totals: { domestic: 345, overseas: 36, grand: 381 },
  topDomesticRegions: [
    { name: "서울특별시", count: 111 },
    { name: "경기도", count: 92 },
    { name: "부산광역시", count: 18 },
  ],
  overseasBreakdown: [
    { country: "China", code: "CN", count: 17, sharePct: 47.2 },
    { country: "Thailand", code: "TH", count: 7, sharePct: 19.4 },
    { country: "Taiwan", code: "TW", count: 6, sharePct: 16.6 },
    { country: "Japan", code: "JP", count: 2, sharePct: 5.5 },
    { country: "Kuwait", code: "KW", count: 2, sharePct: 5.5 },
    { country: "Qatar", code: "QA", count: 1, sharePct: 2.7 },
    { country: "Hongkong", code: "HK", count: 1, sharePct: 2.7 },
  ],
} as const;

export const DOMESTIC_REGION_BREAKDOWN: { region: string; count: number }[] = [
  { region: "서울특별시", count: 111 },
  { region: "경기도", count: 92 },
  { region: "부산광역시", count: 18 },
  { region: "대구광역시", count: 13 },
  { region: "경상남도", count: 12 },
  { region: "경상북도", count: 11 },
  { region: "광주광역시", count: 10 },
  { region: "전라북도", count: 9 },
  { region: "충청남도", count: 7 },
  { region: "인천광역시", count: 6 },
  { region: "대전광역시", count: 6 },
  { region: "전라남도", count: 5 },
  { region: "울산광역시", count: 3 },
  { region: "세종특별자치시", count: 2 },
  { region: "제주특별자치도", count: 2 },
  { region: "충청북도", count: 1 },
];

// ──────────────────────────────────────────────────────────────────────
// Seoul — 111 units (마포 15 · 강남 11 · 중구 9 · 송파 9 · 영등포 7 · 서초 6)
// ──────────────────────────────────────────────────────────────────────
const SEOUL: InstallationRecord[] = [
  // 종로구 · 3
  { company: "코피발리", brand: "Om Kusuma", district: "종로구", neighborhood: "이화동", capacity: "10K", region: "서울특별시", country: "KR" },
  { company: "올넥스트", brand: "HAWAIIAN QUEEN COFFEE", district: "종로구", neighborhood: "경운동", capacity: "10K", region: "서울특별시", country: "KR" },
  { company: "디터틀", district: "종로구", neighborhood: "성북동", capacity: "3K", region: "서울특별시", country: "KR" },
  // 강북구 · 3
  { company: "스트랭스커피", district: "강북구", neighborhood: "수유동", capacity: "5K", region: "서울특별시", country: "KR" },
  { company: "칠복상회", district: "강북구", neighborhood: "번동", capacity: "5K", region: "서울특별시", country: "KR" },
  { company: "비비드커피컴퍼니", district: "강북구", neighborhood: "미아동", capacity: "5K", region: "서울특별시", country: "KR" },
  // 성북구 · 3
  { company: "쿼츠커피", brand: "quartz", district: "성북구", neighborhood: "석관동", capacity: "10K", region: "서울특별시", country: "KR" },
  { company: "크림탑커피", district: "성북구", neighborhood: "삼선동", capacity: "5K", region: "서울특별시", country: "KR" },
  { company: "에피그램커피", district: "성북구", neighborhood: "석관동", capacity: "5K", region: "서울특별시", country: "KR" },
  // 동대문구 · 3
  { company: "배트콩커피", district: "동대문구", neighborhood: "회기동", capacity: "5K", region: "서울특별시", country: "KR" },
  { company: "바른커피", district: "동대문구", neighborhood: "장안동", capacity: "5K", region: "서울특별시", country: "KR" },
  { company: "8번가커피", district: "동대문구", neighborhood: "회기동", capacity: "15K", region: "서울특별시", country: "KR" },
  // 은평구 · 3
  { company: "C.M.P 커피", brand: "C.M.P COFFEE", district: "은평구", neighborhood: "신사동", capacity: "5K", region: "서울특별시", country: "KR" },
  { company: "유에스테틱", brand: "BEAUTY & YOU", district: "은평구", neighborhood: "구산동", capacity: "10K", region: "서울특별시", country: "KR" },
  { company: "파브스커피", district: "은평구", neighborhood: "신사동", capacity: "5K", region: "서울특별시", country: "KR" },
  // 서대문구 · 2
  { company: "라이프커피컴퍼니", brand: "LIFE COFFEE", district: "서대문구", neighborhood: "대현동", capacity: "3K", region: "서울특별시", country: "KR" },
  { company: "빈트리20025", brand: "Bean Tree", district: "서대문구", neighborhood: "홍은동", capacity: "10K", region: "서울특별시", country: "KR" },
  // 중랑구 · 4
  { company: "카페지기", brand: "CAFE, ZIGI", district: "중랑구", neighborhood: "상봉동", capacity: "10K", region: "서울특별시", country: "KR" },
  { company: "카페 하인나", brand: "CAFE HAINNA", district: "중랑구", neighborhood: "상봉동", capacity: "15K", region: "서울특별시", country: "KR" },
  { company: "5스타커피", district: "중랑구", neighborhood: "망우동", capacity: "5K", region: "서울특별시", country: "KR" },
  { company: "커피마나마", district: "중랑구", neighborhood: "면목동", capacity: "10K", region: "서울특별시", country: "KR" },
  // 마포구 · 15
  { company: "두두두부컴퍼니", district: "마포구", neighborhood: "연남동", capacity: "15K", region: "서울특별시", country: "KR" },
  { company: "피피커피", brand: "PP Coffee", district: "마포구", neighborhood: "망원동", capacity: "5K", region: "서울특별시", country: "KR" },
  { company: "가가커피", district: "마포구", neighborhood: "신공덕동", capacity: "5K", region: "서울특별시", country: "KR" },
  { company: "핏커피", brand: "PIT COFFEE", district: "마포구", neighborhood: "동교동", capacity: "15K", region: "서울특별시", country: "KR" },
  { company: "망원동내커피", district: "마포구", neighborhood: "망원동", capacity: "5K", region: "서울특별시", country: "KR" },
  { company: "카페메이븐", district: "마포구", neighborhood: "공덕동", capacity: "5K", region: "서울특별시", country: "KR" },
  { company: "경성커피", district: "마포구", neighborhood: "공덕동", capacity: "5K", region: "서울특별시", country: "KR" },
  { company: "더콰이엍 커피", brand: "the quiet coffee", district: "마포구", neighborhood: "성산동", capacity: "5K", region: "서울특별시", country: "KR" },
  { company: "소림커피", brand: "SORIMCOFFEE", district: "마포구", neighborhood: "서교동", capacity: "5K", region: "서울특별시", country: "KR" },
  { company: "교보문고", brand: "KYOBO", district: "마포구", neighborhood: "서교동", capacity: "10K", region: "서울특별시", country: "KR" },
  { company: "(주)몽중화", district: "마포구", neighborhood: "서교동", capacity: "30K", region: "서울특별시", country: "KR" },
  { company: "베네센터(주)", district: "마포구", neighborhood: "신수동", capacity: "5K", region: "서울특별시", country: "KR" },
  { company: "(주)커피뚜깡", brand: "Coffee Tuum", district: "마포구", neighborhood: "노고산동", capacity: "5K", region: "서울특별시", country: "KR" },
  { company: "꼬마인", brand: "COAMINE", district: "마포구", neighborhood: "서교동", capacity: "5K", region: "서울특별시", country: "KR" },
  { company: "이지스터", district: "마포구", neighborhood: "서교동", capacity: "10K", region: "서울특별시", country: "KR" },
  // 용산구 · 5
  { company: "씨엔더블유", district: "용산구", neighborhood: "서계동", capacity: "5K", region: "서울특별시", country: "KR" },
  { company: "바른커피", district: "용산구", neighborhood: "한남동", capacity: "10K", region: "서울특별시", country: "KR" },
  { company: "업사이드", brand: "up.side", district: "용산구", neighborhood: "용산동", capacity: "5K", region: "서울특별시", country: "KR" },
  { company: "커피더맨", brand: "COFFEE THEMAN", district: "용산구", neighborhood: "원효로1동", capacity: "10K", region: "서울특별시", country: "KR" },
  { company: "파라디소", brand: "PARADISO COFFEE", district: "용산구", neighborhood: "한남동", capacity: "3K", region: "서울특별시", country: "KR" },
  // 광진구 · 2
  { company: "커피농장의 하루", brand: "Coffeeharu", district: "광진구", neighborhood: "자양동", capacity: "5K", region: "서울특별시", country: "KR" },
  { company: "베노빅센", brand: "BENOVIXEN", district: "광진구", neighborhood: "화양동", capacity: "15K", region: "서울특별시", country: "KR" },
  // 성동구 · 5
  { company: "수수커피", district: "성동구", neighborhood: "하왕십리동", capacity: "10K", region: "서울특별시", country: "KR" },
  { company: "디피앤카피", brand: "CLC KOREA", district: "성동구", neighborhood: "성수동", capacity: "5K", region: "서울특별시", country: "KR" },
  { company: "롱블랙", brand: "LONG BLACK", district: "성동구", neighborhood: "용답동", capacity: "5K", region: "서울특별시", country: "KR" },
  { company: "비엠커피컴퍼니", brand: "BMC", district: "성동구", neighborhood: "성수동", capacity: "15K", region: "서울특별시", country: "KR" },
  { company: "카페 차", district: "성동구", neighborhood: "성수동", capacity: "15K", region: "서울특별시", country: "KR" },
  // 중구 · 9
  { company: "카페 남산아래", brand: "Roastery Cafe", district: "중구", neighborhood: "남산동", capacity: "5K", region: "서울특별시", country: "KR" },
  { company: "스트라이프 커피컴퍼니", brand: "STRIPE COFFEE", district: "중구", neighborhood: "신당동", capacity: "5K", region: "서울특별시", country: "KR" },
  { company: "커피그래", brand: "gre coffee", district: "중구", neighborhood: "신당동", capacity: "5K", region: "서울특별시", country: "KR" },
  { company: "커피아르고", brand: "Argo COFFEE", district: "중구", neighborhood: "신당동", capacity: "15K", region: "서울특별시", country: "KR" },
  { company: "커피스니퍼", brand: "Koffee Sniffer", district: "중구", neighborhood: "북창동", capacity: "5K", region: "서울특별시", country: "KR" },
  { company: "커피산책", district: "중구", neighborhood: "신당동", capacity: "5K", region: "서울특별시", country: "KR" },
  { company: "리사르커피", brand: "BETTER THAN ESPRESSO", district: "중구", neighborhood: "신당동", capacity: "10K", region: "서울특별시", country: "KR" },
  { company: "#52로스터스랩", brand: "#52LAB", district: "중구", neighborhood: "회현동", capacity: "10K", region: "서울특별시", country: "KR" },
  { company: "(주)조세통람", district: "중구", neighborhood: "신당동", capacity: "5K", region: "서울특별시", country: "KR" },
  // 영등포구 · 7
  { company: "필그림", brand: "Pilgrim", district: "영등포구", neighborhood: "영등포동", capacity: "15K", region: "서울특별시", country: "KR" },
  { company: "블랙그라운드", district: "영등포구", neighborhood: "당산동", capacity: "5K", region: "서울특별시", country: "KR" },
  { company: "생고기제작소", district: "영등포구", neighborhood: "대림동", capacity: "10K", region: "서울특별시", country: "KR" },
  { company: "커피 더 캠프", brand: "Coffee The Camp", district: "영등포구", neighborhood: "양평동", capacity: "10K", region: "서울특별시", country: "KR" },
  { company: "커피둘세", district: "영등포구", neighborhood: "문래동", capacity: "5K", region: "서울특별시", country: "KR" },
  { company: "라프라스", brand: "LAPLAS", district: "영등포구", neighborhood: "문래동", capacity: "5K", region: "서울특별시", country: "KR" },
  { company: "엔티크커피", brand: "ANTIQUE", district: "영등포구", neighborhood: "당산동", capacity: "10K", region: "서울특별시", country: "KR" },
  // 동작구 · 1
  { company: "원불교", district: "동작구", neighborhood: "흑석동", capacity: "5K", region: "서울특별시", country: "KR" },
  // 강남구 · 11
  { company: "Coffee Writer", district: "강남구", neighborhood: "신사동", capacity: "5K", region: "서울특별시", country: "KR" },
  { company: "트렌드 연 (엘미가)", brand: "Trend(h)", district: "강남구", neighborhood: "청담동", capacity: "3K", region: "서울특별시", country: "KR" },
  { company: "윈스컴퍼니", brand: "WYNS COMPANY", district: "강남구", neighborhood: "삼성동", capacity: "5K", region: "서울특별시", country: "KR" },
  { company: "이디야커피", brand: "KOFIA COFFEE", district: "강남구", neighborhood: "논현동", capacity: "10K", region: "서울특별시", country: "KR" },
  { company: "이지스터", brand: "EASYSTER", district: "강남구", neighborhood: "청담동", capacity: "10K", region: "서울특별시", country: "KR" },
  { company: "이디야커피", brand: "KOFIA COFFEE", district: "강남구", neighborhood: "논현동", capacity: "30K", region: "서울특별시", country: "KR" },
  { company: "라벨커피", brand: "LABEL", district: "강남구", neighborhood: "도곡동", capacity: "5K", region: "서울특별시", country: "KR" },
  { company: "리얼빈", brand: "REAL BEAN", district: "강남구", neighborhood: "자곡동", capacity: "5K", region: "서울특별시", country: "KR" },
  { company: "선우상사 (커피스테이션)", district: "강남구", neighborhood: "도곡동", capacity: "5K", region: "서울특별시", country: "KR" },
  { company: "커피플랜트", brand: "COFFEE PLANT", district: "강남구", neighborhood: "도곡동", capacity: "30K", region: "서울특별시", country: "KR" },
  { company: "브라이언스커피", brand: "Bean's Coffee", district: "강남구", neighborhood: "도곡동", capacity: "5K", region: "서울특별시", country: "KR" },
  // 강서구 · 3
  { company: "마에스터커피", brand: "MEISTER COFFEE", district: "강서구", neighborhood: "마곡동", capacity: "15K", region: "서울특별시", country: "KR" },
  { company: "누우이커피", brand: "NUKUI", district: "강서구", neighborhood: "화곡동", capacity: "15K", region: "서울특별시", country: "KR" },
  { company: "플루이드", brand: "FLUID", district: "강서구", neighborhood: "마곡동", capacity: "15K", region: "서울특별시", country: "KR" },
  // 양천구 · 4
  { company: "더나우커피", brand: "THE NOW COFFEE", district: "양천구", neighborhood: "목동", capacity: "5K", region: "서울특별시", country: "KR" },
  { company: "커피내음", district: "양천구", neighborhood: "신정동", capacity: "10K", region: "서울특별시", country: "KR" },
  { company: "위한", district: "양천구", neighborhood: "목동", capacity: "3K", region: "서울특별시", country: "KR" },
  { company: "저스트로스터", district: "양천구", neighborhood: "목동", capacity: "3K", region: "서울특별시", country: "KR" },
  // 강동구 · 3
  { company: "카페뜨미", district: "강동구", neighborhood: "상일동", capacity: "10K", region: "서울특별시", country: "KR" },
  { company: "얼터너티브", brand: "Alternative", district: "강동구", neighborhood: "길동", capacity: "5K", region: "서울특별시", country: "KR" },
  { company: "커피데스크", brand: "COFFEE :DESK", district: "강동구", neighborhood: "성내동", capacity: "5K", region: "서울특별시", country: "KR" },
  // 구로구 · 4
  { company: "우주토기", brand: "Would you Tokki", district: "구로구", neighborhood: "구로동", capacity: "5K", region: "서울특별시", country: "KR" },
  { company: "히즈라네고양이카페", district: "구로구", neighborhood: "개봉동", capacity: "5K", region: "서울특별시", country: "KR" },
  { company: "(주)카브로시아", district: "구로구", neighborhood: "항동", capacity: "5K", region: "서울특별시", country: "KR" },
  { company: "(주)카브로시아", district: "구로구", neighborhood: "항동", capacity: "5K", region: "서울특별시", country: "KR" },
  // 송파구 · 9
  { company: "커피엔톡", district: "송파구", neighborhood: "가락동", capacity: "1K", region: "서울특별시", country: "KR" },
  { company: "소호커피팩토리", district: "송파구", neighborhood: "문정동", capacity: "3K", region: "서울특별시", country: "KR" },
  { company: "위드빈커피", district: "송파구", neighborhood: "마천동", capacity: "5K", region: "서울특별시", country: "KR" },
  { company: "공리커피", district: "송파구", neighborhood: "삼전동", capacity: "3K", region: "서울특별시", country: "KR" },
  { company: "그린빈에스텍", brand: "Green Bean", district: "송파구", neighborhood: "문정동", capacity: "15K", region: "서울특별시", country: "KR" },
  { company: "1012커피", district: "송파구", neighborhood: "잠실동", capacity: "5K", region: "서울특별시", country: "KR" },
  { company: "로스팅포인트", brand: "ROASTING POINT", district: "송파구", neighborhood: "마천동", capacity: "10K", region: "서울특별시", country: "KR" },
  { company: "넬쿠오레델카페", brand: "NEL CUORE DEL CAFE", district: "송파구", neighborhood: "방이동", capacity: "5K", region: "서울특별시", country: "KR" },
  { company: "기투커피 로스터스", district: "송파구", neighborhood: "방이동", capacity: "10K", region: "서울특별시", country: "KR" },
  // 금천구 · 4
  { company: "올댓커피", district: "금천구", neighborhood: "가산동", capacity: "30K", region: "서울특별시", country: "KR" },
  { company: "올댓커피", district: "금천구", neighborhood: "가산동", capacity: "15K", region: "서울특별시", country: "KR" },
  { company: "가배두림", district: "금천구", neighborhood: "가산동", capacity: "10K", region: "서울특별시", country: "KR" },
  { company: "그레이 커피 로스터스", district: "금천구", neighborhood: "시흥동", capacity: "15K", region: "서울특별시", country: "KR" },
  // 관악구 · 2
  { company: "A3바우트커피", brand: "A3bout coffee", district: "관악구", neighborhood: "봉천동", capacity: "15K", region: "서울특별시", country: "KR" },
  { company: "메이지커피", district: "관악구", neighborhood: "신림동", capacity: "5K", region: "서울특별시", country: "KR" },
  // 서초구 · 6
  { company: "카페클라라", brand: "cafe clara", district: "서초구", neighborhood: "서초동", capacity: "20K", region: "서울특별시", country: "KR" },
  { company: "리퍼블릭오브블루", district: "서초구", neighborhood: "방배동", capacity: "5K", region: "서울특별시", country: "KR" },
  { company: "베를린크란츠", district: "서초구", neighborhood: "반포동", capacity: "10K", region: "서울특별시", country: "KR" },
  { company: "태양커피", district: "서초구", neighborhood: "방배동", capacity: "5K", region: "서울특별시", country: "KR" },
  { company: "초록창고", district: "서초구", neighborhood: "방배동", capacity: "5K", region: "서울특별시", country: "KR" },
  { company: "카페 드 앙떼띠", brand: "entête", district: "서초구", neighborhood: "반포동", capacity: "5K", region: "서울특별시", country: "KR" },
];

// ──────────────────────────────────────────────────────────────────────
// Gyeonggi-do — 92 units (고양 13 · 파주 8 · 남양주 6 · 이천 6 · 성남 6)
// ──────────────────────────────────────────────────────────────────────
const GYEONGGI: InstallationRecord[] = [
  // 파주시 · 8
  { company: "펠리시타로스터리", brand: "FELICITA", district: "파주시", neighborhood: "법원읍", capacity: "60K", region: "경기도", country: "KR" },
  { company: "커피리브레", district: "파주시", neighborhood: "검산동", capacity: "100K", region: "경기도", country: "KR" },
  { company: "펠리시타로스터리", brand: "FELICITA", district: "파주시", neighborhood: "법원읍", capacity: "60K", region: "경기도", country: "KR" },
  { company: "커피리브레", district: "파주시", neighborhood: "검산동", capacity: "50K", region: "경기도", country: "KR" },
  { company: "펠리시타로스터리", brand: "FELICITA", district: "파주시", neighborhood: "법원읍", capacity: "15K", region: "경기도", country: "KR" },
  { company: "(주)보람홀딩스", district: "파주시", neighborhood: "나동", capacity: "15K", region: "경기도", country: "KR" },
  { company: "달출판사", district: "파주시", neighborhood: "문발동", capacity: "10K", region: "경기도", country: "KR" },
  { company: "커피를 찾는 사람들", district: "파주시", neighborhood: "금촌동", capacity: "15K", region: "경기도", country: "KR" },
  // 양주시 · 2
  { company: "파머스테이블", brand: "FARMER'S TABLE", district: "양주시", neighborhood: "율대리", capacity: "10K", region: "경기도", country: "KR" },
  { company: "블랙빈스", brand: "BLACK BEANS", district: "양주시", neighborhood: "화암동", capacity: "15K", region: "경기도", country: "KR" },
  // 의정부시 · 3
  { company: "엘치코", brand: "EL CHICO", district: "의정부시", neighborhood: "민락동", capacity: "15K", region: "경기도", country: "KR" },
  { company: "바실레이아", district: "의정부시", neighborhood: "민락동", capacity: "5K", region: "경기도", country: "KR" },
  { company: "다잠컴퍼니", district: "의정부시", neighborhood: "용현동", capacity: "5K", region: "경기도", country: "KR" },
  // 남양주시 · 6
  { company: "83LAB", district: "남양주시", neighborhood: "다산동", capacity: "15K", region: "경기도", country: "KR" },
  { company: "83LAB", district: "남양주시", neighborhood: "별내동", capacity: "5K", region: "경기도", country: "KR" },
  { company: "쿼트블랙", brand: "QUOTE BLACK", district: "남양주시", neighborhood: "별내동", capacity: "10K", region: "경기도", country: "KR" },
  { company: "엠커피", district: "남양주시", neighborhood: "호평동", capacity: "5K", region: "경기도", country: "KR" },
  { company: "커피지만", district: "남양주시", neighborhood: "오남읍", capacity: "10K", region: "경기도", country: "KR" },
  { company: "아피커피", brand: "API COFFEE", district: "남양주시", neighborhood: "진접읍", capacity: "30K", region: "경기도", country: "KR" },
  // 고양시 · 13
  { company: "하이드레곤", district: "고양시", neighborhood: "토당동", capacity: "5K", region: "경기도", country: "KR" },
  { company: "네임드커피", brand: "NC Named Coffee", district: "고양시", neighborhood: "마두동", capacity: "5K", region: "경기도", country: "KR" },
  { company: "CBSC", brand: "MicroSensory", district: "고양시", neighborhood: "원흥동", capacity: "5K", region: "경기도", country: "KR" },
  { company: "터치아프리카", brand: "Touch Africa", district: "고양시", neighborhood: "장항동", capacity: "5K", region: "경기도", country: "KR" },
  { company: "터치아프리카", brand: "Touch Africa", district: "고양시", neighborhood: "장항동", capacity: "10K", region: "경기도", country: "KR" },
  { company: "젠틀레인", brand: "GENTLERAIN", district: "고양시", neighborhood: "장항동", capacity: "5K", region: "경기도", country: "KR" },
  { company: "(주)디자인동", district: "고양시", neighborhood: "백석동", capacity: "5K", region: "경기도", country: "KR" },
  { company: "(주)아이앤비컴퍼니", brand: "MIRUKKU STUDIO", district: "고양시", neighborhood: "정발산동", capacity: "10K", region: "경기도", country: "KR" },
  { company: "(주)노아스로스팅", brand: "NOAH'S ROASTING", district: "고양시", neighborhood: "식사동", capacity: "10K", region: "경기도", country: "KR" },
  { company: "한국건설기술연구원", brand: "KICT", district: "고양시", neighborhood: "대화동", capacity: "10K", region: "경기도", country: "KR" },
  { company: "한국건설기술연구원", brand: "KICT", district: "고양시", neighborhood: "대화동", capacity: "10K", region: "경기도", country: "KR" },
  { company: "글로드커피", brand: "GLORD COFFEE ROASTERS", district: "고양시", neighborhood: "주엽동", capacity: "3K", region: "경기도", country: "KR" },
  { company: "제이윤커피", district: "고양시", neighborhood: "백제동", capacity: "5K", region: "경기도", country: "KR" },
  // 구리시 · 1
  { company: "미소랑 커피 시스템", district: "구리시", neighborhood: "인창동", capacity: "5K", region: "경기도", country: "KR" },
  // 광주시 · 4
  { company: "아이에이커머스", district: "광주시", neighborhood: "추자리", capacity: "15K", region: "경기도", country: "KR" },
  { company: "쿠파렌탈하우스", brand: "mix×tea", district: "광주시", neighborhood: "삼동", capacity: "15K", region: "경기도", country: "KR" },
  { company: "아라태커피", brand: "ARATAE COFFEE", district: "광주시", neighborhood: "문형리", capacity: "15K", region: "경기도", country: "KR" },
  { company: "열마루", district: "광주시", neighborhood: "퇴촌면", capacity: "10K", region: "경기도", country: "KR" },
  // 여주시 · 1
  { company: "JK식품", district: "여주시", neighborhood: "강천면", capacity: "5K", region: "경기도", country: "KR" },
  // 안성시 · 1
  { company: "키메코", brand: "(주)키메코", district: "안성시", neighborhood: "노곡리", capacity: "5K", region: "경기도", country: "KR" },
  // 이천시 · 6
  { company: "대상(주)", brand: "ROSEBUD", district: "이천시", neighborhood: "신하리", capacity: "3K", region: "경기도", country: "KR" },
  { company: "대상(주)", brand: "ROSEBUD", district: "이천시", neighborhood: "신하리", capacity: "10K", region: "경기도", country: "KR" },
  { company: "커피뷰", district: "이천시", neighborhood: "안흥동", capacity: "5K", region: "경기도", country: "KR" },
  { company: "아르보르", brand: "arbor", district: "이천시", neighborhood: "중리동", capacity: "15K", region: "경기도", country: "KR" },
  { company: "(주)라벨트레이딩", brand: "LABEL", district: "이천시", neighborhood: "조읍리", capacity: "60K", region: "경기도", country: "KR" },
  { company: "(주)라벨트레이딩", brand: "LABEL", district: "이천시", neighborhood: "조읍리", capacity: "60K", region: "경기도", country: "KR" },
  // 화성시 · 4
  { company: "포스벨", district: "화성시", neighborhood: "청원리", capacity: "15K", region: "경기도", country: "KR" },
  { company: "엘티", district: "화성시", neighborhood: "하저리", capacity: "5K", region: "경기도", country: "KR" },
  { company: "스마트커피팩토리", brand: "SMART COFFEE FACTORY", district: "화성시", neighborhood: "반송동", capacity: "5K", region: "경기도", country: "KR" },
  { company: "(주)동남테크", district: "화성시", neighborhood: "독정리", capacity: "10K", region: "경기도", country: "KR" },
  // 김포시 · 2
  { company: "카페 진정성", brand: "CAFE, JINJUNGSUNG", district: "김포시", neighborhood: "석모리", capacity: "5K", region: "경기도", country: "KR" },
  { company: "앱앤플로우", brand: "EBB AND FLOW", district: "김포시", neighborhood: "풍무동", capacity: "5K", region: "경기도", country: "KR" },
  // 광명시 · 2
  { company: "올댓커피", district: "광명시", neighborhood: "소하동", capacity: "10K", region: "경기도", country: "KR" },
  { company: "미스터커피", brand: "Mr coffee", district: "광명시", neighborhood: "하안동", capacity: "15K", region: "경기도", country: "KR" },
  // 안양시 · 5
  { company: "콩가게", brand: "KONGGAGE COFFEE", district: "안양시", neighborhood: "관양동", capacity: "5K", region: "경기도", country: "KR" },
  { company: "제일산업개발(주)", district: "안양시", neighborhood: "석수동", capacity: "60K", region: "경기도", country: "KR" },
  { company: "제일산업개발(주)", district: "안양시", neighborhood: "석수동", capacity: "60K", region: "경기도", country: "KR" },
  { company: "(주)양치기소년들", brand: "DCB", district: "안양시", neighborhood: "석수동", capacity: "15K", region: "경기도", country: "KR" },
  { company: "(주)아이푸드", brand: "cafe AMIU", district: "안양시", neighborhood: "호계동", capacity: "10K", region: "경기도", country: "KR" },
  // 과천시 · 2
  { company: "자스컴퍼니", brand: "cafe JASS", district: "과천시", neighborhood: "과천동", capacity: "15K", region: "경기도", country: "KR" },
  { company: "엠제이통상", brand: "SPECIAL BEAN", district: "과천시", neighborhood: "과천동", capacity: "15K", region: "경기도", country: "KR" },
  // 부천시 · 1
  { company: "수상한 원두", district: "부천시", neighborhood: "상동", capacity: "5K", region: "경기도", country: "KR" },
  // 시흥시 · 1
  { company: "알피캐스트", district: "시흥시", neighborhood: "정왕동", capacity: "15K", region: "경기도", country: "KR" },
  // 안산시 · 4
  { company: "코디아 아이앤티", district: "안산시", neighborhood: "사사동", capacity: "5K", region: "경기도", country: "KR" },
  { company: "FIC코리아", brand: "FTC KOREA", district: "안산시", neighborhood: "고잔동", capacity: "15K", region: "경기도", country: "KR" },
  { company: "커피두", district: "안산시", neighborhood: "사동", capacity: "5K", region: "경기도", country: "KR" },
  { company: "(주)원택글로비스", brand: "WINTEC GLOVIS", district: "안산시", neighborhood: "원시동", capacity: "5K", region: "경기도", country: "KR" },
  // 군포시 · 3
  { company: "조상일커피", district: "군포시", neighborhood: "산본동", capacity: "5K", region: "경기도", country: "KR" },
  { company: "와이씨손", district: "군포시", neighborhood: "금정동", capacity: "15K", region: "경기도", country: "KR" },
  { company: "커피 무이", brand: "coffee Mooi", district: "군포시", neighborhood: "산본동", capacity: "5K", region: "경기도", country: "KR" },
  // 성남시 · 6
  { company: "슐향기맑은터", district: "성남시", neighborhood: "복정동", capacity: "15K", region: "경기도", country: "KR" },
  { company: "필아웃", brand: "FILL OUT", district: "성남시", neighborhood: "야탑동", capacity: "5K", region: "경기도", country: "KR" },
  { company: "카페두레브", district: "성남시", neighborhood: "백현동", capacity: "5K", region: "경기도", country: "KR" },
  { company: "해피빈스", brand: "HAPPY BEANS", district: "성남시", neighborhood: "야탑동", capacity: "15K", region: "경기도", country: "KR" },
  { company: "파라디소코리아", brand: "PARADISO COFFEE", district: "성남시", neighborhood: "상대원동", capacity: "5K", region: "경기도", country: "KR" },
  { company: "지후아다네호", brand: "ZIHU COFFEE", district: "성남시", neighborhood: "판교동", capacity: "5K", region: "경기도", country: "KR" },
  // 의왕시 · 3
  { company: "베라코리아", brand: "VERA", district: "의왕시", neighborhood: "포일동", capacity: "5K", region: "경기도", country: "KR" },
  { company: "베라코리아", brand: "VERA", district: "의왕시", neighborhood: "포일동", capacity: "15K", region: "경기도", country: "KR" },
  { company: "라붐팩토리", brand: "LABOOM COFFEE", district: "의왕시", neighborhood: "학의동", capacity: "60K", region: "경기도", country: "KR" },
  // 수원시 · 5
  { company: "스웨르떼", district: "수원시", neighborhood: "하동", capacity: "5K", region: "경기도", country: "KR" },
  { company: "매란방", district: "수원시", neighborhood: "이의동", capacity: "15K", region: "경기도", country: "KR" },
  { company: "수커피", district: "수원시", neighborhood: "정자동", capacity: "3K", region: "경기도", country: "KR" },
  { company: "카페모던타임즈", district: "수원시", neighborhood: "신동", capacity: "5K", region: "경기도", country: "KR" },
  { company: "카페반달로", district: "수원시", neighborhood: "영통동", capacity: "3K", region: "경기도", country: "KR" },
  // 평택시 · 5
  { company: "그라노드카페", brand: "GRANO DE CAFE", district: "평택시", neighborhood: "비전동", capacity: "5K", region: "경기도", country: "KR" },
  { company: "동양잉크", district: "평택시", neighborhood: "세교동", capacity: "60K", region: "경기도", country: "KR" },
  { company: "카페클락", brand: "CAFE CLARK", district: "평택시", neighborhood: "평택동", capacity: "10K", region: "경기도", country: "KR" },
  { company: "커피알.이", brand: "coffee R.E", district: "평택시", neighborhood: "서정동", capacity: "3K", region: "경기도", country: "KR" },
  { company: "JS패밀리", district: "평택시", neighborhood: "월곡동", capacity: "10K", region: "경기도", country: "KR" },
  // 오산시 · 4
  { company: "리마커블커피", district: "오산시", neighborhood: "세교동", capacity: "15K", region: "경기도", country: "KR" },
  { company: "리마커블커피", district: "오산시", neighborhood: "세교동", capacity: "5K", region: "경기도", country: "KR" },
  { company: "샤론일씨홈(주)", district: "오산시", neighborhood: "외삼미동", capacity: "15K", region: "경기도", country: "KR" },
  { company: "명장시대", district: "오산시", neighborhood: "서동", capacity: "5K", region: "경기도", country: "KR" },
];

// ──────────────────────────────────────────────────────────────────────
// Other domestic regions — 105 units
// (부산 18 · 대구 13 · 경남 12 · 경북 11 · 광주 10 · 전북 9 · 충남 7 ·
//  인천 6 · 대전 6 · 전남 5 · 울산 3 · 세종 2 · 제주 2 · 충북 1)
// ──────────────────────────────────────────────────────────────────────
const OTHER_DOMESTIC: InstallationRecord[] = [
  // 인천광역시 · 5 (PDF 기준 전국 합계 6, 상세표 5 기재)
  { company: "게이블카페디자인", district: "서구", neighborhood: "청라동", capacity: "5K", region: "인천광역시", country: "KR" },
  { company: "커피빈트", district: "서구", neighborhood: "청라동", capacity: "5K", region: "인천광역시", country: "KR" },
  { company: "웅진드림", district: "중구", neighborhood: "운서동", capacity: "3K", region: "인천광역시", country: "KR" },
  { company: "가드바다커피", district: "남동구", neighborhood: "논현동", capacity: "10K", region: "인천광역시", country: "KR" },
  { company: "커먼커피", brand: "COMMON COFFEE", district: "남동구", neighborhood: "구월동", capacity: "10K", region: "인천광역시", country: "KR" },
  // 세종특별자치시 · 2
  { company: "3-3커피", brand: "3-3 COFFEE ROASTERS", district: "세종시", neighborhood: "소담동", capacity: "10K", region: "세종특별자치시", country: "KR" },
  { company: "태라테크노스", district: "세종시", neighborhood: "전동면", capacity: "10K", region: "세종특별자치시", country: "KR" },
  // 충청북도 · 1
  { company: "춤추는 북카페", district: "충주시", neighborhood: "연수동", capacity: "5K", region: "충청북도", country: "KR" },
  // 충청남도 · 7
  { company: "카페비마이프렌드", brand: "be my Friend", district: "태안군", capacity: "30K", region: "충청남도", country: "KR" },
  { company: "카페비마이프렌드", brand: "be my Friend", district: "태안군", capacity: "30K", region: "충청남도", country: "KR" },
  { company: "(주)오월의숲", district: "천안시", capacity: "10K", region: "충청남도", country: "KR" },
  { company: "(주)오월의숲", district: "천안시", capacity: "30K", region: "충청남도", country: "KR" },
  { company: "오르엘크리스탈", brand: "OLEUEL", district: "천안시", capacity: "5K", region: "충청남도", country: "KR" },
  { company: "(주)태산체어테크", brand: "TAESAN", district: "서산시", capacity: "15K", region: "충청남도", country: "KR" },
  { company: "리집커피", brand: "LEEZIP COFFEE ROASTERS", district: "논산시", capacity: "10K", region: "충청남도", country: "KR" },
  // 대전광역시 · 6 (PDF 전국 합계 6, 상세표 6 기재)
  { company: "크리처커피컴퍼니", district: "중구", neighborhood: "대사동", capacity: "5K", region: "대전광역시", country: "KR" },
  { company: "레이니하우스", brand: "RAINHOUSE", district: "유성구", neighborhood: "신성동", capacity: "5K", region: "대전광역시", country: "KR" },
  { company: "커피로스테리아", district: "서구", neighborhood: "관저동", capacity: "5K", region: "대전광역시", country: "KR" },
  { company: "커피에스프리", district: "중구", neighborhood: "은행동", capacity: "5K", region: "대전광역시", country: "KR" },
  { company: "I'M 1L", district: "중구", neighborhood: "문화동", capacity: "5K", region: "대전광역시", country: "KR" },
  { company: "폴레폴레", brand: "Polé Polé", district: "동구", neighborhood: "용전동", capacity: "5K", region: "대전광역시", country: "KR" },
  // 전라북도 · 9
  { company: "바리하우스", district: "군산시", capacity: "15K", region: "전라북도", country: "KR" },
  { company: "레피스리보부상", brand: "FOOD BUB", district: "군산시", capacity: "3K", region: "전라북도", country: "KR" },
  { company: "CNC커피", district: "익산시", capacity: "15K", region: "전라북도", country: "KR" },
  { company: "CNC커피", district: "익산시", capacity: "15K", region: "전라북도", country: "KR" },
  { company: "에피스트라오잇커피", district: "전주시", capacity: "10K", region: "전라북도", country: "KR" },
  { company: "C LAB by Roh", district: "전주시", capacity: "5K", region: "전라북도", country: "KR" },
  { company: "(주)대웅", brand: "Biscoal", district: "전주시", capacity: "15K", region: "전라북도", country: "KR" },
  { company: "비엠커피외원", district: "전주시", capacity: "15K", region: "전라북도", country: "KR" },
  { company: "버드마이버드", district: "전주시", capacity: "5K", region: "전라북도", country: "KR" },
  // 전라남도 · 5
  { company: "반교도로만든집", brand: "상끗바리스타", district: "완도군", capacity: "15K", region: "전라남도", country: "KR" },
  { company: "이지스터", brand: "EASYSTER", district: "여수시", capacity: "5K", region: "전라남도", country: "KR" },
  { company: "도리아노", brand: "DOREANO", district: "무안군", capacity: "3K", region: "전라남도", country: "KR" },
  { company: "솔향기원두리", brand: "DeUnknown", district: "나주시", capacity: "15K", region: "전라남도", country: "KR" },
  { company: "힐론", brand: "Hillon", district: "무안군", neighborhood: "일로읍", capacity: "15K", region: "전라남도", country: "KR" },
  // 광주광역시 · 10
  { company: "육각커피", district: "남구", neighborhood: "임장동", capacity: "5K", region: "광주광역시", country: "KR" },
  { company: "커피하우스", district: "광산구", neighborhood: "신장동", capacity: "15K", region: "광주광역시", country: "KR" },
  { company: "광주원점커피", district: "남구", neighborhood: "임장동", capacity: "5K", region: "광주광역시", country: "KR" },
  { company: "어피오늘", district: "동구", neighborhood: "동천동", capacity: "5K", region: "광주광역시", country: "KR" },
  { company: "커피상점", district: "북구", neighborhood: "금호동", capacity: "15K", region: "광주광역시", country: "KR" },
  { company: "가비드로잉", district: "광산구", neighborhood: "신장동", capacity: "5K", region: "광주광역시", country: "KR" },
  { company: "신화마스터피스", brand: "MASTERPIECE", district: "서구", neighborhood: "치평동", capacity: "15K", region: "광주광역시", country: "KR" },
  { company: "신화마스터피스", brand: "MASTERPIECE", district: "서구", neighborhood: "치평동", capacity: "40K", region: "광주광역시", country: "KR" },
  { company: "예담커피", district: "북구", neighborhood: "연산동", capacity: "15K", region: "광주광역시", country: "KR" },
  { company: "더블에잇", district: "광산구", neighborhood: "신수동", capacity: "3K", region: "광주광역시", country: "KR" },
  // 제주특별자치도 · 2
  { company: "조산상", district: "제주시", neighborhood: "노형동", capacity: "1K", region: "제주특별자치도", country: "KR" },
  { company: "마이티커피", brand: "MIGHTY COFFEE", district: "제주시", neighborhood: "화북삼동", capacity: "5K", region: "제주특별자치도", country: "KR" },
  // 경상북도 · 11
  { company: "늘푸른", district: "경산시", capacity: "10K", region: "경상북도", country: "KR" },
  { company: "진정성커피", district: "경주시", capacity: "5K", region: "경상북도", country: "KR" },
  { company: "김정환", brand: "EASYSTER", district: "영덕군", capacity: "30K", region: "경상북도", country: "KR" },
  { company: "메트리프", district: "구미시", capacity: "10K", region: "경상북도", country: "KR" },
  { company: "이천커피", brand: "안세커피", district: "포항시", capacity: "15K", region: "경상북도", country: "KR" },
  { company: "안세커피", district: "포항시", capacity: "10K", region: "경상북도", country: "KR" },
  { company: "가디바다커피", district: "상주시", capacity: "15K", region: "경상북도", country: "KR" },
  { company: "가디바다커피", district: "상주시", capacity: "10K", region: "경상북도", country: "KR" },
  { company: "커피아울", district: "포항시", capacity: "15K", region: "경상북도", country: "KR" },
  { company: "포스코홀딩스", brand: "POSCO", district: "포항시", capacity: "10K", region: "경상북도", country: "KR" },
  { company: "킹덤플랜트", district: "안동시", capacity: "10K", region: "경상북도", country: "KR" },
  // 경상남도 · 12 (진영은 김해시 진영읍)
  { company: "그루빈컴파니", district: "김해시", neighborhood: "진영읍", capacity: "5K", region: "경상남도", country: "KR" },
  { company: "킹스커피", brand: "KINGS COFFEE", district: "김해시", neighborhood: "진영읍", capacity: "10K", region: "경상남도", country: "KR" },
  { company: "이매진커피", district: "김해시", neighborhood: "진영읍", capacity: "10K", region: "경상남도", country: "KR" },
  { company: "감정화", district: "김해시", capacity: "—", region: "경상남도", country: "KR" },
  { company: "커피맵아카데미", brand: "COFFEEMAP", district: "김해시", neighborhood: "진영읍", capacity: "15K", region: "경상남도", country: "KR" },
  { company: "부정길", district: "창원시", capacity: "5K", region: "경상남도", country: "KR" },
  { company: "몬스트로스터스", district: "김해시", neighborhood: "진영읍", capacity: "15K", region: "경상남도", country: "KR" },
  { company: "로스팅코리아", district: "양산시", capacity: "30K", region: "경상남도", country: "KR" },
  { company: "카페노이", brand: "Caffe Noi", district: "김해시", neighborhood: "진영읍", capacity: "15K", region: "경상남도", country: "KR" },
  { company: "로스팅코리아", district: "양산시", capacity: "30K", region: "경상남도", country: "KR" },
  { company: "더원커피", district: "김해시", neighborhood: "진영읍", capacity: "5K", region: "경상남도", country: "KR" },
  { company: "경남커피엽접도", district: "통영시", capacity: "10K", region: "경상남도", country: "KR" },
  // 대구광역시 · 13
  { company: "디스커버리로스터스", district: "수성구", neighborhood: "범어동", capacity: "20K", region: "대구광역시", country: "KR" },
  { company: "바른커피", district: "남구", neighborhood: "이천동", capacity: "5K", region: "대구광역시", country: "KR" },
  { company: "커피맛을 조금아는 남자", brand: "에베크리아", district: "수성구", capacity: "60K", region: "대구광역시", country: "KR" },
  { company: "바른커피", district: "남구", neighborhood: "이천동", capacity: "10K", region: "대구광역시", country: "KR" },
  { company: "커피맛을 조금아는 남자", brand: "에베크리아", district: "수성구", capacity: "15K", region: "대구광역시", country: "KR" },
  { company: "커피맛을 조금아는 남자", brand: "에베크리아", district: "수성구", neighborhood: "범어동", capacity: "3K", region: "대구광역시", country: "KR" },
  { company: "단시리", brand: "Densité", district: "남구", neighborhood: "이천동", capacity: "15K", region: "대구광역시", country: "KR" },
  { company: "에베크리아", district: "중구", neighborhood: "장성동", capacity: "10K", region: "대구광역시", country: "KR" },
  { company: "단시리", brand: "Densité", district: "중구", neighborhood: "대봉동", capacity: "10K", region: "대구광역시", country: "KR" },
  { company: "에베크리아", district: "중구", neighborhood: "장성동", capacity: "10K", region: "대구광역시", country: "KR" },
  { company: "커피1번가", district: "수성구", neighborhood: "범어동", capacity: "10K", region: "대구광역시", country: "KR" },
  { company: "일포러커피", district: "수성구", neighborhood: "범어동", capacity: "15K", region: "대구광역시", country: "KR" },
  { company: "노지노커피로스터스", district: "달서구", neighborhood: "피동", capacity: "5K", region: "대구광역시", country: "KR" },
  // 울산광역시 · 3
  { company: "골든드롭", brand: "GOLDEN DROP", district: "남구", neighborhood: "상남동", capacity: "5K", region: "울산광역시", country: "KR" },
  { company: "에스두커피", district: "남구", neighborhood: "상동", capacity: "10K", region: "울산광역시", country: "KR" },
  { company: "오브오프", brand: "ofoff", district: "남구", neighborhood: "송정동", capacity: "10K", region: "울산광역시", country: "KR" },
  // 부산광역시 · 18
  { company: "만스커피", brand: "MORNINGMOUNT", district: "동래구", neighborhood: "연회동", capacity: "5K", region: "부산광역시", country: "KR" },
  { company: "(주)사브로키", brand: "VINOBAM", district: "사상구", neighborhood: "구서동", capacity: "5K", region: "부산광역시", country: "KR" },
  { company: "레이저커피", brand: "Layers", district: "북구", neighborhood: "부곡동", capacity: "5K", region: "부산광역시", country: "KR" },
  { company: "양대한당", district: "해운대구", neighborhood: "우동", capacity: "5K", region: "부산광역시", country: "KR" },
  { company: "엔그레이", district: "강서구", neighborhood: "명지동", capacity: "15K", region: "부산광역시", country: "KR" },
  { company: "트레저스", brand: "Treasures Coffee", district: "부산진구", neighborhood: "전포동", capacity: "5K", region: "부산광역시", country: "KR" },
  { company: "브레이크커피", brand: "BREAK COFFEE", district: "기장군", neighborhood: "풍수리", capacity: "5K", region: "부산광역시", country: "KR" },
  { company: "컵커피", district: "연제구", neighborhood: "연산동", capacity: "5K", region: "부산광역시", country: "KR" },
  { company: "사이언커피", district: "연제구", neighborhood: "연산동", capacity: "5K", region: "부산광역시", country: "KR" },
  { company: "나는커피", district: "수영구", neighborhood: "광안동", capacity: "5K", region: "부산광역시", country: "KR" },
  { company: "스탠다드커피", brand: "STANDARD", district: "연제구", neighborhood: "연산동", capacity: "15K", region: "부산광역시", country: "KR" },
  { company: "엘리펀트커피", brand: "ELEPHANT CENTRAL", district: "금정구", neighborhood: "양지동", capacity: "15K", region: "부산광역시", country: "KR" },
  { company: "프로듀스썸띵굿", district: "수영구", neighborhood: "광안동", capacity: "5K", region: "부산광역시", country: "KR" },
  { company: "뉴스커피", brand: "NEWS COFFEE", district: "연제구", neighborhood: "연지동", capacity: "15K", region: "부산광역시", country: "KR" },
  { company: "에피이엇커피", district: "금정구", neighborhood: "양지동", capacity: "15K", region: "부산광역시", country: "KR" },
  { company: "KJC컴퍼니", brand: "KJC", district: "연제구", neighborhood: "모수노가", capacity: "5K", region: "부산광역시", country: "KR" },
  { company: "마스터피스", district: "연제구", neighborhood: "연산동", capacity: "5K", region: "부산광역시", country: "KR" },
  { company: "SHEEP COFFEE", district: "부산진구", capacity: "5K", region: "부산광역시", country: "KR" },
];

// ──────────────────────────────────────────────────────────────────────
// Overseas — 36 units · aggregate only (PDF does not list per-company)
// China 17 · Thailand 7 · Taiwan 6 · Japan 2 · Kuwait 2 · Qatar 1 · HK 1
// ──────────────────────────────────────────────────────────────────────
const OVERSEAS_SUMMARY = INSTALLATIONS_2025_SUMMARY.overseasBreakdown;

export const INSTALLATIONS_2025: InstallationRecord[] = [
  ...SEOUL,
  ...GYEONGGI,
  ...OTHER_DOMESTIC,
];

export { SEOUL as INSTALLATIONS_SEOUL, GYEONGGI as INSTALLATIONS_GYEONGGI, OTHER_DOMESTIC as INSTALLATIONS_OTHER, OVERSEAS_SUMMARY };
