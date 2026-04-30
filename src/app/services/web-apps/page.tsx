import type { Metadata } from "next";
import Link from "next/link";
import { Check, ArrowRight, Code2, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Web Apps sur Mesure — Applications Métier IA | NBN IA",
  description: "Développement web apps, SaaS et applications métier pour PME. Architecture scalable, APIs, agents IA. Bordeaux, Gironde.",
  keywords: ["web app sur mesure", "développement application métier", "création SaaS Bordeaux", "web app IA"],
};

const jsonLd = {"@context":"https://schema.org","@type":"Service","name":"Web Apps Métier","provider":{"@type":"Organization","name":"NBN IA"},"areaServed":["Bordeaux","Royan","Arcachon","Soulac","Pauillac","Lesparre","Montalivet","Lacanau"]};

export default function WebAppsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="min-h-screen bg-white pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Web Apps sur Mesure<br /><span className="text-[#e8632a]">qui scale</span></h1>
          <p className="text-lg text-gray-500 max-w-2xl mb-10">Gestion réservations, CRM, dashboards, APIs, agents IA autonomes. On crée ce qu'il vous faut.</p>
          <Link href="https://calendly.com/ben40nocode/1h" target="_blank" className="inline-flex items-center gap-2 bg-[#e8632a] text-white px-7 py-4 rounded-xl font-semibold">
            Audit gratuit <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </>
  );
}
