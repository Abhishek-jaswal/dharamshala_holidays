"use client";
import Link from "next/link";
import { Phone, MessageCircle, ArrowRight, MapPin } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-24 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-sky-950/40 via-[#0c1f3f]/60 to-[#0a0f1a] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-sky-500/8 blur-3xl pointer-events-none" />
      <div className="max-w-4xl mx-auto relative text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-sky-500/25 text-sky-300 text-xs font-mono mb-8">
          <MapPin className="w-3.5 h-3.5" /> Based in Chamba, Himachal Pradesh
        </div>
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
          Ready to Explore{" "}<span className="gradient-text italic">Himachal?</span>
        </h2>
        <p className="text-slate-300 text-lg leading-relaxed mb-12 max-w-2xl mx-auto">
          Call us, WhatsApp us, or just drop a message. Our local travel experts are available 24/7 to plan your perfect Himachal journey.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a href="tel:+919999999999" className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold text-base shadow-glow hover:shadow-glow-lg hover:scale-105 transition-all duration-300">
            <Phone className="w-5 h-5" /> Call Now
          </a>
          <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold text-base hover:scale-105 transition-all duration-300">
            <MessageCircle className="w-5 h-5" /> WhatsApp Us
          </a>
          <Link href="/contact" className="group w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-2xl glass border border-white/15 text-white font-semibold text-base hover:bg-white/12 transition-all duration-300">
            Send Enquiry <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6 text-slate-500 text-xs font-mono">
          {["No booking fees","Free itinerary planning","Instant confirmation","Refund policy available"].map((item) => (
            <span key={item} className="flex items-center gap-1.5"><span className="text-sky-500">✓</span> {item}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
