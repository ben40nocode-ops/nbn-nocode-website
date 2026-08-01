import type { Metadata } from "next";
import Link from "next/link";
import { Check, ArrowRight, Layers } from "lucide-react";

export const metadata: Metadata = {
  title: "Création d'Application Web à Royan — Web App & IA",
  description: "Création d'application web sur mesure à Royan : espace client, réservation, gestion. Web apps IA dès 2 500 €. Audit gratuit 1h, sans engagement.",
  keywords: [
    "création application Royan",
    "création application web Royan",
    "web app Royan",
    "développement application Royan",
    "application IA Royan",
    "web application sur mesure Royan",
    "agence web Royan",
    "application interactive côte atlantique",
    "web app Bordeaux Arcachon",
    "app Soulac Montalivet Lacanau",
    "développement Pauillac Lesparre",
    "application IA Gironde",
  ],
  alternates: { canonical: "https://www.nbn-ia.fr/web-app-royan" },
  openGraph: {
    title: "Création d'Application Web à Royan — NBN IA",
    description: "Création d'applications web et web apps IA à Royan. Sur mesure, sécurisées, performantes.",
    url: "https://www.nbn-ia.fr/web-app-royan",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Développement Web App IA à Royan",
  provider: { "@type": "Organization", name: "NBN IA", url: "https://www.nbn-ia.fr" },
  areaServed: { "@type": "City", name: "Royan" },
  description: "Développement d'applications web sur mesure avec authentification, base de données, intégrations IA et APIs pour les PME de Royan.",
};

export default function WebAppRoyanPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="min-h-screen pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-6">

          <div className="inline-flex items-center gap-2 bg-[#FCE9DF] text-[#E64A12] rounded-full px-4 py-1.5 text-[11px] font-bold mb-8 tracking-[0.16em] uppercase">
            <Layers size={12} /> Web App IA — Royan
          </div>

          <h1 className="text-4xl md:text-[3.4rem] font-extrabold text-[#0E1116] leading-[1.04] tracking-[-0.03em] mb-6">
            Création d&apos;application web sur mesure à Royan<br />
            <span className="text-[#FF5A1F]">alimentée par vos agents IA</span>
          </h1>

          <p className="text-lg text-[#6B7280] max-w-2xl mb-10 leading-relaxed">
            On développe des applications web complètes — authentification, base de données, interfaces modernes. Mais surtout, on les connecte à vos systèmes IA pour automatiser votre business logic.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-20">
            <Link href="https://calendly.com/ben40nocode/1h" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#FF5A1F] hover:bg-[#E64A12] hover:-translate-y-0.5 text-white px-7 py-4 rounded-xl font-semibold text-base transition-all shadow-[0_10px_24px_rgba(255,90,31,.28)]">
              Devis gratuit <ArrowRight size={17} />
            </Link>
            <Link href="/#pricing"
              className="inline-flex items-center gap-2 border border-[#E2E0DA] hover:border-gray-400 text-[#2E343D] hover:bg-gray-50 px-7 py-4 rounded-xl font-semibold text-base transition-colors">
              Voir les tarifs <ArrowRight size={17} />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div>
              <h2 className="text-2xl font-extrabold text-[#0E1116] tracking-[-0.02em] mb-6">Qu'on crée</h2>
              <ul className="space-y-4">
                {[
                  "Interfaces modernes et responsives (desktop, tablette, mobile)",
                  "Authentification sécurisée (sessions, 2FA, OAuth)",
                  "Bases de données (PostgreSQL, MongoDB, etc.)",
                  "APIs REST ou GraphQL intégrées",
                  "Dashboards avec visualisations temps réel",
                  "Intégrations tierces (Stripe, Slack, etc.)",
                ].map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check size={20} className="text-[#FF5A1F] flex-shrink-0 mt-0.5" />
                    <span className="text-[#2E343D]">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-extrabold text-[#0E1116] tracking-[-0.02em] mb-6">Avec les agents IA</h2>
              <ul className="space-y-4">
                {[
                  "Agents Claude qui comprennent votre métier",
                  "Traitement de documents et données en temps réel",
                  "Chatbots intelligents intégrés à l'app",
                  "Automatisation des workflows critiques",
                  "Recommandations et prédictions IA",
                  "Support 24h/24 via agents autonomes",
                ].map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check size={20} className="text-[#FF5A1F] flex-shrink-0 mt-0.5" />
                    <span className="text-[#2E343D]">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-white border border-[#E2E0DA] rounded-2xl p-12 shadow-[0_14px_34px_rgba(14,17,22,.06)] mb-20">
            <h2 className="text-2xl font-extrabold text-[#0E1116] tracking-[-0.02em] mb-8">Exemples d'applications qu'on a créées</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Platform de gestion d'agents IA",
                  desc: "Interface pour piloter, monitorer et optimiser les agents IA en production. Dashboard temps réel, rapports, audit trails.",
                },
                {
                  title: "CRM intelligent avec agents IA",
                  desc: "Gestion de contacts + agents qui analysent automatiquement les conversations, proposent actions, qualifient les leads.",
                },
                {
                  title: "SaaS d'automatisation sans code",
                  desc: "Plateforme visuelle pour créer des workflows. Agents IA qui comprennent les intentions, suggèrent optimisations.",
                },
                {
                  title: "Portal client avec agents support IA",
                  desc: "Clients gèrent leurs commandes, données. Agents IA 24h/24 répondent aux questions, traitent les demandes.",
                },
              ].map((example) => (
                <div key={example.title} className="p-6 border border-[#E2E0DA] bg-white rounded-lg hover:border-[#FF5A1F] shadow-[0_14px_34px_rgba(14,17,22,.06)] transition-colors">
                  <h3 className="font-bold text-[#0E1116] mb-2">{example.title}</h3>
                  <p className="text-sm text-[#2E343D]">{example.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t pt-12">
            <h2 className="text-2xl font-extrabold text-[#0E1116] tracking-[-0.02em] mb-8">Comment ça marche</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: 1,
                  title: "Audit & Architecture (2-3h)",
                  desc: "On comprend votre métier, vos workflows critiques, les points à automatiser. On propose l'architecture IA.",
                },
                {
                  step: 2,
                  title: "Développement (3-8 semaines)",
                  desc: "Frontend + backend modernes. Développement sur mesure avec les dernières technologies IA. Tests et documentation inclus.",
                },
                {
                  step: 3,
                  title: "Mise en production & Maintenance",
                  desc: "Déploiement sur vos serveurs. Maintenance continue, évolutions, support 24h/24 par agents IA.",
                },
              ].map((phase) => (
                <div key={phase.step} className="flex flex-col">
                  <div className="w-10 h-10 rounded-full bg-[#FF5A1F] text-white flex items-center justify-center font-bold mb-4">
                    {phase.step}
                  </div>
                  <h3 className="font-bold text-[#0E1116] mb-2">{phase.title}</h3>
                  <p className="text-sm text-[#2E343D] flex-1">{phase.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-20 bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-12 border border-gray-700 shadow-xl text-center">
            <h2 className="text-white font-bold text-2xl mb-3">Prêt à démarrer votre web app IA ?</h2>
            <p className="text-gray-300 text-base mb-8 max-w-md mx-auto">Audit gratuit de 1h. On voit ensemble comment connecter IA et product. Zéro engagement.</p>
            <Link
              href="https://calendly.com/ben40nocode/1h"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FF5A1F] to-[#d97757] hover:shadow-lg hover:shadow-orange-500/50 text-white px-8 py-4 rounded-xl text-base font-semibold transition-all duration-300 hover:-translate-y-0.5"
            >
              Réserver mon appel gratuit (1h) <ArrowRight size={16} />
            </Link>
          </div>

        </div>
      </div>
    </>
  );
}
