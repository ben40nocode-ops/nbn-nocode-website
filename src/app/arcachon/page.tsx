import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "NBN IA à Arcachon — Sites Web, Web Apps & Automatisation IA",
  description: "Sites web, web apps et automatisation IA pour les entreprises du Bassin d'Arcachon : hôtels, campings, restaurants, ostréiculteurs. Spécialiste tourisme côtier. Audit gratuit 1h.",
  keywords: ["agence web arcachon", "site internet arcachon", "web app arcachon", "automatisation arcachon", "agence IA arcachon"],
  alternates: { canonical: "https://www.nbn-ia.fr/arcachon" },
};

const services = [
  { href: "/automatisation-arcachon", title: "Automatisation & agents IA", desc: "Automatisez devis, relances, réservations et réponses clients pour votre activité sur le Bassin." },
  { href: "/site-internet-arcachon", title: "Création de site internet", desc: "Sites vitrines et e-commerce pour les entreprises du Bassin d'Arcachon." },
  { href: "/web-app-arcachon", title: "Création d'application web", desc: "Applications métiers à Arcachon : espace client, réservation, gestion de saison." },
  { href: "/site-hotel-arcachon", title: "Site web pour hôtels", desc: "Sites performants avec réservation en ligne pour l'hôtellerie du Bassin." },
  { href: "/camping-arcachon", title: "Solutions pour campings", desc: "Automatisation de la communication et des réservations pour les campings d'Arcachon." },
  { href: "/restaurant-arcachon", title: "Site web pour restaurants", desc: "Réservation, menu en ligne et agent IA pour les restaurants arcachonnais." },
  { href: "/ostreiculteur-arcachon", title: "Digitalisation ostréiculture", desc: "Vente directe, commandes et relances pour les ostréiculteurs du Bassin." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      name: "NBN IA",
      url: "https://www.nbn-ia.fr/arcachon",
      areaServed: [{ "@type": "City", name: "Arcachon" }, { "@type": "AdministrativeArea", name: "Bassin d'Arcachon" }],
      description: "Sites web, web apps et automatisation IA pour les entreprises du Bassin d'Arcachon.",
      telephone: "+33640685975",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: "https://www.nbn-ia.fr" },
        { "@type": "ListItem", position: 2, name: "Arcachon", item: "https://www.nbn-ia.fr/arcachon" },
      ],
    },
  ],
};

export default function ArcachonPage() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="max-w-4xl mx-auto px-6">

        <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-100 text-[#e8632a] rounded-full px-4 py-1.5 text-xs font-semibold mb-8 tracking-wide uppercase">
          <MapPin size={12} /> Arcachon · Bassin d&apos;Arcachon
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          NBN IA à Arcachon — sites web, web apps & automatisation IA
        </h1>
        <p className="text-lg text-gray-500 mb-6 leading-relaxed">
          Le Bassin d&apos;Arcachon concentre une activité touristique intense et saisonnière : hôtels et campings complets
          l&apos;été, restaurants débordés, ostréiculteurs entre production et vente directe. J&apos;aide les entreprises du
          Bassin à tenir la cadence grâce à des sites web performants et des systèmes d&apos;automatisation IA sur mesure.
        </p>
        <p className="text-base text-gray-500 mb-10 leading-relaxed">
          Basé dans le triangle Bordeaux · Royan · Arcachon, j&apos;interviens en présentiel sur Arcachon, La Teste,
          Gujan-Mestras et tout le Bassin, ou 100 % à distance. Tout commence par un appel gratuit d&apos;1h.
        </p>

        <Link href="https://calendly.com/ben40nocode/1h" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#e8632a] hover:bg-[#c4521f] text-white px-7 py-4 rounded-xl font-semibold transition-colors mb-16">
          Appel gratuit (1h) <ArrowRight size={17} />
        </Link>

        <h2 className="text-2xl font-bold text-gray-900 mb-8">Mes services sur le Bassin d&apos;Arcachon</h2>
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
