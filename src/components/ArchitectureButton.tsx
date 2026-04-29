"use client";

import Link from "next/link";

interface Props {
  highlight: boolean;
  label: string;
}

export function ArchitectureButton({ highlight, label }: Props) {
  return (
    <Link
      href="https://calendly.com/ben40nocode/1h"
      target="_blank"
      rel="noopener noreferrer"
      className={`w-full text-center py-3 rounded-xl text-sm font-bold transition-colors duration-200 block ${
        highlight
          ? "bg-[#e8632a] hover:bg-[#c4521f] text-white"
          : "border border-gray-200 hover:border-gray-300 text-gray-700 hover:bg-gray-50"
      }`}
    >
      {label}
    </Link>
  );
}
