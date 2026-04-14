import type { Metadata } from "next";
import { vehicles, getVehiclesByType } from "@/data/rentals";
import { Phone, MessageCircle, Check, Users, Fuel, Settings } from "lucide-react";

export const metadata: Metadata = {
  title: "Taxi, Scooty & Bike Rental in Himachal Pradesh",
  description: "Rent taxis, scooties, and Royal Enfield bikes in Himachal Pradesh. SKD Holidays offers well-maintained vehicles with driver, insurance, and 24/7 support for Chamba, Dharamshala, Dalhousie tours.",
};

const categories = [
  { key: "taxi", label: "Taxi / Cab", icon: "🚗", desc: "Perfect for family trips and group sightseeing" },
  { key: "bike", label: "Bike Rental", icon: "🏍️", desc: "Royal Enfield adventures across mountain passes" },
  { key: "scooty", label: "Scooty Rental", icon: "🛵", desc: "Explore hill stations at your own pace" },
] as const;

export default function RentalsPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <div className="relative py-24 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#060d1f] via-[#0a1628] to-[#0a0f1a]" />
        <div className="absolute top-0 left-1/3 w-[500px] h-[500px] rounded-full bg-indigo-500/6 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-20 opacity-10">
          <svg viewBox="0 0 1200 80" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0 80 L0 50 L150 20 L300 45 L450 10 L600 35 L750 8 L900 32 L1050 15 L1200 28 L1200 80 Z" fill="white" />
          </svg>
        </div>
        <div className="max-w-4xl mx-auto relative text-center">
          <p className="text-sky-400 text-sm font-mono uppercase tracking-widest mb-4">Vehicle Rental</p>
          <h1 className="font-display text-5xl sm:text-6xl font-bold text-white mb-5">
            Ride Himachal{" "}
            <span className="gradient-text italic">Your Way</span>
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed max-w-2xl mx-auto">
            From comfortable AC taxis for families to iconic Royal Enfields for adventure riders — we have every vehicle you need to explore Himachal Pradesh.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-24 space-y-20">
        {categories.map(({ key, label, icon, desc }) => {
          const vList = getVehiclesByType(key);
          return (
            <section key={key} id={key}>
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-3xl">{icon}</span>
                    <p className="text-sky-400 text-sm font-mono uppercase tracking-widest">{label}</p>
                  </div>
                  <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">{desc}</h2>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {vList.map((v) => (
                  <div key={v.id} className="group glass rounded-3xl overflow-hidden hover:bg-white/8 transition-all duration-500 relative">
                    {v.badge && (
                      <div className="absolute top-4 right-4 z-10 px-2.5 py-1 rounded-full glass border border-white/20 text-white text-xs font-mono">
                        ⭐ {v.badge}
                      </div>
                    )}
                    {/* Vehicle visual */}
                    <div className={`h-44 bg-gradient-to-br ${v.gradient} relative flex items-end p-6`}>
                      <div className="absolute inset-0 opacity-20" style={{
                        backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")"
                      }} />
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-7xl opacity-30">
                        {icon}
                      </div>
                      <div className="relative z-10">
                        <p className="text-white/60 text-xs font-mono uppercase tracking-wider capitalize">{v.type}</p>
                        <h3 className="font-display text-xl font-bold text-white">{v.name}</h3>
                      </div>
                    </div>

                    <div className="p-6">
                      <p className="text-slate-400 text-sm leading-relaxed mb-5">{v.description}</p>
                      {/* Meta row */}
                      <div className="flex flex-wrap items-center gap-3 mb-5 text-xs text-slate-400">
                        <span className="flex items-center gap-1.5"><Users className="w-3.5 h-3.5 text-sky-400" />{v.capacity} Seats</span>
                        <span className="flex items-center gap-1.5"><Fuel className="w-3.5 h-3.5 text-sky-400" />{v.fuelType}</span>
                        <span className="flex items-center gap-1.5"><Settings className="w-3.5 h-3.5 text-sky-400" />{v.transmission}</span>
                      </div>
                      {/* Features */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {v.features.map((f) => (
                          <span key={f} className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/5 border border-white/8 text-slate-300 text-xs">
                            <Check className="w-2.5 h-2.5 text-emerald-400" />{f}
                          </span>
                        ))}
                      </div>
                      {/* Pricing + CTA */}
                      <div className="flex items-center justify-between pt-4 border-t border-white/8">
                        <div>
                          <div className="text-slate-500 text-xs font-mono">Per day</div>
                          <div className="font-mono text-2xl font-bold text-white">
                            Rs.{v.pricePerDay.toLocaleString("en-IN")}
                          </div>
                          {v.pricePerKm && (
                            <div className="text-slate-500 text-xs font-mono">or Rs.{v.pricePerKm}/km</div>
                          )}
                        </div>
                        <div className="flex flex-col gap-2">
                          <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500/15 border border-emerald-500/25 text-emerald-400 text-xs font-medium hover:bg-emerald-500/25 transition-all">
                            <MessageCircle className="w-3.5 h-3.5" /> WhatsApp
                          </a>
                          <a href="tel:+919999999999"
                            className="flex items-center gap-2 px-4 py-2 rounded-xl glass border border-white/12 text-white text-xs font-medium hover:bg-white/10 transition-all">
                            <Phone className="w-3.5 h-3.5 text-sky-400" /> Call
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          );
        })}

        {/* Rental CTA */}
        <section className="glass rounded-3xl p-10 sm:p-14 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-sky-950/40 to-indigo-950/30 pointer-events-none" />
          <div className="relative z-10">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
              Need a Custom <span className="gradient-text italic">Quote?</span>
            </h2>
            <p className="text-slate-300 text-base mb-8 max-w-xl mx-auto">
              Multi-day tours, airport pickups, outstation trips — get a custom price tailored to your route and group size.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold hover:scale-105 transition-transform shadow-glow">
                <MessageCircle className="w-5 h-5" /> Get Custom Quote
              </a>
              <a href="tel:+919999999999"
                className="flex items-center gap-2.5 px-7 py-3.5 rounded-2xl glass border border-white/15 text-white font-semibold hover:bg-white/10 transition-all">
                <Phone className="w-5 h-5 text-sky-400" /> Call Us
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
