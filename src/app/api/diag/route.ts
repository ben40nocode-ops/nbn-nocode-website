import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

// ROUTE DE DIAGNOSTIC TEMPORAIRE — à supprimer après debug.
// Ne renvoie AUCUN secret (seulement présence + longueur + préfixe des vars).
export async function GET(req: NextRequest) {
  if (req.nextUrl.searchParams.get("token") !== "nbndiag2026") {
    return NextResponse.json({ error: "forbidden" }, { status: 403 });
  }

  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

  const diag: Record<string, unknown> = {
    hasUrl: !!url,
    urlHost: url ? (() => { try { return new URL(url).host; } catch { return "INVALID_URL"; } })() : null,
    hasKey: !!key,
    keyLen: key ? key.length : 0,
    keyPrefix: key ? key.slice(0, 6) : null,
  };

  if (url && key) {
    try {
      const db = createClient(url, key, { auth: { persistSession: false } });
      const { error, count } = await db
        .from("subscribers")
        .select("*", { count: "exact", head: true });
      diag.query = error
        ? { error: error.message, code: error.code, details: error.details, hint: error.hint }
        : { ok: true, count };
    } catch (e) {
      diag.query = { threw: e instanceof Error ? e.message : String(e) };
    }
  }

  return NextResponse.json(diag);
}
