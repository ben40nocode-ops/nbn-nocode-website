import { createClient, type SupabaseClient } from "@supabase/supabase-js";

// Client Supabase côté SERVEUR uniquement (service_role).
// À utiliser dans les server components / route handlers — jamais exposé au client.
// Les identifiants viennent du projet Supabase PERSO de Benjamin, via variables d'env :
//   - SUPABASE_URL
//   - SUPABASE_SERVICE_ROLE_KEY
// La clé service_role contourne la RLS : ne jamais l'exposer côté navigateur.

let client: SupabaseClient | null = null;

export function getSupabaseAdmin(): SupabaseClient {
  if (client) return client;

  const url = process.env.SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceKey) {
    throw new Error(
      "Supabase non configuré : définis SUPABASE_URL et SUPABASE_SERVICE_ROLE_KEY (projet perso NBN IA) dans .env.local et sur Vercel."
    );
  }

  client = createClient(url, serviceKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
  return client;
}
