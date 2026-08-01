import type { Metadata } from "next";
import Link from "next/link";
import { Bot, Globe, Plug, MessageSquare, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Solutions — Automation, websites & AI assistants",
  description: "Four ways to save time: custom automations, websites & applications, connecting your tools, an automatic 24/7 client assistant. Free 30 min audit.",
  alternates: {
    canonical: "https://www.nbn-ia.fr/en/solutions",
    languages: {
      fr: "https://www.nbn-ia.fr/solutions",
      en: "https://www.nbn-ia.fr/en/solutions",
      "x-default": "https://www.nbn-ia.fr/solutions",
    },
  },
};

const solutions = [
  {
    icon: Bot,
    title: "Custom automations",
    description: "We identify the tasks that take your time — email replies, quotes, follow-ups, reminders — and automate them. Your business runs without you lifting a finger.",
    tags: ["Auto client replies", "Automated quotes", "Follow-ups", "Appointment reminders"],
    color: "#FF5A1F", bg: "#fff5f0", href: "/services/automatisation-ia",
  },
  {
    icon: Globe,
    title: "Websites & Applications",
    description: "We create modern, fast, Google-optimized websites. And if you need a custom tool (client portal, dashboard, booking system), we build that too.",
    tags: ["Business website", "E-commerce", "Custom app", "Online booking"],
    color: "#0ea5e9", bg: "#f0f9ff", href: "/services/sites-internet",
  },
  {
    icon: Plug,
    title: "Connecting your tools",
    description: "Your calendar, CRM, invoicing software, emails — we make them talk to each other. No more double entry, no more information scattered everywhere.",
    tags: ["Google Calendar", "CRM", "Invoicing", "Forms"],
    color: "#8b5cf6", bg: "#f5f3ff", href: "/services/automatisation-ia",
  },
  {
    icon: MessageSquare,
    title: "Automatic client assistant",
    description: "An assistant available 24/7 that answers your clients' questions, qualifies requests, and only transfers to you what needs your attention.",
    tags: ["Instant reply", "Lead qualification", "Appointment booking", "24/7"],
    color: "#10b981", bg: "#f0fdf4", href: "/chatbot-ia-bordeaux",
  },
];

export default function SolutionsEnPage() {
  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="max-w-5xl mx-auto px-6">

        <div className="inline-flex items-center gap-2 bg-[#FCE9DF] text-[#E64A12] rounded-full px-4 py-1.5 text-[11px] font-bold mb-8 tracking-[0.16em] uppercase">
          Solutions
        </div>
        <h1 className="text-4xl md:text-[3.4rem] font-extrabold text-[#0E1116] tracking-[-0.03em] mb-6 leading-[1.04]">
          Four ways<br /><span className="text-[#FF5A1F]">to save time.</span>
        </h1>
        <p className="text-lg text-[#6B7280] max-w-2xl mb-16 leading-relaxed">
          Automations, software, websites, assistants. We always start from the concrete: the task that costs you the most time each week.
        </p>

        <div className="grid sm:grid-cols-2 gap-5">
          {solutions.map((s) => (
            <div key={s.title} className="p-7 rounded-2xl border border-[#E2E0DA] bg-white shadow-[0_14px_34px_rgba(14,17,22,.06)] hover:shadow-[0_20px_44px_rgba(14,17,22,.10)] transition-all flex flex-col">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5" style={{ backgroundColor: s.bg }}>
                <s.icon size={20} style={{ color: s.color }} />
              </div>
              <h3 className="text-base font-bold text-[#0E1116] mb-2">{s.title}</h3>
              <p className="text-sm text-[#6B7280] leading-relaxed mb-5">{s.description}</p>
              <div className="flex flex-wrap gap-2 mb-5">
                {s.tags.map((tag) => (
                  <span key={tag} className="text-xs text-[#2E343D] bg-[#F5F4F1] border border-[#E2E0DA] rounded-full px-3 py-1 font-medium">{tag}</span>
                ))}
              </div>
              <div className="mt-auto">
                <Link href={s.href} className="inline-flex items-center gap-1.5 text-xs font-semibold transition-colors group" style={{ color: s.color }}>
                  Learn more <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-[#0E1116] rounded-[26px] p-10 text-center shadow-[0_40px_100px_rgba(14,17,22,.4)]">
          <h2 className="text-2xl font-extrabold text-white tracking-[-0.02em] mb-3">Where do we start?</h2>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">A 30-minute chat. We spot the first system that saves you time.</p>
          <Link href="https://calendly.com/ben40nocode/1h" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#FF5A1F] hover:bg-[#E64A12] hover:-translate-y-0.5 text-white px-8 py-4 rounded-xl font-bold text-sm transition-all shadow-[0_10px_24px_rgba(255,90,31,.28)]">
            Book my free call (30 min) <ArrowRight size={15} />
          </Link>
        </div>

      </div>
    </div>
  );
}
