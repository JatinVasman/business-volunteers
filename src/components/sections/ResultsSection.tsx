"use client";

import { motion } from "framer-motion";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import SectionHeading from "@/components/ui/SectionHeading";

const stats = [
  {
    target: 200,
    suffix: "+",
    label: "Clients Served",
    desc: "Businesses we've partnered with",
  },
  {
    target: 150,
    suffix: "+",
    label: "Projects Completed",
    desc: "Delivered with excellence",
  },
  {
    target: 100,
    suffix: "%",
    label: "Client Satisfaction",
    desc: "Happy clients who keep coming back",
  },
];

export default function ResultsSection() {
  return (
    <section id="results" className="relative py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green/10 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,224,90,0.04),_transparent_60%)]" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <SectionHeading title="Results That Speak" subtitle="Impact" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.8,
                delay: i * 0.12,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="text-center glass-card p-8 group"
            >
              <AnimatedCounter target={stat.target} suffix={stat.suffix} />
              <h3 className="font-heading text-lg font-semibold mt-4 mb-1 text-white">
                {stat.label}
              </h3>
              <p className="text-gray-600 text-sm">{stat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
