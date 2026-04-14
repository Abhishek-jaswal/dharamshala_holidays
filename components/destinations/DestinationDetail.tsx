"use client";

import Link from "next/link";
import { type Destination, type Package } from "@/data/destinations";
import {
  Phone, MessageCircle, ArrowRight, MapPin, Clock,
  Thermometer, Check, X, Users, Star, ChevronDown, ChevronUp
} from "lucide-react";
import { useState } from "react";

function PackageCard({ pkg, accentColor }: { pkg: Package; accentColor: string }) {
  const [expanded, setExpanded] = useState(false);
  const badgeColor = pkg.type === "premium" ? "from-amber-500 to-orange-500" :
    pkg.type === "standard" ? "from-sky-500 to-blue-500" : "from-slate-500 to-slate-600";

  return (
    <div className={`glass rounded-3xl overflow-hidden transition-all duration-500 relative ${
      pkg.type === "premium" ? "ring-1 ring-amber-500/30" :
      pkg.type === "standard" ? "ring-1 ring-sky-500/20" : ""
    }`}>
      {pkg.type === "premium" && (
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-500 to-orange-500" />
      )}

      <div className="p-6 sm:p-8">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-6">
          <div>
            <span className={`inline-flex px-3 py-1 rounded-full bg-gradient-to-r ${badgeColor} text-white text-xs font-mono uppercase tracking-wide mb-3`}>
              {pkg.type}
            </span>
            <h3 className="font-display text-2xl font-bold text-white mb-1">{pkg.name}</h3>
            <div className="flex items-center gap-4 text-slate-400 text-sm">
              <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-sky-400" />{pkg.duration}</span>
              <span className="flex items-center gap-1.5"><Users className="w-3.5 h-3.5 text-sky-400" />{pkg.groupSize}</span>
            </div>
          </div>
          <div className="text-right flex-shrink-0">
            {pkg.originalPrice && (
              <div className="text-slate-500 text-sm font-mono line-through">
                Rs.{pkg.originalPrice.toLocaleString("en-IN")}
              </div>
            )}
            <div className="font-mono text-3xl font-bold text-white">
              Rs.{pkg.price.toLocaleString("en-IN")}
            </div>
            <div className="text-slate-400 text-xs">per person</div>
            {pkg.originalPrice && (
              <div className="text-emerald-400 text-xs font-mono mt-1">
                Save Rs.{(pkg.originalPrice - pkg.price).toLocaleString("en-IN")}
              </div>
            )}
          </div>
        </div>

        {/* Highlights */}
        <div className="flex flex-wrap gap-2 mb-6">
          {pkg.highlights.map((h) => (
            <span key={h} className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/8 text-slate-300 text-xs">
              {h}
            </span>
          ))}
        </div>

        {/* Best for */}
        <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-sky-500/10 border border-sky-500/15 mb-6 w-fit">
          <Star className="w-3.5 h-3.5 text-sky-400" />
          <span className="text-sky-300 text-xs font-medium">Best for: {pkg.bestFor}</span>
        </div>

        {/* Expandable inclusions */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-2 text-sm text-sky-400 font-medium mb-4 hover:text-sky-300 transition-colors"
        >
          {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          {expanded ? "Hide" : "Show"} Inclusions & Exclusions
        </button>

        {expanded && (
          <div className="grid sm:grid-cols-2 gap-5 mb-6 pt-2 border-t border-white/8">
            <div>
              <h4 className="text-emerald-400 text-xs font-mono uppercase tracking-wide mb-3">Included</h4>
              <ul className="space-y-2">
                {pkg.inclusions.map((inc) => (
                  <li key={inc} className="flex items-start gap-2 text-slate-300 text-xs leading-relaxed">
                    <Check className="w-3.5 h-3.5 text-emerald-400 mt-0.5 flex-shrink-0" />
                    {inc}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-red-400 text-xs font-mono uppercase tracking-wide mb-3">Excluded</h4>
              <ul className="space-y-2">
                {pkg.exclusions.map((exc) => (
                  <li key={exc} className="flex items-start gap-2 text-slate-400 text-xs leading-relaxed">
                    <X className="w-3.5 h-3.5 text-red-400 mt-0.5 flex-shrink-0" />
                    {exc}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-white/8">
          <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold text-sm hover:scale-105 transition-transform"
          >
            <MessageCircle className="w-4 h-4" /> Book Now
          </a>
          <a
            href="tel:+919999999999"
            className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-xl glass border border-white/15 text-white font-semibold text-sm hover:bg-white/10 transition-all"
          >
            <Phone className="w-4 h-4 text-sky-400" /> Enquire
          </a>
        </div>
      </div>
    </div>
  );
}

export default function DestinationDetail({ destination: dest }: { destination: Destination }) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Banner */}
      <section className={`relative min-h-[65vh] flex items-end bg-gradient-to-br ${dest.heroGradient} overflow-hidden`}>
        {/* Noise overlay */}
        <div className="absolute inset-0 opacity-20 mix-blend-overlay"
          style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")" }}
        />
        {/* Mountain layers */}
        <div className="absolute bottom-0 left-0 right-0 h-48 opacity-20">
          <svg viewBox="0 0 1200 160" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0 160 L0 100 L120 40 L240 80 L360 20 L480 65 L600 10 L720 55 L840 25 L960 70 L1080 30 L1200 60 L1200 160 Z" fill="white" />
            <path d="M0 160 L0 120 L150 70 L300 100 L450 55 L600 85 L750 45 L900 80 L1050 50 L1200 75 L1200 160 Z" fill="white" opacity="0.5" />
          </svg>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1a] via-transparent to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pb-16 w-full">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-white/50 text-sm mb-6">
            <Link href="/" className="hover:text-white/80 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/destinations" className="hover:text-white/80 transition-colors">Destinations</Link>
            <span>/</span>
            <span className="text-white/80">{dest.name}</span>
          </div>

          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/30 backdrop-blur-sm text-white/70 text-xs font-mono">
                <MapPin className="w-3.5 h-3.5" /> Himachal Pradesh
              </div>
              {dest.altitude && (
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/30 backdrop-blur-sm text-white/70 text-xs font-mono">
                  ⛰ {dest.altitude}
                </div>
              )}
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/30 backdrop-blur-sm text-white/70 text-xs font-mono">
                <Thermometer className="w-3.5 h-3.5" /> {dest.temperature}
              </div>
            </div>
            <h1 className="font-display text-6xl sm:text-7xl lg:text-8xl font-bold text-white mb-3 leading-none">
              {dest.name}
            </h1>
            <p className="text-white/70 text-xl italic font-display mb-4">{dest.tagline}</p>
            <p className="text-white/60 text-base max-w-xl leading-relaxed">{dest.description}</p>
          </div>
        </div>
      </section>

      {/* Sticky booking bar */}
      <div className="sticky top-16 z-40 glass-dark border-b border-white/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-5 text-sm">
            <span className="text-white font-semibold">{dest.name}</span>
            <span className="text-slate-400">From <span className="text-white font-mono font-bold">Rs.{dest.packages[0]?.price.toLocaleString("en-IN")}</span></span>
          </div>
          <div className="flex items-center gap-3">
            <a href="tel:+919999999999" className="flex items-center gap-2 px-4 py-2 rounded-xl glass border border-white/12 text-white text-xs font-medium hover:bg-white/10 transition-all">
              <Phone className="w-3.5 h-3.5 text-sky-400" /> Call Us
            </a>
            <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-medium hover:bg-emerald-500/30 transition-all">
              <MessageCircle className="w-3.5 h-3.5" /> WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 space-y-20">

        {/* Overview */}
        <section>
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <p className="text-sky-400 text-sm font-mono uppercase tracking-widest mb-3">About</p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-6">
                Overview of <span className="gradient-text">{dest.name}</span>
              </h2>
              <p className="text-slate-300 text-base leading-relaxed mb-8">{dest.overview}</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {dest.highlights.map((h) => (
                  <div key={h} className="flex items-center gap-2.5 glass rounded-xl px-3 py-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-sky-400 flex-shrink-0" />
                    <span className="text-slate-300 text-xs">{h}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              {[
                { label: "Best Time to Visit", value: dest.bestTime, icon: Clock },
                { label: "Temperature Range", value: dest.temperature, icon: Thermometer },
                { label: "Altitude", value: dest.altitude || "Varies", icon: MapPin },
                { label: "Tour Packages", value: `${dest.packages.length} Options`, icon: Star },
              ].map((info) => {
                const Icon = info.icon;
                return (
                  <div key={info.label} className="glass rounded-2xl p-4 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-sky-500/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4.5 h-4.5 text-sky-400" />
                    </div>
                    <div>
                      <div className="text-slate-400 text-xs">{info.label}</div>
                      <div className="text-white font-semibold text-sm">{info.value}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Tour Packages */}
        <section>
          <p className="text-sky-400 text-sm font-mono uppercase tracking-widest mb-3">Tour Packages</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-10">
            {dest.name} <span className="gradient-text italic">Packages</span>
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {dest.packages.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} accentColor={dest.accentColor} />
            ))}
          </div>
        </section>

        {/* Activities */}
        <section>
          <p className="text-sky-400 text-sm font-mono uppercase tracking-widest mb-3">Experiences</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-10">
            Activities in <span className="gradient-text italic">{dest.name}</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {dest.activities.map((act) => (
              <div key={act.id} className="glass rounded-2xl p-6 group hover:bg-white/10 transition-all duration-300 relative overflow-hidden">
                <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-sky-500/5 blur-xl group-hover:bg-sky-500/10 transition-all" />
                <div className="text-4xl mb-4">{act.icon}</div>
                <h3 className="font-display font-semibold text-white text-lg mb-2">{act.name}</h3>
                <p className="text-slate-400 text-xs leading-relaxed mb-4">{act.description}</p>
                <div className="flex items-center justify-between text-xs">
                  <span className="flex items-center gap-1 text-slate-400"><Clock className="w-3 h-3 text-sky-400" />{act.duration}</span>
                  <span className="font-mono text-white font-bold">Rs.{act.price.toLocaleString("en-IN")}</span>
                </div>
                <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer"
                  className="mt-4 flex items-center justify-center gap-1.5 w-full py-2 rounded-xl bg-sky-500/15 border border-sky-500/20 text-sky-400 text-xs font-medium hover:bg-sky-500/25 transition-all opacity-0 group-hover:opacity-100">
                  Book Activity <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Rentals */}
        <section>
          <p className="text-sky-400 text-sm font-mono uppercase tracking-widest mb-3">Vehicle Rental</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-10">
            Taxi &amp; Rental in <span className="gradient-text italic">{dest.name}</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {dest.rentals.map((r) => (
              <div key={r.id} className="glass rounded-2xl p-6 group hover:bg-white/8 transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="inline-block px-2.5 py-1 rounded-lg bg-sky-500/10 text-sky-400 text-xs font-mono uppercase mb-2">{r.type}</span>
                    <h3 className="font-display text-xl font-bold text-white">{r.name}</h3>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-xl">
                    {r.type === "taxi" ? "🚗" : r.type === "bike" ? "🏍️" : "🛵"}
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-5">
                  {r.features.map((f) => (
                    <span key={f} className="px-2 py-0.5 rounded-md bg-white/5 text-slate-400 text-xs border border-white/8 flex items-center gap-1">
                      <Check className="w-2.5 h-2.5 text-emerald-400" />{f}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-white/8">
                  <div>
                    <span className="text-slate-500 text-xs font-mono">Per day</span>
                    <div className="font-mono text-2xl font-bold text-white">
                      Rs.{r.pricePerDay.toLocaleString("en-IN")}
                    </div>
                  </div>
                  <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500/15 border border-emerald-500/25 text-emerald-400 text-sm font-medium hover:bg-emerald-500/25 transition-all">
                    <MessageCircle className="w-4 h-4" /> Book
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        {dest.faqs.length > 0 && (
          <section>
            <p className="text-sky-400 text-sm font-mono uppercase tracking-widest mb-3">FAQ</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-10">
              Frequently Asked <span className="gradient-text italic">Questions</span>
            </h2>
            <div className="max-w-3xl space-y-3">
              {dest.faqs.map((faq, i) => (
                <div key={i} className="glass rounded-2xl overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="text-white font-medium text-sm sm:text-base">{faq.question}</span>
                    {openFaq === i ? <ChevronUp className="w-4 h-4 text-sky-400 flex-shrink-0" /> : <ChevronDown className="w-4 h-4 text-slate-400 flex-shrink-0" />}
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-5 text-slate-400 text-sm leading-relaxed border-t border-white/8 pt-4">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Bottom CTA */}
        <section className="relative rounded-3xl overflow-hidden">
          <div className={`absolute inset-0 bg-gradient-to-br ${dest.heroGradient} opacity-30`} />
          <div className="absolute inset-0 glass" />
          <div className="relative z-10 p-10 sm:p-14 text-center">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Visit <span className="gradient-text italic">{dest.name}?</span>
            </h2>
            <p className="text-slate-300 text-base mb-8 max-w-xl mx-auto">
              Let our local experts plan your perfect {dest.name} trip. Call us or WhatsApp for a free itinerary and best price guarantee.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold hover:scale-105 transition-transform">
                <MessageCircle className="w-5 h-5" /> WhatsApp Us
              </a>
              <a href="tel:+919999999999"
                className="flex items-center gap-2.5 px-7 py-3.5 rounded-2xl glass border border-white/20 text-white font-semibold hover:bg-white/10 transition-all">
                <Phone className="w-5 h-5 text-sky-400" /> Call Now
              </a>
              <Link href="/destinations"
                className="flex items-center gap-2 text-sky-400 font-medium hover:gap-3 transition-all">
                More Destinations <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
