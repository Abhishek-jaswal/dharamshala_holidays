import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "SKD Holidays – Explore Himachal with Comfort & Style",
    template: "%s | SKD Holidays",
  },
  description:
    "Book taxi, rent scooty or bike, and discover unforgettable tour packages across Himachal Pradesh. SKD Holidays offers premium travel experiences in Chamba, Dharamshala, Dalhousie, Khajjiar, Bir Billing & McLeodganj.",
  keywords: [
    "Himachal Pradesh tour packages",
    "taxi booking Chamba",
    "scooty rental Dharamshala",
    "bike rental Himachal",
    "SKD Holidays",
  ],
  authors: [{ name: "SKD Holidays" }],
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,800;1,400;1,600&family=DM+Sans:wght@300;400;500;600&family=Space+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-deep text-slate-100 antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
