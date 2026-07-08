"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle, AlertCircle, X } from "lucide-react";
import type { Subscriber } from "@/lib/subscribers";

const PLAN_LABELS: Record<string, string> = {
  core: "Core Maintenance — 159€/mois",
  business: "Business Logic — 320€/mois",
  fullstack: "Full Stack Partner — 540€/mois",
};

const STATUS_LABELS: Record<string, { label: string; tone: string }> = {
  active: { label: "Actif", tone: "bg-green-50 text-green-700" },
  past_due: { label: "Paiement en retard", tone: "bg-amber-50 text-amber-700" },
  cancelled: { label: "Annulé", tone: "bg-gray-100 text-gray-600" },
};

interface Props {
  firstName: string;
  subscriber: Subscriber;
  justSubscribed: boolean;
  portalError: boolean;
}

export function DashboardClient({ firstName, subscriber, justSubscribed, portalError }: Props) {
  const [modal, setModal] = useState<null | "change" | "cancel">(null);
  const status = STATUS_LABELS[subscriber.status] ?? STATUS_LABELS.active;

  function goToPortal() {
    window.location.href = "/api/stripe/portal";
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-6">

        {justSubscribed && (
          <div className="mb-6 bg-green-50 border border-green-200 rounded-xl px-6 py-4 flex items-center gap-3">
            <CheckCircle size={18} className="text-green-600 flex-shrink-0" />
            <p className="text-sm text-green-800 font-medium">Votre abonnement est activé ! Bienvenue chez NBN IA 🎉</p>
          </div>
        )}

        {portalError && (
          <div className="mb-6 bg-red-50 border border-red-200 rounded-xl px-6 py-4 flex items-center gap-3">
            <AlertCircle size={18} className="text-red-600 flex-shrink-0" />
            <p className="text-sm text-red-800 font-medium">Une erreur est survenue lors de l&apos;accès au portail de gestion. Réessayez.</p>
          </div>
        )}

        <div className="mb-10">
          <p className="text-sm text-gray-400 mb-1">Bienvenue,</p>
          <h1 className="text-3xl font-bold text-gray-900">Bonjour {firstName} 👋</h1>
        </div>

        {/* Abonnement actif */}
        <div className="bg-white rounded-2xl border border-gray-100 p-8 mb-6 shadow-sm">
          <div className="flex items-start justify-between flex-wrap gap-4 mb-6">
            <div>
              <p className="text-xs font-semibold text-[#e8632a] uppercase tracking-widest mb-2">Abonnement</p>
              <h2 className="text-xl font-bold text-gray-900 mb-1">{PLAN_LABELS[subscriber.plan] ?? subscriber.plan}</h2>
              <p className="text-sm text-gray-400">Client depuis le {subscriber.createdAt}</p>
            </div>
            <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full ${status.tone}`}>
              <CheckCircle size={13} />
              {status.label}
            </span>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setModal("change")}
              className="inline-flex items-center gap-2 bg-[#e8632a] hover:bg-[#c4521f] text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-colors"
            >
              Changer de plan
            </button>
            <button
              onClick={() => setModal("cancel")}
              className="inline-flex items-center gap-2 border border-gray-200 hover:border-gray-300 text-gray-700 hover:bg-gray-50 px-5 py-2.5 rounded-xl text-sm font-bold transition-colors"
            >
              Résilier mon abonnement
            </button>
          </div>
        </div>

        {/* Activité */}
        <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm mb-6">
          <h3 className="text-sm font-bold text-gray-900 mb-4">Activité</h3>
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

      {/* Modal changer de plan */}
      {modal === "change" && (
        <Modal onClose={() => setModal(null)} title="Changer de plan">
          <p className="text-sm text-gray-600 mb-6">
            Vous allez être redirigé vers le portail de gestion Stripe pour modifier votre abonnement.
            Le changement prendra effet immédiatement, et la facturation sera ajustée au prorata.
          </p>
          <div className="flex justify-end gap-3">
            <button
              onClick={() => setModal(null)}
              className="px-5 py-2.5 rounded-xl text-sm font-bold border border-gray-200 hover:bg-gray-50 transition-colors"
            >
              Annuler
            </button>
            <button
              onClick={goToPortal}
              className="px-5 py-2.5 rounded-xl text-sm font-bold bg-[#e8632a] hover:bg-[#c4521f] text-white transition-colors"
            >
              Continuer
            </button>
          </div>
        </Modal>
      )}

      {/* Modal résiliation */}
      {modal === "cancel" && (
        <Modal onClose={() => setModal(null)} title="Résilier votre abonnement ?">
          <p className="text-sm text-gray-600 mb-6">
            Vous allez perdre tous vos services de maintenance NBN IA à la fin de la période en cours.
            Cette action est irréversible.
          </p>
          <div className="flex justify-end gap-3">
            <button
              onClick={() => setModal(null)}
              className="px-5 py-2.5 rounded-xl text-sm font-bold border border-gray-200 hover:bg-gray-50 transition-colors"
            >
              Annuler
            </button>
            <button
              onClick={goToPortal}
              className="px-5 py-2.5 rounded-xl text-sm font-bold bg-red-600 hover:bg-red-700 text-white transition-colors"
            >
              Confirmer la résiliation
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
}

function Modal({ onClose, title, children }: { onClose: () => void; title: string; children: React.ReactNode }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4" onClick={onClose}>
      <div
        className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition-colors"
          aria-label="Fermer"
        >
          <X size={20} />
        </button>
        <h2 className="text-xl font-bold text-gray-900 mb-4">{title}</h2>
        {children}
      </div>
    </div>
  );
}
