import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Bot, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Automation Agency in France — Claude AI Agents",
  description: "Autonomous AI systems for SMBs in France. Claude AI agents, n8n/Make workflows, 24/7 automation. Based in Bordeaux, serving all of France. Free audit.",
  keywords: ["AI automation France", "Claude AI agents France", "AI agency Bordeaux", "autonomous AI systems France", "AI automation SMB France", "vibe coding France", "n8n automation France", "Make automation France", "AI consultant Bordeaux", "Anthropic partner France"],
  alternates: {
    canonical: "https://www.nbn-ia.fr/en/ai-automation",
    languages: {
      fr: "https://www.nbn-ia.fr/services/automatisation-ia",
      en: "https://www.nbn-ia.fr/en/ai-automation",
      "x-default": "https://www.nbn-ia.fr/services/automatisation-ia",
    },
  },
  openGraph: { title: "AI Automation Agency France — NBN IA", description: "Autonomous AI systems built with Claude AI. 24/7 automation for French SMBs.", url: "https://www.nbn-ia.fr/en/ai-automation" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AI Automation & Autonomous Agents — France",
  provider: { "@type": "Organization", name: "NBN IA", url: "https://www.nbn-ia.fr" },
  areaServed: { "@type": "Country", name: "France" },
  description: "Custom Claude AI agents and autonomous systems for SMBs across France. One-time setup, monthly maintenance.",
  offers: { "@type": "Offer", price: "450", priceCurrency: "EUR", description: "Starting price for AI automation architecture" },
};

export default function AiAutomationEnPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="min-h-screen bg-white pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-100 text-[#e8632a] rounded-full px-4 py-1.5 text-xs font-semibold mb-8 tracking-wide uppercase">
            <Bot size={12} /> AI Automation — France
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            AI Automation Agency in France<br />
            <span className="text-[#e8632a]">Powered by Claude AI Agents</span>
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mb-10 leading-relaxed">
            We design autonomous AI systems that work for your business 24/7 — no human intervention required. Claude AI agents, n8n/Make workflows, complex API integrations. Based in Bordeaux, serving all of France.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-20">
            <Link href="https://calendly.com/ben40nocode/1h" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#e8632a] hover:bg-[#c4521f] text-white px-7 py-4 rounded-xl font-semibold text-base transition-colors">
              Book my free call (1h) <ArrowRight size={17} />
            </Link>
            <Link href="/en#solutions"
              className="inline-flex items-center gap-2 border border-gray-300 hover:border-gray-400 text-gray-700 hover:bg-gray-50 px-7 py-4 rounded-xl font-semibold text-base transition-colors">
              See our solutions <ArrowRight size={17} />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">What we automate</h2>
              <ul className="space-y-4">
                {["Lead qualification & sales follow-up (24/7)", "Document processing & data extraction", "Customer support via AI agents", "CRM sync & pipeline automation", "Content generation & SEO pipelines", "Financial reporting & cash flow alerts"].map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <Check size={20} className="text-[#e8632a] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Our AI stack</h2>
              <ul className="space-y-4">
                {["Claude AI (Anthropic) — most reliable LLM for business", "n8n & Make for workflow orchestration", "MCP protocol for advanced agent memory", "Supabase, Airtable, REST APIs", "Vercel + Next.js for AI-powered web apps", "Stripe, Slack, Notion integrations"].map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <Check size={20} className="text-[#e8632a] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="bg-gray-50 rounded-2xl p-10 mb-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Why Claude AI and not ChatGPT?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "200K context window", desc: "Reads entire contracts, databases, full client histories in one pass." },
                { title: "3× more reliable", desc: "Fewer hallucinations on structured business data — critical for automation." },
                { title: "Built for agents", desc: "Designed to act autonomously, not just answer questions. Multi-step workflows." },
              ].map((item) => (
                <div key={item.title} className="p-5 bg-white rounded-xl border border-gray-200">
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="border-t pt-12 mb-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">How it works</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { step: 1, title: "Free Audit (1h)", desc: "We map your workflows, identify automation opportunities, propose a concrete AI architecture." },
                { step: 2, title: "Build & Deploy (2–6 weeks)", desc: "We build your autonomous system with Claude AI agents, test thoroughly, deploy to production." },
                { step: 3, title: "Maintenance & Evolution", desc: "Monthly subscription. Your system evolves, we monitor, you focus on your business." },
              ].map((p) => (
                <div key={p.step} className="flex flex-col">
                  <div className="w-10 h-10 rounded-full bg-[#e8632a] text-white flex items-center justify-center font-bold mb-4">{p.step}</div>
                  <h3 className="font-bold text-gray-900 mb-2">{p.title}</h3>
                  <p className="text-sm text-gray-600">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gray-900 rounded-3xl p-12 text-center">
            <h2 className="text-white font-bold text-2xl mb-3">Ready to automate your business?</h2>
            <p className="text-gray-300 mb-8 max-w-md mx-auto">Free 1-hour audit. Leave with a concrete AI architecture — no commitment.</p>
            <Link href="https://calendly.com/ben40nocode/1h" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#e8632a] hover:bg-[#c4521f] text-white px-8 py-4 rounded-xl font-semibold transition-colors">
              Book my free call <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
