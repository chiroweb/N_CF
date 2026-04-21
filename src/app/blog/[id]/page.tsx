import Link from "next/link";

export default function BlogPostPage({ params }: { params: { id: string } }) {
  return (
    <div className="bg-paper min-h-screen">
      <div className="container-content pt-24 lg:pt-32 pb-32">
        <Link
          href="/blog"
          className="caption-style text-ink/90 hover:text-ink transition-colors inline-block mb-10"
        >
          &larr; BACK TO FIELD NOTES
        </Link>

        <span className="caption-style text-ink/90 block mb-6">
          ENTRY · {String(params.id).padStart(2, "0")}
        </span>

        <h1 className="font-display font-bold text-[clamp(2.5rem,7vw,6rem)] text-ink leading-[0.9] tracking-[-0.03em]">
          DRAFT
          <br />
          IN PROGRESS.
        </h1>

        <div className="mt-12 max-w-2xl border-t-2 border-ink pt-8">
          <p className="text-[clamp(1rem,1.3vw,1.2rem)] text-ink/85 leading-[1.7] mb-4">
            This piece is still being written. The engineer is on the
            floor — the draft is waiting for the observation that makes
            it worth publishing.
          </p>
          <p className="text-body-kr font-korean text-ink/80 leading-[1.75]">
            이 글은 아직 작성 중입니다. 엔지니어는 현장에 있고, 본문은
            발행할 가치가 있는 관찰을 기다리고 있습니다.
          </p>
        </div>

        <div className="mt-16">
          <Link
            href="/blog"
            className="btn-pill bg-ink text-paper hover:bg-paper hover:text-ink border-2 border-ink transition-all duration-200 rounded-lg"
          >
            RETURN TO THE INDEX &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
