"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "C'est quoi le modèle exactement ?",
    a: "On facture une fois la conception et le déploiement de votre architecture (à partir de 450€ selon la complexité). Ensuite, vous choisissez un abonnement mensuel pour la maintenance, le monitoring et l'évolution. Pas d'engagement minimum.",
  },
  {
    q: "Pourquoi Claude AI plutôt que ChatGPT ?",
    a: "Claude (Anthropic) est aujourd'hui le modèle le plus avancé pour les cas d'usage business : raisonnement long, documents complexes, agents autonomes. On s'y est spécialisés et on utilise les dernières versions via l'API directement.",
  },
  {
    q: "On n'a pas de compétences techniques en interne, c'est un problème ?",
    a: "C'est justement notre valeur ajoutée. Vous n'avez pas besoin de comprendre comment ça marche — vous voyez juste les résultats. On gère tout : conception, tests, déploiement, maintenance.",
  },
  {
    q: "Combien de temps pour déployer une première automatisation ?",
    a: "Pour une automatisation simple (capture de leads, notification, traitement de données) : 48h. Pour une architecture complète avec agents IA : 1 à 3 semaines selon la complexité.",
  },
  {
    q: "Est-ce que vous faites aussi du conseil sans passer par vos outils ?",
    a: "Oui. L'audit gratuit (30 min) est un vrai diagnostic — on vous dit ce qui peut être automatisé et ce qui ne le peut pas, sans obligation d'achat.",
  },
  {
    q: "Mes données sont-elles sécurisées ?",
    a: "Absolument. On travaille avec des infrastructures Européennes (RGPD), des connexions OAuth sécurisées et nous ne stockons jamais vos données métier sur nos propres serveurs.",
  },
];

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-24 md:py-32 bg-[#050505]">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs text-[#e8632a] uppercase tracking-widest mb-4 font-medium">FAQ</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#f2f0eb]">
            Questions fréquentes.
          </h2>
        </div>

        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-[#1c1c1c] rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left bg-[#0a0a0a] hover:bg-[#0f0f0f] transition-colors duration-200"
              >
                <span className="text-sm font-medium text-[#f2f0eb] pr-4">{faq.q}</span>
                {open === i ? (
                  <Minus size={16} className="text-[#e8632a] flex-shrink-0" />
                ) : (
                  <Plus size={16} className="text-[#555550] flex-shrink-0" />
                )}
              </button>
              {open === i && (
                <div className="px-5 pb-5 bg-[#0a0a0a] border-t border-[#1c1c1c]">
                  <p className="text-sm text-[#777770] leading-relaxed pt-4">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
