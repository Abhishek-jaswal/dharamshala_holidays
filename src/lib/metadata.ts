import type { Metadata } from "next";
import { SITE, BUSINESS } from "@/constants/business";

interface PageMeta {
  title: string;
  description: string;
  keywords?: string[];
  path: string;
}

export function buildMetadata({ title, description, keywords, path }: PageMeta): Metadata {
  const url = `${SITE.url}${path}`;
  return {
    title: `${title} | ${BUSINESS.name}`,
    description,
    keywords: keywords?.join(", "),
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | ${BUSINESS.name}`,
      description,
      url,
      siteName: BUSINESS.name,
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: `${SITE.url}/og-image.jpg`, // ✏️ Add real OG image
          width: 1200,
          height: 630,
          alt: `${BUSINESS.name} - ${title}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${BUSINESS.name}`,
      description,
    },
  };
}
