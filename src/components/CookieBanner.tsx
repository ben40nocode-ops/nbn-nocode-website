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
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6">
      <div className="max-w-3xl mx-auto bg-white border border-gray-200 rounded-2xl shadow-xl p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <p className="text-sm text-gray-600 flex-1 leading-relaxed">
          On utilise des cookies pour analyser le trafic et améliorer notre site (Google Analytics).
          Aucune donnée n&apos;est vendue à des tiers.{" "}
          <a href="/politique-confidentialite" className="underline text-gray-800 hover:text-[#e8632a]">
            En savoir plus
          </a>
        </p>
        <div className="flex gap-2 shrink-0">
          <button
            onClick={decline}
            className="px-4 py-2 text-sm text-gray-500 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors font-medium"
          >
            Refuser
          </button>
          <button
            onClick={accept}
            className="px-4 py-2 text-sm text-white bg-[#e8632a] hover:bg-[#c4521f] rounded-xl transition-colors font-semibold"
          >
            Accepter
          </button>
        </div>
      </div>
    </div>
  );
}
