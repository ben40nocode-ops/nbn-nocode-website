import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Site Hôtel à Royan | NBN IA",
  description: "Création site internet pour hôtels Royan. Réservations, présentation, SEO local.",
  keywords: ["site hotel royan"],
};

export default function Page() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Site Hôtel à Royan</h1>
        <p className="text-lg text-gray-500 mb-10">Création site internet pour hôtels Royan. Réservations, présentation, SEO local.</p>
        <Link href="https://calendly.com/ben40nocode/1h" target="_blank" className="inline-flex items-center gap-2 bg-[#e8632a] text-white px-7 py-4 rounded-xl font-semibold">
          Demander un devis <ArrowRight size={17} />
        </Link>
      </div>
    </div>
  );
}
