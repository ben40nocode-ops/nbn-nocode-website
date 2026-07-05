import type { Metadata } from "next";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { ArchitectureButton } from "@/components/ArchitectureButton";
import { DiscoveryOffers } from "@/components/home/DiscoveryOffers";

export const metadata: Metadata = {
  title: "Tarifs — Automatisations IA, Sites Web & Web Apps",
  description: "Tarifs : automatisations IA dès 450€, websites dès 800€, web apps dès 2 500€. Maintenance dès 159€/mois. Audit gratuit. Bordeaux, Royan, Arcachon.",
  alternates: { canonical: "https://www.nbn-ia.fr/tarifs" },
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
    description: "Tarifs transparents pour automatisations IA, websites et web apps. Setup à partir de 450€ + maintenance dès 159€/mois. Audit gratuit.",
    url: "https://www.nbn-ia.fr/tarifs",
  },
};

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

const maintenance = [
  {
    name: "Suivi Essentiel",
    price: "159",
    plan: "core",
    desc: "L'essentiel pour que vos automatisations restent en bonne santé.",
    features: ["On surveille vos automatisations jour et nuit", "2h d'entretien / mois", "Support par email (48h)", "Rapport mensuel"],
    highlight: false,
    cta: "Commencer",
  },
  {
    name: "Suivi Pro",
    price: "320",
    plan: "business",
    desc: "Pour les automatisations critiques qui font tourner votre activité.",
    features: ["Surveillance renforcée de vos outils critiques", "4h d'entretien / mois", "Amélioration continue", "Support prioritaire (24h)"],
    highlight: false,
    cta: "Choisir ce plan",
  },
  {
    name: "Partenaire complet",
    price: "540",
    plan: "fullstack",
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
    name: "Application simple",
    price: "2 500",
    desc: "Un outil métier avec espace connecté",
    features: ["Espace client sécurisé", "Base de données", "3-5 fonctionnalités", "Utilisable sur mobile et ordinateur"],
  },
  {
    name: "Application avancée",
    price: "5 000",
    desc: "Un outil complet connecté à vos logiciels",
    features: ["Comptes et rôles avancés", "Mise à jour instantanée", "8+ fonctionnalités", "Tableau de bord"],
  },
  {
    name: "Sur mesure",
    price: "Custom",
    desc: "Votre outil, sans limite",
    features: ["Fonctionnalités illimitées", "Interlocuteur dédié", "Support prioritaire", "Engagement de disponibilité"],
  },
];

function PricingCard({ plan }: { plan: any }) {
  return (
    <div className={`group relative p-8 rounded-3xl bg-white hover:shadow-xl hover:shadow-orange-100 hover:-translate-y-1 transition-all duration-300 flex flex-col ${plan.badge ? "border-2 border-[#e8632a]" : "border border-gray-200 hover:border-[#e8632a]"}`}>
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#e8632a]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      {plan.badge && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#e8632a] text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">{plan.badge}</span>
      )}
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
        <ArchitectureButton label="Demander un devis" highlight={false} />
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
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Combien coûte une automatisation IA ?",
          acceptedAnswer: { "@type": "Answer", text: "Le setup d'une automatisation IA démarre à 450 € (formule Starter, pour artisans et TPE). Un système interconnecté pour PME démarre à 1 200 €. La maintenance mensuelle, optionnelle, démarre à 159 €/mois." },
        },
        {
          "@type": "Question",
          name: "Y a-t-il un engagement ?",
          acceptedAnswer: { "@type": "Answer", text: "Non. Le setup est un paiement unique et les abonnements de maintenance sont résiliables à tout moment, sans engagement." },
        },
        {
          "@type": "Question",
          name: "Qu'est-ce qui est inclus dans le prix du setup ?",
          acceptedAnswer: { "@type": "Answer", text: "La conception, le développement, les tests, la documentation et la formation sont inclus dans chaque setup." },
        },
        {
          "@type": "Question",
          name: "L'appel est-il vraiment gratuit ?",
          acceptedAnswer: { "@type": "Answer", text: "Oui. L'appel d'1h est 100 % gratuit et sans engagement : vous repartez avec un plan d'action concret, que vous travailliez avec NBN IA ensuite ou non." },
        },
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

        {/* Récapitulatif tarifs — tableau sémantique (lisible par Google & les moteurs IA) */}
        <div className="max-w-4xl mx-auto mb-24 overflow-x-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Récapitulatif des tarifs</h2>
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-200 text-left">
                <th className="py-3 pr-4 font-semibold text-gray-900">Service</th>
                <th className="py-3 pr-4 font-semibold text-gray-900">Formules</th>
                <th className="py-3 font-semibold text-gray-900">À partir de</th>
              </tr>
            </thead>
            <tbody className="text-gray-600">
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4 font-medium text-gray-900">Automatisation IA (paiement unique)</td>
                <td className="py-3 pr-4">Première automatisation · Activité autonome · Sur mesure</td>
                <td className="py-3 whitespace-nowrap">450 € · 1 200 € · sur devis</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4 font-medium text-gray-900">Entretien (abonnement optionnel / mois)</td>
                <td className="py-3 pr-4">Suivi Essentiel · Suivi Pro · Partenaire complet</td>
                <td className="py-3 whitespace-nowrap">159 € · 320 € · 540 € /mois</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4 font-medium text-gray-900">Site web</td>
                <td className="py-3 pr-4">Landing · Professional · E-commerce</td>
                <td className="py-3 whitespace-nowrap">800 € · 1 800 € · 3 500 €</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-medium text-gray-900">Application sur mesure</td>
                <td className="py-3 pr-4">Simple · Avancée · Sur mesure</td>
                <td className="py-3 whitespace-nowrap">2 500 € · 5 000 € · sur devis</td>
              </tr>
            </tbody>
          </table>
          <p className="text-xs text-gray-400 mt-4 text-center">Toutes les installations incluent conception, mise en place, tests et formation. Appel gratuit 1h, sans engagement.</p>
        </div>

        {/* Offres découverte — prix fixe, sans abonnement */}
        <DiscoveryOffers />

        {/* AUTOMATISATIONS IA */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Automatisations IA</h2>
            <p className="text-gray-500">Architecture unique + maintenance continue</p>
          </div>

          {/* Architecture */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <span className="inline-block bg-[#e8632a] text-white text-xs font-bold px-4 py-2 rounded-full">1 — Installation</span>
              <h3 className="text-2xl font-bold text-gray-900 mt-4">Vos automatisations (paiement unique)</h3>
              <p className="text-sm text-gray-500 mt-2">Conception, mise en place, tests et formation inclus</p>
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
              <span className="inline-block bg-gray-900 text-white text-xs font-bold px-4 py-2 rounded-full">2 — Entretien (optionnel)</span>
              <h3 className="text-2xl font-bold text-gray-900 mt-4">Entretien & évolution (abonnement optionnel)</h3>
              <p className="text-sm text-gray-500 mt-2">Résiliable à tout moment. Vos automatisations restent à vous, avec ou sans abonnement.</p>
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
                    <ArchitectureButton label="Demander un devis" highlight={false} />
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
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Sites internet</h2>
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

        {/* WEB APPS */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Applications sur mesure</h2>
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
              href="/contact#message"
              className="inline-block bg-[#e8632a] hover:bg-[#c4521f] text-white px-8 py-3 rounded-xl text-sm font-bold transition-colors duration-200"
            >
              Demander un devis
            </Link>
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Questions fréquentes</h2>
          <div className="space-y-4">
            {[
              { q: "Combien coûte une automatisation IA ?", a: "Le setup d'une automatisation IA démarre à 450 € (formule Starter, pour artisans et TPE). Un système interconnecté pour PME démarre à 1 200 €. La maintenance mensuelle, optionnelle, démarre à 159 €/mois." },
              { q: "Y a-t-il un engagement ?", a: "Non. Le setup est un paiement unique et les abonnements de maintenance sont résiliables à tout moment, sans engagement." },
              { q: "Qu'est-ce qui est inclus dans le prix du setup ?", a: "La conception, le développement, les tests, la documentation et la formation sont inclus dans chaque setup." },
              { q: "L'appel est-il vraiment gratuit ?", a: "Oui. L'appel d'1h est 100 % gratuit et sans engagement : vous repartez avec un plan d'action concret, que vous travailliez avec NBN IA ensuite ou non." },
            ].map((item) => (
              <div key={item.q} className="p-6 rounded-2xl border border-gray-100 bg-gray-50">
                <h3 className="text-base font-bold text-gray-900 mb-2">{item.q}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-12 border border-gray-700 shadow-xl">
          <p className="text-white font-bold text-2xl mb-3">Pas sûr de quel plan choisir ?</p>
          <p className="text-gray-300 text-base mb-8 max-w-md mx-auto">L&apos;appel gratuit d&apos;1h répond à toutes vos questions et crée un plan personnalisé.</p>
          <Link
            href="https://calendly.com/ben40nocode/1h"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#e8632a] to-[#d97757] hover:shadow-lg hover:shadow-orange-500/50 text-white px-8 py-4 rounded-xl text-base font-semibold transition-all duration-300 hover:-translate-y-0.5"
          >
            Réserver mon appel gratuit (1h) <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </div>
  );
}
