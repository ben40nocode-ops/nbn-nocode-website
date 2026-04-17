import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-[#1c1c1c] bg-[#080808]">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <span className="text-lg font-bold text-[#f2f0eb]">NBN</span>
              <span className="text-sm font-medium text-[#e8632a] ml-1">Nocode</span>
            </div>
            <p className="text-sm text-[#777770] leading-relaxed max-w-xs">
              On construit l&apos;architecture. Vous récoltez les résultats. Automatisation & agents IA pour PME qui veulent scaler sans recruter.
            </p>
            <div className="flex gap-3 mt-5">
              <a
                href="https://calendly.com/nbn-nocode"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm bg-[#e8632a] hover:bg-[#c4521f] text-white px-4 py-2 rounded-lg transition-colors font-medium"
              >
                Audit gratuit →
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-semibold text-[#f2f0eb] uppercase tracking-widest mb-4">
              Navigation
            </h4>
            <ul className="flex flex-col gap-3">
              {[
                { label: "À propos", href: "/#apropos" },
                { label: "Solutions", href: "/#solutions" },
                { label: "Réalisations", href: "/#realisations" },
                { label: "Tarifs", href: "/tarifs" },
                { label: "Contact", href: "/contact" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-[#777770] hover:text-[#f2f0eb] transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Stack */}
          <div>
            <h4 className="text-xs font-semibold text-[#f2f0eb] uppercase tracking-widest mb-4">
              Notre stack
            </h4>
            <ul className="flex flex-col gap-2">
              {["Make", "Zapier", "Airtable", "Webflow", "Claude AI", "Stripe"].map((t) => (
                <li key={t} className="text-sm text-[#777770]">
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 border-t border-[#1c1c1c] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#555550]">
            © {new Date().getFullYear()} NBN Nocode. Tous droits réservés.
          </p>
          <div className="flex gap-6">
            <Link href="/mentions-legales" className="text-xs text-[#555550] hover:text-[#777770] transition-colors">
              Mentions légales
            </Link>
            <Link href="/politique-confidentialite" className="text-xs text-[#555550] hover:text-[#777770] transition-colors">
              Confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
