import type { Metadata } from "next";
import Link from "next/link";
import { Bot, Globe, Plug, MessageSquare, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Solutions — Automatisation, sites & assistants IA",
  description: "Quatre façons de gagner du temps : automatisations sur mesure, sites web & applications, connexion de vos outils, assistant client 24/7. Audit gratuit 1h.",
  alternates: {
    canonical: "https://www.nbn-ia.fr/solutions",
    languages: {
      fr: "https://www.nbn-ia.fr/solutions",
      en: "https://www.nbn-ia.fr/en#solutions",
      "x-default": "https://www.nbn-ia.fr/solutions",
    },
  },
};

const solutions = [
  {
    icon: Bot,
    title: "Automatisations sur mesure",
    description: "On identifie les tâches qui vous prennent du temps — réponses emails, devis, relances, rappels — et on les automatise. Votre business tourne sans que vous leviez le petit doigt.",
    tags: ["Réponses clients auto", "Devis automatisés", "Relances", "Rappels RDV"],
    color: "#FF5A1F", bg: "#fff5f0", href: "/services/automatisation-ia",
  },
  {
    icon: Globe,
    title: "Sites web & Applications",
    description: "Site vitrine, e-commerce, espace client, outil de réservation — on conçoit et développe tout ce dont vous avez besoin pour avoir une présence pro sur le web et des outils qui font le travail à votre place.",
    tags: ["Site vitrine", "E-commerce", "Application métier", "Réservation en ligne"],
    color: "#0ea5e9", bg: "#f0f9ff", href: "/services/sites-internet",
  },
  {
    icon: Plug,
    title: "Connexion de vos outils",
    description: "Votre agenda, votre CRM, votre logiciel de facturation, vos emails — on les fait parler entre eux. Fini la double saisie et les informations éparpillées partout.",
    tags: ["Outlook / Microsoft 365", "Google Agenda", "CRM", "Facturation"],
    color: "#8b5cf6", bg: "#f5f3ff", href: "/services/automatisation-ia",
  },
  {
    icon: MessageSquare,
    title: "Assistant client automatique",
    description: "Un assistant disponible 24h/24 qui répond aux questions de vos clients, qualifie les demandes et vous transfère uniquement ce qui nécessite votre attention.",
    tags: ["Réponse instantanée", "Qualification leads", "Prise de RDV", "24h/24"],
    color: "#10b981", bg: "#f0fdf4", href: "/chatbot-ia-bordeaux",
  },
];

export default function SolutionsPage() {
  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="max-w-5xl mx-auto px-6">

        <div className="inline-flex items-center gap-2 bg-[#FCE9DF] text-[#E64A12] rounded-full px-4 py-1.5 text-[11px] font-bold mb-8 tracking-[0.16em] uppercase">
          Solutions
        </div>
        <h1 className="text-4xl md:text-[3.4rem] font-extrabold text-[#0E1116] tracking-[-0.03em] mb-6 leading-[1.04]">
          Quatre façons<br /><span className="text-[#FF5A1F]">de gagner du temps.</span>
        </h1>
        <p className="text-lg text-[#6B7280] max-w-2xl mb-16 leading-relaxed">
          Automatisations, logiciels, sites, assistants. On part toujours du concret : la tâche qui vous coûte le plus de temps chaque semaine.
        </p>

        <div className="grid sm:grid-cols-2 gap-5">
          {solutions.map((s) => (
            <div key={s.title} className="p-7 rounded-2xl border border-[#E2E0DA] bg-white shadow-[0_14px_34px_rgba(14,17,22,.06)] hover:shadow-[0_20px_44px_rgba(14,17,22,.10)] transition-all flex flex-col">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5" style={{ backgroundColor: s.bg }}>
                <s.icon size={20} style={{ color: s.color }} />
              </div>
              <h3 className="text-base font-bold text-[#0E1116] mb-2">{s.title}</h3>
              <p className="text-sm text-[#6B7280] leading-relaxed mb-5">{s.description}</p>
              <div className="flex flex-wrap gap-2 mb-5">
                {s.tags.map((tag) => (
                  <span key={tag} className="text-xs text-[#2E343D] bg-[#F5F4F1] border border-[#E2E0DA] rounded-full px-3 py-1 font-medium">{tag}</span>
                ))}
              </div>
              <div className="mt-auto">
                <Link href={s.href} className="inline-flex items-center gap-1.5 text-xs font-semibold transition-colors group" style={{ color: s.color }}>
                  En savoir plus <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-[#0E1116] rounded-[26px] p-10 text-center shadow-[0_40px_100px_rgba(14,17,22,.4)]">
          <h2 className="text-2xl font-extrabold text-white tracking-[-0.02em] mb-3">Par où on commence ?</h2>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">Un échange de 20 minutes. On repère le premier système qui vous fait gagner du temps.</p>
          <Link href="https://calendly.com/ben40nocode/1h" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#FF5A1F] hover:bg-[#E64A12] hover:-translate-y-0.5 text-white px-8 py-4 rounded-xl font-bold text-sm transition-all shadow-[0_10px_24px_rgba(255,90,31,.28)]">
            Réserver mon appel gratuit (1h) <ArrowRight size={15} />
          </Link>
        </div>

      </div>
    </div>
  );
}
