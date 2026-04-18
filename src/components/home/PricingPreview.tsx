import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Core Maintenance",
    price: "159",
    desc: "L'essentiel pour maintenir vos automatisations.",
    features: ["Monitoring 24/7 de 3 automatisations", "2h de maintenance / mois", "Support email", "Rapport mensuel"],
    highlight: false,
    cta: "Commencer",
  },
  {
    name: "Business Logic",
    price: "290",
    desc: "Pour les flux critiques de votre business.",
    features: ["Monitoring proactif 4 flux critiques", "4h de maintenance / mois", "Optimisation continue", "Support prioritaire"],
    highlight: true,
    cta: "Choisir ce plan",
  },
  {
    name: "Full Stack Partner",
    price: "490",
    desc: "Un partenaire tech dédié à votre croissance.",
    features: ["Monitoring illimité", "6h de dev/maintenance / mois", "Évolution constante des flux", "Accès direct Slack"],
    highlight: false,
    cta: "Devenir partenaire",
  },
];

export function PricingPreview() {
  return (
    <section className="py-20 md:py-28 bg-[#111111]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-xs text-[#e8632a] uppercase tracking-widest mb-4 font-semibold">
            Abonnements maintenance
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-[#f0ede8] mb-3">
            Setup unique. Abonnement évolutif.
          </h2>
          <p className="text-sm text-[#888882] max-w-md mx-auto">
            Architecture à partir de 450€. Ensuite, on maintient et on fait grandir votre système.
          </p>
        </div>

        {/* Plans */}
        <div className="grid md:grid-cols-3 gap-4">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative p-6 rounded-2xl flex flex-col transition-all duration-200 ${
                plan.highlight
                  ? "border-2 border-[#e8632a] bg-[#141414]"
                  : "border border-[#242424] bg-[#141414] hover:border-[#333]"
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#e8632a] text-white text-xs font-semibold px-4 py-1 rounded-full">
                  Populaire
                </div>
              )}
              <h3 className="text-sm font-semibold text-[#f0ede8] mb-1">{plan.name}</h3>
              <p className="text-xs text-[#666660] mb-5">{plan.desc}</p>
              <div className="mb-5 pb-5 border-b border-[#1e1e1e]">
                <span className="text-4xl font-bold text-[#f0ede8]">{plan.price}€</span>
                <span className="text-sm text-[#555550] ml-1">/ mois</span>
              </div>
              <ul className="space-y-3 flex-1 mb-6">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-[#888882]">
                    <Check size={14} className="text-[#e8632a] flex-shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="https://calendly.com/nbn-nocode"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full text-center py-3 rounded-xl text-sm font-semibold transition-colors duration-200 ${
                  plan.highlight
                    ? "bg-[#e8632a] hover:bg-[#c4521f] text-white"
                    : "border border-[#2a2a2a] hover:border-[#444] text-[#f0ede8] hover:bg-[#1a1a1a]"
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
            className="inline-flex items-center gap-2 text-sm text-[#666660] hover:text-[#f0ede8] transition-colors"
          >
            Voir le détail complet des tarifs <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
