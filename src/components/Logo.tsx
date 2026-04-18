interface LogoProps {
  className?: string;
  width?: number;
  variant?: "dark" | "light";
}

export function Logo({ className = "", width = 100, variant = "dark" }: LogoProps) {
  const textColor = variant === "dark" ? "#111111" : "#ffffff";
  const subColor = variant === "dark" ? "#444444" : "#cccccc";
  const height = width * 0.72;
  const stroke = width * 0.022;
  const cornerSize = width * 0.18;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 100 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Top-left corner — brun */}
      <path d={`M2,${8} L2,2 L${10},2`} stroke="#8B6E4E" strokeWidth={stroke * (100 / width)} strokeLinecap="square" fill="none" />
      {/* Top-right corner — bleu marine */}
      <path d={`M${90},2 L98,2 L98,${8}`} stroke="#1E2A6E" strokeWidth={stroke * (100 / width)} strokeLinecap="square" fill="none" />
      {/* Bottom-left corner — beige */}
      <path d={`M2,${64} L2,70 L${10},70`} stroke="#A8956A" strokeWidth={stroke * (100 / width)} strokeLinecap="square" fill="none" />
      {/* Bottom-right corner — olive */}
      <path d={`M${90},70 L98,70 L98,${64}`} stroke="#5A6A2A" strokeWidth={stroke * (100 / width)} strokeLinecap="square" fill="none" />

      {/* NBN bold text */}
      <text
        x="50"
        y="44"
        textAnchor="middle"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontWeight="900"
        fontSize="34"
        fill={textColor}
        letterSpacing="-1"
      >
        NBN
      </text>

      {/* Nocode sub text */}
      <text
        x="50"
        y="58"
        textAnchor="middle"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontWeight="400"
        fontSize="11"
        fill={subColor}
        letterSpacing="1.5"
      >
        Nocode
      </text>
    </svg>
  );
}
