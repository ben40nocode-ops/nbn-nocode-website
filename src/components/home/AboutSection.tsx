import { CheckCircle2 } from "lucide-react";

const values = [
  "Architecture sur mesure — jamais de template générique",
  "Stack IA centré sur Claude, le modèle le plus avancé du marché",
  "Modèle transparent : setup unique + abonnement mensuel évolutif",
  "Bordeaux, Royan, Arcachon et 100% remote",
];

export function AboutSection() {
  return (
    <section id="apropos" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="text-xs font-semibold text-[#e8632a] uppercase tracking-widest mb-3">
            Qui sommes-nous
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 max-w-2xl mx-auto leading-snug">
            Les PME méritent les mêmes outils IA que les grandes entreprises.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-gray-500 leading-relaxed mb-4">
              Fondée par <strong className="text-gray-700">Benjamin Bertigny</strong>, product builder spécialisé Claude AI, NBN Nocode conçoit des architectures d&apos;automatisation et d&apos;agents IA sur mesure pour les PME du triangle Bordeaux · Royan · Arcachon et partout en France.
            </p>
            <p className="text-gray-500 leading-relaxed mb-4">
              Formés à l&apos;Alegría Academy, notre équipe de 3 experts combine vibe coding, nocode et intégration IA pour livrer des systèmes qui tournent sans intervention humaine.
            </p>
            <p className="text-gray-500 leading-relaxed">
              Notre conviction : l&apos;IA doit travailler pour vous, pas l&apos;inverse. On ne livre pas des workflows. On livre un système qui tourne, s&apos;adapte, et qu&apos;on maintient dans le temps.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            {values.map((v, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-xl border border-gray-100 bg-gray-50">
                <CheckCircle2 size={16} className="text-[#e8632a] flex-shrink-0 mt-0.5" />
                <p className="text-sm text-gray-600 leading-relaxed">{v}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
