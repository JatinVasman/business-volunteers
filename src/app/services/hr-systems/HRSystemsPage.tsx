"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ServicePageHero from "@/components/ui/ServicePageHero";
import SectionHeading from "@/components/ui/SectionHeading";

const services = [
  {
    emoji: "📖",
    name: "Employee Handbooks",
    desc: "Custom handbooks aligned with your company policies",
  },
  {
    emoji: "📅",
    name: "Attendance Systems",
    desc: "Automated daily/monthly attendance tracking",
  },
  {
    emoji: "🏖️",
    name: "Leave Management Systems",
    desc: "Streamlined leave application and approval tracking",
  },
  {
    emoji: "⭐",
    name: "Performance Review Systems",
    desc: "Structured employee appraisal and goal tracking",
  },
  {
    emoji: "🚀",
    name: "Onboarding Systems",
    desc: "Step-by-step onboarding checklists and welcome kits",
  },
];

const pricingData = [
  { service: "Employee Handbook", price: "₹1,500 – ₹4,500" },
  { service: "Attendance System", price: "₹1,500 – ₹4,500" },
  { service: "Leave Management System", price: "₹1,500 – ₹4,500" },
  { service: "Performance Review System", price: "₹1,500 – ₹4,500" },
  { service: "Onboarding System", price: "₹1,500 – ₹4,500" },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" as const },
  transition: { duration: 0.6 },
};

export default function HRSystemsPage() {
  return (
    <>
      <ServicePageHero
        headline="HR Systems & People Management Solutions"
        subline="Streamline your HR operations with ready-to-use, customizable systems for attendance, leave, onboarding, and employee performance."
      />

      {/* Services */}
      <section className="py-20 sm:py-32 bg-warm">
        <div className="max-w-6xl mx-auto px-[5%]">
          <SectionHeading title="Our HR Solutions" subtitle="👥 Services" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((svc, idx) => (
              <div
                key={idx}
                className="svc-card text-center !p-8"
              >
                <div
                  className="w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center text-4xl"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(255,107,53,0.12), rgba(255,154,0,0.08))",
                    border: "2px solid rgba(255,107,53,0.15)",
                  }}
                >
                  {svc.emoji}
                </div>
                <h3 className="text-lg font-[800] mb-3" style={{ color: "#ff6b35" }}>
                  {svc.name}
                </h3>
                <p className="text-[0.9rem] text-[#555] font-[600] leading-[1.7]">
                  {svc.desc}
                </p>
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
                    style={{
                      background: idx % 2 === 0 ? "white" : "rgba(255,107,53,0.03)",
                      borderBottom: "1px solid rgba(0,0,0,0.06)",
                    }}
                  >
                    <td className="px-5 py-4 text-[0.88rem] font-[700] text-[#333]">
                      {row.service}
                    </td>
                    <td className="px-5 py-4 text-right text-[0.88rem] font-[800]" style={{ color: "#ff6b35" }}>
                      {row.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-32 bg-warm">
        <div className="max-w-4xl mx-auto px-[5%] text-center">
          <SectionHeading title="Streamline Your HR Operations" subtitle="🚀 Get Started" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/#contact" className="btn-primary text-center">
              Set Up Your HR System →
            </Link>
            <a
              href="https://wa.me/918586989832?text=Hi%2C%20I%E2%80%99m%20interested%20in%20HR%20systems."
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
