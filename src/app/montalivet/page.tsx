import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Montalivet — Vacances & Tech",
  description: "Sites web, web apps et agents IA pour campings, gîtes et commerces de Montalivet et Vendays-Montalivet. Réservations en ligne, gestion de saison. Devis gratuit.",
  alternates: { canonical: "https://www.nbn-ia.fr/montalivet" },
  robots: { index: false, follow: true },
  keywords: ["agence web montalivet", "site internet montalivet", "web app montalivet", "automatisation montalivet"],
};

const jsonLd = {"@context":"https://schema.org","@type":"LocalBusiness","name":"NBN IA","areaServed":"montalivet","url":"https://www.nbn-ia.fr/montalivet"};

export default function montalivetPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="min-h-screen bg-white pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Montalivet — Vacances & Tech</h1>
          <p className="text-lg text-gray-500 mb-10">Agence web, web apps et automatisations IA à montalivet. Services digitaux pour PME, secteurs tourisme, vins, restaurants. Devis gratuit.</p>
          <Link href="https://calendly.com/ben40nocode/1h" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#e8632a] text-white px-7 py-4 rounded-xl font-semibold">
            Audit gratuit <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </>
  );
}
