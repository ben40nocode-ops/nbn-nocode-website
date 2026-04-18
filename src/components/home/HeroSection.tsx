"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Zap } from "lucide-react";

export function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();

    const particles: { x: number; y: number; vx: number; vy: number; alpha: number; size: number }[] = [];
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        alpha: Math.random() * 0.35 + 0.05,
        size: Math.random() * 1.5 + 0.5,
      });
    }

    let animId: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(232, 99, 42, ${p.alpha})`;
        ctx.fill();
      });

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(232, 99, 42, ${0.05 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(draw);
    };
    draw();

    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16 bg-[#0c0c0c]">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />

      {/* Radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_40%,_rgba(232,99,42,0.07)_0%,_transparent_100%)] pointer-events-none" />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: "linear-gradient(#f0ede8 1px, transparent 1px), linear-gradient(90deg, #f0ede8 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 border border-[#282828] bg-[#141414] rounded-full px-4 py-2 mb-10">
          <Zap size={11} className="text-[#e8632a]" />
          <span className="text-xs text-[#666660] tracking-wide">
            Spécialiste Claude AI & Automatisation — Bordeaux
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[88px] font-bold leading-[0.93] tracking-tighter mb-7">
          <span className="block text-[#f0ede8]">Vos process tournent.</span>
          <span className="block gradient-text mt-1">Même quand vous dormez.</span>
        </h1>

        <p className="text-base md:text-lg text-[#777772] max-w-xl mx-auto mb-10 leading-relaxed">
          On conçoit l&apos;architecture d&apos;automatisation et les agents IA de votre business.
          Setup unique. Abonnement évolutif. Zéro maintenance de votre côté.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
          <Link
            href="https://calendly.com/nbn-nocode"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 bg-[#e8632a] hover:bg-[#c4521f] text-white px-6 py-3.5 rounded-xl font-semibold transition-all duration-200 text-sm shadow-lg shadow-[#e8632a]/20"
          >
            Réserver l&apos;audit gratuit
            <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
          <Link
            href="/#realisations"
            className="flex items-center gap-2 border border-[#282828] hover:border-[#3a3a3a] text-[#ccccca] px-6 py-3.5 rounded-xl font-medium transition-all duration-200 text-sm hover:bg-[#141414]"
          >
            Voir les réalisations
          </Link>
        </div>

        {/* Stats */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-10">
          {[
            { value: "40+", label: "automatisations déployées" },
            { value: "3", label: "experts certifiés" },
            { value: "100%", label: "sur mesure" },
          ].map((s, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl font-bold text-[#f0ede8]">{s.value}</div>
              <div className="text-xs text-[#555550] mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-px h-10 bg-gradient-to-b from-transparent via-[#333] to-transparent mx-auto" />
      </div>
    </section>
  );
}
