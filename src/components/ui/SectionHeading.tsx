"use client";

import { motion } from "framer-motion";

interface Props {
  title: string;
  subtitle: string;
}

export default function SectionHeading({ title, subtitle }: Props) {
  return (
    <div className="text-center mb-16">
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
        className="text-green text-sm font-semibold uppercase tracking-[0.25em] mb-3 block"
      >
        {subtitle}
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white"
      >
        {title}
      </motion.h2>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{
          duration: 0.8,
          delay: 0.3,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
        className="mt-5 mx-auto w-20 h-[2px] bg-gradient-to-r from-green to-green-light origin-center"
      />
    </div>
  );
}
