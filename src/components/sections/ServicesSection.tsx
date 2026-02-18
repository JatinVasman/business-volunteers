"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";

import SectionHeading from "@/components/ui/SectionHeading";
import {
  Share2,
  Globe,
  BarChart3,
  Palette,
  Presentation,
  PenTool,
  Video,
  BookOpen,
  MessageCircle,
  Search,
  Smartphone,
  TrendingUp,
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: Share2,
    title: "Social Media Management",
    desc: "Strategic content creation and community engagement to grow your brand presence across all platforms.",
  },
  {
    icon: Globe,
    title: "Website Development",
    desc: "Modern, responsive websites built for performance and conversions with cutting-edge technology.",
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    desc: "Actionable insights from your data to drive smarter business decisions and optimize campaigns.",
  },
  {
    icon: Palette,
    title: "Graphic & Poster Design",
    desc: "Eye-catching visual designs that communicate your brand message with clarity and impact.",
  },
  {
    icon: Presentation,
    title: "Presentation Design",
    desc: "Professional pitch decks and presentations that captivate audiences and close deals.",
  },
  {
    icon: PenTool,
    title: "Logo design",
    desc: "Crafting memorable logos that capture your brand's essence and make a lasting first impression.",
  },
  {
    icon: Video,
    title: "Video Editing",
    desc: "Engaging video content from reels to corporate films, edited with a cinematic touch.",
  },
  {
    icon: Smartphone,
    title: "UGC Videos",
    desc: "Authentic user-generated style videos that resonate with your audience and drive engagement.",
  },
  {
    icon: TrendingUp,
    title: "CRM",
    desc: "Streamline customer relationships with automated campaigns, loyalty programs, and real-time analytics dashboards.",
  },
  {
    icon: BookOpen,
    title: "Brochure Design",
    desc: "Beautifully crafted brochures that tell your brand story in print and digital formats.",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Business Setup",
    desc: "Professional WhatsApp Business integration for seamless customer communication.",
  },
  {
    icon: Search,
    title: "Google Business Setup",
    desc: "Optimized Google Business profiles to boost local visibility and attract nearby customers.",
  },
];

export default function ServicesSection() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gridRef.current?.querySelectorAll(".service-card");
      if (!cards) return;

      gsap.fromTo(
        cards,
        { opacity: 0, y: 80, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.06,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 85%",
            once: true,
          },
        },
      );
    }, gridRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="services" className="relative py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeading title="What We Deliver" subtitle="Our Services" />

        <div
          ref={gridRef}
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        >
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                whileHover={{ y: -10, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="service-card glass-card p-6 group"
                data-cursor-hover
              >
                <div className="w-12 h-12 rounded-xl bg-green/10 border border-green/10 flex items-center justify-center mb-4 group-hover:bg-green/20 group-hover:border-green/30 group-hover:shadow-[0_0_25px_rgba(0,224,90,0.15)] transition-all duration-500">
                  <Icon size={22} className="text-green" />
                </div>
                <h3 className="font-heading text-base font-semibold mb-2 text-white group-hover:text-green transition-colors duration-300">
                  {s.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {s.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
