import type { Metadata } from 'next'
import Image from 'next/image'
import { Phone, MessageCircle, CheckCircle, ArrowRight, Fuel, Gauge, Calendar } from 'lucide-react'
import { PHONE_HREF, WHATSAPP_BOOK } from '@/lib/constants'

export const metadata: Metadata = {
  title:       'Bike & Scooty Rental in Dharamshala | Royal Enfield, Activa | SKD Holidays',
  description: 'Rent bikes & scooty in Dharamshala at best daily rates. Royal Enfield Himalayan, Bullet 350, Honda Activa available. Self-drive car rental also available. Book now!',
  alternates:  { canonical: 'https://skdholidays.in/rentals' },
}

type RentalItem = {
  name:     string
  category: string
  image:    string
  cc:       string
  fuel:     string
  price:    string
  deposit:  string
  features: string[]
  popular?: boolean
  badge?:   string
}

const BIKES: RentalItem[] = [
  {
    name:     'Royal Enfield Himalayan',
    category: 'Adventure Bike',
    image:    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80',
    cc:       '411cc',
    fuel:     '~30 km/l',
    price:    '₹1,500/day',
    deposit:  '₹5,000',
    features: ['Best for mountain roads', 'ABS braking', 'USB charging', 'Luggage carrier'],
    popular:  true,
    badge:    '🔥 Most Popular',
  },
  {
    name:     'Royal Enfield Bullet 350',
    category: 'Classic Bike',
    image:    'https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=500&q=80',
    cc:       '346cc',
    fuel:     '~35 km/l',
    price:    '₹1,200/day',
    deposit:  '₹4,000',
    features: ['Classic styling', 'Smooth highway ride', 'Low maintenance', 'Comfortable seat'],
  },
  {
    name:     'Royal Enfield Classic 350',
    category: 'Cruiser Bike',
    image:    'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=500&q=80',
    cc:       '349cc',
    fuel:     '~36 km/l',
    price:    '₹1,300/day',
    deposit:  '₹4,500',
    features: ['Iconic design', 'Comfortable for long rides', 'Digital-analogue cluster', 'Dual-channel ABS'],
    badge:    '⭐ Top Rated',
  },
  {
    name:     'KTM Duke 200',
    category: 'Sports Bike',
    image:    'https://images.unsplash.com/photo-1615172282427-9a57ef2d142e?w=500&q=80',
    cc:       '199cc',
    fuel:     '~30 km/l',
    price:    '₹1,000/day',
    deposit:  '₹3,500',
    features: ['Sporty & nimble', 'Great for twisty roads', 'Liquid cooled', 'Lightweight'],
  },
]

const SCOOTIES: RentalItem[] = [
  {
    name:     'Honda Activa 6G',
    category: 'Automatic Scooter',
    image:    'https://images.unsplash.com/photo-1558977284-5f6c6c6f0c7c?w=500&q=80',
    cc:       '109cc',
    fuel:     '~55 km/l',
    price:    '₹500/day',
    deposit:  '₹2,000',
    features: ['Easy to ride', 'Great for city touring', 'Under-seat storage', 'Best for beginners'],
    popular:  true,
    badge:    '💚 Best Value',
  },
  {
    name:     'Honda Pleasure+',
    category: 'Girls Scooter',
    image:    'https://images.unsplash.com/photo-1519430044529-9915a21a3c4f?w=500&q=80',
    cc:       '110cc',
    fuel:     '~55 km/l',
    price:    '₹500/day',
    deposit:  '₹2,000',
    features: ['Lightweight & stylish', 'Easy handling', 'Good brakes', 'Fuel-efficient'],
  },
  {
    name:     'TVS Jupiter',
    category: 'Family Scooter',
    image:    'https://images.unsplash.com/photo-1558617889-6a3b04bd6d7d?w=500&q=80',
    cc:       '110cc',
    fuel:     '~55 km/l',
    price:    '₹500/day',
    deposit:  '₹2,000',
    features: ['Wide seat', 'Smooth ride', 'Good storage', 'Easy on hills'],
  },
]

const CARS: RentalItem[] = [
  {
    name:     'Maruti Swift Dzire',
    category: 'Self-Drive Sedan',
    image:    'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=500&q=80',
    cc:       '1197cc',
    fuel:     '~22 km/l',
    price:    '₹2,500/day',
    deposit:  '₹10,000',
    features: ['AC', '4 seats', 'Automatic option', '200 km/day included'],
    badge:    '🚗 Self Drive',
  },
  {
    name:     'Hyundai i20',
    category: 'Self-Drive Hatchback',
    image:    'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=500&q=80',
    cc:       '1197cc',
    fuel:     '~18 km/l',
    price:    '₹3,000/day',
    deposit:  '₹12,000',
    features: ['AC', '5 seats', 'Sunroof', '200 km/day included'],
  },
]

function RentalCard({ item }: { item: RentalItem }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-primary-50 hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300 group relative flex flex-col">
      {item.badge && (
        <div className="absolute top-3 left-3 z-10 bg-primary-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-md">
          {item.badge}
        </div>
      )}
      {item.popular && !item.badge && (
        <div className="absolute top-3 right-3 z-10 bg-orange-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-md badge-pulse">
          POPULAR
        </div>
      )}

      {/* Image */}
      <div className="relative h-48 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/30 to-transparent" />
        <span className="absolute bottom-3 left-3 bg-primary-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
          {item.category}
        </span>
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-display font-bold text-gray-900 text-lg mb-1">{item.name}</h3>

        {/* Specs */}
        <div className="flex items-center gap-4 mb-4 text-xs text-gray-500">
          <span className="flex items-center gap-1"><Gauge className="w-3.5 h-3.5 text-primary-500" />{item.cc}</span>
          <span className="flex items-center gap-1"><Fuel className="w-3.5 h-3.5 text-primary-500" />{item.fuel}</span>
          <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5 text-primary-500" />Self-ride</span>
        </div>

        {/* Features */}
        <ul className="space-y-1.5 mb-5 flex-1">
          {item.features.map(f => (
            <li key={f} className="flex items-center gap-2 text-xs text-gray-600">
              <CheckCircle className="w-3.5 h-3.5 text-primary-600 flex-shrink-0" />{f}
            </li>
          ))}
        </ul>

        {/* Price + CTA */}
        <div className="border-t border-primary-50 pt-4 mt-auto">
          <div className="flex items-center justify-between mb-3">
            <div>
              <div className="font-display font-bold text-primary-600 text-xl">{item.price}</div>
              <div className="text-[10px] text-gray-400">Security deposit: {item.deposit}</div>
            </div>
          </div>
          <a
            href={WHATSAPP_BOOK(item.name + ' rental')}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 rounded-xl text-sm transition-all active:scale-95"
          >
            <MessageCircle className="w-4 h-4" /> Book Now
          </a>
        </div>
      </div>
    </div>
  )
}

function SectionHeader({ emoji, title, subtitle }: { emoji: string; title: string; subtitle: string }) {
  return (
    <div className="flex items-center gap-4 mb-8">
      <div className="w-12 h-12 bg-primary-100 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0">{emoji}</div>
      <div>
        <h2 className="font-display text-2xl md:text-3xl font-bold text-primary-900">{title}</h2>
        <p className="text-primary-600 text-sm mt-0.5">{subtitle}</p>
      </div>
    </div>
  )
}

export default function RentalsPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-primary-950 to-primary-700">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-green-300 blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-white/15 text-green-200 text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest mb-6">
            🏍️ Rental Services
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Bike, Scooty & Car<br />
            <span className="text-primary-300">Rental in Dharamshala</span>
          </h1>
          <p className="text-green-100 text-lg max-w-2xl mx-auto mb-8">
            Freedom to explore at your own pace. Well-maintained bikes, scooties, and self-drive cars at Dharamshala&apos;s best rates.
          </p>
          {/* Requirement badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {['📋 Valid DL required', '🪪 Govt ID proof', '💳 Security deposit', '⛽ Fuel extra'].map(b => (
              <span key={b} className="bg-white/10 backdrop-blur text-white text-xs px-3 py-1.5 rounded-full border border-white/20">{b}</span>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={PHONE_HREF} className="flex items-center justify-center gap-2 bg-white text-primary-700 font-bold px-8 py-4 rounded-2xl shadow-xl hover:bg-green-50 transition-all active:scale-95">
              <Phone className="w-5 h-5" /> Call for Rates
            </a>
            <a href={WHATSAPP_BOOK('bike/scooty rental')} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold px-8 py-4 rounded-2xl shadow-xl hover:bg-[#20bd59] transition-all active:scale-95">
              <MessageCircle className="w-5 h-5" /> WhatsApp Booking
            </a>
          </div>
        </div>
      </section>

      {/* Bikes */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader emoji="🏍️" title="Bike Rentals" subtitle="Royal Enfield, KTM & more for mountain adventures" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {BIKES.map(b => <RentalCard key={b.name} item={b} />)}
          </div>
        </div>
      </section>

      {/* Scooties */}
      <section className="py-20 bg-mountain-mist leaf-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader emoji="🛵" title="Scooty Rentals" subtitle="Easy & fuel-efficient — perfect for city exploration" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SCOOTIES.map(s => <RentalCard key={s.name} item={s} />)}
          </div>
        </div>
      </section>

      {/* Cars */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader emoji="🚗" title="Self-Drive Car Rental" subtitle="AC cars for family trips and outstation travel" />
          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl">
            {CARS.map(c => <RentalCard key={c.name} item={c} />)}
          </div>
        </div>
      </section>

      {/* How to rent */}
      <section className="py-20 bg-primary-950 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-display text-3xl font-bold mb-12">
            How to <span className="text-primary-400">Rent a Vehicle</span>
          </h2>
          <div className="grid sm:grid-cols-4 gap-6">
            {[
              { step: '01', icon: '📱', title: 'Contact Us', desc: 'Call or WhatsApp to check availability' },
              { step: '02', icon: '📋', title: 'Submit Docs', desc: 'Driving licence + govt ID proof' },
              { step: '03', icon: '💰', title: 'Pay Deposit', desc: 'Refundable security deposit' },
              { step: '04', icon: '🏍️', title: 'Ride Away!', desc: 'Pick up your vehicle and explore' },
            ].map(({ step, icon, title, desc }) => (
              <div key={step} className="relative">
                <div className="text-5xl font-display font-bold text-primary-800 absolute -top-4 left-0 select-none">{step}</div>
                <div className="pt-6 text-center">
                  <div className="text-3xl mb-3">{icon}</div>
                  <h3 className="font-bold text-white mb-2">{title}</h3>
                  <p className="text-gray-400 text-sm">{desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <a href={PHONE_HREF} className="flex items-center justify-center gap-2 bg-primary-600 text-white font-bold px-8 py-4 rounded-2xl hover:bg-primary-500 transition-all active:scale-95">
              <Phone className="w-5 h-5" /> Call to Book
            </a>
            <a href={WHATSAPP_BOOK('rental')} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold px-8 py-4 rounded-2xl hover:bg-[#20bd59] transition-all active:scale-95">
              <MessageCircle className="w-5 h-5" /> WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
