"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ServicePageHero from "@/components/ui/ServicePageHero";
import SectionHeading from "@/components/ui/SectionHeading";

const whatWeBuild = [
  { emoji: "👔", label: "Executive & CEO Dashboards" },
  { emoji: "📊", label: "Sales Performance Dashboards" },
  { emoji: "🎯", label: "Lead Tracking Systems" },
  { emoji: "📣", label: "Marketing Performance Dashboards" },
  { emoji: "💰", label: "Revenue & Profit Tracking" },
  { emoji: "👤", label: "Employee Performance Dashboards" },
  { emoji: "🏢", label: "HR & Recruitment Dashboards" },
  { emoji: "📦", label: "Inventory Management Systems" },
  { emoji: "💹", label: "Financial Reporting Dashboards" },
  { emoji: "🎧", label: "Customer Support Analytics" },
  { emoji: "📋", label: "Project Management Dashboards" },
  { emoji: "🏪", label: "Franchise Performance Dashboards" },
  { emoji: "⚙️", label: "Operations Monitoring Systems" },
  { emoji: "📈", label: "Business Intelligence Reports" },
];

const features = [
  "Custom KPI Tracking",
  "Automated Reporting",
  "Real-Time Performance Monitoring",
  "Excel & Google Sheets Solutions",
  "Interactive Visual Dashboards",
  "Department-wise Analytics",
  "Monthly & Weekly Reports",
  "Goal vs Achievement Tracking",
  "Data Consolidation from Multiple Sources",
  "Custom Alerts & Performance Indicators",
];

const pricingData = [
  { service: "Sales KPI Dashboard", price: "₹3,000 – ₹25,000+" },
  { service: "Employee Attendance Tracker", price: "₹1,500 – ₹10,000+" },
  { service: "HR Dashboard", price: "₹5,000 – ₹30,000+" },
  { service: "Marketing Performance Dashboard", price: "₹5,000 – ₹50,000+" },
  { service: "School Management Dashboard", price: "₹5,000 – ₹40,000+" },
  { service: "Business Financial Dashboard", price: "₹10,000 – ₹1,00,000+" },
  { service: "Inventory Management Tracker", price: "₹3,000 – ₹30,000+" },
  { service: "Lead Management CRM in Excel", price: "₹5,000 – ₹50,000+" },
];

const industries = [
  { emoji: "🎓", name: "Education", desc: "Schools, Colleges, Universities, Coaching Institutes, Training Centers" },
  { emoji: "🏥", name: "Healthcare", desc: "Hospitals, Clinics, Diagnostic Centers" },
  { emoji: "🏗️", name: "Real Estate", desc: "Builders, Developers, Property Consultants" },
  { emoji: "🏭", name: "Manufacturing", desc: "Factories, Production Units, Export Businesses" },
  { emoji: "🛍️", name: "Retail & E-Commerce", desc: "Retail Chains, D2C Brands, Online Stores" },
  { emoji: "📣", name: "Marketing & Advertising", desc: "Digital Agencies, Creative Studios" },
  { emoji: "👥", name: "Human Resources", desc: "Recruitment Firms, Corporate HR Departments" },
  { emoji: "💼", name: "Finance", desc: "CA Firms, Accounting Companies, Financial Consultants" },
  { emoji: "🚚", name: "Logistics & Transportation", desc: "Fleet Operators, Warehouses" },
  { emoji: "🏨", name: "Hospitality", desc: "Hotels, Restaurants, Resorts, Cafes" },
  { emoji: "⚖️", name: "Professional Services", desc: "Law Firms, Consultancy, Architecture Firms" },
  { emoji: "🏢", name: "Multi-Location Businesses", desc: "Franchise Networks, Branch Offices" },
];

const benefits = [
  "Monitor business performance in real time",
  "Improve decision-making with accurate data",
  "Reduce manual reporting work",
  "Increase team accountability",
  "Track goals and targets effectively",
  "Identify growth opportunities faster",
  "Improve operational efficiency",
  "Centralize all business metrics in one place",
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" as const },
  transition: { duration: 0.6 },
};

export default function KPIDashboardsPage() {
  return (
    <>
      <ServicePageHero
        headline="Dashboard & KPI Management Systems"
        subline="Turn your business data into clear insights, actionable reports, and real-time performance tracking."
        accentLine="Get custom KPI dashboards, business trackers, and automated reports designed specifically for your business. Track sales, marketing, finance, HR, and operations — all in one place."
      />

      {/* Overview */}
      <section className="py-20 sm:py-32 bg-warm">
        <div className="max-w-3xl mx-auto px-[5%]">
          <motion.p
            {...fadeUp}
            className="text-lg sm:text-xl text-[#444] font-[600] leading-[1.8] text-center"
          >
            We design custom dashboards and KPI systems that help business owners,
            managers, and teams make faster and smarter decisions. Whether you&apos;re a
            startup, SME, school, hospital, agency, or enterprise — we build
            reporting systems tailored to your business goals.
          </motion.p>
        </div>
      </section>

      {/* What We Build */}
      <section className="py-20 sm:py-32 bg-light">
        <div className="max-w-6xl mx-auto px-[5%]">
          <SectionHeading title="What We Build" subtitle="📊 Our Solutions" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {whatWeBuild.map((item, idx) => (
              <div
                key={idx}
                className="svc-card flex items-center gap-4 !p-6"
              >
                <span className="text-3xl">{item.emoji}</span>
                <span className="text-[0.92rem] font-[700] text-[#1a1a2e]">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 sm:py-32 bg-warm">
        <div className="max-w-5xl mx-auto px-[5%]">
          <SectionHeading title="Key Features" subtitle="⚡ Capabilities" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 p-5 rounded-2xl transition-all duration-300 hover:translate-y-[-2px]"
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
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="py-20 sm:py-32 bg-light">
        <div className="max-w-4xl mx-auto px-[5%]">
          <SectionHeading title="Pricing" subtitle="💰 Transparent Rates" />
          <motion.div
            {...fadeUp}
            className="overflow-hidden rounded-2xl"
            style={{ border: "2px solid rgba(255,107,53,0.15)" }}
          >
            {/* Price badge */}
            <div className="flex justify-center py-3" style={{ background: "linear-gradient(135deg, rgba(255,107,53,0.08), rgba(255,154,0,0.08))" }}>
              <span
                className="px-4 py-1.5 rounded-full text-[0.75rem] font-[800] tracking-wide"
                style={{ background: "linear-gradient(135deg, #ff6b35, #ff9a00)", color: "white" }}
              >
                Starting from ₹1,500
              </span>
            </div>
            <table className="w-full">
              <thead>
                <tr style={{ background: "#1a1a2e" }}>
                  <th className="text-left px-5 py-4 text-[0.78rem] font-[800] tracking-wider uppercase text-white">
                    Service
                  </th>
                  <th className="text-right px-5 py-4 text-[0.78rem] font-[800] tracking-wider uppercase text-white">
                    Price Range
                  </th>
                </tr>
              </thead>
              <tbody>
                {pricingData.map((row, idx) => (
                  <tr
                    key={idx}
                    className="transition-colors duration-200"
                    style={{
                      background: idx % 2 === 0 ? "white" : "rgba(255,107,53,0.03)",
                      borderBottom: "1px solid rgba(0,0,0,0.06)",
                    }}
                  >
                    <td className="px-5 py-4 text-[0.88rem] font-[700] text-[#333]">
                      {row.service}
                    </td>
                    <td
                      className="px-5 py-4 text-right text-[0.88rem] font-[800]"
                      style={{ color: "#ff6b35" }}
                    >
                      {row.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 sm:py-32 bg-warm">
        <div className="max-w-6xl mx-auto px-[5%]">
          <SectionHeading title="Industries We Serve" subtitle="🏭 Sectors" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {industries.map((ind, idx) => (
              <div
                key={idx}
                className="warm-card p-6"
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl mt-0.5">{ind.emoji}</span>
                  <div>
                    <h4 className="text-[0.95rem] font-[800] mb-1.5" style={{ color: "#ff6b35" }}>
                      {ind.name}
                    </h4>
                    <p className="text-[0.84rem] text-[#555] font-[600] leading-relaxed">
                      {ind.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Businesses Need This */}
      <section className="py-20 sm:py-32 bg-light">
        <div className="max-w-3xl mx-auto px-[5%]">
          <SectionHeading title="Why Businesses Need KPI Dashboards" subtitle="💡 The Need" />
          <motion.p
            {...fadeUp}
            className="text-lg sm:text-xl text-[#444] font-[600] leading-[1.8] text-center mb-14"
          >
            Businesses generate large amounts of data every day, but without proper
            tracking, opportunities and problems often go unnoticed. KPI dashboards
            provide complete visibility into business performance, helping teams improve
            productivity, increase profitability, and make informed decisions based on
            real data — not assumptions.
          </motion.p>
        </div>
        <div className="max-w-5xl mx-auto px-[5%]">
          {/* Benefits */}
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

      {/* CTA */}
      <section className="py-20 sm:py-32 bg-warm">
        <div className="max-w-4xl mx-auto px-[5%] text-center">
          <SectionHeading title="Ready to Track Your Business Performance?" subtitle="🚀 Get Started" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/#contact" className="btn-primary text-center">
              Get Your Custom Dashboard Built →
            </Link>
            <a
              href="https://wa.me/918586989832?text=Hi%2C%20I%E2%80%99m%20interested%20in%20a%20custom%20KPI%20dashboard."
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
