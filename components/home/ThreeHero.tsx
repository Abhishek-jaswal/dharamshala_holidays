"use client";

// ── Pure CSS/SVG Hero Background ──────────────────────────────────────────
// Drop-in replacement for the Three.js WebGL version.
// Renders: star field, mountain layers, animated particles, glow orbs.
// Zero WebGL — works on every device and sandboxed browser.

import { useEffect, useRef } from "react";

export default function ThreeHero() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Generate stable random values once on mount to avoid SSR mismatch
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    el.style.opacity = "1";
  }, []);

  // Pre-computed star data (static so SSR-safe)
  const stars = Array.from({ length: 120 }, (_, i) => ({
    top: ((i * 7 + i * i * 3) % 100),
    left: ((i * 13 + i * 17) % 100),
    size: (i % 3) + 1,
    dur: 2 + (i % 4),
    delay: (i % 5) * 0.8,
    opacity: 0.3 + (i % 6) * 0.1,
  }));

  // Pre-computed particles
  const particles = Array.from({ length: 40 }, (_, i) => ({
    top: 20 + ((i * 11 + 7) % 65),
    left: 5 + ((i * 17 + 3) % 90),
    dur: 4 + (i % 5),
    delay: (i % 7) * 0.9,
    color: i % 3 === 0 ? "#7dd3fc" : i % 3 === 1 ? "#38bdf8" : "#f59e0b",
    size: i % 2 === 0 ? 3 : 2,
  }));

  // Glow orbs
  const orbs = [
    { x: 20, y: 35, size: 280, color: "rgba(14,165,233,0.08)", dur: 8 },
    { x: 70, y: 55, size: 220, color: "rgba(56,189,248,0.06)", dur: 11 },
    { x: 45, y: 25, size: 180, color: "rgba(125,211,252,0.05)", dur: 9 },
    { x: 80, y: 30, size: 160, color: "rgba(2,132,199,0.07)", dur: 13 },
  ];

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full overflow-hidden"
      style={{ opacity: 0, transition: "opacity 0.8s ease" }}
      aria-hidden="true"
    >
      {/* ── Night sky base ── */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020818] via-[#060d1f] to-[#0a1225]" />

      {/* ── Stars ── */}
      {stars.map((s, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            width: s.size,
            height: s.size,
            opacity: s.opacity,
            animation: `skdTwinkle ${s.dur}s ${s.delay}s ease-in-out infinite`,
          }}
        />
      ))}

      {/* ── Moon ── */}
      <div
        className="absolute rounded-full"
        style={{
          top: "8%",
          right: "12%",
          width: 52,
          height: 52,
          background: "radial-gradient(circle at 35% 35%, #fef3c7, #fde68a)",
          boxShadow: "0 0 40px 14px rgba(253,230,138,0.18), 0 0 80px 30px rgba(253,230,138,0.08)",
        }}
      />

      {/* ── Ambient glow orbs ── */}
      {orbs.map((o, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            top: `${o.y}%`,
            left: `${o.x}%`,
            width: o.size,
            height: o.size,
            background: `radial-gradient(circle, ${o.color} 0%, transparent 70%)`,
            transform: "translate(-50%, -50%)",
            animation: `skdOrbFloat ${o.dur}s ease-in-out infinite`,
            animationDelay: `${i * 1.5}s`,
            filter: "blur(1px)",
          }}
        />
      ))}

      {/* ── Mountain silhouettes ── */}
      <svg
        className="absolute bottom-0 left-0 right-0 w-full"
        viewBox="0 0 1440 380"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Far range — misty blue */}
        <path
          d="M0,290 L60,230 L130,190 L200,215 L270,155 L360,175 L440,115 L520,150 
             L610,105 L700,145 L790,100 L880,138 L970,110 L1060,148 L1150,118 
             L1240,155 L1330,185 L1440,170 L1440,380 L0,380 Z"
          fill="#0c1e3d"
          opacity="0.8"
        />
        {/* Mid range — deeper */}
        <path
          d="M0,310 L80,255 L160,210 L240,240 L320,178 L415,205 L500,155 
             L590,190 L680,148 L775,185 L870,148 L970,180 L1060,155 L1165,190 
             L1260,220 L1360,248 L1440,265 L1440,380 L0,380 Z"
          fill="#091628"
          opacity="0.9"
        />
        {/* Near range — dark silhouette */}
        <path
          d="M0,330 L90,285 L175,245 L255,268 L340,215 L430,245 L515,198 
             L610,225 L695,195 L790,220 L885,198 L985,225 L1080,205 L1185,240 
             L1285,268 L1380,295 L1440,310 L1440,380 L0,380 Z"
          fill="#050e1f"
        />
        {/* Snow caps */}
        <path
          d="M270,155 L290,140 L310,155 Z"
          fill="rgba(248,250,252,0.4)"
        />
        <path
          d="M610,105 L635,88 L660,105 Z"
          fill="rgba(248,250,252,0.45)"
        />
        <path
          d="M790,100 L812,82 L835,100 Z"
          fill="rgba(248,250,252,0.4)"
        />
        <path
          d="M440,115 L462,96 L484,115 Z"
          fill="rgba(248,250,252,0.3)"
        />
      </svg>

      {/* ── Floating particles (coloured dots) ── */}
      {particles.map((p, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            top: `${p.top}%`,
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            opacity: 0,
            animation: `skdParticle ${p.dur}s ${p.delay}s ease-in-out infinite`,
            boxShadow: `0 0 ${p.size * 3}px ${p.color}`,
          }}
        />
      ))}

      {/* ── Subtle gradient vignette ── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 40%, transparent 30%, rgba(5,14,31,0.6) 100%)",
        }}
      />

      {/* ── Keyframes ── */}
      <style>{`
        @keyframes skdTwinkle {
          0%, 100% { opacity: 0.15; transform: scale(0.9); }
          50%       { opacity: 0.95; transform: scale(1.4); }
        }
        @keyframes skdOrbFloat {
          0%, 100% { transform: translate(-50%, -50%) scale(1); }
          50%       { transform: translate(-50%, -53%) scale(1.08); }
        }
        @keyframes skdParticle {
          0%        { opacity: 0;    transform: translateY(0px)   scale(0.8); }
          20%       { opacity: 0.8; }
          70%       { opacity: 0.4; }
          100%      { opacity: 0;    transform: translateY(-60px) scale(1.2); }
        }
      `}</style>
    </div>
  );
}
