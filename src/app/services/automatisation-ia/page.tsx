import type { Metadata } from "next";
import Link from "next/link";
import { Check, ArrowRight, Zap, Users, Clock, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Automatisations sur mesure pour PME & Artisans",
  description: "On prend en charge vos tâches répétitives : réponses clients, devis, rappels de RDV, relances. Vous vous concentrez sur votre métier. Audit gratuit.",
  keywords: ["automatisation PME", "automatisation artisan", "réponse client automatique", "devis automatique", "rappel rendez-vous", "Bordeaux", "Gironde"],
  alternates: {
    canonical: "https://www.nbn-ia.fr/services/automatisation-ia",
    languages: {
      fr: "https://www.nbn-ia.fr/services/automatisation-ia",
      en: "https://www.nbn-ia.fr/en/ai-automation",
      "x-default": "https://www.nbn-ia.fr/services/automatisation-ia",
    },
  },
  openGraph: {
    title: "Automatisations sur mesure pour PME & Artisans | NBN IA",
    description: "On prend en charge vos tâches répétitives. Vous, vous vous concentrez sur votre métier. Audit gratuit 1h.",
    url: "https://www.nbn-ia.fr/services/automatisation-ia",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Automatisations sur mesure pour PME et Artisans",
  provider: { "@type": "Organization", name: "NBN IA", url: "https://www.nbn-ia.fr" },
  areaServed: ["Bordeaux", "Royan", "Arcachon", "Soulac", "Pauillac", "Lesparre", "Montalivet", "Lacanau"],
  description: "Automatisations sur mesure pour PME et artisans en Gironde : réponses clients, devis, rappels de RDV, relances impayés, alertes internes, collecte d'avis.",
};

const automations = [
  {
    icon: <Zap size={20} className="text-[#e8632a]" />,
    title: "Réponses clients",
    desc: "Emails, WhatsApp, formulaires de contact. Vos clients reçoivent une réponse immédiate, même la nuit ou le week-end.",
  },
  {
    icon: <Check size={20} className="text-[#e8632a]" />,
    title: "Devis et factures automatiques",
    desc: "Un client remplit un formulaire, un devis part dans la minute. Pas besoin de tout faire à la main.",
  },
  {
    icon: <Clock size={20} className="text-[#e8632a]" />,
    title: "Rappels et confirmations de RDV",
    desc: "SMS ou email automatique 24h avant chaque rendez-vous. Fini les oublis et les no-shows.",
  },
  {
    icon: <ArrowRight size={20} className="text-[#e8632a]" />,
    title: "Relances impayés & paniers abandonnés",
    desc: "Un message de relance part automatiquement après X jours sans paiement ou sans commande finalisée.",
  },
  {
    icon: <Star size={20} className="text-[#e8632a]" />,
    title: "Notifications et alertes internes",
    desc: "Votre équipe est prévenue en temps réel : nouvelle commande, formulaire reçu, stock bas.",
  },
  {
    icon: <Users size={20} className="text-[#e8632a]" />,
    title: "Collecte d'avis clients",
    desc: "Un message de remerciement part après chaque prestation, avec un lien pour laisser un avis Google.",
  },
];

const steps = [
  {
    number: "1",
    title: "Appel gratuit (1h)",
    desc: "On identifie ensemble les tâches qui vous font perdre du temps. Pas de jargon, juste des questions concrètes.",
  },
  {
    number: "2",
    title: "On construit (1 à 3 semaines)",
    desc: "On met en place les automatisations adaptées à votre activité. Vous validez chaque étape.",
  },
  {
    number: "3",
    title: "Ça tourne tout seul",
    desc: "Une fois en place, vos processus tournent 24h/24. Vous gardez la main, on assure la maintenance.",
  },
];

const targets = [
  "Artisans (plombiers, électriciens, peintres…)",
  "Restaurateurs et gérants de bar",
  "Commerçants et boutiques",
  "Professions libérales (avocats, comptables, thérapeutes…)",
  "Agences immobilières",
];

export default function AutomatisationIAPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="min-h-screen bg-white pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-6">

          <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-100 text-[#e8632a] rounded-full px-4 py-1.5 text-xs font-semibold mb-8 tracking-wide uppercase">
            <Zap size={12} /> Automatisations sur mesure
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            On prend en charge vos tâches répétitives.<br />
            <span className="text-[#e8632a]">Vous, vous vous concentrez sur votre métier.</span>
          </h1>

          <p className="text-lg text-gray-500 max-w-2xl mb-10 leading-relaxed">
            Répondre aux emails, envoyer des devis, relancer des clients, confirmer des rendez-vous — ce sont des tâches qui prennent du temps sans vraiment créer de valeur. On les automatise pour vous, simplement et sans bouleverser votre façon de travailler.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-20">
            <Link href="https://calendly.com/ben40nocode/1h" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#e8632a] hover:bg-[#c4521f] text-white px-7 py-4 rounded-xl font-semibold text-base transition-colors">
              Réserver mon appel gratuit (1h) <ArrowRight size={17} />
            </Link>
            <Link href="/tarifs" className="inline-flex items-center gap-2 border border-gray-200 hover:border-gray-300 text-gray-700 px-7 py-4 rounded-xl font-semibold text-base transition-colors hover:bg-gray-50">
              Voir les tarifs
            </Link>
          </div>

          {/* Ce qu'on automatise */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Ce qu&apos;on automatise pour vous</h2>
            <p className="text-gray-500 mb-8">Des exemples concrets, adaptés aux petites entreprises.</p>
            <div className="grid md:grid-cols-2 gap-5">
              {automations.map((item) => (
                <div key={item.title} className="bg-gray-50 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-2">
                    {item.icon}
                    <h3 className="font-semibold text-gray-900">{item.title}</h3>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Comment ça marche */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Comment ça marche</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {steps.map((step) => (
                <div key={step.number} className="relative">
                  <div className="w-10 h-10 rounded-full bg-[#e8632a] text-white flex items-center justify-center font-bold text-sm mb-4">
                    {step.number}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Pour qui */}
          <div className="bg-gray-50 rounded-2xl p-8 mb-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Pour qui ?</h2>
            <ul className="space-y-3">
              {targets.map((target) => (
                <li key={target} className="flex items-start gap-2.5 text-sm text-gray-600">
                  <Check size={15} className="text-[#e8632a] flex-shrink-0 mt-0.5" />{target}
                </li>
              ))}
            </ul>
            <p className="text-sm text-gray-400 mt-4">Si vous avez une activité qui se répète, on a sûrement quelque chose à automatiser pour vous.</p>
          </div>

          {/* CTA final */}
          <div className="bg-gray-900 rounded-2xl p-10 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">Prêt à gagner du temps chaque semaine ?</h2>
            <p className="text-gray-400 mb-8 max-w-md mx-auto">L&apos;appel est gratuit, sans engagement. On vous dit exactement ce qu&apos;on peut automatiser et combien de temps ça vous fera gagner.</p>
            <Link href="https://calendly.com/ben40nocode/1h" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#e8632a] hover:bg-[#c4521f] text-white px-8 py-4 rounded-xl font-bold text-sm transition-colors">
              Réserver mon appel gratuit (1h) <ArrowRight size={15} />
            </Link>
          </div>

        </div>
      </div>
    </>
  );
}
