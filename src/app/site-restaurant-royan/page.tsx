import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Restaurant Royan | NBN IA",
  description: "Site restaurant Royan. Menu digital, réservations, présentation. Devis gratuit.",
  keywords: ["site restaurant royan"],
};

export default function Page() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Restaurant Royan</h1>
        <p className="text-lg text-gray-500 mb-10">Site restaurant Royan. Menu digital, réservations, présentation.</p>
        <div className="flex gap-4">
          <Link href="https://calendly.com/ben40nocode/1h" target="_blank" className="inline-flex items-center gap-2 bg-[#e8632a] text-white px-7 py-4 rounded-xl font-semibold">
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
