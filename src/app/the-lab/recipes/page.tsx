import Link from "next/link";
import { RECIPES } from "@/lib/nutbutter";
import EditorialCard from "@/components/the-lab/EditorialCard";

const SITE_URL = "https://www.nbpcafe.com";

export const metadata = {
  title: "수제 땅콩버터·아몬드버터 레시피 — 카페 시그니처 메뉴 | 넛츠스타",
  description:
    "넛버터머신 넛츠스타로 만드는 기본 땅콩버터·크런치 땅콩버터·아몬드버터와 카페 스프레드 신메뉴 레시피. 재료와 단계로 정리했습니다. 갓 간 땅콩버터로 카페 시그니처 메뉴와 추가 매출을 만드세요.",
  keywords: [
    "수제 땅콩버터 만들기",
    "땅콩버터 레시피",
    "아몬드버터 레시피",
    "카페 시그니처 메뉴",
    "카페 신메뉴 아이디어",
    "카페 추가매출",
    "땅콩버터 라떼",
    "즉석 견과버터",
  ],
  alternates: { canonical: "/the-lab/recipes" },
  openGraph: {
    title: "수제 땅콩버터·아몬드버터 레시피 — 카페 시그니처 메뉴 | 넛츠스타",
    description:
      "넛버터머신 넛츠스타로 만드는 기본·크런치 땅콩버터, 아몬드버터, 카페 스프레드 신메뉴 레시피. 갓 간 땅콩버터로 카페 추가 매출을.",
    url: `${SITE_URL}/the-lab/recipes`,
    type: "website",
    locale: "ko_KR",
  },
};

// AEO — 카페 사장이 실제로 검색·질문하는 도입 의사결정 질문. 답변 엔진 노출용.
const RECIPE_FAQ = [
  {
    q: "카페에서 땅콩버터 메뉴로 매출이 나오나요?",
    a: "갓 간 땅콩버터는 토스트·베이글·라떼·쉐이크 등 객단가가 높은 시그니처 메뉴로 연결됩니다. 완제품 대비 원물(견과) 원가가 낮아 마진이 크고, '매장에서 직접 간다'는 신선함이 차별화 포인트가 됩니다. 넛츠스타 도입 매장은 토스트·스프레드 라인업으로 추가 매출을 만들고 있습니다.",
  },
  {
    q: "갓 간 땅콩버터와 완제품 구매는 무엇이 다른가요?",
    a: "완제품은 보존을 위해 경화유·당·소금이 들어가는 경우가 많지만, 매장에서 가는 버터는 견과 하나로 무첨가 제조가 가능합니다. 산패 전 신선한 상태로 제공되고, 크런치·스무스 등 매장 취향대로 질감을 조절할 수 있습니다.",
  },
  {
    q: "전용 기계 없이도 카페에서 땅콩버터를 만들 수 있나요?",
    a: "소량은 일반 분쇄기로도 가능하지만 발열·과부하로 연속 운용에는 부적합합니다. 상업용 넛버터머신 넛츠스타는 50kg급 연속 분쇄로 영업 중에도 끊김 없이 갓 간 버터를 공급하도록 설계되어 있습니다.",
  },
  {
    q: "어떤 메뉴부터 시작하는 게 좋나요?",
    a: "운영 부담이 가장 적은 토스트·베이글 스프레드로 시작해, 피넛버터 라떼·쉐이크 같은 음료, 소분 잼통 리테일 판매로 확장하는 순서를 권장합니다. 메뉴 구성과 도입은 견적 문의로 상담받을 수 있습니다.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${SITE_URL}/the-lab/recipes#faq`,
  mainEntity: RECIPE_FAQ.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

// ItemList — 레시피 모음을 구글이 컬렉션으로 인식하도록.
const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": `${SITE_URL}/the-lab/recipes#list`,
  name: "넛츠스타 넛버터머신 레시피",
  itemListElement: RECIPES.map((r, i) => ({
    "@type": "ListItem",
    position: i + 1,
    url: `${SITE_URL}/the-lab/recipes/${r.id}`,
    name: r.title,
  })),
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "The Lab", item: `${SITE_URL}/the-lab` },
    { "@type": "ListItem", position: 3, name: "레시피", item: `${SITE_URL}/the-lab/recipes` },
  ],
};

export default function RecipesIndexPage() {
  return (
    <div className="bg-paper min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <section className="container-content pt-24 lg:pt-32 pb-16">
        <span className="caption-style text-ink/90 block mb-6 font-korean">
          더 랩 / 레시피
        </span>
        <h1 className="font-display font-bold text-[clamp(3rem,9vw,7rem)] text-ink leading-[0.88] tracking-[-0.04em] font-korean">
          레시피.
        </h1>
        <p className="text-body-kr font-korean text-ink/75 leading-[1.75] mt-7 max-w-xl">
          갓 간 신선함을 매장 메뉴로. 첨가물 없이 견과 하나로 만드는 기본
          버터부터 카페 스프레드까지, 재료와 단계로 정리했습니다.
        </p>
      </section>

      <section className="container-content pb-32">
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {RECIPES.map((r) => (
            <li key={r.id}>
              <EditorialCard
                href={`/the-lab/recipes/${r.id}`}
                thumb={r.thumb}
                eyebrow={`${r.category} · ${r.no}`}
                title={r.title}
                excerpt={r.excerpt}
                meta={`${r.nut} · ${r.timeLabel} · ${r.difficulty}`}
              />
            </li>
          ))}
        </ul>

        <div className="mt-16">
          <Link
            href="/the-lab"
            className="caption-style text-ink hover:underline underline-offset-4 font-korean"
          >
            &larr; 더 랩 03호로 돌아가기
          </Link>
        </div>
      </section>

      {/* 카페 사장 FAQ — AEO/도입 의사결정 질문 */}
      <section className="container-content pb-24">
        <div className="border-t-2 border-ink pt-6 mb-10">
          <h2 className="font-display font-bold text-[clamp(1.6rem,3vw,2.4rem)] text-ink leading-[1.1] tracking-[-0.02em] font-korean">
            카페 사장이 자주 묻는 것.
          </h2>
        </div>
        <dl className="divide-y divide-ink/15 border-t border-b border-ink/15">
          {RECIPE_FAQ.map((f) => (
            <div key={f.q} className="py-7 grid grid-cols-1 md:grid-cols-[1fr_1.6fr] gap-3 md:gap-10">
              <dt className="font-display font-bold text-[clamp(1.05rem,1.7vw,1.4rem)] text-ink leading-[1.3] tracking-[-0.01em] font-korean">
                {f.q}
              </dt>
              <dd className="text-body-kr font-korean text-ink/80 leading-[1.75]">{f.a}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* 전환 CTA — 레시피 열람 → 매장 도입 문의 */}
      <section className="bg-ink py-20 lg:py-24">
        <div className="container-content flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="max-w-2xl">
            <p className="font-heading font-semibold text-[clamp(1.4rem,2.6vw,2.25rem)] text-paper leading-[1.25] tracking-[-0.01em] font-korean">
              우리 매장 메뉴로 만들어 볼까요.
            </p>
            <p className="caption-style text-paper/75 mt-3 font-korean">
              갓 간 땅콩버터로 시그니처 메뉴와 추가 매출을. 넛버터머신 넛츠스타 도입·견적 상담을 받아보세요.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <Link
              href="/contact"
              className="btn-pill bg-paper text-ink hover:bg-bone border-2 border-paper transition-all duration-200 rounded-lg font-korean"
            >
              도입 · 견적 문의 &rarr;
            </Link>
            <Link
              href="/the-lab"
              className="btn-pill bg-transparent text-paper hover:bg-paper hover:text-ink border-2 border-paper transition-all duration-200 rounded-lg font-korean"
            >
              머신 보기
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
