import Link from "next/link";
import { Mountain } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 text-center">
      <div>
        <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center mx-auto mb-8 shadow-glow">
          <Mountain className="w-10 h-10 text-white" />
        </div>
        <p className="font-mono text-sky-400 text-sm uppercase tracking-widest mb-4">404 – Lost in the Mountains</p>
        <h1 className="font-display text-5xl sm:text-6xl font-bold text-white mb-6">Page Not Found</h1>
        <p className="text-slate-400 text-lg max-w-md mx-auto mb-10">
          The trail you were following seems to have disappeared into the clouds. Let us guide you back.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link href="/" className="px-7 py-3.5 rounded-2xl bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold hover:scale-105 transition-transform shadow-glow">
            Back to Home
          </Link>
          <Link href="/destinations" className="px-7 py-3.5 rounded-2xl glass border border-white/15 text-white font-semibold hover:bg-white/10 transition-all">
            Explore Destinations
          </Link>
        </div>
      </div>
    </div>
  );
}
