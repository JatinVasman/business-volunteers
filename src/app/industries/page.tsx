"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import IndustryCard from "@/components/ui/IndustryCard";
import { dedicatedIndustries } from "@/data/industries";

export default function IndustriesPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredDedicated = useMemo(() => {
    if (!searchQuery.trim()) return dedicatedIndustries;
    const q = searchQuery.toLowerCase();
    return dedicatedIndustries.filter(
      (ind) =>
        ind.name.toLowerCase().includes(q) ||
        ind.heroDescription.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  const totalResults = filteredDedicated.length;

  return (
    <section className="relative min-h-screen py-24 sm:py-32 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(255,107,53,0.06),_transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(0,208,132,0.04),_transparent_60%)]" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <SectionHeading title="Industries We Serve" subtitle="44+ Sectors Covered" />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center text-[0.9rem] font-[600] text-[#888] max-w-2xl mx-auto mb-10 leading-[1.7]"
        >
          From Healthcare to E-commerce, we deliver industry-specific digital marketing
          strategies that drive real results. Find your sector below.
        </motion.p>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-xl mx-auto mb-14"
        >
          <div className="relative w-full">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#ff6b35] opacity-60 pointer-events-none"
            />
            <input
              type="text"
              placeholder="Search industries..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#fff8f0] text-[#1a1a2e] text-[0.88rem] font-[600] pl-14 pr-14 py-[14px] rounded-[25px] outline-none transition-all duration-200 text-center"
              style={{
                border: "2px solid rgba(255,107,53,0.2)",
              }}
              onFocus={(e) => {
                e.target.style.borderColor = "#ff6b35";
                e.target.style.boxShadow = "0 0 0 4px rgba(255,107,53,0.1)";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "rgba(255,107,53,0.2)";
                e.target.style.boxShadow = "none";
              }}
              id="industry-search"
            />
          </div>
          {searchQuery && (
            <p className="text-center text-[0.78rem] font-[600] text-[#999] mt-3">
              {totalResults} {totalResults === 1 ? "result" : "results"} found
            </p>
          )}
        </motion.div>

        {/* Dedicated Industries */}
        {filteredDedicated.length > 0 && (
          <div className="mb-16">
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-[0.72rem] tracking-[3px] uppercase font-[800] mb-6"
              style={{ color: "#ff6b35" }}
            >
              ⭐ All Industries
            </motion.h3>
            <div className="grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {filteredDedicated.map((ind, i) => (
                <IndustryCard
                  key={ind.slug}
                  name={ind.name}
                  icon={ind.icon}
                  color={ind.color}
                  slug={ind.slug}
                  description={ind.heroDescription}
                  variant="dedicated"
                  marketSize={ind.marketSize}
                  growthRate={ind.growthRate}
                  index={i}
                />
              ))}
            </div>
          </div>
        )}



        {/* No results */}
        {totalResults === 0 && searchQuery && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="text-5xl mb-4">🔍</div>
            <h3 className="text-xl font-[800] text-[#1a1a2e] mb-2">
              No industries found
            </h3>
            <p className="text-[0.88rem] font-[600] text-[#888]">
              Try searching with different keywords, or{" "}
              <button
                onClick={() => setSearchQuery("")}
                className="text-[#ff6b35] hover:underline font-[700]"
              >
                browse all industries
              </button>
            </p>
          </motion.div>
        )}

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-14 sm:mt-20 text-center p-6 sm:p-10 rounded-[22px] relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #1a1a2e, #2d1b4e)",
            border: "2px solid rgba(255,107,53,0.2)",
          }}
        >
          <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-[#ff6b35] via-[#ff9a00] to-[#00d084]" />
          <h3 className="text-2xl sm:text-3xl font-[900] text-white mb-3">
            Don&apos;t See Your Industry?
          </h3>
          <p className="text-[0.88rem] font-[600] text-[#ccc] mb-6 max-w-lg mx-auto leading-[1.7]">
            We&apos;ve worked with 70+ industries. Contact us for a customized digital
            marketing strategy tailored to your specific sector.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://wa.me/918586989832?text=Hi%20BV!%20I%20need%20digital%20marketing%20for%20my%20industry."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              data-cursor-hover
            >
              💬 WhatsApp Us
            </a>
            <a
              href="/#contact"
              className="inline-block px-[30px] py-[14px] rounded-[30px] text-[0.9rem] font-[900] transition-all duration-300 hover:translate-y-[-4px] hover:scale-[1.05]"
              style={{
                border: "2.5px solid rgba(255,255,255,0.4)",
                color: "#fff",
                background: "rgba(255,255,255,0.1)",
              }}
              data-cursor-hover
            >
              📞 Book a Call
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
