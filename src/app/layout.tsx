import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
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
    default: "NBN Nocode — Automatisation & Agents IA | Bordeaux · Royan · Arcachon",
    template: "%s | NBN Nocode",
  },
  description:
    "Expert en automatisation nocode et agents IA pour PME à Bordeaux, Royan et Arcachon. Setup Make, Zapier, Airtable, Claude AI. Gagnez du temps, scalez sans recruter.",
  keywords: [
    "automatisation nocode Bordeaux",
    "agent IA Bordeaux",
    "nocode Royan",
    "automatisation PME Arcachon",
    "Make Zapier Bordeaux",
    "Claude AI intégration",
    "workflow automatisé Gironde",
    "product builder IA Bordeaux",
    "automatisation entreprise Bordeaux",
    "no-code Gironde",
    "consultant automatisation Bordeaux",
    "agent IA PME France",
  ],
  authors: [{ name: "Benjamin Bertigny", url: "https://www.nbn-nocode.fr" }],
  creator: "NBN Nocode",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://www.nbn-nocode.fr",
    siteName: "NBN Nocode",
    title: "NBN Nocode — Automatisation & Agents IA | Bordeaux · Royan · Arcachon",
    description: "Vos process tournent. Même quand vous dormez. Expert nocode & Claude AI pour PME en Gironde.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "NBN Nocode — Automatisation & Agents IA" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "NBN Nocode — Automatisation & Agents IA",
    description: "Expert nocode & Claude AI pour PME. Bordeaux · Royan · Arcachon.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: {
    canonical: "https://www.nbn-nocode.fr",
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.nbn-nocode.fr/#organization",
      name: "NBN Nocode",
      url: "https://www.nbn-nocode.fr",
      logo: "https://www.nbn-nocode.fr/icon.svg",
      email: "contact@nbn-nocode.fr",
      description: "Spécialiste en automatisation nocode et agents IA pour PME. Bordeaux, Royan, Arcachon.",
      areaServed: ["Bordeaux", "Royan", "Arcachon", "Gironde", "France"],
      knowsAbout: ["Automatisation", "Intelligence Artificielle", "Claude AI", "Make", "Zapier", "Airtable", "Nocode"],
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://www.nbn-nocode.fr/#localbusiness",
      name: "NBN Nocode",
      url: "https://www.nbn-nocode.fr",
      telephone: "+33640685975",
      email: "contact@nbn-nocode.fr",
      image: "https://www.nbn-nocode.fr/og-image.png",
      description: "Expert automatisation nocode et agents IA Claude pour PME. Setup sur mesure, abonnement maintenance. Bordeaux, Royan, Arcachon.",
      priceRange: "€€",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bordeaux",
        addressRegion: "Nouvelle-Aquitaine",
        postalCode: "33000",
        addressCountry: "FR",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 44.8378,
        longitude: -0.5792,
      },
      areaServed: [
        { "@type": "City", name: "Bordeaux" },
        { "@type": "City", name: "Royan" },
        { "@type": "City", name: "Arcachon" },
        { "@type": "AdministrativeArea", name: "Gironde" },
        { "@type": "Country", name: "France" },
      ],
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
      sameAs: ["https://www.linkedin.com/company/nbn-nocode"],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.nbn-nocode.fr/#website",
      url: "https://www.nbn-nocode.fr",
      name: "NBN Nocode",
      publisher: { "@id": "https://www.nbn-nocode.fr/#organization" },
    },
    {
      "@type": "Person",
      "@id": "https://www.nbn-nocode.fr/#founder",
      name: "Benjamin Bertigny",
      jobTitle: "Product Builder & Expert Claude AI",
      description: "Fondateur de NBN Nocode. Spécialiste en automatisation nocode et agents IA pour PME. Formé à l'Alegría Academy. Basé à Bordeaux.",
      url: "https://www.nbn-nocode.fr",
      email: "contact@nbn-nocode.fr",
      worksFor: { "@id": "https://www.nbn-nocode.fr/#organization" },
      sameAs: ["https://www.linkedin.com/company/nbn-nocode"],
      knowsAbout: ["Claude AI", "Automatisation nocode", "Make", "Zapier", "Airtable", "n8n", "Next.js", "Agents IA"],
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="fr" className={`${geistSans.variable} ${geistMono.variable}`}>
        <head>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
        </head>
        <body className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
