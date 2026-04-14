import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { destinations, getDestination } from "@/data/destinations";
import DestinationDetail from "@/components/destinations/DestinationDetail";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return destinations.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const dest = getDestination(slug);
  if (!dest) return { title: "Destination Not Found" };
  return {
    title: `${dest.name} Tour Packages – SKD Holidays`,
    description: `Book ${dest.name} tour packages, taxi service, and bike/scooty rentals. ${dest.overview.slice(0, 120)}`,
    keywords: [`${dest.name} tour`, `${dest.name} packages`, `${dest.name} taxi`, `visit ${dest.name}`, "Himachal Pradesh"],
  };
}

export default async function DestinationPage({ params }: Props) {
  const { slug } = await params;
  const dest = getDestination(slug);
  if (!dest) notFound();
  return <DestinationDetail destination={dest} />;
}
