import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import { ArrowRight, CheckCircle, Clock, Zap } from "lucide-react";

export const metadata = { title: "Espace client" };

export default async function DashboardPage() {
  const user = await currentUser();
  if (!user) redirect("/");

  const firstName = user.firstName ?? "Client";

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <div className="mb-10">
          <p className="text-sm text-gray-400 mb-1">Bienvenue,</p>
          <h1 className="text-3xl font-bold text-gray-900">Bonjour {firstName} 👋</h1>
        </div>

        {/* Status card */}
        <div className="bg-white rounded-2xl border border-gray-100 p-8 mb-6 shadow-sm">
          <div className="flex items-start justify-between flex-wrap gap-4">
            <div>
              <p className="text-xs font-semibold text-[#e8632a] uppercase tracking-widest mb-2">Abonnement actif</p>
              <h2 className="text-xl font-bold text-gray-900 mb-1">Business Logic — 290€/mois</h2>
              <p className="text-sm text-gray-400">Prochain renouvellement : 17 mai 2026</p>
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
            { icon: Zap, label: "Automatisations surveillées", value: "4" },
            { icon: Clock, label: "Heures de maintenance ce mois", value: "2h / 4h" },
            { icon: CheckCircle, label: "Incidents résolus", value: "1" },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <Icon size={18} className="text-[#e8632a] mb-3" />
              <div className="text-2xl font-bold text-gray-900 mb-1">{value}</div>
              <div className="text-xs text-gray-400">{label}</div>
            </div>
          ))}
        </div>

        {/* Recent activity placeholder */}
        <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm mb-6">
          <h3 className="text-sm font-bold text-gray-900 mb-6">Activité récente</h3>
          <div className="space-y-4">
            {[
              { date: "15 avr. 2026", action: "Vérification des flux Make — tout est nominal", status: "ok" },
              { date: "12 avr. 2026", action: "Optimisation du flux de sync Airtable → CRM", status: "ok" },
              { date: "08 avr. 2026", action: "Alerte : délai de traitement > 30s sur le flux email", status: "warn" },
            ].map((item) => (
              <div key={item.date} className="flex items-start gap-3 text-sm">
                <span className={`mt-0.5 w-2 h-2 rounded-full flex-shrink-0 ${item.status === "ok" ? "bg-green-400" : "bg-orange-400"}`} />
                <div className="flex-1">
                  <span className="text-gray-700">{item.action}</span>
                  <span className="ml-3 text-xs text-gray-400">{item.date}</span>
                </div>
              </div>
            ))}
          </div>
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
