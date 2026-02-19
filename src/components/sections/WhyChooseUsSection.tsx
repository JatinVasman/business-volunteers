"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { Zap, Heart, Shield, Rocket } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Affordable Excellence",
    desc: "Premium quality creative work at prices that make sense for growing businesses and startups.",
  },
  {
    icon: Heart,
    title: "Passion-Driven",
    desc: "We treat every project as our own, putting the same energy and care into your brand as we would ours.",
  },
  {
    icon: Shield,
    title: "Reliable & Timely",
    desc: "We respect deadlines and deliver what we promise. Clear communication, no surprises.",
  },
  {
    icon: Rocket,
    title: "Growth-Focused",
    desc: "Every decision we make is aimed at growing your business — from strategy to execution.",
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green/10 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <SectionHeading title="Why Choose Us" subtitle="The Difference" />

        <div className="grid sm:grid-cols-2 gap-6">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.12,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="glass-card p-8 group transition-transform duration-300 hover:-translate-y-2"
                data-cursor-hover
              >
                <div className="w-14 h-14 rounded-2xl bg-green/10 border border-green/20 flex items-center justify-center mb-5 group-hover:bg-green/20 group-hover:border-green/40 group-hover:shadow-[0_0_40px_rgba(0,224,90,0.15)] transition-all duration-500">
                  <Icon size={24} className="text-green" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-3 text-white group-hover:text-green transition-colors duration-300">
                  {f.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {f.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
