const tools = [
  { name: "Make", color: "#6d28d9" },
  { name: "Zapier", color: "#ff4a00" },
  { name: "Airtable", color: "#2d7ff9" },
  { name: "Webflow", color: "#146ef5" },
  { name: "Claude AI", color: "#d97757" },
  { name: "Anthropic", color: "#d97757" },
  { name: "n8n", color: "#ea4b71" },
  { name: "Notion", color: "#000000" },
  { name: "Stripe", color: "#635bff" },
  { name: "OpenAI", color: "#10a37f" },
  { name: "Vercel", color: "#000000" },
  { name: "Claude Code", color: "#d97757" },
];

export function LogoBar() {
  const repeated = [...tools, ...tools, ...tools];
  return (
    <section className="py-10 bg-gray-50 border-y border-gray-100 overflow-hidden">
      <p className="text-center text-[11px] font-semibold text-gray-400 uppercase tracking-widest mb-7">
        Stack technologique maîtrisé
      </p>
      <div className="relative">
        <div className="flex gap-14 animate-[scroll_28s_linear_infinite] whitespace-nowrap">
          {repeated.map((tool, i) => (
            <span
              key={i}
              className="text-sm font-bold uppercase tracking-widest flex-shrink-0"
              style={{ color: tool.color }}
            >
              {tool.name}
            </span>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
      `}</style>
    </section>
  );
}
