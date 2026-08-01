import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Work — Systems already in production",
  description: "Real automations built and running today: on-call routing, accounting allocation, leave & schedules, client SMS, invoice filing, a 24/7 internal assistant.",
  alternates: {
    canonical: "https://www.nbn-ia.fr/en/work",
    languages: {
      fr: "https://www.nbn-ia.fr/realisations",
      en: "https://www.nbn-ia.fr/en/work",
      "x-default": "https://www.nbn-ia.fr/realisations",
    },
  },
};

const cases = [
  { emoji: "📟", title: "On-call — automatic call routing", desc: "On-call schedule on a single page and automatic call forwarding to the right person, day and night. No more shared spreadsheet or numbers to juggle.", impact: "Replaces Power Apps" },
  { emoji: "🧾", title: "Accounting — automatic allocation", desc: "I drop in a PDF invoice: the AI reads it, allocates it and prepares the accounting in one click. What used to run through a fragile chain of tools happens in one go.", impact: "Replaces 3 Zapier + a homemade script" },
  { emoji: "🗓️", title: "Leave & schedules, conflict-free", desc: "Leave requests, approval and automatic detection of clashes with the on-call rota. Impossible to be on leave AND on call the same day.", impact: "Zero double entry" },
  { emoji: "💬", title: "Automatic client SMS", desc: "A message goes out on its own at the right moment before the client arrives, adapted to the season. No copy-paste, no oversight.", impact: "Replaces Power Apps + Excel + Zapier" },
  { emoji: "🗂️", title: "Invoices filed automatically", desc: "Every invoice filed in the right place, an exact mirror of the accounting folder. No more manual sorting at month-end.", impact: "Always up to date, 0 manual" },
  { emoji: "🤖", title: "Internal assistant 24/7", desc: "A chatbot that answers the team's questions — procedures, how the tools work — at any hour. Fewer interruptions, more autonomy.", impact: "Available 24/7" },
];

export default function WorkEnPage() {
  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="max-w-5xl mx-auto px-6">

        <div className="inline-flex items-center gap-2 bg-[#FCE9DF] text-[#E64A12] rounded-full px-4 py-1.5 text-[11px] font-bold mb-8 tracking-[0.16em] uppercase">
          Work
        </div>
        <h1 className="text-4xl md:text-[3.4rem] font-extrabold text-[#0E1116] tracking-[-0.03em] mb-6 leading-[1.04]">
          Systems already<br /><span className="text-[#FF5A1F]">in production.</span>
        </h1>
        <p className="text-lg text-[#6B7280] max-w-2xl mb-16 leading-relaxed">
          Real automations I&apos;ve built that are running today — transposable to your trade.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {cases.map((c) => (
            <div key={c.title} className="p-6 rounded-2xl border border-[#E2E0DA] bg-white shadow-[0_14px_34px_rgba(14,17,22,.06)] hover:shadow-[0_20px_44px_rgba(14,17,22,.10)] transition-all flex flex-col">
              <span className="text-3xl mb-4 block">{c.emoji}</span>
              <h3 className="text-sm font-bold text-[#0E1116] mb-2">{c.title}</h3>
              <p className="text-sm text-[#6B7280] leading-relaxed flex-1 mb-5">{c.desc}</p>
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#E64A12] bg-[#FCE9DF] rounded-full px-3 py-1.5 self-start">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF5A1F] inline-block" />
                {c.impact}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-[#0E1116] rounded-[26px] p-10 text-center shadow-[0_40px_100px_rgba(14,17,22,.4)]">
          <h2 className="text-2xl font-extrabold text-white tracking-[-0.02em] mb-3">A system like this for you?</h2>
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
