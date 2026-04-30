import type { Metadata } from "next";
import Link from "next/link";
import { Check, ArrowRight, Globe, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Création Sites Internet — SEO, Vitrine, E-commerce | NBN IA",
  description: "Création de sites internet performants et optimisés SEO. Vitrine, e-commerce, blogs. Classement Google, design modern. Bordeaux, Gironde.",
  keywords: ["création site internet", "agence web", "site SEO", "e-commerce", "site vitrine"],
};

const jsonLd = {"@context":"https://schema.org","@type":"Service","name":"Création Sites Internet","provider":{"@type":"Organization","name":"NBN IA"},"areaServed":["Bordeaux","Royan","Arcachon","Soulac","Pauillac","Lesparre","Montalivet","Lacanau"]};

export default function SitesInternetPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="min-h-screen bg-white pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Site Internet<br /><span className="text-[#e8632a]">qui classe sur Google</span></h1>
          <p className="text-lg text-gray-500 max-w-2xl mb-10">Vitrine, e-commerce, blog. Design moderne, SEO optimisé, performance, sécurité. Vos clients vous trouvent.</p>
          <Link href="https://calendly.com/ben40nocode/1h" target="_blank" className="inline-flex items-center gap-2 bg-[#e8632a] text-white px-7 py-4 rounded-xl font-semibold">
            Demander un devis <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </>
  );
}
