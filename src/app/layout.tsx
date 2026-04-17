import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.nbn-nocode.fr"),
  title: {
    default: "NBN Nocode — Automatisation & Agents IA pour PME",
    template: "%s | NBN Nocode",
  },
  description:
    "NBN Nocode conçoit vos architectures d'automatisation et agents IA sur mesure. Gagnez du temps, réduisez les coûts, scalez sans coder. Bordeaux, Royan, Arcachon.",
  keywords: [
    "automatisation nocode",
    "agent IA PME",
    "Make Zapier Airtable",
    "Claude API",
    "no-code Bordeaux",
    "workflow automatisé",
    "product builder IA",
    "intégration IA entreprise",
  ],
  authors: [{ name: "NBN Nocode", url: "https://www.nbn-nocode.fr" }],
  creator: "NBN Nocode",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://www.nbn-nocode.fr",
    siteName: "NBN Nocode",
    title: "NBN Nocode — Automatisation & Agents IA pour PME",
    description:
      "Vos process tournent. Même quand vous dormez. On construit l'architecture, vous récoltez les résultats.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "NBN Nocode" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "NBN Nocode — Automatisation & Agents IA",
    description: "Architectures d'automatisation et agents IA sur mesure pour PME.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: {
    canonical: "https://www.nbn-nocode.fr",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
