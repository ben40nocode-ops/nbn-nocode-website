import { Bot, Globe, Code2, Sparkles } from "lucide-react";

const solutions = [
  {
    icon: Bot,
    title: "Automatisations & Agents IA",
    description: "Flows Make/Zapier, agents Claude sur mesure, pipelines de données. Vos tâches répétitives disparaissent.",
    tags: ["Make", "n8n", "Claude API", "Zapier"],
    color: "#e8632a",
    bg: "#e8632a18",
    border: "#e8632a30",
  },
  {
    icon: Globe,
    title: "Product Design & Web Apps",
    description: "Sites Webflow, interfaces no-code, portails clients, dashboards connectés. Du design au lancement en quelques jours.",
    tags: ["Webflow", "Framer", "Next.js", "Memberstack"],
    color: "#38bdf8",
    bg: "#38bdf818",
    border: "#38bdf830",
  },
  {
    icon: Code2,
    title: "Développement & Intégrations",
    description: "APIs, bases de données, webhooks, CRM custom. Le tout interconnecté et scalable.",
    tags: ["Airtable", "Supabase", "REST API", "Stripe"],
    color: "#a78bfa",
    bg: "#a78bfa18",
    border: "#a78bfa30",
  },
  {
    icon: Sparkles,
    title: "Motion Design & Optimisation",
    description: "Animations, contenu social recyclé par IA, SEO, performance. Votre présence digitale qui convertit.",
    tags: ["SEO", "Motion", "IA Content", "Analytics"],
    color: "#34d399",
    bg: "#34d39918",
    border: "#34d39930",
  },
];

export function SolutionsSection() {
  return (
    <section id="solutions" className="py-20 md:py-28 bg-[#0c0c0c]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-xs text-[#e8632a] uppercase tracking-widest mb-4 font-semibold">
            Ce qu&apos;on construit
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-[#f0ede8]">
            Quatre expertises,{" "}
            <span className="gradient-text">un seul partenaire.</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {solutions.map((s) => (
            <div
              key={s.title}
              className="p-6 rounded-2xl border bg-[#141414] hover:bg-[#181818] transition-all duration-200"
              style={{ borderColor: s.border }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                style={{ backgroundColor: s.bg }}
              >
                <s.icon size={19} style={{ color: s.color }} />
              </div>
              <h3 className="text-base font-semibold text-[#f0ede8] mb-2">{s.title}</h3>
              <p className="text-sm text-[#888882] leading-relaxed mb-4">{s.description}</p>
              <div className="flex flex-wrap gap-2">
                {s.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-[#666660] border border-[#242424] rounded-full px-3 py-1 bg-[#111]"
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
