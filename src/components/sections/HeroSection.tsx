"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const floatingEmojis = [
  { emoji: "😄", cls: "top-[8%] left-[5%]", delay: "0s" },
  { emoji: "🎯", cls: "top-[15%] right-[8%]", delay: "1s" },
  { emoji: "🌟", cls: "bottom-[20%] left-[3%]", delay: "2s" },
  { emoji: "🎉", cls: "bottom-[15%] right-[6%]", delay: "3s" },
  { emoji: "💡", cls: "top-[40%] left-[1%]", delay: "1.5s" },
  { emoji: "🚀", cls: "top-[35%] right-[2%]", delay: "2.5s" },
  { emoji: "🎨", cls: "top-[65%] left-[8%]", delay: "0.5s" },
  { emoji: "💪", cls: "top-[55%] right-[7%]", delay: "3.5s" },
];

const faces = ["😄", "🥳", "😎", "🤩", "😍", "🎊", "🌟", "💯"];

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".hero-content", {
        y: -100,
        opacity: 0.3,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-24 pb-8"
      style={{
        background: "linear-gradient(135deg, #fff8f0 0%, #fff3e8 40%, #f0fff8 100%)",
      }}
    >
      {/* Floating Emojis */}
      {floatingEmojis.map((fe, i) => (
        <div
          key={i}
          className={`absolute text-[2.5rem] pointer-events-none select-none hidden md:block ${fe.cls}`}
          style={{ animation: `floatAround 6s ease-in-out ${fe.delay} infinite` }}
        >
          {fe.emoji}
        </div>
      ))}

      {/* Content */}
      <div className="hero-content relative z-10 max-w-[900px] mx-auto px-6 text-center">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          {/* Badge */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-[30px] text-[0.8rem] font-[800] mb-6"
            style={{
              background: "linear-gradient(135deg, rgba(255,107,53,0.15), rgba(255,154,0,0.1))",
              border: "2px solid #ff6b35",
              color: "#ff6b35",
            }}
          >
            🌿 Trusted by 2,193+ Businesses — 70+ Industries Across India
          </motion.div>

          {/* Headline */}
          <h1
            className="text-[clamp(2.2rem,5.5vw,4.5rem)] font-[900] leading-[1.05] mb-5"
            style={{ letterSpacing: "-2px", color: "#1a1a2e" }}
          >
            <motion.span
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ delay: 0.4, duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="block"
            >
              Creative Solutions That
            </motion.span>
            <motion.span
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ delay: 0.7, duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="block gradient-text"
            >
              Move Brands Forward
            </motion.span>
          </h1>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="text-[1rem] text-[#666] max-w-[600px] mx-auto mb-4 leading-[1.8] font-[600]"
          >
            India&apos;s most versatile digital marketing agency! From Noida to Nagpur, we help 70+
            industries grow with transparent, affordable, results-driven strategies. 🚀
          </motion.p>

          {/* Face Parade */}
          <div className="flex gap-1 sm:gap-2 justify-center mb-7">
            {faces.map((face, i) => (
              <span
                key={i}
                className="text-[1.5rem] sm:text-[2rem] inline-block cursor-default"
                style={{ animation: `faceJump 1.5s ease-in-out ${i * 0.12}s infinite` }}
              >
                {face}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-[14px] justify-center flex-wrap"
          >
            <a href="#contact" className="btn-primary" data-cursor-hover>
              🚀 Start a Project
            </a>
            <a href="/industries" className="btn-outline" data-cursor-hover>
              🏭 View All Industries
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.8 }}
            className="flex gap-3 sm:gap-[28px] justify-center mt-8 sm:mt-12 flex-wrap"
          >
            {[
              { n: "2,193+", l: "Happy Clients 😊" },
              { n: "70+", l: "Industries 🏭" },
              { n: "500+", l: "Business Types 💼" },
              { n: "4.9★", l: "Google Rating ⭐" },
            ].map((s, i) => (
              <div
                key={i}
                className="bg-white rounded-[16px] sm:rounded-[20px] px-4 sm:px-[26px] py-3 sm:py-5"
                style={{
                  boxShadow: "0 8px 30px rgba(255,107,53,0.12)",
                  border: "2px solid rgba(255,107,53,0.15)",
                  animation: `statPop 0.5s ease ${0.1 + i * 0.1}s backwards`,
                }}
              >
                <div className="text-[1.4rem] sm:text-[2rem] font-[900] gradient-text">{s.n}</div>
                <div className="text-[0.65rem] sm:text-[0.72rem] text-[#666] mt-1 uppercase tracking-[0.5px] font-[700]">
                  {s.l}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Header Video */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.4, duration: 1 }}
        className="relative z-10 w-full max-w-6xl mx-auto px-6 mt-12"
      >
        <div
          className="rounded-2xl overflow-hidden"
          style={{ border: "2px solid rgba(255,107,53,0.2)" }}
        >
          <video autoPlay loop muted playsInline preload="none" className="w-full h-auto">
            <source src="/headeer video.mp4" type="video/mp4" />
          </video>
        </div>
      </motion.div>
    </section>
  );
}
