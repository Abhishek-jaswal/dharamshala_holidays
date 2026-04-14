"use client";
import { Phone, MessageCircle, Mail, MapPin, Clock } from "lucide-react";
import Link from "next/link";

export default function ContactClient() {
  return (
    <div className="min-h-screen pt-20">
      <div className="relative py-24 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#060d1f] via-[#0c1f3f] to-[#0a0f1a]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-emerald-500/5 blur-3xl" />
        <div className="max-w-3xl mx-auto relative text-center">
          <p className="text-sky-400 text-sm font-mono uppercase tracking-widest mb-4">Get in Touch</p>
          <h1 className="font-display text-5xl sm:text-6xl font-bold text-white mb-5">
            Plan Your <span className="gradient-text italic">Dream Trip</span>
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed">
            Contact our travel experts — available 24/7 via WhatsApp, phone, or email. Free itinerary planning, no booking fees.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-24">
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-5">
            <h2 className="font-display text-2xl font-bold text-white mb-7">Reach Us Directly</h2>
            {[
              { icon: MessageCircle, label: "WhatsApp (Preferred)", value: "+91 99999 99999", desc: "Fastest response. Chat with us about your trip.", href: "https://wa.me/919999999999", color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/20", cta: "Open WhatsApp" },
              { icon: Phone, label: "Call Us", value: "+91 99999 99999", desc: "Available 7 AM – 10 PM IST, 7 days a week.", href: "tel:+919999999999", color: "text-sky-400", bg: "bg-sky-500/10", border: "border-sky-500/20", cta: "Call Now" },
              { icon: Mail, label: "Email", value: "info@skdholidays.com", desc: "We reply within 4–6 hours on business days.", href: "mailto:info@skdholidays.com", color: "text-violet-400", bg: "bg-violet-500/10", border: "border-violet-500/20", cta: "Send Email" },
              { icon: MapPin, label: "Visit Us", value: "Chamba, Himachal Pradesh", desc: "Main Chowk, Chamba – 176310, India", href: "https://maps.google.com", color: "text-rose-400", bg: "bg-rose-500/10", border: "border-rose-500/20", cta: "View on Maps" },
            ].map((c) => {
              const Icon = c.icon;
              return (
                <a key={c.label} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className={`flex items-start gap-4 glass rounded-2xl p-5 border ${c.border} group hover:bg-white/8 transition-all duration-300`}>
                  <div className={`w-12 h-12 rounded-xl ${c.bg} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-5 h-5 ${c.color}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-slate-400 text-xs font-mono uppercase tracking-wide mb-0.5">{c.label}</p>
                    <p className="text-white font-semibold mb-1 truncate">{c.value}</p>
                    <p className="text-slate-400 text-xs">{c.desc}</p>
                  </div>
                  <span className={`text-xs font-medium ${c.color} flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity`}>{c.cta} →</span>
                </a>
              );
            })}
            <div className="glass rounded-2xl p-5">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-amber-400" />
                </div>
                <h3 className="text-white font-semibold">Operating Hours</h3>
              </div>
              <div className="space-y-2 text-sm">
                {[
                  { day: "Monday – Friday", hours: "7:00 AM – 9:00 PM" },
                  { day: "Saturday – Sunday", hours: "7:00 AM – 10:00 PM" },
                  { day: "WhatsApp Support", hours: "24/7 Available" },
                ].map((h) => (
                  <div key={h.day} className="flex items-center justify-between text-slate-400">
                    <span>{h.day}</span><span className="text-slate-300 font-medium">{h.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="glass rounded-3xl p-8">
            <h2 className="font-display text-2xl font-bold text-white mb-7">Send an Enquiry</h2>
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-slate-400 text-xs font-mono uppercase tracking-wide mb-2 block">Full Name</label>
                  <input type="text" placeholder="Your name" className="w-full px-4 py-3 rounded-xl glass border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-sky-500/50 transition-all" />
                </div>
                <div>
                  <label className="text-slate-400 text-xs font-mono uppercase tracking-wide mb-2 block">Phone / WhatsApp</label>
                  <input type="tel" placeholder="+91 XXXXX XXXXX" className="w-full px-4 py-3 rounded-xl glass border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-sky-500/50 transition-all" />
                </div>
              </div>
              <div>
                <label className="text-slate-400 text-xs font-mono uppercase tracking-wide mb-2 block">Destination</label>
                <select className="w-full px-4 py-3 rounded-xl glass border border-white/10 text-white text-sm focus:outline-none focus:border-sky-500/50 transition-all bg-transparent">
                  <option value="" className="bg-[#0a0f1a]">Select a destination</option>
                  {["Chamba","Dharamshala","Dalhousie","Khajjiar","Bir Billing","McLeodganj","Multiple"].map((d) => (
                    <option key={d} value={d} className="bg-[#0a0f1a]">{d}</option>
                  ))}
                </select>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-slate-400 text-xs font-mono uppercase tracking-wide mb-2 block">Travel Date</label>
                  <input type="date" className="w-full px-4 py-3 rounded-xl glass border border-white/10 text-white text-sm focus:outline-none focus:border-sky-500/50 transition-all" />
                </div>
                <div>
                  <label className="text-slate-400 text-xs font-mono uppercase tracking-wide mb-2 block">Group Size</label>
                  <select className="w-full px-4 py-3 rounded-xl glass border border-white/10 text-white text-sm focus:outline-none focus:border-sky-500/50 transition-all bg-transparent">
                    {["1 Person","2 People","3-4 People","5-7 People","8-12 People","12+ People"].map((g) => (
                      <option key={g} value={g} className="bg-[#0a0f1a]">{g}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <label className="text-slate-400 text-xs font-mono uppercase tracking-wide mb-2 block">Message</label>
                <textarea rows={4} placeholder="Tell us about your trip requirements, budget, preferences..." className="w-full px-4 py-3 rounded-xl glass border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-sky-500/50 transition-all resize-none" />
              </div>
              <button type="submit" className="w-full py-4 rounded-2xl bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold text-base hover:scale-[1.02] transition-transform shadow-glow hover:shadow-glow-lg">
                Send Enquiry
              </button>
              <p className="text-slate-500 text-xs text-center">We respond within 2 hours via WhatsApp or call.</p>
            </form>
          </div>
        </div>

        <div className="mt-12 glass rounded-3xl overflow-hidden">
          <div className="h-64 bg-gradient-to-br from-[#0c1f3f] to-[#0a1628] flex items-center justify-center relative">
            <div className="absolute inset-0 opacity-10">
              <svg viewBox="0 0 800 256" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
                {Array.from({ length: 20 }).map((_, i) => <line key={i} x1={i * 40} y1="0" x2={i * 40} y2="256" stroke="white" strokeWidth="0.5" />)}
                {Array.from({ length: 8 }).map((_, i) => <line key={i} x1="0" y1={i * 32} x2="800" y2={i * 32} stroke="white" strokeWidth="0.5" />)}
              </svg>
            </div>
            <div className="text-center relative z-10">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center mx-auto mb-3 shadow-glow">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <p className="text-white font-semibold mb-1">SKD Holidays</p>
              <p className="text-slate-400 text-sm">Main Chowk, Chamba, Himachal Pradesh</p>
              <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-xl glass border border-white/15 text-sky-400 text-sm hover:bg-white/10 transition-all">
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
