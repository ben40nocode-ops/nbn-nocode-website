import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Sites Web & Automatisation IA à Montalivet",
  description: "Sites web, apps et automatisation IA pour les campings, gîtes et commerces de Montalivet et Vendays-Montalivet : réservations en ligne, gestion de saison automatisée. Audit gratuit 1h.",
  keywords: ["agence web montalivet", "site internet montalivet", "automatisation montalivet", "camping montalivet digital", "gîte vendays-montalivet"],
  alternates: { canonical: "https://www.nbn-ia.fr/montalivet" },
};

const services = [
  { href: "/site-camping-montalivet", title: "Site web pour campings", desc: "Site avec réservation en ligne et communication automatisée pour les campings montalivetains." },
  { href: "/services/sites-internet", title: "Création de site web", desc: "Sites vitrines pour gîtes, locations et commerces — visibles sur Google, prêts pour la saison." },
  { href: "/services/web-apps", title: "Web app sur mesure", desc: "Application de gestion : planning, arrivées, demandes clients centralisées." },
  { href: "/services/automatisation-ia", title: "Automatisation & agents IA", desc: "Réponses clients, réservations et relances automatisées, 24h/24 même en haute saison." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      name: "NBN IA",
      url: "https://www.nbn-ia.fr/montalivet",
      areaServed: [{ "@type": "City", name: "Vendays-Montalivet" }, { "@type": "AdministrativeArea", name: "Médoc" }],
      description: "Sites web, web apps et automatisation IA pour les entreprises de Montalivet.",
      telephone: "+33640685975",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: "https://www.nbn-ia.fr" },
        { "@type": "ListItem", position: 2, name: "Montalivet", item: "https://www.nbn-ia.fr/montalivet" },
      ],
    },
  ],
};

export default function MontalivetPage() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="max-w-4xl mx-auto px-6">

        <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-100 text-[#e8632a] rounded-full px-4 py-1.5 text-xs font-semibold mb-8 tracking-wide uppercase">
          <MapPin size={12} /> Montalivet · Médoc
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Sites web & automatisation IA à Montalivet
        </h1>
        <p className="text-lg text-gray-500 mb-6 leading-relaxed">
          À Montalivet, tout se joue entre juin et septembre : campings et gîtes complets, vagues de demandes par
          email et téléphone, équipes réduites hors saison. J&apos;aide les professionnels de Vendays-Montalivet à
          encaisser ce rythme avec des sites qui prennent les réservations et des systèmes IA qui répondent aux
          questions récurrentes — jour et nuit.
        </p>
        <p className="text-base text-gray-500 mb-10 leading-relaxed">
          Basé dans le triangle Bordeaux · Royan · Arcachon, j&apos;interviens en présentiel à Montalivet et dans tout
          le Médoc, ou 100 % à distance. Tout commence par un appel gratuit d&apos;1h.
        </p>

        <Link href="https://calendly.com/ben40nocode/1h" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#e8632a] hover:bg-[#c4521f] text-white px-7 py-4 rounded-xl font-semibold transition-colors mb-16">
          Appel gratuit (1h) <ArrowRight size={17} />
        </Link>

        <h2 className="text-2xl font-bold text-gray-900 mb-8">Mes services à Montalivet</h2>
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
