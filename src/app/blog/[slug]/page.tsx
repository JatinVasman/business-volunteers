"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { blogPosts } from "@/data/blogs";
import { ArrowLeft, Calendar, Globe, Phone } from "lucide-react";

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <section className="relative min-h-screen py-32 overflow-hidden">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h1 className="font-heading text-4xl font-bold text-white mb-4">
            Post Not Found
          </h1>
          <p className="text-gray-400 mb-8">
            The blog post you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-green font-semibold hover:gap-3 transition-all"
          >
            <ArrowLeft size={16} />
            Back to Blog
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="relative min-h-screen py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(0,224,90,0.04),_transparent_60%)]" />

      <div className="max-w-3xl mx-auto px-6 relative z-10">
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-gray-400 text-sm hover:text-green hover:gap-3 transition-all duration-300 mb-10"
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
          <div className="flex items-center gap-2 text-gray-500 text-xs mb-5">
            <Calendar size={14} className="text-green/60" />
            <span>{post.date}</span>
          </div>

          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            {post.title}
          </h1>

          <div className="w-16 h-[2px] bg-gradient-to-r from-green to-green-light mb-10" />
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
              className="text-gray-300 text-base sm:text-lg leading-relaxed"
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
          className="mt-14 glass-card p-8 flex flex-col sm:flex-row items-center gap-6"
        >
          <div className="flex-1">
            <h3 className="font-heading text-xl font-bold text-white mb-2">
              Ready to grow your business?
            </h3>
            <p className="text-gray-400 text-sm">
              Get in touch with Business Volunteers today.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="https://businessvolunteers.online"
              target="_blank"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-green/10 border border-green/20 rounded-xl text-green text-sm font-semibold hover:bg-green/20 transition-all"
            >
              <Globe size={16} />
              Website
            </a>
            <a
              href="tel:+918586989832"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-green text-black rounded-xl text-sm font-bold hover:shadow-[0_0_30px_rgba(0,224,90,0.4)] transition-all"
            >
              <Phone size={16} />
              Contact Us
            </a>
          </div>
        </motion.div>

        {/* More posts */}
        <div className="mt-14 pt-10 border-t border-white/5">
          <h3 className="font-heading text-lg font-semibold text-white mb-6">
            More Articles
          </h3>
          <div className="grid gap-4">
            {blogPosts
              .filter((p) => p.slug !== post.slug)
              .slice(0, 3)
              .map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors"
                >
                  <div className="w-2 h-2 rounded-full bg-green/40 group-hover:bg-green transition-colors flex-shrink-0" />
                  <span className="text-gray-300 text-sm group-hover:text-white transition-colors">
                    {p.title}
                  </span>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
