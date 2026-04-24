"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { COMPANY } from "@/lib/company";

const NAV_LINKS = [
  { label: "AFTERBURNER", href: "/afterburner" },
  { label: "ROASTERS", href: "/roasters" },
  { label: "THE LAB", href: "/the-lab" },
  { label: "DELIVERIES", href: "/deliveries" },
  { label: "BRAND HALL", href: "/brand-hall" },
  { label: "BLOG", href: "/blog" },
  { label: "CONTACT", href: "/contact" },
];

const EN_NAV_LINKS = NAV_LINKS.map((l) => ({ ...l, href: `/en${l.href}` }));

// Map the current pathname to its counterpart in the other language.
// "/afterburner" → "/en/afterburner"; "/en/contact" → "/contact"; "/" → "/en".
function localizePath(pathname: string): { currentLang: "ko" | "en"; otherHref: string } {
  if (pathname.startsWith("/en")) {
    const rest = pathname.slice(3);
    return { currentLang: "en", otherHref: rest === "" ? "/" : rest };
  }
  return { currentLang: "ko", otherHref: pathname === "/" ? "/en" : `/en${pathname}` };
}

type Theme = "light" | "dark";

// Walk up the DOM from the logo position and read the first solid bg color.
// mix-blend-difference fails under Lenis transforms, so we pick the color
// explicitly based on the actual backdrop luminance.
function useNavTheme() {
  const [theme, setTheme] = useState<Theme>("light");
  const rafRef = useRef(0);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const detect = () => {
      const nav = navRef.current;
      if (!nav) return;

      // Briefly hide the nav so elementFromPoint returns what's behind it.
      const prev = nav.style.visibility;
      nav.style.visibility = "hidden";
      const point = document.elementFromPoint(
        Math.min(80, window.innerWidth / 2),
        28
      );
      nav.style.visibility = prev;

      let el: Element | null = point;
      while (el) {
        const color = getComputedStyle(el).backgroundColor;
        const match = color.match(
          /rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*([\d.]+))?\s*\)/
        );
        if (match) {
          const r = Number(match[1]);
          const g = Number(match[2]);
          const b = Number(match[3]);
          const a = match[4] ? Number(match[4]) : 1;
          if (a > 0.2) {
            const luminance = 0.299 * r + 0.587 * g + 0.114 * b;
            setTheme(luminance < 140 ? "dark" : "light");
            return;
          }
        }
        el = el.parentElement;
      }
      setTheme("light");
    };

    const schedule = () => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(detect);
    };

    detect();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);

  return { theme, navRef };
}

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { theme, navRef } = useNavTheme();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isDark = theme === "dark";
  const fg = isDark ? "text-paper" : "text-ink";
  const bar = isDark ? "bg-paper" : "bg-ink";
  const { currentLang, otherHref } = localizePath(pathname || "/");
  const activeLocaleClass = isDark ? "text-paper" : "text-ink";
  const idleLocaleClass = isDark ? "text-paper/50 hover:text-paper" : "text-ink/50 hover:text-ink";

  return (
    <>
      <nav
        ref={navRef}
        className="fixed top-0 left-0 right-0 z-50 pointer-events-none"
      >
        <div className="container-content grid grid-cols-3 items-center h-16">
          {/* Language switch — left slot */}
          <div className="justify-self-start pointer-events-auto flex items-baseline gap-2 font-display font-bold text-[0.72rem] tracking-[0.1em]">
            <Link
              href={currentLang === "ko" ? (pathname || "/") : otherHref}
              aria-label="한국어"
              aria-current={currentLang === "ko" ? "page" : undefined}
              className={`transition-colors duration-200 ${currentLang === "ko" ? activeLocaleClass : idleLocaleClass}`}
            >
              KR
            </Link>
            <span className={`${isDark ? "text-paper/30" : "text-ink/30"}`}>/</span>
            <Link
              href={currentLang === "en" ? (pathname || "/en") : otherHref}
              aria-label="English"
              aria-current={currentLang === "en" ? "page" : undefined}
              className={`transition-colors duration-200 ${currentLang === "en" ? activeLocaleClass : idleLocaleClass}`}
            >
              EN
            </Link>
          </div>

          {/* Centered logo — doubles as home link */}
          <Link
            href="/"
            aria-label="NBPKOREA — home"
            className={`group justify-self-center font-display font-bold text-lg tracking-tight pointer-events-auto transition-colors duration-200 ${fg}`}
          >
            <span className="group-hover:underline underline-offset-[6px] decoration-[1.5px]">
              NBPKOREA
            </span>
          </Link>

          {/* Mobile menu button — desktop handled by EdgeRails right rail */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="lg:hidden justify-self-end pointer-events-auto w-10 h-10 flex flex-col items-end justify-center gap-1.5"
          >
            <span className={`block w-6 h-[2px] ${bar}`} />
            <span className={`block w-4 h-[2px] ${bar}`} />
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay — desktop uses EdgeRails slide-in */}
      {open && (
        <div className="lg:hidden fixed inset-0 z-[60] bg-ink text-paper flex flex-col">
          <div className="flex items-center justify-between h-16 px-[var(--edge-margin)]">
            <span className="font-display font-bold text-lg tracking-tight">
              NBPKOREA
            </span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="w-10 h-10 flex items-center justify-center relative"
            >
              <span className="absolute block w-6 h-[2px] bg-paper rotate-45" />
              <span className="absolute block w-6 h-[2px] bg-paper -rotate-45" />
            </button>
          </div>

          <div className="flex-1 flex flex-col justify-center px-[var(--edge-margin)] pb-20">
            <ul className="space-y-6">
              {(currentLang === "en" ? EN_NAV_LINKS : NAV_LINKS).map((link) => {
                const active = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`font-display font-bold text-[clamp(2rem,8vw,3.5rem)] tracking-[-0.02em] leading-[1] block transition-colors ${
                        active ? "text-paper" : "text-paper/80 hover:text-paper"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="mt-10 flex items-baseline gap-3 font-display font-bold text-sm tracking-[0.12em]">
              <Link
                href={currentLang === "ko" ? (pathname || "/") : otherHref}
                className={currentLang === "ko" ? "text-paper" : "text-paper/50 hover:text-paper"}
              >
                KR
              </Link>
              <span className="text-paper/30">/</span>
              <Link
                href={currentLang === "en" ? (pathname || "/en") : otherHref}
                className={currentLang === "en" ? "text-paper" : "text-paper/50 hover:text-paper"}
              >
                EN
              </Link>
            </div>

            <div className="mt-10 pt-8 border-t border-paper/15">
              <p className="caption-style text-paper/80">
                {COMPANY.coordinates}
              </p>
              <p className="caption-style text-paper/80 mt-2">
                {COMPANY.email}
              </p>
              <p className="caption-style text-paper/80 mt-2">
                T. {COMPANY.phonePrimary}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
