import Link from 'next/link'
import { Car, Bike, Mountain, ArrowRight } from 'lucide-react'

const SERVICES = [
  {
    icon:        Car,
    title:       'Taxi Services',
    description: 'Local city rides, airport pickup/drop, and outstation trips in AC cabs. Available 24/7 with verified professional drivers.',
    features:    ['Local Dharamshala Rides', 'Airport Transfer (Gaggal)', 'Outstation Trips', 'Corporate Bookings'],
    href:        '/taxi',
    color:       'from-green-500 to-emerald-600',
    badge:       '₹13/km onwards',
    emoji:       '🚕',
  },
  {
    icon:        Bike,
    title:       'Bike & Scooty Rental',
    description: 'Freedom to explore on your own schedule. Royal Enfield, Activa, Pleasure & more — all well-maintained bikes at best rates.',
    features:    ['Royal Enfield Himalayan', 'Honda Activa (Scooty)', 'Bullet 350cc', 'Self-drive Car Rental'],
    href:        '/rentals',
    color:       'from-teal-500 to-green-600',
    badge:       '₹500/day onwards',
    emoji:       '🏍️',
  },
  {
    icon:        Mountain,
    title:       'Tour Packages',
    description: 'Curated Himachal tour packages with accommodation, sightseeing, and experienced local guides. Best memories guaranteed.',
    features:    ['Triund Trek Package', 'Manali 4N/5D Tour', 'Dalhousie Tour', 'Dharamshala Sightseeing'],
    href:        '/packages',
    color:       'from-lime-500 to-green-500',
    badge:       '₹2,999 onwards',
    emoji:       '🏔️',
  },
]

export default function Services() {
  return (
    <section className="py-20 md:py-28 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-primary-100 text-primary-700 text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest mb-4">
            Our Services
          </span>
          <h2 className="section-title">Everything You Need to{' '}
            <span className="text-gradient">Explore Dharamshala</span>
          </h2>
          <p className="section-subtitle mx-auto">
            From quick city rides to multi-day Himalayan adventures — SKD Holidays has you covered.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {SERVICES.map(({ icon: Icon, title, description, features, href, color, badge, emoji }) => (
            <div key={title} className="mountain-card rounded-3xl overflow-hidden group">
              {/* Card top */}
              <div className={`bg-gradient-to-br ${color} p-8 relative overflow-hidden`}>
                <div className="absolute -right-4 -top-4 text-7xl opacity-20 select-none">
                  {emoji}
                </div>
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-white" strokeWidth={1.8} />
                  </div>
                  <h3 className="font-display text-xl font-bold text-white mb-1">{title}</h3>
                  <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {badge}
                  </span>
                </div>
              </div>

              {/* Card body */}
              <div className="p-6">
                <p className="text-gray-600 text-sm leading-relaxed mb-5">{description}</p>
                <ul className="space-y-2 mb-6">
                  {features.map(f => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="w-5 h-5 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                        <span className="w-2 h-2 rounded-full bg-primary-600" />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href={href}
                  className="flex items-center justify-between bg-primary-600 hover:bg-primary-700 text-white font-semibold px-5 py-3 rounded-xl transition-all group/btn"
                >
                  <span>View Details</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
