import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import CRMSection from "@/components/sections/CRMSection";
import SocialMediaSection from "@/components/sections/SocialMediaSection";
import ProcessSection from "@/components/sections/ProcessSection";
import ResultsSection from "@/components/sections/ResultsSection";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <SocialMediaSection />
      <PortfolioSection />
      <CRMSection />
      <ProcessSection />
      <ResultsSection />
      <WhyChooseUsSection />
      <ContactSection />
    </>
  );
}
