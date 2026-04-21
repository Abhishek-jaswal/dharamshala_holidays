'use client'

import type { Metadata } from 'next'
import { useState } from 'react'
import { Phone, MessageCircle, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react'
import { BUSINESS, PHONE_HREF, WHATSAPP_HREF } from '@/lib/constants'

// Note: metadata export doesn't work in 'use client' components.
// Create a separate layout or use generateMetadata in a server wrapper.
// For simplicity the metadata is applied via the layout SEO defaults.

const CONTACT_METHODS = [
  {
    icon:  Phone,
    title: 'Phone / Call',
    value: BUSINESS.phone,
    sub:   'Mon–Sun, 5:00 AM – 11:00 PM',
    href:  PHONE_HREF,
    color: 'bg-primary-100 text-primary-700',
    cta:   'Call Now',
  },
  {
    icon:  MessageCircle,
    title: 'WhatsApp',
    value: BUSINESS.phone,
    sub:   'Usually replies within 5 minutes',
    href:  WHATSAPP_HREF,
    color: 'bg-green-100 text-green-700',
    cta:   'Message Us',
  },
  {
    icon:  Mail,
    title: 'Email',
    value: BUSINESS.email,
    sub:   'We reply within 24 hours',
    href:  `mailto:${BUSINESS.email}`,
    color: 'bg-teal-100 text-teal-700',
    cta:   'Send Email',
  },
  {
    icon:  MapPin,
    title: 'Office Address',
    value: 'Main Market, Dharamshala',
    sub:   'Himachal Pradesh – 176215',
    href:  BUSINESS.mapUrl,
    color: 'bg-lime-100 text-lime-700',
    cta:   'Get Directions',
  },
]

export default function ContactPage() {
  const [form, setForm]       = useState({ name: '', phone: '', email: '', service: '', message: '' })
  const [sent, setSent]       = useState(false)
  const [sending, setSending] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    const msg = `Hi SKD Holidays! New enquiry:\n\nName: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nService: ${form.service}\nMessage: ${form.message}`
    const url  = `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(msg)}`
    window.open(url, '_blank')
    setSending(false)
    setSent(true)
    setTimeout(() => setSent(false), 5000)
    setForm({ name: '', phone: '', email: '', service: '', message: '' })
  }

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-950 via-primary-800 to-primary-600 py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-white blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-green-300 blur-3xl" />
        </div>
        <div className="relative max-w-3xl mx-auto px-4">
          <span className="inline-block bg-white/15 text-green-200 text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest mb-6">📞 Contact Us</span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Get in Touch with<br /><span className="text-primary-300">SKD Holidays</span>
          </h1>
          <p className="text-green-100 text-lg mb-8">
            Ready to plan your Dharamshala adventure? We respond instantly on WhatsApp or phone.
          </p>
          {/* Instant CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={PHONE_HREF} className="flex items-center justify-center gap-2 bg-white text-primary-700 font-bold px-8 py-4 rounded-2xl shadow-xl hover:bg-green-50 transition-all active:scale-95">
              <Phone className="w-5 h-5" /> {BUSINESS.phone}
            </a>
            <a href={WHATSAPP_HREF} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold px-8 py-4 rounded-2xl shadow-xl hover:bg-[#20bd59] transition-all active:scale-95">
              <MessageCircle className="w-5 h-5" /> WhatsApp Now
            </a>
          </div>
        </div>
      </section>

      {/* Contact methods */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {CONTACT_METHODS.map(({ icon: Icon, title, value, sub, href, color, cta }) => (
              <a
                key={title}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="bg-white rounded-2xl border border-primary-100 p-6 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 group block"
              >
                <div className={`w-12 h-12 ${color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6" strokeWidth={1.8} />
                </div>
                <h3 className="font-semibold text-gray-800 mb-1">{title}</h3>
                <p className="font-bold text-primary-700 text-sm mb-1 break-all">{value}</p>
                <p className="text-gray-400 text-xs mb-4">{sub}</p>
                <span className="inline-flex items-center gap-1 text-primary-600 text-xs font-semibold group-hover:gap-2 transition-all">
                  {cta} →
                </span>
              </a>
            ))}
          </div>

          {/* Hours */}
          <div className="mt-8 bg-primary-50 border border-primary-100 rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-4">
            <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center flex-shrink-0">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-primary-900">Business Hours</h3>
              <p className="text-primary-700 text-sm">Mon–Sun: <strong>5:00 AM – 11:00 PM IST</strong> &nbsp;|&nbsp; For early morning airport pickups — 24/7 on call!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Form + Map */}
      <section className="py-16 bg-mountain-mist leaf-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10">

            {/* Contact Form */}
            <div className="bg-white rounded-3xl shadow-lg p-8 border border-primary-100">
              <div className="mb-7">
                <span className="inline-block bg-primary-100 text-primary-700 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider mb-3">📋 Enquiry Form</span>
                <h2 className="font-display text-2xl font-bold text-primary-900">Send Us a Message</h2>
                <p className="text-gray-500 text-sm mt-1">We&apos;ll reply via WhatsApp instantly.</p>
              </div>

              {sent && (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-4 mb-6 flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-green-800 text-sm">Message sent! ✅</div>
                    <div className="text-green-600 text-xs">WhatsApp will open. We&apos;ll confirm your booking shortly.</div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Full Name *</label>
                    <input type="text" required placeholder="Your name" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                      className="w-full border-2 border-gray-200 focus:border-primary-500 rounded-xl px-4 py-3 text-sm outline-none transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Phone Number *</label>
                    <input type="tel" required placeholder="+91 XXXXX XXXXX" value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                      className="w-full border-2 border-gray-200 focus:border-primary-500 rounded-xl px-4 py-3 text-sm outline-none transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email (optional)</label>
                  <input type="email" placeholder="your@email.com" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    className="w-full border-2 border-gray-200 focus:border-primary-500 rounded-xl px-4 py-3 text-sm outline-none transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Service Interested In *</label>
                  <select required value={form.service} onChange={e => setForm(f => ({ ...f, service: e.target.value }))}
                    className="w-full border-2 border-gray-200 focus:border-primary-500 rounded-xl px-4 py-3 text-sm outline-none transition-colors bg-white">
                    <option value="">-- Select service --</option>
                    <option>🚕 Taxi / Cab Booking</option>
                    <option>✈️ Airport Pickup / Drop</option>
                    <option>🛣️ Outstation Trip</option>
                    <option>🏍️ Bike Rental</option>
                    <option>🛵 Scooty Rental</option>
                    <option>🚗 Car Rental</option>
                    <option>🏔️ Triund Trek Package</option>
                    <option>🌄 Manali Tour</option>
                    <option>🌿 Dalhousie Tour</option>
                    <option>📦 Custom Package</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Your Message</label>
                  <textarea rows={4} placeholder="Tell us your travel dates, group size, and any special requirements..." value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    className="w-full border-2 border-gray-200 focus:border-primary-500 rounded-xl px-4 py-3 text-sm outline-none transition-colors resize-none" />
                </div>
                <button type="submit" disabled={sending}
                  className="w-full bg-[#25D366] hover:bg-[#20bd59] text-white font-bold py-4 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 active:scale-95">
                  <Send className="w-5 h-5" />
                  {sending ? 'Opening WhatsApp…' : 'Send via WhatsApp'}
                </button>
                <a href={PHONE_HREF}
                  className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 active:scale-95">
                  <Phone className="w-5 h-5" /> Or Call Directly
                </a>
              </form>
            </div>

            {/* Map + info */}
            <div className="space-y-6">
              <div className="bg-white rounded-3xl shadow-lg overflow-hidden border border-primary-100">
                <iframe
                  src={BUSINESS.mapEmbed}
                  width="100%"
                  height="350"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="SKD Holidays location - Dharamshala"
                  className="block"
                />
                <div className="p-5">
                  <h3 className="font-display font-bold text-primary-900 mb-1">SKD Holidays Office</h3>
                  <p className="text-gray-600 text-sm">{BUSINESS.address}</p>
                  <a href={BUSINESS.mapUrl} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-primary-600 text-sm font-semibold mt-3 hover:text-primary-800 transition-colors">
                    <MapPin className="w-4 h-4" /> Open in Google Maps →
                  </a>
                </div>
              </div>

              {/* FAQ */}
              <div className="bg-white rounded-3xl shadow-sm border border-primary-100 p-6">
                <h3 className="font-display font-bold text-primary-900 text-lg mb-4">Quick FAQs</h3>
                <div className="space-y-4">
                  {[
                    { q: 'Do you operate 24/7?', a: 'Yes! We are available round the clock, 365 days a year. Early-morning airport pickups are our specialty.' },
                    { q: 'Is advance booking required?', a: 'Walk-ins are welcome, but we recommend booking at least a day in advance, especially during peak season (Mar–Jun, Sep–Nov).' },
                    { q: 'What payment methods are accepted?', a: 'We accept cash, UPI (GPay, PhonePe, Paytm), and debit/credit cards.' },
                    { q: 'Can I customize a tour package?', a: 'Absolutely! All our packages are fully customizable. Just tell us your preferences and we\'ll design the perfect trip.' },
                  ].map(({ q, a }) => (
                    <div key={q} className="border-b border-primary-50 pb-4 last:border-0 last:pb-0">
                      <div className="font-semibold text-gray-800 text-sm mb-1.5">❓ {q}</div>
                      <div className="text-gray-500 text-xs leading-relaxed">{a}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
