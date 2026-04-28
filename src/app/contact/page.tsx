import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MapPin, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contactez NBN Nocode pour un audit gratuit de 1h. Expert en automatisation nocode et agents IA à Bordeaux, Royan et Arcachon. Réponse sous 24h.",
  alternates: { canonical: "https://www.nbn-nocode.fr/contact" },
  openGraph: {
    title: "Contact — NBN Nocode",
    description: "Audit gratuit 1h. Expert automatisation & agents IA à Bordeaux, Royan, Arcachon.",
    url: "https://www.nbn-nocode.fr/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-32">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs text-[#e8632a] uppercase tracking-widest mb-4 font-semibold">Contact</p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">
            Parlons de votre projet.
          </h1>
          <p className="text-gray-500">
            On répond sous 24h. L&apos;audit est gratuit et sans engagement.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-5">
            <h2 className="text-lg font-bold text-gray-900">Nous contacter</h2>

            <div className="p-6 rounded-2xl border border-gray-100 bg-gray-50">
              <div className="flex items-center gap-3 mb-3">
                <Calendar size={18} className="text-[#e8632a]" />
                <h3 className="text-sm font-semibold text-gray-900">Audit gratuit (1h)</h3>
              </div>
              <p className="text-sm text-gray-500 mb-4">Réservez directement un créneau dans notre agenda. On analyse votre situation et on vous propose un plan d&apos;action.</p>
              <Link
                href="https://calendly.com/ben40nocode/1h"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#e8632a] hover:bg-[#c4521f] text-white px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors"
              >
                Réserver un créneau →
              </Link>
            </div>

            <div className="p-6 rounded-2xl border border-gray-100 bg-gray-50">
              <div className="flex items-center gap-3 mb-3">
                <Mail size={18} className="text-[#e8632a]" />
                <h3 className="text-sm font-semibold text-gray-900">Email</h3>
              </div>
              <a href="mailto:contact@nbn-nocode.fr" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                contact@nbn-nocode.fr
              </a>
            </div>

            <div className="p-6 rounded-2xl border border-gray-100 bg-gray-50">
              <div className="flex items-center gap-3 mb-3">
                <MapPin size={18} className="text-[#e8632a]" />
                <h3 className="text-sm font-semibold text-gray-900">Zone d&apos;intervention</h3>
              </div>
              <p className="text-sm text-gray-500">Bordeaux · Royan · Arcachon<br />Et 100% remote partout en France</p>
            </div>
          </div>

          <div className="p-8 rounded-2xl border border-gray-100 bg-gray-50">
            <h2 className="text-base font-bold text-gray-900 mb-6">Envoyez un message</h2>
            <form className="space-y-4" action="mailto:contact@nbn-nocode.fr" method="get">
              <div>
                <label className="block text-xs text-gray-400 mb-2 uppercase tracking-wide font-medium">Nom</label>
                <input
                  type="text"
                  name="name"
                  className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-900 placeholder-gray-300 focus:outline-none focus:border-[#e8632a]/50 transition-colors"
                  placeholder="Votre nom"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-400 mb-2 uppercase tracking-wide font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-900 placeholder-gray-300 focus:outline-none focus:border-[#e8632a]/50 transition-colors"
                  placeholder="votre@email.com"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-400 mb-2 uppercase tracking-wide font-medium">Message</label>
                <textarea
                  name="body"
                  rows={5}
                  className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-900 placeholder-gray-300 focus:outline-none focus:border-[#e8632a]/50 transition-colors resize-none"
                  placeholder="Décrivez votre projet..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#e8632a] hover:bg-[#c4521f] text-white py-3 rounded-lg text-sm font-semibold transition-colors"
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
