import type { Metadata } from "next";
import { Phone, MessageCircle, Mail, MapPin, Clock } from "lucide-react";
import { ContactForm } from "@/components/sections/ContactForm";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { buildMetadata } from "@/lib/metadata";
import { BUSINESS, WHATSAPP_URL, CALL_URL, EMAIL_URL } from "@/constants/business";

export const metadata: Metadata = buildMetadata({
  title: "Contact Us – Book Taxi or Scooty in Dharamshala",
  description:
    "Contact Dharamshala Taxi & Scooty on Rent Service for bookings. Call, WhatsApp, or fill the form. Available 24/7 for airport pickups.",
  path: "/contact",
});

const contactMethods = [
  {
    icon: MessageCircle,
    title: "WhatsApp (Fastest)",
    value: "Chat with us on WhatsApp",
    href: WHATSAPP_URL,
    color: "bg-green-50 border-green-200 text-green-700",
    iconBg: "bg-green-500",
    external: true,
  },
  {
    icon: Phone,
    title: "Call Us",
    value: BUSINESS.phone,
    href: CALL_URL,
    color: "bg-brand-50 border-brand-200 text-brand-700",
    iconBg: "bg-brand-600",
    external: false,
  },
  {
    icon: Mail,
    title: "Email",
    value: BUSINESS.email,
    href: EMAIL_URL,
    color: "bg-blue-50 border-blue-200 text-blue-700",
    iconBg: "bg-blue-600",
    external: false,
  },
  {
    icon: MapPin,
    title: "Our Location",
    value: BUSINESS.address,
    href: BUSINESS.googleMapsLink,
    color: "bg-gray-50 border-gray-200 text-gray-700",
    iconBg: "bg-gray-600",
    external: true,
  },
];

export default function ContactPage() {
  return (
    <>
      <div className="bg-gradient-to-br from-slate-900 to-brand-900 pt-28 pb-16">
        <div className="container-custom">
          <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Contact", href: "/contact" }]} />
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mt-6">
            Contact & Book a Ride
          </h1>
          <p className="text-brand-200 mt-3 text-lg max-w-lg">
            We respond to WhatsApp messages within minutes. Call us for urgent bookings.
          </p>
        </div>
      </div>

      <section className="section-pad bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact info */}
            <div>
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">
                Get in Touch
              </h2>
              <div className="space-y-4 mb-8">
                {contactMethods.map(({ icon: Icon, title, value, href, color, iconBg, external }) => (
                  <a
                    key={title}
                    href={href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    className={`flex items-center gap-4 p-4 rounded-2xl border-2 ${color} hover:shadow-md transition-all duration-200`}
                  >
                    <div className={`w-12 h-12 ${iconBg} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide opacity-60 mb-0.5">{title}</p>
                      <p className="font-semibold">{value}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Business hours */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-brand-50 rounded-xl flex items-center justify-center">
                    <Clock className="h-5 w-5 text-brand-600" />
                  </div>
                  <h3 className="font-bold text-gray-900">Business Hours</h3>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Monday – Friday</span>
                    <span className="font-semibold text-gray-900">{BUSINESS.businessHours.weekdays}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Saturday – Sunday</span>
                    <span className="font-semibold text-gray-900">{BUSINESS.businessHours.weekends}</span>
                  </div>
                  <p className="text-brand-600 text-xs pt-2">{BUSINESS.businessHours.note}</p>
                </div>
              </div>
            </div>

            {/* Booking form */}
            <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100">
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-2">
                Send a Booking Inquiry
              </h2>
              <p className="text-gray-500 text-sm mb-6">
                Fill in your details and we'll open WhatsApp with your message pre-filled.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="section-pad bg-white">
        <div className="container-custom">
          <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200 h-80">
            <iframe
              src={BUSINESS.googleMapsEmbed}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Dharamshala Taxi Service Location"
            />
          </div>
          <div className="text-center mt-5">
            <a href={BUSINESS.googleMapsLink} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              <MapPin className="h-4 w-4" /> Open in Google Maps
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
