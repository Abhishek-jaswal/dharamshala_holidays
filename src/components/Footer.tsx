import Link from 'next/link'
import { Phone, Mail, MapPin, Instagram, Facebook, Leaf, MessageCircle } from 'lucide-react'
import { BUSINESS, PHONE_HREF, WHATSAPP_HREF } from '@/lib/constants'

const QUICK_LINKS = [
  { href: '/',         label: 'Home'          },
  { href: '/taxi',     label: 'Taxi Service'  },
  { href: '/rentals',  label: 'Bike & Rental' },
  { href: '/packages', label: 'Tour Packages' },
  { href: '/contact',  label: 'Contact Us'    },
]

const SERVICES_LINKS = [
  'Local Taxi Dharamshala',
  'Airport Pickup (Gaggal)',
  'Outstation Taxi',
  'Royal Enfield Rental',
  'Scooty Rental',
  'Triund Trek Package',
  'Manali Tour Package',
  'Dalhousie Tour',
]

export default function Footer() {
  return (
    <footer className="bg-primary-950 text-white" id="contact">
      {/* CTA strip */}
      <div className="bg-primary-600 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <p className="font-display text-xl font-bold">Ready to Explore Dharamshala?</p>
              <p className="text-green-100 text-sm">Call or WhatsApp us for instant booking confirmation.</p>
            </div>
            <div className="flex gap-3">
              <a href={PHONE_HREF} className="flex items-center gap-2 bg-white text-primary-700 font-bold px-5 py-3 rounded-xl hover:bg-green-50 transition-all shadow-md text-sm">
                <Phone className="w-4 h-4" /> Call Now
              </a>
              <a href={WHATSAPP_HREF} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-[#25D366] text-white font-bold px-5 py-3 rounded-xl hover:bg-[#20bd59] transition-all shadow-md text-sm">
                <MessageCircle className="w-4 h-4" /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-primary-600 rounded-xl flex items-center justify-center">
                <Leaf className="w-5 h-5 text-white" strokeWidth={2.5} />
              </div>
              <span className="font-display font-bold text-xl">SKD <span className="text-primary-400">Holidays</span></span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Your trusted travel partner in Dharamshala for taxi, bike rentals, and curated tour packages across Himachal Pradesh.
            </p>
            <div className="flex gap-3">
              <a href={BUSINESS.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-9 h-9 bg-primary-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href={BUSINESS.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-9 h-9 bg-primary-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-base mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              {QUICK_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-gray-400 hover:text-primary-400 text-sm transition-colors flex items-center gap-1.5 group">
                    <span className="w-1 h-1 rounded-full bg-primary-600 group-hover:bg-primary-400 transition-colors flex-shrink-0" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-base mb-4 text-white">Our Services</h4>
            <ul className="space-y-2">
              {SERVICES_LINKS.map(s => (
                <li key={s} className="text-gray-400 text-sm flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-primary-600 flex-shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-base mb-4 text-white">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a href={PHONE_HREF} className="flex items-start gap-3 group">
                  <Phone className="w-4 h-4 mt-0.5 text-primary-400 flex-shrink-0" />
                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-wide mb-0.5">Phone / WhatsApp</div>
                    <div className="text-white text-sm group-hover:text-primary-400 transition-colors font-medium">{BUSINESS.phone}</div>
                  </div>
                </a>
              </li>
              <li>
                <a href={`mailto:${BUSINESS.email}`} className="flex items-start gap-3 group">
                  <Mail className="w-4 h-4 mt-0.5 text-primary-400 flex-shrink-0" />
                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-wide mb-0.5">Email</div>
                    <div className="text-white text-sm group-hover:text-primary-400 transition-colors">{BUSINESS.email}</div>
                  </div>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 mt-0.5 text-primary-400 flex-shrink-0" />
                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-wide mb-0.5">Address</div>
                    <div className="text-gray-300 text-sm leading-relaxed">{BUSINESS.address}</div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} SKD Holidays, Dharamshala. All rights reserved.</p>
          <p>Made with 💚 for Himachal travelers</p>
        </div>
      </div>
    </footer>
  )
}
