"use client";

import { useUser, useClerk } from "@clerk/nextjs";

interface Props {
  plan: string;
  highlight: boolean;
  label: string;
  disabled?: boolean;
}

export function SubscribeButton({ plan, highlight, label, disabled = false }: Props) {
  const { isSignedIn } = useUser();
  const { openSignIn } = useClerk();

  function handleClick() {
    if (disabled) return;
    if (!isSignedIn) {
      openSignIn();
      return;
    }
    window.open(`/api/stripe/checkout?plan=${plan}`, "_blank");
  }

  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className={`w-full text-center py-3 rounded-xl text-sm font-bold transition-colors duration-200 ${
        disabled
          ? "bg-gray-100 text-gray-400 cursor-not-allowed"
          : highlight
          ? "bg-[#e8632a] hover:bg-[#c4521f] text-white"
          : "border border-gray-200 hover:border-gray-300 text-gray-700 hover:bg-gray-50"
      }`}
    >
      {label}
    </button>
  );
}
