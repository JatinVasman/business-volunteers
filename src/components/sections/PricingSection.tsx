"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";

const pricingItems = [
  { icon: "📱", name: "Social Media Management", desc: "Instagram, Facebook, LinkedIn — strategy, content & growth", range: "₹3,500 – ₹8,500", unit: "/month" },
  { icon: "💻", name: "Website Development", desc: "Modern, fast, SEO-ready websites that convert visitors", range: "₹6,500 – ₹18,000", unit: "one-time" },
  { icon: "🔍", name: "SEO Services", desc: "Rank on Google & get free organic leads 24/7", range: "₹4,000 – ₹12,000", unit: "/month" },
  { icon: "📊", name: "Meta Ads (FB & IG)", desc: "Targeted paid campaigns that generate real leads & sales", range: "15% of Ad Spend", unit: "Min ₹3,000/mo", featured: true },
  { icon: "✏️", name: "Logo & Branding", desc: "Memorable logos & brand identities built to last", range: "₹850 – ₹3,500", unit: "one-time" },
  { icon: "🎨", name: "Graphic / Poster Design", desc: "Eye-catching social posts, banners & posters", range: "₹149 – ₹1,500", unit: "/design" },
  { icon: "🎬", name: "Video & UGC", desc: "Reels, UGC ads & brand videos that drive engagement", range: "₹1,800 – ₹5,000", unit: "/video" },
  { icon: "🤝", name: "CRM Solutions", desc: "Automate follow-ups, loyalty programs & customer journeys", range: "₹12,000 – ₹65,000", unit: "one-time" },
  { icon: "💬", name: "WhatsApp Marketing", desc: "India's most powerful channel — 90%+ open rate", range: "₹2,500 – ₹6,000", unit: "/month" },
];

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  }),
};

export default function PricingSection() {
  return (
    <section id="pricing" className="relative py-20 overflow-hidden bg-cool">
      <div className="max-w-7xl mx-auto px-[5%] relative z-10">
        <SectionHeading title="Our Pricing" subtitle="💰 Affordable Plans" />
        <p className="text-center text-[#666] text-[0.93rem] max-w-[580px] mx-auto -mt-8 mb-10 font-[600]">
          Transparent pricing — no hidden costs, no surprises! 🎉
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {pricingItems.map((item, i) => (
            <motion.div
              key={item.name}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={cardVariants}
              data-cursor-hover
              className={`price-card group relative overflow-hidden transition-all duration-500 hover:-translate-y-3 ${item.featured ? "ring-2 ring-[#ff6b35]" : ""}`}
            >
              {item.featured && (
                <div
                  className="absolute top-3 right-3 px-3 py-1 rounded-full text-[0.7rem] font-[900] text-white z-10"
                  style={{ background: "linear-gradient(135deg, #ff6b35, #ff9a00)" }}
                >
                  ⭐ Popular
                </div>
              )}
              <div className="relative z-10">
                <span className="text-[2.2rem] mb-3 block" style={{ animation: "iconWiggle 3s ease-in-out infinite" }}>
                  {item.icon}
                </span>
                <h3 className="text-[0.95rem] font-[800] mb-2 group-hover:text-[#ff6b35] transition-colors duration-300" style={{ color: "#1a1a2e" }}>
                  {item.name}
                </h3>
                <p className="text-[#666] text-[0.82rem] leading-relaxed mb-5 font-[600]">{item.desc}</p>
                <div className="w-full h-px mb-5" style={{ background: "linear-gradient(90deg, transparent, rgba(255,107,53,0.2), transparent)" }} />
                <div className="text-[0.78rem] text-[#666] font-[700]">Starting from</div>
                <div className="flex items-baseline gap-1 mt-1">
                  <span className="text-[1.6rem] font-[900] gradient-text">{item.range}</span>
                </div>
                <div className="text-[0.75rem] text-[#999] font-[700] mt-1">{item.unit}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
