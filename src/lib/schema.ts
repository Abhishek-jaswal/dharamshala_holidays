import { BUSINESS, SITE } from "@/constants/business";

/** LocalBusiness + TaxiService JSON-LD schema */
export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "TaxiService"],
    name: BUSINESS.name,
    description: SITE.description,
    url: SITE.url,
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Near Bus Stand, McLeod Ganj",
      addressLocality: "Dharamshala",
      addressRegion: "Himachal Pradesh",
      postalCode: "176219",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "32.2396",
      longitude: "76.3234",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "06:00",
        closes: "22:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday", "Sunday"],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    priceRange: "₹₹",
    currenciesAccepted: "INR",
    paymentAccepted: "Cash, UPI, Online Transfer",
    areaServed: [
      "Dharamshala",
      "McLeod Ganj",
      "Bhagsu",
      "Naddi",
      "Dharamkot",
      "Kangra",
      "Himachal Pradesh",
    ],
    serviceType: [
      "Taxi Service",
      "Airport Pickup",
      "Scooty Rental",
      "Bike Rental",
      "Local Sightseeing",
      "Outstation Taxi",
    ],
  };
}

/** FAQ schema for FAQ pages */
export function getFaqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };
}

/** BreadcrumbList schema */
export function getBreadcrumbSchema(
  items: { name: string; href: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE.url}${item.href}`,
    })),
  };
}
