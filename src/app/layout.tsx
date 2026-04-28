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
  metadataBase: new URL("https://www.nbn-ia.fr"),
  title: {
    default: "NBN Nocode — Automatisation & Agents IA | Bordeaux · Royan · Arcachon",
    template: "%s | NBN Nocode",
  },
  description:
    "Architecte de systèmes IA autonomes pour PME à Bordeaux, Royan et Arcachon. Agents IA Claude, vibe coding, orchestration IA. Vos systèmes tournent 24h/24 sans vous.",
  keywords: [
    "systèmes IA autonomes Bordeaux",
    "agent IA Bordeaux",
    "architecte IA Bordeaux",
    "vibe coding Bordeaux",
    "Claude Code Bordeaux",
    "agents IA Claude PME",
    "orchestration IA Gironde",
    "systèmes IA autonomes France",
    "AI systems builder Bordeaux",
    "IA générative PME",
    "automatisation agents IA Bordeaux",
    "agent IA PME France",
  ],
  authors: [{ name: "Benjamin Bertigny", url: "https://www.nbn-ia.fr" }],
  creator: "NBN Nocode",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://www.nbn-ia.fr",
    siteName: "NBN Nocode",
    title: "NBN Nocode — Automatisation & Agents IA | Bordeaux · Royan · Arcachon",
    description: "Je construis des systèmes IA autonomes qui travaillent à votre place. 24h/24. Agents IA, vibe coding, Claude Code — Bordeaux · Royan · Arcachon.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "NBN Nocode — Automatisation & Agents IA" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "NBN Nocode — Automatisation & Agents IA",
    description: "Architecte de systèmes IA autonomes. Agents IA & vibe coding pour PME. Bordeaux · Royan · Arcachon.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: {
    canonical: "https://www.nbn-ia.fr",
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
      "@id": "https://www.nbn-ia.fr/#organization",
      name: "NBN Nocode",
      url: "https://www.nbn-ia.fr",
      logo: "https://www.nbn-ia.fr/icon.svg",
      email: "contact@nbn-nocode.fr",
      description: "Architecte de systèmes IA autonomes pour PME. Agents IA Claude, vibe coding, orchestration IA. Bordeaux, Royan, Arcachon.",
      areaServed: ["Bordeaux", "Royan", "Arcachon", "Gironde", "France"],
      knowsAbout: ["Systèmes IA Autonomes", "Agents IA", "Claude AI", "Vibe Coding", "Claude Code", "Orchestration IA", "IA Générative", "Make", "n8n"],
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://www.nbn-ia.fr/#localbusiness",
      name: "NBN Nocode",
      url: "https://www.nbn-ia.fr",
      telephone: "+33640685975",
      email: "contact@nbn-nocode.fr",
      image: "https://www.nbn-ia.fr/og-image.png",
      description: "Architecte de systèmes IA autonomes pour PME. Agents IA Claude, vibe coding, orchestration sur mesure. Setup unique, abonnement maintenance. Bordeaux, Royan, Arcachon.",
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
      "@id": "https://www.nbn-ia.fr/#website",
      url: "https://www.nbn-ia.fr",
      name: "NBN Nocode",
      publisher: { "@id": "https://www.nbn-ia.fr/#organization" },
    },
    {
      "@type": "Person",
      "@id": "https://www.nbn-ia.fr/#founder",
      name: "Benjamin Bertigny",
      jobTitle: "AI Systems Builder & Architecte de Systèmes IA Autonomes",
      description: "Fondateur de NBN Nocode. Architecte de systèmes IA autonomes pour PME. Vibe coding avec Claude Code, orchestration d'agents IA. Basé à Bordeaux.",
      url: "https://www.nbn-ia.fr",
      email: "contact@nbn-nocode.fr",
      worksFor: { "@id": "https://www.nbn-ia.fr/#organization" },
      sameAs: ["https://www.linkedin.com/company/nbn-nocode"],
      knowsAbout: ["Claude AI", "Claude Code", "Agents IA", "Systèmes IA Autonomes", "Vibe Coding", "Orchestration IA", "IA Générative", "Make", "n8n", "Next.js"],
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
