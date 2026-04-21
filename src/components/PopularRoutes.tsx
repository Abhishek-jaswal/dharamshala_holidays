import { MapPin, Clock, IndianRupee, ArrowRight } from 'lucide-react'
import { ROUTES, WHATSAPP_BOOK } from '@/lib/constants'

export default function PopularRoutes() {
  return (
    <section className="py-20 md:py-28 bg-white" id="routes">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block bg-primary-100 text-primary-700 text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest mb-4">
            Popular Routes
          </span>
          <h2 className="section-title">
            Top <span className="text-gradient">Outstation Routes</span> from Dharamshala
          </h2>
          <p className="section-subtitle mx-auto">
            Fixed, transparent pricing for the most-traveled routes in Himachal Pradesh.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ROUTES.map(route => (
            <div
              key={`${route.from}-${route.to}`}
              className="relative bg-gradient-to-br from-primary-50 to-white rounded-2xl border border-primary-100 p-6 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 group overflow-hidden"
            >
              {/* Popular badge */}
              {route.popular && (
                <div className="absolute top-4 right-4 bg-primary-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider badge-pulse">
                  Popular
                </div>
              )}

              {/* Route */}
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center gap-1.5 text-primary-700 font-semibold">
                  <MapPin className="w-4 h-4 text-primary-500" />
                  <span className="text-sm">{route.from}</span>
                </div>
                <ArrowRight className="w-4 h-4 text-primary-400 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                <div className="flex items-center gap-1.5 text-primary-900 font-bold">
                  <MapPin className="w-4 h-4 text-primary-600" />
                  <span className="text-sm">{route.to}</span>
                </div>
              </div>

              {/* Details */}
              <div className="grid grid-cols-3 gap-2 mb-5 text-center">
                <div className="bg-white rounded-xl p-2 border border-primary-100">
                  <div className="text-primary-600 font-bold text-sm">{route.distance}</div>
                  <div className="text-gray-400 text-[10px] uppercase tracking-wide">Distance</div>
                </div>
                <div className="bg-white rounded-xl p-2 border border-primary-100">
                  <div className="text-primary-600 font-bold text-sm">{route.time}</div>
                  <div className="text-gray-400 text-[10px] uppercase tracking-wide">Duration</div>
                </div>
                <div className="bg-primary-600 rounded-xl p-2">
                  <div className="text-white font-bold text-sm">{route.price}</div>
                  <div className="text-green-200 text-[10px] uppercase tracking-wide">Price</div>
                </div>
              </div>

              <a
                href={WHATSAPP_BOOK(`${route.from} to ${route.to} taxi - ${route.price}`)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full border-2 border-primary-600 text-primary-700 hover:bg-primary-600 hover:text-white font-semibold py-2.5 rounded-xl text-sm transition-all"
              >
                Book This Route
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          ))}
        </div>

        {/* Custom route CTA */}
        <div className="mt-12 bg-mountain-gradient rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-48 h-48 rounded-full bg-white -translate-x-1/4 -translate-y-1/4" />
            <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-white translate-x-1/4 translate-y-1/4" />
          </div>
          <div className="relative z-10">
            <h3 className="font-display text-2xl md:text-3xl font-bold mb-3">
              Custom Route? We&apos;ve Got You!
            </h3>
            <p className="text-green-100 mb-6 max-w-lg mx-auto">
              Don&apos;t see your destination? Tell us where you want to go and we&apos;ll give you the best quote instantly.
            </p>
            <a
              href="https://wa.me/919805700000?text=Hi!%20I%20need%20a%20custom%20taxi%20quote."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-primary-700 font-bold px-8 py-3 rounded-xl hover:bg-green-50 transition-all shadow-lg"
            >
              Get Custom Quote
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
