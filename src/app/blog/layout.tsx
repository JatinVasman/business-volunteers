import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — Digital Marketing Insights & Tips | Business Volunteers",
  description:
    "Read practical digital marketing tips, social media strategies, SEO guides, and business growth insights from the Business Volunteers team.",
  alternates: {
    canonical: "https://businessvolunteers.online/blog",
  },
  openGraph: {
    title: "Blog — Digital Marketing Insights & Tips | Business Volunteers",
    description:
      "Read practical digital marketing tips, social media strategies, SEO guides, and business growth insights from the Business Volunteers team.",
    url: "https://businessvolunteers.online/blog",
    type: "website",
    siteName: "Business Volunteers",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog — Digital Marketing Insights & Tips | Business Volunteers",
    description:
      "Read practical digital marketing tips, social media strategies, SEO guides, and business growth insights from the Business Volunteers team.",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
