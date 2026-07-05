import { Bot, Globe, Plug, MessageSquare, ArrowRight } from "lucide-react";
import Link from "next/link";

const solutions = [
  {
    icon: Bot,
    title: "Automatisations sur mesure",
    description: "On identifie les tâches qui vous prennent du temps — réponses emails, devis, relances, rappels — et on les automatise. Votre business tourne sans que vous leviez le petit doigt.",
    tags: ["Réponses clients auto", "Devis automatisés", "Relances", "Rappels RDV"],
    color: "#e8632a",
    bg: "#fff5f0",
    href: "/services/automatisation-ia",
  },
  {
    icon: Globe,
    title: "Sites web & Applications",
    description: "Site vitrine, e-commerce, espace client, outil de réservation — on conçoit et développe tout ce dont vous avez besoin pour avoir une présence pro sur le web et des outils qui font le travail à votre place.",
    tags: ["Site vitrine", "E-commerce", "Application métier", "Réservation en ligne"],
    color: "#0ea5e9",
    bg: "#f0f9ff",
    href: "/services/sites-internet",
  },
  {
    icon: Plug,
    title: "Connexion de vos outils",
    description: "Votre agenda, votre CRM, votre logiciel de facturation, vos emails — on les fait parler entre eux. Fini la double saisie et les informations éparpillées partout.",
    tags: ["Outlook / Microsoft 365", "Google Agenda", "CRM", "Facturation"],
    color: "#8b5cf6",
    bg: "#f5f3ff",
    href: "/services/automatisation-ia",
  },
  {
    icon: MessageSquare,
    title: "Assistant client automatique",
    description: "Un assistant disponible 24h/24 qui répond aux questions de vos clients, qualifie les demandes et vous transfère uniquement ce qui nécessite votre attention.",
    tags: ["Réponse instantanée", "Qualification leads", "Prise de RDV", "24h/24"],
    color: "#10b981",
    bg: "#f0fdf4",
    href: "/chatbot-ia-bordeaux",
  },
];

export function SolutionsSection() {
  return (
    <section id="solutions" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="text-xs font-semibold text-[#e8632a] uppercase tracking-widest mb-3">
            Ce qu&apos;on fait pour vous
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 max-w-xl mx-auto leading-snug">
            Quatre tâches qu&apos;on fait tourner à votre place.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {solutions.map((s) => (
            <div
              key={s.title}
              className="p-7 rounded-2xl border border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm transition-all duration-200 flex flex-col"
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                style={{ backgroundColor: s.bg }}
              >
                <s.icon size={20} style={{ color: s.color }} />
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2">{s.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-5">{s.description}</p>
              <div className="flex flex-wrap gap-2 mb-5">
                {s.tags.map((tag) => (
                  <span key={tag} className="text-xs text-gray-500 bg-gray-100 rounded-full px-3 py-1 font-medium">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-auto">
                <Link
                  href={s.href}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold transition-colors group"
                  style={{ color: s.color }}
                >
                  En savoir plus <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
