import { CheckCircle2 } from "lucide-react";

const values = [
  "Architecture sur mesure, jamais de template générique",
  "Stack IA centré sur Claude — le plus avancé du marché",
  "Modèle transparent : setup unique + abonnement évolutif",
  "Bordeaux, Royan, Arcachon et 100% remote",
];

export function AboutSection() {
  return (
    <section id="apropos" className="py-20 md:py-28 bg-[#111111]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Label */}
        <p className="text-xs text-[#e8632a] uppercase tracking-widest mb-10 font-semibold text-center">
          Qui sommes-nous
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left */}
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-snug tracking-tight text-[#f0ede8] mb-5">
              Les PME méritent les mêmes outils IA que les grandes entreprises.
            </h2>
            <p className="text-sm text-[#888882] leading-relaxed mb-4">
              Formés à l&apos;Alegría Academy, nous sommes 3 product builders spécialisés dans la conception d&apos;architectures d&apos;automatisation et d&apos;agents IA. Notre conviction : l&apos;IA doit travailler pour vous, pas l&apos;inverse.
            </p>
            <p className="text-sm text-[#888882] leading-relaxed">
              On ne livre pas des workflows. On livre un système qui tourne, qui s&apos;adapte, et qu&apos;on maintient dans le temps.
            </p>
          </div>

          {/* Right — values */}
          <div className="flex flex-col gap-3">
            {values.map((v, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-4 rounded-xl border border-[#2a2a2a] bg-[#0c0c0c]"
              >
                <CheckCircle2 size={16} className="text-[#e8632a] flex-shrink-0 mt-0.5" />
                <p className="text-sm text-[#aaa9a4] leading-relaxed">{v}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
