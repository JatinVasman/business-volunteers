"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is your motive?",
    answer:
      "Business Volunteers started with the aim to support small businesses and startups and help them grow strong. In the beginning, we worked as a hobby and did not charge anything. Now we charge a very basic and affordable amount so we can continue helping more businesses. Our pricing is simple — even a small kirana store can easily take our services.",
  },
  {
    question: "What does Business Volunteers do?",
    answer:
      "We help businesses grow online. We manage social media, create websites, run online ads, improve SEO, design creatives, and help generate leads and sales.",
  },
  {
    question: "How do you help in social media?",
    answer:
      "We create posts, reels, and graphics. We manage your pages, run ad campaigns, increase engagement, and help you get more followers and inquiries.",
  },
  {
    question: "Do you create websites?",
    answer:
      "Yes, we design simple, professional, and mobile-friendly websites that build trust and help convert visitors into customers.",
  },
  {
    question: "What are your payment terms?",
    answer:
      "We take 50% payment in advance and 50% after the work is completed.",
  },
  {
    question: "What if I don't like the work?",
    answer:
      "Customer satisfaction is important to us. If you don't love the work or in any condition feel unhappy, we will refund your amount.",
  },
  {
    question: "Who can work with Business Volunteers?",
    answer:
      "Any small business, startup, shop owner, or growing brand can work with us.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section className="relative min-h-screen py-24 sm:py-32 overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,107,53,0.06),_transparent_60%)]" />

      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <SectionHeading title="Frequently Asked Questions" subtitle="FAQs" />

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i}>
              <button
                onClick={() => toggle(i)}
                data-cursor-hover
                className="w-full text-left rounded-[12px] sm:rounded-[16px] p-4 sm:p-6 flex items-center justify-between gap-3 sm:gap-4 transition-all duration-300 bg-white"
                style={{
                  border: `2px solid ${openIndex === i ? "rgba(255,107,53,0.3)" : "rgba(0,0,0,0.08)"}`,
                  boxShadow: openIndex === i ? "0 8px 30px rgba(255,107,53,0.1)" : "none",
                }}
              >
                <span className="text-[0.88rem] sm:text-[0.95rem] font-[800] text-[#1a1a2e] pr-2 sm:pr-4 leading-[1.4]">
                  {faq.question}
                </span>
                <motion.span
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center"
                  style={{
                    background: "rgba(255,107,53,0.1)",
                    border: "1.5px solid rgba(255,107,53,0.2)",
                  }}
                >
                  <ChevronDown size={18} style={{ color: "#ff6b35" }} />
                </motion.span>
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div
                      className="px-6 py-5 text-[0.84rem] font-[600] text-[#666] leading-relaxed ml-6 mt-2"
                      style={{ borderLeft: "3px solid #ff6b35" }}
                    >
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
