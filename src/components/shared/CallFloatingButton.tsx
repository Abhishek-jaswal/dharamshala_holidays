"use client";

import { Phone } from "lucide-react";
import { CALL_URL, BUSINESS } from "@/constants/business";

export function CallFloatingButton() {
  return (
    <a
      href={CALL_URL}
      aria-label={`Call Dharamshala Holidays: ${BUSINESS.phone}`}
      className="fixed bottom-6 right-4 z-50 w-14 h-14 bg-brand-600 hover:bg-brand-700 text-white rounded-full flex items-center justify-center shadow-xl transition-all duration-200 hover:scale-110"
    >
      <Phone className="h-6 w-6" />
    </a>
  );
}
