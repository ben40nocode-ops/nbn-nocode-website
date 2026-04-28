import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: "Politique de confidentialité et RGPD de NBN IA.",
  robots: { index: false, follow: false },
};

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-24">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-10">Politique de confidentialité</h1>

        <div className="space-y-8 text-sm text-gray-600 leading-relaxed">

          <section>
            <h2 className="text-base font-bold text-gray-900 mb-3">Responsable du traitement</h2>
            <p>NBN IA — Benjamin Bertigny<br />
            Email : contact@nbn-ia.fr</p>
          </section>

          <section>
            <h2 className="text-base font-bold text-gray-900 mb-3">Données collectées</h2>
            <p>Dans le cadre de l&apos;utilisation de ce site, nous pouvons collecter les données suivantes :</p>
            <ul className="mt-2 space-y-1 list-disc list-inside">
              <li>Nom et adresse email (formulaire de contact)</li>
              <li>Données de connexion (via Clerk) pour l&apos;espace client</li>
              <li>Données de paiement (via Stripe — nous ne stockons pas vos données bancaires)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-bold text-gray-900 mb-3">Finalité des traitements</h2>
            <ul className="space-y-1 list-disc list-inside">
              <li>Répondre à vos demandes de contact</li>
              <li>Gérer votre abonnement et accès à l&apos;espace client</li>
              <li>Traiter les paiements</li>
              <li>Améliorer nos services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-bold text-gray-900 mb-3">Base légale</h2>
            <p>Les traitements reposent sur votre consentement et/ou l&apos;exécution du contrat vous liant à NBN IA.</p>
          </section>

          <section>
            <h2 className="text-base font-bold text-gray-900 mb-3">Conservation des données</h2>
            <p>Vos données sont conservées pendant la durée nécessaire à la finalité du traitement, et au maximum 3 ans après la fin de la relation commerciale.</p>
          </section>

          <section>
            <h2 className="text-base font-bold text-gray-900 mb-3">Vos droits (RGPD)</h2>
            <p>Conformément au RGPD, vous disposez des droits suivants :</p>
            <ul className="mt-2 space-y-1 list-disc list-inside">
              <li>Droit d&apos;accès à vos données</li>
              <li>Droit de rectification</li>
              <li>Droit à l&apos;effacement (droit à l&apos;oubli)</li>
              <li>Droit à la portabilité</li>
              <li>Droit d&apos;opposition</li>
            </ul>
            <p className="mt-3">Pour exercer ces droits : <a href="mailto:contact@nbn-ia.fr" className="text-[#e8632a] hover:underline">contact@nbn-ia.fr</a></p>
          </section>

          <section>
            <h2 className="text-base font-bold text-gray-900 mb-3">Cookies</h2>
            <p>Ce site utilise des cookies techniques nécessaires à son fonctionnement (authentification, session). Aucun cookie de tracking publicitaire n&apos;est utilisé.</p>
          </section>

          <section>
            <h2 className="text-base font-bold text-gray-900 mb-3">Services tiers</h2>
            <ul className="space-y-1 list-disc list-inside">
              <li><strong>Clerk</strong> — authentification (<a href="https://clerk.com/privacy" className="text-[#e8632a] hover:underline" target="_blank" rel="noopener noreferrer">politique de confidentialité</a>)</li>
              <li><strong>Stripe</strong> — paiements (<a href="https://stripe.com/privacy" className="text-[#e8632a] hover:underline" target="_blank" rel="noopener noreferrer">politique de confidentialité</a>)</li>
              <li><strong>Vercel</strong> — hébergement (<a href="https://vercel.com/legal/privacy-policy" className="text-[#e8632a] hover:underline" target="_blank" rel="noopener noreferrer">politique de confidentialité</a>)</li>
            </ul>
          </section>

        </div>
      </div>
    </div>
  );
}
