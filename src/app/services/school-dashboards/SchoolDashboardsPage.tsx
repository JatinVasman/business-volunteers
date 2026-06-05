"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ServicePageHero from "@/components/ui/ServicePageHero";
import SectionHeading from "@/components/ui/SectionHeading";

const services = [
  {
    emoji: "📝",
    name: "Admission Tracking Dashboard",
    desc: "Track inquiries, applications, and conversion rates",
  },
  {
    emoji: "📊",
    name: "Student Performance Dashboard",
    desc: "Monitor grades, attendance, and academic progress",
  },
  {
    emoji: "💳",
    name: "Fee Collection Tracker",
    desc: "Track fee payments, dues, and collection reports",
  },
  {
    emoji: "👩‍🏫",
    name: "Teacher Performance Dashboard",
    desc: "Monitor teaching metrics and staff performance",
  },
  {
    emoji: "👨‍👩‍👧",
    name: "Parent Communication System",
    desc: "Structured parent update and communication tracker",
  },
];

const pricingData = [
  { service: "Admission Tracking Dashboard", price: "₹1,500 – ₹4,500" },
  { service: "Student Performance Dashboard", price: "₹1,500 – ₹4,500" },
  { service: "Fee Collection Tracker", price: "₹1,500 – ₹4,500" },
  { service: "Teacher Performance Dashboard", price: "₹1,500 – ₹4,500" },
  { service: "Parent Communication System", price: "₹1,500 – ₹4,500" },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" as const },
  transition: { duration: 0.6 },
};

export default function SchoolDashboardsPage() {
  return (
    <>
      <ServicePageHero
        headline="School & Education Management Dashboards"
        subline="Custom-built tracking and management systems for schools, colleges, and educational institutions. Simplify administration, track performance, and improve communication."
      />

      {/* Services */}
      <section className="py-20 sm:py-32 bg-warm">
        <div className="max-w-6xl mx-auto px-[5%]">
          <SectionHeading title="Our School Solutions" subtitle="🎓 Services" />
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
                      "linear-gradient(135deg, rgba(0,201,255,0.12), rgba(139,92,246,0.08))",
                    border: "2px solid rgba(0,201,255,0.2)",
                  }}
                >
                  {svc.emoji}
                </div>
                <h3 className="text-lg font-[800] mb-3" style={{ color: "#00a0e6" }}>
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
            style={{ border: "2px solid rgba(0,201,255,0.15)" }}
          >
            <div className="flex justify-center py-3" style={{ background: "linear-gradient(135deg, rgba(0,201,255,0.08), rgba(139,92,246,0.05))" }}>
              <span
                className="px-4 py-1.5 rounded-full text-[0.75rem] font-[800] tracking-wide"
                style={{ background: "linear-gradient(135deg, #00c9ff, #8b5cf6)", color: "white" }}
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
                      background: idx % 2 === 0 ? "white" : "rgba(0,201,255,0.03)",
                      borderBottom: "1px solid rgba(0,0,0,0.06)",
                    }}
                  >
                    <td className="px-5 py-4 text-[0.88rem] font-[700] text-[#333]">
                      {row.service}
                    </td>
                    <td className="px-5 py-4 text-right text-[0.88rem] font-[800]" style={{ color: "#00c9ff" }}>
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
      <section className="py-16 sm:py-24 bg-warm">
        <div className="max-w-4xl mx-auto px-[5%] text-center">
          <SectionHeading title="Simplify Your School Administration" subtitle="🚀 Get Started" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/#contact" className="btn-primary text-center">
              Get Your School Dashboard →
            </Link>
            <a
              href="https://wa.me/918586989832?text=Hi%2C%20I%E2%80%99m%20interested%20in%20a%20school%20management%20dashboard."
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
