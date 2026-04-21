import type { Metadata } from 'next'
import Image from 'next/image'
import { Phone, MessageCircle, Clock, IndianRupee, MapPin, CheckCircle, Star, ChevronDown } from 'lucide-react'
import { PHONE_HREF, WHATSAPP_BOOK } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Tour Packages Dharamshala | Triund Trek, Manali, Dalhousie | SKD Holidays',
  description: 'Best tour packages from Dharamshala — Triund Trek, Manali 4N/5D, Dalhousie, Bir Billing. Affordable prices with transport, guide & accommodation. Book now!',
  alternates: { canonical: 'https://skdholidays.in/packages' },
}

type DayItem = { day: string; title: string; activities: string[] }
type Package = {
  id: string
  title: string
  subtitle: string
  image: string
  duration: string
  price: string
  priceNote: string
  groupSize: string
  rating: number
  badge?: string
  highlights: string[]
  inclusions: string[]
  exclusions: string[]
  itinerary: DayItem[]
  bestFor: string
}

const PACKAGES: Package[] = [
  {
    id: 'dharamshala-local',
    title: 'Dharamshala Sightseeing',
    subtitle: 'Discover the hill station & Tibetan culture',
    image: 'https://images.unsplash.com/photo-1626015249872-5ee9b1f7c2b5?w=700&q=80',
    duration: '1 Day',
    price: '₹2,999',
    priceNote: 'per person (min 2 pax)',
    groupSize: '2–8 people',
    rating: 4.9,
    badge: '🌟 Best Seller',
    bestFor: 'First-time visitors, day trips',
    highlights: ['Tsuglagkhang Complex (Dalai Lama Temple)', 'McLeod Ganj local market', 'Bhagsu Nag Temple & Waterfall', 'War Memorial', 'Dal Lake', 'Norbulingka Institute'],
    inclusions: ['AC cab from hotel/stay', 'English-speaking guide', 'All entry tickets', 'Mineral water', 'Drop back to hotel'],
    exclusions: ['Meals (guide will suggest good cafés)', 'Personal shopping', 'Tips'],
    itinerary: [
      { day: 'Morning', title: 'Upper Dharamshala & Tibetan Quarter', activities: ['Pickup from hotel 8 AM', 'Tsuglagkhang Complex', 'Tibet Museum', 'Namgyal Monastery'] },
      { day: 'Afternoon', title: 'McLeod Ganj & Bhagsu', activities: ['McLeod Ganj main square', 'Bhagsu Nag Temple', 'Bhagsu Waterfall (30 min hike)', 'Café/lunch break'] },
      { day: 'Evening', title: 'Lower Dharamshala', activities: ['Dal Lake', 'Norbulingka Institute', 'War Memorial', 'Drop back to hotel by 6 PM'] },
    ],
  },
  {
    id: 'triund-trek',
    title: 'Triund Trek Package',
    subtitle: 'Magical Himalayan trek with 360° mountain views',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=700&q=80',
    duration: '2 Days / 1 Night',
    price: '₹3,999',
    priceNote: 'per person (min 2 pax)',
    groupSize: '2–12 people',
    rating: 5.0,
    badge: '🏔️ Most Popular',
    bestFor: 'Adventure seekers, nature lovers',
    highlights: ['9 km scenic trek through dense forests', 'Camp at 2875 m altitude', 'Panoramic Dhauladhar range views', 'Sunset & sunrise from Triund top', 'Moonlit Himalayan night', 'Campfire & bonding'],
    inclusions: ['Pickup & drop from Dharamshala/McLeod Ganj', 'Certified trek guide', 'Tent accommodation (twin sharing)', 'Dinner & breakfast at camp', 'Sleeping bag & mattress', 'First aid kit'],
    exclusions: ['Lunch on trek day', 'Personal trekking gear', 'Snacks, tips'],
    itinerary: [
      { day: 'Day 1 – Morning', title: 'Trek to Triund Top', activities: ['Pickup 7 AM from McLeod Ganj', 'Begin trek from Galu Devi temple', 'Pass through Magic View café', 'Reach Triund top (~3–4 hours)', 'Check in to camps'] },
      { day: 'Day 1 – Evening', title: 'Sunset & Campfire', activities: ['Sunset views of Dhauladhar peaks', 'Campfire & group bonding', 'Dinner under the stars', 'Night sky stargazing'] },
      { day: 'Day 2 – Morning', title: 'Sunrise & Descent', activities: ['Wake up for breathtaking sunrise', 'Breakfast at camp', 'Descend to McLeod Ganj (~2.5 hrs)', 'Drop at hotel by 1 PM'] },
    ],
  },
  {
    id: 'dalhousie-tour',
    title: 'Dalhousie Weekend Tour',
    subtitle: 'Charming colonial hill station & Khajjiar meadow',
    image: 'https://images.unsplash.com/photo-1502481851512-e9e2529bfbf9?w=700&q=80',
    duration: '2 Days / 1 Night',
    price: '₹5,499',
    priceNote: 'per person (min 2 pax)',
    groupSize: '2–7 people',
    rating: 4.8,
    bestFor: 'Couples, families, relaxation',
    highlights: ['Khajjiar (Mini Switzerland of India)', 'Dainkund Peak — highest peak in Dalhousie', 'Satdhara Falls', 'Gandhi Chowk & Mall Road', 'St. Francis Church', 'Subhash Baoli'],
    inclusions: ['AC cab (round trip from Dharamshala)', 'Hotel stay (1 night, twin sharing)', 'Breakfast', 'Local sightseeing guide', 'All entry tickets'],
    exclusions: ['Lunch & dinner (except breakfast)', 'Horse riding at Khajjiar', 'Personal expenses'],
    itinerary: [
      { day: 'Day 1 – Morning', title: 'Dharamshala → Dalhousie', activities: ['Depart 7 AM from Dharamshala', '4-hour scenic drive', 'Check in to hotel', 'Visit Gandhi Chowk & Mall Road'] },
      { day: 'Day 1 – Afternoon', title: 'Dalhousie Sightseeing', activities: ['Subhash Baoli', 'St. Francis & St. John`s Church', 'Satdhara Falls', 'Sunset at Panchpula'] },
      { day: 'Day 2', title: 'Khajjiar & Return', activities: ['Morning: Dainkund Peak trek (optional)', 'Khajjiar meadow (Mini Switzerland)', 'Horse riding (optional)', 'Depart by 2 PM → reach Dharamshala by 6 PM'] },
    ],
  },
  {
    id: 'manali-package',
    title: 'Manali Adventure Tour',
    subtitle: 'Snow peaks, adventure sports & Himalayan magic',
    image: 'https://images.unsplash.com/photo-1617952739355-7001f9e4fa54?w=700&q=80',
    duration: '4 Days / 3 Nights',
    price: '₹9,999',
    priceNote: 'per person (min 2 pax)',
    groupSize: '2–8 people',
    rating: 4.9,
    badge: '🌨️ Premium Package',
    bestFor: 'Adventure couples, groups, honeymooners',
    highlights: ['Rohtang Pass / Solang Valley (snow!)', 'Hadimba Devi Temple', 'Old Manali & Mall Road', 'River rafting on Beas River', 'Naggar Castle', 'Kullu Valley sightseeing'],
    inclusions: ['AC cab entire trip', '3-night hotel (twin sharing, breakfast+dinner)', 'All sightseeing', 'Rohtang/Atal Tunnel trip', 'Professional driver-guide'],
    exclusions: ['Rohtang pass permit fee (₹550/person)', 'Adventure sports (rafting, paragliding)', 'Lunch, personal expenses'],
    itinerary: [
      { day: 'Day 1', title: 'Dharamshala → Manali', activities: ['Early morning departure (6 AM)', 'Scenic drive via Mandi (approx 7 hrs)', 'Check in & rest', 'Evening walk at Mall Road'] },
      { day: 'Day 2', title: 'Rohtang Pass / Solang Valley', activities: ['Early 6 AM start (permit timings)', 'Rohtang Pass at 3,978m (snow activities)', 'Solang Valley (zip-line, skiing optional)', 'Return by evening'] },
      { day: 'Day 3', title: 'Manali Local Sightseeing', activities: ['Hadimba Devi Temple', 'Vashisht Kund hot springs', 'Old Manali village & cafés', 'Naggar Castle (lunch)', 'Beas River rafting (optional, ₹600 extra)'] },
      { day: 'Day 4', title: 'Return to Dharamshala', activities: ['Check out by 10 AM', 'Kullu Dussehra ground (if season)', 'Kullu shawl market', 'Arrive Dharamshala by evening'] },
    ],
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map(i => (
        <Star key={i} className={`w-4 h-4 ${i <= Math.floor(rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-200 fill-gray-200'}`} />
      ))}
      <span className="text-sm font-bold text-gray-700 ml-1">{rating}</span>
    </div>
  )
}

export default function PackagesPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1617952739355-7001f9e4fa54?w=1920&q=80" alt="Himachal Pradesh mountains" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-primary-950/80 via-primary-900/60 to-primary-950/90" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-12">
          <span className="inline-block bg-white/15 text-green-200 text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest mb-6 backdrop-blur">
            🗺️ Tour Packages
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Unforgettable Himachal<br />
            <span className="text-primary-300">Tour Packages</span>
          </h1>
          <p className="text-green-100 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Curated itineraries, expert guides, and all-inclusive pricing. From day treks to multi-day adventures.
          </p>
          <div className="grid grid-cols-3 gap-4 max-w-sm mx-auto">
            {[['4+', 'Packages'], ['100%', 'Customizable'], ['₹', 'Best Price']].map(([val, lbl]) => (
              <div key={lbl} className="bg-white/10 backdrop-blur rounded-2xl p-4 border border-white/20">
                <div className="font-display text-2xl font-bold text-primary-300">{val}</div>
                <div className="text-white/70 text-xs mt-1">{lbl}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Choose Your <span className="text-gradient">Perfect Package</span></h2>
            <p className="section-subtitle mx-auto">All packages include transport, guide & can be fully customized.</p>
          </div>

          <div className="space-y-20">
            {PACKAGES.map((pkg, i) => (
              <div key={pkg.id} className="grid lg:grid-cols-5 gap-8 items-start" id={pkg.id}>
                {/* Image + quick info */}
                <div className={`lg:col-span-2 ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative rounded-3xl overflow-hidden shadow-xl group">
                    <div className="relative h-64 md:h-80">
                      <Image src={pkg.image} alt={pkg.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 1024px) 100vw, 40vw" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                      {pkg.badge && (
                        <span className="inline-block bg-primary-500 text-white text-[10px] font-bold px-3 py-1 rounded-full mb-2 uppercase tracking-wide">{pkg.badge}</span>
                      )}
                      <div className="font-display text-2xl font-bold">{pkg.price}</div>
                      <div className="text-green-200 text-xs">{pkg.priceNote}</div>
                    </div>
                  </div>

                  {/* Quick stats */}
                  <div className="grid grid-cols-2 gap-3 mt-4">
                    {[
                      { label: 'Duration', value: pkg.duration, icon: Clock },
                      { label: 'Group Size', value: pkg.groupSize, icon: null },
                      { label: 'Rating', value: `${pkg.rating}★`, icon: Star },
                      { label: 'Best For', value: pkg.bestFor, icon: MapPin },
                    ].map(({ label, value }) => (
                      <div key={label} className="bg-primary-50 border border-primary-100 rounded-xl p-3">
                        <div className="text-xs text-primary-500 mb-0.5 uppercase tracking-wide">{label}</div>
                        <div className="text-sm font-semibold text-primary-900">{value}</div>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="mt-4 flex flex-col gap-2">
                    <a href={WHATSAPP_BOOK(pkg.title)} target="_blank" rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold py-3.5 rounded-2xl hover:bg-[#20bd59] transition-all active:scale-95">
                      <MessageCircle className="w-5 h-5" /> Book via WhatsApp
                    </a>
                    <a href={PHONE_HREF}
                      className="flex items-center justify-center gap-2 bg-primary-600 text-white font-bold py-3.5 rounded-2xl hover:bg-primary-700 transition-all active:scale-95">
                      <Phone className="w-5 h-5" /> Call for Enquiry
                    </a>
                  </div>
                </div>

                {/* Details */}
                <div className={`lg:col-span-3 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <StarRating rating={pkg.rating} />
                  <h2 className="font-display text-3xl font-bold text-primary-900 mt-2 mb-1">{pkg.title}</h2>
                  <p className="text-primary-600 mb-6">{pkg.subtitle}</p>

                  {/* Highlights */}
                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                      <span className="w-6 h-6 bg-primary-600 rounded-lg flex items-center justify-center"><CheckCircle className="w-3.5 h-3.5 text-white" /></span>
                      Highlights
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {pkg.highlights.map(h => (
                        <div key={h} className="flex items-center gap-2 text-sm text-gray-700 bg-primary-50 px-3 py-2 rounded-xl">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary-600 flex-shrink-0" />{h}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Itinerary */}
                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                      <span className="w-6 h-6 bg-primary-600 rounded-lg flex items-center justify-center"><Clock className="w-3.5 h-3.5 text-white" /></span>
                      Itinerary
                    </h3>
                    <div className="space-y-3">
                      {pkg.itinerary.map((day, di) => (
                        <div key={di} className="relative pl-10 border-l-2 border-primary-200 pb-4 last:pb-0">
                          <div className="absolute left-0 top-0 -translate-x-1/2 w-5 h-5 rounded-full bg-primary-600 border-2 border-white shadow-sm flex items-center justify-center">
                            <span className="text-white text-[8px] font-bold">{di + 1}</span>
                          </div>
                          <div className="text-[10px] font-bold text-primary-500 uppercase tracking-wider mb-0.5">{day.day}</div>
                          <div className="font-semibold text-gray-800 text-sm mb-2">{day.title}</div>
                          <ul className="space-y-1">
                            {day.activities.map(a => (
                              <li key={a} className="text-xs text-gray-500 flex items-center gap-1.5">
                                <span className="w-1 h-1 rounded-full bg-primary-400 flex-shrink-0" />{a}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Inclusions / Exclusions */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="bg-green-50 rounded-2xl p-4 border border-green-200">
                      <h4 className="font-semibold text-green-800 text-sm mb-3">✅ Included</h4>
                      {pkg.inclusions.map(inc => (
                        <div key={inc} className="text-xs text-green-700 flex items-center gap-1.5 mb-1.5">
                          <CheckCircle className="w-3 h-3 text-green-600 flex-shrink-0" />{inc}
                        </div>
                      ))}
                    </div>
                    <div className="bg-red-50 rounded-2xl p-4 border border-red-100">
                      <h4 className="font-semibold text-red-700 text-sm mb-3">❌ Not Included</h4>
                      {pkg.exclusions.map(exc => (
                        <div key={exc} className="text-xs text-red-600 flex items-center gap-1.5 mb-1.5">
                          <span className="w-3 h-3 rounded-full border border-red-400 flex-shrink-0 flex items-center justify-center text-[8px]">✕</span>{exc}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom package CTA */}
      <section className="py-20 bg-mountain-gradient text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <div className="text-5xl mb-6">✨</div>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Want a Custom Package?</h2>
          <p className="text-green-100 mb-8 text-lg">
            Tell us your dates, budget, and dream destinations — we&apos;ll craft the perfect Himachal itinerary just for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={PHONE_HREF} className="flex items-center justify-center gap-2 bg-white text-primary-700 font-bold px-8 py-4 rounded-2xl hover:bg-green-50 transition-all shadow-lg active:scale-95">
              <Phone className="w-5 h-5" /> Call Us Now
            </a>
            <a href="https://wa.me/919805700000?text=Hi!%20I%20want%20a%20custom%20tour%20package%20from%20Dharamshala." target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold px-8 py-4 rounded-2xl hover:bg-[#20bd59] transition-all shadow-lg active:scale-95">
              <MessageCircle className="w-5 h-5" /> WhatsApp Your Plan
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
