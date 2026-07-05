import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Suivi Essentiel",
    price: "159",
    desc: "L'essentiel pour que vos automatisations restent en bonne santé.",
    features: ["On surveille vos automatisations jour et nuit", "2h d'entretien / mois", "Support par email (48h)", "Rapport mensuel"],
    highlight: false,
    cta: "Commencer",
  },
  {
    name: "Suivi Pro",
    price: "320",
    desc: "Pour les automatisations critiques qui font tourner votre activité.",
    features: ["Surveillance renforcée de vos outils critiques", "4h d'entretien / mois", "Amélioration continue", "Support prioritaire (24h)"],
    highlight: false,
    cta: "Choisir ce plan",
  },
  {
    name: "Partenaire complet",
    price: "540",
    desc: "Votre expert dédié qui fait évoluer vos outils en continu.",
    features: ["Surveillance illimitée", "6h de travail sur vos outils / mois", "Vos automatisations évoluent avec vous", "Accès direct WhatsApp"],
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
    name: "Application simple",
    price: "2 500",
    desc: "Un outil métier avec espace connecté",
    features: ["Espace client sécurisé", "Base de données", "3-5 fonctionnalités", "Utilisable sur mobile et ordinateur"],
    highlight: false,
    cta: "Demander un devis",
  },
  {
    name: "Application avancée",
    price: "5 000",
    desc: "Un outil complet connecté à vos logiciels",
    features: ["Comptes et rôles avancés", "Mise à jour instantanée", "8+ fonctionnalités", "Tableau de bord"],
    highlight: false,
    cta: "Demander un devis",
  },
  {
    name: "Sur mesure",
    price: "Custom",
    desc: "Votre outil, sans limite",
    features: ["Fonctionnalités illimitées", "Interlocuteur dédié", "Support prioritaire", "Engagement de disponibilité"],
    highlight: false,
    cta: "Nous contacter",
  },
];

const architecture = [
  {
    name: "Première automatisation",
    price: "450",
    badge: "",
    desc: "Un problème réglé — artisans et TPE",
    features: ["1 automatisation clé en main", "2 de vos outils connectés", "Tests & mode d'emploi écrit", "Prise en main 1h"],
  },
  {
    name: "Mon activité tourne seule",
    price: "1 200",
    badge: "Le plus choisi",
    desc: "Tout un pan de votre activité automatisé — PME",
    features: ["3 automatisations reliées entre elles", "Jusqu'à 6 outils connectés", "Assistant IA simple", "Formation de votre équipe 2h"],
  },
  {
    name: "Sur mesure",
    price: "Sur devis",
    badge: "",
    desc: "Tout votre back-office automatisé",
    features: ["Sans limite", "Assistants IA Claude sur mesure", "CRM & base de données", "Support dédié"],
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
            On installe une fois. On entretient ensuite.
          </h2>
          <p className="mt-4 text-gray-500 max-w-md mx-auto">
            1 : j&apos;installe vos automatisations. 2 : je les entretiens et les améliore — seulement si vous le souhaitez.
          </p>
        </div>

        {/* STEP 1: Architecture Setup */}
        <div className="mb-20">
          <div className="text-center mb-8">
            <span className="inline-block bg-[#e8632a] text-white text-xs font-bold px-4 py-2 rounded-full">1 — Installation</span>
            <h3 className="text-2xl font-bold text-gray-900 mt-4">Vos automatisations (paiement unique)</h3>
            <p className="text-sm text-gray-500 mt-2">Conception, mise en place, tests et formation inclus</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {architecture.map((plan) => (
              <div key={plan.name} className={`relative p-7 rounded-2xl flex flex-col transition-all duration-200 bg-white hover:shadow-lg hover:shadow-orange-100 ${plan.badge ? "border-2 border-[#e8632a]" : "border border-gray-200 hover:border-[#e8632a]"}`}>
                {plan.badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#e8632a] text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">{plan.badge}</span>
                )}
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
                  href="/contact#message"
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
            <span className="inline-block bg-gray-900 text-white text-xs font-bold px-4 py-2 rounded-full">2 — Entretien (optionnel)</span>
            <h3 className="text-2xl font-bold text-gray-900 mt-4">Entretien & évolution (abonnement optionnel)</h3>
            <p className="text-sm text-gray-500 mt-2">Résiliable à tout moment. Vos automatisations restent à vous, avec ou sans abonnement.</p>
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
                  href="/contact#message"
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
            <h3 className="text-2xl font-bold text-gray-900">Sites internet</h3>
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
                  href="/contact#message"
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
              href="/contact#message"
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
            <h3 className="text-2xl font-bold text-gray-900">Applications sur mesure</h3>
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
                  href="/contact#message"
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
              href="/contact#message"
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
