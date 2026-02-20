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
    <section className="relative min-h-screen py-32 overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(0,224,90,0.06),_transparent_60%)]" />

      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <SectionHeading title="Frequently Asked Questions" subtitle="FAQs" />

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.08,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <button
                onClick={() => toggle(i)}
                data-cursor-hover
                className={`w-full text-left glass-card p-6 flex items-center justify-between gap-4 transition-all duration-300 ${
                  openIndex === i
                    ? "border-green/30 shadow-[0_0_30px_rgba(0,224,90,0.08)]"
                    : ""
                }`}
              >
                <span className="font-heading text-lg font-semibold text-white pr-4">
                  {faq.question}
                </span>
                <motion.span
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 w-8 h-8 rounded-full bg-green/10 border border-green/20 flex items-center justify-center"
                >
                  <ChevronDown size={18} className="text-green" />
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
                    <div className="px-6 py-5 text-gray-400 text-sm leading-relaxed border-l-2 border-green/30 ml-6 mt-2">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
