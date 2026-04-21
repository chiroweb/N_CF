"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { COMPANY } from "@/lib/company";

const NAV_LINKS = [
  { label: "HOME", href: "/" },
  { label: "AFTERBURNER", href: "/afterburner" },
  { label: "ROASTERS", href: "/roasters" },
  { label: "THE LAB", href: "/the-lab" },
  { label: "DELIVERIES", href: "/deliveries" },
  { label: "BRAND HALL", href: "/brand-hall" },
  { label: "BLOG", href: "/blog" },
  { label: "CONTACT", href: "/contact" },
];

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
  const fgMuted = isDark ? "text-paper/70" : "text-ink/60";
  const bar = isDark ? "bg-paper" : "bg-ink";

  return (
    <>
      <nav
        ref={navRef}
        className="fixed top-0 left-0 right-0 z-50 pointer-events-none"
      >
        <div className="container-content flex items-center justify-between h-16">
          {/* Logo — also routes home */}
          <Link
            href="/"
            aria-label="NBPKOREA — home"
            className={`group font-display font-bold text-lg tracking-tight pointer-events-auto flex items-center gap-2 transition-colors duration-200 ${fg}`}
          >
            <span className="group-hover:underline underline-offset-[6px] decoration-[1.5px]">
              NBPKOREA
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8 pointer-events-auto">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              const base = active ? fg : fgMuted;
              const hover = isDark ? "hover:text-paper" : "hover:text-ink";
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`caption-style transition-colors duration-200 ${base} ${hover}`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="lg:hidden pointer-events-auto w-10 h-10 flex flex-col items-end justify-center gap-1.5"
          >
            <span className={`block w-6 h-[2px] ${bar}`} />
            <span className={`block w-4 h-[2px] ${bar}`} />
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
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
              {NAV_LINKS.map((link) => {
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

            <div className="mt-16 pt-8 border-t border-paper/15">
              <p className="caption-style text-paper/60">
                {COMPANY.coordinates}
              </p>
              <p className="caption-style text-paper/60 mt-2">
                {COMPANY.email}
              </p>
              <p className="caption-style text-paper/60 mt-2">
                T. {COMPANY.phonePrimary}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
