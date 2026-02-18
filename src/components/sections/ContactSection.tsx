"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { Send } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green/10 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(0,224,90,0.04),_transparent_60%)]" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <SectionHeading title="Let's Create Together" subtitle="Contact" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <form className="glass-card p-8 space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs text-gray-600 mb-2 uppercase tracking-wider">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm placeholder:text-gray-700 focus:outline-none focus:border-green/40 focus:shadow-[0_0_15px_rgba(0,224,90,0.1)] transition-all"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-600 mb-2 uppercase tracking-wider">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm placeholder:text-gray-700 focus:outline-none focus:border-green/40 focus:shadow-[0_0_15px_rgba(0,224,90,0.1)] transition-all"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs text-gray-600 mb-2 uppercase tracking-wider">
                Service
              </label>
              <select className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-gray-400 text-sm focus:outline-none focus:border-green/40 transition-all appearance-none">
                <option value="">Select a service</option>
                <option value="social">Social Media Management</option>
                <option value="web">Website Development</option>
                <option value="branding">Logo &amp; Branding</option>
                <option value="ads">Ads Management</option>
                <option value="design">Graphic Design</option>
                <option value="video">Video Editing</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-xs text-gray-600 mb-2 uppercase tracking-wider">
                Message
              </label>
              <textarea
                rows={4}
                placeholder="Tell us about your project..."
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm placeholder:text-gray-700 focus:outline-none focus:border-green/40 focus:shadow-[0_0_15px_rgba(0,224,90,0.1)] transition-all resize-none"
              />
            </div>
            <button
              type="submit"
              data-cursor-hover
              className="w-full py-4 bg-green text-black rounded-xl font-bold text-base flex items-center justify-center gap-2 hover:shadow-[0_0_40px_rgba(0,224,90,0.4)] hover:scale-[1.02] transition-all duration-300"
            >
              <Send size={18} />
              Send Message
            </button>
          </form>

          {/* Social Icons */}
          <div className="flex flex-wrap justify-center gap-6 mt-12">
            {[
              {
                href: "https://www.facebook.com/people/Business-Volunteers/61579138254807/?rdid=i4EyO8xizvqVtNrE&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1YBYLsan5L%2F",
                color: "#1877F2",
                path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
              },
              {
                href: "https://www.instagram.com/thebusinessvolunteers/",
                color: "#E4405F",
                path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
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
              {
                href: "https://x.com/Business8920",
                color: "#FFFFFF",
                path: "M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z",
              },
              {
                href: "https://in.pinterest.com/businessvolunteers/",
                color: "#E60023",
                path: "M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.399.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.951-7.252 4.173 0 7.41 2.967 7.41 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.367 18.62 0 12.017 0z",
              },
              {
                href: "https://share.google/eXJq4T9BpRIu0eWZY",
                color: "#34A853",
                path: "M12 0C7.31 0 3.5 3.81 3.5 8.5c0 5.41 7.96 14.94 8.16 15.18.08.09.19.14.3.14s.22-.05.3-.14c.2-.24 8.16-9.77 8.16-15.18C20.5 3.81 16.69 0 12 0zm0 11.5c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z",
              },
            ].map((social) => (
              <motion.a
                key={social.href}
                href={social.href}
                target="_blank"
                whileHover={{ scale: 1.1, y: -2 }}
                className="group relative"
              >
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center transition-all duration-300 group-hover:bg-white/10 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="transition-colors duration-300"
                    style={{ color: social.color }}
                  >
                    <path d={social.path} />
                  </svg>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Floating WhatsApp */}
      <motion.a
        href="https://wa.me/918586989832"
        target="_blank"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 3, type: "spring" }}
        className="fixed bottom-8 right-8 w-14 h-14 bg-green rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(0,224,90,0.4)] z-40 hover:scale-110 transition-transform"
        data-cursor-hover
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="black">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.128.558 4.122 1.527 5.854L.058 23.606a.5.5 0 00.612.611l5.742-1.465A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.943 0-3.757-.57-5.28-1.552l-.367-.224-3.407.87.887-3.395-.24-.379A9.94 9.94 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z" />
        </svg>
      </motion.a>
    </section>
  );
}
