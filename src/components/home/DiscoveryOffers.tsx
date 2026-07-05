import Link from "next/link";
import { ArrowRight, CalendarCheck, Star, Mail } from "lucide-react";

const offers = [
  {
    icon: CalendarCheck,
    tag: "Offre découverte",
    title: "Fini les no-shows",
    price: "290€",
    desc: "Rappels de RDV automatiques par SMS ou email, installés en 3 jours. Vous ne ratez plus un client.",
  },
  {
    icon: Star,
    tag: "Offre découverte",
    title: "Vos avis Google en automatique",
    price: "290€",
    desc: "Une demande d'avis part après chaque prestation. Votre note Google grimpe toute seule.",
  },
  {
    icon: Mail,
    tag: "Microsoft 365",
    title: "Votre Outlook qui bosse pour vous",
    price: "dès 450€",
    desc: "Mails triés, réponses préparées, agenda synchronisé, devis générés depuis Excel. Compatible Microsoft 365.",
  },
];

export function DiscoveryOffers() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold text-[#e8632a] uppercase tracking-widest mb-3">
            Pour commencer simple
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 max-w-xl mx-auto leading-snug">
            Un problème, un prix, c&apos;est réglé.
          </h2>
          <p className="mt-4 text-gray-500 max-w-md mx-auto">
            Paiement unique. Sans abonnement. Le meilleur moyen de tester avant d&apos;aller plus loin.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {offers.map((o) => (
            <div key={o.title} className="p-7 rounded-2xl border border-gray-200 bg-white hover:border-[#e8632a] hover:shadow-lg hover:shadow-orange-100 transition-all duration-200 flex flex-col">
              <div className="flex items-center justify-between mb-5">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-orange-50">
                  <o.icon size={20} className="text-[#e8632a]" />
                </div>
                <span className="text-xs font-semibold text-[#e8632a] bg-orange-50 border border-orange-100 rounded-full px-3 py-1">{o.tag}</span>
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2">{o.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed flex-1 mb-5">{o.desc}</p>
              <div className="flex items-center justify-between pt-5 border-t border-gray-100">
                <span className="text-2xl font-bold text-[#e8632a]">{o.price}</span>
                <Link href="/contact#message" className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-700 hover:text-[#e8632a] transition-colors">
                  Demander cette offre <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
