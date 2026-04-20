"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/Logo";

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
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white ${scrolled ? "border-b border-gray-100 shadow-sm" : ""}`}>
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Logo width={72} variant="dark" />
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <Link href="https://nbn-nocode.fr/dashboard" className="text-sm text-gray-400 hover:text-gray-700 transition-colors px-3 py-1.5">
            Espace client
          </Link>
          <Link
            href="https://calendly.com/ben40nocode/1h"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm bg-[#e8632a] hover:bg-[#c4521f] text-white px-5 py-2.5 rounded-lg transition-colors font-semibold"
          >
            Réserver l&apos;audit
          </Link>
        </div>

        <button className="md:hidden text-gray-500 hover:text-gray-900" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm text-gray-600 hover:text-gray-900">
              {l.label}
            </Link>
          ))}
          <div className="flex flex-col gap-3 pt-4 border-t border-gray-100">
            <Link href="https://nbn-nocode.fr/dashboard" onClick={() => setOpen(false)} className="text-sm text-gray-500 text-center py-2">
              Espace client
            </Link>
            <Link
              href="https://calendly.com/ben40nocode/1h"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="text-sm bg-[#e8632a] hover:bg-[#c4521f] text-white px-4 py-3 rounded-lg text-center font-semibold"
            >
              Réserver l&apos;audit gratuit
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
