import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "NBN IA à Royan — Sites Web, Web Apps & Automatisation IA",
  description: "Sites web, web apps et automatisation IA pour les entreprises de Royan et de Charente-Maritime : hôtels, restaurants, pêcheurs, artisans. Présence locale, audit gratuit 1h.",
  keywords: ["agence web royan", "site internet royan", "web app royan", "automatisation royan", "agence IA royan"],
  alternates: {
    canonical: "https://www.nbn-ia.fr/royan",
    languages: {
      fr: "https://www.nbn-ia.fr/royan",
      en: "https://www.nbn-ia.fr/en/royan",
      "x-default": "https://www.nbn-ia.fr/royan",
    },
  },
};

const services = [
  { href: "/automatisation-royan", title: "Automatisation & agents IA", desc: "Devis, relances, RDV et réponses clients automatisés pour les PME de Royan." },
  { href: "/site-internet-royan", title: "Création de site internet", desc: "Sites vitrines et e-commerce pour les entreprises de Royan." },
  { href: "/web-app-royan", title: "Création d'application web", desc: "Applications métiers à Royan : espace client, réservation, dashboard." },
  { href: "/site-hotel-royan", title: "Site web pour hôtels", desc: "Sites performants avec réservation en ligne pour l'hôtellerie royannaise." },
  { href: "/site-restaurant-royan", title: "Site web pour restaurants", desc: "Réservation, menu en ligne et agent IA pour les restaurants de Royan." },
  { href: "/peche-royan", title: "Digitalisation pêche & mareyage", desc: "Outils sur mesure pour les professionnels de la pêche à Royan." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      name: "NBN IA",
      url: "https://www.nbn-ia.fr/royan",
      areaServed: [{ "@type": "City", name: "Royan" }, { "@type": "AdministrativeArea", name: "Charente-Maritime" }],
      description: "Sites web, web apps et automatisation IA pour les entreprises de Royan et de Charente-Maritime.",
      telephone: "+33640685975",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: "https://www.nbn-ia.fr" },
        { "@type": "ListItem", position: 2, name: "Royan", item: "https://www.nbn-ia.fr/royan" },
      ],
    },
  ],
};

export default function RoyanPage() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="max-w-4xl mx-auto px-6">

        <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-100 text-[#e8632a] rounded-full px-4 py-1.5 text-xs font-semibold mb-8 tracking-wide uppercase">
          <MapPin size={12} /> Royan · Charente-Maritime
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          NBN IA à Royan — sites web, web apps & automatisation IA
        </h1>
        <p className="text-lg text-gray-500 mb-6 leading-relaxed">
          Royan vit au rythme de la saison balnéaire : pics d&apos;activité l&apos;été, demandes clients en masse, équipes
          souvent réduites. J&apos;aide les entreprises royannaises — hôtels, restaurants, pêcheurs, commerces et artisans —
          à gagner du temps grâce à des sites web performants et des systèmes d&apos;automatisation IA sur mesure.
        </p>
        <p className="text-base text-gray-500 mb-10 leading-relaxed">
          Basé dans le triangle Bordeaux · Royan · Arcachon, j&apos;interviens en présentiel sur Royan et toute la
          Charente-Maritime, ou 100 % à distance. Tout commence par un appel gratuit d&apos;1h.
        </p>

        <Link href="https://calendly.com/ben40nocode/1h" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#e8632a] hover:bg-[#c4521f] text-white px-7 py-4 rounded-xl font-semibold transition-colors mb-16">
          Appel gratuit (1h) <ArrowRight size={17} />
        </Link>

        <h2 className="text-2xl font-bold text-gray-900 mb-8">Mes services à Royan</h2>
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
