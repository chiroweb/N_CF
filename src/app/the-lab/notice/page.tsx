import Link from "next/link";
import { NOTICES } from "@/lib/nutbutter";

export const metadata = {
  title: "더 랩 — 노트 색인 / 넛츠스타",
  description: "넛버터머신 넛츠스타의 공지·정비·일정 노트 전체 색인.",
  // placeholder 단계 — 본문이 채워질 때까지 noindex.
  robots: { index: false, follow: true },
};

export default function NoticeIndexPage() {
  return (
    <div className="bg-paper min-h-screen">
      <section className="container-content pt-24 lg:pt-32 pb-16">
        <span className="caption-style text-ink/90 block mb-6 font-korean">
          더 랩 / 노트 색인
        </span>
        <h1 className="font-display font-bold text-[clamp(3rem,9vw,7rem)] text-ink leading-[0.88] tracking-[-0.04em] font-korean">
          노트.
        </h1>
      </section>

      <section className="container-content pb-32">
        <ul className="border-t-2 border-ink">
          {NOTICES.map((n) => (
            <li key={n.id} className="border-b border-ink/15">
              <Link
                href={`/the-lab/notice/${n.id}`}
                className="group grid grid-cols-[100px_1fr] md:grid-cols-[120px_120px_1fr] gap-x-6 md:gap-x-10 gap-y-2 py-6 md:py-8 items-baseline"
              >
                <span className="caption-style text-ink/70 font-korean">
                  {n.date}
                </span>
                <span className="caption-style text-ink/90 font-korean hidden md:inline">
                  {n.category}
                </span>
                <div className="col-span-2 md:col-span-1">
                  <h2 className="font-display font-bold text-[clamp(1.15rem,1.9vw,1.7rem)] text-ink leading-[1.25] tracking-[-0.02em] group-hover:underline underline-offset-4 decoration-2 font-korean">
                    {n.title}
                  </h2>
                  <p className="text-body-kr font-korean text-ink/75 leading-[1.65] mt-2">
                    {n.excerpt}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-12">
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
