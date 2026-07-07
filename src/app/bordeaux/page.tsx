import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "NBN IA à Bordeaux — Sites Web, Web Apps & Automatisation IA",
  description: "Sites web, applications web et automatisation IA pour les PME, artisans et commerces de Bordeaux et de la métropole. Certifié Anthropic. Appel gratuit 1h.",
  keywords: ["agence web Bordeaux", "création site web Bordeaux", "web app Bordeaux", "automatisation Bordeaux", "agence IA Bordeaux"],
  alternates: { canonical: "https://www.nbn-ia.fr/bordeaux" },
};

const services = [
  { href: "/creation-site-web-bordeaux", title: "Création de site internet", desc: "Sites vitrines, e-commerce et applications sur mesure pour les entreprises bordelaises." },
  { href: "/web-app-bordeaux", title: "Création d'application web", desc: "Outils métiers à Bordeaux : espace client, dashboard, réservation, connectés à l'IA." },
  { href: "/automatisation-bordeaux", title: "Automatisation & agents IA", desc: "Devis, relances, RDV et réponses clients automatisés pour les PME de Bordeaux." },
  { href: "/chatbot-ia-bordeaux", title: "Chatbot & assistant IA", desc: "Un assistant IA 24h/24 qui répond, qualifie les demandes et vous transfère l'essentiel." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      name: "NBN IA",
      url: "https://www.nbn-ia.fr/bordeaux",
      areaServed: [{ "@type": "City", name: "Bordeaux" }, { "@type": "AdministrativeArea", name: "Gironde" }],
      description: "Sites web, applications web et automatisation IA pour les entreprises de Bordeaux et de la métropole.",
      telephone: "+33640685975",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: "https://www.nbn-ia.fr" },
        { "@type": "ListItem", position: 2, name: "Bordeaux", item: "https://www.nbn-ia.fr/bordeaux" },
      ],
    },
  ],
};

export default function BordeauxPage() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="max-w-4xl mx-auto px-6">

        <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-100 text-[#e8632a] rounded-full px-4 py-1.5 text-xs font-semibold mb-8 tracking-wide uppercase">
          <MapPin size={12} /> Bordeaux · Gironde
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          NBN IA à Bordeaux — sites web, web apps & automatisation IA
        </h1>
        <p className="text-lg text-gray-500 mb-6 leading-relaxed">
          À Bordeaux, la concurrence digitale est réelle mais l&apos;IA reste un terrain neuf pour la plupart des PME.
          C&apos;est votre avantage : pendant que vos concurrents hésitent, vous automatisez vos devis, vos relances et
          vos réponses clients — et vous gagnez les heures qu&apos;ils perdent encore.
        </p>
        <p className="text-base text-gray-500 mb-10 leading-relaxed">
          J&apos;accompagne les PME, artisans, commerçants et indépendants de Bordeaux et de la métropole
          (Mérignac, Pessac, Talence, Bègles…) : sites web, applications sur mesure et automatisation IA. Certifié
          Anthropic, formé chez Alegria Academy. Tout commence par un appel gratuit d&apos;1h.
        </p>

        <Link href="https://calendly.com/ben40nocode/1h" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#e8632a] hover:bg-[#c4521f] text-white px-7 py-4 rounded-xl font-semibold transition-colors mb-16">
          Réserver mon appel gratuit (1h) <ArrowRight size={17} />
        </Link>

        <h2 className="text-2xl font-bold text-gray-900 mb-8">Mes services à Bordeaux</h2>
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
