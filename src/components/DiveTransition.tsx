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
    document.body.classList.add("diving");
    window.setTimeout(() => router.push(href), reduce ? 60 : 700);
  };
}

export function DiveOverlay() {
  const pathname = usePathname();
  // À chaque changement de page : on retire .diving et on joue l'arrivée en fondu.
  useEffect(() => {
    if (typeof document === "undefined") return;
    document.body.classList.remove("diving");
    window.scrollTo(0, 0);
    const main = document.querySelector("main");
    if (main) {
      main.classList.remove("diving-arrive");
      // force reflow pour rejouer l'animation
      void (main as HTMLElement).offsetWidth;
      main.classList.add("diving-arrive");
    }
  }, [pathname]);

  return <div id="dive-overlay" aria-hidden="true" />;
}
