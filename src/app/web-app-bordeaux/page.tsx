import type { Metadata } from "next";
import Link from "next/link";
import { Check, ArrowRight, Layers } from "lucide-react";

export const metadata: Metadata = {
  title: "Développement Web App & Application IA à Bordeaux",
  description: "Web apps et applications IA sur mesure à Bordeaux. Authentification, base de données, intégrations, APIs. Vibe coding avec Claude Code. Devis gratuit.",
  keywords: [
    "web app Bordeaux",
    "développement application Bordeaux",
    "application IA Bordeaux",
    "web application sur mesure Bordeaux",
    "app avec agents IA",
    "SaaS Bordeaux",
    "application interactive Bordeaux",
    "développement Next.js Bordeaux",
    "vibe coding Bordeaux",
  ],
  alternates: { canonical: "https://www.nbn-ia.fr/web-app-bordeaux" },
  openGraph: {
    title: "Web App IA à Bordeaux — NBN IA",
    description: "Développement d'applications web et web apps IA à Bordeaux. Sur mesure, sécurisées, performantes.",
    url: "https://www.nbn-ia.fr/web-app-bordeaux",
  },
};

const faqs = [
  {
    q: "Qu'est-ce qu'une web app et en quoi c'est différent d'un site web ?",
    a: "Un site web présente votre activité. Une web app est une application interactive : les utilisateurs s'y connectent, y créent des données, y accomplissent des tâches. Exemples : un espace client, un dashboard de pilotage, un outil SaaS, un CRM sur mesure. C'est ce qu'on développe — pas juste des vitrines.",
  },
  {
    q: "Combien coûte le développement d'une web app à Bordeaux ?",
    a: "Une web app simple (authentification + 3 à 5 fonctionnalités) démarre à 2 500€ HT. Une app avancée avec sync temps réel, agents IA et 8+ fonctionnalités démarre à 5 000€ HT. On donne un devis précis après l'appel gratuit d'1h.",
  },
  {
    q: "Qu'est-ce que le vibe coding et comment ça accélère le développement ?",
    a: "On pilote Claude Code (IA d'Anthropic) pour générer et affiner le code plutôt que de l'écrire manuellement ligne par ligne. Résultat : un MVP en 2 à 3 semaines au lieu de 2 à 3 mois. Sans sacrifier la qualité — le code est propre, testé et maintenable.",
  },
  {
    q: "Quelles technologies utilisez-vous ?",
    a: "Notre stack principale : Next.js pour le frontend, Supabase (PostgreSQL) pour la base de données, Clerk pour l'authentification, Stripe pour les paiements, Claude AI pour les fonctionnalités IA, Vercel pour le déploiement. Une stack moderne, scalable et avec une DX excellente.",
  },
  {
    q: "Mon app peut-elle intégrer des agents IA ?",
    a: "Oui — c'est même notre spécialité. On intègre des agents Claude directement dans vos web apps : analyse de documents, traitement de données, génération de contenu, chatbot support, workflows automatisés. L'IA devient une fonctionnalité native de votre app.",
  },
  {
    q: "Vous assurez la maintenance après livraison ?",
    a: "Oui. On propose des abonnements de maintenance mensuelle à partir de 159€/mois : monitoring, corrections de bugs, mises à jour de sécurité, évolutions mineures. Vous gardez le contrôle — résiliable à tout moment.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Développement Web App IA à Bordeaux",
      provider: { "@type": "Organization", name: "NBN IA", url: "https://www.nbn-ia.fr" },
      areaServed: { "@type": "City", name: "Bordeaux" },
      description: "Développement d'applications web sur mesure avec authentification, base de données, intégrations IA et APIs pour les PME de Bordeaux.",
      offers: [
        { "@type": "Offer", name: "Web App Simple", price: "2500", priceCurrency: "EUR", description: "Application avec authentification et 3-5 fonctionnalités" },
        { "@type": "Offer", name: "Web App Avancée", price: "5000", priceCurrency: "EUR", description: "Application avancée avec sync temps réel et agents IA" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: { "@type": "Answer", text: faq.a },
      })),
    },
  ],
};

export default function WebAppBordeauxPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="min-h-screen bg-white pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-6">

          <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-100 text-[#e8632a] rounded-full px-4 py-1.5 text-xs font-semibold mb-8 tracking-wide uppercase">
            <Layers size={12} /> Web App IA — Bordeaux
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Application web sur mesure<br />
            <span className="text-[#e8632a]">alimentée par vos agents IA</span>
          </h1>

          <p className="text-lg text-gray-500 max-w-2xl mb-6 leading-relaxed">
            On développe des applications web complètes — authentification, base de données, interfaces modernes. Et on les connecte à des agents IA pour automatiser votre business logic. Un MVP livré en 2 à 3 semaines grâce au vibe coding avec Claude Code.
          </p>

          <p className="text-base text-gray-500 max-w-2xl mb-10 leading-relaxed">
            Basé à Bordeaux, on accompagne des startups, des PME et des indépendants girondins dans le développement de leurs outils internes, SaaS et applications métier. En présentiel ou à distance.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-20">
            <Link href="https://calendly.com/ben40nocode/1h" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#e8632a] hover:bg-[#c4521f] text-white px-7 py-4 rounded-xl font-semibold text-base transition-colors">
              Devis gratuit <ArrowRight size={17} />
            </Link>
            <Link href="/tarifs"
              className="inline-flex items-center gap-2 border border-gray-200 hover:border-gray-300 text-gray-700 hover:bg-gray-50 px-7 py-4 rounded-xl font-semibold text-base transition-colors">
              Voir les tarifs
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Ce qu&apos;on crée</h2>
              <ul className="space-y-4">
                {[
                  "Interfaces modernes et responsives (desktop, tablette, mobile)",
                  "Authentification sécurisée (sessions, 2FA, OAuth)",
                  "Bases de données relationnelles (PostgreSQL, Supabase)",
                  "APIs REST intégrées",
                  "Dashboards avec visualisations temps réel",
                  "Intégrations tierces (Stripe, Slack, Airtable…)",
                ].map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check size={16} className="text-[#e8632a] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Avec les agents IA</h2>
              <ul className="space-y-4">
                {[
                  "Agents Claude qui comprennent votre métier",
                  "Traitement de documents et données en temps réel",
                  "Chatbots intelligents intégrés à l'app",
                  "Automatisation des workflows critiques",
                  "Génération de contenu et rapports IA",
                  "Support 24h/24 via agents autonomes",
                ].map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check size={16} className="text-[#e8632a] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Exemples */}
          <div className="bg-gray-50 rounded-2xl p-12 mb-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Exemples d&apos;applications développées</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Back-office SaaS pour agence de voyage",
                  desc: "Outil interne de gestion des commandes, ventilation comptable automatique via Claude AI, connexion OneDrive. Remplace 3 Zapier + Airtable + Google Apps Script.",
                },
                {
                  title: "CRM intelligent avec agents IA",
                  desc: "Gestion de contacts + agents qui analysent automatiquement les conversations, proposent des actions, qualifient les leads entrants.",
                },
                {
                  title: "Espace client avec agents support",
                  desc: "Clients gèrent leurs commandes et données. Agents IA 24h/24 répondent aux questions, traitent les demandes, escaladent si nécessaire.",
                },
                {
                  title: "Dashboard de pilotage multi-sources",
                  desc: "Agrégation de données depuis plusieurs APIs, visualisations temps réel, rapports automatiques générés chaque semaine par un agent IA.",
                },
              ].map((example) => (
                <div key={example.title} className="p-6 border border-gray-200 rounded-xl bg-white hover:border-[#e8632a] transition-colors">
                  <h3 className="font-bold text-gray-900 mb-2 text-sm">{example.title}</h3>
                  <p className="text-sm text-gray-500">{example.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Comment ça marche */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Comment on développe votre web app</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { step: "01", title: "Audit & Architecture (1-2h)", desc: "On comprend votre métier, vos workflows critiques, les points à automatiser. On définit l'architecture et on vous donne un devis précis." },
                { step: "02", title: "Développement (2-8 semaines)", desc: "Vibe coding avec Claude Code : MVP livré 3x plus vite qu'une agence classique. Points réguliers, itérations rapides, vous voyez l'app évoluer en temps réel." },
                { step: "03", title: "Mise en production & Maintenance", desc: "Déploiement sur Vercel. Monitoring, évolutions, corrections incluses dans l'abonnement mensuel. Résiliable à tout moment." },
              ].map(({ step, title, desc }) => (
                <div key={step} className="bg-white border border-gray-100 rounded-2xl p-6">
                  <div className="text-3xl font-black text-orange-100 mb-3">{step}</div>
                  <h3 className="text-base font-bold text-gray-900 mb-2">{title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Questions fréquentes — web app IA à Bordeaux</h2>
            <div className="flex flex-col gap-4">
              {faqs.map(({ q, a }) => (
                <div key={q} className="border border-gray-100 rounded-xl p-6">
                  <p className="font-semibold text-gray-900 mb-2 text-sm">{q}</p>
                  <p className="text-sm text-gray-500 leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-900 rounded-2xl p-10 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">Prêt à démarrer votre web app IA ?</h2>
            <p className="text-gray-400 mb-8 max-w-md mx-auto">Audit gratuit de 1h. On voit ensemble comment connecter IA et product. Zéro engagement.</p>
            <Link href="https://calendly.com/ben40nocode/1h" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#e8632a] hover:bg-[#c4521f] text-white px-8 py-4 rounded-xl font-bold text-sm transition-colors">
              Réserver mon appel gratuit (1h) <ArrowRight size={16} />
            </Link>
          </div>

        </div>
      </div>
    </>
  );
}
