"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import { blogPosts } from "@/data/blogs";
import { ArrowRight, Calendar } from "lucide-react";

export default function BlogPage() {
  return (
    <section className="relative min-h-screen py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(0,224,90,0.06),_transparent_60%)]" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <SectionHeading title="Our Blog" subtitle="Insights & Tips" />

        <div className="grid gap-6">
          {blogPosts.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <Link href={`/blog/${post.slug}`} className="block group">
                <div className="glass-card p-8 sm:p-10 transition-all duration-300 group-hover:border-green/30 group-hover:shadow-[0_0_40px_rgba(0,224,90,0.08)]">
                  <div className="flex items-center gap-2 text-gray-500 text-xs mb-4">
                    <Calendar size={14} className="text-green/60" />
                    <span>{post.date}</span>
                  </div>

                  <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-3 group-hover:text-green transition-colors duration-300">
                    {post.title}
                  </h2>

                  <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6">
                    {post.excerpt}
                  </p>

                  <span className="inline-flex items-center gap-2 text-green text-sm font-semibold group-hover:gap-3 transition-all duration-300">
                    Read Article
                    <ArrowRight
                      size={16}
                      className="group-hover:translate-x-1 transition-transform duration-300"
                    />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
