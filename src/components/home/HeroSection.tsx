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

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const particles: { x: number; y: number; vx: number; vy: number; alpha: number; size: number }[] = [];
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        alpha: Math.random() * 0.4 + 0.05,
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

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(232, 99, 42, ${0.06 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(draw);
    };
    draw();

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16">
      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* Radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(232,99,42,0.06)_0%,_transparent_70%)] pointer-events-none" />

      {/* Grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#f2f0eb 1px, transparent 1px), linear-gradient(90deg, #f2f0eb 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 border border-[#2a2a2a] bg-[#0f0f0f] rounded-full px-4 py-1.5 mb-8">
          <Zap size={12} className="text-[#e8632a]" />
          <span className="text-xs text-[#777770] tracking-wide">
            Spécialiste Claude AI & Automatisation
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tighter mb-6">
          <span className="block text-[#f2f0eb]">Vos process tournent.</span>
          <span className="block gradient-text">Même quand vous dormez.</span>
        </h1>

        {/* Sub */}
        <p className="text-lg md:text-xl text-[#777770] max-w-2xl mx-auto mb-10 leading-relaxed">
          On conçoit l&apos;architecture d&apos;automatisation et les agents IA de votre business.
          Vous payez une fois pour la mise en place. On maintient, on fait évoluer.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="https://calendly.com/nbn-nocode"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 bg-[#e8632a] hover:bg-[#c4521f] text-white px-6 py-3.5 rounded-xl font-medium transition-all duration-200 text-sm shadow-lg shadow-[#e8632a]/20"
          >
            Réserver l&apos;audit gratuit
            <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
          <Link
            href="/#realisations"
            className="flex items-center gap-2 border border-[#2a2a2a] hover:border-[#3a3a3a] text-[#f2f0eb] px-6 py-3.5 rounded-xl font-medium transition-all duration-200 text-sm hover:bg-[#111]"
          >
            Voir les réalisations
          </Link>
        </div>

        {/* Social proof */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-[#555550]">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-[#f2f0eb]">40+</span>
            <span>automatisations déployées</span>
          </div>
          <div className="hidden sm:block w-px h-6 bg-[#1c1c1c]" />
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-[#f2f0eb]">3</span>
            <span>experts certifiés</span>
          </div>
          <div className="hidden sm:block w-px h-6 bg-[#1c1c1c]" />
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-[#f2f0eb]">100%</span>
            <span>sur mesure</span>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div className="w-px h-12 bg-gradient-to-b from-transparent via-[#2a2a2a] to-transparent" />
      </div>
    </section>
  );
}
