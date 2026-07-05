import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="pt-32 pb-24 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">

        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-100 text-[#e8632a] rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide uppercase">
            Automatisation pour PME & Artisans
          </div>
          <div className="inline-flex items-center gap-2 bg-[#fff5f0] border border-[#e8632a]/20 text-[#d97757] rounded-full px-3 py-1 text-xs font-medium">
            <span>⬡</span> Gironde & toute la France
          </div>
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900 leading-tight tracking-tight mb-6">
          Vos devis partent, vos clients sont rappelés.{" "}
          <span className="text-[#e8632a]">Même quand vous dormez.</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
          Répondre au 15e mail, refaire le même devis, rappeler pour confirmer un RDV — je m&apos;en charge.
          Automatisé, opérationnel en 2 semaines.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="https://calendly.com/ben40nocode/1h"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 bg-[#e8632a] hover:bg-[#c4521f] text-white px-7 py-4 rounded-xl font-semibold text-base transition-all duration-200 shadow-lg shadow-orange-200"
          >
            Réserver mon appel gratuit (1h)
            <ArrowRight size={17} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
          <Link
            href="/contact#message"
            className="inline-flex items-center gap-2 border border-gray-200 hover:border-gray-300 text-gray-700 hover:text-gray-900 px-7 py-4 rounded-xl font-semibold text-base transition-all duration-200 hover:bg-gray-50"
          >
            Décrire mon besoin (2 min)
          </Link>
        </div>

        <div className="mt-16 pt-10 border-t border-gray-100 grid grid-cols-3 gap-8 max-w-lg mx-auto">
          {[
            { value: "Certifié", label: "Anthropic & Alegria" },
            { value: "2 à 20h", label: "gagnées par semaine" },
            { value: "100%", label: "sur mesure" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-2xl font-bold text-gray-900">{s.value}</div>
              <div className="text-xs text-gray-400 mt-1">{s.label}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
