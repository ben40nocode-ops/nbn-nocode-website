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
  { n: "1", title: "Appel gratuit (1h)", desc: "On définit ensemble votre positionnement, vos projets à mettre en avant et l'objectif du site." },
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
    <div className="min-h-screen pt-32 pb-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="max-w-4xl mx-auto px-6">

        {/* Hero */}
        <p className="text-xs text-[#FF5A1F] uppercase tracking-widest mb-4 font-semibold">Site portfolio</p>
        <h1 className="text-4xl md:text-[3.4rem] font-extrabold text-[#0E1116] tracking-[-0.03em] mb-6 leading-[1.04]">
          Un site portfolio qui transforme vos visiteurs en clients
        </h1>
        <p className="text-lg text-[#6B7280] mb-8 leading-relaxed">
          Vous êtes freelance ou consultant ? Votre site est votre meilleure carte de visite. Je conçois des portfolios
          professionnels, rapides et optimisés pour Google — pensés pour mettre en valeur votre travail et déclencher
          la prise de contact.
        </p>
        <div className="flex flex-wrap gap-4 mb-16">
          <Link href="https://calendly.com/ben40nocode/1h" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#FF5A1F] hover:bg-[#E64A12] hover:-translate-y-0.5 text-white px-7 py-4 rounded-xl font-semibold transition-all shadow-[0_10px_24px_rgba(255,90,31,.28)]">
            Appel gratuit (1h) <ArrowRight size={17} />
          </Link>
          <Link href="/tarifs" className="inline-flex items-center gap-2 border border-[#E2E0DA] hover:-translate-y-0.5 text-[#2E343D] px-7 py-4 rounded-xl font-semibold transition-colors">
            Voir les tarifs
          </Link>
        </div>

        {/* Features */}
        <h2 className="text-2xl font-extrabold text-[#0E1116] tracking-[-0.02em] mb-8">Ce que votre portfolio inclut</h2>
        <div className="grid sm:grid-cols-2 gap-5 mb-16">
          {features.map((f) => (
            <div key={f.title} className="p-6 rounded-2xl border border-[#E2E0DA] bg-white shadow-[0_14px_34px_rgba(14,17,22,.06)]">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 bg-[#FCE9DF]">
                <f.icon size={20} className="text-[#FF5A1F]" />
              </div>
              <h3 className="text-base font-bold text-[#0E1116] mb-2">{f.title}</h3>
              <p className="text-sm text-[#6B7280] leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Process */}
        <h2 className="text-2xl font-extrabold text-[#0E1116] tracking-[-0.02em] mb-8">Comment ça se passe</h2>
        <div className="grid sm:grid-cols-3 gap-5 mb-16">
          {steps.map((s) => (
            <div key={s.n} className="p-6 rounded-2xl border border-[#E2E0DA] bg-white">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#FF5A1F] text-white text-sm font-bold mb-4">{s.n}</span>
              <h3 className="text-base font-bold text-[#0E1116] mb-2">{s.title}</h3>
              <p className="text-sm text-[#6B7280] leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Why */}
        <div className="p-8 rounded-2xl bg-[#fff5f0] border border-[#FF5A1F]/20 mb-16">
          <h2 className="text-xl font-bold text-[#0E1116] mb-4">Pourquoi confier votre portfolio à NBN IA ?</h2>
          <ul className="space-y-3">
            {[
              "Conception ET développement par la même personne — pas d'aller-retour entre un graphiste et un dev",
              "Sites construits avec des technologies modernes (Next.js), rapides et durables",
              "Optimisation Google incluse pour être trouvé localement",
              "Possibilité de connecter votre site à des automatisations IA (relances, prise de RDV…)",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-[#2E343D]">
                <Check size={16} className="text-[#FF5A1F] flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* FAQ */}
        <h2 className="text-2xl font-extrabold text-[#0E1116] tracking-[-0.02em] mb-8">Questions fréquentes</h2>
        <div className="space-y-4 mb-16">
          {faq.map((item) => (
            <div key={item.q} className="p-6 rounded-2xl border border-[#E2E0DA] bg-white shadow-[0_14px_34px_rgba(14,17,22,.06)]">
              <h3 className="text-base font-bold text-[#0E1116] mb-2">{item.q}</h3>
              <p className="text-sm text-[#2E343D] leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-[#0E1116] rounded-[26px] p-8 shadow-[0_40px_100px_rgba(14,17,22,.4)] text-center">
          <p className="text-white font-bold text-lg mb-2">Prêt à mettre votre travail en valeur ?</p>
          <p className="text-gray-400 text-sm mb-6">Réservez un appel gratuit d&apos;1h — on définit ensemble le portfolio qui vous ressemble.</p>
          <Link href="https://calendly.com/ben40nocode/1h" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#FF5A1F] hover:bg-[#E64A12] text-white px-6 py-3 rounded-xl text-sm font-semibold transition-colors">
            Réserver mon appel gratuit (1h) <ArrowRight size={14} />
          </Link>
        </div>

      </div>
    </div>
  );
}
