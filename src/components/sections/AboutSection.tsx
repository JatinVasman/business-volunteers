"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import { ArrowRight } from "lucide-react";

export default function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="about" className="relative py-24 px-4 overflow-hidden bg-warm">
      <div
        ref={containerRef}
        className="container mx-auto max-w-6xl relative z-10"
      >
        <div className="text-center mb-16">
          <SectionHeading
            title="Who We Are"
            subtitle="👋 About Business Volunteers"
          />
        </div>

        {/* Full-Width Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full rounded-2xl overflow-hidden group mb-16"
          style={{ border: "2px solid rgba(255,107,53,0.2)" }}
        >
          <Image
            src="/about.webp"
            alt="Business Volunteers"
            width={1200}
            height={675}
            className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.02]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-40" />
        </motion.div>

        {/* Text Content */}
        <div className="space-y-8 max-w-[820px]">
          <div>
            <p className="text-[0.72rem] tracking-[3px] uppercase font-[800] mb-4" style={{ color: "#ff6b35" }}>
              Business Volunteers
            </p>
            <h3 className="text-2xl md:text-3xl font-[900] mb-6 leading-tight" style={{ color: "#1a1a2e" }}>
              Empowering 2,193+ Indian Brands with{" "}
              <span className="gradient-text">Creative Strategy</span>
            </h3>

            <div className="space-y-4 text-[#666] leading-relaxed text-[0.93rem] font-[600]">
              <p>
                Business Volunteers Advertising Agency is India&apos;s most versatile digital
                marketing partner! 🎉 We&apos;ve served 2,193+ businesses across 70+ industries —
                and we treat every new client with the same energy and passion as our very first.
                Located in Noida Sec 62, Delhi NCR, we&apos;re a pan-India agency.
              </p>
              <p>
                Every industry has its own audience, language, and challenges — that&apos;s why
                we&apos;ve built specialized strategies that work for each sector, not a copy-paste
                template. From ₹849 logos to ₹65,000 CRM systems, we have something for every
                stage of growth. 🚀
              </p>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {[
              { t: "📍 Noida Sec 62", c: "" },
              { t: "💼 B2B & B2C", c: "b" },
              { t: "🏆 70+ Industries", c: "g" },
              { t: "🇮🇳 Pan-India", c: "" },
              { t: "4.9★ Google", c: "b" },
              { t: "2,193+ Clients", c: "" },
            ].map((tag) => (
              <span
                key={tag.t}
                className="px-[14px] py-[5px] rounded-2xl text-[0.74rem] font-[800]"
                style={{
                  background:
                    tag.c === "b"
                      ? "rgba(0,201,255,0.1)"
                      : tag.c === "g"
                        ? "rgba(0,208,132,0.1)"
                        : "rgba(255,107,53,0.1)",
                  border: `2px solid ${
                    tag.c === "b"
                      ? "rgba(0,201,255,0.3)"
                      : tag.c === "g"
                        ? "rgba(0,208,132,0.3)"
                        : "rgba(255,107,53,0.25)"
                  }`,
                  color:
                    tag.c === "b" ? "#0099e6" : tag.c === "g" ? "#00a86b" : "#ff6b35",
                }}
              >
                {tag.t}
              </span>
            ))}
          </div>

          <div className="pt-2">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 btn-primary group"
            >
              🚀 Start a Project
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
