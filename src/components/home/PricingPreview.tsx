import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Core Maintenance",
    price: "159",
    desc: "L'essentiel pour garder vos systèmes IA en bonne santé.",
    features: ["Monitoring 24/7 de 3 systèmes IA", "2h de maintenance / mois", "Support par email (48h)", "Rapport mensuel"],
    highlight: false,
    cta: "Commencer",
  },
  {
    name: "Business Logic",
    price: "320",
    desc: "Pour les systèmes IA critiques qui font tourner votre business.",
    features: ["Monitoring proactif de 4 agents critiques", "4h de maintenance / mois", "Optimisation continue", "Support prioritaire (24h)"],
    highlight: false,
    cta: "Choisir ce plan",
  },
  {
    name: "Full Stack Partner",
    price: "540",
    desc: "Un architecte IA dédié à l'évolution de votre système.",
    features: ["Monitoring illimité", "6h de dev/maintenance / mois", "Évolution constante des agents", "Accès direct Slack"],
    highlight: false,
    cta: "Devenir partenaire",
  },
];

const websites = [
  {
    name: "Landing Page",
    price: "800",
    desc: "Présence web professionnelle pour PME",
    features: ["1-3 pages optimisées", "Design responsive", "Formulaire de contact", "SEO basique"],
    highlight: false,
    cta: "Demander un devis",
  },
  {
    name: "Professional",
    price: "1 800",
    desc: "Site complet avec blog et CMS",
    features: ["5-10 pages", "CMS pour blog", "SEO avancé", "Analytics & tracking"],
    highlight: false,
    cta: "Demander un devis",
  },
  {
    name: "E-commerce",
    price: "3 500",
    desc: "Boutique en ligne complète",
    features: ["Catalogue produits", "Panier sécurisé", "Gestion inventaire", "Support paiements"],
    highlight: false,
    cta: "Demander un devis",
  },
];

const webapps = [
  {
    name: "Basic App",
    price: "2 500",
    desc: "Application simple avec authentification",
    features: ["Auth utilisateur", "Base de données", "3-5 fonctionnalités", "Interface responsive"],
    highlight: false,
    cta: "Demander un devis",
  },
  {
    name: "Advanced App",
    price: "5 000",
    desc: "Application avancée avec intégrations",
    features: ["Auth avancée", "Sync temps réel", "8+ fonctionnalités", "Dashboard admin"],
    highlight: false,
    cta: "Demander un devis",
  },
  {
    name: "Enterprise",
    price: "Custom",
    desc: "Architecture sur mesure",
    features: ["Fonctionnalités illimitées", "Architecte dédié", "Support prioritaire", "SLA performance"],
    highlight: false,
    cta: "Contacter nous",
  },
];

const architecture = [
  {
    name: "Starter",
    price: "450",
    desc: "1 agent IA ou automatisation — artisans et TPE",
    features: ["1 workflow Make/Zapier", "Connexion 2 outils", "Tests & documentation", "Onboarding 1h"],
  },
  {
    name: "Business",
    price: "1 200",
    desc: "Système interconnecté sur un process clé — PME",
    features: ["3 workflows interconnectés", "Connexion jusqu'à 6 outils", "Agent IA simple", "Formation équipe 2h"],
  },
  {
    name: "Enterprise",
    price: "Sur devis",
    desc: "Architecture complète avec agents IA avancés",
    features: ["Architecture illimitée", "Agents Claude sur mesure", "CRM & base de données", "Support dédié"],
  },
];

export function PricingPreview() {
  return (
    <section id="pricing" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-xs font-semibold text-[#e8632a] uppercase tracking-widest mb-3">
            Automatisations IA
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 max-w-xl mx-auto leading-snug">
            Setup unique. Maintenance continue.
          </h2>
          <p className="mt-4 text-gray-500 max-w-md mx-auto">
            Étape 1: On conçoit votre architecture. Étape 2: On la maintient et l'améliore en continu.
          </p>
        </div>

        {/* STEP 1: Architecture Setup */}
        <div className="mb-20">
          <div className="text-center mb-8">
            <span className="inline-block bg-[#e8632a] text-white text-xs font-bold px-4 py-2 rounded-full">Étape 1</span>
            <h3 className="text-2xl font-bold text-gray-900 mt-4">Architecture IA (Setup unique)</h3>
            <p className="text-sm text-gray-500 mt-2">Conception, développement, tests et formation inclus</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {architecture.map((plan) => (
              <div key={plan.name} className="relative p-7 rounded-2xl flex flex-col transition-all duration-200 border border-gray-200 bg-white hover:border-[#e8632a] hover:shadow-lg hover:shadow-orange-100">
                <h4 className="text-sm font-bold text-gray-900 mb-1">{plan.name}</h4>
                <p className="text-xs text-gray-400 mb-6">{plan.desc}</p>

                <div className="mb-6 pb-6 border-b border-gray-100">
                  <span className="text-xs text-gray-500 block mb-2">À partir de</span>
                  <span className="text-4xl font-bold text-[#e8632a]">{plan.price}{plan.price !== "Sur devis" ? "€" : ""}</span>
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
                  className="w-full text-center py-3 rounded-xl text-sm font-bold transition-colors duration-200 border border-gray-200 hover:border-gray-300 text-gray-700 hover:bg-gray-50"
                >
                  Demander un devis
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* STEP 2: Maintenance Subscription */}
        <div className="mb-20">
          <div className="text-center mb-8">
            <span className="inline-block bg-[#e8632a] text-white text-xs font-bold px-4 py-2 rounded-full">Étape 2</span>
            <h3 className="text-2xl font-bold text-gray-900 mt-4">Maintenance & Évolution (Abonnement mensuel)</h3>
            <p className="text-sm text-gray-500 mt-2">Après votre architecture, maintenez et améliorez votre système 24h/24</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <div key={plan.name} className="relative p-7 rounded-2xl flex flex-col transition-all duration-200 border border-gray-200 bg-white hover:border-[#e8632a] hover:shadow-lg hover:shadow-orange-100">
                <h4 className="text-sm font-bold text-gray-900 mb-1">{plan.name}</h4>
                <p className="text-xs text-gray-400 mb-6">{plan.desc}</p>

                <div className="mb-6 pb-6 border-b border-gray-100">
                  <span className="text-xs text-gray-500 block mb-2">À partir de</span>
                  <span className="text-4xl font-bold text-[#e8632a]">{plan.price}€</span>
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
                  className="w-full text-center py-3 rounded-xl text-sm font-bold transition-colors duration-200 border border-gray-200 hover:border-gray-300 text-gray-700 hover:bg-gray-50"
                >
                  Demander un devis
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Separator */}
        <div className="flex justify-center mb-20">
          <div className="h-1 bg-[#e8632a] rounded-full" style={{ width: "900px" }}></div>
        </div>

        {/* Websites */}
        <div className="mb-20">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900">Websites</h3>
            <p className="text-sm text-gray-500 mt-2">Architecture sur mesure + maintenance continue</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {websites.map((plan) => (
              <div key={plan.name} className="relative p-7 rounded-2xl flex flex-col transition-all duration-200 border border-gray-200 bg-white hover:border-[#e8632a] hover:shadow-lg hover:shadow-orange-100">
                <h4 className="text-sm font-bold text-gray-900 mb-1">{plan.name}</h4>
                <p className="text-xs text-gray-400 mb-6">{plan.desc}</p>

                <div className="mb-6 pb-6 border-b border-gray-100">
                  <span className="text-xs text-gray-500 block mb-2">À partir de</span>
                  <span className="text-4xl font-bold text-[#e8632a]">{plan.price}€</span>
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
                  className="w-full text-center py-3 rounded-xl text-sm font-bold transition-colors duration-200 border border-gray-200 hover:border-gray-300 text-gray-700 hover:bg-gray-50"
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>

          {/* Maintenance banner */}
          <div className="mt-8 bg-orange-50 border-2 border-[#e8632a] rounded-2xl p-8 text-center">
            <h4 className="text-lg font-bold text-gray-900 mb-2">Forfait maintenance sur mesure</h4>
            <p className="text-sm text-gray-600 mb-6">Gardez vos sites à jour, sécurisés et optimisés en permanence</p>
            <Link
              href="https://calendly.com/ben40nocode/1h"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#e8632a] hover:bg-[#c4521f] text-white px-8 py-3 rounded-xl text-sm font-bold transition-colors duration-200"
            >
              Demander un devis
            </Link>
          </div>
        </div>

        {/* Separator */}
        <div className="flex justify-center mb-20 mt-20">
          <div className="h-1 bg-[#e8632a] rounded-full" style={{ width: "900px" }}></div>
        </div>

        {/* Web Apps */}
        <div className="mb-20">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900">Web Apps</h3>
            <p className="text-sm text-gray-500 mt-2">Architecture sur mesure + maintenance continue</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {webapps.map((plan) => (
              <div key={plan.name} className="relative p-7 rounded-2xl flex flex-col transition-all duration-200 border border-gray-200 bg-white hover:border-[#e8632a] hover:shadow-lg hover:shadow-orange-100">
                <h4 className="text-sm font-bold text-gray-900 mb-1">{plan.name}</h4>
                <p className="text-xs text-gray-400 mb-6">{plan.desc}</p>

                <div className="mb-6 pb-6 border-b border-gray-100">
                  <span className="text-xs text-gray-500 block mb-2">À partir de</span>
                  <span className="text-4xl font-bold text-[#e8632a]">{plan.price}{plan.price !== "Custom" ? "€" : ""}</span>
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
                  className="w-full text-center py-3 rounded-xl text-sm font-bold transition-colors duration-200 border border-gray-200 hover:border-gray-300 text-gray-700 hover:bg-gray-50"
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>

          {/* Maintenance banner */}
          <div className="mt-8 bg-orange-50 border-2 border-[#e8632a] rounded-2xl p-8 text-center">
            <h4 className="text-lg font-bold text-gray-900 mb-2">Forfait maintenance sur mesure</h4>
            <p className="text-sm text-gray-600 mb-6">Gardez vos apps à jour, sécurisées et optimisées en permanence</p>
            <Link
              href="https://calendly.com/ben40nocode/1h"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#e8632a] hover:bg-[#c4521f] text-white px-8 py-3 rounded-xl text-sm font-bold transition-colors duration-200"
            >
              Demander un devis
            </Link>
          </div>
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
