import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center pt-16">
      <div className="max-w-lg mx-auto px-6 text-center">
        <p className="text-8xl font-black text-gray-100 mb-4">404</p>
        <h1 className="text-2xl font-bold text-gray-900 mb-3">Page introuvable</h1>
        <p className="text-gray-500 mb-8">
          Cette page n&apos;existe pas ou a été déplacée. Revenez à l&apos;accueil.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-[#e8632a] hover:bg-[#c4521f] text-white px-6 py-3 rounded-xl font-semibold text-sm transition-colors"
        >
          Retour à l&apos;accueil <ArrowRight size={15} />
        </Link>
      </div>
    </div>
  );
}
