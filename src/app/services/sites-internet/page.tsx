import type { Metadata } from "next";
import Link from "next/link";
import { Check, ArrowRight, Globe, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Création Site Web Professionnel — PME & Artisans | NBN IA",
  description: "Un site web qui donne envie de vous appeler. Design sur mesure, optimisation Google, version mobile parfaite. Devis gratuit pour PME et artisans en Gironde.",
  keywords: ["création site web", "site vitrine PME", "site e-commerce artisan", "site web Bordeaux", "Gironde", "SEO Google"],
  alternates: { canonical: "https://www.nbn-ia.fr/services/sites-internet" },
  openGraph: {
    title: "Création Site Web Professionnel — PME & Artisans | NBN IA",
    description: "Un site web qui donne envie de vous appeler. Design sur mesure, optimisation Google, version mobile parfaite.",
    url: "https://www.nbn-ia.fr/services/sites-internet",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Création Site Web Professionnel pour PME et Artisans",
  provider: { "@type": "Organization", name: "NBN IA", url: "https://www.nbn-ia.fr" },
  areaServed: ["Bordeaux", "Royan", "Arcachon", "Soulac", "Pauillac", "Lesparre", "Montalivet", "Lacanau"],
  description: "Création de sites web professionnels pour PME et artisans en Gironde : site vitrine, e-commerce, réservation en ligne, blog SEO.",
};

const siteTypes = [
  {
    title: "Site vitrine",
    price: "Dès 800 €",
    desc: "Présentez votre activité, vos services et vos coordonnées. Simple, rapide, efficace. Vos clients vous trouvent sur Google.",
  },
  {
    title: "E-commerce",
    price: "Sur devis",
    desc: "Vendez vos produits en ligne, 7j/7. Paiement sécurisé, gestion des commandes, livraison.",
  },
  {
    title: "Site de réservation",
    price: "Sur devis",
    desc: "Idéal pour les hôtels, restaurants, salons et prestataires. Vos clients réservent directement en ligne.",
  },
  {
    title: "Blog & contenu SEO",
    price: "Sur devis",
    desc: "Des articles optimisés pour Google qui attirent des visiteurs et renforcent votre crédibilité.",
  },
];

const included = [
  "Design sur mesure, à votre image",
  "Optimisation Google (SEO) dès le départ",
  "Version mobile parfaite — 70 % de vos visiteurs sont sur téléphone",
  "Hébergement & maintenance inclus",
  "Formulaires & prise de contact",
  "Connexion à vos automatisations si besoin",
];

export default function SitesInternetPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="min-h-screen bg-white pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-6">

          <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-100 text-[#e8632a] rounded-full px-4 py-1.5 text-xs font-semibold mb-8 tracking-wide uppercase">
            <Globe size={12} /> Sites web professionnels
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Un site qui donne envie<br />
            <span className="text-[#e8632a]">de vous appeler.</span>
          </h1>

          <p className="text-lg text-gray-500 max-w-2xl mb-10 leading-relaxed">
            Votre site web, c&apos;est votre vitrine. Il doit inspirer confiance, se trouver sur Google et pousser les visiteurs à vous contacter. On s&apos;occupe de tout — du design à la mise en ligne.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-20">
            <Link href="https://calendly.com/ben40nocode/1h" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#e8632a] hover:bg-[#c4521f] text-white px-7 py-4 rounded-xl font-semibold text-base transition-colors">
              Demander un devis gratuit <ArrowRight size={17} />
            </Link>
            <Link href="/tarifs" className="inline-flex items-center gap-2 border border-gray-200 hover:border-gray-300 text-gray-700 px-7 py-4 rounded-xl font-semibold text-base transition-colors hover:bg-gray-50">
              Voir les tarifs
            </Link>
          </div>

          {/* Ce qu'on crée */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Ce qu&apos;on crée</h2>
            <p className="text-gray-500 mb-8">Chaque site est fait sur mesure, selon votre activité.</p>
            <div className="grid md:grid-cols-2 gap-5">
              {siteTypes.map((type) => (
                <div key={type.title} className="border border-gray-100 rounded-2xl p-6 hover:border-orange-100 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-gray-900">{type.title}</h3>
                    <span className="text-xs font-semibold text-[#e8632a] bg-orange-50 px-2.5 py-1 rounded-full">{type.price}</span>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed">{type.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Ce qui est inclus */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Ce qui est inclus</h2>
              <ul className="space-y-3">
                {included.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-gray-600">
                    <Check size={15} className="text-[#e8632a] flex-shrink-0 mt-0.5" />{item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-50 rounded-2xl p-7">
              <div className="flex items-center gap-2 mb-4">
                <Clock size={16} className="text-[#e8632a]" />
                <h2 className="text-lg font-bold text-gray-900">Délais de livraison</h2>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-gray-800 text-sm">Site vitrine</p>
                  <p className="text-sm text-gray-500">1 à 2 semaines</p>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-semibold text-gray-800 text-sm">E-commerce ou réservation</p>
                  <p className="text-sm text-gray-500">2 à 4 semaines</p>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <p className="text-xs text-gray-400 leading-relaxed">Les délais dépendent de votre réactivité pour les retours et contenus. On vous tient informé à chaque étape.</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA final */}
          <div className="bg-gray-900 rounded-2xl p-10 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">Votre site en ligne en quelques semaines</h2>
            <p className="text-gray-400 mb-8 max-w-md mx-auto">Devis gratuit, sans engagement. On vous explique ce qu&apos;on peut faire et combien ça coûte, clairement.</p>
            <Link href="https://calendly.com/ben40nocode/1h" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#e8632a] hover:bg-[#c4521f] text-white px-8 py-4 rounded-xl font-bold text-sm transition-colors">
              Demander un devis gratuit <ArrowRight size={15} />
            </Link>
          </div>

        </div>
      </div>
    </>
  );
}
