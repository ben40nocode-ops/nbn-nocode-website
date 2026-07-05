import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MapPin, Calendar, MessageCircle, Phone } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — Audit Gratuit 1h | NBN IA Bordeaux",
  description: "Contactez NBN IA pour un audit gratuit de 1h. Expert en automatisation IA et agents Claude à Bordeaux, Royan et Arcachon. Réponse sous 24h.",
  keywords: ["contact NBN IA", "audit gratuit automatisation", "agent IA Bordeaux contact", "devis automatisation Bordeaux"],
  alternates: { canonical: "https://www.nbn-ia.fr/contact" },
  openGraph: {
    title: "Contact — Audit Gratuit 1h | NBN IA Bordeaux",
    description: "Audit gratuit 1h. Expert automatisation & agents IA à Bordeaux, Royan, Arcachon.",
    url: "https://www.nbn-ia.fr/contact",
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
            On répond sous 24h. L&apos;appel est gratuit et sans engagement.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-5">
            <h2 className="text-lg font-bold text-gray-900">Nous contacter</h2>

            <div className="p-6 rounded-2xl border border-gray-100 bg-gray-50">
              <div className="flex items-center gap-3 mb-3">
                <Calendar size={18} className="text-[#e8632a]" />
                <h3 className="text-sm font-semibold text-gray-900">Appel gratuit (1h)</h3>
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
                <MessageCircle size={18} className="text-[#e8632a]" />
                <h3 className="text-sm font-semibold text-gray-900">WhatsApp / Téléphone</h3>
              </div>
              <p className="text-sm text-gray-500 mb-4">Pas fan des formulaires ? Écrivez-moi directement, je réponds vite.</p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://wa.me/33640685975"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1fb355] text-white px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors"
                >
                  <MessageCircle size={15} /> WhatsApp
                </a>
                <a
                  href="tel:+33640685975"
                  className="inline-flex items-center gap-2 border border-gray-200 hover:border-gray-300 text-gray-700 px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors hover:bg-white"
                >
                  <Phone size={15} /> 06 40 68 59 75
                </a>
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-gray-100 bg-gray-50">
              <div className="flex items-center gap-3 mb-3">
                <Mail size={18} className="text-[#e8632a]" />
                <h3 className="text-sm font-semibold text-gray-900">Email</h3>
              </div>
              <a href="mailto:contact@nbn-ia.fr" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                contact@nbn-ia.fr
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

          <div id="message" className="p-8 rounded-2xl border border-gray-100 bg-gray-50 scroll-mt-28">
            <h2 className="text-base font-bold text-gray-900 mb-6">Envoyez un message</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
