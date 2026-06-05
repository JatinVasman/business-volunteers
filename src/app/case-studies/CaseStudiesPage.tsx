"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";

const caseStudies = [
  {
    headline: "How We Generated 500 Leads for a Business in 30 Days",
    challenge: [
      "Client had no digital presence or lead funnel",
      "No tracking system in place",
      "Spending on ads with zero measurable results",
    ],
    strategy: [
      "Built a high-converting landing page with clear CTA",
      "Launched targeted Meta (Facebook/Instagram) ad campaigns",
      "Set up a lead tracking dashboard to monitor performance daily",
      "Optimized ads weekly based on data",
    ],
    results: [
      "500+ leads generated in 30 days",
      "Cost per lead reduced by 40%",
      "3x return on ad spend",
      "Client scaled budget after Week 2",
    ],
  },
  {
    headline: "How a School Increased Admissions by 62% in One Season",
    challenge: [
      "Declining admission inquiries year-on-year",
      "No website, no social media, no online visibility",
      "Parents couldn't find information about the school online",
    ],
    strategy: [
      "Designed and launched a professional school website",
      "Created a digital admission inquiry form with WhatsApp integration",
      "Ran local area social media campaigns targeting parents",
      "Built a Student Admission Tracking Dashboard for the admin team",
    ],
    results: [
      "62% increase in admission inquiries",
      "2,000+ website visits in the first month",
      "Admin team saved 8+ hours/week with the dashboard",
      "School now runs digital campaigns every admission season",
    ],
  },
  {
    headline: "How a Jeweller Generated ₹50 Lakh in Festival Revenue",
    challenge: [
      "Store relied only on walk-in customers during festivals",
      "No WhatsApp marketing, no online catalogue, no digital outreach",
      "Festival season revenue was unpredictable",
    ],
    strategy: [
      "Created an online product catalogue with WhatsApp inquiry system",
      "Launched pre-festival awareness campaigns on Instagram & Facebook",
      "Built a Sales Revenue Tracker to monitor daily festival sales",
      "Ran targeted local ads 3 weeks before Diwali",
    ],
    results: [
      "₹50 Lakh+ revenue generated in the festival season",
      "300+ WhatsApp inquiries from digital campaigns",
      "5x return on marketing investment",
      "Store now runs digital campaigns every festival",
    ],
  },
];

const columns = [
  {
    key: "challenge" as const,
    label: "Challenge",
    emoji: "🔴",
    gradient: "linear-gradient(135deg, #ff4d4d, #cc3333)",
    lightBg: "rgba(255,77,77,0.08)",
    border: "rgba(255,77,77,0.2)",
    textColor: "#cc3333",
  },
  {
    key: "strategy" as const,
    label: "Strategy",
    emoji: "🔵",
    gradient: "linear-gradient(135deg, #4d94ff, #0066cc)",
    lightBg: "rgba(77,148,255,0.08)",
    border: "rgba(77,148,255,0.2)",
    textColor: "#0066cc",
  },
  {
    key: "results" as const,
    label: "Results",
    emoji: "🟢",
    gradient: "linear-gradient(135deg, #00d084, #00a86b)",
    lightBg: "rgba(0,208,132,0.08)",
    border: "rgba(0,208,132,0.2)",
    textColor: "#00a86b",
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-24 sm:py-32 lg:py-40">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, #1a1a2e 0%, #2d1b4e 50%, #1a1a2e 100%)",
          }}
        />
        <div
          className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full opacity-20 animate-float"
          style={{
            background:
              "radial-gradient(circle, rgba(255,107,53,0.4), transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-[-15%] left-[-10%] w-[400px] h-[400px] rounded-full opacity-15"
          style={{
            background:
              "radial-gradient(circle, rgba(0,208,132,0.3), transparent 70%)",
            animation: "float 9s ease-in-out infinite reverse",
          }}
        />
        <div className="relative z-10 max-w-5xl mx-auto px-[5%] text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block px-5 py-2 rounded-full text-[0.72rem] tracking-[3px] uppercase font-[800] mb-6"
            style={{
              background: "rgba(255,107,53,0.15)",
              color: "#ff9a00",
              border: "1px solid rgba(255,107,53,0.3)",
            }}
          >
            Our Results
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-[900] leading-[1.1] tracking-[-1px] text-white mb-6"
          >
            Real Results. Real Businesses.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-base sm:text-lg text-[#b0b0c0] leading-relaxed max-w-3xl mx-auto font-[600]"
          >
            See how we&apos;ve helped businesses grow with websites, marketing,
            dashboards, and strategy.
          </motion.p>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{
              duration: 1,
              delay: 0.5,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="mt-8 mx-auto w-24 h-[3px] origin-center rounded-full"
            style={{
              background: "linear-gradient(90deg, #ff6b35, #ff9a00, #00d084)",
            }}
          />
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 sm:py-32 bg-warm">
        <div className="max-w-6xl mx-auto px-[5%]">
          <div className="space-y-14 sm:space-y-20">
            {caseStudies.map((cs, idx) => (
              <div
                key={idx}
                className="warm-card p-0 overflow-hidden"
              >
                {/* Card headline */}
                <div className="p-6 sm:p-10 pb-3 sm:pb-5">
                  <h3 className="text-xl sm:text-2xl font-[900] leading-tight" style={{ color: "#ff6b35" }}>
                    📈 {cs.headline}
                  </h3>
                </div>

                {/* Three columns */}
                <div className="grid grid-cols-1 md:grid-cols-3">
                  {columns.map((col) => (
                    <div
                      key={col.key}
                      className="p-6 sm:p-10 relative"
                      style={{
                        background: col.lightBg,
                        borderTop: `3px solid ${col.border}`,
                      }}
                    >
                      {/* Column header */}
                      <div className="flex items-center gap-2 mb-4">
                        <span
                          className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-[900]"
                          style={{ background: col.gradient }}
                        >
                          {col.emoji}
                        </span>
                        <span
                          className="text-[0.72rem] tracking-[2px] uppercase font-[800]"
                          style={{ color: col.textColor }}
                        >
                          {col.label}
                        </span>
                      </div>

                      {/* Items */}
                      <ul className="space-y-3">
                        {cs[col.key].map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span
                              className="mt-1 w-2 h-2 rounded-full shrink-0"
                              style={{ background: col.gradient }}
                            />
                            <span className="text-[0.85rem] text-[#444] font-[600] leading-relaxed">
                              {col.key === "results" ? `✅ ${item}` : item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 sm:py-32 bg-light">
        <div className="max-w-4xl mx-auto px-[5%] text-center">
          <SectionHeading
            title="Want Results Like These?"
            subtitle="🚀 Let's Talk"
          />
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[#666] text-base sm:text-lg font-[600] mb-8 max-w-2xl mx-auto"
          >
            Talk to us today and let&apos;s create your success story together.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/#contact" className="btn-primary text-center">
              Contact Us →
            </Link>
            <a
              href="https://wa.me/918586989832?text=Hi%2C%20I%20saw%20your%20case%20studies%20and%20I%E2%80%99d%20like%20to%20discuss%20my%20project."
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
