import type { Metadata } from "next";
import { HeroSection } from "@/components/home/HeroSection";
import { ProblemSection } from "@/components/home/ProblemSection";
import { DiscoveryOffers } from "@/components/home/DiscoveryOffers";
import { LogoBar } from "@/components/home/LogoBar";
import { AboutSection } from "@/components/home/AboutSection";
import { SolutionsSection } from "@/components/home/SolutionsSection";
import { ClaudeSection } from "@/components/home/ClaudeSection";
import { RealisationsSection } from "@/components/home/RealisationsSection";
import { PricingPreview } from "@/components/home/PricingPreview";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { FaqSection } from "@/components/home/FaqSection";
import { CtaSection } from "@/components/home/CtaSection";

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
  return (
    <>
      <HeroSection />
      <LogoBar />
      <ProblemSection />
      <SolutionsSection />
      <AboutSection />
      <ClaudeSection />
      <RealisationsSection />
      <DiscoveryOffers />
      <PricingPreview />
      <TestimonialsSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}
