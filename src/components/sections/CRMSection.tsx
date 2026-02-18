"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Gift, UserCheck, PartyPopper, BarChart3 } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const crmCards = [
  {
    image: "/CRM/1.jpg",
    title: "Collect Customer Data",
    desc: "Gather customer details, birthdays, anniversaries & preferences at every touchpoint.",
    accent: "#10b981",
  },
  {
    image: "/CRM/2.jpg",
    title: "Segment & Analyze",
    desc: "Automatically categorize customers by behavior, visit frequency & spending patterns.",
    accent: "#3b82f6",
  },
  {
    image: "/CRM/3.jpg",
    title: "Automate Campaigns",
    desc: "Trigger personalized messages, offers & follow-ups based on customer activity & events.",
    accent: "#f59e0b",
  },
  {
    image: "/CRM/4.jpg",
    title: "Track & Optimize",
    desc: "Monitor campaign performance, redemption rates & ROI with real-time analytics dashboards.",
    accent: "#a855f7",
  },
];

const crmServices = [
  {
    icon: Gift,
    title: "Automated Birthday & Anniversary Campaigns",
    desc: "Automatically send personalized wishes and offers to customers on special occasions to improve engagement and loyalty.",
    accent: "from-emerald-500/20 to-teal-500/20",
    border: "border-emerald-500/20",
  },
  {
    icon: UserCheck,
    title: "Smart Follow-up Campaigns",
    subtitle: "Dormant • Missing • Lost Customers",
    desc: "Identify inactive customers and re-engage them through intelligent follow-up campaigns to increase retention and conversions.",
    accent: "from-blue-500/20 to-indigo-500/20",
    border: "border-blue-500/20",
  },
  {
    icon: PartyPopper,
    title: "Festival Campaigns with Coupon Redemption",
    desc: "Launch seasonal promotions with trackable coupon systems to drive sales during festive periods and special events.",
    accent: "from-amber-500/20 to-orange-500/20",
    border: "border-amber-500/20",
  },
  {
    icon: BarChart3,
    title: "Customer Segmentation, History & Analytics",
    desc: "Understand customer behavior with detailed segmentation, purchase history, and performance analytics for better decision-making.",
    accent: "from-purple-500/20 to-pink-500/20",
    border: "border-purple-500/20",
  },
];

export default function CRMSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const pinContainerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const pinContainer = pinContainerRef.current;
    const track = trackRef.current;
    const cards = cardsRef.current;
    if (!pinContainer || !track || !cards) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      // Calculate how far the cards need to translate
      const totalScroll = cards.scrollWidth - track.offsetWidth;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: pinContainer,
          start: "top top",
          end: () => `+=${totalScroll + window.innerHeight * 0.5}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      tl.to(cards, {
        x: -totalScroll,
        ease: "none",
        duration: 1,
      });

      // Parallax & fade-in for each card
      const cardEls = cards.querySelectorAll(".crm-card");
      cardEls.forEach((card) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 40, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              containerAnimation: tl,
              start: "left 85%",
              end: "left 50%",
              scrub: 1,
            },
          },
        );
      });
    });

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <section ref={sectionRef} id="crm" className="relative crm-section">
      {/* ──── Pinned Horizontal Scroll Section ──── */}
      <div
        ref={pinContainerRef}
        className="relative h-screen w-full flex flex-col md:flex-row overflow-hidden"
      >
        {/* Top divider */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green/10 to-transparent z-20" />

        {/* Ambient glow */}
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-green/[0.03] blur-[120px] pointer-events-none" />

        {/* Left panel — Intro */}
        <div className="w-full md:w-[38%] lg:w-[35%] flex-shrink-0 flex flex-col justify-center px-6 sm:px-10 lg:px-16 py-20 md:py-0 relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-green text-sm font-semibold uppercase tracking-[0.25em] mb-4 block"
          >
            CRM Solutions
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6"
          >
            Smart CRM Solutions That{" "}
            <span className="gradient-text">Strengthen</span> Customer
            Relationships
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-500 text-base lg:text-lg leading-relaxed mb-8 max-w-md"
          >
            Streamline engagement, automate communication, and gain actionable
            insights with our intelligent CRM solutions designed for modern
            businesses.
          </motion.p>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-20 h-[2px] bg-gradient-to-r from-green to-green-light origin-left"
          />
        </div>

        {/* Right panel — Horizontal scrolling cards */}
        <div
          ref={trackRef}
          className="w-full md:w-[62%] lg:w-[65%] flex-shrink-0 overflow-hidden flex items-center"
        >
          {/* Desktop: horizontal track */}
          <div
            ref={cardsRef}
            className="hidden md:flex gap-8 pl-4 pr-16 py-10 items-stretch"
          >
            {crmCards.map((card, i) => (
              <div
                key={card.title}
                className="crm-card flex-shrink-0 w-[380px] lg:w-[420px] rounded-2xl overflow-hidden group cursor-pointer"
                style={
                  {
                    "--card-accent": card.accent,
                  } as React.CSSProperties
                }
                data-cursor-hover
              >
                {/* Image */}
                <div className="relative w-full h-56 lg:h-64 overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    sizes="(min-width: 1024px) 420px, 380px"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent opacity-60" />

                  {/* Card number badge */}
                  <div
                    className="absolute top-4 left-4 w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-white border border-white/20"
                    style={{ background: `${card.accent}30` }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 lg:p-7">
                  <h3 className="font-heading text-lg font-semibold text-white mb-1 group-hover:text-green transition-colors duration-300 leading-snug">
                    {card.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {card.desc}
                  </p>
                </div>

                {/* Bottom accent bar */}
                <div
                  className="h-[2px] w-0 group-hover:w-full transition-all duration-500 mx-6 mb-4 rounded-full"
                  style={{ background: card.accent }}
                />
              </div>
            ))}
          </div>

          {/* Mobile: vertical stack */}
          <div className="md:hidden flex flex-col gap-6 px-6 pb-20">
            {crmCards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="crm-card rounded-2xl overflow-hidden group cursor-pointer"
                style={
                  {
                    "--card-accent": card.accent,
                  } as React.CSSProperties
                }
              >
                {/* Image */}
                <div className="relative w-full h-48 overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    sizes="100vw"
                    className="object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent opacity-60" />
                  <div
                    className="absolute top-4 left-4 w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-white border border-white/20"
                    style={{ background: `${card.accent}30` }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-heading text-base font-semibold text-white mb-1 leading-snug">
                    {card.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {card.desc}
                  </p>
                </div>

                <div
                  className="h-[2px] w-0 group-hover:w-full transition-all duration-500 mx-5 mb-3 rounded-full"
                  style={{ background: card.accent }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ──── CRM Services — Below the scroll ──── */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 bg-black/50 backdrop-blur-sm border-t border-white/5">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-heading text-2xl sm:text-3xl font-bold text-white text-center mb-4"
        >
          Our CRM Services
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-gray-500 text-center text-sm max-w-xl mx-auto mb-14"
        >
          Everything you need to build lasting customer relationships and drive
          repeat business.
        </motion.p>

        <div className="grid sm:grid-cols-2 gap-6">
          {crmServices.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glass-card p-7 group cursor-pointer"
                data-cursor-hover
              >
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${s.accent} border ${s.border} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500`}
                  >
                    <Icon size={22} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-heading text-base font-semibold text-white group-hover:text-green transition-colors duration-300">
                      {s.title}
                    </h4>
                    {s.subtitle && (
                      <span className="text-[10px] text-gray-500 font-medium tracking-wide uppercase">
                        {s.subtitle}
                      </span>
                    )}
                  </div>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {s.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
