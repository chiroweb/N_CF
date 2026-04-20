"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "AFTERBURNER", href: "/afterburner" },
  { label: "ROASTERS", href: "/roasters" },
  { label: "THE LAB", href: "/the-lab" },
  { label: "BRAND HALL", href: "/brand-hall" },
  { label: "CONTACT", href: "/contact" },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
        <div className="container-content flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="font-display font-bold text-lg tracking-tight pointer-events-auto mix-blend-difference"
          >
            <span className="text-paper">NBPKOREA</span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8 pointer-events-auto mix-blend-difference">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`caption-style transition-colors ${
                    active ? "text-paper" : "text-paper/70 hover:text-paper"
                  }`}
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
            className="md:hidden pointer-events-auto mix-blend-difference w-10 h-10 flex flex-col items-end justify-center gap-1.5"
          >
            <span className="block w-6 h-[2px] bg-paper" />
            <span className="block w-4 h-[2px] bg-paper" />
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {open && (
        <div className="md:hidden fixed inset-0 z-[60] bg-ink text-paper flex flex-col">
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
                37.3430° N — 126.7395° E
              </p>
              <p className="caption-style text-paper/60 mt-2">
                info@nbpkorea.com
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
