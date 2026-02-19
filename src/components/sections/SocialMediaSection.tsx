"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import { X } from "lucide-react";

const fileNumbers = [
  8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,
];
const images = fileNumbers.map((num, i) => ({
  src: `/social/${num}.webp`,
  alt: `Social Media Design ${i + 1}`,
}));

const COLS = 3;

/* Snake traversal: even rows L→R, odd rows R→L */
function buildSnakeOrder(total: number, cols: number): number[] {
  const order: number[] = [];
  const rows = Math.ceil(total / cols);
  for (let r = 0; r < rows; r++) {
    const start = r * cols;
    const end = Math.min(start + cols, total);
    const rowItems: number[] = [];
    for (let c = start; c < end; c++) rowItems.push(c);
    if (r % 2 === 1) rowItems.reverse();
    order.push(...rowItems);
  }
  return order;
}

const SNAKE = buildSnakeOrder(images.length, COLS);
const REVEAL_POS: number[] = new Array(images.length);
SNAKE.forEach((imgIdx, pos) => {
  REVEAL_POS[imgIdx] = pos;
});

export default function SocialMediaSection() {
  const [selected, setSelected] = useState<number | null>(null);
  const [revealCount, setRevealCount] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const initializedRef = useRef(false);

  /* ── Detect mobile (runs after hydration to avoid mismatch) ── */
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    const update = (matches: boolean) => {
      setIsMobile(matches);
      if (matches) setRevealCount(images.length);
    };
    if (!initializedRef.current) {
      initializedRef.current = true;
      update(mq.matches);
    }
    const handler = (e: MediaQueryListEvent) => update(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  /* ── Hover → progressive reveal ── */
  useEffect(() => {
    if (isHovering && revealCount < images.length) {
      timerRef.current = setInterval(() => {
        setRevealCount((c) => {
          const next = c + 1;
          if (next >= images.length && timerRef.current)
            clearInterval(timerRef.current);
          return Math.min(next, images.length);
        });
      }, 150);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isHovering, revealCount]);

  return (
    <section id="social" className="relative py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeading
          title="Social Media Work"
          subtitle="Our Creative Output"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-gray-500 text-base max-w-2xl mx-auto -mt-8 mb-14"
        >
          A showcase of our social media designs — from branding to campaign
          visuals — crafted to engage audiences and drive results.
        </motion.p>

        {/* Hoverable wrapper */}
        <div
          className="relative"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {images.map((img, i) => {
              const pos = REVEAL_POS[i];
              const isRevealed = pos < revealCount;
              return (
                <div key={img.src} className="aspect-square relative">
                  <motion.div
                    className="w-full h-full rounded-xl overflow-hidden group relative cursor-pointer"
                    animate={
                      isRevealed || isMobile
                        ? { opacity: 1, scale: 1, filter: "blur(0px)" }
                        : { opacity: 0.12, scale: 0.92, filter: "blur(4px)" }
                    }
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    onClick={() => isRevealed && setSelected(i)}
                    data-cursor-hover
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      width={400}
                      height={400}
                      className="w-full h-full object-cover rounded-xl transition-all duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-4">
                      <span className="text-sm font-medium text-white/90">
                        Design #{i + 1}
                      </span>
                    </div>
                    <div className="absolute inset-0 border border-green/0 group-hover:border-green/30 rounded-xl transition-colors duration-500" />
                  </motion.div>
                </div>
              );
            })}
          </div>

          {/* Hover prompt — desktop only */}
          {!isMobile && revealCount === 0 && (
            <motion.div
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
              style={{ zIndex: 30 }}
              animate={{ opacity: isHovering ? 0 : 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-black/50 backdrop-blur-sm px-8 py-4 rounded-full border border-white/10">
                <span className="text-gray-300 text-sm font-light tracking-widest uppercase">
                  Hover to explore ✦
                </span>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative max-w-4xl max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[selected].src}
                alt={images[selected].alt}
                width={800}
                height={1000}
                className="max-h-[85vh] w-auto rounded-2xl glow"
              />
              <button
                onClick={() => setSelected(null)}
                className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              >
                <X size={20} />
              </button>
              <div className="flex justify-center mt-4 gap-2">
                <button
                  onClick={() =>
                    setSelected(selected > 0 ? selected - 1 : images.length - 1)
                  }
                  className="px-4 py-2 rounded-lg glass text-sm text-gray-300 hover:text-green transition-colors"
                >
                  ← Prev
                </button>
                <span className="px-4 py-2 text-sm text-gray-600">
                  {selected + 1} / {images.length}
                </span>
                <button
                  onClick={() =>
                    setSelected(selected < images.length - 1 ? selected + 1 : 0)
                  }
                  className="px-4 py-2 rounded-lg glass text-sm text-gray-300 hover:text-green transition-colors"
                >
                  Next →
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
