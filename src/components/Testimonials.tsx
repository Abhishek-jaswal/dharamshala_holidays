import { Star, Quote } from 'lucide-react'
import { TESTIMONIALS } from '@/lib/constants'

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-mountain-mist leaf-bg" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block bg-primary-600 text-white text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest mb-4">
            Testimonials
          </span>
          <h2 className="section-title">
            What Our <span className="text-gradient">Happy Travelers</span> Say
          </h2>
          <p className="section-subtitle mx-auto">
            Don&apos;t just take our word for it — here&apos;s what real customers say about SKD Holidays.
          </p>
          {/* Aggregate rating */}
          <div className="inline-flex items-center gap-2 mt-4 bg-white px-4 py-2 rounded-full shadow-md border border-primary-100">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="font-bold text-gray-800 text-sm">4.9 / 5</span>
            <span className="text-gray-400 text-sm">· 500+ reviews</span>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 shadow-sm border border-primary-50 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 relative group"
            >
              {/* Quote icon */}
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary-100 group-hover:text-primary-200 transition-colors" />

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(t.rating)].map((_, si) => (
                  <Star key={si} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-600 text-sm leading-relaxed mb-5 italic">&ldquo;{t.text}&rdquo;</p>

              {/* Reviewer */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-emerald-600 flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">{t.name.charAt(0)}</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-800 text-sm">{t.name}</div>
                  <div className="text-primary-600 text-xs">{t.city}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
