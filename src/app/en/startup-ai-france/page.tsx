import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Systems for Startups & Scale-ups in France",
  description: "Build autonomous AI systems for your startup in France. Claude AI agents, vibe coding, SaaS development. Bordeaux-based, serving all of France. Free audit.",
  keywords: ["AI startup France", "SaaS development France", "AI agents startup Bordeaux", "vibe coding startup France", "Claude AI startup", "AI infrastructure France", "startup automation France", "AI CTO France"],
  alternates: { canonical: "https://www.nbn-ia.fr/en/startup-ai-france" },
};

export default function StartupAiPage() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-100 text-[#e8632a] rounded-full px-4 py-1.5 text-xs font-semibold mb-8 tracking-wide uppercase">
          🚀 AI for Startups — France
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
          AI Systems for Startups<br />
          <span className="text-[#e8632a]">& Scale-ups in France</span>
        </h1>
        <p className="text-lg text-gray-500 max-w-2xl mb-10 leading-relaxed">
          Move fast without breaking things. We build your AI infrastructure — agents, automations, web apps — using vibe coding with Claude Code. Production-ready in weeks, not months.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mb-20">
          <Link href="https://calendly.com/ben40nocode/1h" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#e8632a] hover:bg-[#c4521f] text-white px-7 py-4 rounded-xl font-semibold transition-colors">
            Book free audit <ArrowRight size={17} />
          </Link>
        </div>
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">What we build for startups</h2>
            <ul className="space-y-4">
              {[
                "AI-powered SaaS products with Claude agents embedded",
                "Automated lead generation & qualification pipelines",
                "Internal tools & dashboards (vibe coded in weeks)",
                "Customer onboarding automation",
                "AI customer support — agents handle tier-1 tickets",
                "Data pipelines & analytics infrastructure",
              ].map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <Check size={20} className="text-[#e8632a] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{f}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gray-50 rounded-2xl p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Our edge for startups</h2>
            <ul className="space-y-3 text-sm text-gray-500">
              {[
                "Vibe coding = 3× faster than traditional dev agencies",
                "Claude AI (Anthropic) — most reliable LLM for production AI",
                "We build AND maintain — one partner, not 3 vendors",
                "Startup-friendly pricing: setup + monthly retainer",
                "English-speaking team, international mindset",
              ].map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <Check size={14} className="text-[#e8632a] flex-shrink-0 mt-0.5" />{f}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="bg-gray-900 rounded-3xl p-12 text-center">
          <h2 className="text-white font-bold text-2xl mb-3">Let&apos;s build your AI stack</h2>
          <p className="text-gray-300 mb-8 max-w-md mx-auto">Free 1-hour session. We audit your current stack and propose what to build first.</p>
          <Link href="https://calendly.com/ben40nocode/1h" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#e8632a] hover:bg-[#c4521f] text-white px-8 py-4 rounded-xl font-semibold transition-colors">
            Book free session <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
