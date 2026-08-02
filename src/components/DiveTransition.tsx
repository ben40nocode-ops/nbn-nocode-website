"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

/**
 * Effet "plongée" entre pages (porté du proto).
 * - useDive() : retourne un handler onClick qui joue l'animation puis navigue.
 * - <DiveOverlay/> : rend le voile #dive-overlay et nettoie la classe .diving après navigation.
 * Le CSS vit dans globals.css (body.diving main/header + #dive-overlay).
 */
export function useDive() {
  const router = useRouter();
  return (e: React.MouseEvent, href: string) => {
    // laisse le comportement natif pour nouvel onglet / modificateurs / liens externes
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
    if (/^https?:\/\//.test(href) || href.startsWith("#")) return;
    e.preventDefault();
    if (typeof document === "undefined") return;
    if (document.body.classList.contains("diving")) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    // Le zoom doit partir du centre de CE que l'utilisateur regarde.
    // (Sur le film, <main> fait 900vh → une origine en % tomberait hors écran.)
    const mainEl = document.querySelector<HTMLElement>("main");
    if (mainEl) mainEl.style.transformOrigin = `center ${Math.round(window.scrollY + window.innerHeight * 0.45)}px`;
    document.body.classList.add("diving");
    window.setTimeout(() => router.push(href), reduce ? 60 : 700);
  };
}

export function DiveOverlay() {
  const pathname = usePathname();
  // À chaque changement de page : on retire la classe .diving (fin de la plongée).
  useEffect(() => {
    if (typeof document === "undefined") return;
    document.body.classList.remove("diving");
    const mainEl = document.querySelector<HTMLElement>("main");
    if (mainEl) mainEl.style.transformOrigin = "";
  }, [pathname]);

  return <div id="dive-overlay" aria-hidden="true" />;
}
