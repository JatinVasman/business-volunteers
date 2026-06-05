"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import ServicePageHero from "@/components/ui/ServicePageHero";
import SectionHeading from "@/components/ui/SectionHeading";

const serviceCategories = [
  {
    name: "Market Research",
    emoji: "🔍",
    items: [
      "Industry Analysis",
      "Market Size Assessment",
      "Market Trends & Opportunities",
      "Customer Demand Analysis",
      "Regional Market Research",
      "Emerging Industry Trends",
    ],
  },
  {
    name: "Competitor Research",
    emoji: "🏆",
    items: [
      "Competitor Benchmarking",
      "Competitor Website Analysis",
      "Service & Pricing Analysis",
      "Marketing Strategy Analysis",
      "SEO & Digital Presence Review",
      "Competitive Gap Identification",
    ],
  },
  {
    name: "Business Strategy",
    emoji: "🎯",
    items: [
      "Growth Strategy Development",
      "Market Entry Strategy",
      "Expansion Planning",
      "Revenue Growth Strategy",
      "Customer Acquisition Strategy",
      "Brand Positioning Strategy",
    ],
  },
  {
    name: "Customer Research",
    emoji: "👥",
    items: [
      "Customer Persona Development",
      "Audience Segmentation",
      "Customer Journey Mapping",
      "Buying Behavior Analysis",
      "Customer Pain Point Research",
    ],
  },
  {
    name: "Digital Strategy",
    emoji: "💻",
    items: [
      "Website Strategy",
      "SEO Strategy",
      "Lead Generation Strategy",
      "Content Strategy",
      "Social Media Strategy",
      "Advertising Strategy",
    ],
  },
  {
    name: "Business Intelligence Reports",
    emoji: "📊",
    items: [
      "SWOT Analysis",
      "Industry Opportunity Reports",
      "Performance Benchmarking",
      "Strategic Recommendations",
      "Action Plans & Roadmaps",
    ],
  },
];

const whoNeedsThis = [
  { emoji: "🚀", segment: "Startups", useCase: "Validate ideas, find market opportunities, build growth strategies" },
  { emoji: "🎓", segment: "Schools & Colleges", useCase: "Understand admission trends and competitor positioning" },
  { emoji: "🏗️", segment: "Real Estate Companies", useCase: "Analyze local demand, project positioning, customer segments" },
  { emoji: "🏥", segment: "Healthcare Businesses", useCase: "Identify service opportunities and growth areas" },
  { emoji: "🏭", segment: "Manufacturing Companies", useCase: "Assess market expansion and competitive positioning" },
  { emoji: "📣", segment: "Agencies & Service Firms", useCase: "Improve client acquisition and service positioning" },
  { emoji: "🛍️", segment: "E-Commerce & Retail", useCase: "Understand customer behavior, trends, and product opportunities" },
];

const deliverables = [
  "Comprehensive Research Report",
  "Competitor Analysis Report",
  "Market Opportunity Assessment",
  "SWOT Analysis",
  "Growth Strategy Document",
  "Customer Insights Report",
  "Strategic Recommendations",
  "30-60-90 Day Action Plan",
  "Executive Summary Presentation",
];

const benefits = [
  "Reduce business risk",
  "Make data-driven decisions",
  "Identify growth opportunities",
  "Understand competitors better",
  "Improve marketing effectiveness",
  "Discover new revenue streams",
  "Create long-term business strategies",
  "Gain a competitive advantage",
];

export default function ResearchStrategyPage() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <ServicePageHero
        headline="Research & Strategy Consulting"
        subline="Make smarter business decisions with data-driven research, competitor intelligence, market analysis, and growth strategies tailored to your industry."
      />

      {/* Overview */}
      <section className="py-20 sm:py-32 bg-warm">
        <div className="max-w-3xl mx-auto px-[5%]">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-lg sm:text-xl text-[#444] font-[600] leading-[1.8] text-center"
          >
            Most businesses make decisions based on assumptions. We help organizations
            make decisions based on market data, customer insights, competitor
            intelligence, and strategic planning. Our Research &amp; Strategy services
            provide a clear roadmap for growth, expansion, marketing, product
            positioning, and competitive advantage.
          </motion.p>
        </div>
      </section>

      {/* Services Breakdown — Tabbed */}
      <section className="py-20 sm:py-32 bg-light">
        <div className="max-w-6xl mx-auto px-[5%]">
          <SectionHeading title="Our Services" subtitle="📋 Service Breakdown" />

          {/* Tab buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {serviceCategories.map((cat, idx) => (
              <motion.button
                key={idx}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setActiveTab(idx)}
                className="px-5 py-3 rounded-xl text-[0.85rem] font-[700] transition-all duration-300"
                style={
                  activeTab === idx
                    ? {
                        background: "linear-gradient(135deg, #ff6b35, #ff9a00)",
                        color: "white",
                        boxShadow: "0 4px 15px rgba(255,107,53,0.3)",
                      }
                    : {
                        background: "white",
                        color: "#555",
                        border: "2px solid rgba(0,0,0,0.08)",
                      }
                }
              >
                {cat.emoji} {cat.name}
              </motion.button>
            ))}
          </div>

          {/* Tab content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="warm-card p-8 sm:p-12"
            >
              <h3 className="text-xl sm:text-2xl font-[900] mb-8 flex items-center gap-3" style={{ color: "#ff6b35" }}>
                <span className="text-3xl">
                  {serviceCategories[activeTab].emoji}
                </span>
                {serviceCategories[activeTab].name}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {serviceCategories[activeTab].items.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    className="flex items-center gap-4 p-4 rounded-xl"
                    style={{
                      background: "rgba(255,107,53,0.04)",
                      border: "1px solid rgba(255,107,53,0.1)",
                    }}
                  >
                    <span
                      className="w-7 h-7 rounded-md flex items-center justify-center text-white text-xs shrink-0"
                      style={{ background: "linear-gradient(135deg, #ff6b35, #ff9a00)" }}
                    >
                      ✓
                    </span>
                    <span className="text-[0.92rem] font-[700] text-[#1a1a2e]">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Who Needs This */}
      <section className="py-20 sm:py-32 bg-warm">
        <div className="max-w-6xl mx-auto px-[5%]">
          <SectionHeading title="Who Needs This" subtitle="🎯 Ideal For" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {whoNeedsThis.map((item, idx) => (
              <div
                key={idx}
                className="warm-card p-6"
              >
                <div className="flex items-start gap-4">
                  <span
                    className="w-14 h-14 rounded-xl flex items-center justify-center text-3xl shrink-0"
                    style={{
                      background: "linear-gradient(135deg, rgba(255,107,53,0.12), rgba(255,154,0,0.08))",
                      border: "2px solid rgba(255,107,53,0.15)",
                    }}
                  >
                    {item.emoji}
                  </span>
                  <div>
                    <h4 className="text-[0.95rem] font-[800] mb-1.5" style={{ color: "#ff6b35" }}>
                      {item.segment}
                    </h4>
                    <p className="text-[0.88rem] text-[#555] font-[600] leading-[1.7]">
                      {item.useCase}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-20 sm:py-32 bg-light">
        <div className="max-w-5xl mx-auto px-[5%]">
          <SectionHeading title="What You Get" subtitle="📦 Deliverables" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {deliverables.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 p-5 rounded-2xl"
                style={{
                  background: "white",
                  border: "2px solid rgba(255,107,53,0.12)",
                }}
              >
                <span
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm shrink-0"
                  style={{ background: "linear-gradient(135deg, #ff6b35, #ff9a00)" }}
                >
                  ✓
                </span>
                <span className="text-[0.92rem] font-[700] text-[#1a1a2e]">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 sm:py-32 bg-warm">
        <div className="max-w-5xl mx-auto px-[5%]">
          <SectionHeading title="Benefits" subtitle="💡 Why It Matters" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 p-5 rounded-2xl"
                style={{
                  background: "rgba(0,208,132,0.06)",
                  border: "2px solid rgba(0,208,132,0.15)",
                }}
              >
                <span
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm shrink-0"
                  style={{ background: "linear-gradient(135deg, #00d084, #00a86b)" }}
                >
                  ✓
                </span>
                <span className="text-[0.92rem] font-[700] text-[#1a1a2e]">
                  {benefit}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 sm:py-32 bg-light">
        <div className="max-w-3xl mx-auto px-[5%] text-center">
          <SectionHeading title="Pricing" subtitle="💰 Investment" />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="price-card max-w-md mx-auto"
          >
            <div
              className="text-[0.72rem] tracking-[2px] uppercase font-[800] mb-3"
              style={{ color: "#ff6b35" }}
            >
              Full Package
            </div>
            <h3 className="text-3xl sm:text-4xl font-[900] text-[#1a1a2e] mb-2">
              ₹9,999
            </h3>
            <p className="text-[0.85rem] text-[#666] font-[600] mb-1">
              Research &amp; Strategy Consulting
            </p>
            <p className="text-[0.78rem] text-[#999] font-[600]">
              Complete package including research, analysis &amp; strategy
            </p>
          </motion.div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="py-20 sm:py-32 bg-warm">
        <div className="max-w-3xl mx-auto px-[5%] text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-lg sm:text-xl text-[#444] font-[600] leading-[1.8] mb-10"
          >
            We combine research, analytics, market intelligence, and business strategy
            to deliver actionable insights — not just reports. Every recommendation is
            designed to help businesses grow faster, compete effectively, and make
            confident decisions.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-2xl sm:text-3xl font-[900] gradient-text"
          >
            &ldquo;Transform data into decisions. Strategy into growth.&rdquo;
          </motion.p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-32 bg-light">
        <div className="max-w-4xl mx-auto px-[5%] text-center">
          <SectionHeading title="Let's Build Your Growth Strategy" subtitle="🚀 Get Started" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/#contact" className="btn-primary text-center">
              Start Your Research Project →
            </Link>
            <a
              href="https://wa.me/918586989832?text=Hi%2C%20I%E2%80%99m%20interested%20in%20Research%20%26%20Strategy%20Consulting."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline text-center"
            >
              💬 Get a Free Consultation
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
