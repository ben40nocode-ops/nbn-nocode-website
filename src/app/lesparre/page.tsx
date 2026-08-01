import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Sites Web & Automatisation IA à Lesparre-Médoc",
  description: "Sites web et automatisation IA pour les caves, domaines viticoles, artisans et commerces de Lesparre-Médoc : vente de vin en ligne, devis et relances automatisés. Audit gratuit 30 min.",
  keywords: ["agence web lesparre", "site internet lesparre", "automatisation lesparre", "cave lesparre médoc", "artisan lesparre digital"],
  alternates: { canonical: "https://www.nbn-ia.fr/lesparre" },
};

const services = [
  { href: "/site-internet-lesparre", title: "Création de site internet", desc: "Sites vitrines, e-commerce et vente de vin en ligne pour les pros du Médoc." },
  { href: "/web-app-lesparre", title: "Création d'application web", desc: "Outils sur mesure : commandes, stock, suivi de chantiers, espace client." },
  { href: "/automatisation-lesparre", title: "Automatisation & agents IA", desc: "Devis, relances et commandes automatisés, compatible Microsoft 365 / Excel." },
  { href: "/cave-lesparre", title: "Solutions pour caves & domaines", desc: "Commandes, facturation et fidélisation automatisées pour les caves de Lesparre-Médoc." },
  { href: "/domaines-medoc", title: "Domaines du Médoc", desc: "Automatisation des visites, ventes directes et relances pour les domaines médocains." },
  { href: "/services/automatisation-ia", title: "Automatisation & agents IA", desc: "Devis, relances, prises de RDV et réponses clients automatisés, 24h/24." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      name: "NBN IA",
      url: "https://www.nbn-ia.fr/lesparre",
      areaServed: [{ "@type": "City", name: "Lesparre-Médoc" }, { "@type": "AdministrativeArea", name: "Médoc" }],
      description: "Sites web et automatisation IA pour les caves, domaines et entreprises de Lesparre-Médoc.",
      telephone: "+33640685975",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: "https://www.nbn-ia.fr" },
        { "@type": "ListItem", position: 2, name: "Lesparre-Médoc", item: "https://www.nbn-ia.fr/lesparre" },
      ],
    },
  ],
};

export default function LesparrePage() {
  return (
    <div className="min-h-screen pt-32 pb-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="max-w-4xl mx-auto px-6">

        <div className="inline-flex items-center gap-2 bg-[#FCE9DF] text-[#E64A12] rounded-full px-4 py-1.5 text-[11px] font-bold mb-8 tracking-[0.16em] uppercase">
          <MapPin size={12} /> Lesparre-Médoc · Médoc
        </div>

        <h1 className="text-4xl md:text-[3.4rem] font-extrabold text-[#0E1116] tracking-[-0.03em] mb-6 leading-[1.04]">
          Sites web & automatisation IA à Lesparre-Médoc
        </h1>
        <p className="text-lg text-[#6B7280] mb-6 leading-relaxed">
          Capitale du Médoc, Lesparre concentre caves, domaines, artisans et commerces qui font tourner tout le
          territoire. Loin des agences bordelaises, ces entreprises méritent les mêmes outils : un site qui les rend
          visibles sur Google et des systèmes qui gèrent devis, relances et commandes automatiquement.
        </p>
        <p className="text-base text-[#6B7280] mb-10 leading-relaxed">
          Basé dans le triangle Bordeaux · Royan · Arcachon, j&apos;interviens en présentiel à Lesparre et dans tout le
          Médoc, ou 100 % à distance. Tout commence par un appel gratuit d&apos;30 min.
        </p>

        <Link href="https://calendly.com/ben40nocode/1h" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#FF5A1F] hover:bg-[#E64A12] hover:-translate-y-0.5 text-white px-7 py-4 rounded-xl font-semibold transition-all shadow-[0_10px_24px_rgba(255,90,31,.28)] mb-16">
          Appel gratuit (30 min) <ArrowRight size={17} />
        </Link>

        <h2 className="text-2xl font-extrabold text-[#0E1116] tracking-[-0.02em] mb-8">Mes services à Lesparre-Médoc</h2>
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
