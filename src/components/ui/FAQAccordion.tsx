"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { IndustryFAQ } from "@/data/industries";

interface FAQAccordionProps {
  faqs: IndustryFAQ[];
  color?: string;
}

export default function FAQAccordion({ faqs, color = "#ff6b35" }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <div
          key={i}
          className="rounded-[16px] overflow-hidden transition-all duration-300"
          style={{
            background: "#ffffff",
            border: `2px solid ${openIndex === i ? color + "40" : "rgba(0,0,0,0.08)"}`,
          }}
        >
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-center justify-between text-left px-6 py-5 gap-4 group"
            data-cursor-hover
          >
            <span className="text-[0.88rem] font-[700] text-[#1a1a2e] leading-[1.4] group-hover:text-[#ff6b35] transition-colors">
              {faq.question}
            </span>
            <motion.div
              animate={{ rotate: openIndex === i ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="shrink-0"
            >
              <ChevronDown size={18} style={{ color: openIndex === i ? color : "#999" }} />
            </motion.div>
          </button>

          <AnimatePresence initial={false}>
            {openIndex === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="overflow-hidden"
              >
                <div
                  className="px-6 pb-5 text-[0.84rem] font-[600] leading-[1.7]"
                  style={{ color: "#666", borderTop: `1px solid ${color}20` }}
                >
                  <div className="pt-4">{faq.answer}</div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
