import { CheckCircle2 } from "lucide-react";

const values = [
  "Systèmes IA autonomes sur mesure — jamais de template générique",
  "Stack centré sur Claude Code et les agents IA les plus avancés du marché",
  "Modèle transparent : setup unique + abonnement mensuel évolutif",
  "Bordeaux, Royan, Arcachon et 100% remote",
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
            Les PME méritent des systèmes IA qui tournent seuls. Nous les construisons.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-gray-500 leading-relaxed mb-4">
              <strong className="text-gray-700">Benjamin Bertigny</strong> a créé NBN IA avec une équipe de développeurs spécialisés en Intelligence Artificielle. Formé chez Alegria Academy et certifié Anthropic Architecture, Benjamin dirige ce collectif basé à Bordeaux. Nous concevons des systèmes IA autonomes sur mesure pour les PME — des architectures qui opèrent sans intervention humaine, 24h/24, 7j/7.
            </p>
            <p className="text-gray-500 leading-relaxed mb-4">
              Vibe coding avec Claude Code, orchestration d&apos;agents IA, intégrations API complexes — nous construisons des systèmes qui ne ressemblent ni à une agence de dev, ni à une agence nocode. Quelque chose de nouveau.
            </p>
            <p className="text-gray-500 leading-relaxed">
              Notre conviction : l&apos;IA doit travailler pour vous, pas l&apos;inverse. Nous ne livrons pas des workflows. Nous livrons un système qui tourne, s&apos;adapte, et que nous maintenons dans le temps.
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

        {/* Callout Claude */}
        <div className="mt-12 p-6 rounded-2xl bg-[#fff5f0] border border-[#e8632a]/20">
          <p className="text-xs font-semibold text-[#e8632a] uppercase tracking-widest mb-3">Pourquoi Claude et pas ChatGPT ?</p>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { title: "Raisonnement long", desc: "Claude analyse des documents complexes et prend des décisions sur des contextes de 200 000 tokens." },
              { title: "Agents autonomes", desc: "Conçu pour agir, pas juste répondre. Claude exécute des workflows multi-étapes sans se perdre." },
              { title: "Fiabilité business", desc: "Moins d'hallucinations sur les données critiques. Le choix des cas d'usage où les erreurs coûtent cher." },
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
