"use client";

import { Shield, Clock, Star, HeadphonesIcon, Map, ThumbsUp } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Safe & Verified",
    description: "All our drivers are police-verified, licensed, and trained for mountain terrains.",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round the clock customer support via call and WhatsApp. We're always here.",
    color: "text-sky-400",
    bg: "bg-sky-500/10",
  },
  {
    icon: Star,
    title: "4.9★ Rated",
    description: "Consistently rated 4.9 stars by 500+ happy travellers on Google and Facebook.",
    color: "text-amber-400",
    bg: "bg-amber-500/10",
  },
  {
    icon: Map,
    title: "Local Experts",
    description: "Born and raised in Himachal, our team knows every hidden gem and shortcut.",
    color: "text-violet-400",
    bg: "bg-violet-500/10",
  },
  {
    icon: HeadphonesIcon,
    title: "Hassle-Free Booking",
    description: "Simple WhatsApp or call booking. No complex forms, no unnecessary steps.",
    color: "text-rose-400",
    bg: "bg-rose-500/10",
  },
  {
    icon: ThumbsUp,
    title: "Best Value",
    description: "Transparent pricing with no hidden costs. What you see is what you pay.",
    color: "text-teal-400",
    bg: "bg-teal-500/10",
  },
];

export default function WhyUsSection() {
  return (
    <section className="py-24 px-4 sm:px-6 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-950/20 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-sky-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <p className="text-sky-400 text-sm font-mono uppercase tracking-widest mb-4">
              Why SKD Holidays
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6">
              Trusted by Thousands of{" "}
              <span className="gradient-text italic">Happy Travellers</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              We&apos;re not just a travel company — we&apos;re passionate Himachali locals who know every mountain pass, every hidden café, and every sunrise viewpoint. When you travel with us, you travel with family.
            </p>

            {/* Badges */}
            <div className="flex flex-wrap gap-3">
              {["HP Tourism Registered", "GST Compliant", "Verified Operator", "Travel Safe Certified"].map((badge) => (
                <span
                  key={badge}
                  className="px-3 py-1.5 rounded-lg glass text-slate-300 text-xs font-mono border border-white/10"
                >
                  ✓ {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {reasons.map((reason) => {
              const Icon = reason.icon;
              return (
                <div
                  key={reason.title}
                  className="glass rounded-2xl p-5 group hover:bg-white/10 transition-all duration-300"
                >
                  <div
                    className={`w-10 h-10 rounded-xl ${reason.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className={`w-5 h-5 ${reason.color}`} />
                  </div>
                  <h3 className="font-semibold text-white mb-1.5">{reason.title}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed">{reason.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
