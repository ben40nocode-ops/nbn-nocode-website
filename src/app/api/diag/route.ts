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
    // 1) via supabase-js — dump complet de l'erreur
    try {
      const db = createClient(url, key, { auth: { persistSession: false } });
      const { error, count } = await db
        .from("subscribers")
        .select("*", { count: "exact", head: true });
      diag.viaClient = error
        ? { full: JSON.parse(JSON.stringify(error, Object.getOwnPropertyNames(error))) }
        : { ok: true, count };
    } catch (e) {
      diag.viaClient = { threw: e instanceof Error ? `${e.name}: ${e.message}` : String(e) };
    }

    // 2) appel REST brut — statut HTTP + corps
    try {
      const res = await fetch(`${url}/rest/v1/subscribers?select=count`, {
        headers: { apikey: key, Authorization: `Bearer ${key}` },
      });
      const body = await res.text();
      diag.viaRest = { status: res.status, statusText: res.statusText, body: body.slice(0, 300) };
    } catch (e) {
      diag.viaRest = { fetchThrew: e instanceof Error ? `${e.name}: ${e.message}` : String(e) };
    }
  }

  return NextResponse.json(diag);
}
