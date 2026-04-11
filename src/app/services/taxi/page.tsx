import type { Metadata } from "next";
import { Car, CheckCircle, Phone, MessageCircle, MapPin, Zap } from "lucide-react";
import { CTASection } from "@/components/sections/CTASection";
import { FAQSection } from "@/components/sections/FAQSection";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { buildMetadata } from "@/lib/metadata";
import { WHATSAPP_URL, CALL_URL, DESTINATIONS } from "@/constants/business";
import { Taxi3D } from "@/components/animated/Taxi3D";
import { AnimatedCard, AnimatedContainer, AnimatedItem, AnimatedRevealText } from "@/components/animated/AnimatedComponents";

export const metadata: Metadata = buildMetadata({
  title: "Taxi Service in Dharamshala – Local & Outstation",
  description:
    "Book reliable taxi service in Dharamshala for local sightseeing, outstation trips, and airport transfers. Experienced drivers, AC vehicles, fixed transparent pricing.",
  keywords: ["taxi service Dharamshala", "local taxi McLeod Ganj", "outstation taxi Dharamshala", "Dharamshala cab booking"],
  path: "/services/taxi",
});

const taxiFaqs = [
  { question: "How do I book a taxi in Dharamshala?", answer: "Simply call us or send a WhatsApp message with your pickup location, destination, and preferred time. We confirm instantly." },
  { question: "Do you provide AC taxis in Dharamshala?", answer: "Yes, we have both AC and non-AC taxis available. AC taxis include Maruti Swift Dzire, Maruti Ertiga, and Toyota Innova." },
  { question: "What are your taxi rates for outstation trips?", answer: "Rates depend on the destination and vehicle type. Typical outstation rates start from ₹2000 for trips like Bir Billing or Dalhousie. Contact us for a custom quote." },
  { question: "Can I book a full-day taxi for sightseeing?", answer: "Yes! We offer full-day local sightseeing packages covering McLeod Ganj, Bhagsu, Dharamkot, Naddi, Kangra Fort, and more starting from ₹1500." },
];

export default function TaxiPage() {
  return (
    <>
      <div className="bg-gradient-to-br from-slate-900 to-brand-900 pt-28 pb-16">
        <div className="container-custom">
          <Breadcrumbs items={[
            { name: "Home", href: "/" },
            { name: "Services", href: "/services" },
            { name: "Taxi Service", href: "/services/taxi" },
          ]} />
          <div className="flex items-center gap-4 mt-6">
            <div className="w-16 h-16 bg-brand-600 rounded-2xl flex items-center justify-center">
              <Car className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-white">
                Taxi Service in Dharamshala
              </h1>
              <p className="text-brand-200 mt-1">Local sightseeing · Outstation · Airport transfer</p>
            </div>
          </div>
        </div>
      </div>

      {/* Overview */}
      <section className="section-pad bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <AnimatedContainer className="space-y-6">
              <AnimatedItem>
                <h2 className="font-display text-3xl font-bold text-gray-900 mb-5">
                  <AnimatedRevealText text="Dharamshala's Reliable Taxi Service" className="font-display text-3xl font-bold text-gray-900" />
                </h2>
              </AnimatedItem>
              <AnimatedItem>
                <div className="space-y-4 text-gray-500 leading-relaxed">
                  <p>
                    Looking for a trusted taxi in Dharamshala? Whether you need a quick ride
                    to McLeod Ganj, a full-day sightseeing tour, or an outstation trip to
                    Manali or Shimla — we're here for you. Our fleet includes sedans, SUVs,
                    and MPVs to suit solo travellers, couples, families, and groups.
                  </p>
                  <p>
                    Our local drivers know every route in Dharamshala and the surrounding
                    Kangra valley. They'll take you to the best spots, suggest hidden gems,
                    and ensure you reach your destination safely and on time.
                  </p>
                  <p>
                    We offer both local and outstation taxi services with transparent, upfront
                    pricing. No meters, no surprises — just reliable, honest transport.
                  </p>
                </div>
              </AnimatedItem>
              <AnimatedItem>
                <ul className="mt-6 space-y-3">
                  {[
                    "Local rides within Dharamshala, McLeod Ganj & surroundings",
                    "Outstation trips to Manali, Shimla, Dalhousie, Bir, Amritsar",
                    "Airport pickup & drop (Kangra Airport – DHM)",
                    "Full-day sightseeing packages",
                    "Corporate & group travel",
                    "24/7 availability on request",
                  ].map((f, i) => (
                    <AnimatedCard key={f} delay={i * 0.05} className="flex items-start gap-3 text-gray-700 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />{f}
                    </AnimatedCard>
                  ))}
                </ul>
              </AnimatedItem>
              <AnimatedItem>
                <div className="mt-8 flex gap-4">
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                    <MessageCircle className="h-4 w-4" /> Book on WhatsApp
                  </a>
                  <a href={CALL_URL} className="btn-primary">
                    <Phone className="h-4 w-4" /> Call Now
                  </a>
                </div>
              </AnimatedItem>
            </AnimatedContainer>

            {/* 3D Taxi Animation with Pricing */}
            <div className="space-y-6">
              <Taxi3D />
              <AnimatedCard className="bg-gray-50 rounded-2xl p-7 border border-gray-100">
                <h3 className="font-display text-xl font-bold text-gray-900 mb-5">Sample Pricing</h3>
                <div className="space-y-3">
                  {[
                    { route: "Dharamshala → McLeod Ganj", price: "₹300–500" },
                    { route: "McLeod Ganj → Bhagsu", price: "₹200–300" },
                    { route: "Dharamshala → Kangra Airport", price: "₹600–900" },
                    { route: "Full-day local sightseeing", price: "₹1500–2000" },
                    { route: "Dharamshala → Bir Billing", price: "₹2000–2500" },
                    { route: "Dharamshala → Dalhousie", price: "₹3500–4500" },
                    { route: "Dharamshala → Manali", price: "₹5000–7000" },
                  ].map((r, i) => (
                    <AnimatedCard key={r.route} delay={i * 0.06} className="flex items-center justify-between py-2.5 border-b border-gray-200 last:border-0 hover:pl-2 transition-all">
                      <span className="text-sm text-gray-600 flex items-center gap-2">
                        <MapPin className="h-3.5 w-3.5 text-brand-400 flex-shrink-0" />{r.route}
                      </span>
                      <span className="font-bold text-brand-700 text-sm flex items-center gap-1">
                        <Zap className="h-3 w-3 text-amber-500" />{r.price}
                      </span>
                    </AnimatedCard>
                  ))}
                </div>
                <p className="text-xs text-gray-400 mt-4">
                  * Prices are approximate. Contact us for exact quote based on vehicle type and travel date.
                </p>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-whatsapp w-full justify-center mt-5">
                  <MessageCircle className="h-4 w-4" /> Get Exact Price
                </a>
              </AnimatedCard>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Routes */}
      <section id="outstation" className="section-pad bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <AnimatedContainer>
            <AnimatedItem>
              <SectionHeading
                label="Popular Taxi Routes"
                title="Top Destinations from Dharamshala"
              />
            </AnimatedItem>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
              {DESTINATIONS.map((d, i) => (
                <AnimatedCard key={d.name} delay={i * 0.08} className="group">
                  <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-lg hover:border-brand-300 transition-all duration-500">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-bold text-gray-900 group-hover:text-brand-600 transition-colors">{d.name}</h3>
                      <MapPin className="h-4 w-4 text-brand-400 mt-0.5" />
                    </div>
                    <p className="text-xs text-gray-400 mb-3">from {d.from}</p>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">{d.distance} · {d.time}</span>
                      <span className="font-bold text-brand-700">{d.price}</span>
                    </div>
                  </div>
                </AnimatedCard>
              ))}
            </div>
          </AnimatedContainer>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad bg-white">
        <div className="container-custom max-w-3xl">
          <AnimatedItem>
            <SectionHeading label="FAQ" title="Taxi Service FAQs" />
          </AnimatedItem>
          <AnimatedContainer>
            <FAQSection faqs={taxiFaqs} withSchema />
          </AnimatedContainer>
        </div>
      </section>

      <CTASection />
    </>
  );
}
