import { Check } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface PricingCardProps {
  title: string;
  price: string;
  unit: string;
  description: string;
  features: string[];
  href: string;
  popular?: boolean;
}

export function PricingCard({
  title,
  price,
  unit,
  description,
  features,
  href,
  popular,
}: PricingCardProps) {
  return (
    <div
      className={cn(
        "relative rounded-2xl p-7 border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl",
        popular
          ? "bg-brand-700 text-white border-brand-700 shadow-xl"
          : "bg-white text-gray-900 border-gray-100 shadow-md"
      )}
    >
      {popular && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-400 text-gray-900 text-xs font-bold px-4 py-1 rounded-full">
          Most Popular
        </span>
      )}

      <h3 className={cn("font-display text-xl font-bold mb-1", popular ? "text-white" : "text-gray-900")}>
        {title}
      </h3>
      <p className={cn("text-sm mb-5", popular ? "text-brand-100" : "text-gray-400")}>
        {description}
      </p>

      <div className="mb-6">
        <span className={cn("text-4xl font-bold", popular ? "text-white" : "text-gray-900")}>
          {price}
        </span>
        <span className={cn("text-sm ml-1", popular ? "text-brand-200" : "text-gray-400")}>
          /{unit}
        </span>
      </div>

      <ul className="space-y-3 mb-8">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-3 text-sm">
            <Check
              className={cn("h-4 w-4 mt-0.5 flex-shrink-0", popular ? "text-brand-300" : "text-brand-500")}
            />
            <span className={popular ? "text-brand-100" : "text-gray-600"}>{f}</span>
          </li>
        ))}
      </ul>

      <Link
        href={href}
        className={cn(
          "block text-center font-semibold py-3 rounded-xl transition-all duration-200 active:scale-95",
          popular
            ? "bg-white text-brand-700 hover:bg-brand-50"
            : "bg-brand-600 text-white hover:bg-brand-700"
        )}
      >
        Book This Service
      </Link>
    </div>
  );
}
