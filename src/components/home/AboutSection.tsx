import { CheckCircle2 } from "lucide-react";

const values = [
  "Architecture sur mesure, jamais de template générique",
  "Stack IA centré sur Claude — le plus avancé du marché",
  "Modèle transparent : setup + abonnement évolutif",
  "Couverture Bordeaux, Royan, Arcachon et 100% remote",
];

export function AboutSection() {
  return (
    <section id="apropos" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <p className="text-xs text-[#e8632a] uppercase tracking-widest mb-4 font-medium">
              Qui sommes-nous
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-[#f2f0eb] mb-6">
              Les PME méritent les mêmes outils IA que les grandes entreprises.
            </h2>
            <p className="text-[#777770] leading-relaxed mb-6">
              Formés à l&apos;Alegría Academy, nous sommes 3 product builders spécialisés dans la conception d&apos;architectures d&apos;automatisation et d&apos;agents IA. Notre conviction : l&apos;IA doit travailler pour vous, pas l&apos;inverse.
            </p>
            <p className="text-[#777770] leading-relaxed">
              Nous ne livrons pas des workflows. On livre un système qui tourne, qui s&apos;adapte, et qu&apos;on maintient dans le temps.
            </p>
          </div>

          {/* Right */}
          <div className="space-y-4">
            {values.map((v, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-4 rounded-xl border border-[#1c1c1c] bg-[#0f0f0f] hover:border-[#2a2a2a] transition-colors duration-200"
              >
                <CheckCircle2 size={18} className="text-[#e8632a] flex-shrink-0 mt-0.5" />
                <p className="text-sm text-[#aaaaaa] leading-relaxed">{v}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
