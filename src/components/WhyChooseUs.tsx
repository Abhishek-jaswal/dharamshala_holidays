import { ShieldCheck, Clock, Wallet, Map, Headphones, ThumbsUp } from 'lucide-react'

const REASONS = [
  {
    icon:  ShieldCheck,
    title: 'Verified Drivers',
    desc:  'All drivers are police-verified with commercial licenses, first-aid training, and local route expertise.',
    color: 'bg-green-100 text-green-700',
  },
  {
    icon:  Wallet,
    title: 'Best Price Guarantee',
    desc:  'Transparent, fixed pricing with no hidden charges. We match or beat any competitor\'s quote.',
    color: 'bg-emerald-100 text-emerald-700',
  },
  {
    icon:  Map,
    title: 'Local Experts',
    desc:  'Born and raised in Dharamshala, our team knows every hidden gem, shortcut, and viewpoint.',
    color: 'bg-teal-100 text-teal-700',
  },
  {
    icon:  Clock,
    title: '24/7 Availability',
    desc:  'We\'re available round the clock — early morning flights, late night arrivals, no problem.',
    color: 'bg-lime-100 text-lime-700',
  },
  {
    icon:  Headphones,
    title: 'Instant Support',
    desc:  'Reach us instantly on WhatsApp or call. Our team responds within minutes.',
    color: 'bg-green-100 text-green-700',
  },
  {
    icon:  ThumbsUp,
    title: '500+ Happy Customers',
    desc:  'Trusted by travelers from across India and the world. 4.9★ average rating.',
    color: 'bg-emerald-100 text-emerald-700',
  },
]

const STATS = [
  { value: '500+', label: 'Happy Customers' },
  { value: '5+',   label: 'Years Experience' },
  { value: '50+',  label: 'Routes Covered'  },
  { value: '4.9★', label: 'Average Rating'  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-20 md:py-28 bg-mountain-mist leaf-bg" id="why-us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block bg-primary-600 text-white text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest mb-4">
            Why SKD Holidays
          </span>
          <h2 className="section-title">
            The <span className="text-gradient">Smarter Choice</span> for Dharamshala Travel
          </h2>
          <p className="section-subtitle mx-auto">
            We don&apos;t just take you from A to B — we make sure every journey becomes a great memory.
          </p>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {STATS.map(({ value, label }) => (
            <div key={label} className="bg-white rounded-2xl p-6 text-center shadow-md border border-primary-100 hover:shadow-card-hover transition-all">
              <div className="font-display text-3xl md:text-4xl font-bold text-primary-600 mb-1">{value}</div>
              <div className="text-gray-500 text-sm font-medium">{label}</div>
            </div>
          ))}
        </div>

        {/* Reason cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {REASONS.map(({ icon: Icon, title, desc, color }) => (
            <div key={title} className="bg-white rounded-2xl p-6 shadow-sm border border-primary-50 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 group">
              <div className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <Icon className="w-6 h-6" strokeWidth={1.8} />
              </div>
              <h3 className="font-display text-lg font-bold text-gray-800 mb-2">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
