"use client";


import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import { blogPosts } from "@/data/blogs";
import { ArrowRight, Calendar } from "lucide-react";

export default function BlogPage() {
  return (
    <section className="relative min-h-screen py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,107,53,0.06),_transparent_60%)]" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <SectionHeading title="Our Blog" subtitle="Insights & Tips" />

        <div className="flex flex-col gap-6">
          {blogPosts.map((post, i) => (
            <div key={post.slug}>
              <Link href={`/blog/${post.slug}`} className="block group">
                <div className="warm-card p-8 sm:p-10 transition-all duration-300">
                  <div className="flex items-center gap-2 text-[#999] text-xs mb-4">
                    <Calendar size={14} className="text-[#ff6b35]" />
                    <span className="font-[600]">{post.date}</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-[900] text-[#1a1a2e] mb-3 group-hover:text-[#ff6b35] transition-colors duration-300">
                    {post.title}
                  </h2>

                  <p className="text-[#888] text-[0.88rem] font-[600] leading-relaxed mb-6">
                    {post.excerpt}
                  </p>

                  <span className="inline-flex items-center gap-2 text-[#ff6b35] text-sm font-[800] group-hover:gap-3 transition-all duration-300">
                    Read Article
                    <ArrowRight
                      size={16}
                      className="group-hover:translate-x-1 transition-transform duration-300"
                    />
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
