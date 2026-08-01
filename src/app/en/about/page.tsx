import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin, Award, Zap, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "About — Benjamin Bertigny, AI Systems Builder",
  description: "Benjamin Bertigny, AI systems builder based in Bordeaux. Trained at Alegria Academy, Anthropic-certified. Founder of NBN IA — autonomous AI systems for SMBs.",
  alternates: {
    canonical: "https://www.nbn-ia.fr/en/about",
    languages: {
      fr: "https://www.nbn-ia.fr/a-propos",
      en: "https://www.nbn-ia.fr/en/about",
      "x-default": "https://www.nbn-ia.fr/a-propos",
    },
  },
  openGraph: { title: "About — Benjamin Bertigny, AI Systems Builder | NBN IA", url: "https://www.nbn-ia.fr/en/about", type: "profile" },
};

export default function AboutEnPage() {
  return (
    <div className="min-h-screen pt-24 pb-32">
      <div className="max-w-3xl mx-auto px-6">

        <div className="mb-12">
          <p className="text-xs text-[#FF5A1F] uppercase tracking-widest mb-4 font-semibold">About</p>
          <h1 className="text-4xl md:text-[3.4rem] font-extrabold tracking-[-0.03em] text-[#0E1116] mb-4">Benjamin Bertigny</h1>
          <p className="text-xl text-[#6B7280] leading-relaxed">AI Systems Builder — Founder of NBN IA</p>
        </div>

        <div className="max-w-none mb-12 flex flex-col gap-4">
          <p className="text-base text-[#2E343D] leading-relaxed">
            I build AI systems that work in place of SMBs. Not simple automations — architectures of autonomous agents that perceive, decide and act without human intervention, 24/7.
          </p>
          <p className="text-base text-[#2E343D] leading-relaxed">
            Based in the <strong>Bordeaux · Royan · Arcachon</strong> triangle, I work on-site or remotely across France. My specialty: using <strong>Claude (Anthropic)</strong> — the most advanced AI model for agents — combined with Make, n8n and custom architectures to create systems that look like neither a dev agency nor a nocode agency.
          </p>
          <p className="text-base text-[#2E343D] leading-relaxed">
            My conviction: AI should work for you, not the other way around. I don&apos;t deliver workflows. I deliver a system that runs, adapts, and that I maintain over time.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 mb-12">
          {[
            { icon: Award, title: "Alegria Academy training", desc: "Specialised training in AI systems design and orchestration of autonomous agents for business use cases." },
            { icon: Award, title: "Anthropic Architecture certified", desc: "Official Anthropic certification in Claude agent architecture — design, orchestration and deployment of advanced AI systems." },
            { icon: Zap, title: "Technical stack", desc: "Claude AI · Claude Code · Make · n8n · Next.js · Vercel · Supabase · Airtable · MCP · REST APIs" },
            { icon: Users, title: "Built for your sector", desc: "Restaurateurs, craftsmen, hoteliers, agencies, consultancies — varied sectors, same conviction: AI must be useful from month one." },
          ].map((c) => (
            <div key={c.title} className="p-6 rounded-2xl border border-[#E2E0DA] bg-white shadow-[0_14px_34px_rgba(14,17,22,.06)]">
              <div className="flex items-center gap-3 mb-3">
                <c.icon size={18} className="text-[#FF5A1F]" />
                <h2 className="text-sm font-bold text-[#0E1116]">{c.title}</h2>
              </div>
              <p className="text-sm text-[#6B7280]">{c.desc}</p>
            </div>
          ))}
        </div>

        <div className="p-6 rounded-2xl border border-[#E2E0DA] bg-white shadow-[0_14px_34px_rgba(14,17,22,.06)] mb-12">
          <div className="flex items-center gap-3 mb-3">
            <MapPin size={18} className="text-[#FF5A1F]" />
            <h2 className="text-sm font-bold text-[#0E1116]">Area served</h2>
          </div>
          <p className="text-sm text-[#6B7280]">
            Based in <strong>Bordeaux</strong> — on-site in the Bordeaux · Royan · Arcachon triangle (Gironde, Charente-Maritime, Médoc). And 100% remote across France.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 mb-12">
          <a href="https://www.linkedin.com/in/bertigny-benjamin-545300273/" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-[#E2E0DA] hover:-translate-y-0.5 text-[#2E343D] px-5 py-3 rounded-xl text-sm font-semibold transition-all">
            Personal LinkedIn
          </a>
          <a href="https://www.linkedin.com/company/nbn-nocode" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-[#E2E0DA] hover:-translate-y-0.5 text-[#2E343D] px-5 py-3 rounded-xl text-sm font-semibold transition-all">
            NBN IA page
          </a>
          <a href="mailto:contact@nbn-ia.fr"
            className="inline-flex items-center gap-2 border border-[#E2E0DA] hover:-translate-y-0.5 text-[#2E343D] px-5 py-3 rounded-xl text-sm font-semibold transition-all">
            contact@nbn-ia.fr
          </a>
        </div>

        <div className="bg-[#0E1116] rounded-[26px] p-8 text-center shadow-[0_40px_100px_rgba(14,17,22,.4)]">
          <p className="text-white font-bold text-lg mb-2">Have an automation project?</p>
          <p className="text-gray-400 text-sm mb-6">Free 1h call — together we identify the 3 most profitable automations for your business.</p>
          <Link href="https://calendly.com/ben40nocode/1h" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#FF5A1F] hover:bg-[#E64A12] hover:-translate-y-0.5 text-white px-6 py-3 rounded-xl text-sm font-semibold transition-all shadow-[0_10px_24px_rgba(255,90,31,.28)]">
            Book my free call (1h) <ArrowRight size={14} />
          </Link>
        </div>

      </div>
    </div>
  );
}
