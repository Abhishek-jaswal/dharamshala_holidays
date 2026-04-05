import type { Metadata } from "next";
import { CTASection } from "@/components/sections/CTASection";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Gallery – Our Fleet & Dharamshala Destinations",
  description:
    "Browse photos of our taxi fleet, scooties, bikes, and the beautiful destinations we serve — McLeod Ganj, Bhagsu, Triund, and more.",
  path: "/gallery",
});

// ✏️ Replace these with real image URLs or import from public/images
const galleryItems = [
  { src: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&q=80", alt: "Clean white taxi in Dharamshala mountains", category: "Taxi" },
  { src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80", alt: "Honda Activa scooty ready for rent", category: "Scooty" },
  { src: "https://images.unsplash.com/photo-1519750783826-e2420f4d687f?w=600&q=80", alt: "McLeod Ganj street view Dharamshala", category: "Destination" },
  { src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80", alt: "Himalayan mountains view from Triund", category: "Destination" },
  { src: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&q=80", alt: "Mountain road Dharamshala taxi route", category: "Taxi" },
  { src: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=600&q=80", alt: "Royal Enfield bike for rent Dharamshala", category: "Bike" },
  { src: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=80", alt: "Bhagsu waterfall near McLeod Ganj", category: "Destination" },
  { src: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600&q=80", alt: "Comfortable taxi interior for tourist", category: "Taxi" },
  { src: "https://images.unsplash.com/photo-1605649461784-70e57e5e45a0?w=600&q=80", alt: "Dharamshala valley sightseeing tour", category: "Destination" },
];

const categories = ["All", "Taxi", "Scooty", "Bike", "Destination"];

export default function GalleryPage() {
  return (
    <>
      <div className="bg-gradient-to-br from-slate-900 to-brand-900 pt-28 pb-16">
        <div className="container-custom">
          <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Gallery", href: "/gallery" }]} />
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mt-6">
            Photo Gallery
          </h1>
          <p className="text-brand-200 mt-3 text-lg max-w-xl">
            Our vehicles, the roads we drive, and the beautiful places we visit — all in one place.
          </p>
        </div>
      </div>

      <section className="section-pad bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            label="Our Gallery"
            title="Explore Dharamshala Through Our Lens"
            subtitle="From our well-maintained vehicles to the stunning destinations we serve."
          />

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {galleryItems.map((item, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-2xl aspect-[4/3] bg-gray-200 shadow-md hover:shadow-xl transition-all duration-300"
              >
                {/* Using next/image for optimization in real app — using img here for simplicity */}
                {/* ✏️ Replace with <Image> from next/image for production */}
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-xs bg-brand-600 text-white px-2 py-1 rounded-full">{item.category}</span>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-gray-400 mt-8">
            ✏️ <em>Replace these placeholder images with real photos of your vehicles and destinations.</em>
          </p>
        </div>
      </section>

      <CTASection dark={false} />
    </>
  );
}
