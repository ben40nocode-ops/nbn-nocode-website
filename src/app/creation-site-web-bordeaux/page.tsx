import type { Metadata } from "next";
import Link from "next/link";
import { Check, ArrowRight, Layers } from "lucide-react";

export const metadata: Metadata = {
  title: "Création Site Web & Application à Bordeaux — NBN IA",
  description: "Création de sites web et web apps IA à Bordeaux. Webflow, Next.js, vibe coding. Rapide, performant, connecté à vos automatisations IA. Devis gratuit.",
  keywords: ["création site web Bordeaux", "création application Bordeaux", "vibe coding Bordeaux", "Webflow Bordeaux", "web app IA Bordeaux", "site web IA Bordeaux", "Next.js Bordeaux"],
  alternates: { canonical: "https://www.nbn-ia.fr/creation-site-web-bordeaux" },
  openGraph: {
    title: "Création Site Web & App à Bordeaux — NBN IA",
    description: "Sites web et web apps IA à Bordeaux. Webflow, Next.js, vibe coding. Audit gratuit.",
    url: "https://www.nbn-ia.fr/creation-site-web-bordeaux",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Création Site Web & Web Apps IA à Bordeaux",
  provider: { "@type": "Organization", name: "NBN IA", url: "https://www.nbn-ia.fr" },
  areaServed: { "@type": "City", name: "Bordeaux" },
  description: "Création de sites web et web apps IA avec Webflow, Next.js et vibe coding pour les PME de Bordeaux.",
};

export default function CreationSiteWebBordeauxPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="min-h-screen bg-white pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-6">

          <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-100 text-[#e8632a] rounded-full px-4 py-1.5 text-xs font-semibold mb-8 tracking-wide uppercase">
            <Layers size={12} /> Création Web & App — Bordeaux
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Site web & application<br />
            <span className="text-[#e8632a]">connectés à vos automatisations IA</span>
          </h1>

          <p className="text-lg text-gray-500 max-w-2xl mb-10 leading-relaxed">
            On ne fait pas juste des sites web. On conçoit des interfaces connectées à vos workflows, vos agents IA et vos données — avec Webflow, Next.js ou en vibe coding (IA-assisted development).
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-20">
            <Link href="https://calendly.com/ben40nocode/1h" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#e8632a] hover:bg-[#c4521f] text-white px-7 py-4 rounded-xl font-semibold text-base transition-colors">
              Devis gratuit <ArrowRight size={17} />
            </Link>
            <Link href="/tarifs" className="inline-flex items-center gap-2 border border-gray-200 hover:border-gray-300 text-gray-700 px-7 py-4 rounded-xl font-semibold text-base transition-colors hover:bg-gray-50">
              Voir les tarifs
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Ce qu&apos;on crée pour vous</h2>
              <ul className="space-y-3">
                {[
                  "Site vitrine moderne & performant (Webflow / Next.js)",
                  "Application SaaS connectée à vos outils",
                  "Espace client avec authentification",
                  "Dashboard de pilotage de vos données",
                  "Landing pages avec A/B testing",
                  "Intégration de votre agent IA directement dans le site",
                  "Connexion Stripe pour abonnements ou paiements",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-gray-600">
                    <Check size={15} className="text-[#e8632a] flex-shrink-0 mt-0.5" />{item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-50 rounded-2xl p-7">
              <h2 className="text-lg font-bold text-gray-900 mb-3">Vibe coding — notre approche</h2>
              <p className="text-sm text-gray-500 mb-4 leading-relaxed">
                On utilise l&apos;IA (Claude, Cursor) pour développer jusqu&apos;à 10x plus vite sans sacrifier la qualité. Résultat : des projets livrés en jours, pas en mois.
              </p>
              <ul className="space-y-3 text-sm text-gray-600">
                {[
                  "Livraison rapide (jours, pas semaines)",
                  "Code propre et maintenable",
                  "Connecté à votre stack nocode",
                  "SEO-first dès le départ",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <Check size={15} className="text-[#e8632a] flex-shrink-0 mt-0.5" />{item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-gray-900 rounded-2xl p-10 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">Votre projet en ligne en quelques jours</h2>
            <p className="text-gray-400 mb-8 max-w-md mx-auto">Audit gratuit de 1h. On définit ensemble le scope et on vous donne un devis transparent.</p>
            <Link href="https://calendly.com/ben40nocode/1h" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#e8632a] hover:bg-[#c4521f] text-white px-8 py-4 rounded-xl font-bold text-sm transition-colors">
              Parler de mon projet <ArrowRight size={15} />
            </Link>
          </div>

        </div>
      </div>
    </>
  );
}
