import { Phone, MessageCircle } from 'lucide-react'
import { PHONE_HREF, WHATSAPP_HREF } from '@/lib/constants'

export default function StickyBottomBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white border-t-2 border-primary-100 shadow-[0_-4px_20px_rgba(22,163,74,0.15)] safe-area-pb">
      <div className="flex">
        <a
          href={PHONE_HREF}
          className="flex-1 flex items-center justify-center gap-2 bg-primary-600 text-white font-bold py-4 text-sm active:bg-primary-700 transition-colors"
        >
          <Phone className="w-5 h-5" />
          Call Now
        </a>
        <div className="w-px bg-white/30" />
        <a
          href={WHATSAPP_HREF}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold py-4 text-sm active:bg-[#20bd59] transition-colors"
        >
          <MessageCircle className="w-5 h-5" />
          WhatsApp
        </a>
      </div>
    </div>
  )
}
