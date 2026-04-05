import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloatingButton } from "@/components/shared/WhatsAppFloatingButton";
import { CallFloatingButton } from "@/components/shared/CallFloatingButton";
import { getLocalBusinessSchema } from "@/lib/schema";
import { SITE, BUSINESS } from "@/constants/business";

// Fonts are loaded via CSS @import in globals.css
// This avoids build-time Google Fonts fetch errors in restricted environments
const displayFont = { variable: "--font-display" };
const bodyFont = { variable: "--font-body" };

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${BUSINESS.name} | Taxi, Scooty & Bike Rental in Dharamshala`,
    template: `%s | ${BUSINESS.name}`,
  },
  description: SITE.description,
  keywords: SITE.keywords.join(", "),
  authors: [{ name: BUSINESS.name }],
  creator: BUSINESS.name,
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  verification: {
    // ✏️ Add your Google Search Console verification code
    // google: "your-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schema = getLocalBusinessSchema();

  return (
    <html lang="en-IN" className={`${displayFont.variable} ${bodyFont.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body className="font-body antialiased bg-white text-gray-900">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloatingButton />
        <CallFloatingButton />
      </body>
    </html>
  );
}
