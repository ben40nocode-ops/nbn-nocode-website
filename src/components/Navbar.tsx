"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";
import { useUser, UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/Logo";

const linksFR = [
  { label: "À propos", href: "/a-propos" },
  { label: "Solutions", href: "/#solutions" },
  { label: "Réalisations", href: "/#realisations" },
  { label: "Tarifs", href: "/tarifs" },
  { label: "Blog", href: "/blog" },
];

const linksEN = [
  { label: "About", href: "/en#about" },
  { label: "Solutions", href: "/en#solutions" },
  { label: "Work", href: "/en#work" },
  { label: "Pricing", href: "/tarifs" },
  { label: "Blog", href: "/en/blog" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { isSignedIn } = useUser();
  const pathname = usePathname();
  const isEN = pathname.startsWith("/en");
  const links = isEN ? linksEN : linksFR;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Bloque le scroll quand le drawer est ouvert
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white ${scrolled ? "border-b border-gray-100 shadow-sm" : ""}`}>
        <nav className="relative flex items-center justify-between px-4 md:px-[50px] h-16">

          {/* Logo — gauche */}
          <Link href={isEN ? "/en" : "/"} className="flex items-center flex-shrink-0" onClick={() => setOpen(false)}>
            <Logo width={72} variant="dark" />
          </Link>

          {/* Liens — vrais centre absolu desktop */}
          <ul className="hidden md:flex items-center gap-6 absolute left-1/2 -translate-x-1/2">
            {links.map((l) => (
              <li key={l.href} className="whitespace-nowrap">
                <Link href={l.href} className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Actions — droite desktop */}
          <div className="hidden md:flex items-center gap-3 flex-shrink-0">
            <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden text-xs font-semibold">
              <Link href="/" className={`px-2.5 py-1.5 transition-colors ${!isEN ? "bg-gray-900 text-white" : "text-gray-400 hover:text-gray-700"}`}>FR</Link>
              <Link href="/en" className={`px-2.5 py-1.5 transition-colors ${isEN ? "bg-gray-900 text-white" : "text-gray-400 hover:text-gray-700"}`}>EN</Link>
            </div>
            {isSignedIn ? (
              <>
                <Link href="/dashboard" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 hover:text-gray-900 transition-colors px-2 py-1.5">
                  {isEN ? "Client area" : "Espace client"}
                </Link>
                <UserButton />
              </>
            ) : (
              <Link
                href="https://calendly.com/ben40nocode/1h"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm bg-[#e8632a] hover:bg-[#c4521f] text-white px-5 py-2 rounded-lg transition-colors font-semibold whitespace-nowrap"
              >
                {isEN ? "Book audit" : "Réserver l'audit"}
              </Link>
            )}
          </div>

          {/* Burger — mobile */}
          <button
            className="md:hidden flex items-center justify-center w-9 h-9 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </header>

      {/* Overlay mobile */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 md:hidden ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={() => setOpen(false)}
      />

      {/* Drawer mobile — slide depuis la droite */}
      <div className={`fixed top-0 right-0 z-50 h-full w-72 bg-white shadow-2xl transition-transform duration-300 ease-in-out md:hidden flex flex-col ${open ? "translate-x-0" : "translate-x-full"}`}>

        {/* Header drawer */}
        <div className="flex items-center justify-between px-6 h-14 border-b border-gray-100 flex-shrink-0">
          <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden text-xs font-semibold">
            <Link href="/" onClick={() => setOpen(false)} className={`px-3 py-1.5 transition-colors ${!isEN ? "bg-gray-900 text-white" : "text-gray-400"}`}>FR</Link>
            <Link href="/en" onClick={() => setOpen(false)} className={`px-3 py-1.5 transition-colors ${isEN ? "bg-gray-900 text-white" : "text-gray-400"}`}>EN</Link>
          </div>
          <button onClick={() => setOpen(false)} className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-400 hover:bg-gray-100 transition-colors">
            <X size={18} />
          </button>
        </div>

        {/* Liens nav */}
        <nav className="flex-1 px-6 py-8 flex flex-col gap-1 overflow-y-auto">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between py-3 text-base text-gray-700 hover:text-gray-900 border-b border-gray-50 transition-colors group"
            >
              {l.label}
              <ArrowRight size={14} className="text-gray-300 group-hover:text-[#e8632a] group-hover:translate-x-0.5 transition-all" />
            </Link>
          ))}
        </nav>

        {/* Footer drawer — CTA */}
        <div className="px-6 pb-8 pt-4 border-t border-gray-100 flex flex-col gap-3 flex-shrink-0">
          {isSignedIn ? (
            <Link href="/dashboard" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}
              className="text-sm text-center text-gray-600 hover:text-gray-900 py-2">
              {isEN ? "Client area" : "Espace client"}
            </Link>
          ) : (
            <Link
              href="https://calendly.com/ben40nocode/1h"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 bg-[#e8632a] hover:bg-[#c4521f] text-white px-4 py-3.5 rounded-xl text-sm font-bold transition-colors"
            >
              {isEN ? "Book free audit" : "Réserver l'audit gratuit"}
              <ArrowRight size={15} />
            </Link>
          )}
        </div>
      </div>
    </>
  );
}
