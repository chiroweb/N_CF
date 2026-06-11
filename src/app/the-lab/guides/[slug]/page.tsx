import Link from "next/link";
import { notFound } from "next/navigation";
import { USE_GUIDES, CARE_GUIDES } from "@/lib/nutbutter";

type Props = { params: { slug: string } };

// placeholder 단계 — 영상·본문이 채워질 때까지 noindex.
export const metadata = { robots: { index: false, follow: true } };

export function generateStaticParams() {
  return [...USE_GUIDES, ...CARE_GUIDES].map((g) => ({ slug: g.id }));
}

export default function GuideDetailPage({ params }: Props) {
  const guide = [...USE_GUIDES, ...CARE_GUIDES].find((g) => g.id === params.slug);
  if (!guide) notFound();

  return (
    <div className="bg-paper min-h-screen">
      <article className="container-content pt-24 lg:pt-32 pb-32 max-w-3xl">
        <span className="caption-style text-ink/90 block mb-6 font-korean">
          더 랩 / 가이드 · {guide.chapter}
        </span>
        <h1 className="font-display font-bold text-[clamp(2rem,6vw,4rem)] text-ink leading-[0.95] tracking-[-0.03em] font-korean">
          {guide.title}
        </h1>
        <p className="caption-style text-ink/70 mt-6 font-korean">
          {guide.durationLabel}
        </p>

        <div className="relative aspect-[16/9] rounded-lg overflow-hidden bg-bone mt-12 mb-12 flex items-center justify-center">
          <span className="font-display font-bold text-[clamp(2rem,5vw,3.5rem)] text-ink/15 tracking-[-0.04em]">
            VIDEO PLACEHOLDER
          </span>
        </div>

        <p className="text-body-kr font-korean text-ink/85 leading-[1.75]">
          {guide.excerpt}
        </p>
        <p className="text-body-kr font-korean text-ink/60 leading-[1.75] mt-8">
          본문과 영상은 곧 채워집니다. 이 화면은 구조 확인용 자리입니다.
        </p>

        <div className="mt-16 border-t border-ink/20 pt-6">
          <Link
            href="/the-lab#catalog"
            className="caption-style text-ink hover:underline underline-offset-4 font-korean"
          >
            &larr; 더 랩 / 실전·관리
          </Link>
        </div>
      </article>
    </div>
  );
}
