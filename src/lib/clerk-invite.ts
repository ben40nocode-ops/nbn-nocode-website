import { clerkClient } from "@clerk/nextjs/server";

// URL du site (l'invitation Clerk renvoie le client vers /sign-up pour créer son accès).
const SITE_URL = process.env.NEXT_PUBLIC_APP_URL ?? "https://nbn-ia.fr";

// Envoie une invitation Clerk au client pour qu'il crée son accès à l'espace client.
// Tolérant : si le client a déjà un compte ou une invitation en attente, on ignore
// silencieusement (jamais bloquant pour le webhook Stripe).
export async function inviteClient(email: string): Promise<void> {
  try {
    const client = await clerkClient();
    await client.invitations.createInvitation({
      emailAddress: email,
      redirectUrl: `${SITE_URL}/sign-up`,
      ignoreExisting: true,
    });
  } catch (err) {
    console.error("[clerk-invite] invitation non envoyée pour", email, err);
  }
}
