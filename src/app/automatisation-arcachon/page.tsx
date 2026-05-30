import type { Metadata } from "next";
import { localBusinessSchema, simpleBreadcrumb } from "@/lib/seo-schemas";
import Link from "next/link";
import { Check, ArrowRight, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Automatisation & Agents IA à Arcachon — NBN IA",
  description: "Expert en agents IA et automatisation IA à Arcachon et Bassin d'Arcachon. Claude AI, Make, Airtable. Audit gratuit 1h pour hôtels, restaurants, ostréiculteurs et PME locales.",
  keywords: ["automatisation Arcachon", "agent IA Arcachon", "consultant automatisation Bassin Arcachon", "Claude AI Arcachon", "PME Arcachon automatisation", "automatisation La Teste", "agent IA Gujan-Mestras"],
  alternates: { canonical: "https://www.nbn-ia.fr/automatisation-arcachon" },
  openGraph: {
    title: "Automatisation & Agents IA à Arcachon — NBN IA",
    description: "Expert agents IA & Claude AI pour PME à Arcachon et Bassin. Setup sur mesure, maintenance mensuelle.",
    url: "https://www.nbn-ia.fr/automatisation-arcachon",
  },
};

const faqs = [
  {
    q: "Vous intervenez à Arcachon et sur tout le Bassin ?",
    a: "Oui. On couvre Arcachon, La Teste-de-Buch, Gujan-Mestras, Andernos, Lège-Cap-Ferret, Biganos et tout le Bassin d'Arcachon. Intervention en présentiel ou entièrement à distance selon votre préférence.",
  },
  {
    q: "Quels secteurs du Bassin travaillent avec vous ?",
    a: "Principalement l'hôtellerie et les locations saisonnières, la restauration (restaurants, bars, traiteurs), les cabanes ostréicoles, les loueurs de matériel nautique et les agences immobilières. Le tourisme saisonnier est notre terrain de jeu naturel.",
  },
  {
    q: "Comment gérez-vous la saisonnalité du Bassin d'Arcachon ?",
    a: "On conçoit les systèmes pour qu'ils s'adaptent à votre charge. En haute saison, les automatisations tournent à plein régime. En basse saison, on peut programmer des campagnes de reconquête, des relances fidélité, des rapports de bilan. Le système n'est jamais inactif.",
  },
  {
    q: "Un ostréiculteur ou producteur local peut-il bénéficier de vos services ?",
    a: "Oui. On a travaillé avec des cabanes ostréicoles et des producteurs locaux. Les cas d'usage les plus courants : automatisation des commandes en ligne, gestion des livraisons, communication avec les revendeurs, facturation automatique.",
  },
  {
    q: "Combien ça coûte pour une PME du Bassin ?",
    a: "Un setup démarre à 450€ HT pour une automatisation simple. La maintenance mensuelle commence à 159€/mois sans engagement. Le ROI est généralement atteint dès le premier mois — 2h gagnées par jour représentent souvent plus de 400€ de valeur.",
  },
  {
    q: "Qu'est-ce qu'un agent IA peut faire concrètement pour mon activité sur le Bassin ?",
    a: "Un agent IA perçoit les événements dans votre business (réservation reçue, email de commande, formulaire rempli) et agit automatiquement. Pour un restaurateur : confirme les réservations, gère les annulations, envoie les rappels. Pour un hôtelier : check-in automatique, communication pré-séjour, collecte d'avis après le départ.",
  },
];

const casUsage = [
  {
    secteur: "Hôtel / Résidence de tourisme",
    probleme: "Check-in manuel, emails pré-séjour à envoyer un par un, aucun suivi post-séjour systématique.",
    solution: "Agent IA qui envoie automatiquement les infos de check-in J-3, les horaires d'accueil J-1, le questionnaire de satisfaction J+1 et la demande d'avis Google J+3.",
    gain: "1h gagnée par réservation. +20% d'avis Google en 2 mois.",
  },
  {
    secteur: "Cabane ostréicole / Producteur local",
    probleme: "Commandes reçues par SMS, email et téléphone sans centralisation. Facturation en fin de semaine, erreurs fréquentes.",
    solution: "Formulaire de commande connecté à un agent IA qui centralise, valide, envoie la confirmation et génère la facture automatiquement.",
    gain: "Zéro erreur de facturation. 3h par semaine récupérées.",
  },
  {
    secteur: "Location nautique / Activités outdoor",
    probleme: "Réservations du matériel gérées par téléphone, disponibilités jamais à jour, relances manuelles en cas d'annulation.",
    solution: "Système de réservation connecté à un agent IA qui gère les disponibilités en temps réel, confirme automatiquement et relance en cas d'annulation.",
    gain: "Taux d'occupation amélioré de 15%. Zéro double réservation.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Automatisation & Agents IA à Arcachon",
      provider: { "@type": "Organization", name: "NBN IA", url: "https://www.nbn-ia.fr" },
      areaServed: [
        { "@type": "City", name: "Arcachon" },
        { "@type": "AdministrativeArea", name: "Bassin d'Arcachon" },
      ],
      description: "Conception d'architectures d'automatisation et d'agents IA sur mesure pour les PME du Bassin d'Arcachon.",
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
      city: "Arcachon",
      pageUrl: "https://www.nbn-ia.fr/automatisation-arcachon",
      name: "NBN IA — Automatisation & Agents IA Arcachon",
      description: "Conception d'agents IA et d'architectures d'automatisation sur mesure pour les PME du Bassin d'Arcachon. Setup à partir de 450€, maintenance mensuelle.",
    }),
    simpleBreadcrumb("Automatisation IA Arcachon", "https://www.nbn-ia.fr/automatisation-arcachon"),
  ],
};

export default function ArcachonPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="min-h-screen bg-white pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-6">

          <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-100 text-[#e8632a] rounded-full px-4 py-1.5 text-xs font-semibold mb-8 tracking-wide uppercase">
            <MapPin size={12} /> Arcachon & Bassin
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Automatisation & Agents IA<br />
            <span className="text-[#e8632a]">pour les PME d&apos;Arcachon</span>
          </h1>

          <p className="text-lg text-gray-500 max-w-2xl mb-6 leading-relaxed">
            Sur le Bassin d&apos;Arcachon, les entreprises du tourisme, de l&apos;ostréiculture et de la restauration jonglent avec un volume de demandes que les outils classiques ne suivent plus. On conçoit les systèmes IA qui gèrent ce volume automatiquement — 24h/24, même en haute saison.
          </p>

          <p className="text-base text-gray-500 max-w-2xl mb-10 leading-relaxed">
            NBN IA intervient à Arcachon, La Teste-de-Buch, Gujan-Mestras, Lège-Cap-Ferret et tout le Bassin. En présentiel ou entièrement à distance. Spécialisé Claude AI (Anthropic) et Make.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-20">
            <Link href="https://calendly.com/ben40nocode/1h" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#e8632a] hover:bg-[#c4521f] text-white px-7 py-4 rounded-xl font-semibold text-base transition-colors">
              Audit gratuit à Arcachon <ArrowRight size={17} />
            </Link>
            <Link href="/tarifs" className="inline-flex items-center gap-2 border border-gray-200 hover:border-gray-300 text-gray-700 px-7 py-4 rounded-xl font-semibold text-base transition-colors hover:bg-gray-50">
              Voir les tarifs
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Ce qu&apos;on automatise pour les entreprises du Bassin</h2>
              <ul className="space-y-3">
                {[
                  "Gestion des réservations et confirmations",
                  "Commandes et facturation automatique",
                  "Gestion des leads et CRM automatisé",
                  "Agents IA pour traiter vos emails et demandes",
                  "Communication pré et post-séjour",
                  "Collecte automatique d'avis Google",
                  "Reporting et tableaux de bord automatiques",
                  "Onboarding client sans intervention manuelle",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-gray-600">
                    <Check size={15} className="text-[#e8632a] flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-50 rounded-2xl p-7">
              <h2 className="text-lg font-bold text-gray-900 mb-3">Local, disponible, expert IA</h2>
              <ul className="space-y-3 text-sm text-gray-600">
                {[
                  "Basé dans le triangle Bordeaux / Royan / Arcachon",
                  "Spécialisé Claude AI — le modèle IA le plus avancé",
                  "40+ automatisations déployées pour des PME",
                  "Expertise saisonnalité & tourisme littoral",
                  "Disponible en présentiel ou 100% remote",
                  "Audit gratuit sans engagement",
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
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Comment on travaille avec les PME du Bassin</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { step: "01", title: "Audit gratuit 1h", desc: "On cartographie vos process : ce qui prend du temps, ce qui peut être automatisé. Pas de jargon, pas d'engagement. En présentiel sur le Bassin ou en visio." },
                { step: "02", title: "Setup sur mesure", desc: "On conçoit et déploie votre architecture : agents IA, workflows Make, connexions API. Livraison en 48h à 2 semaines selon la complexité." },
                { step: "03", title: "Maintenance continue", desc: "On surveille, on ajuste, on fait évoluer. Accès direct pour toute modification. Résiliable à tout moment." },
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
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Cas concrets sur le Bassin d&apos;Arcachon</h2>
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
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Questions fréquentes — automatisation IA à Arcachon</h2>
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
            <p className="text-gray-400 mb-8 max-w-md mx-auto">L&apos;audit est gratuit, sans engagement. On se retrouve sur le Bassin ou en visio.</p>
            <Link href="https://calendly.com/ben40nocode/1h" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#e8632a] hover:bg-[#c4521f] text-white px-8 py-4 rounded-xl font-bold text-sm transition-colors">
              Réserver l&apos;audit gratuit <ArrowRight size={15} />
            </Link>
          </div>

        </div>
      </div>
    </>
  );
}
