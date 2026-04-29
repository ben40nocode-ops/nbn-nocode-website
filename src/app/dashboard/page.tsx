import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import { ArrowRight, CheckCircle, Clock, Zap, AlertCircle } from "lucide-react";
import { getSubscriberByUserId } from "@/lib/airtable";

export const metadata = { title: "Espace client" };

const PLAN_LABELS: Record<string, string> = {
  core: "Core Maintenance — 159€/mois",
  business: "Business Logic — 320€/mois",
  fullstack: "Full Stack Partner — 540€/mois",
};

const PLAN_STATS: Record<string, { automations: string; hours: string }> = {
  core: { automations: "3", hours: "2h/mois" },
  business: { automations: "4", hours: "4h/mois" },
  fullstack: { automations: "∞", hours: "6h/mois" },
};

export default async function DashboardPage() {
  const user = await currentUser();
  if (!user) redirect("/");

  const subscriber = await getSubscriberByUserId(user.id);

  if (!subscriber || subscriber.status !== "active") {
    return (
      <div className="min-h-screen bg-gray-50 pt-24 pb-16 flex items-center justify-center">
        <div className="max-w-md mx-auto px-6 text-center">
          <AlertCircle size={40} className="text-[#e8632a] mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-gray-900 mb-3">Aucun abonnement actif</h1>
          <p className="text-gray-500 mb-8">Choisissez un plan pour accéder à votre espace client et profiter du monitoring de vos automatisations.</p>
          <Link
            href="/tarifs"
            className="inline-flex items-center gap-2 bg-[#e8632a] hover:bg-[#c4521f] text-white px-6 py-3 rounded-xl font-semibold text-sm transition-colors"
          >
            Voir les plans <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    );
  }

  const firstName = user.firstName ?? "Client";
  const stats = PLAN_STATS[subscriber.plan] ?? PLAN_STATS.core;

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <div className="mb-10">
          <p className="text-sm text-gray-400 mb-1">Bienvenue,</p>
          <h1 className="text-3xl font-bold text-gray-900">Bonjour {firstName} 👋</h1>
        </div>

        {/* Abonnement actif */}
        <div className="bg-white rounded-2xl border border-gray-100 p-8 mb-6 shadow-sm">
          <div className="flex items-start justify-between flex-wrap gap-4">
            <div>
              <p className="text-xs font-semibold text-[#e8632a] uppercase tracking-widest mb-2">Abonnement actif</p>
              <h2 className="text-xl font-bold text-gray-900 mb-1">{PLAN_LABELS[subscriber.plan]}</h2>
              <p className="text-sm text-gray-400">Client depuis le {subscriber.createdAt}</p>
            </div>
            <span className="inline-flex items-center gap-1.5 bg-green-50 text-green-700 text-xs font-semibold px-3 py-1.5 rounded-full">
              <CheckCircle size={13} />
              Actif
            </span>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          {[
            { icon: Zap, label: "Automatisations surveillées", value: stats.automations },
            { icon: Clock, label: "Heures de maintenance ce mois", value: stats.hours },
            { icon: CheckCircle, label: "Incidents résolus", value: "0" },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <Icon size={18} className="text-[#e8632a] mb-3" />
              <div className="text-2xl font-bold text-gray-900 mb-1">{value}</div>
              <div className="text-xs text-gray-400">{label}</div>
            </div>
          ))}
        </div>

        {/* Activité */}
        <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm mb-6">
          <h3 className="text-sm font-bold text-gray-900 mb-6">Activité récente</h3>
          <p className="text-sm text-gray-400">Les rapports d&apos;activité apparaîtront ici chaque mois.</p>
        </div>

        {/* CTA */}
        <div className="bg-gray-900 rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-white font-bold mb-1">Besoin d&apos;une évolution ?</p>
            <p className="text-gray-400 text-sm">Planifiez un appel pour discuter de votre roadmap automation.</p>
          </div>
          <Link
            href="https://calendly.com/ben40nocode/1h"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-[#e8632a] hover:bg-[#c4521f] text-white px-6 py-3 rounded-xl font-semibold text-sm transition-colors"
          >
            Prendre un rendez-vous <ArrowRight size={15} />
          </Link>
        </div>

      </div>
    </div>
  );
}
