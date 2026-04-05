import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  location: string;
  rating: number;
  text: string;
  trip: string;
}

export function TestimonialCard({ name, location, rating, text, trip }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col gap-4">
      {/* Stars */}
      <div className="flex gap-1">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
        ))}
      </div>

      {/* Review text */}
      <p className="text-gray-600 text-sm leading-relaxed flex-1">&ldquo;{text}&rdquo;</p>

      {/* Trip type badge */}
      <span className="self-start inline-block bg-brand-50 text-brand-700 text-xs font-semibold px-3 py-1 rounded-full">
        {trip}
      </span>

      {/* Reviewer info */}
      <div className="flex items-center gap-3 pt-2 border-t border-gray-100">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-400 to-brand-700 flex items-center justify-center text-white font-bold text-sm">
          {name.charAt(0)}
        </div>
        <div>
          <p className="font-semibold text-sm text-gray-900">{name}</p>
          <p className="text-xs text-gray-400">{location}</p>
        </div>
      </div>
    </div>
  );
}
