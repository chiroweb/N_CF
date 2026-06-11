import Image from "next/image";
import Link from "next/link";

// /the-lab 카탈로그 카드. 무그림자·무그라데이션·4톤 디자인 원칙 유지.
// 이미지 → 캡션(eyebrow) → 제목 → 메타. 카드 전체가 링크.
// video=true면 썸네일 위에 재생 버튼 + 시간 배지를 올려 '영상'임을 표시.
export type EditorialCardProps = {
  href: string;
  thumb: string;
  eyebrow: string;
  title: string;
  meta?: string;
  excerpt?: string;
  priority?: boolean;
  video?: boolean;
  badge?: string; // 썸네일 위 배지(예: "4분 12초")
};

// "주제 — 부제" 제목은 em dash(—) 뒤에서 줄을 바꿔 두 줄로 고정한다.
// 부제가 카드 안에서 어정쩡하게 잘리는 것을 막는다.
function renderTitle(title: string) {
  const idx = title.indexOf(" — ");
  if (idx === -1) return title;
  return (
    <>
      {title.slice(0, idx)} —
      <span className="block">{title.slice(idx + 3)}</span>
    </>
  );
}

export default function EditorialCard({
  href,
  thumb,
  eyebrow,
  title,
  meta,
  excerpt,
  priority = false,
  video = false,
  badge,
}: EditorialCardProps) {
  return (
    <Link
      href={href}
      className="group block border-2 border-ink bg-paper overflow-hidden transition-colors duration-200 hover:bg-bone"
    >
      <div className="relative aspect-[4/3] bg-bone overflow-hidden border-b-2 border-ink">
        <Image
          src={thumb}
          alt={title}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 24vw, (min-width: 640px) 45vw, 100vw"
          className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.04]"
        />

        {video && (
          <span className="absolute inset-0 flex items-center justify-center" aria-hidden>
            <span className="flex items-center justify-center w-12 h-12 rounded-full bg-paper/90 border-2 border-ink transition-colors group-hover:bg-ink">
              <svg
                viewBox="0 0 24 24"
                className="w-4 h-4 ml-0.5 fill-ink transition-colors group-hover:fill-paper"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </span>
        )}

        {badge && (
          <span className="absolute bottom-2 right-2 bg-ink text-paper caption-style px-2 py-1 font-korean">
            {badge}
          </span>
        )}
      </div>

      <div className="p-5">
        <span className="caption-style text-ink/70 block mb-2 font-korean">
          {eyebrow}
        </span>
        <h3 className="font-display font-bold text-[clamp(1.05rem,1.7vw,1.35rem)] text-ink leading-[1.25] tracking-[-0.02em] font-korean group-hover:underline underline-offset-4 decoration-2">
          {renderTitle(title)}
        </h3>
        {excerpt && (
          <p className="text-body-kr font-korean text-ink/75 leading-[1.6] mt-2.5">
            {excerpt}
          </p>
        )}
        {meta && (
          <span className="caption-style text-ink/60 block mt-3 font-korean">
            {meta}
          </span>
        )}
      </div>
    </Link>
  );
}
