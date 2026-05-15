export const metadata = { title: "Accès non autorisé", robots: { index: false } };

export default function AccesRefusePage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16 flex items-center justify-center">
      <div className="max-w-md mx-auto px-6 text-center">
        <div className="text-5xl mb-6">🔒</div>
        <h1 className="text-2xl font-bold text-gray-900 mb-3">Accès réservé aux clients NBN IA</h1>
        <p className="text-gray-500 mb-8">
          Cet espace est réservé aux clients qui ont signé un contrat de maintenance avec Benjamin.
          Si vous êtes client, contactez-nous pour obtenir votre accès.
        </p>
        <a
          href="mailto:contact@nbn-ia.fr"
          className="inline-flex items-center gap-2 bg-[#e8632a] hover:bg-[#c4521f] text-white px-6 py-3 rounded-xl font-semibold text-sm transition-colors"
        >
          Contacter NBN IA
        </a>
      </div>
    </div>
  );
}
