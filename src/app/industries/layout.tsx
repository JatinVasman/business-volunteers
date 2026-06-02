import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industries We Serve — Digital Marketing for Every Sector | Business Volunteers",
  description:
    "Business Volunteers provides specialized digital marketing solutions across 47+ industries including Healthcare, Education, Jewellery, Real Estate, and more. Find your industry-specific growth strategy.",
  alternates: {
    canonical: "https://businessvolunteers.online/industries",
  },
  openGraph: {
    title: "Industries We Serve — Digital Marketing for Every Sector | Business Volunteers",
    description:
      "Business Volunteers provides specialized digital marketing solutions across 47+ industries including Healthcare, Education, Jewellery, Real Estate, and more.",
    url: "https://businessvolunteers.online/industries",
    type: "website",
    siteName: "Business Volunteers",
  },
  twitter: {
    card: "summary_large_image",
    title: "Industries We Serve — Digital Marketing for Every Sector | Business Volunteers",
    description:
      "Specialized digital marketing solutions across 47+ industries. Find your industry-specific growth strategy.",
  },
};

export default function IndustriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
