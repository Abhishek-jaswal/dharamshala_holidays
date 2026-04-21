import Image from 'next/image'

const GALLERY = [
  { src: 'https://images.unsplash.com/photo-1626015249872-5ee9b1f7c2b5?w=600&q=80', alt: 'Dharamshala mountains panorama', wide: true  },
  { src: 'https://images.unsplash.com/photo-1585156814673-5b14b22b5e9d?w=400&q=80', alt: 'McLeod Ganj street view',         wide: false },
  { src: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&q=80', alt: 'Royal Enfield on mountain road',  wide: false },
  { src: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=400&q=80', alt: 'Taxi cab ready for journey',      wide: false },
  { src: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&q=80', alt: 'Triund trek Himalayas',           wide: false },
  { src: 'https://images.unsplash.com/photo-1502481851512-e9e2529bfbf9?w=600&q=80', alt: 'Manali Himachal Pradesh tour',    wide: true  },
]

export default function Gallery() {
  return (
    <section className="py-20 md:py-28 bg-white" id="gallery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block bg-primary-100 text-primary-700 text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest mb-4">
            Gallery
          </span>
          <h2 className="section-title">
            The <span className="text-gradient">Beauty of Himachal</span> Awaits
          </h2>
          <p className="section-subtitle mx-auto">
            Glimpses of the stunning landscapes, roads, and experiences our customers enjoy.
          </p>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {GALLERY.map(({ src, alt, wide }, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-2xl group cursor-pointer ${
                wide ? 'col-span-2 md:col-span-1' : ''
              }`}
              style={{ height: wide ? '280px' : '220px' }}
            >
              <Image
                src={src}
                alt={alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 768px) 50vw, 33vw"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white text-sm font-medium translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                {alt}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
