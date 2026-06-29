import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";

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
    default: "Automatisation & Agents IA PME — Bordeaux · Royan",
    template: "%s | NBN IA",
  },
  description:
    "NBN IA construit des systèmes IA autonomes pour PME et artisans : devis, relances, RDV automatisés en 2 semaines. Bordeaux, Royan, Arcachon.",
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
    "création site web Bordeaux",
    "agence web Bordeaux",
    "web app Bordeaux",
    "développement web app Royan",
    "création site web Arcachon",
    "agence web Royan Arcachon",
    "développement application Bordeaux",
    "site web responsive Gironde",
    "e-commerce Bordeaux",
    "application IA intégrée",
    "web apps avec agents IA",
    "automatisation Soulac",
    "site web Pauillac",
    "web app Lesparre",
    "agence Montalivet",
    "développement Lacanau",
    "agents IA côte atlantique",
    "automatisation Gironde Médoc",
  ],
  authors: [{ name: "Benjamin Bertigny", url: "https://www.nbn-ia.fr" }],
  creator: "NBN IA",
  verification: {
    google: "De_SUgDQvTITcUNtSm30LQKwgLxrGFkw8h0W1PcTimk",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://www.nbn-ia.fr",
    siteName: "NBN IA",
    title: "NBN IA — Automatisation & Agents IA | Bordeaux · Royan · Arcachon",
    description: "Formé chez Alegria Academy et certifié Anthropic Architecture. Systèmes IA autonomes qui travaillent pour vous, 24h/24, 7j/7. Vibe coding, orchestration IA, intégrations complexes — pas une agence classique.",
    // images: handled automatically by src/app/opengraph-image.tsx (dynamic OG)
  },
  twitter: {
    card: "summary_large_image",
    title: "NBN IA — Automatisation & Agents IA",
    description: "Benjamin Bertigny, AI systems builder. Systèmes IA autonomes qui travaillent pour vous, 24h/24. Agents Claude, orchestration IA, vibe coding. Bordeaux.",
    // images: Twitter falls back to og:image (the dynamic /opengraph-image)
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: {
    // canonical retiré du layout — chaque page.tsx le déclare explicitement via alternates.canonical
    // (un canonical global ici serait hérité par toutes les pages sans canonical propre et les ferait
    //  pointer vers la homepage, empêchant leur indexation individuelle par Google)
    languages: {
      "fr-FR": "https://www.nbn-ia.fr",
      "en-US": "https://www.nbn-ia.fr/en",
      "x-default": "https://www.nbn-ia.fr",
    },
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
      name: "NBN IA",
      url: "https://www.nbn-ia.fr",
      logo: "https://www.nbn-ia.fr/icon.svg",
      email: "contact@nbn-ia.fr",
      description: "Architecte de systèmes IA autonomes pour PME. Nous concevons des systèmes IA qui opèrent sans intervention humaine, 24h/24, 7j/7. Agents IA Claude, vibe coding avec Claude Code, orchestration IA. Pas une agence classique — je construis des systèmes qui tournent.",
      areaServed: ["Bordeaux", "Royan", "Arcachon", "Soulac", "Pauillac", "Lesparre", "Montalivet", "Lacanau", "Gironde", "France"],
      knowsAbout: ["Systèmes IA Autonomes", "Agents IA", "Claude AI", "Vibe Coding", "Claude Code", "Orchestration IA", "IA Générative", "Make", "n8n", "MCP", "Anthropic", "AI Systems Engineering", "Agent Orchestration", "LLM Workflows"],
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://www.nbn-ia.fr/#localbusiness",
      name: "NBN IA",
      url: "https://www.nbn-ia.fr",
      telephone: "+33640685975",
      email: "contact@nbn-ia.fr",
      image: "https://www.nbn-ia.fr/og-image.png",
      description: "Benjamin Bertigny, AI systems builder. Nous concevons des systèmes IA autonomes qui travaillent pour vous 24h/24, 7j/7. Architectures sur mesure, orchestration d'agents IA, intégrations API complexes. Maintenance continue incluse. Bordeaux, Royan, Arcachon.",
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
        { "@type": "City", name: "Soulac" },
        { "@type": "City", name: "Pauillac" },
        { "@type": "City", name: "Lesparre" },
        { "@type": "City", name: "Montalivet" },
        { "@type": "City", name: "Lacanau" },
        { "@type": "AdministrativeArea", name: "Gironde" },
        { "@type": "Country", name: "France" },
      ],
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
      sameAs: [
        "https://www.linkedin.com/company/nbn-nocode",
        "https://www.linkedin.com/in/benjamin-bertigny-3a4b34217/",
      ],
      alternateName: ["NBN"],
      legalName: "NBN IA",
    },
    {
      "@type": "WebSite",
      "@id": "https://www.nbn-ia.fr/#website",
      url: "https://www.nbn-ia.fr",
      name: "NBN IA",
      publisher: { "@id": "https://www.nbn-ia.fr/#organization" },
    },
    {
      "@type": "Person",
      "@id": "https://www.nbn-ia.fr/#founder",
      name: "Benjamin Bertigny",
      jobTitle: "AI Systems Builder",
      description: "Formé chez Alegria Academy et certifié Anthropic Architecture. Benjamin Bertigny, AI systems builder basé à Bordeaux. Nous concevons des systèmes IA autonomes sur mesure pour les PME — des architectures qui opèrent sans intervention humaine, 24h/24, 7j/7. Vibe coding avec Claude Code, orchestration d'agents IA, intégrations API complexes — je construis des systèmes qui ne ressemblent ni à une agence de dev, ni à une agence nocode. Quelque chose de nouveau. Ma conviction : l'IA doit travailler pour vous, pas l'inverse. Je ne livre pas des workflows. Je livre un système qui tourne, s'adapte, et que je maintiens dans le temps.",
      url: "https://www.nbn-ia.fr/a-propos",
      email: "contact@nbn-ia.fr",
      worksFor: { "@id": "https://www.nbn-ia.fr/#organization" },
      sameAs: [
        "https://www.linkedin.com/in/benjamin-bertigny-3a4b34217/",
        "https://www.linkedin.com/company/nbn-nocode",
      ],
      knowsAbout: ["Claude AI", "Claude Code", "Agents IA", "Systèmes IA Autonomes", "Vibe Coding", "Orchestration IA", "IA Générative", "Make", "n8n", "Next.js", "MCP", "Anthropic", "AI Systems Engineering", "Agent Orchestration", "LLM Workflows"],
    },
    {
      "@type": "Service",
      "@id": "https://www.nbn-ia.fr/#service-websites",
      name: "Création de Sites Web Modernes",
      provider: { "@id": "https://www.nbn-ia.fr/#organization" },
      areaServed: [
        { "@type": "City", name: "Bordeaux" },
        { "@type": "City", name: "Royan" },
        { "@type": "City", name: "Arcachon" },
        { "@type": "City", name: "Soulac" },
        { "@type": "City", name: "Pauillac" },
        { "@type": "City", name: "Lesparre" },
        { "@type": "City", name: "Montalivet" },
        { "@type": "City", name: "Lacanau" },
      ],
      description: "Création de sites web responsifs, performants et optimisés SEO. Design moderne avec Webflow ou Next.js, intégration à vos systèmes IA.",
      url: "https://www.nbn-ia.fr/creation-site-web-bordeaux",
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "EUR",
        lowPrice: "800",
        highPrice: "3500",
      },
    },
    {
      "@type": "Service",
      "@id": "https://www.nbn-ia.fr/#service-webapps",
      name: "Développement Web Apps & Applications sur Mesure",
      provider: { "@id": "https://www.nbn-ia.fr/#organization" },
      areaServed: [
        { "@type": "City", name: "Bordeaux" },
        { "@type": "City", name: "Royan" },
        { "@type": "City", name: "Arcachon" },
        { "@type": "City", name: "Soulac" },
        { "@type": "City", name: "Pauillac" },
        { "@type": "City", name: "Lesparre" },
        { "@type": "City", name: "Montalivet" },
        { "@type": "City", name: "Lacanau" },
      ],
      description: "Applications web sur mesure avec authentification, base de données, intégrations IA et APIs. Scalables, sécurisées, performantes.",
      url: "https://www.nbn-ia.fr",
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "EUR",
        lowPrice: "2500",
      },
    },
    {
      "@type": "Service",
      "@id": "https://www.nbn-ia.fr/#service-automation",
      name: "Automatisations IA & Agents Autonomes",
      provider: { "@id": "https://www.nbn-ia.fr/#organization" },
      areaServed: [
        { "@type": "City", name: "Bordeaux" },
        { "@type": "City", name: "Royan" },
        { "@type": "City", name: "Arcachon" },
        { "@type": "City", name: "Soulac" },
        { "@type": "City", name: "Pauillac" },
        { "@type": "City", name: "Lesparre" },
        { "@type": "City", name: "Montalivet" },
        { "@type": "City", name: "Lacanau" },
      ],
      description: "Architecture de systèmes IA autonomes avec agents Claude, workflows Make/n8n, orchestration complète. Maintenance 24/7.",
      url: "https://www.nbn-ia.fr/tarifs",
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "EUR",
        lowPrice: "450",
      },
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
          {/* GTM loaded conditionally via CookieBanner after consent */}
        </head>
        <body className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <CookieBanner />
        </body>
      </html>
    </ClerkProvider>
  );
}
