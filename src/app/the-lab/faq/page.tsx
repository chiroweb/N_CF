import Link from "next/link";
import { FAQ_CATEGORIES } from "@/lib/nutbutter";
import FaqAccordion from "@/components/the-lab/FaqAccordion";

export const metadata = {
  title: "더 랩 — FAQ / 넛츠스타",
  description: "넛버터머신 넛츠스타에 대한 자주 묻는 질문.",
};

export default function FaqPage() {
  return (
    <div className="bg-paper min-h-screen">
      <section className="container-content pt-24 lg:pt-32 pb-16">
        <span className="caption-style text-ink/90 block mb-6 font-korean">
          더 랩 / 자주 묻는 질문
        </span>
        <h1 className="font-display font-bold text-[clamp(3rem,9vw,7rem)] text-ink leading-[0.88] tracking-[-0.04em] font-korean">
          FAQ.
        </h1>
      </section>

      <section className="container-content pb-32 space-y-14">
        <FaqAccordion categories={FAQ_CATEGORIES} />

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
