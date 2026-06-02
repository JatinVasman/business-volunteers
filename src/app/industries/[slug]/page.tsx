import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { dedicatedIndustries, genericSectors, masterServices } from "@/data/industries";
import IndustryDetailContent from "./IndustryDetailContent";

interface IndustryPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const dedicated = dedicatedIndustries.map((ind) => ({ slug: ind.slug }));
  const generic = genericSectors.map((sec) => ({ slug: sec.slug }));
  return [...dedicated, ...generic];
}

export async function generateMetadata({ params }: IndustryPageProps): Promise<Metadata> {
  const { slug } = await params;

  const dedicated = dedicatedIndustries.find((ind) => ind.slug === slug);
  if (dedicated) {
    return {
      title: `${dedicated.name} Digital Marketing — Industry Solutions | Business Volunteers`,
      description: dedicated.heroDescription,
      alternates: {
        canonical: `https://businessvolunteers.online/industries/${slug}`,
      },
      openGraph: {
        title: `${dedicated.name} Digital Marketing | Business Volunteers`,
        description: dedicated.heroDescription,
        url: `https://businessvolunteers.online/industries/${slug}`,
        type: "website",
        siteName: "Business Volunteers",
      },
      twitter: {
        card: "summary_large_image",
        title: `${dedicated.name} Digital Marketing | Business Volunteers`,
        description: dedicated.heroDescription,
      },
    };
  }

  const generic = genericSectors.find((sec) => sec.slug === slug);
  if (generic) {
    return {
      title: `${generic.name} Digital Marketing — Industry Solutions | Business Volunteers`,
      description: generic.description,
      alternates: {
        canonical: `https://businessvolunteers.online/industries/${slug}`,
      },
      openGraph: {
        title: `${generic.name} Digital Marketing | Business Volunteers`,
        description: generic.description,
        url: `https://businessvolunteers.online/industries/${slug}`,
        type: "website",
        siteName: "Business Volunteers",
      },
    };
  }

  return { title: "Industry Not Found | Business Volunteers" };
}

export default async function IndustryPage({ params }: IndustryPageProps) {
  const { slug } = await params;

  const dedicated = dedicatedIndustries.find((ind) => ind.slug === slug);
  if (dedicated) {
    return <IndustryDetailContent industry={dedicated} type="dedicated" />;
  }

  const generic = genericSectors.find((sec) => sec.slug === slug);
  if (generic) {
    return (
      <IndustryDetailContent
        genericSector={generic}
        services={masterServices}
        type="generic"
      />
    );
  }

  notFound();
}
