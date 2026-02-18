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
  title: "Business Volunteers — Creative Solutions That Move Brands Forward",
  description:
    "Business Volunteers is a creative advertising and digital solutions agency helping brands grow through design, marketing, and strategy.",
  openGraph: {
    title: "Business Volunteers — Creative Agency",
    description:
      "Creative solutions that move brands forward. Design, marketing, and digital strategy.",
    type: "website",
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
