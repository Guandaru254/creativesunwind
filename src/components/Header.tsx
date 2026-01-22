"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-yellow-400 font-bold">
          Creatives Unwind
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-sm text-white">
          <Link href="/about">About</Link>
          <Link href="/events">Events</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/publications">Publications</Link>
          <Link href="/partners">Partners</Link>
          <Link href="/applications" className="text-yellow-400">
            Apply
          </Link>
        </nav>

        {/* Mobile Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black border-t border-white/10 px-6 py-6 space-y-4">
          {[
            ["About", "/about"],
            ["Events", "/events"],
            ["Gallery", "/gallery"],
            ["Publications", "/publications"],
            ["Partners", "/partners"],
            ["Apply", "/applications"],
          ].map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className="block text-white"
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
