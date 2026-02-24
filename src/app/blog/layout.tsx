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
    images: [
      {
        url: "/logo-dark.png",
        width: 800,
        height: 800,
        alt: "Business Volunteers Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog — Digital Marketing Insights & Tips | Business Volunteers",
    description:
      "Read practical digital marketing tips, social media strategies, SEO guides, and business growth insights from the Business Volunteers team.",
    images: ["/logo-dark.png"],
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
