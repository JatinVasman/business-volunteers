"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Preloader({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const finish = () => {
      setLoading(false);
      setTimeout(() => setShowContent(true), 600);
    };

    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => {
        const minDelay = setTimeout(finish, 2000);
        return () => clearTimeout(minDelay);
      });
    } else {
      const fallback = setTimeout(finish, 2500);
      return () => clearTimeout(fallback);
    }
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            key="preloader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
            style={{
              background:
                "linear-gradient(135deg, #ff6b35, #ff9a00, #ffd700, #00d084, #00c9ff, #8b5cf6)",
              backgroundSize: "400% 400%",
              animation: "splashGrad 3s ease infinite",
            }}
          >
            {/* Logo */}
            <motion.div
              initial={{ scale: 0, rotate: -10 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="w-[110px] h-[110px] rounded-[28px] bg-white/95 flex items-center justify-center mb-6"
              style={{
                boxShadow: "0 20px 60px rgba(0,0,0,0.2)",
                animation: "splashBounce 1s ease infinite alternate",
              }}
            >
              <Image
                src="/logo-dark.png"
                alt="Business Volunteers Logo"
                width={80}
                height={80}
                className="rounded-[12px]"
                priority
              />
            </motion.div>

            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div
                className="text-[clamp(2rem,6vw,3.5rem)] font-[900] text-white leading-[1.1]"
                style={{ textShadow: "0 4px 20px rgba(0,0,0,0.2)", letterSpacing: "-1px" }}
              >
                Business Volunteers
              </div>
              <div className="text-[1rem] text-white/90 mt-3 font-[700] tracking-[2px] uppercase">
                India&apos;s Creative Growth Partner 🇮🇳
              </div>
              <div className="text-[2rem] mt-5 tracking-[8px]">
                😊 🎉 🚀 💡 🌟
              </div>
            </motion.div>

            {/* Loading Dots */}
            <div className="flex gap-[10px] mt-9">
              {[0, 0.2, 0.4].map((delay, i) => (
                <div
                  key={i}
                  className="w-3 h-3 rounded-full bg-white/60"
                  style={{ animation: `dotPulse 1.2s ease-in-out ${delay}s infinite` }}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div
        style={{
          opacity: showContent ? 1 : 0,
          transition: "opacity 0.5s ease-in-out",
        }}
      >
        {children}
      </div>
    </>
  );
}
