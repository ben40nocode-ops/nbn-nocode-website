import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Automatisation IA à Arcachon | NBN IA",
  description: "Agents IA autonomes pour restaurants, hôtels, ostréiculture Arcachon.",
  keywords: ["automatisation ia arcachon"],
};

export default function Page() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Automatisation IA à Arcachon</h1>
        <p className="text-lg text-gray-500 mb-10">Agents IA autonomes pour restaurants, hôtels, ostréiculture Arcachon.</p>
        <Link href="https://calendly.com/ben40nocode/1h" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#e8632a] text-white px-7 py-4 rounded-xl font-semibold">
          Demander un devis <ArrowRight size={17} />
        </Link>
      </div>
    </div>
  );
}
