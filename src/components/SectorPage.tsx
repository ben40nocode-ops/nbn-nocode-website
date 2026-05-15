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
        provider: { "@type": "Organization", name: "NBN IA", url: "https://www.nbn-ia.fr" },
        areaServed,
        description: schemaDesc,
        url: canonical,
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
      <div className="min-h-screen bg-white pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-6">

          <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-100 text-[#e8632a] rounded-full px-4 py-1.5 text-xs font-semibold mb-8 tracking-wide uppercase">
            {badge}
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            {title}<br />
            <span className="text-[#e8632a]">{titleAccent}</span>
          </h1>

          <p className="text-lg text-gray-500 max-w-2xl mb-4 leading-relaxed">{intro}</p>
          <p className="text-base text-gray-500 max-w-2xl mb-10 leading-relaxed">{intro2}</p>

          <div className="flex flex-col sm:flex-row gap-4 mb-20">
            <Link href="https://calendly.com/ben40nocode/1h" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#e8632a] hover:bg-[#c4521f] text-white px-7 py-4 rounded-xl font-semibold text-base transition-colors">
              Audit gratuit <ArrowRight size={17} />
            </Link>
            <Link href="/tarifs" className="inline-flex items-center gap-2 border border-gray-200 hover:border-gray-300 text-gray-700 px-7 py-4 rounded-xl font-semibold text-base transition-colors hover:bg-gray-50">
              Voir les tarifs
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Ce qu&apos;on automatise pour vous</h2>
              <ul className="space-y-3">
                {services.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-gray-600">
                    <Check size={15} className="text-[#e8632a] flex-shrink-0 mt-0.5" />{item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-50 rounded-2xl p-7">
              <h2 className="text-lg font-bold text-gray-900 mb-3">{whyTitle}</h2>
              <ul className="space-y-3 text-sm text-gray-600">
                {whyItems.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <Check size={15} className="text-[#e8632a] flex-shrink-0 mt-0.5" />{item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Comment on travaille avec vous</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {steps.map(({ step, title: t, desc }) => (
                <div key={step} className="bg-white border border-gray-100 rounded-2xl p-6">
                  <div className="text-3xl font-black text-orange-100 mb-3">{step}</div>
                  <h3 className="text-base font-bold text-gray-900 mb-2">{t}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">{casesTitle}</h2>
            <p className="text-gray-500 text-sm mb-8">Exemples de systèmes déployés pour ce secteur.</p>
            <div className="flex flex-col gap-6">
              {cases.map(({ secteur, probleme, solution, gain }) => (
                <div key={secteur} className="border border-gray-100 rounded-2xl p-7">
                  <div className="inline-flex items-center bg-orange-50 text-[#e8632a] text-xs font-semibold px-3 py-1 rounded-full mb-4">{secteur}</div>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="font-semibold text-gray-700 mb-1">Problème</p>
                      <p className="text-gray-500">{probleme}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-700 mb-1">Solution déployée</p>
                      <p className="text-gray-500">{solution}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-700 mb-1">Résultat</p>
                      <p className="text-[#e8632a] font-semibold">{gain}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">{faqsTitle}</h2>
            <div className="flex flex-col gap-4">
              {faqs.map(({ q, a }) => (
                <div key={q} className="border border-gray-100 rounded-xl p-6">
                  <p className="font-semibold text-gray-900 mb-2 text-sm">{q}</p>
                  <p className="text-sm text-gray-500 leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-900 rounded-2xl p-10 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">{ctaTitle}</h2>
            <p className="text-gray-400 mb-8 max-w-md mx-auto">{ctaDesc}</p>
            <Link href="https://calendly.com/ben40nocode/1h" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#e8632a] hover:bg-[#c4521f] text-white px-8 py-4 rounded-xl font-bold text-sm transition-colors">
              {ctaButton} <ArrowRight size={15} />
            </Link>
          </div>

        </div>
      </div>
    </>
  );
}
