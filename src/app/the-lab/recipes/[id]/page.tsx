import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { RECIPES } from "@/lib/nutbutter";

type Props = { params: { id: string } };

const SITE_URL = "https://www.nbpcafe.com";

export function generateStaticParams() {
  return RECIPES.map((r) => ({ id: r.id }));
}

export function generateMetadata({ params }: Props): Metadata {
  const recipe = RECIPES.find((r) => r.id === params.id);
  if (!recipe) return {};
  return {
    title: `${recipe.title} — 넛버터 레시피 | 넛츠스타`,
    description: recipe.excerpt,
    alternates: { canonical: `/the-lab/recipes/${recipe.id}` },
  };
}

export default function RecipeDetailPage({ params }: Props) {
  const recipe = RECIPES.find((r) => r.id === params.id);
  if (!recipe) notFound();

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

        <div className="mt-12 border-t border-ink/20 pt-6 flex flex-wrap gap-6">
          <Link
            href="/the-lab/recipes"
            className="caption-style text-ink hover:underline underline-offset-4 font-korean"
          >
            &larr; 레시피 전체
          </Link>
          <Link
            href="/contact"
            className="caption-style text-ink hover:underline underline-offset-4 font-korean"
          >
            견적 · 도입 문의 &rarr;
          </Link>
        </div>
      </article>
    </div>
  );
}
