import type { Metadata } from "next";
import { PricingCard } from "@/components/sections/PricingCard";
import { CTASection } from "@/components/sections/CTASection";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { buildMetadata } from "@/lib/metadata";
import { WHATSAPP_URL } from "@/constants/business";
import { MapPin, MessageCircle } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "Pricing – Taxi, Scooty & Bike Rental Rates in Dharamshala",
  description:
    "Transparent pricing for taxi service, scooty on rent, bike rental, and airport pickup in Dharamshala. No hidden charges, fixed affordable rates.",
  path: "/pricing",
});

const plans = [
  {
    title: "Scooty Rental",
    price: "₹400",
    unit: "day",
    description: "Best for solo explorers & couples",
    features: [
      "Honda Activa / Access 125",
      "Helmet included free",
      "24-hour rental period",
      "Weekly discounts available",
      "Fuel not included",
    ],
    href: "/services/scooty-on-rent",
  },
  {
    title: "Local Sightseeing Taxi",
    price: "₹1500",
    unit: "day",
    description: "Full-day taxi for sightseeing tours",
    features: [
      "AC sedan or SUV",
      "Up to 8 hours / 80 km",
      "Driver + fuel included",
      "All major spots covered",
      "Custom route possible",
    ],
    href: "/services/taxi",
    popular: true,
  },
  {
    title: "Royal Enfield Rental",
    price: "₹1200",
    unit: "day",
    description: "For adventure riders & road trips",
    features: [
      "Royal Enfield Bullet 350",
      "GPS tracker included",
      "Helmet included free",
      "24-hr breakdown support",
      "Outstation allowed",
    ],
    href: "/services/bike-on-rent",
  },
];

export default function PricingPage() {
  return (
    <>
      <div className="bg-gradient-to-br from-slate-900 to-brand-900 pt-28 pb-16">
        <div className="container-custom">
          <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Pricing", href: "/pricing" }]} />
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mt-6">
            Transparent Pricing
          </h1>
          <p className="text-brand-200 mt-3 text-lg max-w-xl">
            No hidden charges. No meter surprises. Just honest, upfront pricing for every service.
          </p>
        </div>
      </div>

      {/* Rental plans */}
      <section className="section-pad bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            label="Rental Packages"
            title="Choose the Right Plan for Your Trip"
          />
          <div className="grid md:grid-cols-3 gap-7 max-w-5xl mx-auto">
            {plans.map((p) => (
              <PricingCard key={p.title} {...p} />
            ))}
          </div>
        </div>
      </section>

      {/* Taxi routes table */}
      <section className="section-pad bg-white">
        <div className="container-custom">
          <SectionHeading
            label="Taxi Rates"
            title="Estimated Taxi Fares from Dharamshala"
            subtitle="Contact us for exact rates. Prices depend on vehicle type and season."
          />
          <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-brand-700 text-white">
                  <th className="text-left py-3 px-5 font-semibold">Route</th>
                  <th className="text-center py-3 px-4 font-semibold">Distance</th>
                  <th className="text-right py-3 px-5 font-semibold">Est. Price</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { route: "Dharamshala ↔ McLeod Ganj", dist: "10 km", price: "₹300–500" },
                  { route: "McLeod Ganj ↔ Bhagsu", dist: "3 km", price: "₹200–300" },
                  { route: "Dharamshala ↔ Kangra Airport", dist: "15 km", price: "₹600–900" },
                  { route: "Local sightseeing (full day)", dist: "Up to 80 km", price: "₹1500–2000" },
                  { route: "Dharamshala ↔ Kangra Fort", dist: "20 km", price: "₹500–700" },
                  { route: "Dharamshala ↔ Bir Billing", dist: "70 km", price: "₹2000–2500" },
                  { route: "Dharamshala ↔ Dalhousie", dist: "115 km", price: "₹3500–4500" },
                  { route: "Dharamshala ↔ Amritsar", dist: "185 km", price: "₹4000–5500" },
                  { route: "Dharamshala ↔ Manali", dist: "240 km", price: "₹5000–7000" },
                  { route: "Dharamshala ↔ Shimla", dist: "220 km", price: "₹5000–6500" },
                ].map((r) => (
                  <tr key={r.route} className="hover:bg-gray-50 transition-colors">
                    <td className="py-3 px-5 text-gray-700 flex items-center gap-2">
                      <MapPin className="h-3.5 w-3.5 text-brand-400 flex-shrink-0" />{r.route}
                    </td>
                    <td className="py-3 px-4 text-gray-400 text-center">{r.dist}</td>
                    <td className="py-3 px-5 font-bold text-brand-700 text-right">{r.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center text-sm text-gray-400 mt-5">
            * Estimates only. Vehicle type, number of stops, and seasonal demand may affect pricing.{" "}
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-brand-600 font-semibold hover:underline">
              Get an exact quote on WhatsApp →
            </a>
          </p>
        </div>
      </section>

      {/* Inclusions */}
      <section className="section-pad bg-gray-50">
        <div className="container-custom">
          <SectionHeading label="What's Included" title="No Hidden Charges — Ever" />
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-6 border border-green-100 shadow-sm">
              <h3 className="font-bold text-green-800 mb-4 text-lg">✅ Always Included</h3>
              <ul className="space-y-2">
                {["Driver charges", "Fuel cost (taxi)", "Helmet with scooty/bike", "Parking charges (in most cases)", "Basic trip assistance", "WhatsApp support"].map((i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="text-green-500">✓</span>{i}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-red-100 shadow-sm">
              <h3 className="font-bold text-red-800 mb-4 text-lg">❌ Not Included</h3>
              <ul className="space-y-2">
                {["Fuel for scooty/bike rentals", "Toll taxes (on long routes)", "State entry permits (if any)", "Driver accommodation (on overnight trips)", "Entry fees to monuments", "Food & refreshments"].map((i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="text-red-400">×</span>{i}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
