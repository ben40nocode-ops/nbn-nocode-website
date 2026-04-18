const testimonials = [
  {
    quote: "NBN a mis en place un agent IA qui répond à nos prospects en moins de 30 secondes. On a multiplié par 3 nos RDV qualifiés en 2 mois.",
    name: "Sophie M.",
    role: "Dirigeante, agence immobilière — Bordeaux",
    initials: "SM",
    color: "#e8632a",
  },
  {
    quote: "Le workflow de traitement douanier qu'ils ont construit nous fait économiser 3h par jour. L'équipe est réactive, le système ne plante jamais.",
    name: "Thomas L.",
    role: "Responsable logistique, PME export",
    initials: "TL",
    color: "#38bdf8",
  },
  {
    quote: "J'ai souscrit au Full Stack Partner. En 3 mois, mon système a évolué 4 fois sans que je touche à quoi que ce soit. C'est exactement ce que je voulais.",
    name: "Camille R.",
    role: "Fondatrice, e-commerce lifestyle",
    initials: "CR",
    color: "#a78bfa",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-20 md:py-28 bg-[#0c0c0c]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-xs text-[#e8632a] uppercase tracking-widest mb-4 font-semibold">
            Témoignages
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-[#f0ede8]">
            Ce que disent nos clients.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="p-6 rounded-2xl border border-[#242424] bg-[#141414] hover:border-[#333] hover:bg-[#181818] transition-all duration-200 flex flex-col"
            >
              <div className="flex gap-0.5 mb-5">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-[#e8632a] text-sm">★</span>
                ))}
              </div>
              <p className="text-sm text-[#999994] leading-relaxed flex-1 mb-6 italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-[#1e1e1e]">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                  style={{ backgroundColor: t.color }}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#f0ede8]">{t.name}</p>
                  <p className="text-xs text-[#555550]">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
