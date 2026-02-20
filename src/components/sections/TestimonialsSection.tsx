"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rohit Sharma",
    role: "Owner, Taste of Punjab",
    category: "Social Media",
    stars: 5,
    text: "Honestly I was not sure about hiring anyone for social media because I thought nobody would understand a food business like mine. But these guys surprised me. The reels they made for my restaurant started getting actual walk-ins. One reel crossed 50k views and that week we had more dine-ins than the whole month before. Very happy with their work.",
  },
  {
    name: "Priya Malhotra",
    role: "Founder, Priya's Boutique",
    category: "Social Media",
    stars: 5,
    text: "Before working with Business Volunteers my Instagram was just sitting there with random posts. They gave it a proper look, started posting consistently, and within 2 months I started getting DMs from customers asking for prices. The content they create actually matches my brand. Plus they are very patient with changes which I really appreciate.",
  },
  {
    name: "Ankit Verma",
    role: "Director, FitZone Gym",
    category: "Social Media",
    stars: 5,
    text: "I tried running ads on my own and wasted almost 15-20k with zero results. Then I gave Business Volunteers a chance and they set up proper targeting, made good creatives, and I started getting 8-10 genuine leads daily. The best part is they actually track everything and show me what's working and what's not. Really professional team.",
  },
  {
    name: "Sonya Mehta",
    role: "Founder, Decor by Sonya Mehta",
    category: "Website",
    stars: 5,
    text: "I wanted a website that actually shows the quality of my interior design work and they absolutely nailed it. Every page feels premium, the photos are displayed beautifully, and clients have told me the website made them trust my brand before even meeting me. It has become my best marketing tool honestly. Worth every rupee.",
  },
  {
    name: "Vikram Joshi",
    role: "CEO, Vasoo Bamboo Arts",
    category: "Website",
    stars: 5,
    text: "We are a small artisan business and I was worried a website would be too expensive or too complicated for us. Business Volunteers made the whole process so easy. They understood our products, designed something clean and elegant, and even helped with the SEO. Now people find us on Google which was not happening before at all.",
  },
  {
    name: "Neha Kapoor",
    role: "Marketing Head, Layers Clothing",
    category: "Website",
    stars: 5,
    text: "Our old website looked outdated and was not mobile friendly at all. Business Volunteers redesigned the whole thing and now it loads fast, looks modern, and our online orders have gone up significantly. They also added proper product categories and a smooth checkout flow. The team is responsive and delivers on time which is rare these days.",
  },
  {
    name: "Dr. Manish Thakur",
    role: "Owner, PhysioLife Clinic",
    category: "Social Media",
    stars: 5,
    text: "I was getting most of my patients through word of mouth which is fine but very slow. Business Volunteers set up my Google profile properly, started running local ads, and created posts explaining common injuries and exercises. Within 3 months my daily appointments went from 5-6 to consistently 12-15. Patients tell me they found me on Instagram which never used to happen before.",
  },
  {
    name: "Dr. Kavita Rao",
    role: "Director, SmileCare Dental",
    category: "Social Media",
    stars: 5,
    text: "We had zero social media presence before. Business Volunteers started managing our Instagram and Facebook with before-after cases and patient education content. The response has been amazing. We get 20-25 enquiries per week now just from social media. They really understand how to market a medical practice without making it look salesy.",
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = () => {
    setDirection(1);
    setCurrent((c) => (c + 1) % testimonials.length);
  };
  const prev = () => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  };

  const t = testimonials[current];

  return (
    <section id="testimonials" className="relative py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green/10 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(0,224,90,0.04),_transparent_60%)]" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <SectionHeading title="Client Testimonials" subtitle="What They Say" />

        {/* Card */}
        <div className="relative min-h-[320px] sm:min-h-[280px]">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              initial={{ opacity: 0, x: direction * 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -60 }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="glass-card p-8 sm:p-10"
            >
              {/* Quote icon */}
              <Quote
                size={32}
                className="text-green/20 mb-4 -scale-x-100"
                strokeWidth={1.5}
              />

              {/* Review text */}
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-8">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Bottom: info + stars */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3">
                    {/* Avatar initial */}
                    <div className="w-10 h-10 rounded-full bg-green/10 border border-green/20 flex items-center justify-center text-green font-heading font-bold text-sm">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-heading text-white font-semibold text-sm">
                        {t.name}
                      </h4>
                      <p className="text-gray-500 text-xs">{t.role}</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-[10px] text-gray-600 uppercase tracking-widest font-medium border border-white/5 px-3 py-1 rounded-full">
                    {t.category}
                  </span>
                  <div className="flex gap-0.5">
                    {Array.from({ length: t.stars }).map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className="text-green fill-green"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-6 mt-8">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-green hover:border-green/30 transition-all"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={18} />
          </button>

          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > current ? 1 : -1);
                  setCurrent(i);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === current
                    ? "bg-green w-6"
                    : "bg-white/15 hover:bg-white/30"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-green hover:border-green/30 transition-all"
            aria-label="Next testimonial"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
