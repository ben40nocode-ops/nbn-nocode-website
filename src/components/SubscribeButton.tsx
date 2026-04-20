"use client";

import { useUser, useClerk } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface Props {
  plan: string;
  highlight: boolean;
  label: string;
}

export function SubscribeButton({ plan, highlight, label }: Props) {
  const { isSignedIn } = useUser();
  const { openSignIn } = useClerk();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleClick() {
    if (!isSignedIn) {
      openSignIn();
      return;
    }
    setLoading(true);
    const newTab = window.open("", "_blank");
    try {
      const res = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan }),
      });
      const data = await res.json();
      if (data.url && newTab) newTab.location.href = data.url;
    } finally {
      setLoading(false);
    }
  }

  return (
    <button
      onClick={handleClick}
      disabled={loading}
      className={`w-full text-center py-3 rounded-xl text-sm font-bold transition-colors duration-200 disabled:opacity-60 ${
        highlight
          ? "bg-[#e8632a] hover:bg-[#c4521f] text-white"
          : "border border-gray-200 hover:border-gray-300 text-gray-700 hover:bg-gray-50"
      }`}
    >
      {loading ? "Chargement…" : label}
    </button>
  );
}
