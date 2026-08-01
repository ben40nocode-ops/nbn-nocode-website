import type { Metadata } from "next";
import { HuskyFilm } from "@/components/home/HuskyFilm";

export const metadata: Metadata = {
  title: "Automatisation & Agents IA pour PME | Bordeaux · Royan",
  description: "Automatisation & agents IA pour PME et artisans : devis, relances et RDV automatisés en 2 semaines. Compatible Microsoft 365. Bordeaux, Royan, Arcachon.",
  alternates: {
    canonical: "https://www.nbn-ia.fr",
    languages: {
      fr: "https://www.nbn-ia.fr",
      en: "https://www.nbn-ia.fr/en",
      "x-default": "https://www.nbn-ia.fr",
    },
  },
};

export default function HomePage() {
  return <HuskyFilm />;
}
