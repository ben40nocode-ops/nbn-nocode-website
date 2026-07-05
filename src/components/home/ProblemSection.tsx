const pains = [
  "Vous répondez aux mêmes questions clients 20 fois par jour.",
  "Vous faites vos devis le soir, après le chantier — parfois trop tard.",
  "Le téléphone sonne pendant que vous avez les mains prises.",
  "Un client sur trois ne rappelle pas : il a trouvé plus rapide.",
];

export function ProblemSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 leading-snug">
          Vos journées ressemblent à ça ?
        </h2>
        <div className="grid sm:grid-cols-2 gap-4 text-left">
          {pains.map((p) => (
            <div key={p} className="flex items-start gap-3 p-5 rounded-2xl bg-white border border-gray-100">
              <span className="text-[#e8632a] font-bold flex-shrink-0">→</span>
              <p className="text-sm text-gray-600 leading-relaxed">{p}</p>
            </div>
          ))}
        </div>
        <p className="mt-10 text-xl font-bold text-[#e8632a]">
          Et si tout ça se faisait tout seul ?
        </p>
      </div>
    </section>
  );
}
