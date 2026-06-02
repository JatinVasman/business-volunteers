"use client";

import { motion } from "framer-motion";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import SectionHeading from "@/components/ui/SectionHeading";

const stats = [
  { target: 2193, suffix: "+", label: "Happy Clients 😊", desc: "Businesses we've partnered with" },
  { target: 70, suffix: "+", label: "Industries Served 🏭", desc: "Different sectors we cover" },
  { target: 500, suffix: "+", label: "Business Types 💼", desc: "Unique business categories" },
];

export default function ResultsSection() {
  return (
    <section id="results" className="relative py-20 overflow-hidden bg-warm">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <SectionHeading title="Results That Speak" subtitle="📈 Impact" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-center warm-card p-8 group"
            >
              <AnimatedCounter target={stat.target} suffix={stat.suffix} />
              <h3 className="text-lg font-[800] mt-4 mb-1" style={{ color: "#1a1a2e" }}>{stat.label}</h3>
              <p className="text-[#666] text-sm font-[600]">{stat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
