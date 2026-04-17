import { Bot, Globe, Code2, Sparkles } from "lucide-react";

const solutions = [
  {
    icon: Bot,
    title: "Automatisations & Agents IA",
    description:
      "Flows Make/Zapier, agents Claude sur mesure, pipelines de données, notifications intelligentes. Vos tâches répétitives disparaissent.",
    tags: ["Make", "n8n", "Claude API", "Zapier"],
    color: "#e8632a",
  },
  {
    icon: Globe,
    title: "Product Design & Web Apps",
    description:
      "Sites Webflow, interfaces no-code, portails clients, dashboards connectés. Du design au lancement en quelques jours.",
    tags: ["Webflow", "Framer", "Next.js", "Memberstack"],
    color: "#4fc3d9",
  },
  {
    icon: Code2,
    title: "Développement & Intégrations",
    description:
      "APIs, bases de données Airtable/Supabase, webhooks, CRM custom. Le tout interconnecté et scalable.",
    tags: ["Airtable", "Supabase", "REST API", "Stripe"],
    color: "#a78bfa",
  },
  {
    icon: Sparkles,
    title: "Motion Design & Optimisation",
    description:
      "Animations, contenu social recyclé par IA, optimisation SEO, performance. Votre présence digitale qui convertit.",
    tags: ["SEO", "Motion", "IA Content", "Analytics"],
    color: "#34d399",
  },
];

export function SolutionsSection() {
  return (
    <section id="solutions" className="py-24 md:py-32 bg-[#050505]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs text-[#e8632a] uppercase tracking-widest mb-4 font-medium">
            Ce qu&apos;on construit
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#f2f0eb]">
            Quatre expertises,{" "}
            <span className="gradient-text">un seul partenaire.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {solutions.map((s) => (
            <div
              key={s.title}
              className="group p-6 md:p-8 rounded-2xl border border-[#1c1c1c] bg-[#0a0a0a] hover:border-[#2a2a2a] hover:bg-[#0f0f0f] transition-all duration-300"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
                style={{ backgroundColor: `${s.color}15`, border: `1px solid ${s.color}25` }}
              >
                <s.icon size={20} style={{ color: s.color }} />
              </div>
              <h3 className="text-lg font-semibold text-[#f2f0eb] mb-3">{s.title}</h3>
              <p className="text-sm text-[#777770] leading-relaxed mb-5">{s.description}</p>
              <div className="flex flex-wrap gap-2">
                {s.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-[#555550] border border-[#1c1c1c] rounded-full px-3 py-1"
                  >
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
