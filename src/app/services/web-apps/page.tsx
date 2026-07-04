import type { Metadata } from "next";
import Link from "next/link";
import { Check, ArrowRight, Layers } from "lucide-react";

export const metadata: Metadata = {
  title: "Application Web sur Mesure pour PME",
  description: "On conçoit l'outil qui fait exactement ce dont vous avez besoin : espace client, réservations, tableau de bord, devis en ligne. Dès 2 500 €. Audit gratuit.",
  keywords: ["application web sur mesure", "outil métier PME", "espace client en ligne", "tableau de bord gestion", "Bordeaux", "Gironde"],
  alternates: { canonical: "https://www.nbn-ia.fr/services/web-apps" },
  openGraph: {
    title: "Application Web sur Mesure pour PME | NBN IA",
    description: "Votre outil sur mesure. Celui qui fait exactement ce dont vous avez besoin. Audit gratuit.",
    url: "https://www.nbn-ia.fr/services/web-apps",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Application Web sur Mesure pour PME",
  provider: { "@type": "Organization", name: "NBN IA", url: "https://www.nbn-ia.fr" },
  areaServed: ["Bordeaux", "Royan", "Arcachon", "Soulac", "Pauillac", "Lesparre", "Montalivet", "Lacanau"],
  description: "Conception d'applications web sur mesure pour PME et artisans en Gironde : espace client, réservations, tableau de bord, outil de devis.",
};

const examples = [
  {
    title: "Espace client en ligne",
    desc: "Vos clients se connectent pour voir leurs commandes, devis, factures ou documents. Fini les échanges d'emails dans tous les sens.",
  },
  {
    title: "Système de réservation",
    desc: "Un calendrier en ligne où vos clients réservent eux-mêmes. Confirmation automatique, rappels, gestion des disponibilités.",
  },
  {
    title: "Tableau de bord de gestion",
    desc: "Visualisez votre chiffre d'affaires, vos commandes, vos stocks ou vos performances depuis un seul endroit.",
  },
  {
    title: "Outil de devis & commande",
    desc: "Vos clients configurent leur demande en ligne et reçoivent un devis en temps réel. Vous validez d'un clic.",
  },
];

const benefits = [
  "Vos clients accèdent à leurs informations en ligne, sans avoir à vous appeler",
  "Votre équipe gère tout depuis un seul endroit — fini les tableaux Excel éparpillés",
  "Les tâches répétitives sont automatisées directement dans l'outil",
  "Vos données sont sécurisées et sauvegardées en permanence",
  "L'outil évolue avec vous — on peut ajouter des fonctionnalités au fil du temps",
];

export default function WebAppsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="min-h-screen bg-white pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-6">

          <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-100 text-[#e8632a] rounded-full px-4 py-1.5 text-xs font-semibold mb-8 tracking-wide uppercase">
            <Layers size={12} /> Applications métier
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Votre outil sur mesure.<br />
            <span className="text-[#e8632a]">Celui qui fait exactement ce dont vous avez besoin.</span>
          </h1>

          <p className="text-lg text-gray-500 max-w-2xl mb-10 leading-relaxed">
            Parfois, les logiciels du marché ne correspondent pas à votre façon de travailler. Trop complexes, trop génériques, ou trop chers. On conçoit des outils simples, faits pour votre activité — et pour votre équipe.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-20">
            <Link href="https://calendly.com/ben40nocode/1h" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#e8632a] hover:bg-[#c4521f] text-white px-7 py-4 rounded-xl font-semibold text-base transition-colors">
              Discuter de mon projet <ArrowRight size={17} />
            </Link>
            <Link href="/tarifs" className="inline-flex items-center gap-2 border border-gray-200 hover:border-gray-300 text-gray-700 px-7 py-4 rounded-xl font-semibold text-base transition-colors hover:bg-gray-50">
              Voir les tarifs
            </Link>
          </div>

          {/* Exemples */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Exemples d&apos;applications qu&apos;on a créées</h2>
            <p className="text-gray-500 mb-8">Chaque projet est différent. Voici quelques exemples pour vous donner une idée.</p>
            <div className="grid md:grid-cols-2 gap-5">
              {examples.map((ex) => (
                <div key={ex.title} className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">{ex.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{ex.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Ce qu'une web app peut faire */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Ce qu&apos;une application peut faire pour vous</h2>
              <ul className="space-y-3">
                {benefits.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-gray-600">
                    <Check size={15} className="text-[#e8632a] flex-shrink-0 mt-0.5" />{item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-orange-50 border border-orange-100 rounded-2xl p-7">
              <p className="text-xs font-semibold text-[#e8632a] uppercase tracking-wide mb-3">Tarif indicatif</p>
              <p className="text-3xl font-bold text-gray-900 mb-1">Dès 2 500 €</p>
              <p className="text-sm text-gray-500 mb-5">Le prix dépend de la complexité de votre projet. On vous donne une estimation précise lors de l&apos;audit gratuit.</p>
              <Link href="https://calendly.com/ben40nocode/1h" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#e8632a] hover:bg-[#c4521f] text-white px-5 py-3 rounded-xl font-semibold text-sm transition-colors">
                Audit gratuit pour estimer mon projet <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* CTA final */}
          <div className="bg-gray-900 rounded-2xl p-10 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">Parlons de votre projet</h2>
            <p className="text-gray-400 mb-8 max-w-md mx-auto">En 1h, on comprend ce dont vous avez besoin et on vous dit ce qu&apos;on peut faire. C&apos;est gratuit et sans engagement.</p>
            <Link href="https://calendly.com/ben40nocode/1h" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#e8632a] hover:bg-[#c4521f] text-white px-8 py-4 rounded-xl font-bold text-sm transition-colors">
              Discuter de mon projet <ArrowRight size={15} />
            </Link>
          </div>

        </div>
      </div>
    </>
  );
}
