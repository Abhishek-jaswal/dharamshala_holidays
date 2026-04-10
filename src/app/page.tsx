import type { Metadata } from "next";
import Link from "next/link";
import {
  Car, Bike, Plane, MapPin, Phone, MessageCircle,
  Star, Shield, Clock, Users, CheckCircle, ArrowRight
} from "lucide-react";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { TestimonialCard } from "@/components/sections/TestimonialCard";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { SectionHeading } from "@/components/shared/SectionHeading";
import {
  BUSINESS, WHATSAPP_URL, CALL_URL,
  TESTIMONIALS, FAQS, DESTINATIONS
} from "@/constants/business";

export const metadata: Metadata = {
  title: "SKD Holidays | Taxi Service & Scooty Rental in Dharamshala",
  description:
    "Book premium taxi service and scooty rentals in Dharamshala with SKD Holidays. Affordable rates, 24/7 Kangra airport pickup, local sightseeing, and outstation trips. Well-maintained vehicles with experienced drivers.",
  keywords: "SKD holidays Dharamshala, taxi service Dharamshala, scooty rental Dharamshala, bike rental, airport pickup, McLeod Ganj taxi",
  keywords:
    "taxi service in Dharamshala, scooty on rent in Dharamshala, bike rental Dharamshala, airport pickup Dharamshala, McLeod Ganj taxi, local sightseeing Dharamshala",
};

const trustBadges = [
  { icon: Star, label: "5-Star Rated", desc: "Loved by 500+ travellers" },
  { icon: Shield, label: "Safe & Reliable", desc: "Verified, experienced drivers" },
  { icon: Clock, label: "24/7 Available", desc: "Airport pickups any hour" },
  { icon: Users, label: "Local Experts", desc: "Born & raised in Dharamshala" },
];

const services = [
  {
    icon: Car,
    title: "Local Taxi Service",
    description:
      "Comfortable taxi rides across Dharamshala, McLeod Ganj, Bhagsu, Naddi, Dharamkot, and all nearby attractions.",
    href: "/services/taxi",
    price: "₹300",
    features: ["AC & non-AC vehicles", "Experienced local drivers", "Fixed transparent pricing"],
  },
  {
    icon: Bike,
    title: "Scooty on Rent",
    description:
      "Explore Dharamshala at your own pace! Rent a scooty and discover hidden cafes, viewpoints, and trails freely.",
    href: "/services/scooty-on-rent",
    price: "₹400/day",
    features: ["Well-maintained scooties", "Helmet included", "Valid DL required"],
    accent: true,
  },
  {
    icon: Bike,
    title: "Bike on Rent",
    description:
      "Royal Enfield Bullet, Honda CB, and other bikes available for adventure riders exploring the Himachal hills.",
    href: "/services/bike-on-rent",
    price: "₹800/day",
    features: ["Royal Enfield & more", "GPS tracker on bikes", "24-hr breakdown support"],
  },
  {
    icon: Plane,
    title: "Airport Pickup & Drop",
    description:
      "On-time pickup and drop to/from Kangra-Gaggal Airport (DHM). Available 24/7 for all flight schedules.",
    href: "/services/airport-pickup",
    price: "₹600",
    features: ["Meet & greet service", "Flight tracking", "No extra night charges"],
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-slate-900 via-brand-900 to-slate-800">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: "radial-gradient(circle at 25% 35%, #f97316 0%, transparent 50%), radial-gradient(circle at 75% 65%, #0ea5e9 0%, transparent 50%)",
          }} />
        </div>

        <div className="container-custom relative z-10 py-20">
          <div className="max-w-3xl">
            {/* Badge */}
            <span className="inline-flex items-center gap-2 bg-brand-600/20 border border-brand-500/30 text-brand-300 text-sm font-semibold px-4 py-2 rounded-full mb-6">
              <MapPin className="h-4 w-4" />
              Dharamshala, Himachal Pradesh
            </span>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Reliable Taxi Service &{" "}
              <span className="text-brand-400">Scooty on Rent</span>{" "}
              in Dharamshala
            </h1>

            <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl">
              Affordable taxi, bike, and scooty rental for local sightseeing, airport
              transfers, and outstation travel. Trusted by thousands of tourists visiting
              McLeod Ganj, Bhagsu, Triund, and Kangra.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-base px-8 py-4"
              >
                <MessageCircle className="h-5 w-5" />
                Book on WhatsApp
              </a>
              <a
                href={CALL_URL}
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-200 active:scale-95"
              >
                <Phone className="h-5 w-5" />
                Call {BUSINESS.phone}
              </a>
            </div>

            {/* Quick trust stats */}
            <div className="flex flex-wrap gap-6">
              {["500+ Happy Customers", "24/7 Airport Pickup", "Fixed Fair Pricing"].map((t) => (
                <div key={t} className="flex items-center gap-2 text-sm text-gray-400">
                  <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-500 text-xs">
          <span>Scroll down</span>
          <div className="w-px h-8 bg-gray-600" />
        </div>
      </section>

      {/* ── TRUST BADGES ── */}
      <section className="bg-brand-700 py-8">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustBadges.map(({ icon: Icon, label, desc }) => (
              <div key={label} className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/15 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-bold text-white text-sm">{label}</p>
                  <p className="text-brand-200 text-xs">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="section-pad bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            label="Our Services"
            title="Everything You Need to Explore Dharamshala"
            subtitle="Whether you need a taxi for sightseeing, a scooty for solo exploration, or a night pickup from the airport — we have you covered."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <ServiceCard key={s.title} {...s} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/services" className="btn-secondary">
              View All Services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="section-pad bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-brand-600 font-semibold text-sm uppercase tracking-widest">
                Why Choose Us
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                Dharamshala's Most Trusted Taxi & Rental Service
              </h2>
              <p className="text-gray-500 leading-relaxed mb-8">
                We've been serving tourists and locals in Dharamshala for years. Our team of
                experienced local drivers knows every road, every shortcut, and every hidden
                gem — from the McLeod Ganj streets to the Triund trail base.
              </p>
              <ul className="space-y-4">
                {[
                  { icon: CheckCircle, text: "Transparent pricing — no hidden charges, ever" },
                  { icon: CheckCircle, text: "Well-maintained, clean, and comfortable vehicles" },
                  { icon: CheckCircle, text: "Local Dharamshala drivers who know the area" },
                  { icon: CheckCircle, text: "Instant booking via WhatsApp — no app needed" },
                  { icon: CheckCircle, text: "Available 24/7, especially for airport pickups" },
                  { icon: CheckCircle, text: "Serving Dharamshala, McLeod Ganj, Bhagsu & beyond" },
                ].map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-start gap-3 text-gray-700">
                    <Icon className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex gap-4">
                <a href={CALL_URL} className="btn-primary">
                  <Phone className="h-4 w-4" /> Call Now
                </a>
                <Link href="/about" className="btn-secondary">
                  About Us
                </Link>
              </div>
            </div>

            {/* Stats panel */}
            <div className="grid grid-cols-2 gap-5">
              {[
                { number: "500+", label: "Happy Customers", color: "bg-brand-50 border-brand-200" },
                { number: "5★", label: "Average Rating", color: "bg-amber-50 border-amber-200" },
                { number: "24/7", label: "Airport Service", color: "bg-blue-50 border-blue-200" },
                { number: "50+", label: "Routes Covered", color: "bg-green-50 border-green-200" },
              ].map(({ number, label, color }) => (
                <div
                  key={label}
                  className={`${color} border-2 rounded-2xl p-7 text-center`}
                >
                  <p className="font-display text-4xl font-bold text-gray-900">{number}</p>
                  <p className="text-gray-500 text-sm mt-1">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── POPULAR ROUTES ── */}
      <section className="section-pad bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            label="Popular Routes"
            title="Top Destinations & Routes from Dharamshala"
            subtitle="Quick price guide for the most popular taxi routes. Contact us for a custom quote."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {DESTINATIONS.map((d) => (
              <div
                key={d.name}
                className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-bold text-gray-900">{d.name}</h3>
                    <p className="text-xs text-gray-400">from {d.from}</p>
                  </div>
                  <MapPin className="h-4 w-4 text-brand-400 mt-1 flex-shrink-0" />
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">{d.distance} · {d.time}</span>
                  <span className="font-bold text-brand-700">{d.price}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-400 mt-6">
            Prices are approximate. Contact us for exact quote.{" "}
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-brand-600 font-semibold hover:underline">
              Get Instant Price →
            </a>
          </p>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="section-pad bg-white">
        <div className="container-custom">
          <SectionHeading
            label="Customer Reviews"
            title="What Our Travellers Say"
            subtitle="Real reviews from real customers who explored Dharamshala with us."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TESTIMONIALS.map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* ── MAP ── */}
      <section className="section-pad bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            label="Find Us"
            title="Based in the Heart of Dharamshala"
            subtitle="Located near McLeod Ganj Bus Stand — easily accessible from anywhere in Dharamshala."
          />
          <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200 h-80">
            <iframe
              src={BUSINESS.googleMapsEmbed}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Dharamshala Taxi Service Location on Google Maps"
            />
          </div>
          <div className="text-center mt-6">
            <a
              href={BUSINESS.googleMapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <MapPin className="h-4 w-4" /> Open in Google Maps
            </a>
          </div>
        </div>
      </section>

      {/* ── FAQ PREVIEW ── */}
      <section className="section-pad bg-white">
        <div className="container-custom">
          <SectionHeading
            label="FAQ"
            title="Frequently Asked Questions"
            subtitle="Got questions? We've answered the most common ones below."
          />
          <div className="max-w-3xl mx-auto">
            <FAQSection faqs={FAQS.slice(0, 5)} withSchema />
            <div className="text-center mt-8">
              <Link href="/faq" className="btn-secondary">
                View All FAQs <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <CTASection />
    </>
  );
}
