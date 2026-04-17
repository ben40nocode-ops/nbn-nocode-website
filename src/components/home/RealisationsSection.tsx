const cases = [
  {
    emoji: "🤖",
    title: "Agent commercial IA",
    desc: "Clone conversationnel qui répond aux leads 24/7, qualifie et planifie des RDV automatiquement.",
    impact: "-80% de temps commercial",
  },
  {
    emoji: "📦",
    title: "Gestion douanière automatisée",
    desc: "Extraction et traitement des documents douaniers via IA, sync avec l'ERP en temps réel.",
    impact: "3h/jour économisées",
  },
  {
    emoji: "💰",
    title: "Trésorerie pilotée par IA",
    desc: "Dashboard financier connecté aux banques, prévisions cash automatiques, alertes proactives.",
    impact: "Décisions en 1 clic",
  },
  {
    emoji: "🏨",
    title: "Check-in hôtelier automatisé",
    desc: "Workflow complet d'accueil client : emails, codes d'accès, guides personnalisés générés par IA.",
    impact: "0 intervention manuelle",
  },
  {
    emoji: "🛒",
    title: "Récupération paniers e-commerce",
    desc: "Séquence de relance intelligente avec personnalisation IA selon le comportement d'achat.",
    impact: "+22% de conversion",
  },
  {
    emoji: "📱",
    title: "Recyclage contenu social",
    desc: "Pipeline Make → Claude : un blog devient 10 posts LinkedIn, Threads, Instagram en 1 clic.",
    impact: "×10 sur la production",
  },
];

export function RealisationsSection() {
  return (
    <section id="realisations" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs text-[#e8632a] uppercase tracking-widest mb-4 font-medium">
            Cas d&apos;usage
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#f2f0eb]">
            Ce qu&apos;on a déjà construit.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {cases.map((c) => (
            <div
              key={c.title}
              className="group p-6 rounded-2xl border border-[#1c1c1c] bg-[#0a0a0a] hover:border-[#2a2a2a] hover:bg-[#0f0f0f] transition-all duration-300 flex flex-col"
            >
              <span className="text-2xl mb-4 block">{c.emoji}</span>
              <h3 className="text-base font-semibold text-[#f2f0eb] mb-2">{c.title}</h3>
              <p className="text-sm text-[#666660] leading-relaxed flex-1 mb-4">{c.desc}</p>
              <div className="inline-flex items-center gap-1.5 text-xs font-medium text-[#e8632a] border border-[#e8632a]/20 bg-[#e8632a]/5 rounded-full px-3 py-1.5 self-start">
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
