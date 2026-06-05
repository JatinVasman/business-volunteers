"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";

const scrollLinks = [
  { label: "🏠 Home", href: "#hero" },
  { label: "📸 Portfolio", href: "#portfolio" },
];

const serviceDropdown = [
  { label: "KPI Dashboards", href: "/services/kpi-dashboards", emoji: "📊" },
  { label: "HR Systems", href: "/services/hr-systems", emoji: "👥" },
  { label: "School Dashboards", href: "/services/school-dashboards", emoji: "🎓" },
  { label: "Research & Strategy", href: "/services/research-strategy", emoji: "🔍" },
];

const pageLinks = [
  { label: "📈 Case Studies", href: "/case-studies" },
  { label: "🏭 Industries", href: "/industries" },
  { label: "📝 Blog", href: "/blog" },
  { label: "🤝 B2B Offer", href: "/b2b-offer" },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isServicePage = pathname.startsWith("/services");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px" },
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((s) => observer.observe(s));

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    if (pathname !== "/") {
      router.push("/" + href);
      return;
    }
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  const handleDropdownEnter = () => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    dropdownTimeout.current = setTimeout(() => setDropdownOpen(false), 200);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/97 backdrop-blur-[20px] shadow-[0_4px_20px_rgba(255,107,53,0.15)] py-2"
            : "bg-white/97 backdrop-blur-[20px] py-3"
        }`}
        style={{ borderBottom: "3px solid #ff6b35" }}
      >
        <div className="max-w-7xl mx-auto px-[4%] flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-[10px] group"
            data-cursor-hover
          >
            <Image
              src="/logo-dark.png"
              alt="Business Volunteers Logo"
              width={38}
              height={38}
              className="rounded-[10px] shrink-0"
              priority
            />
            <span className="font-[900] text-[1.1rem] hidden sm:block" style={{ color: "#ff6b35" }}>
              Business Volunteers
            </span>
          </button>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-[2px]">
            {scrollLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                data-cursor-hover
                className={`relative px-3 py-[7px] rounded-[20px] text-[0.78rem] font-[700] transition-all duration-200 ${
                  activeSection === link.href.slice(1)
                    ? "text-white"
                    : "text-[#666] hover:text-white"
                }`}
                style={
                  activeSection === link.href.slice(1)
                    ? { background: "linear-gradient(135deg, #ff6b35, #ff9a00)" }
                    : undefined
                }
                onMouseEnter={(e) => {
                  if (activeSection !== link.href.slice(1)) {
                    (e.target as HTMLElement).style.background = "linear-gradient(135deg, #ff6b35, #ff9a00)";
                    (e.target as HTMLElement).style.color = "#fff";
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeSection !== link.href.slice(1)) {
                    (e.target as HTMLElement).style.background = "";
                    (e.target as HTMLElement).style.color = "";
                  }
                }}
              >
                {link.label}
              </button>
            ))}

            {/* Services Dropdown */}
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={handleDropdownEnter}
              onMouseLeave={handleDropdownLeave}
            >
              <button
                data-cursor-hover
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className={`relative px-3 py-[7px] rounded-[20px] text-[0.78rem] font-[700] transition-all duration-200 flex items-center gap-1 ${
                  isServicePage
                    ? "text-white"
                    : "text-[#666] hover:text-white"
                }`}
                style={
                  isServicePage
                    ? { background: "linear-gradient(135deg, #ff6b35, #ff9a00)" }
                    : undefined
                }
                onMouseEnter={(e) => {
                  if (!isServicePage) {
                    (e.currentTarget as HTMLElement).style.background = "linear-gradient(135deg, #ff6b35, #ff9a00)";
                    (e.currentTarget as HTMLElement).style.color = "#fff";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isServicePage) {
                    (e.currentTarget as HTMLElement).style.background = "";
                    (e.currentTarget as HTMLElement).style.color = "";
                  }
                }}
              >
                ⚡ Services
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
                />
              </button>

              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-[240px] rounded-2xl overflow-hidden z-50"
                    style={{
                      background: "white",
                      boxShadow: "0 15px 50px rgba(255,107,53,0.2), 0 5px 15px rgba(0,0,0,0.08)",
                      border: "2px solid rgba(255,107,53,0.12)",
                    }}
                  >
                    <div
                      className="h-[3px]"
                      style={{ background: "linear-gradient(90deg, #ff6b35, #ff9a00, #00d084)" }}
                    />
                    <div className="py-2">
                      {serviceDropdown.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setDropdownOpen(false)}
                          className={`flex items-center gap-3 px-5 py-3 text-[0.82rem] font-[700] transition-all duration-200 ${
                            pathname === item.href
                              ? "text-[#ff6b35] bg-[rgba(255,107,53,0.06)]"
                              : "text-[#555] hover:text-[#ff6b35] hover:bg-[rgba(255,107,53,0.04)]"
                          }`}
                        >
                          <span className="text-lg">{item.emoji}</span>
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {pageLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                data-cursor-hover
                className={`relative px-3 py-[7px] rounded-[20px] text-[0.78rem] font-[700] transition-all duration-200 ${
                  pathname.startsWith(link.href)
                    ? "text-white"
                    : "text-[#666] hover:text-white hover:bg-gradient-to-r hover:from-p1 hover:to-p2"
                }`}
                style={
                  pathname.startsWith(link.href)
                    ? { background: "linear-gradient(135deg, #ff6b35, #ff9a00)" }
                    : undefined
                }
              >
                {link.label}
              </Link>
            ))}

            <button
              onClick={() => scrollTo("#contact")}
              data-cursor-hover
              className="ml-2 px-4 py-[8px] rounded-[25px] text-[0.78rem] font-[900] text-white transition-all duration-300 hover:scale-[1.08] hover:rotate-[-1deg]"
              style={{
                background: "linear-gradient(135deg, #ff6b35, #ff9a00)",
                boxShadow: "0 4px 15px rgba(255,107,53,0.4)",
              }}
            >
              🚀 Start a Project
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-[rgba(255,107,53,0.1)] transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileOpen ? <X size={24} color="#ff6b35" /> : <Menu size={24} color="#ff6b35" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 pt-20 bg-white/98 backdrop-blur-xl lg:hidden overflow-y-auto"
          >
            <div className="flex flex-col items-center gap-2 p-8">
              {scrollLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  onClick={() => scrollTo(link.href)}
                  className="w-full text-center py-4 text-xl font-[700] text-[#666] hover:text-[#ff6b35] transition-colors rounded-xl hover:bg-[rgba(255,107,53,0.05)]"
                >
                  {link.label}
                </motion.button>
              ))}

              {/* Mobile Services Accordion */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: scrollLinks.length * 0.08 }}
                className="w-full"
              >
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className={`w-full text-center py-4 text-xl font-[700] transition-colors rounded-xl flex items-center justify-center gap-2 ${
                    isServicePage
                      ? "text-[#ff6b35]"
                      : "text-[#666] hover:text-[#ff6b35]"
                  } hover:bg-[rgba(255,107,53,0.05)]`}
                >
                  ⚡ Services
                  <ChevronDown
                    size={20}
                    className={`transition-transform duration-300 ${mobileServicesOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <AnimatePresence>
                  {mobileServicesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pb-2 space-y-1">
                        {serviceDropdown.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => {
                              setMobileOpen(false);
                              setMobileServicesOpen(false);
                            }}
                            className={`block w-full text-center py-3 text-base font-[700] transition-colors rounded-xl ${
                              pathname === item.href
                                ? "text-[#ff6b35] bg-[rgba(255,107,53,0.06)]"
                                : "text-[#888] hover:text-[#ff6b35] hover:bg-[rgba(255,107,53,0.04)]"
                            }`}
                          >
                            {item.emoji} {item.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {pageLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: (scrollLinks.length + 1 + i) * 0.08 }}
                  className="w-full"
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`block w-full text-center py-4 text-xl font-[700] transition-colors rounded-xl hover:bg-[rgba(255,107,53,0.05)] ${
                      pathname.startsWith(link.href)
                        ? "text-[#ff6b35]"
                        : "text-[#666] hover:text-[#ff6b35]"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (scrollLinks.length + pageLinks.length + 1) * 0.08 }}
                onClick={() => scrollTo("#contact")}
                className="mt-4 w-full py-4 rounded-xl text-lg font-[900] text-white"
                style={{
                  background: "linear-gradient(135deg, #ff6b35, #ff9a00)",
                  boxShadow: "0 6px 20px rgba(255,107,53,0.4)",
                }}
              >
                🚀 Start a Project
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
