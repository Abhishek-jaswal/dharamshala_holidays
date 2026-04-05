"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { getFaqSchema } from "@/lib/schema";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQ[];
  withSchema?: boolean;
}

export function FAQSection({ faqs, withSchema = false }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <>
      {withSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(getFaqSchema(faqs)) }}
        />
      )}
      <div className="space-y-3">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="border border-gray-200 rounded-xl overflow-hidden hover:border-brand-300 transition-colors"
          >
            <button
              onClick={() => toggle(i)}
              className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-brand-50 transition-colors"
              aria-expanded={openIndex === i}
            >
              <span className="font-semibold text-gray-900 pr-4 text-sm md:text-base">
                {faq.question}
              </span>
              <ChevronDown
                className={cn(
                  "h-5 w-5 text-brand-600 flex-shrink-0 transition-transform duration-200",
                  openIndex === i && "rotate-180"
                )}
              />
            </button>
            {openIndex === i && (
              <div className="px-5 pb-5 bg-white">
                <p className="text-gray-500 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
