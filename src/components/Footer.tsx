"use client";

import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

const footerPages = [
  { label: "Home", href: "#hero" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Industries", href: "/industries" },
  { label: "Portfolio", href: "#social" },
  { label: "Blog", href: "/blog" },
  { label: "B2B Offer", href: "/b2b-offer" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const footerServices = [
  { label: "Social Media", href: "#services" },
  { label: "Web Design", href: "#services" },
  { label: "SEO", href: "#services" },
  { label: "Meta Ads", href: "#services" },
  { label: "CRM", href: "#crm" },
  { label: "WhatsApp", href: "#services" },
  { label: "KPI Dashboards", href: "/services/kpi-dashboards" },
  { label: "HR Systems", href: "/services/hr-systems" },
  { label: "School Dashboards", href: "/services/school-dashboards" },
  { label: "Research & Strategy", href: "/services/research-strategy" },
];

export default function Footer() {
  return (
    <footer
      className="relative"
      style={{
        background: "#1a1a2e",
        color: "#e0e0e0",
        padding: "50px 5% 28px",
        borderTop: "5px solid #ff6b35",
      }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-9 mb-9">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-[10px] mb-3">
            <div
              className="w-9 h-9 rounded-[10px] grid place-items-center text-[0.95rem] font-[900] text-white"
              style={{ background: "linear-gradient(135deg, #ff6b35, #ff9a00)" }}
            >
              BV
            </div>
            <span className="text-[1rem] font-[900]" style={{ color: "#ff9a00" }}>
              Business Volunteers
            </span>
          </div>
          <p className="text-[0.81rem] text-[#888] leading-[1.7] max-w-[270px] mt-3 font-[600]">
            Trusted by 2,193+ businesses across 70+ industries. Affordable digital marketing
            excellence from Noida, Delhi NCR. 🇮🇳
          </p>
          <div className="flex gap-[10px] mt-4 flex-wrap">
            {[
              {
                href: "https://www.instagram.com/thebusinessvolunteers/",
                color: "#E4405F",
                path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12s.014 3.668.072 4.948c.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24s3.668-.014 4.948-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z",
              },
              {
                href: "https://wa.me/918586989832",
                color: "#25D366",
                path: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.128.558 4.122 1.527 5.854L.058 23.606a.5.5 0 00.612.611l5.742-1.465A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.943 0-3.757-.57-5.28-1.552l-.367-.224-3.407.87.887-3.395-.24-.379A9.94 9.94 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z",
              },
              {
                href: "https://www.linkedin.com/company/business-volunteers1",
                color: "#0A66C2",
                path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
              },
              {
                href: "https://www.youtube.com/@TheBusinessVolunteers",
                color: "#FF0000",
                path: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
              },
            ].map((s) => (
              <a
                key={s.href}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl grid place-items-center transition-all duration-300 hover:translate-y-[-4px] hover:scale-110 group"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "2px solid rgba(255,107,53,0.3)",
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill={s.color}>
                  <path d={s.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Pages */}
        <div>
          <h4
            className="text-[0.78rem] font-[800] tracking-[0.5px] uppercase mb-[14px]"
            style={{ color: "#ff9a00" }}
          >
            📄 Pages
          </h4>
          <ul className="space-y-2">
            {footerPages.map((link) => (
              <li key={link.label}>
                {link.href.startsWith("/") ? (
                  <Link
                    href={link.href}
                    className="text-[0.81rem] text-[#888] hover:text-[#ff6b35] transition-colors font-[600]"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    href={link.href}
                    className="text-[0.81rem] text-[#888] hover:text-[#ff6b35] transition-colors font-[600]"
                  >
                    {link.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4
            className="text-[0.78rem] font-[800] tracking-[0.5px] uppercase mb-[14px]"
            style={{ color: "#ff9a00" }}
          >
            ⚡ Services
          </h4>
          <ul className="space-y-2">
            {footerServices.map((link) => (
              <li key={link.label}>
                {link.href.startsWith("/") ? (
                  <Link
                    href={link.href}
                    className="text-[0.81rem] text-[#888] hover:text-[#ff6b35] transition-colors font-[600]"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    href={link.href}
                    className="text-[0.81rem] text-[#888] hover:text-[#ff6b35] transition-colors font-[600]"
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
          <h4
            className="text-[0.78rem] font-[800] tracking-[0.5px] uppercase mb-[14px]"
            style={{ color: "#ff9a00" }}
          >
            📞 Get in Touch
          </h4>
          <div className="space-y-4 text-sm text-[#888]">
            <div className="flex items-center gap-3">
              <Mail size={16} className="text-[#ff6b35] shrink-0" />
              <span className="text-[0.81rem] font-[600] break-all">contact.businessvolunteers@gmail.com</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={16} className="text-[#ff6b35] shrink-0" />
              <span className="text-[0.81rem] font-[600]">+91 85869 89832</span>
            </div>
            <div className="flex items-start gap-3">
              <MapPin size={16} className="text-[#ff6b35] shrink-0 mt-1" />
              <span className="text-[0.81rem] font-[600]">Noida Sec 62, Noida 201309, UP, India</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div
        className="flex flex-col sm:flex-row justify-between items-center gap-2 pt-[22px] text-[0.72rem] sm:text-[0.77rem] text-[#666] font-[700] text-center"
        style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
      >
        <p>
          © {new Date().getFullYear()} Business Volunteers. All rights reserved.
        </p>
        <p>Made with ❤️ in India — Trusted by 2,193+ Clients</p>
      </div>
    </footer>
  );
}
