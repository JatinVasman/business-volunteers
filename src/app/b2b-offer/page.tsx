"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import TagPill from "@/components/ui/TagPill";
import { b2bCards, b2bQualifies, b2bIncluded } from "@/data/industries";

export default function B2BOfferPage() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* ── Hero ── */}
      <div
        className="relative pt-36 pb-20 px-6"
        style={{
          background: "linear-gradient(135deg, #0a0a0a, #1a0530, #0a0a0a)",
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,107,53,0.08),_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(139,92,246,0.06),_transparent_50%)]" />

        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-[6px] rounded-full text-[0.72rem] font-[800] tracking-[2px] uppercase mb-6"
              style={{
                background: "rgba(255,107,53,0.15)",
                border: "1.5px solid rgba(255,107,53,0.3)",
                color: "#ff6b35",
              }}
            >
              🤝 Exclusive B2B Offer
            </motion.span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-[900] text-white leading-[1.1] mb-5">
              Scale Your Business with{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: "linear-gradient(135deg, #ff6b35, #ff9a00, #00d084)",
                }}
              >
                Premium Digital Marketing
              </span>
            </h1>

            <p className="text-[0.95rem] font-[600] text-[#aaa] max-w-2xl mx-auto leading-[1.8] mb-8">
              Get enterprise-grade digital marketing at startup-friendly prices.
              Our B2B packages are designed for businesses ready to invest in sustainable,
              long-term growth.
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              <TagPill label="💰 Save up to ₹20,000" color="#00d084" size="md" />
              <TagPill label="🚀 Premium Quality" color="#ff6b35" size="md" />
              <TagPill label="📊 Measurable ROI" color="#8b5cf6" size="md" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Savings Calculator Cards ── */}
      <div className="py-20 px-6" style={{ background: "linear-gradient(180deg, #fff8f0, #ffffff)" }}>
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-[0.72rem] tracking-[3px] uppercase font-[800] mb-3 block" style={{ color: "#ff6b35" }}>
              💎 Choose Your Package
            </span>
            <h2 className="text-3xl sm:text-4xl font-[900] text-[#1a1a2e]">
              B2B Partnership Packages
            </h2>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {b2bCards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className={`relative overflow-hidden rounded-[22px] transition-all duration-400 hover:translate-y-[-8px] hover:shadow-[0_25px_60px_rgba(255,107,53,0.2)] ${
                  i === 1 ? "ring-2 ring-[#ff6b35] sm:scale-[1.02]" : ""
                }`}
                style={{
                  background: "#ffffff",
                  border: "2px solid rgba(0,0,0,0.08)",
                }}
              >
                {/* Top gradient */}
                <div
                  className="h-[5px]"
                  style={{
                    background:
                      i === 0
                        ? "linear-gradient(90deg, #ff6b35, #ff9a00)"
                        : i === 1
                        ? "linear-gradient(90deg, #ff6b35, #ff9a00, #00d084)"
                        : "linear-gradient(90deg, #8b5cf6, #ff6b35, #ff9a00)",
                  }}
                />

                {/* Popular badge */}
                {i === 1 && (
                  <div className="absolute top-4 right-4">
                    <span
                      className="text-[0.65rem] font-[800] tracking-[1px] uppercase px-3 py-1 rounded-full text-white"
                      style={{ background: "linear-gradient(135deg, #ff6b35, #ff9a00)" }}
                    >
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="p-7">
                  <h3 className="text-[1.1rem] font-[900] text-[#1a1a2e] mb-4">{card.title}</h3>

                  {/* Pricing */}
                  <div className="mb-5">
                    <span className="text-[0.85rem] font-[600] text-[#999] line-through mr-2">
                      {card.originalPrice}
                    </span>
                    <div className="text-3xl font-[900] text-[#1a1a2e]">{card.discountedPrice}</div>
                    <div
                      className="inline-flex items-center gap-1 mt-2 px-3 py-1 rounded-full text-[0.72rem] font-[800]"
                      style={{ background: "#00d08415", color: "#00d084", border: "1.5px solid #00d08430" }}
                    >
                      💰 You Save {card.savings}
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-6">
                    {card.features.map((f) => (
                      <li key={f} className="flex items-start gap-3">
                        <Check size={16} className="text-[#00d084] mt-[2px] shrink-0" />
                        <span className="text-[0.82rem] font-[600] text-[#666] leading-[1.5]">{f}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <a
                    href={`https://wa.me/918586989832?text=Hi%20BV!%20I'm%20interested%20in%20the%20${encodeURIComponent(card.title)}%20B2B%20package.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full block text-center py-3 rounded-[14px] text-[0.85rem] font-[800] transition-all duration-300 hover:translate-y-[-2px] ${
                      i === 1
                        ? "text-white"
                        : "text-[#ff6b35] hover:text-white"
                    }`}
                    style={{
                      background: i === 1
                        ? "linear-gradient(135deg, #ff6b35, #ff9a00)"
                        : "transparent",
                      border: i === 1 ? "none" : "2px solid #ff6b35",
                      boxShadow: i === 1 ? "0 4px 15px rgba(255,107,53,0.3)" : "none",
                    }}
                    onMouseEnter={(e) => {
                      if (i !== 1) {
                        (e.target as HTMLElement).style.background = "linear-gradient(135deg, #ff6b35, #ff9a00)";
                        (e.target as HTMLElement).style.borderColor = "transparent";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (i !== 1) {
                        (e.target as HTMLElement).style.background = "transparent";
                        (e.target as HTMLElement).style.borderColor = "#ff6b35";
                        (e.target as HTMLElement).style.color = "#ff6b35";
                      }
                    }}
                    data-cursor-hover
                  >
                    Get Started <ArrowRight size={16} className="inline ml-1" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Who Qualifies ── */}
      <div className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-12 sm:grid-cols-2">
            {/* Left: Who Qualifies */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-[0.72rem] tracking-[3px] uppercase font-[800] mb-4 block" style={{ color: "#ff6b35" }}>
                ✅ Who Qualifies
              </span>
              <h2 className="text-2xl sm:text-3xl font-[900] text-[#1a1a2e] mb-6">
                Is This Right for Your Business?
              </h2>
              <ul className="space-y-4">
                {b2bQualifies.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div
                      className="w-6 h-6 rounded-full grid place-items-center shrink-0 mt-[2px]"
                      style={{ background: "#00d08420" }}
                    >
                      <Check size={14} className="text-[#00d084]" />
                    </div>
                    <span className="text-[0.88rem] font-[600] text-[#555] leading-[1.6]">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Right: What's Included */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-[0.72rem] tracking-[3px] uppercase font-[800] mb-4 block" style={{ color: "#ff6b35" }}>
                📦 What&apos;s Included
              </span>
              <h2 className="text-2xl sm:text-3xl font-[900] text-[#1a1a2e] mb-6">
                Full-Service Digital Marketing
              </h2>
              <div className="flex flex-wrap gap-2">
                {b2bIncluded.map((item) => (
                  <TagPill key={item} label={item} color="#ff6b35" size="md" />
                ))}
              </div>
              <p className="text-[0.84rem] font-[600] text-[#888] mt-5 leading-[1.7]">
                Every package is customized to your business goals.
                Our team works as an extension of yours — dedicated, responsive, and results-focused.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── Final CTA ── */}
      <div className="py-20 px-6" style={{ background: "linear-gradient(135deg, #1a1a2e, #2d1b4e)" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="text-5xl mb-4">🚀</div>
          <h2 className="text-3xl sm:text-4xl font-[900] text-white mb-4">
            Ready to Partner with Us?
          </h2>
          <p className="text-[0.92rem] font-[600] text-[#bbb] mb-8 leading-[1.7] max-w-xl mx-auto">
            Join 2,193+ businesses that trust Business Volunteers. Let&apos;s discuss your B2B
            partnership and create a growth strategy that delivers real results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/918586989832?text=Hi%20BV!%20I'm%20interested%20in%20your%20B2B%20partnership%20offer."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-base sm:text-lg !px-6 sm:!px-8 !py-3 sm:!py-4"
              data-cursor-hover
            >
              💬 Start Your Partnership
            </a>
            <a
              href="/#contact"
              className="inline-block px-6 sm:px-8 py-3 sm:py-4 rounded-[30px] text-base sm:text-lg font-[900] transition-all duration-300 hover:translate-y-[-4px] hover:scale-[1.05]"
              style={{
                border: "2.5px solid rgba(255,255,255,0.4)",
                color: "#fff",
                background: "rgba(255,255,255,0.1)",
              }}
              data-cursor-hover
            >
              📞 Schedule a Call
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
