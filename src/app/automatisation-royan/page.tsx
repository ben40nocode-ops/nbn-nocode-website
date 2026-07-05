import type { Metadata } from "next";
import { localBusinessSchema, simpleBreadcrumb } from "@/lib/seo-schemas";
import Link from "next/link";
import { Check, ArrowRight, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Automatisation & Agents IA à Royan",
  description: "Expert agents IA et automatisation à Royan et Charente-Maritime. Claude AI, Make. Setup sur mesure pour hôtels, pêcheurs et PME locales. Audit gratuit 1h.",
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
    a: "Absolument. On conçoit des systèmes qui s'adaptent à votre charge : automatisations plus actives en haute saison, alertes et reporting en basse saison. Plusieurs hôteliers et restaurateurs du littoral charentais travaillent déjà avec nous.",
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
    gain: "2h gagnées par jour en haute saison, +15% d'avis Google en 30 jours.",
  },
  {
    secteur: "Restaurant / Bar de plage",
    probleme: "Téléphone qui sonne pendant le service, réservations perdues, pas de relance pour les groupes.",
    solution: "Agent IA qui gère les demandes de réservation par SMS et email, confirme les groupes automatiquement, relance les no-shows.",
    gain: "Zéro réservation perdue. 45 min récupérées chaque soir.",
  },
  {
    secteur: "Artisan / Commerce local",
    probleme: "Devis chronophages, prospects qui ne rappellent pas, suivi clients inexistant après la vente.",
    solution: "Système qui génère les devis depuis un formulaire de contact, relance automatiquement à J+3 et J+7, envoie un suivi satisfaction 30 jours après.",
    gain: "3 à 5h par semaine récupérées. Taux de transformation devis amélioré de 20%.",
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
      <div className="min-h-screen bg-white pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-6">

          <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-100 text-[#e8632a] rounded-full px-4 py-1.5 text-xs font-semibold mb-8 tracking-wide uppercase">
            <MapPin size={12} /> Royan & Charente-Maritime
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Automatisation & Agents IA<br />
            <span className="text-[#e8632a]">pour les PME de Royan</span>
          </h1>

          <p className="text-lg text-gray-500 max-w-2xl mb-6 leading-relaxed">
            À Royan et en Charente-Maritime, les entreprises du tourisme, de la restauration et de l&apos;artisanat perdent des heures chaque semaine sur des tâches répétitives. On conçoit les systèmes IA qui font ce travail à leur place — sans recrutement, sans intervention manuelle.
          </p>

          <p className="text-base text-gray-500 max-w-2xl mb-10 leading-relaxed">
            NBN IA intervient à Royan, Saintes, Rochefort, Saint-Georges-de-Didonne et partout en Charente-Maritime. En présentiel ou à distance selon votre préférence. Spécialisé Claude AI (Anthropic) et Make.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-20">
            <Link href="https://calendly.com/ben40nocode/1h" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#e8632a] hover:bg-[#c4521f] text-white px-7 py-4 rounded-xl font-semibold text-base transition-colors">
              Audit gratuit à Royan <ArrowRight size={17} />
            </Link>
            <Link href="/tarifs" className="inline-flex items-center gap-2 border border-gray-200 hover:border-gray-300 text-gray-700 px-7 py-4 rounded-xl font-semibold text-base transition-colors hover:bg-gray-50">
              Voir les tarifs
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Ce qu&apos;on automatise pour les entreprises royannaises</h2>
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
                  <li key={item} className="flex items-start gap-2.5 text-sm text-gray-600">
                    <Check size={15} className="text-[#e8632a] flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-50 rounded-2xl p-7">
              <h2 className="text-lg font-bold text-gray-900 mb-3">Proche de vous, expert en IA</h2>
              <ul className="space-y-3 text-sm text-gray-600">
                {[
                  "Basé dans le triangle Bordeaux / Royan / Arcachon",
                  "Spécialisé Claude AI — le modèle IA le plus avancé",
                  "Certifié Anthropic — expert agents IA Claude",
                  "Expérience secteur tourisme & saisonnier",
                  "Disponible en présentiel ou 100% remote",
                  "Appel gratuit sans engagement",
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
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Comment on travaille avec les PME de Royan</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { step: "01", title: "Audit gratuit 1h", desc: "On cartographie vos process : ce qui prend du temps, ce qui peut être automatisé. Pas de jargon, pas d'engagement. En présentiel à Royan ou en visio." },
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
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Cas concrets à Royan et en Charente-Maritime</h2>
            <p className="text-gray-500 text-sm mb-8">Exemples de systèmes déployés pour des entreprises du littoral charentais.</p>
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
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Questions fréquentes — automatisation IA à Royan</h2>
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
            <h2 className="text-2xl font-bold text-white mb-3">1 heure pour cartographier vos process</h2>
            <p className="text-gray-400 mb-8 max-w-md mx-auto">L&apos;appel est gratuit, sans engagement. On se retrouve à Royan ou en visio.</p>
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
