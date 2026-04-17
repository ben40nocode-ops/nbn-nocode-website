const testimonials = [
  {
    quote:
      "NBN a mis en place un agent IA qui répond à nos prospects en moins de 30 secondes. On a multiplié par 3 nos RDV qualifiés en 2 mois.",
    name: "Sophie M.",
    role: "Dirigeante, agence immobilière — Bordeaux",
    initials: "SM",
    color: "#e8632a",
  },
  {
    quote:
      "Le workflow de traitement douanier qu'ils ont construit nous fait économiser 3h par jour. L'équipe est réactive, le système ne plante jamais.",
    name: "Thomas L.",
    role: "Responsable logistique, PME export",
    initials: "TL",
    color: "#4fc3d9",
  },
  {
    quote:
      "J'ai souscrit au Full Stack Partner. En 3 mois, mon système a évolué 4 fois sans que je touche à quoi que ce soit. C'est exactement ce que je voulais.",
    name: "Camille R.",
    role: "Fondatrice, e-commerce lifestyle",
    initials: "CR",
    color: "#a78bfa",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs text-[#e8632a] uppercase tracking-widest mb-4 font-medium">
            Témoignages
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#f2f0eb]">
            Ce que disent nos clients.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="p-6 md:p-8 rounded-2xl border border-[#1c1c1c] bg-[#0a0a0a] hover:border-[#2a2a2a] hover:bg-[#0f0f0f] transition-all duration-300 flex flex-col"
            >
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-[#e8632a] text-sm">★</span>
                ))}
              </div>
              <p className="text-sm text-[#888880] leading-relaxed flex-1 mb-6 italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                  style={{ backgroundColor: t.color }}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-medium text-[#f2f0eb]">{t.name}</p>
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
