"use client";

import { useEffect, useRef, useState } from "react";
import { MessageCircle, X, Send, Loader2 } from "lucide-react";

type Msg = { role: "user" | "assistant"; content: string };

const ORANGE = "#e8632a";

const WELCOME =
  "Bonjour 👋 Je suis l'assistant de NBN IA. Je peux vous renseigner sur l'automatisation, les sites web, les tarifs ou la façon de travailler de Benjamin. Posez votre question !";

const SUGGESTIONS = [
  "C'est quoi un agent IA ?",
  "Combien ça coûte ?",
  "Comment se passe un projet ?",
];

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([{ role: "assistant", content: WELCOME }]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  async function send(text: string) {
    const question = text.trim();
    if (!question || busy) return;

    const history = [...messages, { role: "user", content: question } as Msg];
    setMessages([...history, { role: "assistant", content: "" }]);
    setInput("");
    setBusy(true);

    try {
      // On n'envoie pas le message d'accueil (assistant fixe) à l'API.
      const payload = history.filter((m, i) => !(i === 0 && m.role === "assistant"));
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: payload }),
      });

      if (!res.ok && res.status !== 429) {
        // 429 renvoie quand même un texte lisible : on le laisse passer.
        if (!res.body) throw new Error("bad response");
      }
      if (!res.body) throw new Error("no body");

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let acc = "";
      for (;;) {
        const { done, value } = await reader.read();
        if (done) break;
        acc += decoder.decode(value, { stream: true });
        setMessages((prev) => {
          const next = [...prev];
          next[next.length - 1] = { role: "assistant", content: acc };
          return next;
        });
      }
    } catch {
      setMessages((prev) => {
        const next = [...prev];
        next[next.length - 1] = {
          role: "assistant",
          content:
            "⚠️ Impossible de répondre pour le moment. Réessayez, ou réservez un appel : https://calendly.com/ben40nocode/1h",
        };
        return next;
      });
    } finally {
      setBusy(false);
      inputRef.current?.focus();
    }
  }

  return (
    <>
      {!open && (
        <button
          onClick={() => setOpen(true)}
          aria-label="Ouvrir l'assistant NBN IA"
          className="fixed bottom-5 right-5 z-50 flex items-center justify-center rounded-full shadow-lg transition-transform hover:scale-105"
          style={{ width: 56, height: 56, background: ORANGE, color: "#fff" }}
        >
          <MessageCircle size={26} />
        </button>
      )}

      {open && (
        <div
          className="fixed bottom-5 right-5 z-50 flex flex-col rounded-2xl bg-white overflow-hidden"
          style={{
            width: "min(384px, calc(100vw - 2.5rem))",
            height: "min(580px, calc(100vh - 2.5rem))",
            border: "1px solid #f0f0f0",
            boxShadow: "0 20px 50px rgba(0,0,0,0.18)",
          }}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
            <div className="flex items-center gap-2.5">
              <span
                className="flex items-center justify-center rounded-full"
                style={{ width: 32, height: 32, background: ORANGE, color: "#fff" }}
              >
                <MessageCircle size={17} />
              </span>
              <div className="leading-tight">
                <div className="text-sm font-bold text-gray-900">Assistant NBN IA</div>
                <div className="text-[11px] text-gray-400">Réponse en direct · propulsé par Claude</div>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Fermer"
              className="text-gray-400 hover:text-gray-700 transition-colors"
            >
              <X size={18} />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-3 space-y-3 bg-gray-50">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className="max-w-[85%] rounded-2xl px-3.5 py-2 text-sm whitespace-pre-wrap break-words"
                  style={
                    m.role === "user"
                      ? { background: ORANGE, color: "#fff" }
                      : { background: "#fff", color: "#1f2937", border: "1px solid #f0f0f0" }
                  }
                >
                  {m.content ||
                    (busy && i === messages.length - 1 ? (
                      <Loader2 size={15} className="animate-spin" style={{ color: ORANGE }} />
                    ) : (
                      ""
                    ))}
                </div>
              </div>
            ))}

            {messages.length === 1 && (
              <div className="flex flex-wrap gap-2 pt-1">
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s}
                    onClick={() => send(s)}
                    className="text-xs px-3 py-1.5 rounded-full bg-white border border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50 transition-colors"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Saisie */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
            className="flex items-center gap-2 px-3 py-3 border-t border-gray-100 bg-white"
          >
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Votre question…"
              className="flex-1 px-3.5 py-2.5 rounded-full text-sm outline-none bg-gray-50 border border-gray-200 text-gray-900 focus:border-gray-300"
            />
            <button
              type="submit"
              disabled={busy || !input.trim()}
              aria-label="Envoyer"
              className="flex items-center justify-center rounded-full transition disabled:opacity-40"
              style={{ width: 40, height: 40, background: ORANGE, color: "#fff" }}
            >
              {busy ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
            </button>
          </form>
        </div>
      )}
    </>
  );
}
