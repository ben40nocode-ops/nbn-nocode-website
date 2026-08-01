import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Réalisations — Des systèmes déjà en production",
  description: "Des automatisations réelles construites et en production aujourd'hui : astreinte, ventilation compta, congés, SMS clients, classement de factures, assistant interne 24/7.",
  alternates: {
    canonical: "https://www.nbn-ia.fr/realisations",
    languages: {
      fr: "https://www.nbn-ia.fr/realisations",
      en: "https://www.nbn-ia.fr/en#work",
      "x-default": "https://www.nbn-ia.fr/realisations",
    },
  },
};

const cases = [
  { emoji: "📟", title: "Astreinte — transfert d'appel automatique", desc: "Planning d'astreinte sur une seule page et bascule automatique de l'appel vers la bonne personne, jour et nuit. Fini le tableur partagé et les numéros à jongler.", impact: "Remplace Power Apps" },
  { emoji: "🧾", title: "Compta — ventilation automatique", desc: "Je dépose une facture PDF : l'IA lit, ventile et prépare la comptabilité en un clic. Ce qui passait par une chaîne d'outils fragile se fait d'un coup.", impact: "Remplace 3 Zapier + un script maison" },
  { emoji: "🗓️", title: "Congés & plannings sans conflit", desc: "Demandes de congés, validation et détection automatique des conflits avec l'astreinte. Impossible d'être en congé ET d'astreinte le même jour.", impact: "Zéro double-saisie" },
  { emoji: "💬", title: "SMS clients automatiques", desc: "Un message part tout seul au bon moment avant l'arrivée du client, adapté à la saison. Aucun copier-coller, aucun oubli.", impact: "Remplace Power Apps + Excel + Zapier" },
  { emoji: "🗂️", title: "Factures classées automatiquement", desc: "Chaque facture rangée au bon endroit, miroir exact du dossier comptable. Fini le tri manuel de fin de mois.", impact: "Toujours à jour, 0 manuel" },
  { emoji: "🤖", title: "Assistant interne 24/7", desc: "Un chatbot qui répond aux questions des équipes — procédures, mode d'emploi des outils — à toute heure. Moins d'interruptions, plus d'autonomie.", impact: "Disponible 24h/24" },
];

export default function RealisationsPage() {
  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="max-w-5xl mx-auto px-6">

        <div className="inline-flex items-center gap-2 bg-[#FCE9DF] text-[#E64A12] rounded-full px-4 py-1.5 text-[11px] font-bold mb-8 tracking-[0.16em] uppercase">
          Réalisations
        </div>
        <h1 className="text-4xl md:text-[3.4rem] font-extrabold text-[#0E1116] tracking-[-0.03em] mb-6 leading-[1.04]">
          Des systèmes déjà<br /><span className="text-[#FF5A1F]">en production.</span>
        </h1>
        <p className="text-lg text-[#6B7280] max-w-2xl mb-16 leading-relaxed">
          Des automatisations réelles que j&apos;ai construites et qui tournent aujourd&apos;hui — transposables à votre métier.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {cases.map((c) => (
            <div key={c.title} className="p-6 rounded-2xl border border-[#E2E0DA] bg-white shadow-[0_14px_34px_rgba(14,17,22,.06)] hover:shadow-[0_20px_44px_rgba(14,17,22,.10)] transition-all flex flex-col">
              <span className="text-3xl mb-4 block">{c.emoji}</span>
              <h3 className="text-sm font-bold text-[#0E1116] mb-2">{c.title}</h3>
              <p className="text-sm text-[#6B7280] leading-relaxed flex-1 mb-5">{c.desc}</p>
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#E64A12] bg-[#FCE9DF] rounded-full px-3 py-1.5 self-start">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF5A1F] inline-block" />
                {c.impact}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-[#0E1116] rounded-[26px] p-10 text-center shadow-[0_40px_100px_rgba(14,17,22,.4)]">
          <h2 className="text-2xl font-extrabold text-white tracking-[-0.02em] mb-3">Un système comme ça pour vous ?</h2>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">Un échange de 30 minutes. On repère le premier système qui vous fait gagner du temps.</p>
          <Link href="https://calendly.com/ben40nocode/1h" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#FF5A1F] hover:bg-[#E64A12] hover:-translate-y-0.5 text-white px-8 py-4 rounded-xl font-bold text-sm transition-all shadow-[0_10px_24px_rgba(255,90,31,.28)]">
            Réserver mon appel gratuit (30 min) <ArrowRight size={15} />
          </Link>
        </div>

      </div>
    </div>
  );
}
