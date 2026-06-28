import Airtable from "airtable";

// requestTimeout : échec rapide plutôt qu'une attente bloquante si Airtable ne répond pas.
const base = new Airtable({
  apiKey: process.env.AIRTABLE_PAT!,
  requestTimeout: 15000,
}).base(process.env.AIRTABLE_BASE_ID!);

const table = base(process.env.AIRTABLE_TABLE_ID!);

function escapeAirtable(value: string): string {
  return value.replace(/"/g, '\\"');
}

export interface Subscriber {
  userId: string;
  email: string;
  plan: string;
  stripeSubscriptionId: string;
  stripeCustomerId: string;
  status: "invited" | "active" | "cancelled" | "past_due";
  createdAt: string;
}

export async function createSubscriber(data: Subscriber) {
  return table.create({
    userId: data.userId,
    email: data.email,
    plan: data.plan,
    stripeSubscriptionId: data.stripeSubscriptionId,
    stripeCustomerId: data.stripeCustomerId,
    status: data.status,
    createdAt: data.createdAt,
  });
}

export async function upsertSubscriber(data: Subscriber) {
  const records = await table
    .select({
      filterByFormula: `{userId} = "${escapeAirtable(data.userId)}"`,
      maxRecords: 1,
    })
    .firstPage();

  if (records.length > 0) {
    return table.update(records[0].id, {
      email: data.email,
      plan: data.plan,
      stripeSubscriptionId: data.stripeSubscriptionId,
      stripeCustomerId: data.stripeCustomerId,
      status: data.status,
    });
  }

  return createSubscriber(data);
}

export async function getSubscriberByUserId(userId: string) {
  const records = await table
    .select({
      filterByFormula: `{userId} = "${escapeAirtable(userId)}"`,
      maxRecords: 1,
    })
    .firstPage();
  if (!records.length) return null;
  return records[0].fields as unknown as Subscriber;
}

export async function updateSubscriberByStripeId(
  stripeSubscriptionId: string,
  fields: Partial<Pick<Subscriber, "status" | "plan">>
) {
  const records = await table
    .select({
      filterByFormula: `{stripeSubscriptionId} = "${escapeAirtable(stripeSubscriptionId)}"`,
      maxRecords: 1,
    })
    .firstPage();
  if (!records.length) return;
  await table.update(records[0].id, fields);
}

export async function updateSubscriberStatus(
  stripeSubscriptionId: string,
  status: "active" | "cancelled"
) {
  return updateSubscriberByStripeId(stripeSubscriptionId, { status });
}

export async function getSubscriberByEmail(email: string) {
  const records = await table
    .select({
      filterByFormula: `{email} = "${escapeAirtable(email)}"`,
      maxRecords: 1,
    })
    .firstPage();
  if (!records.length) return null;
  return { id: records[0].id, fields: records[0].fields as unknown as Subscriber };
}

export async function linkUserIdToSubscriber(recordId: string, userId: string) {
  return table.update(recordId, { userId });
}
