"use client";

import Link from "next/link";
import { destinations } from "@/data/destinations";
import { MapPin, Clock, Thermometer, ArrowRight } from "lucide-react";

export default function DestinationsSection() {
  const featured = destinations.slice(0, 6);

  return (
    <section className="py-24 px-4 sm:px-6 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-sky-950/10 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <p className="text-sky-400 text-sm font-mono uppercase tracking-widest mb-3">
              Popular Destinations
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-white">
              Discover Himachal&apos;s{" "}
              <span className="gradient-text italic">Hidden Gems</span>
            </h2>
          </div>
          <Link
            href="/destinations"
            className="inline-flex items-center gap-2 text-sky-400 font-medium hover:gap-3 transition-all duration-300 flex-shrink-0"
          >
            View All Destinations <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((dest, index) => (
            <Link
              key={dest.id}
              href={`/destinations/${dest.slug}`}
              className="destination-card group relative rounded-3xl overflow-hidden cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Card Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${dest.heroGradient} opacity-80`}
              />

              {/* Noise texture */}
              <div className="absolute inset-0 opacity-20 mix-blend-overlay"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`
                }}
              />

              {/* Mountain pattern decoration */}
              <div className="absolute bottom-0 left-0 right-0 h-32 opacity-20">
                <svg viewBox="0 0 400 120" preserveAspectRatio="none" className="w-full h-full">
                  <path d="M0 120 L0 80 L50 40 L100 70 L150 20 L200 60 L250 10 L300 50 L350 30 L400 55 L400 120 Z" fill="white" />
                  <path d="M0 120 L0 90 L80 60 L140 80 L200 40 L260 75 L320 45 L380 70 L400 65 L400 120 Z" fill="white" opacity="0.5" />
                </svg>
              </div>

              {/* Content */}
              <div className="relative z-10 p-7 min-h-[280px] flex flex-col justify-between">
                {/* Top */}
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/25 backdrop-blur-sm text-white/80 text-xs font-mono mb-4">
                    <MapPin className="w-3 h-3" />
                    Himachal Pradesh
                  </div>
                  <h3 className="font-display text-3xl font-bold text-white mb-1">
                    {dest.name}
                  </h3>
                  <p className="text-white/70 text-sm italic mb-4">
                    {dest.tagline}
                  </p>
                  <p className="text-white/60 text-xs leading-relaxed line-clamp-2">
                    {dest.description}
                  </p>
                </div>

                {/* Bottom */}
                <div>
                  {/* Meta */}
                  <div className="flex items-center gap-4 mb-5">
                    <div className="flex items-center gap-1.5 text-white/70 text-xs">
                      <Clock className="w-3 h-3" />
                      {dest.bestTime.split(",")[0]}
                    </div>
                    {dest.altitude && (
                      <div className="flex items-center gap-1.5 text-white/70 text-xs">
                        <Thermometer className="w-3 h-3" />
                        {dest.altitude}
                      </div>
                    )}
                  </div>

                  {/* Price + CTA */}
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-white/50 text-xs font-mono">From</span>
                      <div className="font-mono text-2xl font-bold text-white">
                        ₹{dest.packages[0]?.price.toLocaleString("en-IN")}
                      </div>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-white/15 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/25 group-hover:translate-x-1 transition-all duration-300">
                      <ArrowRight className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Hover shimmer */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
