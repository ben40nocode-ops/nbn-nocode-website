import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MapPin, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contactez NBN Nocode pour un audit gratuit ou toute question sur nos services d'automatisation et d'agents IA.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-24 pb-32">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs text-[#e8632a] uppercase tracking-widest mb-4 font-medium">Contact</p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#f2f0eb] mb-4">
            Parlons de votre projet.
          </h1>
          <p className="text-[#777770]">
            On répond sous 24h. L&apos;audit est gratuit et sans engagement.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Info */}
          <div className="space-y-6">
            <div className="p-6 rounded-2xl border border-[#1c1c1c] bg-[#0a0a0a]">
              <div className="flex items-center gap-3 mb-3">
                <Calendar size={18} className="text-[#e8632a]" />
                <h3 className="text-sm font-semibold text-[#f2f0eb]">Audit gratuit (30 min)</h3>
              </div>
              <p className="text-sm text-[#777770] mb-4">Réservez directement un créneau dans notre agenda. On analyse votre situation et on vous propose un plan d&apos;action.</p>
              <Link
                href="https://calendly.com/nbn-nocode"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#e8632a] hover:bg-[#c4521f] text-white px-4 py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                Réserver un créneau →
              </Link>
            </div>

            <div className="p-6 rounded-2xl border border-[#1c1c1c] bg-[#0a0a0a]">
              <div className="flex items-center gap-3 mb-3">
                <Mail size={18} className="text-[#e8632a]" />
                <h3 className="text-sm font-semibold text-[#f2f0eb]">Email</h3>
              </div>
              <a
                href="mailto:contact@nbn-nocode.fr"
                className="text-sm text-[#777770] hover:text-[#f2f0eb] transition-colors"
              >
                contact@nbn-nocode.fr
              </a>
            </div>

            <div className="p-6 rounded-2xl border border-[#1c1c1c] bg-[#0a0a0a]">
              <div className="flex items-center gap-3 mb-3">
                <MapPin size={18} className="text-[#e8632a]" />
                <h3 className="text-sm font-semibold text-[#f2f0eb]">Zone d&apos;intervention</h3>
              </div>
              <p className="text-sm text-[#777770]">Bordeaux · Royan · Arcachon<br />Et 100% remote partout en France</p>
            </div>
          </div>

          {/* Form placeholder */}
          <div className="p-6 md:p-8 rounded-2xl border border-[#1c1c1c] bg-[#0a0a0a]">
            <h3 className="text-base font-semibold text-[#f2f0eb] mb-6">Envoyez un message</h3>
            <form className="space-y-4" action="mailto:contact@nbn-nocode.fr" method="get">
              <div>
                <label className="block text-xs text-[#555550] mb-2 uppercase tracking-wide">Nom</label>
                <input
                  type="text"
                  name="name"
                  className="w-full bg-[#111] border border-[#1c1c1c] rounded-lg px-4 py-3 text-sm text-[#f2f0eb] placeholder-[#333330] focus:outline-none focus:border-[#e8632a]/50 transition-colors"
                  placeholder="Votre nom"
                />
              </div>
              <div>
                <label className="block text-xs text-[#555550] mb-2 uppercase tracking-wide">Email</label>
                <input
                  type="email"
                  name="email"
                  className="w-full bg-[#111] border border-[#1c1c1c] rounded-lg px-4 py-3 text-sm text-[#f2f0eb] placeholder-[#333330] focus:outline-none focus:border-[#e8632a]/50 transition-colors"
                  placeholder="votre@email.com"
                />
              </div>
              <div>
                <label className="block text-xs text-[#555550] mb-2 uppercase tracking-wide">Message</label>
                <textarea
                  name="body"
                  rows={5}
                  className="w-full bg-[#111] border border-[#1c1c1c] rounded-lg px-4 py-3 text-sm text-[#f2f0eb] placeholder-[#333330] focus:outline-none focus:border-[#e8632a]/50 transition-colors resize-none"
                  placeholder="Décrivez votre projet ou votre question..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#e8632a] hover:bg-[#c4521f] text-white py-3 rounded-lg text-sm font-medium transition-colors"
              >
                Envoyer le message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
