"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "C'est quoi le modèle exactement ?",
    a: "On facture une fois la conception et le déploiement de votre architecture (à partir de 450€). Ensuite, vous choisissez un abonnement mensuel pour la maintenance, le monitoring et l'évolution. Pas d'engagement minimum.",
  },
  {
    q: "Pourquoi Claude AI plutôt que ChatGPT ?",
    a: "Claude (Anthropic) est aujourd'hui le modèle le plus avancé pour les cas d'usage business : raisonnement long, documents complexes, agents autonomes. On s'y est spécialisés et on utilise les dernières versions via l'API.",
  },
  {
    q: "On n'a pas de compétences techniques en interne, c'est un problème ?",
    a: "C'est justement notre valeur ajoutée. Vous n'avez pas besoin de comprendre comment ça marche — vous voyez juste les résultats. On gère tout : conception, tests, déploiement, maintenance.",
  },
  {
    q: "Combien de temps pour déployer une première automatisation ?",
    a: "Pour une automatisation simple : 48h. Pour une architecture complète avec agents IA : 1 à 3 semaines selon la complexité.",
  },
  {
    q: "Est-ce que vous intervenez à Bordeaux, Royan et Arcachon ?",
    a: "Oui, on est basés dans ce triangle et on intervient en présentiel ou en remote. On couvre aussi toute la France à distance.",
  },
  {
    q: "Est-ce que vous faites aussi du conseil sans passer par vos outils ?",
    a: "Oui. L'audit gratuit de 1h est un vrai diagnostic — on vous dit ce qui peut être automatisé et ce qui ne le peut pas, sans obligation d'achat.",
  },
  {
    q: "Mes données sont-elles sécurisées ?",
    a: "Absolument. On travaille avec des infrastructures Européennes (RGPD), des connexions OAuth sécurisées et nous ne stockons jamais vos données métier sur nos propres serveurs.",
  },
  {
    q: "Qu'est-ce que l'automatisation nocode exactement ?",
    a: "L'automatisation nocode consiste à connecter vos outils métier (CRM, email, comptabilité, RH) sans écrire une seule ligne de code, via des plateformes visuelles comme Make ou n8n. Les flux s'exécutent automatiquement selon des déclencheurs : une nouvelle commande, un email reçu, une mise à jour dans votre base de données. Résultat : vos équipes se concentrent sur ce qui a de la valeur, les tâches répétitives disparaissent.",
  },
  {
    q: "Combien d'heures par semaine peut-on gagner avec vos automatisations ?",
    a: "Selon les cas, entre 3h et 20h par semaine par collaborateur. Une PME type avec un flux de relances clients automatisé + un CRM synchronisé + des rapports hebdomadaires auto-générés économise en moyenne 2 équivalents temps partiel. Le ROI dépasse souvent le coût du setup dès le premier mois.",
  },
  {
    q: "Est-ce qu'un agent IA peut vraiment remplacer un salarié ?",
    a: "Pas un salarié — mais il peut absorber la charge mentale et répétitive de plusieurs personnes. Un agent Claude bien configuré peut traiter des emails, qualifier des leads, rédiger des comptes-rendus, extraire des données de documents et prendre des décisions simples en autonomie, 24h/24. Ce qu'il ne remplace pas : la relation humaine, le jugement stratégique et la créativité.",
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
