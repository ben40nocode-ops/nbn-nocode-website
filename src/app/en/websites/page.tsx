import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Globe, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Website Creation in France — AI-Powered & SEO Ready",
  description: "Modern, fast, SEO-optimized websites built in France. Next.js or Webflow. AI integrations available. From €800. Based in Bordeaux. Free audit.",
  keywords: ["website creation France", "web design agency France", "SEO website Bordeaux", "Next.js website France", "modern website SMB France", "English web agency France", "website Bordeaux expat", "bilingual website France"],
  alternates: { canonical: "https://www.nbn-ia.fr/en/websites" },
  openGraph: { title: "Website Creation France — NBN IA", description: "Modern SEO-optimized websites for SMBs in France. From €800.", url: "https://www.nbn-ia.fr/en/websites" },
};

export default function WebsitesEnPage() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-100 text-[#e8632a] rounded-full px-4 py-1.5 text-xs font-semibold mb-8 tracking-wide uppercase">
          <Globe size={12} /> Websites — France
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
          Modern Websites for SMBs<br />
          <span className="text-[#e8632a]">in France — Fast, SEO & AI-Ready</span>
        </h1>
        <p className="text-lg text-gray-500 max-w-2xl mb-10 leading-relaxed">
          We create responsive, fast, and SEO-optimized websites for businesses in France. Built with Next.js or Webflow, designed to convert — and ready to connect to your AI systems.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mb-20">
          <Link href="https://calendly.com/ben40nocode/1h" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#e8632a] hover:bg-[#c4521f] text-white px-7 py-4 rounded-xl font-semibold transition-colors">
            Get a free quote <ArrowRight size={17} />
          </Link>
          <Link href="/en#work"
            className="inline-flex items-center gap-2 border border-gray-300 text-gray-700 px-7 py-4 rounded-xl font-semibold transition-colors">
            See our work <ArrowRight size={17} />
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {[
            { title: "Landing Page", price: "From €800", features: ["1–3 pages", "Responsive design", "Contact form", "Basic SEO", "Google Analytics"] },
            { title: "Professional Site", price: "From €1,800", features: ["5–10 pages", "CMS / Blog", "Advanced SEO", "Performance optimized", "Optional AI chatbot"] },
            { title: "E-commerce", price: "From €3,500", features: ["Product catalog", "Payment gateway", "Inventory management", "Customer accounts", "AI recommendations"] },
          ].map((tier) => (
            <div key={tier.title} className="p-6 border border-gray-200 rounded-2xl">
              <h3 className="font-bold text-gray-900 mb-1">{tier.title}</h3>
              <p className="text-[#e8632a] font-semibold text-sm mb-4">{tier.price}</p>
              <ul className="space-y-2">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                    <Check size={14} className="text-[#e8632a] flex-shrink-0 mt-0.5" />{f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="bg-gray-900 rounded-3xl p-12 text-center">
          <h2 className="text-white font-bold text-2xl mb-3">Need a website in France?</h2>
          <p className="text-gray-300 mb-8 max-w-md mx-auto">Free audit. We discuss your project, propose a design and timeline. No commitment.</p>
          <Link href="https://calendly.com/ben40nocode/1h" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#e8632a] hover:bg-[#c4521f] text-white px-8 py-4 rounded-xl font-semibold transition-colors">
            Book free audit <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
