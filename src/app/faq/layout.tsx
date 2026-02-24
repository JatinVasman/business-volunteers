import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQs — Frequently Asked Questions | Business Volunteers",
  description:
    "Find answers to common questions about Business Volunteers services, pricing, payment terms, and how we help small businesses and startups grow.",
  alternates: {
    canonical: "https://businessvolunteers.online/faq",
  },
  openGraph: {
    title: "FAQs — Frequently Asked Questions | Business Volunteers",
    description:
      "Find answers to common questions about Business Volunteers services, pricing, payment terms, and how we help small businesses and startups grow.",
    url: "https://businessvolunteers.online/faq",
    type: "website",
    siteName: "Business Volunteers",
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQs — Frequently Asked Questions | Business Volunteers",
    description:
      "Find answers to common questions about Business Volunteers services, pricing, payment terms, and how we help small businesses and startups grow.",
  },
};

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return children;
}
