import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Core Maintenance",
    price: "159",
    desc: "L'essentiel pour maintenir vos automatisations en bonne santé.",
    features: [
      "Monitoring 24/7 de 3 automatisations",
      "2h de maintenance / mois",
      "Support par email",
      "Rapport mensuel",
    ],
    highlight: false,
    cta: "Commencer",
  },
  {
    name: "Business Logic",
    price: "290",
    desc: "Pour les business qui dépendent de leurs flux critiques.",
    features: [
      "Monitoring proactif de 4 flux critiques",
      "4h de maintenance / mois",
      "Optimisation continue",
      "Support prioritaire",
    ],
    highlight: true,
    cta: "Choisir ce plan",
  },
  {
    name: "Full Stack Partner",
    price: "490",
    desc: "Un partenaire tech dédié à l'évolution de votre système.",
    features: [
      "Monitoring illimité",
      "6h de dev/maintenance / mois",
      "Évolution constante des flux",
      "Accès direct Slack",
    ],
    highlight: false,
    cta: "Devenir partenaire",
  },
];

export function PricingPreview() {
  return (
    <section className="py-24 md:py-32 bg-[#050505]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-6">
          <p className="text-xs text-[#e8632a] uppercase tracking-widest mb-4 font-medium">
            Abonnements maintenance
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#f2f0eb] mb-4">
            Setup unique. Abonnement évolutif.
          </h2>
          <p className="text-[#777770] max-w-xl mx-auto">
            On conçoit votre architecture (450€ à partir de). Ensuite, on la maintient et on la fait grandir avec vous.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mt-12">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative p-6 md:p-8 rounded-2xl flex flex-col transition-all duration-300 ${
                plan.highlight
                  ? "border border-[#e8632a]/40 bg-[#0f0f0f] shadow-[0_0_60px_rgba(232,99,42,0.08)]"
                  : "border border-[#1c1c1c] bg-[#0a0a0a] hover:border-[#2a2a2a]"
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#e8632a] text-white text-xs font-medium px-4 py-1 rounded-full">
                  Populaire
                </div>
              )}
              <h3 className="text-base font-semibold text-[#f2f0eb] mb-1">{plan.name}</h3>
              <p className="text-xs text-[#555550] mb-5">{plan.desc}</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-[#f2f0eb]">{plan.price}€</span>
                <span className="text-sm text-[#555550] ml-1">/ mois</span>
              </div>
              <ul className="space-y-3 flex-1 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-[#888880]">
                    <Check size={14} className="text-[#e8632a] flex-shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="https://calendly.com/nbn-nocode"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full text-center py-3 rounded-xl text-sm font-medium transition-colors duration-200 ${
                  plan.highlight
                    ? "bg-[#e8632a] hover:bg-[#c4521f] text-white"
                    : "border border-[#2a2a2a] hover:border-[#3a3a3a] text-[#f2f0eb] hover:bg-[#111]"
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/tarifs"
            className="inline-flex items-center gap-2 text-sm text-[#777770] hover:text-[#f2f0eb] transition-colors"
          >
            Voir le détail des tarifs <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
