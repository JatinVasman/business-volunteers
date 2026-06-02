"use client";

import { useRef, useEffect } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  { number: "01", title: "Discovery", desc: "Understanding your brand, audience, and goals through in-depth research and analysis.", emoji: "🔍" },
  { number: "02", title: "Strategy", desc: "Crafting a data-driven plan that aligns creative execution with your business objectives.", emoji: "📋" },
  { number: "03", title: "Design", desc: "Creating stunning visuals and experiences that bring the strategy to life.", emoji: "🎨" },
  { number: "04", title: "Execution", desc: "Delivering polished final products with attention to every detail and pixel.", emoji: "🚀" },
  { number: "05", title: "Growth", desc: "Measuring results and iterating to ensure continuous improvement and ROI.", emoji: "📈" },
];

export default function ProcessSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = containerRef.current?.querySelectorAll(".process-step");
      if (!items) return;

      items.forEach((item) => {
        gsap.fromTo(item, { opacity: 0, y: 60, scale: 0.95 }, {
          opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: item, start: "top 85%", once: true },
        });
      });

      const line = containerRef.current?.querySelector(".process-line");
      if (line) {
        gsap.fromTo(line, { scaleY: 0 }, {
          scaleY: 1, ease: "none",
          scrollTrigger: { trigger: containerRef.current, start: "top 70%", end: "bottom 50%", scrub: 1 },
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="process" className="relative py-20 overflow-hidden bg-cool">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <SectionHeading title="How We Work" subtitle="📋 Our Process" />

        <div ref={containerRef} className="relative">
          <div className="process-line absolute left-8 md:left-1/2 top-0 bottom-0 w-[3px] rounded-full origin-top hidden sm:block"
            style={{ background: "linear-gradient(to bottom, #ff6b35, #ff9a00, rgba(255,107,53,0.1))" }} />

          <div className="space-y-12">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className={`process-step relative flex items-start gap-6 md:gap-12 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="relative z-10 shrink-0 sm:block md:absolute md:left-1/2 md:-translate-x-1/2">
                  <div
                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center"
                    style={{
                      background: "linear-gradient(135deg, rgba(255,107,53,0.15), rgba(255,154,0,0.1))",
                      border: "2px solid rgba(255,107,53,0.3)",
                      boxShadow: "0 8px 30px rgba(255,107,53,0.15)",
                    }}
                  >
                    <span className="text-base sm:text-xl font-[900]" style={{ color: "#ff6b35" }}>{step.number}</span>
                  </div>
                </div>

                <div className={`flex-1 ${i % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                  <div className="warm-card p-6 group">
                    <div className={`flex items-center gap-3 mb-3 ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                      <span className="text-2xl">{step.emoji}</span>
                      <h3 className="text-xl font-[800] group-hover:text-[#ff6b35] transition-colors duration-300" style={{ color: "#1a1a2e" }}>
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-[#666] text-sm leading-relaxed font-[600]">{step.desc}</p>
                  </div>
                </div>

                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
