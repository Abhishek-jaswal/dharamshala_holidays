'use client';

// Pure CSS hero background — no WebGL required
// Renders: starfield, mountain silhouettes, animated road, moving headlights
export function HeroScene() {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden" aria-hidden="true">
      {/* Deep night sky gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020818] via-[#060d1f] to-[#0a1628]" />

      {/* ── STARS ── */}
      <div className="absolute inset-0">
        {Array.from({ length: 80 }).map((_, i) => {
          const size = Math.random() * 2.5 + 0.5;
          const top = Math.random() * 70;
          const left = Math.random() * 100;
          const delay = Math.random() * 4;
          const dur = 2 + Math.random() * 3;
          return (
            <span
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                width: size,
                height: size,
                top: `${top}%`,
                left: `${left}%`,
                opacity: Math.random() * 0.7 + 0.2,
                animation: `starTwinkle ${dur}s ${delay}s ease-in-out infinite`,
              }}
            />
          );
        })}
      </div>

      {/* ── MOON ── */}
      <div className="absolute top-16 right-20 w-14 h-14 rounded-full bg-gradient-to-br from-amber-100 to-amber-200 shadow-[0_0_40px_12px_rgba(251,191,36,0.25)]" />

      {/* ── FAR MOUNTAINS ── */}
      <svg
        className="absolute bottom-0 left-0 right-0 w-full"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Farthest range — lightest */}
        <path
          d="M0,260 L80,180 L180,140 L260,170 L340,100 L420,130 L500,80 L580,120 L660,90 L740,130 L820,70 L900,110 L980,85 L1060,120 L1140,95 L1220,130 L1300,160 L1380,140 L1440,150 L1440,320 L0,320 Z"
          fill="#1a2744"
        />
        {/* Mid range */}
        <path
          d="M0,280 L60,220 L140,170 L220,200 L300,140 L390,165 L470,110 L550,150 L640,105 L730,145 L810,100 L900,140 L990,115 L1080,150 L1160,120 L1250,155 L1340,185 L1440,200 L1440,320 L0,320 Z"
          fill="#0f1d33"
        />
        {/* Near range — darkest */}
        <path
          d="M0,295 L70,250 L150,200 L230,230 L310,175 L400,205 L490,155 L580,185 L670,150 L760,180 L860,145 L960,175 L1050,155 L1150,185 L1250,215 L1360,245 L1440,260 L1440,320 L0,320 Z"
          fill="#0a1628"
        />
      </svg>

      {/* ── ROAD ── */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full" style={{ perspective: '800px' }}>
        <div
          className="relative mx-auto bg-[#151515]"
          style={{
            width: '100%',
            height: 220,
            transform: 'rotateX(55deg)',
            transformOrigin: 'bottom center',
          }}
        >
          {/* Road surface */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a]" />

          {/* Center dashes — animated scrolling */}
          <div className="absolute inset-x-0 flex flex-col items-center gap-8 overflow-hidden h-full"
            style={{ animation: 'roadScroll 1.2s linear infinite' }}>
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className="w-3 h-16 bg-amber-400 rounded-full opacity-80 flex-shrink-0" />
            ))}
          </div>

          {/* Side lines */}
          <div className="absolute top-0 bottom-0 left-[28%] w-0.5 bg-white opacity-30" />
          <div className="absolute top-0 bottom-0 right-[28%] w-0.5 bg-white opacity-30" />
        </div>
      </div>

      {/* ── MOVING HEADLIGHTS ── */}
      {[
        { delay: '0s', offset: '-8%', size: 14 },
        { delay: '1.8s', offset: '5%', size: 10 },
        { delay: '3.2s', offset: '-3%', size: 12 },
      ].map((v, i) => (
        <div
          key={i}
          className="absolute bottom-8"
          style={{
            left: `calc(50% + ${v.offset})`,
            animation: `headlightMove 4s ${v.delay} linear infinite`,
          }}
        >
          {/* Left headlight */}
          <div
            className="absolute rounded-full bg-amber-100"
            style={{
              width: v.size,
              height: v.size,
              left: -v.size * 1.5,
              boxShadow: `0 0 ${v.size * 2}px ${v.size}px rgba(251,191,36,0.6)`,
            }}
          />
          {/* Right headlight */}
          <div
            className="absolute rounded-full bg-amber-100"
            style={{
              width: v.size,
              height: v.size,
              left: v.size * 0.5,
              boxShadow: `0 0 ${v.size * 2}px ${v.size}px rgba(251,191,36,0.6)`,
            }}
          />
          {/* Beam */}
          <div
            className="absolute bottom-0"
            style={{
              width: v.size * 6,
              height: v.size * 10,
              left: -v.size * 2,
              background: 'linear-gradient(to bottom, rgba(251,191,36,0.18) 0%, transparent 100%)',
              clipPath: 'polygon(30% 0%, 70% 0%, 100% 100%, 0% 100%)',
            }}
          />
        </div>
      ))}

      {/* ── FLOATING PARTICLES / FIREFLIES ── */}
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-orange-400 opacity-60"
          style={{
            left: `${10 + Math.random() * 80}%`,
            bottom: `${10 + Math.random() * 50}%`,
            animation: `floatUp ${4 + Math.random() * 5}s ${Math.random() * 5}s ease-in-out infinite`,
          }}
        />
      ))}

      {/* Orange city glow from below */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-orange-950/40 to-transparent" />

      {/* CSS keyframes injected inline */}
      <style>{`
        @keyframes starTwinkle {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50%       { opacity: 0.9; transform: scale(1.4); }
        }
        @keyframes roadScroll {
          from { transform: translateY(0); }
          to   { transform: translateY(96px); }
        }
        @keyframes headlightMove {
          0%   { transform: translateY(0)   scale(1.5); opacity: 0; }
          10%  { opacity: 1; }
          90%  { opacity: 1; }
          100% { transform: translateY(-420px) scale(0.2); opacity: 0; }
        }
        @keyframes floatUp {
          0%   { transform: translateY(0) translateX(0); opacity: 0; }
          20%  { opacity: 0.7; }
          80%  { opacity: 0.4; }
          100% { transform: translateY(-120px) translateX(${Math.random() > 0.5 ? '' : '-'}20px); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
