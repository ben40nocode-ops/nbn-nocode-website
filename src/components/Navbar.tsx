"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useUser, UserButton, SignInButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/Logo";

const linksFR = [
  { label: "À propos", href: "/#apropos" },
  { label: "Solutions", href: "/#solutions" },
  { label: "Réalisations", href: "/#realisations" },
  { label: "Tarifs", href: "/#pricing" },
  { label: "Blog", href: "/blog" },
];

const linksEN = [
  { label: "About", href: "/en#about" },
  { label: "Solutions", href: "/en#solutions" },
  { label: "Work", href: "/en#work" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Blog", href: "/blog" },
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

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white ${scrolled ? "border-b border-gray-100 shadow-sm" : ""}`}>
      <nav className="flex items-center justify-between px-5 pt-2.5 pb-2.5 h-14">

        {/* Logo — gauche */}
        <Link href={isEN ? "/en" : "/"} className="flex items-center flex-shrink-0">
          <Logo width={88} variant="dark" />
        </Link>

        {/* Liens — centre (desktop) */}
        <ul className="hidden md:flex items-center justify-center gap-6 flex-1 mx-6">
          {links.map((l) => (
            <li key={l.href} className="whitespace-nowrap">
              <Link href={l.href} className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Actions — droite (desktop) */}
        <div className="hidden md:flex items-center gap-3 flex-shrink-0">
          {/* FR / EN switcher */}
          <div className="flex items-center gap-0 border border-gray-200 rounded-lg overflow-hidden text-xs font-semibold">
            <Link href="/" className={`px-2.5 py-1.5 transition-colors ${!isEN ? "bg-gray-900 text-white" : "text-gray-400 hover:text-gray-700"}`}>
              FR
            </Link>
            <Link href="/en" className={`px-2.5 py-1.5 transition-colors ${isEN ? "bg-gray-900 text-white" : "text-gray-400 hover:text-gray-700"}`}>
              EN
            </Link>
          </div>

          {isSignedIn ? (
            <>
              <Link href="/dashboard" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 hover:text-gray-900 transition-colors px-3 py-1.5">
                {isEN ? "Client area" : "Espace client"}
              </Link>
              <UserButton />
            </>
          ) : (
            <>
              <SignInButton mode="modal">
                <button className="text-sm text-gray-400 hover:text-gray-700 transition-colors px-2 py-1.5">
                  {isEN ? "Login" : "Connexion"}
                </button>
              </SignInButton>
              <Link
                href="https://calendly.com/ben40nocode/1h"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm bg-[#e8632a] hover:bg-[#c4521f] text-white px-5 py-2 rounded-lg transition-colors font-semibold whitespace-nowrap"
              >
                {isEN ? "Book audit" : "Réserver l'audit"}
              </Link>
            </>
          )}
        </div>

        {/* Burger — mobile */}
        <button className="md:hidden text-gray-500 hover:text-gray-900 ml-auto" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Menu mobile */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-5 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm text-gray-600 hover:text-gray-900">
              {l.label}
            </Link>
          ))}
          <div className="flex items-center gap-2 pt-2">
            <Link href="/" onClick={() => setOpen(false)} className={`text-xs font-semibold px-3 py-1.5 rounded-lg border transition-colors ${!isEN ? "bg-gray-900 text-white border-gray-900" : "text-gray-500 border-gray-200"}`}>FR</Link>
            <Link href="/en" onClick={() => setOpen(false)} className={`text-xs font-semibold px-3 py-1.5 rounded-lg border transition-colors ${isEN ? "bg-gray-900 text-white border-gray-900" : "text-gray-500 border-gray-200"}`}>EN</Link>
          </div>
          <div className="flex flex-col gap-3 pt-4 border-t border-gray-100">
            {isSignedIn ? (
              <Link href="/dashboard" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)} className="text-sm text-gray-600 text-center py-2">
                {isEN ? "Client area" : "Espace client"}
              </Link>
            ) : (
              <>
                <SignInButton mode="modal">
                  <button className="text-sm text-gray-500 text-center py-2">
                    {isEN ? "Login" : "Connexion"}
                  </button>
                </SignInButton>
                <Link
                  href="https://calendly.com/ben40nocode/1h"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="text-sm bg-[#e8632a] hover:bg-[#c4521f] text-white px-4 py-3 rounded-lg text-center font-semibold"
                >
                  {isEN ? "Book free audit" : "Réserver l'audit gratuit"}
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
