import { MetadataRoute } from "next";
import { SITE } from "@/constants/business";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE.url;

  const routes = [
    { url: "/", priority: 1.0, changeFrequency: "weekly" as const },
    { url: "/about", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/services", priority: 0.9, changeFrequency: "weekly" as const },
    { url: "/services/taxi", priority: 0.9, changeFrequency: "weekly" as const },
    { url: "/services/scooty-on-rent", priority: 0.9, changeFrequency: "weekly" as const },
    { url: "/services/bike-on-rent", priority: 0.8, changeFrequency: "weekly" as const },
    { url: "/services/airport-pickup", priority: 0.9, changeFrequency: "weekly" as const },
    { url: "/destinations", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/pricing", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/gallery", priority: 0.6, changeFrequency: "monthly" as const },
    { url: "/faq", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/contact", priority: 0.8, changeFrequency: "monthly" as const },
  ];

  return routes.map(({ url, priority, changeFrequency }) => ({
    url: `${baseUrl}${url}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
