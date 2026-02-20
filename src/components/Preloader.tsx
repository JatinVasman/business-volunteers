"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Give the browser time to parse, hydrate, and settle
    // Uses requestIdleCallback where available for smarter timing
    const finish = () => {
      setLoading(false);
      // Small delay so exit animation plays before content renders fully
      setTimeout(() => setShowContent(true), 600);
    };

    // Wait for fonts + critical assets
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => {
        // Minimum display time of 1.2s so the preloader doesn't flash
        const minDelay = setTimeout(finish, 1200);
        return () => clearTimeout(minDelay);
      });
    } else {
      const fallback = setTimeout(finish, 1500);
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
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black"
          >
            {/* Ambient glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[radial-gradient(circle,_rgba(0,224,90,0.08)_0%,_transparent_70%)] pointer-events-none" />

            {/* Brand name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative z-10 text-center"
            >
              <h1 className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Business <span className="gradient-text">Volunteers</span>
              </h1>
            </motion.div>

            {/* Loading bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="relative z-10 mt-8 w-48 h-[2px] bg-white/10 rounded-full overflow-hidden"
            >
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="h-full bg-gradient-to-r from-green to-green-light origin-left"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main content — hidden until preloader exits */}
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
