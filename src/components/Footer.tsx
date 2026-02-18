"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Social", href: "#social" },
  { label: "Websites", href: "#portfolio" },
  { label: "CRM", href: "#crm" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-black-light">
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-10">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="BV"
                width={36}
                height={36}
                className="rounded-lg brightness-0 invert"
              />
              <span className="font-heading text-xl font-bold">
                Business <span className="gradient-text">Volunteers</span>
              </span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
              Creative solutions that move brands forward. Affordable excellence
              for growing businesses.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    data-cursor-hover
                    className="text-gray-600 hover:text-green transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Quick */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
              Get in Touch
            </h4>
            <div className="space-y-4 text-sm text-gray-600">
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-green shrink-0" />
                <span>contact.businessvolunteers@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-green shrink-0" />
                <span>+91 85869 89832</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-green shrink-0 mt-1" />
                <span>Noida sec 62, Noida 201309</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-700 text-xs">
            © {new Date().getFullYear()} Business Volunteers. All rights
            reserved.
          </p>
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            whileHover={{ y: -3 }}
            data-cursor-hover
            className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center text-gray-600 hover:text-green hover:border-green/30 transition-all"
          >
            ↑
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
