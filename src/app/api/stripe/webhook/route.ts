import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { upsertSubscriber, updateSubscriberByStripeId } from "@/lib/subscribers";

const PLAN_MAP: Record<string, string> = {
  [process.env.STRIPE_PRICE_CORE!]: "core",
  [process.env.STRIPE_PRICE_BUSINESS!]: "business",
  [process.env.STRIPE_PRICE_FULLSTACK!]: "fullstack",
};

export async function POST(req: NextRequest) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2026-03-25.dahlia",
  });

  const body = await req.text();
  const sig = req.headers.get("stripe-signature");
  if (!sig) return NextResponse.json({ error: "Signature manquante" }, { status: 400 });

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET!);
  } catch {
    return NextResponse.json({ error: "Webhook invalide" }, { status: 400 });
  }

  try {
    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object as Stripe.Checkout.Session;
        const userId = session.metadata?.userId ?? session.client_reference_id;
        if (!userId) {
          console.error("[webhook] No userId in session metadata");
          break;
        }

        const subscription = await stripe.subscriptions.retrieve(session.subscription as string);
        const priceId = subscription.items.data[0]?.price.id;
        const plan = PLAN_MAP[priceId];
        if (!plan) {
          console.error("[webhook] Unknown priceId:", priceId);
          break;
        }

        await upsertSubscriber({
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

      case "customer.subscription.updated": {
        const sub = event.data.object as Stripe.Subscription;
        const priceId = sub.items.data[0]?.price.id;
        const plan = PLAN_MAP[priceId];
        const stripeStatus = sub.status;

        let status: "active" | "cancelled" | "past_due" = "active";
        if (stripeStatus === "canceled") status = "cancelled";
        else if (stripeStatus === "past_due" || stripeStatus === "unpaid") status = "past_due";

        await updateSubscriberByStripeId(sub.id, { status, ...(plan ? { plan } : {}) });
        break;
      }

      case "invoice.payment_failed": {
        const invoice = event.data.object as Stripe.Invoice & { subscription?: string | { id: string } | null };
        const subId = typeof invoice.subscription === "string" ? invoice.subscription : (invoice.subscription as { id: string } | null | undefined)?.id;
        if (subId) {
          await updateSubscriberByStripeId(subId, { status: "past_due" });
        }
        break;
      }

      case "customer.subscription.deleted": {
        const sub = event.data.object as Stripe.Subscription;
        await updateSubscriberByStripeId(sub.id, { status: "cancelled" });
        break;
      }
    }
  } catch (err) {
    console.error("[webhook] Handler error:", err);
    // Still return 200 so Stripe doesn't retry endlessly on logic errors
    return NextResponse.json({ received: true, warning: "handler error logged" });
  }

  return NextResponse.json({ received: true });
}
