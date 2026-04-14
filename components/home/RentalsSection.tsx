"use client";
import Link from "next/link";
import { vehicles } from "@/data/rentals";
import { ArrowRight, Users, Fuel } from "lucide-react";

export default function RentalsSection() {
  const featured = vehicles.filter((v) => v.badge).slice(0, 3);
  return (
    <section className="py-24 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a1628]/20 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto relative">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <p className="text-sky-400 text-sm font-mono uppercase tracking-widest mb-3">Vehicle Rentals</p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-white">
              Ride the Mountains <span className="gradient-text italic">Your Way</span>
            </h2>
          </div>
          <Link href="/rentals" className="inline-flex items-center gap-2 text-sky-400 font-medium hover:gap-3 transition-all duration-300 flex-shrink-0">
            View All Vehicles <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((vehicle) => (
            <div key={vehicle.id} className="group glass rounded-3xl overflow-hidden hover:bg-white/10 transition-all duration-500 relative">
              <div className={`h-48 bg-gradient-to-br ${vehicle.gradient} relative flex items-end p-6`}>
                {vehicle.badge && (
                  <span className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-black/30 backdrop-blur-sm text-white text-xs font-mono">
                    {vehicle.badge}
                  </span>
                )}
                <div>
                  <p className="text-white/60 text-xs font-mono uppercase tracking-wider mb-1 capitalize">{vehicle.type}</p>
                  <h3 className="font-display text-2xl font-bold text-white">{vehicle.name}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-slate-400 text-sm leading-relaxed mb-5">{vehicle.description}</p>
                <div className="flex items-center gap-4 mb-5 text-xs text-slate-400">
                  <span className="flex items-center gap-1.5"><Users className="w-3.5 h-3.5 text-sky-400" />{vehicle.capacity} People</span>
                  <span className="flex items-center gap-1.5"><Fuel className="w-3.5 h-3.5 text-sky-400" />{vehicle.fuelType}</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {vehicle.features.slice(0, 3).map((f) => (
                    <span key={f} className="px-2.5 py-1 rounded-lg bg-white/5 text-slate-400 text-xs border border-white/8">{f}</span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-slate-500 text-xs font-mono">From</span>
                    <div className="font-mono text-2xl font-bold text-white">
                      Rs.{vehicle.pricePerDay.toLocaleString("en-IN")}<span className="text-slate-400 text-sm font-normal">/day</span>
                    </div>
                  </div>
                  <Link href="/rentals" className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-sky-500/15 border border-sky-500/25 text-sky-400 text-sm font-medium hover:bg-sky-500/25 transition-all">
                    Book <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
