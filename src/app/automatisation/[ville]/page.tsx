import type { Metadata } from "next";
import Link from "next/link";
import { Check, ArrowRight, MapPin } from "lucide-react";
import { notFound } from "next/navigation";

const villes: Record<string, { dept: string; region: string }> = {
  // Gironde
  "bordeaux": { dept: "Gironde", region: "Nouvelle-Aquitaine" },
  "merignac": { dept: "Gironde", region: "Nouvelle-Aquitaine" },
  "pessac": { dept: "Gironde", region: "Nouvelle-Aquitaine" },
  "talence": { dept: "Gironde", region: "Nouvelle-Aquitaine" },
  "gradignan": { dept: "Gironde", region: "Nouvelle-Aquitaine" },
  "begles": { dept: "Gironde", region: "Nouvelle-Aquitaine" },
  "villenave-d-ornon": { dept: "Gironde", region: "Nouvelle-Aquitaine" },
  "lormont": { dept: "Gironde", region: "Nouvelle-Aquitaine" },
  "cenon": { dept: "Gironde", region: "Nouvelle-Aquitaine" },
  "floirac": { dept: "Gironde", region: "Nouvelle-Aquitaine" },
  "bruges": { dept: "Gironde", region: "Nouvelle-Aquitaine" },
  "blanquefort": { dept: "Gironde", region: "Nouvelle-Aquitaine" },
  "eysines": { dept: "Gironde", region: "Nouvelle-Aquitaine" },
  "le-bouscat": { dept: "Gironde", region: "Nouvelle-Aquitaine" },
  "saint-medard-en-jalles": { dept: "Gironde", region: "Nouvelle-Aquitaine" },
  "libourne": { dept: "Gironde", region: "Nouvelle-Aquitaine" },
  "arcachon": { dept: "Gironde", region: "Nouvelle-Aquitaine" },
  "gujan-mestras": { dept: "Gironde", region: "Nouvelle-Aquitaine" },
  "la-teste-de-buch": { dept: "Gironde", region: "Nouvelle-Aquitaine" },
  "lege-cap-ferret": { dept: "Gironde", region: "Nouvelle-Aquitaine" },
  "soulac-sur-mer": { dept: "Gironde", region: "Nouvelle-Aquitaine" },
  "pauillac": { dept: "Gironde", region: "Nouvelle-Aquitaine" },
  "lesparre-medoc": { dept: "Gironde", region: "Nouvelle-Aquitaine" },
  "blaye": { dept: "Gironde", region: "Nouvelle-Aquitaine" },
  "saint-andre-de-cubzac": { dept: "Gironde", region: "Nouvelle-Aquitaine" },
  "carbon-blanc": { dept: "Gironde", region: "Nouvelle-Aquitaine" },
  "langon": { dept: "Gironde", region: "Nouvelle-Aquitaine" },
  "podensac": { dept: "Gironde", region: "Nouvelle-Aquitaine" },
  // Landes
  "mont-de-marsan": { dept: "Landes", region: "Nouvelle-Aquitaine" },
  "dax": { dept: "Landes", region: "Nouvelle-Aquitaine" },
  "biscarrosse": { dept: "Landes", region: "Nouvelle-Aquitaine" },
  "mimizan": { dept: "Landes", region: "Nouvelle-Aquitaine" },
  "parentis-en-born": { dept: "Landes", region: "Nouvelle-Aquitaine" },
  "soustons": { dept: "Landes", region: "Nouvelle-Aquitaine" },
  "capbreton": { dept: "Landes", region: "Nouvelle-Aquitaine" },
  "hossegor": { dept: "Landes", region: "Nouvelle-Aquitaine" },
  "saint-paul-les-dax": { dept: "Landes", region: "Nouvelle-Aquitaine" },
  "hagetmau": { dept: "Landes", region: "Nouvelle-Aquitaine" },
  "aire-sur-l-adour": { dept: "Landes", region: "Nouvelle-Aquitaine" },
  "morcenx": { dept: "Landes", region: "Nouvelle-Aquitaine" },
  "saint-vincent-de-tyrosse": { dept: "Landes", region: "Nouvelle-Aquitaine" },
  "peyrehorade": { dept: "Landes", region: "Nouvelle-Aquitaine" },
  "castets": { dept: "Landes", region: "Nouvelle-Aquitaine" },
  // Charente-Maritime
  "la-rochelle": { dept: "Charente-Maritime", region: "Nouvelle-Aquitaine" },
  "royan": { dept: "Charente-Maritime", region: "Nouvelle-Aquitaine" },
  "saintes": { dept: "Charente-Maritime", region: "Nouvelle-Aquitaine" },
  "rochefort": { dept: "Charente-Maritime", region: "Nouvelle-Aquitaine" },
  "jonzac": { dept: "Charente-Maritime", region: "Nouvelle-Aquitaine" },
  "saint-jean-d-angely": { dept: "Charente-Maritime", region: "Nouvelle-Aquitaine" },
  "marennes": { dept: "Charente-Maritime", region: "Nouvelle-Aquitaine" },
  "saujon": { dept: "Charente-Maritime", region: "Nouvelle-Aquitaine" },
  "pons": { dept: "Charente-Maritime", region: "Nouvelle-Aquitaine" },
  "chatelaillon-plage": { dept: "Charente-Maritime", region: "Nouvelle-Aquitaine" },
  "saint-georges-de-didonne": { dept: "Charente-Maritime", region: "Nouvelle-Aquitaine" },
  "vaux-sur-mer": { dept: "Charente-Maritime", region: "Nouvelle-Aquitaine" },
  "meschers-sur-gironde": { dept: "Charente-Maritime", region: "Nouvelle-Aquitaine" },
  "tonnay-charente": { dept: "Charente-Maritime", region: "Nouvelle-Aquitaine" },
  "surgeres": { dept: "Charente-Maritime", region: "Nouvelle-Aquitaine" },
  "cozes": { dept: "Charente-Maritime", region: "Nouvelle-Aquitaine" },
};

function toLabel(slug: string) {
  return slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")
    .replace("D Or", "d'Or").replace("D An", "d'An").replace("L Ad", "l'Ad").replace("Sur", "sur")
    .replace("En ", "en ").replace("De ", "de ").replace("Les ", "les ").replace("Le ", "le ");
}

export async function generateStaticParams() {
  return Object.keys(villes).map((ville) => ({ ville }));
}

export async function generateMetadata({ params }: { params: Promise<{ ville: string }> }): Promise<Metadata> {
  const { ville } = await params;
  if (!villes[ville]) return {};
  const label = toLabel(ville);
  const { dept } = villes[ville];
  return {
    title: `Automatisation & Agents IA à ${label} — NBN Nocode`,
    description: `Expert automatisation nocode et agents IA à ${label} (${dept}). Make, Zapier, Airtable, Claude AI. Setup sur mesure pour PME. Audit gratuit 30 min sans engagement.`,
    keywords: [`automatisation ${label}`, `agent IA ${label}`, `nocode ${label}`, `Claude AI ${label}`, `automatisation PME ${dept}`],
    alternates: { canonical: `https://www.nbn-nocode.fr/automatisation/${ville}` },
    openGraph: {
      title: `Automatisation & Agents IA à ${label} — NBN Nocode`,
      description: `Expert nocode & Claude AI pour PME à ${label}. Audit gratuit.`,
      url: `https://www.nbn-nocode.fr/automatisation/${ville}`,
    },
  };
}

export default async function VillePage({ params }: { params: Promise<{ ville: string }> }) {
  const { ville } = await params;
  if (!villes[ville]) notFound();

  const label = toLabel(ville);
  const { dept } = villes[ville];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Automatisation & Agents IA à ${label}`,
    provider: { "@type": "Organization", name: "NBN Nocode", url: "https://www.nbn-nocode.fr" },
    areaServed: { "@type": "City", name: label },
    description: `Conception d'architectures d'automatisation et d'agents IA pour les PME de ${label} (${dept}).`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="min-h-screen bg-white pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-6">

          <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-100 text-[#e8632a] rounded-full px-4 py-1.5 text-xs font-semibold mb-8 tracking-wide uppercase">
            <MapPin size={12} /> {label} — {dept}
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Automatisation & Agents IA<br />
            <span className="text-[#e8632a]">pour les PME de {label}</span>
          </h1>

          <p className="text-lg text-gray-500 max-w-2xl mb-10 leading-relaxed">
            Vous gérez une entreprise à {label} et vos process vous font perdre du temps chaque jour ?
            NBN Nocode conçoit votre architecture d&apos;automatisation sur mesure avec Make, Zapier, Airtable et Claude AI — 100% remote, résultats garantis.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-20">
            <Link href="https://calendly.com/ben40nocode/1h" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#e8632a] hover:bg-[#c4521f] text-white px-7 py-4 rounded-xl font-semibold text-base transition-colors">
              Audit gratuit à {label} <ArrowRight size={17} />
            </Link>
            <Link href="/tarifs" className="inline-flex items-center gap-2 border border-gray-200 hover:border-gray-300 text-gray-700 px-7 py-4 rounded-xl font-semibold text-base transition-colors hover:bg-gray-50">
              Voir les tarifs
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Ce qu&apos;on automatise pour les entreprises de {label}</h2>
              <ul className="space-y-3">
                {[
                  "Gestion des leads et CRM automatisé",
                  "Facturation et relances clients",
                  "Synchronisation entre outils (Airtable, Notion, Gmail…)",
                  "Agents IA pour traiter vos emails et documents",
                  "Reporting automatique chaque semaine",
                  "Onboarding client sans intervention manuelle",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-gray-600">
                    <Check size={15} className="text-[#e8632a] flex-shrink-0 mt-0.5" />{item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-50 rounded-2xl p-7">
              <h2 className="text-lg font-bold text-gray-900 mb-3">Pourquoi NBN Nocode ?</h2>
              <ul className="space-y-3 text-sm text-gray-600">
                {[
                  `Intervention à ${label} ou 100% remote`,
                  "Spécialisé Claude AI — modèle IA le plus avancé",
                  "40+ automatisations déployées en France",
                  "Setup unique + maintenance mensuelle",
                  "Audit gratuit sans engagement",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <Check size={15} className="text-[#e8632a] flex-shrink-0 mt-0.5" />{item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-gray-900 rounded-2xl p-10 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">30 minutes pour cartographier vos process</h2>
            <p className="text-gray-400 mb-8 max-w-md mx-auto">L&apos;audit est gratuit, sans engagement. On se retrouve en visio ou à {label}.</p>
            <Link href="https://calendly.com/ben40nocode/1h" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#e8632a] hover:bg-[#c4521f] text-white px-8 py-4 rounded-xl font-bold text-sm transition-colors">
              Réserver l&apos;audit gratuit <ArrowRight size={15} />
            </Link>
          </div>

        </div>
      </div>
    </>
  );
}
