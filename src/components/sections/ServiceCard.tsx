import Link from "next/link";
import { ArrowRight, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  price?: string;
  features?: string[];
  accent?: boolean;
}

export function ServiceCard({
  icon: Icon,
  title,
  description,
  href,
  price,
  features,
  accent,
}: ServiceCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group",
        accent
          ? "bg-brand-600 text-white border-brand-600"
          : "bg-white text-gray-900 border-gray-100 shadow-md"
      )}
    >
      <div
        className={cn(
          "w-14 h-14 rounded-2xl flex items-center justify-center mb-5",
          accent ? "bg-white/20" : "bg-brand-50"
        )}
      >
        <Icon className={cn("h-7 w-7", accent ? "text-white" : "text-brand-600")} />
      </div>

      <h3 className={cn("font-display text-xl font-bold mb-2", accent ? "text-white" : "text-gray-900")}>
        {title}
      </h3>

      <p className={cn("text-sm leading-relaxed mb-4", accent ? "text-white/80" : "text-gray-500")}>
        {description}
      </p>

      {price && (
        <p className={cn("font-bold text-lg mb-4", accent ? "text-white" : "text-brand-700")}>
          Starting {price}
        </p>
      )}

      {features && (
        <ul className="space-y-1 mb-5">
          {features.map((f) => (
            <li
              key={f}
              className={cn("flex items-center gap-2 text-sm", accent ? "text-white/80" : "text-gray-500")}
            >
              <span className={cn("w-1.5 h-1.5 rounded-full flex-shrink-0", accent ? "bg-white" : "bg-brand-400")} />
              {f}
            </li>
          ))}
        </ul>
      )}

      <Link
        href={href}
        className={cn(
          "inline-flex items-center gap-2 text-sm font-semibold transition-colors group-hover:gap-3",
          accent ? "text-white hover:text-white/80" : "text-brand-600 hover:text-brand-700"
        )}
      >
        Learn More <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}
