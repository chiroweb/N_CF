"use client";

import Link from "next/link";

const NAV_LINKS = [
  { label: "AFTERBURNER", href: "/afterburner" },
  { label: "ROASTERS", href: "/roasters" },
  { label: "THE LAB", href: "/the-lab" },
  { label: "BRAND HALL", href: "/brand-hall" },
  { label: "CONTACT", href: "/contact" },
];

export default function Footer() {
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
            <p className="text-body-kr font-korean text-paper/70 text-sm mt-1">
              애프터버너만 만듭니다.
            </p>
          </div>

          {/* Col 2 — Navigation */}
          <div>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
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
            <span className="caption-style text-paper/70 block mb-4">
              FACTORY
            </span>
            <p className="text-sm text-paper/85 leading-relaxed">
              경기도 시흥시
              <br />
              [상세 주소]
            </p>
            <p className="text-sm text-paper/85 mt-3">
              +82 XX-XXXX-XXXX
            </p>
            <p className="text-sm text-paper/85">
              info@nbpkorea.com
            </p>

            <span className="caption-style text-paper/70 block mt-6 mb-2">
              HOURS
            </span>
            <p className="text-sm text-paper/85">
              Weekdays 09:00 – 18:00
            </p>
            <p className="text-xs font-korean text-paper/70">
              평일 09:00 – 18:00
            </p>
          </div>

          {/* Col 4 — Coordinates + Social */}
          <div>
            <p className="caption-style text-paper/70 mb-4">
              37.3430° N — 126.7395° E
            </p>
            <div className="space-y-3 mt-6">
              <a
                href="#"
                className="caption-style text-paper/85 hover:text-paper transition-colors block"
              >
                INSTAGRAM &rarr;
              </a>
              <a
                href="#"
                className="caption-style text-paper/85 hover:text-paper transition-colors block"
              >
                YOUTUBE &rarr;
              </a>
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
                  className="caption-style text-paper/50 group-hover:text-paper/70 transition-colors mx-8"
                >
                  &uarr; &uarr; &uarr; &uarr; &uarr; BACK TO TOP &uarr; &uarr; &uarr; &uarr; &uarr;
                </span>
              ))}
            </div>
          </button>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 border-t border-paper/10">
          <p className="caption-style text-paper/65">
            &copy; 2026 NBPKOREA CO., LTD.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="caption-style text-paper/65 hover:text-paper/85 transition-colors">
              PRIVACY
            </Link>
            <Link href="#" className="caption-style text-paper/65 hover:text-paper/85 transition-colors">
              TERMS
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
