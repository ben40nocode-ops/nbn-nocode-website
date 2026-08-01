const cases = [
  { emoji: "📟", title: "Astreinte — transfert d'appel automatique", desc: "Planning d'astreinte sur une seule page et bascule automatique de l'appel vers la bonne personne, jour et nuit. Fini le tableur partagé et les numéros à jongler.", impact: "Remplace Power Apps" },
  { emoji: "🧾", title: "Compta — ventilation automatique", desc: "Je dépose une facture PDF : l'IA lit, ventile et prépare la comptabilité en un clic. Ce qui passait par une chaîne d'outils fragile se fait d'un coup.", impact: "Remplace 3 Zapier + un script maison" },
  { emoji: "🗓️", title: "Congés & plannings sans conflit", desc: "Demandes de congés, validation et détection automatique des conflits avec l'astreinte. Impossible d'être en congé ET d'astreinte le même jour.", impact: "Zéro double-saisie" },
  { emoji: "💬", title: "SMS clients automatiques", desc: "Un message part tout seul au bon moment avant l'arrivée du client, adapté à la saison. Aucun copier-coller, aucun oubli.", impact: "Remplace Power Apps + Excel + Zapier" },
  { emoji: "🗂️", title: "Factures classées automatiquement", desc: "Chaque facture rangée au bon endroit, miroir exact du dossier comptable. Fini le tri manuel de fin de mois.", impact: "Toujours à jour, 0 manuel" },
  { emoji: "🤖", title: "Assistant interne 24/7", desc: "Un chatbot qui répond aux questions des équipes — procédures, mode d'emploi des outils — à toute heure. Moins d'interruptions, plus d'autonomie.", impact: "Disponible 24h/24" },
];

export function RealisationsSection() {
  return (
    <section id="realisations" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="text-xs font-semibold text-[#FF5A1F] uppercase tracking-widest mb-3">
            Exemples concrets
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 max-w-xl mx-auto leading-snug">
            Des systèmes déjà en production.
          </h2>
          <p className="mt-4 text-gray-500 max-w-md mx-auto">
            Des automatisations réelles que j&apos;ai construites et qui tournent aujourd&apos;hui — transposables à votre métier.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {cases.map((c) => (
            <div
              key={c.title}
              className="p-6 rounded-2xl border border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm transition-all duration-200 flex flex-col"
            >
              <span className="text-3xl mb-4 block">{c.emoji}</span>
              <h3 className="text-sm font-bold text-gray-900 mb-2">{c.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed flex-1 mb-5">{c.desc}</p>
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#FF5A1F] bg-orange-50 border border-orange-100 rounded-full px-3 py-1.5 self-start">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF5A1F] inline-block" />
                {c.impact}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
