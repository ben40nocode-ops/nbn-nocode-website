import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

export function CtaSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-gray-900 rounded-3xl px-8 py-16 md:px-16 text-center">

          <p className="text-xs font-semibold text-[#e8632a] uppercase tracking-widest mb-4">
            Prêt à démarrer ?
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-5">
            1 heure pour identifier ce qu&apos;on peut<br />automatiser dans votre business.
          </h2>
          <p className="text-gray-400 mb-10 max-w-md mx-auto leading-relaxed">
            L&apos;appel est gratuit, sans engagement. Vous repartez avec une liste concrète de ce qui peut être automatisé — que vous travailliez avec nous ou non.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://calendly.com/ben40nocode/1h"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 bg-[#e8632a] hover:bg-[#c4521f] text-white px-8 py-4 rounded-xl font-bold text-sm transition-all duration-200"
            >
              <Calendar size={17} />
              Réserver mon appel gratuit (1h)
              <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border border-gray-700 hover:border-gray-500 text-gray-300 hover:text-white px-8 py-4 rounded-xl font-semibold text-sm transition-all duration-200"
            >
              Nous contacter
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
