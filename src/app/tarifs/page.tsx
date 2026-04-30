import type { Metadata } from "next";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { SubscribeButton } from "@/components/SubscribeButton";
import { ArchitectureButton } from "@/components/ArchitectureButton";

export const metadata: Metadata = {
  title: "Tarifs Automatisations IA, Sites Web & Web Apps — NBN IA Bordeaux",
  description:
    "Tarifs transparents pour automatisations IA, création websites et web apps. Setup à partir de 450€ + maintenance dès 159€/mois. Devis gratuit. Bordeaux, Royan, Arcachon.",
  keywords: [
    "tarifs automatisation IA",
    "prix site web Bordeaux",
    "tarifs web app",
    "prix création site web",
    "agence web Bordeaux tarifs",
    "développement IA coût",
    "maintenance site web Bordeaux",
    "tarifs Royan Arcachon",
    "prix web app Soulac",
    "coût site web Pauillac",
    "tarifs agence Lesparre Montalivet Lacanau",
    "développement application prix Gironde",
  ],
  openGraph: {
    title: "Tarifs — Automatisations IA, Websites, Web Apps | NBN IA",
    description: "Transparent pricing for IA automation, websites & web apps. Starting from €450 setup + €159/month maintenance. Free audit.",
    url: "https://www.nbn-ia.fr/tarifs",
  },
};

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

const maintenance = [
  {
    name: "Core Maintenance",
    price: "159",
    plan: "core",
    desc: "L'essentiel pour garder vos systèmes IA en bonne santé.",
    features: ["Monitoring 24/7 de 3 systèmes IA", "2h de maintenance / mois", "Support par email (48h)", "Rapport mensuel"],
    highlight: false,
    cta: "Commencer",
  },
  {
    name: "Business Logic",
    price: "320",
    plan: "business",
    desc: "Pour les systèmes IA critiques qui font tourner votre business.",
    features: ["Monitoring proactif de 4 agents critiques", "4h de maintenance / mois", "Optimisation continue", "Support prioritaire (24h)"],
    highlight: false,
    cta: "Choisir ce plan",
  },
  {
    name: "Full Stack Partner",
    price: "540",
    plan: "fullstack",
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
  },
  {
    name: "Professional",
    price: "1 800",
    desc: "Site complet avec blog et CMS",
    features: ["5-10 pages", "CMS pour blog", "SEO avancé", "Analytics & tracking"],
  },
  {
    name: "E-commerce",
    price: "3 500",
    desc: "Boutique en ligne complète",
    features: ["Catalogue produits", "Panier sécurisé", "Gestion inventaire", "Support paiements"],
  },
];

const webapps = [
  {
    name: "Basic App",
    price: "2 500",
    desc: "Application simple avec authentification",
    features: ["Auth utilisateur", "Base de données", "3-5 fonctionnalités", "Interface responsive"],
  },
  {
    name: "Advanced App",
    price: "5 000",
    desc: "Application avancée avec intégrations",
    features: ["Auth avancée", "Sync temps réel", "8+ fonctionnalités", "Dashboard admin"],
  },
  {
    name: "Enterprise",
    price: "Custom",
    desc: "Architecture sur mesure",
    features: ["Fonctionnalités illimitées", "Architecte dédié", "Support prioritaire", "SLA performance"],
  },
];

function PricingCard({ plan }: { plan: any }) {
  return (
    <div className="group relative p-8 rounded-3xl border border-gray-200 bg-white hover:border-[#e8632a] hover:shadow-xl hover:shadow-orange-100 hover:-translate-y-1 transition-all duration-300 flex flex-col">
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#e8632a]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative">
        <h4 className="font-bold text-xl text-gray-900 mb-2">{plan.name}</h4>
        <p className="text-sm text-gray-500 mb-6">{plan.desc}</p>
        <div className="mb-6 pb-6 border-b border-gray-100">
          <span className="text-xs text-gray-500 block mb-2">À partir de</span>
          <span className="text-4xl font-bold text-[#e8632a]">{plan.price}{plan.price !== "Sur devis" && plan.price !== "Custom" ? "€" : ""}</span>
        </div>
        <ul className="space-y-3 flex-1 mb-8">
          {plan.features.map((f: string) => (
            <li key={f} className="flex items-start gap-3 text-sm text-gray-600">
              <Check size={16} className="text-[#e8632a] flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
              <span>{f}</span>
            </li>
          ))}
        </ul>
        <button className="w-full text-center py-3 rounded-xl text-sm font-bold transition-colors duration-200 border border-gray-200 hover:border-gray-300 text-gray-700 hover:bg-gray-50">
          Demander un devis
        </button>
      </div>
    </div>
  );
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Automatisations IA & Agents IA",
      provider: { "@type": "Organization", name: "NBN IA", url: "https://www.nbn-ia.fr" },
      areaServed: [
        { "@type": "City", name: "Bordeaux" },
        { "@type": "City", name: "Royan" },
        { "@type": "City", name: "Arcachon" },
        { "@type": "City", name: "Soulac" },
        { "@type": "City", name: "Pauillac" },
        { "@type": "City", name: "Lesparre" },
        { "@type": "City", name: "Montalivet" },
        { "@type": "City", name: "Lacanau" },
      ],
      description: "Architecture IA sur mesure + maintenance continue des agents IA et workflows automatisés pour PME",
      priceRange: "€€€",
      offers: [
        { "@type": "Offer", name: "Starter", price: "450", priceCurrency: "EUR" },
        { "@type": "Offer", name: "Business", price: "1200", priceCurrency: "EUR" },
        { "@type": "Offer", name: "Enterprise", price: "Sur devis", priceCurrency: "EUR" },
      ],
    },
    {
      "@type": "Service",
      name: "Création de Sites Web",
      provider: { "@type": "Organization", name: "NBN IA", url: "https://www.nbn-ia.fr" },
      areaServed: [
        { "@type": "City", name: "Bordeaux" },
        { "@type": "City", name: "Royan" },
        { "@type": "City", name: "Arcachon" },
        { "@type": "City", name: "Soulac" },
        { "@type": "City", name: "Pauillac" },
        { "@type": "City", name: "Lesparre" },
        { "@type": "City", name: "Montalivet" },
        { "@type": "City", name: "Lacanau" },
      ],
      description: "Création de sites web responsifs, performants et connectés à vos systèmes IA. Design moderne, SEO optimisé.",
      priceRange: "€€",
      offers: [
        { "@type": "Offer", name: "Landing Page", price: "800", priceCurrency: "EUR" },
        { "@type": "Offer", name: "Professional", price: "1800", priceCurrency: "EUR" },
        { "@type": "Offer", name: "E-commerce", price: "3500", priceCurrency: "EUR" },
      ],
    },
    {
      "@type": "Service",
      name: "Développement Web Apps IA",
      provider: { "@type": "Organization", name: "NBN IA", url: "https://www.nbn-ia.fr" },
      areaServed: [
        { "@type": "City", name: "Bordeaux" },
        { "@type": "City", name: "Royan" },
        { "@type": "City", name: "Arcachon" },
        { "@type": "City", name: "Soulac" },
        { "@type": "City", name: "Pauillac" },
        { "@type": "City", name: "Lesparre" },
        { "@type": "City", name: "Montalivet" },
        { "@type": "City", name: "Lacanau" },
      ],
      description: "Applications web sur mesure avec authentification, base de données et intégrations IA pour automatiser votre business.",
      priceRange: "€€€",
      offers: [
        { "@type": "Offer", name: "Basic App", price: "2500", priceCurrency: "EUR" },
        { "@type": "Offer", name: "Advanced App", price: "5000", priceCurrency: "EUR" },
        { "@type": "Offer", name: "Enterprise", price: "Custom", priceCurrency: "EUR" },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: "https://www.nbn-ia.fr" },
        { "@type": "ListItem", position: 2, name: "Tarifs", item: "https://www.nbn-ia.fr/tarifs" },
      ],
    },
  ],
};

export default function TarifsPage() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-32">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
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
        </div>

        {/* AUTOMATISATIONS IA */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Automatisations IA</h2>
            <p className="text-gray-500">Architecture unique + maintenance continue</p>
          </div>

          {/* Architecture */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <span className="inline-block bg-[#e8632a] text-white text-xs font-bold px-4 py-2 rounded-full">Étape 1</span>
              <h3 className="text-2xl font-bold text-gray-900 mt-4">Architecture IA (Setup unique)</h3>
              <p className="text-sm text-gray-500 mt-2">Conception, développement, tests et formation inclus</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {architecture.map((p) => (
                <PricingCard key={p.name} plan={p} />
              ))}
            </div>
          </div>

          {/* Maintenance */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <span className="inline-block bg-[#e8632a] text-white text-xs font-bold px-4 py-2 rounded-full">Étape 2</span>
              <h3 className="text-2xl font-bold text-gray-900 mt-4">Maintenance & Évolution (Abonnement mensuel)</h3>
              <p className="text-sm text-gray-500 mt-2">Après votre architecture, maintenez et améliorez votre système 24h/24</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {maintenance.map((p) => (
                <div key={p.name} className="group relative p-8 rounded-3xl border border-gray-200 bg-white hover:border-[#e8632a] hover:shadow-xl hover:shadow-orange-100 hover:-translate-y-1 transition-all duration-300 flex flex-col">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#e8632a]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative">
                    <h4 className="font-bold text-xl text-gray-900 mb-2">{p.name}</h4>
                    <p className="text-sm text-gray-500 mb-6">{p.desc}</p>
                    <div className="mb-6 pb-6 border-b border-gray-100">
                      <span className="text-xs text-gray-500 block mb-2">À partir de</span>
                      <span className="text-4xl font-bold text-[#e8632a]">{p.price}€</span>
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
                    <button className="w-full text-center py-3 rounded-xl text-sm font-bold transition-colors duration-200 border border-gray-200 hover:border-gray-300 text-gray-700 hover:bg-gray-50">
          Demander un devis
        </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Separator */}
        <div className="flex justify-center mb-20">
          <div className="h-1 bg-[#e8632a] rounded-full" style={{ width: "900px" }}></div>
        </div>

        {/* WEBSITES */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Websites</h2>
            <p className="text-gray-500">Architecture unique + maintenance continue</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {websites.map((p) => (
              <PricingCard key={p.name} plan={p} />
            ))}
          </div>

          {/* Maintenance banner */}
          <div className="bg-orange-50 border-2 border-[#e8632a] rounded-2xl p-8 text-center">
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

        {/* WEB APPS */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Web Apps</h2>
            <p className="text-gray-500">Architecture unique + maintenance continue</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {webapps.map((p) => (
              <PricingCard key={p.name} plan={p} />
            ))}
          </div>

          {/* Maintenance banner */}
          <div className="bg-orange-50 border-2 border-[#e8632a] rounded-2xl p-8 text-center">
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
