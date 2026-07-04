import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Globe, Zap, Search, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Site Portfolio pour Freelances & Consultants",
  description: "Création de site portfolio professionnel pour freelances et consultants : CV digital, showcase de projets, formulaire de contact. Design moderne, SEO optimisé, livré rapidement. Devis gratuit.",
  alternates: { canonical: "https://www.nbn-ia.fr/portfolio-freelance" },
  keywords: ["portfolio freelance", "site portfolio consultant", "CV digital", "site vitrine freelance", "création portfolio en ligne"],
  openGraph: {
    title: "Site Portfolio pour Freelances & Consultants | NBN IA",
    description: "Un site portfolio qui transforme les visiteurs en clients. Design moderne, SEO, formulaire de contact. Livré rapidement.",
    url: "https://www.nbn-ia.fr/portfolio-freelance",
  },
};

const features = [
  { icon: Globe, title: "Showcase de projets", desc: "Mettez en avant vos meilleures réalisations avec des études de cas claires et visuelles." },
  { icon: Mail, title: "Formulaire de contact", desc: "Captez vos prospects directement depuis votre site, sans friction." },
  { icon: Search, title: "SEO optimisé", desc: "Soyez trouvé sur Google quand on cherche vos compétences dans votre région." },
  { icon: Zap, title: "Rapide & responsive", desc: "Un site qui charge vite et s'affiche parfaitement sur mobile, tablette et ordinateur." },
];

const steps = [
  { n: "1", title: "Audit gratuit (1h)", desc: "On définit ensemble votre positionnement, vos projets à mettre en avant et l'objectif du site." },
  { n: "2", title: "Conception & développement", desc: "Je conçois et développe votre portfolio sur mesure. Vous validez à chaque étape." },
  { n: "3", title: "Mise en ligne & suivi", desc: "Votre site est publié, optimisé pour Google, et je reste disponible pour le faire évoluer." },
];

const faq = [
  { q: "Combien coûte un site portfolio ?", a: "Un site portfolio professionnel démarre à 800 € (formule Landing Page). Le tarif dépend du nombre de pages et des fonctionnalités. L'audit d'1h est gratuit et sans engagement." },
  { q: "En combien de temps mon site est-il livré ?", a: "La plupart des sites portfolio sont livrés en moins de 15 jours, selon la complexité et la rapidité des retours." },
  { q: "Puis-je le mettre à jour moi-même ensuite ?", a: "Oui. Je peux intégrer un CMS simple pour que vous gériez vos projets en autonomie, ou m'occuper des mises à jour via un forfait de maintenance." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Création de site portfolio pour freelances",
      provider: { "@type": "Organization", name: "NBN IA", url: "https://www.nbn-ia.fr" },
      areaServed: [{ "@type": "City", name: "Bordeaux" }, { "@type": "AdministrativeArea", name: "Gironde" }, { "@type": "Country", name: "France" }],
      description: "Conception de sites portfolio sur mesure pour freelances et consultants : showcase de projets, formulaire de contact, SEO.",
      priceRange: "€€",
    },
    {
      "@type": "FAQPage",
      mainEntity: faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: "https://www.nbn-ia.fr" },
        { "@type": "ListItem", position: 2, name: "Portfolio Freelance", item: "https://www.nbn-ia.fr/portfolio-freelance" },
      ],
    },
  ],
};

export default function Page() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="max-w-4xl mx-auto px-6">

        {/* Hero */}
        <p className="text-xs text-[#e8632a] uppercase tracking-widest mb-4 font-semibold">Site portfolio</p>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Un site portfolio qui transforme vos visiteurs en clients
        </h1>
        <p className="text-lg text-gray-500 mb-8 leading-relaxed">
          Vous êtes freelance ou consultant ? Votre site est votre meilleure carte de visite. Je conçois des portfolios
          professionnels, rapides et optimisés pour Google — pensés pour mettre en valeur votre travail et déclencher
          la prise de contact.
        </p>
        <div className="flex flex-wrap gap-4 mb-16">
          <Link href="https://calendly.com/ben40nocode/1h" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#e8632a] hover:bg-[#c4521f] text-white px-7 py-4 rounded-xl font-semibold transition-colors">
            Audit gratuit (1h) <ArrowRight size={17} />
          </Link>
          <Link href="/tarifs" className="inline-flex items-center gap-2 border border-gray-300 hover:border-gray-400 text-gray-700 px-7 py-4 rounded-xl font-semibold transition-colors">
            Voir les tarifs
          </Link>
        </div>

        {/* Features */}
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Ce que votre portfolio inclut</h2>
        <div className="grid sm:grid-cols-2 gap-5 mb-16">
          {features.map((f) => (
            <div key={f.title} className="p-6 rounded-2xl border border-gray-100 bg-gray-50">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 bg-orange-50">
                <f.icon size={20} className="text-[#e8632a]" />
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2">{f.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Process */}
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Comment ça se passe</h2>
        <div className="grid sm:grid-cols-3 gap-5 mb-16">
          {steps.map((s) => (
            <div key={s.n} className="p-6 rounded-2xl border border-gray-100 bg-white">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#e8632a] text-white text-sm font-bold mb-4">{s.n}</span>
              <h3 className="text-base font-bold text-gray-900 mb-2">{s.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Why */}
        <div className="p-8 rounded-2xl bg-[#fff5f0] border border-[#e8632a]/20 mb-16">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Pourquoi confier votre portfolio à NBN IA ?</h2>
          <ul className="space-y-3">
            {[
              "Conception ET développement par la même personne — pas d'aller-retour entre un graphiste et un dev",
              "Sites construits avec des technologies modernes (Next.js), rapides et durables",
              "Optimisation Google incluse pour être trouvé localement",
              "Possibilité de connecter votre site à des automatisations IA (relances, prise de RDV…)",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-gray-600">
                <Check size={16} className="text-[#e8632a] flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* FAQ */}
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Questions fréquentes</h2>
        <div className="space-y-4 mb-16">
          {faq.map((item) => (
            <div key={item.q} className="p-6 rounded-2xl border border-gray-100 bg-gray-50">
              <h3 className="text-base font-bold text-gray-900 mb-2">{item.q}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-gray-900 rounded-2xl p-8 text-center">
          <p className="text-white font-bold text-lg mb-2">Prêt à mettre votre travail en valeur ?</p>
          <p className="text-gray-400 text-sm mb-6">Réservez un audit gratuit d&apos;1h — on définit ensemble le portfolio qui vous ressemble.</p>
          <Link href="https://calendly.com/ben40nocode/1h" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#e8632a] hover:bg-[#c4521f] text-white px-6 py-3 rounded-xl text-sm font-semibold transition-colors">
            Réserver l&apos;audit gratuit <ArrowRight size={14} />
          </Link>
        </div>

      </div>
    </div>
  );
}
