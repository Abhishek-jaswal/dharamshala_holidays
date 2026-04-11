import type { Metadata } from "next";
import Link from "next/link";
import { Car, Bike, Plane, Phone, MessageCircle, Star, CheckCircle, MapPin, ArrowRight } from "lucide-react";
import { CTASection } from "@/components/sections/CTASection";
import { BUSINESS, WHATSAPP_URL, CALL_URL, TESTIMONIALS, DESTINATIONS } from "@/constants/business";
import dynamic from "next/dynamic";

// Dynamic import so Three.js only loads client-side
const HeroScene = dynamic(
  () => import("@/components/animated/HeroScene").then((m) => ({ default: m.HeroScene })),
  { ssr: false }
);

export const metadata: Metadata = {
  title: "SKD Holidays | Taxi & Scooty Rental in Dharamshala",
  description:
    "Book taxi, scooty & bike rentals in Dharamshala. 24/7 airport pickup, local sightseeing. Trusted by 500+ travellers. Call or WhatsApp to book instantly.",
  keywords:
    "taxi service Dharamshala, scooty on rent Dharamshala, bike rental, airport pickup, McLeod Ganj taxi, SKD Holidays",
};

const services = [
  {
    icon: Car,
    title: "Taxi Service",
    desc: "Local rides, sightseeing & outstation trips",
    price: "₹300",
    href: "/services/taxi",
    color: "from-orange-500 to-amber-500",
    emoji: "🚕",
  },
  {
    icon: Bike,
    title: "Scooty on Rent",
    desc: "Explore Dharamshala freely at your own pace",
    price: "₹400/day",
    href: "/services/scooty-on-rent",
    color: "from-sky-500 to-blue-600",
    emoji: "🛵",
  },
  {
    icon: Bike,
    title: "Bike on Rent",
    desc: "Royal Enfield & more for adventure riders",
    price: "₹800/day",
    href: "/services/bike-on-rent",
    color: "from-purple-500 to-violet-600",
    emoji: "🏍️",
  },
  {
    icon: Plane,
    title: "Airport Pickup",
    desc: "24/7 Kangra Airport transfer, on-time always",
    price: "₹600",
    href: "/services/airport-pickup",
    color: "from-green-500 to-emerald-600",
    emoji: "✈️",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#060d1f]">
        {/* Three.js background */}
        <HeroScene />

        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-[#060d1f] pointer-events-none z-10" />

        {/* Content */}
        <div className="relative z-20 text-center px-4 max-w-3xl mx-auto pt-24 pb-16">
          {/* Location pill */}
          <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            <MapPin className="h-3.5 w-3.5 text-orange-400" />
            Dharamshala · McLeod Ganj · Himachal Pradesh
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-5 drop-shadow-xl">
            Taxi & Scooty Rental<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">
              in Dharamshala
            </span>
          </h1>

          <p className="text-lg md:text-xl text-white/75 mb-10 max-w-xl mx-auto leading-relaxed">
            Quick booking · Fair prices · 24/7 available
          </p>

          {/* BIG action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-green-500 hover:bg-green-400 text-white font-bold text-lg py-4 px-10 rounded-2xl shadow-2xl shadow-green-900/50 transition-all duration-200 hover:scale-105 active:scale-95 w-full sm:w-auto justify-center"
            >
              <MessageCircle className="h-6 w-6" />
              WhatsApp करें
            </a>
            <a
              href={CALL_URL}
              className="flex items-center gap-3 bg-white/15 hover:bg-white/25 backdrop-blur border border-white/30 text-white font-bold text-lg py-4 px-10 rounded-2xl shadow-xl transition-all duration-200 hover:scale-105 active:scale-95 w-full sm:w-auto justify-center"
            >
              <Phone className="h-6 w-6" />
              {BUSINESS.phone}
            </a>
          </div>

          {/* Trust row */}
          <div className="flex flex-wrap items-center justify-center gap-5 mt-10 text-sm text-white/60">
            {["✅ 500+ खुश यात्री", "⭐ 5-Star Rating", "🕐 24/7 उपलब्ध", "💰 Fixed Price"].map((t) => (
              <span key={t} className="whitespace-nowrap">{t}</span>
            ))}
          </div>
        </div>

        {/* Animated scroll hint */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white/40 text-xs animate-bounce">
          <span>नीचे देखें</span>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-orange-600 font-semibold text-sm uppercase tracking-widest mb-2">हमारी सेवाएं</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">क्या चाहिए आपको?</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s) => (
              <Link
                key={s.title}
                href={s.href}
                className="group relative bg-white rounded-3xl p-6 shadow-md hover:shadow-2xl border border-gray-100 transition-all duration-300 hover:-translate-y-2 overflow-hidden"
              >
                {/* Gradient bar on top */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${s.color} rounded-t-3xl`} />

                <div className="text-4xl mb-4">{s.emoji}</div>
                <h3 className="font-bold text-xl text-gray-900 mb-1">{s.title}</h3>
                <p className="text-gray-500 text-sm mb-4 leading-relaxed">{s.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="font-extrabold text-orange-600 text-lg">से {s.price}</span>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-orange-600 group-hover:gap-2 transition-all">
                    बुक करें <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW TO BOOK ── */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-[#0f1d33] to-[#1a2f50] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: "repeating-linear-gradient(90deg, #fff 0px, #fff 2px, transparent 2px, transparent 80px)",
          backgroundSize: "80px 100%",
        }} />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <p className="text-orange-400 font-semibold text-sm uppercase tracking-widest mb-2">बुकिंग कैसे करें</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">बस 3 आसान कदम</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { step: "1", icon: "📱", title: "WhatsApp या Call करें", desc: "हमें संदेश भेजें या सीधे कॉल करें" },
              { step: "2", icon: "📍", title: "लोकेशन बताएं", desc: "कहाँ से और कहाँ जाना है बताएं" },
              { step: "3", icon: "✅", title: "बुकिंग पक्की!", desc: "तुरंत confirmation मिलेगी" },
            ].map((item) => (
              <div key={item.step} className="relative bg-white/10 backdrop-blur border border-white/10 rounded-3xl p-8 text-center hover:bg-white/15 transition-all duration-300">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                  {item.step}
                </div>
                <div className="text-5xl mb-4 mt-2">{item.icon}</div>
                <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-white/60 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-400 text-white font-bold text-lg py-4 px-12 rounded-2xl shadow-2xl shadow-green-900/30 transition-all duration-200 hover:scale-105 active:scale-95"
            >
              <MessageCircle className="h-6 w-6" />
              अभी बुक करें
            </a>
          </div>
        </div>
      </section>

      {/* ── POPULAR ROUTES ── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-orange-600 font-semibold text-sm uppercase tracking-widest mb-2">Popular Routes</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">कहाँ-कहाँ जाते हैं हम?</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {DESTINATIONS.map((d) => (
              <div
                key={d.name}
                className="group bg-gray-50 hover:bg-orange-50 border border-gray-100 hover:border-orange-200 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-bold text-gray-900 text-base">{d.name}</h3>
                    <p className="text-xs text-gray-400 mt-0.5">{d.from} से · {d.distance} · {d.time}</p>
                  </div>
                  <MapPin className="h-4 w-4 text-orange-400 mt-1 flex-shrink-0" />
                </div>
                <p className="font-extrabold text-orange-600 text-xl">{d.price}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-gray-400 mt-6">
            * ये अनुमानित कीमतें हैं।{" "}
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-orange-600 font-semibold hover:underline">
              पक्की कीमत जानें →
            </a>
          </p>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-orange-600 font-semibold text-sm uppercase tracking-widest mb-2">Reviews</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">यात्रियों ने क्या कहा</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.name}
                className="bg-white rounded-3xl p-6 shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col gap-4"
              >
                <div className="flex gap-1">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed flex-1">&ldquo;{t.text}&rdquo;</p>
                <span className="self-start bg-orange-50 text-orange-700 text-xs font-semibold px-3 py-1 rounded-full">
                  {t.trip}
                </span>
                <div className="flex items-center gap-3 pt-2 border-t border-gray-100">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-amber-500 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-gray-900">{t.name}</p>
                    <p className="text-xs text-gray-400">{t.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-orange-600 font-semibold text-sm uppercase tracking-widest mb-2">क्यों चुनें हमें?</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
                Dharamshala की सबसे भरोसेमंद सेवा
              </h2>
              <ul className="space-y-4">
                {[
                  "कोई छुपा हुआ charge नहीं",
                  "साफ और अच्छी गाड़ियां",
                  "Local driver जो हर रास्ता जानें",
                  "WhatsApp पर तुरंत booking",
                  "24/7 airport pickup उपलब्ध",
                  "Dharamshala, McLeod Ganj, Bhagsu सब जगह",
                ].map((text) => (
                  <li key={text} className="flex items-start gap-3 text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="font-medium">{text}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex gap-4 flex-wrap">
                <a href={CALL_URL} className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-7 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg active:scale-95">
                  <Phone className="h-4 w-4" /> Call Now
                </a>
                <Link href="/about" className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-orange-600 font-bold py-3 px-7 rounded-xl border-2 border-orange-600 transition-all duration-200 active:scale-95">
                  About Us
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-5">
              {[
                { number: "500+", label: "खुश यात्री", bg: "bg-orange-50", border: "border-orange-200", text: "text-orange-700" },
                { number: "5 ⭐", label: "Rating", bg: "bg-amber-50", border: "border-amber-200", text: "text-amber-700" },
                { number: "24/7", label: "Airport Service", bg: "bg-blue-50", border: "border-blue-200", text: "text-blue-700" },
                { number: "50+", label: "Routes", bg: "bg-green-50", border: "border-green-200", text: "text-green-700" },
              ].map(({ number, label, bg, border, text }) => (
                <div key={label} className={`${bg} border-2 ${border} rounded-3xl p-7 text-center`}>
                  <p className={`text-4xl font-extrabold ${text}`}>{number}</p>
                  <p className="text-gray-500 text-sm mt-1 font-medium">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── MAP ── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-extrabold text-gray-900">हमारा Location</h2>
            <p className="text-gray-500 text-sm mt-1">McLeod Ganj Bus Stand के पास · Dharamshala</p>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-200 h-72 md:h-80">
            <iframe
              src={BUSINESS.googleMapsEmbed}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="SKD Holidays Location"
            />
          </div>
          <div className="text-center mt-5">
            <a
              href={BUSINESS.googleMapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-orange-600 font-bold py-3 px-6 rounded-xl border-2 border-orange-600 transition-all duration-200 active:scale-95"
            >
              <MapPin className="h-4 w-4" /> Google Maps पर देखें
            </a>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <CTASection />
    </>
  );
}
