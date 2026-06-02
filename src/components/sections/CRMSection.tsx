"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import { Gift, UserCheck, PartyPopper, BarChart3 } from "lucide-react";

const crmCards = [
  { image: "/CRM/1.webp", title: "Collect Customer Data", desc: "Gather customer details, birthdays, anniversaries & preferences at every touchpoint.", accent: "#ff6b35" },
  { image: "/CRM/2.webp", title: "Segment & Analyze", desc: "Automatically categorize customers by behavior, visit frequency & spending patterns.", accent: "#00c9ff" },
  { image: "/CRM/3.webp", title: "Automate Campaigns", desc: "Trigger personalized messages, offers & follow-ups based on customer activity & events.", accent: "#ffd700" },
  { image: "/CRM/4.webp", title: "Track & Optimize", desc: "Monitor campaign performance, redemption rates & ROI with real-time analytics dashboards.", accent: "#8b5cf6" },
];

const crmServices = [
  { icon: Gift, title: "Automated Birthday & Anniversary Campaigns", desc: "Automatically send personalized wishes and offers to customers on special occasions to improve engagement and loyalty.", color: "from-[#ff6b35]/20 to-[#ff9a00]/20", border: "border-[#ff6b35]/20" },
  { icon: UserCheck, title: "Smart Follow-up Campaigns", subtitle: "Dormant • Missing • Lost Customers", desc: "Identify inactive customers and re-engage them through intelligent follow-up campaigns to increase retention and conversions.", color: "from-[#00c9ff]/20 to-[#0099e6]/20", border: "border-[#00c9ff]/20" },
  { icon: PartyPopper, title: "Festival Campaigns with Coupon Redemption", desc: "Launch seasonal promotions with trackable coupon systems to drive sales during festive periods and special events.", color: "from-[#ffd700]/20 to-[#ff9a00]/20", border: "border-[#ffd700]/20" },
  { icon: BarChart3, title: "Customer Segmentation, History & Analytics", desc: "Understand customer behavior with detailed segmentation, purchase history, and performance analytics for better decision-making.", color: "from-[#8b5cf6]/20 to-[#ff4da6]/20", border: "border-[#8b5cf6]/20" },
];

export default function CRMSection({ hideHeader }: { hideHeader?: boolean }) {
  return (
    <section id={hideHeader ? undefined : "crm"} className={`relative ${hideHeader ? "py-4" : "py-20"} overflow-hidden bg-light`}>
      <div className="max-w-7xl mx-auto px-[5%] relative z-10">
        
        {/* Intro */}
        {!hideHeader && (
          <div className="mb-16">
             <SectionHeading title="Smart CRM Solutions" subtitle="🤝 Customer Relationships" />
             <p className="text-center text-[#666] text-base max-w-2xl mx-auto -mt-8 font-[600]">
               Automate follow-ups, loyalty programs & customer journeys! Never lose a lead again. 🔄
             </p>
          </div>
        )}

        {/* Feature Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {crmCards.map((card, i) => (
            <motion.div key={card.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
              className="crm-card rounded-2xl overflow-hidden group cursor-pointer bg-white shadow-sm border-2 border-transparent hover:border-[rgba(255,107,53,0.3)] hover:shadow-[0_15px_40px_rgba(255,107,53,0.15)] transition-all duration-300">
              <div className="relative w-full h-48 overflow-hidden">
                <Image src={card.image} alt={card.title} fill sizes="(max-width: 768px) 100vw, 25vw" className="object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-30" />
                <div className="absolute top-4 left-4 w-9 h-9 rounded-full flex items-center justify-center text-xs font-[900] text-white" style={{ background: `${card.accent}60`, border: "2px solid rgba(255,255,255,0.3)" }}>
                  {String(i + 1).padStart(2, "0")}
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-base font-[800] mb-2 leading-snug group-hover:text-[#ff6b35] transition-colors duration-300" style={{ color: "#1a1a2e" }}>{card.title}</h3>
                <p className="text-[#666] text-sm leading-relaxed font-[600]">{card.desc}</p>
              </div>
              <div className="h-[3px] w-0 group-hover:w-full transition-all duration-500 mx-5 mb-3 rounded-full" style={{ background: card.accent }} />
            </motion.div>
          ))}
        </div>

        {/* Services List */}
        <div className="max-w-6xl mx-auto bg-warm rounded-3xl p-8 md:p-12 border-2 border-[rgba(255,107,53,0.15)]">
          <h3 className="text-2xl sm:text-3xl font-[900] text-center mb-4 text-[#1a1a2e]">
            Our CRM Services 🤝
          </h3>
          <p className="text-[#666] text-center text-sm max-w-xl mx-auto mb-12 font-[600]">
            Everything you need to build lasting customer relationships and drive repeat business. 🎉
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            {crmServices.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="bg-white rounded-2xl p-6 group cursor-pointer border-2 border-[rgba(255,107,53,0.1)] hover:border-[#ff6b35] hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-4 mb-3">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${s.color} border ${s.border} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500 mt-1`}>
                      <Icon size={22} className="text-[#ff6b35]" />
                    </div>
                    <div>
                      <h4 className="text-base font-[800] group-hover:text-[#ff6b35] transition-colors duration-300 text-[#1a1a2e]">
                        {s.title}
                      </h4>
                      {s.subtitle && (
                        <span className="text-[10px] text-[#999] font-[700] tracking-wide uppercase">{s.subtitle}</span>
                      )}
                    </div>
                  </div>
                  <p className="text-[#666] text-sm leading-relaxed font-[600] pl-0 sm:pl-16">{s.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
