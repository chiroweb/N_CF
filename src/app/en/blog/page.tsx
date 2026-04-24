"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import FloatingSectionNav, { type NavSection } from "@/components/layout/FloatingSectionNav";
import Image from "next/image";
import Link from "next/link";
import { POSTS } from "@/lib/posts";

const SECTIONS: NavSection[] = [
  { id: "overview", label: "OVERVIEW" },
  { id: "featured", label: "FEATURED" },
  { id: "entries", label: "ALL ENTRIES" },
  { id: "subscribe", label: "SUBSCRIBE" },
];

export default function BlogEnPage() {
  const pageRef = useRef<HTMLDivElement>(null);
  const featured = POSTS.find((p) => p.featured);
  const rest = POSTS.filter((p) => !p.featured);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const heroEls = pageRef.current?.querySelectorAll(".hero-fade");
      if (heroEls) gsap.fromTo(heroEls, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.12, ease: "power3.out" });
      const fadeEls = pageRef.current?.querySelectorAll(".scroll-fade");
      if (fadeEls) fadeEls.forEach((el) => gsap.fromTo(el, { opacity: 0, y: 25 }, {
        opacity: 1, y: 0, duration: 0.7, ease: "power2.out",
        scrollTrigger: { trigger: el, start: "top 88%", toggleActions: "play none none none" },
      }));
    }, pageRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef} className="bg-paper min-h-screen">
      <FloatingSectionNav sections={SECTIONS} />

      <section id="overview" className="container-content pt-24 lg:pt-32 pb-16 lg:pb-20">
        <div className="flex items-end justify-between gap-6 mb-10 lg:mb-16">
          <div>
            <span className="hero-fade caption-style text-ink/90 block mb-6 opacity-0">
              THE BLOG
            </span>
            <h1 className="hero-fade font-display font-bold text-[clamp(3rem,9vw,8rem)] text-ink leading-[0.88] tracking-[-0.04em] opacity-0">
              FIELD
              <br />
              NOTES.
            </h1>
          </div>
          <p className="hero-fade hidden md:block caption-style text-ink/90 text-right leading-relaxed max-w-[22ch] opacity-0">
            ENGINEERING, ROASTING,
            <br />
            AND THE STORIES BEHIND
            <br />
            EVERY MACHINE WE BUILD.
          </p>
        </div>
        <p className="hero-fade text-[clamp(1rem,1.25vw,1.15rem)] text-ink/85 leading-[1.7] max-w-2xl opacity-0">
          Field notes from the workshop — roasting profiles, combustion
          engineering, installation case studies. Posts are currently in
          Korean; English translations are on the roadmap.
        </p>
      </section>

      {featured && (
        <section id="featured" className="container-content pb-16 lg:pb-24">
          <Link href={`/blog/${featured.id}`} className="scroll-fade group grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-8 lg:gap-12 border-t-2 border-ink pt-6 opacity-0">
            <div className="relative aspect-[16/10] rounded-lg overflow-hidden bg-bone">
              <Image src={featured.image} alt={featured.title} fill priority sizes="(min-width: 1024px) 60vw, 100vw" className="object-cover object-center transition-transform duration-700 group-hover:scale-105" />
            </div>

            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-4">
                <span className="caption-style text-ink/80">FEATURED · {featured.category}</span>
                <span className="caption-style text-ink/80">{featured.date}</span>
              </div>
              <h2 className="font-display font-bold text-[clamp(1.75rem,3.4vw,2.75rem)] text-ink leading-[1.15] tracking-[-0.02em] mb-5 group-hover:underline underline-offset-4 decoration-2">
                {featured.title}
              </h2>
              <p className="text-[clamp(0.95rem,1.15vw,1.1rem)] text-ink/85 leading-[1.7]">
                {featured.excerpt}
              </p>
              <span className="caption-style text-ink mt-8 group-hover:underline underline-offset-4">
                READ IN KOREAN &rarr;
              </span>
            </div>
          </Link>
        </section>
      )}

      <section id="entries" className="container-content pb-32">
        <div className="flex items-baseline justify-between border-t-2 border-ink pt-6 mb-10">
          <span className="caption-style text-ink/80">ALL ENTRIES</span>
          <span className="caption-style text-ink/80">
            {String(POSTS.length).padStart(2, "0")} POSTS
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
          {rest.map((post) => (
            <Link key={post.id} href={`/blog/${post.id}`} className="scroll-fade group flex flex-col opacity-0">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-bone mb-6">
                <Image src={post.image} alt={post.title} fill sizes="(min-width: 768px) 40vw, 90vw" className="object-cover object-center transition-transform duration-700 group-hover:scale-105" />
              </div>

              <div className="flex items-center gap-4 mb-3">
                <span className="caption-style text-ink/80">{post.category}</span>
                <span className="caption-style text-ink/80">{post.date}</span>
              </div>

              <h3 className="font-display font-bold text-[clamp(1.25rem,2.2vw,1.9rem)] text-ink leading-[1.2] tracking-[-0.02em] mb-3 group-hover:underline underline-offset-4 decoration-2">
                {post.title}
              </h3>

              <p className="text-[clamp(0.95rem,1.15vw,1.1rem)] text-ink/80 leading-[1.7]">
                {post.excerpt}
              </p>

              <span className="caption-style text-ink mt-6 group-hover:underline underline-offset-4">
                READ IN KOREAN &rarr;
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section id="subscribe" className="bg-ink py-20 lg:py-24">
        <div className="container-content flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <p className="font-heading font-semibold text-[clamp(1.4rem,2.6vw,2.25rem)] text-paper leading-[1.3] tracking-[-0.01em]">
              Want new posts in your inbox?
            </p>
            <p className="caption-style text-paper/75 mt-3">
              ENGINEERING NOTES DELIVERED OCCASIONALLY.
            </p>
          </div>
          <Link href="/en/contact" className="btn-pill bg-paper text-ink hover:bg-ink hover:text-paper border-2 border-paper transition-all duration-200 rounded-lg shrink-0">
            SUBSCRIBE &rarr;
          </Link>
        </div>
      </section>
    </div>
  );
}
