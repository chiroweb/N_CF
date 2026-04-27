"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const BASE_NAV_ITEMS = [
  { label: "HOME", href: "/" },
  { label: "AFTERBURNER", href: "/afterburner" },
  { label: "ROASTERS", href: "/roasters" },
  { label: "THE LAB", href: "/the-lab" },
  { label: "DELIVERIES", href: "/deliveries" },
  { label: "BRAND HALL", href: "/brand-hall" },
  { label: "BLOG", href: "/blog" },
  { label: "CONTACT", href: "/contact" },
];

function localizeHref(href: string, isEn: boolean): string {
  if (!isEn) return href;
  return href === "/" ? "/en" : `/en${href}`;
}

function IconInstagram() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IconYouTube() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 00.5 6.2 31.5 31.5 0 000 12a31.5 31.5 0 00.5 5.8 3 3 0 002.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 002.1-2.1A31.5 31.5 0 0024 12a31.5 31.5 0 00-.5-5.8zM9.5 15.5v-7l6.3 3.5-6.3 3.5z" />
    </svg>
  );
}

function IconGlobe() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
    </svg>
  );
}

export default function EdgeRails() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname() ?? "/";
  const isEn = pathname.startsWith("/en");
  const navItems = BASE_NAV_ITEMS.map((item) => ({
    ...item,
    href: localizeHref(item.href, isEn),
  }));

  return (
    <>
      {/* Left rail — CTA (desktop only) */}
      <div className="fixed top-0 left-0 bottom-0 w-[var(--edge-margin)] z-40 hidden lg:flex items-center justify-center pointer-events-none">
        <Link
          href={localizeHref("/contact", isEn)}
          className="text-vertical-left caption-style text-ink hover:opacity-60 transition-opacity pointer-events-auto"
        >
          TALK TO AN ENGINEER
        </Link>
      </div>

      {/* Right rail — Navigation bar (desktop only) */}
      <div className="fixed top-0 right-0 bottom-0 w-[var(--edge-margin)] z-50 hidden lg:flex flex-col items-center justify-between py-6 border-l border-bone/30 bg-paper">
        {/* Top: Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex flex-col items-center justify-center gap-[5px] cursor-pointer"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <span className={`block w-5 h-[2px] bg-ink transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
          <span className={`block w-5 h-[2px] bg-ink transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-[2px] bg-ink transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
        </button>

        {/* Middle: Vertical text */}
        <span className="text-vertical-right caption-style text-ink/75 select-none whitespace-nowrap">
          FACTORY — ANSAN / EST. 2006
        </span>

        {/* Bottom: Social icons */}
        <div className="flex flex-col items-center gap-5">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-ink/75 hover:text-ink transition-colors" aria-label="Instagram">
            <IconInstagram />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-ink/75 hover:text-ink transition-colors" aria-label="YouTube">
            <IconYouTube />
          </a>
          <a href="https://nbpkorea.co.kr" target="_blank" rel="noopener noreferrer" className="text-ink/75 hover:text-ink transition-colors" aria-label="Website">
            <IconGlobe />
          </a>
        </div>
      </div>

      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-ink/30 z-[55] transition-opacity duration-500 ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Half-screen slide-in menu */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-1/2 bg-ink z-[60] flex flex-col p-12 lg:p-16 transition-transform duration-500 ease-out ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center cursor-pointer"
          aria-label="Close menu"
        >
          <span className="block w-6 h-[2px] bg-paper rotate-45 absolute" />
          <span className="block w-6 h-[2px] bg-paper -rotate-45 absolute" />
        </button>

        <ul className="flex flex-col gap-8 mt-16">
          {navItems.map((item, i) => (
            <li
              key={item.href}
              style={{
                transition: "opacity 500ms, transform 500ms",
                transitionDelay: menuOpen ? `${i * 80 + 200}ms` : "0ms",
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? "translateX(0)" : "translateX(30px)",
              }}
            >
              <Link
                href={item.href}
                className="font-display font-bold text-[clamp(1.5rem,3vw,2.5rem)] text-paper hover:text-bone transition-colors tracking-tight"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="absolute right-12 bottom-12 lg:right-16 lg:bottom-16 flex flex-col items-end gap-4">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="caption-style text-paper/80 hover:text-paper transition-colors">INSTAGRAM &rarr;</a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="caption-style text-paper/80 hover:text-paper transition-colors">YOUTUBE &rarr;</a>
          <a href="https://nbpkorea.co.kr" target="_blank" rel="noopener noreferrer" className="caption-style text-paper/80 hover:text-paper transition-colors">NBPKOREA.CO.KR &rarr;</a>
        </div>
      </div>
    </>
  );
}
