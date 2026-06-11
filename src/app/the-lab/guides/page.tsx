import Link from "next/link";
import { USE_GUIDES, CARE_GUIDES } from "@/lib/nutbutter";

export const metadata = {
  title: "더 랩 — 가이드 색인 / 넛츠스타",
  description: "넛버터머신 넛츠스타의 사용법과 정비 가이드 전체 색인.",
  // placeholder 단계 — 영상·본문이 채워질 때까지 noindex.
  robots: { index: false, follow: true },
};

export default function GuidesIndexPage() {
  const groups = [
    { id: "use", label: "04장 · 실전", items: USE_GUIDES },
    { id: "care", label: "05장 · 관리", items: CARE_GUIDES },
  ];

  return (
    <div className="bg-paper min-h-screen">
      <section className="container-content pt-24 lg:pt-32 pb-16">
        <span className="caption-style text-ink/90 block mb-6 font-korean">
          더 랩 / 가이드 색인
        </span>
        <h1 className="font-display font-bold text-[clamp(3rem,9vw,7rem)] text-ink leading-[0.88] tracking-[-0.04em] font-korean">
          가이드
          <br />
          전체 색인.
        </h1>
      </section>

      <section className="container-content pb-32 space-y-16">
        {groups.map((group) => (
          <div key={group.id}>
            <h2 className="caption-style text-ink/90 mb-4 font-korean">
              {group.label}
            </h2>
            <ul className="border-t-2 border-ink">
              {group.items.map((g) => (
                <li key={g.id} className="border-b border-ink/15">
                  <Link
                    href={`/the-lab/guides/${g.id}`}
                    className="group grid grid-cols-[64px_1fr_auto] gap-6 py-6 items-baseline"
                  >
                    <span className="caption-style text-ink/70 font-korean">
                      {g.chapter}
                    </span>
                    <h3 className="font-display font-bold text-[clamp(1.15rem,1.8vw,1.5rem)] text-ink leading-[1.25] tracking-[-0.02em] group-hover:underline underline-offset-4 decoration-2 font-korean">
                      {g.title}
                    </h3>
                    <span className="caption-style text-ink/70 shrink-0 font-korean hidden md:inline">
                      {g.durationLabel}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
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
