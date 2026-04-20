import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Core Maintenance",
    price: "159",
    desc: "L'essentiel pour garder vos automatisations en bonne santé.",
    features: ["Monitoring 24/7 de 3 automatisations", "2h de maintenance / mois", "Support par email (48h)", "Rapport mensuel"],
    highlight: false,
    cta: "Commencer",
  },
  {
    name: "Business Logic",
    price: "290",
    desc: "Pour les flux critiques qui font tourner votre business.",
    features: ["Monitoring proactif de 4 flux critiques", "4h de maintenance / mois", "Optimisation continue", "Support prioritaire (24h)"],
    highlight: true,
    cta: "Choisir ce plan",
  },
  {
    name: "Full Stack Partner",
    price: "490",
    desc: "Un partenaire tech dédié à l'évolution de votre système.",
    features: ["Monitoring illimité", "6h de dev/maintenance / mois", "Évolution constante des flux", "Accès direct Slack"],
    highlight: false,
    cta: "Devenir partenaire",
  },
];

export function PricingPreview() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-xs font-semibold text-[#e8632a] uppercase tracking-widest mb-3">
            Abonnements maintenance
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 max-w-xl mx-auto leading-snug">
            Setup unique. Abonnement évolutif.
          </h2>
          <p className="mt-4 text-gray-500 max-w-md mx-auto">
            On conçoit votre architecture à partir de 450€, puis on la maintient et on la fait grandir avec vous.
          </p>
        </div>

        {/* Plans */}
        <div className="grid md:grid-cols-3 gap-5">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative p-7 rounded-2xl flex flex-col transition-all duration-200 ${
                plan.highlight
                  ? "border-2 border-[#e8632a] bg-white shadow-lg shadow-orange-100"
                  : "border border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm"
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#e8632a] text-white text-xs font-bold px-4 py-1 rounded-full">
                  Le plus choisi
                </div>
              )}

              <h3 className="text-sm font-bold text-gray-900 mb-1">{plan.name}</h3>
              <p className="text-xs text-gray-400 mb-6">{plan.desc}</p>

              <div className="mb-6 pb-6 border-b border-gray-100">
                <span className="text-4xl font-bold text-gray-900">{plan.price}€</span>
                <span className="text-sm text-gray-400 ml-1">/ mois</span>
              </div>

              <ul className="space-y-3 flex-1 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <Check size={15} className="text-[#e8632a] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">{f}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="https://calendly.com/ben40nocode/1h"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full text-center py-3 rounded-xl text-sm font-bold transition-colors duration-200 ${
                  plan.highlight
                    ? "bg-[#e8632a] hover:bg-[#c4521f] text-white"
                    : "border border-gray-200 hover:border-gray-300 text-gray-700 hover:bg-gray-50"
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link href="/tarifs" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-gray-700 transition-colors">
            Voir le détail complet des tarifs <ArrowRight size={14} />
          </Link>
        </div>

      </div>
    </section>
  );
}
