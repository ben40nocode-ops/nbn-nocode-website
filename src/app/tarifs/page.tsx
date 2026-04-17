import type { Metadata } from "next";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Tarifs",
  description:
    "Setup unique à partir de 450€ + abonnement mensuel dès 159€/mois. Pas d'engagement, pas de surprise. Découvrez nos offres NBN Nocode.",
};

const setup = [
  { name: "Starter", price: "450", desc: "1 automatisation simple, idéal pour tester.", features: ["1 workflow Make/Zapier", "Connexion 2 outils", "Tests & documentation", "Onboarding 1h"] },
  { name: "Business", price: "900", desc: "Architecture multi-flux pour un process métier complet.", features: ["3 workflows interconnectés", "Connexion jusqu'à 6 outils", "Agent IA simple", "Formation équipe 2h"] },
  { name: "Enterprise", price: "Sur devis", desc: "Système complet avec agents IA et intégrations avancées.", features: ["Architecture illimitée", "Agents Claude sur mesure", "CRM & base de données", "Support dédié au lancement"] },
];

const maintenance = [
  {
    name: "Core Maintenance",
    price: "159",
    desc: "L'essentiel pour maintenir vos automatisations.",
    features: ["Monitoring 24/7 de 3 automatisations", "2h de maintenance / mois", "Support email (48h)", "Rapport mensuel"],
    highlight: false,
  },
  {
    name: "Business Logic",
    price: "290",
    desc: "Pour les flux critiques de votre business.",
    features: ["Monitoring proactif 4 flux critiques", "4h de maintenance / mois", "Optimisation continue", "Support prioritaire (24h)"],
    highlight: true,
  },
  {
    name: "Full Stack Partner",
    price: "490",
    desc: "Un partenaire tech dédié à votre croissance.",
    features: ["Monitoring illimité", "6h de dev/maintenance / mois", "Évolution constante", "Accès direct Slack"],
    highlight: false,
  },
];

export default function TarifsPage() {
  return (
    <div className="min-h-screen pt-24 pb-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-xs text-[#e8632a] uppercase tracking-widest mb-4 font-medium">Tarifs</p>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[#f2f0eb] mb-6">
            Simple, transparent, sans surprise.
          </h1>
          <p className="text-[#777770] max-w-xl mx-auto leading-relaxed">
            Un investissement unique pour construire. Un abonnement pour que ça tourne. Résiliable à tout moment.
          </p>
        </div>

        {/* Setup */}
        <div className="mb-20">
          <h2 className="text-xl font-bold text-[#f2f0eb] mb-2">
            1. Setup & conception
          </h2>
          <p className="text-sm text-[#555550] mb-8">Facturé une seule fois. Comprend conception, développement, tests et formation.</p>
          <div className="grid md:grid-cols-3 gap-4">
            {setup.map((p) => (
              <div key={p.name} className="p-6 rounded-2xl border border-[#1c1c1c] bg-[#0a0a0a] hover:border-[#2a2a2a] transition-all">
                <h3 className="font-semibold text-[#f2f0eb] mb-1">{p.name}</h3>
                <p className="text-xs text-[#555550] mb-4">{p.desc}</p>
                <div className="mb-5">
                  <span className="text-3xl font-bold text-[#f2f0eb]">{p.price}</span>
                  {p.price !== "Sur devis" && <span className="text-sm text-[#555550]">€ HT</span>}
                </div>
                <ul className="space-y-2.5">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-[#777770]">
                      <Check size={13} className="text-[#e8632a] flex-shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Maintenance */}
        <div className="mb-20">
          <h2 className="text-xl font-bold text-[#f2f0eb] mb-2">
            2. Maintenance & évolution
          </h2>
          <p className="text-sm text-[#555550] mb-8">Abonnement mensuel sans engagement. Résiliable à tout moment.</p>
          <div className="grid md:grid-cols-3 gap-4">
            {maintenance.map((p) => (
              <div
                key={p.name}
                className={`relative p-6 rounded-2xl flex flex-col transition-all ${
                  p.highlight
                    ? "border border-[#e8632a]/40 bg-[#0f0f0f] shadow-[0_0_60px_rgba(232,99,42,0.08)]"
                    : "border border-[#1c1c1c] bg-[#0a0a0a] hover:border-[#2a2a2a]"
                }`}
              >
                {p.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#e8632a] text-white text-xs font-medium px-4 py-1 rounded-full">
                    Le plus choisi
                  </div>
                )}
                <h3 className="font-semibold text-[#f2f0eb] mb-1">{p.name}</h3>
                <p className="text-xs text-[#555550] mb-4">{p.desc}</p>
                <div className="mb-5">
                  <span className="text-3xl font-bold text-[#f2f0eb]">{p.price}€</span>
                  <span className="text-sm text-[#555550]"> / mois</span>
                </div>
                <ul className="space-y-2.5 flex-1 mb-6">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-[#777770]">
                      <Check size={13} className="text-[#e8632a] flex-shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="https://calendly.com/nbn-nocode"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full text-center py-3 rounded-xl text-sm font-medium transition-colors ${
                    p.highlight
                      ? "bg-[#e8632a] hover:bg-[#c4521f] text-white"
                      : "border border-[#2a2a2a] hover:border-[#3a3a3a] text-[#f2f0eb]"
                  }`}
                >
                  Choisir ce plan
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center border border-[#1c1c1c] rounded-2xl p-10 bg-[#0a0a0a]">
          <p className="text-[#f2f0eb] font-semibold text-lg mb-2">Pas sûr de quel plan choisir ?</p>
          <p className="text-[#555550] text-sm mb-6">L&apos;audit gratuit de 30 min répond à toutes vos questions et définit le setup idéal.</p>
          <Link
            href="https://calendly.com/nbn-nocode"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#e8632a] hover:bg-[#c4521f] text-white px-6 py-3 rounded-xl text-sm font-medium transition-colors"
          >
            Réserver l&apos;audit gratuit <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}
