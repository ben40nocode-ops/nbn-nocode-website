"use client";

interface Props {
  plan: string;
  highlight: boolean;
  label: string;
  disabled?: boolean;
}

export function SubscribeButton({ plan, highlight, label, disabled = false }: Props) {

  function handleClick() {
    if (disabled) return;
    // Navigate to checkout; middleware redirects unauthenticated users to sign-in then back
    window.location.href = `/api/stripe/checkout?plan=${plan}`;
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
