import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";

export interface CaseStudy {
  secteur: string;
  probleme: string;
  solution: string;
  gain: string;
}

export interface FAQ {
  q: string;
  a: string;
}

export interface SectorPageProps {
  badge: string;
  title: string;
  titleAccent: string;
  intro: string;
  intro2: string;
  services: string[];
  whyItems: string[];
  whyTitle: string;
  steps: { step: string; title: string; desc: string }[];
  cases: CaseStudy[];
  casesTitle: string;
  faqs: FAQ[];
  faqsTitle: string;
  ctaTitle: string;
  ctaDesc: string;
  ctaButton: string;
  canonical: string;
  schemaName: string;
  schemaCity: string | string[];
  schemaDesc: string;
}

export function SectorPage({
  badge, title, titleAccent, intro, intro2,
  services, whyItems, whyTitle, steps,
  cases, casesTitle, faqs, faqsTitle,
  ctaTitle, ctaDesc, ctaButton,
  canonical, schemaName, schemaCity, schemaDesc,
}: SectorPageProps) {
  const areaServed = Array.isArray(schemaCity)
    ? schemaCity.map((c) => ({ "@type": "City", name: c }))
    : [{ "@type": "City", name: schemaCity }];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: schemaName,
        provider: { "@id": "https://www.nbn-ia.fr/#organization" },
        areaServed,
        description: schemaDesc,
        url: canonical,
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${canonical}#breadcrumb`,
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://www.nbn-ia.fr" },
          { "@type": "ListItem", "position": 2, "name": schemaName, "item": canonical },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: { "@type": "Answer", text: faq.a },
        })),
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="min-h-screen pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-6">

          <div className="inline-flex items-center gap-2 bg-[#FCE9DF] text-[#E64A12] rounded-full px-4 py-1.5 text-[11px] font-bold mb-8 tracking-[0.16em] uppercase">
            {badge}
          </div>

          <h1 className="text-4xl md:text-[3.4rem] font-extrabold text-[#0E1116] leading-[1.04] tracking-[-0.03em] mb-6">
            {title}<br />
            <span className="text-[#FF5A1F]">{titleAccent}</span>
          </h1>

          <p className="text-lg text-[#6B7280] max-w-2xl mb-4 leading-relaxed">{intro}</p>
          <p className="text-base text-[#6B7280] max-w-2xl mb-10 leading-relaxed">{intro2}</p>

          <div className="flex flex-col sm:flex-row gap-4 mb-20">
            <Link href="https://calendly.com/ben40nocode/1h" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#FF5A1F] hover:bg-[#E64A12] hover:-translate-y-0.5 text-white px-7 py-4 rounded-xl font-semibold text-base transition-all shadow-[0_10px_24px_rgba(255,90,31,.28)]">
              Réserver mon appel gratuit (30 min) <ArrowRight size={17} />
            </Link>
            <Link href="/tarifs" className="inline-flex items-center gap-2 border border-[#E2E0DA] hover:-translate-y-0.5 bg-white text-[#0E1116] px-7 py-4 rounded-xl font-semibold text-base transition-all">
              Voir les tarifs
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <div>
              <h2 className="text-2xl font-extrabold text-[#0E1116] tracking-[-0.02em] mb-4">Ce qu&apos;on automatise pour vous</h2>
              <ul className="space-y-3">
                {services.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-[#2E343D]">
                    <Check size={15} className="text-[#FF5A1F] flex-shrink-0 mt-0.5" />{item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white border border-[#E2E0DA] rounded-2xl p-7 shadow-[0_14px_34px_rgba(14,17,22,.06)]">
              <h2 className="text-lg font-extrabold text-[#0E1116] mb-3">{whyTitle}</h2>
              <ul className="space-y-3 text-sm text-[#2E343D]">
                {whyItems.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <Check size={15} className="text-[#FF5A1F] flex-shrink-0 mt-0.5" />{item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-2xl font-extrabold text-[#0E1116] tracking-[-0.02em] mb-8">Comment on travaille avec vous</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {steps.map(({ step, title: t, desc }) => (
                <div key={step} className="bg-white border border-[#E2E0DA] rounded-2xl p-6 shadow-[0_14px_34px_rgba(14,17,22,.06)]">
                  <div className="text-3xl font-black text-[#FF5A1F]/25 mb-3">{step}</div>
                  <h3 className="text-base font-bold text-[#0E1116] mb-2">{t}</h3>
                  <p className="text-sm text-[#6B7280] leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-2xl font-extrabold text-[#0E1116] tracking-[-0.02em] mb-2">{casesTitle}</h2>
            <p className="text-[#6B7280] text-sm mb-8">Exemples de systèmes que je peux concevoir pour ce secteur.</p>
            <div className="flex flex-col gap-6">
              {cases.map(({ secteur, probleme, solution, gain }) => (
                <div key={secteur} className="bg-white border border-[#E2E0DA] rounded-2xl p-7 shadow-[0_14px_34px_rgba(14,17,22,.06)]">
                  <div className="inline-flex items-center bg-[#FCE9DF] text-[#E64A12] text-xs font-bold px-3 py-1 rounded-full mb-4">{secteur}</div>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="font-semibold text-[#0E1116] mb-1">Problème</p>
                      <p className="text-[#6B7280]">{probleme}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-[#0E1116] mb-1">Solution</p>
                      <p className="text-[#6B7280]">{solution}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-[#0E1116] mb-1">Objectif</p>
                      <p className="text-[#FF5A1F] font-semibold">{gain}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-2xl font-extrabold text-[#0E1116] tracking-[-0.02em] mb-8">{faqsTitle}</h2>
            <div className="flex flex-col">
              {faqs.map(({ q, a }) => (
                <details key={q} className="faq-acc">
                  <summary>{q}</summary>
                  <div>{a}</div>
                </details>
              ))}
            </div>
          </div>

          <div className="bg-[#0E1116] rounded-[26px] p-10 text-center shadow-[0_40px_100px_rgba(14,17,22,.4)]">
            <h2 className="text-2xl font-extrabold text-white tracking-[-0.02em] mb-3">{ctaTitle}</h2>
            <p className="text-gray-400 mb-8 max-w-md mx-auto">{ctaDesc}</p>
            <Link href="https://calendly.com/ben40nocode/1h" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#FF5A1F] hover:bg-[#E64A12] hover:-translate-y-0.5 text-white px-8 py-4 rounded-xl font-bold text-sm transition-all shadow-[0_10px_24px_rgba(255,90,31,.28)]">
              {ctaButton} <ArrowRight size={15} />
            </Link>
          </div>

        </div>
      </div>
    </>
  );
}
