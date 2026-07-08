import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { getSubscriberByUserId } from "@/lib/subscribers";

export async function GET(req: NextRequest) {
  const { userId } = await auth();
  if (!userId) {
    return NextResponse.redirect(new URL("/sign-in", req.url));
  }

  const subscriber = await getSubscriberByUserId(userId);
  if (!subscriber?.stripeCustomerId) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2026-03-25.dahlia",
  });

  try {
    const session = await stripe.billingPortal.sessions.create({
      customer: subscriber.stripeCustomerId,
      return_url: `${req.nextUrl.origin}/dashboard`,
    });
    return NextResponse.redirect(session.url);
  } catch (err) {
    console.error("[portal] Stripe error:", err);
    return NextResponse.redirect(new URL("/dashboard?error=portal", req.url));
  }
}
