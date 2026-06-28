import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Agence Content Marketing | NBN IA",
  description: "Blog et espace contenu SEO avec CMS pour agences et consultants. Articles, études de cas, newsletter. Optimisé Google, facile à gérer. Devis gratuit.",
  alternates: { canonical: "https://www.nbn-ia.fr/blog-agence" },
  keywords: ["blog agence"],
};

export default function Page() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Agence Content Marketing</h1>
        <p className="text-lg text-gray-500 mb-10">Blog optimisé SEO + CMS pour agences.</p>
        <div className="flex gap-4">
          <Link href="https://calendly.com/ben40nocode/1h" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#e8632a] text-white px-7 py-4 rounded-xl font-semibold">
            Devis gratuit <ArrowRight size={17} />
          </Link>
          <Link href="/#pricing" className="inline-flex items-center gap-2 border border-gray-300 text-gray-700 px-7 py-4 rounded-xl font-semibold">
            Tarifs <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </div>
  );
}
