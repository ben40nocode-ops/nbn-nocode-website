import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase";

// Keepalive Supabase — évite la mise en pause du projet free-tier (pause après ~7j sans requête).
// Déclenché par un cron Vercel quotidien (voir vercel.json → /api/keepalive).
// Fait une requête TRIVIALE (count sans données) sur la table subscribers, juste pour
// "réveiller" la base. Ne renvoie aucune donnée sensible.

export const dynamic = "force-dynamic"; // jamais mis en cache : doit taper la base à chaque appel
export const runtime = "nodejs";

export async function GET(req: Request) {
  // Si CRON_SECRET est défini (Vercel l'injecte en Authorization: Bearer <secret>),
  // on exige qu'il corresponde. Sans secret configuré, l'endpoint reste ouvert
  // (il n'expose rien : juste un ping + un compteur).
  const secret = process.env.CRON_SECRET;
  if (secret) {
    const auth = req.headers.get("authorization");
    if (auth !== `Bearer ${secret}`) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
  }

  try {
    // head:true → renvoie uniquement le count, aucune ligne. Suffit à garder la base active.
    const { count, error } = await getSupabaseAdmin()
      .from("subscribers")
      .select("id", { count: "exact", head: true });

    if (error) {
      console.error("[keepalive] Supabase error:", error.message);
      return NextResponse.json({ ok: false, error: error.message }, { status: 502 });
    }

    return NextResponse.json({ ok: true, pinged: "subscribers", count: count ?? 0 });
  } catch (e) {
    console.error("[keepalive] exception:", e);
    return NextResponse.json({ ok: false, error: "keepalive failed" }, { status: 500 });
  }
}
