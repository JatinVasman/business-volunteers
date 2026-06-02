"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import TagPill from "@/components/ui/TagPill";
import type { IndustryBlogArticle } from "@/data/industries";

interface IndustryBlogContentProps {
  article: IndustryBlogArticle;
  industryName: string;
  industrySlug: string;
  industryColor: string;
}

export default function IndustryBlogContent({
  article,
  industryName,
  industrySlug,
  industryColor,
}: IndustryBlogContentProps) {
  return (
    <div className="max-w-3xl mx-auto px-6 relative z-10">
      {/* Back */}
      <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
        <Link
          href={`/industries/${industrySlug}`}
          className="inline-flex items-center gap-2 text-[0.82rem] font-[700] text-[#ff6b35] hover:gap-3 transition-all duration-300 mb-10"
          data-cursor-hover
        >
          <ArrowLeft size={16} /> Back to {industryName}
        </Link>
      </motion.div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="mb-10"
      >
        <div className="flex flex-wrap gap-2 mb-4">
          <TagPill label={article.tag} color={industryColor} size="md" />
          <TagPill label={industryName} color="#ff6b35" size="md" />
        </div>
        <h1 className="text-3xl sm:text-4xl font-[900] text-[#1a1a2e] leading-[1.2] mb-3">
          {article.title}
        </h1>
        <div
          className="w-16 h-[3px] rounded-full"
          style={{ background: `linear-gradient(90deg, ${industryColor}, #ff9a00)` }}
        />
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="space-y-5 mb-14"
      >
        {article.content.map((para, i) => (
          <p
            key={i}
            className="text-[0.92rem] font-[600] text-[#555] leading-[1.85]"
          >
            {para}
          </p>
        ))}
      </motion.div>

      {/* CTA Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="p-8 rounded-[22px] relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #1a1a2e, #2d1b4e)",
          border: `2px solid ${industryColor}30`,
        }}
      >
        <div
          className="absolute top-0 left-0 right-0 h-[4px]"
          style={{ background: `linear-gradient(90deg, ${industryColor}, #ff9a00, #00d084)` }}
        />
        <h3 className="text-xl sm:text-2xl font-[900] text-white mb-2">
          Need {industryName} Digital Marketing?
        </h3>
        <p className="text-[0.85rem] font-[600] text-[#ccc] mb-5 leading-[1.7]">
          Business Volunteers specializes in {industryName.toLowerCase()} digital marketing.
          Let&apos;s create a strategy tailored to your business.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="https://wa.me/918586989832?text=Hi%20BV!%20I%20need%20digital%20marketing%20for%20my%20business."
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
            📞 Contact Us
          </a>
        </div>
      </motion.div>
    </div>
  );
}
