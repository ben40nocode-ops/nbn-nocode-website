import type { Metadata } from "next";
import { HuskyFilm } from "@/components/home/HuskyFilm";

export const metadata: Metadata = {
  title: "AI Automation for SMBs & Craftsmen in France",
  description: "We automate client replies, quotes, reminders and follow-ups for French SMBs. Operational in 2 weeks. Based in Bordeaux, serving all of France. Free audit.",
  alternates: {
    canonical: "https://www.nbn-ia.fr/en",
    languages: {
      fr: "https://www.nbn-ia.fr",
      en: "https://www.nbn-ia.fr/en",
      "x-default": "https://www.nbn-ia.fr",
    },
  },
  openGraph: {
    title: "NBN IA — AI Automation for SMBs & Craftsmen | France",
    description: "We handle the repetitive tasks so you can focus on your work. Client replies, quotes, reminders — automated and running in 2 weeks.",
    url: "https://www.nbn-ia.fr/en",
  },
};

export default function HomeEnPage() {
  return <HuskyFilm lang="en" />;
}
