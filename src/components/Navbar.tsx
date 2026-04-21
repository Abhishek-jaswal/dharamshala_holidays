'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone, Leaf } from 'lucide-react'
import { PHONE_HREF, BUSINESS } from '@/lib/constants'

const NAV_LINKS = [
  { href: '/',          label: 'Home'         },
  { href: '/taxi',      label: 'Taxi Service' },
  { href: '/rentals',   label: 'Rentals'      },
  { href: '/packages',  label: 'Tour Packages'},
  { href: '/contact',   label: 'Contact'      },
]

export default function Navbar() {
  const [open, setOpen]       = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname               = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const isHome = pathname === '/'

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || !isHome
          ? 'bg-white/95 backdrop-blur-md shadow-md shadow-primary-100'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group" aria-label="SKD Holidays Home">
            <div className="w-9 h-9 bg-primary-600 rounded-xl flex items-center justify-center group-hover:bg-primary-700 transition-colors shadow-md">
              <Leaf className="w-5 h-5 text-white" strokeWidth={2.5} />
            </div>
            <div className="leading-tight">
              <span className={`font-display font-bold text-lg transition-colors ${
                scrolled || !isHome ? 'text-primary-800' : 'text-white'
              }`}>
                SKD <span className="text-primary-400">Holidays</span>
              </span>
              <p className={`text-[10px] tracking-widest uppercase transition-colors hidden sm:block ${
                scrolled || !isHome ? 'text-primary-600' : 'text-green-200'
              }`}>Dharamshala</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    pathname === href
                      ? 'bg-primary-600 text-white'
                      : scrolled || !isHome
                        ? 'text-gray-700 hover:text-primary-700 hover:bg-primary-50'
                        : 'text-white/90 hover:text-white hover:bg-white/15'
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <a
              href={PHONE_HREF}
              className="hidden sm:flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white text-sm font-semibold px-4 py-2 rounded-xl transition-all shadow-md hover:shadow-green-glow active:scale-95"
            >
              <Phone className="w-4 h-4" />
              {BUSINESS.phone}
            </a>
            <button
              onClick={() => setOpen(!open)}
              className={`md:hidden p-2 rounded-lg transition-colors ${
                scrolled || !isHome ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/20'
              }`}
              aria-label="Toggle menu"
            >
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden bg-white rounded-2xl shadow-2xl border border-primary-100 mb-4 overflow-hidden">
            <ul className="p-3 space-y-1">
              {NAV_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={() => setOpen(false)}
                    className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                      pathname === href
                        ? 'bg-primary-600 text-white'
                        : 'text-gray-700 hover:bg-primary-50 hover:text-primary-700'
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="p-3 border-t border-primary-50">
              <a
                href={PHONE_HREF}
                className="flex items-center justify-center gap-2 bg-primary-600 text-white px-4 py-3 rounded-xl font-semibold text-sm"
              >
                <Phone className="w-4 h-4" />
                Call Now: {BUSINESS.phone}
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
