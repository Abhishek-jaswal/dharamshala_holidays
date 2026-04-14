import Link from "next/link";
import { Mountain, Phone, Mail, MapPin, MessageCircle, Globe, Rss, PlayCircle } from "lucide-react";

const destinations = [
  { href: "/destinations/chamba", label: "Chamba" },
  { href: "/destinations/dharamshala", label: "Dharamshala" },
  { href: "/destinations/dalhousie", label: "Dalhousie" },
  { href: "/destinations/khajjiar", label: "Khajjiar" },
  { href: "/destinations/bir-billing", label: "Bir Billing" },
  { href: "/destinations/mcleodganj", label: "McLeodganj" },
];

const services = [
  { href: "/rentals", label: "Taxi Booking" },
  { href: "/rentals", label: "Scooty Rental" },
  { href: "/rentals", label: "Bike Rental" },
  { href: "/destinations", label: "Tour Packages" },
  { href: "/destinations", label: "Sightseeing" },
  { href: "/contact", label: "Custom Itinerary" },
];

export default function Footer() {
  return (
    <footer className="bg-[#060b14] border-t border-white/6">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center">
                <Mountain className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="block font-display font-bold text-white text-xl leading-none">SKD</span>
                <span className="block text-[10px] font-mono text-sky-400 uppercase tracking-widest">Holidays</span>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Your trusted travel partner for exploring the beauty of Himachal Pradesh. Premium taxi, rental, and tour package services since 2015.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="w-9 h-9 rounded-xl glass flex items-center justify-center text-slate-400 hover:text-sky-400 hover:border-sky-500/30 transition-colors">
                <Globe className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-xl glass flex items-center justify-center text-slate-400 hover:text-blue-400 transition-colors">
                <Rss className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-xl glass flex items-center justify-center text-slate-400 hover:text-red-400 transition-colors">
                <PlayCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="font-display text-white font-semibold mb-5 text-base">Destinations</h4>
            <ul className="space-y-2.5">
              {destinations.map((d) => (
                <li key={d.href}>
                  <Link href={d.href} className="text-slate-400 hover:text-sky-400 text-sm transition-colors">
                    {d.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-white font-semibold mb-5 text-base">Our Services</h4>
            <ul className="space-y-2.5">
              {services.map((s, i) => (
                <li key={i}>
                  <Link href={s.href} className="text-slate-400 hover:text-sky-400 text-sm transition-colors">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-white font-semibold mb-5 text-base">Get in Touch</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:+919999999999" className="flex items-start gap-3 text-slate-400 hover:text-white text-sm transition-colors group">
                  <Phone className="w-4 h-4 text-sky-400 mt-0.5 flex-shrink-0" />
                  <span>+91 99999 99999</span>
                </a>
              </li>
              <li>
                <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-slate-400 hover:text-emerald-400 text-sm transition-colors">
                  <MessageCircle className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <span>WhatsApp Us</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@skdholidays.com" className="flex items-start gap-3 text-slate-400 hover:text-white text-sm transition-colors">
                  <Mail className="w-4 h-4 text-sky-400 mt-0.5 flex-shrink-0" />
                  <span>info@skdholidays.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-slate-400 text-sm">
                  <MapPin className="w-4 h-4 text-sky-400 mt-0.5 flex-shrink-0" />
                  <span>Chamba, Himachal Pradesh, India – 176310</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/6 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-500 text-xs">
            © 2024 SKD Holidays. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-slate-500">
            <Link href="/about" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <Link href="/about" className="hover:text-slate-300 transition-colors">Terms of Service</Link>
            <Link href="/contact" className="hover:text-slate-300 transition-colors">Support</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
