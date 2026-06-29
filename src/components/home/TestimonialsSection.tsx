import { Award, MessageCircle, ShieldCheck } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "Formé et certifié",
    text: "Un an de formation chez Alegria Academy et une certification Anthropic. Vous travaillez avec quelqu'un qui maîtrise vraiment Claude et les agents IA — pas un généraliste.",
  },
  {
    icon: MessageCircle,
    title: "Vous parlez au fondateur",
    text: "NBN IA, c'est moi, Benjamin. Pas de commercial, pas d'intermédiaire : vous échangez directement avec celui qui conçoit et construit votre système.",
  },
  {
    icon: ShieldCheck,
    title: "Audit gratuit, sans engagement",
    text: "On commence par 1h d'audit offert. Vous repartez avec un plan d'action concret et chiffré — que vous travailliez avec moi ensuite ou non.",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="text-xs font-semibold text-[#e8632a] uppercase tracking-widest mb-3">Pourquoi me faire confiance</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 max-w-xl mx-auto leading-snug">
            Un interlocuteur, pas une agence.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {reasons.map((r) => (
            <div key={r.title} className="p-7 rounded-2xl border border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm transition-all duration-200 flex flex-col">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 bg-orange-50">
                <r.icon size={20} className="text-[#e8632a]" />
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2">{r.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed flex-1">{r.text}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
