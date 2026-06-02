"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import SocialMediaSection from "./SocialMediaSection";
import PortfolioSection from "./PortfolioSection";
import CRMSection from "./CRMSection";

export default function CombinedPortfolioSection() {
  const [activeTab, setActiveTab] = useState("social");

  const tabs = [
    { id: "social", label: "📸 Social Media" },
    { id: "website", label: "💻 Websites" },
    { id: "crm", label: "🤝 CRM Solutions" },
  ];

  return (
    <section id="portfolio" className="relative py-20 overflow-hidden bg-light">
      <div className="max-w-7xl mx-auto px-[5%] relative z-10 mb-10">
        <SectionHeading title="Our Work & Solutions" subtitle="🏆 Portfolio" />
        <p className="text-center text-[#666] text-base max-w-2xl mx-auto -mt-8 mb-10 font-[600]">
          Explore our successful campaigns, stunning websites, and smart CRM systems that drive real business growth. ✨
        </p>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-6 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-full text-sm font-[800] transition-all duration-300 ${
                activeTab === tab.id
                  ? "text-white shadow-lg scale-105"
                  : "bg-white text-[#666] hover:bg-gray-50 border-2 border-transparent hover:border-[rgba(255,107,53,0.3)]"
              }`}
              style={{
                background: activeTab === tab.id ? "linear-gradient(135deg, #ff6b35, #ff9a00)" : "",
                boxShadow: activeTab === tab.id ? "0 8px 25px rgba(255,107,53,0.3)" : "0 4px 15px rgba(0,0,0,0.05)",
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="w-full">
        <AnimatePresence mode="wait">
          {activeTab === "social" && (
            <motion.div
              key="social"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <SocialMediaSection hideHeader />
            </motion.div>
          )}
          {activeTab === "website" && (
            <motion.div
              key="website"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <PortfolioSection hideHeader />
            </motion.div>
          )}
          {activeTab === "crm" && (
            <motion.div
              key="crm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <CRMSection hideHeader />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
