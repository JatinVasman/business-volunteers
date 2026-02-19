"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax on scroll — push hero content up slower
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

      // Scale down the green glow on scroll
      gsap.to(".hero-glow", {
        scale: 0.5,
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "80% top",
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
      className="relative min-h-screen flex flex-col items-center justify-center gap-6 sm:gap-8 lg:gap-10 overflow-hidden pt-20 pb-8 sm:pt-24 sm:pb-12"
    >
      {/* Large green radial glow */}
      <div className="hero-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,_rgba(0,224,90,0.12)_0%,_transparent_70%)] pointer-events-none" />

      {/* Content */}
      <div
        className="hero-content relative z-10 max-w-6xl mx-auto px-6 text-center"
        ref={headlineRef}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Headline — Fooror-style staggered reveal */}
          <h1 className="font-heading text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold leading-[0.95] tracking-tight mb-5 sm:mb-8">
            <span className="block overflow-hidden">
              {"Creative Solutions".split(" ").map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{
                    delay: 0.4 + i * 0.12,
                    duration: 0.9,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  className="inline-block mr-[0.25em] text-white"
                >
                  {word}
                </motion.span>
              ))}
            </span>
            <span className="block overflow-hidden">
              {"That Move".split(" ").map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{
                    delay: 0.7 + i * 0.12,
                    duration: 0.9,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  className="inline-block mr-[0.25em] text-white"
                >
                  {word}
                </motion.span>
              ))}
            </span>
            <span className="block overflow-hidden">
              {"Brands Forward".split(" ").map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{
                    delay: 1 + i * 0.12,
                    duration: 0.9,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  className="inline-block mr-[0.25em] gradient-text"
                >
                  {word}
                </motion.span>
              ))}
            </span>
          </h1>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-5 justify-center"
          >
            <a
              href="#social"
              data-cursor-hover
              className="group relative px-10 py-4 bg-green text-black rounded-xl text-base font-bold transition-all duration-500 hover:shadow-[0_0_50px_rgba(0,224,90,0.4)] hover:scale-105 overflow-hidden"
            >
              <span className="relative z-10">View Our Work</span>
              <div className="absolute inset-0 bg-green-light opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </a>
            <a
              href="#contact"
              data-cursor-hover
              className="px-10 py-4 rounded-xl text-base font-bold text-white border border-white/10 hover:border-green/40 transition-all duration-500 hover:bg-green/5"
            >
              Start a Project
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Header Video */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="relative z-10 w-full max-w-6xl mx-auto px-6"
      >
        <div className="rounded-2xl overflow-hidden border border-white/10">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="none"
            className="w-full h-auto"
          >
            <source src="/headeer video.mp4" type="video/mp4" />
          </video>
        </div>
      </motion.div>
    </section>
  );
}
