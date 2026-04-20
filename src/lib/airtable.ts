import Airtable from "airtable";

const base = new Airtable({ apiKey: process.env.AIRTABLE_PAT }).base(
  process.env.AIRTABLE_BASE_ID!
);

const table = base(process.env.AIRTABLE_TABLE_ID!);

export interface Subscriber {
  userId: string;
  email: string;
  plan: string;
  stripeSubscriptionId: string;
  stripeCustomerId: string;
  status: "active" | "cancelled";
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

export async function getSubscriberByUserId(userId: string) {
  const records = await table
    .select({ filterByFormula: `{userId} = "${userId}"`, maxRecords: 1 })
    .firstPage();
  if (!records.length) return null;
  return records[0].fields as unknown as Subscriber;
}

export async function updateSubscriberStatus(
  stripeSubscriptionId: string,
  status: "active" | "cancelled"
) {
  const records = await table
    .select({
      filterByFormula: `{stripeSubscriptionId} = "${stripeSubscriptionId}"`,
      maxRecords: 1,
    })
    .firstPage();
  if (!records.length) return;
  await table.update(records[0].id, { status });
}
