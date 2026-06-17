import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { RECIPES } from "@/lib/nutbutter";
import EditorialCard from "@/components/the-lab/EditorialCard";

type Props = { params: { id: string } };

const SITE_URL = "https://www.nbpcafe.com";

export function generateStaticParams() {
  return RECIPES.map((r) => ({ id: r.id }));
}

export function generateMetadata({ params }: Props): Metadata {
  const recipe = RECIPES.find((r) => r.id === params.id);
  if (!recipe) return {};
  const url = `${SITE_URL}/the-lab/recipes/${recipe.id}`;
  const imageUrl = recipe.thumb.startsWith("http")
    ? recipe.thumb
    : `${SITE_URL}${recipe.thumb}`;
  return {
    title: `${recipe.title} — ${recipe.nut}버터 레시피 | 넛츠스타`,
    description: recipe.excerpt,
    keywords: [
      `${recipe.nut}버터 레시피`,
      `수제 ${recipe.nut}버터 만들기`,
      "카페 시그니처 메뉴",
      "카페 신메뉴 아이디어",
      "카페 추가매출",
      "넛버터머신",
      "땅콩버터머신",
    ],
    alternates: { canonical: `/the-lab/recipes/${recipe.id}` },
    openGraph: {
      type: "article",
      locale: "ko_KR",
      url,
      title: recipe.title,
      description: recipe.excerpt,
      images: [{ url: imageUrl, alt: recipe.title }],
    },
  };
}

export default function RecipeDetailPage({ params }: Props) {
  const recipe = RECIPES.find((r) => r.id === params.id);
  if (!recipe) notFound();

  const others = RECIPES.filter((r) => r.id !== recipe.id).slice(0, 3);

  const recipeJsonLd = {
    "@context": "https://schema.org",
    "@type": "Recipe",
    "@id": `${SITE_URL}/the-lab/recipes/${recipe.id}#recipe`,
    name: recipe.title,
    description: recipe.excerpt,
    recipeCategory: recipe.category,
    recipeCuisine: "스프레드",
    keywords: `${recipe.nut}버터, 넛버터머신, 넛츠스타, 땅콩버터 만들기`,
    recipeYield: recipe.yieldLabel,
    recipeIngredient: recipe.ingredients,
    tool: [{ "@type": "HowToTool", name: "넛츠스타 NUTS-STAR 넛버터머신" }],
    recipeInstructions: recipe.steps.map((step, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      text: step,
    })),
    author: { "@id": `${SITE_URL}/#organization` },
  };

  return (
    <div className="bg-paper min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(recipeJsonLd) }}
      />

      <article className="container-content pt-24 lg:pt-32 pb-32 max-w-3xl">
        <span className="caption-style text-ink/90 block mb-6 font-korean">
          더 랩 / 레시피 · {recipe.no}
        </span>
        <h1 className="font-display font-bold text-[clamp(2rem,6vw,4rem)] text-ink leading-[0.95] tracking-[-0.03em] font-korean">
          {recipe.title}
        </h1>
        <p className="text-body-kr font-korean text-ink/85 leading-[1.75] mt-6">
          {recipe.excerpt}
        </p>

        {/* 메타 칩 */}
        <dl className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-px bg-ink/15 border-2 border-ink">
          {[
            { k: "주재료", v: recipe.nut },
            { k: "소요", v: recipe.timeLabel },
            { k: "난이도", v: recipe.difficulty },
            { k: "수율", v: recipe.yieldLabel },
          ].map((m) => (
            <div key={m.k} className="bg-paper p-4">
              <dt className="caption-style text-ink/70 font-korean">{m.k}</dt>
              <dd className="font-display font-bold text-[clamp(0.9rem,1.3vw,1.1rem)] text-ink leading-tight mt-1 tracking-tight font-korean">
                {m.v}
              </dd>
            </div>
          ))}
        </dl>

        <div className="relative aspect-[16/9] rounded-lg overflow-hidden bg-bone mt-10 mb-12 border-2 border-ink">
          <Image
            src={recipe.thumb}
            alt={recipe.title}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover object-center"
          />
        </div>

        {/* 재료 */}
        <h2 className="caption-style text-ink/90 mb-4 font-korean">재료</h2>
        <ul className="border-t-2 border-ink mb-12">
          {recipe.ingredients.map((ing) => (
            <li
              key={ing}
              className="text-body-kr font-korean text-ink/85 leading-[1.6] py-3.5 border-b border-bone"
            >
              {ing}
            </li>
          ))}
        </ul>

        {/* 단계 */}
        <h2 className="caption-style text-ink/90 mb-4 font-korean">만드는 법</h2>
        <ol className="space-y-6">
          {recipe.steps.map((step, i) => (
            <li key={i} className="flex items-start gap-5">
              <span className="font-display font-bold text-[clamp(1.5rem,3vw,2.25rem)] text-ink/25 leading-none shrink-0 w-10">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-body-kr font-korean text-ink/85 leading-[1.75] pt-1">
                {step}
              </p>
            </li>
          ))}
        </ol>

        <p className="text-body-kr font-korean text-ink/55 leading-[1.75] mt-12">
          사진·영상은 순차 업데이트 예정입니다. 도입 상담은 견적 문의로.
        </p>

        <div className="mt-12 border-t border-ink/20 pt-6">
          <Link
            href="/the-lab/recipes"
            className="caption-style text-ink hover:underline underline-offset-4 font-korean"
          >
            &larr; 레시피 전체
          </Link>
        </div>
      </article>

      {/* 다른 레시피 — 레시피끼리 상호 연결해 색인·체류시간 강화 */}
      {others.length > 0 && (
        <section className="container-content pb-24 max-w-5xl">
          <div className="border-t-2 border-ink pt-6 mb-8">
            <span className="caption-style text-ink/80 font-korean">다른 레시피</span>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {others.map((r) => (
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
        </section>
      )}

      {/* 카페 사장 전환 CTA — 레시피 열람 → 머신 도입 문의로 연결 */}
      <section className="bg-ink py-20 lg:py-24">
        <div className="container-content flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="max-w-2xl">
            <p className="font-heading font-semibold text-[clamp(1.4rem,2.6vw,2.25rem)] text-paper leading-[1.25] tracking-[-0.01em] font-korean">
              이 메뉴, 우리 매장에서.
            </p>
            <p className="caption-style text-paper/75 mt-3 font-korean">
              갓 간 땅콩버터로 카페 시그니처 메뉴와 추가 매출을. 넛버터머신 넛츠스타 도입 상담을 받아보세요.
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
