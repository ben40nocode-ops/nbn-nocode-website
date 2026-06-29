const cases = [
  { emoji: "🔧", title: "Artisan plombier — devis automatisés", desc: "Le client envoie un message WhatsApp ou email. Notre système répond, pose les bonnes questions, génère un devis et relance si pas de réponse. L'artisan signe — sans avoir décroché son téléphone.", impact: "3h gagnées par jour" },
  { emoji: "🍽️", title: "Restaurant — réservations & rappels", desc: "Prise de réservation automatique 24h/24, confirmation par SMS, rappel la veille, gestion des no-shows. Le restaurateur se concentre sur sa cuisine, pas sur son téléphone.", impact: "-40% de no-shows" },
  { emoji: "🏠", title: "Agence immobilière — leads qualifiés", desc: "Chaque demande de contact reçoit une réponse en moins de 2 minutes, 7j/7. L'agent reçoit uniquement les prospects vraiment intéressés, avec toutes les infos pré-remplies.", impact: "×3 mandats signés" },
  { emoji: "🏨", title: "Hôtel — check-in sans friction", desc: "Workflow d'accueil complet automatisé : email de bienvenue, code d'accès, guide local personnalisé, demande d'avis au départ. Zéro intervention du personnel pour chaque séjour.", impact: "0 intervention manuelle" },
  { emoji: "🍷", title: "Domaine viticole — ventes & tourisme", desc: "Réponse automatique aux demandes de visites et commandes en ligne, relance des prospects après une dégustation, envoi de la newsletter saisonnière. Le vigneron se concentre sur ses vignes.", impact: "+30% de ventes directes" },
  { emoji: "🛒", title: "Boutique en ligne — relances & avis", desc: "Séquence automatique après un panier abandonné, demande d'avis après livraison, newsletter selon les achats. Le gérant dort — le système travaille.", impact: "+22% de conversion" },
];

export function RealisationsSection() {
  return (
    <section id="realisations" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="text-xs font-semibold text-[#e8632a] uppercase tracking-widest mb-3">
            Exemples concrets
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 max-w-xl mx-auto leading-snug">
            Des exemples concrets de ce qu&apos;on peut construire.
          </h2>
          <p className="mt-4 text-gray-500 max-w-md mx-auto">
            Des scénarios types, prêts à être adaptés à votre métier. Voici ce qu&apos;un système NBN IA peut faire pour vous.
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
