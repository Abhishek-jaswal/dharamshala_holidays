// Pure CSS/SVG taxi illustration — no WebGL
export function TaxiThreeD() {
  return (
    <div className="relative w-full rounded-3xl overflow-hidden bg-gradient-to-br from-amber-950 to-slate-900 flex items-center justify-center" style={{ height: 280 }}>
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-56 h-40 rounded-full bg-amber-500/10 blur-3xl" />
      </div>

      {/* Road */}
      <div className="absolute bottom-0 left-0 right-0 h-14 overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-10 bg-slate-800/80" />
        {/* Moving dashes */}
        <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-6"
          style={{ animation: 'roadMove 1s linear infinite' }}>
          {Array.from({ length: 14 }).map((_, i) => (
            <div key={i} className="w-10 h-1.5 bg-amber-400/50 rounded-full flex-shrink-0" />
          ))}
        </div>
        {/* Side lines */}
        <div className="absolute bottom-1 left-0 right-0 h-0.5 bg-white/20" />
        <div className="absolute bottom-9 left-0 right-0 h-0.5 bg-white/10" />
      </div>

      {/* SVG Taxi — 3/4 front view */}
      <div style={{ animation: 'taxiBounce 3s ease-in-out infinite' }}>
        <svg width="220" height="160" viewBox="0 0 220 160" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Shadow */}
          <ellipse cx="110" cy="148" rx="80" ry="8" fill="rgba(0,0,0,0.35)"/>

          {/* Car body lower */}
          <rect x="20" y="98" width="180" height="46" rx="8" fill="#d97706"/>
          <rect x="20" y="98" width="180" height="20" rx="4" fill="#b45309"/>

          {/* Wheel arches */}
          <path d="M30 100 Q30 88 52 88 Q72 88 72 100" fill="#92400e"/>
          <path d="M148 100 Q148 88 168 88 Q190 88 190 100" fill="#92400e"/>

          {/* Car roof / cabin */}
          <path d="M55 60 Q65 38 90 35 L140 35 Q165 38 165 60 L170 98 L50 98 Z" fill="#fbbf24"/>
          <path d="M55 60 Q65 38 90 35 L140 35 Q165 38 165 60" fill="#f59e0b"/>

          {/* Windshield */}
          <path d="M65 60 Q72 42 92 40 L138 40 Q158 42 158 60 L150 95 L70 95 Z" fill="#93c5fd" opacity="0.7"/>
          <path d="M65 60 Q72 42 92 40 L138 40 Q158 42 158 60" stroke="#bfdbfe" strokeWidth="1.5" fill="none"/>
          {/* Windshield glare */}
          <path d="M80 48 Q88 43 100 43 L95 60 Q85 58 78 55 Z" fill="white" opacity="0.25"/>

          {/* Side windows */}
          <rect x="22" y="68" width="35" height="26" rx="4" fill="#93c5fd" opacity="0.5"/>
          <rect x="163" y="68" width="35" height="26" rx="4" fill="#93c5fd" opacity="0.5"/>

          {/* Door lines */}
          <line x1="110" y1="58" x2="110" y2="98" stroke="#92400e" strokeWidth="1.5"/>
          <line x1="62" y1="98" x2="62" y2="65" stroke="#92400e" strokeWidth="1" opacity="0.5"/>
          <line x1="158" y1="98" x2="158" y2="65" stroke="#92400e" strokeWidth="1" opacity="0.5"/>

          {/* Door handles */}
          <rect x="78" y="82" width="16" height="4" rx="2" fill="#92400e"/>
          <rect x="126" y="82" width="16" height="4" rx="2" fill="#92400e"/>

          {/* TAXI sign on roof */}
          <rect x="80" y="28" width="60" height="16" rx="4" fill="#fef08a"/>
          <rect x="82" y="30" width="56" height="12" rx="3" fill="#fbbf24"/>
          <text x="110" y="40" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#78350f" fontFamily="Arial">TAXI</text>
          {/* Taxi sign glow */}
          <rect x="80" y="28" width="60" height="16" rx="4" fill="rgba(251,191,36,0.3)" style={{ filter: 'blur(4px)' }}/>

          {/* Front headlights */}
          <rect x="24" y="106" width="22" height="12" rx="3" fill="#fef9c3"/>
          <rect x="24" y="106" width="22" height="12" rx="3" fill="rgba(251,191,36,0.5)" style={{ filter: 'blur(3px)' }}/>
          <rect x="174" y="106" width="22" height="12" rx="3" fill="#fef9c3"/>
          <rect x="174" y="106" width="22" height="12" rx="3" fill="rgba(251,191,36,0.5)" style={{ filter: 'blur(3px)' }}/>

          {/* Grille */}
          <rect x="55" y="126" width="110" height="14" rx="4" fill="#78350f"/>
          {Array.from({ length: 5 }).map((_, i) => (
            <rect key={i} x={60 + i * 20} y="128" width="12" height="10" rx="2" fill="#92400e"/>
          ))}

          {/* Front bumper chrome */}
          <rect x="22" y="140" width="176" height="6" rx="3" fill="#d1d5db"/>

          {/* Wheels — front view style */}
          {/* Left wheel */}
          <ellipse cx="52" cy="140" rx="26" ry="14" fill="#1e293b"/>
          <ellipse cx="52" cy="140" rx="20" ry="10" fill="#374151"/>
          <ellipse cx="52" cy="140" rx="12" ry="7" fill="#4b5563"/>
          <ellipse cx="52" cy="140" rx="5" ry="3" fill="#9ca3af"/>
          {/* Right wheel */}
          <ellipse cx="168" cy="140" rx="26" ry="14" fill="#1e293b"/>
          <ellipse cx="168" cy="140" rx="20" ry="10" fill="#374151"/>
          <ellipse cx="168" cy="140" rx="12" ry="7" fill="#4b5563"/>
          <ellipse cx="168" cy="140" rx="5" ry="3" fill="#9ca3af"/>

          {/* Headlight beams */}
          <path d="M15 118 L0 90 L30 100 Z" fill="rgba(251,191,36,0.15)"/>
          <path d="M205 118 L220 90 L190 100 Z" fill="rgba(251,191,36,0.15)"/>
        </svg>
      </div>

      <div className="absolute bottom-4 left-0 right-0 text-center text-amber-300 text-xs font-semibold opacity-80">
        🚕 Taxi Service — Starting ₹300
      </div>

      <style>{`
        @keyframes taxiBounce {
          0%, 100% { transform: translateY(0) rotate(-0.5deg); }
          50%       { transform: translateY(-7px) rotate(0.5deg); }
        }
        @keyframes roadMove {
          from { transform: translateX(-80px); }
          to   { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}
