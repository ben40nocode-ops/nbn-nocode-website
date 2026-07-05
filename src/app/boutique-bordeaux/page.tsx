import type { Metadata } from "next";
import { SectorPage } from "@/components/SectorPage";

export const metadata: Metadata = {
  title: "E-commerce & IA pour Boutiques à Bordeaux",
  description: "Création de boutique en ligne et automatisation IA pour commerces bordelais : catalogue, paiement, logistique, agent IA client. Devis gratuit.",
  keywords: ["e-commerce Bordeaux", "boutique en ligne Bordeaux", "création site e-commerce Bordeaux", "automatisation boutique Bordeaux", "vente en ligne Bordeaux"],
  alternates: { canonical: "https://www.nbn-ia.fr/boutique-bordeaux" },
};

export default function Page() {
  return (
    <SectorPage
      canonical="https://www.nbn-ia.fr/boutique-bordeaux"
      schemaName="E-commerce et Automatisation pour Boutiques à Bordeaux"
      schemaCity="Bordeaux"
      schemaDesc="Création de boutiques en ligne et automatisation IA pour les commerces et boutiques de Bordeaux."
      badge="E-commerce & IA — Boutiques Bordeaux"
      title="Boutique en ligne & automatisation"
      titleAccent="pour votre commerce à Bordeaux"
      intro="Vendre en ligne ne s'arrête pas à créer un site e-commerce. On développe des boutiques connectées à votre logistique, avec agent IA pour le service client et automatisations qui gèrent les paniers abandonnés, les relances et la fidélisation — pour que votre boutique génère des revenus même quand vous dormez."
      intro2="NBN IA accompagne les boutiques et commerces bordelais dans leur transition vers le e-commerce. Devis gratuit sans engagement."
      services={[
        "Boutique e-commerce sur mesure (Next.js + Stripe)",
        "Catalogue produits avec gestion des stocks",
        "Agent IA service client 24h/24",
        "Automatisation des paniers abandonnés",
        "Notifications de commande et suivi livraison",
        "SEO e-commerce — fiches produits optimisées",
        "Intégration logistique et transporteurs",
        "Campagnes fidélisation automatisées",
      ]}
      whyTitle="Pourquoi automatiser votre boutique en ligne ?"
      whyItems={[
        "Commandes reçues 24h/24 — service client impossible en manuel",
        "Paniers abandonnés = revenu perdu sans relance automatique",
        "Stock et logistique chronophages à automatiser",
        "Spécialisé Claude AI — service client naturel et efficace",
        "Disponible en présentiel à Bordeaux",
        "Devis gratuit sans engagement",
      ]}
      steps={[
        { step: "01", title: "Brief & architecture (1h)", desc: "On définit ensemble le catalogue, les fonctionnalités, les intégrations logistiques et le design. Devis transparent." },
        { step: "02", title: "Développement (2-4 semaines)", desc: "Boutique complète avec paiement, gestion des stocks et agent IA. Vibe coding = livraison 3x plus rapide." },
        { step: "03", title: "Mise en ligne & croissance", desc: "Déploiement, SEO e-commerce, monitoring des ventes. Évolutions continues selon vos besoins." },
      ]}
      casesTitle="Cas concrets pour les boutiques bordelaises"
      cases={[
        {
          secteur: "Boutique mode / accessoires",
          probleme: "Vente uniquement en boutique physique. Pas de présence en ligne. Chiffre d'affaires limité aux heures d'ouverture.",
          solution: "Boutique e-commerce avec catalogue complet, paiement sécurisé, agent IA pour les questions (tailles, délais, retours) et automatisation logistique.",
          gain: "+35% de chiffre d'affaires avec le canal en ligne dès le 3e mois.",
        },
        {
          secteur: "Commerce local avec vente en ligne existante",
          probleme: "Site e-commerce basique avec taux de conversion de 0,8%. Beaucoup de trafic, peu d'achats. Service client lent.",
          solution: "Refonte UX de la boutique + agent IA service client + séquence de paniers abandonnés + optimisation SEO produits.",
          gain: "Taux de conversion passé à 2,4%. +30% de chiffre d'affaires en ligne.",
        },
        {
          secteur: "Artisan bordelais avec vente directe",
          probleme: "Ventes sur les marchés uniquement. Demandes de commandes personnalisées reçues par Instagram, difficiles à gérer.",
          solution: "Boutique avec configurateur produit + agent IA qui recueille les détails des commandes personnalisées et envoie un devis automatique.",
          gain: "Commandes personnalisées multipliées par 3. Gestion centralisée.",
        },
      ]}
      faqs={[
        { q: "Quel budget pour une boutique e-commerce à Bordeaux ?", a: "Une boutique simple (jusqu'à 50 produits) démarre à 2 500€ HT. Une boutique avancée avec configurateur et agent IA autour de 4 500€ HT. Devis précis après l'appel." },
        { q: "On peut gérer le catalogue nous-mêmes ?", a: "Oui. Interface d'administration simple pour ajouter, modifier ou supprimer des produits. Formation incluse à la livraison." },
        { q: "Quels moyens de paiement sont acceptés ?", a: "Via Stripe : carte bancaire, Apple Pay, Google Pay, virement. Possibilité d'ajouter d'autres moyens de paiement selon vos besoins." },
        { q: "Comment l'agent IA gère les retours et remboursements ?", a: "On le configure selon votre politique de retour. Il peut initier la procédure, envoyer les instructions et notifier votre équipe des cas complexes." },
      ]}
      faqsTitle="Questions fréquentes — e-commerce et boutique en ligne Bordeaux"
      ctaTitle="Votre boutique en ligne qui vend 24h/24"
      ctaDesc="Devis gratuit, sans engagement. À Bordeaux ou en visio."
      ctaButton="Demander un devis gratuit"
    />
  );
}
