import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Layers, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Web App Development with AI — France | NBN IA",
  description: "Custom web apps with Claude Code (vibe coding) and AI agents. Auth, database, real-time dashboards. From €2,500. Based in Bordeaux, France. Free audit.",
  keywords: ["web app development France", "vibe coding France", "Claude Code web app", "AI web application France", "custom web app Bordeaux", "SaaS development France", "Next.js web app France", "AI-powered web app"],
  alternates: { canonical: "https://www.nbn-ia.fr/en/web-apps" },
  openGraph: { title: "Web App Development with AI — NBN IA France", description: "Custom web apps built with vibe coding and Claude AI agents. From €2,500.", url: "https://www.nbn-ia.fr/en/web-apps" },
};

export default function WebAppsEnPage() {
  return (
    <>
      <div className="min-h-screen bg-white pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-100 text-[#e8632a] rounded-full px-4 py-1.5 text-xs font-semibold mb-8 tracking-wide uppercase">
            <Layers size={12} /> Web Apps — France
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Custom Web Apps Built with<br />
            <span className="text-[#e8632a]">AI-Assisted Vibe Coding</span>
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mb-10 leading-relaxed">
            We build complete web applications — authentication, database, modern interfaces — then connect them to your AI systems to automate your business logic. Vibe coding with Claude Code means faster builds, cleaner code.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-20">
            <Link href="https://calendly.com/ben40nocode/1h" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#e8632a] hover:bg-[#c4521f] text-white px-7 py-4 rounded-xl font-semibold transition-colors">
              Free audit <ArrowRight size={17} />
            </Link>
            <Link href="/en#work"
              className="inline-flex items-center gap-2 border border-gray-300 hover:border-gray-400 text-gray-700 px-7 py-4 rounded-xl font-semibold transition-colors">
              See our work <ArrowRight size={17} />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">What we build</h2>
              <ul className="space-y-4">
                {["Modern responsive interfaces (desktop, tablet, mobile)", "Secure authentication (sessions, 2FA, OAuth)", "Databases (PostgreSQL, Supabase, MongoDB)", "REST or GraphQL APIs", "Real-time dashboards & analytics", "Third-party integrations (Stripe, Slack, etc.)"].map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <Check size={20} className="text-[#e8632a] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">With AI agents</h2>
              <ul className="space-y-4">
                {["Claude agents that understand your business logic", "Real-time document & data processing", "Intelligent chatbots embedded in the app", "Critical workflow automation", "AI-powered recommendations & predictions", "24/7 support via autonomous agents"].map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <Check size={20} className="text-[#e8632a] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="bg-gray-50 rounded-2xl p-10 mb-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">What is vibe coding?</h2>
            <p className="text-gray-500 leading-relaxed mb-6">Vibe coding is AI-assisted development using Claude Code — we describe the system, Claude generates production-ready code, we architect and refine. The result: faster builds (3–8 weeks), lower costs, higher code quality than traditional development agencies.</p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { title: "3–8 weeks", desc: "From concept to production — not 3–6 months." },
                { title: "Lower cost", desc: "AI-assisted development reduces build time without sacrificing quality." },
                { title: "Maintained", desc: "Monthly subscription. Your app evolves with your business." },
              ].map((item) => (
                <div key={item.title} className="p-4 bg-white rounded-xl border border-gray-200">
                  <div className="font-bold text-[#e8632a] mb-1">{item.title}</div>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gray-900 rounded-3xl p-12 text-center">
            <h2 className="text-white font-bold text-2xl mb-3">Ready to build your AI web app?</h2>
            <p className="text-gray-300 mb-8 max-w-md mx-auto">Free 1-hour audit. We map your product, propose the architecture. No commitment.</p>
            <Link href="https://calendly.com/ben40nocode/1h" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#e8632a] hover:bg-[#c4521f] text-white px-8 py-4 rounded-xl font-semibold transition-colors">
              Book free audit <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
