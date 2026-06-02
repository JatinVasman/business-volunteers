"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";

const features = [
  { emoji: "💰", title: "Affordable Excellence", desc: "Premium quality creative work at prices that make sense for growing businesses and startups." },
  { emoji: "❤️", title: "Passion-Driven", desc: "We treat every project as our own, putting the same energy and care into your brand as we would ours." },
  { emoji: "🛡️", title: "Reliable & Timely", desc: "We respect deadlines and deliver what we promise. Clear communication, no surprises." },
  { emoji: "🚀", title: "Growth-Focused", desc: "Every decision we make is aimed at growing your business — from strategy to execution." },
  { emoji: "🏭", title: "Industry Specialists", desc: "70+ industries served. We know the audience, language, and strategy that works for your specific sector." },
  { emoji: "🤝", title: "Long-Term Partners", desc: "We don't do one-off work. We build lasting partnerships that grow your business year after year." },
];

export default function WhyChooseUsSection() {
  return (
    <section className="relative py-20 overflow-hidden bg-fun">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <SectionHeading title="Why Choose Us" subtitle="🏆 The Difference" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="why-card group"
              data-cursor-hover
            >
              <span
                className="text-[2.2rem] mb-3 block"
                style={{ animation: "iconWiggle 3s ease-in-out infinite" }}
              >
                {f.emoji}
              </span>
              <h3 className="text-lg font-[800] mb-3 group-hover:text-[#ff6b35] transition-colors duration-300" style={{ color: "#1a1a2e" }}>
                {f.title}
              </h3>
              <p className="text-[#666] text-sm leading-relaxed font-[600]">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
