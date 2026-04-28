import type { Metadata } from "next";
import { HeroSection } from "@/components/home/HeroSection";
import { LogoBar } from "@/components/home/LogoBar";
import { AboutSection } from "@/components/home/AboutSection";
import { SolutionsSection } from "@/components/home/SolutionsSection";
import { RealisationsSection } from "@/components/home/RealisationsSection";
import { PricingPreview } from "@/components/home/PricingPreview";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { FaqSection } from "@/components/home/FaqSection";
import { CtaSection } from "@/components/home/CtaSection";

export const metadata: Metadata = {
  title: "Automatisation & Agents IA pour PME | Bordeaux · Royan · Arcachon",
  description: "Je construis des systèmes IA autonomes qui travaillent à votre place. 24h/24. Agents IA Claude, vibe coding, orchestration sur mesure. Bordeaux, Royan, Arcachon et toute la France.",
  alternates: { canonical: "https://www.nbn-nocode.fr" },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <LogoBar />
      <AboutSection />
      <SolutionsSection />
      <RealisationsSection />
      <PricingPreview />
      <TestimonialsSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}
