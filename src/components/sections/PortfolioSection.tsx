"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import { ExternalLink } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Project {
  name: string;
  category: string;
  image: string;
  link: string;
}

const projects: Project[] = [
  {
    name: "Decor by Sonya Mehta",
    category: "Interior Design",
    image: "/Website/Sonya-decor.webp",
    link: "https://decorembysonyamehta.com/",
  },
  {
    name: "Vasoo Bamboo Arts",
    category: "Crafts & Artisan",
    image: "/Website/vasoobamboo.webp",
    link: "https://www.vasoobambooarts.in/",
  },
  {
    name: "Vihaara",
    category: "Real Estate",
    image: "/Website/vihara.webp",
    link: "https://vihaara.org/",
  },
  {
    name: "Layers Clothing",
    category: "Clothing",
    image: "/Website/layers.webp",
    link: "https://www.layersclothing.in/",
  },
  {
    name: "Daily Mob Design",
    category: "Advertising Agency",
    image: "/Website/dailymobdesign.webp",
    link: "https://dailymobdesign.com/",
  },
];

export default function PortfolioSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = containerRef.current?.querySelectorAll(".portfolio-card");
      if (!cards) return;

      gsap.fromTo(
        cards,
        { opacity: 0, y: 60, scale: 0.92 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            once: true,
          },
        },
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="portfolio" className="relative py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeading title="Websites We've Built" subtitle="Our Work" />

        <p className="text-center text-gray-500 text-base max-w-2xl mx-auto -mt-8 mb-16">
          Beautifully crafted websites that combine stunning design with
          seamless functionality for our clients.
        </p>

        <div
          ref={containerRef}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <a
              key={project.name}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio-card glass-card group overflow-hidden block"
              data-cursor-hover
            >
              {/* Screenshot */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                {/* External link badge */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-green/90 flex items-center justify-center text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
                  <ExternalLink size={16} />
                </div>

                {/* Project name overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="font-heading text-xl font-bold text-white group-hover:text-green transition-colors duration-300">
                    {project.name}
                  </h3>
                </div>
              </div>

              {/* Bottom bar */}
              <div className="px-5 py-4 flex items-center justify-between">
                <span className="text-xs text-gray-500 uppercase tracking-wider font-medium">
                  {project.category}
                </span>
                <span className="text-xs text-green flex items-center gap-1 group-hover:underline transition-colors">
                  Visit Site <ExternalLink size={12} />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
