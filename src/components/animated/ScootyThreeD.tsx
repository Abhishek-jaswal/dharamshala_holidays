// Pure CSS/SVG scooty illustration — no WebGL
export function ScootyThreeD() {
  return (
    <div className="relative w-full rounded-3xl overflow-hidden bg-gradient-to-br from-sky-950 to-slate-900 flex items-center justify-center" style={{ height: 280 }}>
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-48 h-48 rounded-full bg-sky-500/10 blur-3xl" />
      </div>

      {/* Animated road lines */}
      <div className="absolute bottom-0 left-0 right-0 h-12 overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-slate-800/80" />
        <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-6"
          style={{ animation: 'slideRight 1s linear infinite' }}>
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="w-10 h-1.5 bg-amber-400/60 rounded-full flex-shrink-0" />
          ))}
        </div>
      </div>

      {/* SVG Scooty */}
      <div style={{ animation: 'scootyFloat 2.5s ease-in-out infinite' }}>
        <svg width="200" height="160" viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Rear wheel */}
          <circle cx="45" cy="120" r="28" stroke="#94a3b8" strokeWidth="8" fill="#1e293b"/>
          <circle cx="45" cy="120" r="16" stroke="#64748b" strokeWidth="4" fill="#0f172a"/>
          <circle cx="45" cy="120" r="5" fill="#94a3b8"/>
          {/* Spokes */}
          <line x1="45" y1="104" x2="45" y2="136" stroke="#64748b" strokeWidth="2"/>
          <line x1="29" y1="120" x2="61" y2="120" stroke="#64748b" strokeWidth="2"/>
          <line x1="33" y1="108" x2="57" y2="132" stroke="#64748b" strokeWidth="1.5"/>
          <line x1="57" y1="108" x2="33" y2="132" stroke="#64748b" strokeWidth="1.5"/>

          {/* Front wheel */}
          <circle cx="155" cy="120" r="28" stroke="#94a3b8" strokeWidth="8" fill="#1e293b"/>
          <circle cx="155" cy="120" r="16" stroke="#64748b" strokeWidth="4" fill="#0f172a"/>
          <circle cx="155" cy="120" r="5" fill="#94a3b8"/>
          <line x1="155" y1="104" x2="155" y2="136" stroke="#64748b" strokeWidth="2"/>
          <line x1="139" y1="120" x2="171" y2="120" stroke="#64748b" strokeWidth="2"/>
          <line x1="143" y1="108" x2="167" y2="132" stroke="#64748b" strokeWidth="1.5"/>
          <line x1="167" y1="108" x2="143" y2="132" stroke="#64748b" strokeWidth="1.5"/>

          {/* Chassis / frame */}
          <path d="M45 118 L70 80 L130 75 L155 118" stroke="#475569" strokeWidth="5" fill="none" strokeLinecap="round"/>

          {/* Main body */}
          <path d="M60 95 Q65 65 110 60 Q145 58 155 80 L145 95 Q130 85 100 85 Q75 88 65 100 Z" fill="#0ea5e9"/>
          <path d="M60 95 L65 100 Q75 88 100 85 Q130 85 145 95 L155 100 L155 80 Q145 58 110 60 Q65 65 60 95Z" fill="#38bdf8"/>

          {/* Seat */}
          <path d="M55 88 Q75 78 110 76 Q125 76 130 80 L128 88 Q115 84 80 86 Q65 88 58 96 Z" fill="#1e293b"/>
          <path d="M55 88 Q65 84 80 86 Q115 84 128 88" stroke="#334155" strokeWidth="2" fill="none"/>

          {/* Floorboard */}
          <rect x="75" y="100" width="65" height="12" rx="4" fill="#0c4a6e"/>

          {/* Front fairing */}
          <path d="M138 68 Q155 62 162 78 L155 90 Q148 78 138 75 Z" fill="#0284c7"/>
          <path d="M138 68 Q155 62 162 78" stroke="#38bdf8" strokeWidth="1" fill="none"/>

          {/* Headlight */}
          <ellipse cx="162" cy="84" rx="8" ry="6" fill="#fef9c3"/>
          <ellipse cx="162" cy="84" rx="5" ry="4" fill="#fbbf24"/>
          {/* Headlight glow */}
          <ellipse cx="162" cy="84" rx="10" ry="8" fill="rgba(251,191,36,0.3)"/>

          {/* Tail light */}
          <ellipse cx="40" cy="90" rx="5" ry="4" fill="#ef4444"/>
          <ellipse cx="40" cy="90" rx="7" ry="6" fill="rgba(239,68,68,0.3)"/>

          {/* Handlebar */}
          <line x1="145" y1="65" x2="155" y2="58" stroke="#94a3b8" strokeWidth="4" strokeLinecap="round"/>
          <line x1="152" y1="55" x2="160" y2="62" stroke="#94a3b8" strokeWidth="5" strokeLinecap="round"/>

          {/* Exhaust */}
          <path d="M50 110 Q35 112 28 108" stroke="#94a3b8" strokeWidth="5" fill="none" strokeLinecap="round"/>
          <circle cx="26" cy="107" r="4" fill="#64748b"/>

          {/* Speed lines */}
          <line x1="5" y1="95" x2="30" y2="95" stroke="#38bdf8" strokeWidth="1.5" opacity="0.5" strokeLinecap="round"/>
          <line x1="2" y1="105" x2="22" y2="105" stroke="#38bdf8" strokeWidth="1" opacity="0.3" strokeLinecap="round"/>
          <line x1="8" y1="85" x2="25" y2="85" stroke="#38bdf8" strokeWidth="1" opacity="0.4" strokeLinecap="round"/>
        </svg>
      </div>

      {/* Bottom label */}
      <div className="absolute bottom-4 left-0 right-0 text-center text-sky-300 text-xs font-semibold opacity-80">
        🛵 Scooty on Rent — Starting ₹400/day
      </div>

      <style>{`
        @keyframes scootyFloat {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-8px); }
        }
        @keyframes slideRight {
          from { transform: translateX(-80px); }
          to   { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}
