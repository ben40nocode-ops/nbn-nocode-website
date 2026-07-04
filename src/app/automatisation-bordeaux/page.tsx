import type { Metadata } from "next";
import { localBusinessSchema, simpleBreadcrumb } from "@/lib/seo-schemas";
import Link from "next/link";
import { Check, ArrowRight, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Automatisation & Agents IA à Bordeaux",
  description: "Expert agents IA et automatisation à Bordeaux. Faites tourner vos process sans recruter. Make, Claude AI, Airtable. Audit gratuit 1h pour PME bordelaises.",
  keywords: ["automatisation Bordeaux", "agent IA Bordeaux", "consultant automatisation Bordeaux", "Claude AI Bordeaux", "PME Bordeaux automatisation", "Make Bordeaux", "automatisation process PME"],
  alternates: { canonical: "https://www.nbn-ia.fr/automatisation-bordeaux" },
  openGraph: {
    title: "Automatisation & Agents IA à Bordeaux — NBN IA",
    description: "Expert agents IA & Claude AI pour PME bordelaises. Setup sur mesure, maintenance mensuelle.",
    url: "https://www.nbn-ia.fr/automatisation-bordeaux",
  },
};

const faqs = [
  {
    q: "Combien coûte une automatisation pour une PME à Bordeaux ?",
    a: "Un setup démarre à 450€ HT pour une automatisation simple (rappels RDV, relances clients, synchronisation d'outils). Les architectures complètes avec agents IA sont sur devis. La maintenance mensuelle commence à 159€/mois, sans engagement.",
  },
  {
    q: "Quels outils utilisez-vous pour automatiser à Bordeaux ?",
    a: "On travaille principalement avec Make (ex-Integromat), Claude AI (Anthropic), Airtable, n8n et les APIs de vos outils existants. On choisit la stack selon votre besoin, pas l'inverse.",
  },
  {
    q: "Faut-il des compétences techniques pour travailler avec vous ?",
    a: "Non. Vous décrivez vos process en langage courant, on s'occupe de tout. Vous voyez le résultat — pas le code. Vous n'avez besoin d'aucune équipe technique de votre côté.",
  },
  {
    q: "Vous intervenez en présentiel à Bordeaux ?",
    a: "Oui. On peut se retrouver à Bordeaux ou dans le triangle Bordeaux / Royan / Arcachon. La majorité du travail se fait à distance, mais le premier audit peut se faire sur place si vous préférez.",
  },
  {
    q: "En combien de temps une automatisation est-elle opérationnelle ?",
    a: "Entre 48h et 2 semaines selon la complexité. Une automatisation simple (envoi automatique de devis, synchronisation CRM) est souvent live en 2 jours. Un système multi-agents avec plusieurs workflows connectés prend 2 à 4 semaines.",
  },
  {
    q: "Qu'est-ce qu'un agent IA concrètement pour une PME bordelaise ?",
    a: "Un agent IA est un programme qui perçoit des événements dans votre business (un email reçu, une commande créée, un formulaire rempli), prend une décision et agit sans que vous ayez à intervenir. Par exemple : un agent lit vos emails entrants, identifie les demandes de devis, extrait les informations clés et les enregistre automatiquement dans votre CRM.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Automatisation & Agents IA à Bordeaux",
      provider: { "@type": "Organization", name: "NBN IA", url: "https://www.nbn-ia.fr" },
      areaServed: { "@type": "City", name: "Bordeaux" },
      description: "Conception d'architectures d'automatisation et d'agents IA sur mesure pour les PME de Bordeaux et de Gironde.",
      offers: { "@type": "Offer", priceCurrency: "EUR", price: "450", priceSpecification: { "@type": "UnitPriceSpecification", priceCurrency: "EUR", price: "450", unitText: "setup" } },
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: { "@type": "Answer", text: faq.a },
      })),
    },
    localBusinessSchema({
      city: "Bordeaux",
      pageUrl: "https://www.nbn-ia.fr/automatisation-bordeaux",
      name: "NBN IA — Automatisation & Agents IA Bordeaux",
      description: "Conception d'agents IA et d'architectures d'automatisation sur mesure pour les PME de Bordeaux et de Gironde. Setup à partir de 450€, maintenance mensuelle.",
    }),
    simpleBreadcrumb("Automatisation IA Bordeaux", "https://www.nbn-ia.fr/automatisation-bordeaux"),
  ],
};

const casUsage = [
  {
    secteur: "Restaurateur / Hôtelier",
    probleme: "Confirmation de réservations manuelle, relances oubliées, planning à jour difficile à tenir.",
    solution: "Agent IA qui confirme automatiquement par SMS/email, relance les no-shows, met à jour le planning en temps réel.",
    gain: "1h30 gagnée par jour, zéro oubli.",
  },
  {
    secteur: "Artisan / TPE du bâtiment",
    probleme: "Devis chronophages, prospects qui ne rappellent pas, suivi chantier dans des tableurs.",
    solution: "Système qui génère les devis depuis un formulaire, relance automatiquement à J+3 et J+7, centralise les chantiers dans un CRM simple.",
    gain: "3 à 5 heures récupérées par semaine.",
  },
  {
    secteur: "Agence / Cabinet de conseil",
    probleme: "Onboarding client répétitif, reporting manuel chaque semaine, emails de suivi à rédiger un par un.",
    solution: "Pipeline d'onboarding automatisé, rapport hebdomadaire généré et envoyé par IA, emails de suivi rédigés et envoyés selon des déclencheurs.",
    gain: "L'équipe se concentre sur les missions, pas sur l'administratif.",
  },
];

export default function BordeauxPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="min-h-screen bg-white pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-6">

          {/* Header */}
          <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-100 text-[#e8632a] rounded-full px-4 py-1.5 text-xs font-semibold mb-8 tracking-wide uppercase">
            <MapPin size={12} /> Bordeaux & Gironde
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Automatisation & Agents IA<br />
            <span className="text-[#e8632a]">pour les PME de Bordeaux</span>
          </h1>

          <p className="text-lg text-gray-500 max-w-2xl mb-6 leading-relaxed">
            Chaque semaine, des PME bordelaises perdent entre 5 et 20 heures sur des tâches répétitives : relances clients, saisie de données, synchronisation d&apos;outils, rapports manuels. On conçoit les systèmes IA qui font ce travail à leur place — 24h/24, sans erreur, sans recrutement.
          </p>

          <p className="text-base text-gray-500 max-w-2xl mb-10 leading-relaxed">
            NBN IA est basé dans le triangle Bordeaux · Royan · Arcachon. On intervient en présentiel ou à distance, selon votre préférence. Spécialisé Claude AI (Anthropic), Make et les architectures d&apos;agents autonomes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-20">
            <Link
              href="https://calendly.com/ben40nocode/1h"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#e8632a] hover:bg-[#c4521f] text-white px-7 py-4 rounded-xl font-semibold text-base transition-colors"
            >
              Audit gratuit à Bordeaux <ArrowRight size={17} />
            </Link>
            <Link href="/tarifs" className="inline-flex items-center gap-2 border border-gray-200 hover:border-gray-300 text-gray-700 px-7 py-4 rounded-xl font-semibold text-base transition-colors hover:bg-gray-50">
              Voir les tarifs
            </Link>
          </div>

          {/* Ce qu'on automatise */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Ce qu&apos;on automatise pour les entreprises bordelaises</h2>
              <ul className="space-y-3">
                {[
                  "Gestion des leads et CRM automatisé",
                  "Facturation, devis et relances clients",
                  "Synchronisation entre outils (Airtable, Notion, Gmail…)",
                  "Agents IA pour traiter vos emails et documents",
                  "Reporting automatique hebdomadaire",
                  "Onboarding client sans intervention manuelle",
                  "Qualification automatique des prospects entrants",
                  "Alertes et notifications intelligentes",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-gray-600">
                    <Check size={15} className="text-[#e8632a] flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-50 rounded-2xl p-7">
              <h2 className="text-lg font-bold text-gray-900 mb-3">Pourquoi NBN IA à Bordeaux ?</h2>
              <ul className="space-y-3 text-sm text-gray-600">
                {[
                  "Basé dans le triangle Bordeaux / Royan / Arcachon",
                  "Spécialisé Claude AI — le modèle IA le plus avancé pour les agents",
                  "Certifié Anthropic — expert agents IA Claude",
                  "Disponible en présentiel ou 100% remote",
                  "Audit gratuit sans engagement",
                  "Maintenance mensuelle incluse dans l'abonnement",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <Check size={15} className="text-[#e8632a] flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Comment ça marche */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Comment on travaille avec les PME de Bordeaux</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { step: "01", title: "Audit gratuit 1h", desc: "On cartographie ensemble vos process : ce qui prend du temps, ce qui peut être automatisé, ce qui ne peut pas l'être. Pas de jargon, pas d'engagement." },
                { step: "02", title: "Setup sur mesure", desc: "On conçoit et déploie votre architecture : agents IA, workflows Make, connexions API. Livraison en 48h à 2 semaines selon la complexité." },
                { step: "03", title: "Maintenance continue", desc: "On surveille, on ajuste, on fait évoluer. Vous avez un accès direct pour toute modification. Résiliable à tout moment." },
              ].map(({ step, title, desc }) => (
                <div key={step} className="bg-white border border-gray-100 rounded-2xl p-6">
                  <div className="text-3xl font-black text-orange-100 mb-3">{step}</div>
                  <h3 className="text-base font-bold text-gray-900 mb-2">{title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Cas d'usage */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Cas concrets à Bordeaux et en Gironde</h2>
            <p className="text-gray-500 text-sm mb-8">Exemples de systèmes déployés pour des entreprises locales.</p>
            <div className="flex flex-col gap-6">
              {casUsage.map(({ secteur, probleme, solution, gain }) => (
                <div key={secteur} className="border border-gray-100 rounded-2xl p-7">
                  <div className="inline-flex items-center bg-orange-50 text-[#e8632a] text-xs font-semibold px-3 py-1 rounded-full mb-4">{secteur}</div>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="font-semibold text-gray-700 mb-1">Problème</p>
                      <p className="text-gray-500">{probleme}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-700 mb-1">Solution déployée</p>
                      <p className="text-gray-500">{solution}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-700 mb-1">Résultat</p>
                      <p className="text-[#e8632a] font-semibold">{gain}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Questions fréquentes — automatisation IA à Bordeaux</h2>
            <div className="flex flex-col gap-4">
              {faqs.map(({ q, a }) => (
                <div key={q} className="border border-gray-100 rounded-xl p-6">
                  <p className="font-semibold text-gray-900 mb-2 text-sm">{q}</p>
                  <p className="text-sm text-gray-500 leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gray-900 rounded-2xl p-10 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">1 heure pour cartographier vos process</h2>
            <p className="text-gray-400 mb-8 max-w-md mx-auto">L&apos;audit est gratuit, sans engagement. On se retrouve à Bordeaux ou en visio.</p>
            <Link
              href="https://calendly.com/ben40nocode/1h"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#e8632a] hover:bg-[#c4521f] text-white px-8 py-4 rounded-xl font-bold text-sm transition-colors"
            >
              Réserver l&apos;audit gratuit <ArrowRight size={15} />
            </Link>
          </div>

        </div>
      </div>
    </>
  );
}
