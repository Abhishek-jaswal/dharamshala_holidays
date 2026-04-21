'use client'

import { MessageCircle, X } from 'lucide-react'
import { useState } from 'react'
import { WHATSAPP_HREF } from '@/lib/constants'

export default function FloatingWhatsApp() {
  const [hint, setHint] = useState(true)

  return (
    <div className="wa-float">
      {/* Tooltip hint */}
      {hint && (
        <div className="absolute bottom-16 right-0 bg-white text-gray-700 text-sm rounded-2xl px-4 py-3 shadow-xl border border-green-100 whitespace-nowrap mb-2">
          <button onClick={() => setHint(false)} className="absolute -top-2 -right-2 w-5 h-5 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300">
            <X className="w-3 h-3 text-gray-600" />
          </button>
          💬 Chat with us on WhatsApp!
        </div>
      )}

      <a
        href={WHATSAPP_HREF}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="w-14 h-14 bg-[#25D366] hover:bg-[#20bd59] rounded-full flex items-center justify-center shadow-2xl transition-all hover:scale-110 active:scale-95 relative"
      >
        <MessageCircle className="w-7 h-7 text-white" strokeWidth={2} />
        {/* Online indicator */}
        <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-green-400 border-2 border-white rounded-full animate-pulse" />
      </a>
    </div>
  )
}
