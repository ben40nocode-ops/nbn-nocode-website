import type { Metadata } from "next";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { SubscribeButton } from "@/components/SubscribeButton";

export const metadata: Metadata = {
  title: "Tarifs",
  description:
    "Setup unique à partir de 450€ + abonnement mensuel dès 159€/mois. Pas d'engagement, pas de surprise. Découvrez nos offres NBN IA.",
};

const setup = [
  {
    name: "Starter",
    price: "450",
    desc: "1 agent IA ou automatisation, idéal pour démarrer — artisans et TPE",
    features: ["1 workflow Make/Zapier", "Connexion 2 outils", "Tests & documentation", "Onboarding 1h"],
  },
  {
    name: "Business",
    price: "1 200",
    desc: "Système d'automatisations interconnectées sur un process clé — PME",
    features: ["3 workflows interconnectés", "Connexion jusqu'à 6 outils", "Agent IA simple", "Formation équipe 2h"],
  },
  {
    name: "Enterprise",
    price: "Sur devis",
    desc: "Système complet avec agents IA et intégrations avancées.",
    features: ["Architecture illimitée", "Agents Claude sur mesure", "CRM & base de données", "Support dédié au lancement"],
  },
];

const maintenance = [
  {
    name: "Core Maintenance",
    price: "159",
    plan: "core",
    desc: "Vos automatisations monitorées et maintenues 24h/24",
    features: ["Monitoring 24/7 de 3 automatisations", "2h de maintenance / mois", "Support email (48h)", "Rapport mensuel"],
    highlight: false,
    cta: "Commencer",
  },
  {
    name: "Business Logic",
    price: "320",
    plan: "business",
    desc: "Pour les automatisations critiques qui font tourner votre business",
    features: ["Monitoring proactif 4 flux critiques", "4h de maintenance / mois", "Optimisation continue", "Support prioritaire (24h)"],
    highlight: true,
    cta: "Choisir ce plan",
  },
  {
    name: "Full Stack Partner",
    price: "540",
    plan: "fullstack",
    desc: "Votre architecte IA dédié — automatisations, agents, évolution continue",
    features: ["Monitoring illimité", "6h de dev/maintenance / mois", "Évolution constante", "Accès direct Slack"],
    highlight: false,
    cta: "Devenir partenaire",
  },
];

export default function TarifsPage() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-32">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-xs text-[#e8632a] uppercase tracking-widest mb-4 font-semibold">Tarifs</p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
            Simple, transparent, sans surprise.
          </h1>
          <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
            Un investissement unique pour construire. Un abonnement pour que ça tourne. Résiliable à tout moment.
          </p>

          {/* ROI framing */}
          <div className="mt-10 grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            <div className="bg-orange-50 border border-orange-100 rounded-xl px-5 py-4 text-center">
              <p className="text-2xl font-bold text-[#e8632a]">~2 000€</p>
              <p className="text-xs text-gray-500 mt-1">coût mensuel d&apos;un assistant temps plein</p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 text-center flex flex-col items-center justify-center">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest">vs</p>
              <p className="text-xs text-gray-400 mt-1">un abonnement NBN IA</p>
            </div>
            <div className="bg-orange-50 border border-orange-100 rounded-xl px-5 py-4 text-center">
              <p className="text-2xl font-bold text-[#e8632a]">dès 159€</p>
              <p className="text-xs text-gray-500 mt-1">et vos process tournent 24h/24</p>
            </div>
          </div>
          <p className="text-xs text-gray-400 mt-4">Sans recrutement. Sans formation. Sans charge patronale.</p>
        </div>

        {/* Setup */}
        <div className="mb-20">
          <h2 className="text-xl font-bold text-gray-900 mb-2">1. Setup & conception</h2>
          <p className="text-sm text-gray-400 mb-8">Facturé une seule fois. Comprend conception, développement, tests et formation.</p>
          <div className="grid md:grid-cols-3 gap-5">
            {setup.map((p) => (
              <div key={p.name} className="p-7 rounded-2xl border border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm transition-all">
                <h3 className="font-bold text-gray-900 mb-1">{p.name}</h3>
                <p className="text-xs text-gray-400 mb-5">{p.desc}</p>
                <div className="mb-5 pb-5 border-b border-gray-100">
                  <span className="text-3xl font-bold text-gray-900">{p.price}</span>
                  {p.price !== "Sur devis" && <span className="text-sm text-gray-400">€ HT</span>}
                </div>
                <ul className="space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-gray-600">
                      <Check size={14} className="text-[#e8632a] flex-shrink-0 mt-0.5" />
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
          <h2 className="text-xl font-bold text-gray-900 mb-2">2. Maintenance & évolution</h2>
          <p className="text-sm text-gray-400 mb-8">Abonnement mensuel sans engagement. Résiliable à tout moment.</p>
          <div className="grid md:grid-cols-3 gap-5">
            {maintenance.map((p) => (
              <div
                key={p.name}
                className={`relative p-7 rounded-2xl flex flex-col transition-all ${
                  p.highlight
                    ? "border-2 border-[#e8632a] bg-white shadow-lg shadow-orange-100"
                    : "border border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm"
                }`}
              >
                {p.highlight && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#e8632a] text-white text-xs font-bold px-4 py-1 rounded-full">
                    Le plus choisi
                  </div>
                )}
                <h3 className="font-bold text-gray-900 mb-1">{p.name}</h3>
                <p className="text-xs text-gray-400 mb-5">{p.desc}</p>
                <div className="mb-5 pb-5 border-b border-gray-100">
                  <span className="text-3xl font-bold text-gray-900">{p.price}€</span>
                  <span className="text-sm text-gray-400"> / mois</span>
                </div>
                <ul className="space-y-3 flex-1 mb-8">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-gray-600">
                      <Check size={14} className="text-[#e8632a] flex-shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
                <SubscribeButton plan={p.plan} highlight={p.highlight} label={p.cta} />
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-gray-50 rounded-2xl p-10 border border-gray-100">
          <p className="text-gray-900 font-bold text-lg mb-2">Pas sûr de quel plan choisir ?</p>
          <p className="text-gray-500 text-sm mb-6">L&apos;audit gratuit de 1h répond à toutes vos questions.</p>
          <Link
            href="https://calendly.com/ben40nocode/1h"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#e8632a] hover:bg-[#c4521f] text-white px-6 py-3 rounded-xl text-sm font-semibold transition-colors"
          >
            Réserver l&apos;audit gratuit <ArrowRight size={14} />
          </Link>
        </div>

      </div>
    </div>
  );
}
