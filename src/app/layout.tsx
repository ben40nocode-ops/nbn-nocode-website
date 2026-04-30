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
    default: "NBN IA — Automatisation & Agents IA | Bordeaux · Royan · Arcachon",
    template: "%s | NBN IA",
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
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://www.nbn-ia.fr",
    siteName: "NBN IA",
    title: "NBN IA — Automatisation & Agents IA | Bordeaux · Royan · Arcachon",
    description: "Je construis des systèmes IA autonomes qui travaillent à votre place. 24h/24. Agents IA, vibe coding, Claude Code — Bordeaux · Royan · Arcachon.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "NBN IA — Automatisation & Agents IA" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "NBN IA — Automatisation & Agents IA",
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
      name: "NBN IA",
      url: "https://www.nbn-ia.fr",
      logo: "https://www.nbn-ia.fr/icon.svg",
      email: "contact@nbn-ia.fr",
      description: "Architecte de systèmes IA autonomes pour PME. Agents IA Claude, vibe coding, orchestration IA. Bordeaux, Royan, Arcachon.",
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
      sameAs: ["https://www.linkedin.com/company/nbn-nocode"],
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
      jobTitle: "AI Systems Builder & Architecte de Systèmes IA Autonomes",
      description: "Fondateur de NBN IA. Architecte de systèmes IA autonomes pour PME. Vibe coding avec Claude Code, orchestration d'agents IA. Basé à Bordeaux.",
      url: "https://www.nbn-ia.fr",
      email: "contact@nbn-ia.fr",
      worksFor: { "@id": "https://www.nbn-ia.fr/#organization" },
      sameAs: ["https://www.linkedin.com/company/nbn-nocode"],
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
          {/* Google Tag Manager */}
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-58LB6LCC');`,
            }}
          />
        </head>
        <body className="min-h-screen flex flex-col">
          {/* Google Tag Manager (noscript) */}
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-58LB6LCC"
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
