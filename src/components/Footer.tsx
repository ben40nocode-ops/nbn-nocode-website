"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/Logo";

const CALENDLY_FR = "https://calendly.com/ben40nocode/1h";
const CALENDLY_EN = "https://calendly.com/ben40nocode/1h"; // ← remplace par ton lien EN quand créé

export function Footer() {
  const pathname = usePathname();
  const isEN = pathname.startsWith("/en");

  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <Logo width={88} variant="light" />
            </div>
            <p className="text-sm leading-relaxed max-w-xs mb-6">
              {isEN
                ? "Your quotes, client replies and follow-ups handled automatically. Custom automation for SMBs and craftsmen — no hiring, no code on your side."
                : "Vos devis, réponses clients et relances gérés automatiquement. Des automatisations sur mesure pour PME et artisans — sans recruter, sans coder."}
            </p>
            <p className="text-xs text-gray-500 mb-4">
              Bordeaux · <Link href="/royan" className="hover:text-white transition-colors">Royan</Link> · <Link href="/arcachon" className="hover:text-white transition-colors">Arcachon</Link> · France
            </p>
            <Link
              href={isEN ? CALENDLY_EN : CALENDLY_FR}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#e8632a] hover:bg-[#c4521f] text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors"
            >
              {isEN ? "Free call →" : "Appel gratuit →"}
            </Link>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-widest mb-5">
              {isEN ? "Navigation" : "Navigation"}
            </h4>
            <ul className="flex flex-col gap-3">
              {(isEN ? [
                { label: "About", href: "/en#about" },
                { label: "Solutions", href: "/en#solutions" },
                { label: "Work", href: "/en#work" },
                { label: "Pricing", href: "/tarifs" },
                { label: "Contact", href: "/contact" },
                { label: "Blog", href: "/en/blog" },
              ] : [
                { label: "À propos", href: "/a-propos" },
                { label: "Solutions", href: "/#solutions" },
                { label: "Réalisations", href: "/#realisations" },
                { label: "Tarifs", href: "/tarifs" },
                { label: "Contact", href: "/contact" },
                { label: "Blog", href: "/blog" },
              ]).map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm hover:text-white transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-widest mb-5">
              {isEN ? "Our services" : "Nos services"}
            </h4>
            <ul className="flex flex-col gap-3">
              {(isEN ? [
                { label: "AI Automation", href: "/en#solutions" },
                { label: "Web Apps & Custom Tools", href: "/en#solutions" },
                { label: "AI Agents Claude", href: "/en#solutions" },
                { label: "AI Chatbot", href: "/en/ai-automation" },
                { label: "Website Creation", href: "/en/websites" },
              ] : [
                { label: "Automatisation Bordeaux", href: "/automatisation-bordeaux" },
                { label: "Automatisation Royan", href: "/automatisation-royan" },
                { label: "Automatisation Arcachon", href: "/automatisation-arcachon" },
                { label: "Chatbot IA Bordeaux", href: "/chatbot-ia-bordeaux" },
                { label: "Création site web", href: "/creation-site-web-bordeaux" },
                { label: "Service — Automatisation IA", href: "/services/automatisation-ia" },
                { label: "Service — Sites internet", href: "/services/sites-internet" },
                { label: "Service — Web apps", href: "/services/web-apps" },
              ]).map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm hover:text-white transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} NBN IA — Benjamin Bertigny.{" "}
            {isEN ? "All rights reserved." : "Tous droits réservés."}
          </p>
          <div className="flex gap-6">
            <Link href="/mentions-legales" className="text-xs text-gray-600 hover:text-gray-400 transition-colors">
              {isEN ? "Legal notice" : "Mentions légales"}
            </Link>
            <Link href="/politique-confidentialite" className="text-xs text-gray-600 hover:text-gray-400 transition-colors">
              {isEN ? "Privacy" : "Confidentialité"}
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
