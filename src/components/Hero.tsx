'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Phone, MessageCircle, ChevronDown, Star, Users, MapPin, Shield } from 'lucide-react'
import { PHONE_HREF, WHATSAPP_HREF } from '@/lib/constants'

const TRUST_BADGES = [
  { icon: Star,    label: '500+ Happy Customers'  },
  { icon: Shield,  label: 'Verified Drivers'       },
  { icon: MapPin,  label: 'Local Experts'          },
  { icon: Users,   label: '24/7 Support'           },
]

export default function Hero() {
  const [form, setForm] = useState({ name: '', phone: '', service: '' })
  const [sending, setSending] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    const msg = `Hi SKD Holidays! I want to book:\nName: ${form.name}\nPhone: ${form.phone}\nService: ${form.service}`
    const url = `https://wa.me/919805700000?text=${encodeURIComponent(msg)}`
    window.open(url, '_blank')
    setSending(false)
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1626015249872-5ee9b1f7c2b5?w=1920&q=85"
          alt="Dharamshala Himachal Pradesh mountains"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-hero-overlay" />
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-primary-950/30" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-primary-400/30 animate-float"
            style={{
              left:              `${15 + i * 15}%`,
              top:               `${20 + (i % 3) * 25}%`,
              animationDelay:    `${i * 0.8}s`,
              animationDuration: `${4 + i * 0.5}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left — copy */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary-600/90 backdrop-blur text-white text-xs font-semibold px-4 py-2 rounded-full mb-6 badge-pulse shadow-lg">
              <span className="w-2 h-2 rounded-full bg-green-300 animate-pulse" />
              🌿 Dharamshala&apos;s #1 Travel Partner
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Reliable Taxi, Bike{' '}
              <span className="hero-shimmer">&amp; Tour Services</span>
              <br className="hidden md:block" /> in Dharamshala
            </h1>

            <p className="text-white/85 text-lg md:text-xl mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Explore the Himalayas with confidence. Affordable taxi, rental bikes &amp; curated tour packages — all in one place.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              <a
                href={PHONE_HREF}
                className="flex items-center justify-center gap-3 bg-primary-600 hover:bg-primary-500 text-white font-bold px-8 py-4 rounded-2xl text-lg shadow-xl hover:shadow-green-glow transition-all active:scale-95 group"
              >
                <Phone className="w-5 h-5 group-hover:animate-bounce" />
                Call Now
              </a>
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20bd59] text-white font-bold px-8 py-4 rounded-2xl text-lg shadow-xl transition-all active:scale-95 group"
              >
                <MessageCircle className="w-5 h-5 group-hover:animate-bounce" />
                WhatsApp Us
              </a>
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {TRUST_BADGES.map(({ icon: Icon, label }) => (
                <div key={label} className="flex flex-col items-center gap-1 bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/20 text-center">
                  <Icon className="w-5 h-5 text-green-300" />
                  <span className="text-white/90 text-xs font-medium leading-tight">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Booking form */}
          <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-6 md:p-8 border border-white/50">
            <div className="text-center mb-6">
              <span className="inline-block bg-primary-100 text-primary-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-2">
                🎯 Limited Time Offer
              </span>
              <h2 className="font-display text-2xl font-bold text-primary-900">Quick Booking</h2>
              <p className="text-primary-600 text-sm mt-1">Get instant confirmation via WhatsApp</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="Enter your full name"
                  value={form.name}
                  onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                  className="w-full border-2 border-gray-200 focus:border-primary-500 rounded-xl px-4 py-3 text-sm outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Phone Number</label>
                <input
                  type="tel"
                  required
                  placeholder="+91 XXXXX XXXXX"
                  value={form.phone}
                  onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                  className="w-full border-2 border-gray-200 focus:border-primary-500 rounded-xl px-4 py-3 text-sm outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Service Needed</label>
                <select
                  required
                  value={form.service}
                  onChange={e => setForm(f => ({ ...f, service: e.target.value }))}
                  className="w-full border-2 border-gray-200 focus:border-primary-500 rounded-xl px-4 py-3 text-sm outline-none transition-colors bg-white"
                >
                  <option value="">-- Select a service --</option>
                  <option>🚕 Local Taxi (Dharamshala)</option>
                  <option>✈️ Airport Pickup / Drop</option>
                  <option>🛣️ Outstation Trip</option>
                  <option>🏍️ Bike Rental (Royal Enfield etc.)</option>
                  <option>🛵 Scooty Rental</option>
                  <option>🚗 Car Rental</option>
                  <option>🏔️ Triund Trek Package</option>
                  <option>🌄 Manali Tour Package</option>
                  <option>🌿 Dalhousie Tour Package</option>
                  <option>📦 Custom Tour Package</option>
                </select>
              </div>
              <button
                type="submit"
                disabled={sending}
                className="w-full bg-[#25D366] hover:bg-[#20bd59] text-white font-bold py-4 rounded-xl text-base transition-all shadow-lg hover:shadow-xl active:scale-95 flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                {sending ? 'Opening WhatsApp…' : 'Book via WhatsApp'}
              </button>
              <a
                href={PHONE_HREF}
                className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-4 rounded-xl text-base transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Or Call Directly
              </a>
            </form>

            <p className="text-center text-xs text-gray-400 mt-4">
              ✅ Free quote · No booking fee · Instant confirmation
            </p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 text-white/60">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </div>
    </section>
  )
}
