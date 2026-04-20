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
  description: "NBN Nocode conçoit vos architectures d'automatisation et agents IA sur mesure à Bordeaux, Royan et Arcachon. Setup unique dès 450€, maintenance mensuelle. Claude AI, Make, Zapier, Airtable.",
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
