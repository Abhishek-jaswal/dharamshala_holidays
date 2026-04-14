"use client";

import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Sharma",
    location: "Delhi",
    rating: 5,
    review:
      "SKD Holidays made our Chamba trip absolutely magical. The driver was incredibly knowledgeable about local spots and the package price was unbeatable. Highly recommend!",
    package: "Chamba Heritage Tour",
    avatar: "RS",
    avatarGradient: "from-sky-500 to-blue-600",
  },
  {
    name: "Priya Mehta",
    location: "Mumbai",
    rating: 5,
    review:
      "Rented a Royal Enfield Himalayan for 4 days and it was the best decision ever. Bike was in perfect condition, gear was provided, and the team was responsive on WhatsApp.",
    package: "Bike Rental",
    avatar: "PM",
    avatarGradient: "from-violet-500 to-purple-600",
  },
  {
    name: "Arjun & Sunita",
    location: "Chandigarh",
    rating: 5,
    review:
      "Celebrated our anniversary at Dalhousie with SKD's luxury package. The resort, candlelit dinner, and private horse riding — everything was perfectly arranged. Thank you!",
    package: "Dalhousie Luxury Retreat",
    avatar: "A&S",
    avatarGradient: "from-rose-500 to-pink-600",
  },
  {
    name: "Karan Thakur",
    location: "Shimla",
    rating: 5,
    review:
      "Bir Billing paragliding with SKD was exhilarating! Safety was top priority, pilot was very professional, and the views were out of this world. Already planning my next trip.",
    package: "Bir Adventure Package",
    avatar: "KT",
    avatarGradient: "from-amber-500 to-orange-600",
  },
  {
    name: "Sneha Gupta",
    location: "Pune",
    rating: 5,
    review:
      "Solo trip to McLeodganj was made so comfortable by SKD. Their local team knew the best cafés and the taxi service was punctual and very affordable. 10/10!",
    package: "McLeodganj Solo Trip",
    avatar: "SG",
    avatarGradient: "from-emerald-500 to-teal-600",
  },
  {
    name: "Vikram & Family",
    location: "Ludhiana",
    rating: 5,
    review:
      "Traveled with kids to Khajjiar. The Innova Crysta was comfortable and the driver was extremely patient and helpful. Kids loved the zorbing! Will book again next year.",
    package: "Khajjiar Family Trip",
    avatar: "VF",
    avatarGradient: "from-indigo-500 to-violet-600",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0c1f3f]/15 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-sky-400 text-sm font-mono uppercase tracking-widest mb-3">
            Testimonials
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
            What Our{" "}
            <span className="gradient-text italic">Travellers Say</span>
          </h2>
          <div className="flex items-center justify-center gap-2 text-amber-400">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="w-5 h-5 fill-current" />
            ))}
            <span className="text-slate-300 text-sm ml-2">4.9 / 5 from 500+ reviews</span>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="glass rounded-2xl p-6 group hover:bg-white/8 transition-all duration-300 relative overflow-hidden"
            >
              {/* Quote icon */}
              <Quote className="absolute top-5 right-5 w-8 h-8 text-sky-500/20" />

              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-current" />
                ))}
              </div>

              {/* Review */}
              <p className="text-slate-300 text-sm leading-relaxed mb-6 line-clamp-4">
                &ldquo;{t.review}&rdquo;
              </p>

              {/* Package badge */}
              <div className="inline-flex items-center px-2.5 py-1 rounded-lg bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-mono mb-5">
                {t.package}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-xl bg-gradient-to-br ${t.avatarGradient} flex items-center justify-center text-white text-xs font-bold font-mono`}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{t.name}</div>
                  <div className="text-slate-500 text-xs">{t.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
