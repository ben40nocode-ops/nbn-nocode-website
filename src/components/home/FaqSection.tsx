"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Je suis artisan / restaurateur / commerçant — c'est vraiment pour moi ?",
    a: "Oui, c'est exactement pour vous. Nos clients les plus satisfaits sont des plombiers, des restaurateurs, des agents immobiliers, des salons de coiffure, des hôteliers. Si vous avez des tâches répétitives qui vous prennent du temps (répondre aux emails, envoyer des devis, relancer des clients, confirmer des RDV), on peut les automatiser.",
  },
  {
    q: "C'est quoi le modèle exactement ?",
    a: "On facture une fois la mise en place de votre système (à partir de 450€). Ensuite, vous choisissez un abonnement mensuel pour la maintenance et l'évolution. Pas d'engagement minimum. Si ça ne vous convient plus, vous arrêtez.",
  },
  {
    q: "On n'a pas de compétences techniques en interne, c'est un problème ?",
    a: "Pas du tout — c'est justement pour ça qu'on est là. Vous n'avez pas besoin de comprendre comment ça fonctionne. On gère tout : la conception, les tests, le déploiement, la maintenance. Vous voyez les résultats, c'est tout ce qui compte.",
  },
  {
    q: "Combien de temps ça prend pour mettre en place ?",
    a: "Pour une automatisation simple (rappels RDV, réponses clients, devis automatisés) : entre 48h et 1 semaine. Pour un système plus complet avec plusieurs automatisations connectées : 2 à 4 semaines. On démarre toujours par l'automatisation qui vous fera gagner le plus de temps.",
  },
  {
    q: "Combien d'heures par semaine peut-on gagner ?",
    a: "Entre 2h et 20h par semaine selon votre activité. Un restaurateur avec des rappels de réservation automatiques gagne en moyenne 1h30 par jour. Un artisan avec des devis automatisés arrête de passer ses soirées à rappeler des clients. Le ROI dépasse souvent le coût dès le premier mois.",
  },
  {
    q: "Et si je veux arrêter ou changer quelque chose ?",
    a: "Vous gardez le contrôle. Pas d'engagement long terme. Si vous voulez modifier une automatisation, on le fait. Si vous voulez tout arrêter, on vous rend votre système proprement documenté. Aucun enfermement.",
  },
  {
    q: "Est-ce que vous intervenez à Bordeaux, Royan et Arcachon ?",
    a: "Oui, on est basés dans ce triangle et on intervient en présentiel si vous préférez. On couvre aussi toute la France à distance — la plupart de nos clients travaillent avec nous par visio.",
  },
  {
    q: "Mes données clients sont-elles sécurisées ?",
    a: "Absolument. On travaille avec des serveurs européens (RGPD), des connexions sécurisées, et on ne stocke jamais vos données métier sur nos propres serveurs. Votre activité reste la vôtre.",
  },
  {
    q: "C'est quoi l'audit gratuit exactement ?",
    a: "Un appel d'1 heure où on analyse ensemble votre activité : quelles tâches prennent le plus de temps, ce qui peut être automatisé, ce qui ne peut pas l'être. Vous repartez avec une recommandation concrète — que vous travailliez avec nous ou non. Zéro engagement.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-24 bg-gray-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="max-w-3xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="text-xs font-semibold text-[#e8632a] uppercase tracking-widest mb-3">FAQ</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
            Questions fréquentes.
          </h2>
        </div>

        <div className="flex flex-col gap-2">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-gray-200 rounded-xl overflow-hidden bg-white">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-sm font-semibold text-gray-900 pr-4">{faq.q}</span>
                {open === i
                  ? <Minus size={15} className="text-[#e8632a] flex-shrink-0" />
                  : <Plus size={15} className="text-gray-400 flex-shrink-0" />
                }
              </button>
              {open === i && (
                <div className="px-6 pb-5 border-t border-gray-100">
                  <p className="text-sm text-gray-500 leading-relaxed pt-4">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
