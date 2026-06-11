import Link from "next/link";
import { notFound } from "next/navigation";
import { NOTICES } from "@/lib/nutbutter";

type Props = { params: { id: string } };

// placeholder 단계 — 본문이 채워질 때까지 noindex.
export const metadata = { robots: { index: false, follow: true } };

export function generateStaticParams() {
  return NOTICES.map((n) => ({ id: n.id }));
}

export default function NoticeDetailPage({ params }: Props) {
  const notice = NOTICES.find((n) => n.id === params.id);
  if (!notice) notFound();

  return (
    <div className="bg-paper min-h-screen">
      <article className="container-content pt-24 lg:pt-32 pb-32 max-w-3xl">
        <span className="caption-style text-ink/90 block mb-6 font-korean">
          더 랩 / 노트 · {notice.category}
        </span>
        <h1 className="font-display font-bold text-[clamp(2rem,6vw,4rem)] text-ink leading-[0.95] tracking-[-0.03em] font-korean">
          {notice.title}
        </h1>
        <p className="caption-style text-ink/70 mt-6 font-korean">
          {notice.date}
        </p>

        <p className="text-body-kr font-korean text-ink/85 leading-[1.75] mt-12">
          {notice.excerpt}
        </p>
        <p className="text-body-kr font-korean text-ink/60 leading-[1.75] mt-8">
          본문은 곧 채워집니다. 이 화면은 구조 확인용 자리입니다.
        </p>

        <div className="mt-16 border-t border-ink/20 pt-6">
          <Link
            href="/the-lab#library"
            className="caption-style text-ink hover:underline underline-offset-4 font-korean"
          >
            &larr; 더 랩 / 노트
          </Link>
        </div>
      </article>
    </div>
  );
}
