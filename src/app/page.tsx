import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import CombinedPortfolioSection from "@/components/sections/CombinedPortfolioSection";

import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FAQSection from "@/components/sections/FAQSection";
import ContactSection from "@/components/sections/ContactSection";
import Ticker from "@/components/Ticker";
import Divider from "@/components/Divider";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Ticker />
      <Divider />
      <ServicesSection />
      <Divider />
      <CombinedPortfolioSection />
      <Divider />
      <TestimonialsSection />
      <Divider />
      <FAQSection />
      <Divider />
      <ContactSection />
    </>
  );
}
