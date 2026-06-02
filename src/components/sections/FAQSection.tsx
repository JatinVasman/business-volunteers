"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { HelpCircle, ArrowRight } from "lucide-react";

export default function FAQSection() {
  return (
    <section className="relative py-20 overflow-hidden bg-warm">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="warm-card p-10 sm:p-14 text-center relative overflow-hidden"
        >
          <div className="relative z-10">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
              className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
              style={{
                background: "linear-gradient(135deg, rgba(255,107,53,0.15), rgba(255,154,0,0.1))",
                border: "2px solid rgba(255,107,53,0.3)",
              }}
            >
              <HelpCircle size={28} style={{ color: "#ff6b35" }} />
            </motion.div>

            <h3 className="text-3xl sm:text-4xl font-[900] mb-4" style={{ color: "#1a1a2e" }}>
              Got Questions?{" "}
              <span className="gradient-text">We&apos;ve Got Answers</span>
            </h3>

            <p className="text-[#666] text-sm sm:text-base max-w-lg mx-auto mb-8 leading-relaxed font-[600]">
              Learn more about how we work, our pricing, and what makes Business
              Volunteers the right choice for your business. 😊
            </p>

            <Link href="/faq">
              <motion.span
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                data-cursor-hover
                className="inline-flex items-center gap-2 btn-primary text-base"
              >
                📝 View FAQs
                <ArrowRight size={18} />
              </motion.span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
