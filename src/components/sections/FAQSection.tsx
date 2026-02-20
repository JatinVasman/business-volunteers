"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { HelpCircle, ArrowRight } from "lucide-react";

export default function FAQSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green/10 to-transparent" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="glass-card p-10 sm:p-14 text-center relative overflow-hidden"
        >
          {/* background accent */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,224,90,0.05),_transparent_70%)]" />

          <div className="relative z-10">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
              className="w-16 h-16 rounded-2xl bg-green/10 border border-green/20 flex items-center justify-center mx-auto mb-6"
            >
              <HelpCircle size={28} className="text-green" />
            </motion.div>

            <h3 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
              Got Questions?{" "}
              <span className="gradient-text">We&apos;ve Got Answers</span>
            </h3>

            <p className="text-gray-400 text-sm sm:text-base max-w-lg mx-auto mb-8 leading-relaxed">
              Learn more about how we work, our pricing, and what makes Business
              Volunteers the right choice for your business.
            </p>

            <Link href="/faq">
              <motion.span
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                data-cursor-hover
                className="inline-flex items-center gap-2 px-8 py-4 bg-green text-black font-bold text-base rounded-xl hover:shadow-[0_0_40px_rgba(0,224,90,0.4)] transition-shadow duration-300"
              >
                View FAQs
                <ArrowRight size={18} />
              </motion.span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
