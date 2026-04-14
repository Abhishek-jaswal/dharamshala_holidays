"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { ArrowRight, Star, Users, MapPin, Shield } from "lucide-react";

// Dynamic import — ThreeHero is now pure CSS but still client-only
const ThreeHero = dynamic(() => import("./ThreeHero"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 bg-gradient-to-b from-[#060d1f] via-[#0c1f3f] to-[#0a0f1a]" />
  ),
});

const stats = [
  { value: "500+", label: "Happy Travellers", icon: Users },
  { value: "20+",  label: "Destinations",     icon: MapPin },
  { value: "4.9★", label: "Average Rating",   icon: Star },
  { value: "100%", label: "Safe Journeys",    icon: Shield },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* CSS Background Scene */}
      <div className="absolute inset-0">
        <ThreeHero />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#060d1f]/70 via-transparent to-[#0a0f1a]/90 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f1a]/50 via-transparent to-[#0a0f1a]/50 pointer-events-none" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-24 pb-32 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-sky-500/25 text-sky-300 text-xs font-mono mb-8 animate-fade-in">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse-slow" />
          Himachal&apos;s Most Trusted Travel Partner
        </div>

        {/* Headline */}
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.05] tracking-tight mb-6 animate-fade-in">
          Explore{" "}
          <span className="gradient-text italic">Himachal</span>
          <br />
          with SKD Holidays
        </h1>

        {/* Subheadline */}
        <p className="text-slate-300 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-10 animate-fade-in">
          Book taxi, rent scooty or bike, and discover{" "}
          <span className="text-sky-300 font-medium">unforgettable tour packages</span>{" "}
          across the mountains of Himachal Pradesh.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20 animate-fade-in">
          <Link
            href="/destinations"
            className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold text-base shadow-glow hover:shadow-glow-lg hover:scale-105 transition-all duration-300 btn-glow"
          >
            Explore Packages
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/rentals"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl glass border border-white/15 text-white font-semibold text-base hover:bg-white/12 hover:border-white/25 transition-all duration-300"
          >
            Book Rental
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl border border-sky-500/30 text-sky-300 font-semibold text-base hover:bg-sky-500/10 transition-all duration-300"
          >
            Contact Now
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="glass rounded-2xl px-4 py-4 text-center group hover:bg-white/10 transition-all duration-300"
              >
                <Icon className="w-5 h-5 text-sky-400 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <div className="font-mono text-xl font-bold text-white mb-0.5">
                  {stat.value}
                </div>
                <div className="text-slate-400 text-xs">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0f1a] to-transparent pointer-events-none" />

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce text-slate-500 z-10">
        <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
        <div className="w-5 h-8 rounded-full border border-slate-600 flex items-start justify-center pt-1.5">
          <div className="w-1 h-2 rounded-full bg-sky-400 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
