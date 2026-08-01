import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Artisan Bordeaux",
  description: "Site vitrine pour artisans à Bordeaux. Portfolio de réalisations, formulaire de devis en ligne, SEO local. Attirez plus de clients sans effort. Devis gratuit.",
  keywords: ["artisan bordeaux"],
  robots: { index: false, follow: false },
};

export default function Page() {
  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-extrabold text-[#0E1116] tracking-[-0.03em] mb-6">Artisan Bordeaux</h1>
        <p className="text-lg text-[#6B7280] mb-10">Site vitrine artisan Bordeaux. Portfolio, devis, contact.</p>
        <div className="flex gap-4">
          <Link href="https://calendly.com/ben40nocode/1h" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#FF5A1F] text-white px-7 py-4 rounded-xl font-semibold">
            Devis gratuit <ArrowRight size={17} />
          </Link>
          <Link href="/#pricing" className="inline-flex items-center gap-2 border border-[#E2E0DA] text-[#2E343D] px-7 py-4 rounded-xl font-semibold">
            Tarifs <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </div>
  );
}
