import { NextResponse } from "next/server";
import { Resend } from "resend";

// Envoi réel des messages du formulaire de contact via Resend.
// Domaine nbn-ia.fr vérifié chez Resend (DKIM/SPF) → expéditeur contact@nbn-ia.fr.
const CONTACT_TO = "ben40nocode@gmail.com";

export async function POST(req: Request) {
  let body: { name?: string; email?: string; message?: string; website?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Requête invalide." }, { status: 400 });
  }

  const name = (body.name ?? "").trim().slice(0, 200);
  const email = (body.email ?? "").trim().slice(0, 200);
  const message = (body.message ?? "").trim().slice(0, 5000);

  // Honeypot anti-bot : champ caché que seuls les bots remplissent.
  if (body.website) return NextResponse.json({ ok: true });

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Tous les champs sont requis." }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Adresse email invalide." }, { status: 400 });
  }

  const apiKey = process.env.RENSEND_API;
  if (!apiKey) {
    console.error("[contact] RENSEND_API manquante");
    return NextResponse.json({ error: "Configuration serveur incomplète." }, { status: 500 });
  }

  const esc = (s: string) =>
    s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: "NBN IA — Formulaire <contact@nbn-ia.fr>",
      to: CONTACT_TO,
      replyTo: email,
      subject: `[nbn-ia.fr] Nouveau message de ${name}`,
      html: `
        <h2>Nouveau message depuis nbn-ia.fr/contact</h2>
        <p><strong>Nom :</strong> ${esc(name)}</p>
        <p><strong>Email :</strong> ${esc(email)}</p>
        <p><strong>Message :</strong></p>
        <p style="white-space:pre-wrap;border-left:3px solid #e8632a;padding-left:12px;">${esc(message)}</p>
      `,
    });
    if (error) {
      console.error("[contact] Resend error:", error);
      return NextResponse.json({ error: "L'envoi a échoué. Réessayez ou écrivez à contact@nbn-ia.fr." }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("[contact] exception:", e);
    return NextResponse.json({ error: "L'envoi a échoué. Réessayez ou écrivez à contact@nbn-ia.fr." }, { status: 502 });
  }
}
