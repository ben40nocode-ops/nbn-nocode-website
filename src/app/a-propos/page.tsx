import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin, Award, Zap, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "À propos — Benjamin Bertigny, AI Systems Builder",
  description:
    "Benjamin Bertigny, AI systems builder basé à Bordeaux. Formé chez Alegria Academy, certifié Anthropic Architecture. Fondateur de NBN IA — systèmes IA autonomes pour PME.",
  keywords: [
    "Benjamin Bertigny",
    "AI systems builder Bordeaux",
    "fondateur NBN IA",
    "certifié Anthropic",
    "Alegria Academy",
    "architecte IA Bordeaux",
    "expert agents IA France",
  ],
  alternates: { canonical: "https://www.nbn-ia.fr/a-propos" },
  openGraph: {
    title: "À propos — Benjamin Bertigny, AI Systems Builder | NBN IA",
    description:
      "Formé chez Alegria Academy, certifié Anthropic Architecture. Fondateur de NBN IA — systèmes IA autonomes pour PME en France.",
    url: "https://www.nbn-ia.fr/a-propos",
    type: "profile",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://www.nbn-ia.fr/#founder",
      name: "Benjamin Bertigny",
      jobTitle: "AI Systems Builder",
      description:
        "Fondateur de NBN IA. Formé chez Alegria Academy et certifié Anthropic Architecture. Spécialisé dans la conception de systèmes IA autonomes pour PME : agents Claude sur mesure, orchestration multi-agents, vibe coding avec Claude Code. Basé dans le triangle Bordeaux · Royan · Arcachon.",
      url: "https://www.nbn-ia.fr/a-propos",
      email: "contact@nbn-ia.fr",
      image: "https://www.nbn-ia.fr/og-image.png",
      worksFor: { "@id": "https://www.nbn-ia.fr/#organization" },
      sameAs: [
        "https://www.linkedin.com/in/benjamin-bertigny-3a4b34217/",
        "https://www.linkedin.com/company/nbn-nocode",
      ],
      hasCredential: [
        {
          "@type": "EducationalOccupationalCredential",
          name: "Formation Alegria Academy — AI Systems",
          credentialCategory: "certificate",
          recognizedBy: { "@type": "Organization", name: "Alegria Academy" },
        },
        {
          "@type": "EducationalOccupationalCredential",
          name: "Anthropic Architecture Certification",
          credentialCategory: "certificate",
          recognizedBy: { "@type": "Organization", name: "Anthropic" },
        },
      ],
      knowsAbout: [
        "Claude AI",
        "Claude Code",
        "Agents IA",
        "Systèmes IA Autonomes",
        "Vibe Coding",
        "Orchestration IA",
        "IA Générative",
        "Make",
        "n8n",
        "Next.js",
        "MCP",
        "Anthropic",
        "AI Systems Engineering",
        "Agent Orchestration",
        "LLM Workflows",
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: "https://www.nbn-ia.fr" },
        { "@type": "ListItem", position: 2, name: "À propos", item: "https://www.nbn-ia.fr/a-propos" },
      ],
    },
  ],
};

export default function AProposPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-white pt-24 pb-32">
        <div className="max-w-3xl mx-auto px-6">

          {/* Header */}
          <div className="mb-12">
            <p className="text-xs text-[#e8632a] uppercase tracking-widest mb-4 font-semibold">
              À propos
            </p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">
              Benjamin Bertigny
            </h1>
            <p className="text-xl text-gray-500 leading-relaxed">
              AI Systems Builder — Fondateur de NBN IA
            </p>
          </div>

          {/* Bio principale */}
          <div className="prose prose-gray max-w-none mb-12">
            <p className="text-base text-gray-600 leading-relaxed mb-4">
              Je construis des systèmes IA qui travaillent à la place des PME. Pas des automatisations simples — des architectures d&apos;agents autonomes qui perçoivent, décident et agissent sans intervention humaine, 24h/24, 7j/7.
            </p>
            <p className="text-base text-gray-600 leading-relaxed mb-4">
              Basé dans le triangle <strong>Bordeaux · Royan · Arcachon</strong>, j&apos;interviens en présentiel ou à distance partout en France. Ma spécialité : utiliser <strong>Claude (Anthropic)</strong> — le modèle IA le plus avancé pour les agents — combiné à Make, n8n, et des architectures custom pour créer des systèmes qui ne ressemblent ni à une agence de dev, ni à une agence nocode.
            </p>
            <p className="text-base text-gray-600 leading-relaxed">
              Ma conviction : l&apos;IA doit travailler pour vous, pas l&apos;inverse. Je ne livre pas des workflows. Je livre un système qui tourne, s&apos;adapte, et que je maintiens dans le temps.
            </p>
          </div>

          {/* Credentials */}
          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            <div className="p-6 rounded-2xl border border-gray-100 bg-gray-50">
              <div className="flex items-center gap-3 mb-3">
                <Award size={18} className="text-[#e8632a]" />
                <h2 className="text-sm font-bold text-gray-900">Formation Alegria Academy</h2>
              </div>
              <p className="text-sm text-gray-500">
                Formation spécialisée en conception de systèmes IA et orchestration d&apos;agents autonomes pour cas d&apos;usage business.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-gray-100 bg-gray-50">
              <div className="flex items-center gap-3 mb-3">
                <Award size={18} className="text-[#e8632a]" />
                <h2 className="text-sm font-bold text-gray-900">Certifié Anthropic Architecture</h2>
              </div>
              <p className="text-sm text-gray-500">
                Certification officielle Anthropic en architecture d&apos;agents Claude — conception, orchestration et déploiement de systèmes IA avancés.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-gray-100 bg-gray-50">
              <div className="flex items-center gap-3 mb-3">
                <Zap size={18} className="text-[#e8632a]" />
                <h2 className="text-sm font-bold text-gray-900">Stack technique</h2>
              </div>
              <p className="text-sm text-gray-500">
                Claude AI · Claude Code · Make · n8n · Next.js · Vercel · Supabase · Airtable · MCP · APIs REST
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-gray-100 bg-gray-50">
              <div className="flex items-center gap-3 mb-3">
                <Users size={18} className="text-[#e8632a]" />
                <h2 className="text-sm font-bold text-gray-900">Pensé pour votre secteur</h2>
              </div>
              <p className="text-sm text-gray-500">
                Restaurateurs, artisans, hôteliers, agences, cabinets conseil — secteurs variés, même conviction : l&apos;IA doit être utile dès le premier mois.
              </p>
            </div>
          </div>

          {/* Zone intervention */}
          <div className="p-6 rounded-2xl border border-gray-100 bg-gray-50 mb-12">
            <div className="flex items-center gap-3 mb-3">
              <MapPin size={18} className="text-[#e8632a]" />
              <h2 className="text-sm font-bold text-gray-900">Zone d&apos;intervention</h2>
            </div>
            <p className="text-sm text-gray-500">
              Basé à <strong>Bordeaux</strong> — intervention en présentiel dans le triangle Bordeaux · Royan · Arcachon (Gironde, Charente-Maritime, Médoc). Et 100% remote partout en France.
            </p>
          </div>

          {/* Liens */}
          <div className="flex flex-wrap gap-4 mb-12">
            <a
              href="https://www.linkedin.com/in/benjamin-bertigny-3a4b34217/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-gray-200 hover:border-gray-300 text-gray-700 px-5 py-3 rounded-xl text-sm font-semibold transition-colors hover:bg-gray-50"
            >
              LinkedIn perso
            </a>
            <a
              href="https://www.linkedin.com/company/nbn-nocode"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-gray-200 hover:border-gray-300 text-gray-700 px-5 py-3 rounded-xl text-sm font-semibold transition-colors hover:bg-gray-50"
            >
              Page NBN IA
            </a>
            <a
              href="mailto:contact@nbn-ia.fr"
              className="inline-flex items-center gap-2 border border-gray-200 hover:border-gray-300 text-gray-700 px-5 py-3 rounded-xl text-sm font-semibold transition-colors hover:bg-gray-50"
            >
              contact@nbn-ia.fr
            </a>
          </div>

          {/* CTA */}
          <div className="bg-gray-900 rounded-2xl p-8 text-center">
            <p className="text-white font-bold text-lg mb-2">
              Vous avez un projet d&apos;automatisation ?
            </p>
            <p className="text-gray-400 text-sm mb-6">
              Audit gratuit 1h — on identifie ensemble les 3 automatisations les plus rentables pour votre activité.
            </p>
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
    </>
  );
}
