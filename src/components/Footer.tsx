import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-1 mb-4">
              <span className="text-base font-bold text-white">NBN</span>
              <span className="text-sm font-semibold text-[#e8632a]">Nocode</span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs mb-6">
              On construit l&apos;architecture. Vous récoltez les résultats. Automatisation & agents IA pour PME qui veulent scaler sans recruter.
            </p>
            <Link
              href="https://calendly.com/nbn-nocode"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#e8632a] hover:bg-[#c4521f] text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors"
            >
              Audit gratuit →
            </Link>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-widest mb-5">Navigation</h4>
            <ul className="flex flex-col gap-3">
              {[
                { label: "À propos", href: "/#apropos" },
                { label: "Solutions", href: "/#solutions" },
                { label: "Réalisations", href: "/#realisations" },
                { label: "Tarifs", href: "/tarifs" },
                { label: "Contact", href: "/contact" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Stack */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-widest mb-5">Notre stack</h4>
            <ul className="flex flex-col gap-2.5">
              {["Make", "Zapier", "Airtable", "Webflow", "Claude AI", "Stripe"].map((t) => (
                <li key={t} className="text-sm">{t}</li>
              ))}
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">© {new Date().getFullYear()} NBN Nocode. Tous droits réservés.</p>
          <div className="flex gap-6">
            <Link href="/mentions-legales" className="text-xs text-gray-600 hover:text-gray-400 transition-colors">Mentions légales</Link>
            <Link href="/politique-confidentialite" className="text-xs text-gray-600 hover:text-gray-400 transition-colors">Confidentialité</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
