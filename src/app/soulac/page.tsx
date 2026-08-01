import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Sites Web & Automatisation IA à Soulac-sur-Mer",
  description: "Sites web, apps et automatisation IA pour les hôtels, campings et commerces de Soulac-sur-Mer : réservations en ligne, conciergerie IA, gestion de saison. Audit gratuit 30 min.",
  keywords: ["agence web soulac", "site internet soulac", "web app soulac", "automatisation soulac", "hôtel camping soulac digital"],
  alternates: { canonical: "https://www.nbn-ia.fr/soulac" },
};

const services = [
  { href: "/site-internet-soulac", title: "Création de site internet", desc: "Sites vitrines et réservation en ligne pour les pros de Soulac et du nord Médoc." },
  { href: "/web-app-soulac", title: "Création d'application web", desc: "Outils sur mesure : réservation, planning de saison, espace client." },
  { href: "/automatisation-soulac", title: "Automatisation & agents IA", desc: "Réservations, relances et réponses clients automatisées, compatible Microsoft 365." },
  { href: "/hotel-soulac", title: "Solutions pour hôtels", desc: "Conciergerie IA, communication client et gestion des réservations pour l'hôtellerie soulacaise." },
  { href: "/site-camping-soulac", title: "Site web pour campings", desc: "Site performant avec réservation en ligne pour les campings de Soulac et du nord Médoc." },
  { href: "/app-camping-soulac", title: "App de gestion camping", desc: "Application sur mesure pour gérer les habitués, la saison et la communication." },
  { href: "/services/automatisation-ia", title: "Automatisation & agents IA", desc: "Devis, relances, prises de RDV et réponses clients automatisés, 24h/24." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      name: "NBN IA",
      url: "https://www.nbn-ia.fr/soulac",
      areaServed: [{ "@type": "City", name: "Soulac-sur-Mer" }, { "@type": "AdministrativeArea", name: "Médoc" }],
      description: "Sites web, web apps et automatisation IA pour les entreprises de Soulac-sur-Mer.",
      telephone: "+33640685975",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: "https://www.nbn-ia.fr" },
        { "@type": "ListItem", position: 2, name: "Soulac-sur-Mer", item: "https://www.nbn-ia.fr/soulac" },
      ],
    },
  ],
};

export default function SoulacPage() {
  return (
    <div className="min-h-screen pt-32 pb-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="max-w-4xl mx-auto px-6">

        <div className="inline-flex items-center gap-2 bg-[#FCE9DF] text-[#E64A12] rounded-full px-4 py-1.5 text-[11px] font-bold mb-8 tracking-[0.16em] uppercase">
          <MapPin size={12} /> Soulac-sur-Mer · Médoc
        </div>

        <h1 className="text-4xl md:text-[3.4rem] font-extrabold text-[#0E1116] tracking-[-0.03em] mb-6 leading-[1.04]">
          Sites web & automatisation IA à Soulac-sur-Mer
        </h1>
        <p className="text-lg text-[#6B7280] mb-6 leading-relaxed">
          Station balnéaire familiale du nord Médoc, Soulac vit une saison intense : hôtels et campings complets,
          clientèle fidèle qui revient chaque été, demandes qui affluent à toute heure. J&apos;aide les professionnels
          soulacais à tenir ce rythme avec des sites web efficaces et des systèmes IA qui gèrent réservations,
          questions récurrentes et relances — sans surcharger l&apos;accueil.
        </p>
        <p className="text-base text-[#6B7280] mb-10 leading-relaxed">
          Basé dans le triangle Bordeaux · Royan · Arcachon, j&apos;interviens en présentiel à Soulac et dans tout le
          Médoc, ou 100 % à distance. Tout commence par un appel gratuit d&apos;30 min.
        </p>

        <Link href="https://calendly.com/ben40nocode/1h" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#FF5A1F] hover:bg-[#E64A12] hover:-translate-y-0.5 text-white px-7 py-4 rounded-xl font-semibold transition-all shadow-[0_10px_24px_rgba(255,90,31,.28)] mb-16">
          Appel gratuit (30 min) <ArrowRight size={17} />
        </Link>

        <h2 className="text-2xl font-extrabold text-[#0E1116] tracking-[-0.02em] mb-8">Mes services à Soulac-sur-Mer</h2>
        <div className="grid sm:grid-cols-2 gap-5">
          {services.map((s) => (
            <Link key={s.href} href={s.href} className="group p-6 rounded-2xl border border-[#E2E0DA] bg-white hover:border-[#FF5A1F] shadow-[0_14px_34px_rgba(14,17,22,.06)] hover:shadow-[0_20px_44px_rgba(14,17,22,.10)] transition-all">
              <h3 className="text-base font-bold text-[#0E1116] mb-2 group-hover:text-[#FF5A1F] transition-colors">{s.title}</h3>
              <p className="text-sm text-[#6B7280] leading-relaxed mb-3">{s.desc}</p>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#FF5A1F]">
                En savoir plus <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
              </span>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}
