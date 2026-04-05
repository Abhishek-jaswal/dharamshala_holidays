import type { Metadata } from "next";
import { Plane, CheckCircle, Clock, MessageCircle, Phone, MapPin } from "lucide-react";
import { CTASection } from "@/components/sections/CTASection";
import { FAQSection } from "@/components/sections/FAQSection";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { buildMetadata } from "@/lib/metadata";
import { WHATSAPP_URL, CALL_URL } from "@/constants/business";

export const metadata: Metadata = buildMetadata({
  title: "Airport Pickup & Drop in Dharamshala – Kangra Airport",
  description:
    "24/7 airport taxi service from Kangra-Gaggal Airport (DHM) to Dharamshala, McLeod Ganj & beyond. On-time, comfortable, affordable airport transfers. Book now.",
  keywords: ["airport pickup Dharamshala", "Kangra airport taxi", "DHM airport transfer", "airport drop McLeod Ganj"],
  path: "/services/airport-pickup",
});

const airportFaqs = [
  { question: "Which airport do you cover?", answer: "We provide pickup and drop service from Kangra-Gaggal Airport (airport code: DHM), located approximately 12-15 km from Dharamshala." },
  { question: "Do you provide 24/7 airport pickup?", answer: "Yes! We are available 24 hours a day, 7 days a week for airport pickups, including early morning and late-night flights. No extra night surcharge." },
  { question: "Do you track my flight?", answer: "Yes. Share your flight details and we'll track the real-time arrival and adjust the pickup time accordingly. No waiting charges for flight delays." },
  { question: "How much does airport pickup from Kangra Airport cost?", answer: "Airport pickup/drop from Kangra Airport to Dharamshala or McLeod Ganj starts at ₹600–900 depending on your destination. Contact us for a fixed quote." },
  { question: "Can you pick up groups from the airport?", answer: "Yes! We have sedans (up to 4 passengers), MPVs (up to 6), and SUVs (up to 7) available for group airport pickups." },
];

const steps = [
  { step: "01", title: "Share Flight Details", desc: "Send us your flight number, date, and arrival time via WhatsApp or call." },
  { step: "02", title: "We Track Your Flight", desc: "We monitor your flight in real time. No need to update us on delays." },
  { step: "03", title: "Driver Meets You", desc: "Your driver will be waiting outside the arrival gate with a name board." },
  { step: "04", title: "Comfortable Journey", desc: "Sit back and enjoy a smooth, comfortable ride to your destination." },
];

export default function AirportPickupPage() {
  return (
    <>
      <div className="bg-gradient-to-br from-slate-900 to-brand-900 pt-28 pb-16">
        <div className="container-custom">
          <Breadcrumbs items={[
            { name: "Home", href: "/" },
            { name: "Services", href: "/services" },
            { name: "Airport Pickup", href: "/services/airport-pickup" },
          ]} />
          <div className="flex items-center gap-4 mt-6">
            <div className="w-16 h-16 bg-brand-600 rounded-2xl flex items-center justify-center">
              <Plane className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-white">
                Airport Pickup & Drop – Dharamshala
              </h1>
              <p className="text-brand-200 mt-1">Kangra Airport (DHM) · 24/7 · Flight tracking · No surcharge</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <section className="section-pad bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <div>
              <h2 className="font-display text-3xl font-bold text-gray-900 mb-5">
                Stress-Free Airport Transfers to Dharamshala
              </h2>
              <div className="space-y-4 text-gray-500 leading-relaxed">
                <p>
                  Arriving at Kangra-Gaggal Airport (DHM) for a Dharamshala or McLeod Ganj
                  trip? Don't worry about finding a cab after landing. Our 24/7 airport
                  pickup service ensures your driver is ready and waiting when you land.
                </p>
                <p>
                  We track your flight in real time — so even if your flight is delayed,
                  your driver will be there exactly when you need them. No waiting charges
                  for delays, no night surcharges, just honest service.
                </p>
              </div>
              <ul className="mt-6 space-y-3">
                {[
                  "Covers Kangra-Gaggal Airport (DHM)",
                  "Available 24/7 — all flight schedules covered",
                  "Real-time flight tracking",
                  "Meet & greet with name board at arrival",
                  "No extra charges for delays or late-night flights",
                  "AC sedans, MPVs & SUVs available",
                  "Covers Dharamshala, McLeod Ganj, Palampur & more",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-3 text-gray-700 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />{f}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex gap-4">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                  <MessageCircle className="h-4 w-4" /> Book Airport Pickup
                </a>
                <a href={CALL_URL} className="btn-primary">
                  <Phone className="h-4 w-4" /> Call Now
                </a>
              </div>
            </div>

            {/* Pricing and availability */}
            <div className="space-y-5">
              <div className="bg-gray-50 rounded-2xl p-7 border border-gray-100">
                <h3 className="font-display text-xl font-bold text-gray-900 mb-4">Airport Transfer Rates</h3>
                <div className="space-y-3">
                  {[
                    { route: "Kangra Airport → Dharamshala", price: "₹600–800" },
                    { route: "Kangra Airport → McLeod Ganj", price: "₹700–900" },
                    { route: "Kangra Airport → Palampur", price: "₹1200–1500" },
                    { route: "Kangra Airport → Dharamkot", price: "₹800–1000" },
                    { route: "Dharamshala → Kangra Airport (drop)", price: "₹600–800" },
                  ].map((r) => (
                    <div key={r.route} className="flex items-center justify-between py-2.5 border-b border-gray-200 last:border-0">
                      <span className="text-sm text-gray-600 flex items-center gap-2">
                        <MapPin className="h-3.5 w-3.5 text-brand-400 flex-shrink-0" />{r.route}
                      </span>
                      <span className="font-bold text-brand-700 text-sm">{r.price}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-gray-400 mt-4">* Prices vary by vehicle type. Contact for exact quote.</p>
              </div>

              <div className="bg-brand-50 rounded-2xl p-5 border border-brand-100 flex items-start gap-4">
                <div className="w-10 h-10 bg-brand-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="h-5 w-5 text-brand-600" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-900">Available 24/7</h4>
                  <p className="text-sm text-brand-700 mt-1">
                    Our airport pickup service is available around the clock. Early morning 4 AM flights or midnight arrivals — we'll be there.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section-pad bg-gray-50">
        <div className="container-custom">
          <SectionHeading label="How It Works" title="Simple 4-Step Booking Process" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s) => (
              <div key={s.step} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm text-center">
                <div className="w-14 h-14 bg-brand-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-display font-bold text-xl">{s.step}</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-sm text-gray-500">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-custom max-w-3xl">
          <SectionHeading label="FAQ" title="Airport Pickup FAQs" />
          <FAQSection faqs={airportFaqs} withSchema />
        </div>
      </section>

      <CTASection
        title="Book Your Airport Pickup Now"
        subtitle="Share your flight details on WhatsApp and we'll confirm your booking immediately."
      />
    </>
  );
}
