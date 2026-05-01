import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Automation & Web Development in Arcachon, France | NBN IA",
  description: "NBN IA builds autonomous AI systems and custom web apps for businesses in Arcachon. Claude AI agents, vibe coding, 24/7 automation. Free audit.",
  keywords: ["AI automation Arcachon", "web development Arcachon France", "AI agency Arcachon", "Claude AI Arcachon", "autonomous AI Arcachon", "web app Arcachon France", "digital agency Arcachon English", "AI consultant Arcachon"],
  alternates: { canonical: "https://www.nbn-ia.fr/en/arcachon" },
  openGraph: { title: "AI Automation in Arcachon — NBN IA", description: "Autonomous AI systems and web apps for businesses in Arcachon, France.", url: "https://www.nbn-ia.fr/en/arcachon" },
};

export default function ArcachonEnPage() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-100 text-[#e8632a] rounded-full px-4 py-1.5 text-xs font-semibold mb-8 tracking-wide uppercase">
          AI Agency — Arcachon
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
          AI Automation &amp; Web Development<br />
          <span className="text-[#e8632a]">in Arcachon, France</span>
        </h1>
        <p className="text-lg text-gray-500 max-w-2xl mb-10 leading-relaxed">
          NBN IA serves businesses in Arcachon and the surrounding Bassin d'Arcachon area. We build autonomous AI systems with Claude AI agents, custom web apps, and digital automations that run 24/7 without human intervention.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mb-20">
          <Link href="https://calendly.com/ben40nocode/1h" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#e8632a] hover:bg-[#c4521f] text-white px-7 py-4 rounded-xl font-semibold transition-colors">
            Book free audit <ArrowRight size={17} />
          </Link>
          <Link href="/en#solutions" className="inline-flex items-center gap-2 border border-gray-300 text-gray-700 px-7 py-4 rounded-xl font-semibold transition-colors">
            Our services <ArrowRight size={17} />
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {[
            { title: "AI Automation", desc: "Claude AI agents that handle repetitive tasks, qualify leads, process documents — 24/7.", href: "/en/ai-automation" },
            { title: "Web Apps", desc: "Custom applications with vibe coding and AI agents. Auth, database, real-time dashboards.", href: "/en/web-apps" },
            { title: "Websites", desc: "Fast, SEO-optimized websites. Landing pages, professional sites, e-commerce.", href: "/en/websites" },
          ].map((s) => (
            <Link key={s.title} href={s.href} className="p-6 border border-gray-200 rounded-2xl hover:border-[#e8632a] transition-colors group">
              <h3 className="font-bold text-gray-900 mb-2 group-hover:text-[#e8632a] transition-colors">{s.title}</h3>
              <p className="text-sm text-gray-500 mb-4">{s.desc}</p>
              <span className="text-xs text-[#e8632a] font-semibold flex items-center gap-1">Learn more <ArrowRight size={12} /></span>
            </Link>
          ))}
        </div>
        <div className="bg-gray-50 rounded-2xl p-10 mb-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Why NBN IA in Arcachon?</h2>
          <ul className="space-y-4">
            {[
              "Local presence in Arcachon — we meet in person or work 100% remote",
              "Certified Anthropic Architecture — specialized in Claude AI, the most reliable LLM",
              "Trained at Alegria Academy — proven AI systems methodology",
              "Transparent pricing: one-time setup + monthly maintenance subscription",
              "Systems built to last: we maintain and evolve your AI over time",
            ].map((f) => (
              <li key={f} className="flex items-start gap-3">
                <Check size={18} className="text-[#e8632a] flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{f}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-gray-900 rounded-3xl p-12 text-center">
          <h2 className="text-white font-bold text-2xl mb-3">Ready to automate in Arcachon?</h2>
          <p className="text-gray-300 mb-8 max-w-md mx-auto">Free 1-hour audit. Leave with a concrete AI architecture — no commitment.</p>
          <Link href="https://calendly.com/ben40nocode/1h" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#e8632a] hover:bg-[#c4521f] text-white px-8 py-4 rounded-xl font-semibold transition-colors">
            Book free audit <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
