import Link from "next/link";
import { RECIPES } from "@/lib/nutbutter";
import EditorialCard from "@/components/the-lab/EditorialCard";

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
    "땅콩버터 라떼",
    "즉석 견과버터",
  ],
  alternates: { canonical: "/the-lab/recipes" },
};

export default function RecipesIndexPage() {
  return (
    <div className="bg-paper min-h-screen">
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
    </div>
  );
}
