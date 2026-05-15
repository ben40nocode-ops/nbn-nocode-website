import type { Metadata } from "next";
import { SectorPage } from "@/components/SectorPage";

export const metadata: Metadata = {
  title: "Automatisation IA pour Hôtels de Soulac-sur-Mer — NBN IA",
  description: "Agents IA et automatisation pour hôtels de Soulac-sur-Mer : réservations, conciergerie IA, communication clients, gestion de saison. Audit gratuit.",
  keywords: ["automatisation hôtel Soulac", "agent IA hôtel Soulac-sur-Mer", "IA gestion hôtel Soulac", "automatisation réservations hôtel Soulac"],
  alternates: { canonical: "https://www.nbn-ia.fr/hotel-soulac" },
};

export default function Page() {
  return (
    <SectorPage
      canonical="https://www.nbn-ia.fr/hotel-soulac"
      schemaName="Automatisation IA pour Hôtels de Soulac-sur-Mer"
      schemaCity="Soulac-sur-Mer"
      schemaDesc="Agents IA et automatisation pour les hôtels et hébergements de Soulac-sur-Mer et du nord du Médoc."
      badge="IA & Automatisation — Hôtellerie Soulac"
      title="Automatisation & Agents IA"
      titleAccent="pour les hôtels de Soulac-sur-Mer"
      intro="Les hôtels de Soulac-sur-Mer font face à une saisonnalité marquée : haute saison surchargée, basse saison à optimiser. On conçoit des systèmes IA qui automatisent la communication client, la gestion des réservations et la conciergerie — pour délivrer une expérience premium sans surcharger votre équipe."
      intro2="NBN IA accompagne les hôteliers de Soulac-sur-Mer et du nord du Médoc. Audit gratuit sans engagement."
      services={[
        "Agent IA conciergerie — répond aux questions 24h/24",
        "Confirmation de réservation et communication pré-séjour",
        "Check-in dématérialisé et instructions d'arrivée",
        "Gestion des demandes spéciales (lit bébé, allergie, etc.)",
        "Upsell automatisé (petit-déjeuner, options, surclassement)",
        "Relances avis Google post-séjour",
        "Reporting revenus et occupation hebdomadaire",
        "Communication basse saison pour fidéliser les clients",
      ]}
      whyTitle="Pourquoi automatiser votre hôtel à Soulac ?"
      whyItems={[
        "Forte saisonnalité — pic en juillet-août à gérer sans stress",
        "Questions répétitives (plage, restaurant, parking, animaux)",
        "Personnel difficile à recruter en haute saison",
        "Spécialisé Claude AI — ton professionnel et chaleureux",
        "Disponible en présentiel sur le Médoc",
        "Audit gratuit sans engagement",
      ]}
      steps={[
        { step: "01", title: "Audit 1h", desc: "On analyse vos flux de communication, vos demandes récurrentes et vos outils de réservation. On identifie les automatisations les plus impactantes." },
        { step: "02", title: "Déploiement", desc: "Agent IA conciergerie et automatisations déployés. Votre équipe est formée en 1h. Livraison en 48h à 1 semaine." },
        { step: "03", title: "Optimisation continue", desc: "On monitore les conversations et on améliore l'agent au fil des saisons. Résiliable à tout moment." },
      ]}
      casesTitle="Cas concrets pour les hôtels de Soulac"
      cases={[
        {
          secteur: "Hôtel de charme bord de mer",
          probleme: "Réception ouverte seulement de 8h à 20h. Demandes et réservations reçues en dehors de ces horaires, sans réponse rapide.",
          solution: "Agent IA disponible 24h/24 qui répond aux questions, confirme les disponibilités et prend les demandes pour transmission à la réception le matin.",
          gain: "30% de réservations supplémentaires en dehors des heures d'ouverture. Clients rassurés.",
        },
        {
          secteur: "Hôtel avec restaurant",
          probleme: "Guests qui demandent des recommandations restaurant, activités, météo. L'équipe passe du temps sur des réponses non productives.",
          solution: "Agent IA conciergerie entraîné sur le territoire (restaurants, activités, plages, transports). Répond instantanément avec des recommandations pertinentes.",
          gain: "Satisfaction clients +0,8 point sur Booking. Équipe libérée pour l'accueil.",
        },
        {
          secteur: "Hôtel — optimisation basse saison",
          probleme: "Taux d'occupation en basse saison (octobre-avril) trop faible. Pas de stratégie de fidélisation des clients de l'été.",
          solution: "Campagnes email automatisées vers les clients de l'été précédent avec offres spéciales basse saison. Agent IA qui gère les demandes entrantes.",
          gain: "+20% de taux d'occupation en septembre-octobre.",
        },
      ]}
      faqs={[
        { q: "On a déjà un channel manager — ça s'intègre ?", a: "Oui. On peut connecter l'agent IA à la plupart des channel managers (Cloudbeds, Lodgify, etc.) pour avoir les disponibilités en temps réel." },
        { q: "L'agent peut répondre en plusieurs langues ?", a: "Oui. Claude AI maîtrise le français, l'anglais, l'espagnol, l'allemand et d'autres langues. Il détecte la langue du client automatiquement." },
        { q: "Comment on personnalise le ton de l'agent ?", a: "Lors du déploiement, on configure l'agent avec votre charte de communication, votre vocabulaire et vos valeurs. Il reflète l'identité de votre hôtel." },
        { q: "Quel budget pour démarrer ?", a: "Un agent conciergerie basique démarre à 450€. Un système complet avec upsell et automatisations autour de 900€. On définit ensemble lors de l'audit." },
      ]}
      faqsTitle="Questions fréquentes — automatisation hôtels Soulac-sur-Mer"
      ctaTitle="1 heure pour améliorer l'expérience de vos clients"
      ctaDesc="Audit gratuit, sans engagement. À Soulac ou en visio."
      ctaButton="Réserver l'audit gratuit"
    />
  );
}
