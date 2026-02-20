"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import { ArrowRight } from "lucide-react";

export default function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="about" className="relative py-24 px-4 overflow-hidden">
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green/10 to-transparent" />

      <div
        ref={containerRef}
        className="container mx-auto max-w-6xl relative z-10"
      >
        {/* Header */}
        <div className="text-center mb-16">
          <SectionHeading
            title="Who We Are"
            subtitle="About Business Volunteers"
          />
        </div>

        {/* Full-Width Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full rounded-2xl overflow-hidden border border-white/10 group mb-16"
        >
          <Image
            src="/about.webp"
            alt="Business Volunteers"
            width={1200}
            height={675}
            className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.02]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
        </motion.div>

        {/* Text Content Below */}
        <div className="space-y-8">
          <div>
            <p className="text-green text-sm font-bold tracking-widest uppercase mb-4">
              Business Volunteers
            </p>
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-white mb-6 leading-tight">
              Empowering brands with{" "}
              <span className="gradient-text">creative strategy</span> to grow
              and stand out.
            </h3>

            <div className="space-y-6 text-gray-400 leading-relaxed text-base">
              <p>
                We connect businesses with powerful advertising solutions that
                drive visibility, engagement, and results. Our team works
                closely with brands to craft impactful campaigns across digital
                platforms, branding, performance marketing, and content creation
                — helping businesses reach the right audience and create
                meaningful brand experiences.
              </p>
              <p>
                With a passion for creativity and performance, we help startups,
                local businesses, and growing companies strengthen their digital
                presence and accelerate growth. Our focus is simple: smart
                strategy, strong creativity, and measurable results — because
                every brand deserves to be seen, remembered, and trusted.
              </p>
            </div>
          </div>

          <div className="pt-2">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-bold text-sm hover:bg-green hover:shadow-[0_0_20px_rgba(0,224,90,0.4)] transition-all duration-300 group"
            >
              Contact Us
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
