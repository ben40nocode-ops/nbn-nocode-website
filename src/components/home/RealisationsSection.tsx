const cases = [
  { emoji: "🤖", title: "Agent commercial IA", desc: "Clone conversationnel qui répond aux leads 24/7, qualifie et planifie des RDV automatiquement.", impact: "-80% de temps commercial" },
  { emoji: "📦", title: "Gestion douanière automatisée", desc: "Extraction et traitement des documents douaniers via IA, sync avec l'ERP en temps réel.", impact: "3h/jour économisées" },
  { emoji: "💰", title: "Trésorerie pilotée par IA", desc: "Dashboard financier connecté aux banques, prévisions cash automatiques, alertes proactives.", impact: "Décisions en 1 clic" },
  { emoji: "🏨", title: "Check-in hôtelier automatisé", desc: "Workflow d'accueil complet : emails, codes d'accès, guides personnalisés générés par IA.", impact: "0 intervention manuelle" },
  { emoji: "🛒", title: "Récupération paniers e-commerce", desc: "Séquence de relance intelligente avec personnalisation IA selon le comportement d'achat.", impact: "+22% de conversion" },
  { emoji: "📱", title: "Recyclage contenu social", desc: "Pipeline Make → Claude : un blog devient 10 posts LinkedIn, Threads, Instagram en 1 clic.", impact: "×10 sur la production" },
];

export function RealisationsSection() {
  return (
    <section id="realisations" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-xs font-semibold text-[#e8632a] uppercase tracking-widest mb-3">
            Cas d&apos;usage
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 max-w-xl mx-auto leading-snug">
            Ce qu&apos;on a déjà construit.
          </h2>
          <p className="mt-4 text-gray-500 max-w-md mx-auto">
            Des systèmes réels, déployés chez des clients, avec des résultats mesurables.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {cases.map((c) => (
            <div
              key={c.title}
              className="p-6 rounded-2xl border border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm transition-all duration-200 flex flex-col"
            >
              <span className="text-3xl mb-4 block">{c.emoji}</span>
              <h3 className="text-sm font-bold text-gray-900 mb-2">{c.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed flex-1 mb-5">{c.desc}</p>
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#e8632a] bg-orange-50 border border-orange-100 rounded-full px-3 py-1.5 self-start">
                <span className="w-1.5 h-1.5 rounded-full bg-[#e8632a] inline-block" />
                {c.impact}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
