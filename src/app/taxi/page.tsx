import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Phone, MessageCircle, CheckCircle, ArrowRight, Users, MapPin, Clock, Star } from 'lucide-react'
import { PHONE_HREF, WHATSAPP_BOOK, VEHICLES, ROUTES } from '@/lib/constants'

export const metadata: Metadata = {
  title:       'Taxi Service in Dharamshala | Airport Pickup & Outstation Cabs',
  description: 'Hire reliable taxi in Dharamshala for local sightseeing, Gaggal airport pickup, and outstation trips to Manali, Dalhousie, Shimla. AC cabs, verified drivers. Book now!',
  alternates:  { canonical: 'https://skdholidays.in/taxi' },
  openGraph: {
    title:       'Taxi Service in Dharamshala | SKD Holidays',
    description: 'Local taxi, airport transfer, and outstation cabs in Dharamshala at best prices.',
  },
}

const TAXI_SERVICES = [
  {
    emoji:    '🏙️',
    title:    'Local City Taxi',
    subtitle: 'Dharamshala & McLeod Ganj',
    desc:     'Comfortable rides within Dharamshala, McLeod Ganj, Dharamkot, Bhagsu Nag, Kangra and surrounding areas. Ideal for sightseeing, hotel transfers, and daily commute.',
    features: ['McLeod Ganj sightseeing', 'Kangra Devi Temple', 'Norbulingka Institute', 'Bhagsu Waterfall', 'War Memorial', 'Namgyal Monastery'],
    price:    '₹300 minimum',
    color:    'from-green-500 to-emerald-600',
  },
  {
    emoji:    '✈️',
    title:    'Airport Transfer',
    subtitle: 'Gaggal Airport (DHM)',
    desc:     'Punctual and stress-free pickup/drop to Gaggal Airport (Kangra). We track your flight in real-time and adjust for any delays. Available 24/7 for all flights.',
    features: ['Flight tracking', '24/7 availability', 'Meet & greet service', 'All airlines covered', 'Luggage assistance', 'No waiting charges'],
    price:    '₹800 onwards',
    color:    'from-teal-500 to-green-600',
  },
  {
    emoji:    '🛣️',
    title:    'Outstation Trips',
    subtitle: 'All Himachal destinations',
    desc:     'Plan your hill-station escape with our outstation taxi service. Cover Manali, Dalhousie, Shimla, Pathankot and beyond with experienced mountain drivers.',
    features: ['Manali / Shimla / Dalhousie', 'One-way & round trips', 'Multi-day packages', 'AC cars available', 'Night halt facility', 'Driver allowance included'],
    price:    '₹13/km onwards',
    color:    'from-lime-500 to-green-500',
  },
]

export default function TaxiPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-br from-primary-950 via-primary-800 to-primary-600">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-white blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-green-300 blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-white/15 text-green-200 text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest mb-6 backdrop-blur">
            🚕 Taxi Services
          </span>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Best Taxi Service in<br />
            <span className="text-primary-300">Dharamshala</span>
          </h1>
          <p className="text-green-100 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Local rides, airport transfers, and outstation trips — all with verified professional drivers and transparent pricing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={PHONE_HREF} className="flex items-center justify-center gap-2 bg-white text-primary-700 font-bold px-8 py-4 rounded-2xl text-base shadow-xl hover:bg-green-50 transition-all active:scale-95">
              <Phone className="w-5 h-5" /> Call for Booking
            </a>
            <a href={WHATSAPP_BOOK('taxi service')} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold px-8 py-4 rounded-2xl text-base shadow-xl hover:bg-[#20bd59] transition-all active:scale-95">
              <MessageCircle className="w-5 h-5" /> WhatsApp Booking
            </a>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <div className="bg-primary-600 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-white text-sm font-medium">
            {['✅ Verified Drivers', '✅ AC Vehicles', '✅ No Hidden Charges', '✅ 24/7 Available', '✅ 500+ Bookings'].map(t => (
              <span key={t}>{t}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Taxi Service Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="section-title">Our <span className="text-gradient">Taxi Services</span></h2>
            <p className="section-subtitle mx-auto">Every type of trip covered — local, airport, or outstation.</p>
          </div>

          <div className="space-y-8">
            {TAXI_SERVICES.map((svc, i) => (
              <div key={svc.title} className={`grid md:grid-cols-2 gap-8 items-center ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                {/* Content */}
                <div className={`${i % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className={`inline-flex items-center gap-3 bg-gradient-to-r ${svc.color} text-white px-4 py-2 rounded-xl mb-4`}>
                    <span className="text-2xl">{svc.emoji}</span>
                    <div>
                      <div className="font-bold text-base">{svc.title}</div>
                      <div className="text-xs text-white/80">{svc.subtitle}</div>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-5 leading-relaxed">{svc.desc}</p>
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {svc.features.map(f => (
                      <div key={f} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-primary-600 flex-shrink-0" />
                        {f}
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-primary-50 border border-primary-200 rounded-xl px-4 py-2">
                      <span className="text-primary-600 font-bold text-lg">{svc.price}</span>
                    </div>
                    <a
                      href={WHATSAPP_BOOK(svc.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold px-5 py-2.5 rounded-xl transition-all text-sm"
                    >
                      Book Now <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
                {/* Image card */}
                <div className={`mountain-card rounded-3xl p-6 ${i % 2 === 1 ? 'md:order-1' : ''}`}>
                  <div className="grid grid-cols-3 gap-3 text-center">
                    <div className="bg-white rounded-2xl p-4 shadow-sm">
                      <Users className="w-6 h-6 text-primary-600 mx-auto mb-2" />
                      <div className="text-xs text-gray-500">Passengers</div>
                      <div className="font-bold text-primary-700 text-sm">4–8 Seats</div>
                    </div>
                    <div className="bg-white rounded-2xl p-4 shadow-sm">
                      <Clock className="w-6 h-6 text-primary-600 mx-auto mb-2" />
                      <div className="text-xs text-gray-500">Response</div>
                      <div className="font-bold text-primary-700 text-sm">&lt;5 mins</div>
                    </div>
                    <div className="bg-white rounded-2xl p-4 shadow-sm">
                      <Star className="w-6 h-6 text-yellow-500 mx-auto mb-2" />
                      <div className="text-xs text-gray-500">Rating</div>
                      <div className="font-bold text-primary-700 text-sm">4.9 / 5</div>
                    </div>
                  </div>
                  <div className="mt-4 bg-white rounded-2xl p-4 shadow-sm">
                    <div className="flex items-center gap-2 text-sm text-primary-700 font-semibold mb-2">
                      <MapPin className="w-4 h-4" /> Starting fare
                    </div>
                    <div className="text-3xl font-display font-bold text-primary-600">{svc.price}</div>
                    <p className="text-xs text-gray-400 mt-1">All-inclusive, no hidden charges</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet */}
      <section className="py-20 bg-mountain-mist leaf-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="section-title">Our <span className="text-gradient">Vehicle Fleet</span></h2>
            <p className="section-subtitle mx-auto">Well-maintained, clean, and comfortable vehicles for every budget.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VEHICLES.map(v => (
              <div key={v.name} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-primary-50 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
                <div className="relative h-44 bg-gray-50">
                  <Image src={v.image} alt={v.name} fill className="object-cover" sizes="300px" />
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-display font-bold text-gray-900">{v.name}</h3>
                      <p className="text-xs text-primary-600 font-medium">{v.type}</p>
                    </div>
                    <span className="bg-primary-100 text-primary-700 text-xs font-bold px-2 py-1 rounded-lg">{v.seats} Seats</span>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-lg font-bold text-primary-600">{v.pricePerKm}</div>
                    <div className="text-xs text-gray-400">Min: {v.minFare}</div>
                  </div>
                  <a
                    href={WHATSAPP_BOOK(`${v.name} taxi`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center bg-primary-600 hover:bg-primary-700 text-white text-sm font-semibold py-2.5 rounded-xl transition-all"
                  >
                    Book This Car
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Routes table */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">Outstation <span className="text-gradient">Price List</span></h2>
            <p className="section-subtitle mx-auto">Fixed fares for the most popular routes from Dharamshala.</p>
          </div>
          <div className="bg-white rounded-3xl shadow-lg border border-primary-100 overflow-hidden">
            <div className="grid grid-cols-4 bg-primary-600 text-white text-sm font-bold px-6 py-4">
              <span>Destination</span>
              <span className="text-center">Distance</span>
              <span className="text-center">Duration</span>
              <span className="text-center">Fare (Sedan)</span>
            </div>
            {ROUTES.map((r, i) => (
              <div key={r.to} className={`grid grid-cols-4 px-6 py-4 text-sm border-b border-primary-50 ${i % 2 === 0 ? 'bg-white' : 'bg-primary-50/40'} hover:bg-primary-50 transition-colors`}>
                <div className="flex items-center gap-2 font-medium text-gray-800">
                  <MapPin className="w-3.5 h-3.5 text-primary-500 flex-shrink-0" /> {r.to}
                </div>
                <div className="text-center text-gray-600">{r.distance}</div>
                <div className="text-center text-gray-600">{r.time}</div>
                <div className="text-center font-bold text-primary-600">{r.price}</div>
              </div>
            ))}
            <div className="px-6 py-4 bg-primary-50 text-xs text-gray-500">
              * Prices are for one-way trip in Swift Dzire (AC). Larger vehicles available at extra cost. Toll/parking extra.
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-mountain-gradient text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-display text-3xl font-bold mb-4">Ready to Book Your Taxi?</h2>
          <p className="text-green-100 mb-8">Call us or WhatsApp for instant confirmation. Available 24/7.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={PHONE_HREF} className="flex items-center justify-center gap-2 bg-white text-primary-700 font-bold px-8 py-4 rounded-2xl hover:bg-green-50 transition-all shadow-lg active:scale-95">
              <Phone className="w-5 h-5" /> Call Now
            </a>
            <a href={WHATSAPP_BOOK('taxi')} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold px-8 py-4 rounded-2xl hover:bg-[#20bd59] transition-all shadow-lg active:scale-95">
              <MessageCircle className="w-5 h-5" /> WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
