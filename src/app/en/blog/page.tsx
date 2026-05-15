export const revalidate = 3600;

import type { Metadata } from "next";
import Link from "next/link";
import { getAllArticlesEN } from "@/lib/blog-en";
import { ArrowRight, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog — AI Automation, Agents & Business",
  description: "Practical guides, tutorials and insights on AI automation, no-code agents, and digital transformation for SMBs. By Benjamin Bertigny, expert based in Bordeaux, France.",
  alternates: { canonical: "https://www.nbn-ia.fr/en/blog" },
  openGraph: {
    title: "NBN IA Blog — AI Automation & Agents",
    description: "Practical guides on AI automation and no-code agents for small businesses.",
    url: "https://www.nbn-ia.fr/en/blog",
  },
};

const categoryColors: Record<string, string> = {
  "Automation": "bg-orange-50 text-[#e8632a] border-orange-100",
  "AI Agents": "bg-purple-50 text-purple-600 border-purple-100",
  "No-Code": "bg-blue-50 text-blue-600 border-blue-100",
  "Business": "bg-green-50 text-green-600 border-green-100",
  "Web & Apps": "bg-sky-50 text-sky-600 border-sky-100",
  "Web Design / Branding": "bg-pink-50 text-pink-600 border-pink-100",
  "Tutorial": "bg-gray-100 text-gray-600 border-gray-200",
};

export default async function BlogENPage() {
  const articles = await getAllArticlesEN();
  const [featured, ...rest] = articles;

  return (
    <div className="min-h-screen bg-white pt-24 pb-32">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs text-[#e8632a] uppercase tracking-widest mb-4 font-semibold">Blog</p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-5">
            AI Automation, Agents & Business
          </h1>
          <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
            Practical guides, real-world insights and concrete strategies to automate your business without hiring.
          </p>
        </div>

        {/* Featured article */}
        {featured && (
          <Link href={`/en/blog/${featured.slug}`} className="group block mb-14">
            <div className="rounded-2xl border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-200 overflow-hidden bg-white">
              <div className="p-8 md:p-10">
                <div className="flex items-center gap-3 mb-5">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${categoryColors[featured.category] ?? "bg-gray-100 text-gray-500 border-gray-200"}`}>
                    {featured.category}
                  </span>
                  <span className="text-xs text-gray-400 flex items-center gap-1.5">
                    <Clock size={12} /> {featured.readingTime} read
                  </span>
                  <span className="text-xs text-gray-400">{new Date(featured.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 group-hover:text-[#e8632a] transition-colors leading-snug">
                  {featured.title}
                </h2>
                <p className="text-gray-500 leading-relaxed mb-5 max-w-3xl">{featured.description}</p>
                <div className="flex items-center gap-2 text-[#e8632a] text-sm font-semibold">
                  Read article <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </Link>
        )}

        {/* Articles grid */}
        <div className="grid md:grid-cols-2 gap-5">
          {rest.map((article) => (
            <Link key={article.slug} href={`/en/blog/${article.slug}`} className="group block">
              <div className="h-full rounded-2xl border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all duration-200 p-7 bg-white flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${categoryColors[article.category] ?? "bg-gray-100 text-gray-500 border-gray-200"}`}>
                    {article.category}
                  </span>
                  <span className="text-xs text-gray-400 flex items-center gap-1.5">
                    <Clock size={12} /> {article.readingTime}
                  </span>
                </div>
                <h2 className="text-base font-bold text-gray-900 mb-2 group-hover:text-[#e8632a] transition-colors leading-snug flex-1">
                  {article.title}
                </h2>
                <p className="text-sm text-gray-500 leading-relaxed mb-5 line-clamp-2">{article.description}</p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-xs text-gray-400">{new Date(article.date).toLocaleDateString("en-GB", { day: "numeric", month: "long" })}</span>
                  <span className="text-xs font-semibold text-[#e8632a] flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read <ArrowRight size={12} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center bg-gray-50 rounded-2xl p-10 border border-gray-100">
          <p className="text-gray-900 font-bold text-lg mb-2">Ready to automate your business?</p>
          <p className="text-gray-500 text-sm mb-6">Free 1-hour audit — we map out exactly what we can automate together.</p>
          <Link
            href="https://calendly.com/ben40nocode/1h"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#e8632a] hover:bg-[#c4521f] text-white px-6 py-3 rounded-xl text-sm font-semibold transition-colors"
          >
            Book your free audit <ArrowRight size={14} />
          </Link>
        </div>

      </div>
    </div>
  );
}
