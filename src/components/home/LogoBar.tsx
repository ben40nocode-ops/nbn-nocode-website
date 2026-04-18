const tools = ["Make", "Zapier", "Airtable", "Webflow", "Claude AI", "Anthropic", "n8n", "Notion", "Stripe", "OpenAI"];

export function LogoBar() {
  return (
    <section className="py-8 border-y border-[#1e1e1e] bg-[#0e0e0e] overflow-hidden">
      <div className="relative">
        <div className="flex gap-10 animate-[scroll_22s_linear_infinite] whitespace-nowrap">
          {[...tools, ...tools, ...tools].map((tool, i) => (
            <span
              key={i}
              className="text-xs font-semibold text-[#3a3a38] uppercase tracking-widest flex-shrink-0"
            >
              {tool}
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
