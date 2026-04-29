import type { Metadata } from "next";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { SubscribeButton } from "@/components/SubscribeButton";
import { ArchitectureButton } from "@/components/ArchitectureButton";

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
          <p className="text-sm text-gray-500 mt-3">
            Tous les systèmes sont construits avec{" "}
            <span className="font-semibold text-[#d97757]">Claude (Anthropic)</span>
            {" "}— le modèle IA le plus avancé pour les workflows business critiques.
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

        {/* Architecture de système */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">1. Architecture de système</h2>
          <p className="text-sm text-gray-500 mb-10">Facturé une seule fois. Comprend conception, développement, tests et formation.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {setup.map((p) => (
              <div key={p.name} className="group relative p-8 rounded-3xl border border-gray-200 bg-white hover:border-[#e8632a] hover:shadow-xl hover:shadow-orange-100 hover:-translate-y-1 transition-all duration-300 flex flex-col">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#e8632a]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative">
                  <h3 className="font-bold text-xl text-gray-900 mb-2">{p.name}</h3>
                  <p className="text-sm text-gray-500 mb-6">{p.desc}</p>
                  <div className="mb-6 pb-6 border-b border-gray-100">
                    <span className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-[#e8632a] bg-clip-text text-transparent">{p.price}</span>
                    {p.price !== "Sur devis" && <span className="text-sm text-gray-400 ml-2">€ HT</span>}
                  </div>
                  <ul className="space-y-3 flex-1 mb-8">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm text-gray-600">
                        <Check size={16} className="text-[#e8632a] flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <ArchitectureButton highlight={false} label="Demander un devis" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Maintenance */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">2. Maintenance & évolution</h2>
          <p className="text-sm text-gray-500 mb-10">Abonnement mensuel sans engagement. Résiliable à tout moment.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {maintenance.map((p) => (
              <div
                key={p.name}
                className={`group relative p-8 rounded-3xl flex flex-col transition-all duration-300 ${
                  p.highlight
                    ? "border-2 border-[#e8632a] bg-gradient-to-br from-white to-orange-50 shadow-xl shadow-orange-100 md:scale-105"
                    : "border border-gray-200 bg-white hover:border-[#e8632a] hover:shadow-xl hover:shadow-orange-100 hover:-translate-y-1"
                }`}
              >
                {p.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#e8632a] to-[#d97757] text-white text-xs font-bold px-5 py-1.5 rounded-full shadow-lg">
                    ⭐ Le plus choisi
                  </div>
                )}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#e8632a]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative">
                  <h3 className="font-bold text-xl text-gray-900 mb-2">{p.name}</h3>
                  <p className="text-sm text-gray-500 mb-6">{p.desc}</p>
                  <div className="mb-6 pb-6 border-b border-gray-100">
                    <span className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-[#e8632a] bg-clip-text text-transparent">{p.price}€</span>
                    <span className="text-sm text-gray-400 ml-2">/ mois</span>
                  </div>
                  <ul className="space-y-3 flex-1 mb-8">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm text-gray-600">
                        <Check size={16} className="text-[#e8632a] flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="text-center">
                    <p className="text-xs text-gray-400 mb-3">Disponible après votre architecture</p>
                    <SubscribeButton plan={p.plan} highlight={p.highlight} label={p.cta} disabled={true} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-12 border border-gray-700 shadow-xl">
          <p className="text-white font-bold text-2xl mb-3">Pas sûr de quel plan choisir ?</p>
          <p className="text-gray-300 text-base mb-8 max-w-md mx-auto">L&apos;audit gratuit de 1h répond à toutes vos questions et crée un plan personnalisé.</p>
          <Link
            href="https://calendly.com/ben40nocode/1h"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#e8632a] to-[#d97757] hover:shadow-lg hover:shadow-orange-500/50 text-white px-8 py-4 rounded-xl text-base font-semibold transition-all duration-300 hover:-translate-y-0.5"
          >
            Réserver l&apos;audit gratuit <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </div>
  );
}
