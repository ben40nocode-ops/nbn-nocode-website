import { CheckCircle2 } from "lucide-react";

const values = [
  "Systèmes sur mesure — jamais de solution générique ou de template",
  "Technologie de pointe adaptée à votre métier, pas l'inverse",
  "Modèle transparent : mise en place unique + abonnement mensuel évolutif",
  "Bordeaux, Royan, Arcachon et 100% à distance pour toute la France",
];

export function AboutSection() {
  return (
    <section id="apropos" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="text-xs font-semibold text-[#e8632a] uppercase tracking-widest mb-3">
            Qui nous sommes
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 max-w-2xl mx-auto leading-snug">
            Les PME et artisans méritent des outils qui travaillent à leur place. Nous les construisons.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-gray-500 leading-relaxed mb-4">
              <strong className="text-gray-700">Benjamin Bertigny</strong> a fondé NBN IA avec une équipe de développeurs spécialisés en Intelligence Artificielle. Formé chez Alegria Academy et certifié Anthropic Architecture, Benjamin dirige ce collectif basé à Bordeaux.
            </p>
            <p className="text-gray-500 leading-relaxed mb-4">
              Notre approche est simple : on écoute votre métier, on identifie ce qui vous prend du temps, et on construit un système qui s&apos;en charge à votre place — 24h/24, 7j/7. Pas de jargon, pas de formation requise de votre côté.
            </p>
            <p className="text-gray-500 leading-relaxed">
              Notre conviction : la technologie doit travailler pour vous, pas l&apos;inverse. Nous ne livrons pas un outil. Nous livrons un résultat — que nous maintenons dans le temps.
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

        {/* Callout */}
        <div className="mt-12 p-6 rounded-2xl bg-[#fff5f0] border border-[#e8632a]/20">
          <p className="text-xs font-semibold text-[#e8632a] uppercase tracking-widest mb-3">Comment ça se passe concrètement ?</p>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { title: "1. Audit gratuit (1h)", desc: "On analyse ensemble votre activité et on identifie les 2-3 tâches qui vous coûtent le plus de temps." },
              { title: "2. On construit (1-4 semaines)", desc: "Nos développeurs mettent en place votre système. Vous validez à chaque étape. Zéro surprise." },
              { title: "3. Ça tourne tout seul", desc: "Votre système est opérationnel. Nous le maintenons et l'améliorons chaque mois si nécessaire." },
            ].map((item) => (
              <div key={item.title}>
                <p className="text-sm font-semibold text-gray-900 mb-1">{item.title}</p>
                <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
