import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact SKD Holidays – Book Your Himachal Trip",
  description: "Get in touch with SKD Holidays for taxi booking, scooty rental, bike rental, and tour packages in Himachal Pradesh.",
};

export default function ContactPage() {
  return <ContactClient />;
}
