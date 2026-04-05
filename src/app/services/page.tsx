import type { Metadata } from "next";
import Link from "next/link";
import { Car, Bike, Plane, Map, Clock, Phone, MessageCircle, ArrowRight } from "lucide-react";
import { CTASection } from "@/components/sections/CTASection";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { buildMetadata } from "@/lib/metadata";
import { WHATSAPP_URL, CALL_URL } from "@/constants/business";

export const metadata: Metadata = buildMetadata({
  title: "Our Services – Taxi, Scooty & Bike Rental",
  description:
    "Explore all our services: local taxi, outstation taxi, airport pickup, scooty on rent, and bike on rent in Dharamshala. Affordable rates, reliable service.",
  path: "/services",
});

const allServices = [
  {
    icon: Car,
    title: "Local Taxi Service",
    description:
      "Comfortable, affordable taxi rides within Dharamshala — to McLeod Ganj, Bhagsu, Naddi, Dharamkot, Kangra Fort, and all popular sightseeing spots.",
    href: "/services/taxi",
    highlights: ["AC & non-AC options", "Fixed pricing per route", "City tour packages", "Experienced drivers"],
    price: "from ₹300",
  },
  {
    icon: Car,
    title: "Outstation Taxi",
    description:
      "Long-distance taxi from Dharamshala to Manali, Shimla, Dalhousie, Bir Billing, Amritsar, Pathankot, and other major Himachal Pradesh destinations.",
    href: "/services/taxi#outstation",
    highlights: ["Round-trip & one-way", "Manali / Shimla / Dalhousie", "Comfortable for families", "Driver rest included"],
    price: "from ₹2000",
  },
  {
    icon: Plane,
    title: "Airport Pickup & Drop",
    description:
      "Never worry about late-night or early-morning flights. We monitor your flight and pick you up on time from Kangra-Gaggal Airport.",
    href: "/services/airport-pickup",
    highlights: ["24/7 availability", "Flight tracking", "Meet & greet", "No night surcharge"],
    price: "from ₹600",
  },
  {
    icon: Bike,
    title: "Scooty on Rent",
    description:
      "Rent a gearless scooty and explore Dharamshala at your own pace. Perfect for solo travellers and couples wanting flexibility.",
    href: "/services/scooty-on-rent",
    highlights: ["Activa / Access 125", "Helmet included", "Daily/weekly rates", "Easy booking"],
    price: "from ₹400/day",
  },
  {
    icon: Bike,
    title: "Bike on Rent",
    description:
      "Adventure-ready bikes for riders who want to tackle mountain roads, visit remote monasteries, or go on longer Himachal road trips.",
    href: "/services/bike-on-rent",
    highlights: ["Royal Enfield & more", "Geared bikes", "GPS on bikes", "Adventure-ready"],
    price: "from ₹800/day",
  },
  {
    icon: Map,
    title: "Local Sightseeing Packages",
    description:
      "Curated half-day and full-day sightseeing taxi packages covering the top tourist spots in and around Dharamshala.",
    href: "/destinations",
    highlights: ["Half-day & full-day", "Fixed all-inclusive price", "McLeod Ganj tour", "Kangra Valley tour"],
    price: "from ₹1500",
  },
];

export default function ServicesPage() {
  return (
    <>
      <div className="bg-gradient-to-br from-slate-900 to-brand-900 pt-28 pb-16">
        <div className="container-custom">
          <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Services", href: "/services" }]} />
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mt-6">
            Our Services in Dharamshala
          </h1>
          <p className="text-brand-200 mt-3 text-lg max-w-xl">
            Taxi, scooty rental, bike rental, and airport transfers — all in one place.
          </p>
        </div>
      </div>

      <section className="section-pad bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allServices.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.title} className="bg-white rounded-2xl p-7 shadow-md border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
                  <div className="w-14 h-14 bg-brand-50 rounded-2xl flex items-center justify-center mb-5">
                    <Icon className="h-7 w-7 text-brand-600" />
                  </div>
                  <h2 className="font-display text-xl font-bold text-gray-900 mb-2">{s.title}</h2>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">{s.description}</p>
                  <ul className="space-y-1.5 mb-5">
                    {s.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-2 text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 bg-brand-400 rounded-full flex-shrink-0" />{h}
                      </li>
                    ))}
                  </ul>
                  <p className="font-bold text-brand-700 mb-4">{s.price}</p>
                  <Link href={s.href} className="btn-primary justify-center text-sm">
                    Learn More <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick contact strip */}
      <section className="bg-white py-10 border-t border-gray-100">
        <div className="container-custom text-center">
          <h2 className="font-display text-2xl font-bold text-gray-900 mb-2">
            Not sure which service you need?
          </h2>
          <p className="text-gray-500 mb-6">Call or WhatsApp us — we'll suggest the best option for your trip.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
              <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
            </a>
            <a href={CALL_URL} className="btn-primary">
              <Phone className="h-4 w-4" /> Call Now
            </a>
          </div>
        </div>
      </section>

      <CTASection dark={false} />
    </>
  );
}
