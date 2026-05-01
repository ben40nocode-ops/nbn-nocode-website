export function ClaudeSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="rounded-2xl bg-gradient-to-br from-[#fff5f0] to-white border border-[#e8632a]/15 p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-xs font-semibold text-[#e8632a] uppercase tracking-widest mb-3">Pourquoi ça marche</p>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug mb-4">
                Une technologie fiable. Des résultats que vous voyez.
              </h2>
              <p className="text-gray-500 leading-relaxed mb-6">
                On utilise les outils d&apos;intelligence artificielle les plus avancés du marché — ceux qu&apos;utilisent les grandes entreprises. Mais on les configure pour votre métier, votre façon de travailler, vos clients à vous. Pas un système générique. Le vôtre.
              </p>
              <p className="text-xs text-gray-400">
                Certifié Anthropic Architecture. Formé chez Alegria Academy. On sait ce qu&apos;on fait — vous n&apos;avez pas besoin de le savoir.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { stat: "48h", label: "pour un premier système", desc: "Un assistant client ou un système de relance peut être opérationnel en 2 jours." },
                { stat: "24h/24", label: "ça tourne tout seul", desc: "Nuits, week-ends, jours fériés — votre système ne s'arrête jamais." },
                { stat: "0", label: "compétence technique requise", desc: "Vous n'avez pas besoin de comprendre comment ça marche. Vous voyez les résultats." },
                { stat: "ROI", label: "dès le 1er mois", desc: "Le temps gagné dépasse souvent le coût du système dès les premières semaines." },
              ].map((item) => (
                <div key={item.stat} className="p-4 bg-white rounded-xl border border-gray-100">
                  <div className="text-xl font-bold text-[#e8632a] mb-0.5">{item.stat}</div>
                  <div className="text-xs font-semibold text-gray-700 mb-1">{item.label}</div>
                  <div className="text-xs text-gray-400 leading-relaxed">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
