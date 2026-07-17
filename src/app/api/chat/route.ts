import { NextRequest } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import { buildSystemPrompt } from "@/lib/chatbot-knowledge";

// Chatbot PUBLIC de nbn-ia.fr (FAQ, V1). Réponses en streaming.
// Contrairement au chatbot interne de la Toolbox, celui-ci est exposé à tous :
// -> rate-limit par IP, longueurs bornées, échec propre si la clé n'est pas configurée.
export const maxDuration = 30;

const MODEL = "claude-haiku-4-5-20251001";
const MAX_HISTORY = 10; // borne le coût
const MAX_LEN = 1000; // longueur max d'un message visiteur

type ChatMessage = { role: "user" | "assistant"; content: string };

// --- Rate-limit simple en mémoire (best-effort ; par instance serverless). ---
// Objectif : bloquer un abus grossier, pas une protection forte. Pour du costaud,
// il faudrait un store partagé (KV/Redis). Suffisant pour un widget de site vitrine.
const WINDOW_MS = 60_000;
const MAX_REQ_PER_WINDOW = 12;
const hits = new Map<string, number[]>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const arr = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  arr.push(now);
  hits.set(ip, arr);
  if (hits.size > 5000) hits.clear(); // garde-fou mémoire
  return arr.length > MAX_REQ_PER_WINDOW;
}

function sanitize(messages: unknown): ChatMessage[] | null {
  if (!Array.isArray(messages)) return null;
  const cleaned: ChatMessage[] = [];
  for (const m of messages) {
    if (!m || typeof m !== "object") continue;
    const role = (m as ChatMessage).role;
    const content = (m as ChatMessage).content;
    if ((role !== "user" && role !== "assistant") || typeof content !== "string") continue;
    const text = content.trim().slice(0, MAX_LEN);
    if (text) cleaned.push({ role, content: text });
  }
  const trimmed = cleaned.slice(-MAX_HISTORY);
  if (trimmed.length === 0 || trimmed[trimmed.length - 1].role !== "user") return null;
  return trimmed;
}

export async function POST(req: NextRequest) {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    // Pas de clé configurée : on ne plante pas, on répond proprement.
    return new Response(
      "Le chat n'est pas encore activé. Écris-moi via le formulaire de contact ou réserve un appel : https://calendly.com/ben40nocode/1h",
      { status: 200, headers: { "Content-Type": "text/plain; charset=utf-8" } }
    );
  }

  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "unknown";
  if (rateLimited(ip)) {
    return new Response("Trop de messages d'un coup. Réessaie dans une minute 🙏", {
      status: 429,
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
  }

  const body = await req.json().catch(() => null);
  const messages = sanitize(body?.messages);
  if (!messages) {
    return new Response(JSON.stringify({ error: "Invalid messages" }), { status: 400 });
  }

  const anthropic = new Anthropic({ apiKey });
  const system = buildSystemPrompt();
  const convo: Anthropic.MessageParam[] = messages.map((m) => ({ role: m.role, content: m.content }));

  const encoder = new TextEncoder();
  const stream = new ReadableStream<Uint8Array>({
    async start(controller) {
      try {
        const claudeStream = anthropic.messages.stream({
          model: MODEL,
          max_tokens: 600,
          system,
          messages: convo,
        });
        claudeStream.on("text", (delta) => controller.enqueue(encoder.encode(delta)));
        await claudeStream.finalMessage();
        controller.close();
      } catch (err) {
        console.error("[chat] stream error", err);
        controller.enqueue(
          encoder.encode("\n\n⚠️ Désolé, une erreur est survenue. Réessaie, ou réserve un appel : https://calendly.com/ben40nocode/1h")
        );
        controller.close();
      }
    },
  });

  return new Response(stream, {
    headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "no-store" },
  });
}
