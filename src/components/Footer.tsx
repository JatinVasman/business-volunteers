"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#social" },
  { label: "CRM", href: "#crm" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
  { label: "Blog", href: "/blog" },
  { label: "FAQs", href: "/faq" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-black-light">
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.webp"
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
                  {link.href.startsWith("/") ? (
                    <Link
                      href={link.href}
                      data-cursor-hover
                      className="text-gray-600 hover:text-green transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      data-cursor-hover
                      className="text-gray-600 hover:text-green transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  )}
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

          {/* Location Map */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
              Get Directions
            </h4>
            <a
              href="https://maps.app.goo.gl/EpeFsJs9NPm7aRFG9"
              target="_blank"
              rel="noopener noreferrer"
              className="block overflow-hidden rounded-lg border border-white/10 hover:border-green/30 transition-colors"
            >
              <iframe
                src="https://www.google.com/maps?q=https://maps.app.goo.gl/EpeFsJs9NPm7aRFG9&output=embed"
                width="100%"
                height="200"
                style={{ border: 0, pointerEvents: "none" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Business Volunteers Location"
              />
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/5 pt-8 flex items-center justify-center">
          <p className="text-gray-700 text-xs">
            © {new Date().getFullYear()} Business Volunteers. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
