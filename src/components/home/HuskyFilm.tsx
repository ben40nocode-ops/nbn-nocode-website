"use client";

import { useEffect, useRef } from "react";
import { useDive } from "@/components/DiveTransition";
import "./film.css";

const CALENDLY = "https://calendly.com/ben40nocode/1h";

type Lang = "fr" | "en";

const COPY = {
  fr: {
    cue: "Scrollez pour entrer",
    a0eye: "Automatisations IA · Applications · Sites web",
    a0h: ["Votre PME tourne", "en pilote automatique."],
    a0sub: "On câble l'IA à vos outils et à votre équipe. Les tâches répétitives disparaissent — vous gardez la main, la machine fait le reste.",
    a1eye: "Aujourd'hui", a1h: "Tout repose sur vous.",
    a1p: "Relancer, ressaisir, rappeler, répondre. Encore. Chaque jour.",
    a1tasks: ["Relancer le devis #4021", "Rappeler le client", "Ressaisir la facture", "Répondre au 15e mail", "Confirmer le RDV", "Mettre à jour le CRM"],
    a2eye: "Ce que je construis · 1 / 3", a2h: "J'automatise le répétitif.", a2core: "Agent IA",
    a2p: "Un agent branché à vos outils. Il relance, ressaisit, répond — jour et nuit. Vous validez, il exécute.",
    a3eye: "Ce que je construis · 2 / 3", a3h: "Je construis votre logiciel.", a3url: "app.votre-entreprise.fr",
    a3side: ["Tableau de bord", "Clients", "Devis & factures", "Planning", "Stock"],
    a3cards: [["Vos clients", "Fiches, historique, relances — au même endroit."], ["Devis & factures", "Générés, envoyés, suivis tout seuls."], ["Planning", "Rendez-vous et équipe, sans double-booking."], ["Alertes", "Le bon rappel, au bon moment."]],
    a3pill: "● en service",
    a3p: ["Une application ", "sur mesure", ", taillée pour votre métier — pas un logiciel générique dans lequel vous devez rentrer. Vous pilotez, je fais évoluer."],
    a4eye: "Ce que je construis · 3 / 3", a4h: "Je crée votre site.", a4url: "https://votre-entreprise.fr",
    a4pnav: ["Votre marque", "Offres", "À propos", "Contact"],
    a4heroh: "Un site qui vend, pas une brochure.", a4herop: "Rapide, clair, pensé pour transformer vos visiteurs en clients.", a4cta: "Prendre rendez-vous",
    a4grid: [["Rapide", "Chargé en un clin d'œil."], ["Clair", "Le visiteur sait quoi faire."], ["Trouvable", "Optimisé pour Google."]],
    a4p: "Vitrine, e-commerce ou prise de rendez-vous — rapide, soigné, pensé conversion et référencement.",
    a5h: "Par où on commence ?", a5p: "Un échange de 30 minutes avec Benjamin. On repère le premier système qui vous fait gagner du temps.",
    a5book: "Réserver un appel", a5home: "↑ Revenir à l'accueil",
    nav: [["À propos", "/a-propos"], ["Solutions", "/solutions"], ["Réalisations", "/realisations"], ["Tarifs", "/tarifs"], ["Blog", "/blog"]],
  },
  en: {
    cue: "Scroll to enter",
    a0eye: "AI Automation · Apps · Websites",
    a0h: ["Your business runs", "on autopilot."],
    a0sub: "We wire AI into your tools and your team. Repetitive tasks disappear — you stay in control, the machine does the rest.",
    a1eye: "Today", a1h: "It all rests on you.",
    a1p: "Follow up, re-enter, call back, reply. Again. Every day.",
    a1tasks: ["Chase quote #4021", "Call the client back", "Re-enter the invoice", "Reply to the 15th email", "Confirm the appointment", "Update the CRM"],
    a2eye: "What I build · 1 / 3", a2h: "I automate the repetitive.", a2core: "AI Agent",
    a2p: "An agent wired into your tools. It follows up, re-enters, replies — day and night. You approve, it executes.",
    a3eye: "What I build · 2 / 3", a3h: "I build your software.", a3url: "app.your-company.com",
    a3side: ["Dashboard", "Clients", "Quotes & invoices", "Schedule", "Stock"],
    a3cards: [["Your clients", "Records, history, follow-ups — all in one place."], ["Quotes & invoices", "Generated, sent, tracked on their own."], ["Schedule", "Appointments and team, no double-booking."], ["Alerts", "The right reminder, at the right time."]],
    a3pill: "● live",
    a3p: ["A ", "custom", " application, tailored to your trade — not a generic tool you have to fit into. You drive, I evolve it."],
    a4eye: "What I build · 3 / 3", a4h: "I build your website.", a4url: "https://your-company.com",
    a4pnav: ["Your brand", "Offers", "About", "Contact"],
    a4heroh: "A site that sells, not a brochure.", a4herop: "Fast, clear, built to turn visitors into clients.", a4cta: "Book a call",
    a4grid: [["Fast", "Loads in a blink."], ["Clear", "Visitors know what to do."], ["Findable", "Optimised for Google."]],
    a4p: "Showcase, e-commerce or booking — fast, polished, built for conversion and search.",
    a5h: "Where do we start?", a5p: "A 30-minute chat with Benjamin. We spot the first system that saves you time.",
    a5book: "Book a call", a5home: "↑ Back to top",
    nav: [["About", "/en/about"], ["Solutions", "/en/solutions"], ["Work", "/en/work"], ["Pricing", "/tarifs"], ["Blog", "/en/blog"]],
  },
} as const;

/**
 * Film d'accueil scroll-zoom (porté du proto husky-film.html), bilingue.
 * La Navbar, le Footer et le ChatWidget viennent du layout — ce composant
 * ne rend QUE le film (warp + 6 actes + moteur de scroll). Tout est scopé .hfilm.
 */
export function HuskyFilm({ lang = "fr" }: { lang?: Lang }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const t = COPY[lang];
  const dive = useDive();

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const stations = Array.from(root.querySelectorAll<HTMLElement>(".station"));
    const N = stations.length;
    const LAST = N - 1;
    const rings = root.querySelector<HTMLElement>(".rings");
    const grade = root.querySelector<HTMLElement>(".grade");
    const cue = root.querySelector<HTMLElement>(".cue");
    const warp = root.querySelector<HTMLElement>(".warp");
    const dotsWrap = root.querySelector<HTMLElement>(".dots");
    const streaks = root.querySelector<HTMLElement>(".streaks");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const dots: HTMLButtonElement[] = [];
    if (dotsWrap) {
      for (let i = 0; i < N; i++) {
        const b = document.createElement("button");
        b.className = "dot";
        b.setAttribute("aria-label", "Act " + (i + 1));
        b.addEventListener("click", () => flyTo(i));
        dotsWrap.appendChild(b);
        dots.push(b);
      }
    }
    if (streaks) {
      for (let s = 0; s < 20; s++) {
        const el = document.createElement("i");
        el.style.setProperty("--a", s * 18 + "deg");
        el.style.animationDelay = s * 0.03 + "s";
        streaks.appendChild(el);
      }
    }

    const clamp = (v: number, a: number, b: number) => Math.max(a, Math.min(b, v));
    const BASE = 2.5;
    const STOPS = [
      [245, 244, 241, 0], [64, 80, 110, 0.16], [255, 110, 40, 0.1],
      [255, 140, 70, 0.05], [255, 255, 255, 0.03], [14, 17, 22, 0.42],
    ];
    const grd = (z: number) => {
      const i = clamp(Math.floor(z), 0, LAST - 1), f = z - i;
      const a = STOPS[i], b = STOPS[Math.min(i + 1, LAST)];
      const r = Math.round(a[0] + (b[0] - a[0]) * f);
      const g = Math.round(a[1] + (b[1] - a[1]) * f);
      const bl = Math.round(a[2] + (b[2] - a[2]) * f);
      const al = (a[3] + (b[3] - a[3]) * f).toFixed(3);
      return `rgba(${r},${g},${bl},${al})`;
    };

    let flyTimer: ReturnType<typeof setTimeout>;
    function flyTo(i: number) {
      i = clamp(i, 0, LAST);
      if (!reduce && streaks) {
        streaks.classList.add("on");
        clearTimeout(flyTimer);
        flyTimer = setTimeout(() => streaks.classList.remove("on"), 850);
      }
      window.scrollTo({ top: i * window.innerHeight, behavior: "smooth" });
    }

    const gotoEls = Array.from(root.querySelectorAll<HTMLElement>("[data-goto]"));
    const gotoHandlers = gotoEls.map((el) => {
      const h = (e: Event) => { e.preventDefault(); flyTo(parseInt(el.getAttribute("data-goto") || "0", 10)); };
      el.addEventListener("click", h);
      return [el, h] as const;
    });

    let raf = 0;
    function render() {
      const z = clamp(window.scrollY / window.innerHeight, 0, LAST);
      if (warp) warp.classList.toggle("film", z > 0.35);
      if (cue) cue.style.opacity = z > 0.5 ? "0" : "1";
      const fr = z - Math.floor(z);
      if (rings) {
        rings.style.transform = "scale(" + (1 + fr * 1.6) + ")";
        rings.style.opacity = (0.5 + 0.3 * Math.sin(fr * Math.PI)).toFixed(3);
      }
      if (grade) grade.style.backgroundColor = grd(z);
      const active = Math.round(z);
      for (let i = 0; i < N; i++) {
        const local = z - i, st = stations[i];
        const op = local <= 0 ? clamp((local + 1.05) / 0.55, 0, 1) : clamp(1 - local / 0.8, 0, 1);
        const isActive = Math.abs(local) < 0.5;
        st.classList.toggle("active", isActive);
        if (op <= 0.008) { st.style.display = "none"; continue; }
        st.style.display = "grid";
        const scale = Math.pow(BASE, local);
        const blur = local < -0.35 ? clamp((-local - 0.35) * 10, 0, 7) : (local > 0.5 ? clamp((local - 0.5) * 13, 0, 8) : 0);
        st.style.opacity = String(op);
        st.style.transform = "scale(" + scale.toFixed(4) + ")";
        st.style.filter = blur ? "blur(" + blur.toFixed(1) + "px)" : "none";
        st.style.zIndex = String(Math.round(local * 1000) + 5000);
        st.style.pointerEvents = Math.abs(local) < 0.4 ? "auto" : "none";
      }
      for (let d = 0; d < N; d++) dots[d]?.classList.toggle("on", d === active);
      raf = requestAnimationFrame(render);
    }
    raf = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(flyTimer);
      gotoHandlers.forEach(([el, h]) => el.removeEventListener("click", h));
      if (dotsWrap) dotsWrap.innerHTML = "";
      if (streaks) streaks.innerHTML = "";
    };
  }, []);

  return (
    <div className="hfilm" ref={rootRef}>
      <div className="warp">
        <div className="deep"><span className="orb a" /><span className="orb b" /><span className="orb c" /></div>
        <div className="rings"><span className="ring" /><span className="ring" /><span className="ring" /><span className="ring" /></div>
        <div className="grade" />

        {/* Acte 0 — Hero */}
        <section className="station" data-i="0"><div className="st-in">
          <div className="eyebrow">{t.a0eye}</div>
          <h1 className="h1" style={{ marginTop: 16 }}>{t.a0h[0]}<br /><span className="hl">{t.a0h[1]}</span></h1>
          <p className="sub">{t.a0sub}</p>
        </div></section>

        {/* Acte 1 — Le problème */}
        <section className="station" data-i="1"><div className="st-in">
          <div className="eyebrow" style={{ color: "#c9553e" }}>{t.a1eye}</div>
          <h2 className="act-h2" style={{ marginTop: 12 }}>{t.a1h}</h2>
          <p className="act-p">{t.a1p}</p>
          <div className="chaos">
            {t.a1tasks.map((task, i) => <div key={i} className={"task t" + (i + 1)}>{task}</div>)}
          </div>
        </div></section>

        {/* Acte 2 — Pilier 1 : automatisation */}
        <section className="station" data-i="2"><div className="st-in">
          <div className="eyebrow">{t.a2eye}</div>
          <h2 className="act-h2" style={{ marginTop: 12 }}>{t.a2h}</h2>
          <div className="neural">
            <svg className="nsvg" viewBox="0 0 480 300" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
              <g className="field">
                <g className="nlines">
                  <line className="nl" x1="240" y1="150" x2="72" y2="58" />
                  <line className="nl" x1="240" y1="150" x2="408" y2="62" />
                  <line className="nl" x1="240" y1="150" x2="52" y2="168" />
                  <line className="nl" x1="240" y1="150" x2="428" y2="182" />
                  <line className="nl" x1="240" y1="150" x2="158" y2="258" />
                  <line className="nl" x1="240" y1="150" x2="330" y2="252" />
                  <line className="nl" x1="240" y1="150" x2="240" y2="44" />
                </g>
                <circle className="sig" r="3.4"><animateMotion dur="2.3s" repeatCount="indefinite" path="M72,58 L240,150" /></circle>
                <circle className="sig" r="3.4"><animateMotion dur="2.7s" repeatCount="indefinite" begin="0.5s" path="M428,182 L240,150" /></circle>
                <circle className="sig" r="3.4"><animateMotion dur="2.5s" repeatCount="indefinite" begin="0.9s" path="M158,258 L240,150" /></circle>
                <circle className="sig" r="3.4"><animateMotion dur="2.9s" repeatCount="indefinite" begin="1.3s" path="M240,44 L240,150" /></circle>
                <circle className="sig" r="3.4"><animateMotion dur="2.6s" repeatCount="indefinite" begin="0.3s" path="M408,62 L240,150" /></circle>
                <g className="nnodes">
                  <circle className="nn d1" cx="72" cy="58" r="7" />
                  <circle className="nn d2" cx="408" cy="62" r="6" />
                  <circle className="nn d3" cx="52" cy="168" r="6" />
                  <circle className="nn d1" cx="428" cy="182" r="7" />
                  <circle className="nn d2" cx="158" cy="258" r="6" />
                  <circle className="nn d3" cx="330" cy="252" r="7" />
                  <circle className="nn d2 b" cx="240" cy="44" r="6" />
                </g>
              </g>
            </svg>
            <div className="ncore"><span className="dot" />{t.a2core}</div>
          </div>
          <p className="act-p" style={{ marginTop: 2 }}>{t.a2p}</p>
        </div></section>

        {/* Acte 3 — Pilier 2 : logiciel sur mesure */}
        <section className="station" data-i="3"><div className="st-in">
          <div className="eyebrow">{t.a3eye}</div>
          <h2 className="act-h2" style={{ marginTop: 10, marginBottom: 20 }}>{t.a3h}</h2>
          <div className="mock appwin">
            <div className="top"><span className="dotc" /><span className="dotc" /><span className="dotc" /><span className="url">{t.a3url}</span></div>
            <div className="body">
              <div className="side">
                {t.a3side.map((it, i) => <div key={i} className={"item" + (i === 0 ? " on" : "")}><span className="ic" />{it}</div>)}
              </div>
              <div className="main">
                {t.a3cards.map(([title, m], i) => (
                  <div key={i} className="fcard"><div className="t">{title}</div><div className="m">{m}</div><span className="pill">{t.a3pill}</span></div>
                ))}
              </div>
            </div>
          </div>
          <p className="act-p">{t.a3p[0]}<b>{t.a3p[1]}</b>{t.a3p[2]}</p>
        </div></section>

        {/* Acte 4 — Pilier 3 : site web */}
        <section className="station" data-i="4"><div className="st-in">
          <div className="eyebrow">{t.a4eye}</div>
          <h2 className="act-h2" style={{ marginTop: 10, marginBottom: 20 }}>{t.a4h}</h2>
          <div className="mock browserwin">
            <div className="top"><span className="dotc" /><span className="dotc" /><span className="dotc" /><span className="url">{t.a4url}</span></div>
            <div className="body"><div className="page">
              <div className="pnav"><span className="plogo">{t.a4pnav[0]}</span><span>{t.a4pnav[1]}</span><span>{t.a4pnav[2]}</span><span>{t.a4pnav[3]}</span></div>
              <div className="phero">
                <h4>{t.a4heroh}</h4>
                <p className="pp">{t.a4herop}</p>
                <span className="pcta">{t.a4cta}</span>
              </div>
              <div className="pgrid">
                {t.a4grid.map(([b, i2], i) => <div key={i}><span className="pico" /><b>{b}</b><i>{i2}</i></div>)}
              </div>
            </div></div>
          </div>
          <p className="act-p">{t.a4p}</p>
        </div></section>

        {/* Acte 5 — Contact */}
        <section className="station" data-i="5"><div className="st-in">
          <div className="contact-box">
            <h2>{t.a5h}</h2>
            <p>{t.a5p}</p>
            <div className="row" style={{ justifyContent: "center" }}>
              <a className="btn btn-brand" href={CALENDLY} target="_blank" rel="noopener noreferrer">{t.a5book}</a>
              <a className="btn btn-ghost" data-goto="0" href="#">{t.a5home}</a>
            </div>
            <div className="footnav">
              {t.nav.map(([label, href]) => <a key={href} href={href} onClick={(e) => dive(e, href)}>{label}</a>)}
            </div>
          </div>
        </div></section>
      </div>

      <div className="streaks" />
      <div className="cue"><span className="m" />{t.cue}</div>
      <div className="dots" />
      <div className="spacer" aria-hidden="true" />
    </div>
  );
}
