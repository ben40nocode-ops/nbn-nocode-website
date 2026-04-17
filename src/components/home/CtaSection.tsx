import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

export function CtaSection() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="relative p-10 md:p-16 rounded-3xl border border-[#2a2a2a] bg-[#0a0a0a] overflow-hidden">
          {/* Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(232,99,42,0.08)_0%,_transparent_70%)] pointer-events-none" />

          <div className="relative z-10">
            <p className="text-xs text-[#e8632a] uppercase tracking-widest mb-6 font-medium">
              Prêt à démarrer ?
            </p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#f2f0eb] mb-6 leading-tight">
              30 minutes pour cartographier
              <br />
              ce qu&apos;on peut automatiser.
            </h2>
            <p className="text-[#777770] mb-10 max-w-xl mx-auto leading-relaxed">
              L&apos;audit est gratuit, sans engagement, et vous repartez avec un plan d&apos;action concret — qu&apos;on travaille ensemble ou non.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://calendly.com/nbn-nocode"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 bg-[#e8632a] hover:bg-[#c4521f] text-white px-8 py-4 rounded-xl font-medium transition-all duration-200 shadow-lg shadow-[#e8632a]/20"
              >
                <Calendar size={18} />
                Réserver l&apos;audit gratuit
                <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 border border-[#2a2a2a] hover:border-[#3a3a3a] text-[#f2f0eb] px-8 py-4 rounded-xl font-medium transition-all duration-200 hover:bg-[#111]"
              >
                Nous contacter
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
