"use client";

import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/constants/business";

export function WhatsAppFloatingButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-24 right-4 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-xl transition-all duration-200 hover:scale-110 fab-pulse"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}
