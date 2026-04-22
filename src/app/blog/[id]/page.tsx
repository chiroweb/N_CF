import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getPost, listPostIds, POSTS, type Block } from "@/lib/posts";

export function generateStaticParams() {
  return listPostIds().map((id) => ({ id }));
}

export function generateMetadata({ params }: { params: { id: string } }) {
  const post = getPost(params.id);
  if (!post) return { title: "Not Found" };
  return {
    title: `${post.title} — NBPKOREA`,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const post = getPost(params.id);
  if (!post) notFound();

  const idx = POSTS.findIndex((p) => p.id === post.id);
  const prev = idx > 0 ? POSTS[idx - 1] : null;
  const next = idx < POSTS.length - 1 ? POSTS[idx + 1] : null;

  return (
    <article className="bg-paper min-h-screen">
      {/* Top strip */}
      <div className="container-content pt-24 lg:pt-32 pb-8">
        <Link
          href="/blog"
          className="caption-style text-ink/90 hover:text-ink transition-colors inline-block mb-12"
        >
          &larr; BACK TO FIELD NOTES
        </Link>

        <div className="flex items-center gap-4 mb-8 flex-wrap">
          <span className="caption-style text-ink/85">{post.category}</span>
          <span className="caption-style text-ink/70">·</span>
          <span className="caption-style text-ink/85">{post.date}</span>
          <span className="caption-style text-ink/70">·</span>
          <span className="caption-style text-ink/85">
            {post.readMinutes} MIN READ
          </span>
        </div>

        <h1 className="font-display font-bold text-[clamp(2.25rem,6vw,5rem)] text-ink leading-[0.95] tracking-[-0.03em] max-w-4xl">
          {post.title}
        </h1>

        <p className="text-body-kr font-korean text-ink/85 leading-[1.75] mt-8 max-w-2xl">
          {post.excerpt}
        </p>
      </div>

      {/* Cover */}
      <div className="container-content pb-14 lg:pb-20">
        <div className="relative aspect-[16/9] rounded-lg overflow-hidden bg-bone">
          <Image
            src={post.image}
            alt={post.imageAlt ?? post.title}
            fill
            priority
            sizes="(min-width: 1280px) 1200px, 100vw"
            className="object-cover object-center"
          />
        </div>
      </div>

      {/* Body */}
      <div className="container-content pb-24">
        <div className="max-w-[42rem] mx-auto">
          {post.body.map((block, i) => (
            <BodyBlock key={i} block={block} />
          ))}
        </div>
      </div>

      {/* Between-post nav */}
      <div className="bg-bone border-t border-ink/15">
        <div className="container-content py-14 grid grid-cols-1 md:grid-cols-2 gap-10">
          {prev ? (
            <Link
              href={`/blog/${prev.id}`}
              className="group block"
              aria-label={`Previous post: ${prev.title}`}
            >
              <span className="caption-style text-ink/80 block mb-3">
                &larr; PREVIOUS
              </span>
              <p className="font-display font-bold text-[clamp(1.2rem,2vw,1.6rem)] text-ink leading-[1.2] tracking-[-0.02em] group-hover:underline underline-offset-4 decoration-2">
                {prev.title}
              </p>
            </Link>
          ) : (
            <div aria-hidden />
          )}
          {next ? (
            <Link
              href={`/blog/${next.id}`}
              className="group block md:text-right"
              aria-label={`Next post: ${next.title}`}
            >
              <span className="caption-style text-ink/80 block mb-3">
                NEXT &rarr;
              </span>
              <p className="font-display font-bold text-[clamp(1.2rem,2vw,1.6rem)] text-ink leading-[1.2] tracking-[-0.02em] group-hover:underline underline-offset-4 decoration-2">
                {next.title}
              </p>
            </Link>
          ) : (
            <div aria-hidden />
          )}
        </div>
      </div>

      {/* Closing CTA */}
      <section className="bg-ink py-20 lg:py-24">
        <div className="container-content flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <p className="font-heading font-semibold text-[clamp(1.4rem,2.6vw,2.25rem)] text-paper leading-[1.25] tracking-[-0.01em]">
              이 글이 도움이 되었다면.
            </p>
            <p className="caption-style text-paper/75 mt-3">
              TALK TO US ABOUT YOUR ROASTERY.
            </p>
          </div>
          <Link
            href="/contact"
            className="btn-pill bg-paper text-ink hover:bg-ink hover:text-paper border-2 border-paper transition-all duration-200 rounded-lg shrink-0"
          >
            CONTACT &rarr;
          </Link>
        </div>
      </section>
    </article>
  );
}

function BodyBlock({ block }: { block: Block }) {
  switch (block.type) {
    case "h2":
      return (
        <h2 className="font-display font-bold text-[clamp(1.5rem,2.6vw,2rem)] text-ink leading-[1.15] tracking-[-0.02em] mt-14 mb-5">
          {block.text}
        </h2>
      );
    case "quote":
      return (
        <blockquote className="my-12 pl-6 border-l-2 border-ink">
          <p className="font-display text-[clamp(1.2rem,2vw,1.6rem)] text-ink italic leading-[1.4] tracking-[-0.01em]">
            &ldquo;{block.text}&rdquo;
          </p>
        </blockquote>
      );
    case "caption":
      return (
        <p className="caption-style text-ink/75 my-4">{block.text}</p>
      );
    case "p":
    default:
      return (
        <p className="text-body-kr font-korean text-ink/90 leading-[1.85] mb-6">
          {block.text}
        </p>
      );
  }
}
