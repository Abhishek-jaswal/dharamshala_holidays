import type { Metadata } from "next";
import { CTASection } from "@/components/sections/CTASection";
import { FAQSection } from "@/components/sections/FAQSection";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { buildMetadata } from "@/lib/metadata";
import { FAQS } from "@/constants/business";

export const metadata: Metadata = buildMetadata({
  title: "FAQ – Taxi & Scooty Rental Questions Answered",
  description:
    "Answers to common questions about taxi booking, scooty rental, bike rental, and airport pickup in Dharamshala. Documents needed, pricing, availability & more.",
  path: "/faq",
});

const extraFaqs = [
  { question: "Do you accept UPI or card payments?", answer: "Yes! We accept cash, UPI (GPay, PhonePe, Paytm), and bank transfers. Payment is typically made at the end of the trip or before for rentals." },
  { question: "Is there a cancellation policy?", answer: "For taxi bookings cancelled more than 2 hours before the trip, there is no charge. For last-minute cancellations, a small fee may apply. Rental cancellations are fully refunded if cancelled 24 hours in advance." },
  { question: "Can you arrange for child seats in the taxi?", answer: "Yes, child seats can be arranged on request with advance notice. Please mention this when booking." },
  { question: "Do you provide porter or luggage assistance at the airport?", answer: "Our driver will assist you with luggage at the arrival hall. For heavy baggage, please inform us in advance so we can arrange the right vehicle." },
];

export default function FAQPage() {
  return (
    <>
      <div className="bg-gradient-to-br from-slate-900 to-brand-900 pt-28 pb-16">
        <div className="container-custom">
          <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "FAQ", href: "/faq" }]} />
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mt-6">
            Frequently Asked Questions
          </h1>
          <p className="text-brand-200 mt-3 text-lg max-w-xl">
            Everything you need to know about our taxi, scooty, and bike rental service in Dharamshala.
          </p>
        </div>
      </div>

      <section className="section-pad bg-gray-50">
        <div className="container-custom max-w-3xl">
          <SectionHeading label="General FAQs" title="Common Questions" />
          <FAQSection faqs={[...FAQS, ...extraFaqs]} withSchema />
        </div>
      </section>

      <CTASection
        title="Still Have Questions?"
        subtitle="Send us a WhatsApp message or call — we'll answer any question about booking, pricing, or availability."
        dark={false}
      />
    </>
  );
}
