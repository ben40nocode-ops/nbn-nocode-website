const cases = [
  { emoji: "🤖", title: "Agent commercial IA", desc: "Clone conversationnel qui répond aux leads 24/7, qualifie et planifie des RDV automatiquement.", impact: "-80% de temps commercial" },
  { emoji: "📦", title: "Gestion douanière automatisée", desc: "Extraction et traitement des documents douaniers via IA, sync avec l'ERP en temps réel.", impact: "3h/jour économisées" },
  { emoji: "💰", title: "Trésorerie pilotée par IA", desc: "Dashboard financier connecté aux banques, prévisions cash automatiques, alertes proactives.", impact: "Décisions en 1 clic" },
  { emoji: "🏨", title: "Check-in hôtelier automatisé", desc: "Workflow complet d'accueil client : emails, codes d'accès, guides personnalisés générés par IA.", impact: "0 intervention manuelle" },
  { emoji: "🛒", title: "Récupération paniers e-commerce", desc: "Séquence de relance intelligente avec personnalisation IA selon le comportement d'achat.", impact: "+22% de conversion" },
  { emoji: "📱", title: "Recyclage contenu social", desc: "Pipeline Make → Claude : un blog devient 10 posts LinkedIn, Threads, Instagram en 1 clic.", impact: "×10 sur la production" },
];

export function RealisationsSection() {
  return (
    <section id="realisations" className="py-20 md:py-28 bg-[#111111]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-xs text-[#e8632a] uppercase tracking-widest mb-4 font-semibold">
            Cas d&apos;usage
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-[#f0ede8]">
            Ce qu&apos;on a déjà construit.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {cases.map((c) => (
            <div
              key={c.title}
              className="p-5 rounded-2xl border border-[#242424] bg-[#141414] hover:border-[#333] hover:bg-[#181818] transition-all duration-200 flex flex-col"
            >
              <span className="text-2xl mb-3 block">{c.emoji}</span>
              <h3 className="text-sm font-semibold text-[#f0ede8] mb-2">{c.title}</h3>
              <p className="text-xs text-[#777772] leading-relaxed flex-1 mb-4">{c.desc}</p>
              <div className="inline-flex items-center gap-1.5 text-xs font-medium text-[#e8632a] border border-[#e8632a]/25 bg-[#e8632a]/8 rounded-full px-3 py-1.5 self-start">
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
