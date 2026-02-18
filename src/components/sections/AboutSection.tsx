"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import { Palette, Globe, BarChart3, ArrowRight } from "lucide-react";

export default function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const features = [
    {
      icon: Palette,
      title: "Creative Design",
      desc: "Visual storytelling through branding, social media graphics, posters, and impactful design systems.",
    },
    {
      icon: Globe,
      title: "Web Solutions",
      desc: "Building fast, accessible, and elegant websites tailored for growing businesses.",
    },
    {
      icon: BarChart3,
      title: "Data-Driven Support",
      desc: "Leveraging analytics and visual dashboards to help businesses make smarter decisions.",
    },
  ];

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

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Column: Text Content */}
          <div className="space-y-8">
            <div>
              <p className="text-green text-sm font-bold tracking-widest uppercase mb-4">
                Business Volunteers
              </p>
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-white mb-6 leading-tight">
                Empowering businesses with{" "}
                <span className="gradient-text">expert support</span> to grow
                and flourish.
              </h3>

              <div className="space-y-6 text-gray-400 leading-relaxed text-base">
                <p>
                  We connect skilled professionals with businesses that need a
                  helping hand. Our goal is to give businesses, big or small,
                  the expert support they need to grow. Our volunteers offer
                  their time and skills in areas like graphic design, website
                  development, and data analytics — creating meaningful impact
                  together!
                </p>
                <p>
                  With over 1.5 years of combined experience, we&apos;ve helped
                  local startups, independent creators, and social ventures
                  transform their digital presence. Our passion lies in making
                  high-quality digital support accessible to all, regardless of
                  budget. Because great ideas deserve great execution!
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

          {/* Right Column: Image */}
          <div className="relative">
            {/* Static Image Placeholder - adaptable to AI image later */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 group"
            >
              <Image
                src="/about-team.webp"
                alt="Business Volunteers"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
            </motion.div>
          </div>
        </div>

        {/* Features - Horizontal Layout */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="glass-card p-6 hover:bg-white/5 transition-colors border border-white/5 rounded-xl group"
              >
                <div className="flex flex-col items-start gap-4">
                  <div className="p-3 rounded-xl bg-green/10 text-green group-hover:scale-110 transition-transform duration-300">
                    <Icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-white text-lg mb-2 group-hover:text-green transition-colors">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
