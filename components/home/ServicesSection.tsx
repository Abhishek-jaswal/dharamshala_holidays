"use client";

import Link from "next/link";
import { Car, Bike, Tent, Map, Camera, Navigation } from "lucide-react";

const services = [
  {
    icon: Car,
    title: "Taxi Booking",
    description: "Comfortable AC taxis for airport transfers, sightseeing, and inter-city travel across Himachal.",
    href: "/rentals",
    gradient: "from-indigo-500 to-violet-600",
    glow: "rgba(99, 102, 241, 0.2)",
  },
  {
    icon: Bike,
    title: "Scooty Rental",
    description: "Explore hill station markets and local areas with our well-maintained automatic scooties.",
    href: "/rentals",
    gradient: "from-sky-500 to-cyan-600",
    glow: "rgba(14, 165, 233, 0.2)",
  },
  {
    icon: Navigation,
    title: "Bike Rental",
    description: "Royal Enfield and adventure bikes for the ultimate Himalayan road trip experience.",
    href: "/rentals",
    gradient: "from-rose-500 to-red-600",
    glow: "rgba(244, 63, 94, 0.2)",
  },
  {
    icon: Tent,
    title: "Tour Packages",
    description: "Curated all-inclusive packages covering destinations across Himachal with expert guides.",
    href: "/destinations",
    gradient: "from-emerald-500 to-teal-600",
    glow: "rgba(16, 185, 129, 0.2)",
  },
  {
    icon: Map,
    title: "Custom Itinerary",
    description: "Get a personalized travel plan designed around your dates, group size, and budget.",
    href: "/contact",
    gradient: "from-amber-500 to-orange-600",
    glow: "rgba(245, 158, 11, 0.2)",
  },
  {
    icon: Camera,
    title: "Local Sightseeing",
    description: "Half and full-day sightseeing tours with local guides who know every viewpoint.",
    href: "/destinations",
    gradient: "from-purple-500 to-fuchsia-600",
    glow: "rgba(168, 85, 247, 0.2)",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-24 px-4 sm:px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sky-400 text-sm font-mono uppercase tracking-widest mb-3">
            What We Offer
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
            Everything You Need for a{" "}
            <span className="gradient-text italic">Perfect Trip</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            From your first mile to the last — we&apos;ve got taxis, rentals, guides, and packages to make your Himachal journey unforgettable.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.title}
                href={service.href}
                className="group relative glass rounded-2xl p-7 hover:bg-white/10 transition-all duration-500 overflow-hidden"
                style={{
                  boxShadow: `0 0 0 0 ${service.glow}`,
                  transition: "all 0.4s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 20px 60px ${service.glow}`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 0 0 0 ${service.glow}`;
                }}
              >
                {/* Gradient orb */}
                <div
                  className={`absolute -top-8 -right-8 w-32 h-32 rounded-full bg-gradient-to-br ${service.gradient} opacity-10 group-hover:opacity-20 blur-2xl transition-opacity duration-500`}
                />

                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>

                {/* Content */}
                <h3 className="font-display font-semibold text-white text-xl mb-2 group-hover:text-sky-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Arrow */}
                <div className="flex items-center gap-1.5 mt-5 text-sky-400 text-sm font-medium opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-1 transition-all duration-300">
                  Learn more
                  <span>→</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
