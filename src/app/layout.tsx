import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CursorFollower from "@/components/CursorFollower";
import Preloader from "@/components/Preloader";
import { Analytics } from "@vercel/analytics/next";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://businessvolunteers.online"),
  title:
    "Top Advertising Agency in India for Creative Branding & Digital Marketing",
  description:
    "We help businesses grow with data-driven advertising, social media marketing, branding, and high-converting campaigns tailored for the Delhi market",
  keywords: [
    "advertising agency India",
    "digital marketing agency India",
    "creative branding agency",
    "social media marketing India",
    "best advertising agency in India",
    "brand strategy India",
    "performance marketing",
    "SEO services India",
    "PPC campaigns India",
    "content marketing agency",
    "influencer marketing India",
    "lead generation agency",
    "business growth marketing",
    "high-converting campaigns",
    "data-driven advertising",
    "creative agency India",
    "Business Volunteers",
  ],
  icons: {
    icon: "/logo-dark.png",
    apple: "/logo-dark.png",
  },
  openGraph: {
    title: "Top Advertising Agency in India | Business Volunteers",
    description:
      "We help businesses grow with data-driven advertising, social media marketing, branding, and high-converting campaigns tailored for the Delhi market",
    type: "website",
    images: [
      {
        url: "/logo-dark.png",
        width: 800,
        height: 800,
        alt: "Business Volunteers — Top Advertising Agency in India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Top Advertising Agency in India | Business Volunteers",
    description:
      "We help businesses grow with data-driven advertising, social media marketing, branding, and high-converting campaigns tailored for the Delhi market",
    images: ["/logo-dark.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Business Volunteers",
              url: "https://businessvolunteers.online",
              logo: "https://businessvolunteers.online/logo-dark.png",
              description:
                "We help businesses grow with data-driven advertising, social media marketing, branding, and high-converting campaigns tailored for the Delhi market.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Noida Sec 62",
                addressLocality: "Noida",
                postalCode: "201309",
                addressCountry: "IN",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-8586989832",
                contactType: "customer service",
                areaServed: "IN",
                availableLanguage: ["English", "Hindi"],
              },
              sameAs: [
                "https://www.instagram.com/businessvolunteers",
                "https://www.facebook.com/businessvolunteers",
                "https://www.linkedin.com/company/businessvolunteers",
                "https://www.youtube.com/@businessvolunteers",
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Business Volunteers",
              url: "https://businessvolunteers.online",
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate:
                    "https://businessvolunteers.online/blog?q={search_term_string}",
                },
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              itemListElement: [
                {
                  "@type": "SiteNavigationElement",
                  name: "About",
                  url: "https://businessvolunteers.online/#about",
                },
                {
                  "@type": "SiteNavigationElement",
                  name: "Services",
                  url: "https://businessvolunteers.online/#services",
                },
                {
                  "@type": "SiteNavigationElement",
                  name: "Portfolio",
                  url: "https://businessvolunteers.online/#social",
                },
                {
                  "@type": "SiteNavigationElement",
                  name: "CRM Solutions",
                  url: "https://businessvolunteers.online/#crm",
                },
                {
                  "@type": "SiteNavigationElement",
                  name: "Testimonials",
                  url: "https://businessvolunteers.online/#testimonials",
                },
                {
                  "@type": "SiteNavigationElement",
                  name: "Contact",
                  url: "https://businessvolunteers.online/#contact",
                },
                {
                  "@type": "SiteNavigationElement",
                  name: "Blog",
                  url: "https://businessvolunteers.online/blog",
                },
                {
                  "@type": "SiteNavigationElement",
                  name: "FAQs",
                  url: "https://businessvolunteers.online/faq",
                },
              ],
            }),
          }}
        />
      </head>
      <body className="antialiased noise-overlay">
        <Preloader>
          <SmoothScroll>
            <CursorFollower />
            <Navbar />
            <main className="relative z-[2]">{children}</main>
            <Footer />
          </SmoothScroll>
        </Preloader>
        <Analytics />
      </body>
    </html>
  );
}
