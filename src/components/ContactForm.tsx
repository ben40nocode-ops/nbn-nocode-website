"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus("sending");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
          website: data.get("website"), // honeypot
        }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) {
        setErrorMsg(json.error ?? "L'envoi a échoué. Réessayez ou écrivez à contact@nbn-ia.fr.");
        setStatus("error");
        return;
      }
      form.reset();
      setStatus("sent");
    } catch {
      setErrorMsg("L'envoi a échoué. Réessayez ou écrivez à contact@nbn-ia.fr.");
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="text-center py-10">
        <p className="text-2xl mb-3">✅</p>
        <p className="text-base font-bold text-gray-900 mb-2">Message envoyé !</p>
        <p className="text-sm text-gray-500">Je vous réponds sous 24h ouvrées.</p>
      </div>
    );
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      {/* Honeypot anti-bot — invisible pour les humains */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <div>
        <label className="block text-xs text-gray-400 mb-2 uppercase tracking-wide font-medium">Nom</label>
        <input
          type="text"
          name="name"
          required
          className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-900 placeholder-gray-300 focus:outline-none focus:border-[#e8632a]/50 transition-colors"
          placeholder="Votre nom"
        />
      </div>
      <div>
        <label className="block text-xs text-gray-400 mb-2 uppercase tracking-wide font-medium">Email</label>
        <input
          type="email"
          name="email"
          required
          className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-900 placeholder-gray-300 focus:outline-none focus:border-[#e8632a]/50 transition-colors"
          placeholder="votre@email.com"
        />
      </div>
      <div>
        <label className="block text-xs text-gray-400 mb-2 uppercase tracking-wide font-medium">Message</label>
        <textarea
          name="message"
          required
          rows={5}
          className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-900 placeholder-gray-300 focus:outline-none focus:border-[#e8632a]/50 transition-colors resize-none"
          placeholder="Décrivez votre projet en quelques lignes..."
        />
      </div>
      {status === "error" && (
        <p className="text-sm text-red-600">{errorMsg}</p>
      )}
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full bg-[#e8632a] hover:bg-[#c4521f] disabled:opacity-60 text-white py-3 rounded-lg text-sm font-semibold transition-colors"
      >
        {status === "sending" ? "Envoi en cours…" : "Envoyer le message"}
      </button>
    </form>
  );
}
