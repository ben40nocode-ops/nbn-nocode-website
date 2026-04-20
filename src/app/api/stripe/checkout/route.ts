import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

const PRICE_MAP: Record<string, string | undefined> = {
  core: process.env.STRIPE_PRICE_CORE,
  business: process.env.STRIPE_PRICE_BUSINESS,
  fullstack: process.env.STRIPE_PRICE_FULLSTACK,
};

export async function POST(req: NextRequest) {
  const { userId } = await auth();
  if (!userId) return NextResponse.json({ error: "Non autorisé" }, { status: 401 });

  const { plan } = await req.json();
  const priceId = PRICE_MAP[plan];
  if (!priceId) return NextResponse.json({ error: "Plan inconnu" }, { status: 400 });

  const session = await stripe.checkout.sessions.create({
    mode: "subscription",
    payment_method_types: ["card"],
    line_items: [{ price: priceId, quantity: 1 }],
    metadata: { userId },
    success_url: `${process.env.NEXT_PUBLIC_APP_URL ?? "https://www.nbn-nocode.fr"}/dashboard?success=1`,
    cancel_url: `${process.env.NEXT_PUBLIC_APP_URL ?? "https://www.nbn-nocode.fr"}/tarifs`,
  });

  return NextResponse.json({ url: session.url });
}
