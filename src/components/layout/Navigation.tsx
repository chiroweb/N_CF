"use client";

import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-[var(--edge-margin)] z-50 pointer-events-none">
      <div className="container-content flex items-center h-16">
        <Link href="/" className="text-ink font-bold text-lg tracking-tight pointer-events-auto mix-blend-difference">
          <span className="text-paper">NBPKOREA</span>
        </Link>
      </div>
    </nav>
  );
}
