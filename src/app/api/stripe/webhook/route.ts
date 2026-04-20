import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { createSubscriber, updateSubscriberStatus } from "@/lib/airtable";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

const PLAN_MAP: Record<string, string> = {
  [process.env.STRIPE_PRICE_CORE!]: "core",
  [process.env.STRIPE_PRICE_BUSINESS!]: "business",
  [process.env.STRIPE_PRICE_FULLSTACK!]: "fullstack",
};

export async function POST(req: NextRequest) {
  const body = await req.text();
  const sig = req.headers.get("stripe-signature");
  if (!sig) return NextResponse.json({ error: "Signature manquante" }, { status: 400 });

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET!);
  } catch {
    return NextResponse.json({ error: "Webhook invalide" }, { status: 400 });
  }

  switch (event.type) {
    case "checkout.session.completed": {
      const session = event.data.object as Stripe.Checkout.Session;
      const userId = session.metadata?.userId;
      if (!userId) break;

      const subscription = await stripe.subscriptions.retrieve(session.subscription as string);
      const priceId = subscription.items.data[0]?.price.id;
      const plan = PLAN_MAP[priceId] ?? "core";

      await createSubscriber({
        userId,
        email: session.customer_details?.email ?? "",
        plan,
        stripeSubscriptionId: subscription.id,
        stripeCustomerId: subscription.customer as string,
        status: "active",
        createdAt: new Date().toISOString().split("T")[0],
      });
      break;
    }
    case "customer.subscription.deleted": {
      const sub = event.data.object as Stripe.Subscription;
      await updateSubscriberStatus(sub.id, "cancelled");
      break;
    }
  }

  return NextResponse.json({ received: true });
}
