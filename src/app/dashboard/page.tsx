import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { Check } from "lucide-react";
import { getSubscriberByUserId, getSubscriberByEmail, linkUserIdToSubscriber } from "@/lib/subscribers";
import { DashboardClient } from "./DashboardClient";

export const metadata = { title: "Espace client", robots: { index: false } };

const PLANS = [
  {
    key: "core",
    name: "Core Maintenance",
    price: "159",
    desc: "L'essentiel pour garder vos systèmes IA en bonne santé.",
    features: ["Monitoring 24/7 de 3 systèmes IA", "2h de maintenance / mois", "Support par email (48h)", "Rapport mensuel"],
  },
  {
    key: "business",
    name: "Business Logic",
    price: "320",
    desc: "Pour les systèmes IA critiques qui font tourner votre business.",
    features: ["Monitoring proactif de 4 agents critiques", "4h de maintenance / mois", "Optimisation continue", "Support prioritaire (24h)"],
  },
  {
    key: "fullstack",
    name: "Full Stack Partner",
    price: "540",
    desc: "Un architecte IA dédié à l'évolution de votre système.",
    features: ["Monitoring illimité", "6h de dev/maintenance / mois", "Évolution constante des agents", "Accès direct Slack"],
  },
];

export default async function DashboardPage({ searchParams }: { searchParams: Promise<{ success?: string; error?: string }> }) {
  const user = await currentUser();
  if (!user) redirect("/sign-in?redirect_url=/dashboard");

  const email = user.emailAddresses[0]?.emailAddress;
  if (!email) redirect("/sign-in");

  let subscriber = await getSubscriberByUserId(user.id);

  if (!subscriber) {
    const byEmail = await getSubscriberByEmail(email);
    if (!byEmail) {
      redirect("/acces-refuse");
    }
    await linkUserIdToSubscriber(byEmail.id, user.id);
    subscriber = byEmail.fields;
  }
  const params = await searchParams;
  const justSubscribed = params.success === "1";
  const portalError = params.error === "portal";

  // État A : Pas d'abonnement actif
  if (!subscriber || subscriber.status !== "active") {
    // Si on revient de Stripe mais le webhook n'a pas encore mis à jour Airtable
    if (justSubscribed) {
      return (
        <div className="min-h-screen bg-gray-50 pt-24 pb-16 flex items-center justify-center">
          <div className="text-center max-w-md mx-auto px-6">
            <div className="w-16 h-16 border-4 border-[#e8632a] border-t-transparent rounded-full animate-spin mx-auto mb-6" />
            <h1 className="text-2xl font-bold text-gray-900 mb-3">Paiement confirmé !</h1>
            <p className="text-gray-500 mb-6">
              Votre abonnement est en cours d&apos;activation. Cette page se rafraîchit automatiquement…
            </p>
            {/* Auto-refresh toutes les 3s via meta tag */}
            <meta httpEquiv="refresh" content="3" />
          </div>
        </div>
      );
    }

    return (
      <div className="min-h-screen bg-gray-50 pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choisissez votre plan de maintenance
            </h1>
            <p className="text-gray-500 max-w-xl mx-auto">
              Sélectionnez le plan adapté à vos systèmes IA. Résiliable à tout moment depuis votre espace client.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {PLANS.map((plan) => (
              <div
                key={plan.key}
                className="group relative p-8 rounded-2xl border border-gray-200 bg-white hover:border-[#e8632a] hover:shadow-xl hover:shadow-orange-100 transition-all duration-300 flex flex-col"
              >
                <h4 className="font-bold text-xl text-gray-900 mb-2">{plan.name}</h4>
                <p className="text-sm text-gray-500 mb-6">{plan.desc}</p>
                <div className="mb-6 pb-6 border-b border-gray-100">
                  <span className="text-4xl font-bold text-[#e8632a]">{plan.price}€</span>
                  <span className="text-sm text-gray-400 ml-2">/ mois</span>
                </div>
                <ul className="space-y-3 flex-1 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-gray-600">
                      <Check size={16} className="text-[#e8632a] flex-shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={`/api/stripe/checkout?plan=${plan.key}`}
                  className="w-full text-center py-3 rounded-xl text-sm font-bold transition-colors duration-200 bg-[#e8632a] hover:bg-[#c4521f] text-white"
                >
                  S&apos;abonner
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // État B : Abonnement actif
  return (
    <DashboardClient
      firstName={user.firstName ?? "Client"}
      subscriber={subscriber}
      justSubscribed={justSubscribed}
      portalError={portalError}
    />
  );
}
