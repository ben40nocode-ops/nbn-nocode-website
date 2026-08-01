import type { Metadata } from "next";
import { localBusinessSchema, simpleBreadcrumb } from "@/lib/seo-schemas";
import Link from "next/link";
import { Check, ArrowRight, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Automatisation & Agents IA à Royan",
  description: "Expert agents IA et automatisation à Royan et Charente-Maritime. Claude AI, Make. Setup sur mesure pour hôtels, pêcheurs et PME locales. Audit gratuit 30 min.",
  keywords: ["automatisation Royan", "agent IA Royan", "consultant automatisation Charente-Maritime", "Claude AI Royan", "PME Royan automatisation", "automatisation Saintes", "agent IA Rochefort"],
  alternates: { canonical: "https://www.nbn-ia.fr/automatisation-royan" },
  openGraph: {
    title: "Automatisation & Agents IA à Royan — NBN IA",
    description: "Expert agents IA & Claude AI pour PME à Royan. Setup sur mesure, maintenance mensuelle.",
    url: "https://www.nbn-ia.fr/automatisation-royan",
  },
};

const faqs = [
  {
    q: "Vous intervenez bien à Royan et en Charente-Maritime ?",
    a: "Oui. On couvre Royan, Saintes, Rochefort, Saint-Georges-de-Didonne, Meschers, Vaux-sur-Mer et toute la Charente-Maritime. On peut se retrouver en présentiel ou travailler entièrement à distance selon votre préférence.",
  },
  {
    q: "Quels types d'entreprises travaillent avec vous à Royan ?",
    a: "Principalement des hôtels et locations saisonnières, des restaurants, des artisans locaux, des agences immobilières et des commerces de proximité. Le point commun : des process répétitifs qui consomment du temps sans créer de valeur.",
  },
  {
    q: "Est-ce que c'est adapté à une activité saisonnière comme le tourisme ?",
    a: "Absolument. Le système s'adapte à votre charge : automatisations plus actives en haute saison, alertes et reporting en basse saison. C'est justement sur une activité saisonnière que l'automatisation change le plus les choses.",
  },
  {
    q: "Combien de temps pour mettre en place le système ?",
    a: "Entre 48h et 2 semaines selon la complexité. On démarre toujours par l'automatisation la plus rentable pour vous. Pour un restaurateur, c'est souvent les confirmations et relances de réservation — opérationnel en 2 jours.",
  },
  {
    q: "Quel est le retour sur investissement typique ?",
    a: "Le ROI dépasse souvent le coût dès le premier mois. Un hôtelier qui élimine 2h de saisie manuelle par jour économise l'équivalent de 400 à 600€ de temps par mois. Un artisan qui automatise ses relances devis récupère en moyenne 3 chantiers supplémentaires par trimestre.",
  },
  {
    q: "Qu'est-ce qu'un agent IA concrètement pour une PME de Royan ?",
    a: "Un programme qui perçoit ce qui se passe dans votre business (un email reçu, une réservation créée, une demande de devis) et agit sans que vous ayez à intervenir. Par exemple : un agent lit vos demandes de réservation entrantes, vérifie les disponibilités, répond au client et met à jour votre planning — en moins d'une minute, 24h/24.",
  },
];

const casUsage = [
  {
    secteur: "Hôtel / Locations saisonnières",
    probleme: "Gestion manuelle des réservations, confirmations oubliées, double-saisie entre plateformes, aucun suivi post-séjour.",
    solution: "Agent IA qui centralise les réservations (Booking, Airbnb, site direct), envoie les confirmations automatiquement, relance les avis Google à la fin du séjour.",
    gain: "Centraliser les réservations de toutes les plateformes et automatiser les relances d'avis.",
  },
  {
    secteur: "Restaurant / Bar de plage",
    probleme: "Téléphone qui sonne pendant le service, réservations perdues, pas de relance pour les groupes.",
    solution: "Agent IA qui gère les demandes de réservation par SMS et email, confirme les groupes automatiquement, relance les no-shows.",
    gain: "Ne plus laisser une demande de réservation sans réponse, même en soirée.",
  },
  {
    secteur: "Artisan / Commerce local",
    probleme: "Devis chronophages, prospects qui ne rappellent pas, suivi clients inexistant après la vente.",
    solution: "Système qui génère les devis depuis un formulaire de contact, relance automatiquement à J+3 et J+7, envoie un suivi satisfaction 30 jours après.",
    gain: "Automatiser la génération des devis et les relances pour transformer davantage de contacts.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Automatisation & Agents IA à Royan",
      provider: { "@type": "Organization", name: "NBN IA", url: "https://www.nbn-ia.fr" },
      areaServed: [
        { "@type": "City", name: "Royan" },
        { "@type": "AdministrativeArea", name: "Charente-Maritime" },
      ],
      description: "Conception d'architectures d'automatisation et d'agents IA sur mesure pour les PME de Royan et Charente-Maritime.",
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
      city: "Royan",
      pageUrl: "https://www.nbn-ia.fr/automatisation-royan",
      name: "NBN IA — Automatisation & Agents IA Royan",
      description: "Conception d'agents IA et d'architectures d'automatisation sur mesure pour les PME de Royan et Charente-Maritime. Setup à partir de 450€, maintenance mensuelle.",
    }),
    simpleBreadcrumb("Automatisation IA Royan", "https://www.nbn-ia.fr/automatisation-royan"),
  ],
};

export default function RoyanPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="min-h-screen pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-6">

          <div className="inline-flex items-center gap-2 bg-[#FCE9DF] text-[#E64A12] rounded-full px-4 py-1.5 text-[11px] font-bold mb-8 tracking-[0.16em] uppercase">
            <MapPin size={12} /> Royan & Charente-Maritime
          </div>

          <h1 className="text-4xl md:text-[3.4rem] font-extrabold text-[#0E1116] leading-[1.04] tracking-[-0.03em] mb-6">
            Automatisation & Agents IA<br />
            <span className="text-[#FF5A1F]">pour les PME de Royan</span>
          </h1>

          <p className="text-lg text-[#6B7280] max-w-2xl mb-6 leading-relaxed">
            À Royan et en Charente-Maritime, les entreprises du tourisme, de la restauration et de l&apos;artisanat perdent des heures chaque semaine sur des tâches répétitives. On conçoit les systèmes IA qui font ce travail à leur place — sans recrutement, sans intervention manuelle.
          </p>

          <p className="text-base text-[#6B7280] max-w-2xl mb-10 leading-relaxed">
            NBN IA intervient à Royan, Saintes, Rochefort, Saint-Georges-de-Didonne et partout en Charente-Maritime. En présentiel ou à distance selon votre préférence. Spécialisé Claude AI (Anthropic) et Make.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-20">
            <Link href="https://calendly.com/ben40nocode/1h" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#FF5A1F] hover:bg-[#E64A12] hover:-translate-y-0.5 text-white px-7 py-4 rounded-xl font-semibold text-base transition-all shadow-[0_10px_24px_rgba(255,90,31,.28)]">
              Audit gratuit à Royan <ArrowRight size={17} />
            </Link>
            <Link href="/tarifs" className="inline-flex items-center gap-2 border border-[#E2E0DA] hover:-translate-y-0.5 bg-white text-[#0E1116] px-7 py-4 rounded-xl font-semibold text-base transition-all">
              Voir les tarifs
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <div>
              <h2 className="text-2xl font-extrabold text-[#0E1116] tracking-[-0.02em] mb-4">Ce qu&apos;on automatise pour les entreprises royannaises</h2>
              <ul className="space-y-3">
                {[
                  "Confirmations et relances de réservation",
                  "Gestion des leads et CRM automatisé",
                  "Facturation et relances clients",
                  "Synchronisation entre outils (Airtable, Notion, Gmail…)",
                  "Agents IA pour traiter vos emails et documents",
                  "Reporting automatique hebdomadaire",
                  "Onboarding client sans intervention manuelle",
                  "Suivi satisfaction et collecte d'avis Google",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-[#2E343D]">
                    <Check size={15} className="text-[#FF5A1F] flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white border border-[#E2E0DA] rounded-2xl p-7 shadow-[0_14px_34px_rgba(14,17,22,.06)]">
              <h2 className="text-lg font-extrabold text-[#0E1116] mb-3">Proche de vous, expert en IA</h2>
              <ul className="space-y-3 text-sm text-[#2E343D]">
                {[
                  "Basé dans le triangle Bordeaux / Royan / Arcachon",
                  "Spécialisé Claude AI — le modèle IA le plus avancé",
                  "Certifié Anthropic — expert agents IA Claude",
                  "Expérience secteur tourisme & saisonnier",
                  "Disponible en présentiel ou 100% remote",
                  "Appel gratuit sans engagement",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <Check size={15} className="text-[#FF5A1F] flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Comment ça marche */}
          <div className="mb-20">
            <h2 className="text-2xl font-extrabold text-[#0E1116] tracking-[-0.02em] mb-8">Comment on travaille avec les PME de Royan</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { step: "01", title: "Audit gratuit 30 min", desc: "On cartographie vos process : ce qui prend du temps, ce qui peut être automatisé. Pas de jargon, pas d'engagement. En présentiel à Royan ou en visio." },
                { step: "02", title: "Setup sur mesure", desc: "On conçoit et déploie votre architecture : agents IA, workflows Make, connexions API. Livraison en 48h à 2 semaines selon la complexité." },
                { step: "03", title: "Maintenance continue", desc: "On surveille, on ajuste, on fait évoluer. Vous avez un accès direct pour toute modification. Résiliable à tout moment." },
              ].map(({ step, title, desc }) => (
                <div key={step} className="bg-white border border-[#E2E0DA] rounded-2xl p-6 shadow-[0_14px_34px_rgba(14,17,22,.06)]">
                  <div className="text-3xl font-black text-[#FF5A1F]/25 mb-3">{step}</div>
                  <h3 className="text-base font-bold text-[#0E1116] mb-2">{title}</h3>
                  <p className="text-sm text-[#6B7280] leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Cas d'usage */}
          <div className="mb-20">
            <h2 className="text-2xl font-extrabold text-[#0E1116] tracking-[-0.02em] mb-2">Cas d’usage à Royan et en Charente-Maritime</h2>
            <p className="text-[#6B7280] text-sm mb-8">Exemples de systèmes que je peux concevoir pour des entreprises du littoral charentais.</p>
            <div className="flex flex-col gap-6">
              {casUsage.map(({ secteur, probleme, solution, gain }) => (
                <div key={secteur} className="bg-white border border-[#E2E0DA] rounded-2xl p-7 shadow-[0_14px_34px_rgba(14,17,22,.06)]">
                  <div className="inline-flex items-center bg-[#FCE9DF] text-[#E64A12] text-xs font-bold px-3 py-1 rounded-full mb-4">{secteur}</div>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="font-semibold text-[#0E1116] mb-1">Problème</p>
                      <p className="text-[#6B7280]">{probleme}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-[#0E1116] mb-1">Solution</p>
                      <p className="text-[#6B7280]">{solution}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-[#0E1116] mb-1">Objectif</p>
                      <p className="text-[#FF5A1F] font-semibold">{gain}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="mb-20">
            <h2 className="text-2xl font-extrabold text-[#0E1116] tracking-[-0.02em] mb-8">Questions fréquentes — automatisation IA à Royan</h2>
            <div className="flex flex-col gap-4">
              {faqs.map(({ q, a }) => (
                <details key={q} className="faq-acc">
                  <summary>{q}</summary>
                  <div>{a}</div>
                </details>
              ))}
            </div>
          </div>

          <div className="bg-[#0E1116] rounded-[26px] p-10 shadow-[0_40px_100px_rgba(14,17,22,.4)] text-center">
            <h2 className="text-2xl font-bold text-white mb-3">30 minutes pour cartographier vos process</h2>
            <p className="text-gray-400 mb-8 max-w-md mx-auto">L&apos;appel est gratuit, sans engagement. On se retrouve à Royan ou en visio.</p>
            <Link href="https://calendly.com/ben40nocode/1h" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#FF5A1F] hover:bg-[#E64A12] hover:-translate-y-0.5 text-white px-8 py-4 rounded-xl font-bold text-sm transition-all shadow-[0_10px_24px_rgba(255,90,31,.28)]">
              Réserver mon appel gratuit (30 min) <ArrowRight size={15} />
            </Link>
          </div>

        </div>
      </div>
    </>
  );
}
