import { auth, currentUser } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const PRICE_MAP: Record<string, string | undefined> = {
  core: process.env.STRIPE_PRICE_CORE,
  business: process.env.STRIPE_PRICE_BUSINESS,
  fullstack: process.env.STRIPE_PRICE_FULLSTACK,
};

export async function GET(req: NextRequest) {
  const { userId } = await auth();
  if (!userId) {
    const signInUrl = new URL("/sign-in", req.url);
    signInUrl.searchParams.set("redirect_url", "/dashboard");
    return NextResponse.redirect(signInUrl);
  }

  const plan = req.nextUrl.searchParams.get("plan");
  const priceId = plan ? PRICE_MAP[plan] : undefined;
  if (!priceId) return NextResponse.redirect(new URL("/dashboard", req.url));

  const clerkUser = await currentUser();
  const email = clerkUser?.emailAddresses?.[0]?.emailAddress;

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2026-03-25.dahlia",
  });

  const origin = req.nextUrl.origin;

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      payment_method_types: ["card"],
      line_items: [{ price: priceId, quantity: 1 }],
      client_reference_id: userId,
      customer_email: email,
      metadata: { userId },
      subscription_data: { metadata: { userId } },
      success_url: `${origin}/dashboard?success=1`,
      cancel_url: `${origin}/dashboard`,
    });

    return NextResponse.redirect(session.url!);
  } catch (err) {
    console.error("[checkout] Stripe error:", err);
    return NextResponse.redirect(new URL("/dashboard?error=stripe", req.url));
  }
}
