import Link from "next/link";
import { LAB_POSTS } from "@/lib/nutbutter";

export const metadata = {
  title: "더 랩 — 기록 / 넛츠스타",
  description: "넛버터머신 넛츠스타의 현장 기록과 메뉴 노트.",
  // placeholder 단계 — 본문·사진이 채워질 때까지 noindex.
  robots: { index: false, follow: true },
};

export default function BlogIndexPage() {
  return (
    <div className="bg-paper min-h-screen">
      <section className="container-content pt-24 lg:pt-32 pb-16">
        <span className="caption-style text-ink/90 block mb-6 font-korean">
          더 랩 / 기록 색인
        </span>
        <h1 className="font-display font-bold text-[clamp(3rem,9vw,7rem)] text-ink leading-[0.88] tracking-[-0.04em] font-korean">
          기록.
        </h1>
      </section>

      <section className="container-content pb-32">
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12">
          {LAB_POSTS.map((p) => (
            <li key={p.id}>
              <Link href={`/the-lab/blog/${p.id}`} className="group block">
                <div className="relative aspect-[16/10] rounded-lg overflow-hidden bg-bone mb-5">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-display font-bold text-[clamp(1.5rem,4vw,2.5rem)] text-ink/15 tracking-[-0.04em]">
                      IMAGE
                    </span>
                  </div>
                  <span className="absolute left-4 bottom-3 caption-style text-ink/70 font-korean">
                    {p.chapter}
                  </span>
                </div>
                <div className="flex items-center gap-3 mb-3 flex-wrap">
                  <span className="caption-style text-ink/80 font-korean">
                    {p.category}
                  </span>
                  <span className="caption-style text-ink/60">·</span>
                  <span className="caption-style text-ink/70 font-korean">
                    {p.date}
                  </span>
                </div>
                <h2 className="font-display font-bold text-[clamp(1.15rem,1.8vw,1.45rem)] text-ink leading-[1.25] tracking-[-0.02em] group-hover:underline underline-offset-4 decoration-2 font-korean">
                  {p.title}
                </h2>
                <p className="text-body-kr font-korean text-ink/80 leading-[1.65] mt-3">
                  {p.excerpt}
                </p>
              </Link>
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
