import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar, Bot, Globe, Code2, Sparkles, CheckCircle2 } from "lucide-react";
import { LogoBar } from "@/components/home/LogoBar";
import { FaqSection } from "@/components/home/FaqSection";

export const metadata: Metadata = {
  title: "AI Automation & Autonomous Agents for SMBs | Bordeaux · France",
  description: "Founded by Benjamin Bertigny, trained at Alegria Academy and certified Anthropic Architecture. We build autonomous AI systems that work for you 24/7. Claude AI agents, vibe coding, custom orchestration.",
  alternates: { canonical: "https://www.nbn-ia.fr/en" },
  openGraph: {
    title: "NBN IA — AI Automation & Agents | Bordeaux · France",
    description: "We build autonomous AI systems that work for you 24/7. Claude AI agents, vibe coding, custom orchestration — not a dev agency, not a nocode agency. Something new.",
    url: "https://www.nbn-ia.fr/en",
  },
};

export default function HomeEnPage() {
  return (
    <>
      {/* HERO */}
      <section className="pt-32 pb-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
            <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-100 text-[#e8632a] rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide uppercase">
              Autonomous AI Systems Architect
            </div>
            <div className="inline-flex items-center gap-2 bg-[#fff5f0] border border-[#e8632a]/20 text-[#d97757] rounded-full px-3 py-1 text-xs font-medium">
              <span>⬡</span> Specialized in Claude · Anthropic
            </div>
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900 leading-tight tracking-tight mb-6">
            Your processes run.{" "}
            <span className="text-[#e8632a]">Even while you sleep.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
            We build autonomous AI systems that work for you. 24/7.
            AI agents, vibe coding, Claude orchestration — one-time setup, zero intervention.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="https://calendly.com/ben40nocode/1h"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 bg-[#e8632a] hover:bg-[#c4521f] text-white px-7 py-4 rounded-xl font-semibold text-base transition-all duration-200 shadow-lg shadow-orange-200"
            >
              Book a free audit
              <ArrowRight size={17} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              href="/en#work"
              className="inline-flex items-center gap-2 border border-gray-200 hover:border-gray-300 text-gray-700 hover:text-gray-900 px-7 py-4 rounded-xl font-semibold text-base transition-all duration-200 hover:bg-gray-50"
            >
              See our work
            </Link>
          </div>
          <div className="mt-16 pt-10 border-t border-gray-100 grid grid-cols-3 gap-8 max-w-lg mx-auto">
            {[
              { value: "40+", label: "automations" },
              { value: "Claude AI", label: "Vibe Coding · Agents" },
              { value: "100%", label: "custom-built" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-2xl font-bold text-gray-900">{s.value}</div>
                <div className="text-xs text-gray-400 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <LogoBar />

      {/* ABOUT */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold text-[#e8632a] uppercase tracking-widest mb-3">Who we are</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 max-w-2xl mx-auto leading-snug">
              SMBs deserve AI systems that run by themselves. We build them.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-gray-500 leading-relaxed mb-4">
                <strong className="text-gray-700">Benjamin Bertigny</strong> founded NBN IA with a team of developers specialized in Artificial Intelligence. Trained at Alegria Academy and certified Anthropic Architecture, Benjamin leads this collective based in Bordeaux. We design custom autonomous AI systems for SMBs — architectures that operate without human intervention, 24/7.
              </p>
              <p className="text-gray-500 leading-relaxed mb-4">
                Vibe coding with Claude Code, AI agent orchestration, complex API integrations — we build systems that look nothing like a dev agency or a nocode agency. Something new.
              </p>
              <p className="text-gray-500 leading-relaxed">
                Our conviction: AI should work for you, not the other way around. We don&apos;t deliver workflows. We deliver a system that runs, adapts, and that we maintain over time.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              {[
                "Custom autonomous AI systems — never a generic template",
                "Stack centered on Claude Code and the most advanced AI agents on the market",
                "Transparent model: one-time setup + evolving monthly subscription",
                "Bordeaux, Royan, Arcachon and 100% remote",
              ].map((v, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-xl border border-gray-100 bg-gray-50">
                  <CheckCircle2 size={16} className="text-[#e8632a] flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-600 leading-relaxed">{v}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-12 p-6 rounded-2xl bg-[#fff5f0] border border-[#e8632a]/20">
            <p className="text-xs font-semibold text-[#e8632a] uppercase tracking-widest mb-3">Why Claude and not ChatGPT?</p>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { title: "Long reasoning", desc: "Claude analyzes complex documents and makes decisions across 200,000-token contexts." },
                { title: "Autonomous agents", desc: "Built to act, not just respond. Claude executes multi-step workflows without getting lost." },
                { title: "Business reliability", desc: "Fewer hallucinations on critical data. The go-to for use cases where errors are costly." },
              ].map((item) => (
                <div key={item.title}>
                  <p className="text-sm font-semibold text-gray-900 mb-1">{item.title}</p>
                  <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section id="solutions" className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold text-[#e8632a] uppercase tracking-widest mb-3">What we build</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 max-w-xl mx-auto leading-snug">
              Four systems, one architect.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              {
                icon: Bot,
                title: "AI Agents & Autonomous Systems",
                description: "Custom Claude agents, multi-agent orchestration, intelligent pipelines. Systems that perceive, decide and act without you.",
                tags: ["Claude API", "n8n", "Make", "AI Orchestration"],
                color: "#e8632a", bg: "#fff5f0",
              },
              {
                icon: Globe,
                title: "Vibe Coding & Web Apps",
                description: "Web applications generated via vibe coding with Claude Code, deployed on Vercel. Client portals, AI dashboards, connected apps in hours.",
                tags: ["Claude Code", "Vercel", "Next.js", "Vibe Coding"],
                color: "#0ea5e9", bg: "#f0f9ff",
              },
              {
                icon: Code2,
                title: "Integrations & AI Infrastructure",
                description: "APIs, databases, webhooks, custom CRMs. The infrastructure your AI agents rely on to operate autonomously.",
                tags: ["Supabase", "REST API", "Airtable", "Stripe"],
                color: "#8b5cf6", bg: "#f5f3ff",
              },
              {
                icon: Sparkles,
                title: "Generative AI & Content",
                description: "AI content pipelines, automatic multi-channel repurposing, SEO optimization. Your digital presence running on its own.",
                tags: ["Generative AI", "SEO", "Claude", "Analytics"],
                color: "#10b981", bg: "#f0fdf4",
              },
            ].map((s) => (
              <div key={s.title} className="p-7 rounded-2xl border border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm transition-all duration-200">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5" style={{ backgroundColor: s.bg }}>
                  <s.icon size={20} style={{ color: s.color }} />
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-5">{s.description}</p>
                <div className="flex flex-wrap gap-2">
                  {s.tags.map((tag) => (
                    <span key={tag} className="text-xs text-gray-500 bg-gray-100 rounded-full px-3 py-1 font-medium">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLAUDE */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="rounded-2xl bg-gradient-to-br from-[#fff5f0] to-white border border-[#e8632a]/15 p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <p className="text-xs font-semibold text-[#e8632a] uppercase tracking-widest mb-3">The model makes the difference</p>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug mb-4">
                  Why we work exclusively with Claude.
                </h2>
                <p className="text-gray-500 leading-relaxed mb-6">
                  ChatGPT answers. Claude <em>acts</em>. To build AI systems that make real business decisions — qualify a lead, analyze a contract, orchestrate 10 tools — Claude (Anthropic) is in a different league.
                </p>
                <p className="text-xs text-gray-400">
                  No French agency specializes in Claude. That&apos;s your competitive advantage — and ours.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { stat: "200K", label: "context tokens", desc: "Reads an entire contract, a database, a full client history." },
                  { stat: "↗ 3×", label: "more reliable", desc: "Fewer hallucinations on structured data vs other LLMs." },
                  { stat: "MCP", label: "native", desc: "Most advanced AI agent protocol. Tools, memory, orchestration." },
                  { stat: "24/7", label: "autonomous", desc: "Built to act without human supervision in critical workflows." },
                ].map((item) => (
                  <div key={item.stat} className="p-4 bg-white rounded-xl border border-gray-100">
                    <div className="text-xl font-bold text-[#e8632a] mb-0.5">{item.stat}</div>
                    <div className="text-xs font-semibold text-gray-700 mb-1">{item.label}</div>
                    <div className="text-xs text-gray-400 leading-relaxed">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold text-[#e8632a] uppercase tracking-widest mb-3">Use cases</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 max-w-xl mx-auto leading-snug">What we&apos;ve already built.</h2>
            <p className="mt-4 text-gray-500 max-w-md mx-auto">Real systems, deployed for clients, with measurable results.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { emoji: "🤖", title: "AI Sales Agent", desc: "Conversational AI clone that responds to leads 24/7, qualifies them and automatically books meetings.", impact: "-80% sales time" },
              { emoji: "📦", title: "Automated Customs Processing", desc: "AI extraction and processing of customs documents, real-time sync with ERP.", impact: "3h saved per day" },
              { emoji: "💰", title: "AI-driven Cash Flow", desc: "Financial dashboard connected to banks, automatic cash forecasts, proactive alerts.", impact: "Decisions in 1 click" },
              { emoji: "🏨", title: "Automated Hotel Check-in", desc: "Full welcome workflow: emails, access codes, personalized guides generated by AI.", impact: "0 manual intervention" },
              { emoji: "🛒", title: "E-commerce Cart Recovery", desc: "Intelligent follow-up sequence with AI personalization based on purchase behavior.", impact: "+22% conversion" },
              { emoji: "📱", title: "Social Content Recycling", desc: "Make → Claude pipeline: one blog post becomes 10 LinkedIn, Threads, Instagram posts in 1 click.", impact: "×10 on production" },
            ].map((c) => (
              <div key={c.title} className="p-6 rounded-2xl border border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm transition-all duration-200 flex flex-col">
                <span className="text-3xl mb-4 block">{c.emoji}</span>
                <h3 className="text-sm font-bold text-gray-900 mb-2">{c.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed flex-1 mb-5">{c.desc}</p>
                <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#e8632a] bg-orange-50 border border-orange-100 rounded-full px-3 py-1.5 self-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#e8632a] inline-block" />
                  {c.impact}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold text-[#e8632a] uppercase tracking-widest mb-3">Testimonials</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 max-w-xl mx-auto leading-snug">What our clients say.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { quote: "NBN set up an AI agent that responds to our prospects in under 30 seconds. We tripled our qualified meetings in 2 months.", name: "Sophie M.", role: "Director, real estate agency — Bordeaux", initials: "SM", color: "#e8632a" },
              { quote: "The customs processing workflow they built saves us 3 hours a day. The team is responsive, the system never crashes.", name: "Thomas L.", role: "Logistics manager, export SMB", initials: "TL", color: "#0ea5e9" },
              { quote: "I subscribed to Full Stack Partner. In 3 months, my system evolved 4 times without me touching anything. Exactly what I wanted.", name: "Camille R.", role: "Founder, lifestyle e-commerce", initials: "CR", color: "#8b5cf6" },
            ].map((t) => (
              <div key={t.name} className="p-7 rounded-2xl border border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm transition-all duration-200 flex flex-col">
                <div className="flex gap-0.5 mb-5">
                  {[...Array(5)].map((_, i) => <span key={i} className="text-[#e8632a] text-base">★</span>)}
                </div>
                <p className="text-sm text-gray-600 leading-relaxed flex-1 mb-7 italic">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-3 pt-5 border-t border-gray-100">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0" style={{ backgroundColor: t.color }}>{t.initials}</div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">{t.name}</p>
                    <p className="text-xs text-gray-400">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-gray-900 rounded-3xl px-8 py-16 md:px-16 text-center">
            <p className="text-xs font-semibold text-[#e8632a] uppercase tracking-widest mb-4">Ready to start?</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-5">
              1 hour to design your first<br />autonomous AI system.
            </h2>
            <p className="text-gray-400 mb-10 max-w-md mx-auto leading-relaxed">
              The audit is free, no commitment. You leave with a concrete architecture — whether we work together or not.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://calendly.com/ben40nocode/1h"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 bg-[#e8632a] hover:bg-[#c4521f] text-white px-8 py-4 rounded-xl font-bold text-sm transition-all duration-200"
              >
                <Calendar size={17} />
                Book a free audit
                <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 border border-gray-700 hover:border-gray-500 text-gray-300 hover:text-white px-8 py-4 rounded-xl font-semibold text-sm transition-all duration-200"
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
