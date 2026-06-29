import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar, Bot, Globe, Plug, MessageSquare, CheckCircle2 } from "lucide-react";
import { LogoBar } from "@/components/home/LogoBar";

export const metadata: Metadata = {
  title: "AI Automation for SMBs & Craftsmen in France | NBN IA",
  description: "We automate client replies, quotes, reminders and follow-ups for French SMBs. Operational in 2 weeks. Based in Bordeaux, serving all of France. Free audit.",
  alternates: { canonical: "https://www.nbn-ia.fr/en" },
  openGraph: {
    title: "NBN IA — AI Automation for SMBs & Craftsmen | France",
    description: "We handle the repetitive tasks so you can focus on your work. Client replies, quotes, reminders — automated and running in 2 weeks.",
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
              AI Automation for SMBs & Craftsmen
            </div>
            <div className="inline-flex items-center gap-2 bg-[#fff5f0] border border-[#e8632a]/20 text-[#d97757] rounded-full px-3 py-1 text-xs font-medium">
              <span>⬡</span> Bordeaux · Royan · Arcachon
            </div>
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900 leading-tight tracking-tight mb-6">
            Your business runs.{" "}
            <span className="text-[#e8632a]">Even while you sleep.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
            We handle the repetitive tasks in your business.
            Client replies, quotes, reminders, follow-ups — automated and operational in 2 weeks.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="https://calendly.com/ben40nocode/1h" target="_blank" rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 bg-[#e8632a] hover:bg-[#c4521f] text-white px-7 py-4 rounded-xl font-semibold text-base transition-all duration-200 shadow-lg shadow-orange-200">
              Book a free audit
              <ArrowRight size={17} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link href="/en#work"
              className="inline-flex items-center gap-2 border border-gray-200 hover:border-gray-300 text-gray-700 hover:text-gray-900 px-7 py-4 rounded-xl font-semibold text-base transition-all duration-200 hover:bg-gray-50">
              See real examples
            </Link>
          </div>
          <div className="mt-16 pt-10 border-t border-gray-100 grid grid-cols-3 gap-8 max-w-lg mx-auto">
            {[
              { value: "Certified", label: "Anthropic & Alegria" },
              { value: "2 to 20h", label: "saved per week" },
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
              SMBs and craftsmen deserve tools that work for them. We build them.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-gray-500 leading-relaxed mb-4">
                <strong className="text-gray-700">Benjamin Bertigny</strong> founded NBN IA with a team of developers specialized in Artificial Intelligence. Trained at Alegria Academy and certified Anthropic Architecture, Benjamin leads this collective based in Bordeaux.
              </p>
              <p className="text-gray-500 leading-relaxed mb-4">
                Our approach is simple: we listen to your business, identify what takes your time, and build a system that handles it for you — 24/7. No jargon, no training required on your end.
              </p>
              <p className="text-gray-500 leading-relaxed">
                Our conviction: technology should work for you, not the other way around. We don&apos;t deliver a tool. We deliver a result — and we maintain it over time.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              {[
                "Custom-built systems — never a generic template",
                "Technology adapted to your trade, not the other way around",
                "Transparent model: one-time setup + monthly subscription",
                "Bordeaux, Royan, Arcachon and 100% remote across France",
              ].map((v, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-xl border border-gray-100 bg-gray-50">
                  <CheckCircle2 size={16} className="text-[#e8632a] flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-600 leading-relaxed">{v}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-12 p-6 rounded-2xl bg-[#fff5f0] border border-[#e8632a]/20">
            <p className="text-xs font-semibold text-[#e8632a] uppercase tracking-widest mb-3">How does it work?</p>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { title: "1. Free audit (1h)", desc: "We analyse your activity together and identify the 2–3 tasks that cost you the most time." },
                { title: "2. We build (1–4 weeks)", desc: "Our developers set up your system. You validate at each step. No surprises." },
                { title: "3. It runs by itself", desc: "Your system is live. We maintain and improve it every month as needed." },
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
            <p className="text-xs font-semibold text-[#e8632a] uppercase tracking-widest mb-3">What we do for you</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 max-w-xl mx-auto leading-snug">
              Four ways to save time.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              {
                icon: Bot,
                title: "Custom automations",
                description: "We identify the tasks that take your time — email replies, quotes, follow-ups, reminders — and automate them. Your business runs without you lifting a finger.",
                tags: ["Auto client replies", "Automated quotes", "Follow-ups", "Appointment reminders"],
                color: "#e8632a", bg: "#fff5f0",
              },
              {
                icon: Globe,
                title: "Websites & Applications",
                description: "We create modern, fast, Google-optimized websites. And if you need a custom tool (client portal, dashboard, booking system), we build that too.",
                tags: ["Business website", "E-commerce", "Custom app", "Online booking"],
                color: "#0ea5e9", bg: "#f0f9ff",
              },
              {
                icon: Plug,
                title: "Connecting your tools",
                description: "Your calendar, CRM, invoicing software, emails — we make them talk to each other. No more double entry, no more information scattered everywhere.",
                tags: ["Google Calendar", "CRM", "Invoicing", "Forms"],
                color: "#8b5cf6", bg: "#f5f3ff",
              },
              {
                icon: MessageSquare,
                title: "Automatic client assistant",
                description: "An assistant available 24/7 that answers your clients' questions, qualifies requests, and only transfers to you what needs your attention.",
                tags: ["Instant reply", "Lead qualification", "Appointment booking", "24/7"],
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

      {/* WHY IT WORKS */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="rounded-2xl bg-gradient-to-br from-[#fff5f0] to-white border border-[#e8632a]/15 p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <p className="text-xs font-semibold text-[#e8632a] uppercase tracking-widest mb-3">Why it works</p>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug mb-4">
                  Reliable technology. Results you can see.
                </h2>
                <p className="text-gray-500 leading-relaxed mb-6">
                  We use the most advanced AI tools on the market — the same ones used by large companies. But we configure them for your trade, your way of working, your clients. Not a generic system. Yours.
                </p>
                <p className="text-xs text-gray-400">
                  Certified Anthropic Architecture. Trained at Alegria Academy. We know what we&apos;re doing — you don&apos;t need to.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { stat: "48h", label: "for a first system", desc: "A client assistant or follow-up system can be running in 2 days." },
                  { stat: "24/7", label: "it runs by itself", desc: "Nights, weekends, bank holidays — your system never stops." },
                  { stat: "0", label: "technical skills needed", desc: "You don't need to understand how it works. You see the results." },
                  { stat: "ROI", label: "from month one", desc: "Time saved usually exceeds the cost of the system within the first weeks." },
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

      {/* REAL EXAMPLES */}
      <section id="work" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold text-[#e8632a] uppercase tracking-widest mb-3">Real examples</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 max-w-xl mx-auto leading-snug">What we&apos;ve already set up.</h2>
            <p className="mt-4 text-gray-500 max-w-md mx-auto">Real systems deployed for SMBs and craftsmen, with measurable results.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { emoji: "🔧", title: "Plumber — automated quotes", desc: "The client sends a WhatsApp or email. Our system replies, asks the right questions, generates a quote and follows up if no answer. The craftsman signs — without picking up the phone.", impact: "3h saved per day" },
              { emoji: "🍽️", title: "Restaurant — bookings & reminders", desc: "Automatic booking 24/7, SMS confirmation, day-before reminder, no-show management. The owner focuses on the kitchen, not the phone.", impact: "-40% no-shows" },
              { emoji: "🏠", title: "Real estate agency — qualified leads", desc: "Every enquiry gets a reply in under 2 minutes, 7 days a week. The agent only receives genuinely interested prospects, with all info pre-filled.", impact: "×3 signed mandates" },
              { emoji: "🏨", title: "Hotel — frictionless check-in", desc: "Full automated welcome workflow: welcome email, access code, personalised local guide, review request on departure. Zero staff intervention per stay.", impact: "0 manual intervention" },
              { emoji: "🍷", title: "Wine estate — sales & tourism", desc: "Automatic replies to visit requests and online orders, follow-up after tastings, seasonal newsletter. The winemaker focuses on the vines — the system handles the rest.", impact: "+30% direct sales" },
              { emoji: "🛒", title: "Online shop — cart recovery & reviews", desc: "Automatic sequence after abandoned cart, review request after delivery, newsletter based on purchase history. The owner sleeps — the system works.", impact: "+22% conversion" },
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
              { quote: "NBN set up an AI assistant that replies to our prospects in under 30 seconds. We tripled our qualified meetings in 2 months.", name: "Sophie M.", role: "Director, real estate agency — Bordeaux", initials: "SM", color: "#e8632a" },
              { quote: "The automated workflow they built saves us 3 hours a day. The team is responsive, the system never crashes.", name: "Thomas L.", role: "Logistics manager, SMB", initials: "TL", color: "#0ea5e9" },
              { quote: "In 3 months, our system evolved 4 times without us touching anything. Exactly what we wanted.", name: "Camille R.", role: "Founder, e-commerce", initials: "CR", color: "#8b5cf6" },
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
              1 hour to identify what we can<br />automate in your business.
            </h2>
            <p className="text-gray-400 mb-10 max-w-md mx-auto leading-relaxed">
              The audit is free, no commitment. You leave with a concrete list of what can be automated — whether you work with us or not.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="https://calendly.com/ben40nocode/1h" target="_blank" rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 bg-[#e8632a] hover:bg-[#c4521f] text-white px-8 py-4 rounded-xl font-bold text-sm transition-all duration-200">
                <Calendar size={17} />
                Book free audit
                <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link href="/contact"
                className="inline-flex items-center justify-center gap-2 border border-gray-700 hover:border-gray-500 text-gray-300 hover:text-white px-8 py-4 rounded-xl font-semibold text-sm transition-all duration-200">
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
