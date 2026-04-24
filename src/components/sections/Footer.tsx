"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { COMPANY } from "@/lib/company";

const BASE_LINKS = [
  { label: "HOME", href: "/" },
  { label: "AFTERBURNER", href: "/afterburner" },
  { label: "ROASTERS", href: "/roasters" },
  { label: "THE LAB", href: "/the-lab" },
  { label: "DELIVERIES", href: "/deliveries" },
  { label: "BRAND HALL", href: "/brand-hall" },
  { label: "BLOG", href: "/blog" },
  { label: "CONTACT", href: "/contact" },
];

function localize(href: string, isEn: boolean) {
  if (!isEn) return href;
  return href === "/" ? "/en" : `/en${href}`;
}

export default function Footer() {
  const pathname = usePathname() ?? "/";
  const isEn = pathname.startsWith("/en");
  const links = BASE_LINKS.map((l) => ({ ...l, href: localize(l.href, isEn) }));

  const addressLine = isEn
    ? "40 MTV-ro 8-gil, Danwon-gu, Ansan-si, Gyeonggi-do, South Korea"
    : COMPANY.address;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-ink text-paper">
      <div className="container-content pt-24 pb-8">
        {/* 4-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
          {/* Col 1 — Logo + tagline */}
          <div>
            <h2 className="font-display font-bold text-2xl tracking-tight mb-4">
              NBPKOREA
            </h2>
            <p className="text-body-en text-paper/85 text-sm">
              We only make afterburners.
            </p>
            {!isEn && (
              <p className="text-body-kr font-korean text-paper/90 text-sm mt-1">
                애프터버너만 만듭니다.
              </p>
            )}
          </div>

          {/* Col 2 — Navigation */}
          <div>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="caption-style text-paper/85 hover:text-paper transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Contact */}
          <div>
            <span className="caption-style text-paper/90 block mb-4">
              FACTORY
            </span>
            <p className="text-sm text-paper/85 leading-[1.6]">
              {addressLine}
            </p>
            <p className="text-sm text-paper/85 mt-3">
              T. {isEn ? `+82-${COMPANY.phonePrimary.slice(1)}` : COMPANY.phonePrimary}
            </p>
            <p className="text-sm text-paper/85">
              F. {isEn ? `+82-${COMPANY.fax.slice(1)}` : COMPANY.fax}
            </p>
            <p className="text-sm text-paper/85 mt-1">
              {COMPANY.email}
            </p>

            <span className="caption-style text-paper/90 block mt-6 mb-2">
              HOURS
            </span>
            <p className="text-sm text-paper/85">
              {COMPANY.hoursEn}
            </p>
            {!isEn && (
              <p className="text-xs font-korean text-paper/90">
                {COMPANY.hoursKr}
              </p>
            )}
          </div>

          {/* Col 4 — Coordinates + Social */}
          <div>
            <p className="caption-style text-paper/90 mb-4">
              {COMPANY.coordinates}
            </p>
            <div className="space-y-3 mt-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="caption-style text-paper/85 hover:text-paper transition-colors block"
              >
                INSTAGRAM &rarr;
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="caption-style text-paper/85 hover:text-paper transition-colors block"
              >
                YOUTUBE &rarr;
              </a>
              <Link
                href={isEn ? "/" : "/en"}
                className="caption-style text-paper/85 hover:text-paper transition-colors block"
              >
                {isEn ? "한국어 / KR" : "ENGLISH / EN"} &rarr;
              </Link>
            </div>
          </div>
        </div>

        {/* Back to top marquee */}
        <div className="border-t border-paper/10 pt-6">
          <button
            onClick={scrollToTop}
            className="w-full overflow-hidden py-4 group"
          >
            <div className="animate-marquee whitespace-nowrap">
              {Array.from({ length: 5 }).map((_, i) => (
                <span
                  key={i}
                  className="caption-style text-paper/70 group-hover:text-paper/90 transition-colors mx-8"
                >
                  &uarr; &uarr; &uarr; &uarr; &uarr; BACK TO TOP &uarr; &uarr; &uarr; &uarr; &uarr;
                </span>
              ))}
            </div>
          </button>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 border-t border-paper/10">
          <p className="caption-style text-paper/85">
            &copy; 2026 {isEn ? "NBPKOREA" : COMPANY.nameKr} · CEO {isEn ? "Choi Hyeok-soon" : COMPANY.ceo} · {COMPANY.businessNumber}
          </p>
          <div className="flex gap-6">
            <Link href="#" className="caption-style text-paper/85 hover:text-paper/85 transition-colors">
              {isEn ? "PRIVACY" : "개인정보처리방침"}
            </Link>
            <Link href="#" className="caption-style text-paper/85 hover:text-paper/85 transition-colors">
              {isEn ? "TERMS" : "이용약관"}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
