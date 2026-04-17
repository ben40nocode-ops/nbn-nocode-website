const tools = [
  "Make", "Zapier", "Airtable", "Webflow", "Claude AI",
  "Anthropic", "n8n", "Notion", "Stripe", "OpenAI",
];

export function LogoBar() {
  return (
    <section className="py-10 border-y border-[#1c1c1c] overflow-hidden">
      <p className="text-center text-xs text-[#444440] uppercase tracking-widest mb-8">
        Stack technologique maîtrisé
      </p>
      <div className="relative">
        <div className="flex gap-12 animate-[scroll_20s_linear_infinite] whitespace-nowrap">
          {[...tools, ...tools].map((tool, i) => (
            <span
              key={i}
              className="text-sm font-medium text-[#333330] hover:text-[#777770] transition-colors duration-300 cursor-default select-none flex-shrink-0"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
