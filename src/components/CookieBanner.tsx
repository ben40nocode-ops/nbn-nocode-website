"use client";

import { useEffect, useState } from "react";

const GTM_ID = "GTM-58LB6LCC";

function loadGTM() {
  if (typeof window === "undefined") return;
  if ((window as any).__gtm_loaded) return;
  (window as any).__gtm_loaded = true;

  const dl = (window as any).dataLayer || [];
  (window as any).dataLayer = dl;
  dl.push({ "gtm.start": new Date().getTime(), event: "gtm.js" });

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
  document.head.appendChild(script);
}

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (consent === "true") {
      loadGTM();
    } else if (consent === null) {
      setVisible(true);
    }
  }, []);

  function accept() {
    localStorage.setItem("cookie_consent", "true");
    loadGTM();
    setVisible(false);
  }

  function decline() {
    localStorage.setItem("cookie_consent", "false");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.06)]">
      <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col sm:flex-row items-center gap-3">
        <p className="text-xs sm:text-sm text-gray-600 flex-1 leading-relaxed text-center sm:text-left">
          On utilise des cookies pour analyser le trafic (Google Analytics). Aucune donnée n&apos;est vendue à des tiers.{" "}
          <a href="/politique-confidentialite" className="underline text-gray-800 hover:text-[#FF5A1F]">
            En savoir plus
          </a>
        </p>
        <div className="flex gap-2 shrink-0">
          <button
            onClick={decline}
            className="px-4 py-1.5 text-sm text-gray-500 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors font-medium"
          >
            Refuser
          </button>
          <button
            onClick={accept}
            className="px-4 py-1.5 text-sm text-white bg-[#FF5A1F] hover:bg-[#E64A12] rounded-lg transition-colors font-semibold"
          >
            Accepter
          </button>
        </div>
      </div>
    </div>
  );
}
