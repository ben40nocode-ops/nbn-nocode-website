import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Sites Web & Automatisation IA à Lacanau",
  description: "Sites web, apps et automatisation IA pour les campings, écoles de surf et commerces de Lacanau : réservations en ligne, gestion de saison, réponses clients automatisées. Audit gratuit 1h.",
  keywords: ["agence web lacanau", "site internet lacanau", "web app lacanau", "automatisation lacanau", "camping lacanau digital"],
  alternates: { canonical: "https://www.nbn-ia.fr/lacanau" },
};

const services = [
  { href: "/camping-lacanau", title: "Solutions pour campings", desc: "Automatisation des réservations et de la communication client pour les campings de Lacanau." },
  { href: "/app-camping-lacanau", title: "App de gestion camping", desc: "Application sur mesure : planning, arrivées, demandes clients — la saison sans stress." },
  { href: "/services/sites-internet", title: "Création de site web", desc: "Sites vitrines et e-commerce rapides, optimisés Google, pour les pros de Lacanau." },
  { href: "/services/automatisation-ia", title: "Automatisation & agents IA", desc: "Devis, relances, prises de RDV et réponses clients automatisés, 24h/24." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      name: "NBN IA",
      url: "https://www.nbn-ia.fr/lacanau",
      areaServed: [{ "@type": "City", name: "Lacanau" }, { "@type": "AdministrativeArea", name: "Gironde" }],
      description: "Sites web, web apps et automatisation IA pour les entreprises de Lacanau.",
      telephone: "+33640685975",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: "https://www.nbn-ia.fr" },
        { "@type": "ListItem", position: 2, name: "Lacanau", item: "https://www.nbn-ia.fr/lacanau" },
      ],
    },
  ],
};

export default function LacanauPage() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="max-w-4xl mx-auto px-6">

        <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-100 text-[#e8632a] rounded-full px-4 py-1.5 text-xs font-semibold mb-8 tracking-wide uppercase">
          <MapPin size={12} /> Lacanau · Gironde
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Sites web & automatisation IA à Lacanau
        </h1>
        <p className="text-lg text-gray-500 mb-6 leading-relaxed">
          Lacanau concentre sa saison sur quelques mois : campings complets, écoles de surf débordées, commerces qui
          tournent à plein régime avec des équipes saisonnières. J&apos;aide les professionnels canaulais à absorber ce
          pic grâce à des sites web performants et des systèmes qui répondent, réservent et relancent à leur place.
        </p>
        <p className="text-base text-gray-500 mb-10 leading-relaxed">
          Basé dans le triangle Bordeaux · Royan · Arcachon, j&apos;interviens en présentiel à Lacanau et sur toute la
          côte, ou 100 % à distance. Tout commence par un audit gratuit d&apos;1h.
        </p>

        <Link href="https://calendly.com/ben40nocode/1h" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#e8632a] hover:bg-[#c4521f] text-white px-7 py-4 rounded-xl font-semibold transition-colors mb-16">
          Audit gratuit (1h) <ArrowRight size={17} />
        </Link>

        <h2 className="text-2xl font-bold text-gray-900 mb-8">Mes services à Lacanau</h2>
        <div className="grid sm:grid-cols-2 gap-5">
          {services.map((s) => (
            <Link key={s.href} href={s.href} className="group p-6 rounded-2xl border border-gray-200 bg-white hover:border-[#e8632a] hover:shadow-sm transition-all">
              <h3 className="text-base font-bold text-gray-900 mb-2 group-hover:text-[#e8632a] transition-colors">{s.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-3">{s.desc}</p>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#e8632a]">
                En savoir plus <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
              </span>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}
