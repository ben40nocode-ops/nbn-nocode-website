import type { Metadata } from "next";
import { localBusinessSchema, simpleBreadcrumb } from "@/lib/seo-schemas";
import Link from "next/link";
import { Check, ArrowRight, Layers } from "lucide-react";

export const metadata: Metadata = {
  title: "Création Site Web & Application à Bordeaux",
  description: "Sites web et applications sur mesure à Bordeaux. Next.js, vibe coding avec Claude Code. Performant, connecté à vos automatisations IA. Devis gratuit.",
  keywords: ["création site web Bordeaux", "agence web Bordeaux", "développement application Bordeaux", "vibe coding Bordeaux", "Next.js Bordeaux", "site web IA Bordeaux", "web app IA Bordeaux"],
  alternates: { canonical: "https://www.nbn-ia.fr/creation-site-web-bordeaux" },
  openGraph: {
    title: "Création Site Web & App à Bordeaux — NBN IA",
    description: "Sites web et web apps IA à Bordeaux. Next.js, vibe coding, Claude Code. Audit gratuit.",
    url: "https://www.nbn-ia.fr/creation-site-web-bordeaux",
  },
};

const faqs = [
  {
    q: "Combien coûte la création d'un site web à Bordeaux ?",
    a: "Un site vitrine moderne démarre à 800€ HT. Une web app avec authentification, base de données et intégrations IA démarre à 2 500€ HT. On vous donne un devis transparent après l'audit gratuit d'1h.",
  },
  {
    q: "Qu'est-ce que le vibe coding et pourquoi c'est plus rapide ?",
    a: "Le vibe coding consiste à piloter Claude Code (IA d'Anthropic) pour écrire le code plutôt que de le rédiger ligne par ligne. Résultat : des projets livrés en jours plutôt qu'en semaines, avec une qualité de code production. On ne sacrifie pas la qualité — on élimine le temps perdu.",
  },
  {
    q: "Mon site sera-t-il bien référencé sur Google ?",
    a: "Oui. On construit tous nos sites avec le SEO dès la première ligne : balises méta, données structurées schema.org, performance Core Web Vitals, sitemap, robots.txt. On s'occupe aussi de l'optimisation continue après la mise en ligne.",
  },
  {
    q: "Puis-je modifier mon site moi-même après livraison ?",
    a: "Oui. On configure un espace d'administration simple selon vos besoins. Pour du contenu courant (textes, photos, articles de blog), vous gérez en autonomie. Pour les évolutions techniques, on est disponibles.",
  },
  {
    q: "Vous faites aussi des sites pour les commerçants et artisans bordelais ?",
    a: "Oui, c'est même une spécialité. On a accompagné des restaurateurs, des artisans, des professionnels de santé et des commerces de proximité à Bordeaux. On comprend vos contraintes de budget et de délai.",
  },
  {
    q: "Quelle est la différence entre votre agence et une agence web classique à Bordeaux ?",
    a: "Une agence classique livre un site. On livre un système : un site connecté à vos automatisations, qui peut intégrer un agent IA, qui tourne sur une infrastructure moderne (Next.js, Vercel) et qui est maintenu dans le temps. On pense business, pas juste design.",
  },
];

const casUsage = [
  {
    secteur: "Restaurant / Bar à Bordeaux",
    probleme: "Site WordPress vieillissant, lent, difficile à modifier, zéro intégration avec le système de réservation.",
    solution: "Refonte Next.js avec intégration du système de réservation, page menu mise à jour en un clic, agent IA pour les questions fréquentes.",
    gain: "Score Lighthouse 98. +35% de réservations via le site en 60 jours.",
  },
  {
    secteur: "Cabinet / Bureau d'études",
    probleme: "Pas de site ou site amateur. Prospects qui cherchent sur Google et tombent sur des concurrents.",
    solution: "Site vitrine professionnel avec pages services ciblées, blog SEO, formulaire qualifié connecté à un CRM simple.",
    gain: "Première page Google sur 3 requêtes ciblées en 90 jours. 5 leads entrants par mois.",
  },
  {
    secteur: "Startup / SaaS Bordeaux",
    probleme: "Besoin d'une web app complète rapidement : authentification, dashboard, API, paiement. Budget limité.",
    solution: "Web app Next.js + Supabase + Stripe + Claude AI. Livraison en 3 semaines avec vibe coding.",
    gain: "MVP livré 3x plus vite qu'avec une agence classique. 40% de budget économisé.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Création Site Web & Web Apps IA à Bordeaux",
      provider: { "@type": "Organization", name: "NBN IA", url: "https://www.nbn-ia.fr" },
      areaServed: { "@type": "City", name: "Bordeaux" },
      description: "Création de sites web et web apps IA avec Next.js et vibe coding pour les PME de Bordeaux.",
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "EUR",
        lowPrice: "800",
        highPrice: "15000",
      },
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
      pageUrl: "https://www.nbn-ia.fr/creation-site-web-bordeaux",
      name: "NBN IA — Création Site Web & Web Apps IA Bordeaux",
      description: "Création de sites web et de web apps sur mesure à Bordeaux. Next.js, Webflow, vibe coding avec Claude Code. Sites de 800€ à 15 000€.",
    }),
    simpleBreadcrumb("Création Site Web Bordeaux", "https://www.nbn-ia.fr/creation-site-web-bordeaux"),
  ],
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

          <p className="text-lg text-gray-500 max-w-2xl mb-6 leading-relaxed">
            On ne fait pas juste des sites web. On conçoit des interfaces connectées à vos outils, vos automatisations et vos données — rapides, responsives, pensées pour convertir et maintenues dans le temps.
          </p>

          <p className="text-base text-gray-500 max-w-2xl mb-10 leading-relaxed">
            On utilise le vibe coding avec Claude Code : développement jusqu&apos;à 10x plus rapide sans sacrifier la qualité. Des projets livrés en jours, pas en mois. Basé à Bordeaux, on accompagne des PME girondines et des startups partout en France.
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
                  "Site vitrine moderne & performant (Next.js / Webflow)",
                  "Application SaaS connectée à vos outils",
                  "Espace client avec authentification sécurisée",
                  "Dashboard de pilotage de vos données",
                  "Landing pages avec optimisation SEO",
                  "Intégration de votre agent IA dans le site",
                  "Connexion Stripe pour abonnements ou paiements",
                  "Blog et contenu SEO automatisé",
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
                On pilote Claude Code pour développer jusqu&apos;à 10x plus vite sans sacrifier la qualité. Des projets livrés en jours, pas en semaines. Code propre, maintenable, prêt pour la production.
              </p>
              <ul className="space-y-3 text-sm text-gray-600">
                {[
                  "Livraison rapide (jours, pas semaines)",
                  "Code propre et maintenable à long terme",
                  "SEO-first dès la première ligne",
                  "Connecté à votre stack existante",
                  "Performance Core Web Vitals optimisée",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <Check size={15} className="text-[#e8632a] flex-shrink-0 mt-0.5" />{item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Comment ça marche */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Comment on travaille avec vous</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { step: "01", title: "Cadrage & devis (1h)", desc: "On définit ensemble le scope : fonctionnalités, design, intégrations. Vous repartez avec un devis transparent et un délai de livraison précis. Zéro surprise." },
                { step: "02", title: "Développement & itérations", desc: "On livre par étapes avec des points réguliers. Vous voyez votre site évoluer en temps réel. Les retours sont intégrés au fur et à mesure." },
                { step: "03", title: "Mise en ligne & suivi", desc: "Déploiement sur Vercel (infrastructure mondiale, temps de chargement <1s). Suivi SEO, analytics, et évolutions continues." },
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
            <p className="text-gray-500 text-sm mb-8">Exemples de projets réalisés pour des entreprises locales.</p>
            <div className="flex flex-col gap-6">
              {casUsage.map(({ secteur, probleme, solution, gain }) => (
                <div key={secteur} className="border border-gray-100 rounded-2xl p-7">
                  <div className="inline-flex items-center bg-orange-50 text-[#e8632a] text-xs font-semibold px-3 py-1 rounded-full mb-4">{secteur}</div>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="font-semibold text-gray-700 mb-1">Situation</p>
                      <p className="text-gray-500">{probleme}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-700 mb-1">Ce qu&apos;on a créé</p>
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
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Questions fréquentes — création site web à Bordeaux</h2>
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
