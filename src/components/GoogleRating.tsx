import { ArrowUpRight } from "lucide-react";

const GOOGLE_PROFILE_URL = "https://g.page/r/CSbAy-umbf2gEBM";

export function GoogleRating({ lang = "fr" }: { lang?: "fr" | "en" }) {
  return (
    <a
      href={GOOGLE_PROFILE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center gap-2.5 bg-white border border-gray-200 hover:border-gray-300 rounded-full px-5 py-2.5 shadow-sm transition-all hover:shadow"
    >
      <span className="text-amber-400 text-sm tracking-tight" aria-hidden="true">★★★★★</span>
      <span className="text-sm font-bold text-gray-900">5,0</span>
      <span className="text-sm text-gray-500">
        {lang === "en" ? "on Google" : "sur Google"}
      </span>
      <span className="hidden sm:inline text-sm text-gray-400 group-hover:text-[#e8632a] transition-colors">
        · {lang === "en" ? "see reviews" : "voir les avis"}
        <ArrowUpRight size={13} className="inline ml-0.5 -mt-0.5" />
      </span>
    </a>
  );
}
