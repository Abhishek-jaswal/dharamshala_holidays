import type { Metadata } from "next";
import { Bike, CheckCircle, MessageCircle, Phone, AlertCircle } from "lucide-react";
import { CTASection } from "@/components/sections/CTASection";
import { FAQSection } from "@/components/sections/FAQSection";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { buildMetadata } from "@/lib/metadata";
import { WHATSAPP_URL, CALL_URL } from "@/constants/business";

export const metadata: Metadata = buildMetadata({
  title: "Scooty on Rent in Dharamshala – ₹400/day",
  description:
    "Rent a scooty in Dharamshala starting at ₹400/day. Activa, Access 125, and more available. Helmet included. Explore McLeod Ganj, Bhagsu, Naddi & Dharamkot on your own terms.",
  keywords: ["scooty on rent in Dharamshala", "scooty rental McLeod Ganj", "rent scooty Dharamshala", "Activa rent Dharamshala"],
  path: "/services/scooty-on-rent",
});

const scootyFaqs = [
  { question: "What scooties are available for rent in Dharamshala?", answer: "We have Honda Activa 6G, Suzuki Access 125, and TVS Jupiter available. All are well-maintained gearless scooties suitable for Dharamshala's hilly roads." },
  { question: "What is the rental rate for a scooty in Dharamshala?", answer: "Scooty rental starts at ₹400/day for a 24-hour period. Weekly rates are available at a discount. Fuel is not included." },
  { question: "What documents are needed to rent a scooty?", answer: "You need a valid driving licence (2-wheeler), a government-issued ID (Aadhaar, passport, or voter ID), and a refundable security deposit of ₹1500–2000." },
  { question: "Is a helmet provided with the scooty?", answer: "Yes! One helmet is included free with every rental. Additional helmets can be arranged on request." },
  { question: "Can tourists with international licences rent scooties?", answer: "Yes, tourists with valid international driving licences are welcome to rent from us." },
];

const scootyFleet = [
  { model: "Honda Activa 6G", cc: "110cc", type: "Gearless", price: "₹400/day", fuel: "Petrol" },
  { model: "Suzuki Access 125", cc: "125cc", type: "Gearless", price: "₹450/day", fuel: "Petrol" },
  { model: "TVS Jupiter", cc: "110cc", type: "Gearless", price: "₹400/day", fuel: "Petrol" },
];

export default function ScootyRentPage() {
  return (
    <>
      <div className="bg-gradient-to-br from-slate-900 to-brand-900 pt-28 pb-16">
        <div className="container-custom">
          <Breadcrumbs items={[
            { name: "Home", href: "/" },
            { name: "Services", href: "/services" },
            { name: "Scooty on Rent", href: "/services/scooty-on-rent" },
          ]} />
          <div className="flex items-center gap-4 mt-6">
            <div className="w-16 h-16 bg-brand-600 rounded-2xl flex items-center justify-center">
              <Bike className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-white">
                Scooty on Rent in Dharamshala
              </h1>
              <p className="text-brand-200 mt-1">Starting ₹400/day · Helmet included · Easy booking</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <section className="section-pad bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <div>
              <h2 className="font-display text-3xl font-bold text-gray-900 mb-5">
                Explore Dharamshala on a Scooty — Your Way
              </h2>
              <div className="space-y-4 text-gray-500 leading-relaxed">
                <p>
                  Renting a scooty in Dharamshala is the best way to explore the area at
                  your own pace. Zip through the vibrant lanes of McLeod Ganj, ride up to
                  the peaceful Dharamkot village, discover the stunning Bhagsu Waterfall,
                  or catch sunrise at Naddi Viewpoint — all without depending on taxis.
                </p>
                <p>
                  Our scooties are well-maintained, fuel-efficient, and easy to ride
                  on Dharamshala's hilly terrain. We have gearless scooties ideal for
                  beginners as well as experienced riders.
                </p>
              </div>
              <ul className="mt-6 space-y-3">
                {[
                  "Honda Activa, Suzuki Access 125 & TVS Jupiter available",
                  "Starting at just ₹400/day (24 hours)",
                  "Helmet included free of charge",
                  "Daily, weekly & monthly rental packages",
                  "Security deposit returned on return of vehicle",
                  "Available for tourists with international licences",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-3 text-gray-700 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />{f}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex gap-4">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                  <MessageCircle className="h-4 w-4" /> Rent a Scooty
                </a>
                <a href={CALL_URL} className="btn-primary">
                  <Phone className="h-4 w-4" /> Call Now
                </a>
              </div>
            </div>

            {/* Pricing box */}
            <div className="space-y-4">
              <h3 className="font-display text-xl font-bold text-gray-900">Available Scooties</h3>
              {scootyFleet.map((s) => (
                <div key={s.model} className="bg-gray-50 border border-gray-100 rounded-2xl p-5 flex items-center justify-between hover:border-brand-200 hover:shadow-md transition-all">
                  <div>
                    <p className="font-bold text-gray-900">{s.model}</p>
                    <div className="flex gap-2 mt-1">
                      <span className="text-xs bg-brand-50 text-brand-700 px-2 py-0.5 rounded-full">{s.cc}</span>
                      <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">{s.type}</span>
                      <span className="text-xs bg-amber-50 text-amber-700 px-2 py-0.5 rounded-full">{s.fuel}</span>
                    </div>
                  </div>
                  <span className="font-bold text-brand-700 text-lg">{s.price}</span>
                </div>
              ))}

              {/* Requirements box */}
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-amber-900 mb-2">Requirements to Rent</h4>
                    <ul className="space-y-1 text-sm text-amber-800">
                      <li>• Valid 2-wheeler driving licence</li>
                      <li>• Government-issued photo ID</li>
                      <li>• Refundable security deposit</li>
                      <li>• Minimum age: 18 years</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Best Spots */}
      <section className="section-pad bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            label="Explore by Scooty"
            title="Best Places to Visit on a Scooty in Dharamshala"
            subtitle="Here are the top spots you can easily ride to on a rented scooty."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { place: "McLeod Ganj Market", desc: "Explore Tibetan culture, cafes, and souvenirs.", distance: "10 km from Dharamshala" },
              { place: "Bhagsu Waterfall", desc: "A refreshing waterfall walk from McLeod Ganj.", distance: "3 km from McLeod Ganj" },
              { place: "Dharamkot Village", desc: "Peaceful village with mountain and valley views.", distance: "3 km from McLeod Ganj" },
              { place: "Naddi Viewpoint", desc: "Stunning views of the Dhauladhar range.", distance: "5 km from McLeod Ganj" },
              { place: "Dal Lake Dharamshala", desc: "A serene lake perfect for a morning ride.", distance: "2 km from McLeod Ganj" },
              { place: "Triund Trek Base", desc: "Ride up to Gallu Devi Temple and start the Triund trek.", distance: "5 km from McLeod Ganj" },
            ].map((s) => (
              <div key={s.place} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-1">{s.place}</h3>
                <p className="text-sm text-gray-500 mb-2">{s.desc}</p>
                <span className="text-xs text-brand-600 font-medium">{s.distance}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-custom max-w-3xl">
          <SectionHeading label="FAQ" title="Scooty Rental FAQs" />
          <FAQSection faqs={scootyFaqs} withSchema />
        </div>
      </section>

      <CTASection
        title="Rent a Scooty in Dharamshala Today!"
        subtitle="Send us a WhatsApp message or call to check availability and book your scooty instantly."
      />
    </>
  );
}
