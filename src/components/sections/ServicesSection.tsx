"use client";

import { useRef, useEffect } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  { icon: "📱", name: "Social Media Management", tagline: "Grow on Instagram, Facebook, LinkedIn & more! 🚀", range: "₹3,500 – ₹8,500/mo" },
  { icon: "💻", name: "Website Development", tagline: "Modern, fast, SEO-ready websites that convert! ⚡", range: "₹6,500 – ₹18,000" },
  { icon: "🔍", name: "SEO Services", tagline: "Rank on Google & get organic leads 24/7! 📈", range: "₹4,000 – ₹12,000/mo" },
  { icon: "📊", name: "Meta Ads (FB & IG)", tagline: "Targeted ads that generate real leads & sales! 🎯", range: "15% of Ad Spend (Min ₹3,000)" },
  { icon: "✏️", name: "Logo & Branding", tagline: "Memorable logos & brand identities built to last! 🎨", range: "₹850 – ₹3,500" },
  { icon: "🎨", name: "Graphic & Poster Design", tagline: "Eye-catching graphics that make you stand out! ✨", range: "₹149 – ₹1,500/design" },
  { icon: "🎬", name: "Video & UGC Production", tagline: "Reels, UGC ads & brand videos that drive engagement! 🎥", range: "₹1,800 – ₹5,000/video" },
  { icon: "🤝", name: "CRM Solutions", tagline: "Automate follow-ups, loyalty programs & customer journeys! 🔄", range: "₹12,000 – ₹65,000" },
  { icon: "💬", name: "WhatsApp Marketing", tagline: "India's most powerful channel — 90%+ open rate! 📱", range: "₹2,500 – ₹6,000/mo" },
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
    <section id="services" className="relative py-20 overflow-hidden bg-warm">
      <div className="max-w-7xl mx-auto px-[5%] relative z-10">
        <SectionHeading title={`Our \u200BCore Services`} subtitle="⚡ What We Deliver" />
        <p className="text-center text-[#666] text-[0.93rem] max-w-[580px] mx-auto -mt-8 mb-10 font-[600]">
          Everything your brand needs to grow — under one roof! 🎉
        </p>

        <div
          ref={gridRef}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {services.map((s) => (
            <div
              key={s.name}
              className="service-card svc-card p-7 group"
              data-cursor-hover
            >
              <span
                className="text-[2.2rem] mb-[14px] block"
                style={{ animation: "iconWiggle 3s ease-in-out infinite" }}
              >
                {s.icon}
              </span>
              <h3 className="text-[0.95rem] font-[800] mb-[7px]" style={{ color: "#1a1a2e" }}>
                {s.name}
              </h3>
              <p className="text-[0.82rem] text-[#666] leading-[1.6] font-[600]">
                {s.tagline}
              </p>
              <div className="mt-3 text-[0.82rem] font-[800]" style={{ color: "#ff6b35" }}>
                {s.range}
              </div>
              <a
                href="#contact"
                className="mt-4 inline-flex items-center gap-2 px-4 py-[7px] rounded-[20px] text-[0.75rem] font-[800] text-white transition-all duration-300 hover:scale-[1.05] hover:shadow-[0_6px_20px_rgba(255,107,53,0.35)]"
                style={{ background: "linear-gradient(135deg, #ff6b35, #ff9a00)" }}
                data-cursor-hover
              >
                📩 Get a Quote
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
