export const revalidate = 3600;

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllArticlesEN, getArticleENBySlug } from "@/lib/blog-en";
import { ArrowLeft, ArrowRight, Clock, Calendar, User } from "lucide-react";

export async function generateStaticParams() {
  const articles = await getAllArticlesEN();
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleENBySlug(slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.description,
    keywords: article.keywords,
    authors: [{ name: article.author }],
    alternates: {
      canonical: `https://www.nbn-ia.fr/en/blog/${slug}`,
      languages: {
        'fr-FR': `https://www.nbn-ia.fr/blog/${slug}`,
        'en': `https://www.nbn-ia.fr/en/blog/${slug}`,
        'x-default': `https://www.nbn-ia.fr/blog/${slug}`,
      },
    },
    openGraph: {
      title: article.title,
      description: article.description,
      url: `https://www.nbn-ia.fr/en/blog/${article.slug}`,
      type: "article",
      publishedTime: article.date,
      authors: [article.author],
    },
  };
}

export default async function ArticleENPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = await getArticleENBySlug(slug);
  if (!article) notFound();

  const allArticles = await getAllArticlesEN();
  const related = allArticles.filter((a) => a.slug !== slug && a.category === article.category).slice(0, 2);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.date,
    dateModified: article.date,
    author: {
      "@type": "Person",
      name: article.author,
      url: "https://www.nbn-ia.fr",
    },
    publisher: {
      "@type": "Organization",
      name: "NBN IA",
      url: "https://www.nbn-ia.fr",
      logo: { "@type": "ImageObject", url: "https://www.nbn-ia.fr/icon.svg" },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": `https://www.nbn-ia.fr/en/blog/${article.slug}` },
    keywords: article.keywords.join(", "),
    image: {
      "@type": "ImageObject",
      url: "https://www.nbn-ia.fr/og-image.png",
      width: 1200,
      height: 630,
    },
    inLanguage: "en",
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.nbn-ia.fr/en" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.nbn-ia.fr/en/blog" },
      { "@type": "ListItem", position: 3, name: article.title, item: `https://www.nbn-ia.fr/en/blog/${article.slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <div className="min-h-screen bg-white pt-24 pb-32">
        <div className="max-w-3xl mx-auto px-6">

          {/* Back */}
          <Link href="/en/blog" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-gray-700 transition-colors mb-10">
            <ArrowLeft size={15} /> Back to blog
          </Link>

          {/* Header */}
          <div className="mb-10">
            <span className="inline-block text-xs font-semibold text-[#e8632a] bg-orange-50 border border-orange-100 px-3 py-1 rounded-full mb-5">
              {article.category}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug mb-5">
              {article.title}
            </h1>
            <div className="flex flex-wrap items-center gap-5 text-xs text-gray-400 pb-8 border-b border-gray-100">
              <span className="flex items-center gap-1.5"><User size={12} /> Written by {article.author}</span>
              <span className="flex items-center gap-1.5">
                <Calendar size={12} />
                {new Date(article.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
              </span>
              <span className="flex items-center gap-1.5"><Clock size={12} /> {article.readingTime} read</span>
            </div>
          </div>

          {/* Content */}
          <div
            className="prose prose-gray max-w-none
              prose-headings:font-bold prose-headings:text-gray-900
              prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
              prose-h3:text-lg prose-h3:mt-6 prose-h3:mb-3
              prose-p:text-gray-600 prose-p:leading-relaxed prose-p:mb-5
              prose-ul:my-4 prose-li:text-gray-600 prose-li:mb-2
              prose-strong:text-gray-900 prose-strong:font-semibold
              prose-a:text-[#e8632a] prose-a:no-underline hover:prose-a:underline"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* CTA */}
          <div className="mt-16 bg-gray-900 rounded-2xl p-8 text-center">
            <p className="text-white font-bold text-lg mb-2">Ready to automate your business?</p>
            <p className="text-gray-400 text-sm mb-6">Free 1-hour audit — we identify your 3 most valuable automation opportunities together.</p>
            <Link
              href="https://calendly.com/ben40nocode/1h"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#e8632a] hover:bg-[#c4521f] text-white px-6 py-3 rounded-xl text-sm font-semibold transition-colors"
            >
              Book free audit <ArrowRight size={14} />
            </Link>
          </div>

          {/* Related articles */}
          {related.length > 0 && (
            <div className="mt-16">
              <h2 className="text-lg font-bold text-gray-900 mb-6">Related articles</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {related.map((a) => (
                  <Link key={a.slug} href={`/en/blog/${a.slug}`} className="group block p-5 rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all">
                    <p className="text-xs text-gray-400 mb-2 flex items-center gap-1"><Clock size={11} /> {a.readingTime}</p>
                    <h3 className="text-sm font-bold text-gray-900 group-hover:text-[#e8632a] transition-colors leading-snug">{a.title}</h3>
                  </Link>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </>
  );
}
