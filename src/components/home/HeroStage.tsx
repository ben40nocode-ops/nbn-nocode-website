"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

const CALENDLY = "https://calendly.com/ben40nocode/1h";

/**
 * HeroStage — héros animé "refonte 3.0".
 * Deux panneaux s'ouvrent au scroll (portes de machine) et révèlent un schéma
 * qui se dessine tout seul : Votre entreprise → Agent IA NBN → vos outils + votre
 * équipe → heures gagnées. Le motion EST l'histoire produit.
 * 100% présentation : aucune dépendance Clerk/Stripe. Contenu SSR (H1 crawlable).
 */
export function HeroStage() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const track = trackRef.current;
    if (!track) return;
    const q = (s: string) => track.querySelector<HTMLElement>(s);
    const doorL = q(".hs-door.left");
    const doorR = q(".hs-door.right");
    const seam = q(".hs-seam");
    const copy = q(".hs-copy");
    const cue = q(".hs-cue");
    const stage = q(".hs-stage");
    const flow = q(".hs-flow");
    const nodes = Array.from(track.querySelectorAll<HTMLElement>(".hs-node,.hs-note"));
    const nav = document.querySelector(".hs-fixnav") as HTMLElement | null;

    const clamp = (v: number, a: number, b: number) => Math.max(a, Math.min(b, v));
    const smooth = (t: number) => t * t * (3 - 2 * t);

    let raf = 0;
    const frame = () => {
      const vh = window.innerHeight;
      const r = track.getBoundingClientRect();
      const total = track.offsetHeight - vh;
      const p = clamp(-r.top / total, 0, 1);
      if (nav) nav.style.opacity = window.scrollY > 24 ? "1" : "0";

      if (reduce) {
        if (doorL) doorL.style.opacity = "0";
        if (doorR) doorR.style.opacity = "0";
        if (seam) seam.style.opacity = "0";
        if (stage) stage.style.opacity = "1";
        if (flow) flow.style.opacity = "1";
        if (copy) copy.style.opacity = "1";
        nodes.forEach((n) => n.classList.add("on"));
        return;
      }

      const op = smooth(clamp(p / 0.55, 0, 1));
      if (doorL) {
        doorL.style.transform = `translateX(${-op * 62}vw) rotateY(${-op * 20}deg)`;
        doorL.style.opacity = String(clamp(1 - (p - 0.42) / 0.14, 0, 1));
      }
      if (doorR) {
        doorR.style.transform = `translateX(${op * 62}vw) rotateY(${op * 20}deg)`;
        doorR.style.opacity = String(clamp(1 - (p - 0.42) / 0.14, 0, 1));
      }
      if (seam) seam.style.opacity = String(clamp(1 - p / 0.16, 0, 1));

      const cp = clamp(p / 0.32, 0, 1);
      if (copy) {
        copy.style.opacity = String(1 - cp);
        copy.style.transform = `translateY(${-cp * 64}px)`;
      }
      if (cue) cue.style.opacity = String(1 - clamp(p / 0.12, 0, 1));
      if (stage) stage.style.opacity = String(smooth(clamp((p - 0.26) / 0.22, 0, 1)));
      if (flow) flow.style.opacity = String(smooth(clamp((p - 0.36) / 0.16, 0, 1)));
      nodes.forEach((n) => {
        const th = parseFloat(n.dataset.th || "1");
        if (p >= th) n.classList.add("on");
        else n.classList.remove("on");
      });
      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className="hs-scope" ref={trackRef}>
      <style>{CSS}</style>
      <div className="hs-track">
        <div className="hs-hero">
          {/* stage + schéma révélés derrière les portes */}
          <div className="hs-stage" />
          <div className="hs-flow">
            <svg className="hs-wires" viewBox="0 0 920 600" preserveAspectRatio="none" aria-hidden="true">
              <path d="M460,84 L460,168" />
              <path d="M460,232 C460,278 250,276 250,330" />
              <path d="M460,232 C460,278 670,276 670,330" />
              <path d="M250,436 C250,500 460,500 460,500 C670,500 670,500 670,436" />
              <path d="M460,500 L460,540" />
              <circle className="hs-pulse" r="3.6">
                <animateMotion dur="2.2s" repeatCount="indefinite" path="M460,84 L460,168" />
              </circle>
              <circle className="hs-pulse" r="3.6">
                <animateMotion dur="2.7s" repeatCount="indefinite" begin="0.5s" path="M460,232 C460,278 250,276 250,330" />
              </circle>
              <circle className="hs-pulse" r="3.6">
                <animateMotion dur="2.7s" repeatCount="indefinite" begin="0.9s" path="M460,232 C460,278 670,276 670,330" />
              </circle>
              <circle className="hs-pulse" r="3.6">
                <animateMotion dur="2.4s" repeatCount="indefinite" begin="0.3s" path="M460,500 L460,540" />
              </circle>
            </svg>
            <div className="hs-node" data-th="0.44" style={{ left: "50%", top: "14%" }}>
              <div className="hs-chip dark"><span className="hs-d" />Votre entreprise</div>
            </div>
            <div className="hs-node" data-th="0.54" style={{ left: "50%", top: "39%" }}>
              <div className="hs-chip brand"><span className="hs-d" />Agent&nbsp;IA&nbsp;NBN</div>
            </div>
            <div className="hs-node" data-th="0.64" style={{ left: "27%", top: "64%" }}>
              <div className="hs-panelcard">
                <div className="hs-lab">Vos outils, connectés</div>
                <div className="hs-tags"><span>CRM</span><span>Mail</span><span>Compta</span><span>Planning</span><span>SMS</span></div>
              </div>
            </div>
            <div className="hs-node" data-th="0.64" style={{ left: "73%", top: "64%" }}>
              <div className="hs-panelcard">
                <div className="hs-lab">Votre équipe, aux commandes</div>
                <div className="hs-tags"><span>Vous validez</span><span>l&apos;agent exécute</span></div>
              </div>
            </div>
            <div className="hs-node" data-th="0.76" style={{ left: "50%", top: "90%" }}>
              <div className="hs-chip brand"><span className="hs-d" />Des heures gagnées, zéro double-saisie</div>
            </div>
            <div className="hs-note" data-th="0.58" style={{ left: "60%", top: "31%" }}>
              On branche l&apos;IA sur <em>votre</em> flux — prête à tourner chaque jour.
            </div>
            <div className="hs-note" data-th="0.68" style={{ left: "1%", top: "60%" }}>
              Connecté à ce que vous avez <em>déjà</em>.
            </div>
          </div>

          {/* portes */}
          <div className="hs-door left" />
          <div className="hs-door right" />
          <div className="hs-seam" />

          {/* copy SSR */}
          <div className="hs-copy">
            <div className="hs-eyebrow">Automatisations IA · Applications · Sites web</div>
            <h1 className="hs-h1">
              Votre PME tourne<br />
              <span className="hl">en pilote automatique.</span>
            </h1>
            <p className="hs-sub">
              On câble l&apos;IA à vos outils et à votre équipe. Les tâches répétitives
              disparaissent — vous gardez la main, la machine fait le reste.
            </p>
            <div className="hs-cta">
              <Link className="hs-btn brand" href={CALENDLY} target="_blank" rel="noopener noreferrer">
                Automatiser mon entreprise
              </Link>
              <Link className="hs-btn ghost" href="/contact#message">
                Décrire mon besoin (2 min)
              </Link>
            </div>
          </div>
          <div className="hs-cue"><span className="hs-m" />Scrollez</div>
        </div>
      </div>
    </div>
  );
}

const CSS = `
.hs-scope{
  --paper:#F5F4F1;--paper2:#ECEAE5;--white:#FFFFFF;
  --ink:#0E1116;--ink2:#2E343D;--soft:#6B7280;--faint:#9CA3AE;
  --line:#E2E0DA;--card-b:#E7E5DF;
  --brand:#FF5A1F;--brand2:#E64A12;--brandtint:#FCE9DF;--stage:#E9E7E2;
}
.hs-scope h1,.hs-scope p{margin:0}
.hs-track{position:relative;height:340vh}
.hs-hero{position:sticky;top:0;height:100vh;overflow:hidden;perspective:1700px;
  background:radial-gradient(130% 90% at 50% 0%, #FCFBF9 0%, var(--paper) 46%, var(--paper2) 100%)}
.hs-stage{position:absolute;z-index:5;left:50%;top:50%;transform:translate(-50%,-50%);
  width:min(1000px,94vw);height:min(660px,80vh);border-radius:26px;
  background:linear-gradient(180deg,#EFEDE8,var(--stage));
  box-shadow:inset 0 2px 40px rgba(14,17,22,.06),0 30px 80px rgba(14,17,22,.10);opacity:0;will-change:opacity}
.hs-stage::before{content:"";position:absolute;inset:0;border-radius:26px;
  background:radial-gradient(60% 50% at 50% 42%,rgba(255,90,31,.08),transparent 70%)}
.hs-flow{position:absolute;z-index:8;left:50%;top:50%;transform:translate(-50%,-50%);
  width:min(920px,92vw);height:min(600px,74vh);opacity:0;will-change:opacity;pointer-events:none}
.hs-wires{position:absolute;inset:0;width:100%;height:100%;overflow:visible}
.hs-wires path{fill:none;stroke:#C4C1B8;stroke-width:1.6;stroke-linecap:round}
.hs-pulse{fill:var(--brand)}
.hs-node{position:absolute;transform:translate(-50%,-50%) translateY(10px);opacity:0;
  will-change:transform,opacity;transition:transform .55s cubic-bezier(.2,.9,.2,1.1),opacity .45s}
.hs-node.on{transform:translate(-50%,-50%);opacity:1}
.hs-chip{background:var(--white);border:1px solid var(--card-b);border-radius:11px;padding:11px 15px;
  font-weight:700;font-size:14px;display:flex;align-items:center;gap:9px;
  box-shadow:0 10px 26px rgba(14,17,22,.09);white-space:nowrap;color:var(--ink)}
.hs-d{width:7px;height:7px;border-radius:50%;background:var(--faint)}
.hs-chip.dark{background:var(--ink);color:#fff;border-color:var(--ink)}
.hs-chip.dark .hs-d{background:#fff}
.hs-chip.brand{background:var(--brand);color:#fff;border-color:var(--brand);box-shadow:0 12px 28px rgba(255,90,31,.3)}
.hs-chip.brand .hs-d{background:#fff}
.hs-panelcard{background:var(--white);border:1px solid var(--card-b);border-radius:12px;padding:13px 15px;
  box-shadow:0 10px 26px rgba(14,17,22,.09);min-width:190px}
.hs-lab{font-size:11px;font-weight:800;letter-spacing:.09em;text-transform:uppercase;color:var(--soft);margin-bottom:9px}
.hs-tags{display:flex;flex-wrap:wrap;gap:6px}
.hs-tags span{font-size:12px;font-weight:600;color:var(--ink2);background:var(--paper);border:1px solid var(--line);padding:4px 9px;border-radius:7px}
.hs-note{position:absolute;font-size:13px;font-weight:600;color:var(--soft);line-height:1.35;max-width:170px;
  opacity:0;transform:translateY(6px);transition:opacity .5s,transform .5s}
.hs-note.on{opacity:1;transform:none}
.hs-note em{color:var(--brand);font-style:normal;font-weight:800}
.hs-door{position:absolute;top:0;bottom:0;width:calc(50vw + 1px);z-index:30;will-change:transform;
  background:linear-gradient(135deg,#FCFBF9 0%,#EFEDE8 60%,#E9E6E0 100%);box-shadow:0 0 60px rgba(14,17,22,.05)}
.hs-door::after{content:"";position:absolute;inset:0;opacity:.5;
  background-image:radial-gradient(rgba(14,17,22,.045) 1px,transparent 1.4px);background-size:22px 22px}
.hs-door.left{left:0;transform-origin:left center;border-right:1px solid rgba(14,17,22,.10)}
.hs-door.right{right:0;transform-origin:right center;border-left:1px solid rgba(255,90,31,.18)}
.hs-seam{position:absolute;top:0;bottom:0;left:50%;width:2px;z-index:31;transform:translateX(-50%);
  background:linear-gradient(180deg,transparent,rgba(255,90,31,.5),transparent);opacity:.9;will-change:opacity}
.hs-copy{position:absolute;z-index:40;left:0;right:0;top:0;padding-top:21vh;
  display:flex;flex-direction:column;align-items:center;text-align:center;will-change:transform,opacity;padding-left:20px;padding-right:20px}
.hs-eyebrow{font-size:12px;font-weight:800;letter-spacing:.2em;text-transform:uppercase;color:var(--brand)}
.hs-h1{font-size:clamp(40px,6.6vw,82px);max-width:15ch;letter-spacing:-.035em;font-weight:800;line-height:1.02;margin-top:18px;color:var(--ink)}
.hs-h1 .hl{color:var(--brand)}
.hs-sub{margin-top:22px;font-size:clamp(16px,1.6vw,20px);color:var(--soft);max-width:44ch;line-height:1.5;font-weight:500}
.hs-cta{margin-top:30px;display:flex;gap:12px;flex-wrap:wrap;justify-content:center}
.hs-btn{display:inline-flex;align-items:center;gap:8px;font-weight:700;font-size:14px;padding:13px 20px;border-radius:11px;
  cursor:pointer;border:1px solid transparent;transition:transform .16s,box-shadow .22s,background .2s}
.hs-btn.brand{background:var(--brand);color:#fff;box-shadow:0 8px 20px rgba(255,90,31,.26)}
.hs-btn.brand:hover{transform:translateY(-2px);background:var(--brand2);box-shadow:0 12px 28px rgba(255,90,31,.36)}
.hs-btn.ghost{background:var(--white);color:var(--ink);border-color:var(--line)}
.hs-btn.ghost:hover{transform:translateY(-2px);box-shadow:0 8px 18px rgba(14,17,22,.07)}
.hs-cue{position:absolute;z-index:40;left:50%;bottom:26px;transform:translateX(-50%);
  font-size:11px;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:var(--faint);
  display:flex;flex-direction:column;align-items:center;gap:9px}
.hs-m{width:21px;height:33px;border:2px solid var(--faint);border-radius:12px;position:relative}
.hs-m::after{content:"";position:absolute;left:50%;top:6px;width:3px;height:6px;border-radius:2px;
  background:var(--faint);transform:translateX(-50%);animation:hswheel 1.6s infinite}
@keyframes hswheel{0%{opacity:1;transform:translate(-50%,0)}70%{opacity:0;transform:translate(-50%,10px)}100%{opacity:0}}
@media (prefers-reduced-motion: reduce){
  .hs-door,.hs-copy,.hs-flow,.hs-stage,.hs-node{transition:none!important}
  .hs-track{height:auto}
  .hs-hero{position:relative;height:auto;min-height:100vh;padding-bottom:60px}
}
`;
