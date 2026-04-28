import type { Metadata } from "next";
import Link from "next/link";
import { Check, ArrowRight, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Automatisation & Agents IA à Arcachon — NBN Nocode",
  description: "Expert en automatisation nocode et agents IA à Arcachon et Bassin d'Arcachon. Make, Zapier, Airtable, Claude AI. Audit gratuit 1h sans engagement.",
  keywords: ["automatisation Arcachon", "agent IA Arcachon", "nocode Arcachon", "consultant automatisation Bassin Arcachon", "Claude AI Arcachon", "PME Arcachon automatisation"],
  alternates: { canonical: "https://www.nbn-ia.fr/automatisation-arcachon" },
  openGraph: {
    title: "Automatisation & Agents IA à Arcachon — NBN Nocode",
    description: "Expert nocode & Claude AI pour PME à Arcachon. Setup sur mesure, maintenance mensuelle.",
    url: "https://www.nbn-ia.fr/automatisation-arcachon",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Automatisation & Agents IA à Arcachon",
  provider: { "@type": "Organization", name: "NBN Nocode", url: "https://www.nbn-ia.fr" },
  areaServed: { "@type": "City", name: "Arcachon" },
  description: "Conception d'architectures d'automatisation et d'agents IA sur mesure pour les PME du Bassin d'Arcachon.",
};

export default function ArcachonPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="min-h-screen bg-white pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-6">

          <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-100 text-[#e8632a] rounded-full px-4 py-1.5 text-xs font-semibold mb-8 tracking-wide uppercase">
            <MapPin size={12} /> Arcachon & Bassin
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Automatisation & Agents IA<br />
            <span className="text-[#e8632a]">pour les PME d&apos;Arcachon</span>
          </h1>

          <p className="text-lg text-gray-500 max-w-2xl mb-10 leading-relaxed">
            Vous dirigez une entreprise sur le Bassin d&apos;Arcachon et vos tâches répétitives vous freinent ?
            On conçoit votre système d&apos;automatisation avec Make, Zapier, Airtable et Claude AI — setup unique, maintenance mensuelle.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-20">
            <Link
              href="https://calendly.com/ben40nocode/1h"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#e8632a] hover:bg-[#c4521f] text-white px-7 py-4 rounded-xl font-semibold text-base transition-colors"
            >
              Audit gratuit à Arcachon <ArrowRight size={17} />
            </Link>
            <Link href="/tarifs" className="inline-flex items-center gap-2 border border-gray-200 hover:border-gray-300 text-gray-700 px-7 py-4 rounded-xl font-semibold text-base transition-colors hover:bg-gray-50">
              Voir les tarifs
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Ce qu&apos;on automatise pour les entreprises du Bassin</h2>
              <ul className="space-y-3">
                {[
                  "Gestion des leads et CRM automatisé",
                  "Facturation et relances clients",
                  "Synchronisation entre outils (Airtable, Notion, Gmail…)",
                  "Agents IA pour traiter vos emails et documents",
                  "Reporting automatique chaque semaine",
                  "Onboarding client sans intervention manuelle",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-gray-600">
                    <Check size={15} className="text-[#e8632a] flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-50 rounded-2xl p-7">
              <h2 className="text-lg font-bold text-gray-900 mb-3">Local, disponible, expert IA</h2>
              <ul className="space-y-3 text-sm text-gray-600">
                {[
                  "Basé dans le triangle Bordeaux / Royan / Arcachon",
                  "Spécialisé Claude AI — le modèle IA le plus avancé",
                  "40+ automatisations déployées",
                  "Disponible en présentiel ou 100% remote",
                  "Audit gratuit sans engagement",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <Check size={15} className="text-[#e8632a] flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-gray-900 rounded-2xl p-10 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">1 heure pour cartographier vos process</h2>
            <p className="text-gray-400 mb-8 max-w-md mx-auto">L&apos;audit est gratuit, sans engagement. On se retrouve sur le Bassin ou en visio.</p>
            <Link
              href="https://calendly.com/ben40nocode/1h"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#e8632a] hover:bg-[#c4521f] text-white px-8 py-4 rounded-xl font-bold text-sm transition-colors"
            >
              Réserver l&apos;audit gratuit <ArrowRight size={15} />
            </Link>
          </div>

        </div>
      </div>
    </>
  );
}
