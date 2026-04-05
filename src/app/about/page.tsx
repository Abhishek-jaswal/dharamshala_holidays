import type { Metadata } from "next";
import { CheckCircle, Heart, MapPin, Award } from "lucide-react";
import { CTASection } from "@/components/sections/CTASection";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "About Us",
  description:
    "Learn about Dharamshala Taxi & Scooty on Rent Service. Local-born, trusted drivers and rental fleet serving Dharamshala, McLeod Ganj, and Himachal Pradesh since years.",
  keywords: ["about Dharamshala taxi service", "local taxi Dharamshala", "trusted rental service Dharamshala"],
  path: "/about",
});

const values = [
  {
    icon: Heart,
    title: "Customer First",
    desc: "Every booking is handled personally. We treat every traveller like a guest in our home.",
  },
  {
    icon: Award,
    title: "Honest Pricing",
    desc: "We quote upfront, no meter surprises, no add-ons. The price we quote is the price you pay.",
  },
  {
    icon: MapPin,
    title: "Local Knowledge",
    desc: "Our drivers know every road, shortcut, and gem in Dharamshala. You'll feel like you have a local friend.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Page header */}
      <div className="bg-gradient-to-br from-slate-900 to-brand-900 pt-28 pb-16">
        <div className="container-custom">
          <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "About Us", href: "/about" }]} />
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mt-6">
            About Our Service
          </h1>
          <p className="text-brand-200 mt-3 text-lg max-w-xl">
            Local people, local knowledge, honest service.
          </p>
        </div>
      </div>

      {/* Story */}
      <section className="section-pad bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-brand-600 font-semibold text-sm uppercase tracking-widest">Our Story</span>
              <h2 className="font-display text-3xl font-bold text-gray-900 mt-2 mb-5">
                Born in Dharamshala, Built for Travellers
              </h2>
              <div className="space-y-4 text-gray-500 leading-relaxed">
                <p>
                  We started as a small local taxi operation helping tourists navigate
                  the winding roads of Dharamshala and McLeod Ganj. Over time, our
                  commitment to honest pricing and friendly service earned us a loyal
                  following among travellers from across India and the world.
                </p>
                <p>
                  Today, we offer a full range of transport solutions — from comfortable
                  taxi rides for families to scooty rentals for solo adventurers. Whether
                  you need a pick-up from Kangra Airport at 4 AM or a scooty for a week
                  of Himachal exploration, our team is ready.
                </p>
                <p>
                  We are proud to be a small, local business — not a big corporate operator.
                  When you book with us, you're supporting a local family and getting
                  genuine, personalised service.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-brand-50 rounded-2xl p-7 text-center">
                <p className="font-display text-4xl font-bold text-brand-700">500+</p>
                <p className="text-gray-500 text-sm mt-1">Happy customers</p>
              </div>
              <div className="bg-amber-50 rounded-2xl p-7 text-center">
                <p className="font-display text-4xl font-bold text-amber-600">5★</p>
                <p className="text-gray-500 text-sm mt-1">Average rating</p>
              </div>
              <div className="bg-blue-50 rounded-2xl p-7 text-center">
                <p className="font-display text-4xl font-bold text-blue-700">24/7</p>
                <p className="text-gray-500 text-sm mt-1">Airport service</p>
              </div>
              <div className="bg-green-50 rounded-2xl p-7 text-center">
                <p className="font-display text-4xl font-bold text-green-700">100%</p>
                <p className="text-gray-500 text-sm mt-1">Transparent pricing</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-pad bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            label="Our Values"
            title="What Makes Us Different"
          />
          <div className="grid md:grid-cols-3 gap-8">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-2xl p-7 shadow-md border border-gray-100 text-center">
                <div className="w-14 h-14 bg-brand-50 rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <Icon className="h-7 w-7 text-brand-600" />
                </div>
                <h3 className="font-display text-xl font-bold text-gray-900 mb-3">{title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet */}
      <section className="section-pad bg-white">
        <div className="container-custom">
          <SectionHeading
            label="Our Fleet"
            title="Well-Maintained Vehicles for Every Trip"
            subtitle="All our vehicles are regularly serviced, clean, and comfortable."
          />
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { vehicle: "Maruti Swift Dzire", type: "Sedan Taxi", seats: "4 passengers", ac: true },
              { vehicle: "Toyota Innova", type: "SUV / Family Taxi", seats: "6 passengers", ac: true },
              { vehicle: "Activa / Access 125", type: "Scooty Rental", seats: "2 riders", ac: false },
              { vehicle: "Royal Enfield Bullet 350", type: "Bike Rental", seats: "2 riders", ac: false },
              { vehicle: "Honda CB Shine", type: "Bike Rental", seats: "2 riders", ac: false },
              { vehicle: "Maruti Ertiga", type: "MPV Taxi", seats: "6 passengers", ac: true },
            ].map((v) => (
              <div key={v.vehicle} className="border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all">
                <h3 className="font-bold text-gray-900">{v.vehicle}</h3>
                <p className="text-sm text-brand-600 font-medium mt-0.5">{v.type}</p>
                <div className="flex gap-3 mt-3">
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">{v.seats}</span>
                  {v.ac && <span className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded-full">AC</span>}
                </div>
                <ul className="mt-3 space-y-1">
                  {["Well-maintained", "Clean & comfortable", "GPS enabled"].map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-gray-500">
                      <CheckCircle className="h-3 w-3 text-green-500" />{f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
