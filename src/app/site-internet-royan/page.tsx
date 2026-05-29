import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Site Internet à Royan | NBN IA",
  description: "Agence web Royan. Sites internet vitrine, e-commerce, blogs. Design modern, SEO, performance.",
  keywords: ["site internet royan"],
  robots: { index: false, follow: false },
};

export default function Page() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Site Internet à Royan</h1>
        <p className="text-lg text-gray-500 mb-10">Agence web Royan. Sites internet vitrine, e-commerce, blogs. Design modern, SEO, performance.</p>
        <Link href="https://calendly.com/ben40nocode/1h" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#e8632a] text-white px-7 py-4 rounded-xl font-semibold">
          Demander un devis <ArrowRight size={17} />
        </Link>
      </div>
    </div>
  );
}
