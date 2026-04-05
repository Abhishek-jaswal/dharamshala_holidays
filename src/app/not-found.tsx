import Link from "next/link";
import { Home, Phone } from "lucide-react";
import { CALL_URL } from "@/constants/business";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 pt-20">
      <div className="text-center px-4">
        <p className="text-brand-600 font-semibold text-sm uppercase tracking-widest mb-3">404 Error</p>
        <h1 className="font-display text-5xl font-bold text-gray-900 mb-4">Page Not Found</h1>
        <p className="text-gray-500 text-lg mb-10 max-w-md mx-auto">
          Looks like this road doesn't exist! Let's get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-primary">
            <Home className="h-4 w-4" /> Back to Home
          </Link>
          <a href={CALL_URL} className="btn-secondary">
            <Phone className="h-4 w-4" /> Call Us
          </a>
        </div>
      </div>
    </div>
  );
}
