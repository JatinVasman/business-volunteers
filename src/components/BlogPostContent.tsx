"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Calendar, Phone, ArrowRight } from "lucide-react";
import type { BlogPost } from "@/data/blogs";

export default function BlogPostContent({
  post,
  relatedPosts,
}: {
  post: BlogPost;
  relatedPosts: BlogPost[];
}) {
  return (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,107,53,0.06),_transparent_60%)]" />

      <div className="max-w-3xl mx-auto px-6 relative z-10">
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[0.82rem] font-[700] text-[#ff6b35] hover:gap-3 transition-all duration-300 mb-10"
          >
            <ArrowLeft size={16} />
            Back to Blog
          </Link>
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-2 text-[#999] text-xs mb-5">
            <Calendar size={14} className="text-[#ff6b35]" />
            <span className="font-[600]">{post.date}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-[900] text-[#1a1a2e] mb-4 leading-tight">
            {post.title}
          </h1>

          <div
            className="w-16 h-[3px] rounded-full mb-10"
            style={{ background: "linear-gradient(90deg, #ff6b35, #ff9a00)" }}
          />
        </motion.div>

        {/* Content */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6"
        >
          {post.content.map((paragraph, i) => (
            <p
              key={i}
              className="text-[#555] text-[0.92rem] font-[600] leading-[1.85]"
            >
              {paragraph}
            </p>
          ))}
        </motion.article>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 sm:mt-14 p-5 sm:p-8 rounded-[22px] flex flex-col sm:flex-row items-center gap-4 sm:gap-6 relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #1a1a2e, #2d1b4e)",
            border: "2px solid rgba(255,107,53,0.2)",
          }}
        >
          <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-[#ff6b35] via-[#ff9a00] to-[#00d084]" />
          <div className="flex-1">
            <h3 className="text-xl font-[900] text-white mb-2">
              Ready to grow your business?
            </h3>
            <p className="text-[0.85rem] font-[600] text-[#ccc]">
              Get in touch with Business Volunteers today.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="https://wa.me/918586989832?text=Hi%20BV!%20I%20need%20digital%20marketing%20for%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              data-cursor-hover
            >
              💬 WhatsApp Us
            </a>
            <a
              href="tel:+918586989832"
              className="inline-flex items-center gap-2 px-5 py-[10px] rounded-[25px] text-[0.82rem] font-[800] text-white transition-all duration-300 hover:scale-[1.05]"
              style={{
                background: "rgba(255,255,255,0.15)",
                border: "2px solid rgba(255,255,255,0.3)",
              }}
              data-cursor-hover
            >
              <Phone size={16} />
              Contact Us
            </a>
          </div>
        </motion.div>

        {/* More posts */}
        <div className="mt-14 pt-10" style={{ borderTop: "2px solid rgba(0,0,0,0.06)" }}>
          <h3 className="text-lg font-[800] text-[#1a1a2e] mb-6">
            More Articles
          </h3>
          <div className="flex flex-col gap-3">
            {relatedPosts.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="group flex items-center gap-4 p-4 rounded-[14px] transition-all duration-300 hover:bg-[rgba(255,107,53,0.04)]"
                style={{ border: "2px solid rgba(0,0,0,0.06)" }}
              >
                <div className="w-2 h-2 rounded-full shrink-0 transition-colors"
                  style={{ background: "rgba(255,107,53,0.3)" }}
                />
                <span className="text-[0.88rem] font-[700] text-[#555] group-hover:text-[#ff6b35] transition-colors">
                  {p.title}
                </span>
                <ArrowRight size={14} className="ml-auto text-[#ccc] group-hover:text-[#ff6b35] transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
