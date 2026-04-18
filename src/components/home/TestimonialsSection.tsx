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
    color: "#0ea5e9",
  },
  {
    quote: "J'ai souscrit au Full Stack Partner. En 3 mois, mon système a évolué 4 fois sans que je touche à rien. C'est exactement ce que je voulais.",
    name: "Camille R.",
    role: "Fondatrice, e-commerce lifestyle",
    initials: "CR",
    color: "#8b5cf6",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-xs font-semibold text-[#e8632a] uppercase tracking-widest mb-3">
            Témoignages
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 max-w-xl mx-auto leading-snug">
            Ce que disent nos clients.
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="p-7 rounded-2xl border border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm transition-all duration-200 flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-5">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-[#e8632a] text-base">★</span>
                ))}
              </div>
              <p className="text-sm text-gray-600 leading-relaxed flex-1 mb-7 italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              {/* Author */}
              <div className="flex items-center gap-3 pt-5 border-t border-gray-100">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                  style={{ backgroundColor: t.color }}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">{t.name}</p>
                  <p className="text-xs text-gray-400">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
