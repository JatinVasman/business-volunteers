"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  Share2,
  Globe,
  Smartphone,
  PenTool,
  Palette,
} from "lucide-react";

const pricingItems = [
  {
    icon: Share2,
    title: "Social Media Handling",
    description: "15 Posts + 5 Reels per month — strategic content to grow your brand.",
    price: "3,500",
  },
  {
    icon: Globe,
    title: "Website Design",
    description: "Modern, responsive websites built for performance and conversions.",
    price: "6,500",
  },
  {
    icon: Smartphone,
    title: "UGC Video",
    description: "Authentic user-generated style videos that drive real engagement.",
    price: "1,800",
  },
  {
    icon: PenTool,
    title: "Logo Design",
    description: "Memorable logos that capture your brand's essence at first glance.",
    price: "850",
  },
  {
    icon: Palette,
    title: "Poster Design",
    description: "Eye-catching posters that communicate your message with impact.",
    price: "149",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  }),
};

export default function PricingSection() {
  return (
    <section id="pricing" className="relative py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green/10 to-transparent" />

      {/* subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-green/[0.03] blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeading title="Our Pricing" subtitle="Affordable Plans" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          {pricingItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={cardVariants}
                data-cursor-hover
                className="pricing-card glass-card p-8 group relative overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:border-green/20 hover:shadow-[0_0_60px_rgba(0,224,90,0.08)]"
              >
                {/* hover glow accent */}
                <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-green/0 group-hover:bg-green/[0.06] blur-[60px] transition-all duration-700 pointer-events-none" />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-green/10 border border-green/10 flex items-center justify-center mb-6 group-hover:bg-green/20 group-hover:border-green/30 group-hover:shadow-[0_0_30px_rgba(0,224,90,0.15)] transition-all duration-500">
                    <Icon size={24} className="text-green" />
                  </div>

                  {/* Title */}
                  <h3 className="font-heading text-xl font-bold text-white mb-2 group-hover:text-green transition-colors duration-300">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* Divider */}
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6" />

                  {/* Price */}
                  <div className="flex items-baseline gap-1">
                    <span className="text-gray-400 text-sm font-medium">
                      Starting from
                    </span>
                  </div>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="font-heading text-3xl font-bold gradient-text">
                      ₹{item.price}
                    </span>
                    <span className="text-gray-500 text-sm">/-</span>
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
