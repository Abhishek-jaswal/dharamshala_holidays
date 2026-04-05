import { Phone, MessageCircle } from "lucide-react";
import { BUSINESS, WHATSAPP_URL, CALL_URL } from "@/constants/business";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  dark?: boolean;
}

export function CTASection({
  title = "Ready to Book Your Ride?",
  subtitle = "Call us or send a WhatsApp message for instant confirmation. We're available 24/7 for airport pickups.",
  dark = true,
}: CTASectionProps) {
  return (
    <section className={dark ? "bg-brand-700" : "bg-brand-50"}>
      <div className="container-custom section-pad text-center">
        <h2
          className={`font-display text-3xl md:text-4xl font-bold mb-4 ${
            dark ? "text-white" : "text-gray-900"
          }`}
        >
          {title}
        </h2>
        <p
          className={`text-lg mb-10 max-w-xl mx-auto ${
            dark ? "text-brand-100" : "text-gray-500"
          }`}
        >
          {subtitle}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp text-base px-8 py-4"
          >
            <MessageCircle className="h-5 w-5" />
            Chat on WhatsApp
          </a>
          <a
            href={CALL_URL}
            className={`inline-flex items-center gap-2 font-semibold py-4 px-8 rounded-xl border-2 transition-all duration-200 active:scale-95 ${
              dark
                ? "border-white text-white hover:bg-white hover:text-brand-700"
                : "border-brand-600 text-brand-600 hover:bg-brand-600 hover:text-white"
            }`}
          >
            <Phone className="h-5 w-5" />
            Call {BUSINESS.phone}
          </a>
        </div>

        <p className={`mt-8 text-sm ${dark ? "text-brand-200" : "text-gray-400"}`}>
          ✓ Instant confirmation &nbsp;·&nbsp; ✓ No hidden charges &nbsp;·&nbsp; ✓ Experienced local drivers
        </p>
      </div>
    </section>
  );
}
