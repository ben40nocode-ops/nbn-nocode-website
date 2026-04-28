import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales de NBN IA — Automatisation & Agents IA.",
  robots: { index: false, follow: false },
};

export default function MentionsLegalesPage() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-24">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-10">Mentions légales</h1>

        <div className="prose prose-gray max-w-none space-y-8 text-sm text-gray-600 leading-relaxed">

          <section>
            <h2 className="text-base font-bold text-gray-900 mb-3">Éditeur du site</h2>
            <p>NBN IA<br />
            Contact : contact@nbn-nocode.fr<br />
            Directeur de la publication : Benjamin Bertigny</p>
          </section>

          <section>
            <h2 className="text-base font-bold text-gray-900 mb-3">Hébergement</h2>
            <p>Ce site est hébergé par :<br />
            Vercel Inc.<br />
            440 N Barranca Ave #4133, Covina, CA 91723, USA<br />
            <a href="https://vercel.com" className="text-[#e8632a] hover:underline" target="_blank" rel="noopener noreferrer">vercel.com</a></p>
          </section>

          <section>
            <h2 className="text-base font-bold text-gray-900 mb-3">Propriété intellectuelle</h2>
            <p>L&apos;ensemble du contenu de ce site (textes, images, graphismes, logo, icônes, etc.) est la propriété exclusive de NBN IA, sauf mention contraire. Toute reproduction, distribution ou utilisation sans autorisation écrite préalable est strictement interdite.</p>
          </section>

          <section>
            <h2 className="text-base font-bold text-gray-900 mb-3">Responsabilité</h2>
            <p>NBN IA s&apos;efforce de maintenir les informations publiées sur ce site aussi précises et à jour que possible. Cependant, NBN IA ne peut garantir l&apos;exactitude, la complétude ou l&apos;actualité des informations diffusées sur ce site.</p>
          </section>

          <section>
            <h2 className="text-base font-bold text-gray-900 mb-3">Liens hypertextes</h2>
            <p>Ce site peut contenir des liens vers d&apos;autres sites. NBN IA n&apos;est pas responsable du contenu de ces sites tiers.</p>
          </section>

          <section>
            <h2 className="text-base font-bold text-gray-900 mb-3">Droit applicable</h2>
            <p>Le présent site et ses mentions légales sont soumis au droit français. En cas de litige, les tribunaux français seront seuls compétents.</p>
          </section>

        </div>
      </div>
    </div>
  );
}
