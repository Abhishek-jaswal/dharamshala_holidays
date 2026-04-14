import type { Metadata } from "next";
import Link from "next/link";
import { Mountain, Heart, MapPin, Award, Users, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "About SKD Holidays – Himachal's Trusted Travel Partner",
  description: "Learn about SKD Holidays — a local Himachal travel company offering premium taxi, rental, and tour services since 2015. Born in Chamba, passionate about Himachal.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="relative py-24 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#060d1f] via-[#0c1f3f] to-[#0a0f1a]" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-emerald-500/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 right-0 h-20 opacity-8">
          <svg viewBox="0 0 1200 80" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0 80 L0 45 L200 15 L400 50 L600 5 L800 40 L1000 10 L1200 35 L1200 80 Z" fill="white" />
          </svg>
        </div>
        <div className="max-w-4xl mx-auto relative text-center">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center mx-auto mb-6 shadow-glow">
            <Mountain className="w-8 h-8 text-white" />
          </div>
          <h1 className="font-display text-5xl sm:text-6xl font-bold text-white mb-5">
            About <span className="gradient-text italic">SKD Holidays</span>
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed max-w-2xl mx-auto">
            Born in the mountains of Himachal Pradesh, built for travellers who want more than just a trip.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 pb-24 space-y-20">
        {/* Story */}
        <section className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sky-400 text-sm font-mono uppercase tracking-widest mb-3">Our Story</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-6">
              From the Heart of <span className="gradient-text italic">Chamba</span>
            </h2>
            <p className="text-slate-300 leading-relaxed mb-5">
              SKD Holidays was founded in 2015 by a group of passionate Himachali locals who believed that travelers deserved more than overpriced package tours and unreliable taxis. We started with a single cab service in Chamba and grew into a full-fledged travel company serving thousands of visitors each year.
            </p>
            <p className="text-slate-400 leading-relaxed mb-5">
              Every member of our team was born and raised in Himachal. We know the roads, the seasons, the hidden viewpoints, and the local families who run the best homestays. When you travel with SKD Holidays, you&apos;re not just booking a service — you&apos;re connecting with people who love this land as much as you will.
            </p>
            <p className="text-slate-400 leading-relaxed">
              From Chamba to Bir Billing, from Khajjiar meadows to Triund summit — our mission is simple: to give every traveller an experience they&apos;ll talk about for years.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: "2015", label: "Founded", icon: Clock },
              { value: "500+", label: "Happy Clients", icon: Heart },
              { value: "20+", label: "Destinations", icon: MapPin },
              { value: "4.9★", label: "Google Rating", icon: Award },
            ].map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="glass rounded-2xl p-6 text-center">
                  <Icon className="w-6 h-6 text-sky-400 mx-auto mb-3" />
                  <div className="font-mono text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-slate-400 text-sm">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Values */}
        <section>
          <p className="text-sky-400 text-sm font-mono uppercase tracking-widest mb-3">Our Values</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-10">
            Why Travellers <span className="gradient-text italic">Trust Us</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { emoji: "🏔️", title: "Local Expertise", desc: "Every guide, driver, and itinerary planner is a Himachal native with years of on-ground experience." },
              { emoji: "🔒", title: "Safety First", desc: "Police-verified drivers, insured vehicles, and emergency protocols for all mountain journeys." },
              { emoji: "💰", title: "Honest Pricing", desc: "No hidden fees. No surprise add-ons. The price we quote is the price you pay." },
              { emoji: "📱", title: "Always Reachable", desc: "WhatsApp or call us 24/7. We're real people, not bots, and we respond fast." },
              { emoji: "🌿", title: "Responsible Tourism", desc: "We promote eco-friendly travel, support local economies, and protect Himachal's natural beauty." },
              { emoji: "❤️", title: "Personalized Care", desc: "Whether it's a solo trip or a 20-person group tour, every traveller gets personal attention." },
            ].map((v) => (
              <div key={v.title} className="glass rounded-2xl p-6 group hover:bg-white/8 transition-all duration-300">
                <div className="text-3xl mb-4">{v.emoji}</div>
                <h3 className="font-display font-semibold text-white text-lg mb-2">{v.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Team note */}
        <section className="glass rounded-3xl p-10 sm:p-14 text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            {["S","K","D"].map((l) => (
              <div key={l} className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center font-display text-xl font-bold text-white">
                {l}
              </div>
            ))}
          </div>
          <h2 className="font-display text-3xl font-bold text-white mb-4">Meet the SKD Team</h2>
          <p className="text-slate-300 text-base max-w-2xl mx-auto mb-8">
            Suresh, Kamal, and Deepak — three childhood friends from Chamba who turned their love for the mountains into a mission to share Himachal&apos;s beauty with the world.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact" className="flex items-center gap-2.5 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold hover:scale-105 transition-transform shadow-glow">
              <Users className="w-5 h-5" /> Connect With Us
            </Link>
            <Link href="/destinations" className="flex items-center gap-2.5 px-7 py-3.5 rounded-2xl glass border border-white/15 text-white font-semibold hover:bg-white/10 transition-all">
              Explore Packages
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
