// Pure CSS particle background — no WebGL
export function AnimatedBgCanvas({ className = '' }: { className?: string }) {
  return (
    <div className={`absolute inset-0 -z-10 overflow-hidden ${className}`} aria-hidden="true">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-[#0f1d33] to-brand-900" />
      {Array.from({ length: 30 }).map((_, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            width: Math.random() * 2 + 1,
            height: Math.random() * 2 + 1,
            top: `${Math.random() * 90}%`,
            left: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.5 + 0.1,
            animation: `starTwinkle ${2 + Math.random() * 3}s ${Math.random() * 4}s ease-in-out infinite`,
          }}
        />
      ))}
    </div>
  );
}
