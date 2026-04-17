"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const links = [
  { label: "À propos", href: "/#apropos" },
  { label: "Solutions", href: "/#solutions" },
  { label: "Réalisations", href: "/#realisations" },
  { label: "Tarifs", href: "/tarifs" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#080808]/90 backdrop-blur-xl border-b border-[#1c1c1c]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative">
            <span className="text-lg font-bold tracking-tight text-[#f2f0eb]">NBN</span>
            <span className="text-xs font-medium text-[#e8632a] ml-1">Nocode</span>
          </div>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="text-sm text-[#777770] hover:text-[#f2f0eb] transition-colors duration-200"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="https://nbn-nocode.fr/dashboard"
            className="text-sm text-[#777770] hover:text-[#f2f0eb] transition-colors duration-200 px-3 py-1.5"
          >
            Espace client
          </Link>
          <Link
            href="https://calendly.com/nbn-nocode"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm bg-[#e8632a] hover:bg-[#c4521f] text-white px-4 py-2 rounded-lg transition-colors duration-200 font-medium"
          >
            Réserver l&apos;audit
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-[#777770] hover:text-[#f2f0eb] transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#0a0a0a] border-b border-[#1c1c1c] px-6 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm text-[#777770] hover:text-[#f2f0eb] transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <div className="flex flex-col gap-3 pt-2 border-t border-[#1c1c1c]">
            <Link
              href="https://nbn-nocode.fr/dashboard"
              onClick={() => setOpen(false)}
              className="text-sm text-[#777770] hover:text-[#f2f0eb] transition-colors text-center py-2"
            >
              Espace client
            </Link>
            <Link
              href="https://calendly.com/nbn-nocode"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="text-sm bg-[#e8632a] hover:bg-[#c4521f] text-white px-4 py-2.5 rounded-lg transition-colors text-center font-medium"
            >
              Réserver l&apos;audit gratuit
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
