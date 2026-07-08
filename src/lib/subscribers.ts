import { getSupabaseAdmin } from "@/lib/supabase";

// Couche d'accès aux abonnés (espace client + Stripe), sur Supabase (projet perso NBN IA).
// Remplace l'ancienne intégration Airtable (src/lib/airtable.ts) — même API publique,
// pour que dashboard / webhook Stripe / portail fonctionnent sans autre changement.

const TABLE = "subscribers";

export interface Subscriber {
  userId: string;
  email: string;
  plan: string;
  stripeSubscriptionId: string;
  stripeCustomerId: string;
  status: "invited" | "active" | "cancelled" | "past_due";
  createdAt: string;
}

// Ligne telle que stockée en base (snake_case).
interface SubscriberRow {
  id: string;
  user_id: string | null;
  email: string;
  plan: string | null;
  stripe_subscription_id: string | null;
  stripe_customer_id: string | null;
  status: string;
  created_at: string;
}

function rowToSubscriber(row: SubscriberRow): Subscriber {
  return {
    userId: row.user_id ?? "",
    email: row.email,
    plan: row.plan ?? "",
    stripeSubscriptionId: row.stripe_subscription_id ?? "",
    stripeCustomerId: row.stripe_customer_id ?? "",
    status: (row.status as Subscriber["status"]) ?? "invited",
    createdAt: row.created_at,
  };
}

function subscriberToRow(data: Subscriber): Omit<SubscriberRow, "id"> {
  return {
    user_id: data.userId || null,
    email: data.email,
    plan: data.plan || null,
    stripe_subscription_id: data.stripeSubscriptionId || null,
    stripe_customer_id: data.stripeCustomerId || null,
    status: data.status,
    created_at: data.createdAt,
  };
}

export async function createSubscriber(data: Subscriber) {
  const { error } = await getSupabaseAdmin().from(TABLE).insert(subscriberToRow(data));
  if (error) throw new Error(`[subscribers] createSubscriber: ${error.message}`);
}

// Crée si absent (par userId), sinon met à jour. Utilisé par le webhook Stripe.
export async function upsertSubscriber(data: Subscriber) {
  const db = getSupabaseAdmin();

  const { data: existing, error: selErr } = await db
    .from(TABLE)
    .select("id")
    .eq("user_id", data.userId)
    .limit(1)
    .maybeSingle();
  if (selErr) throw new Error(`[subscribers] upsertSubscriber(select): ${selErr.message}`);

  if (existing) {
    const { error } = await db
      .from(TABLE)
      .update({
        email: data.email,
        plan: data.plan || null,
        stripe_subscription_id: data.stripeSubscriptionId || null,
        stripe_customer_id: data.stripeCustomerId || null,
        status: data.status,
      })
      .eq("id", existing.id);
    if (error) throw new Error(`[subscribers] upsertSubscriber(update): ${error.message}`);
    return;
  }

  return createSubscriber(data);
}

// Crée/met à jour une ligne à partir de l'EMAIL, sans user_id Clerk.
// Utilisé par le webhook quand TU démarres le plan côté Stripe : le client n'a pas
// encore de compte, il sera rattaché plus tard par email à sa 1re connexion.
// Ne touche jamais un user_id déjà présent. Renvoie { created } pour décider l'invitation.
export async function upsertSubscriberByEmail(
  data: Omit<Subscriber, "userId">
): Promise<{ created: boolean }> {
  const db = getSupabaseAdmin();

  const { data: existing, error: selErr } = await db
    .from(TABLE)
    .select("id")
    .eq("email", data.email)
    .limit(1)
    .maybeSingle();
  if (selErr) throw new Error(`[subscribers] upsertSubscriberByEmail(select): ${selErr.message}`);

  if (existing) {
    const { error } = await db
      .from(TABLE)
      .update({
        plan: data.plan || null,
        stripe_subscription_id: data.stripeSubscriptionId || null,
        stripe_customer_id: data.stripeCustomerId || null,
        status: data.status,
      })
      .eq("id", existing.id);
    if (error) throw new Error(`[subscribers] upsertSubscriberByEmail(update): ${error.message}`);
    return { created: false };
  }

  const { error } = await db.from(TABLE).insert({
    user_id: null,
    email: data.email,
    plan: data.plan || null,
    stripe_subscription_id: data.stripeSubscriptionId || null,
    stripe_customer_id: data.stripeCustomerId || null,
    status: data.status,
    created_at: data.createdAt,
  });
  if (error) throw new Error(`[subscribers] upsertSubscriberByEmail(insert): ${error.message}`);
  return { created: true };
}

export async function getSubscriberByUserId(userId: string): Promise<Subscriber | null> {
  const { data, error } = await getSupabaseAdmin()
    .from(TABLE)
    .select("*")
    .eq("user_id", userId)
    .limit(1)
    .maybeSingle();
  if (error) throw new Error(`[subscribers] getSubscriberByUserId: ${error.message}`);
  return data ? rowToSubscriber(data as SubscriberRow) : null;
}

export async function updateSubscriberByStripeId(
  stripeSubscriptionId: string,
  fields: Partial<Pick<Subscriber, "status" | "plan">>
) {
  const patch: Record<string, string> = {};
  if (fields.status) patch.status = fields.status;
  if (fields.plan) patch.plan = fields.plan;
  if (Object.keys(patch).length === 0) return;

  const { error } = await getSupabaseAdmin()
    .from(TABLE)
    .update(patch)
    .eq("stripe_subscription_id", stripeSubscriptionId);
  if (error) throw new Error(`[subscribers] updateSubscriberByStripeId: ${error.message}`);
}

export async function updateSubscriberStatus(
  stripeSubscriptionId: string,
  status: "active" | "cancelled"
) {
  return updateSubscriberByStripeId(stripeSubscriptionId, { status });
}

// Renvoie { id, fields } : l'id de la ligne sert ensuite à linkUserIdToSubscriber.
export async function getSubscriberByEmail(email: string) {
  const { data, error } = await getSupabaseAdmin()
    .from(TABLE)
    .select("*")
    .eq("email", email)
    .limit(1)
    .maybeSingle();
  if (error) throw new Error(`[subscribers] getSubscriberByEmail: ${error.message}`);
  if (!data) return null;
  const row = data as SubscriberRow;
  return { id: row.id, fields: rowToSubscriber(row) };
}

export async function linkUserIdToSubscriber(recordId: string, userId: string) {
  const { error } = await getSupabaseAdmin()
    .from(TABLE)
    .update({ user_id: userId })
    .eq("id", recordId);
  if (error) throw new Error(`[subscribers] linkUserIdToSubscriber: ${error.message}`);
}
