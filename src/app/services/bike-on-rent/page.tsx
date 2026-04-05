import type { Metadata } from "next";
import { Bike, CheckCircle, MessageCircle, Phone, AlertCircle } from "lucide-react";
import { CTASection } from "@/components/sections/CTASection";
import { FAQSection } from "@/components/sections/FAQSection";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { buildMetadata } from "@/lib/metadata";
import { WHATSAPP_URL, CALL_URL } from "@/constants/business";

export const metadata: Metadata = buildMetadata({
  title: "Bike on Rent in Dharamshala – Royal Enfield & More",
  description:
    "Rent a Royal Enfield, Honda CB Shine, or other bikes in Dharamshala starting at ₹800/day. Perfect for Himalayan road trips to Manali, Bir Billing & beyond.",
  keywords: ["bike on rent Dharamshala", "Royal Enfield rent Dharamshala", "motorcycle rental McLeod Ganj", "Himalayan bike rental"],
  path: "/services/bike-on-rent",
});

const bikeFaqs = [
  { question: "What bikes are available for rent in Dharamshala?", answer: "We have Royal Enfield Bullet 350, Royal Enfield Electra, Honda CB Shine, and Hero Splendor available for rent." },
  { question: "What is the bike rental rate in Dharamshala?", answer: "Bike rental rates start at ₹800/day for standard bikes and ₹1200/day for Royal Enfield. Weekly discounts are available." },
  { question: "Do I need a geared bike licence to rent a bike?", answer: "Yes, a valid driving licence for geared motorcycles is required. Your licence should cover the CC of the bike you intend to rent." },
  { question: "Can I take the rented bike on outstation trips to Manali?", answer: "Yes, with prior permission and appropriate security deposit. Outstation rentals are allowed for experienced riders." },
];

export default function BikeRentPage() {
  return (
    <>
      <div className="bg-gradient-to-br from-slate-900 to-brand-900 pt-28 pb-16">
        <div className="container-custom">
          <Breadcrumbs items={[
            { name: "Home", href: "/" },
            { name: "Services", href: "/services" },
            { name: "Bike on Rent", href: "/services/bike-on-rent" },
          ]} />
          <div className="flex items-center gap-4 mt-6">
            <div className="w-16 h-16 bg-brand-600 rounded-2xl flex items-center justify-center">
              <Bike className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-white">
                Bike on Rent in Dharamshala
              </h1>
              <p className="text-brand-200 mt-1">Royal Enfield & more · From ₹800/day · GPS included</p>
            </div>
          </div>
        </div>
      </div>

      <section className="section-pad bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <div>
              <h2 className="font-display text-3xl font-bold text-gray-900 mb-5">
                Ride the Himalayas on Your Terms
              </h2>
              <div className="space-y-4 text-gray-500 leading-relaxed">
                <p>
                  Dharamshala is a dream destination for motorcycle enthusiasts. The winding
                  mountain roads, pine forests, and panoramic Dhauladhar views are best
                  experienced on two wheels. Rent a bike from us and take on the Himalayan
                  roads at your own pace.
                </p>
                <p>
                  From the iconic Royal Enfield Bullet to nimble commuter bikes — we have
                  bikes for all types of riders. Whether you're planning a local Dharamshala
                  tour, a trip to Bir Billing, or an epic Manali ride, we've got you covered.
                </p>
              </div>
              <ul className="mt-6 space-y-3">
                {[
                  "Royal Enfield Bullet 350 & Electra available",
                  "GPS tracker installed on all bikes",
                  "24-hour roadside assistance",
                  "Starting ₹800/day — weekly packages available",
                  "Helmet provided free of charge",
                  "Outstation trips allowed (prior approval required)",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-3 text-gray-700 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />{f}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex gap-4">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                  <MessageCircle className="h-4 w-4" /> Book a Bike
                </a>
                <a href={CALL_URL} className="btn-primary">
                  <Phone className="h-4 w-4" /> Call Now
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-display text-xl font-bold text-gray-900">Our Bike Fleet</h3>
              {[
                { model: "Royal Enfield Bullet 350", cc: "350cc", type: "Geared", price: "₹1200/day" },
                { model: "Royal Enfield Electra 350", cc: "350cc", type: "Geared", price: "₹1200/day" },
                { model: "Honda CB Shine", cc: "125cc", type: "Geared", price: "₹800/day" },
                { model: "Hero Splendor Plus", cc: "100cc", type: "Geared", price: "₹700/day" },
              ].map((b) => (
                <div key={b.model} className="bg-gray-50 border border-gray-100 rounded-2xl p-5 flex items-center justify-between hover:border-brand-200 hover:shadow-md transition-all">
                  <div>
                    <p className="font-bold text-gray-900">{b.model}</p>
                    <div className="flex gap-2 mt-1">
                      <span className="text-xs bg-brand-50 text-brand-700 px-2 py-0.5 rounded-full">{b.cc}</span>
                      <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">{b.type}</span>
                    </div>
                  </div>
                  <span className="font-bold text-brand-700 text-lg">{b.price}</span>
                </div>
              ))}
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-amber-900 mb-2">Requirements</h4>
                    <ul className="space-y-1 text-sm text-amber-800">
                      <li>• Valid geared 2-wheeler licence (MCWG)</li>
                      <li>• Government-issued photo ID</li>
                      <li>• Refundable security deposit</li>
                      <li>• Minimum age: 21 years for RE bikes</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-custom max-w-3xl">
          <SectionHeading label="FAQ" title="Bike Rental FAQs" />
          <FAQSection faqs={bikeFaqs} withSchema />
        </div>
      </section>

      <CTASection
        title="Book Your Bike in Dharamshala Today"
        subtitle="WhatsApp us to check availability and confirm your booking in minutes."
      />
    </>
  );
}
