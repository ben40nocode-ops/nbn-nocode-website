import type { Metadata } from "next";
import Link from "next/link";
import { Check, ArrowRight, Brain, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Automatisations IA — Agents Claude, Workflows, Orchestration | NBN IA",
  description: "Automatisations IA et agents autonomes pour PME. Agents Claude, workflows Make/n8n, chatbots. Vos systèmes tournent 24/7. Bordeaux, Gironde.",
  keywords: ["automatisation IA", "agents Claude", "chatbot IA", "workflows Make", "orchestration IA", "automatisation processus"],
};

const jsonLd = {"@context":"https://schema.org","@type":"Service","name":"Automatisations IA","provider":{"@type":"Organization","name":"NBN IA"},"areaServed":["Bordeaux","Royan","Arcachon","Soulac","Pauillac","Lesparre","Montalivet","Lacanau"]};

export default function AutomatisationIAPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="min-h-screen bg-white pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Automatisations IA<br /><span className="text-[#e8632a]">vos agents travaillent 24/7</span></h1>
          <p className="text-lg text-gray-500 max-w-2xl mb-10">Agents Claude autonomes, workflows Make/n8n, chatbots IA. Vos tâches répétitives: resolues. Vos données: traitées. Vos clients: satisfaits.</p>
          <Link href="https://calendly.com/ben40nocode/1h" target="_blank" className="inline-flex items-center gap-2 bg-[#e8632a] text-white px-7 py-4 rounded-xl font-semibold">
            Audit gratuit <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </>
  );
}
