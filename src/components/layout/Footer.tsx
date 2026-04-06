import Link from "next/link";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { BUSINESS, WHATSAPP_URL, CALL_URL, EMAIL_URL } from "@/constants/business";

const footerLinks = {
  Services: [
    { label: "Taxi Service", href: "/services/taxi" },
    { label: "Scooty on Rent", href: "/services/scooty-on-rent" },
    { label: "Bike on Rent", href: "/services/bike-on-rent" },
    { label: "Airport Pickup", href: "/services/airport-pickup" },
    { label: "Local Sightseeing", href: "/destinations" },
    { label: "Outstation Taxi", href: "/services/taxi#outstation" },
  ],
  "Quick Links": [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Pricing", href: "/pricing" },
    { label: "Top Destinations", href: "/destinations" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ],
  "Areas We Serve": [
    { label: "Dharamshala", href: "/destinations" },
    { label: "McLeod Ganj", href: "/destinations" },
    { label: "Bhagsu", href: "/destinations" },
    { label: "Naddi & Dharamkot", href: "/destinations" },
    { label: "Kangra Airport", href: "/services/airport-pickup" },
    { label: "Triund Trek Base", href: "/destinations" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main footer */}
      <div className="container-custom py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <span className="font-display text-xl font-bold text-white block">
                Dharamshala Holidays
              </span>
              <span className="text-sm text-gray-400">
                Taxi · Scooty · Bike · Holidays
              </span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Your trusted local travel partner in Dharamshala. We offer reliable
              taxi service, scooty rentals, bike rentals, and airport transfers
              across Dharamshala, McLeod Ganj, Bhagsu, Naddi, and beyond.
            </p>

            {/* Contact info */}
            <div className="space-y-3">
              <a href={CALL_URL} className="flex items-center gap-3 text-sm hover:text-brand-400 transition-colors group">
                <div className="w-8 h-8 bg-brand-700 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-brand-600 transition-colors">
                  <Phone className="h-4 w-4 text-white" />
                </div>
                <span>{BUSINESS.phone}</span>
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm hover:text-green-400 transition-colors group">
                <div className="w-8 h-8 bg-green-700 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-green-600 transition-colors">
                  <MessageCircle className="h-4 w-4 text-white" />
                </div>
                <span>WhatsApp Us</span>
              </a>
              <a href={EMAIL_URL} className="flex items-center gap-3 text-sm hover:text-brand-400 transition-colors group">
                <div className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="h-4 w-4 text-white" />
                </div>
                <span>{BUSINESS.email}</span>
              </a>
              <div className="flex items-start gap-3 text-sm">
                <div className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="h-4 w-4 text-white" />
                </div>
                <span>{BUSINESS.address}</span>
              </div>
              <div className="flex items-start gap-3 text-sm">
                <div className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Clock className="h-4 w-4 text-white" />
                </div>
                <div>
                  <p>Mon–Fri: {BUSINESS.businessHours.weekdays}</p>
                  <p>Sat–Sun: {BUSINESS.businessHours.weekends}</p>
                  <p className="text-gray-500 text-xs mt-1">{BUSINESS.businessHours.note}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
                {title}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-brand-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Local SEO text strip */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-6">
          <p className="text-xs text-gray-500 text-center leading-relaxed">
            Dharamshala Holidays Taxi · Scooty · Bike · Holidays — Serving tourists and locals
            across Dharamshala, McLeod Ganj, Bhagsu, Naddi, Dharamkot, Triund, Kangra Fort,
            and Kangra Airport. Book a taxi, rent a scooty, or hire a bike in Dharamshala at
            the best rates.
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-4 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.
          </p>
          <p className="text-xs text-gray-600">
            Dharamshala, Himachal Pradesh, India
          </p>
        </div>
      </div>
    </footer>
  );
}
