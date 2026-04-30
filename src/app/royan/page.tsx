import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Royan — Services Digitaux & IA | NBN IA",
  description: "Agence web, web apps et automatisations IA à royan. Services digitaux pour PME, secteurs tourisme, vins, restaurants. Devis gratuit.",
  keywords: ["agence web royan", "site internet royan", "web app royan", "automatisation royan"],
};

const jsonLd = {"@context":"https://schema.org","@type":"LocalBusiness","name":"NBN IA","areaServed":"royan","url":"https://www.nbn-ia.fr/royan"};

export default function royanPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="min-h-screen bg-white pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Royan — Services Digitaux & IA</h1>
          <p className="text-lg text-gray-500 mb-10">Agence web, web apps et automatisations IA à royan. Services digitaux pour PME, secteurs tourisme, vins, restaurants. Devis gratuit.</p>
          <Link href="https://calendly.com/ben40nocode/1h" target="_blank" className="inline-flex items-center gap-2 bg-[#e8632a] text-white px-7 py-4 rounded-xl font-semibold">
            Audit gratuit <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </>
  );
}
