import type { Metadata } from "next";
import { MapPin, Clock, Car, ArrowRight } from "lucide-react";
import { CTASection } from "@/components/sections/CTASection";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { buildMetadata } from "@/lib/metadata";
import { WHATSAPP_URL, DESTINATIONS } from "@/constants/business";
import Link from "next/link";

export const metadata: Metadata = buildMetadata({
  title: "Top Destinations & Local Sightseeing in Dharamshala",
  description:
    "Explore the best tourist places near Dharamshala — McLeod Ganj, Bhagsu Waterfall, Triund, Kangra Fort, Dharamkot, and more. Book a sightseeing taxi or rent a scooty.",
  keywords: ["Dharamshala tourist places", "McLeod Ganj sightseeing", "local sightseeing taxi Dharamshala", "places near Dharamshala"],
  path: "/destinations",
});

const places = [
  {
    name: "McLeod Ganj",
    tagline: "Little Lhasa of India",
    desc: "The hub of Tibetan culture in India. Explore the Dalai Lama's temple, Tibetan markets, cozy cafes, and vibrant street life.",
    distance: "10 km from Dharamshala",
    type: "Cultural & Spiritual",
    highlights: ["Tsuglagkhang Complex (Dalai Lama Temple)", "Tibetan market", "Namgyal Monastery", "Kotwali Bazaar"],
  },
  {
    name: "Bhagsu Waterfall",
    tagline: "A refreshing Himalayan cascade",
    desc: "A short trek from Bhagsu village leads to this beautiful waterfall surrounded by forests. Perfect for a morning excursion.",
    distance: "3 km from McLeod Ganj",
    type: "Nature & Trekking",
    highlights: ["Bhagsu Nag Temple", "Cafe culture", "Photography spots", "Short 1 km trek"],
  },
  {
    name: "Triund Trek Base",
    tagline: "Gateway to the Dhauladhar Range",
    desc: "Drive up to Gallu Devi Temple and Dharamkot, then start the famous Triund trek with jaw-dropping mountain views.",
    distance: "6 km from McLeod Ganj",
    type: "Adventure & Trekking",
    highlights: ["Triund hilltop camping", "360° Dhauladhar views", "Gallu Devi Temple", "Pine forest trail"],
  },
  {
    name: "Dharamkot Village",
    tagline: "Peaceful village above McLeod Ganj",
    desc: "A quiet mountain village popular with yoga retreats and long-stay travellers. Stunning valley and forest views.",
    distance: "3 km from McLeod Ganj",
    type: "Village & Nature",
    highlights: ["Yoga & meditation centres", "Himalayan views", "Village walks", "Sunset viewpoints"],
  },
  {
    name: "Naddi Viewpoint",
    tagline: "Best sunrise point in Dharamshala",
    desc: "A 15-minute ride above McLeod Ganj offers panoramic views of the Dhauladhar range — especially magical at sunrise.",
    distance: "5 km from McLeod Ganj",
    type: "Viewpoint & Nature",
    highlights: ["Sunrise viewpoint", "Dhauladhar peaks", "Peaceful environment", "Dal Lake below"],
  },
  {
    name: "Kangra Fort",
    tagline: "Ancient fort of the Katoch dynasty",
    desc: "One of the oldest forts in the Himalayan region, dating back over 3500 years. Offers spectacular valley views.",
    distance: "20 km from Dharamshala",
    type: "Heritage & History",
    highlights: ["3500+ year old fort", "Panoramic Kangra valley views", "Brajeshwari Temple nearby", "History & architecture"],
  },
  {
    name: "Dal Lake Dharamshala",
    tagline: "Serene Himalayan lake with pine views",
    desc: "A small, peaceful lake surrounded by deodar trees. Ideal for a quiet morning visit away from the McLeod Ganj crowds.",
    distance: "11 km from Dharamshala",
    type: "Nature & Relaxation",
    highlights: ["Serene lake surroundings", "Deodar pine forest", "Shiva temple", "Boating (seasonal)"],
  },
  {
    name: "Bir Billing",
    tagline: "Paragliding capital of Asia",
    desc: "Located 70 km from Dharamshala, Bir Billing is the world's second-best paragliding site. A popular day or overnight trip.",
    distance: "70 km from Dharamshala",
    type: "Adventure Sports",
    highlights: ["Paragliding flights", "Landing site at Bir village", "Tibetan colony", "Camping options"],
  },
];

export default function DestinationsPage() {
  return (
    <>
      <div className="bg-gradient-to-br from-slate-900 to-brand-900 pt-28 pb-16">
        <div className="container-custom">
          <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Destinations", href: "/destinations" }]} />
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mt-6">
            Top Destinations Near Dharamshala
          </h1>
          <p className="text-brand-200 mt-3 text-lg max-w-xl">
            Explore McLeod Ganj, Bhagsu, Triund, Kangra Fort, and more — by taxi or rented scooty.
          </p>
        </div>
      </div>

      {/* Quick Routes */}
      <section className="bg-white py-8 border-b border-gray-100">
        <div className="container-custom">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {DESTINATIONS.slice(0, 4).map((d) => (
              <div key={d.name} className="bg-gray-50 rounded-xl p-3 text-center border border-gray-100">
                <p className="font-bold text-gray-900 text-sm">{d.name}</p>
                <p className="text-xs text-gray-400">{d.distance}</p>
                <p className="text-xs font-bold text-brand-700 mt-1">{d.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Destination cards */}
      <section className="section-pad bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            label="Local Sightseeing"
            title="Must-Visit Places in & Around Dharamshala"
            subtitle="From spiritual McLeod Ganj to adventurous Triund — we'll take you everywhere."
          />
          <div className="grid md:grid-cols-2 gap-6">
            {places.map((p) => (
              <div key={p.name} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h2 className="font-display text-xl font-bold text-gray-900">{p.name}</h2>
                    <p className="text-brand-600 text-sm font-medium">{p.tagline}</p>
                  </div>
                  <span className="text-xs bg-brand-50 text-brand-700 px-2 py-1 rounded-full flex-shrink-0 ml-3">
                    {p.type}
                  </span>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{p.desc}</p>
                <div className="flex items-center gap-2 text-xs text-gray-400 mb-4">
                  <MapPin className="h-3.5 w-3.5 text-brand-400" />
                  <span>{p.distance}</span>
                </div>
                <ul className="grid grid-cols-2 gap-1.5 mb-5">
                  {p.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-1.5 text-xs text-gray-600">
                      <span className="w-1 h-1 bg-brand-400 rounded-full flex-shrink-0" />{h}
                    </li>
                  ))}
                </ul>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-brand-600 hover:text-brand-700"
                >
                  <Car className="h-4 w-4" /> Book a Taxi to {p.name} <ArrowRight className="h-3 w-3" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sightseeing packages */}
      <section className="section-pad bg-white">
        <div className="container-custom">
          <SectionHeading
            label="Sightseeing Packages"
            title="Curated Day Tour Packages from Dharamshala"
          />
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "McLeod Ganj Half-Day Tour",
                duration: "4–5 hours",
                price: "₹1000–1500",
                places: ["Tsuglagkhang Temple", "Bhagsu Waterfall", "Namgyal Monastery", "Tibetan Market"],
                href: "/contact",
              },
              {
                title: "Dharamshala Full-Day Tour",
                duration: "8–9 hours",
                price: "₹1800–2500",
                places: ["McLeod Ganj", "Bhagsu", "Dharamkot", "Naddi Viewpoint", "Dal Lake", "Cricket Stadium"],
                href: "/contact",
              },
              {
                title: "Kangra Valley Tour",
                duration: "Full day",
                price: "₹2200–3000",
                places: ["Kangra Fort", "Masroor Rock Temple", "Jwala Devi Temple", "Baijnath Temple"],
                href: "/contact",
              },
            ].map((pkg) => (
              <div key={pkg.title} className="bg-gray-50 border border-gray-100 rounded-2xl p-6">
                <h3 className="font-display text-xl font-bold text-gray-900 mb-1">{pkg.title}</h3>
                <div className="flex items-center gap-3 text-sm text-gray-400 mb-4">
                  <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{pkg.duration}</span>
                  <span className="font-bold text-brand-700">{pkg.price}</span>
                </div>
                <ul className="space-y-1.5 mb-5">
                  {pkg.places.map((pl) => (
                    <li key={pl} className="flex items-center gap-2 text-sm text-gray-600">
                      <MapPin className="h-3.5 w-3.5 text-brand-400 flex-shrink-0" />{pl}
                    </li>
                  ))}
                </ul>
                <Link href={pkg.href} className="btn-primary w-full justify-center text-sm">
                  Book This Tour
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
