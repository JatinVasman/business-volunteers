import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CursorFollower from "@/components/CursorFollower";

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
  title:
    "Top Advertising Agency in Delhi NCR for Creative Branding & Digital Marketing",
  description:
    "We help businesses grow with data-driven advertising, social media marketing, branding, and high-converting campaigns tailored for the Delhi market",
  keywords: [
    "advertising agency Delhi NCR",
    "digital marketing agency Delhi",
    "creative branding agency",
    "social media marketing Delhi",
    "best advertising agency in Delhi",
    "brand strategy Delhi NCR",
    "performance marketing",
    "SEO services Delhi",
    "PPC campaigns Delhi NCR",
    "content marketing agency",
    "influencer marketing Delhi",
    "lead generation agency",
    "business growth marketing",
    "high-converting campaigns",
    "data-driven advertising",
    "creative agency Delhi",
    "Business Volunteers",
  ],
  openGraph: {
    title: "Top Advertising Agency in Delhi NCR | Business Volunteers",
    description:
      "We help businesses grow with data-driven advertising, social media marketing, branding, and high-converting campaigns tailored for the Delhi market",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 800,
        alt: "Business Volunteers — Top Advertising Agency in Delhi NCR",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Top Advertising Agency in Delhi NCR | Business Volunteers",
    description:
      "We help businesses grow with data-driven advertising, social media marketing, branding, and high-converting campaigns tailored for the Delhi market",
    images: ["/logo.png"],
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
      <body className="antialiased noise-overlay">
        <SmoothScroll>
          <CursorFollower />
          <Navbar />
          <main className="relative z-[2]">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
