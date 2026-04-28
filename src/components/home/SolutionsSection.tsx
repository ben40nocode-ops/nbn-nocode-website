import { Bot, Globe, Code2, Sparkles } from "lucide-react";

const solutions = [
  {
    icon: Bot,
    title: "Automatisations & Agents IA",
    description: "Flows Make/Zapier, agents Claude sur mesure, pipelines de données, notifications intelligentes. Vos tâches répétitives disparaissent.",
    tags: ["Make", "n8n", "Claude API", "Zapier"],
    color: "#e8632a",
    bg: "#fff5f0",
  },
  {
    icon: Globe,
    title: "Vibe Coding & Web Apps",
    description: "Sites ultra-rapides générés en vibe coding avec Claude Code, déployés sur Vercel en quelques heures. Portails clients, dashboards connectés, apps no-code.",
    tags: ["Claude Code", "Vercel", "Next.js", "Framer"],
    color: "#0ea5e9",
    bg: "#f0f9ff",
  },
  {
    icon: Code2,
    title: "Développement & Intégrations",
    description: "APIs, bases de données Airtable/Supabase, webhooks, CRM custom. Le tout interconnecté et scalable.",
    tags: ["Airtable", "Supabase", "REST API", "Stripe"],
    color: "#8b5cf6",
    bg: "#f5f3ff",
  },
  {
    icon: Sparkles,
    title: "Motion Design & Optimisation",
    description: "Animations, contenu social recyclé par IA, optimisation SEO, performance. Votre présence digitale qui convertit.",
    tags: ["SEO", "Motion", "IA Content", "Analytics"],
    color: "#10b981",
    bg: "#f0fdf4",
  },
];

export function SolutionsSection() {
  return (
    <section id="solutions" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-xs font-semibold text-[#e8632a] uppercase tracking-widest mb-3">
            Ce qu&apos;on construit
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 max-w-xl mx-auto leading-snug">
            Quatre expertises, un seul partenaire.
          </h2>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 gap-5">
          {solutions.map((s) => (
            <div
              key={s.title}
              className="p-7 rounded-2xl border border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm transition-all duration-200"
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                style={{ backgroundColor: s.bg }}
              >
                <s.icon size={20} style={{ color: s.color }} />
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2">{s.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-5">{s.description}</p>
              <div className="flex flex-wrap gap-2">
                {s.tags.map((tag) => (
                  <span key={tag} className="text-xs text-gray-500 bg-gray-100 rounded-full px-3 py-1 font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
