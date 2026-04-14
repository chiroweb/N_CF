"use client";

import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-[var(--edge-margin)] z-50 mix-blend-difference">
      <div className="container-content flex items-center h-16">
        <Link href="/" className="text-paper font-bold text-lg tracking-tight">
          NBPKOREA
        </Link>
      </div>
    </nav>
  );
}
