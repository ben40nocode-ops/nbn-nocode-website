# Migration abonnés : Airtable → Supabase

Le stockage des abonnés (espace client + Stripe) passe d'Airtable à **Supabase** (projet perso NBN IA).
Le blog, lui, est déjà 100 % statique — plus aucun Airtable dans le code.

## Ce qui a changé côté code (déjà fait)

- `src/lib/supabase.ts` — client Supabase serveur (service_role, init paresseuse)
- `src/lib/subscribers.ts` — remplace `src/lib/airtable.ts` (même API : `getSubscriberByUserId`, `getSubscriberByEmail`, `linkUserIdToSubscriber`, `upsertSubscriber`, `updateSubscriberByStripeId`)
- Imports basculés dans : `dashboard/page.tsx`, `dashboard/DashboardClient.tsx`, `api/stripe/webhook/route.ts`, `api/stripe/portal/route.ts`
- `src/lib/airtable.ts` + dépendance `airtable` supprimés

## Étapes à faire côté Benjamin

### 1. Créer la table
Dashboard Supabase (projet perso **NBN-IA**) → **SQL Editor** → coller le contenu de
[`supabase/migrations/0001_subscribers.sql`](../supabase/migrations/0001_subscribers.sql) → **Run**.

### 2. Récupérer les 2 clés
**Project Settings → API** :
- **Project URL** → `SUPABASE_URL`
- **service_role** (clé secrète) → `SUPABASE_SERVICE_ROLE_KEY`

### 3. Configurer les variables d'environnement
En local, ajouter dans `.env.local` :
```
SUPABASE_URL=...
SUPABASE_SERVICE_ROLE_KEY=...
```
Sur Vercel (projet `nbn-ia`) → Settings → Environment Variables → ajouter les deux
en **Production** (et Preview si besoin), puis redéployer.
⚠️ La clé `service_role` est secrète : ne jamais la préfixer `NEXT_PUBLIC_`.

### 4. Reprendre les abonnés existants (optionnel)
L'API Airtable est bloquée (quota), mais **l'export CSV depuis l'interface Airtable marche**.
- Exporter la table abonnés en CSV depuis Airtable
- Dans Supabase → Table Editor → `subscribers` → **Insert → Import from CSV**
  (mapper les colonnes vers `user_id`, `email`, `plan`, `stripe_subscription_id`,
  `stripe_customer_id`, `status`, `created_at`)

### 5. Nettoyage (une fois validé)
Les variables `AIRTABLE_*` peuvent être retirées de Vercel (plus utilisées par le code).

## Variables d'environnement Airtable devenues inutiles
`AIRTABLE_PAT`, `AIRTABLE_BASE_ID`, `AIRTABLE_TABLE_ID`, `AIRTABLE_BLOG_TABLE_ID`
