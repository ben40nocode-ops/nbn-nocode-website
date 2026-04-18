const tools = ["Make", "Zapier", "Airtable", "Webflow", "Claude AI", "Anthropic", "n8n", "Notion", "Stripe", "OpenAI"];

export function LogoBar() {
  return (
    <section className="py-10 bg-gray-50 border-y border-gray-100 overflow-hidden">
      <p className="text-center text-[11px] font-semibold text-gray-400 uppercase tracking-widest mb-7">
        Stack technologique maîtrisé
      </p>
      <div className="relative">
        <div className="flex gap-14 animate-[scroll_24s_linear_infinite] whitespace-nowrap">
          {[...tools, ...tools, ...tools].map((tool, i) => (
            <span key={i} className="text-sm font-semibold text-gray-300 uppercase tracking-widest flex-shrink-0">
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
