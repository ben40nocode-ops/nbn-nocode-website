export function ClaudeSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="rounded-2xl bg-gradient-to-br from-[#fff5f0] to-white border border-[#e8632a]/15 p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-xs font-semibold text-[#e8632a] uppercase tracking-widest mb-3">Le modèle fait la différence</p>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug mb-4">
                Pourquoi je travaille exclusivement avec Claude.
              </h2>
              <p className="text-gray-500 leading-relaxed mb-6">
                ChatGPT répond. Claude <em>agit</em>. Pour construire des systèmes IA qui prennent de vraies décisions business — qualifier un lead, analyser un contrat, orchestrer 10 outils — Claude (Anthropic) est dans une autre catégorie.
              </p>
              <p className="text-xs text-gray-400">
                Aucune agence française ne se spécialise sur Claude. C&apos;est votre avantage compétitif — et le mien.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { stat: "200K", label: "tokens de contexte", desc: "Lit un contrat entier, une base de données, un historique client." },
                { stat: "↗ 3×", label: "plus fiable", desc: "Moins d'hallucinations sur données structurées vs autres LLMs." },
                { stat: "MCP", label: "natif", desc: "Protocole d'agents IA le plus avancé. Outils, mémoire, orchestration." },
                { stat: "24h/24", label: "autonome", desc: "Conçu pour agir sans supervision humaine dans des workflows critiques." },
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
