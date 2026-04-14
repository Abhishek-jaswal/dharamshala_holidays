import type { Metadata } from "next";
import Link from "next/link";
import { destinations } from "@/data/destinations";
import { MapPin, Clock, ArrowRight, Search } from "lucide-react";

export const metadata: Metadata = {
  title: "Destinations – Explore Himachal Pradesh",
  description: "Discover premium tour packages for Chamba, Dharamshala, Dalhousie, Khajjiar, Bir Billing, and McLeodganj. SKD Holidays curates the best Himachal travel experiences.",
};

export default function DestinationsPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero banner */}
      <div className="relative py-24 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#060d1f] via-[#0c1f3f] to-[#0a0f1a]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-sky-500/8 blur-3xl pointer-events-none" />
        {/* Mountain silhouette */}
        <div className="absolute bottom-0 left-0 right-0 h-24 opacity-10">
          <svg viewBox="0 0 1200 80" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0 80 L0 50 L100 20 L200 45 L300 10 L450 35 L550 5 L650 30 L750 12 L850 40 L950 8 L1050 35 L1150 18 L1200 30 L1200 80 Z" fill="white" />
          </svg>
        </div>
        <div className="max-w-4xl mx-auto relative text-center">
          <p className="text-sky-400 text-sm font-mono uppercase tracking-widest mb-4">All Destinations</p>
          <h1 className="font-display text-5xl sm:text-6xl font-bold text-white mb-5">
            Explore <span className="gradient-text italic">Himachal Pradesh</span>
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            From misty temples of Chamba to paragliding at Bir Billing — discover Himachal&apos;s most breathtaking destinations with curated packages, taxis, and rentals.
          </p>
          {/* Search placeholder */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input
              type="text"
              placeholder="Search destinations..."
              className="w-full pl-11 pr-4 py-3.5 rounded-2xl glass border border-white/12 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-sky-500/50 focus:bg-white/10 transition-all"
              readOnly
            />
          </div>
        </div>
      </div>

      {/* Destinations grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {destinations.map((dest, i) => (
            <Link
              key={dest.id}
              href={`/destinations/${dest.slug}`}
              className="destination-card group relative rounded-3xl overflow-hidden cursor-pointer"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${dest.heroGradient} opacity-85`} />
              <div className="absolute inset-0 opacity-15 mix-blend-overlay"
                style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")" }}
              />
              {/* Mountain deco */}
              <div className="absolute bottom-0 left-0 right-0 h-28 opacity-15">
                <svg viewBox="0 0 400 100" preserveAspectRatio="none" className="w-full h-full">
                  <path d="M0 100 L0 70 L60 30 L110 60 L160 15 L210 50 L270 5 L320 40 L380 20 L400 45 L400 100 Z" fill="white" />
                </svg>
              </div>
              <div className="relative z-10 p-7 min-h-[300px] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/25 backdrop-blur-sm text-white/70 text-xs font-mono">
                      <MapPin className="w-3 h-3" />HP
                    </div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/25 backdrop-blur-sm text-white/70 text-xs font-mono">
                      {dest.packages.length} Packages
                    </div>
                  </div>
                  <h2 className="font-display text-4xl font-bold text-white mb-1">{dest.name}</h2>
                  <p className="text-white/60 text-sm italic mb-3">{dest.tagline}</p>
                  <p className="text-white/55 text-xs leading-relaxed line-clamp-2">{dest.description}</p>
                </div>
                <div>
                  <div className="flex items-center gap-4 mb-5 text-white/60 text-xs">
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{dest.bestTime.split(",")[0]}</span>
                    {dest.altitude && <span>⛰ {dest.altitude}</span>}
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-white/40 text-xs font-mono">Packages from</span>
                      <div className="font-mono text-2xl font-bold text-white">
                        Rs.{dest.packages[0]?.price.toLocaleString("en-IN")}
                      </div>
                    </div>
                    <div className="w-11 h-11 rounded-xl bg-white/15 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/25 group-hover:translate-x-1 transition-all duration-300">
                      <ArrowRight className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
